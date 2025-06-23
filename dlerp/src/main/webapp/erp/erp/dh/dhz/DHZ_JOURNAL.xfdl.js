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
            this.set_titletext("자동전표분개등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_TRADE\" type=\"INT\" size=\"256\"/><Column id=\"NO_SLIP_KEY\" type=\"INT\" size=\"256\"/><Column id=\"NO_SLIP\" type=\"INT\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CRDR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TRADE_IO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_COST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHZPR_JOURNAL_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHZPR_JOURNAL_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHZPR_JOURNAL_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHZPR_JOURNAL_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AUTOSLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_AUTOSLIP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTRADE_IO", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">대체거래</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_COST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">예</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DCO", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">차변</Col><Col id=\"DS_CODE\">차변</Col></Row><Row><Col id=\"CD_CODE\">대변</Col><Col id=\"DS_CODE\">대변</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_TRADE\" type=\"INT\" size=\"256\"/><Column id=\"NO_SLIP_KEY\" type=\"INT\" size=\"256\"/><Column id=\"NO_SLIP\" type=\"INT\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CRDR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TRADE_IO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_COST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_AUTOSLIP","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("자동전표코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_AUTOSLIP","staCD_AUTOSLIP:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_maxlength("40");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("단지명");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_AUTOSLIP","ctxtCD_AUTOSLIP:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_maxlength("40");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("단지명");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("분개정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSplitter","450","sta00:5","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","sta00:5",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","sta00:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","5","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("거래순번");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta12","sta01:-1","5","400","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00","0","sta01:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_text("전표순번");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","sta00:-1","sta12:-1","400","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta00:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","sta04:-1","sta02:-1","400","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta04:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_text("원가코드여부");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta05","sta06:-1","sta03:-1","400","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta06:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_text("계정코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta07","sta08:-1","sta05:-1","400","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta10","0","sta08:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_text("회계금액명칭");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta09","sta10:-1","sta07:-1","400","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta13","0","sta10:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_text("차대구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta11","sta13:-1","sta09:-1","400","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_SLIP","sta00:5","sta12:4","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_maxlength("40");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("단지명");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTRADE_IO","sta04:5","sta02:4","385","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsTRADE_IO");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Radio("rdoTY_COST","sta06:5","sta03:4","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_COST");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_ACCOUNT","sta08:5","sta05:4","385","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CodeFindName").set("DZX_CFCOMPANYCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("사업주체");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_AMOUNT","sta10:5","sta07:4","385","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_maxlength("40");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("단지명");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Radio("rdoTY_DCO","sta13:5","sta09:4","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_DCO");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_TRADE","sta01:5","10","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_maxlength("40");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("단지명");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_AUTOSLIP","value","dsSearch","CD_AUTOSLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_AUTOSLIP","value","dsSearch","DS_AUTOSLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataRight.form.txtNO_TRADE","value","dsData","NO_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataRight.form.txtNO_SLIP","value","dsData","NO_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataRight.form.cboTRADE_IO","value","dsData","TY_TRADE_IO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.rdoTY_COST","value","dsData","YN_COST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.cfCD_ACCOUNT.form.CDTextBox","value","dsData","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.cfCD_ACCOUNT.form.DSTextBox","value","dsData","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.txtDS_AMOUNT","value","dsData","DS_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.rdoTY_DCO","value","dsData","TY_CRDR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHZ_JOURNAL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.dsSearch.setColumn(0, "CD_AUTOSLIP", this.getOwnerFrame().CD_AUTOSLIP);
        	this.dsSearch.setColumn(0, "DS_AUTOSLIP", this.getOwnerFrame().DS_AUTOSLIP);

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDetail = this.gfnFormButtonAdd("Detail", "fnDetail");

        	this.btnDetail.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
         	this.ctxtCD_AUTOSLIP = this.divSearch.form.ctxtCD_AUTOSLIP;
         	this.ctxtDS_AUTOSLIP = this.divSearch.form.ctxtDS_AUTOSLIP;
        	this.txtNO_TRADE = this.divData.form.divDataRight.form.txtNO_TRADE;
        	this.txtNO_SLIP = this.divData.form.divDataRight.form.txtNO_SLIP;
        	this.cboTRADE_IO = this.divData.form.divDataRight.form.cboTRADE_IO;
        	this.rdoTY_COST = this.divData.form.divDataRight.form.rdoTY_COST;
        	this.cfCD_ACCOUNT = this.divData.form.divDataRight.form.cfCD_ACCOUNT;
        	this.txtDS_AMOUNT = this.divData.form.divDataRight.form.txtDS_AMOUNT;
        	this.rdoTY_DCO = this.divData.form.divDataRight.form.rdoTY_DCO;
        	this.sta08 = this.divData.form.divDataRight.form.sta08;


        	//그리드
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_AUTOSLIP", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_AUTOSLIP", "string");
        	this.dsInsert.addColumn("NO_TRADE", "string");
        	this.dsInsert.addColumn("NO_SLIP", "string");
        	this.dsInsert.addColumn("TY_TRADE_IO", "string");
        	this.dsInsert.addColumn("YN_COST", "string");
        	this.dsInsert.addColumn("CD_ACCOUNT", "string");
        	this.dsInsert.addColumn("TY_CRDR", "string");
        	this.dsInsert.addColumn("DS_AMOUNT", "string");
        	this.dsInsert.addColumn("ID_SABUN", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_AUTOSLIP", "string");
        	this.dsUpdate.addColumn("NO_TRADE", "string");
        	this.dsUpdate.addColumn("NO_SLIP_KEY", "string");
        	this.dsUpdate.addColumn("NO_SLIP", "string");
        	this.dsUpdate.addColumn("TY_TRADE_IO", "string");
        	this.dsUpdate.addColumn("YN_COST", "string");
        	this.dsUpdate.addColumn("CD_ACCOUNT", "string");
        	this.dsUpdate.addColumn("TY_CRDR", "string");
        	this.dsUpdate.addColumn("DS_AMOUNT", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_AUTOSLIP", "string");
        	this.dsDelete.addColumn("NO_TRADE", "string");
        	this.dsDelete.addColumn("NO_SLIP", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHZ_JOURNAL");

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	//this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	//this.cfCD_ACCOUNT.CodeFindName = "DHX_CFACNT_YNSLIP";
        	this.cfCD_ACCOUNT.CodeFindName = "DHX_CFBIMOK";
        	this.cfCD_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";

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

        	this.dsSelect.setColumn(0, "CD_AUTOSLIP", this.gfnTrim(this.dsSearch.getColumn(0, "CD_AUTOSLIP")));

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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid, "bottom", true);

        	this.dsData.set_enableevent(false);

        	this.dsData.clearData();
        	var nrow = this.dsData.addRow();

        	this.dsData.setColumn(nrow, "CD_ACCOUNT", "");
        	this.dsData.setColumn(nrow, "DS_ACCOUNT", "");
        	this.dsData.setColumn(nrow, "DS_AMOUNT", "");
        	this.dsData.setColumn(nrow, "YN_COST", "N");
        	this.dsData.setColumn(nrow, "TY_CRDR", "");

        	if (this.dsData.getColumn(0, "YN_COST") == "Y") {
        		this.sta08.set_text("원가코드");
        		this.cfCD_ACCOUNT.CodeFindName = "DHX_CFBIMOK";
        	}
        	else {
        		this.sta08.set_text("계정코드");
        		this.cfCD_ACCOUNT.CodeFindName = "DHX_CFACNT_YNSLIP";
        	}

        	this.txtNO_TRADE.set_readonly(false);
        	this.txtNO_SLIP.set_readonly(false);

        	var nTradeMax = 1;
        	var nSlipMax = 0;
        	var temp = 0;

        	if (this.dsList.rowcount > 0) {
        		for (i = 0; i < this.dsList.rowcount; i++) {
        			temp = this.dsList.getColumn(i, "NO_TRADE");
        			if (Number(temp) > Number(nTradeMax)) {
        				nTradeMax = temp;
        			}
        		}

        		for (i = 0; i < this.dsList.rowcount; i++) {
        			temp = this.dsList.getColumn(i, "NO_SLIP");
        			if (nTradeMax == this.dsList.getColumn(i, "NO_TRADE") && Number(temp) > Number(nSlipMax)) {
        				nSlipMax = temp;
        			}
        		}
        	}

        	this.dsData.setColumn(nrow, "NO_TRADE"	 , nTradeMax);
        	this.dsData.setColumn(nrow, "NO_SLIP"	 , Number(nSlipMax)+1);
        	this.dsData.setColumn(nrow, "TY_TRADE_IO", "C");	//대체거래

        	this.gfnSetFormStatus(this, "I");
        	this.dsData.set_enableevent(true);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.fnSaveValidation()) return;
        	//if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	var status = this.gfnGetFormStatus(this);

        	if (status == "I") {
        		var nrow = this.dsInsert.addRow();
        		this.dsInsert.setColumn(nrow, "CD_AUTOSLIP", this.dsSearch.getColumn(0, "CD_AUTOSLIP"));
        		this.dsInsert.setColumn(nrow, "NO_TRADE"   , this.dsData.getColumn(0, "NO_TRADE"));
        		this.dsInsert.setColumn(nrow, "NO_SLIP"    , this.dsData.getColumn(0, "NO_SLIP"));
        		this.dsInsert.setColumn(nrow, "TY_TRADE_IO", this.dsData.getColumn(0, "TY_TRADE_IO"));
        		this.dsInsert.setColumn(nrow, "YN_COST"    , this.dsData.getColumn(0, "YN_COST"));
        		this.dsInsert.setColumn(nrow, "CD_ACCOUNT" , this.dsData.getColumn(0, "CD_ACCOUNT"));
        		this.dsInsert.setColumn(nrow, "TY_CRDR"    , this.dsData.getColumn(0, "TY_CRDR") == "차변" ? "D" : "C");
        		this.dsInsert.setColumn(nrow, "DS_AMOUNT"  , this.dsData.getColumn(0, "DS_AMOUNT"));
        		this.dsInsert.setColumn(nrow, "ID_SABUN"   , this.AuthClient.ID_USER);
        	}
        	else if (status == "U") {
        		var nrow = this.dsUpdate.addRow();
        		this.dsUpdate.setColumn(nrow, "CD_AUTOSLIP"	, this.dsSearch.getColumn(0, "CD_AUTOSLIP"));
        		this.dsUpdate.setColumn(nrow, "NO_TRADE"	, this.dsData.getColumn(0, "NO_TRADE"));
        		this.dsUpdate.setColumn(nrow, "NO_SLIP_KEY"	, this.dsData.getColumn(0, "NO_SLIP_KEY"));
        		this.dsUpdate.setColumn(nrow, "NO_SLIP"		, this.dsData.getColumn(0, "NO_SLIP"));
        		this.dsUpdate.setColumn(nrow, "TY_TRADE_IO" , this.dsData.getColumn(0, "TY_TRADE_IO"));
        		this.dsUpdate.setColumn(nrow, "YN_COST"		, this.dsData.getColumn(0, "YN_COST"));
        		this.dsUpdate.setColumn(nrow, "CD_ACCOUNT"	, this.dsData.getColumn(0, "CD_ACCOUNT"));
        		this.dsUpdate.setColumn(nrow, "TY_CRDR"		, this.dsData.getColumn(0, "TY_CRDR") == "차변" ? "D" : "C");
        		this.dsUpdate.setColumn(nrow, "DS_AMOUNT"	, this.dsData.getColumn(0, "DS_AMOUNT"));
        		this.dsUpdate.setColumn(nrow, "ID_SABUN"	, this.AuthClient.ID_USER);
        	}
        	else if (status == "D") {
        		for (var i = this.dsList.rowcount - 1; i >= 0; i--) {
        			var flag = this.gfnGetFlag(this.dsList, i);
        			if (flag == "D") {
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_AUTOSLIP", this.dsSearch.getColumn(0, "CD_AUTOSLIP"));
        				this.dsDelete.setColumn(nrow, "NO_TRADE"   , this.dsList.getColumn(i, "NO_TRADE"));
        				this.dsDelete.setColumn(nrow, "NO_SLIP"    , this.dsList.getColumn(i, "NO_SLIP"));
        			}
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

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

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_AUTOSLIP"))) {
        		this.ctxtCD_AUTOSLIP.setFocus();
        		this.gfnAlert("자동전표코드를 입력하세요.");
        		return false;
        	}

        	return true;
        };

        /*
         *	저장 Validate
         */
        this.fnSaveValidation = function() {
        	var validate = true;
        	var msg = "";

        	if (this.gfnIsNull(this.dsData.getColumn(0, "NO_TRADE"))) {
        		msg += "거래순번은 반드시 입력하셔야 합니다.\n";
        		validate = false;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "NO_SLIP"))) {
        		msg += "전표순번은 반드시 입력하셔야 합니다.\n";
        		validate = false;
        	}

        	if (this.dsList.rowcount > 0) {
        		if (this.dsData.getColumn(0, "TY_TRADE_IO") != this.dsList.getColumn(this.dsList.rowposition, "TY_TRADE_IO")) {
        			msg += "한 거래의 거래구분은 동일해야 합니다.\n";
        			validate = false;
        		}
        	}

        	if (this.gfnTrim(this.dsData.getColumn(0, "CD_ACCOUNT")) == "") {
        		if (this.dsData.getColumn(0, "YN_COST") == "Y")
        			msg += "원가코드는 반드시 입력하셔야 합니다.\n";
        		else
        			msg += "계정코드는 반드시 입력하셔야 합니다.\n";
        		validate = false;
        	}

        	if (this.gfnTrim(this.dsData.getColumn(0, "DS_AMOUNT")) == "") {
        		msg += "회계금액 명칭은 반드시 입력하셔야 합니다.\n";
        		validate = false;
        	}

        	if (this.dsData.getColumn(0, "TY_CRDR") == "") {
        		msg += "차대구분을 반드시 선택하셔야 합니다.\n";
        		validate = false;
        	}

        	if (!validate) {
        		this.gfnAlert(msg);
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "select") {
        		if (this.dxGrid.oldrow < 0)
        			this.dxGrid.setCellPos(0, 0);
        		else
        			this.gfnGridAfterSelect(this.dxGrid);

        		this.txtNO_TRADE.set_readonly(true);
        		this.txtNO_SLIP.set_readonly(true);

        		if (this.dxGrid.rowcount > 0) {
        			this.btnDetail.set_enable(true);
        		} else {
        			this.btnDetail.set_enable(false);
        		}

        	} else if(svcID == "save") {
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
        	if (id == "cfCD_ACCOUNT") {
        		if (this.dsData.getColumn(0, "YN_COST") == "N") {
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		}
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "cfCD_ACCOUNT") {
        		var ds = "";
        		if (this.dsData.getColumn(0, "YN_COST") == "Y")
        			ds = "DS_BIMOK";
        		else
        			ds = "DS_ACCOUNT";

        		this.dsData.setColumn(0, "DS_AMOUNT", codeFindData[0][ds])
        		if (this.dsData.getColumn(0, "YN_COST") == "Y") {
        			this.dsData.setcolumn(0, "TY_CRDR", "차변");
        		}
        		else {

        			this.dsData.setColumn(0, "TY_CRDR", codeFindData[0]["TY_DCO"] == "D" ? "차변" : "대변");
        		}

        		this.txtDS_AMOUNT.setFocus()
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e) {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.dsData.clearData();
        		this.dsData.addRow();
        		this.dsData.copyRow(0, this.dsList, e.row);

        		if (this.dsData.getColumn(0, "YN_COST") == "Y") {
        			this.sta08.set_text("원가코드");
        			this.cfCD_ACCOUNT.CodeFindName = "DHX_CFBIMOK";
        		}
        		else {
        			this.sta08.set_text("계정코드");
        			this.cfCD_ACCOUNT.CodeFindName = "DHX_CFACNT_YNSLIP";
        		}

        		this.txtNO_TRADE.set_readonly(true);
        		this.txtNO_SLIP.set_readonly(true);

        		var flag = this.gfnGetFlag(this.dsList, e.oldrow);
        		if (flag == "U" || flag == "D") {
        			this.dsList.setColumn(e.oldrow, "nx_flag", "");
        		}
        		this.gfnSetFormStatus(this, "Q");


        		obj.oldrow = -1;
        	}
        };


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsData_oncolumnchanged = function(obj,e) {
        	switch (e.columnid) {
        		case "NO_TRADE":

        			if (!isNumber(e.newvalue)) {
        				this.gfnAlert("거래순번은 숫자로 입력하셔야 합니다.");
        				return;
        			}

        			var nTradeMax = 1;
        			var nSlipMax = 0;
        			var temp = 0;

        			if (e.newvalue == "0" || e.newvalue == "") {
        				for (i = 0; i < this.dsList.rowcount; i++) {
        					temp = this.dsList.getColumn(i, "NO_TRADE");
        					if (Number(temp) > Number(nTradeMax)) {
        						nTradeMax = temp;
        					}
        				}
        				this.dsData.setColumn(e.row, "NO_TRADE", nTradeMax);
        			}
        			else {
        				nTradeMax = e.newvalue;
        			}

        			if (this.dsList.rowcount > 0) {
        				for (i = 0; i < this.dsList.rowcount; i++) {
        					temp = this.dsList.getColumn(i, "NO_SLIP");
        					if (nTradeMax == this.dsList.getColumn(i, "NO_SLIP") && Number(temp) > Number(nSlipMax)) {
        						nSlipMax = temp;
        					}
        				}
        			}
        			this.dsData.setColumn(e.row, "NO_SLIP", Number(nSlipMax)+1);

        			if (this.dsList.rowcount > 0) {
        				for (i = 0; i < this.dsList.rowcount; i++) {
        					if (Number(this.dsList.getColumn(i, "NO_TRADE")) == Number(nTradeMax)
        					&& Number(this.dsList.getColumn(i, "NO_SLIP")) == Number(nSlipMax)) {
        						for (j = 0; j < this.dsList.rowcount; j++) {
        							if (Number(this.dsList.getColumn(j, "NO_TRADE")) == Number(nTradeMax)
        							&& Number(this.dsList.getColumn(j, "NO_SLIP")) > Number(nSlipMax)) {
        								nSlipMax = this.dsList.getColumn(j, "NO_SLIP");
        							}
        						}

        						this.dsData.setColumn(e.row, "NO_SLIP", Number(nSlipMax)+1);
        						return;
        					}
        				}
        			}

        			if (this.gfnGetFormStatus(this) != "I") {
        				this.gfnSetFormStatus(this, "U");
        				this.dsList.setColumn(this.dsList.rowposition, "nx_flag", "U");
        			}
        			break;

        		case "YN_COST":
        			if (e.newvalue == "Y") {
        				this.sta08.set_text("원가코드");
        				this.cfCD_ACCOUNT.CodeFindName = "DHX_CFBIMOK";
        			}
        			else {
        				this.sta08.set_text("계정코드");
        				this.cfCD_ACCOUNT.CodeFindName = "DHX_CFACNT_YNSLIP";
        			}
        			this.dsData.setColumn(e.row, "CD_ACCOUNT", "");
        			this.dsData.setColumn(e.row, "DS_ACCOUNT", "");

        			if (this.gfnGetFormStatus(this) != "I") {
        				this.gfnSetFormStatus(this, "U");
        				this.dsList.setColumn(this.dsList.rowposition, "nx_flag", "U");
        			}
        			break;
        		case "NO_SLIP":
        		case "CD_ACCOUNT":
        		case "TY_CRDR":
        		case "TY_TRADE_IO":
        		case "DS_AMOUNT":
        			if (this.gfnGetFormStatus(this) != "I") {
        				this.gfnSetFormStatus(this, "U");
        				this.dsList.setColumn(this.dsList.rowposition, "nx_flag", "U");
        			}
        			break;
        	}
        }

        this.fnDetail = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};

        	param.CD_AUTOSLIP = this.gfnTrim(this.dsSearch.getColumn(0, "CD_AUTOSLIP"))
        	param.DS_AUTOSLIP = this.gfnTrim(this.dsSearch.getColumn(0, "DS_AUTOSLIP"))

        	this.gfnFormOpen("DHZ", "DHZ_JOURNALINFO", "", param);

        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsTRADE_IO.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
            this.dsData.addEventHandler("oncolumnchanged",this.dsData_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHZ_JOURNAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
