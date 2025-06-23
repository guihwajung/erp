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
            this.set_titletext("개인별연차촉진");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DACPR_YEARLYPLAN_BASE_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DACPR_YEARLYPLAN_BASE_SELECT_DETAIL</Col></Row><Row><Col id=\"SP\">DACPR_YEARLYPLAN_BASE_SAVE</Col><Col id=\"TARGET\">d_save</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_BASE\"/><Col id=\"ID_SABUN\"/><Col id=\"ID_PERSON\"/><Col id=\"DS_HNAME\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSubL", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSubR", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_BASE","0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_BASE","staYR_BASE:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYR_BASE:0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DSX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_CORP:0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("성명");
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfID_SABUN:10","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","35.15%","100.00%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("연차정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSplitter2","50%","0","5","100.00%",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_background("skyblue");
            obj.set_cursor("e-resize");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divL","0","2",null,null,"divSplitter2:5","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("divL");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staSubTL","7","0","150","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divL.form);
            obj.set_taborder("0");
            obj.set_text("계획연차정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.form.divL.addChild(obj.name, obj);

            obj = new Grid("objGridSubL","0","staSubTL:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form.divL.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.divL.addChild(obj.name, obj);

            obj = new Button("btnSubLeftSave",null,"2","60","22","2",null,null,null,null,null,this.divData.form.divDataBottom.form.divL.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.divData.form.divDataBottom.form.divL.addChild(obj.name, obj);

            obj = new Button("btnSubLeftDel",null,"2","60","22","btnSubLeftSave:1",null,null,null,null,null,this.divData.form.divDataBottom.form.divL.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.divData.form.divDataBottom.form.divL.addChild(obj.name, obj);

            obj = new Button("btnSubLeftAdd",null,"2","60","22","btnSubLeftDel:1",null,null,null,null,null,this.divData.form.divDataBottom.form.divL.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            this.divData.form.divDataBottom.form.divL.addChild(obj.name, obj);

            obj = new Div("divR","divSplitter2:6","2",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("divR");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staSubTR","11","0","150","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divR.form);
            obj.set_taborder("0");
            obj.set_text("지정연차정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.form.divR.addChild(obj.name, obj);

            obj = new Grid("objGridSubR","0","staSubTR:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form.divR.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.divR.addChild(obj.name, obj);

            obj = new Button("btnSubRightSave",null,"2","60","22","0",null,null,null,null,null,this.divData.form.divDataBottom.form.divR.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            this.divData.form.divDataBottom.form.divR.addChild(obj.name, obj);

            obj = new Button("btnSubRightDel",null,"2","60","22","btnSubRightSave:1",null,null,null,null,null,this.divData.form.divDataBottom.form.divR.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.divData.form.divDataBottom.form.divR.addChild(obj.name, obj);

            obj = new Button("btnSubRightAdd",null,"2","60","22","btnSubRightDel:1",null,null,null,null,null,this.divData.form.divDataBottom.form.divR.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.divData.form.divDataBottom.form.divR.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYR_BASE.form.TextBox","value","dsSearch","YR_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_YEARLYPLAN_BASE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj, e) {
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
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid     = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSubL = this.divData.form.divDataBottom.form.divL.form.objGridSubL;
        	this.dxGridSubR = this.divData.form.divDataBottom.form.divR.form.objGridSubR;

        	// 검색영역
        	this.ctclYR_BASE  = this.divSearch.form.ctclYR_BASE;
        	this.ccfCD_CORP   = this.divSearch.form.ccfCD_CORP;
        	this.ccfID_SABUN  = this.divSearch.form.ccfID_SABUN;
        	this.edtID_PERSON = this.divSearch.form.edtID_PERSON;
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드영역
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAC_YEARLYPLAN_BASE");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGridRowCellChanged, this);
        	this.gfnGridInit(this.dxGridSubL, this.dsListSubL, "DA", "DAC_YEARLYPLAN_BASE_D");
        	this.gfnGridInit(this.dxGridSubR, this.dsListSubR, "DA", "DAC_YEARLYPLAN_BASE_D");

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 성명
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	// 데이터셋영역
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_BASE", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("ID_PERSON", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("IP_ADDR", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");

        	// 조회(서브)
        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("YR_BASE", "string");
        	this.dsSelectSub.addColumn("TY_GUBUN", "string");
        	this.dsSelectSub.addColumn("TY_PLAN", "string");
        	this.dsSelectSub.addColumn("ID_PERSON", "string");
        	this.dsSelectSub.addColumn("ID_SABUN", "string");
        	this.dsSelectSub.addColumn("CD_CORP", "string");
        	this.dsSelectSub.addColumn("ID_USER", "string");
        	this.dsSelectSub.addColumn("IP_ADDR", "string");
        	this.dsSelectSub.addColumn("GR_SEARCH", "string");
        	this.dsSelectSub.addColumn("GR_CORP", "string");

        	// 저장(서브)
        	this.dsSaveSub = new Dataset();
        	this.dsSaveSub.addColumn("YR_BASE", "string");
        	this.dsSaveSub.addColumn("TY_GUBUN", "string");
        	this.dsSaveSub.addColumn("TY_PLAN", "string");
        	this.dsSaveSub.addColumn("CD_CORP", "string");
        	this.dsSaveSub.addColumn("ID_SABUN", "string");
        	this.dsSaveSub.addColumn("ID_PERSON", "int");
        	this.dsSaveSub.addColumn("DT_PLAN", "string");
        	this.dsSaveSub.addColumn("ID_USER", "string");
        	this.dsSaveSub.addColumn("IP_ADDR", "string");
        	this.dsSaveSub.addColumn("GR_SEARCH", "string");
        	this.dsSaveSub.addColumn("GR_CORP", "string");
        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	// 년도
        	this.dsSearch.setColumn(0, "YR_BASE", this.gfnGetDate().substring(0, 4));

        	if (this.getOwnerFrame().CD_CORP == null) {
        		this.fnSetCodeFinder(this.ccfCD_CORP, this.AuthClient.CD_CORP);				// 법인
        		this.fnSetCodeFinder(this.ccfID_SABUN, this.AuthClient.ID_SABUN);			// 성명
        	} else {
        		// 다른화면으로부터 파라미터세팅
        		if (!this.gfnIsNull(sthis.getOwnerFrame().CD_CORP)) {
        			this.fnSetCodeFinder(this.ccfCD_CORP, this.getOwnerFrame().DS_CORP);
        		}
        		if (!this.gfnIsNull(sPARAM_ID_SABUN)) {
        			this.fnSetCodeFinder(this.ccfID_SABUN, this.getOwnerFrame().ID_SABUN);

        		}
        	}

        	// 권한별 설정
            // GR_SEARCH = 1: 전체, 2: 법인, 3: 본부, 5: 부문, 7: 부서, 9: 개인
            // TY_AUTH = F: 전체, U: 쓰기, R: 읽기
        	if (this.FormInfo.GR_SEARCH  >= "2") {
        		this.ccfCD_CORP.set_enable(false);
        	}
        	if (this.FormInfo.GR_SEARCH == "9") {
        		this.ccfID_SABUN.set_enable(false);
        	}

        	if (this.dsSearch.getColumn(0, "CD_CORP").length > 0 && this.dsSearch.getColumn(0, "ID_SABUN").length > 0) {
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YR_BASE"  , this.dsSearch.getColumn(0, "YR_BASE"));
        	this.dsSelect.setColumn(0, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_SABUN" , this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));
        	this.dsSelect.setColumn(0, "ID_USER"  , this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "IP_ADDR"  , this.AuthClient.NO_IP);
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP"  , this.AuthClient.CD_CORP);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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
         * 입력 버튼
         */
        this.fnAdd = function() {

        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         * 저장 버튼
         * planType
         * (P:계획 / A:지정)
         */
        this.fnSave = function(planType, targetGrid) {
        	var COL_SPLIT = "|";
        	var ROW_SPLIT = ";";

        	targetGrid.updateToDataset();
        	var targetDs = targetGrid.getBindDataset();

        	if (targetDs.rowcount == 0) return;

        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(targetGrid)) return;

        	// save SP 한개로 사용하는 경우
        	this.dsSaveSub.clearData();
        	var nrow = this.dsSaveSub.addRow();
        	this.dsSaveSub.setColumn(nrow, "YR_BASE"  , this.dsList.getColumn(this.dsList.rowposition, "YR_BASE"));
        	this.dsSaveSub.setColumn(nrow, "TY_GUBUN" , this.dsList.getColumn(this.dsList.rowposition, "TY_GUBUN"));
        	this.dsSaveSub.setColumn(nrow, "TY_PLAN"  , planType);
        	this.dsSaveSub.setColumn(nrow, "CD_CORP"  , this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsSaveSub.setColumn(nrow, "ID_SABUN" , this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"));
        	this.dsSaveSub.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON"));
        	this.dsSaveSub.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        	this.dsSaveSub.setColumn(nrow, "IP_ADDR"  , this.AuthClient.NO_IP);
        	this.dsSaveSub.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSaveSub.setColumn(nrow, "GR_CORP"  , this.AuthClient.CD_CORP);

        	var strData = "";
        	for (var i = 0; i < targetDs.rowcount; i++) {
        		var flag = this.gfnGetFlag(targetDs, i);
        		if (flag == "D") continue;

        		var sDT_VALUE = this.gfnNvl(targetDs.getColumn(i, "DT_VALUE"), "");	// 일자
        		var sTY_VALUE = this.gfnNvl(targetDs.getColumn(i, "TY_VALUE"), "");	// 반차여부

        		var sRowData = sDT_VALUE + COL_SPLIT + sTY_VALUE;
        		if (i == (targetDs.rowcount - 1)) {
        			strData = strData + sRowData;
        		} else {
        			strData = strData + sRowData + ROW_SPLIT;
        		}
        	}

        	this.dsSaveSub.setColumn(nrow, "DT_PLAN", strData);

        	if (this.dsSaveSub.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_save=dsSaveSub";
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
        	this.gfnExcelExport(this.dxGridSubL);
        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {
        	return true;
        }

        /*
         * 조회 버튼(서브)
         */
        this.fnSelectSub = function() {
        	this.fnSelectSubLeft();
        	this.fnSelectSubRight();
        }

        /*
         * 조회 버튼(서브 왼쪽)
         */
        this.fnSelectSubLeft = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.gfnGridBeforeSelect(this.dxGridSubL);
        	this.dsListSubL.clearData();

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "YR_BASE"  , this.dsList.getColumn(this.dsList.rowposition, "YR_BASE"));
        	this.dsSelectSub.setColumn(0, "TY_GUBUN" , this.dsList.getColumn(this.dsList.rowposition, "TY_GUBUN"));
        	this.dsSelectSub.setColumn(0, "TY_PLAN"  , "P"); //계획구분(P:계획 / A:지정)
        	this.dsSelectSub.setColumn(0, "ID_PERSON", this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON"));
        	this.dsSelectSub.setColumn(0, "ID_SABUN" , this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"));
        	this.dsSelectSub.setColumn(0, "CD_CORP"  , this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsSelectSub.setColumn(0, "ID_USER"  , this.AuthClient.ID_USER);
        	this.dsSelectSub.setColumn(0, "IP_ADDR"  , this.AuthClient.NO_IP);
        	this.dsSelectSub.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelectSub.setColumn(0, "GR_CORP"  , this.AuthClient.CD_CORP);

        	var strSvcId    = "detailLeft";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSubL=d_select0";
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
         * 조회 버튼(서브 오른쪽)
         */
        this.fnSelectSubRight = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.gfnGridBeforeSelect(this.dxGridSubR);
        	this.dsListSubR.clearData();

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "YR_BASE"  , this.dsList.getColumn(this.dsList.rowposition, "YR_BASE"));
        	this.dsSelectSub.setColumn(0, "TY_GUBUN" , this.dsList.getColumn(this.dsList.rowposition, "TY_GUBUN"));
        	this.dsSelectSub.setColumn(0, "TY_PLAN"  , "A"); //계획구분(P:계획 / A:지정)
        	this.dsSelectSub.setColumn(0, "ID_PERSON", this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON"));
        	this.dsSelectSub.setColumn(0, "ID_SABUN" , this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"));
        	this.dsSelectSub.setColumn(0, "CD_CORP"  , this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsSelectSub.setColumn(0, "ID_USER"  , this.AuthClient.ID_USER);
        	this.dsSelectSub.setColumn(0, "IP_ADDR"  , this.AuthClient.NO_IP);
        	this.dsSelectSub.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelectSub.setColumn(0, "GR_CORP"  , this.AuthClient.CD_CORP);

        	var strSvcId    = "detailRight";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSubR=d_select0";
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
         * 추가(서브 왼쪽)
         */
        this.divData_divDataBottom_divL_btnSubLeftAdd_onclick = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;
        	if (!this.fnCanSubModify("P")) return;

        	var nrow = this.gfnGridAdd(this.dxGridSubL);
        }

        /*
         * 삭제(서브 왼쪽)
         */
        this.divData_divDataBottom_divL_btnSubLeftDel_onclick = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGridSubL)) return;
        	if (!this.fnCanSubModify("P")) return;

        	this.gfnGridDel(this.dxGridSubL);
        }

        /*
         * 저장(서브 왼쪽)
         */
        this.divData_divDataBottom_divL_btnSubLeftSave_onclick = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;
        	if (!this.fnCanSubModify("P")) return;

        	this.fnSave("P", this.dxGridSubL); //(P:계획 / A:지정)
        }

        /*
         * 추가(서브 오른쪽)
         */
        this.divData_divDataBottom_divR_btnSubRightAdd_onclick = function(obj, e) {
        	if (this.gfnGridIsRow(this.dxGrid)) return;
        	if (this.fnCanSubModify("A")) return;

        	var nrow = this.gfnGridAdd(this.dxGridSubR);
        }

        /*
         * 삭제(서브 오른쪽)
         */
        this.divData_divDataBottom_divR_btnSubRightDel_onclick = function(obj, e) {
        	if(!this.gfnGridIsRow(this.dxGridSubR)) return;
        	if(!this.fnCanSubModify("A")) return;

        	this.gfnGridDel(this.dxGridSubR);
        };

        /*
         * 저장(서브 오른쪽)
         */
        this.divData_divDataBottom_divR_btnSubRightSave_onclick = function(obj, e) {
        	if( !this.gfnGridIsRow(this.dxGrid)) return;
        	if (!this.fnCanSubModify("A")) return;

        	this.fnSave("A", this.dxGridSubR); //(P:계획 / A:지정)
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function() {
        	return true;
        }

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
        	} else if (svcID == "detailLeft") {
        		this.gfnGridAfterSelect(this.dxGridSubL);
        	} else if (svcID == "detailRight") {
        		this.gfnGridAfterSelect(this.dxGridSubR);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			// 저장 후에 메인 select가 실행된게 아니라 sub select가 실행된거라서 화면form상태가 수정상태로 남아있다. 그래서 조회(Q)상태로 초기화시키고 조회함
        			this.gfnSetFormStatus(this, "Q");	// 이부분 처리하지 않으면 저장후에 바로 화면 닫을때 변경된 데이터있다고 메시지 나옴
        			this.FormBtns.SubSelect.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
         		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "GR_CORP"  , this.AuthClient.CD_CORP);
         		dsUserParam.setColumn(nrow, "GR_DEPT"  , this.AuthClient.CD_DEPT);
        	} else if(id == "ccfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if (id == "ccfCD_CORP") {
        		this.fnResetCodeFinder(this.ccfID_SABUN, this.dsSearch, ["ID_SABUN", "DS_HNAME"]);
        		this.fnResetObjectValue(this.edtID_PERSON, this.dsSearch, ["ID_PERSON"]);
        	} else if (id == "ccfID_SABUN") {
        		if (arr.length > 0) {
        			this.fnSetObjectValue(this.edtID_PERSON, arr[0]["ID_PERSON"]);
        		} else {
        			this.fnSetObjectValue(this.edtID_PERSON, "");
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        this.fnGridRowCellChanged = function(obj, e) {
            if ((obj.oldrow > -1 && obj.oldrow == e.row) || (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;

        	//sub Left
        	for (var i = 0; i < this.dsListSubL.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSubL, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}

        	//sub Right
        	if (can_rowchange) {
        		for (var i = 0; i < this.dsListSubR.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsListSubR, i);
        			if (flag == "I" || flag == "U" || flag == "D") {
        				can_rowchange = false;
        				break;
        			}
        		}
        	}

        	if (!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}

        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val) {
        	if (val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // this.fnSearchInit = function(obj, e) {
        // 	if(e == null || (e.pretext != e.posttext)) {
        // 		this.gfnSetFormStatus(this);
        // 		this.gfnGridClear(this.dxGrid);
        // 		this.gfnGridClear(this.dxGridSubL);
        // 		this.gfnGridClear(this.dxGridSubR);
        // 	}
        // }

        this.dsSearch_onvaluechanged = function(obj, e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSubL);
        		this.gfnGridClear(this.dxGridSubR);
        	}
        }

        this.divData_ondragmove = function(obj, e) {
        	if (e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        }

        this.divData_divSplitter_ondrag = function(obj, e) {
        	e.set_userdata("splitter");
        	return true;
        }


        this.divData_divDataBottom_ondragmove = function(obj, e) {
        	if (e.userdata == "splitter2") {
        		this.divData.form.divDataBottom.form.divSplitter2.set_left(e.clientx);
        		this.divData.form.divDataBottom.form.resetScroll();
        	}
        }

        this.divData_divDataBottom_divSplitter2_ondrag = function(obj, e) {
        	e.set_userdata("splitter2");
        	return true;
        }

        this.dsListSubL_onvaluechanged = function(obj, e) {
        	if (e.row >= 0) {
        		if (e.newvalue != e.oldvalue) {
        			if (e.columnid == "DT_VALUE") {	//일자
        			    //일자 바뀌면 반차여부 빈값으로 리셋
        				//반차여부 : TY_VALUE
        				obj.setColumn(e.row, "TY_VALUE", "");
         				if (this.gfnIsNull(e.newvalue)) {
         					obj.setColumn(e.row, "QN_VALUE", 0);
         				}
        			}
        			if (e.columnid == "TY_VALUE") {
        				var sDT_VALUE = obj.getColumn(e.row, "DT_VALUE");
        				if (this.gfnIsNull(sDT_VALUE)) {
        					obj.setColumn(e.row, "QN_VALUE", 0);
        				} else {
        					//반차여부가 빈값이면 적용일수 1 / AM PM일 경우 0.5 자동
        					if (this.gfnIsNull(e.newvalue)) {
        						obj.setColumn(e.row, "QN_VALUE", 1);
        					} else {
        						if (e.newvalue == "AM" || e.newvalue == "PM") {
        							obj.setColumn(e.row, "QN_VALUE", 0.5);
        						}
        					}
        				}
        			}
        		}
        	}
        }

        /************************************************************************
         * 기타 함수
         ************************************************************************/
        this.fnCanSubModify = function(planType){
        	var bRtn = true;

        	if (planType == "P") {	// 계획연차 대상자여부
        		var sYN_PLAN = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "YN_PLAN"), "");
        		if (sYN_PLAN != "Y") {
        			bRtn = false;
        		}
        	} else {	// 지정연차 대상자여부
        		var sYN_APPOINT = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "YN_APPOINT"), "");
        		if (sYN_APPOINT != "Y") {
        			bRtn = false;
        		}

        		if (bRtn) {	// 관리자
        			if (this.FormInfo.GR_SEARCH == "1" || this.FormInfo.GR_SEARCH == "2") {
        				if (this.FormInfo.TY_AUTH != "R") {
        					; //ok
        				} else {
        					bRtn = false;
        				}
        			} else {
        				bRtn = false;
        			}
        		}
        	}

        	if (!bRtn) {
        		this.gfnAlert("수정/삭제 불가합니다.");
        		return bRtn;
        	}

        	return bRtn;
        }

        // 코드파인더 초기화
        this.fnResetCodeFinder = function(obj, dataset, columns) {
        	obj.form.fnCodeFindClear();
        	for (var i = 0; i < columns.length; i++) {
        		dataset.setColumn(0, columns[i], "");
        	}
        }

        // 코드파인더 설정
        this.fnSetCodeFinder = function(obj, value) {
        	obj.form.CDTextBox.set_value(value);
        	obj.form.fnCodeFindLoad();
        }

        // 객체 초기화
        this.fnResetObjectValue = function(obj, dataset, columns) {
        	obj.set_value("");
        	for (var i = 0; i < columns.length; i++) {
        		dataset.setColumn(0, columns[i], "");
        	}
        }

        // 객체 설정
        this.fnSetObjectValue = function(obj, value) {
        	obj.set_value(value);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staID_SABUN.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfID_SABUN.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataBottom.addEventHandler("ondragmove",this.divData_divDataBottom_ondragmove,this);
            this.divData.form.divDataBottom.form.divSplitter2.addEventHandler("ondrag",this.divData_divDataBottom_divSplitter2_ondrag,this);
            this.divData.form.divDataBottom.form.divL.addEventHandler("ondragmove",this.divData_divDataBottom_divL_ondragmove,this);
            this.divData.form.divDataBottom.form.divL.form.btnSubLeftSave.addEventHandler("onclick",this.divData_divDataBottom_divL_btnSubLeftSave_onclick,this);
            this.divData.form.divDataBottom.form.divL.form.btnSubLeftDel.addEventHandler("onclick",this.divData_divDataBottom_divL_btnSubLeftDel_onclick,this);
            this.divData.form.divDataBottom.form.divL.form.btnSubLeftAdd.addEventHandler("onclick",this.divData_divDataBottom_divL_btnSubLeftAdd_onclick,this);
            this.divData.form.divDataBottom.form.divR.form.btnSubRightSave.addEventHandler("onclick",this.divData_divDataBottom_divR_btnSubRightSave_onclick,this);
            this.divData.form.divDataBottom.form.divR.form.btnSubRightDel.addEventHandler("onclick",this.divData_divDataBottom_divR_btnSubRightDel_onclick,this);
            this.divData.form.divDataBottom.form.divR.form.btnSubRightAdd.addEventHandler("onclick",this.divData_divDataBottom_divR_btnSubRightAdd_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsListSubL.addEventHandler("onvaluechanged",this.dsListSubL_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_YEARLYPLAN_BASE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
