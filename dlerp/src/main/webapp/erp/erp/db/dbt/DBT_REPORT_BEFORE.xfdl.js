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
            this.set_titletext("권역별 하자 미처리현황(3년미만)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBTPR_REPORT_BEFORE_SELECT</Col></Row><Row><Col id=\"TARGET\">selectHeader</Col><Col id=\"SP\">DBTPR_REPORT_BEFORE_SELECT_HEADER</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj.set_enableevent("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_BUNSO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BUNSO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_WORK","staDT_WORK:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.calDT_WORK","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DBT_REPORT_BEFORE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	//this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.calDT_WORK = this.divSearch.form.calDT_WORK;
        	this.dxGrid = this.divData.form.objGrid;

        	//작업일자 셋팅
        	var today = this.gfnGetDate();
        	this.calDT_WORK.set_value(today);
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBT_REPORT_BEFORE");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)
        	this.grdFormat = this.dxGrid.getCurFormatString();

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_WORK", "string");
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

        	this.dsHeader.clearData();
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "DT_WORK", this.dsSearch.getColumn(0,"DT_WORK"));

        	var strSvcId    = "selectHeader";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectHeader=dsSelect";
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

        /*
         *	조회데이터 조회 버튼
         */
        this.fnSelectData = function() {

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
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"DT_WORK"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.calDT_WORK.setFocus();
        			return false;
        		}
        		this.gfnAlert("기준일자를 입력하셔야 합니다.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
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
        	if (svcID == "selectHeader") {
        		this.fnSetGridColunm();
        	} else if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		trace(this.dsList.saveXML());
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

        this.fnSetGridColunm = function (){
        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	// 그리드 초기화
        	this.dxGrid.set_formats(this.grdFormat);

        	// 동적으로 데이터셋, 그리드 컬럼 추가
        	var ncol2 = 1;
        	trace("this.dsHeader.rowcount="+this.dsHeader.saveXML());
        	for( var i = 0; i < this.dsHeader.rowcount; i++ ){
        		var objColinfo = new ColumnInfo() ;
        		objColinfo.set_type( "BIGDECIMAL" );
        		objColinfo.set_size( 256 );

        		var nIndex = this.dsList.addColumnInfo(this.dsHeader.getColumn(i,"CD_SITE"),objColinfo);

        		var ncol1 = this.dxGrid.appendContentsCol();

        		this.dxGrid.setFormatColProperty(ncol1, "size", 120);
        		this.dxGrid.setCellProperty("head", ncol1, "text", this.dsHeader.getColumn(i,"DS_BUNSO"));
        		this.dxGrid.setCellProperty("head", (ncol1+ncol2), "text", this.dsHeader.getColumn(i,"DS_SITE"));
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + this.dsHeader.getColumn(i,"CD_SITE"));
        		this.dxGrid.setCellProperty("summ", ncol1 , "text", "expr:dataset.getSum('" + this.dsHeader.getColumn(i,"CD_SITE") + "')");
        		ncol2++;
        	}

        	for( var i = 8; i < this.dxGrid.getCellCount("head"); i++ ){
        		//trace(i+"셀" +"== " + this.dxGrid.getCellCount("head"));
        		var colspan = 0;
        		for(var j = (i + 1); j < this.dxGrid.getCellCount("body"); j++) {
        			//trace(" getCellText === " + this.dxGrid.getCellText(-1,i) + ", " + this.dxGrid.getCellText(-1,j));
        			if(this.dxGrid.getCellText(-1,i) == this.dxGrid.getCellText(-1,j) ){
        				colspan++;
        			} else {
        				break;
        			}
        		}

        		if(colspan > 0) {
        			//trace("i = " +i+", colspan = " + colspan +" , cols = " + cols + ", col Index = " +this.dxGrid.getCellProperty("head", i, "col")) ;
        			var startCol = parseInt(this.dxGrid.getCellProperty("head", i, "col"));
        			var endCol = startCol + colspan;
        			var rtn = this.dxGrid.mergeContentsCell("head", 0, startCol, 0, endCol, i, false);

        			if(rtn > -1) {

        			}
        		}

        	}

        	this.dsList.set_enableevent(true);
        	this.dxGrid.set_enableredraw(false);
        	this.fnSelectData();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DBT_REPORT_BEFORE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
