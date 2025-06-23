(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_TARGET");
            this.set_titletext("급여계산");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_TARGET_SELECT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DAUPR_TARGET_DELETE</Col></Row><Row><Col id=\"TARGET\">dsAuthForm</Col><Col id=\"SP\">DZZPR_DOTNET_AUTHORITYFORM_SELECT_NEW</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EMPTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSN_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1</Col></Row><Row><Col id=\"VALUE\">2</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">4</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">5</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"VALUE\">6</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"VALUE\">7</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"VALUE\">8</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"VALUE\">9</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"VALUE\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsParamAuthForm", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsParamBtnInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthForm", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtnInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_EMPTYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_SALARY","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("대상년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_SALARY","staYM_SALARY:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYM_SALARY:45","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_EMPTYPE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("직원구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_EMPTYPE","staCD_EMPTYPE:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCD_EMPTYPE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_readonly("false");
            obj.set_text("급여");
            obj.set_value("S");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","0.0","staYM_SALARY:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("지급구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","staTY_SALARY:0.0","staYM_SALARY:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_readonly("false");
            obj.set_text("급여");
            obj.set_value("S");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","cboTY_SALARY:5","staYM_SALARY:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsSN_SALARY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_readonly("false");
            obj.set_text("급여");
            obj.set_value("1");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","cboSN_SALARY:0.0","staYM_SALARY:10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staYM_SALARY:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfID_SABUN:0.0","staCD_EMPTYPE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","staCD_EMPTYPE:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYM_SALARY.form.TextBox","value","dsSearch","YM_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboTY_SALARY","value","dsSearch","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSN_SALARY","value","dsSearch","SN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.cboCD_EMPTYPE","value","dsSearch","CD_EMPTYPE");
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
        this.registerScript("DAU_TARGET.xfdl", function() {
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
        	this.fnSetCombo();
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
        	this.btnSalaryBase     = this.gfnFormButtonAdd("SalaryBase"    , "fnSalaryBase");		// 기초정보
        	this.btnIncome         = this.gfnFormButtonAdd("Income"        , "fnIncome");			// 소득정보
        	this.btnSubst          = this.gfnFormButtonAdd("Subst"         , "fnSubst");			// 공제정보
        	this.btnInitSalarybase = this.gfnFormButtonAdd("InitSalarybase", "fnInitSalarybase");	// 기초생성
        	this.btnInitIncome     = this.gfnFormButtonAdd("InitIncome"    , "fnInitIncome");		// 소득생성
        	this.btnInitSubst      = this.gfnFormButtonAdd("InitSubst"     , "fnInitSubst");		// 공제생성
        	this.btnCalcTax        = this.gfnFormButtonAdd("CalcTax"       , "fnCalcTax");			// 세액계산
        	this.btnInitTotal      = this.gfnFormButtonAdd("InitTotal"     , "fnInitTotal");		// 일괄계산(소득생성+공제생성+세액계산)
        	this.btnClosed         = this.gfnFormButtonAdd("Closed"        , "fnClosed");			// 마감화면이동
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid = this.divData.form.objGrid;

        	// 검색영역
        	this.ctclYM_SALARY = this.divSearch.form.ctclYM_SALARY;	// 대상년월
        	this.cboTY_SALARY  = this.divSearch.form.cboTY_SALARY;	// 지급구분
        	this.cboSN_SALARY  = this.divSearch.form.cboSN_SALARY;
        	this.ccfCD_CORP    = this.divSearch.form.ccfCD_CORP;	// 법인
        	this.ccfCD_DEPT    = this.divSearch.form.ccfCD_DEPT;	// 부서
        	this.ccfID_SABUN   = this.divSearch.form.ccfID_SABUN;	// 성명
        	this.cboCD_EMPTYPE = this.divSearch.form.cboCD_EMPTYPE;	// 직원구분

        	this.grSearch = this.FormInfo.GR_SEARCH;	// 권한
        	this.cdGroup  = this.AuthClient.CD_GROUP;	// 그룹코드
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드영역
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_TARGET");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_SALARY", "string");
        	this.dsSelect.addColumn("SN_SALARY", "bigdecimal");
        	this.dsSelect.addColumn("YM_SALARY", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("CD_EMPTYPE", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");

        	// 삭제
        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("TY_SALARY", "string");
        	this.dsDelete.addColumn("SN_SALARY", "bigdecimal");
        	this.dsDelete.addColumn("YM_SALARY", "string");
        	this.dsDelete.addColumn("ID_SABUN", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");
        }

        /************************************************************************
         * 콤보 설정
         ************************************************************************/
        this.fnSetCombo = function() {
           this.dsCombo = new Dataset();
           this.dsCombo.addColumn("TY_SEL"     , "string");
           this.dsCombo.addColumn("CD_PREFIX"  , "string");
           this.dsCombo.addColumn("CD_UPPREFIX", "string");

           this.dsCombo.addRow();
           this.dsCombo.setColumn(0, "TY_SEL"     , "P");
           this.dsCombo.setColumn(0, "CD_PREFIX"  , "GS");
           this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

           this.dsCombo.addRow();
           this.dsCombo.setColumn(1, "TY_SEL"     , "A");
           this.dsCombo.setColumn(1, "CD_PREFIX"  , "EA");
           this.dsCombo.setColumn(1, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_SALARY=combo0 dsCD_EMPTYPE=combo1";
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

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	this.dsSearch.setColumn(0, "YM_SALARY", this.gfnGetDate().substr(0, 6));	// 대상년월
        	this.cboSN_SALARY.set_index(0);												// 지급구분
        	this.fnSetCodeFinder(this.ccfCD_CORP, this.AuthClient.CD_CORP);				// 법인
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_SALARY" , this.dsSearch.getColumn(0, "TY_SALARY"));
        	this.dsSelect.setColumn(0, "SN_SALARY" , this.dsSearch.getColumn(0, "SN_SALARY"));
        	this.dsSelect.setColumn(0, "YM_SALARY" , this.dsSearch.getColumn(0, "YM_SALARY"));
        	this.dsSelect.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_SABUN"  , this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "CD_EMPTYPE", this.dsSearch.getColumn(0, "CD_EMPTYPE"));
        	this.dsSelect.setColumn(0, "CD_DEPT"   , this.dsSearch.getColumn(0, "CD_DEPT"));

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
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         * 저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsDelete.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch (flag) {
        		case "D":
        			var nrow = this.dsDelete.addRow();
        			this.dsDelete.setColumn(nrow, "TY_SALARY", this.dsSearch.getColumn(0, "TY_SALARY"));
        			this.dsDelete.setColumn(nrow, "SN_SALARY", this.dsSearch.getColumn(0, "SN_SALARY"));
        			this.dsDelete.setColumn(nrow, "YM_SALARY", this.dsSearch.getColumn(0, "YM_SALARY"));
        			this.dsDelete.setColumn(nrow, "ID_SABUN" , this.dsList.getColumn(i, "ID_SABUN"));
        			this.dsDelete.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        			break;
        		}
        	}

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        };

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
        this.fnSelectValid = function() {
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 기초정보 버튼
        this.fnSalaryBase = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	var param = {};
        	param.YM_SALARY = this.dsSearch.getColumn(0, "YM_SALARY");
        	param.YM_SALARY = param.YM_SALARY.length > 0 ? param.YM_SALARY.replace("-", "") : "";
        	param.TY_SALARY = this.dsSearch.getColumn(0, "TY_SALARY");
        	param.SN_SALARY = this.dsSearch.getColumn(0, "SN_SALARY");
        	param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP   = this.dsSearch.getColumn(0, "DS_CORP");
        	param.ID_SABUN  = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.DS_HNAME  = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_SALARYBASE", "fnFormButton_callback", param);
        }

        // 소득정보 버튼
        this.fnIncome = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	var param = {};
        	param.YM_SALARY = this.dsSearch.getColumn(0, "YM_SALARY");
        	param.YM_SALARY = param.YM_SALARY.length > 0 ? param.YM_SALARY.replace("-", "") : "";
        	param.TY_SALARY = this.dsSearch.getColumn(0, "TY_SALARY");
        	param.SN_SALARY = this.dsSearch.getColumn(0, "SN_SALARY");
        	param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP   = this.dsSearch.getColumn(0, "DS_CORP");
        	param.ID_SABUN  = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.DS_HNAME  = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_INCOME", "fnFormButton_callback", param);
        }

        // 공제정보 버튼
        this.fnSubst = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	var param = {};
        	param.YM_SALARY = this.dsSearch.getColumn(0, "YM_SALARY");
        	param.YM_SALARY = param.YM_SALARY.length > 0 ? param.YM_SALARY.replace("-", "") : "";
        	param.TY_SALARY = this.dsSearch.getColumn(0, "TY_SALARY");
        	param.SN_SALARY = this.dsSearch.getColumn(0, "SN_SALARY");
        	param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP   = this.dsSearch.getColumn(0, "DS_CORP");
        	param.ID_SABUN  = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.DS_HNAME  = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_SUBST", "fnFormButton_callback", param);
        }

        // 기초생성 버튼
         this.fnInitSalarybase = function(obj, e) {
        	var param = {};
        	param.YM_SALARY = this.dsSearch.getColumn(0, "YM_SALARY");
        	param.YM_SALARY = param.YM_SALARY.length > 0 ? param.YM_SALARY.replace("-", "") : "";
        	param.TY_SALARY = this.dsSearch.getColumn(0, "TY_SALARY");
        	param.SN_SALARY = this.dsSearch.getColumn(0, "SN_SALARY");
        	param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP   = this.dsSearch.getColumn(0, "DS_CORP");
        	param.ID_SABUN  = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.DS_HNAME  = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_INITSALARYBASE_DLG", "fnFormButton_callback", param);
        }

        // 소득생성 버튼
        this.fnInitIncome = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	var param = {};
        	param.YM_SALARY = this.dsSearch.getColumn(0, "YM_SALARY");
        	param.YM_SALARY = param.YM_SALARY.length > 0 ? param.YM_SALARY.replace("-", "") : "";
        	param.TY_SALARY = this.dsSearch.getColumn(0, "TY_SALARY");
        	param.SN_SALARY = this.dsSearch.getColumn(0, "SN_SALARY");
        	param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP   = this.dsSearch.getColumn(0, "DS_CORP");
        	param.ID_SABUN  = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.DS_HNAME  = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_INITINCOME_DLG", "fnFormButton_callback", param);
        }

        // 공제생성 버튼
        this.fnInitSubst = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	var param = {};
        	param.YM_SALARY = this.dsSearch.getColumn(0, "YM_SALARY");
        	param.YM_SALARY = param.YM_SALARY.length > 0 ? param.YM_SALARY.replace("-", "") : "";
        	param.TY_SALARY = this.dsSearch.getColumn(0, "TY_SALARY");
        	param.SN_SALARY = this.dsSearch.getColumn(0, "SN_SALARY");
        	param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP   = this.dsSearch.getColumn(0, "DS_CORP");
        	param.ID_SABUN  = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.DS_HNAME  = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_INITSUBST_DLG", "fnFormButton_callback", param);
        }

        // 세액계산 버튼
        this.fnCalcTax = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	var param = {};
        	param.YM_SALARY = this.dsSearch.getColumn(0, "YM_SALARY");
        	param.YM_SALARY = param.YM_SALARY.length > 0 ? param.YM_SALARY.replace("-", "") : "";
        	param.TY_SALARY = this.dsSearch.getColumn(0, "TY_SALARY");
        	param.SN_SALARY = this.dsSearch.getColumn(0, "SN_SALARY");
        	param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP   = this.dsSearch.getColumn(0, "DS_CORP");
        	param.ID_SABUN  = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.DS_HNAME  = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_CALCTAX_DLG", "fnFormButton_callback", param);
        }

        // 일괄계산 버튼(소득생성+공제생성+세액계산)
        this.fnInitTotal = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	var param = {};
        	param.YM_SALARY = this.dsSearch.getColumn(0, "YM_SALARY");
        	param.YM_SALARY = param.YM_SALARY.length > 0 ? param.YM_SALARY.replace("-", "") : "";
        	param.TY_SALARY = this.dsSearch.getColumn(0, "TY_SALARY");
        	param.SN_SALARY = this.dsSearch.getColumn(0, "SN_SALARY");
        	param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP   = this.dsSearch.getColumn(0, "DS_CORP");
        	param.ID_SABUN  = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.DS_HNAME  = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_INITTOTAL_DLG", "fnFormButton_callback", param);
        }

        // 마감화면이동 버튼
        this.fnClosed = function(obj, e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	var param = {};
        	param.YM_SALARY = this.dsSearch.getColumn(0, "YM_SALARY");
        	param.YM_SALARY = param.YM_SALARY.length > 0 ? param.YM_SALARY.replace("-", "") : "";
        	param.TY_SALARY = this.dsSearch.getColumn(0, "TY_SALARY");
        	param.SN_SALARY = this.dsSearch.getColumn(0, "SN_SALARY");
        	param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP   = this.dsSearch.getColumn(0, "DS_CORP");
        	param.ID_SABUN  = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.DS_HNAME  = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_CLOSED", "fnFormButton_callback", param);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, args) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "authform") {
        		if (this.dsAuthForm.rowcount > 0) {
        			// 폼 정보
        			this.objForm.CD_MODULE = this.dsAuthForm.getColumn(0, "CD_MODULE");
        			this.objForm.ID_FORM   = this.dsAuthForm.getColumn(0, "ID_FORM");
        			this.objForm.NM_FORM   = this.dsAuthForm.getColumn(0, "NM_FORM");
        			this.objForm.ID_GROUP  = this.dsAuthForm.getColumn(0, "ID_GROUP");
        			this.objForm.GR_SEARCH = this.dsAuthForm.getColumn(0, "GR_SEARCH");
        			this.objForm.TY_AUTH   = this.dsAuthForm.getColumn(0, "TY_AUTH");
        			this.objForm.DS_FORM   = this.dsAuthForm.getColumn(0, "DS_FORM");
        			this.objForm.CD_ROLE   = this.dsAuthForm.getColumn(0, "CD_ROLE");
        			this.objForm.TY_MENU   = this.dsAuthForm.getColumn(0, "TY_MENU");
        			this.objForm.DS_PARAM  = this.dsAuthForm.getColumn(0, "DS_PARAM");

        			// 버튼 정보
        			this.objForm.BtnInfo = [];
        			for (var i = 0; i < this.dsBtnInfo.rowcount; i++) {
        				var json = {};
        				json.ID_BUTTON      = this.dsBtnInfo.getColumn(i, "ID_BUTTON");
        				json.DS_BUTTON      = this.dsBtnInfo.getColumn(i, "DS_BUTTON");
        				json.TY_BUTTON      = this.dsBtnInfo.getColumn(i, "TY_BUTTON");
        				json.RM_BUTTON      = this.dsBtnInfo.getColumn(i, "RM_BUTTON");
        				json.YN_VISIBLE     = this.dsBtnInfo.getColumn(i, "YN_VISIBLE");
        				json.YN_ENABLED     = this.dsBtnInfo.getColumn(i, "YN_ENABLED");
        				json.YN_QUERYX      = this.dsBtnInfo.getColumn(i, "YN_QUERYX");
        				json.YN_UPDATEBLOCK = this.dsBtnInfo.getColumn(i, "YN_UPDATEBLOCK");
        				json.SN_ORDER       = this.dsBtnInfo.getColumn(i, "SN_ORDER");
        				this.objForm.BtnInfo.push(json);
        			}

        			var json = this.gfnArgsToJson(args);
        			if (json.type == "popup" || json.type == "dialog") {
        				if (this.objForm.TY_MENU == "Dialog") {
        					json.type = "dialog";
        				}
        				this.objForm.CD_MODULE    = json.cd_module;
        				this.objForm.ID_FORM      = json.id_form;
        				this.objForm.POP_WIDTH    = this.gfnIsNull(json.width) ? 0: nexacro.toNumber(json.width);
        				this.objForm.POP_HEIGHT   = this.gfnIsNull(json.height) ? 0: nexacro.toNumber(json.height);
        				this.objForm.POP_CALLBACK = this.gfnIsNull(json.callback) ? "": json.callback;
        				this.objForm.POP_ARGS     = json;

        				this.gfnCallPopup(this.objForm, json.type);
        			} else if (json.type == "ext") {
        				// 외부 다이렉트 화면 접근
        				var func = this.objApp.gvMainFrame.form.lookupFunc(json.callback);
        				if (func != null) {
        					func.call(this.objForm);
        				}
        			} else {
        				this.gfnCallNew(this.objForm);
        			}
        		}
        	} else if (svcID == "combo") {
        		this.cboTY_SALARY.set_index(0);
        		this.cboCD_EMPTYPE.set_index(0);
        	}
        }

        this.fnFormButton_callback = function(svcID, val) {
        	if(val != false) {

        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	switch (id) {
        	case "ccfCD_CORP":	// 법인코드
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        		break;

        	case "ccfID_SABUN": // 사번	ccfID_SABUN_FR
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.fnBeforeUserCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.dsSearch.getColumn(0, "CD_DEPT"));
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        		break;

        	case "ccfCD_DEPT":	// 부서코드
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.fnBeforeUserCallback = function() {
        				his.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        		break;
         	}

         	return true;
        }

        this.fnAfterCDTextChanged = function (id, codeFindData) {

        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj, e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        /************************************************************************
         * 기타 함수
         ************************************************************************/
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
            this.divSearch.form.staCD_CORP.addEventHandler("onclick",this.divSearch_staCD_CORP_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_TARGET.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
