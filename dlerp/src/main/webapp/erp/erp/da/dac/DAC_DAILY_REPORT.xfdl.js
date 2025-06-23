(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAC_DAILY_REPORT");
            this.set_titletext("인원보고서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DACPR_DAILY_REPORT</Col></Row><Row><Col id=\"TARGET\">report2</Col><Col id=\"SP\">DACPR_DAILY_REPORT2</Col></Row><Row><Col id=\"TARGET\">report3</Col><Col id=\"SP\">DACPR_DAILY_REPORT3</Col></Row><Row><Col id=\"TARGET\">report4</Col><Col id=\"SP\">DACPR_DAILY_REPORT4</Col></Row><Row><Col id=\"TARGET\">report5</Col><Col id=\"SP\">DACPR_DAILY_REPORT5</Col></Row><Row><Col id=\"TARGET\">report6</Col><Col id=\"SP\">DACPR_DAILY_REPORT6</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReportParam", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VIEW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("orderPeriod","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("작업일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORK","orderPeriod:0.0","10.0","98","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclDT_WORK","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAC_DAILY_REPORT.xfdl", function() {
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

        	this.fnReset();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnItem1 = this.gfnFormButtonAdd("btnReport2", "fnSelectRpt2");	// 본사및지역본부
        	this.btnItem2 = this.gfnFormButtonAdd("btnReport3", "fnSelectRpt3");	// 현장
        	this.btnItem3 = this.gfnFormButtonAdd("btnReport4", "fnSelectRpt4");	// 영업소
        	this.btnItem4 = this.gfnFormButtonAdd("btnReport5", "fnSelectRpt5");	// 해외사업본부
        	//this.btnItem5 = this.gfnFormButtonAdd("btnReport6", "fnSelectRpt6");	// 레저사업장
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclDT_WORK = this.divSearch.form.ctclDT_WORK;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAC_DAILY_REPORT");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_REPORT", "string");
        	this.dsSelect.addColumn("ID_LOGIN", "string");
        }

        this.fnSetParameterForRpt = function() {
        	this.dsSelectRpt = new Dataset();
        	this.dsSelectRpt.addColumn("DT_REPORT", "string");
        	this.dsSelectRpt.addColumn("ID_LOGIN", "string");
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
            this.dsSelect.setColumn(0, "DT_REPORT", this.ctclDT_WORK.value);
        	this.dsSelect.setColumn(0, "ID_LOGIN", this.AuthClient.ID_USER);

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
         	if(this.dsList.rowcount == 0){
         		this.gfnAlert("조회후 작업하세요");
         		return;
         	}

        	this.fnSelectRpt1();
        };

        /*
         *	초기화 버튼
         */
        this.fnReset  = function() {

        	//작업일자
        	this.ctclDT_WORK.set_value(this.gfnGetDate());

        	//화면 로드시 자동조회
        	this.FormBtns.Select.click();
        }

        // 리포트 출력 전체
        this.fnSelectRpt = function(TY_REPORT) {

        	this.dsSelectRpt = new Dataset();
        	this.dsSelectRpt.addColumn("DT_REPORT", "string");	// 법인코드
        	this.dsSelectRpt.addColumn("ID_LOGIN", "string"); 	// 부서코드
        	this.dsSelectRpt.addColumn("TY_VIEW", "string"); 	// 레포트구분

        	var nrow = this.dsSelectRpt.addRow();

        	this.dsSelectRpt.setColumn(nrow, "DT_REPORT", this.ctclDT_WORK.value);
        	this.dsSelectRpt.setColumn(nrow, "ID_LOGIN", this.AuthClient.ID_USER);

        	this.dsReportParam.setColumn(0, "DT_REPORT", this.ctclDT_WORK.value);
        	this.dsReportParam.setColumn(0, "TY_VIEW", this.gfnNvl(TY_REPORT, "1"));

        	var inProc		= "_dsProc";
        	var inParam 	= "params=dsReportParam";
        	var inData      = "report2=dsSelectRpt report3=dsSelectRpt report4=dsSelectRpt report5=dsSelectRpt report6=dsSelectRpt";
        	var reportpath  = "/da/dac/DAC_DAILY_REPORT.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }

        // 리포트 출력 전체
        this.fnSelectRpt1 = function() {
        	this.fnSelectRpt("1");
        	// DACPR_DAILY_REPORT2 ~ 6
        }

        // 본사 및 지역본부 인원현황 RPT
        this.fnSelectRpt2 = function() {
        	this.fnSelectRpt("2");
        	// DACPR_DAILY_REPORT2

        }
        // 현장 인원현황 RPT
        this.fnSelectRpt3 = function() {
        	this.fnSelectRpt("3");
        	// DACPR_DAILY_REPORT3
        }

        // 영업소 인원현황 RPT
        this.fnSelectRpt4 = function() {
        	this.fnSelectRpt("4");
        	// DACPR_DAILY_REPORT4
        }

        // 해외사업본부 인원현황 RPT
        this.fnSelectRpt5 = function() {
        	this.fnSelectRpt("5");
        	// DACPR_DAILY_REPORT5
        }

        // 레저사업장 인원현황 RPT (1. 요약보고)
        this.fnSelectRpt6 = function() {
        	this.fnSelectRpt("6");
        	// DACPR_DAILY_REPORT6
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	if(this.gfnIsNull(this.ctclDT_WORK.value)) {
        		this.gfnAlert("작업일자를 입력하세요.");
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.FormBtns.Excel.set_enable(true);

        		//소계
        		this.divData.form.objGrid.setCellProperty("body", this.divData.form.objGrid.getBindCellIndex("body","DS_GUBN"), "textAlign","center");
        		this.divData.form.objGrid.setCellProperty("body", this.divData.form.objGrid.getBindCellIndex("body","DS_GUBN"), "text","expr:DS_GUBN==null?'소계('+CNT_DEPT+')':DS_GUBN");

        		//총계
        		this.divData.form.objGrid.setCellProperty("summary", 4, "textAlign","center");
        		this.divData.form.objGrid.setCellProperty("summary",4,"text","총계");


        	} else if(svcID == "selectRpt") {
        	}
        	this.fnSetButton();
        }
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

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if ( e.oldvalue != e.newvalue ) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_DAILY_REPORT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
