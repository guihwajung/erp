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
            this.set_titletext("건강검진 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_HOSPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_HOSPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOSPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HOSPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_FROM\"/><Col id=\"DT_TO\"/><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"CD_DEPT\"/><Col id=\"DS_DEPT\"/><Col id=\"ID_SABUN\"/><Col id=\"DS_HNAME\"/><Col id=\"TY_HOSPITAL\"/><Col id=\"YN_HOSPITAL\"/><Col id=\"ID_PERSON\"/><Col id=\"DS_HOSPITAL\"/><Col id=\"YY_HOSPITAL\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_HOSPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FAMILY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_HOSPITAL_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_HOSPITAL_SAVE</Col></Row><Row><Col id=\"TARGET\">approve</Col><Col id=\"SP\">DABPR_HOSPITAL_APPROVE</Col></Row><Row><Col id=\"TARGET\">sendMail</Col><Col id=\"SP\">DABPR_HOSPITAL_MAIL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_HOSPITAL", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">검진완료</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">미검진</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteList", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","staCD_CORP:10.0","230","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("AutoSet").set("false");
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","staCD_CORP:10.0","228","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_DEPT:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staCD_CORP:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_HOSPITAL","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("검진년도");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_HOSPITAL","staYY_HOSPITAL:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","ctclYY_HOSPITAL:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("검진기간");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TO","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_HOSPITAL","ctclDT_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("검진구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_HOSPITAL","staTY_HOSPITAL:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_HOSPITAL","ccfTY_HOSPITAL:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("검진여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_HOSPITAL","staYN_HOSPITAL:0.0","staCD_CORP:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsYN_HOSPITAL");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("지급");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.ctclYY_HOSPITAL.form.TextBox","value","dsSearch","YY_HOSPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfTY_HOSPITAL.form.CDTextBox","value","dsSearch","TY_HOSPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfTY_HOSPITAL.form.DSTextBox","value","dsSearch","DS_HOSPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboYN_HOSPITAL","value","dsSearch","YN_HOSPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_HOSPITAL.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.FileList = [];

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

        	// 그리드 생성 시점 차이때문에
        	// 화면 오픈 후 조회시 0건인 경우 필터로우가 생성되지 않아
        	// this.fnGrid_AfterInit()에서 this.fnSetInit() 호출
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnRuleImg      = this.gfnFormButtonAdd("RuleImg"     , "fnRuleImg");   	// 학자금규정
        	this.btnCreate       = this.gfnFormButtonAdd("Create"      , "fnCreate"); 	    // 대상자 생성
        	this.btnApprove      = this.gfnFormButtonAdd("Approve"     , "fnApprove");      // 승인
        	this.btnContrary     = this.gfnFormButtonAdd("Contrary"    , "fnContrary");    	// 반려
        	this.btnUpLoadPerson = this.gfnFormButtonAdd("UpLoadPerson", "fnUpLoadPerson"); // 대상자 업로드
        	this.btnEmail        = this.gfnFormButtonAdd("Email"       , "fnEmail");       	// 메일발송
        	this.btnAprv  	     = this.gfnFormButtonAdd("Aprv"	       , "fnAprv"); 		// 결재상신 버튼
        	this.btnSlipQ        = this.gfnFormButtonAdd("SlipQ"       , "fnSlipQ"); 		// 전표조회 버튼
        	this.btnDocQ 	     = this.gfnFormButtonAdd("DocQ"        , "fnDocQ"); 		// 결재문서조회 버튼
        	this.btnAprvCnc      = this.gfnFormButtonAdd("AprvCnc"     , "fnAprv"); 		// 취소결재상신 버튼
        	this.btnSlipCncQ     = this.gfnFormButtonAdd("SlipCncQ"    , "fnSlipQ"); 		// 취소전표조회 버튼
        	this.btnDocCncQ      = this.gfnFormButtonAdd("DocCncQ"     , "fnDocQ"); 		// 취소결재문서조회 버튼
        	this.btnInit         = this.gfnFormButtonAdd("Init"        , "fnAprv"); 		// 결재상태초기화 버튼
        };

        //버튼 활성/비활성 공통 처리
        this.fnButtonCheck = function (){
        	this.gfnBtnCheck(this.btnAprv	   , this.dsList);	//결재상신
        	this.gfnBtnCheck(this.btnSlipQ	   , this.dsList);	//전표조회
        	this.gfnBtnCheck(this.btnDocQ      , this.dsList);	//결재문서조회
        	this.gfnBtnCheck(this.btnAprvCnc   , this.dsList);	//취소결재상신
        	this.gfnBtnCheck(this.btnSlipCncQ  , this.dsList);	//취소전표조회
        	this.gfnBtnCheck(this.btnDocCncQ   , this.dsList);	//취소결재문서조회
        	this.gfnBtnCheck(this.btnInit      , this.dsList);	//결재상태초기화
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYY_HOSPITAL = this.divSearch.form.ctclYY_HOSPITAL;
        	this.ctclDT_FROM     = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO       = this.divSearch.form.ctclDT_TO;
        	this.ccfTY_HOSPITAL  = this.divSearch.form.ccfTY_HOSPITAL;
        	this.ccboYN_HOSPITAL = this.divSearch.form.ccboYN_HOSPITAL;
        	this.ccfCD_CORP 	 = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT 	 = this.divSearch.form.ccfCD_DEPT;
        	this.ccfID_SABUN     = this.divSearch.form.ccfID_SABUN;

        	this.dxGrid          = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function()  {
        	// 그리드 초기화
        	this.dxGrid.AfterInit = "fnGrid_AfterInit";	// AfterInit 은 반드시 gfnGridInit 전에 선언.
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_HOSPITAL");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";	 // 전체체크박스 체크/해제 이벤트
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	//코드파인드
        	this.ccfTY_HOSPITAL.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam      = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged          = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam     = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged         = "fnAfterCDTextChanged";

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        };

        /************************************************************************
         * 초기화 이벤트
         ************************************************************************/
        this.fnSetInit = function() {
        	// 파일설정
        	this.YN_FILE = "N";
        	this.fileConfig = this.gfnGetFileConfig();
        	this.filepath = "DA\\DAB\\HOSPITAL\\";
        	this.fileConfig.uploadUrl = this.fileConfig.uploadUrl.replace("path=", "path=" + this.filepath);
        	this.fileConfig.downloadUrl = this.fileConfig.downloadUrl.replace("path=", "path=" + this.filepath);
        	this.vFile = null;

        	// 조회조건

        	this.bPerSelect = false;
        	if (!this.gfnIsNull(this.getOwnerFrame().ID_PERSON)) {
        		this.dsSearch.set_enableevent(false);
        		this.dsSearch.setColumn(0, "YY_HOSPITAL", this.getOwnerFrame().YY_HOSPITAL);
        		this.dsSearch.setColumn(0, "CD_CORP"    , this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP"    , this.getOwnerFrame().DS_CORP);
        		this.dsSearch.setColumn(0, "CD_DEPT"    , this.getOwnerFrame().CD_DEPT);
        		this.dsSearch.setColumn(0, "DS_DEPT"    , this.getOwnerFrame().DS_DEPT);
        		this.dsSearch.setColumn(0, "ID_PERSON"  , this.getOwnerFrame().ID_PERSON);
        		this.dsSearch.setColumn(0, "ID_SABUN"   , this.getOwnerFrame().ID_SABUN);
        		this.dsSearch.setColumn(0, "DS_HNAME"   , this.getOwnerFrame().DS_HNAME);
        		this.dsSearch.set_enableevent(true);
        		this.FormBtns.Select.click();
        	} else {
        		this.dsSearch.set_enableevent(false);
        		this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0, "YY_HOSPITAL", today.substr(0, 4));
        		if (this.FormInfo.GR_SEARCH != 9) {
        			this.dsSearch.setColumn(0, "DT_FROM", today.substr(0, 6) + "01");
        			this.dsSearch.setColumn(0, "DT_TO"  , this.gfnGetLastDate(today));
        		}
        		this.ccboYN_HOSPITAL.set_index(0);
        		this.dsSearch.set_enableevent(true);

        		if (this.FormInfo.GR_SEARCH == 9) {
        			this.bPerSelect = true;
        			this.dsSearch.set_enableevent(false);
        			this.dsSearch.setColumn(0, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        			this.dsSearch.setColumn(0, "DS_DEPT"  , this.AuthClient.DS_DEPT);
        			this.dsSearch.setColumn(0, "ID_SABUN" , this.AuthClient.ID_SABUN);
        			this.dsSearch.setColumn(0, "DS_HNAME" , this.AuthClient.DS_HNAME);
        			this.dsSearch.set_enableevent(true);
        			this.ccfID_SABUN.form.CDTextBox_onchanged();

        			this.ccfCD_DEPT.form.fnFitToContents();
        			this.ccfCD_DEPT.form.set_readonly(true);
        			this.ccfID_SABUN.form.fnFitToContents();
        		} else {
        			this.FormBtns.Select.click();
        		}
        	}
        };
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YY_HOSPITAL", "STRING");
            this.dsSelect.addColumn("DT_FROM"    , "STRING");
        	this.dsSelect.addColumn("DT_TO"      , "STRING");
        	this.dsSelect.addColumn("TY_HOSPITAL", "STRING");
        	this.dsSelect.addColumn("YN_HOSPITAL", "STRING");
        	this.dsSelect.addColumn("ID_PERSON"  , "INT");
        	this.dsSelect.addColumn("CD_CORP"    , "STRING");
        	this.dsSelect.addColumn("CD_DEPT"    , "STRING");
        	this.dsSelect.addColumn("ID_SABUN"   , "STRING");
        	this.dsSelect.addColumn("GR_SEARCH"  , "STRING");
        	this.dsSelect.addColumn("GR_DEPT"    , "STRING");
        	this.dsSelect.addColumn("ID_LOGIN"   , "STRING");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK"           , "STRING");
        	this.dsSave.addColumn("YY_HOSPITAL"      , "STRING");
        	this.dsSave.addColumn("ID_PERSON"        , "INT");
        	this.dsSave.addColumn("CD_CORP"          , "STRING");
        	this.dsSave.addColumn("CD_DEPT"          , "STRING");
        	this.dsSave.addColumn("ID_SABUN"         , "STRING");
        	this.dsSave.addColumn("DT_CREATE"        , "STRING");
        	this.dsSave.addColumn("TY_HOSPITAL"      , "STRING");
        	this.dsSave.addColumn("CD_HOSPITAL"      , "STRING");
        	this.dsSave.addColumn("CD_FAMILY"        , "STRING");
        	this.dsSave.addColumn("DS_HOSPITAL_HNAME", "STRING");
        	this.dsSave.addColumn("DT_HOSPITAL"      , "STRING");
        	this.dsSave.addColumn("AM_HOSPITAL"      , "BIGDECIMAL");
        	this.dsSave.addColumn("CD_DEPT_TRADE"    , "STRING");
        	this.dsSave.addColumn("YN_FILE"          , "STRING");
        	this.dsSave.addColumn("DS_REMARK"        , "STRING");
        	this.dsSave.addColumn("ID_USER"          , "STRING");

        	// 메일발송
        	this.dsMail = new Dataset();
        	this.dsMail.addColumn("YY_HOSPITAL", "string");
        	this.dsMail.addColumn("CD_CORP"    , "string");
        	this.dsMail.addColumn("ID_USER"    , "string");

        	// 결제
        	this.dsApprove = new Dataset();
        	this.dsApprove.addColumn("YY_HOSPITAL", "STRING");
        	this.dsApprove.addColumn("ID_PERSON"  , "INT");
        	this.dsApprove.addColumn("CD_CORP"    , "STRING");
        	this.dsApprove.addColumn("ID_SABUN"   , "STRING");
        	this.dsApprove.addColumn("CD_FAMILY"  , "STRING");
        	this.dsApprove.addColumn("TY_STATUS"  , "STRING");
        	this.dsApprove.addColumn("DS_RETURN"  , "STRING");
        	this.dsApprove.addColumn("ID_USER"    , "STRING");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
            this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YY_HOSPITAL", this.dsSearch.getColumn(0, "YY_HOSPITAL"));
        	this.dsSelect.setColumn(0, "DT_FROM"    , this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO"      , this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "TY_HOSPITAL", this.dsSearch.getColumn(0, "TY_HOSPITAL"));
        	this.dsSelect.setColumn(0, "YN_HOSPITAL", this.dsSearch.getColumn(0, "YN_HOSPITAL"));
        	this.dsSelect.setColumn(0, "ID_PERSON"  , this.gfnNvl(this.dsSearch.getColumn(0, "ID_PERSON"),0));
        	this.dsSelect.setColumn(0, "CD_CORP"    , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_DEPT"    , this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "ID_SABUN"   , this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "GR_SEARCH"  , this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_DEPT"    , this.AuthClient.DS_DEPT);
        	this.dsSelect.setColumn(0, "ID_LOGIN"   , this.AuthClient.ID_SABUN);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow,"YY_HOSPITAL", this.gfnGetDate().substr(0, 4));
        	if ( this.FormInfo.GR_SEARCH == "9") {
        		this.dsList.setColumn(nrow, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        		this.gfnGridCodeFindLoad(this.dxGrid, nrow, "ID_SABUN");
        	}
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var rtnVal = this.fnDelValidate(this.dxGrid);
        	if (rtnVal < 1) {
        		if (rtnVal == -3) {
        			this.gfnAlert("첨부파일을 먼저 삭제하십시오.");
        		}
        		return;
        	}
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	this.fnSaveData("ALL");
        };
        /*
         *	저장 버튼
         */
        this.fnSaveData = function(sType) {
        	// 저장버튼 클릭시
        	if (sType == "ALL") {
        		// 그리드 필수항목 체크
        		if (!this.gfnGridValidate(this.dxGrid)) return;

        		var msg = "";
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsList, i);
        			switch (flag) {
        			case "I":
        			case "U":
        				// 1. 입력 : 검진일자, 병원 필수 X
        				// 2. 수정
        				// 2-1) 검진구분 = 종합검진(01) 인 경우, 검진일자, 병원 필수
        				// 2-2) 검진구분 = 일반검진(02) 인 경우, 검진일자 필수
        				// 그 외 검진일자, 병원 필수 X
        				if (flag =="U") {
        					if (this.dsList.getColumn(i, "TY_HOSPITAL") == "01") {
        						if (this.gfnIsNull(this.dsList.getColumn(i, "DT_HOSPITAL")) || this.gfnIsNull(this.dsList.getColumn(i, "DS_HOSPITAL"))) {
        							msg += (i + 1) + "행: 검진구분이 '종합검진'인 경우 [검진일자],[병원] 필수입력값입니다.\n";
        						}
        					}
        				}
        				if (this.dsList.getColumn(i, "TY_HOSPITAL") == "02") {
        					if (this.gfnIsNull(this.dsList.getColumn(i, "DT_HOSPITAL"))) {
        						msg += (i + 1) + "행: 검진구분이 '일반검진'인 경우 [검진일자] 필수입력값입니다.\n";
        					}
        				}

        				break;
        			}
        		}

        		if (!this.gfnIsNull(msg)) {
        			var arrError = [msg];
        			this.gfnAlert("msg.err.validator", arrError);
        			return false;
        		}

        		this.dxGrid.updateToDataset();

        		this.dsSave.clearData();
        		this.dsDeleteList.clearData();

        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsList, i);
        			this.setSaveData(flag, i);
        		}
        	}
        	// 첨부파일 수정시만
        	else {
        		this.dxGrid.updateToDataset();

        		this.dsSave.clearData();
        		this.dsDeleteList.clearData();

        		var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);
        		this.setSaveData("U", this.dsList.rowposition);
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save"+sType;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]

        };

        this.setSaveData = function(flag, i) {
        	switch (flag) {
        	case "I":
        	case "U":
        	case "D":
        		var nrow = 0;
        		if (flag == "D") {
        			nrow = this.dsSave.insertRow(0);
        		} else {
        			nrow = this.dsSave.addRow();
        		}
        		this.dsSave.setColumn(nrow, "TY_WRK"           , flag);
        		this.dsSave.setColumn(nrow, "YY_HOSPITAL"      , this.dsList.getColumn(i, "YY_HOSPITAL"));
        		this.dsSave.setColumn(nrow, "ID_PERSON"        , this.dsList.getColumn(i, "ID_PERSON"));
        		this.dsSave.setColumn(nrow, "CD_CORP"          , this.dsList.getColumn(i, "CD_CORP"));
        		this.dsSave.setColumn(nrow, "CD_DEPT"          , this.dsList.getColumn(i, "CD_DEPT"));
        		this.dsSave.setColumn(nrow, "ID_SABUN"         , this.dsList.getColumn(i, "ID_SABUN"));
        		this.dsSave.setColumn(nrow, "DT_CREATE"        , this.dsList.getColumn(i, "DT_CREATE"));
        		this.dsSave.setColumn(nrow, "TY_HOSPITAL"      , this.dsList.getColumn(i, "TY_HOSPITAL"));
        		this.dsSave.setColumn(nrow, "CD_HOSPITAL"      , this.dsList.getColumn(i, "CD_HOSPITAL"));
        		this.dsSave.setColumn(nrow, "CD_FAMILY"        , this.dsList.getColumn(i, "CD_FAMILY"));
        		this.dsSave.setColumn(nrow, "DS_HOSPITAL_HNAME", this.dsList.getColumn(i, "DS_HOSPITAL_HNAME"));
        		this.dsSave.setColumn(nrow, "DT_HOSPITAL"      , this.dsList.getColumn(i, "DT_HOSPITAL"));
        		this.dsSave.setColumn(nrow, "AM_HOSPITAL"      , this.dsList.getColumn(i, "AM_HOSPITAL"));
        		this.dsSave.setColumn(nrow, "CD_DEPT_TRADE"    , this.dsList.getColumn(i, "CD_DEPT_TRADE"));
        		this.dsSave.setColumn(nrow, "YN_FILE"          , this.YN_FILE);
        		this.dsSave.setColumn(nrow, "DS_REMARK"        , this.dsList.getColumn(i, "DS_REMARK"));
        		this.dsSave.setColumn(nrow, "ID_USER"          , this.AuthClient.ID_USER);

        		// 기존 파일 삭제 여부
        		if (this.dsList.getOrgColumn(i, "NM_FILE") != this.dsList.getColumn(i, "NM_FILE")) {
        			var nrow = this.dsDeleteList.addRow();
        			var sFilePath = this.filepath + this.dsList.getColumn(i, "YY_HOSPITAL") + "\\" + this.dsList.getColumn(i, "CD_CORP") + "\\" + this.dsList.getColumn(i, "ID_PERSON");
        			this.dsDeleteList.setColumn(nrow, "filepath", sFilePath);
        			this.dsDeleteList.setColumn(nrow, "filename", this.dsList.getOrgColumn(i, "NM_FILE"));
        		}
        		break;
        	}
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	// 공통에서 필수 빈값 체크 후 focus 이동. 필수CSS 선언.

        	var validate = true;
        	var yyHospital = this.dsSearch.getColumn(0, "YY_HOSPITAL");
        	var dtFrom = this.dsSearch.getColumn(0, "DT_FROM");
        	var dtTo = this.dsSearch.getColumn(0, "DT_TO");

        	if (validate && this.gfnIsNull(yyHospital) && this.gfnIsNull(dtFrom) && this.gfnIsNull(dtTo)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYY_HOSPITAL.setFocus();
        		}
        		this.gfnAlert("검진년도 또는 검진기간를 입력해주세요.", "fnVaidateCallback");
        	}

        	if (validate && !this.gfnIsNull(yyHospital) && !this.gfnIsNull(dtFrom)) {
        		if (yyHospital != dtFrom.substr(0, 4)) {
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.ctclYY_HOSPITAL.setFocus();
        			}
        			this.gfnAlert("검진년도와 검진기간의 년도는 동일하게 입력해주세요.", "fnVaidateCallback");
        		}
        	}

        	if (validate && (!this.gfnIsNull(dtFrom) && this.gfnIsNull(dtTo) || this.gfnIsNull(dtFrom) && !this.gfnIsNull(dtTo) )  ) {
        		if (dtFrom >  dtTo ) {
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.ctclDT_FROM.setFocus();
        			}
        			this.gfnAlert("검진기간 시작일, 종료일을 모두 입력해주세요.", "fnVaidateCallback");
        		}
        	}

        	if (validate && !this.gfnIsNull(dtFrom) && !this.gfnIsNull(dtTo)) {
        		if (dtFrom > dtTo ) {
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.ctclDT_FROM.setFocus();
        			}
        			this.gfnAlert("검진기간 종료일을 시작일보다 뒤의 날짜로 입력하세요.", "fnVaidateCallback");
        		}
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
         * 삭제버튼 클릭시 체크
         */
        this.fnDelValidate = function(objGrid) {
        	if (objGrid.currentrow < 0 || this.dsList.rowposition < 0) {
        		return -1;
        	} else if (this.dsList.getColumn(this.dsList.rowposition, this.ucFlag) == "#") {
        		return -2;
        	}

            var rows = objGrid.getSelectedDatasetRows();
        	if (rows.length > 0) {
        		for(var i = (rows.length - 1); i >= 0; i--) {
        			var nrow = rows[i];

        			var cntFile = this.dsList.getColumn(nrow, "CNT_FILE");
        			if (cntFile != 0) {
        				return -3;
        			}
        		}
        	}

        	return 1;
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
         // 경조사 규정 팝업 호출
        this.fnRuleImg = function(obj,e) {
        	var param = {};
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	param.CD_RULE = "03";
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_RULE_IMG_DLG", "fnPop_callback", param, 0, 0);
        };

         // 대상자생성
        this.fnCreate = function(obj,e) {
        	var param = {};
        	param.YY_HOSPITAL = this.dsSearch.getColumn(0, "YY_HOSPITAL");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_HOSPITAL_DLG", "fnPopup_callback", param);
        };

        // 승인
        this.fnApprove = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	var nChkRow = this.dsList.findRow("CHK", 1);
        	if (nChkRow == -1) {
        		this.gfnAlert("승인할 행을 선택하세요.");
        		return false;
        	}

        	var cnt = this.dsList.getCaseCount("CHK == 1 && (TY_STATUS == '2' || TY_STATUS == '3')");
        	if (cnt > 0) {
        		this.gfnAlert("결재상태가 '승인','반려' 상태인 경우는 반려 불가능합니다.");
        		return false;
        	}

        	this.gfnConfirm("선택한 행을 승인 하시겠습니까?",  function(id, val) {
        		if (val) {
        			this.dsApprove.clearData();
        			for (var i = 0; i < this.dsList.rowcount; i++) {
        				if (this.dsList.getColumn(i, "CHK") == 1) {
        					var nrow = this.dsApprove.addRow();
        					this.dsApprove.setColumn(nrow, "YY_HOSPITAL", this.dsList.getColumn(i, "YY_HOSPITAL"));
        					this.dsApprove.setColumn(nrow, "ID_PERSON"  , this.dsList.getColumn(i, "ID_PERSON"));
        					this.dsApprove.setColumn(nrow, "CD_CORP"    , this.dsList.getColumn(i, "CD_CORP"));
        					this.dsApprove.setColumn(nrow, "ID_SABUN"   , this.dsList.getColumn(i, "ID_SABUN"));
        					this.dsApprove.setColumn(nrow, "CD_FAMILY"  , this.dsList.getColumn(i, "CD_FAMILY"));
        					this.dsApprove.setColumn(nrow, "TY_STATUS"  , "2"); // 승인:2, 반려: 3
        					this.dsApprove.setColumn(nrow, "DS_RETURN"  , "");
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

        			this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        								strSvcType, 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc);	// 통신방법 정의 [생략가능]
        		}
        	});
        };

        // 반려 callback
        this.fnPopup_callback = function(svcID, val) {
        	if (svcID.search("DAB_HOSPITAL_PERSON_EXCEL") > -1) {
        		this.FormBtns.Select.click();
        	} else {
        		if (val) {
        			this.FormBtns.Select.click();
        		}
        	}
        };

        // 반려
        this.fnContrary = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	var nChkRow = this.dsList.findRow( "CHK", 1);
        	if (nChkRow == -1) {
        		this.gfnAlert("반려할 행을 선택하세요.");
        		return false;
        	}

        	var cnt = this.dsList.getCaseCount("CHK == 1 && (TY_STATUS == '2' || TY_STATUS == '3')");
        	if (cnt > 0) {
        		this.gfnAlert("결재상태가 '승인','반려' 상태인 경우는 반려 불가능합니다.");
        		return false;
        	}

        	this.dsParam.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			var nrow = this.dsParam.addRow();
        			this.dsParam.copyRow(nrow,this.dsList,i);
        		}
        	}

        	var param = {};
        	param.targetId = "hospital";
        	param.dsList = this.dsParam.saveXML();
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_HOSPITAL_CONTRARY_DLG", "fnPopup_callback", param);
        };

        // 대상자업로드 팝업 호출
        this.fnUpLoadPerson  = function(obj,e) {
        	var param = {};
        	param.YY_HOSPITAL = this.dsSearch.getColumn(0, "YY_HOSPITAL");
        	param.CD_CORP     = this.dsSearch.getColumn(0, "CD_CORP");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_HOSPITAL_PERSON_EXCEL", "fnPopup_callback", param, 1200, 570);
        };

        //  메일발송
        this.fnEmail = function(obj,e) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YY_HOSPITAL"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYY_HOSPITAL.setFocus();
        		}
        		this.gfnAlert("검진년도를 입력해주세요.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	this.gfnConfirm("검진일자가 존재하지 않은 모든 임직원에게 메일이 발송됩니다.\n계속하시겠습니까?",  function(id, val) {
        		if (val) {
        			this.dsMail.clearData();
        			var nrow = this.dsMail.addRow();
        			this.dsMail.setColumn(nrow, "YY_HOSPITAL", this.dsSearch.getColumn(0, "YY_HOSPITAL"));
        			this.dsMail.setColumn(nrow, "CD_CORP"    , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsMail.setColumn(nrow, "ID_USER"    , this.AuthClient.ID_USER);

        			if (this.dsMail.rowcount == 0) return;

        			var strSvcId    = "sendMail";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "sendMail=dsMail";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        								strSvcType, 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc);	// 통신방법 정의 [생략가능]
        		}
        	});
        };

        /*
         * 결재상신 버튼
         */
        this.fnAprv= function(obj,e) {
        	if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "DT_HOSPITAL"))) {
        		this.gfnAlert("검진일자가 존재하는 행을 선택하세요.");
        		return;
        	}

        	var param = {};
        	param.GUBUN = "01";
        	if (obj.id == "btnExt_AprvCnc") {
        		param.GUBUN = "02";
        	} else if (obj.id == "btnExt_Init") {
        		param.GUBUN = "03";
        	}

        	param.YM_HOSPITAL = this.dsList.getColumn(this.dsList.rowposition, "DT_HOSPITAL").substr(0, 6);
        	param.CD_CORP     = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP     = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
        	param.DT_FROM     = this.divSearch.form.ctclDT_FROM.value;
        	param.DT_TO       = this.divSearch.form.ctclDT_TO.value;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_HOSPITAL_AUTOSLIP_DLG", "fnPopup_callback", param);
        };

        // 전표/취소전표 조회
        this.fnSlipQ = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var colName = "CD_TRADE";
        	if (obj.id == "btnExt_SlipCncQ") {
        		colName = "CD_TRADE_CNC";
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, colName))) {
        		return;
        	}

        	var param = {};
        	param.CD_CORP  = this.dsSearch.getColumn(0, "CD_CORP");
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, colName);

        	this.gfnPopIssueSlip(param);
        };

        // 결재문서/취소결재문서 조회
        this.fnDocQ = function (obj,e){
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var colName = "NO_APRV";
        	if (obj.id == "btnExt_DocCncQ") {
        		colName = "NO_APRV_CNC";
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, colName))) {
        	  return;
        	}

        	var param = {};
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.NO_APRV = this.dsList.getColumn(this.dsList.rowposition, colName);

        	this.gfnOpenDoorayAppr("AP_DOC_URL", param, "fnPopup_callback");
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

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "saveALL") {
        		this.FormBtns.Select.click();
        	} else if(svcID == "saveFILE") {
        		this.FormBtns.Select.click();
        	} else if( svcID == "approve" ) {
        		this.gfnAlert("승인이 완료되었습니다.");
        		this.FormBtns.Select.click();
        	} else if(  svcID == "sendMail" ) {
        		this.fnVaidateCallback = function() {
        			this.FormBtns.Select.click();
        		}
        		this.gfnAlert("메일발송이 완료되었습니다.","fnVaidateCallback");
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfTY_HOSPITAL") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "H1");
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        	}

        	if (id == "ccfCD_DEPT") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			this.gfnAlert("법인을 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "GR_SEARCH" , this.FormInfo.GR_SEARCH);					// 프로시저에서 실제 사용 안함
        		dsUserParam.setColumn(nrow, "CD_DEPT"   , this.dsSearch.getColumn(0, "CD_DEPT"));	// 프로시저에서 실제 사용 안함
        		dsUserParam.setColumn(nrow, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "");										// 프로시저에서 실제 사용 안함
        	}

        	if (id == "ccfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , "");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "Y");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id,codeFindData) {
           	var arr = codeFindData;
        	if (id == "ccfID_SABUN") {
        		if (arr.length > 0) {
        			this.dsSearch.setColumn(0, "CD_CORP"  , arr[0]["CD_CORP"]);
        			this.dsSearch.setColumn(0, "DS_CORP"  , arr[0]["DS_CORP"]);
        			this.dsSearch.setColumn(0, "CD_DEPT"  , arr[0]["CD_DEPT"]);
        			this.dsSearch.setColumn(0, "DS_DEPT"  , arr[0]["DS_DEPT"]);
        			this.dsSearch.setColumn(0, "ID_SABUN" , arr[0]["ID_SABUN"]);
        			this.dsSearch.setColumn(0, "DS_HNAME" , arr[0]["DS_HNAME"]);
        			this.dsSearch.setColumn(0, "ID_PERSON", arr[0]["ID_PERSON"]);

        			if (this.bPerSelect) {
        				this.bPerSelect = false;
        				this.FormBtns.Select.click();
        			}
        		}
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        /*
         *	그리드 초기화
         */
        this.fnGrid_AfterInit = function(obj, e) {
           if (this.FormInfo.GR_SEARCH == "9") {
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "CNT_YEAR")    , "size", "0");
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "ST_APRV")     , "size", "0");
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "CD_TRADE")    , "size", "0");
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "ST_APRV_CNC") , "size", "0");
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "CD_TRADE_CNC"), "size", "0");
        		this.dxGrid.set_autofittype("col");
        	}

        	// 그리드 생성 시점 차이때문에
        	// 화면 오픈 후 조회시 조회건수 0으로 셋팅되어 여기서 처리
        	this.fnSetInit();
        };
        /*
         *	그리드 코드파인드
         */
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 사원정보
        	if (id == "DAX_CFBASEINFO_ALL") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , "");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "");
         	}

        	// 검진구분
        	if (id == "H1") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "H1");
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
         	}

        	// 병원
        	if (id == "DAX_CFHOSPITAL_CODE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
         	}

        	// 가족구분
        	if (id == "FA") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "FA");
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
         	}

        	// 검진부서
        	if (id == "DHX_CFACNTUNIT_SELECT") {
        		dsUserParam.setColumn(nrow, "CD_CORP"	  , this.dsSearch.getColumn(0, "CD_CORP"));		// 법인코드
        		dsUserParam.setColumn(nrow, "ID_USER"	  , this.AuthClient.ID_USER);					// 로그인아이디
        		dsUserParam.setColumn(nrow, "CD_DEPT_ACNT", this.AuthClient.CD_DEPT_ACNT);				// 로그인부서
        		dsUserParam.setColumn(nrow, "CD_DIV"	  , "R");
         	}
        	return true;
        };

        // 첨부파일
        this.fnGrid_ExpandUp = function(obj, e) {
        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if (colnm == "NM_FILE") {
        		if (flag == "I") {
        			this.gfnAlert("저장 후 입력하세요.");
        			return ;
        		}

        		if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"TY_HOSPITAL"))) {
        			this.gfnAlert("검진구분을 먼저 입력하세요.");
        			return false;
        		}
        		// 일반검진을 경우만 선택 첨부파일 가능
        		/*if( this.dsList.getColumn(this.dsList.rowposition,"TY_HOSPITAL") != "02" ){
        			this.gfnAlert("검진구분이 '일반검진'인 경우만 첨부파일 선택 가능합니다.");
        			return false;
        		}*/

        		//첨부파일 실행
        		var fileManager = {};
        		fileManager.CD_GUBUN = "DAB4";
        		fileManager.CD_DIR = [ this.dsList.getColumn(e.row, "YY_HOSPITAL")
        							 , this.dsList.getColumn(e.row, "CD_CORP")
        							 , this.dsList.getColumn(e.row, "ID_PERSON")
        							 , this.dsList.getColumn(e.row, "CD_FAMILY")
        							 ];
        		// CD_DIR 만 지정시 CD_DIR 배열 순대로 키1,키2,키3 까지 자동지정
        		// 저장되는 디렉토리와 키값이 다른경우 CD_REF 추가로 사용
        		//fileManager.CD_REF = [ this.dsList.getColumn(this.dsList.rowposition, "CD_REF1") ];
        		// 권한 및 상태에 따라 업로드,삭제 가능여부 지정 (기본: true)
        		if (this.FormInfo.TY_AUTH == "R") {
        			fileManager.IS_READONLY = true;
        		} else {
        			fileManager.IS_READONLY = false;
        			var tyStatus = this.dsList.getColumn(e.row, "TY_STATUS");

        			// 승인인 경우 읽기전용
        			if (tyStatus == "2") {
        				fileManager.IS_READONLY = true;
        			}
        		}
        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        };

        this.fnFileCallback = function(strID, val) {
        	if (val.Cnt != this.dsList.getColumn(this.dsList.rowposition, "CNT_FILE")) {
        		// 파일개수를 다시 셋팅
        		this.dsList.set_enableevent(false);
        		if (val.Cnt == 0) {
        			this.dsList.setColumn(this.dsList.rowposition, "NM_FILE", "첨부");
        			this.YN_FILE = "N";
        		} else {
        			this.dsList.setColumn(this.dsList.rowposition, "NM_FILE", "첨부(" + val.Cnt + ")");
        			this.YN_FILE = "Y";
        		}
        		this.dsList.set_enableevent(true);
        		var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);
        		this.fnSaveData("FILE");
        	}
        };

        this.fnGrid_RowCellChanged = function(obj,e) {
        	if (this.gfnGridIsRow(this.dxGrid) && e.row != e.oldrow) {
        		this.fnButtonCheck();
        	}
        };

        /*
         * 셀 수정가능 여부
         */
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	if (cell == obj.getBindCellIndex("body", "ID_SABUN")) {
        		if (this.FormInfo.GR_SEARCH == "9") return false;
        	}

        	// GR_SEARCH = 1 인경우에만  해당 컬럼 선택가능
        	// 귀속부서, 등록일자, 재직구분, 수진자, 검진금액
        	if (cell == obj.getBindCellIndex("body", "DS_DEPT_TRADE") || cell == obj.getBindCellIndex("body", "DT_CREATE") ||
        	    cell == obj.getBindCellIndex("body", "TY_RETIRE")     || cell == obj.getBindCellIndex("body", "DS_HOSPITAL_HNAME") ||
        		cell == obj.getBindCellIndex("body", "AM_HOSPITAL")) {
        		if (this.FormInfo.GR_SEARCH != "1") return false;
        	}

        	var arrCol = ["AM_HOSPITAL", "CD_DEPT_TRADE", "DS_DEPT_TRADE"];

        	var sTyStatus = this.dsList.getColumn(this.dsList.rowposition, "TY_STATUS");
        	var sTyHospital = this.dsList.getColumn(this.dsList.rowposition, "TY_HOSPITAL");
        	for (var i = 0; i < arrCol.length; i++) {
        		if (cell == obj.getBindCellIndex("body", arrCol[i])) {
        			if (this.gfnIsNull(sTyHospital)) {
        				this.gfnAlert("구분 선택 후 입력바랍니다.");
        				return false;
        			}

        			// 일반검진(02) :  종합검진 검진금액, 종합검진 부서 선택 불가능
        			if( sTyHospital == "02" ) return false;
        		}
        	}

        	// 일반검진(02) : 승인 인 경우,  첨부파일 빼고 행 읽기전용처리
        	if (sTyHospital == "02" && sTyStatus == "2" && cell != obj.getBindCellIndex("body", "NM_FILE")) return false;
        };

        /*
         * 그리드 헤더 CHK 선택시
         */
        this.fnGrid_AfterAllCheck = function(obj, cell, check) {
        	var sTyStatus = "", sTyHospital = "";
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		sTyStatus = this.dsList.getColumn(i, "TY_STATUS");
        		sTyHospital = this.dsList.getColumn(i, "TY_HOSPITAL");
        		// 일반검진(02) : 승인 인 경우,  첨부파일 빼고 행 읽기전용처리
        		if (sTyHospital == "02" && sTyStatus == "2") {
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(i, "CHK", 0);
        			this.dsList.set_enableevent(true);
        		}
        	}
        };

        /***********************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		trace("e.columnid = " + e.columnid + ", e.newvalue = "  + e.newvalue + ", e.oldvalue = " + e.oldvalue)
        		if (e.columnid == "CD_CORP") {
        			this.dsSearch.setColumn(0, "CD_DEPT"  , "");
        			this.dsSearch.setColumn(0, "DS_DEPT"  , "");
        			this.dsSearch.setColumn(0, "ID_SABUN" , "");
        			this.dsSearch.setColumn(0, "DS_HNAME" , "");
        			this.dsSearch.setColumn(0, "ID_PERSON", "");
        		}

        		if (e.columnid == "CD_DEPT") {
        			this.dsSearch.setColumn(0, "ID_SABUN" , "");
        			this.dsSearch.setColumn(0, "DS_HNAME" , "");
        			this.dsSearch.setColumn(0, "ID_PERSON", "");
        		}

        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DAB_HOSPITAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
