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
            this.set_titletext("퇴직금 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAWPR_RETIRE_LIST_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"FR_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_RETIRE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staFR_RETIRE","0.0","10.0","79.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("퇴직일");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_RETIRE","staFR_RETIRE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTO_RETIRE","ctclFR_RETIRE:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_RETIRE","staTO_RETIRE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
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
            obj = new BindItem("item1","divSearch.form.ctclFR_RETIRE","value","dsSearch","FR_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclTO_RETIRE","value","dsSearch","TO_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAW_RETIRE_LIST.xfdl", function() {
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
        	//this.fnSetCombo();

        	//날짜 from ~ to 셋팅 ( 매월1일 ~ 매월 말일 )
        	var today = this.gfnGetDate().substring(0,6);
        	var endDay = this.gfnGetLastDate(today);
        	this.divSearch.form.ctclFR_RETIRE.set_value(today+"01");
        	this.divSearch.form.ctclTO_RETIRE.set_value(endDay);

        	//조회
        	this.FormBtns.Select.click();
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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ctclFR_RETIRE = this.divSearch.form.ctclFR_RETIRE;
        	this.ctclTO_RETIRE = this.divSearch.form.ctclTO_RETIRE;

        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAW_RETIRE_LIST");
        	//그리드 이벤트
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("FR_RETIRE", "string");
        	this.dsSelect.addColumn("TO_RETIRE", "string");
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
        	this.dsSelect.setColumn(0, "FR_RETIRE", this.dsSearch.getColumn(0, "FR_RETIRE"));
        	this.dsSelect.setColumn(0, "TO_RETIRE", this.dsSearch.getColumn(0, "TO_RETIRE"));

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
        	this.gfnGridAdd(this.dxGrid);
        }
        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
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

        /*
         *	초기화 버튼
         */
        this.fnReset = function(){

        	var divCompArr = this.divSearch.form.components;

        	for( var i=0; i < divCompArr.length; i++){
        		var comp = divCompArr[i];
        		if(comp instanceof nexacro.Div){
        			if(!comp.enable) continue;
        			if(comp.url.indexOf("CodeFind") > 0){
        				comp.form.CDTextBox.set_value("");
        				comp.form.DSTextBox.set_value("");
        				if(this.gfnTypeOf(comp.form.TextBox) == "Edit"){
        					comp.form.TextBox.set_value("");
        				}
        			}else if(comp.url.indexOf("CalYY") > 0 || comp.url.indexOf("CalMM") > 0){
        				comp.form.TextBox.set_value("");
        			}
        		}else if(comp instanceof nexacro.Edit ||
        				comp instanceof nexacro.MaskEdit ||
        				comp instanceof nexacro.Calendar
        		){
        			if(comp.readonly || !comp.enable) continue;
        			comp.set_value("");
        		}else if(comp instanceof nexacro.Combo){
        			if(comp.readonly || !comp.enable) continue;
        			comp.set_index(0);
        		}else if(comp instanceof nexacro.CheckBox){
        			if(comp.readonly || !comp.enable) continue;
        			if(comp.truevalue == "Y"){
        				comp.set_value("N");
        			}else{
        				comp.set_value(false);
        			}
        		}else if(comp instanceof nexacro.Radio){
        			if(comp.readonly || !comp.enable) continue;
        			comp.set_index(0);
        		}
        	}
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	if (this.gfnIsNull(this.ctclFR_RETIRE.value)) {
         		this.ctclFR_RETIRE.setFocus();
         		this.gfnAlert("퇴직시작일을 입력하세요.");
         		return false;
         	}

         	if (this.gfnIsNull(this.ctclTO_RETIRE.value)) {
         		this.ctclTO_RETIRE.setFocus();
         		this.gfnAlert("퇴직 종료일을 입력하세요.");
         		return false;
         	}

        	if (!this.gfnIsNull(this.ctclFR_RETIRE.value) && !this.gfnIsNull(this.ctclTO_RETIRE.value) ) {
        		if ( this.ctclFR_RETIRE.value > this.ctclTO_RETIRE.value ) {
        			this.gfnAlert("퇴직일자가 잘못 입력 되었습니다..");
        			this.ctclFR_RETIRE.setFocus();
        			return false;
        		}
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
        	this.FormBtns.Reset.set_enable(true);

        	if (svcID == "select") {
        		if (this.dsList.rowcount == 0) {
        			this.gfnAlert("자료가 존재하지 않습니다.");
        		} else {
        			this.gfnGridAfterSelect(this.dxGrid);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//trace("코드파인드_식별id:" + id);
        	switch(id) {
        		case "":
        			dsUserParam.setColumn(nrow, "", "S");
        			break;
        		default:
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id){
        		case "ccfCD_DEPT" :
        			this.dsList.setColumn(0, "TY_DEPT", arr[0]["CD_DEPT"]);
        			this.dsList.setColumn(0, "CD_DEPT", arr[0]["CD_DEPT"]);
        			this.dsList.setColumn(0, "DS_DEPT", arr[0]["DS_DEPT"]);
        		break;

        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	//trace('grid_코드파인드_식별id:[' + id + "] nrow:[" + nrow +"] grid_currentrow:" + this.dxGrid.currentrow + "]" );
        	var gridIdx = this.dxGrid.currentrow;

        	switch(id) {
        		case "":
        			dsUserParam.setColumn(nrow, "", "%");
        		break;

        		default:
        	}

        	return true;
        };

        /************************************************************************
         * 기타 이벤트
        ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj, e) {
        	if(e.pretext != e.posttext) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
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
            this.divSearch.form.ctclFR_RETIRE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclTO_RETIRE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAW_RETIRE_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
