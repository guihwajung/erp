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
            this.set_titletext("수납마감(더존전표)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DREPR_DAILYMAGAMINFO_SELECT_DHAMC</Col></Row><Row><Col id=\"TARGET\">magam</Col><Col id=\"SP\">DREPR_DAILY_MAGAM</Col></Row><Row><Col id=\"TARGET\">magamCancel</Col><Col id=\"SP\">DREPR_DAILY_MAGAM_CANCEL</Col></Row><Row><Col id=\"TARGET\">createSlip</Col><Col id=\"SP\">DREPR_AUTOSLIP_ISSUE_</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DREPR_AUTOSLIP_ISSUE_CANCLE</Col></Row><Row><Col id=\"TARGET\">createSlipA</Col><Col id=\"SP\">DREPR_AUTOSLIP_ISSUE_A</Col></Row><Row><Col id=\"TARGET\">createSlipS</Col><Col id=\"SP\">DREPR_AUTOSLIP_ISSUE_S</Col></Row><Row><Col id=\"TARGET\">createSlipO</Col><Col id=\"SP\">DREPR_AUTOSLIP_ISSUE_O</Col></Row><Row><Col id=\"TARGET\">createSlipT</Col><Col id=\"SP\">DREPR_AUTOSLIP_ISSUE_T</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_MAGAM", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">Y</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_SLIP", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">Y</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DAILYMAGAM_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DAILYMAGAM_TO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"DS_ACNTUNIT\"/><Col id=\"DT_DAILYMAGAM_FR\"/><Col id=\"DT_DAILYMAGAM_TO\"/><Col id=\"YN_MAGAM\"/><Col id=\"YN_SLIP\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_DAILYMAGAM","ccfCD_ACNTUNIT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_DAILYMAGAM_FR","staDT_DAILYMAGAM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_PERIOD_TIL","ctclDT_DAILYMAGAM_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_DAILYMAGAM_TO","staDT_PERIOD_TIL:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_MAGAM","ctclDT_DAILYMAGAM_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사용여부");
            obj.set_rtl("false");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_MAGAM","staYN_MAGAM:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_MAGAM");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_visible("false");
            obj.set_value("Y");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_SLIP","cboYN_MAGAM:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("전표생성여부");
            obj.set_rtl("false");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_SLIP","staYN_SLIP:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_SLIP");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_visible("false");
            obj.set_value("Y");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","cboYN_SLIP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("※ 더존이관후 더존에서 전표발행하셔야 합니다.");
            obj.set_rtl("false");
            obj.set_color("red");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_DAILYMAGAM_FR","value","dsSearch","DT_DAILYMAGAM_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_DAILYMAGAM_TO","value","dsSearch","DT_DAILYMAGAM_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboYN_MAGAM","value","dsSearch","YN_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboYN_SLIP","value","dsSearch","YN_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRE_DAILYMAGAMINFO.xfdl", function() {
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
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnMagam             = this.gfnFormButtonAdd("Magam"            , "fnButtonClick"); 	// 마감
        	this.btnMagamCancel       = this.gfnFormButtonAdd("MagamCancel"      , "fnButtonClick"); 	// 마감취소
        	this.btnCreateSlip        = this.gfnFormButtonAdd("CreateSlip"		 , "fnButtonClick"); 	// 전표데이터생성
        	this.btnCancelSlip        = this.gfnFormButtonAdd("CancelSlip"		 , "fnButtonClick"); 	// 전표데이터생성취소
        	this.btnViewSlip          = this.gfnFormButtonAdd("ViewSlip"         , "fnButtonClick"); 	// 전표조회
        	this.btnViewReceiptDetail = this.gfnFormButtonAdd("ViewReceiptDetail", "fnButtonClick"); 	// 수납관리
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;	// 사업지코드
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRF_OPTIONMAGAMINFO");

        	//조회기간
        	this.dsSearch.setColumn(0, "DT_DAILYMAGAM_FR", this.gfnGetDate());
        	this.dsSearch.setColumn(0, "DT_DAILYMAGAM_TO"  , this.gfnGetDate());

        	// 수납처
        	this.dsSearch.set_enableevent(false);
        	this.dsSearch.setColumn(0, "YN_MAGAM", "A");	// 마감여부
        	this.dsSearch.setColumn(0, "YN_SLIP" , "A");	// 전표생성여부
        	this.dsSearch.set_enableevent(true);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT"  		, "string");
        	this.dsSelect.addColumn("TY_GUBUN"     		, "string");
        	this.dsSelect.addColumn("NO_CHASU"     		, "string");
        	this.dsSelect.addColumn("DT_DAILYMAGAM_FR"  , "string");
        	this.dsSelect.addColumn("DT_DAILYMAGAM_TO"  , "string");
        	this.dsSelect.addColumn("YN_MAGAM"    		, "string");
        	this.dsSelect.addColumn("YN_SLIP"		    , "string");

        	this.dsMagam = new Dataset();
        	this.dsMagam.addColumn("CD_ACNTUNIT"  		, "string");
        	this.dsMagam.addColumn("TY_GUBUN"     		, "string");
        	this.dsMagam.addColumn("NO_CHASU"     		, "string");
        	this.dsMagam.addColumn("DT_DAILYMAGAM"  	, "string");

        	this.dsMagam.addColumn("ID_INSERT"    		, "string");

        	this.dsMagamCancel = new Dataset();
        	this.dsMagamCancel.addColumn("CD_ACNTUNIT"  , "string");
        	this.dsMagamCancel.addColumn("TY_GUBUN"     , "string");
        	this.dsMagamCancel.addColumn("NO_CHASU"     , "string");
        	this.dsMagamCancel.addColumn("DT_DAILYMAGAM", "string");

        	this.dsCreateSlip = new Dataset();
        	this.dsCreateSlip.addColumn("CD_ACNTUNIT"  	, "string");
        	this.dsCreateSlip.addColumn("TY_GUBUN"     	, "string");
        	this.dsCreateSlip.addColumn("NO_CHASU"     	, "string");
        	this.dsCreateSlip.addColumn("DT_ACCOUNT"    , "string");
        	this.dsCreateSlip.addColumn("CD_DEPT_BH"   	, "string");
        	this.dsCreateSlip.addColumn("ID_INSERT"    	, "string");

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_TRADE"  	, "string");
        	this.dsCancelSlip.addColumn("ID_INSERT"    	, "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT"     , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN"        , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU"        , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "DT_DAILYMAGAM_FR", this.dsSearch.getColumn(0, "DT_DAILYMAGAM_FR").replace(/-/g,""));
        	this.dsSelect.setColumn(0, "DT_DAILYMAGAM_TO", this.dsSearch.getColumn(0, "DT_DAILYMAGAM_TO").replace(/-/g,""));
        	this.dsSelect.setColumn(0, "YN_MAGAM"        , this.dsSearch.getColumn(0, "YN_MAGAM"));
        	this.dsSelect.setColumn(0, "YN_SLIP"         , this.dsSearch.getColumn(0, "YN_SLIP"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {};

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {};

        /*
         *	저장 버튼
         */
        this.fnSave = function() {};

        // 마감
        this.fnMagam = function() {

        	this.dxGrid.updateToDataset();

        	this.dsMagam.clearData();

        	var nRow = this.dsMagam.addRow();

        	this.dsMagam.setColumn(nRow, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsMagam.setColumn(nRow, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsMagam.setColumn(nRow, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsMagam.setColumn(nRow, "DT_DAILYMAGAM" , this.dsList.getColumn(this.dsList.rowposition, "DT_DATE"));
        	this.dsMagam.setColumn(nRow, "ID_INSERT"     , this.AuthClient.ID_USER);

        	var strSvcId    = "magam";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "magam=dsMagam";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        // 마감취소
        this.fnMagamCancel = function() {

        	this.dxGrid.updateToDataset();

        	this.dsMagamCancel.clearData();

        	var nRow = this.dsMagamCancel.addRow();

        	this.dsMagamCancel.setColumn(nRow, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsMagamCancel.setColumn(nRow, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsMagamCancel.setColumn(nRow, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsMagamCancel.setColumn(nRow, "DT_DAILYMAGAM" , this.dsList.getColumn(this.dsList.rowposition, "DT_DATE"));

        	var strSvcId    = "magamCancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "magamCancel=dsMagamCancel";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        };

        // 전표생성
        this.fnCreateSlip = function() {
        	this.dxGrid.updateToDataset();

        	this.dsCreateSlip.clearData();

        	var nRow = this.dsCreateSlip.addRow();

        	this.dsCreateSlip.setColumn(nRow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsCreateSlip.setColumn(nRow, "TY_GUBUN"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsCreateSlip.setColumn(nRow, "NO_CHASU"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsCreateSlip.setColumn(nRow, "DT_ACCOUNT" , this.dsList.getColumn(this.dsList.rowposition, "DT_DATE"));
        	this.dsCreateSlip.setColumn(nRow, "CD_DEPT_BH" , this.AuthClient.CD_DEPT);
        	this.dsCreateSlip.setColumn(nRow, "ID_INSERT"  , this.AuthClient.ID_USER);

        	var strSvcId    = "createSlip";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "createSlip"+this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1)+"=dsCreateSlip";

        		if (this.dsSearch.getColumn(0, "CD_ACNTUNIT") == "K30600A00" || this.dsSearch.getColumn(0, "CD_ACNTUNIT") == "201701A00") {
        			inData =   "createSlipT=dsCreateSlip"
        		}
        		else if (this.dsSearch.getColumn(0, "CD_ACNTUNIT") == "K40200A01" || this.dsSearch.getColumn(0, "CD_ACNTUNIT") == "K40300A00" || this.dsSearch.getColumn(0, "CD_ACNTUNIT") == "K40400A01"|| this.dsSearch.getColumn(0, "CD_ACNTUNIT") == "202001A01") {
        			inData =   "createSlipS=dsCreateSlip"
        		}

        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        };

        // 전표생성취소
        this.fnCancelSlip = function() {

        	this.dxGrid.updateToDataset();

        	this.dsCancelSlip.clearData();

        	var nRow = this.dsCancelSlip.addRow();

        	this.dsCancelSlip.setColumn(nRow, "CD_TRADE" , this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));
        	this.dsCancelSlip.setColumn(nRow, "ID_INSERT", this.AuthClient.ID_USER);

        	var strSvcId    = "cancelSlip";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cancelSlip=dsCancelSlip";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {};

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지코드를 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_DAILYMAGAM_FR")) || this.gfnIsNull(this.dsSearch.getColumn(0, "DT_DAILYMAGAM_TO")))
        	{
        		this.gfnAlert("회계일자가 입력되지 않았습니다.");
        		return false;
        	}

        	if (this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_DAILYMAGAM_FR"), this.dsSearch.getColumn(0, "DT_DAILYMAGAM_TO")) < 0)
        	{
        		this.gfnAlert("회계일자(To)는 회계일자(From)보다 크거나 같아야 합니다.");
        		return false;
        	}

        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else {
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

        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 사업지코드
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP" , this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}

        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.fnButtonClick = function(obj,e) {

        	if(this.dsList.rowposition < 0 && obj.name != "btnExt_ViewSlip") {
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return;
        	}

        	switch(obj.name) {

        		// 마감
        		case "btnExt_Magam":

        				if(this.dsList.getColumn(this.dsList.rowposition, "YN_MAGAM") == "Y") {
        					this.gfnAlert("마감여부가 N인 데이터만 선택해주세요.");
        					return;
        				}

        				this.gfnConfirm("마감 하시겠습니까?", function(strId, val) {
        					if(val) {
        						this.fnMagam();
        					}
        				});

        			break;

        		// 마감취소
        		case "btnExt_MagamCancel":

        				if(!(this.dsList.getColumn(this.dsList.rowposition, "YN_MAGAM") == "Y" && this.dsList.getColumn(this.dsList.rowposition, "YN_SLIPDATA") == "N")) {
        					this.gfnAlert("마감여부가 Y, 전표데이터생성여부가 'N'인 데이터만 선택해주세요.");
        					return;
        				}

        				this.gfnConfirm("마감취소 하시겠습니까?", function(strId, val) {
        					if(val) {
        						this.fnMagamCancel();
        					}
        				});

        			break;

        		// 전표데이터생성
        		case "btnExt_CreateSlip":

        				if(!(this.dsList.getColumn(this.dsList.rowposition, "YN_MAGAM") == "Y" && this.dsList.getColumn(this.dsList.rowposition, "YN_SLIPDATA") == "N")) {
        					this.gfnAlert("마감여부가 Y, 전표데이터생성여부가 'N'인 데이터만 선택해주세요.");
        					return;
        				}

        				this.gfnConfirm("전표데이터를 생성하시겠습니까?", function(strId, val) {
        					if(val) {
        						this.fnCreateSlip();
        					}
        				});

        			break;

        		// 전표데이터생성취소
        		case "btnExt_CancelSlip":

        // 				if(this.dsList.getColumn(this.dsList.rowposition, "YN_MAGAM") != "Y"
        // 				   || this.dsList.getColumn(this.dsList.rowposition, "YN_SLIPDATA") != "Y"
        // 				   || this.dsList.getColumn(this.dsList.rowposition, "YN_TRANS") != "N") {
        // 					this.gfnAlert("전표데이터 생성여부가 Y인 건만 선택해주세요.");
        // 					return;
        // 				}

        				if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))) {
        					this.gfnAlert("전표 발행된 건만 선택해주세요.");
        					return;
        				}

        				this.gfnConfirm("전표데이터 생성을 취소하시겠습니까?", function(strId, val) {
        					if(val) {
        						this.fnCancelSlip();
        					}
        				});

        			break;

        		// 전표조회
        		case "btnExt_ViewSlip":

        			if(!this.gfnGridIsRow(this.dxGrid)) return;

        			if( !this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE")) ){
        				var param = {};

        				param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition,"CD_TRADE");
        				param.IUD_FLAG = "S";

        				this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        			} else {
        				this.gfnAlert("전표가 생성된 행만 전표조회 가능합니다.", "");
        			}

        // 				var param = {};
        //
        // 				param.CD_ACNTUNIT    = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        // 				param.DS_ACNTUNIT    = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        // 				param.NO_DONG        = "";
        // 				param.NO_FLOOR       = "";
        // 				param.NO_HO          = "";
        // 				param.STARTDATE      = this.dsSearch.getColumn(0, "DT_START");
        // 				param.ENDDATE        = this.dsSearch.getColumn(0, "DT_END");
        // 				param.CD_AUTOSLIP    = "DRA0001";
        //
        // 				this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRA_SLIP_DUZON", "", param);

        			break;

        		// 수납관리
        		case "btnExt_ViewReceiptDetail":

        				var param = {};

        				param.CD_ACNTUNIT    = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        				param.DS_ACNTUNIT    = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        				param.NO_DONG        = "";
        				param.NO_FLOOR       = "";
        				param.NO_HO          = "";
        				param.NO_UNIONMEMBER = "";
        				param.DS_CONTRACTOR  = "";
        				param.TY_SUNAP       = "";
        				param.TY_SUNAP_F     = "";

        				this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRC_RECEIPTDETAIL", "", param);

        			break;
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboYN_MAGAM.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboYN_SLIP.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRE_DAILYMAGAMINFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
