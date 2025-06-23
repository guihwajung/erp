(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DRB_COUNSEL");
            this.set_titletext("계약자SMS송신");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SMS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_USER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListDs", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListNo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListGrid", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsgDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PREVIEW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PREVIEW\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLZPR_SMS_LIST_BECCO</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRZPR_SMSTRAN_INSERT</Col></Row><Row><Col id=\"TARGET\">select_ds</Col><Col id=\"SP\">DRAPR_OFFICEPHONE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPOSE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DIV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SMS", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">약정구분별메세지</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">메세지편집</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PAY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">기타</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">납부안내</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">납부확인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DIV", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">정상</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">미수</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사업지코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","339","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_CODEFIND");
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("0");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_PAY","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_PAY","staTY_PAY:0.0","10.0","255","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsTY_PAY");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.getSetter("onvaluechanged").set("dsSearch_onvaluechanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_DIV","rdoTY_PAY:0.0","10.0","255","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsTY_DIV");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PERIOD","0.0","staCD_ACNTUNIT:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("기간");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staCD_PERIOD:0.0","staCD_ACNTUNIT:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_PERIOD_TIL","ctclDT_FROM:0.0","staCD_ACNTUNIT:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_PERIOD_TIL:0.0","staCD_ACNTUNIT:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_IMPOSE","ctclDT_TO:0.0","staCD_ACNTUNIT:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("부과년월");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPOSE","staYM_IMPOSE:0.0","staCD_ACNTUNIT:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSMS","0","divSearch:10","100%","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("SMS 송신");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitterTop","0","divSearch:35","100.00%","5",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","divSplitterTop:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","5","25.00%",null,null,"0","300",null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_SMS","1","2","97","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("9");
            obj.set_text("발송메시지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgTY_SMS","staTY_SMS:-1","2",null,"30","0",null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Radio("rdoTY_SMS","staTY_SMS:10","staBgTY_SMS:-25","250","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_SMS");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.getSetter("onvaluechanged").set("dsList_onvaluechanged");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDS_USER","1","staTY_SMS:-1","97","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("11");
            obj.set_text("송신자명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgDS_USER","staDS_USER:-1","staBgTY_SMS:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Edit("txtDS_USER","staDS_USER:10","staBgDS_USER:-25","250","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("5");
            obj.set_value("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","1","staDS_USER:-1","97","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("13");
            obj.set_text("송신자번호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgNO_TEL","staNO_TEL:-1","staBgDS_USER:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL","staNO_TEL:10","staBgNO_TEL:-25","250","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("5");
            obj.set_value("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staMessage","1","staNO_TEL:-1","97",null,null,"0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("18");
            obj.set_text("메세지작성창");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgMessage","staMessage:-1","staBgNO_TEL:-1",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new TextArea("txtMESSAGE","staMessage:10","staBgNO_TEL:5","250",null,null,"10",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_maxlength("1000");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataCenter","divDataLeft:10","5","73.00%",null,null,"0","300",null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDivSelect","0","0","70","25",null,null,null,null,null,null,this.divData.form.divDataCenter.form);
            obj.set_taborder("1");
            obj.set_text("☞부분선택");
            this.divData.form.divDataCenter.addChild(obj.name, obj);

            obj = new Button("btnDivCancel","btnDivSelect:10","0","70","25",null,null,null,null,null,null,this.divData.form.divDataCenter.form);
            obj.set_taborder("1");
            obj.set_text("☞부분해제");
            this.divData.form.divDataCenter.addChild(obj.name, obj);

            obj = new Button("btnDivDelete","btnDivCancel:10","0","70","25",null,null,null,null,null,null,this.divData.form.divDataCenter.form);
            obj.set_taborder("1");
            obj.set_text("☞부분삭제");
            this.divData.form.divDataCenter.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","btnDivSelect:5","100.00%",null,null,"0",null,null,null,null,this.divData.form.divDataCenter.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataCenter.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item00","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item01","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item02","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item03","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item04","divSearch.form.ctclYM_IMPOSE.form.TextBox","value","dsSearch","YM_IMPOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item05","divSearch.form.rdoTY_PAY","value","dsSearch","TY_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item06","divSearch.form.rdoTY_DIV","value","dsSearch","TY_DIV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item08","divData.form.divDataLeft.form.rdoTY_SMS","value","dsList","TY_SMS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item09","divData.form.divDataLeft.form.txtDS_USER","value","dsList","DS_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataLeft.form.txtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataLeft.form.txtMESSAGE","value","dsList","MESSAGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DLC_SENDSMS.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_ACNTUNIT)){
        		this.dsSearch.setColumn(0, "CD_ACNTUNIT", 	 this.getOwnerFrame().CD_ACNTUNIT);
        		this.dsSearch.setColumn(0, "DS_ACNTUNIT", 	 this.getOwnerFrame().DS_ACNTUNIT);
        		this.FormBtns.Select.click();
        	};

        	this.dsSearch.setColumn(0, "DT_FROM", 	 this.gfnGetDate().substr(0,6) + "01");
        	this.dsSearch.setColumn(0, "DT_TO", 	 this.gfnGetDate());
        	this.dsSearch.setColumn(0, "YM_IMPOSE",  this.gfnGetDate().substr(0,6));

        	this.dsSearch.setColumn(0, "TY_PAY", "3");
        	this.dsSearch.setColumn(0, "TY_DIV", "1");
        };

        /************************************************************************
        * 버튼 설정 : 화면(Tab) 전환시 마다 호출
        ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
        * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
        ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.SMSEND = this.gfnFormButtonAdd("btnSMSEND", "fnSMSEND");
        	this.SENDRESULT = this.gfnFormButtonAdd("btnSENDRESULT", "fnSENDRESULT");
        };

        /************************************************************************
        * 변수 선언
        ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.dxGrid  	    = this.divData.form.divDataCenter.form.objGrid;
        };

        /************************************************************************
        * 이벤트 설정
        ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsListGrid, "DL", "DLC_SENDSMS");
        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        }
        /************************************************************************
        * 파라미터 설정
        ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("TY_PAY", "string");
        	this.dsSelect.addColumn("TY_DIV", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_HO", "string");

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect2.addColumn("TY_GUBUN", "string");
        	this.dsSelect2.addColumn("NO_CHASU", "string");
        	this.dsSelect2.addColumn("ID_SABUN", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("TRAN_PHONE", "string");
        	this.dsInsert.addColumn("TRAN_CALLBACK", "string");
        	this.dsInsert.addColumn("TRAN_USER", "string");
        	this.dsInsert.addColumn("TRAN_DESC", "string");
        	this.dsInsert.addColumn("TRAN_MSG", "string");
        	this.dsInsert.addColumn("CD_MODULE", "string");
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
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

        	//납부안내
        	if(this.dsSearch.getColumn(0, "TY_PAY") == "1"){
         		this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "YM_IMPOSE"));
        		this.dsSelect.setColumn(0, "DT_TO", "");
        	}else if(this.dsSearch.getColumn(0, "TY_PAY") == "2"){
        		if(this.dsSearch.getColumn(0, "TV_DIV") == "1"){
        			this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        			this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        		}else if(this.dsSearch.getColumn(0, "TV_DIV") == "2"){
        			this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "YM_IMPOSE"));
        			this.dsSelect.setColumn(0, "DT_TO", "");
        		}
        	}else if(this.dsSearch.getColumn(0, "TY_PAY") == "3"){
        			this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        			this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	}
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "TY_PAY", this.dsSearch.getColumn(0, "TY_PAY"));
        	this.dsSelect.setColumn(0, "TY_DIV", this.dsSearch.getColumn(0, "TY_DIV"));
        	this.dsSelect.setColumn(0, "NO_DONG", "");
        	this.dsSelect.setColumn(0, "NO_HO", "");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsListGrid=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        		strSvcType , 	// transaction을 요청할 구분
        		inProc,			// Procedure 정보 Dataset 이름
        		inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        		callBackFnc); 	// 통신방법 정의 [생략가능]
        };



        /*
        *	입력 버튼
        */
        this.fnAdd = function() {
        };

        /*
        *	삭제 버튼
        */
        this.fnDel = function() {
        };

        /*
        *	저장 버튼
        */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsInsert.clearData();

        	var smsMsg = "";
        	var nRow = this.dsListGrid.rowposition;

        	if(this.dsList.getColumn(0, "TY_SMS") == "1"){
        		if(this.dsList.getColumn(0, "TY_PAY") == "1"){	// 납부안내
        			var smsMsg0 = this.dsListGrid.getColumn(nRow, "DS_CONTRACTOR");
        			var smsMsg1 = this.dsListGrid.getColumn(nRow, "NO_DONG") + "동" + this.dsListGrid.getColumn(nRow, "NO_FLOORHO") + "호";
        			var smsMsg2 = this.dsSearch.getColumn(0, "YM_IMPOSE");
        			var smsMsg3 = this.dsListGrid.getColumn(nRow, "AM_INLEASE_TOTAL");

        			smsMsg = "[" + smsMsg0 + "님] " + smsMsg1 + " " + smsMsg2 + "월분 납부하실 금액은 " + smsMsg3 + "원입니다.";
        			//"[{0}님] {1} {2}월분 납부하실 금액은 {3}원입니다."
        		}else if(this.dsList.getColumn(0, "TY_PAY") == "2"){	// 납부확인
        			if(this.dsList.getColumn(0, "TY_DIV") == "1"){	// 정상
        				var smsMsg0 = this.dsListGrid.getColumn(nRow, "DS_CONTRACTOR");
        				var smsMsg1 = this.dsListGrid.getColumn(nRow, "NO_DONG") + "동" + this.dsListGrid.getColumn(nRow, "NO_FLOORHO") + "호";
        				var smsMsg2 = this.dsListGrid.getColumn(nRow, "DT_STARTAGREE");
        				var smsMsg3 = this.dsListGrid.getColumn(nRow, "AM_INLEASE_TOTAL");

        				smsMsg = "[" + smsMsg0 + "님] " + smsMsg1 + " " + smsMsg2 + "일자 " + smsMsg3 + "원 납부확인되었습니다.";
        				//"[{0}님] {1} {2}일자 {3}원 납부확인되었습니다."
        			}else{
        				var smsMsg0 = this.dsListGrid.getColumn(nRow, "DS_CONTRACTOR");
        				var smsMsg1 = this.dsListGrid.getColumn(nRow, "NO_DONG") + "동" + this.dsListGrid.getColumn(nRow, "NO_FLOORHO") + "호";
        				var smsMsg2 = this.dsSearch.getColumn(0, "YM_IMPOSE") + "-01";
        				var smsMsg3 = this.dsListGrid.getColumn(nRow, "AM_INLEASE_TOTAL");

        				smsMsg = "[" + smsMsg0 + "님] " + smsMsg1 + " " + smsMsg2 + "기준 총미납금액은 " + smsMsg3 + "원입니다.";
        				//"[{0}님] {1} {2}기준 총미납금액은 {3}원입니다."
        			}
        		}else{	// 기타
        			var smsMsg0 = this.dsListGrid.getColumn(nRow, "AM_INLEASE_TOTAL");
        			var smsMsg1 = this.dsListGrid.getColumn(nRow, "DT_IN");
        			var smsMsg2 = this.dsList.getColumn(0, "DS_USER");

        			smsMsg = "납부하실 계좌는 " + smsMsg0 + " " + smsMsg1 + " " + smsMsg2 + "입니다. 감사합니다.";
        			//"납부하실 계좌는 {0} {1} {2}입니다. 감사합니다."
        		}
        	}else{
        		smsMsg = this.dsList.getColumn(0, "MESSAGE");
        	}

        	for (var i = 0; i < this.dsListGrid.rowcount; i++) {
        		var flag = this.dsListGrid.getColumn(i,"CHK")

        		switch(flag) {
        		case 1:
        			var nrow = this.dsInsert.addRow();
        			this.dsInsert.setColumn(nrow, "TRAN_PHONE", nexacro.replaceAll(this.gfnNvl(this.dsListGrid.getColumn(i, "NO_MOBILE"),""), "-", ""));
        			this.dsInsert.setColumn(nrow, "TRAN_CALLBACK", this.dsList.getColumn(0, "NO_TEL"));
        			this.dsInsert.setColumn(nrow, "TRAN_USER", this.dsList.getColumn(0, "DS_USER"));
        			this.dsInsert.setColumn(nrow, "TRAN_DESC", "");
        			this.dsInsert.setColumn(nrow, "TRAN_MSG", smsMsg);
        			this.dsInsert.setColumn(nrow, "CD_MODULE", this.FormInfo.CD_MODULE.substr(0, 2));
        			this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        			this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        			break;
        		}
        	}
        	if (this.dsInsert.rowcount == 0) return;

        	var strSvcId    = "save";
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
        		strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        		callBackFnc); // 통신방법 정의 [생략가능]
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
        }


        /************************************************************************
        * Validate
        ************************************************************************/
        /*
        *	조회 Validate
        */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))){
        		this.gfnAlert("사업지코드를 입력해주세요.");
        		this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		validate = false;
        	}
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) || this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))){
        		this.gfnAlert("기준일자를 입력해주세요.");
        		this.divSearch.form.ctclDT_FROM.setFocus();
        		validate = false;
        	}
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) || this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))){
        		this.gfnAlert("부과년월을 입력해주세요.");
        		this.divSearch.form.ctclYM_IMPOSE.setFocus();
        		validate = false;
        	}
        	return validate;
        };


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
        	} else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.fnSMS_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("SMS 송신이 완료 되었습니다.", "fnSMS_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "selectDs"){
        		this.dsList.clearData();
        		this.dsList.addRow();

        		this.dsList.setColumn(0, "TY_DIV", "1");
        		this.dsList.setColumn(0, "TY_PAY", "3");
        		this.dsList.setColumn(0, "TY_SMS", "2");

        		if(this.dsListDs.rowcount > 0){
        			this.dsList.setColumn(0, "DS_USER", this.dsListDs.getColumn(0, "DS_CORP"));
        			this.dsList.setColumn(0, "NO_TEL", this.dsListDs.getColumn(0, "DS_OFFICEPHONE"));
        		}
        	}
        }

        /************************************************************************
        * 코드파인드 이벤트
        ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 사업지코드
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "FLAG"         , "A");
        		dsUserParam.setColumn(nrow, "CD_DEPT"      , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER"      , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP"     , this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"	   , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_TOTALCHASU", "");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "ccfCD_ACNTUNIT") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			this.fnSelectDS();
        		}
        	}
        };
        /************************************************************************
        * 그리드 이벤트
        ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.fnGrdRowChg();
        		obj.oldrow = -1;
        	}
        };
        /************************************************************************
        * 기타 이벤트
        ************************************************************************/

        // 그리드 row 변경시 메시지 내용 자동 입력하기
        this.fnGrdRowChg = function() {
        	var smsMsg = "";
        	var nRow = this.dsListGrid.rowposition;

        	if(this.dsList.getColumn(0, "TY_SMS") == "1"){
        		if(this.dsList.getColumn(0, "TY_PAY") == "1"){	// 납부안내
        			var smsMsg0 = this.dsListGrid.getColumn(nRow, "DS_CONTRACTOR");
        			var smsMsg1 = this.dsListGrid.getColumn(nRow, "NO_DONG") + "동" + this.dsListGrid.getColumn(nRow, "NO_FLOORHO") + "호";
        			var smsMsg2 = this.dsSearch.getColumn(0, "YM_IMPOSE");
        			var smsMsg3 = this.dsListGrid.getColumn(nRow, "AM_INLEASE_TOTAL");

        			smsMsg = "[" + smsMsg0 + "님] " + smsMsg1 + " " + smsMsg2 + "월분 납부하실 금액은 " + smsMsg3 + "원입니다.";
        			//"[{0}님] {1} {2}월분 납부하실 금액은 {3}원입니다."
        		}else if(this.dsList.getColumn(0, "TY_PAY") == "2"){	// 납부확인
        			if(this.dsList.getColumn(0, "TY_DIV") == "1"){	// 정상
        				var smsMsg0 = this.dsListGrid.getColumn(nRow, "DS_CONTRACTOR");
        				var smsMsg1 = this.dsListGrid.getColumn(nRow, "NO_DONG") + "동" + this.dsListGrid.getColumn(nRow, "NO_FLOORHO") + "호";
        				var smsMsg2 = this.dsListGrid.getColumn(nRow, "DT_STARTAGREE");
        				var smsMsg3 = this.dsListGrid.getColumn(nRow, "AM_INLEASE_TOTAL");

        				smsMsg = "[" + smsMsg0 + "님] " + smsMsg1 + " " + smsMsg2 + "일자 " + smsMsg3 + "원 납부확인되었습니다.";
        				//"[{0}님] {1} {2}일자 {3}원 납부확인되었습니다."
        			}else{
        				var smsMsg0 = this.dsListGrid.getColumn(nRow, "DS_CONTRACTOR");
        				var smsMsg1 = this.dsListGrid.getColumn(nRow, "NO_DONG") + "동" + this.dsListGrid.getColumn(nRow, "NO_FLOORHO") + "호";
        				var smsMsg2 = this.dsSearch.getColumn(0, "YM_IMPOSE") + "-01";
        				var smsMsg3 = this.dsListGrid.getColumn(nRow, "AM_INLEASE_TOTAL");

        				smsMsg = "[" + smsMsg0 + "님] " + smsMsg1 + " " + smsMsg2 + "기준 총미납금액은 " + smsMsg3 + "원입니다.";
        				//"[{0}님] {1} {2}기준 총미납금액은 {3}원입니다."
        			}
        		}else{	// 기타
        			var smsMsg0 = this.dsListGrid.getColumn(nRow, "AM_INLEASE_TOTAL");
        			var smsMsg1 = this.dsListGrid.getColumn(nRow, "DT_IN");
        			var smsMsg2 = this.dsList.getColumn(0, "DS_USER");

        			smsMsg = "납부하실 계좌는 " + smsMsg0 + " " + smsMsg1 + " " + smsMsg2 + "입니다. 감사합니다.";
        			//"납부하실 계좌는 {0} {1} {2}입니다. 감사합니다."
        		}
        	}

        	this.dsList.setColumn(0, "MESSAGE", smsMsg);
        }


        this.fnSelectDS = function() {
        	//if (!this.fnSelectValidate()) return false;

        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect2.clearData();
        	this.dsSelect2.addRow();

        	this.dsSelect2.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect2.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect2.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect2.setColumn(0, "ID_SABUN", "");

        	var strSvcId    = "selectDs";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_ds=dsSelect2";
        	var outData     = "dsListDs=select_ds0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        		strSvcType , 	// transaction을 요청할 구분
        		inProc,			// Procedure 정보 Dataset 이름
        		inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        		callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.fnValidateCheck = function ()
        {
        	return true;
        };

        // SMS송신
        this.fnSMSEND = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsListGrid.rowcount < 1) { return false; }

        	var nChkRowCnt = this.dsListGrid.getCaseCount( "CHK == 1" );

        	if (nChkRowCnt <= 0){
        		this.gfnAlert("송신 자료를 선택하여 주십시오!");
        		return;
        	}else{
        		if(this.dsList.getColumn(0, "TY_SMS") == "2"){
        			if(this.gfnIsNull(this.dsList.getColumn(0, "MESSAGE"))){
        				this.gfnAlert("발송메세지 구분으로 메세지편집을 선택하셨습니다.\n메세지작성창에 내용을 입력해 주십시오.");
        				return;
        			}
        		}

        		if(this.gfnIsNull(this.dsList.getColumn(0, "DS_USER"))){
        			this.gfnAlert("송신자명을 입력하셔야 합니다.");
        			return;
        		}

        		if(this.gfnIsNull(this.dsList.getColumn(0, "NO_TEL"))){
        			this.gfnAlert("송신전화번호를 입력하셔야 합니다.");
        			return;
        		}

        		this.fnSave();
        	}

        };

        // 송신결과
        this.fnSENDRESULT = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	this.gfnFormOpen("DRB", "DRB_SMS_RESULT", "",  param);
        };

        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {

        		var colDT_STARTAGREE = this.dxGrid.getBindCellIndex("body", "DT_STARTAGREE");
        		var colDT_ENDAGREE = this.dxGrid.getBindCellIndex("body", "DT_ENDAGREE");
        		var colAM_INLEASE_TOTAL = this.dxGrid.getBindCellIndex("body", "AM_INLEASE_TOTAL");
        		var colDT_IN = this.dxGrid.getBindCellIndex("body", "DT_IN");

        		if(this.dsSearch.getColumn(0,"TY_PAY") == "1"){ // 납부안내
        			this.dsListGrid.clearData();

        			this.dxGrid.setRealColSize("body", colDT_STARTAGREE, 100);
        			this.dxGrid.setRealColSize("body", colDT_ENDAGREE, 100);
        			this.dxGrid.setRealColSize("body", colAM_INLEASE_TOTAL, 100);
        			this.dxGrid.setRealColSize("body", colDT_IN, 80);

        			this.dxGrid.setCellProperty("head", colDT_STARTAGREE, "text", "시작일");
        			this.dxGrid.setCellProperty("head", colAM_INLEASE_TOTAL, "text", "임대료");
        			this.dxGrid.setCellProperty("head", colDT_IN, "text", "납기내일자");


        			this.divSearch.form.rdoTY_DIV.set_visible(false);
        			this.divSearch.form.staYM_IMPOSE.set_visible(true);
        			this.divSearch.form.staCD_PERIOD.set_visible(false);
        			this.divSearch.form.ctclYM_IMPOSE.set_visible(true);

        			this.divSearch.form.ctclDT_FROM.set_visible(false);
        			this.divSearch.form.ctclDT_TO.set_visible(false);
        			this.divSearch.form.staDT_PERIOD_TIL.set_visible(false);

        			this.divData.form.divDataLeft.form.rdoTY_SMS.set_enable(true);
        			this.divData.form.divDataLeft.form.rdoTY_SMS.set_index(0);

        		}else if(this.dsSearch.getColumn(0,"TY_PAY") == "2"){//납부확인
        			this.dsListGrid.clearData();

        			this.dxGrid.setRealColSize("body", colDT_ENDAGREE, 0);
        			this.dxGrid.setRealColSize("body", colAM_INLEASE_TOTAL, 100);
        			this.dxGrid.setRealColSize("body", colDT_IN, 80);

        			this.dxGrid.setCellProperty("head", colDT_IN, "text", "납기내일자");

        			this.divSearch.form.rdoTY_DIV.set_visible(true);
        			this.divSearch.form.rdoTY_DIV.set_index(0);

        			if(this.dsSearch.getColumn(0,"TY_DIV") == "1"){
        				this.dxGrid.setRealColSize("body", colDT_STARTAGREE, 100);
        				this.dxGrid.setCellProperty("head", colDT_STARTAGREE, "text", "수납일자");
        				this.dxGrid.setCellProperty("head", colAM_INLEASE_TOTAL, "text", "입금액");


        				this.divSearch.form.staYM_IMPOSE.set_visible(false);	// 부과년월
        				this.divSearch.form.staCD_PERIOD.set_visible(true);		// 기간

        				this.divSearch.form.ctclDT_FROM.set_visible(true);
        				this.divSearch.form.staDT_PERIOD_TIL.set_visible(true);
        				this.divSearch.form.ctclDT_TO.set_visible(true);
        				this.divSearch.form.ctclDT_FROM.set_enable(true);
        				this.divSearch.form.ctclDT_TO.set_enable(true);

        				this.divSearch.form.ctclYM_IMPOSE.set_visible(false);
        			}else{
        				this.dxGrid.setRealColSize("body", colDT_STARTAGREE, 0);
        				this.dxGrid.setCellProperty("head", colAM_INLEASE_TOTAL, "text", "미수금");


        				this.divSearch.form.staYM_IMPOSE.set_visible(true);
        				this.divSearch.form.staCD_PERIOD.set_visible(false);

        				this.divSearch.form.ctclDT_FROM.set_visible(false);
        				this.divSearch.form.staDT_PERIOD_TIL.set_visible(false);
        				this.divSearch.form.ctclDT_TO.set_visible(false);

        				this.divSearch.form.ctclYM_IMPOSE.set_visible(true);
        			}
        		}else if(this.dsSearch.getColumn(0,"TY_PAY") == "3"){	// 기타
        			this.dsListGrid.clearData();

        			this.dxGrid.setRealColSize("body", colDT_STARTAGREE, 0);
        			this.dxGrid.setRealColSize("body", colDT_ENDAGREE, 0);
        			this.dxGrid.setRealColSize("body", colAM_INLEASE_TOTAL, 0);
        			this.dxGrid.setRealColSize("body", colDT_IN, 0);


        			this.divSearch.form.rdoTY_DIV.set_visible(false);
        			this.divSearch.form.staYM_IMPOSE.set_visible(false);
        			this.divSearch.form.staCD_PERIOD.set_visible(true);

        			this.divSearch.form.ctclYM_IMPOSE.set_visible(false);
        			this.divSearch.form.ctclDT_FROM.set_visible(true);
        			this.divSearch.form.staDT_PERIOD_TIL.set_visible(true);
        			this.divSearch.form.ctclDT_TO.set_visible(true);

        			this.divSearch.form.ctclDT_FROM.set_enable(false);
        			this.divSearch.form.ctclDT_TO.set_enable(false);

        			this.divData.form.divDataLeft.form.rdoTY_SMS.set_index(1);
        			this.divData.form.divDataLeft.form.rdoTY_SMS.set_enable(true);
        		}
        	}
        };


        this.dsList_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		if(e.columnid == "TY_SMS"){	// 구분
        			if(this.dsList.getColumn(0,"TY_SMS") == "1"){
        				this.dsList.setColumn(0, "MESSAGE", "");
        				this.divData.form.divDataLeft.form.txtMESSAGE.set_readonly(true);
        				this.divData.form.divDataLeft.form.txtMESSAGE.set_enable(false);
        			}else{
        				this.dsList.setColumn(0, "MESSAGE", "");
        				this.divData.form.divDataLeft.form.txtMESSAGE.set_readonly(false);
        				this.divData.form.divDataLeft.form.txtMESSAGE.set_enable(true);
        			}
        		}
        	}
        };

        // 부분선택
        this.divData_divDataCenter_btnDivSelect_onclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var rows = this.dxGrid.getSelectedDatasetRows();
        	for(var r = 0; r < rows.length; r++) {
        		this.dsListGrid.setColumn(rows[r], "CHK", 1);
        	}
        };

        // 부분해제
        this.divData_divDataCenter_btnDivCancel_onclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var rows = this.dxGrid.getSelectedDatasetRows();
        	for(var r = 0; r < rows.length; r++) {
        		this.dsListGrid.setColumn(rows[r], "CHK", 0);
        	}
        };

        // 부분삭제
        this.divData_divDataCenter_btnDivDelete_onclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	this.dsListGrid.deleteMultiRows(this.dxGrid.getSelectedDatasetRows());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSplitterTop.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divDataCenter.form.btnDivSelect.addEventHandler("onclick",this.divData_divDataCenter_btnDivSelect_onclick,this);
            this.divData.form.divDataCenter.form.btnDivCancel.addEventHandler("onclick",this.divData_divDataCenter_btnDivCancel_onclick,this);
            this.divData.form.divDataCenter.form.btnDivDelete.addEventHandler("onclick",this.divData_divDataCenter_btnDivDelete_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLC_SENDSMS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
