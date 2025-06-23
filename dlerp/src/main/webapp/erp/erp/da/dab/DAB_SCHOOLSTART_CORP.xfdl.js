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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectGrHead</Col><Col id=\"SP\">DABPR_GR_HEAD_SCHOOLSTART_CORP_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_SCHOOLSTART_CORP_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"FR_BASE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_BASE_FR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FR_BASE_FR\"/><Col id=\"TO_BASE_FR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_WORK","0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclFR_BASE_FR","staYR_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","ctclFR_BASE_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclTO_BASE_FR","staCD_TILDE:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalYY.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ctclFR_BASE_FR.form.TextBox","value","dsSearch","FR_BASE_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclTO_BASE_FR.form.TextBox","value","dsSearch","TO_BASE_FR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_SCHOOLSTART_CORP.xfdl", function() {
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
        	//this.fnSetHeader();

        	var toDay = this.gfnGetDate().substr(0,4);
        	this.dsSearch.setColumn(0, "FR_BASE_FR", toDay);
        	this.dsSearch.setColumn(0, "TO_BASE_FR", toDay);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSchList = this.gfnFormButtonAdd("btnSchList", "fnSchList"); 	//자녀입학축하금상세조회
        };



        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclFR_BASE_FR = this.divSearch.form.ctclFR_BASE_FR;
        	this.ctclTO_BASE_FR = this.divSearch.form.ctclTO_BASE_FR;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_SCHOOLSTART_CORP");

        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_CellDblclick, this);

        	// row 수정가능 여부
        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSetHead = new Dataset();
        	this.dsSetHead.addColumn("FR_BASE_FR", "string");
        	this.dsSetHead.addColumn("TO_BASE_FR", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("FR_BASE_FR", "string");
        	this.dsSelect.addColumn("TO_BASE_FR", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	// 그리드 헤더 조회후 설정
        	this.fnSetHeader();
        }

        // 그리드 컬럼 조회
        this.fnSetHeader = function() {

        	this.dsSetHead.clearData();
        	this.dsSetHead.addRow();

        	this.dsSetHead.setColumn(0, "FR_BASE_FR", this.dsSearch.getColumn(0, "FR_BASE_FR"));
        	this.dsSetHead.setColumn(0, "TO_BASE_FR", this.dsSearch.getColumn(0, "TO_BASE_FR"));

        	var strSvcId    = "header";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectGrHead=dsSetHead";
        	var outData     = "dsHeader=selectGrHead0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc, false); // 통신방법 정의 [생략가능]
        };

        // 그리드 컬럼 추가
        this.fnSetGridColunm = function ( objDataSet ){

        	//this.dxGrid.set_binddataset(this.dsHeader);

        	var ncol1 = 0;

        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	// 재조회할때 이전 조회한 컬럼정보를 지우고 다시 셋팅함
        	for ( var i =this.dxGrid.getCellCount("body")-1; 1 < i ; i--){
         		if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, i).search("CD_") > -1 ){
         			this.dxGrid.deleteContentsCol("body",i);
         		}
         	}
        	for ( var i =this.dsList.colcount-1; -1 < i ; i--){
        		//trace(i+"=" + this.dsList.getColID(i));
        		if( this.dsList.getColID(i).search("CD_") > -1 ){
        			this.dsList.deleteColumn(i);
        		}
        	}

        	// 그리드 헤더 셋팅(컬럼 추가)
        	for (var i = 0; i < this.dsHeader.rowcount; i++) {

        		var objColinfo = new ColumnInfo() ;
        		objColinfo.set_type( "DOUBLE" );
        		objColinfo.set_size( 256 );

        		this.dsList.addColumnInfo(this.dsHeader.getColumn(i,"CD_CORP"),objColinfo);

        		ncol1 = this.dxGrid.appendContentsCol();
        		this.dxGrid.setFormatColProperty(ncol1, "size", 120);
        		this.dxGrid.setCellProperty("head", ncol1, "text", this.dsHeader.getColumn(i,"DS_CORP") );
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + this.dsHeader.getColumn(i,"CD_CORP"));
        		this.dxGrid.setCellProperty("summ", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("summ", ncol1 , "text", "expr:dataset.getSum('" + this.dsHeader.getColumn(i,"CD_CORP") + "')");
        	}

        	this.dxGrid.set_enableredraw(true);
        	this.dsList.set_enableevent(true);

        };

        this.fnDtSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "FR_BASE_FR", this.dsSearch.getColumn(0, "FR_BASE_FR"));
        	this.dsSelect.setColumn(0, "TO_BASE_FR", this.dsSearch.getColumn(0, "TO_BASE_FR"));

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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
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
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"FR_BASE_FR"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclFR_BASE_FR.form.TextBox.setFocus();
        		}
        		this.gfnAlert("년도를 입력하세요.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"TO_BASE_FR"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclTO_BASE_FR.form.TextBox.setFocus();
        		}
        		this.gfnAlert("년도를 입력하세요.", "fnVaidateCallback");
        	}

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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "header") {
         		trace("fnCallback dsHeader >>>>"+this.dsHeader.saveXML());

        		// 그리드 설정(컬럼추가)
        		this.fnSetGridColunm();

        		// 데이터 조회
        		this.fnDtSelect();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명
        }

        // 그리드 더블클릭 이벤트
        this.fnGrid_CellDblclick = function(obj,e){
        	//var colName = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	//자녀입학축하금상세조회 팝업
        	this.fnSchList();
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

        // 자녀입학축하금상세조회
        this.fnSchList = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};

        	param.FR_BASE_FR = this.dsSearch.getColumn(0, "FR_BASE_FR");
        	param.TO_BASE_FR = this.dsSearch.getColumn(0, "TO_BASE_FR");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_SCHOOLSTART_LIST", "", param);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsHeader.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_SCHOOLSTART_CORP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
