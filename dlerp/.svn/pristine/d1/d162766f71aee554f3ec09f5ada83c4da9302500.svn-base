(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DGA_EQUIP_DEPT");
            this.set_titletext("사업장(부서)별 비품현황 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DAMPR_EQUIP_DEPT_SELECT</Col><Col id=\"TARGET\">select</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_IN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE_IN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PRODUCT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_IN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_BASE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_IN","staDT_BASE:0.0","10.0","98","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","calDT_IN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("전입법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staccfCD_SITE_IN","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("전입부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE_IN","staccfCD_SITE_IN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ccfCD_SITE_IN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_GUBUN","staTY_GUBUN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PRODUCT","0.0","staDT_BASE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("품명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PRODUCT","staCD_PRODUCT:0.0","staDT_BASE:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODEUP");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_UNIT","ccfCD_PRODUCT:0.0","staDT_BASE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("규격");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_UNIT","staCD_UNIT:0.0","staDT_BASE:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODEUP");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.getSetter("BeforeUserDataSetParam").set("fnGrid_BeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnGrid_AfterCDTextChanged");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.calDT_IN","value","dsSearch","DT_IN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_SITE_IN.form.CDTextBox","value","dsSearch","CD_SITE_IN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfTY_GUBUN.form.CDTextBox","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_UNIT.form.CDTextBox","value","dsSearch","CD_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_SITE_IN.form.DSTextBox","value","dsSearch","DS_SITE_IN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_PRODUCT.form.CDTextBox","value","dsSearch","CD_PRODUCT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAM_EQUIP_DEPT.xfdl", function() {
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

        	//구입일
        	this.calDT_IN.set_value(this.gfnGetDate());
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP) ;
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP) ;


        	//권한셋팅
        	if(this.FormInfo.GR_SEARCH >= 7) {
        		this.ccfCD_SITE_IN.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        		this.ccfCD_SITE_IN.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.ccfCD_CORP.set_enable(false);
        		this.ccfCD_SITE_IN.set_enable(false);
        	}

        	//this.ccfCD_SITE_IN.form.CDTextBox.setFocus();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnHistoryCardPrint = this.gfnFormButtonAdd("HistoryCardPrint", "fnExtBtnEvent", "이력카드출력");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.calDT_IN = this.divSearch.form.calDT_IN;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_SITE_IN = this.divSearch.form.ccfCD_SITE_IN;
        	this.ccfTY_GUBUN = this.divSearch.form.ccfTY_GUBUN;
        	this.ccfCD_PRODUCT = this.divSearch.form.ccfCD_PRODUCT;
        	this.ccfCD_UNIT = this.divSearch.form.ccfCD_UNIT;
        	this.rdoTY_GUBUN = this.divSearch.form.rdoTY_GUBUN;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_SITE_IN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE_IN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfTY_GUBUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfTY_GUBUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_PRODUCT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_PRODUCT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_UNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_UNIT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAM_EQUIP_DEPT");

        // 	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","NO_EQUIPMENT"), "subsumtext", "소계");
        // 	this.dsList.set_keystring("G:TY_GUBUN+CD_PRODUCT");
        // 	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CT_COUNT"), "text", "expr:dataset.getSum('CT_COUNT',dataset.getGroupRangeStart(currow),dataset.getGroupRangeStart(currow)+dataset.getGroupRangeCount(currow))");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_IN", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_SITE_IN", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("CD_PRODUCT", "string");
        	this.dsSelect.addColumn("CD_UNIT", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValid()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "DT_IN", this.dsSearch.getColumn(0, "DT_IN"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_SITE_IN", this.dsSearch.getColumn(0, "CD_SITE_IN"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "CD_PRODUCT", this.dsSearch.getColumn(0, "CD_PRODUCT"));
        	this.dsSelect.setColumn(0, "CD_UNIT", this.dsSearch.getColumn(0, "CD_UNIT"));


        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

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
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        // //	if(!this.fnValidate()) return false;
        //
        //     var inDataVal      = "report=dsReport";
        // 	var reportpathVal  = "/dg/dga/DGA_EQUIP_DEPT.ozr";
        //
        //
        // 	if(this.rdoTY_GUBUN.value == "1" ){           // 전체
        // 		inDataVal      = "report=dsReport";
        // 		reportpathVal  = "/dg/dga/DGA_EQUIP_DEPT.ozr";
        // 	} else if(this.rdoTY_GUBUN.value == "2" ){   // 본사
        // 		inDataVal      = "reportCITE=dsReport";
        // 		reportpathVal  = "/dg/dga/DGA_EQUIP_DEPT.ozr";
        // 	}
        // 		this.dsReport = new Dataset();
        // 		this.dsReport.addColumn("DT_IN", "string");
        // 		this.dsReport.addColumn("CD_SITE_IN", "string");
        // 		this.dsReport.addColumn("CD_PRODUCT", "string");
        // 		this.dsReport.addColumn("CD_UNIT", "string");
        //
        // 		var nrow = this.dsReport.addRow();
        // 		this.dsReport.setColumn(0, "DT_IN", this.calDT_IN.value);
        // 		this.dsReport.setColumn(0, "CD_SITE_IN", this.ccfCD_SITE_IN.form.CDTextBox.value);
        // 		this.dsReport.setColumn(0, "CD_PRODUCT", this.ccfTY_GUBUN.form.CDTextBox.value);
        // 		this.dsReport.setColumn(0, "CD_UNIT", this.ccfCD_UNIT.form.CDTextBox.value);
        //
        // 		var inProc		= "_dsProc";
        // 		//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        // 		var inParam 	= "";						// 필요없는 경우 생략
        // 		var inData      = inDataVal;
        // 		var reportpath  = reportpathVal;
        //
        // 		gfnOpenReport(this, reportpath, inProc, inParam, inData);

        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValid = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.calDT_IN.value))  {
        		validate = false;
        		this.fnValidCallback = function() {
        			this.calDT_IN.setFocus();
        		}
        		this.gfnAlert("기준일자를 입력하세요.", "fnValidCallback");
        		return validate;
        	}

        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false
        		this.fnValidCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("전입법인을 입력하세요.", "fnValidCallback");
        		return validate;
        	}

        // 	if(this.gfnIsNull(this.ccfCD_SITE_IN.form.CDTextBox.value)) {
        // 		validate = false
        // 		this.fnValidCallback = function() {
        // 			this.ccfCD_SITE_IN.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("전입부서를 입력하세요.", "fnValidCallback");
        // 		return validate;
        // 	}


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
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         //코드 파인드
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	switch(id) {
        		case "ccfCD_CORP": //법인
        			break;

        		case "ccfCD_SITE_IN": // 부서
        			var sCD_CORP = this.dsSearch.getColumn(0,"CD_CORP");
        			if (this.gfnIsNull(sCD_CORP)) {
        				this.gfnAlert("법인을 먼저 입력하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "N");
        			break;

        		case "ccfTY_GUBUN": // 구분
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "M1");
        			break;

        		case "ccfCD_PRODUCT": // 품명
        			var sTY_GUBUN = this.dsSearch.getColumn(0,"TY_GUBUN");
        			if (this.gfnIsNull(sTY_GUBUN)) {
        				this.gfnAlert("구분을 먼저 입력하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "M2");
        			dsUserParam.setColumn(nrow, "CD_UPPREFIX", sTY_GUBUN); //구분값
        			break;

        		case "ccfCD_UNIT": // 규격
        			var sCD_PRODUCT = this.dsSearch.getColumn(0,"CD_PRODUCT");
        			if (this.gfnIsNull(sCD_PRODUCT)) {
        				this.gfnAlert("품명을 먼저 입력하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "M3");
        			dsUserParam.setColumn(nrow, "CD_UPPREFIX", sCD_PRODUCT); //품명
        			break;

        		default:
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        		this.ccfCD_SITE_IN.form.fnCodeFindClear();
        	}
        	if(id == "ccfTY_GUBUN"){ //구분
        		this.ccfCD_PRODUCT.form.fnCodeFindClear();
        		this.ccfCD_UNIT.form.fnCodeFindClear();
        	}
        	if(id == "ccfCD_PRODUCT"){ //품명
        		this.ccfCD_UNIT.form.fnCodeFindClear();
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

         /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAM_EQUIP_DEPT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
