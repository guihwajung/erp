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
            this.set_titletext("계열사 인원현황 LIST");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_AFFILIATE_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DAAPR_AFFILIATE_LIST_RPT_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_AFFILIATE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("기준일자");
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_AFFILIATE","staDT_AFFILIATE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("false");
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
            obj = new BindItem("item0","divSearch.form.ctclDT_AFFILIATE","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAA_AFFILIATE_LIST.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.ctclDT_AFFILIATE.set_value(this.gfnGetDate());

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Excel.set_enable(true);
        	this.FormBtns.Reset.set_enable(true);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclDT_AFFILIATE = this.divSearch.form.ctclDT_AFFILIATE; 		// 기준일자

        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;							// 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;							// 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_AFFILIATE_LIST");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_AFFILIATE", "string");

        };

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

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_AFFILIATE_LIST");

        	this.dsSelect.setColumn(0, "DT_AFFILIATE", this.ctclDT_AFFILIATE.value);

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
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
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
        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("DT_AFFILIATE", "string");

        	this.dsReport.clearData();
        	this.dsReport.addRow();

        	this.dsReport.setColumn(0, "DT_AFFILIATE", this.ctclDT_AFFILIATE.value);

        	var strSvcId    = "report";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "report=dsReport";
        	var outData     = "dsList2=report0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report=dsReport";
        	var reportpath  = "/da/daa/DAA_AFFILIATE_LIST.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };
        /*
         *	리셋 버튼
         */
        this.fnReset = function() {
        	this.ctclDT_AFFILIATE.set_value("");

        	this.fnSearchInit();
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	if(this.gfnIsNull(this.divSearch.form.ctclDT_AFFILIATE.value)){
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclDT_AFFILIATE.setFocus();
        		}
        		this.gfnAlert("기준일자를 입력하세요.", "fnVaidateCallback");
        	}
        	return true;
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
        		var objDs = new Dataset();
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSetButton();


        		var gbCnt1 = this.dsList.getCaseCount( "DS_GUBUN == 'A'" );
        		var gbCnt2 = this.dsList.getCaseCount( "DS_GUBUN == 'B'" );

        		var dsSum1 = "소계( "+ gbCnt1 +" 개사 )";
        		var dsSum2 = "소계( "+ gbCnt2 +" 개사 )";

        		//소계
        		//this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body","DS_COMPANY"), "text","expr:DS_COMPANY==null?DS_GUBUN=='A'?'소계1( "+gbCnt1+" 개사 )':'소계2( "+ gbCnt2 +" 개사 )':DS_COMPANY");
        		this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body","DS_COMPANY"), "text","expr:DS_COMPANY==null?DS_GUBUN=='A'?'"+dsSum1+"':'"+dsSum2+"':DS_COMPANY");

        		this.dxGrid.setCellProperty("summary", 5, "textAlign", "center");
        		this.dxGrid.setCellProperty("summary", 5, "text", "총계( "+(gbCnt1+gbCnt2)+" 개사)");


        /*
        		//연번
        		var rowCnt = this.dsList.rowcount;
        		var nRowCnt = 1;
        		this.dsList.set_enableevent(false);
        		for(var i = 0 ; i < rowCnt; i++){
        			if(!this.gfnIsNull(this.dsList.getColumn(i, "DS_CORP"))){
        				this.dsList.setColumn(i, "ROWNUM", nRowCnt);
        				nRowCnt++;
        			}
        		}
        		this.dsList.set_enableevent(true);

        		//소계
        		this.divData.form.objGrid.setCellProperty("body", this.divData.form.objGrid.getBindCellIndex("body","DS_CORP"), "textAlign","center");
        		this.divData.form.objGrid.setCellProperty("body", this.divData.form.objGrid.getBindCellIndex("body","DS_CORP"), "text","expr:DS_CORP==null?GUBUN==1?'소계( "+gbCnt1+" 개사 )':'소계( "+gbCnt2+" 개사 )':DS_CORP");

        		//총계
        		this.divData.form.objGrid.setCellProperty("summary", 4, "textAlign", "center");
        		this.divData.form.objGrid.setCellProperty("summary", 4, "text", "총계( "+(gbCnt1+gbCnt2)+" 개사)");
        		*/
        	}else if(svcID == "report"){
        		trace(this.dsList2.saveXML());
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DAA_AFFILIATE_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
