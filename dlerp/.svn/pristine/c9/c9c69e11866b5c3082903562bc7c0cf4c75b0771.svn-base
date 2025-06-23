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
            this.set_titletext("평가기수");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_EVAL_TERMS_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAJPR_EVAL_TERMS_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYEAR_EVAL","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYEAR_EVAL","staYEAR_EVAL:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","ctclYEAR_EVAL:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("평가기간");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TO","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_TO:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
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
            obj = new BindItem("item0","divSearch.form.ctclYEAR_EVAL.form.TextBox","value","dsSearch","YEAR_EVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAJ_EVALUATION_CRITERIA.xfdl", function() {
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
        	this.btnItem1 = this.gfnFormButtonAdd("btnEvalGrades", "fnEvalGrades");		// 평가등급
        	this.btnItem2 = this.gfnFormButtonAdd("btnEvalItems", "fnEvalItems");		// 평가항목
        	this.btnItem3 = this.gfnFormButtonAdd("btnEvalWeigh", "fnEvalWeigh");		// 평가가중치
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ctclYEAR_EVAL = this.divSearch.form.ctclYEAR_EVAL;
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_EVALUATION_CRITERIA");

        	//그리드 이벤트
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YEAR_EVAL", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("TERM_EVAL", "string");
        	this.dsSave.addColumn("YEAR_EVAL", "string");
        	this.dsSave.addColumn("DT_EVALSTART", "string");
        	this.dsSave.addColumn("DT_EVALEND", "string");
        	this.dsSave.addColumn("DT_1CHACLOSE", "string");
        	this.dsSave.addColumn("DT_2CHACLOSE", "string");
        	this.dsSave.addColumn("REF_TERM", "string");
        	this.dsSave.addColumn("SABUN", "string");
        	this.dsSave.addColumn("DT_3CHACLOSE", "string");
        	this.dsSave.addColumn("LEVEL_EVALOPEN", "bigdecimal");
        	this.dsSave.addColumn("MANNER_POINTCALC", "bigdecimal");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YEAR_EVAL", this.dsSearch.getColumn(0, "YEAR_EVAL"));
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));

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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow, "YEAR_EVAL", this.ctclYEAR_EVAL.form.TextBox.value);
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

        	// 그리드 필수항목 체크
        	//if (!this.gfnGridValidate(this.dxGrid)) return;

        	if (!this.fnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "TERM_EVAL", this.dsList.getColumn(i, "TERM_EVAL"));
        				this.dsSave.setColumn(nrow, "YEAR_EVAL", this.dsList.getColumn(i, "YEAR_EVAL"));
        				this.dsSave.setColumn(nrow, "DT_EVALSTART", this.dsList.getColumn(i, "DT_EVALSTART"));
        				this.dsSave.setColumn(nrow, "DT_EVALEND", this.dsList.getColumn(i, "DT_EVALEND"));
        				this.dsSave.setColumn(nrow, "DT_1CHACLOSE", this.dsList.getColumn(i, "DT_1CHACLOSE"));
        				this.dsSave.setColumn(nrow, "DT_2CHACLOSE", this.dsList.getColumn(i, "DT_2CHACLOSE"));
        				this.dsSave.setColumn(nrow, "REF_TERM", this.dsList.getColumn(i, "REF_TERM"));
        				this.dsSave.setColumn(nrow, "SABUN", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "DT_3CHACLOSE", this.dsList.getColumn(i, "DT_3CHACLOSE"));
        				this.dsSave.setColumn(nrow, "LEVEL_EVALOPEN", this.dsList.getColumn(i, "LEVEL_EVALOPEN"));
        				this.dsSave.setColumn(nrow, "MANNER_POINTCALC", this.dsList.getColumn(i, "MANNER_POINTCALC"));

        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsOutput=save";
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
        this.fnReset  = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	//평가년도 셋팅
        	var today = this.gfnGetDate().substring(0,4);
        	this.divSearch.form.ctclYEAR_EVAL.form.TextBox.set_value(today);

        	/*
        	//날짜 from ~ to 셋팅 ( 매월1일 ~ 매월 말일 )
        	var today = this.gfnGetDate().substring(0,6);
        	var endDay = this.gfnGetLastDate(today);
        	this.divSearch.form.ctclDT_FROM.set_value(today+"01");
        	this.divSearch.form.ctclDT_TO.set_value(endDay);
        	*/

        	// 자동조회
        	this.FormBtns.Select.click();
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        	if (this.gfnIsNull(this.ctclYEAR_EVAL.form.TextBox.value)) {
        		this.ctclYEAR_EVAL.setFocus();
        		this.gfnAlert("평가년도를 입력하세요.");
        		return false;
        	}

        	//조회기간
        	/*
        	if (this.gfnIsNull(this.ctclDT_FROM.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_FROM.setFocus();
        		}
        		this.gfnAlert("평가기간 시작일을 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclDT_TO.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_TO.setFocus();
        		}
        		this.gfnAlert("평가기간 종료일을 입력하세요.", "fnVaidateCallback");
        		return false;
        	}
        	*/
        	if (!this.gfnIsNull(this.ctclDT_TO.value) && !this.gfnIsNull(this.ctclDT_TO.value)) {
        		if (this.ctclDT_FROM.value > this.ctclDT_TO.value) {
        			this.fnVaidateCallback = function() {
        				this.ctclDT_FROM.setFocus();
        			}
        			this.gfnAlert("평가기간 시작일이 종료일보다 클 수 없습니다.", "fnVaidateCallback");
        			return false;
        		}

        	}
        	return true;
        };


        /*
         *	그리드 필수입력 컬럼 검사
         */
        this.fnGridValidate = function(objGrid) {
        	var objDs = objGrid.getBindDataset();

        	var msg = "";
        	for (var i = 0; i < objDs.rowcount; i++) {
        		var flag = this.gfnGetFlag(objDs, i);
        		switch(flag) {
        			case "I":
        			case "U":
        				var arrRequired = objGrid.usRequired;
        				for(var j = 0; j < arrRequired.length; j++) {
        					var spl_req = arrRequired[j].split(';');
        					var colnm = spl_req[0];
        					var header = spl_req[1];
        					if (this.gfnIsNull(objDs.getColumn(i, colnm))) {
        						msg += (i + 1) + "열: [" + header + "] 필수입력값입니다.\n";
        					}
        				}

        				var DT_EVALSTART = objDs.getColumn(i, "DT_EVALSTART")	// 평가시작일
        				var DT_EVALEND = objDs.getColumn(i, "DT_EVALEND")		// 평가종료일
        				var DT_1CHACLOSE = objDs.getColumn(i, "DT_1CHACLOSE")	// 1차 마감일
        				var DT_2CHACLOSE = objDs.getColumn(i, "DT_2CHACLOSE")	// 2차 마감일

        				if (DT_EVALSTART > DT_EVALEND){
        					msg += (i + 1) + "열 [평가종료일]은 [평가시작일] 이후로 입력하셔야합니다. \n";
        				}

        				if (DT_EVALSTART > DT_1CHACLOSE){
        					msg += (i + 1) + "열 [1차 마감일]은 [평가시작일] 이후로 입력하셔야합니다. \n";
        				}

        				if(!this.gfnIsNull(DT_2CHACLOSE)){
        					if (DT_1CHACLOSE > DT_2CHACLOSE) {
        						msg += (i + 1) + "열 [2차 마감일]은 [1차 마감일] 이후로 입력하셔야합니다. \n";
        					}
        				}

        				break;
        		}
        	}// for


        	if(this.gfnIsNull(msg)) {
        		return true;
        	}
        	else {
        		var arrError = [msg];
        		this.gfnAlert("msg.err.validator", arrError);
        		return false;
        	}
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	//trace("fnCallback >>>>svcID :["+svcID+"] errorCode :["+errorCode+"] errorMsg :["+errorMsg+"]" );
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	this.fnSetButton();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//trace("코드파인드_식별id:" + id);
        	switch(id) {
        		case "ccfCD_CORP":	//법인
        			//(this.ccfCD_CORP.CodeFindName = "DAX_CFCORP2" 일경우) 아래 파라미터 사용
        			//dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			//dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;

        		default:
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	//trace('grid_코드파인드_식별id: ' + id);

        	switch(id) {
        		case "ID_SABUN":     // DAX_CFBASEINFO
        			//dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			//dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			//dsUserParam.setColumn(nrow, "TY_RETIRE", "%");

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
        this.fnSearchInit = function(obj,e) {
        	if(e.pretext != e.posttext) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        	}
        };

        // 평가등급
        this.fnEvalGrades = function(obj, e){
        	//if(this.dsList.rowposition < 0)return;
        	var param = {};
        	this.gfnFormOpen("DAJ", "DAJ_EVALUATION_GRADES", "fnEvalGrades_callback", param);
        };

        this.fnEvalGrades_callback = function() {
        }

        // 평가항목
        this.fnEvalItems = function(obj, e){
        	//if(this.dsList.rowposition < 0)return;

        	var nrow = this.dsList.rowposition;

        	var param = {};
        	param.TERM_EVAL  = this.dsList.getColumn(nrow, "TERM_EVAL");
        	this.gfnFormOpen("DAJ", "DAJ_EVALUATION_ITEMS", "fnEvalItems_callback", param);
        };

        this.fnEvalItems_callback = function() {
        }


        // 평가가중치
        this.fnEvalWeigh = function(obj, e){
        	var nrow = this.dsList.rowposition;
        	//if(this.dsList.rowposition < 0)return;
        	var param = {};
        	param.TERM_EVAL  = this.dsList.getColumn(nrow, "TERM_EVAL");
        	this.gfnFormOpen("DAJ", "DAJ_EVALUATION_WEIGH", "fnEvalWeigh_callback", param);
        };

        this.fnEvalWeigh_callback = function() {
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_FROM.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_EVALUATION_CRITERIA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
