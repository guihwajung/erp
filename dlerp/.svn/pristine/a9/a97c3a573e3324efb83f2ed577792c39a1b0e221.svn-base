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
            this.set_titletext("유치원 학자금 지급 대상자 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"YM_JIGUB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_TUITION\"/><Col id=\"CD_LEVEL\"/><Col id=\"DT_BASE\"/><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"CD_DEPT\"/><Col id=\"DS_DEPT\"/><Col id=\"ID_SABUN\"/><Col id=\"DS_HNAME\"/><Col id=\"DS_LEVEL\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_TUITION_TARGET_CHILD_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_TUITION_TARGET_CHILD_SAVE</Col></Row><Row><Col id=\"SP\">DABPR_TUITION_TARGET_CHILD_CREATE</Col><Col id=\"TARGET\">createTarget</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DABPR_TUITION_ORDER_SELECT</Col></Row><Row><Col id=\"TARGET\">approve</Col><Col id=\"SP\">DABPR_TUITION_CHILD_APPROVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_TUITION","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("생성년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_TUITION","staYM_TUITION:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","staYM_TUITION:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","staYM_TUITION:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_LEVEL","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("학력");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_LEVEL","staCD_LEVEL:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","staYM_TUITION:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","staYM_TUITION:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_DEPT:0.0","staYM_TUITION:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staYM_TUITION:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_BASE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_taborder("10");
            obj.set_text("생성일자");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BASE","staDT_BASE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","69.5%","0","23","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://images/slt_WF_SplitterV.png\') no-repeat center center");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","-3",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle1","0","0","100%","35",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_text("학자금 대상자");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTitle1:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","-3",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle2","0","0","150","35",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("발령내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","staTitle2:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYM_TUITION.form.TextBox","value","dsSearch","YM_TUITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_LEVEL.form.CDTextBox","value","dsSearch","CD_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_LEVEL.form.DSTextBox","value","dsSearch","DS_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclDT_BASE","value","dsSearch","DT_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
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
        this.registerScript("DAB_TUITION_TARGET_CHILD.xfdl", function() {
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
        	this.fnSetInit();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreateTarget = this.gfnFormButtonAdd("CreateTarget", "fnCreateTarget");		// 대상자 생성
        	this.btnPayApply     = this.gfnFormButtonAdd("PayApply"    , "fnPayApply");			// 급여적용
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYM_TUITION = this.divSearch.form.ctclYM_TUITION;	// 지급년도
        	this.ccfCD_LEVEL    = this.divSearch.form.ccfCD_LEVEL;		// 학력
        	this.ctclDT_BASE    = this.divSearch.form.ctclDT_BASE;		// 생성일자
        	this.ccfCD_CORP     = this.divSearch.form.ccfCD_CORP;		// 법인
        	this.ccfCD_DEPT     = this.divSearch.form.ccfCD_DEPT;		// 부서
        	this.ccfID_SABUN    = this.divSearch.form.ccfID_SABUN;		// 사번

        	this.dxGrid    = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_TUITION_TARGET_CHILD");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAB_TUITION_TARGET_ORDER");

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	//코드파인드
        	this.ccfCD_LEVEL.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_TUITION", "string");
        	this.dsSelect.addColumn("CD_LEVEL"  , "string");
        	this.dsSelect.addColumn("DT_BASE"   , "string");
        	this.dsSelect.addColumn("CD_CORP"   , "string");
        	this.dsSelect.addColumn("CD_DEPT"   , "string");
        	this.dsSelect.addColumn("ID_SABUN"  , "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK"    , "string");
        	this.dsSave.addColumn("CD_CORP"   , "string");
        	this.dsSave.addColumn("YM_TUITION", "string");
        	this.dsSave.addColumn("CD_LEVEL"  , "string");
        	this.dsSave.addColumn("DT_BASE"   , "string");
        	this.dsSave.addColumn("YM_JIGUB"  , "string");
        	this.dsSave.addColumn("AM_TUITION", "int");
        	this.dsSave.addColumn("DS_WORK"   , "string");
        	this.dsSave.addColumn("ID_PERSON" , "int");
        	this.dsSave.addColumn("ID_SABUN"  , "string");
        	this.dsSave.addColumn("YN_TARGET" , "string");
        	this.dsSave.addColumn("CH_NAME"   , "string");
        	this.dsSave.addColumn("CH_BIRTH"  , "string");
        	this.dsSave.addColumn("DS_REMARK" , "string");
        	this.dsSave.addColumn("ID_USER"   , "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_CORP"  , "string");
        	this.dsSelectSub.addColumn("ID_PERSON", "string");
        	this.dsSelectSub.addColumn("ID_SABUN" , "string");

        	this.dsApprove = new Dataset();
        	this.dsApprove.addColumn("ID_PERSON" , "INT");
        	this.dsApprove.addColumn("CD_CORP"   , "STRING");
        	this.dsApprove.addColumn("ID_SABUN"  , "STRING");
        	this.dsApprove.addColumn("CH_NAME"   , "STRING");
        	this.dsApprove.addColumn("CH_BIRTH"  , "STRING");
        	this.dsApprove.addColumn("AM_TUITION", "STRING");
        // 	this.dsApprove.addColumn("CD_LEVEL"  , "STRING");
        // 	this.dsApprove.addColumn("CD_TUITION", "STRING");
        	this.dsApprove.addColumn("YM_JIGUB"  , "STRING");
        	this.dsApprove.addColumn("DS_REMARK" , "STRING");
        	this.dsApprove.addColumn("ID_USER"   , "STRING");

        	this.dsCreateTarget = new Dataset();
        	this.dsCreateTarget.addColumn("CD_CORP"   , "string");
        	this.dsCreateTarget.addColumn("YM_TUITION", "string");
        	this.dsCreateTarget.addColumn("CD_LEVEL"  , "string");
        	this.dsCreateTarget.addColumn("DT_BASE"   , "string");
        	this.dsCreateTarget.addColumn("ID_USER"   , "string");
        };

        /************************************************************************
         * 초기화 이벤트
         ************************************************************************/
        this.fnSetInit = function() {
        	this.dsSearch.set_enableevent(false);
        	var today = this.gfnGetDate();
        	if (!this.gfnIsNull(this.getOwnerFrame().YM_TUITION)) {
        		this.dsSearch.setColumn(0, "YM_TUITION", this.getOwnerFrame().YM_TUITION);
        		this.dsSearch.setColumn(0, "CD_CORP"   , this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP"   , this.getOwnerFrame().DS_CORP);
        		this.dsSearch.setColumn(0, "DT_BASE"   , today);
        	} else {
        		this.dsSearch.setColumn(0, "YM_TUITION", this.gfnGetDate().substr(0, 6));
        		this.dsSearch.setColumn(0, "CD_CORP"   , this.AuthClient.CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP"   , this.AuthClient.DS_CORP);
        		this.dsSearch.setColumn(0, "DT_BASE"   , today);
        	}
        	this.dsSearch.set_enableevent(true);

        	if (this.FormInfo.GR_SEARCH == "9") {
        		this.dsSearch.set_enableevent(false);
        		this.dsSearch.setColumn(0, "ID_SABUN", this.AuthClient.ID_SABUN);
        		this.dsSearch.setColumn(0, "DS_HNAME", this.AuthClient.DS_HNAME);
        		this.dsSearch.set_enableevent(true);

        		//부서를 사번에 맞게 셋팅
        		this.ccfID_SABUN.form.fnCodeFindLoad();

        		//this.dsSearch.set_enableevent(true);
        		this.ccfCD_CORP.form.fnFitToContents();
        		this.ccfCD_DEPT.form.fnFitToContents();
        		this.ccfCD_DEPT.form.set_readonly(true);
        		this.ccfID_SABUN.form.fnFitToContents();
        	}

        	this.FormBtns.Select.click();
        };
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
            this.dsSelect.setColumn(0, "YM_TUITION", this.dsSearch.getColumn(0, "YM_TUITION"));
        	this.dsSelect.setColumn(0, "CD_LEVEL"  , this.dsSearch.getColumn(0, "CD_LEVEL"));
        	this.dsSelect.setColumn(0, "DT_BASE"   , this.dsSearch.getColumn(0, "DT_BASE"));
        	this.dsSelect.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_DEPT"   , this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "ID_SABUN"  , this.dsSearch.getColumn(0, "ID_SABUN"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType,		// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow, "YM_TUITION", this.dsSearch.getColumn(0, "YM_TUITION"));
        	this.dsList.setColumn(nrow, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsList.setColumn(nrow, "DS_CORP"   , this.dsSearch.getColumn(0, "DS_CORP"));
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        };

        /*
        *	급여적용 버튼
        */
        this.fnPayApply = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	var nChkRow = this.dsList.findRow("CHK", 1);
        	if (nChkRow == -1) {
        		this.gfnAlert("승인할 행을 선택하세요.");
        		return false;
        	}

        	this.gfnConfirm("선택한 행을 승인 하시겠습니까?",  function(id, val) {
        		if (val) {
        			this.dsApprove.clearData();

        			for (var i = 0; i < this.dsList.rowcount; i++) {
        				if (this.dsList.getColumn(i,"CHK") == 1) {
        					var nrow = this.dsApprove.addRow();
        					//this.dsApprove.setColumn(nrow, "TY_WRK"    , flag);
        					this.dsApprove.setColumn(nrow, "ID_PERSON" , this.dsList.getColumn(i, "ID_PERSON"));
        					this.dsApprove.setColumn(nrow, "CD_CORP"   , this.dsList.getColumn(i, "CD_CORP"));
        					this.dsApprove.setColumn(nrow, "ID_SABUN"  , this.dsList.getColumn(i, "ID_SABUN"));
        					this.dsApprove.setColumn(nrow, "CH_NAME"   , this.dsList.getColumn(i, "CH_NAME"));
        					this.dsApprove.setColumn(nrow, "CH_BIRTH"  , this.dsList.getColumn(i, "CH_BIRTH"));
        					this.dsApprove.setColumn(nrow, "AM_TUITION", this.dsList.getColumn(i, "AM_TUITION"));
        					//this.dsApprove.addColumn(nrow, "CD_LEVEL"   , this.dsList.getColumn(i, "CD_LEVEL"));
        					//this.dsApprove.addColumn(nrow, "CD_TUITION" , this.dsList.getColumn(i, "CD_TUITION"));
        					this.dsApprove.setColumn(nrow, "YM_JIGUB"   , this.dsList.getColumn(i, "YM_JIGUB"));
        					this.dsApprove.setColumn(nrow, "DS_REMARK"  , this.dsList.getColumn(i, "DS_REMARK"));
        					this.dsApprove.setColumn(nrow, "ID_USER"    , this.AuthClient.ID_USER);
        				}
        			}

        			if (this.dsApprove.rowcount == 0) return;

        			var strSvcId    = "approve";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "approve=dsApprove";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        								strSvcType, 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc);	// 통신방법 정의 [생략가능]
        		}
        	});
        };

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
        		case "I":
        		case "U":
        		case "D":
        			var nrow = 0;
        			if( flag == "D" ){
        				nrow = this.dsSave.insertRow(0);
        			} else {
        				nrow = this.dsSave.addRow();
        			}
        			this.dsSave.setColumn(nrow, "TY_WRK"    , flag);
        			this.dsSave.setColumn(nrow, "CD_CORP"   , this.dsList.getColumn(i, "CD_CORP"));
        			this.dsSave.setColumn(nrow, "YM_TUITION", this.dsList.getColumn(i, "YM_TUITION"));
        			this.dsSave.setColumn(nrow, "CD_LEVEL"  , this.dsList.getColumn(i, "CD_LEVEL"));
        			this.dsSave.setColumn(nrow, "DT_BASE"   , this.dsList.getColumn(i, "DT_BASE"));
        			this.dsSave.setColumn(nrow, "YM_JIGUB"  , this.dsList.getColumn(i, "YM_JIGUB"));
        			this.dsSave.setColumn(nrow, "AM_TUITION", this.dsList.getColumn(i, "AM_TUITION"));
        			this.dsSave.setColumn(nrow, "DS_WORK"   , this.dsList.getColumn(i, "DS_WORK"));
        			this.dsSave.setColumn(nrow, "ID_PERSON" , this.dsList.getColumn(i, "ID_PERSON"));
        			this.dsSave.setColumn(nrow, "ID_SABUN"  , this.dsList.getColumn(i, "ID_SABUN"));
        			this.dsSave.setColumn(nrow, "YN_TARGET" , this.dsList.getColumn(i, "YN_TARGET"));
        			this.dsSave.setColumn(nrow, "CH_NAME"   , this.dsList.getColumn(i, "CH_NAME"));
        			this.dsSave.setColumn(nrow, "CH_BIRTH"  , this.dsList.getColumn(i, "CH_BIRTH"));
        			this.dsSave.setColumn(nrow, "DS_REMARK" , this.dsList.getColumn(i, "DS_REMARK"));
        			this.dsSave.setColumn(nrow, "ID_USER"   , this.AuthClient.ID_USER);
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

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	학자금 대상자 조회
         */
        this.fnSelectSub = function() {
        	this.dsListSub.clearData();

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_CORP"  , this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsSelectSub.setColumn(0, "ID_PERSON", this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON"));
        	this.dsSelectSub.setColumn(0, "ID_SABUN" , this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_TUITION"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYM_TUITION.form.TextBox.setFocus();
        		}
        		this.gfnAlert("지급년도를 입력하세요.", "fnVaidateCallback");
        	}

        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
        	}
        	return validate;
        };

        /*
         *	대상자생성 Validate
         */
        this.fnCreateTargetValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_TUITION"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYM_TUITION.form.TextBox.setFocus();
        		}
        		this.gfnAlert("지급년도를 입력하세요.", "fnVaidateCallback");
        	}
        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0, "DT_BASE"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclDT_BASE.setFocus();
        		}
        		this.gfnAlert("기준일자를 입력하세요.", "fnVaidateCallback");
        	}

        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
        	}
        	return validate;
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	switch(svcID) {
        	case "select":
        		this.gfnGridAfterSelect(this.dxGrid);
        		break;
        	case "detail" :
        		//this.gfnGridAfterSelect(this.dxGridSub);
        		break;
        	case "save":
        	case "createTarget":
        		this.FormBtns.Select.click();
        		break;
        	case "approve":
        		this.gfnAlert("승인이 완료되었습니다.");
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        /*
         * 조회조건 코드파인드 호출전
         */
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch (id) {
        	case "ccfCD_LEVEL":
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "SA");
        		dsUserParam.setColumn(nrow, "CD_CORP"  ,  this.dsSearch.getColumn(0, "CD_CORP"));
        		break;
        	case "ccfCD_DEPT":
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			this.gfnAlert("법인을 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "GR_SEARCH" , this.FormInfo.GR_SEARCH); 				// 프로시저에서 실제 사용 안함
        		dsUserParam.setColumn(nrow, "CD_DEPT"   , this.dsSearch.getColumn(0, "CD_DEPT"));	// 프로시저에서 실제 사용 안함
        		dsUserParam.setColumn(nrow, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "");										// 프로시저에서 실제 사용 안함
        		break;
        	case "ccfID_SABUN":
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.dsSearch.getColumn(0, "CD_DEPT"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "");
        		break;
        	}

        	return true;
        };

        /*
         * 조회조건 코드파인드 호출후
         */
        this.fnAfterCDTextChanged = function(id,codeFindData) {
           	var arr = codeFindData;
        	if (id == "ccfID_SABUN") {
        		if(arr.length > 0) {
        			this.dsSearch.setColumn(0, "CD_CORP" , arr[0]["CD_CORP"]);
        			this.dsSearch.setColumn(0, "DS_CORP" , arr[0]["DS_CORP"]);
        			this.dsSearch.setColumn(0, "CD_DEPT" , arr[0]["CD_DEPT"]);
        			this.dsSearch.setColumn(0, "DS_DEPT" , arr[0]["DS_DEPT"]);
        			this.dsSearch.setColumn(0, "ID_SABUN", arr[0]["ID_SABUN"]);
        			this.dsSearch.setColumn(0, "DS_HNAME", arr[0]["DS_HNAME"]);
        		}
        	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        /*
         * 그리드 코드파인드 호출전
         */
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	trace('grid_코드파인드_식별id: ' + id);
        	switch (id) {
        	case "SA":
        		dsUserParam.setColumn(nrow, "CD_PREFIX", id);
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		break;

        	case "DAX_CFBASEINFO_ALL":
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.dsSearch.getColumn(0, "CD_DEPT"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "");
        		break;
        	}
        	return true;
        };

        // 셀 값 변경 후 이벤트
        this.fnGrid_AfterEdit = function(obj,e) {
        	//지급구분
        	if (e.columnid == "YN_TARGET" ){
        		//구분에 따른 금액변경
        		if (e.newvalue == "Y") {
        			this.dsList.setColumn(e.row,"AM_TUITION", "300000");
        		} else if ( e.newvalue == "N") {
        			this.dsList.setColumn(e.row,"AM_TUITION", "100000");
        		} else {
        			this.dsList.setColumn(e.row,"AM_TUITION", "0");
        		}
        	}
        }

        this.fnGrid_RowCellChanged = function(obj,e) {
            if (e.row != e.oldrow) {
        		this.FormBtns.SubSelect.click();
        	}
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         * 대상자 생성
         */
        this.fnCreateTarget = function(obj,e) {
        	if (!this.fnCreateTargetValidate()) return false;

        	var msg = "기존에 생성된 대상자는 지워집니다.\n\n"
        	msg += this.dsSearch.getColumn(0, "YM_TUITION") + "해당 월\n"
            msg += "유치원보육비 및 입학축하금 지원 대상자를 생성하시겠습니까?"
        	this.gfnConfirm(msg, function(id, val) {
        		if (val) {
        			this.dsCreateTarget.clearData();
        			var nrow = this.dsCreateTarget.addRow();
        			this.dsCreateTarget.setColumn(nrow, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsCreateTarget.setColumn(nrow, "YM_TUITION", this.dsSearch.getColumn(0, "YM_TUITION"));
        			this.dsCreateTarget.setColumn(nrow, "CD_LEVEL"  , "09" ); //this.dsSearch.getColumn(0, "CD_LEVEL"));
        			this.dsCreateTarget.setColumn(nrow, "DT_BASE"   , this.dsSearch.getColumn(0, "DT_BASE"));
        			this.dsCreateTarget.setColumn(nrow, "ID_USER"   , this.AuthClient.ID_USER);

        			if (this.dsCreateTarget.rowcount == 0) return;

        			var strSvcId    = "createTarget";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "createTarget=dsCreateTarget";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        								strSvcType, 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc);	// 통신방법 정의 [생략가능]
        		}
        	});
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

        this.divData_ondragmove = function(obj,e) {
        	if (e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e) {
        	e.set_userdata("splitter");
        	return true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staYM_TUITION.addEventHandler("onclick",this.divSearch_staYM_TUITION_onclick,this);
            this.divSearch.form.ctclDT_BASE.addEventHandler("onchanged",this.divSearch_ctclDT_BASE_onchanged,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
        };
        this.loadIncludeScript("DAB_TUITION_TARGET_CHILD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
