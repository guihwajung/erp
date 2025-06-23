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
            obj._setContents("<ColumnInfo><Column id=\"TY_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SMS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_USER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRZPR_SMS_LIST_BECCO</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DZZPR_SMS_SEND3</Col></Row><Row><Col id=\"TARGET\">select_ds</Col><Col id=\"SP\">DRAPR_BUNYANG_SELECT</Col></Row><Row><Col id=\"TARGET\">select_no</Col><Col id=\"SP\">DRAPR_REFTEL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DEPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">기타</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">납부안내</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">납부확인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SMS", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">약정구분별메세지</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">메세지편집</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DIV", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">정상</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">미수</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
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
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT_SMS");
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("0");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PERIOD","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staCD_PERIOD:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_PERIOD_TIL","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_PERIOD_TIL:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSMS","0","divSearch:10","76.56%","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("SMS 송신");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staSMSDETAIL",null,"55","301","22","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("메세지상세");
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

            obj = new Div("divDataLeft","0","5","430",null,null,"0","300",null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_DEPT","1","2","97","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("3");
            obj.set_text("구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgTY_DEPT","staTY_DEPT:-1","2",null,"30","0",null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Radio("rdoTY_PAY","staTY_DEPT:10","staBgTY_DEPT:-25","212","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsTY_DEPT");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_text("기타");
            obj.set_value("3");
            obj.set_index("0");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staTY_SMS","1","staTY_DEPT:-1","97","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("5");
            obj.set_text("발송메시지");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgTY_SMS","staTY_SMS:-1","staBgTY_DEPT:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Radio("rdoTY_SMS","staTY_SMS:10","staBgTY_SMS:-25","250","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_SMS");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_text("메세지편집");
            obj.set_value("2");
            obj.set_index("1");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDS_USER","1","staTY_SMS:-1","97","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("7");
            obj.set_text("송신자명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgDS_USER","staDS_USER:-1","staBgTY_SMS:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("(주)굿센");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","1","staDS_USER:-1","97","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("9");
            obj.set_text("송신자번호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgNO_TEL","staNO_TEL:-1","staBgDS_USER:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("02-750-8000");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staMessage","1","staNO_TEL:-1","97",null,null,"0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("12");
            obj.set_text("메세지");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgMessage","staMessage:-1","staBgNO_TEL:-1",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new TextArea("txtMESSAGE","staMessage:10","126","312",null,null,"10",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_maxlength("1000");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Radio("rdoTY_DIV","328","7","102","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsTY_DIV");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            obj.set_text("정상");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight",null,"5","300",null,"0","0","300",null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtMessagePREVIEW","0","5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_maxlength("1000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataCenter","divDataLeft:10","5",null,null,"divDataRight:10","0","300",null,null,null,this.divData.form);
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
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataLeft.form.rdoTY_PAY","value","dsList","TY_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataLeft.form.rdoTY_SMS","value","dsList","TY_SMS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataLeft.form.txtMESSAGE","value","dsList","MESSAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.txtMessagePREVIEW","value","dsList","MESSAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataLeft.form.rdoTY_DIV","value","dsList","TY_DIV");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRB_SENDSMS.xfdl", function() {
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
        	this.dsSearch.setColumn(0, "DT_FROM", 	 this.gfnGetDate());
        	this.dsSearch.setColumn(0, "DT_TO", 	 this.gfnGetDate());
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
        	this.gfnGridInit(this.dxGrid, this.dsListGrid, "DR", "DRB_SENDSMS");
        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//this.dxGrid.set_selecttype("cell");

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

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("Title", "string");
        	this.dsInsert.addColumn("Content", "string");
        	this.dsInsert.addColumn("ToPhone", "string");
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
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "TY_PAY", this.dsList.getColumn(0, "TY_PAY"));
        	this.dsSelect.setColumn(0, "TY_DIV", this.dsList.getColumn(0, "TY_DIV"));
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
        			var smsMsg2 = this.dsListGrid.getColumn(nRow, "NO_NAPCHA");
        			var smsMsg3 = this.dsListGrid.getColumn(nRow, "TY_NAPIP");
        			var smsMsg4 = this.dsListGrid.getColumn(nRow, "DT_ENDAGREE");

        			smsMsg = "[" + smsMsg0 + "님] " + smsMsg1 + " " + smsMsg2 + smsMsg3 + "약정일이 " + smsMsg4 + "입니다.";
        		}else{
        			if(this.dsList.getColumn(0, "TY_DIV") == "1"){	// 정상
        				var smsMsg0 = this.dsListGrid.getColumn(nRow, "DS_CONTRACTOR");
        				var smsMsg1 = this.dsListGrid.getColumn(nRow, "NO_DONG") + "동" + this.dsListGrid.getColumn(nRow, "NO_FLOORHO") + "호";
        				var smsMsg2 = this.dsListGrid.getColumn(nRow, "DT_STARTAGREE");
        				var smsMsg3 = this.dsListGrid.getColumn(nRow, "AM_SELLING");

        				smsMsg = "[" + smsMsg0 + "님] " + smsMsg1 + " " + smsMsg2 + "일자 " + smsMsg3 + "원 납부확인되었습니다.";
        			}else{
        				var smsMsg0 = this.dsListGrid.getColumn(nRow, "DS_CONTRACTOR");
        				var smsMsg1 = this.dsListGrid.getColumn(nRow, "NO_DONG") + "동" + this.dsListGrid.getColumn(nRow, "NO_FLOORHO") + "호";
        				var smsMsg2 = this.dsSearch.getColumn(0, "DT_FROM");
        				var smsMsg3 = this.dsListGrid.getColumn(nRow, "AM_SELLING");

        				smsMsg = "[" + smsMsg0 + "님] " + smsMsg1 + " " + smsMsg2 + "기준 총미납금액은 " + smsMsg3 + "원입니다.";
        			}
        		}
        	}else{
        		smsMsg = this.dsList.getColumn(0, "MESSAGE");
        	}

        	for (var i = 0; i < this.dsListGrid.rowcount; i++) {
        		var flag = this.dsListGrid.getColumn(i,"CHK")

        		switch(flag) {
        		case 1:
        			var nrow = this.dsInsert.addRow();
        			this.dsInsert.setColumn(nrow, "Title", "");
        			this.dsInsert.setColumn(nrow, "Content", smsMsg);
        			this.dsInsert.setColumn(nrow, "ToPhone", nexacro.replaceAll(this.gfnNvl(this.dsListGrid.getColumn(i, "NO_MOBILE"),""), "-", "").trim());
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

        		this.fnTySmsSet();
        		this.fnTyPaySet();

        		if(this.dsListDs.rowcount > 0){
        			this.dsList.setColumn(0, "DS_USER", this.dsListDs.getColumn(0, "DS_CORP"));
        		}

        		if(this.dsListNo.rowcount > 0){
        			this.dsList.setColumn(0, "NO_TEL", this.dsListNo.getColumn(0, "CD_VALUE"));
        		}
        	}
        }

        /************************************************************************
        * 코드파인드 이벤트
        ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
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
        this.fnSelectDS = function() {
        	//if (!this.fnSelectValidate()) return false;

        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect2.clearData();
        	this.dsSelect2.addRow();

        	this.dsSelect2.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect2.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect2.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));

        	var strSvcId    = "selectDs";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_ds=dsSelect2 select_no=dsSelect2";
        	var outData     = "dsListDs=select_ds0 dsListNo=select_no0";
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

        this.fnSMSEND = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsListGrid.rowcount < 1) { return false; }

        	if (!this.fnSendValidate()) return false;

        	var nChkRowCnt = this.dsListGrid.getCaseCount( "CHK == 1" );
        	if (nChkRowCnt <= 0){
        		this.gfnAlert("송신 자료를 선택하여 주십시오!");
        		return;
        	}else{
        		this.fnSave();
        	}

        };
        this.fnSENDRESULT = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRB_SMS_RESULT", "",  param);
        };

        // 구분 설정
        this.fnTySmsSet = function() {
        	if(this.dsList.getColumn(0, "TY_SMS") == "1"){
        		this.dsList.setColumn(0, "MESSAGE", "");
        		this.divData.form.divDataLeft.form.txtMESSAGE.set_readonly(true);
        	}else{
        		this.dsList.setColumn(0, "MESSAGE", "");
        		this.divData.form.divDataLeft.form.txtMESSAGE.set_readonly(false);
        	}
        };

        // 발송메시지 설정
        this.fnTyPaySet = function() {
        	var colDT_STARTAGREE = this.dxGrid.getBindCellIndex("body", "DT_STARTAGREE");
        	var colDT_ENDAGREE = this.dxGrid.getBindCellIndex("body", "DT_ENDAGREE");
        	var colTY_NAPIP = this.dxGrid.getBindCellIndex("body", "TY_NAPIP");
        	var colNO_NAPCHA = this.dxGrid.getBindCellIndex("body", "NO_NAPCHA");
        	var colAM_SELLING = this.dxGrid.getBindCellIndex("body", "AM_SELLING");
        	var colDS_CONTRACTOR = this.dxGrid.getBindCellIndex("body", "DS_CONTRACTOR");
        	var colNO_DONG = this.dxGrid.getBindCellIndex("body", "NO_DONG");
        	var colNO_FLOORHO = this.dxGrid.getBindCellIndex("body", "NO_FLOORHO");
        	var colDS_EMAIL = this.dxGrid.getBindCellIndex("body", "DS_EMAIL");
        	var colCD_ACNTUNIT = this.dxGrid.getBindCellIndex("body", "CD_ACNTUNIT");
        	var colDS_ACNTUNIT = this.dxGrid.getBindCellIndex("body", "DS_ACNTUNIT");
        	var colNO_MOBILE = this.dxGrid.getBindCellIndex("body", "NO_MOBILE");

        	if(this.dsList.getColumn(0, "TY_PAY") == "1"){	// 납부안내
        		this.dsListGrid.clearData();

        		this.dxGrid.setRealColSize("body", colDT_STARTAGREE, 100);
        		this.dxGrid.setRealColSize("body", colDT_ENDAGREE, 100);
        		this.dxGrid.setRealColSize("body", colTY_NAPIP, 60);
        		this.dxGrid.setRealColSize("body", colNO_NAPCHA, 50);
        		this.dxGrid.setRealColSize("body", colAM_SELLING, 100);
        		this.dxGrid.setRealColSize("body", colDS_CONTRACTOR, 80);
        		this.dxGrid.setRealColSize("body", colNO_DONG, 50);
        		this.dxGrid.setRealColSize("body", colNO_FLOORHO, 50);
        		this.dxGrid.setRealColSize("body", colDS_EMAIL, 150);

        		this.dxGrid.setCellProperty("head", colDT_STARTAGREE, "text", "약정시작일");
        		this.dxGrid.setCellProperty("head", colAM_SELLING, "text", "약정금");
        		this.dxGrid.setCellProperty("head", colDT_ENDAGREE, "text", "약정종료일");
        		this.dxGrid.setCellProperty("head", colCD_ACNTUNIT, "text", "사업지코드");
        		this.dxGrid.setCellProperty("head", colDS_ACNTUNIT, "text", "사업지명");
        		this.dxGrid.setCellProperty("head", colTY_NAPIP, "text", "구분");
        		this.dxGrid.setCellProperty("head", colNO_MOBILE, "text", "핸드폰");

        		this.divData.form.divDataLeft.form.rdoTY_DIV.set_visible(false);
        		this.divSearch.form.ctclDT_FROM.set_readonly(false);
        		this.divSearch.form.ctclDT_TO.set_readonly(false);
        		this.dsList.setColumn(0, "TY_SMS", "1");
        		this.divData.form.divDataLeft.form.rdoTY_SMS.set_readonly(false);
        	}else if(this.dsList.getColumn(0, "TY_PAY") == "2"){	// 납부확인
        		this.dsListGrid.clearData();

        		this.dxGrid.setRealColSize("body", colDT_ENDAGREE, 0);
        		this.dxGrid.setRealColSize("body", colTY_NAPIP, 0);
        		this.dxGrid.setRealColSize("body", colNO_NAPCHA, 0);

        		if(this.dsList.getColumn(0, "TY_DIV") == "1"){	// 정상
        			this.dxGrid.setRealColSize("body", colDT_STARTAGREE, 100);
        			this.dxGrid.setCellProperty("head", colDT_STARTAGREE, "text", "수납일자");
        			this.dxGrid.setCellProperty("head", colAM_SELLING, "text", "입금액");
        		}else{	// 미수
        			this.dxGrid.setRealColSize("body", colDT_STARTAGREE, 0);
        			this.dxGrid.setCellProperty("head", colAM_SELLING, "text", "미수금");
        		}

        		this.dxGrid.setCellProperty("head", colDT_ENDAGREE, "text", "약정종료일");
        		this.dxGrid.setCellProperty("head", colCD_ACNTUNIT, "text", "사업지코드");
        		this.dxGrid.setCellProperty("head", colDS_ACNTUNIT, "text", "사업지명");
        		this.dxGrid.setCellProperty("head", colTY_NAPIP, "text", "구분");
        		this.dxGrid.setCellProperty("head", colNO_MOBILE, "text", "핸드폰");

        		this.dxGrid.setRealColSize("body", colAM_SELLING, 100);
        		this.dxGrid.setRealColSize("body", colDS_CONTRACTOR, 80);
        		this.dxGrid.setRealColSize("body", colNO_DONG, 50);
        		this.dxGrid.setRealColSize("body", colNO_FLOORHO, 50);
        		this.dxGrid.setRealColSize("body", colDS_EMAIL, 150);

        		this.divData.form.divDataLeft.form.rdoTY_DIV.set_visible(true);
        		this.divSearch.form.ctclDT_FROM.set_readonly(false);
        		this.divSearch.form.ctclDT_TO.set_readonly(false);
        		this.dsList.setColumn(0, "TY_SMS", "1");
        		this.divData.form.divDataLeft.form.rdoTY_SMS.set_readonly(false);
        	}else if(this.dsList.getColumn(0, "TY_PAY") == "3"){	// 기타
        		this.dsListGrid.clearData();

        		this.dxGrid.setRealColSize("body", colDT_STARTAGREE, 100);
        		this.dxGrid.setRealColSize("body", colDT_ENDAGREE, 0);
        		this.dxGrid.setRealColSize("body", colTY_NAPIP, 0);
        		this.dxGrid.setRealColSize("body", colNO_NAPCHA, 0);

        		this.dxGrid.setCellProperty("head", colDT_STARTAGREE, "text", "계약일자");
        		this.dxGrid.setCellProperty("head", colAM_SELLING, "text", "분양금");
        		this.dxGrid.setCellProperty("head", colDT_ENDAGREE, "text", "약정종료일");
        		this.dxGrid.setCellProperty("head", colCD_ACNTUNIT, "text", "사업지코드");
        		this.dxGrid.setCellProperty("head", colDS_ACNTUNIT, "text", "사업지명");
        		this.dxGrid.setCellProperty("head", colTY_NAPIP, "text", "구분");
        		this.dxGrid.setCellProperty("head", colNO_MOBILE, "text", "핸드폰");

        		this.dxGrid.setRealColSize("body", colAM_SELLING, 100);
        		this.dxGrid.setRealColSize("body", colDS_CONTRACTOR, 80);
        		this.dxGrid.setRealColSize("body", colNO_DONG, 50);
        		this.dxGrid.setRealColSize("body", colNO_FLOORHO, 50);
        		this.dxGrid.setRealColSize("body", colDS_EMAIL, 150);

        		this.divData.form.divDataLeft.form.rdoTY_DIV.set_visible(false);
        		this.divSearch.form.ctclDT_FROM.set_readonly(true);
        		this.divSearch.form.ctclDT_TO.set_readonly(true);
        		this.dsList.setColumn(0, "TY_SMS", "2");
        		this.divData.form.divDataLeft.form.rdoTY_SMS.set_readonly(true);
        	}
        };


        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		if(e.columnid == "TY_PAY"){	// 구분
        			this.fnTyPaySet();
        		}else if(e.columnid == "TY_SMS"){	// 발송메시지
        			this.fnTySmsSet();
        		}else if(e.columnid == "TY_DIV"){
        			this.fnTyPaySet();
        		}
        	}
        };


        // 그리드 row 변경시 메시지 내용 자동 입력하기
        this.fnGrdRowChg = function() {
        	var smsMsg = "";
        	var nRow = this.dsListGrid.rowposition;

        	if(this.dsList.getColumn(0, "TY_SMS") == "1"){
        		if(this.dsList.getColumn(0, "TY_PAY") == "1"){	// 납부안내
        			var smsMsg0 = this.dsListGrid.getColumn(nRow, "DS_CONTRACTOR");
        			var smsMsg1 = this.dsListGrid.getColumn(nRow, "NO_DONG") + "동" + this.dsListGrid.getColumn(nRow, "NO_FLOORHO") + "호";
        			var smsMsg2 = this.dsListGrid.getColumn(nRow, "NO_NAPCHA");
        			var smsMsg3 = this.dsListGrid.getColumn(nRow, "TY_NAPIP");
        			var smsMsg4 = this.dsListGrid.getColumn(nRow, "DT_ENDAGREE");

        			smsMsg = "[" + smsMsg0 + "님] " + smsMsg1 + " " + smsMsg2 + smsMsg3 + "약정일이 " + smsMsg4 + "입니다.";
        		}else{
        			if(this.dsList.getColumn(0, "TY_DIV") == "1"){	// 정상
        				var smsMsg0 = this.dsListGrid.getColumn(nRow, "DS_CONTRACTOR");
        				var smsMsg1 = this.dsListGrid.getColumn(nRow, "NO_DONG") + "동" + this.dsListGrid.getColumn(nRow, "NO_FLOORHO") + "호";
        				var smsMsg2 = this.dsListGrid.getColumn(nRow, "DT_STARTAGREE");
        				var smsMsg3 = this.dsListGrid.getColumn(nRow, "AM_SELLING");

        				smsMsg = "[" + smsMsg0 + "님] " + smsMsg1 + " " + smsMsg2 + "일자 " + smsMsg3 + "원 납부확인되었습니다.";
        			}else{
        				var smsMsg0 = this.dsListGrid.getColumn(nRow, "DS_CONTRACTOR");
        				var smsMsg1 = this.dsListGrid.getColumn(nRow, "NO_DONG") + "동" + this.dsListGrid.getColumn(nRow, "NO_FLOORHO") + "호";
        				var smsMsg2 = this.dsSearch.getColumn(0, "DT_FROM");
        				var smsMsg3 = this.dsListGrid.getColumn(nRow, "AM_SELLING");

        				smsMsg = "[" + smsMsg0 + "님] " + smsMsg1 + " " + smsMsg2 + "기준 총미납금액은 " + smsMsg3 + "원입니다.";
        			}
        		}
        	}

        	this.dsList.setColumn(0, "MESSAGE", smsMsg);
        }

        // sms 발송전 체크
        this.fnSendValidate = function() {
        	var validate = true;

        	if(this.dsList.getColumn(0, "TY_SMS") == "2"){
        		if(this.gfnIsNull(this.dsList.getColumn(0, "MESSAGE"))){
        			this.fnVaidateCallback = function() {
        				this.divData.form.divDataLeft.form.txtMESSAGE.setFocus();
        			}
        			this.gfnAlert("발송메시지 구분으로 메시지편집을 선택하셨습니다." + "\r\n" + "메시지작성창에 내용을 입력해 주십시오.", "fnVaidateCallback");

        			return false;
        		}
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DS_USER"))){
        		this.fnVaidateCallback = function() {
        			this.divData.form.divDataLeft.form.txtDS_USER.setFocus();
        		}
        		this.gfnAlert("송신자명을 입력하셔야 합니다.", "fnVaidateCallback");

        		return false;
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_TEL"))){
        		this.fnVaidateCallback = function() {
        			this.divData.form.divDataLeft.form.txtNO_TEL.setFocus();
        		}
        		this.gfnAlert("송신전화번호를 입력하셔야 합니다.", "fnVaidateCallback");

        		return false;
        	}

        	return validate;
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
        this.loadIncludeScript("DRB_SENDSMS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
