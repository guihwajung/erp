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


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select_single</Col><Col id=\"SP\">DLBPR_JEONGSAN_DEPOSIT_INFO_DETAIL</Col></Row><Row><Col id=\"TARGET\">select_napgi</Col><Col id=\"SP\">DLAPR_BASICINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLBPR_JEONGSAN_DEPOSIT_INFO</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DLCPR_RECEIVED_SELECT</Col></Row><Row><Col id=\"TARGET\">exec_cancel</Col><Col id=\"SP\">DLCPR_RECEIPT_CANCEL_SHINYOUNG</Col></Row><Row><Col id=\"TARGET\">exec_sunap_cancel</Col><Col id=\"SP\">DLCPR_LEASE_SUNAP_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NM_CONTRACTOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSingle", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_LEASE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LEASE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BUNYANGPLAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUNYANGGET\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_KASU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LEASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_APPROLEASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CK_LAW\" type=\"INT\" size=\"256\"/><Column id=\"CK_REMARK\" type=\"INT\" size=\"256\"/><Column id=\"YN_VACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListNapgi", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_NAPGI_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ACNTUNIT","ctxtCD_ACNTUNIT:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_DONG","ctxtDS_ACNTUNIT:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("동층호/성명");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staNO_DONG:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CONTRACTOR","ctxtNO_HO:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"300","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0",null,"30","6",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("보증금 내역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_LEASE","0","staTITLE:1","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_LEASE","staDT_LEASE:-1","staTITLE:1","250","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_BUNYANGPLAN","0","staDT_LEASE:-1","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("약정보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_BUNYANGPLAN","staDT_LEASE:-1","staBgDT_LEASE:-1","250","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_BUNYANGGET","staBgAM_BUNYANGPLAN:-1","staDT_LEASE:-1","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("수납보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_BUNYANGGET","staAM_BUNYANGGET:-1","staBgDT_LEASE:-1","250","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_KASU","staBgAM_BUNYANGGET:-1","staDT_LEASE:-1","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_text("예수금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_KASU","staAM_KASU:-1","staBgDT_LEASE:-1","250","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staAM_BUNYANGPLAN:1",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnReceiptCancel",null,"5","80","20","40",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_text("수납취소");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnDepositSunap",null,"5","80","20","btnReceiptCancel:20",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_text("보증금수납");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_LEASE_FR","staDT_LEASE:5","staTITLE:6","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_LEASE_range","ctxtDT_LEASE_FR:5","staTITLE:6","10","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_text("~");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_LEASE_TO","staDT_LEASE_range:5","staTITLE:6","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BUNYANGPLAN","staAM_BUNYANGPLAN:5","ctxtDT_LEASE_FR:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_format("#,#0");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BUNYANGGET","staAM_BUNYANGGET:5","ctxtDT_LEASE_FR:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_value("");
            obj.set_format("#,#0");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_KASU","staAM_KASU:5","ctxtDT_LEASE_FR:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_value("");
            obj.set_format("#,#0");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:10",null,null,"0","0",null,null,"300",null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0",null,"30","6",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("임대료 내역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staAM_LEASE","0","staTITLE:1","87","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("월임대료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staBgAM_LEASE","staAM_LEASE:-1","staTITLE:1","250","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staAM_APPROLEASE","staBgAM_LEASE:-1","staTITLE:1","87","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("3");
            obj.set_text("임대료예수금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staBgAM_APPROLEASE","staAM_APPROLEASE:-1","staTITLE:1","250","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new CheckBox("cchkMISU","staBgAM_APPROLEASE:60","staTITLE:6","60","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("5");
            obj.set_text("미수금");
            obj.set_value("Y");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new CheckBox("cchkLEASE","cchkMISU:10","staTITLE:6","70","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("6");
            obj.set_text("고지내역");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("Y");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new CheckBox("cchkSUNAP","cchkLEASE:10","staTITLE:6","70","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("7");
            obj.set_text("수납내역");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("Y");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","staAM_APPROLEASE:1",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnReceiptCancel2",null,"5","80","20","40",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("11");
            obj.set_text("수납취소");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnLeaseSunap",null,"5","80","20","btnReceiptCancel2:20",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("10");
            obj.set_text("임대료수납");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnIndiCan",null,"5","80","20","btnLeaseSunap:20",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("9");
            obj.set_text("부과취소");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnIndiImpose",null,"5","80","20","btnIndiCan:20",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("8");
            obj.set_text("임대료부과");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LEASE","staAM_LEASE:5","staTITLE:6","200","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_format("#,#0");
            obj.set_readonly("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_APPROLEASE","staAM_APPROLEASE:5","staTITLE:6","200","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_format("#,#0");
            obj.set_readonly("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_ACNTUNIT","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_ACNTUNIT","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtNM_CONTRACTOR","value","dsSearch","NM_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLB_TRANSDETAIL.xfdl", function() {
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

        	this.dsSearch.getColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsSearch.getColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        	this.dsSearch.getColumn(0, "NO_DONG", this.getOwnerFrame().DONG);
        	this.dsSearch.getColumn(0, "NO_FLOOR", this.getOwnerFrame().FLOOR);
        	this.dsSearch.getColumn(0, "NO_HO", this.getOwnerFrame().HO);
        	this.dsSearch.getColumn(0, "NM_CONTRACTOR", this.getOwnerFrame().CONTRACTOR);

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
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGrid1 = this.divData.form.divDataBottom.form.objGrid1;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLB_TRANSDETAIL");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DL", "DLC_IPJUMANAGE_01");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");

        	this.dsSelectNapgi = new Dataset();
        	this.dsSelectNapgi.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelectNapgi.addColumn("TY_GUBUN", "string");
        	this.dsSelectNapgi.addColumn("NO_CHASU", "string");

        	this.dsExecCancel = new Dataset();
        	this.dsExecCancel.addColumn("CD_ACNTUNIT", "string");
        	this.dsExecCancel.addColumn("TY_GUBUN", "string");
        	this.dsExecCancel.addColumn("NO_CHASU", "string");
        	this.dsExecCancel.addColumn("NO_DONG", "string");
        	this.dsExecCancel.addColumn("NO_FLOOR", "string");
        	this.dsExecCancel.addColumn("NO_HO", "string");
        	this.dsExecCancel.addColumn("NO_UNIONMEMBER", "string");
        	this.dsExecCancel.addColumn("TY_NAPIP", "string");
        	this.dsExecCancel.addColumn("NO_NAPIP", "string");
        	this.dsExecCancel.addColumn("NO_BUNNAP", "string");
        	this.dsExecCancel.addColumn("DT_RECEIPT", "string");
        	this.dsExecCancel.addColumn("DS_REMARK", "string");
        	this.dsExecCancel.addColumn("ID_INSERT", "string");

        	this.dsExecSunapCancel = new Dataset();
        	this.dsExecSunapCancel.addColumn("CD_ACNTUNIT", "string");
        	this.dsExecSunapCancel.addColumn("TY_GUBUN", "string");
        	this.dsExecSunapCancel.addColumn("NO_CHASU", "string");
        	this.dsExecSunapCancel.addColumn("NO_DONG", "string");
        	this.dsExecSunapCancel.addColumn("NO_FLOOR", "string");
        	this.dsExecSunapCancel.addColumn("NO_HO", "string");
        	this.dsExecSunapCancel.addColumn("YM_IMPOSE", "string");
        	this.dsExecSunapCancel.addColumn("DT_RECEIPT", "string");
        	this.dsExecSunapCancel.addColumn("ID_INSERT", "string");
        	this.dsExecSunapCancel.addColumn("NO_SUNAP", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnGridBeforeSelect(this.dxGrid1);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));

        	this.dsSelectNapgi.clearData();
        	this.dsSelectNapgi.addRow();
        	this.dsSelectNapgi.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsSelectNapgi.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsSelectNapgi.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));


        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select1=dsSelect select_single=dsSelect select_napgi=dsSelectNapgi";
        	var outData     = "dsList=select0 dsList1=select10 dsListSingle=select_single0 dsListNapgi=select_napgi0";
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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
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
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
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
        		this.gfnGridAfterSelect(this.dxGrid1);
        	}
        	else if(svcID == "exec_cancel") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec_sunap_cancel") {
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
        		this.gfnGridClear(this.dxGrid1);
        		this.dsListSingle.clearData();
        	}
        };

        // 상단 보증급수납 버튼 클릭.
        this.divData_divDataTop_btnDepositSunap_onclick = function(obj,e)
        {
        	var param = {};
        	param.DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.YN_VACNT = this.dsListSingle.getColumn(0, "YN_VACNT");
        	param.CD_GUJA = this.dsListSingle.getColumn(0, "CD_GUJA");
        	param.NO_GUJA = this.dsListSingle.getColumn(0, "NO_GUJA");
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLB_DLGRECEIPT", "fnDepositSunapCallback", param);
        };

        this.fnDepositSunapCallback= function(strId, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        // 상단 수납취소 버튼 클릭.
        this.divData_divDataTop_btnReceiptCancel_onclick = function(obj,e)
        {
        	var msg = "최종 수납내역이 취소됩니다.";
        	this.gfnConfirm(msg,"fnReceiptCancelConfirm");
        };

        this.fnReceiptCancelConfirm = function(strId, val)
        {
        	if(val == true)
        	{
        		var listRow = -1;
        		for(var i = this.dsList.rowcount - 1; i >= 0 ; i--)
        		{
        			if(!this.gfnIsNull(this.dsList.getColumn(i, "DT_RECEIPT")))
        			{
        				listRow = i;
        				break;
        			}
        		}

        		if(listRow < 0) return;

        		this.dsExecCancel.clearData();
        		var nrow = this.dsExecCancel.addRow();
        		this.dsExecCancel.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        		this.dsExecCancel.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        		this.dsExecCancel.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));
        		this.dsExecCancel.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        		this.dsExecCancel.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        		this.dsExecCancel.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        		this.dsExecCancel.setColumn(nrow, "NO_UNIONMEMBER", "");
        		this.dsExecCancel.setColumn(nrow, "TY_NAPIP", this.dsList.getColumn(listRow, "TY_NAPIP1"));
        		this.dsExecCancel.setColumn(nrow, "NO_NAPIP", this.gfnNvl(this.dsList.getColumn(listRow, "NO_NAPIP"),"").replaceAll("-",""));
        		this.dsExecCancel.setColumn(nrow, "NO_BUNNAP", this.dsList.getColumn(listRow, "NO_BUNNAP"));
        		this.dsExecCancel.setColumn(nrow, "DT_RECEIPT", this.gfnNvl(this.dsList.getColumn(listRow, "DT_RECEIPT"),"").replaceAll("-",""));
        		this.dsExecCancel.setColumn(nrow, "DS_REMARK", "");
        		this.dsExecCancel.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        		var strSvcId    = "exec_cancel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "exec_cancel=dsExecCancel";
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
        }

        // 하단 임대료 부과 버튼 클릭.
        this.divData_divDataBottom_btnIndiImpose_onclick = function(obj,e)
        {
        	var param = {};
        	var dt_napgi = this.dsListNapgi.getColumn(0, "NO_NAPGI_DAY");

        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.Day_NAPGI = this.gfnNvl(dt_napgi,"").length == 1 ? "0" + dt_napgi : dt_napgi;
        	param.YN_DAY =  this.dsListNapgi.getColumn(0, "YN_DAY");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLC_PERLEASEIMPOSE", "fnIndiImposeCallback", param);
        };

        this.fnIndiImposeCallback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        // 하단 부과취소 버튼 클릭.
        this.divData_divDataBottom_btnIndiCan_onclick = function(obj,e)
        {
        	if(this.dsList1.rowcount == 0)
        	{
        		this.gfnAlert("임대료부과정보가 존재하지 않습니다!");
        		return false;
        	}

        	var param = {};

        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.YM_IMPOSE =  this.dsList1.getColumn(this.dsList1.rowposition, "YM_IMPOSE");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLC_PERLEASEIMPOSECANCEL", "fnIndiCanCallback", param);
        };

        this.fnIndiCanCallback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        // 하단 임대료수납 버튼 클릭.
        this.divData_divDataBottom_btnLeaseSunap_onclick = function(obj,e)
        {
        	if(this.dsList1.rowcount == 0)
        	{
        		this.gfnAlert("임대료부과정보가 존재하지 않습니다!");
        		return false;
        	}

        	var param = {};

        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.YM_IMPOSE =  this.dsList1.getColumn(this.dsList1.rowposition, "YM_IMPOSE");
        	param.YN_VACNT = this.dsListSingle.getColumn(0, "YN_VACNT");
        	param.CD_GUJA = this.dsListSingle.getColumn(0, "CD_GUJA");
        	param.NO_GUJA = this.dsListSingle.getColumn(0, "NO_GUJA");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLC_DLGSUNAP", "fnLeaseSunapCallback", param);
        };

        this.fnLeaseSunapCallback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        // 하단 수납취소 버튼 클릭.
        this.divData_divDataBottom_btnReceiptCancel2_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) return;

        	if(this.dsList1.rowcount == 0)
        	{
        		this.gfnAlert("부과된 수납내역이 없으므로, 수납취소를 할 수 없습니다!");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_DONG"))) return;
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_FLOOR"))) return;
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HO"))) return;

        	this.gfnConfirm("해당 수납내역이 취소됩니다.","fnReceiptCancel2Confirm");
        };

        this.fnReceiptCancel2Confirm = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsExecSunapCancel.clearData();
        		var nrow = this.dsExecSunapCancel.addRow();

        		this.dsExecSunapCancel.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        		this.dsExecSunapCancel.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        		this.dsExecSunapCancel.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        		this.dsExecSunapCancel.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        		this.dsExecSunapCancel.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        		this.dsExecSunapCancel.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        		this.dsExecSunapCancel.setColumn(nrow, "YM_IMPOSE", this.gfnNvl(this.dsList1.getColumn(this.dsList1.rowposition, "YM_IMPOSE"),"").replaceAll("-",""));
        		this.dsExecSunapCancel.setColumn(nrow, "DT_RECEIPT", this.gfnNvl(this.dsList1.getColumn(this.dsList1.rowposition, "DT_RECEIPT"),"").replaceAll("-",""));
        		this.dsExecSunapCancel.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        		//this.dsExecSunapCancel.setColumn(nrow, "NO_SUNAP", this.dsList.getColumn(i, "NO_SUNAP")); // .NET 소스에는 빠져있음.

        		var strSvcId    = "exec_sunap_cancel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "exec_sunap_cancel=dsExecSunapCancel";
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
        }

        // 하단 미수금 체크박스
        this.divData_divDataBottom_cchkMISU_onchanged = function(obj,e)
        {
        	var width = 0;

        	if (e.postvalue == "Y") {
        		width = 100;
        	}

        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "MM_AR"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_RECEIVABLE"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_DELAYRECEIVABLE"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_RECEIVABLE_ASSU"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_DELAYRECEIVABLE_ASSU"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_TTRECEIVABLE"), "size", width);

        };

        // 하단 고지내역 체크박스
        this.divData_divDataBottom_cchkLEASE_onchanged = function(obj,e)
        {
        	var width = 0;
        	if (e.postvalue == "Y") {
        		width = 100;
        	}

        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "DT_IN"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_INLEASE"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_ASSU"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_INLEASE_TOTAL"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_DELAY"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_DELAY_ASSU"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_AFTERLEASE"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_AFTERLEASE1"), "size", width);
        };

        // 하단 수납내역 체크박스
        this.divData_divDataBottom_cchkSUNAP_onchanged = function(obj,e)
        {
        	var width = 0;
        	if (e.postvalue == "Y") {
        		width = 100;
        	}

        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "DT_RECEIPT"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "NO_SUNAP"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_RECEIPT"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_MLEASE"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_DELAY1"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_ASSU1"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_DELAY_ASSU1"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_LEFT"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_LEFT_ASSU"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "DT_ADDUPBACK"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "TY_POSITION"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "CD_GUJA"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "NO_GUJA"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "DS_REMARK"), "size", width);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divDataTop.form.btnReceiptCancel.addEventHandler("onclick",this.divData_divDataTop_btnReceiptCancel_onclick,this);
            this.divData.form.divDataTop.form.btnDepositSunap.addEventHandler("onclick",this.divData_divDataTop_btnDepositSunap_onclick,this);
            this.divData.form.divDataBottom.form.cchkMISU.addEventHandler("onchanged",this.divData_divDataBottom_cchkMISU_onchanged,this);
            this.divData.form.divDataBottom.form.cchkLEASE.addEventHandler("onchanged",this.divData_divDataBottom_cchkLEASE_onchanged,this);
            this.divData.form.divDataBottom.form.cchkSUNAP.addEventHandler("onchanged",this.divData_divDataBottom_cchkSUNAP_onchanged,this);
            this.divData.form.divDataBottom.form.btnReceiptCancel2.addEventHandler("onclick",this.divData_divDataBottom_btnReceiptCancel2_onclick,this);
            this.divData.form.divDataBottom.form.btnLeaseSunap.addEventHandler("onclick",this.divData_divDataBottom_btnLeaseSunap_onclick,this);
            this.divData.form.divDataBottom.form.btnIndiCan.addEventHandler("onclick",this.divData_divDataBottom_btnIndiCan_onclick,this);
            this.divData.form.divDataBottom.form.btnIndiImpose.addEventHandler("onclick",this.divData_divDataBottom_btnIndiImpose_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLB_TRANSDETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
