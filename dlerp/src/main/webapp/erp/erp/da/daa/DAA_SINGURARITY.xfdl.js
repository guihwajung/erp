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
            this.set_titletext("특이사항 인사정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_SINGURARITY_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_SINGURARITY_SAVE</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DAAPR_SINGURARITY_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RETIRE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">재직자</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"VALUE\">휴직자</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"VALUE\">퇴직자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUMUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"OCCUR_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"OCCUR_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staID_SABUN:10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_BUMUN","ccfID_SABUN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조직분류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_BUMUN","staCD_BUMUN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_RETIRE","0.0","staID_SABUN:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccfTY_RETIRE","staTY_RETIRE:0.0","staID_SABUN:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsTY_RETIRE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("재직자");
            obj.set_value("01");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFR_OCCUR","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclOCCUR_FROM","staFR_OCCUR:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTO_OCCUR","ctclOCCUR_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclOCCUR_TO","staTO_OCCUR:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:5",null,null,"0","5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("row");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ccfCD_BUMUN.form.CDTextBox","value","dsSearch","CD_BUMUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfTY_RETIRE","value","dsSearch","TY_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ctclOCCUR_FROM","value","dsSearch","OCCUR_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","ctclOCCUR_TO","value","dsSearch","OCCUR_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclOCCUR_FROM","value","dsSearch","OCCUR_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctclOCCUR_TO","value","dsSearch","OCCUR_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_SINGURARITY.xfdl", function() {
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

        	//날짜 from ~ to 셋팅 ( 매월1일 ~ 매월 말일 )
        // 	var today = this.gfnGetDate().substring(0,6);
        // 	var endDay = this.gfnGetLastDate(today);
        // 	this.divSearch.form.ctclOCCUR_FROM.set_value(today+"01");
        // 	this.divSearch.form.ctclOCCUR_TO.set_value(endDay);

        	//화면 로드시 자동조회
        	this.FormBtns.Select.click();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        	this.FormBtns.Print.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.ccfCD_BUMUN = this.divSearch.form.ccfCD_BUMUN;
        	this.ccfTY_RETIRE = this.divSearch.form.ccfTY_RETIRE;
        	this.ctclOCCUR_FROM = this.divSearch.form.ctclOCCUR_FROM;
        	this.ctclOCCUR_TO = this.divSearch.form.ctclOCCUR_TO;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.ccfCD_BUMUN.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_BUMUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_BUMUN.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.ccfTY_RETIRE.set_index(1);

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_SINGURARITY");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("CD_BUMUN", "string");
        	this.dsSelect.addColumn("TY_RETIRE", "string");
        	this.dsSelect.addColumn("OCCUR_FROM", "string");
        	this.dsSelect.addColumn("OCCUR_TO", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("NO_SEQ", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("ID_PERSON", "bigdecimal");
        	this.dsSave.addColumn("DT_REGISTER", "string");
        	this.dsSave.addColumn("DT_OCCUR", "string");
        	this.dsSave.addColumn("DS_TITLE", "string");
        	this.dsSave.addColumn("DS_CONTENTS", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");


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
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "CD_BUMUN", this.dsSearch.getColumn(0, "CD_BUMUN"));
        	this.dsSelect.setColumn(0, "TY_RETIRE", this.ccfTY_RETIRE.value);
        	this.dsSelect.setColumn(0, "OCCUR_FROM", this.ctclOCCUR_FROM.value);
        	this.dsSelect.setColumn(0, "OCCUR_TO", this.ctclOCCUR_TO.value);

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
        	var today = this.gfnGetDate().substring(0,8);
        	this.dsList.setColumn(nrow, "DT_REGISTER", today);
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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	// 저장 Validate
        	//if(!this.fnSaveValidate()) return;

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
        					this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        					this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        					this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        					this.dsSave.setColumn(nrow, "DT_REGISTER", this.dsList.getColumn(i, "DT_REGISTER"));
        					this.dsSave.setColumn(nrow, "DT_OCCUR", this.dsList.getColumn(i, "DT_OCCUR"));
        					this.dsSave.setColumn(nrow, "DS_TITLE", this.dsList.getColumn(i, "DS_TITLE"));
        					this.dsSave.setColumn(nrow, "DS_CONTENTS", this.dsList.getColumn(i, "DS_CONTENTS"));

        					this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        					this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

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
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc);   // 통신방법 정의 [생략가능]
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
        	this.dsReport = new Dataset();

        	this.dsReport.addColumn("ID_SABUN", "string");
        	this.dsReport.addColumn("CD_BUMUN", "string");
        	this.dsReport.addColumn("TY_RETIRE", "string");
        	this.dsReport.addColumn("OCCUR_FROM", "string");
        	this.dsReport.addColumn("OCCUR_TO", "string");

        	this.dsReport.clearData();
        	this.dsReport.addRow();

        	this.dsReport.setColumn(0, "ID_SABUN", this.ccfID_SABUN.value);
        	this.dsReport.setColumn(0, "CD_BUMUN", this.ccfCD_BUMUN.value);
        	this.dsReport.setColumn(0, "TY_RETIRE", this.ccfTY_RETIRE.value);
        	this.dsReport.setColumn(0, "OCCUR_FROM", this.ctclOCCUR_FROM.value);
        	this.dsReport.setColumn(0, "OCCUR_TO", this.ctclOCCUR_TO.value);

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
        	var reportpath  = "/da/daa/DAA_SINGURARITY.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };

        /*
         *	리셋 버튼
         */
        this.fnReset = function() {
        	this.ccfID_SABUN.form.CDTextBox.set_value("");
        	this.ccfID_SABUN.form.DSTextBox.set_value("");
        	this.ccfCD_BUMUN.form.CDTextBox.set_value("");
        	this.ccfCD_BUMUN.form.DSTextBox.set_value("");
        	this.ccfTY_RETIRE.set_index(0);

        	//날짜 from ~ to 셋팅 ( 매월1일 ~ 매월 말일 )
        // 	var today = this.gfnGetDate().substring(0,6);
        // 	var endDay = this.gfnGetLastDate(today);
        // 	this.divSearch.form.ctclOCCUR_FROM.set_value(today+"01");
        // 	this.divSearch.form.ctclOCCUR_TO.set_value(endDay);
        };
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {

        	if (!this.gfnIsNull(this.ctclOCCUR_FROM.value) && !this.gfnIsNull(this.ctclOCCUR_TO.value) ) {
        		if ( this.ctclOCCUR_FROM.value > this.ctclOCCUR_TO.value ) {
        			this.gfnAlert("조회시작일이 조회종료일보다 클 수 없습니다.");
        			this.ctclOCCUR_FROM.setFocus();
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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSetButton();
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.codefind_AfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow){


        	if(id = "DAX_CFBASEINFO_ALL"){	// 승인자성명
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP", "");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "");	// 재직구분
        	}

        	if(id = "DAX_CFCOMMONCODE"){	// 조직구분
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "DA");
        	}

        	return true;
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
          this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	if(id == "DAX_CFCOMMONCODE"){	// 조직구분
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "DA");
        	}

        	else if(id == "DAX_CFBASEINFO_ALL"){	// 승인권자 사번
        		dsUserParam.setColumn(nrow, "CD_CORP", "%");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");	// 재직구분
        	}

        	if(id == "ED"){	// 직위
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");
        	}


        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;
        	switch(id) {
        		case "DAX_CFBASEINFO_ALL":
        			this.dsList.setColumn(this.dsList.rowposition, "CD_CORP", arr[0]["CD_CORP"]);
        			this.dsList.setColumn(this.dsList.rowposition, "ID_PERSON", arr[0]["ID_PERSON"]);
        			break;

        		default:
        	}

        }


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
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };
        this.dsList_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        };

        this.divSearch_staID_SABUN_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staID_SABUN.addEventHandler("onclick",this.divSearch_staID_SABUN_onclick,this);
            this.divSearch.form.staCD_BUMUN.addEventHandler("onclick",this.divSearch_staCD_CORP_onclick,this);
            this.divSearch.form.staTY_RETIRE.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ctclOCCUR_FROM.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclOCCUR_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_SINGURARITY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
