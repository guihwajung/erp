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
            this.set_titletext("선급금(상세)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DPGPR_XPREPAY_CHANGE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DPGPR_XPREPAY_CHANGE_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SAVE_01</Col></Row><Row><Col id=\"TARGET\">test</Col><Col id=\"SP\">DPGPR_XBUTTON_SELECT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DPGPR_XPREPAY_CHANGE_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IRCPSRCV\" type=\"STRING\" size=\"256\"/><Column id=\"DT_KONGSA_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_KONGSA_TO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HDCONT_PROV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HDCONT_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HDCONT_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYTRG_PROV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYTRG_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYTRG_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYNOTI_PROV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYNOTI_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYNOTI_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYREQ_PROV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYREQ_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYREQ_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYGUP_PROV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYGUP_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYGUP_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PREPAY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REQDIV\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"FR_GNTPERD\" type=\"STRING\" size=\"256\"/><Column id=\"TO_GNTPERD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STOCKKIND\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ONLINE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PUBLICATION\" type=\"STRING\" size=\"256\"/><Column id=\"OR_PUBLICATION\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_GNTPERD_MAX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_DIV", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtns", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_HADOCONT","staCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("계약번호");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","staNO_HADOCONT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("업체코드");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_VENDOR","staCD_VENDOR:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR","ctxtCD_VENDOR:0.0","10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_SEQ","ctxtDS_VENDOR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("선급차수");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10.0","100","24.0","15",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("검색");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_SITE","btnSearch:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_SITE","ctxtCD_SITE:0.0","10.0","160","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_SITE00","ctxtDS_SITE:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_SITE00","ctxtCD_SITE00:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SEQ","ctxtDS_SITE00:0.0","10.0","30","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData04","0","10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","10","0","97.57%","22",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("1");
            obj.set_text("선급금 증권변경 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTitle:0",null,null,"0","0",null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Button("btnStockAcc",null,"3","80","25","182",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("보증서승인");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnStockDes",null,"3","80","25","99",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("보증서파기");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnStockView",null,"3","80","25","16",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("보증서보기");
            obj.getSetter("uWord").set("popup.ok");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnStockRes",null,"3","80","25","265",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("보증서반려");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.ctxtCD_VENDOR","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtDS_VENDOR","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtCD_SITE","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctxtDS_SITE","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctxtCD_SITE00","value","dsSearch","NO_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_SITE00","value","dsSearch","DS_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtNO_SEQ","value","dsSearch","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DWB_PREPAY_CHANGE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this._check = "A";
        this._ROW_HEIGHT = 0;
        this._BTNS_ARRAY = new Array();
        this._STOCK_BTNS_ARRAY = [this.divData.form.btnStockRes,this.divData.form.btnStockAcc,this.divData.form.btnStockDes,this.divData.form.btnStockView];

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

        	this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        	this.dsSearch.setColumn(0, "NO_HADOCONT", this.getOwnerFrame().NO_HADOCONT);
        	this.dsSearch.setColumn(0, "DS_HADOCONT", this.getOwnerFrame().DS_HADOCONT);
        	this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        	this.dsSearch.setColumn(0, "DS_VENDOR", this.getOwnerFrame().DS_VENDOR);
        	this.dsSearch.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);

        	if(this.getOwnerFrame().YN_EXEC == "Y") {
        		var arrCnt = this._STOCK_BTNS_ARRAY.length;
        		for(var i = 0; i < arrCnt; ++i) {
        			this._STOCK_BTNS_ARRAY[i].set_visible(true);
        		};
        	};

        	this.FormBtns.Select.click();
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
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_HADOCONT = this.divSearch.form.ccfNO_HADOCONT;
        	this.ccfNO_SEQ = this.divSearch.form.ccfNO_SEQ;
        	this.dxGrid = this.divData.form.divData04.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList4, "DW", "DWB_PREPAY_CHANGE");
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.addEventHandler("onselectchanged", this.dxGrid_oncellclick, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_HADOCONT", "string");
        	this.dsSelect.addColumn("NO_SEQ", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("NO_SEQ", "string");
        	this.dsSave.addColumn("GRT_SEQ", "string");
        	this.dsSave.addColumn("TY_STOCK", "string");
        	this.dsSave.addColumn("NO_STOCK", "string");
        	this.dsSave.addColumn("DS_STOCKKIND", "string");
        	this.dsSave.addColumn("AM_GUARANTEE", "bigdecimal");
        	this.dsSave.addColumn("TY_PUBLICATION", "string");
        	this.dsSave.addColumn("OR_PUBLICATION", "string");
        	this.dsSave.addColumn("FR_GNTPERD", "string");
        	this.dsSave.addColumn("TO_GNTPERD", "string");
        	this.dsSave.addColumn("YN_ONLINE", "string");

        	this.dsDel = new Dataset();
        	this.dsDel.addColumn("TY_WRK", "string");
        	this.dsDel.addColumn("CD_SITE", "string");
        	this.dsDel.addColumn("NO_HADOCONT", "string");
        	this.dsDel.addColumn("CD_VENDOR", "string");
        	this.dsDel.addColumn("NO_SEQ", "string");
        	this.dsDel.addColumn("GRT_SEQ", "string");

        	// 보증관련
        	this.dsTransure = new Dataset();
        	this.dsTransure.addColumn("CONINDICODE", "string");
        	this.dsTransure.addColumn("CD_SITE", "string");
        	this.dsTransure.addColumn("NO_CONT", "string");
        	this.dsTransure.addColumn("SN_SEQ", "string");
        	this.dsTransure.addColumn("TY_STOCK", "string");
        	this.dsTransure.addColumn("PROCESSCODE", "string");
        	this.dsTransure.addColumn("GRTTYPE", "string");
        }

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_MAND", "string");

        	this.dsCombo.clearData();
        	this.dsCombo.addRow();

        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DW");
        	this.dsCombo.setColumn(0, "CD_TYPE", "42");
        	this.dsCombo.setColumn(0, "YN_USE", "Y");
        	this.dsCombo.setColumn(0, "YN_MAND", "N");

        	var strSvcId    = "combo";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_DIV=combo0";
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
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList2=select0 dsList4=select1";
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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

        	this.dsList4.setColumn(nrow, "DS_STOCKKIND", 	this.dsList2.getColumn(0,"DS_STOCKKIND"));
        	this.dsList4.setColumn(nrow, "TY_STOCK", 		this.dsList2.getColumn(0,"TY_STOCK"));
        	this.dsList4.setColumn(nrow, "YN_ONLINE", 		this.dsList2.getColumn(0,"YN_ONLINE"));
        	this.dsList4.setColumn(nrow, "TY_PUBLICATION", 	this.dsList2.getColumn(0,"TY_PUBLICATION"));
        	this.dsList4.setColumn(nrow, "OR_PUBLICATION", 	this.dsList2.getColumn(0,"OR_PUBLICATION"));
        	this.dsList4.setColumn(nrow, "AM_GUARANTEE", 	this.dsList2.getColumn(0,"AM_GUARANTEE"));
        	this.dsList4.setColumn(nrow, "FR_GNTPERD", 		this.dsList2.getColumn(0,"FR_GNTPERD_MAX"));
        	this.dsList4.setColumn(nrow, "TO_GNTPERD", 		this.dsList2.getColumn(0,"FR_GNTPERD_MAX"));
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        // 	if(this.gfnIsNull(this.dsList4.getColumn(this.dsList4.rowposition,"CD_STATUS")) ||
        // 		this.dsList4.getColumn(this.dsList4.rowposition,"CD_STATUS") >= "C200") {
        // 		this.gfnAlert("이미 보증신청 처리된 내역입니다!");
        // 		return;
        // 	};
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	var dsCnt = this.dsList4.rowcount;
        	this.dsSave.clearData();

        	for(var i = 0; i < dsCnt; ++i) {
        		if(this.dsList4.getColumn(0, "YN_ONLINE") != "Y") {
        			if(!this.gfnGridValidate(this.dxGrid)) return;
        		};

        		if(this.gfnIsNull(this.dsList4.getColumn(i, this.ucFlag))) continue;

        		if(this.dsList4.getColumn(i, this.ucFlag) == "D") {
        			var nrow = this.dsDel.addRow();
        			this.dsDel.setColumn(nrow, "TY_WRK", this.dsList4.getColumn(i, this.ucFlag));
        			this.dsDel.setColumn(nrow, "CD_SITE", this.dsList2.getColumn(0, "CD_SITE"));
        			this.dsDel.setColumn(nrow, "NO_HADOCONT", this.dsList2.getColumn(0, "NO_HADOCONT"));
        			this.dsDel.setColumn(nrow, "CD_VENDOR", this.dsList2.getColumn(0, "CD_VENDOR"));
        			this.dsDel.setColumn(nrow, "NO_SEQ", this.dsList2.getColumn(0, "NO_SEQ"));
        			this.dsDel.setColumn(nrow, "GRT_SEQ", this.dsList4.getColumn(i, "GRT_SEQ"));
        		} else {
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "TY_WRK", this.dsList4.getColumn(i, this.ucFlag));
        			this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsSave.setColumn(nrow, "CD_SITE", this.dsList2.getColumn(0, "CD_SITE"));
        			this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsList2.getColumn(0, "NO_HADOCONT"));
        			this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList2.getColumn(0, "CD_VENDOR"));
        			this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList2.getColumn(0, "NO_SEQ"));
        			this.dsSave.setColumn(nrow, "GRT_SEQ", this.dsList4.getColumn(i, "GRT_SEQ"));
        			this.dsSave.setColumn(nrow, "TY_STOCK", this.dsList4.getColumn(i, "TY_STOCK"));
        			this.dsSave.setColumn(nrow, "NO_STOCK", this.dsList4.getColumn(i, "NO_STOCK"));
        			this.dsSave.setColumn(nrow, "DS_STOCKKIND", this.dsList4.getColumn(i, "DS_STOCKKIND"));
        			this.dsSave.setColumn(nrow, "AM_GUARANTEE", this.dsList4.getColumn(i, "AM_GUARANTEE"));
        			this.dsSave.setColumn(nrow, "TY_PUBLICATION", this.dsList4.getColumn(i, "TY_PUBLICATION"));
        			this.dsSave.setColumn(nrow, "OR_PUBLICATION", this.dsList4.getColumn(i, "OR_PUBLICATION"));
        			this.dsSave.setColumn(nrow, "YN_ONLINE", this.dsList4.getColumn(i, "YN_ONLINE"));
        			this.dsSave.setColumn(nrow, "FR_GNTPERD", this.dsList4.getColumn(i, "FR_GNTPERD"));
        			this.dsSave.setColumn(nrow, "TO_GNTPERD", this.dsList4.getColumn(i, "TO_GNTPERD"));
        		};
        	};

        	if (this.dsSave.rowcount == 0 && this.dsDel.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDel save=dsSave";
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
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_HADOCONT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_HADOCONT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("계약번호를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_VENDOR"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctxtCD_VENDOR.setFocus();
        		}
        		this.gfnAlert("업체코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_SEQ"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_SEQ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("선급차수를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		if(this.dsList2.getColumn(0,"YN_ONLINE") == "Y") {
        			var arrCnt = this._STOCK_BTNS_ARRAY.length;
        			for(var i = 0; i < arrCnt; ++i) {
        				this._STOCK_BTNS_ARRAY[i].set_enable(true);
        			};
        		};
        	}
        	else if(svcID == "save") {
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {

        		dsUserParam.setColumn(nrow, "YM_WORK", "");
        		dsUserParam.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	}
        	else if (id == "ccfNO_HADOCONT") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "YM_WORK", "");
        		dsUserParam.setColumn(nrow, "TY_DIV", "DWB01");
        		dsUserParam.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        		dsUserParam.setColumn(nrow, "DS_CONTMETHOD", "");
        	}
        	else if (id == "ccfNO_SEQ") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}
        		else if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HADOCONT"))) {
        			this.gfnAlert("계약번호를 먼저 입력하세요.");
        			return false;
        		}
        		else if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR"))) {
        			this.gfnAlert("업체코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        		dsUserParam.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	}
        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	if(colnm == "BTN_SCRTS") {
        		return true;
        	}
         }

         this.fnGrid_ExpandUp = function(obj, e) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm == "BTN_SCRTS") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        // 		if(this.gfnGetFlag(this.dsList, e.row) == "I"){
        // 			this.gfnAlert("저장 후 파일첨부 진행.");
        // 			return false;
        // 		}

        		var cd_site 		= this.dsSearch.getColumn(0, "CD_SITE");
        		var no_hadocont 	= this.dsSearch.getColumn(0, "NO_HADOCONT");
        		var cd_vendor 		= this.dsSearch.getColumn(0, "CD_VENDOR");
        		var no_seq 			= this.dsSearch.getColumn(0, "NO_SEQ");
        		var grt_seq			= this.dsList4.getColumn(this.dsList4.rowposition,"GRT_SEQ");

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DWB5";
        		fileManager.CD_DIR = [no_hadocont, no_seq, grt_seq, cd_site, "SCRTS"];

        		var is_readonly = false;

        		if(this.dsList4.getColumn(0, "BTN_SCRTS_AUTH") == "F")
        		{
        			is_readonly = false;
        		}
        		else
        		{
        			is_readonly = true;
        		}

        		fileManager.IS_READONLY = is_readonly;
        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화

        		this.dsList4.clearData();
        		this.dsList2.clearData();
        	}
        };

        this.fnSaveValidateZero = function()
        {
        	if(this._check == "A")
        	{
        		if(this.dsList2.getColumn(0, "AM_PREPAYREQ_PROV") == 0)
        		{
        			this.gfnAlert("선급금요청금액(공급가)을 입력해주세요.");
        			return false;
        		}
        	}
        	else if(this._check == "G")
        	{
        		if(this.dsList2.getColumn(0, "AM_PREPAYGUP_PROV") == 0)
        		{
        			this.gfnAlert("선급금포기금액(공급가)을 입력해주세요.");
        			return false;
        		}
        	}

        	return true;
        }

        /************************************************************************
         * 보증관련 Event
         ************************************************************************/
         this.dxGrid_oncellclick = function(obj,e)
        {
        	if(this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "YN_ONLINE" ||
        		this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "DS_STOCKKIND") return true;
        	if(this.dsList4.getColumn(e.row,"YN_ONLINE") != "Y") return true;
        	if((this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "FR_GNTPERD" ||
        		this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "TO_GNTPERD") &&
        		this.gfnIsNull(this.dsList4.getColumn(e.row,"CD_STATUS"))
        		) return true;

        // 	if(this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "OR_PUBLICATION" && this.gfnIsNull(this.dsList4.getColumn(e.row,"CD_STATUS"))) {
        // 		var param = {};
        // 		param.CD_TRANSURE = this.dsList4.getColumn(e.row,"TY_PUBLICATION");
        // 		param.DS_TRANSURE = this.dsList4.getColumn(e.row,"OR_PUBLICATION");
        // 		this.gfnFormOpen("DCC", "DCC_XSTOCKMR_TRANSURE_DLG", "fnTransureChoice_Callback", param, 350, 150);
        // 	};

        	obj.set_readonly(true);
        	return false;
        };

        this.fnTransureChoice_Callback = function(id, val) {
        	if(val != null) {
        		var json = JSON.parse(val);
        		this.dsList4.setColumn(this.dsList4.rowposition,"TY_PUBLICATION",json.CD_TRANSURE);
        		this.dsList4.setColumn(this.dsList4.rowposition,"OR_PUBLICATION",json.DS_TRANSURE);
        	};
        };

        this.dsList4_cancolumnchange = function(obj,e)
        {
        	if(e.columnid != "YN_ONLINE") return;

        	if(!this.gfnIsNull(this.dsList4.getColumn(e.row,"CD_STATUS")) && this.dsList4.getColumn(e.row,"CD_STATUS") >= "C210") {
        		this.gfnAlert("이미 보증처리된 내역입니다.");
        		return false;
        	};
        };

        this.dsList4_onvaluechanged = function(obj,e)
        {
        	if(e.columnid != "YN_ONLINE") return;
        	if(e.newvalue == "Y") return;

        	this.dsList4.setColumn(e.row,"TY_PUBLICATION","");
        	this.dsList4.setColumn(e.row,"OR_PUBLICATION","");
        	this.dsList4.setColumn(e.row,"CD_STATUS","");
        	this.dsList4.setColumn(e.row,"DS_STATUS","");
        };

        /************************************************************************
         * 보증관련 Function
         ************************************************************************/
        this.fnStockRes = function(obj,e)
        {
        	if(this.dsList4.rowposition == -1) return;

        	if(this.dsList4.getColumn(this.dsList4.rowposition,"CD_STATUS") != 'C310') {
        		this.gfnAlert("보증서 반려처리가 불가능합니다!");
        		return;
        	};

        	this.dsTransure.clearData();
        	this.dsTransure.addRow();
        	this.dsTransure.setColumn(0, "CD_SITE",		this.dsSearch.getColumn(this.dsSearch.rowposition, "CD_SITE"));
        	this.dsTransure.setColumn(0, "NO_CONT",		this.dsList2.getColumn(this.dsList2.rowposition, "NO_HADOCONT"));
        	this.dsTransure.setColumn(0, "SN_SEQ", 		this.dsList2.getColumn(this.dsList2.rowposition, "NO_SEQ") +
        												this.dsList4.getColumn(this.dsList4.rowposition, "GRT_SEQ"));
        	this.dsTransure.setColumn(0, "TY_STOCK", 	this.dsList2.getColumn(this.dsList2.rowposition, "TY_STOCK"));

        	var strSvcId    = "transureCan";
        	var strSvcType  = "dcc_transure_" + (this.dsList4.getColumn(this.dsList4.rowposition, "TY_PUBLICATION")).toLowerCase() + "_res";
        	var inProc		= "";
        	var inData      = "dsTransure=dsTransure";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnTransureCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnStockAcc = function(obj,e)
        {
        	if(this.dsList4.rowposition == -1) return;
        	if(this.dsList4.getColumn(this.dsList4.rowposition,"CD_STATUS") != 'C310' &&
        		this.dsList4.getColumn(this.dsList4.rowposition,"CD_STATUS") != 'C510') {
        		this.gfnAlert("보증서 승인처리가 불가능합니다!");
        		return;
        	};

        	this.dsTransure.clearData();
        	this.dsTransure.addRow();
        	this.dsTransure.setColumn(0, "CD_SITE",		this.dsSearch.getColumn(this.dsSearch.rowposition, "CD_SITE"));
        	this.dsTransure.setColumn(0, "NO_CONT",		this.dsList2.getColumn(this.dsList2.rowposition, "NO_HADOCONT"));
        	this.dsTransure.setColumn(0, "SN_SEQ", 		this.dsList2.getColumn(this.dsList2.rowposition, "NO_SEQ") +
        												this.dsList4.getColumn(this.dsList4.rowposition, "GRT_SEQ"));
        	this.dsTransure.setColumn(0, "TY_STOCK", 	this.dsList2.getColumn(this.dsList2.rowposition, "TY_STOCK"));

        	var strSvcId    = "transureAcc";
        	var strSvcType  = "dcc_transure_" + (this.dsList4.getColumn(this.dsList4.rowposition, "TY_PUBLICATION")).toLowerCase() + "_acc";
        	var inProc		= "";
        	var inData      = "dsTransure=dsTransure";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnTransureCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnStockDes = function(obj,e)
        {
        	if(this.dsList4.rowposition == -1) return;
        	if(this.dsList4.getColumn(this.dsList4.rowposition,"CD_STATUS") != 'C410') {
        		this.gfnAlert("보증서 파기처리가 불가능합니다!");
        		return;
        	};

        	this.dsTransure.clearData();
        	this.dsTransure.addRow();
        	this.dsTransure.setColumn(0, "CD_SITE",		this.dsSearch.getColumn(this.dsSearch.rowposition, "CD_SITE"));
        	this.dsTransure.setColumn(0, "NO_CONT",		this.dsList2.getColumn(this.dsList2.rowposition, "NO_HADOCONT"));
        	this.dsTransure.setColumn(0, "SN_SEQ", 		this.dsList2.getColumn(this.dsList2.rowposition, "NO_SEQ") +
        												this.dsList4.getColumn(this.dsList4.rowposition, "GRT_SEQ"));
        	this.dsTransure.setColumn(0, "TY_STOCK", 	this.dsList2.getColumn(this.dsList2.rowposition, "TY_STOCK"));

        	var strSvcId    = "transureDes";
        	var strSvcType  = "dcc_transure_" + (this.dsList4.getColumn(this.dsList4.rowposition, "TY_PUBLICATION")).toLowerCase() + "_des";
        	var inProc		= "";
        	var inData      = "dsTransure=dsTransure";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnTransureCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnStockView = function(obj,e) {
        	if(this.dsList4.rowcount == 0) return;

        	if(this.dsList4.getColumn(this.dsList4.rowposition,"YN_ONLINE") != "Y") {
        		this.gfnAlert("전자보증서만 가능합니다!");
        		return;
        	};
        	if(this.gfnIsNull(this.dsList4.getColumn(this.dsList4.rowposition,"NO_STOCK"))) {
        		this.gfnAlert("발급된 보증서가 없습니다!");
        		return;
        	};

        	var param = {};
        	param.CD_SITE			=   this.dsSearch.getColumn(this.dsSearch.rowposition, "CD_SITE");
        	param.NO_CONT			=	this.dsList2.getColumn(this.dsList2.rowposition, "NO_HADOCONT");
        	param.SN_SEQ			=	this.dsList2.getColumn(this.dsList2.rowposition, "NO_SEQ") +
        								this.dsList4.getColumn(this.dsList4.rowposition, "GRT_SEQ");
        	param.TY_STOCK			=	this.dsList2.getColumn(this.dsList2.rowposition, "TY_STOCK");
        	param.TY_PUBLICATION	=	this.dsList4.getColumn(this.dsList4.rowposition, "TY_PUBLICATION");
        	param.MODULE			=	"PO";//POTAL

        	this.gfnFormOpen("DCC", "DCC_STOCK_VIEWER", "", param);
        };

        this.fnTransureCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "transureReq"){
        		if(errorCode != 0) {
        			this.gfnAlert(errorMsg);
        			return;
        		}
        		this.gfnAlert("보증신청완료!!!");
        	} else if(svcID == "transureCan") {
        		if(errorCode != 0) {
        			this.gfnAlert(errorMsg);
        			return;
        		}
        		this.gfnAlert("보증취소완료!!!");
        	} else if(svcID == "transureRes") {
        		if(errorCode != 0) {
        			this.gfnAlert(errorMsg);
        			return;
        		}
        		this.gfnAlert("보증반려완료!!!");
        	} else if(svcID == "transureAcc") {
        		if(errorCode != 0) {
        			this.gfnAlert(errorMsg);
        			return;
        		}
        		this.gfnAlert("보증수용완료!!!");
        	} else if(svcID == "transureDes") {
        		if(errorCode != 0) {
        			this.gfnAlert(errorMsg);
        			return;
        		}
        		this.gfnAlert("보증파기완료!!!");
        	} else if(svcID == "transureApp") {
        		if(errorCode != 0) {
        			this.gfnAlert(errorMsg);
        			return;
        		}
        		this.gfnAlert("보증최종완료!!!");
        	};

        	this.FormBtns.Select.click();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.fnSelect,this);
            this.divData.form.btnStockAcc.addEventHandler("onclick",this.fnStockAcc,this);
            this.divData.form.btnStockDes.addEventHandler("onclick",this.fnStockDes,this);
            this.divData.form.btnStockView.addEventHandler("onclick",this.fnStockView,this);
            this.divData.form.btnStockRes.addEventHandler("onclick",this.fnStockRes,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList2.addEventHandler("onvaluechanged",this.dsList2_onvaluechanged,this);
            this.dsList4.addEventHandler("cancolumnchange",this.dsList4_cancolumnchange,this);
            this.dsList4.addEventHandler("onvaluechanged",this.dsList4_onvaluechanged,this);
        };
        this.loadIncludeScript("DWB_PREPAY_CHANGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
