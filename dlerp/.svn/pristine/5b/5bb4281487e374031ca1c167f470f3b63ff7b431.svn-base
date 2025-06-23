(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DBT_CAUSESTATE");
            this.set_titletext("하자유형별현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_enableevent("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBTPR_CAUSESTATE_SELECT</Col></Row><Row><Col id=\"TARGET\">selectHeader</Col><Col id=\"SP\">DBSPR_CT_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GBN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">진행</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">종료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("접수일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_FROM","staDT:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","calDT_FROM:0.0","staDT:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_TO","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_UMGB","calDT_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("진행구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_GBN","staTY_UMGB:0.0","10.0","130","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_GBN");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new BindItem("item2","divSearch.form.calDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboTY_GBN","value","dsSearch","TY_GBN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DBT_CAUSESTATE.xfdl", function() {
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
        	//그리드 헤더용 조회
        	this.fnSelectHeader();

        	this.dsSearch.setColumn(0, "TY_GBN", "0");	//진행구분(전체)
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDetialView = this.gfnFormButtonAdd("DetialView", "fnDetialView");	//현장별상세현황
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.calDT_FROM    = this.divSearch.form.calDT_FROM;
        	this.calDT_TO      = this.divSearch.form.calDT_TO;
        	this.cboTY_GBN     = this.divSearch.form.cboTY_GBN;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBT_CAUSESTATE");
        	this.dxGrid.set_selecttype("cell");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("FROMDATE" , "string");
        	this.dsSelect.addColumn("TODATE"   , "string");
        	this.dsSelect.addColumn("TY_GBN"   , "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         *	입력 버튼
         */
        this.fnAdd = function() {};

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {};

        /*
         *	저장 버튼
         */
        this.fnSave = function() {};

         /*
          *	조회 버튼
          */
        this.fnSelect = function () {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "FROMDATE" , this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "TODATE"	  , this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "TY_GBN"	  , this.dsSearch.getColumn(0, "TY_GBN"));

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
        	var validate = true;

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))){
        		if(this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_FROM"), this.dsSearch.getColumn(0, "DT_TO")) <= -1){
        			this.gfnAlert("접수일의 범위가 올바르지 않습니다.");
        			this.calDT_FROM.setFocus();
        			validate = false;
        		}
        	}

        	return validate;
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "selectHeader") { //그리드 헤더
        		this.fnSetGridColunm();
        	} else  {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
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
        /*
         * 상세현황 버튼 이벤트
         */
        this.fnDetialView = function() {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBT_CAUSESTATESITE", "", param);

        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        //그리드 컬럼 셋팅
        this.fnSetGridColunm = function (){
        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        /*	var colCnt = this.dxGrid.getCellCount("body");

        	var delCnt = 0, delIdx = 0;
        	// 추가된 컬럼 삭제 처리
        	for (var i = 0; i < colCnt;i++){
        		if( this.dsList.getColID(i).search("_JEOBSU") > -1 || this.dsList.getColID(i).search("_JOBEND") > -1){
        			delIdx = ((colCnt-1)-delCnt);
        			var delccol = this.dxGrid.deleteContentsCol("body", delIdx);
        			delCnt++;
        		}
        	}
        */
        	var apdCol = 0, headCol = 0, colSize = 80;
        	//접수건 셋팅
        	for(var i=0;i<this.dsHeader.rowcount;i++){
        		var colNo = (i+1).toString().padLeft(3, "0");

        		apdCol = this.dxGrid.appendContentsCol();

        		headCol = (apdCol+1) + i;

        		this.dxGrid.setFormatColProperty(apdCol, "size", colSize);
        		this.dxGrid.setCellProperty("head", apdCol	, "text", "접수");											//헤더 상단
        		this.dxGrid.setCellProperty("head", headCol	, "text", this.dsHeader.getColumn(i, "DS_CODE"));			//헤더 하단
        		this.dxGrid.setCellProperty("body", apdCol	, "text", "bind:" + "CNT_"+colNo+"_JEOBSU");				//컬럼 바인딩
        		this.dxGrid.setCellProperty("summ", apdCol	, "displaytype", "number");									//합계 타입
        		this.dxGrid.setCellProperty("summ", apdCol	, "text", "expr:dataset.getSum('CNT_"+colNo+"_JEOBSU')");	//합계 텍스트
        	}

        	//접수건 계 추가
        	apdCol = this.dxGrid.appendContentsCol();
        	this.dxGrid.setFormatColProperty(apdCol, "size", colSize);
        	this.dxGrid.setCellProperty("head", apdCol 	 , "text", "접수");
        	this.dxGrid.setCellProperty("head", headCol+2, "text", "계");	//계 헤더 추가로 +2
        	this.dxGrid.setCellProperty("body", apdCol 	 , "text", "bind:CNT_TOTAL_JEOBSU");
        	this.dxGrid.setCellProperty("summ", apdCol 	 , "displaytype", "number");
        	this.dxGrid.setCellProperty("summ", apdCol 	 , "text", "expr:dataset.getSum('CNT_TOTAL_JEOBSU')");

        	headCol = headCol + 2;
        	//처리건 셋팅
        	for(var i=0;i<this.dsHeader.rowcount;i++){
        		var colNo = (i+1).toString().padLeft(3, "0");

        		apdCol = this.dxGrid.appendContentsCol();

        		this.dxGrid.setFormatColProperty(apdCol, "size", colSize);
        		this.dxGrid.setCellProperty("head", apdCol	 , "text", "처리");											//헤더 상단
        		this.dxGrid.setCellProperty("head", headCol+2, "text", this.dsHeader.getColumn(i, "DS_CODE"));			//헤더 하단
        		this.dxGrid.setCellProperty("body", apdCol	 , "text", "bind:" + "CNT_"+colNo+"_JOBEND");				//컬럼 바인딩
        		this.dxGrid.setCellProperty("summ", apdCol	 , "displaytype", "number");								//합계 타입
        		this.dxGrid.setCellProperty("summ", apdCol	 , "text", "expr:dataset.getSum('CNT_"+colNo+"_JOBEND')");	//합계 텍스트

        		headCol = headCol + 2;
        	}

        	//처리건 계 추가
        	apdCol = this.dxGrid.appendContentsCol();
        	this.dxGrid.setFormatColProperty(apdCol, "size", colSize);
        	this.dxGrid.setCellProperty("head", apdCol   , "text", "처리");
        	this.dxGrid.setCellProperty("head", headCol+2, "text", "계");
        	this.dxGrid.setCellProperty("body", apdCol   , "text", "bind:CNT_TOTAL_JOBEND");
        	this.dxGrid.setCellProperty("summ", apdCol   , "displaytype", "number");
        	this.dxGrid.setCellProperty("summ", apdCol   , "text", "expr:dataset.getSum('CNT_TOTAL_JOBEND')");

        	//처리율(%) 추가
        	apdCol = this.dxGrid.appendContentsCol();
        	this.dxGrid.setFormatColProperty(apdCol, "size", colSize);
        	this.dxGrid.setCellProperty("head", apdCol   , "text", "처리");
        	this.dxGrid.setCellProperty("head", headCol+4, "text", "처리율(%)");	//계 헤더 추가로 +2
        	this.dxGrid.setCellProperty("body", apdCol   , "displaytype", "mask");
        	this.dxGrid.setCellProperty("body", apdCol   , "text", "bind:PER_TOTAL_JOBEND");
        	this.dxGrid.setCellProperty("body", apdCol   , "maskeditformat", "#,##0.00");
        	this.dxGrid.setCellProperty("summ", apdCol   , "displaytype", "mask");
        	this.dxGrid.setCellProperty("summ", apdCol   , "maskeditformat", "#,##0.00");
        	this.dxGrid.setCellProperty("summ", apdCol   , "text", "expr:(dataset.getSum('CNT_TOTAL_JOBEND') / dataset.getSum('CNT_TOTAL_JEOBSU')) *100");

        	var startCol = this.gfnGetHeadCellIndex(this.dxGrid, "DS_SITE")+1;			//현장명 셀인텍스 + 1
        	var endCol   = this.gfnGetHeadCellIndex(this.dxGrid, "CNT_TOTAL_JEOBSU");	//접수 계 셀인덱스

        	//첫번째 헤더셀 병합 처리
        	this.dxGrid.mergeContentsCell("head", 0, startCol, 0, endCol, startCol, false);		//접수
        	this.dxGrid.mergeContentsCell("head", 0, endCol+1, 0, apdCol, startCol+1, false);	//처리

        	this.dxGrid.set_enableredraw(true);
        	this.dsList.set_enableevent(true);
        };

        //그리드 헤더용 조회
        this.fnSelectHeader = function ()
        {
        	this.dsSelectHeader = new Dataset();

        	var strSvcId    = "selectHeader";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectHeader=dsSelectHeader";
        	var outData     = "dsHeader=selectHeader0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("onheadclick",this.divData_objGrid_onheadclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DBT_CAUSESTATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
