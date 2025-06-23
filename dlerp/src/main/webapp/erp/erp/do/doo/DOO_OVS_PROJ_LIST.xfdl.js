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
            this.set_titletext("주택-프로젝트목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1580,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOAPR_OVS_PROJ_LIST_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CV_GO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CLS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CLS_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PRC_BID\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MJ_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_CD_CV_GO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_CD_CLS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_CD_PRC_BID", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_MJ_CONST", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROJ","staCD_PROJ:0.0","10.0","440","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CDTextWidth").set("65");
            obj.getSetter("CodeFindName").set("DOXPR_PROJ_CODEFIND");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CLS","0.0","staCD_PROJ:10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("공사분야");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CLS_CONST","staCD_CLS:0.0","staCD_PROJ:10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("상품분류");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_ORD","0.0","10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("발주/사업방식");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_ORD","staTY_ORD:0.0","10.0","227","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("CF_CODE_DO_O2");
            obj.getSetter("CDTextWidth").set("80");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CLS_CONST","staCD_CLS_CONST:0.0","staCD_PROJ:10.0","277","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("CF_CODE_DO_41");
            obj.getSetter("CDTextWidth").set("80");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PRC_BID","ccfCD_CLS_CONST:0.0","staCD_PROJ:10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("입찰추진");
            obj.set_textAlign("right");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CV_GO","0.0","10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("공공/민간");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_PRC_BID","staCD_PRC_BID:0.0","staCD_PROJ:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsDS_CD_PRC_BID");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_CLS","staCD_CLS:0.0","staCD_PROJ:10.0","96","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsDS_CD_CLS");
            obj.set_text("");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_CV_GO","staCD_CV_GO:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsDS_CD_CV_GO");
            obj.set_text("");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_DT","0.0","staCD_PROJ:10.0","159","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_DT");
            obj.set_text("");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CV_GO00","ccboTY_DT:0.0","staCD_PROJ:10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FR","staCD_CV_GO00:0.0","staCD_PROJ:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","ctclDT_FR:0.0","staCD_PROJ:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CV_GO00_00","ctclDT_TO:0.0","staCD_PROJ:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PRC_BID00","staCD_CV_GO00_00:0.0","staCD_PROJ:10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("주요공사");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_MJ_CONST","staCD_PRC_BID00:0.0","staCD_PROJ:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_MJ_CONST");
            obj.set_text("");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PRC_BID00_00","0.0","10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("사업관리부서");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SAUP","staCD_PRC_BID00_00:0.0","10.0","278","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOS_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("20");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_PROJ.form.CDTextBox","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboCD_CV_GO","value","dsSearch","CD_CV_GO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfTY_ORD.form.CDTextBox","value","dsSearch","TY_ORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboCD_CLS","value","dsSearch","CD_CLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_CLS_CONST.form.CDTextBox","value","dsSearch","CD_CLS_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboCD_PRC_BID","value","dsSearch","CD_PRC_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboTY_DT","value","dsSearch","TY_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ctclDT_FR","value","dsSearch","DT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccboTY_MJ_CONST","value","dsSearch","TY_MJ_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_SAUP.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOO_OVS_PROJ_LIST.xfdl", function() {
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
        	this.fnSetCombo();
        	this.fnSetParameter();
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
        	this.fnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate");
        	this.fnUpdate = this.gfnFormButtonAdd("btnUpdate", "fnUpdate");
        };

        /************************************************************************
         * 확장 버튼1 : 프로젝트등록 버튼
         ************************************************************************/
        this.fnCreate = function(obj,e){
        	// 화면 오픈.
            this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOO_OVS_PROJ", "fnPopupCallback", null, 1340, 800);
        };

        /************************************************************************
         * 확장 버튼2 : 프로젝트편집 버튼
         ************************************************************************/
        this.fnUpdate = function(obj,e){
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {
        		CD_PROJ : this.dsList.getColumn(this.dsList.rowposition, "CD_PROJ")
        	};

        	// 화면 오픈.
            this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOO_OVS_PROJ", "fnPopupCallback", param, 1340, 780);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

           this.ARCH_TY_PROJ = "SA00109";

           this.ccfCD_PROJ = this.divSearch.form.ccfCD_PROJ; //프로젝트코드
           this.ccboCD_CV_GO = this.divSearch.form.ccboCD_CV_GO; //공공/민간
           this.ccfTY_ORD = this.divSearch.form.ccfTY_ORD; //발주방식
           this.ccboCD_CLS = this.divSearch.form.ccboCD_CLS; //공사분야
           this.ccfCD_CLS_CONST = this.divSearch.form.ccfCD_CLS_CONST; //상품분류
           this.ccboCD_PRC_BID = this.divSearch.form.ccboCD_PRC_BID; //입찰추진

           this.dxGrid = this.divData.form.objGrid;

           this.ccfCD_SAUP =  this.divSearch.form.ccfCD_SAUP;
        };


        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_PROJ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOO_OVS_PROJ_LIST");
        	this.ccfCD_SAUP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	if(id == "ccfCD_PROJ"){
        		dsUserParam.setColumn(nrow, "TY_PROJ", this.ARCH_TY_PROJ);
        	} else if(id == "ccfCD_SAUP"){
        	  dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	  dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	  dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	  dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	  dsUserParam.setColumn(nrow, "CD_PROJ", this.divSearch.form.ccfCD_PROJ.value);
        	}

        	return true;
         }

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();	// 공공/민간
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(0, "CD_TYPE", "O1");

        	this.dsCombo.addRow();	// 공사분야
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(1, "CD_TYPE", "24");

        	this.dsCombo.addRow();	// 입찰추진
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(2, "CD_TYPE", "26");

        	this.dsCombo.addRow();	// 진행예정일자구분코드
        	this.dsCombo.setColumn(3, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(3, "CD_TYPE", "43");

        	this.dsCombo.addRow();	// 주요공사
        	this.dsCombo.setColumn(4, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(4, "CD_TYPE", "46");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsDS_CD_CV_GO=combo0 dsDS_CD_CLS=combo1 dsDS_CD_PRC_BID=combo2 dsTY_DT=combo3 dsTY_MJ_CONST=combo4";
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

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	/*
        	var today = this.gfnGetDate();
        	var dt_from = this.gfnAddMonth(today, -12);

        	this.dsSearch.setColumn(0, "DT_FR", dt_from);
        	this.dsSearch.setColumn(0, "DT_TO", today);
        	*/
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "string");
        	this.dsSelect.addColumn("CD_CV_GO", "string");
        	this.dsSelect.addColumn("TY_ORD", "string");
        	this.dsSelect.addColumn("CD_CLS", "string");
        	this.dsSelect.addColumn("CD_CLS_CONST", "string");
        	this.dsSelect.addColumn("CD_PRC_BID", "string");
        	this.dsSelect.addColumn("TY_DT", "string");
        	this.dsSelect.addColumn("DT_FR", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("TY_MJ_CONST", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        }

        this.fnSelect = function(){
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();

        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSelect.setColumn(0, "CD_CV_GO", this.dsSearch.getColumn(0, "CD_CV_GO"));
        	this.dsSelect.setColumn(0, "TY_ORD", this.dsSearch.getColumn(0, "TY_ORD"));
        	this.dsSelect.setColumn(0, "CD_CLS", this.dsSearch.getColumn(0, "CD_CLS"));
        	this.dsSelect.setColumn(0, "CD_CLS_CONST", this.dsSearch.getColumn(0, "CD_CLS_CONST"));
        	this.dsSelect.setColumn(0, "CD_PRC_BID", this.dsSearch.getColumn(0, "CD_PRC_BID"));
        	this.dsSelect.setColumn(0, "TY_DT", this.dsSearch.getColumn(0, "TY_DT"));
        	this.dsSelect.setColumn(0, "DT_FR", this.dsSearch.getColumn(0, "DT_FR"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "TY_MJ_CONST", this.dsSearch.getColumn(0, "TY_MJ_CONST"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));

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
        						callBackFnc); // 통신방법 정의 [생략가능]
        }



        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "combo")
        	{
        		// 공공/민간
        		this.dsDS_CD_CV_GO.insertRow(0);
        		this.dsDS_CD_CV_GO.setColumn(0, "CD_CODE", "");
        		this.dsDS_CD_CV_GO.setColumn(0, "DS_CODE", "전체");
         		this.divSearch.form.ccboCD_CV_GO.set_index(0);

        		// 공사분야
        		this.dsDS_CD_CLS.insertRow(0);
        		this.dsDS_CD_CLS.setColumn(0, "CD_CODE", "");
        		this.dsDS_CD_CLS.setColumn(0, "DS_CODE", "전체");
         		this.divSearch.form.ccboCD_CLS.set_index(0);

        		// 입찰추진
        		this.dsDS_CD_PRC_BID.insertRow(0);
        		this.dsDS_CD_PRC_BID.setColumn(0, "CD_CODE", "");
        		this.dsDS_CD_PRC_BID.setColumn(0, "DS_CODE", "전체");
         		this.divSearch.form.ccboCD_PRC_BID.set_index(0);

        		// 진행예정일자구분코드
         		this.divSearch.form.ccboTY_DT.set_index(0);

        		//주요공사
        		this.dsTY_MJ_CONST.insertRow(0);
        		this.dsTY_MJ_CONST.setColumn(0, "CD_CODE", "");
        		this.dsTY_MJ_CONST.setColumn(0, "DS_CODE", "전체");
         		this.divSearch.form.ccboTY_MJ_CONST.set_index(0);

        	} else if(svcID == "select") {
        		return;
        	}
        };

        this.fnPopupCallback = function(){
        	this.FormBtns.Select.click();
        }

        /*
            조회 조건 변경시 초기화
        	2020.02.27  한대운 추가
        	조회조건변경시 그리드 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        // 		if(e.columnid == "CD_CLS"){
        // 			var codeFindNm = "";
        // 			this.divSearch.form.ccfCD_CLS_CONST.set_enable(true);
        // 			if(e.newvalue == "SA00201"){	// 토목
        // 				codeFindNm = "CF_CODE_DO_27";
        // 			} else if(e.newvalue == "SA00202"){	// 공사
        // 				codeFindNm = "CF_CODE_DO_28";
        // 			} else if(e.newvalue == "SA00203"){	// 플랜트
        // 				codeFindNm = "CF_CODE_DO_29";
        // 			} else{
        // 				this.divSearch.form.ccfCD_CLS_CONST.set_enable(false);
        // 			}
        // 			//상품분류 코드 초기화
        // 			this.divSearch.form.ccfCD_CLS_CONST.form.CDTextBox.set_value("");
        // 			this.divSearch.form.ccfCD_CLS_CONST.form.DSTextBox.set_value("");
        // 			this.divSearch.form.ccfCD_CLS_CONST.CodeFindName =  codeFindNm;
        // 		}
        	}
        };
        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {
        		CD_PROJ : this.dsList.getColumn(this.dsList.rowposition, "CD_PROJ")
        	};

        	// 화면 오픈.
            this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOO_OVS_PROJ", "fnPopupCallback", param, 1340, 780);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOO_OVS_PROJ_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
