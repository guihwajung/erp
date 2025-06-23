(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAB_EDU_BASE");
            this.set_titletext("교육관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_EDU_BASE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_EDU_BASE_SAVE</Col></Row><Row><Col id=\"TARGET\">saveSub</Col><Col id=\"SP\">DABPR_EDU_BASESUB_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_USE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:-18","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_USE","342","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("2");
            obj.set_text("사용유무");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_USE","432","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsYN_USE");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","334","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cursor("ns-resize");
            obj.set_cssclass("div_Splitter");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","27",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("■ 교육구분");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("■ 교육세부구분");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","30",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnDeleteSub",null,"0","60","22","5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnInsertSub",null,"0","60","22","btnDeleteSub:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("3");
            obj.set_text("추가");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboYN_USE","value","dsSearch","YN_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_EDU_BASE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e) {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnInit();

        }

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

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;

        	// 검색영역
        	this.ccfCD_CORP       = this.divSearch.form.ccfCD_CORP;

        	this.btnInsertSub = this.divData.form.divDataBottom.form.btnInsertSub;
        	this.btnDeleteSub = this.divData.form.divDataBottom.form.btnDeleteSub;
        	this.btnSaveSub = this.divData.form.divDataBottom.form.btnSaveSub;

        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드영역
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_EDU_BASE");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAB_EDU_BASESUB");
        	this.dxGridSub.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGridSub.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam      = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged          = "fnAfterCDTextChanged";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YN_USE", "string");

        	// 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_CODE", "string");
        	this.dsSave.addColumn("DS_CODE", "string");
        	this.dsSave.addColumn("RT_LIMIT", "bigint");
        	this.dsSave.addColumn("AM_LIMIT", "bigint");
        	this.dsSave.addColumn("DS_LIMIT", "string");
        	this.dsSave.addColumn("CD_EMP", "string");
        	this.dsSave.addColumn("DS_BASE", "string");
        	this.dsSave.addColumn("DS_REM", "string");
        	this.dsSave.addColumn("YN_USE", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsSaveSub = new Dataset();
        	this.dsSaveSub.addColumn("TY_WRK", "string");
        	this.dsSaveSub.addColumn("CD_SUBCODE", "string");
        	this.dsSaveSub.addColumn("DS_SUBCODE", "string");
        	this.dsSaveSub.addColumn("CD_CORP", "string");
        	this.dsSaveSub.addColumn("CD_CODE", "string");
        	this.dsSaveSub.addColumn("CD_BEFORE", "string");
        	this.dsSaveSub.addColumn("CD_AFTER", "string");
        	this.dsSaveSub.addColumn("YN_BASEINFO", "string");
        	this.dsSaveSub.addColumn("YN_SLIP", "string");
        	this.dsSaveSub.addColumn("CD_ACCOUNT", "string");
        	this.dsSaveSub.addColumn("DS_REM", "string");
        	this.dsSaveSub.addColumn("YN_USE", "string");
        	this.dsSaveSub.addColumn("ID_USER", "string");


        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        	this.dsSearch.setColumn(0, "YN_USE", "Y");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

         	this.dsSelect.clearData();
         	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YN_USE", this.dsSearch.getColumn(0, "YN_USE"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsListSub=select1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /*
         * 추가 버튼
         */
        this.fnAdd = function() {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.gfnAlert("법인을 선택하세요!");
        		return;
        	}

        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow, "YN_USE", "Y");

        }


        this.fnAddSub = function(obj,e)
        {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.gfnAlert("법인을 선택하세요!");
        		return;
        	}

        	if (this.dsList.rowcount == 0 || this.dsList.rowposition < 0 )
        	{
        		this.gfnAlert("교육구분 코드를 선택하세요!");
        		return;
        	}

        	var nrow = this.gfnGridAdd(this.dxGridSub);

        	this.dsListSub.set_enableevent(false);

        	var maxCode = this.fnMaxCode(this.dsList.getColumn(this.dsList.rowposition, "CD_CODE"));

        	this.dsListSub.setColumn(nrow, "CD_SUBCODE", maxCode);
        	this.dsListSub.setColumn(nrow, "CD_CODE", this.dsList.getColumn(this.dsList.rowposition, "CD_CODE"));
        	this.dsListSub.setColumn(nrow, "DS_CODE", this.dsList.getColumn(this.dsList.rowposition, "DS_CODE"));
        	this.dsListSub.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsListSub.setColumn(nrow, "YN_USE", "Y");
        	this.dsListSub.set_enableevent(true);

        	this.gfnSetFormStatus(this, "I");
        };


        /*
         * 삭제 버튼
         */
        this.fnDel = function() {
         	this.gfnGridDel(this.dxGrid);
        }

        this.fnDelSub = function() {
         	this.gfnGridDel(this.dxGridSub);

        	this.gfnSetFormStatus(this, "D");
        }

        /*
         * 저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnSaveValid(this.dxGrid)) return;

        	if (!this.gfnGridValidate(this.dxGridSub)) return;
        	if (!this.fnSaveValid(this.dxGridSub)) return;

        	this.dxGrid.updateToDataset();
        	this.dxGridSub.updateToDataset();

        	this.dsSave.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        		case "I":
        		case "U":
        		case "D":
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "TY_WRK", flag);
        			this.dsSave.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSave.setColumn(nrow, "CD_CODE", this.dsList.getColumn(i, "CD_CODE"));
        			this.dsSave.setColumn(nrow, "DS_CODE", this.dsList.getColumn(i, "DS_CODE"));
        			this.dsSave.setColumn(nrow, "RT_LIMIT", this.dsList.getColumn(i, "RT_LIMIT"));
        			this.dsSave.setColumn(nrow, "AM_LIMIT", this.dsList.getColumn(i, "AM_LIMIT"));
        			this.dsSave.setColumn(nrow, "DS_LIMIT", this.dsList.getColumn(i, "DS_LIMIT"));
        			this.dsSave.setColumn(nrow, "CD_EMP", this.dsList.getColumn(i, "CD_EMP"));
        			this.dsSave.setColumn(nrow, "DS_BASE", this.dsList.getColumn(i, "DS_BASE"));
        			this.dsSave.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        			this.dsSave.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        			this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;
        		}
        	}

        	this.dsSaveSub.clearData();
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        		case "I":
        		case "U":
        		case "D":
        			var nrow = this.dsSaveSub.addRow();
        			this.dsSaveSub.setColumn(nrow, "TY_WRK", flag);
        			this.dsSaveSub.setColumn(nrow, "CD_SUBCODE", this.dsListSub.getColumn(i, "CD_SUBCODE"));
        			this.dsSaveSub.setColumn(nrow, "DS_SUBCODE", this.dsListSub.getColumn(i, "DS_SUBCODE"));
        			this.dsSaveSub.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSaveSub.setColumn(nrow, "CD_CODE", this.dsListSub.getColumn(i, "CD_CODE"));
        			this.dsSaveSub.setColumn(nrow, "CD_BEFORE", this.dsListSub.getColumn(i, "CD_BEFORE"));
        			this.dsSaveSub.setColumn(nrow, "CD_AFTER", this.dsListSub.getColumn(i, "CD_AFTER"));
        			this.dsSaveSub.setColumn(nrow, "YN_BASEINFO", this.dsListSub.getColumn(i, "YN_BASEINFO"));
        			this.dsSaveSub.setColumn(nrow, "YN_SLIP", this.dsListSub.getColumn(i, "YN_SLIP"));
        			this.dsSaveSub.setColumn(nrow, "CD_ACCOUNT", this.dsListSub.getColumn(i, "CD_ACCOUNT"));
        			this.dsSaveSub.setColumn(nrow, "DS_REM", this.dsListSub.getColumn(i, "DS_REM"));
        			this.dsSaveSub.setColumn(nrow, "YN_USE", this.dsListSub.getColumn(i, "YN_USE"));
        			this.dsSaveSub.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;
        		}
        	}

        	if (this.dsSaveSub.rowcount == 0 && this.dsSave.rowcount == 0) return;


        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave saveSub=dsSaveSub";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        this.fnSaveSub = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridSub)) return;
        	if (!this.fnSaveValid(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsSaveSub.clearData();
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        		case "I":
        		case "U":
        		case "D":
        			var nrow = this.dsSaveSub.addRow();
        			this.dsSaveSub.setColumn(nrow, "TY_WRK", flag);
        			this.dsSaveSub.setColumn(nrow, "CD_SUBCODE", this.dsListSub.getColumn(i, "CD_SUBCODE"));
        			this.dsSaveSub.setColumn(nrow, "DS_SUBCODE", this.dsListSub.getColumn(i, "DS_SUBCODE"));
        			this.dsSaveSub.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSaveSub.setColumn(nrow, "CD_CODE", this.dsListSub.getColumn(i, "CD_CODE"));
        			this.dsSaveSub.setColumn(nrow, "DS_BEFORE", this.dsListSub.getColumn(i, "DS_BEFORE"));
        			this.dsSaveSub.setColumn(nrow, "DS_AFTER", this.dsListSub.getColumn(i, "DS_AFTER"));
        			this.dsSaveSub.setColumn(nrow, "YN_BASEINFO", this.dsListSub.getColumn(i, "YN_BASEINFO"));
        			this.dsSaveSub.setColumn(nrow, "YN_SLIP", this.dsListSub.getColumn(i, "YN_SLIP"));
        			this.dsSaveSub.setColumn(nrow, "CD_ACCOUNT", this.dsListSub.getColumn(i, "CD_ACCOUNT"));
        			this.dsSaveSub.setColumn(nrow, "DS_REM", this.dsListSub.getColumn(i, "DS_REM"));
        			this.dsSaveSub.setColumn(nrow, "YN_USE", this.dsListSub.getColumn(i, "YN_USE"));
        			this.dsSaveSub.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;
        		}
        	}

        	if (this.dsSaveSub.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveSub=dsSaveSub";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }
        /*
         * 엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {
        	return true;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	return true;
        };

        this.fnSaveValid = function(pGrid) {
        	var objDs = pGrid.getBindDataset();

        	var msg = "";
        	for (var i = 0; i < objDs.rowcount; i++) {
        		var flag = this.gfnGetFlag(objDs, i);
        		switch(flag) {
        		case "I":
        		case "U":
        			var frDate = objDs.getColumn(i, "FR_EDUCATION");
        			var toDate = objDs.getColumn(i, "TO_EDUCATION");
        			if (!this.gfnIsNull(frDate) && !this.gfnIsNull(toDate)) {
        				if (frDate > toDate) {
        					msg += i + "행 교육시작일이 종료일보다 클 수 없습니다.\n";
        				}
        			}
        			break;
        		}
        	}

        	if (this.gfnIsNull(msg)) {
        		return true;
        	} else {
        		var arrError = [msg];
        		this.gfnAlert(arrError);
        		return false;
        	}
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.gfnGridAfterSelect(this.dxGridSub);

        		this.fnButtonEnable();
        	}
        	else if (svcID == "save" || svcID == "saveSub") {
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {	// 법인코드
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var gridIdx = this.dxGrid.currentrow;

        	if (id == "DAX_CFCOMMONCODE_MULTY") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "EA");
         	}
        	else if (id =="DAX_EDU_BASE") {	// 교육구분
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	}

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	if(id == "DAX_CFCOMMONCODE_MULTY")		// 직원구분	DAX_CERTIFICATE_DEPT
        	{
        		if (arrData.length > 0) {
        			var strCdCode = "";
        			var strDsCode = "";
        			for(var r = 0; r < arrData.length; r++) {
        				strCdCode += arrData[r]["CD_CODE"]+",";
        				strDsCode += arrData[r]["DS_CODE"]+",";
        			}

        			strCdCode = strCdCode.substr(0,strCdCode.length-1);
        			strDsCode = strDsCode.substr(0,strDsCode.length-1);

        		}
        		trace(" strDsCode=>" + strDsCode);
        		this.dsList.setColumn(this.dsList.rowposition, "CD_EMP", strCdCode);
        		this.dsList.setColumn(this.dsList.rowposition, "DS_EMP", strDsCode);
        	}
        	else if (id =="DAX_EDU_BASE") {	// 교육구분

        		trace(" DAX_EDU_BASE=>" + arrData[0]["CD_CODE"]);
        		this.dsListSub.set_enableevent(false);
        		var maxCode = this.fnMaxCode(arrData[0]["CD_CODE"]);
        		this.dsListSub.setColumn(this.dsListSub.rowposition, "CD_SUBCODE" , maxCode);
        		this.dsListSub.set_enableevent(true);
        	}

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj, e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        }

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };


        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        }

        this.fnButtonEnable = function()
        {

        	if (this.dsList.rowcount != 0 )
        	{
        		this.btnInsertSub.set_enable(true);
        		this.btnDeleteSub.set_enable(true);

        	} else {
        		this.btnInsertSub.set_enable(false);
        		this.btnDeleteSub.set_enable(false);
        	}

        };

        this.fnMaxCode = function(vCode)
        {
        	this.dsListSub.set_filterstr();
        	this.dsListSub.filter();
        	this.dsListSub.filter("String(CD_CODE).indexOf('"+ vCode +"')==0");

        	var maxCode = this.dsListSub.getMax("CD_SUBCODE");

        	if (this.gfnIsNull(maxCode) || maxCode == undefined)
        	{
        		maxCode = vCode + '01';
        	}else {
        		maxCode = vCode + this.gfnRight('0' + String(nexacro.toNumber(maxCode.substr(3,2))+1),2);
        	}
        	this.dsListSub.set_filterstr();
        	this.dsListSub.filter();
        	return maxCode;
        };

        this.dsListSub_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboYN_USE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataBottom.form.btnDeleteSub.addEventHandler("onclick",this.fnDelSub,this);
            this.divData.form.divDataBottom.form.btnInsertSub.addEventHandler("onclick",this.fnAddSub,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsListSub.addEventHandler("onvaluechanged",this.dsListSub_onvaluechanged,this);
            this.dsListSub.addEventHandler("oncolumnchanged",this.dsListSub_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAB_EDU_BASE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
