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
            this.set_titletext("채무현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHCPR_MISUMIKYUL_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DHCPR_MISUMIKYUL_SELECT_DTL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_BH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_JUNGSAN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_JUNGSAN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">정산</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미정산</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("0");
            obj.set_text("법인코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0","10","259","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("AutoSet").set("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT","0","42","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("계정코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACCOUNT","staCD_ACCOUNT:0","42","259","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFACNT_AP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BE","ccfCD_CORP:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BE","staCD_DEPT_BE:0","10","259","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT_SELECT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BH","ccfCD_DEPT_BE:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("발행부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfCD_ACCOUNT:0","42","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0","42","259","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFVENDOR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BH","staCD_DEPT_BH:0","10","259","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT_SELECT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","ccfCD_VENDOR:0","42","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("전기일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0","42","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta05","ctclDT_FROM:7","42","10","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("~");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TO","sta05:-3","42","10","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("전기일자");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta05:3","42","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TRADE","ctclDT_TO:29","42","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_TRADE","staCD_TRADE:0","42","170","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_JUNGSAN","ccfCD_DEPT_BH:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("정산여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_JUNGSAN","staYN_JUNGSAN:0","10","104","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsYN_JUNGSAN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","34.38%","61.47%","400","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cursor("ns-resize");
            obj.set_edge("url(\'theme://images/slt_WF_SplitterH.png\') 2px 0px");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staGrdTitleSub","0","0",null,"35","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("반제정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","staGrdTitleSub:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staGrdTitle","0","0","100%","35",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("채무현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staGrdTitle:0",null,null,"0","1",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.ccfCD_ACCOUNT.form.CDTextBox","value","dsSearch","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_ACCOUNT.form.DSTextBox","value","dsSearch","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_VENDOR.form.DSTextBox","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_DEPT_BH.form.CDTextBox","value","dsSearch","CD_DEPT_BH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_DEPT_BH.form.DSTextBox","value","dsSearch","DS_DEPT_BH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_DEPT_BE.form.CDTextBox","value","dsSearch","CD_DEPT_BE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_DEPT_BE.form.DSTextBox","value","dsSearch","DS_DEPT_BE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ctxtCD_TRADE","value","dsSearch","CD_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.ccboYN_JUNGSAN","value","dsSearch","YN_JUNGSAN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHC_DEBT_SELECT.xfdl", function() {
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

        	var toDay    = this.gfnGetDate();
        	var addMonth = this.gfnAddMonth(toDay, -1);

        	this.dsSearch.set_enableevent(false);
        	this.dsSearch.setColumn(0, "CD_CORP"	 , this.AuthClient.CD_CORP);		//법인코드
        	this.dsSearch.setColumn(0, "DS_CORP"	 , this.AuthClient.DS_CORP);		//법인코드명
        	this.dsSearch.setColumn(0, "CD_DEPT_BE"	 , this.AuthClient.CD_DEPT_ACNT);	//귀속부서
        	this.dsSearch.setColumn(0, "DS_DEPT_BE"	 , this.AuthClient.DS_DEPT_ACNT);	//귀속부서명
        	this.dsSearch.setColumn(0, "DT_FROM" 	 , addMonth.substring(0, 6)+"01");	//전월1일
        	this.dsSearch.setColumn(0, "DT_TO"	 	 , toDay);							//현재일자
        	this.dsSearch.setColumn(0, "YN_JUNGSAN"  , "N");							//정산여부(미정산)
        	this.dsSearch.set_enableevent(true);

        	this.ccfCD_CORP.form.CDTextBox.setFocus();
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
        	this.btnDebtJungSan = this.gfnFormButtonAdd("DebtJungSan", "fnDebtJungSan");  	//채무정산
        	this.btnSlipSearch  = this.gfnFormButtonAdd("SlipSearch" , "fnSlipSearch");		//전표조회
        	this.btnBanjeSearch = this.gfnFormButtonAdd("BanjeSearch", "fnBanjeSearch");	//반제전표조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.gfnSetElements();

        	this.staGrdTitle    = this.divData.form.divDataTop.form.staGrdTitle;
        	this.staGrdTitleSub = this.divData.form.divDataBottom.form.staGrdTitleSub;

        	this.dxGrid    = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
         	this.ccfCD_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	//계정코드
         	this.ccfCD_DEPT_BH.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	//발행부서
         	this.ccfCD_DEPT_BE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	//귀속부서
         	this.ccfCD_VENDOR.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	//거래처

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid   , this.dsList   , "DH", "DHC_DEBT_SELECT");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	this.dxGrid.addEventHandler("oncelldblclick" , this.fnGrid_OnCelldblclick, this);
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHC_DEBT_SELECT_DTL");
        	this.dxGridSub.set_selecttype("cell");

        	this.dxGridSub.addEventHandler("oncelldblclick" , this.fnGridSub_OnCelldblclick, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"		 , "string");
        	this.dsSelect.addColumn("CD_ACCOUNT"	 , "string");
        	this.dsSelect.addColumn("CD_DEPT_BH"	 , "string");
        	this.dsSelect.addColumn("CD_DEPT_BE"	 , "string");
        	this.dsSelect.addColumn("CD_VENDOR"		 , "string");
        	this.dsSelect.addColumn("DT_FROM"		 , "string");
        	this.dsSelect.addColumn("DT_TO"			 , "string");
        	this.dsSelect.addColumn("CD_TRADE"		 , "string");
        	this.dsSelect.addColumn("YN_JUNGSAN"	 , "string");
        	this.dsSelect.addColumn("TY_MIGEUL"	 	 , "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_CORP"     , "string");
        	this.dsSelectSub.addColumn("CD_SLIP_MI"  , "string");

        	this.dsResult = new Dataset();
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	var nRow = this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP"	 , this.dsSearch.getColumn(0, "CD_CORP"));          // 법인코드
        	this.dsSelect.setColumn(0, "CD_ACCOUNT"	 , this.dsSearch.getColumn(0, "CD_ACCOUNT"));       // 계정코드
        	this.dsSelect.setColumn(0, "CD_DEPT_BH"  , this.dsSearch.getColumn(0, "CD_DEPT_BH"));  		// 발행부서
        	this.dsSelect.setColumn(0, "CD_DEPT_BE"	 , this.dsSearch.getColumn(0, "CD_DEPT_BE"));  		// 귀속부서
        	this.dsSelect.setColumn(0, "CD_VENDOR"	 , this.dsSearch.getColumn(0, "CD_VENDOR"));    	// 거래처
        	this.dsSelect.setColumn(0, "DT_FROM"	 , this.dsSearch.getColumn(0, "DT_FROM"));			// 회계일자(시작)
        	this.dsSelect.setColumn(0, "DT_TO"		 , this.dsSearch.getColumn(0, "DT_TO"));			// 회계일자(종료)
        	this.dsSelect.setColumn(0, "CD_TRADE"	 , this.dsSearch.getColumn(0, "CD_TRADE"));			// 전표번호
        	this.dsSelect.setColumn(0, "YN_JUNGSAN"  , this.dsSearch.getColumn(0, "YN_JUNGSAN"));		// 정산여부
        	this.dsSelect.setColumn(0, "TY_MIGEUL"   , "K");											// 미결구분(K:채무)

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
        };

        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0) return false;

        	this.dsListSub.clearData();
        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	var nRow = this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(nRow, "CD_CORP"   , this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsSelectSub.setColumn(nRow, "CD_SLIP_MI", this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP_MI"));

        	var strSvcId    = "selectSub";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub";
        	var outData     = "dsListSub=selectSub0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

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
        	var arrGrid = [], arrSheetName = [];
        	arrGrid[0] = this.dxGrid;
        	arrGrid[1] = this.dxGridSub;

        	arrSheetName[0] = this.staGrdTitle.text;
        	arrSheetName[1] = this.staGrdTitleSub.text;

        	this.gfnExcelExportMulti(arrGrid, arrSheetName, this.FormInfo.NM_FORM);
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
        	if(!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) || !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))){
        		if(this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_FROM"), this.dsSearch.getColumn(0, "DT_TO")) <= -1){
        			this.gfnAlert("전기일자의 시작일은 종료일보다 작아야 합니다.");
        			this.ctclDT_FROM.setFocus();
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
        	switch(svcID) {
        	case "select" :
        		this.gfnGridAfterSelect(this.dxGrid);

        		if(this.dsSearch.getColumn(0, "YN_JUNGSAN") == "Y"){
        			this.btnDebtJungSan.set_enable(false);
        		}else{
        			if(this.dsList.rowcount > 0){
        				this.btnDebtJungSan.set_enable(true);
        			}
        		}
        		break;
        	case "selectSub" :
        		this.gfnGridAfterSelect(this.dxGridSub);
        		break;
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id) {
        	case "ccfCD_DEPT_BE" :	//귀속부서
        	case "ccfCD_DEPT_BH" :	//발행부서
        		dsUserParam.setColumn(nrow, "CD_CORP"	  , this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "ID_USER"	  , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_DEPT_ACNT", this.AuthClient.CD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "CD_DIV"	  , "S");
        		dsUserParam.setColumn(nrow, "REF_01"	  , "");
        		dsUserParam.setColumn(nrow, "REF_02"	  , "");
        		dsUserParam.setColumn(nrow, "REF_03"	  , "");
        		dsUserParam.setColumn(nrow, "REF_04"	  , "");
        		dsUserParam.setColumn(nrow, "REF_05"	  , "");
        		break;
        	case "ccfCD_ACCOUNT" :	//계정코드
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        			this.gfnAlert("법인코드를 먼저 선택하세요.", function (){
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			});
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP"	  , this.dsSearch.getColumn(0, "CD_CORP"));
        		break;
        	case "ccfCD_VENDOR" :	//거래처
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        			this.gfnAlert("법인코드를 먼저 선택하세요.", function (){
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			});
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP"	  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "TY_VENDOR"   , "");
        		dsUserParam.setColumn(nrow, "YN_USE"  	  , "Y");
        		break;
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	//필터 로우일 경우
        	if(this.dsList.getColumn(e.row, this.ucFlag) == "#"){
        		this.gfnGridClear(this.dxGridSub);
        	}

            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.fnButtonCheck();
        		this.fnSelectSub();
        		obj.oldrow = -1;
        	}
        };

        this.fnGrid_AfterEdit = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		if(e.columnid == "AM_REMAIN"){	//반제금액
        			var tyCrdr = obj.getColumn(e.row, "TY_CRDR");
        			var amDr = (tyCrdr == "D" ? e.newvalue : 0);
        			var amCr = (tyCrdr == "C" ? e.newvalue : 0);

        			obj.setColumn(e.row, "AM_DR"  , amDr);	//차변금액
        			obj.setColumn(e.row, "AM_CR"  , amCr);	//대변금액

        			var amRemain  = nexacro.toNumber(e.newvalue,0);
        			var amAccount = nexacro.toNumber(obj.getColumn(e.row, "AM_ACCOUNT"),0);
        			var amJungSan = nexacro.toNumber(obj.getColumn(e.row, "AM_JUNGSAN"),0);
        			obj.setColumn(e.row, "AM_REMAIN_UNBOUND", amAccount-amJungSan-amRemain);

        			//체크박스 체크 처리
        			obj.setColumn(e.row, "CHK", (amRemain != 0 ? 1 : 0));
        		}
        	}
        }

        //그리드 더블클릭 이벤트
        this.fnGrid_OnCelldblclick = function(obj,e){
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm != "AM_REMAIN"){
        		this.fnSlipSearch();
        	}
        };

        //상세그리드 더블클릭 이벤트
        this.fnGridSub_OnCelldblclick = function(obj,e){
        	this.fnBanjeSearch();
        };
        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.divData_ondragmove = function(obj,e){
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e){
        	e.set_userdata("splitter");
        	return true;
        };

        //검색조건 변경 이벤트
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);

        		if(e.columnid == "CD_CORP"){
        			this.ccfCD_ACCOUNT.form.fnCodeFindClear(false);
        			this.ccfCD_VENDOR.form.fnCodeFindClear(false);
        		}else if(e.columnid == "YN_JUNGSAN"){
        			if(e.newvalue == "Y"){
        				this.btnDebtJungSan.set_enable(false);
        			}else{
        				if(this.dsList.rowcount > 0){
        					this.btnDebtJungSan.set_enable(true);
        				}
        			}
        		}
        	}
        };

        //채무정산
        this.fnDebtJungSan = function (obj,e){
        	var chkCnt = 0;
        	var strRowMsg = "";
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK") == 1 && this.dsList.getColumn(i, this.ucFlag) != "#"){
        			if(nexacro.toNumber(this.dsList.getColumn(i, "AM_REMAIN")) == 0){
        				strRowMsg += (i + 1) + "행 : [반제금액]을 입력하세요.\n";
        			}

        			if(0 > nexacro.toNumber(this.dsList.getColumn(i, "AM_REMAIN_UNBOUND"),0)){
        				strRowMsg += (i + 1) + "행 : [잔액]은 정산금액보다 작거나 같아야 합니다.\n";
        			}
        			chkCnt++;
        		}
        	}

        	if(chkCnt == 0){
        		this.gfnAlert("선택된 데이터가 없습니다.");
        		return false;
        	}

        	if(!this.gfnIsNull(strRowMsg)){
        		this.gfnAlert(strRowMsg);
        		return;
        	}

        	this.gfnConfirm(chkCnt + "건을 "+obj.text+" 하시겠습니까?", function (strId, val){
        		if(val){
        			this.dsResult.set_enableevent(false);

        			//컬럼/데이터 복사
        			this.dsResult.copyData(this.dsList, true);

        			this.dsResult.clearData();

        			for(var i =0;i<this.dsList.getRowCount();i++){
        				if(this.dsList.getColumn(i, this.ucFlag) != "#"){
        					if(this.dsList.getColumn(i, "CHK") == 1 && this.dsList.getRowLevel(i) == 0){
        						var nRow = this.dsResult.addRow();

        						this.dsResult.copyRow(nRow, this.dsList, i);
        						this.dsResult.setColumn(nRow, this.ucFlag, "I");

        					}
        				}
        			}

        			this.dsResult.set_enableevent(true);

        			var param = {};
        			param.dsResult = this.dsResult.saveXML();
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP_STD", "fnIssueSlipCallbak", param);
        		}
        	});

        }

        //전표발행 팝업 콜백
        this.fnIssueSlipCallbak = function (strID, val){
        	if(!this.gfnIsNull(val)){
        		var json = JSON.parse(val);

        		if(json.IsChange){
        			this.FormBtns.Select.click();
        		}
        	}
        };

        //전표조회
        this.fnSlipSearch = function (obj,e){
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))){
        		return;
        	}

        	var param = {};
        	param.CD_CORP  = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");

        	this.gfnPopIssueSlip(param);
        }

        //반제전표조회
        this.fnBanjeSearch = function (obj,e){
        	if(!this.gfnGridIsRow(this.dxGridSub)) return;

        	if(this.gfnIsNull(this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SLIP_JU"))){
        		return;
        	}

        	var param = {};
        	param.CD_CORP  = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_CORP");
        	param.CD_TRADE = this.gfnLeft(this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SLIP_JU"),13);

        	this.gfnPopIssueSlip(param);
        }

        //버튼 활성/비활성 공통 처리
        this.fnButtonCheck = function (){
        	this.gfnBtnCheck(this.btnBanjeSearch, this.dsList);	//반제전표조회
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHC_DEBT_SELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
