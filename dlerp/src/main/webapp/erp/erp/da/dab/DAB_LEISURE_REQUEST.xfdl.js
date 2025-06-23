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
            this.set_titletext("레저시설 이용 신청목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_LEISURE_REQUEST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_LEISURE_REQUEST_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_APPROVE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">결재중</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">승인완료</Col></Row><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">신청</Col></Row><Row><Col id=\"CODE\">D</Col><Col id=\"VALUE\">담당자승인</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"VALUE\">부서장승인</Col></Row><Row><Col id=\"CODE\">I</Col><Col id=\"VALUE\">임원승인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_REQUEST_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LEISURE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LEISURE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_START_END","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("이용기간");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_START","staDT_START_END:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO","calDT_START:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_END","staDT_ORD_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVE","calDT_END:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("승인상태");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_APPROVE","staTY_APPROVE:0.0","10.0","95","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_APPROVE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","6",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccboTY_APPROVE","value","dsSearch","TY_APPROVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calDT_END","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAB_LEISURE_REQUEST.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var gfTyFlag;

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

        	this.fnSetExtendButtonEnable(false);
        	// ---------------------------//

        	this.fnReset();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnItem1 = this.gfnFormButtonAdd("btnLeisureRequest", "fnLeisureRequest");		// 레저시설이용신청
        	this.btnItem2 = this.gfnFormButtonAdd("btnLeisureRoomType", "fnLeisureRoomType");	// 객실별정보
        	//this.btn1 = this.gfnFormButtonAdd("FormButton1", "fnLeisureRoomType");
        };

        /*
         *	확장버튼 활성화 여부
         */
        this.fnSetExtendButtonEnable = function(bEnable){
        	/*
        	this.btn1.set_enable(bEnable);
        	this.btn2.set_enable(bEnable);
        	this.btn3.set_enable(bEnable);
        	this.btn4.set_enable(bEnable);
        	*/
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;

        	this.ccboTY_APPROVE	  =	this.divSearch.form.ccboTY_APPROVE;		// 승인상태(신청:'', 담당자승인:'D', 부서장승인:'YY')
        	this.calDT_START   =	this.divSearch.form.calDT_START; 		// 이용시작일(FROM)
        	this.calDT_END   	  =	this.divSearch.form.calDT_END;			// 이용시작일(TO)
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_LEISURE_REQUEST");
        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_CellDblclick, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_REQUEST_FROM", "string");
        	this.dsSelect.addColumn("DT_REQUEST_TO", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("CD_LEISURE", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("TY_APPROVE", "string");
        	this.dsSelect.addColumn("DT_START", "string");
        	this.dsSelect.addColumn("DT_END", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("ID_PERSON", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_PERSON", "string");
        	this.dsSave.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if(!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnSetFormStatus(this);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_APPROVE", this.ccboTY_APPROVE.value);				//승인상태(신청:'', 담당자승인:'D', 부서장승인:'YY')
        	this.dsSelect.setColumn(0, "DT_START", this.calDT_START.value);					//이용시작일(FROM)
        	this.dsSelect.setColumn(0, "DT_END", this.calDT_END.value);						//이용시작일(TO)

        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "ID_PERSON", this.AuthClient.ID_PERSON);

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
        	//var nrow = this.gfnGridAdd(this.dxGrid);
        	//this.dsList.setColumn(nrow, "YEAR_EVAL", this.ctclYEAR_EVAL.form.TextBox.value);
        	//  팝업
        	this.fnFormOpenLeisureRequest("I");
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var nrow = this.dsList.rowposition;
        	var YN_APPROVE = this.gfnNvl(this.dsList.getColumn(nrow, "YN_APPROVE"), "N");
        	var YN_TEAMLEADER = this.gfnNvl(this.dsList.getColumn(nrow, "YN_TEAMLEADER"), "N");
        	var YN_OFFICER = this.gfnNvl(this.dsList.getColumn(nrow, "YN_OFFICER"), "N");
        	if ( YN_APPROVE == "Y" || YN_TEAMLEADER == "Y" || YN_OFFICER == "Y"){
        		this.gfnAlert("승인중이거나 승인 완료된 자료는 삭제 할 수 없습니다.");
        		return;
        	}
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        // 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
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
        	var nrow = this.dsSearch.addRow();

        	this.ccboTY_APPROVE.set_index(0);

        	//날짜 from ~ to 셋팅 ( 매월1일 ~ 매월 말일 )
        	var today = this.gfnGetDate().substring(0,6);
        	var endDay = this.gfnGetLastDate(today);

        	this.dsSearch.setColumn(nrow, "DT_START", today+"01");
        	this.dsSearch.setColumn(nrow, "DT_END", endDay);

        	if(this.FormInfo.GR_SEARCH != "1" && this.gfnIsNull(this.AuthClient.ID_PERSON)){
        		this.gfnAlert("레저 신청 대상자가 아닙니다.");

        		this.FormBtns.Select.set_enable(false);
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.FormBtns.Reset.set_enable(false);

        		return;
        	}
        	//화면 로드시 자동조회
        	this.FormBtns.Select.click();
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	var DT_START = this.dsSearch.getColumn(0, "DT_START");
        	var DT_END = this.dsSearch.getColumn(0, "DT_END");
        	if(!this.gfnIsNull(DT_START) && !this.gfnIsNull(DT_END)){
        		if (DT_START > DT_END) {
        			this.fnVaidateCallback = function() {
        				this.calDT_START.setFocus();
        			}
        			this.gfnAlert("이용기간 시작일이 종료일보다 클 수 없습니다.", "fnVaidateCallback");
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
        	} else if(svcID == "save") {
        		this.gfnAlert("작업이 완료되었습니다.");
        		this.FormBtns.Select.click();
        	}
        	this.fnSetButton();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id = "DAX_CFDEPT"){
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        	}

        	if(id = "ccfCD_LEISURE"){
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "LE");
        	}

        	if(id = "DAX_CFBASEINFO"){
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
                dsUserParam.setColumn(nrow, "CD_DEPT", "");
                dsUserParam.setColumn(nrow, "TY_RETIRE", "");	// 재직구분
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	return true;
        };

         this.fnGrid_CellDblclick = function(obj,e){
        	var colName = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colName == ""){}
        	this.fnFormOpenLeisureRequest("U");
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         * 커스텀 버튼 이벤트
         */

        // 레저시설 이용 신청서
        this.fnLeisureRequest = function(obj, e){
        	this.fnFormOpenLeisureRequest("I");
        };

        // 객실별 정보 안내 팝업
        this.fnLeisureRoomType = function(obj, e){
        	param={};
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LEISURE_ROOMTYPE_DLG", "", param);
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e){

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnCheckFlag = function(objGrid) {
        	var chkCount = 0;
        	//var objDs = objGrid.getBindDataset();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if(flag == "U") {
        			var chkVal = this.dsList.getColumn(i, "CHK");
        			if(chkVal == 1){
        				chkCount++;
        			}
        		}
        	}

        	if(chkCount == 0) {
        		return false;
        	}else{
        		return true;
        	}
        }

        this.fnFormOpenLeisureRequest = function(sTySave) {
        	//if(this.dsList.rowposition < 0) return;
        	var nRow = this.dsList.rowposition;

        	var param = {};
        	param.P_TY_SAVE  = sTySave;	// (I:등록 / U:수정,조회)

        		trace("입력구분" + sTySave + "   nRow->" + nRow
        		+ "   ID_PERSON->" +this.dsList.getColumn(nRow, "ID_PERSON")
        		+ "   NO_SEQ->" +this.dsList.getColumn(nRow, "NO_SEQ")
        		);

        	if(sTySave == "U" && nRow > -1){
        		param.P_ID_PERSON = this.dsList.getColumn(nRow, "ID_PERSON");
        		param.P_NO_SEQ = this.dsList.getColumn(nRow, "NO_SEQ");
        		param.P_TY_LEISURE = this.dsList.getColumn(nRow, "TY_LEISURE");
        	}

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	//this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LEISURE_REQUEST_DETAIL", "fnFormOpenLeisureRequest_callback", param, 650, 500);
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LEISURE_REQUEST_DETAIL", "fnFormOpenLeisureRequest_callback", param, 950, 580);
        }

        // 팝업호출 Callback
        this.fnFormOpenLeisureRequest_callback = function(svcID, val) {
        	if(val){
        		this.gfnAlert("작업이 완료되었습니다.");
        		this.FormBtns.Select.click();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.calDT_START.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.calDT_END.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.staTY_APPROVE.addEventHandler("onclick",this.divSearch_staCD_CORP_onclick,this);
            this.divSearch.form.ccboTY_APPROVE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_LEISURE_REQUEST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
