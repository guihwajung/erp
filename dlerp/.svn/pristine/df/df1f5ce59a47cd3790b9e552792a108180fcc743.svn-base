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
                this._setFormPosition(960,660);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCXPR_VENDOR_RECOMMEND_CEN</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCBPR_RECOMMEND_INSERT</Col></Row><Row><Col id=\"TARGET\">select_prev</Col><Col id=\"SP\">DCBPR_RECOMMENDGRIDDLG_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo1</Col><Col id=\"SP\">DMXPR_LICCOST_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DCXPR_LICCOST_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectCCDC</Col><Col id=\"SP\">DCZPR_COSTCLASS_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DCBPR_RECVENDOR_CONFIRM_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_REGIST\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_REGIST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">등록</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_COSTCLASS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LICCOST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("입찰정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","staTITLE:5","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_BID","459","35","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("입찰번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_COSTCLASS","0","64","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("품목");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staCD_SITE:-1","staTITLE:5","374","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staNO_BID:-1","35","399","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","86","64","858","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staCD_SITE:5","staTITLE:10","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","197","staTITLE:10","258","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_BID","551","40","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SUBCON","656","40","283","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_COSTCLASS","staCD_COSTCLASS:5","edtCD_SITE:9","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_COSTCLASS");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_LICCOST","cboCD_COSTCLASS:5","edtCD_SITE:9","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_LICCOST");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_REGIST","459","64","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("등록구분");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboYN_REGIST","staYN_REGIST:5","edtNO_BID:9","99","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsYN_REGIST");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divData:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("추천정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staID_USER","0","staTITLE:5","87","0",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("추천인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("underline");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","staID_USER:-1","87","226",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("3");
            obj.set_text("추천업체");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("underline");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staBg5","staID_USER:-1","staTITLE:5","337","0",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staBg7","staCD_VENDOR:-1","staBg5:-1",null,"226","0",null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Div("ccfID_USER","staID_USER:5","staTITLE:10","205","0",null,null,null,null,null,null,this.divDataBottom.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_VENDOR","staCD_VENDOR:5","staBg5:4","320","20",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("6");
            obj.set_value("");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnSearch","ctxtCD_VENDOR:10","staBg5:4","63","20",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("7");
            obj.set_text("검색");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_ALL","btnSearch:10","staBg5:4","96","20",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("8");
            obj.set_text("전체검색");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_visible("false");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","staBg5:-1","staTITLE:5","87","0",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("9");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("underline");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staBg6","staCD_DEPT:-1","staTITLE:5",null,"0","0",null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:5","staTITLE:10","205","0",null,null,null,null,null,null,this.divDataBottom.form);
            obj.getSetter("CodeFindName").set("DCX_CFDEPT_02");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid","staCD_VENDOR:6","ctxtCD_VENDOR:5",null,"190","10",null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("12");
            obj._setContents("");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnOk","36.98%","477","60","20",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("13");
            obj.set_text("추가");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR00","0","staBg7:-1","87","196",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_text("입찰참여업체");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staBg7_00","86","staBg7:-1",null,"196","0",null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid1","93","staBg7:6",null,"182","10",null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("15");
            obj._setContents("");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnDel","btnOk:15","477","60","20",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("17");
            obj.set_text("삭제");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnDel:15","477","60","20",null,null,null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("18");
            obj.set_text("닫기");
            this.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtCD_SITE","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtDS_SITE","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtNO_BID","value","dsSearch","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtDS_SUBCON","value","dsSearch","DS_SUBCON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDataBottom.form.ctxtCD_VENDOR","value","dsSearch","VALUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.cboCD_COSTCLASS","value","dsSearch","CD_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cboCD_LICCOST","value","dsSearch","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccboYN_REGIST","value","dsSearch","YN_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_RECOMMEND_DLG.xfdl", function() {
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

         	// 이전 화면에서 데이터 받기.
        	this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        	this.dsSearch.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        	this.dsSearch.setColumn(0, "DS_SUBCON", this.getOwnerFrame().DS_SUBCON);
        	this.dsSearch.setColumn(0, "CD_COSTCLASS", "");
        	this.dsSearch.setColumn(0, "CD_LICCOST", "");
        // 	this.dsSearch.setColumn(0, "CD_COSTCLASS", this.getOwnerFrame().CD_COSTCLASS);
        // 	this.dsSearch.setColumn(0, "CD_LICCOST", this.getOwnerFrame().CD_LICCOST);

        	this.divDataBottom.form.ccfID_USER.form.CDTextBox.set_value(this.AuthClient.ID_USER);
        	this.divDataBottom.form.ccfID_USER.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);
        	this.divDataBottom.form.ccfCD_DEPT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        	this.divDataBottom.form.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);

        	//this.fnSelectPrev(this.getOwnerFrame().NO_BID);

        	if(this.getOwnerFrame().CD_MODULE == "DC") {
        		this.divData.form.staCD_COSTCLASS.set_text("하도공종");
        	} else {
        		this.divData.form.staCD_COSTCLASS.set_text("품목");
        	}

        	this.fnSelect("Y");
        	this.fnSelect1();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnVenCancel = this.gfnFormButtonAdd("btnVenCancel", "fnVenCancel");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divDataBottom.form.objGrid;
        	this.dxGrid1 = this.divDataBottom.form.objGrid1;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.divDataBottom.form.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";


        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCB_RECOMMENDGRIDDLG");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DC", "DCB_RECOMMENDVENDOR_R");

        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_oncelldblclick, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_BID", "string");
        	this.dsSelect.addColumn("CD_COSTCLASS", "string");
        	this.dsSelect.addColumn("CD_LICCOST", "string");
        	this.dsSelect.addColumn("YN_REGIST", "string");
        	this.dsSelect.addColumn("VALUE", "string");
        	this.dsSelect.addColumn("YN_INIT", "string");

        	this.dsSelectPrev = new Dataset();
        	this.dsSelectPrev.addColumn("NO_BID", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("NO_BID", "string");
        	this.dsInsert.addColumn("ID_SABUN", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("TY_RECOMMEND", "string");
        	this.dsInsert.addColumn("DS_REASON", "string");
        	this.dsInsert.addColumn("DS_HNAME", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("RM_REMARK", "string");
        	this.dsInsert.addColumn("TY_WHERE", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsInsert.addColumn("CD_LICENSE", "string");
        	this.dsInsert.addColumn("AM_CONTLIMIT", "bigint");

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("CD_SITE", "string");
        	this.dsSelect1.addColumn("NO_BID", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function(YN_INIT) {
        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSelect.setColumn(0, "CD_COSTCLASS", this.dsSearch.getColumn(0, "CD_COSTCLASS"));
        	this.dsSelect.setColumn(0, "CD_LICCOST", this.dsSearch.getColumn(0, "CD_LICCOST"));
        	this.dsSelect.setColumn(0, "YN_REGIST", this.dsSearch.getColumn(0, "YN_REGIST"));
        	this.dsSelect.setColumn(0, "VALUE", this.dsSearch.getColumn(0, "VALUE"));
        	this.dsSelect.setColumn(0, "YN_INIT", YN_INIT);

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
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        this.fnSelect1 = function() {
        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect1.clearData();
        	this.dsSelect1.addRow();

        	this.dsSelect1.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect1.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));

        	var strSvcId    = "select1";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select1=dsSelect1";
        	var outData     = "dsList1=select10";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        this.fnSelectPrev = function(no_bid) {
        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelectPrev.clearData();
        	this.dsSelectPrev.addRow();

        	this.dsSelectPrev.setColumn(0, "NO_BID", no_bid);

        	var strSvcId    = "select_prev";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_prev=dsSelectPrev";
        	var outData     = "dsTemp=select_prev0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "insert") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			//this.getParentContext().close(true);
        			this.fnSelect1();
        			this.gfnConfirm("업체를 계속 추가 하시겠습니까?", "fnBtnOkAfter_callback");
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "select_prev")
        	{
        		this.dsSearch.copyRow(0, this.dsTemp, 0);
        		this.FormBtns.Select.click();
        	}
        	else if(svcID == "combo")
        	{
        		if(errorCode == 0)
        		{
        			this.dsCD_COSTCLASS.insertRow(0);
        			this.dsCD_COSTCLASS.setColumn(0, "CD_CODE", "");
        			this.dsCD_COSTCLASS.setColumn(0, "DS_CODE", "전체");
        			//this.divData.form.cboCD_COSTCLASS.set_index(0);
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo1") {
        		if (errorCode == 0) {
        			this.dsCD_LICCOST.insertRow(0);
        			this.dsCD_LICCOST.setColumn(0, "CD_CODE", "");
        			this.dsCD_LICCOST.setColumn(0, "DS_CODE", "전체");
         			//this.divData.form.cboCD_LICCOST.set_index(0);
        		}
        	}
        }

        this.fnBtnOkAfter_callback = function(strId, val) {
        	if(val == false) {
        		this.getParentContext().close(true);
        	}else{
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_DEPT") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}
        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "DCX_CFLICENSE_VENDOR")
        	{
        		dsUserParam.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
        	}
        	return true;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
         	this.dsInsert.clearData();

        	var row = -1;

        	while(1)
        	{
        		row = this.dsList.findRow("YN_CHECK", "1", row+1);

        		if(row < 0) break;

        		var nrow = this.dsInsert.addRow();
        		this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsInsert.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        		this.dsInsert.setColumn(nrow, "ID_SABUN", this.divDataBottom.form.ccfID_USER.form.CDTextBox.text);
        		this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(row, "CD_VENDOR"));
        		this.dsInsert.setColumn(nrow, "TY_RECOMMEND", "입찰");
        		this.dsInsert.setColumn(nrow, "DS_REASON", "");
        		this.dsInsert.setColumn(nrow, "DS_HNAME", this.divDataBottom.form.ccfID_USER.form.DSTextBox.text);
        		this.dsInsert.setColumn(nrow, "CD_DEPT", this.divDataBottom.form.ccfCD_DEPT.form.CDTextBox.text);
        		//this.dsInsert.setColumn(nrow, "RM_REMARK", this.divDataBottom.form.edtBIGO.text);
        		this.dsInsert.setColumn(nrow, "TY_WHERE", "2");
        		this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		this.dsInsert.setColumn(nrow, "CD_LICENSE", this.dsList.getColumn(row, "CD_LICENSE"));
        		this.dsInsert.setColumn(nrow, "AM_CONTLIMIT", this.dsList.getColumn(row, "AM_CONTLIMIT"));
        	};

        	if (this.dsInsert.rowcount == 0) return;

        	//this.gfnConfirm("선택한 업체를 추가 하시겠습니까?", "fnBtnOk_callback");
        	this.fnBtnOk_callback("", true);
        };

        this.fnBtnOk_callback = function(strId, val) {
        	if(val == true) {
        		var strSvcId    = "insert";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "insert=dsInsert";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.divDataBottom_btnSearch_onclick = function(obj,e)
        {
        	this.FormBtns.Select.click();
        };


        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();

        	var inData      = "";
        	var outData     = "";

        	if(this.getOwnerFrame().CD_MODULE == "DC")
        	{
        		this.dsCombo.addRow();

        		inData      = "selectCCDC=dsCombo";
        		outData     = "dsCD_COSTCLASS=selectCCDC0";
        	}
        	else
        	{
        		this.dsCombo.addColumn("CD_SYSTEM", "string");
        		this.dsCombo.addColumn("CD_TYPE", "string");
        		this.dsCombo.addRow();

        		this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        		this.dsCombo.setColumn(0, "CD_TYPE", "H01");
        		inData      = "combo=dsCombo";
        		outData     = "dsCD_COSTCLASS=combo0";
        	}

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
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


        this.fnSetCombo1 = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.setColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_BUMUN", "string");

        	this.dsCombo.addRow();

        	if(this.getOwnerFrame().CD_MODULE == "DC")
        	{
        		this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	}
        	else
        	{
        		this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        	}
        	this.dsCombo.setColumn(0, "CD_BUMUN", this.dsSearch.getColumn(0, "CD_COSTCLASS"));

        	var strSvcId    = "combo1";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";

        	var inData		= "";
        	var outData     = "";

        	if(this.getOwnerFrame().CD_MODULE == "DC")
        	{
        		inData      = "combo2=dsCombo";
        		outData     = "dsCD_LICCOST=combo20";
        	}
        	else
        	{
        		inData      = "combo1=dsCombo";
        		outData     = "dsCD_LICCOST=combo10";
        	}


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

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "CD_COSTCLASS")
        		{
        			this.dsSearch.setColumn(0, "CD_LICCOST", "");
        			this.fnSetCombo1();
        		}
        	}
        };

        this.divDataBottom_ctxtCD_VENDOR_onkeydown = function(obj,e)
        {
        	// ENTER KEY
        	if(e.keycode == 13)
        	{
        		// TEXTBOX의 FOCUS를 벗어나지 않으면 DATASET에 들어가지 않음.
        		this.dsSearch.setColumn(0, "VALUE", this.divDataBottom.form.ctxtCD_VENDOR.text);
        		this.FormBtns.Select.click();
        	}
        };

        this.fnGrid_oncelldblclick = function(obj,e)
        {



        	  var param = {};

        	  param.CD_VENDOR = this.dsList2.getColumn(this.dsList2.rowposition, "CD_VENDOR");
        	  param.DS_VENDOR = this.dsList2.getColumn(this.dsList2.rowposition, "DS_VENDOR");
        	  param.DT_INPUT  = this.dsList2.getColumn(this.dsList2.rowposition, "DT_INPUT");

        	  this.gfnFormOpen(this.FormInfo.CD_MODULE , "DCA_REGISTDETAIL_R", "", param);


        };

        this.fnVenCancel = function(obj,e) {
        	if(this.dsList1.rowposition < 0)
        	{
        		this.gfnAlert("입찰참여업체를 선택해주십시오.");
        		return;
        	}

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.dsSearch.getColumn(0, "DS_SITE");
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_SUBCON = this.dsSearch.getColumn(0, "DS_SUBCON");
        	param.CD_COSTCLASS = this.getOwnerFrame().CD_COSTCLASS;
        	param.DS_COSTCLASS = this.getOwnerFrame().DS_COSTCLASS;
        	param.CD_LICCOST = this.getOwnerFrame().CD_LICCOST;
        	param.DS_LICCOST = this.getOwnerFrame().DS_LICCOST;
        	param.CD_VENDOR = this.dsList1.getColumn(this.dsList1.rowposition, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList1.getColumn(this.dsList1.rowposition, "DS_VENDOR");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_RECOMMENDCANCELDLG", "fnVenCancel_callback", param, 390, 390);
        }

        this.fnVenCancel_callback = function(strId, val) {
        	this.FormBtns.Select.click();
        	this.fnSelect1();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divDataBottom.form.ctxtCD_VENDOR.addEventHandler("onkeydown",this.divDataBottom_ctxtCD_VENDOR_onkeydown,this);
            this.divDataBottom.form.btnSearch.addEventHandler("onclick",this.divDataBottom_btnSearch_onclick,this);
            this.divDataBottom.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divDataBottom.form.btnDel.addEventHandler("onclick",this.fnVenCancel,this);
            this.divDataBottom.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_RECOMMEND_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
