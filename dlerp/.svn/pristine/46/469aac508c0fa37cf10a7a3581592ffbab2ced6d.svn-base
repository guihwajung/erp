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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select_bgvdprsn</Col><Col id=\"SP\">DAJPR_RTNG_BGVDPRSN_ADMN_SELECT</Col></Row><Row><Col id=\"TARGET\">save_bgvdprsn</Col><Col id=\"SP\">DAJPR_RTNG_BGVDPRSN_ADMN_SAVE</Col></Row><Row><Col id=\"TARGET\">make_bgvdprsn</Col><Col id=\"SP\">DAJPR_RTNG_BGVDPRSN_ADMN_EXECUTE</Col></Row><Row><Col id=\"TARGET\">select_rtngprsn</Col><Col id=\"SP\">DAJPR_RTNG_RTNGPRSN_ADMN_SELECT</Col></Row><Row><Col id=\"TARGET\">save_rtngprsn</Col><Col id=\"SP\">DAJPR_RTNG_RTNGPRSN_ADMN_SAVE</Col></Row><Row><Col id=\"TARGET\">save_ldsh_rtngprsn</Col><Col id=\"SP\">DAJPR_RTNG_LDSH_RTNGPRSN_ADMN_SAVE</Col></Row><Row><Col id=\"TARGET\">save_pool</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_POOL_SAVE</Col></Row><Row><Col id=\"TARGET\">selection_pool</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_POOL_SELECTION</Col></Row><Row><Col id=\"TARGET\">submit_pool</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_POOL_SUBMIT</Col></Row><Row><Col id=\"TARGET\">confirm_pool</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_POOL_CONFIRM</Col></Row><Row><Col id=\"TARGET\">cleanup_rtng</Col><Col id=\"SP\">DAJPR_RTNG_CLEANUP</Col></Row><Row><Col id=\"TARGET\">return_rtng</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_ESTT_INTERVIEW_COMPLETE_RETURN</Col></Row><Row><Col id=\"TARGET\">save_goal_itvwprsn</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_ITVW_PRSN_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YR_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_BEGN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_END\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_STD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_RTNG","ccfCD_CORP:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_RTNG","staYR_RTNG:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_RTNG","ctclYR_RTNG:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("평가회차");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_RTNG","staID_RTNG:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFRTNG_STD");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCD_RTNG_ASBLNEXT","ccfID_RTNG:5","10.0","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","50%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("#c9c9c9");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("피평가자/대상자 관리");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnRegisterRTNGPRSN",null,"0","100","22","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("평가자 등록");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnCreateBGVDPRSN",null,"0","110","22","btnRegisterRTNGPRSN:5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("피평가자 생성");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnSaveBGVDPRSN",null,"0","60","22","btnCreateBGVDPRSN:5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_enable("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnDeleteBGVDPRSN",null,"0","60","22","btnSaveBGVDPRSN:5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnAddBGVDPRSN",null,"0","60","22","btnDeleteBGVDPRSN:5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnReturn",null,"0","100","22","btnAddBGVDPRSN:5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("평가상태초기화");
            obj.set_enable("true");
            obj.set_visible("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnUploadExcel",null,"0","100","22","btnReturn:5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("EXCEL업로드");
            obj.set_enable("true");
            obj.set_visible("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnCleanup",null,"0","60","22","btnUploadExcel:5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_enable("true");
            obj.set_visible("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("평가자/검토자/면담자 관리");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnSaveRTNGPRSN",null,"0","60","22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_enable("false");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnDeleteRTNGPRSN",null,"0","60","22","btnSaveRTNGPRSN:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnAddRTNGPRSN",null,"0","60","22","btnDeleteRTNGPRSN:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
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

            obj = new BindItem("item2","divSearch.form.ctclYR_RTNG.form.TextBox","value","dsSearch","YR_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_RTNG.form.CDTextBox","value","dsSearch","ID_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_RTNG.form.DSTextBox","value","dsSearch","DS_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtCD_RTNG_ASBLNEXT","value","dsSearch","DS_RTNG_ASBLNEXT");
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
        this.registerScript("DAJ_RTNG_BGVDPRSN_ADMN.xfdl", function() {
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

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid    = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;

        	// 검색영역
        	this.ccfCD_CORP  = this.divSearch.form.ccfCD_CORP;
        	this.ctclYR_RTNG = this.divSearch.form.ctclYR_RTNG;
        	this.ccfID_RTNG  = this.divSearch.form.ccfID_RTNG;

        	// 평가자/검토자 관리
        	this.sta01 = this.divData.form.divDataTop.form.sta01;
        	this.sta02 = this.divData.form.divDataBottom.form.sta02;

        	// 버튼
        	this.btnCleanup     = this.divData.form.divDataTop.form.btnCleanup;
        	this.btnUploadExcel = this.divData.form.divDataTop.form.btnUploadExcel;
        	this.btnReturn      = this.divData.form.divDataTop.form.btnReturn;
        	this.btnAddBGVDPRSN = this.divData.form.divDataTop.form.btnAddBGVDPRSN;
        	this.btnDeleteBGVDPRSN = this.divData.form.divDataTop.form.btnDeleteBGVDPRSN;
        	this.btnSaveBGVDPRSN = this.divData.form.divDataTop.form.btnSaveBGVDPRSN;
        	this.btnCreateBGVDPRSN = this.divData.form.divDataTop.form.btnCreateBGVDPRSN;
        	this.btnRegisterRTNGPRSN = this.divData.form.divDataTop.form.btnRegisterRTNGPRSN;

        	this.btnAddRTNGPRSN = this.divData.form.divDataBottom.form.btnAddRTNGPRSN;
        	this.btnDeleteRTNGPRSN = this.divData.form.divDataBottom.form.btnDeleteRTNGPRSN;
        	this.btnSaveRTNGPRSN = this.divData.form.divDataBottom.form.btnSaveRTNGPRSN;

        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_RTNG_BGVDPRSN_ADMN");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGridRowCellChanged, this);
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAJ_RTNG_RTNGPRSN_ADMN_R");
        	this.dxGridSub.set_autofittype("col");
        	this.dxGridSub.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGridSub.AfterCDTextChanged     = "fnGridAfterCDTextChanged";

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfID_RTNG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 평가기준
        	this.ccfID_RTNG.AfterCDTextChanged     = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 피평가자 조회
        	this.dsSelectBgvdprsn = new Dataset();
        	this.dsSelectBgvdprsn.addColumn("CD_CORP", "string");
        	this.dsSelectBgvdprsn.addColumn("ID_RTNG", "string");

        	// 피평가자 저장
        	this.dsSaveBgcdprsn = new Dataset();
        	this.dsSaveBgcdprsn.addColumn("TY_WRK", "string");
        	this.dsSaveBgcdprsn.addColumn("CD_CORP", "string");
        	this.dsSaveBgcdprsn.addColumn("ID_RTNG", "string");
        	this.dsSaveBgcdprsn.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSaveBgcdprsn.addColumn("ID_CPNYDUTY", "string");
        	this.dsSaveBgcdprsn.addColumn("YN_RTNGTGT", "string");
        	this.dsSaveBgcdprsn.addColumn("CD_DEPT_RTNG", "string");
        	this.dsSaveBgcdprsn.addColumn("STAT_RTNG", "string");
        	this.dsSaveBgcdprsn.addColumn("RMK", "string");
        	this.dsSaveBgcdprsn.addColumn("ID_USER", "string");
        	this.dsSaveBgcdprsn.addColumn("ID_SCREEN", "string");

        	// 피평가자 생성
        	this.dsMakeBgvdprsn = new Dataset();
        	this.dsMakeBgvdprsn.addColumn("CD_CORP", "string");
        	this.dsMakeBgvdprsn.addColumn("ID_RTNG", "string");
        	this.dsMakeBgvdprsn.addColumn("DT_RTNG_STD", "string");
        	this.dsMakeBgvdprsn.addColumn("CD_RTNG_TYPE", "string");
        	this.dsMakeBgvdprsn.addColumn("ID_USER", "string");

        	// 평가자/검토자 조회
        	this.dsSelectRtngprsn = new Dataset();
        	this.dsSelectRtngprsn.addColumn("CD_CORP", "string");
        	this.dsSelectRtngprsn.addColumn("ID_RTNG", "string");
        	this.dsSelectRtngprsn.addColumn("SEQ_BGVDPRSN", "int");

        	// 동료다면평가 검토자 저장
        	this.dsSaveRtngprsn = new Dataset();
        	this.dsSaveRtngprsn.addColumn("TY_WRK", "string");
        	this.dsSaveRtngprsn.addColumn("CD_CORP", "string");
        	this.dsSaveRtngprsn.addColumn("ID_RTNG", "string");
        	this.dsSaveRtngprsn.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSaveRtngprsn.addColumn("SEQ_RTNGPRSN", "int");
        	this.dsSaveRtngprsn.addColumn("CL_RTNGPRSN", "string");
        	this.dsSaveRtngprsn.addColumn("ID_CPNYDUTY", "string");
        	this.dsSaveRtngprsn.addColumn("STAT_RTNG", "string");
        	this.dsSaveRtngprsn.addColumn("ID_USER", "string");
        	this.dsSaveRtngprsn.addColumn("ID_SCREEN", "string");

        	// 리더십 평가자 저장
        	this.dsSaveLdshRtngprsn = new Dataset();
        	this.dsSaveLdshRtngprsn.addColumn("TY_WRK", "string");
        	this.dsSaveLdshRtngprsn.addColumn("CD_CORP", "string");
        	this.dsSaveLdshRtngprsn.addColumn("ID_RTNG", "string");
        	this.dsSaveLdshRtngprsn.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSaveLdshRtngprsn.addColumn("SEQ_RTNGPRSN", "int");
        	this.dsSaveLdshRtngprsn.addColumn("CL_RTNGPRSN", "string");
        	this.dsSaveLdshRtngprsn.addColumn("ID_CPNYDUTY", "string");
        	this.dsSaveLdshRtngprsn.addColumn("STAT_RTNG", "string");
        	this.dsSaveLdshRtngprsn.addColumn("ID_USER", "string");

        	// 업무목표 면담자 저장
        	this.dsSaveGoalItvwprsn = new Dataset();
        	this.dsSaveGoalItvwprsn.addColumn("TY_WRK", "string");
        	this.dsSaveGoalItvwprsn.addColumn("CD_CORP", "string");
        	this.dsSaveGoalItvwprsn.addColumn("ID_RTNG", "string");
        	this.dsSaveGoalItvwprsn.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSaveGoalItvwprsn.addColumn("SEQ_ITVWPRSN", "int");
        	this.dsSaveGoalItvwprsn.addColumn("CL_ITVWPRSN", "string");
        	this.dsSaveGoalItvwprsn.addColumn("ID_ITVWPRSN", "string");
        	this.dsSaveGoalItvwprsn.addColumn("STAT_RTNG", "string");
        	this.dsSaveGoalItvwprsn.addColumn("ID_USER", "string");
        	this.dsSaveGoalItvwprsn.addColumn("CD_RTNG_TYPE", "string");
        	this.dsSaveGoalItvwprsn.addColumn("ID_SCREEN", "string");

        	// 초기화
        	this.dsCleanup = new Dataset();
        	this.dsCleanup.addColumn("CD_CORP", "string");
        	this.dsCleanup.addColumn("ID_RTNG", "string");

        	// 평가상태 초기화(건별)
        	this.dsReturn = new Dataset();
        	this.dsReturn.addColumn("CD_CORP", "string");
        	this.dsReturn.addColumn("ID_RTNG", "string");
        	this.dsReturn.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsReturn.addColumn("ID_USER", "string");

        	// 다면평가 동료 POOL 저장
        	this.dsSavePool = new Dataset();
        	this.dsSavePool.addColumn("TY_WRK", "string");
        	this.dsSavePool.addColumn("CD_CORP", "string");
        	this.dsSavePool.addColumn("ID_RTNG", "string");
        	this.dsSavePool.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSavePool.addColumn("SEQ_CLGE_POOL", "int");
        	this.dsSavePool.addColumn("SEQ_RTNGPRSN", "int");
        	this.dsSavePool.addColumn("ID_CLGE", "string");
        	this.dsSavePool.addColumn("ID_USER", "string");

        	// 다면평가 동료 POOL 제출
        	this.dsPoolSubmit = new Dataset();
        	this.dsPoolSubmit.addColumn("CD_CORP", "string");
        	this.dsPoolSubmit.addColumn("ID_RTNG", "string");
        	this.dsPoolSubmit.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsPoolSubmit.addColumn("ID_USER", "string");

        	// 다면평가 동료 POOL 선정
        	this.dsPoolSelection = new Dataset();
        	this.dsPoolSelection.addColumn("CD_CORP", "string");
        	this.dsPoolSelection.addColumn("ID_RTNG", "string");
        	this.dsPoolSelection.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsPoolSelection.addColumn("ID_USER", "string");

        	// 다면평가 동료 POOL 검토
        	this.dsPoolConfirm = new Dataset();
        	this.dsPoolConfirm.addColumn("CD_CORP", "string");
        	this.dsPoolConfirm.addColumn("ID_RTNG", "string");
        	this.dsPoolConfirm.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsPoolConfirm.addColumn("SEQ_CLGE_POOL", "int");
        	this.dsPoolConfirm.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	// 법인
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YR_RTNG", today.substr(0, 4));

        	if (this.AuthClient.CD_ROLE == "R99") {
        		this.btnCleanup.set_visible(false);
        		this.btnUploadExcel.set_visible(true);
        		this.btnReturn.set_visible(true);
        	}

        	// 버튼
        	this.btnCleanup.set_enable(false);
        	this.btnUploadExcel.set_enable(false);
        	this.btnReturn.set_enable(false);
        	this.btnAddBGVDPRSN.set_enable(false);
        	this.btnDeleteBGVDPRSN.set_enable(false);
        	this.btnSaveBGVDPRSN.set_enable(false);
        	this.btnCreateBGVDPRSN.set_enable(false);
        	this.btnRegisterRTNGPRSN.set_enable(false);

        	this.btnAddRTNGPRSN.set_enable(false);
        	this.btnDeleteRTNGPRSN.set_enable(false);
        	this.btnSaveRTNGPRSN.set_enable(false);

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        // 피평가자 조회
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelectBgvdprsn.clearData();
        	this.dsSelectBgvdprsn.addRow();
        	this.dsSelectBgvdprsn.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectBgvdprsn.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));

        	var strSvcId    = "select_bgvdprsn";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_bgvdprsn=dsSelectBgvdprsn"
        	var outData     = "dsList=select_bgvdprsn0"
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

        // 평가자/검토자 조회
        this.fnSelectRtngprsn = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectRtngprsn.clearData();
        	this.dsSelectRtngprsn.addRow();
        	this.dsSelectRtngprsn.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectRtngprsn.setColumn(0, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSelectRtngprsn.setColumn(0, "SEQ_BGVDPRSN", this.dsList.getColumn(this.dsList.rowposition, "SEQ_BGVDPRSN"));

        	var strSvcId    = "select_rtngprsn";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_rtngprsn=dsSelectRtngprsn"
        	var outData     = "dsListSub=select_rtngprsn0"
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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         * 저장 버튼
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
         * 확장버튼 이벤트
         ************************************************************************/
        // 평가자 등록 버튼
        this.divData_divDataTop_btnRegisterRTNGPRSN_onclick = function(obj, e) {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.dsList.set_enableevent(false);

        	this.dsList.filter("CHK == 1");

        	if (this.dsList.rowcount == 0) {
        		this.gfnAlert("선택된 피평가자가 존재하지 않습니다.");
        		this.dsList.filter("");
        		this.dsList.set_enableevent(true);
        		return;
        	}

        	var dsList = new Dataset();
        	dsList.copyData(this.dsList, true);
        	var dsSearch = new Dataset();
        	dsSearch.copyData(this.dsSearch);

        	var param = {
        		DS_SEARCH: dsSearch,
        		DS_LIST: dsList,
        	};
        	this.gfnFormOpen("DAB", "DAJ_RTNG_RTNGPRSN_DLG", "btnRegisterRTNGPRSNCallback", param, "1200", "800");

        	this.dsList.filter("");

        	this.dsList.set_enableevent(true);
        }

        this.btnRegisterRTNGPRSNCallback = function() {
        	this.fnSelectRtngprsn();
        }

        // 피평가자 생성 버튼
        this.divData_divDataTop_btnCreateBGVDPRSN_onclick = function(obj, e) {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	// 동료다면평가
        	if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA01") {
        		this.gfnConfirm("모든 피평가자 및 평가자 정보는\n모두 삭제 후 피평가자가 생성됩니다.\n계속하시겠습니까?", "fnCreateBGVDPRSNCallback");
        	}// 리더십평가
        	else if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA02") {
        		this.gfnConfirm("모든 피평가자 및 평가자 정보는\n모두 삭제 후 피평가자가 생성됩니다.\n계속하시겠습니까?", "fnCreateBGVDPRSNCallback");
        	}// 업무목표수립
        	else if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA10") {
        		this.gfnConfirm("모든 피평가자 및 평가자 정보는\n모두 삭제 후 피평가자가 생성됩니다.\n계속하시겠습니까?", "fnCreateBGVDPRSNCallback");
        	}// 중간점검
        	else if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA11") {
        		this.gfnConfirm("연결된 업무목표수립의\n피평가자 및 평가자 정보가 추가 생성됩니다.\n계속하시겠습니까?", "fnCreateBGVDPRSNCallback");
        	}// 자기기술
        	else if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA12") {
        		this.gfnConfirm("연결된 중간점검의\n피평가자 및 평가자 정보가 추가 생성됩니다.\n계속하시겠습니까?", "fnCreateBGVDPRSNCallback");
        	}// 인사평가
        	else if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA13") {
        		this.gfnConfirm("연결된 성과 자기기술의\n피평가자 및 평가자 정보가 추가 생성됩니다.\n계속하시겠습니까?", "fnCreateBGVDPRSNCallback");
        	}
        }

        this.fnCreateBGVDPRSNCallback = function(strId, val) {
        	if(val == false) return;

        	this.dxGrid.updateToDataset();

        	this.dsMakeBgvdprsn.clearData();
        	this.dsMakeBgvdprsn.addRow();
        	this.dsMakeBgvdprsn.setColumn(0, "CD_CORP"    , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsMakeBgvdprsn.setColumn(0, "ID_RTNG"    , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsMakeBgvdprsn.setColumn(0, "DT_RTNG_STD", this.dsSearch.getColumn(0, "DT_RTNG_STD"));
        	this.dsMakeBgvdprsn.setColumn(0, "CD_RTNG_TYPE", this.dsSearch.getColumn(0, "CD_RTNG_TYPE"));
        	this.dsMakeBgvdprsn.setColumn(0, "ID_USER"    , this.AuthClient.ID_USER);

        	if (this.dsMakeBgvdprsn.rowcount == 0) return;

        	var strSvcId    = "make_bgvdprsn";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "make_bgvdprsn=dsMakeBgvdprsn";
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

        // 피평가자 저장 버튼
        this.divData_divDataTop_btnSaveBGVDPRSN_onclick = function(obj, e) {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if(flag == "I" || flag == "U" || flag == "D") {
        			this.gfnConfirm("입력한 피평가자 정보가 저장됩니다.\n계속하시겠습니까?", "fnSaveBGVDPRSNCallback");
        			//this.gfnConfirm("모든 평가자 정보도 함께 삭제됩니다.\n계속하시겠습니까?", "fnSaveBGVDPRSNCallback");
        		}
        	}
        }

        this.fnSaveBGVDPRSNCallback = function(strId, val) {
        	if(val == false) return;
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsSaveBgcdprsn.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch (flag) {
        		case "I":
        		case "U":
        		case "D":
        			var nrow = this.dsSaveBgcdprsn.addRow();
        			this.dsSaveBgcdprsn.setColumn(nrow, "TY_WRK"      , flag);
        			this.dsSaveBgcdprsn.setColumn(nrow, "CD_CORP"     , this.dsList.getColumn(i, "CD_CORP"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "ID_RTNG"     , this.dsList.getColumn(i, "ID_RTNG"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "SEQ_BGVDPRSN", this.dsList.getColumn(i, "SEQ_BGVDPRSN"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "ID_CPNYDUTY" , this.dsList.getColumn(i, "ID_CPNYDUTY"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "YN_RTNGTGT"  , this.dsList.getColumn(i, "YN_RTNGTGT"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "CD_DEPT_RTNG", this.dsList.getColumn(i, "CD_DEPT_RTNG"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "STAT_RTNG"   , this.dsList.getColumn(i, "STAT_RTNG"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "RMK"         , this.dsList.getColumn(i, "RMK"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);
        			this.dsSaveBgcdprsn.setColumn(nrow, "ID_SCREEN"   , "DAJ_RTNG_BGVDPRSN_ADMN");
        			break;
        		}
        	}

        	if (this.dsSaveBgcdprsn.rowcount == 0) return;

        	var strSvcId    = "save_bgvdprsn";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_bgvdprsn=dsSaveBgcdprsn";
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

        // 피평가자 삭제 버튼
        this.divData_divDataTop_btnDeleteBGVDPRSN_onclick = function(obj, e) {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.dsList.set_enableevent(false);

        // 	var rowCount = 0;
        // 	this.dsList.filter("CHK == 1");
        // 	rowCount = this.dsList.rowcount;

        // 	if (this.dsList.rowcount == 0) {
        // 		this.gfnAlert("선택된 피평가자가 존재하지 않습니다.");
        // 		this.dsList.filter("");
        // 		this.dsList.set_enableevent(true);
        // 		return;
        // 	}
        //
        // 	this.dsList.filter("");

        // 	if (rowCount > 0) {
        // 		this.dsList.filter("CHK == 1");
        // 		for (var i = 0; i < this.dsList.rowcount; i++) {
        // 			//var flag = this.gfnGetFlag(this.dsList, i);
        // 			this.dsList.setColumn(i, this.ucFlag, "D");
        // 			this.dsList.setColumn(i, "CHK", 0);
        //
        // // 			if (this.dsList.getColumn(i, "CHK") == 1 && flag == "D")
        // // 			{
        // // 				this.dsList.setColumn(i, this.ucFlag, "");
        // // 				this.dsList.setColumn(i, "CHK", 0);
        // // 			}
        // // 			else
        // // 			{
        // // 				this.dsList.setColumn(i, this.ucFlag, "D");
        // // 			}
        // 		}
        // 		this.dsList.filter("");
        // 	} else {
        // 		this.gfnGridDel(this.dxGrid);
        // 	}

        	this.gfnGridDel(this.dxGrid);

        	this.dsList.set_enableevent(true);
        	this.gfnSetFormStatus(this, "D");
        	this.btnSaveBGVDPRSN.set_enable(true);
        }

        // 피평가자 추가 버튼
        this.divData_divDataTop_btnAddBGVDPRSN_onclick = function(obj, e) {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow, "CD_CORP"         , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsList.setColumn(nrow, "DS_CORP"         , this.dsSearch.getColumn(0, "DS_CORP"));
        	this.dsList.setColumn(nrow, "ID_RTNG"         , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsList.setColumn(nrow, "DS_RTNG"         , this.dsSearch.getColumn(0, "DS_RTNG"));
        	this.dsList.setColumn(nrow, "YR_RTNG"         , this.dsSearch.getColumn(0, "YR_RTNG"));
        	this.dsList.setColumn(nrow, "CD_RTNG_TYPE"    , this.dsSearch.getColumn(0, "CD_RTNG_TYPE"));
        	this.dsList.setColumn(nrow, "DS_RTNG_TYPE"    , this.dsSearch.getColumn(0, "DS_RTNG_TYPE"));
        	this.dsList.setColumn(nrow, "DT_RTNG_BEGN"    , this.dsSearch.getColumn(0, "DT_RTNG_BEGN"));
        	this.dsList.setColumn(nrow, "DT_RTNG_END"     , this.dsSearch.getColumn(0, "DT_RTNG_END"));
        	this.dsList.setColumn(nrow, "DT_RTNG_STD"     , this.dsSearch.getColumn(0, "DT_RTNG_STD"));
        	this.dsList.setColumn(nrow, "CD_RTNG_ASBLNEXT", this.dsSearch.getColumn(0, "CD_RTNG_ASBLNEXT"));
        	this.dsList.setColumn(nrow, "DS_RTNG_ASBLNEXT", this.dsSearch.getColumn(0, "DS_RTNG_ASBLNEXT"));

        	this.gfnSetFormStatus(this, "I");
        	this.btnSaveBGVDPRSN.set_enable(true);
        }

        // 평가자/검토자/면담자 저장 버튼
        this.divData_divDataBottom_btnSaveRTNGPRSN_onclick = function(obj, e) {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	var CD_RTNG_TYPE = this.dsSearch.getColumn(0, "CD_RTNG_TYPE");
        	if (CD_RTNG_TYPE == "JA01") {
        		this.dsSaveRtngprsn.clearData();
        		for (var i = 0; i < this.dsListSub.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsListSub, i);
        			switch (flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveRtngprsn.addRow();
        				this.dsSaveRtngprsn.setColumn(nrow, "TY_WRK"      , flag);
        				this.dsSaveRtngprsn.setColumn(nrow, "CD_CORP"     , this.dsListSub.getColumn(i, "CD_CORP"));
        				this.dsSaveRtngprsn.setColumn(nrow, "ID_RTNG"     , this.dsListSub.getColumn(i, "ID_RTNG"));
        				this.dsSaveRtngprsn.setColumn(nrow, "SEQ_BGVDPRSN", this.dsListSub.getColumn(i, "SEQ_BGVDPRSN"));
        				this.dsSaveRtngprsn.setColumn(nrow, "SEQ_RTNGPRSN", this.dsListSub.getColumn(i, "SEQ_RTNGPRSN"));
        				this.dsSaveRtngprsn.setColumn(nrow, "CL_RTNGPRSN" , this.dsListSub.getColumn(i, "CL_RTNGPRSN"));
        				this.dsSaveRtngprsn.setColumn(nrow, "ID_CPNYDUTY" , this.dsListSub.getColumn(i, "RTNG_ID_CPNYDUTY"));
        				this.dsSaveRtngprsn.setColumn(nrow, "STAT_RTNG"   , this.dsListSub.getColumn(i, "STAT_RTNG"));
        				this.dsSaveRtngprsn.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);
        				this.dsSaveRtngprsn.setColumn(nrow, "ID_SCREEN"   , "DAJ_RTNG_BGVDPRSN_ADMN");
        				break;
        			}
        		}

        		if (this.dsSaveRtngprsn.rowcount == 0) return;

        		var strSvcId    = "save_rtngprsn";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "save_rtngprsn=dsSaveRtngprsn";
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

        	if (CD_RTNG_TYPE == "JA02") {
        		this.dsSaveLdshRtngprsn.clearData();
        		for (var i = 0; i < this.dsListSub.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsListSub, i);
        			switch (flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveLdshRtngprsn.addRow();
        				this.dsSaveLdshRtngprsn.setColumn(nrow, "TY_WRK"      , flag);
        				this.dsSaveLdshRtngprsn.setColumn(nrow, "CD_CORP"     , this.dsListSub.getColumn(i, "CD_CORP"));
        				this.dsSaveLdshRtngprsn.setColumn(nrow, "ID_RTNG"     , this.dsListSub.getColumn(i, "ID_RTNG"));
        				this.dsSaveLdshRtngprsn.setColumn(nrow, "SEQ_BGVDPRSN", this.dsListSub.getColumn(i, "SEQ_BGVDPRSN"));
        				this.dsSaveLdshRtngprsn.setColumn(nrow, "SEQ_RTNGPRSN", this.dsListSub.getColumn(i, "SEQ_RTNGPRSN"));
        				this.dsSaveLdshRtngprsn.setColumn(nrow, "CL_RTNGPRSN" , this.dsListSub.getColumn(i, "CL_RTNGPRSN"));
        				this.dsSaveLdshRtngprsn.setColumn(nrow, "ID_CPNYDUTY" , this.dsListSub.getColumn(i, "RTNG_ID_CPNYDUTY"));
        				this.dsSaveLdshRtngprsn.setColumn(nrow, "STAT_RTNG"   , this.dsListSub.getColumn(i, "STAT_RTNG"));
        				this.dsSaveLdshRtngprsn.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);
        				break;
        			}
        		}

        		if (this.dsSaveLdshRtngprsn.rowcount == 0) return;

        		var strSvcId    = "save_ldsh_rtngprsn";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "save_ldsh_rtngprsn=dsSaveLdshRtngprsn";
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



        	if (CD_RTNG_TYPE == "JA10" || CD_RTNG_TYPE == "JA11" || CD_RTNG_TYPE == "JA12" || CD_RTNG_TYPE == "JA13") {
        		this.dsSaveGoalItvwprsn.clearData();
        		for (var i = 0; i < this.dsListSub.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsListSub, i);
        			switch (flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveGoalItvwprsn.addRow();
        				this.dsSaveGoalItvwprsn.setColumn(nrow, "TY_WRK"      , flag);
        				this.dsSaveGoalItvwprsn.setColumn(nrow, "CD_CORP"     , this.dsListSub.getColumn(i, "CD_CORP"));
        				this.dsSaveGoalItvwprsn.setColumn(nrow, "ID_RTNG"     , this.dsListSub.getColumn(i, "ID_RTNG"));
        				this.dsSaveGoalItvwprsn.setColumn(nrow, "SEQ_BGVDPRSN", this.dsListSub.getColumn(i, "SEQ_BGVDPRSN"));
        				this.dsSaveGoalItvwprsn.setColumn(nrow, "SEQ_ITVWPRSN", this.dsListSub.getColumn(i, "SEQ_RTNGPRSN"));
        				this.dsSaveGoalItvwprsn.setColumn(nrow, "CL_ITVWPRSN" , this.dsListSub.getColumn(i, "CL_RTNGPRSN_JA10"));
        				this.dsSaveGoalItvwprsn.setColumn(nrow, "ID_ITVWPRSN" , this.dsListSub.getColumn(i, "RTNG_ID_CPNYDUTY"));
        				this.dsSaveGoalItvwprsn.setColumn(nrow, "STAT_RTNG"   , this.dsListSub.getColumn(i, "STAT_RTNG"));
        				this.dsSaveGoalItvwprsn.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);
        				this.dsSaveGoalItvwprsn.setColumn(nrow, "CD_RTNG_TYPE", this.dsSearch.getColumn(0, "CD_RTNG_TYPE"));
        				this.dsSaveGoalItvwprsn.setColumn(nrow, "ID_SCREEN"   , "DAJ_RTNG_BGVDPRSN_ADMN");
        				break;
        			}
        		}

        		if (this.dsSaveGoalItvwprsn.rowcount == 0) return;

        		var strSvcId    = "save_goal_itvwprsn";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "save_goal_itvwprsn=dsSaveGoalItvwprsn";
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
        }

        // 평가자 삭제 버튼
        this.divData_divDataBottom_btnDeleteRTNGPRSN_onclick = function(obj, e) {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	//this.dsListSub.filter("CHK == 1");
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		if (this.dsListSub.getColumn(i, "STAT_RTNG") != undefined
        		&& this.dsListSub.getColumn(i, "STAT_RTNG") != "11"
        		&& this.dsListSub.getColumn(i, "STAT_RTNG") != "21"
        		&& this.dsListSub.getColumn(i, "STAT_RTNG") != "30"
        		&& this.dsListSub.getColumn(i, "STAT_RTNG") != "40"
        		&& this.dsListSub.getColumn(i, "STAT_RTNG") != "50") {
        			this.gfnAlert("평가가 진행중이거나 완료인 경우\n평가자, 검토자 혹은 면담자를 삭제할 수 없습니다.");
        			//this.dsListSub.filter("");
        			return;
        		}

        		//this.dsListSub.setColumn(i, this.ucFlag, "D");
        		//this.dsListSub.setColumn(i, "CHK", 0);
        	}
        	//this.dsListSub.filter("");

        	this.gfnGridDel(this.dxGridSub);
        	this.gfnSetFormStatus(this, "D");
        	this.btnSaveRTNGPRSN.set_enable(true);
        }

        // 평가자 추가 버튼
        this.divData_divDataBottom_btnAddRTNGPRSN_onclick = function(obj, e) {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	// 동료다면평가 검증
        	if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA01") {
        		if (this.dsListSub.rowcount > 0) {
        			this.gfnAlert("동료다면평가인 경우에는 검토자는 1명만 등록할 수 있습니다.");
        			return;
        		}
        	}

        	// 리더십평가 검증
        	if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA02") {
        		for (var i = 0; i < this.dsListSub.rowcount; i++) {
        			if (this.dsListSub.getColumn(i, "STAT_RTNG") != undefined && this.dsListSub.getColumn(i, "STAT_RTNG") != "11") {
        				this.gfnAlert("리더십평가가 진행중이거나 완료인 경우\n새로운 평가자를 등록할 수 없습니다.");
        				return;
        			}
        		}
        	}

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		if (this.dsListSub.getColumn(i, "STAT_RTNG") != undefined && this.dsListSub.getColumn(i, "STAT_RTNG") != "11"
        		&& this.dsListSub.getColumn(i, "STAT_RTNG") != "21"
        		&& this.dsListSub.getColumn(i, "STAT_RTNG") != "30"
        		&& this.dsListSub.getColumn(i, "STAT_RTNG") != "40"
        		&& this.dsListSub.getColumn(i, "STAT_RTNG") != "50") {
        			this.gfnAlert("평가가 진행중이거나 완료인 경우\n평가자, 검토자 혹은 면담자를 추가할 수 없습니다.");
        			//this.dsListSub.filter("");
        			return;
        		}

        		//this.dsListSub.setColumn(i, this.ucFlag, "D");
        		//this.dsListSub.setColumn(i, "CHK", 0);
        	}

        	var nrow = this.gfnGridAdd(this.dxGridSub);
        	this.dsListSub.setColumn(nrow, "CD_CORP"          , this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsListSub.setColumn(nrow, "DS_CORP"          , this.dsList.getColumn(this.dsList.rowposition, "DS_CORP"));
        	this.dsListSub.setColumn(nrow, "ID_RTNG"          , this.dsList.getColumn(this.dsList.rowposition, "ID_RTNG"));
        	this.dsListSub.setColumn(nrow, "SEQ_BGVDPRSN"     , this.dsList.getColumn(this.dsList.rowposition, "SEQ_BGVDPRSN"));

        	this.dsListSub.setColumn(nrow, "BGVD_ID_CPNYDUTY" , this.dsList.getColumn(this.dsList.rowposition, "ID_CPNYDUTY"));
        	this.dsListSub.setColumn(nrow, "BGVD_DS_HNAME"    , this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME"));
        	this.dsListSub.setColumn(nrow, "BGVD_CD_DEPT"     , this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"));
        	this.dsListSub.setColumn(nrow, "BGVD_DS_DEPT"     , this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT"));
        	this.dsListSub.setColumn(nrow, "BGVD_DT_GROUPJOIN", this.dsList.getColumn(this.dsList.rowposition, "DT_GROUPJOIN"));
        	this.dsListSub.setColumn(nrow, "BGVD_DT_JOIN"     , this.dsList.getColumn(this.dsList.rowposition, "DT_JOIN"));
        	this.dsListSub.setColumn(nrow, "BGVD_CD_JOBTYPE"  , this.dsList.getColumn(this.dsList.rowposition, "CD_JOBTYPE"));
        	this.dsListSub.setColumn(nrow, "BGVD_DS_JOBTYPE"  , this.dsList.getColumn(this.dsList.rowposition, "DS_JOBTYPE"));
        	this.dsListSub.setColumn(nrow, "BGVD_CD_EMPTYPE"  , this.dsList.getColumn(this.dsList.rowposition, "CD_EMPTYPE"));
        	this.dsListSub.setColumn(nrow, "BGVD_DS_EMPTYPE"  , this.dsList.getColumn(this.dsList.rowposition, "DS_EMPTYPE"));
        	this.dsListSub.setColumn(nrow, "BGVD_CD_PAYSTEP"  , this.dsList.getColumn(this.dsList.rowposition, "CD_PAYSTEP"));
        	this.dsListSub.setColumn(nrow, "BGVD_DS_PAYSTEP"  , this.dsList.getColumn(this.dsList.rowposition, "DS_PAYSTEP"));
        	this.dsListSub.setColumn(nrow, "BGVD_CD_POSITION" , this.dsList.getColumn(this.dsList.rowposition, "CD_POSITION"));
        	this.dsListSub.setColumn(nrow, "BGVD_DS_POSITION" , this.dsList.getColumn(this.dsList.rowposition, "DS_POSITION"));
        	this.dsListSub.setColumn(nrow, "CL_RTNGPRSN" 	  , "상사");


        	this.gfnSetFormStatus(this, "I");
        	this.btnSaveRTNGPRSN.set_enable(true);
        }

        // 엑셀업로드
        this.divData_divDataTop_btnUploadExcel_onclick = function(obj, e) {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	// 동료다면평가
        	if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA01") {
        		this.gfnExcelImport("dsList", "평가", "A4", "fnExcelImportMTSD_Callback", "import", this);
        	}

        	// 리더십평가
        	if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA02") {
        		this.gfnExcelImport("dsList", "평가", "A4", "fnExcelImportLDSH_Callback", "import", this);
        	}

        	// 인사평가
        	if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA10") {
        		this.gfnExcelImport("dsList", "평가", "A4", "fnExcelImportGOAL_Callback", "import", this);
        	}
        }

        var ImpotDsOut = null;
        this.fnExcelImportMTSD_Callback = function(sImportId, dsOut, dsSheet) {
        	this.ImpotDsOut = dsOut;

        	// 피평가자 임포트
        	this.fnImportMTSD_RTNG_BGVDPRSN_ADMN();
        }

        // 피평가자 임포트
        this.fnImportMTSD_RTNG_BGVDPRSN_ADMN = function() {
        	this.dsSaveBgcdprsn.clearData();

        	for (var i = 0; i < this.ImpotDsOut.rowcount; i++) {
        		// 피평가자
        		if (this.ImpotDsOut.getColumn(i, "Column0") != undefined) {
        			var nrow = this.dsSaveBgcdprsn.addRow();
        			this.dsSaveBgcdprsn.setColumn(nrow, "TY_WRK"      , "I");
        			this.dsSaveBgcdprsn.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "SEQ_BGVDPRSN", this.ImpotDsOut.getColumn(i, "Column0"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "ID_CPNYDUTY" , this.ImpotDsOut.getColumn(i, "Column1"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "YN_RTNGTGT"  , "");
        			this.dsSaveBgcdprsn.setColumn(nrow, "CD_DEPT_RTNG", "");
        			this.dsSaveBgcdprsn.setColumn(nrow, "STAT_RTNG"   , "");
        			this.dsSaveBgcdprsn.setColumn(nrow, "RMK"         , "");
        			this.dsSaveBgcdprsn.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);
        			this.dsSaveBgcdprsn.setColumn(nrow, "ID_SCREEN"   , "DAJ_RTNG_BGVDPRSN_ADMN");
        		}
        	}

        	var strSvcId    = "save_mtsd_bgvdprsn_import";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_bgvdprsn=dsSaveBgcdprsn";
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

        // 검토자 임포트
        this.fnImportRTNG_RTNGPRSN_ADMN = function() {
        	this.dsSaveRtngprsn.clearData();

        	var SEQ_BGVDPRSN = -1;
        	for (var i = 0; i < this.ImpotDsOut.rowcount; i++) {
        		if (this.ImpotDsOut.getColumn(i, "Column0") != undefined) {
        			SEQ_BGVDPRSN = this.ImpotDsOut.getColumn(i, "Column0");
        		}

        		if (this.ImpotDsOut.getColumn(i, "Column9") != undefined) {
        			if (this.ImpotDsOut.getColumn(i, "Column8") == "상사") {
        				var nrow = this.dsSaveRtngprsn.addRow();
        				this.dsSaveRtngprsn.setColumn(nrow, "TY_WRK"      , "I");
        				this.dsSaveRtngprsn.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSaveRtngprsn.setColumn(nrow, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        				this.dsSaveRtngprsn.setColumn(nrow, "SEQ_BGVDPRSN", SEQ_BGVDPRSN);
        				this.dsSaveRtngprsn.setColumn(nrow, "SEQ_RTNGPRSN", this.ImpotDsOut.getColumn(i, "Column7"));
        				this.dsSaveRtngprsn.setColumn(nrow, "CL_RTNGPRSN" , this.ImpotDsOut.getColumn(i, "Column8"));
        				this.dsSaveRtngprsn.setColumn(nrow, "ID_CPNYDUTY" , this.ImpotDsOut.getColumn(i, "Column9"));
        				this.dsSaveRtngprsn.setColumn(nrow, "STAT_RTNG"   , this.ImpotDsOut.getColumn(i, "Column8"));
        				this.dsSaveRtngprsn.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);
        				this.dsSaveRtngprsn.setColumn(nrow, "ID_SCREEN"   , "DAJ_RTNG_BGVDPRSN_ADMN");
        			}
        		}
        	}

        	var strSvcId    = "save_rtngprsn_import";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_rtngprsn=dsSaveRtngprsn";
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

        // 동료다면평가 POOL
        this.fnImportMTSD_CLGE_POOL = function() {
        	this.dsSavePool.clearData();

        	var SEQ_BGVDPRSN = -1;
        	for (var i = 0; i < this.ImpotDsOut.rowcount; i++) {
        		if (this.ImpotDsOut.getColumn(i, "Column0") != undefined) {
        			SEQ_BGVDPRSN = this.ImpotDsOut.getColumn(i, "Column0");
        		}

        		if (this.ImpotDsOut.getColumn(i, "Column9") != undefined) {
        			var nrow = this.dsSavePool.addRow();
        			this.dsSavePool.setColumn(nrow, "TY_WRK"       , "I");
        			this.dsSavePool.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSavePool.setColumn(nrow, "ID_RTNG"      , this.dsSearch.getColumn(0, "ID_RTNG"));
        			this.dsSavePool.setColumn(nrow, "SEQ_BGVDPRSN" , SEQ_BGVDPRSN);
        			this.dsSavePool.setColumn(nrow, "SEQ_CLGE_POOL", this.ImpotDsOut.getColumn(i, "Column7"));
        			this.dsSavePool.setColumn(nrow, "SEQ_RTNGPRSN" , 1);
        			this.dsSavePool.setColumn(nrow, "ID_CLGE"      , this.ImpotDsOut.getColumn(i, "Column9"));
        			this.dsSavePool.setColumn(nrow, "ID_USER"      , this.AuthClient.ID_USER);
        		}
        	}

        	var strSvcId    = "save_pool_import";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_pool=dsSavePool";
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

        // 동료다면평가 POOL 제출
        this.fnImportMTSD_CLGE_POOL_Submit = function() {
        	this.dsPoolSubmit.clearData();

        	var SEQ_BGVDPRSN = -1;
        	for (var i = 0; i < this.ImpotDsOut.rowcount; i++) {
        		if (this.ImpotDsOut.getColumn(i, "Column0") != undefined) {
        			SEQ_BGVDPRSN = this.ImpotDsOut.getColumn(i, "Column0");
        		}

        		if (this.ImpotDsOut.getColumn(i, "Column9") != undefined) {
        			var nrow = this.dsPoolSubmit.addRow();
        			this.dsPoolSubmit.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsPoolSubmit.setColumn(nrow, "ID_RTNG"      , this.dsSearch.getColumn(0, "ID_RTNG"));
        			this.dsPoolSubmit.setColumn(nrow, "SEQ_BGVDPRSN" , SEQ_BGVDPRSN);
        			this.dsPoolSubmit.setColumn(nrow, "SEQ_RTNGPRSN" , this.ImpotDsOut.getColumn(i, "Column7"));
        			this.dsPoolSubmit.setColumn(nrow, "ID_USER"      , this.AuthClient.ID_USER);
        		}
        	}

        	var strSvcId    = "submit_pool_import";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "submit_pool=dsPoolSubmit";
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

        // 동료다면평가 POOL 선정
        this.fnImportMTSD_CLGE_POOL_Selection = function() {
        	this.dsPoolSelection.clearData();

        	var SEQ_BGVDPRSN = -1;
        	for (var i = 0; i < this.ImpotDsOut.rowcount; i++) {
        		if (this.ImpotDsOut.getColumn(i, "Column0") != undefined) {
        			SEQ_BGVDPRSN = this.ImpotDsOut.getColumn(i, "Column0");
        		}

        		if (this.ImpotDsOut.getColumn(i, "Column9") != undefined) {
        			var nrow = this.dsPoolSelection.addRow();
        			this.dsPoolSelection.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsPoolSelection.setColumn(nrow, "ID_RTNG"      , this.dsSearch.getColumn(0, "ID_RTNG"));
        			this.dsPoolSelection.setColumn(nrow, "SEQ_BGVDPRSN" , SEQ_BGVDPRSN);
        			this.dsPoolSelection.setColumn(nrow, "ID_USER"      , this.AuthClient.ID_USER);
        		}
        	}

        	var strSvcId    = "selection_pool_import";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "selection_pool=dsPoolSelection";
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

        // 동료다면평가 POOL 검토
        this.fnImportMTSD_CLGE_POOL_Confirm = function() {
        	this.dsPoolConfirm.clearData();

        	var SEQ_BGVDPRSN = -1;
        	for (var i = 0; i < this.ImpotDsOut.rowcount; i++) {
        		if (this.ImpotDsOut.getColumn(i, "Column0") != undefined) {
        			SEQ_BGVDPRSN = this.ImpotDsOut.getColumn(i, "Column0");
        		}

        		if (this.ImpotDsOut.getColumn(i, "Column9") != undefined) {
        		var nrow = this.dsPoolConfirm.addRow();
        		this.dsPoolConfirm.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsPoolConfirm.setColumn(nrow, "ID_RTNG"      , this.dsSearch.getColumn(0, "ID_RTNG"));
        		this.dsPoolConfirm.setColumn(nrow, "SEQ_BGVDPRSN" , SEQ_BGVDPRSN);
        		this.dsPoolConfirm.setColumn(nrow, "SEQ_CLGE_POOL", this.ImpotDsOut.getColumn(i, "Column7"));
        		this.dsPoolConfirm.setColumn(nrow, "ID_USER"      , this.AuthClient.ID_USER);
        		}
        	}

        	var strSvcId    = "confirm_pool_import";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "confirm_pool=dsPoolConfirm";
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

        // 리더십평가 콜백
        this.fnExcelImportLDSH_Callback = function(sImportId, dsOut, dsSheet) {
        	this.ImpotDsOut = dsOut;

        	// 피평가자 임포트
        	this.fnImportLDSH_RTNG_BGVDPRSN_ADMN();
        }

        // 리더십평가 피평가자 임포트
        this.fnImportLDSH_RTNG_BGVDPRSN_ADMN = function() {
        	this.dsSaveBgcdprsn.clearData();

        	for (var i = 0; i < this.ImpotDsOut.rowcount; i++) {
        		// 피평가자
        		if (this.ImpotDsOut.getColumn(i, "Column0") != undefined) {
        			var nrow = this.dsSaveBgcdprsn.addRow();
        			this.dsSaveBgcdprsn.setColumn(nrow, "TY_WRK"      , "I");
        			this.dsSaveBgcdprsn.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "SEQ_BGVDPRSN", this.ImpotDsOut.getColumn(i, "Column0"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "ID_CPNYDUTY" , this.ImpotDsOut.getColumn(i, "Column1"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "YN_RTNGTGT"  , "");
        			this.dsSaveBgcdprsn.setColumn(nrow, "CD_DEPT_RTNG", "");
        			this.dsSaveBgcdprsn.setColumn(nrow, "STAT_RTNG"   , this.ImpotDsOut.getColumn(i, "Column8"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "RMK"         , "");
        			this.dsSaveBgcdprsn.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);
        			this.dsSaveBgcdprsn.setColumn(nrow, "ID_SCREEN"   , "DAJ_RTNG_BGVDPRSN_ADMN");
        		}
        	}

        	var strSvcId    = "save_ldsh_bgvdprsn_import";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_bgvdprsn=dsSaveBgcdprsn";
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

        // 리더십평가 평가자 임포트
        this.fnImportRTNG_LDSH_RTNGPRSN_ADMN = function() {
        	this.dsSaveLdshRtngprsn.clearData();

        	var SEQ_BGVDPRSN = -1;
        	for (var i = 0; i < this.ImpotDsOut.rowcount; i++) {
        		if (this.ImpotDsOut.getColumn(i, "Column0") != undefined) {
        			SEQ_BGVDPRSN = this.ImpotDsOut.getColumn(i, "Column0");
        		}

        		if (this.ImpotDsOut.getColumn(i, "Column9") != undefined) {
        			var nrow = this.dsSaveLdshRtngprsn.addRow();
        			this.dsSaveLdshRtngprsn.setColumn(nrow, "TY_WRK"      , "I");
        			this.dsSaveLdshRtngprsn.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSaveLdshRtngprsn.setColumn(nrow, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        			this.dsSaveLdshRtngprsn.setColumn(nrow, "SEQ_BGVDPRSN", SEQ_BGVDPRSN);
        			this.dsSaveLdshRtngprsn.setColumn(nrow, "SEQ_RTNGPRSN", this.ImpotDsOut.getColumn(i, "Column7"));
        			this.dsSaveLdshRtngprsn.setColumn(nrow, "CL_RTNGPRSN" , this.ImpotDsOut.getColumn(i, "Column8"));
        			this.dsSaveLdshRtngprsn.setColumn(nrow, "ID_CPNYDUTY" , this.ImpotDsOut.getColumn(i, "Column9"));
        			this.dsSaveLdshRtngprsn.setColumn(nrow, "STAT_RTNG"   , "");
        			this.dsSaveLdshRtngprsn.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);
        		}
        	}

        	var strSvcId    = "save_ldsh_rtngprsn_import";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_ldsh_rtngprsn=dsSaveLdshRtngprsn";
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

        // 인사평가(업무목표수립) 콜백
        this.fnExcelImportGOAL_Callback = function(sImportId, dsOut, dsSheet) {
        	this.ImpotDsOut = dsOut;

        	// 피평가자 임포트
        	this.fnImportGOAL_RTNG_BGVDPRSN_ADMN();
        }

        // 인사평가(업무목표수립) 피평가자 임포트
        this.fnImportGOAL_RTNG_BGVDPRSN_ADMN = function() {
        	this.dsSaveBgcdprsn.clearData();

        	for (var i = 0; i < this.ImpotDsOut.rowcount; i++) {
        		// 피평가자
        		if (this.ImpotDsOut.getColumn(i, "Column0") != undefined) {
        			var nrow = this.dsSaveBgcdprsn.addRow();
        			this.dsSaveBgcdprsn.setColumn(nrow, "TY_WRK"      , "I");
        			this.dsSaveBgcdprsn.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "SEQ_BGVDPRSN", this.ImpotDsOut.getColumn(i, "Column0"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "ID_CPNYDUTY" , this.ImpotDsOut.getColumn(i, "Column1"));
        			this.dsSaveBgcdprsn.setColumn(nrow, "YN_RTNGTGT"  , "");
        			this.dsSaveBgcdprsn.setColumn(nrow, "CD_DEPT_RTNG", "");
        			this.dsSaveBgcdprsn.setColumn(nrow, "STAT_RTNG"   , "");
        			this.dsSaveBgcdprsn.setColumn(nrow, "RMK"         , "");
        			this.dsSaveBgcdprsn.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);
        			this.dsSaveBgcdprsn.setColumn(nrow, "ID_SCREEN"   , "DAJ_RTNG_BGVDPRSN_ADMN");
        		}
        	}

        	var strSvcId    = "save_goal_bgvdprsn_import";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_bgvdprsn=dsSaveBgcdprsn";
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

        // 인사평가(업무목표수립) 평가자 임포트
        this.fnImportRTNG_GOAL_ITVWPRSN_ADMN = function() {
        	this.dsSaveGoalItvwprsn.clearData();

        	var SEQ_BGVDPRSN = -1;
        	for (var i = 0; i < this.ImpotDsOut.rowcount; i++) {
        		if (this.ImpotDsOut.getColumn(i, "Column0") != undefined) {
        			SEQ_BGVDPRSN = this.ImpotDsOut.getColumn(i, "Column0");
        		}

        		if (this.ImpotDsOut.getColumn(i, "Column9") != undefined) {
        			var nrow = this.dsSaveGoalItvwprsn.addRow();
        			this.dsSaveGoalItvwprsn.setColumn(nrow, "TY_WRK"      , "I");
        			this.dsSaveGoalItvwprsn.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSaveGoalItvwprsn.setColumn(nrow, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        			this.dsSaveGoalItvwprsn.setColumn(nrow, "SEQ_BGVDPRSN", SEQ_BGVDPRSN);
        			this.dsSaveGoalItvwprsn.setColumn(nrow, "SEQ_ITVWPRSN", this.ImpotDsOut.getColumn(i, "Column7"));
        			this.dsSaveGoalItvwprsn.setColumn(nrow, "CL_ITVWPRSN" , "00");	//this.ImpotDsOut.getColumn(i, "Column8"));
        			this.dsSaveGoalItvwprsn.setColumn(nrow, "ID_ITVWPRSN" , this.ImpotDsOut.getColumn(i, "Column9"));
        			this.dsSaveGoalItvwprsn.setColumn(nrow, "STAT_RTNG"   , "");
        			this.dsSaveGoalItvwprsn.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);
        		}
        	}

        	var strSvcId    = "save_goal_itvwprsn_import";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_goal_itvwprsn=dsSaveGoalItvwprsn";
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

        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "select_bgvdprsn") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.dxGrid.selectRow(0, true);
        		this.gfnSetFormStatus(this);	// 폼상태 초기화

        		// 버튼
        		this.btnCleanup.set_enable(false);
        		this.btnUploadExcel.set_enable(false);
        		this.btnReturn.set_enable(true);
        		this.btnAddBGVDPRSN.set_enable(true);
        		this.btnDeleteBGVDPRSN.set_enable(true);
        		this.btnSaveBGVDPRSN.set_enable(false);
        		this.btnCreateBGVDPRSN.set_enable(true);
        		this.btnRegisterRTNGPRSN.set_enable(true);

        		this.btnAddRTNGPRSN.set_enable(true);
        		this.btnDeleteRTNGPRSN.set_enable(true);
        		this.btnSaveRTNGPRSN.set_enable(false);

        	} else if (svcID == "save_bgvdprsn") {
        		this.FormBtns.Select.click();
        		this.dsListSub.clearData();
        	} else if (svcID == "make_bgvdprsn") {
        		this.FormBtns.Select.click();
        	} else if (svcID == "select_rtngprsn") {

        	} else if (svcID == "save_rtngprsn") {
        		this.fnSelectRtngprsn();
        	} else if (svcID == "save_ldsh_rtngprsn") {
        		this.fnSelectRtngprsn();
        	} else if (svcID == "save_bgvdprsn_rtngprsn") {
        		this.FormBtns.Select.click();
        	} else if (svcID == "cleanup_rtng") {
        		this.FormBtns.Select.click();
        		this.dsListSub.clearData();
        		this.gfnAlert("초기화가 완료되었습니다.");
        	} else if (svcID == "return_rtng") {
        		this.FormBtns.Select.click();
        		this.dsListSub.clearData();
        		this.gfnAlert("평가상태 초기화가 완료되었습니다.");
        	}

        	if (svcID == "save_mtsd_bgvdprsn_import") {
        		// 검토자 임포트
        		this.fnImportRTNG_RTNGPRSN_ADMN();
        	} else if (svcID == "save_rtngprsn_import") {
        		// 동료평가 POOL 임포트
        		this.fnImportMTSD_CLGE_POOL();
        	} else if (svcID == "save_pool_import") {
        		// 동료평가 POOL 임포트 후 상태를 제출완료로 변경
        		this.fnImportMTSD_CLGE_POOL_Submit();
        	} else if (svcID == "submit_pool_import") {
        		// 동료평가 POOL 임포트 후 상태를 선정완료로 변경
        		this.fnImportMTSD_CLGE_POOL_Selection();
        	} else if (svcID == "selection_pool_import") {
        		// 동료평가 POOL 임포트 후 상태를 검토완료로 변경
        		this.fnImportMTSD_CLGE_POOL_Confirm();
        	} else if (svcID == "confirm_pool_import") {
        		this.gfnAlert("동료다면평가 POOL 데이터의 임포트가 완료되었습니다.");
        		this.ImpotDsOut = null;
        		this.FormBtns.Select.click();
        	}

        	if (svcID == "save_ldsh_bgvdprsn_import") {
        		// 평가자 임포트
        		this.fnImportRTNG_LDSH_RTNGPRSN_ADMN();
        	} else if (svcID == "save_ldsh_rtngprsn_import") {
        		this.gfnAlert("리더십평가 데이터의 임포트가 완료되었습니다.");
        		this.ImpotDsOut = null;
        		this.FormBtns.Select.click();
        	}

        	if (svcID == "save_goal_bgvdprsn_import") {
        		// 인사평가(업무목표수립) 평가자 임포트
        		this.fnImportRTNG_GOAL_ITVWPRSN_ADMN();
        	} else if (svcID == "save_goal_itvwprsn_import") {
        		this.gfnAlert("인사평가 데이터의 임포트가 완료되었습니다.");
        		this.ImpotDsOut = null;
        		this.FormBtns.Select.click();
        	}

        	if (svcID == "save_goal_itvwprsn") {
        		// 업무목표 면담자 저장
        		//this.fnSelectRtngprsn();
        		this.dsListSub.clearData();
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        	} else if (id == "ccfID_RTNG") {
        		dsUserParam.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YR_RTNG"     , this.dsSearch.getColumn(0, "YR_RTNG"));
        		dsUserParam.setColumn(nrow, "CD_RTNG_TYPE", "JA");
        		dsUserParam.setColumn(nrow, "CD_ROLE"     , this.AuthClient.CD_ROLE);
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "ccfID_RTNG") {
        		if (codeFindData[0] == undefined) {
        			return;
        		}
        		this.dsSearch.setColumn(0, "CD_RTNG_TYPE"    , codeFindData[0]["CD_RTNG_TYPE"]);
        		this.dsSearch.setColumn(0, "DS_RTNG_TYPE"    , codeFindData[0]["DS_RTNG_TYPE"]);
        		this.dsSearch.setColumn(0, "DT_RTNG_BEGN"    , codeFindData[0]["DT_RTNG_BEGN"]);
        		this.dsSearch.setColumn(0, "DT_RTNG_END"     , codeFindData[0]["DT_RTNG_END"]);
        		this.dsSearch.setColumn(0, "DT_RTNG_STD"     , codeFindData[0]["DT_RTNG_STD"]);
        		this.dsSearch.setColumn(0, "CD_RTNG_ASBLNEXT", codeFindData[0]["CD_RTNG_ASBLNEXT"]);
        		this.dsSearch.setColumn(0, "DS_RTNG_ASBLNEXT", codeFindData[0]["DS_RTNG_ASBLNEXT"]);

        		console.log('codeFindData[0]', codeFindData[0]);
        		// 동료다면평가
        		if (codeFindData[0]["CD_RTNG_TYPE"] == "JA01") {
        			this.sta02.set_text("검토자 관리");
        			this.dxGridSub.set_enableredraw(false);
        			this.dxGridSub.setCellProperty("head", 8, "text", "검토자");
        			this.dxGridSub.setFormatColProperty(36, "size", 80);
        			this.dxGridSub.setFormatColProperty(37, "size", 0);
        			this.dxGridSub.set_enableredraw(true);

        			if (this.AuthClient.CD_ROLE == "R99") {
        				this.btnUploadExcel.set_visible(true);
        			}
        			this.btnCreateBGVDPRSN.set_text("피평가자 생성");
        			//this.btnCreateBGVDPRSN.set_width(100);
        		}
        		// 리더십평가
        		else if (codeFindData[0]["CD_RTNG_TYPE"] == "JA02") {
        			this.sta02.set_text("평가자 관리");
        			this.dxGridSub.set_enableredraw(false);
        			this.dxGridSub.setCellProperty("head", 8, "text", "평가자");
        			this.dxGridSub.setFormatColProperty(36, "size", 80);
        			this.dxGridSub.setFormatColProperty(37, "size", 0);
        			this.dxGridSub.set_enableredraw(true);

        			if (this.AuthClient.CD_ROLE == "R99") {
        				this.btnUploadExcel.set_visible(true);
        			}
        			this.btnCreateBGVDPRSN.set_text("피평가자 생성");
        			//this.btnCreateBGVDPRSN.set_width(100);
        		}
        		// 업무목표 수립
        		else if (codeFindData[0]["CD_RTNG_TYPE"] == "JA10") {
        			this.sta01.set_text("피평가자 관리");
        			this.sta02.set_text("평가자 관리");
        			this.dxGridSub.set_enableredraw(false);
        			this.dxGridSub.setCellProperty("head", 7, "text", "피평가자");
        			this.dxGridSub.setCellProperty("head", 8, "text", "평가자");
        			this.dxGridSub.setFormatColProperty(36, "size", 0);
        			this.dxGridSub.setFormatColProperty(37, "size", 80);
        			this.dxGridSub.set_enableredraw(true);
        			//
        			this.btnUploadExcel.set_visible(false);
        			this.btnCreateBGVDPRSN.set_text("피평가자 일괄생성");
        			//this.btnCreateBGVDPRSN.set_width(120);
        		}
        		// 중간점검
        		else if (codeFindData[0]["CD_RTNG_TYPE"] == "JA11") {
        			this.sta01.set_text("피평가자 관리");
        			this.sta02.set_text("평가자 관리");
        			this.dxGridSub.set_enableredraw(false);
        			this.dxGridSub.setCellProperty("head", 7, "text", "피평가자");
        			this.dxGridSub.setCellProperty("head", 8, "text", "평가자");
        			this.dxGridSub.setFormatColProperty(36, "size", 0);
        			this.dxGridSub.setFormatColProperty(37, "size", 80);
        			this.dxGridSub.set_enableredraw(true);
        			//
        			this.btnUploadExcel.set_visible(false);
        			this.btnCreateBGVDPRSN.set_text("피평가자 추가생성");
        			//this.btnCreateBGVDPRSN.set_width(120);
        		}
        		// 자기기술
        		else if (codeFindData[0]["CD_RTNG_TYPE"] == "JA12") {
        			this.sta01.set_text("피평가자 관리");
        			this.sta02.set_text("평가자 관리");
        			this.dxGridSub.set_enableredraw(false);
        			this.dxGridSub.setCellProperty("head", 7, "text", "피평가자");
        			this.dxGridSub.setCellProperty("head", 8, "text", "평가자");
        			this.dxGridSub.setFormatColProperty(36, "size", 0);
        			this.dxGridSub.setFormatColProperty(37, "size", 80);
        			this.dxGridSub.set_enableredraw(true);
        			//
        			this.btnUploadExcel.set_visible(false);
        			this.btnCreateBGVDPRSN.set_text("피평가자 추가생성");
        			//this.btnCreateBGVDPRSN.set_width(120);
        		}
        		// 인사평가
        		else if (codeFindData[0]["CD_RTNG_TYPE"] == "JA13") {
        			this.sta01.set_text("피평가자 관리");
        			this.sta02.set_text("평가자 관리");
        			this.dxGridSub.set_enableredraw(false);
        			this.dxGridSub.setCellProperty("head", 7, "text", "피평가자");
        			this.dxGridSub.setCellProperty("head", 8, "text", "평가자");
        			this.dxGridSub.setFormatColProperty(36, "size", 0);
        			this.dxGridSub.setFormatColProperty(37, "size", 80);
        			this.dxGridSub.set_enableredraw(true);
        			//
        			this.btnUploadExcel.set_visible(false);
        			this.btnCreateBGVDPRSN.set_text("피평가자 추가생성");
        			//this.btnCreateBGVDPRSN.set_width(120);
        		}
        		else {
        			this.sta01.set_text("피평가자/대상자 관리");
        			this.sta02.set_text("평가자/검토자/면답자 관리");
        			this.dxGridSub.setCellProperty("head", 8, "text", "평가자/검토자/면담자");
        			this.dxGridSub.setFormatColProperty(36, "size", 80);
        			this.dxGridSub.setFormatColProperty(37, "size", 0);
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch (id) {
        	// 피평가자
        	case "DAX_CFBASEINFO_ALL":
        		dsUserParam.setColumn(nrow, "CD_CORP",   this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT",   this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP",   "N"); //법인무관(Y: 법인에 관계없이 직원검색 N:조건의 법인의 임직원만 검색)
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");	// 01 재직 02 휴직 04 퇴직 % :전체
        		break;

        	// 검토자
        	case "DAX_CFBASEINFO_ALL_SUB":
        		dsUserParam.setColumn(nrow, "CD_CORP",   this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT",   this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP",   "N"); //법인무관(Y: 법인에 관계없이 직원검색 N:조건의 법인의 임직원만 검색)
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");	// 01 재직 02 휴직 04 퇴직 % :전체
        		break;
        	}

        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {
        	switch (id) {
        	case "DAX_CFBASEINFO_ALL":
         		this.dsList.setColumn(this.dsList.rowposition, "DT_GROUPJOIN", codeFindData[0]["DT_GROUPJOIN"]);
         		this.dsList.setColumn(this.dsList.rowposition, "DT_JOIN"     , codeFindData[0]["DT_JOIN"]);
         		this.dsList.setColumn(this.dsList.rowposition, "CD_DEPT"     , codeFindData[0]["CD_DEPT"]);
         		this.dsList.setColumn(this.dsList.rowposition, "DS_DEPT"     , codeFindData[0]["DS_DEPT"]);
         		this.dsList.setColumn(this.dsList.rowposition, "CD_POSITION" , codeFindData[0]["CD_POSITION"]);
         		this.dsList.setColumn(this.dsList.rowposition, "DS_POSITION" , codeFindData[0]["DS_POSITION"]);
         		this.dsList.setColumn(this.dsList.rowposition, "CD_JOBTYPE"  , codeFindData[0]["CD_JOBTYPE"]);
         		this.dsList.setColumn(this.dsList.rowposition, "DS_JOBTYPE"  , codeFindData[0]["DS_JOBTYPE"]);
         		this.dsList.setColumn(this.dsList.rowposition, "CD_EMPTYPE"  , codeFindData[0]["CD_EMPTYPE"]);
         		this.dsList.setColumn(this.dsList.rowposition, "DS_EMPTYPE"  , codeFindData[0]["DS_EMPTYPE"]);
        		break;

        	case "DAX_CFBASEINFO_ALL_SUB":
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DT_GROUPJOIN", codeFindData[0]["DT_GROUPJOIN"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DT_JOIN"     , codeFindData[0]["DT_JOIN"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_CD_DEPT"     , codeFindData[0]["CD_DEPT"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DS_DEPT"     , codeFindData[0]["DS_DEPT"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_CD_POSITION" , codeFindData[0]["CD_POSITION"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DS_POSITION" , codeFindData[0]["DS_POSITION"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_CD_JOBTYPE"  , codeFindData[0]["CD_JOBTYPE"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DS_JOBTYPE"  , codeFindData[0]["DS_JOBTYPE"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_CD_EMPTYPE"  , codeFindData[0]["CD_EMPTYPE"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DS_EMPTYPE"  , codeFindData[0]["DS_EMPTYPE"]);

        		var CL_RTNGPRSN = "";
        		if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA01") {
        			//CL_RTNGPRSN = "A";
        			CL_RTNGPRSN = "상사";
        		} else if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA02") {
        			//CL_RTNGPRSN = "B";
        			CL_RTNGPRSN = "";
        		}
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "CL_RTNGPRSN", CL_RTNGPRSN);

        		break;
        	}
        }

        this.fnGridRowCellChanged = function(obj, e) {
            if ((obj.oldrow > -1 && obj.oldrow == e.row) || (obj.oldrow == -1 && e.oldrow != e.row)) {
        		if (this.gfnDsIsUpdated(this.dsListSub)) {
        			this.fnDsUpdateCallback = function(id, val) {
        				if (!val) {
        					obj.set_enableevent(false);
        					obj.selectRow(e.oldrow, true);
        					obj.selectRow(e.row, false);
        					obj.set_enableevent(true);
        					return false;
        				} else {
        					this.fnSelectRtngprsn();
        				}
        			}
        			this.gfnConfirm("저장되지 않은 정보가 있습니다.\n 계속하시겠습니까?", "fnDsUpdateCallback");
        		} else {
        			this.fnSelectRtngprsn();
        		}

        		obj.oldrow = -1;
        	}
        }

        this.dsListSub_onvaluechanged = function(obj,e)
        {
        	var status = this.gfnGetFormStatus(this);
        	if(status == "I" || status == "U" || status == "D")
        	{
        		this.btnSaveRTNGPRSN.set_enable(true);
        	} else {
        		this.btnSaveRTNGPRSN.set_enable(false);
        	}

        // 	if(e.oldvalue != e.newvalue) {
        // 		this.btnSave.set_enable(true);
        // 	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		if( e.columnid == "YR_RTNG" ){
        			this.dsSearch.setColumn(0,"ID_RTNG","");
        			this.dsSearch.setColumn(0,"DS_RTNG","");
        			this.dsSearch.setColumn(0,"CD_RTNG_TYPE","");
        			this.dsSearch.setColumn(0,"DS_RTNG_TYPE","");
        			this.dsSearch.setColumn(0,"DT_RTNG_BEGN","");
        			this.dsSearch.setColumn(0,"DT_RTNG_END","");
        			this.dsSearch.setColumn(0,"DT_RTNG_STD","");
        			this.dsSearch.setColumn(0,"CD_RTNG_ASBLNEXT","");
        			this.dsSearch.setColumn(0,"DS_RTNG_ASBLNEXT","");
        		}
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);

        		// 버튼
        		this.btnCleanup.set_enable(false);
        		this.btnUploadExcel.set_enable(false);
        		this.btnReturn.set_enable(false);
        		this.btnAddBGVDPRSN.set_enable(false);
        		this.btnDeleteBGVDPRSN.set_enable(false);
        		this.btnSaveBGVDPRSN.set_enable(false);
        		this.btnCreateBGVDPRSN.set_enable(false);
        		this.btnRegisterRTNGPRSN.set_enable(false);

        		this.btnAddRTNGPRSN.set_enable(false);
        		this.btnDeleteRTNGPRSN.set_enable(false);
        		this.btnSaveRTNGPRSN.set_enable(false);
        	}
        }

        this.divData_ondragmove = function(obj,e) {
        	if (e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        }

        this.divData_divSplitter_ondrag = function(obj, e) {
        	e.set_userdata("splitter");
        	return true;
        }


        this.divData_divDataTop_btnCleanup_onclick = function(obj,e) {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	var nrow = this.dsCleanup.addRow();
        	this.dsCleanup.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsCleanup.setColumn(nrow, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));

        	var strSvcId    = "cleanup_rtng";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cleanup_rtng=dsCleanup";
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

        this.divData_divDataTop_btnReturn_onclick = function(obj,e) {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.dsList.set_enableevent(false);
        	this.dsList.filter("CHK == 1");

        	if (this.dsList.rowcount == 0) {
        		this.gfnAlert("선택된 피평가자가 존재하지 않습니다.");
        		this.dsList.filter("");
        		this.dsList.set_enableevent(true);
        		return;
        	}

        	this.dsList.filter("");
        	this.dsList.set_enableevent(true);

        	this.gfnConfirm("선택한 피평가자의 평가상태를 초기화하시겠습니까?", function(strId, val) {
        		if (val == false) {
        			return;
        		}

        		//var nrow = this.dsReturn.addRow();
        		this.dsReturn.clearData();
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsReturn.addRow();
        				//this.dsReturn.addRow();
        				this.dsReturn.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsReturn.setColumn(nrow, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));
        				this.dsReturn.setColumn(nrow, "SEQ_BGVDPRSN", this.dsList.getColumn(i, "SEQ_BGVDPRSN"));
        				this.dsReturn.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		var strSvcId    = "return_rtng";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "return_rtng=dsReturn";
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
        	})

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataTop.form.btnRegisterRTNGPRSN.addEventHandler("onclick",this.divData_divDataTop_btnRegisterRTNGPRSN_onclick,this);
            this.divData.form.divDataTop.form.btnCreateBGVDPRSN.addEventHandler("onclick",this.divData_divDataTop_btnCreateBGVDPRSN_onclick,this);
            this.divData.form.divDataTop.form.btnSaveBGVDPRSN.addEventHandler("onclick",this.divData_divDataTop_btnSaveBGVDPRSN_onclick,this);
            this.divData.form.divDataTop.form.btnDeleteBGVDPRSN.addEventHandler("onclick",this.divData_divDataTop_btnDeleteBGVDPRSN_onclick,this);
            this.divData.form.divDataTop.form.btnAddBGVDPRSN.addEventHandler("onclick",this.divData_divDataTop_btnAddBGVDPRSN_onclick,this);
            this.divData.form.divDataTop.form.btnReturn.addEventHandler("onclick",this.divData_divDataTop_btnReturn_onclick,this);
            this.divData.form.divDataTop.form.btnUploadExcel.addEventHandler("onclick",this.divData_divDataTop_btnUploadExcel_onclick,this);
            this.divData.form.divDataTop.form.btnCleanup.addEventHandler("onclick",this.divData_divDataTop_btnCleanup_onclick,this);
            this.divData.form.divDataBottom.form.btnSaveRTNGPRSN.addEventHandler("onclick",this.divData_divDataBottom_btnSaveRTNGPRSN_onclick,this);
            this.divData.form.divDataBottom.form.btnDeleteRTNGPRSN.addEventHandler("onclick",this.divData_divDataBottom_btnDeleteRTNGPRSN_onclick,this);
            this.divData.form.divDataBottom.form.btnAddRTNGPRSN.addEventHandler("onclick",this.divData_divDataBottom_btnAddRTNGPRSN_onclick,this);
            this.dsListSub.addEventHandler("onvaluechanged",this.dsListSub_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_RTNG_BGVDPRSN_ADMN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
