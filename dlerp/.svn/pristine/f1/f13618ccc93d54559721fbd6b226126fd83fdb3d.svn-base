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
            this.set_titletext("일반조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHZPR_SLIP_SELECT_STD</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DHAPR_NSLIP_PRINT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_taborder("0");
            obj.set_text("법인코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("FitToContents").set("false");
            obj.getSetter("AutoSet").set("false");
            obj.getSetter("readonly").set("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TRADE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_taborder("1");
            obj.set_text("전표번호");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_TRADE","staCD_TRADE:0.0","10.0","166","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSelect",null,"10.0","52","24.0","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_action");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnRvrsSlip",null,"0","88","26","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("역분개전표");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSlip",null,"0","76","26","93",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("전표조회");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"divData:20","52","27","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.ctxtCD_TRADE","value","dsSearch","CD_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_ISSUESLIP_COMMON_SELECT.xfdl", function() {
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

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_CORP)) {
        		this.dsSearch.setColumn(0, "CD_CORP" , this.getOwnerFrame().CD_CORP);
        		this.ccfCD_CORP.form.fnCodeFindLoad();
        		this.dsSearch.setColumn(0, "CD_TRADE", this.getOwnerFrame().CD_TRADE);

        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSlipSearch     = this.gfnFormButtonAdd("SlipSearch"    , "fnSlipPopup");		//전표조회
        	this.btnRvrsSlipSearch = this.gfnFormButtonAdd("RvrsSlipSearch", "fnSlipPopup");		//역분개전표
        	this.btnReport         = this.gfnFormButtonAdd("Report"        , "fnReport"); 			//전표출력 버튼
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP   = this.divSearch.form.ccfCD_CORP;
        	this.ctxtCD_TRADE = this.divSearch.form.ctxtCD_TRADE;
        	this.dxGrid       = this.divData.form.objGrid;

        	this.btnSlip      = this.divData.form.btnSlip;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_ISSUESLIP_COMMON_SELECT");
        	//this.dxGrid.set_selecttype("cell");

        	this.dxGrid.addEventHandler("oncelldblclick" , this.fnGrid_OnCelldblclick, this);
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP" , "string");
        	this.dsSelect.addColumn("CD_TRADE", "string");

        	// 레포트 조회용
        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_CORP"  , "string");
        	this.dsReport.addColumn("CD_TRADE" , "string");
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
        	this.dsSelect.setColumn(0, "CD_CORP" , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_TRADE", this.dsSearch.getColumn(0, "CD_TRADE"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
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

        /************************************************************************
         * Validate
         ************************************************************************/
         /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

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
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        //그리드 더블클릭 이벤트
        this.fnGrid_OnCelldblclick = function(obj,e){
        	this.btnSlip.click();
        };

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		this.fnButtonCheck();
        		obj.oldrow = -1;
        	}
        };
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

        //취소버튼 클릭
        this.btnCancel_onclick = function(obj,e){
        	this.getParentContext().close();
        };

        //전표조회 팝업 호출
        this.fnSlipPopup = function(obj,e)
        {
        	var cdTrade = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");
        	if((obj.name).indexOf("RvrsSlip") > -1){	//역분개전표
        		cdTrade = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE_RVRS");
        	}

        	if(this.gfnIsNull(cdTrade)){
        		this.gfnAlert(((obj.name).indexOf("RvrsSlip") == -1 ? "전표번호" : "역분개번호" )+"는(은) 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.CD_CORP  = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.CD_TRADE = cdTrade;
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP_STD", "", param);
        };

        this.divSearch_btnSelect_onclick = function(obj,e)
        {
        	this.FormBtns.Select.click();
        };

        //버튼 활성/비활성 공통 처리
        this.fnButtonCheck = function (){
        	this.gfnBtnCheck(this.btnRvrsSlipSearch, this.dsList);	//역분개전표조회
        };


        //전표 출력
        this.fnReport = function (obj,e){

        	var arrCdTrade = [];
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, this.ucFlag) != "#"){
        			arrCdTrade.push(this.dsList.getColumn(i, "CD_TRADE"));
        		}
        	}

        	this.dsReport.clearData();
        	this.dsReport.addRow();

        	this.dsReport.setColumn(0, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsReport.setColumn(0, "CD_TRADE" , arrCdTrade);

        	var inProc		= "_dsProc";
        	var inParam 	= "";
        	var inData      = "report=dsReport";
        	var reportpath  = "/dh/dha/DHA_SLIP_RPT.ozr";

        	//this.gfnGetReportData(this, reportpath, inProc, inParam, inData);
        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSelect.addEventHandler("onclick",this.divSearch_btnSelect_onclick,this);
            this.divData.form.btnRvrsSlip.addEventHandler("onclick",this.fnSlipPopup,this);
            this.divData.form.btnSlip.addEventHandler("onclick",this.fnSlipPopup,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_ISSUESLIP_COMMON_SELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
