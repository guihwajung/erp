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
            this.set_titletext("교육과정 이력조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAEPR_EDUCATION_HISTORY_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_EDU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDU_ORGAN\" type=\"STRING\" size=\"256\"/><Column id=\"EDUCATION_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"EDUCATION_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EDU_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDU_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EDU_INOUT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_EDU_INOUT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_EDU_CONTENT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("교육과정명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_EDU_CONTENT","staDS_EDU_CONTENT:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_EDU_INOUT","ccfCD_EDU_CONTENT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("교육구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_EDU_INOUT","staCD_EDU_INOUT:0.0","10.0","89","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_EDU_INOUT");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFR_EDUCATION","cboCD_EDU_INOUT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("교육시작일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclEDUCATION_FROM","staFR_EDUCATION:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTO_EDUCATION","ctclEDUCATION_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclEDUCATION_TO","staTO_EDUCATION:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_EDU_TYPE","0.0","staDS_EDU_CONTENT:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("교육분류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_EDU_TYPE","staCD_EDU_TYPE:0.0","staDS_EDU_CONTENT:10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_EDU_ORGAN","ccfCD_EDU_TYPE:0.0","staDS_EDU_CONTENT:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("교육기관");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_EDU_ORGAN","staDS_EDU_ORGAN:0.0","staDS_EDU_CONTENT:10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","txtDS_EDU_ORGAN:0.0","staDS_EDU_CONTENT:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staDS_EDU_CONTENT:10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
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
            obj = new BindItem("item2","divSearch.form.ctclEDUCATION_FROM","value","dsSearch","EDUCATION_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclEDUCATION_TO","value","dsSearch","EDUCATION_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_EDU_CONTENT.form.CDTextBox","value","dsSearch","CD_EDU_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_EDU_CONTENT.form.DSTextBox","value","dsSearch","DS_EDU_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_EDU_TYPE.form.CDTextBox","value","dsSearch","CD_EDU_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_EDU_TYPE.form.DSTextBox","value","dsSearch","DS_EDU_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboCD_EDU_INOUT","value","dsSearch","CD_EDU_INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.txtDS_EDU_ORGAN","value","dsSearch","DS_EDU_ORGAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAE_EDUCATION_HISTORY.xfdl", function() {
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
        	this.fnSetCombo();

        	//날짜 from ~ to 셋팅 ( 매월1일 ~ 매월 말일 )
        	var today = this.gfnGetDate().substring(0,6);
        	var endDay = this.gfnGetLastDate(today);
        	this.divSearch.form.ctclEDUCATION_FROM.set_value(today+"01");
        	this.divSearch.form.ctclEDUCATION_TO.set_value(endDay);

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

        	this.ctclEDUCATION_FROM = this.divSearch.form.ctclEDUCATION_FROM;
        	this.ctclEDUCATION_TO = this.divSearch.form.ctclEDUCATION_TO;
        	this.ccfCD_EDU_CONTENT = this.divSearch.form.ccfCD_EDU_CONTENT;
        	this.cboCD_EDU_INOUT = this.divSearch.form.cboCD_EDU_INOUT;
        	this.ccfCD_EDU_TYPE = this.divSearch.form.ccfCD_EDU_TYPE;
        	this.txtDS_EDU_ORGAN = this.divSearch.form.txtDS_EDU_ORGAN;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//교육과정명
        	this.ccfCD_EDU_CONTENT.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_EDU_CONTENT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_EDU_CONTENT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//교육분류
        	this.ccfCD_EDU_TYPE.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_EDU_TYPE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_EDU_TYPE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//성명
        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAE_EDUCATION_HISTORY");
        	//그리드 이벤트
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_EDU_CONTENT", "string");
        	this.dsSelect.addColumn("CD_EDU_INOUT", "string");
        	this.dsSelect.addColumn("EDUCATION_FROM", "string");
        	this.dsSelect.addColumn("EDUCATION_TO", "string");
        	this.dsSelect.addColumn("CD_EDU_TYPE", "string");
        	this.dsSelect.addColumn("DS_EDU_ORGAN", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");

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

        	this.dsSelect.setColumn(0, "CD_EDU_CONTENT", this.divSearch.form.ccfCD_EDU_CONTENT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_EDU_INOUT", this.cboCD_EDU_INOUT.value);
        	this.dsSelect.setColumn(0, "EDUCATION_FROM", this.ctclEDUCATION_FROM.value);
        	this.dsSelect.setColumn(0, "EDUCATION_TO", this.ctclEDUCATION_TO.value);
        	this.dsSelect.setColumn(0, "CD_EDU_TYPE", this.divSearch.form.ccfCD_EDU_TYPE.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "DS_EDU_ORGAN", this.txtDS_EDU_ORGAN.value);
        	this.dsSelect.setColumn(0, "ID_SABUN", this.divSearch.form.ccfID_SABUN.form.CDTextBox.value);

        // trace("fnSelect() dsSelect >>>" + this.dsSelect.saveXML());
        // trace("fnSelect() dsSearch >>>" + this.dsSearch.saveXML());

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
        this.fnReset = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	//날짜 from ~ to 셋팅 ( 매월1일 ~ 매월 말일 )
        	var today = this.gfnGetDate().substring(0,6);
        	var endDay = this.gfnGetLastDate(today);
        	this.divSearch.form.ctclEDUCATION_FROM.set_value(today+"01");
        	this.divSearch.form.ctclEDUCATION_TO.set_value(endDay);

        	this.cboCD_EDU_INOUT.set_index(0);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        // 	if (this.gfnIsNull(this.ctclEDUCATION_FROM.value)) {
        // 		this.ctclEDUCATION_FROM.setFocus();
        // 		this.gfnAlert("교육시작일을 입력하세요.");
        // 		return false;
        // 	}
        //
        // 	if (this.gfnIsNull(this.ctclEDUCATION_TO.value)) {
        // 		this.ctclEDUCATION_TO.setFocus();
        // 		this.gfnAlert("교육종료일을 입력하세요.");
        // 		return false;
        // 	}

        	if (!this.gfnIsNull(this.ctclEDUCATION_FROM.value) && !this.gfnIsNull(this.ctclEDUCATION_TO.value) ) {
        		if ( this.ctclEDUCATION_FROM.value > this.ctclEDUCATION_TO.value ) {
        			this.gfnAlert("교육일자가 잘못 입력 되었습니다..");
        			this.ctclEDUCATION_FROM.setFocus();
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
        		if (this.dsList.rowcount == 0) {
        			this.gfnAlert("자료가 존재하지 않습니다.");
        		} else {
        			this.gfnGridAfterSelect(this.dxGrid);
        		}
        	}
        	else if(svcID == "combo"){
        		this.cboCD_EDU_INOUT.set_index(0);
        	}
        	this.fnSetButton();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//trace("코드파인드_식별id:" + id);
        	switch(id) {
        		case "ccfCD_EDU_CONTENT":	//교육과정명
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "S3");
        			break;

        		case "ccfCD_EDU_TYPE":	//교육분류
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "S2");
        			break;

        		case "ccfDS_EDU_CONTENT":	//교육명
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "S3");
        			dsUserParam.setColumn(nrow, "CD_UPPREFIX", "%");
        			break;

        		case "ccfID_SABUN":
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;

        		default:
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	//this.fnSearchInit();
        	var arr = codeFindData;

        	switch(id){
        		case "ccfCD_DEPT" :
        			this.dsList.setColumn(0, "TY_DEPT", arr[0]["CD_DEPT"]);
        			this.dsList.setColumn(0, "CD_DEPT", arr[0]["CD_DEPT"]);
        			this.dsList.setColumn(0, "DS_DEPT", arr[0]["DS_DEPT"]);
        		break;
        		case "ccfID_SABUN" :
        			this.dsSearch.setColumn(0, "ID_SABUN", arr[0]["ID_SABUN"]);
        			this.dsSearch.setColumn(0, "DS_HNAME", arr[0]["DS_HNAME"]);
        			//this.dsSearch.setColumn(0, "ID_PERSON", arr[0]["ID_PERSON"]);
        		break;

        		break;
        		case "ccfCD_EDU_CONTENT" :
        			this.dsSearch.setColumn(0, "CD_EDU_CONTENT", arr[0]["CD_CODE"]);
        			this.dsSearch.setColumn(0, "DS_EDU_CONTENT", arr[0]["DS_CODE"]);
        		break;
        		case "ccfDS_EDU_CONTENT" :
        			this.dsSearch.setColumn(0, "CD_EDU_CONTENT", arr[0]["CD_CODE"]);
        			this.dsSearch.setColumn(0, "DS_EDU_CONTENT", arr[0]["DS_CODE"]);
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
        		case "DAX_CFBASEINFO":     // 사번 	ID_SABUN
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        		break;

        		case "CD_EDU_TYPE":	//교육종류
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "S2");
        			dsUserParam.setColumn(nrow, "CD_UPPREFIX", this.dxGrid.getCellValue(gridIdx, this.dxGrid.getBindCellIndex("body", "CD_EDU_INOUT")) );	//해당 ROW의 교육구분
        		break;

        		case "CD_EDU_CONTENT":	//교육내용
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "S3");
        			dsUserParam.setColumn(nrow, "CD_UPPREFIX", this.dxGrid.getCellValue(gridIdx, this.dxGrid.getBindCellIndex("body", "CD_EDU_TYPE")) );	//해당 ROW의 교육종류
        		break;

        		case "CD_EDU_GUBUN":	//구분
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "S4");
        			dsUserParam.setColumn(nrow, "CD_UPPREFIX", this.dxGrid.getCellValue(gridIdx, this.dxGrid.getBindCellIndex("body", "CD_EDU_CONTENT")) );	//해당 ROW의 교육내용
        		break;

        		case "DHX_CFVENDOR":	//교육기관
        			var searchVal = "";
        			if(!this.gfnIsNull(this.dxGrid.getCellValue(gridIdx, this.dxGrid.getBindCellIndex("body", "CD_EDU_ORGAN"))) ){
        				searchVal = this.dxGrid.getCellValue(gridIdx, this.dxGrid.getBindCellIndex("body", "CD_EDU_ORGAN"));
        			}
        			dsUserParam.setColumn(nrow, "TY_VENDOR", "F");
        			dsUserParam.setColumn(nrow, "VALUE", searchVal );	//입력값
        			dsUserParam.setColumn(nrow, "YN_RELATED", "" );	//NULL
        		break;

        		default:
        	}

        	return true;
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
        	this.dsCombo.addColumn("CD_PREFIX", "string");
        	this.dsCombo.addColumn("CD_UPPREFIX", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "TY_SEL", "A");
        	this.dsCombo.setColumn(0, "CD_PREFIX", "S1");
        	this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_EDU_INOUT=combo0";
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

        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj, e) {
        	if(e.pretext != e.posttext) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        	}
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboCD_EDU_INOUT.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclEDUCATION_FROM.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclEDUCATION_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAE_EDUCATION_HISTORY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
