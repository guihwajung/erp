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
            this.set_titletext("BS 하자 작업지시");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/><Column id=\"CLOB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_BS_WORKDOCU_SELECT</Col><Col id=\"CLOB\">PIC_SIGN</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBSPR_BS_WORKDOCU_UPDATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DBXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FIX\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CTM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DAM_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_UMGB\" type=\"STRING\" size=\"256\"/><Column id=\"TY_COMPLETE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_COMPLETE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_UMGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("단지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","630","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFSITE_MULTI");
            obj.getSetter("CDTextWidth").set("168");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calFR_DATE","staDT:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACT","0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("공종");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","calFR_DATE:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calTO_DATE","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACT","staCD_ACT:0.0","staCD_SITE:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFACT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_FIX","ccfCD_ACT:0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("보수유형");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_FIX","staCD_FIX:0.0","staCD_SITE:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DB_B2");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CTM","ccfCD_FIX:0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GBN","calTO_DATE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("진행현황");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_COMPLETE","staTY_GBN:0.0","10.0","119","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTY_COMPLETE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("미완료");
            obj.set_value("1");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CTM","staCD_CTM:0.0","staCD_SITE:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFHADO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DAM_DEPT","ccfCD_CTM:0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("담당부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DAM_DEPT","staCD_DAM_DEPT:0.0","staCD_SITE:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFDEPT_ALL");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_DONG","ccfCD_DAM_DEPT:0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("동");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_DONG","staDS_DONG:0.0","staCD_SITE:10.0","93","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFASDONGHO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_HO","ccfDS_DONG:0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_HO","staDS_HO:0.0","staCD_SITE:10.0","93","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFASDONGHO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_UMGB","ccfDS_HO:0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("접수구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_UMGB","staTY_UMGB:0.0","staCD_SITE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsTY_UMGB");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACT.form.CDTextBox","value","dsSearch","CD_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_FIX.form.CDTextBox","value","dsSearch","CD_FIX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CTM.form.CDTextBox","value","dsSearch","CD_CTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_DAM_DEPT.form.CDTextBox","value","dsSearch","CD_DAM_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfDS_DONG.form.CDTextBox","value","dsSearch","DS_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfDS_HO.form.CDTextBox","value","dsSearch","DS_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboTY_UMGB","value","dsSearch","TY_UMGB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboTY_COMPLETE","value","dsSearch","TY_COMPLETE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.calFR_DATE","value","dsSearch","FR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.calTO_DATE","value","dsSearch","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_WORKDOCU_BS.xfdl", function() {
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
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnWorkBtn3 = this.gfnFormButtonAdd("WorkBtn3", "fnWorkBtn3");  // 작업지시
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;                        // 단지코드
        	this.calFR_DATE = this.divSearch.form.calFR_DATE;                        // 접수일자 FROM
        	this.calTO_DATE = this.divSearch.form.calTO_DATE;                        // 접수일자 TO
        	this.cboTY_COMPLETE= this.divSearch.form.cboTY_COMPLETE;                 // 진행현황  -> 전체(0),승인(3),완료(2),미완료(1)
        	this.ccfCD_ACT = this.divSearch.form.ccfCD_ACT;                          // 공종코드
        	this.ccfCD_FIX = this.divSearch.form.ccfCD_FIX;                          // 보수유형코드
        	this.ccfCD_CTM = this.divSearch.form.ccfCD_CTM;                          // 협력업체코드
        	this.ccfDS_DONG = this.divSearch.form.ccfDS_DONG;                        // 동코드
        	this.ccfDS_HO = this.divSearch.form.ccfDS_HO;                            // 호코드
        	this.ccfCD_DAM_DEPT = this.divSearch.form.ccfCD_DAM_DEPT;                // 담당부서
        	this.cboTY_UMGB = this.divSearch.form.cboTY_UMGB;                        // 접수구분


        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CTM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";        // 협력업체코드 파라미터
        	this.ccfCD_CTM.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_DONG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";       // 동코드 파라미터
        	this.ccfDS_DONG.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_HO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";         // 호코드 파라미터
        	this.ccfDS_HO.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DAM_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_WORKDOCU_BS");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)
        	//this.dxGrid.set_autosizingtype("row");
        	this.dxGrid.set_selecttype("multirow");
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_NY"), "tooltiptext", "bind:RM_NY" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_CUSTOMER"), "tooltiptext", "bind:RM_CUSTOMER" );

        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_NY"), "wordWrap", "char" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_CUSTOMER"), "wordWrap", "char" );
        	this.dxGrid.setFormatRowProperty( 1,"size",this.dxGrid.getFormatRowProperty(0,"size")*2 );

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");           // 단지코드
        	this.dsSelect.addColumn("FR_DATE", "string");            // 접수일자 FROM
        	this.dsSelect.addColumn("TO_DATE", "string");            // 접수일자 TO
        	this.dsSelect.addColumn("TY_COMPLETE", "string");        // 진행현황  -> 전체(0),승인(3),완료(2),미완료(1)
        	this.dsSelect.addColumn("CD_ACT", "string");             // 공종코드
        	this.dsSelect.addColumn("CD_FIX", "string");             // 보수유형
        	this.dsSelect.addColumn("CD_CTM", "string");             // 협력업체
        	this.dsSelect.addColumn("DS_DONG", "string");            // 동
        	this.dsSelect.addColumn("DS_HO", "string");              // 호
        	this.dsSelect.addColumn("TY_UMGB", "string");            // 접수구분
        	this.dsSelect.addColumn("CD_DAM_DEPT", "string");        // 담당부서
        	this.dsSelect.addColumn("SEL_TYPE", "string");           // 조회유형
        	this.dsSelect.addColumn("CONFIRM_YN", "string");         // 작업지시날짜 업데이트 여부
        	this.dsSelect.addColumn("ID_USER", "string");            // 작업지시날짜 업데이트 여부
        	this.dsSelect.addColumn("CD_JOBS", "string");            // 보고서 출력시 선택한 행만 출력

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_JOBS", "string");            // 진행상태를 작업지시로 변경할 행
        	this.dsUpdate.addColumn("ID_USER", "string");            // 사용자ID

        	this.dsReportParam = new Dataset()
        	this.dsReportParam.addColumn("CD_SITE", "string");
        	this.dsReportParam.addColumn("DT_JEOBSU", "string");
        	this.dsReportParam.addColumn("CD_JOB", "string");
        	this.dsReportParam.addColumn("PIC_SIGN", "string");
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

        	this.dsList.clearData();
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));          // 단지코드
        	this.dsSelect.setColumn(0, "FR_DATE", this.dsSearch.getColumn(0, "FR_DATE"));          // 접수일자 FROM
        	this.dsSelect.setColumn(0, "TO_DATE", this.dsSearch.getColumn(0, "TO_DATE"));          // 접수일자 TO
        	this.dsSelect.setColumn(0, "TY_COMPLETE", this.dsSearch.getColumn(0, "TY_COMPLETE"));  // 진행현황
        	this.dsSelect.setColumn(0, "CD_ACT", this.dsSearch.getColumn(0, "CD_ACT"));            // 공종
        	this.dsSelect.setColumn(0, "CD_FIX", this.dsSearch.getColumn(0, "CD_FIX"));            // 보수유형
        	this.dsSelect.setColumn(0, "CD_CTM", this.dsSearch.getColumn(0, "CD_CTM"));            // 협력업체
        	this.dsSelect.setColumn(0, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));          // 동(*)
        	this.dsSelect.setColumn(0, "TY_UMGB", this.dsSearch.getColumn(0, "TY_UMGB"));                          // 접수구분
        	this.dsSelect.setColumn(0, "CD_DAM_DEPT", this.dsSearch.getColumn(0, "CD_DAM_DEPT"));   // 담당부서

        	var strHo = this.dsSearch.getColumn(0, "DS_HO");
        	if( this.ccfDS_HO.form.CDTextBox.value == "공용" ){
        		 strHo = "0000";
        	}
        	this.dsSelect.setColumn(0, "DS_HO", strHo);                                            // 호
        	this.dsSelect.setColumn(0, "SEL_TYPE", "S");
        	this.dsSelect.setColumn(0, "CD_JOBS", "");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("단지코드는 반드시 입력하셔야 합니다.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}

        	if ( validate && !this.gfnIsNull(this.dsSearch.getColumn(0, "FR_DATE")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "TO_DATE")) )  {
        		if (this.dsSearch.getColumn(0, "FR_DATE") > this.dsSearch.getColumn(0, "TO_DATE") )  {
        			validate = false;
        			this.fnDtVaidateCallback = function() {
        				this.calFR_DATE.setFocus();
        			}
        			this.gfnAlert("접수일자 시작일이 접수 종료일보다 클 수 없습니다.", "fnDtVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        		}
        	}
        	return validate;
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if (svcID == "combo") {
        		this.dsTY_UMGB.insertRow(0);
        		this.dsTY_UMGB.setColumn(0,"DS_CODE","전체");
        		this.cboTY_UMGB.set_index(0);

        		if( this.FormInfo.ID_GROUP == "6" || this.FormInfo.ID_GROUP == "C" ){
        			this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_DEPT);
        			this.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        			this.ccfCD_SITE.form.set_readonly(true);
        		}
        		if(!this.gfnIsNull(this.getOwnerFrame().CF_CD_SITE)) {
        			this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CF_CD_SITE);
        			this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().CF_DS_SITE);
        			this.dsSearch.setColumn(0, "DS_DONG", this.getOwnerFrame().CF_DS_DONG);
        			this.dsSearch.setColumn(0, "DS_HO", this.getOwnerFrame().CF_DS_HO);
        			this.dsSearch.setColumn(0, "CD_ACT", this.getOwnerFrame().CF_CD_ACT);
        			this.ccfCD_ACT.form.DSTextBox.set_value(this.getOwnerFrame().CF_DS_ACT);
        			this.dsSearch.setColumn(0, "CD_CTM", this.getOwnerFrame().CF_CD_CTM);
        			this.ccfCD_CTM.form.DSTextBox.set_value(this.getOwnerFrame().CF_DS_CTM);
        			this.dsSearch.setColumn(0, "CD_FIX", this.getOwnerFrame().CF_CD_FIX);
        			this.ccfCD_FIX.form.DSTextBox.set_value(this.getOwnerFrame().CF_DS_FIX);
        			this.dsSearch.setColumn(0, "TY_COMPLETE", this.getOwnerFrame().CF_TY_COMPLETE);
        			this.dsSearch.setColumn(0, "FR_DATE", this.getOwnerFrame().CF_DT_JEOBSU);
        			this.dsSearch.setColumn(0, "TO_DATE", this.getOwnerFrame().CF_DT_JEOBSU);
        			this.FormBtns.Select.click();
        		} else {
        			if( this.FormInfo.GR_SEARCH >= "7") {
        				this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_DEPT);
        				this.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);

        				this.ccfCD_SITE.form.set_readonly(true);
        			}
        			this.cboTY_COMPLETE.set_value("2");
        		}
        	} else if( svcID == "update") {
        		this.cboTY_COMPLETE.set_value("3");
        		this.FormBtns.Select.click();
        	}
        };


        /*
         *	하자내용변경 팝업 콜백 처리
         */
        this.fnRmNyPopupCallback = function(strId, val) {
        	if(val.isUpdate) {
        		this.FormBtns.Select.click();
        	}
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		if( this.FormInfo.ID_GROUP == "2" ){
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT.substr(1));
        		}
        	} else if (id == "ccfDS_DONG") {
        		if (!this.fnSelectValidate()) return false;

        		dsUserParam.setColumn(nrow, "TY_TYPE", "DONG");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE1", "");
        		dsUserParam.setColumn(nrow, "VALUE2", "");
        	} else if (id == "ccfDS_HO") {
        		if (!this.fnSelectValidate()) return false;

        		dsUserParam.setColumn(nrow, "TY_TYPE", "HO");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE1", this.gfnNvl(this.dsSearch.getColumn(0, "DS_DONG"),""));
        		dsUserParam.setColumn(nrow, "VALUE2", this.gfnNvl(this.dsSearch.getColumn(0, "DS_HO"),""));
        	} else if(id == "ccfCD_CTM" ){
        		if (!this.fnSelectValidate()) return false;
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_ACT", "");
        	} else if(id == "ccfCD_DAM_DEPT" ){
        		dsUserParam.setColumn(nrow, "TY_DEPT", "D");
        		dsUserParam.setColumn(nrow, "CD_CORP", "");
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
        	if(id == "ccfCD_SITE") {

        		var strCdSite = "";
        		var strDsSite = "";
        		if (arr.length > 0) {
        			for(var r = 0; r < arr.length; r++) {
        				strCdSite += arr[r]["CD_SITE"]+",";
        				strDsSite += arr[r]["DS_SITE"]+",";
        			}
        			this.dsSearch.setColumn(0, "CD_SITE", strCdSite.substr(0,strCdSite.length-1));
        			//this.ccfCD_SITE.form.CDTextBox.set_value(strCdSite.substr(0,strCdSite.length-1));
        			this.ccfCD_SITE.form.DSTextBox.set_value(strDsSite.substr(0,strDsSite.length-1));
        		}
        	}

        	if(id == "ccfDS_DONG") {

        		var strCdDong = "";
        		var strDsDong = "";
        		if (arr.length > 0) {
        			for(var r = 0; r < arr.length; r++) {

        				strCdDong += arr[r]["DS_DONG"]+",";
        				strDsDong += arr[r]["DS_BIGO"]+",";
        			}
        			this.dsSearch.setColumn(0, "DS_DONG", strCdDong.substr(0,strCdDong.length-1));
        		//	this.ccfDS_DONG.form.CDTextBox.set_value(strCdDong.substr(0,strCdDong.length-1));
        			this.ccfDS_DONG.form.DSTextBox.set_value(strDsDong.substr(0,strDsDong.length-1));
        		}
        	}

        	if(id == "ccfDS_HO") {
        		var strCdDong = "";
        		var strDsDong = "";
        		if (arr.length > 0) {
        			for(var r = 0; r < arr.length; r++) {

        				strCdDong += arr[r]["DS_DONG"]+",";
        				strDsDong += arr[r]["DS_BIGO"]+",";
        			}
        			this.dsSearch.setColumn(0, "DS_HO", strCdDong.substr(0,strCdDong.length-1));
        			//this.ccfDS_HO.form.CDTextBox.set_value(strCdDong.substr(0,strCdDong.length-1));
        			this.ccfDS_HO.form.DSTextBox.set_value(strDsDong.substr(0,strDsDong.length-1));
        		}
        	}

        	if( id =="ccfCD_CTM" ) {
        		var strCdCtm = "";
        		var strDsCtm = "";
        		if (arr.length > 0) {
        			for(var r = 0; r < arr.length; r++) {

        				strCdCtm += arr[r]["CD_CTM"]+",";
        				strDsCtm += arr[r]["DS_CTM"]+",";
        			}
        			this.dsSearch.setColumn(0, "CD_CTM", strCdCtm.substr(0,strCdCtm.length-1));
        			//this.ccfCD_CTM.form.CDTextBox.set_value(strCdCtm.substr(0,strCdCtm.length-1));
        			this.ccfCD_CTM.form.DSTextBox.set_value(strDsCtm.substr(0,strDsCtm.length-1));
        		}
        	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         * 작업지시 버튼 클릭
         */
        this.fnWorkBtn3 = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	if( this.cboTY_COMPLETE.value != "2" ){
        		this.gfnAlert("진행현황(조회조건)이 '접수' 경우만 작업지시 가능합니다.", "");
        		return false;
        	}

        	var aDSRowidx = this.dxGrid.getSelectedDatasetRows();

        	if( aDSRowidx.length == 0 ) {
        		this.fnVaidateCallback = function() {
        			this.dxGrid.setFocus();
        			return 0;
        		}
        		this.gfnAlert("진행상항을 작업지시로 변경할 행을 선택하세요", "fnVaidateCallback");
        	}

        	var strCdJobs = "";
        	for (var i=0; i<aDSRowidx.length; i++) {
        		strCdJobs = strCdJobs + this.dsList.getColumn(aDSRowidx[i],"CD_SITE") + this.dsList.getColumn(aDSRowidx[i],"DT_JEOBSU")+this.dsList.getColumn(aDSRowidx[i],"CD_JOB") +",";
        	}
        // 	for ( var idx in aDSRowidx ){
        // 		strCdJobs = strCdJobs + this.dsList.getColumn(aDSRowidx[idx],"CD_SITE") + this.dsList.getColumn(aDSRowidx[idx],"DT_JEOBSU")+this.dsList.getColumn(aDSRowidx[idx],"CD_JOB") +",";
        // 	}

        	this.dsList.clearData();
        	this.dsUpdate.clearData();
        	this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsUpdate.setColumn(0, "CD_JOBS", strCdJobs);

        	var strSvcId    = "update";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.row > -1 && e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if ( e.columnid == "CD_SITE" ){
        			this.dsSearch.setColumn(0, "FR_DATE", "");
        			this.dsSearch.setColumn(0, "TO_DATE", "");
        			this.dsSearch.setColumn(0, "TY_COMPLETE", "2");
        			this.ccfCD_ACT.form.fnCodeFindClear();
        			this.ccfCD_FIX.form.fnCodeFindClear();
        			this.ccfCD_CTM.form.fnCodeFindClear();
        			this.ccfDS_DONG.form.fnCodeFindClear();
        			this.ccfDS_HO.form.fnCodeFindClear();
        			this.ccfCD_DAM_DEPT.form.fnCodeFindClear();
        			this.cboTY_UMGB.set_index(0);
        		}

        		if ( e.columnid == "DS_DONG" ){
        			this.ccfDS_HO.form.fnCodeFindClear();
        		}
        	}
        };

        /*
         *	콤보박스 값 설정
         */
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("DS_ETC1", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DB");
        	this.dsCombo.setColumn(0, "CD_TYPE", "S2");    // 접수구분
        	this.dsCombo.setColumn(0, "DS_ETC1", "BS");    // 접수구분

        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_TYPE", "string");

        	this.dsCombo2.addRow();
        	this.dsCombo2.setColumn(0, "CD_SYSTEM", "DB");
        	this.dsCombo2.setColumn(0, "CD_TYPE", "S5");    // 진행현황

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo combo2=dsCombo2";
        	var outData     = "dsTY_UMGB=combo0 dsTY_COMPLETE=combo20";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsTY_COMPLETE.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsTY_UMGB.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DBS_WORKDOCU_BS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
