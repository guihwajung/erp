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
            this.set_titletext("예산대비실적조회(비목)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DIQPR_BUDGET_REAL_SELECT</Col></Row><Row><Col id=\"TARGET\">selectHeader</Col><Col id=\"SP\">DIQPR_BUDGET_REAL_HEADER_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_BUDGET\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACTIVE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_BUDGET\"/><Col id=\"CD_DEPT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_BUDGET","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("조회년월");
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_BUDGET","staYM_BUDGET:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ctclYM_BUDGET:1","37","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("귀속부서");
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0","37","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DIX_ACNTUNIT_AUTH");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_taborder("3");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT","184","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("비목코드");
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACCOUNT","276","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DIX_CFBIMOK_BUDGET_SILJUK");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACTIVE","546","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("세목코드");
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACTIVE","638","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DIX_CFSEMOK_BUDGET_SILJUK");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_GUBUN","914","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("전망포함");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
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
            obj = new BindItem("item1","divSearch.form.ctclYM_BUDGET.form.TextBox","value","dsSearch","YM_BUDGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_ACCOUNT.form.CDTextBox","value","dsSearch","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_ACTIVE.form.CDTextBox","value","dsSearch","CD_ACTIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_ACCOUNT.form.DSTextBox","value","dsSearch","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_ACTIVE.form.DSTextBox","value","dsSearch","DS_ACTIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.chkYN_GUBUN","value","dsSearch","YN_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DIQ_BUDGET_REAL.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "YM_BUDGET", this.gfnGetDate().substr(0,6));

        	var grSearch = nexacro.toNumber(this.FormInfo.GR_SEARCH);

        	var year = this.gfnGetDate().substr(0,4);

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

        	this.btnSearchSiljuk = this.gfnFormButtonAdd("SearchSiljuk", "fnSearchSiljuk");  // 예산실적조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYM_BUDGET = this.divSearch.form.ctclYM_BUDGET;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ccfCD_ACTIVE = this.divSearch.form.ccfCD_ACTIVE;
        	this.ccfCD_ACCOUNT = this.divSearch.form.ccfCD_ACCOUNT;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DI", "DIQ_BUDGET_REAL");

        	//코드파인드
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_ACTIVE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACTIVE.AfterCDTextChanged = "fnAfterCDTextChanged";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// SELECT
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_BUDGET", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("CD_ACCOUNT", "string");
        	this.dsSelect.addColumn("CD_ACTIVE", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");

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

        	this.dsSelect.setColumn(0, "YM_BUDGET", this.dsSearch.getColumn(0, "YM_BUDGET"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "CD_ACCOUNT", this.dsSearch.getColumn(0, "CD_ACCOUNT"));
        	this.dsSelect.setColumn(0, "CD_ACTIVE", this.dsSearch.getColumn(0, "CD_ACTIVE"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.gfnNvl(this.dsSearch.getColumn(0, "YN_GUBUN"), "N"));


        	var strSvcId    = "selectHeader";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectHeader=dsSelect";
        	var outData     = "dsHeader=selectHeader0";
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
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_BUDGET"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_BUDGET.setFocus();
        		}
        		this.gfnAlert("조회년월을 입력하세요.", "fnVaidateCallback");
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

        	if (svcID == "selectHeader")
        	{
        		//그리드 데이터 셋팅 작업
        		this.fnGridHeaderSetting();

        		//데이터 조회 처리
        		this.fnDataSelect();
        	}
        	else if (svcID == "select") {

        		this.gfnGridAfterSelect(this.dxGrid);

        		//this.fnColor();
        	}
        }


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_DEPT") {
        		var tyGubun = this.dsSearch.getColumn(0, "TY_GUBUN");
        		var id_sabun = this.AuthClient.ID_USER;
        		var gr_search = this.FormInfo.GR_SEARCH;
        		var cd_dept = this.AuthClient.CD_DEPT;

        		dsUserParam.setColumn(nrow, "YR_BUDGET", this.dsSearch.getColumn(0, "YM_BUDGET").substr(0,4));
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", gr_search);
        		dsUserParam.setColumn(nrow, "ID_SABUN", id_sabun);
        		//dsUserParam.setColumn(nrow, "CD_DEPT", cd_dept);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		// TY_GUBUN : B본사 / H현장 / S수주영업비
        		dsUserParam.setColumn(nrow, "TY_DEPTGUBUN", tyGubun);
        	}
        	if(id == "ccfCD_ACCOUNT") {
        		dsUserParam.setColumn(nrow, "YR_BUDGET", this.dsSearch.getColumn(0, "YM_BUDGET").substr(0,4));
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	}

        	if (id == "ccfCD_ACTIVE") {
        		var cd_dept = this.AuthClient.CD_DEPT;
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACCOUNT"))) {
        			this.gfnAlert("비목코드를 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        		dsUserParam.setColumn(nrow, "CD_ACCOUNT", this.dsSearch.getColumn(0, "CD_ACCOUNT"));
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "YR_BUDGET", this.dsSearch.getColumn(0, "YM_BUDGET").substr(0,4));
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	if(id == "ccfCD_DEPT") {
        		this.gfnGridClear(this.dxGrid);
        	}
        	if(id == "ccfCD_ACCOUNT") {
        		this.gfnGridClear(this.dxGrid);
        		this.ccfCD_ACTIVE.form.fnCodeFindClear();
        	}
        	if(id == "ccfCD_DEPT") {
        		this.gfnGridClear(this.dxGrid);
        		this.ccfCD_ACTIVE.form.fnCodeFindClear();
        		this.ccfCD_ACCOUNT.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

         // 예산실적조회
        this.fnSearchSiljuk = function(obj,e) {

        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nIndex = this.dxGrid.getCellPos();
        	var column = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, nIndex);

        	this.fnSiljukPopup(column, nIndex);
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		//this.fnBtnEnableEventAll(false);
        		//if(e.columnid == "YM_BUDGET"){this.fnSetHeadTitle();}
        	}
        };

        //데이터 조회 처리
        this.fnDataSelect = function()
        {
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
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }

        //그리드 셋팅
        this.fnGridHeaderSetting = function ()
        {
        	var colBase = this.dxGrid.getBindCellIndex("body", "SORT");	//  컬럼 인덱스
        	var cols = 0; // merge 되면서 cell index가 조정된다.

        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	//컬럼 삭제
        	for(var i=0;i<this.dsHeader.rowcount;i++){
        		//데이터셋 컬럼 삭제 처리
        		this.dsList.deleteColumn(this.dsHeader.getColumn(i, "CD_DEPT_ACNT"));
        	}

        	var colCnt = this.dxGrid.getCellCount("body");

        	//그리드 컬럼 삭제 처리(초기화용)
        	var delCnt = 0, delIdx = 0;
        	for(var i=0;i<colCnt;i++){
        		if(i > colBase){
        			delIdx = ((colCnt-1)-delCnt);
        			this.dxGrid.deleteContentsCol("body", delIdx, false);
        			delCnt++;
        		}
        	}

        	//trace(this.dsHeader.saveXML());

        	var colIdx = (colBase+1);

        	var cellIndex = colIdx;

        	var arrCdDept = [];
        	var arrDsDept = [];

        	//헤더 컬럼 데이터
        	for(var h=0;h<this.dsHeader.rowcount;h++){

        		//계정 컬럼 추가(데이터셋)
        	    this.dsList.addColumn(this.dsHeader.getColumn(h, "CD_DEPT_ACNT"), "BIGDECIMAL");
        		//그리드 컬럼 추가(계 제외)
        		this.dxGrid.appendContentsCol("body");

        		//this.dxGrid.setCellProperty("body", cellIndex, "text", "bind:"+this.dsHeader.getColumn(h, "CD_TITLE"));	//바인딩 처리
        		this.dxGrid.setCellProperty("body", cellIndex, "text", "bind:"+this.dsHeader.getColumn(h, "CD_DEPT_ACNT"));	//바인딩 처리
        		this.dxGrid.setCellProperty("body", cellIndex, "displaytype", "mask");
        		this.dxGrid.setCellProperty("body", cellIndex, "maskeditformat", "#,##0");
        		this.dxGrid.setCellProperty("body", cellIndex, "cssclass", "expr:dataset.getRowLevel(currow) == 1 ? 'subtotal': nx_flag == '#' ? 'filter' : ''");
        		this.dxGrid.setCellProperty("body", cellIndex, "edittype", "expr:nx_flag=='#'?'text':'none'");

        		this.dxGrid.setCellProperty("head", cellIndex, "text", "bind:"+this.dsHeader.getColumn(h, "DS_DEPT_ACNT"));
        		this.dxGrid.setCellProperty("summ", cellIndex, "text", "expr:dataset.getSum('"+this.dsHeader.getColumn(h, "CD_DEPT_ACNT")+"')");
        		this.dxGrid.setCellProperty("summ", cellIndex, "displaytype", "mask");
        		this.dxGrid.setCellProperty("summ", cellIndex, "maskeditformat", "#,###");
        		this.dxGrid.setFormatColProperty(cellIndex, "size", 100); 		//컬럼 사이즈

        		//헤더 셋팅용 데이터 담기
        		arrCdDept[arrCdDept.length] = this.dsHeader.getColumn(h, "CD_DEPT_ACNT");
        		arrDsDept[arrDsDept.length] = this.dsHeader.getColumn(h, "DS_DEPT_ACNT");

        		if(colIdx != cellIndex) {
        			cellIndex = (cellIndex+1);
        		}

        		var rtn = this.dxGrid.mergeContentsCell("head", 0, cellIndex, 0, cellIndex+1, false);
        		if(rtn > -1) {
        			this.dxGrid.setCellProperty("head", rtn, "text", this.dsList.getColumn(i,"DS_GUBUN"));
        			cols = cols + 1;
        		}

        		colIdx ++;
        		cellIndex++;
        	}

        	//헤더 텍스트 처리
        	var HeaderIdx = (colBase);
        	var totCnt = arrCdDept.length;
        	for(var i=0;i<totCnt;i++){
        		this.dxGrid.setCellProperty( "head", (HeaderIdx), "text", arrDsDept[i]);
        		this.dxGrid.setCellProperty( "head", (HeaderIdx+totCnt), "text", arrCdDept[i]);

        		HeaderIdx++;
        	}

        	// 바인딩 및 사이즈 처리
        	startIdx = (colBase+1);
        	endIdx = startIdx;

        	this.dsList.set_enableevent(true);
        	this.dxGrid.set_enableredraw(true);
        };


        this.fnColor = function()
        {
        	this.dxGrid.set_enableredraw(false);

        	//var expr = "DS_ACTIVE != '소계' && DS_ACCOUNT != '중계 &&' DS_ACCOUNT_M != '합계' && (CD_GUBUN == '계획' || CD_GUBUN == '실적')";
        	this.gfnGridColumnColor(this.dxGrid, "", "BACK_ReadOnly", "YN_COLOR == 'Y'", true);
        	this.gfnGridColumnColor(this.dxGrid, "", "BACK_KuBun", "DS_ACTIVE == '소계'", true);
        	this.gfnGridColumnColor(this.dxGrid, "", "BACK_SoKe", "DS_ACCOUNT == '중계'", true);
        	this.gfnGridColumnColor(this.dxGrid, "", "BACK_Sum", "DS_ACCOUNT_M == '합계'", true);
        	this.dxGrid.set_enableredraw(true);
        }

        // 예산실적조회(더블클릭)
        this.divData_objGrid_oncelldblclick = function(obj,e)
        {

        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var column = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, e.cell);

        	// 로그인 한 부서와 선택한 항목 부서가 같은 경우에만 pop-up 뜨도록 처리

        	this.fnSiljukPopup(column, e.cell);


        };

        this.fnSiljukPopup = function(column, nIndex)
        {

        		var MONTH = this.gfnRight(this.dsSearch.getColumn(0, "YM_BUDGET"),2);
        		var DS_ACTIVE = this.dsList.getColumn(this.dsList.rowposition, "DS_ACTIVE");
        		var DS_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "DS_ACCOUNT");

        		var param = {};

        		//trace(" column=>" + column);
        		if ((this.gfnNvl(this.dsSearch.getColumn(0, "YN_GUBUN"), "N") =="N" && nIndex <= 9) || (this.gfnNvl(this.dsSearch.getColumn(0, "YN_GUBUN"), "N") =="Y" && nIndex <= 10) || column=="전망" )
        		{
        			param.CD_DEPT = "" ;
        		} else {
        			param.CD_DEPT = column ;
        		}
        		param.CD_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "CD_ACCOUNT");
        		param.DS_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "DS_ACCOUNT");
        		param.CD_ACTIVE = this.dsList.getColumn(this.dsList.rowposition, "CD_ACTIVE");
        		param.DS_ACTIVE = this.dsList.getColumn(this.dsList.rowposition, "DS_ACTIVE");

        		param.YM_BUDGET = this.gfnLeft(this.dsSearch.getColumn(0, "YM_BUDGET"), 4) + "01";		// 회계년도 1월
        		param.YM_BUDGET_1 = this.dsSearch.getColumn(0, "YM_BUDGET");
        		param.GUBUN = "1";
        		this.gfnFormOpen("DHQ", "DIQ_BUDGET_SILJUK_SEARCH", "", param);


        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DIQ_BUDGET_REAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
