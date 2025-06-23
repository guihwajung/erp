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
            obj._setContents("<ColumnInfo><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICETEL\" type=\"STRING\" size=\"256\"/><Column id=\"CT_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRFPR_CONTRACTOR_SELECT</Col></Row><Row><Col id=\"SP\">DRFPR_ITEMCONTRACT_SELECT</Col><Col id=\"TARGET\">selectEtc</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DRFPR_RECEIVED_SELECT_DT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DRFPR_APPROPRIATE_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DRFPR_CANCELHISTORY_SELECT</Col></Row><Row><Col id=\"TARGET\">cancelDel</Col><Col id=\"SP\">DRFPR_RECEIPT_CANCEL_WOOMI</Col></Row><Row><Col id=\"TARGET\">selectSlip</Col><Col id=\"SP\">DRFPR_PRESLIP_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"NO_DONG\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_HO\"/><Col id=\"NO_UNIONMEMBER\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListEtc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSlip", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_ACNTUNIT","staCD_CORP:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ACNTUNIT","ctxtCD_ACNTUNIT:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSearchDong","ctxtDS_ACNTUNIT:0.0","10.0","279","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("4");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staCD_CORP00:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("4");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","33","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("2");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("3");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Button("btnDong","ctxtNO_HO:0.0","10.0","25",null,null,"2",null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_CF_Search");
            obj.set_tabstop("10.0");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"270","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE02","845","58","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtNO_MOBILE","851","63","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN02","845","29","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtCT_CONTRACT","851","34","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE03","746","58","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN03","746","29","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("계약건수");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE00","477","58","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtNO_OFFICETEL","483","63","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN00","477","29","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtNO_JUMIN","483","34","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE01","368","58","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN01","368","29","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_text("주민(사업자)번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE1","99","58","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtNO_TEL","105","63","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN1","99","29","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtDS_CONTRACTOR","105","34","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE","0","58","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_text("☎(자택)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN","0","29","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_text("계약자 성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staINFO","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_text("계약방식 : ");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGridEtc","0","132",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("19");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta01","0","103","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_text("계약품목");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:10",null,null,"0","0",null,null,"300",null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("약정/수납내역");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","5","30",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnSpecial",null,"5","65","22","5",null,null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_text("특별수납");
            this.divData.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnReceiptCancel",null,"5","65","22","btnSpecial:5",null,null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_text("수납취소");
            this.divData.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnReceipt",null,"5","65","22","btnReceiptCancel:5",null,null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("수납");
            this.divData.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("예수금");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Static("sta01","0","10","72.61%","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("계상내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","sta01:5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("해약HISTORY");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item15","divSearch.form.ctxtCD_ACNTUNIT","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divSearch.form.divSearchDong.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divSearch.form.divSearchDong.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divSearch.form.divSearchDong.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.divDataTop.form.edtNO_MOBILE","value","dsList","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataTop.form.edtCT_CONTRACT","value","dsList","CT_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataTop.form.edtNO_OFFICETEL","value","dsList","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataTop.form.edtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.edtDS_CONTRACTOR","value","dsList","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataTop.form.edtNO_JUMIN","value","dsList","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLF_RECEIPTDETAIL.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        //this.TY_STATUS = "";
        //this.valChgYn = "N";

        this.YN_VACNT = "";
        this.CD_GUJA = "";
        this.NO_GUJA = "";
        this.DS_BANK = "";
        this.YN_READONLY = "";

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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_ACNTUNIT)) {

        		this.divSearch.form.ctxtCD_ACNTUNIT.set_value(this.getOwnerFrame().CD_ACNTUNIT);
        		this.divSearch.form.ctxtDS_ACNTUNIT.set_value(this.getOwnerFrame().DS_ACNTUNIT);
        		this.divSearch.form.divSearchDong.form.ctxtNO_DONG.set_value(this.getOwnerFrame().NO_DONG);
        		this.divSearch.form.divSearchDong.form.ctxtNO_FLOOR.set_value(this.getOwnerFrame().NO_FLOOR);
        		this.divSearch.form.divSearchDong.form.ctxtNO_HO.set_value(this.getOwnerFrame().NO_HO);
        		this.dsSearch.setColumn(0, "NO_UNIONMEMBER", this.getOwnerFrame().NO_UNIONMEMBER);
        		/*
        		this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        		this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        		*/

        		this.FormBtns.Select.click();
        	}

        	this.fnBtnEnable();
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
        	this.btnEstimate = this.gfnFormButtonAdd("btnEstimate", "fnEstimate");
        	this.btnCancel = this.gfnFormButtonAdd("btnCancel", "fnCancel");
        	this.btnAgree = this.gfnFormButtonAdd("btnAgree", "fnAgree");
        	this.btnCounsel = this.gfnFormButtonAdd("btnCounsel", "fnCounsel");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGridEtc = this.divData.form.divDataTop.form.objGridEtc;
        	this.dxGrid1 = this.divData.form.divDataBottom.form.tabData.tab1.form.objGrid1;
        	this.dxGrid2 = this.divData.form.divDataBottom.form.tabData.tab2.form.objGrid2;
        	this.dxGrid3 = this.divData.form.divDataBottom.form.tabData.tab3.form.objGrid3;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//this.divSearch.form.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.divSearch.form.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//this.divData.form.divDataTop.form.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGridEtc, this.dsListEtc, "DL", "DLF_RECEIPTMANAGE_01");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DL", "DLF_RECEIPTMANAGE_02");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DL", "DLF_RECEIPTMANAGE_04");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DL", "DLF_RECEIPTMANAGE_03");

        	this.dxGridEtc.set_selecttype("cell");
        	this.dxGridEtc.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	//this.dsListEtc.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	//this.dxGrid3.BeforeUserDataSetParam = "fnGrid3_BeforeUserDataSetParam";

        	this.gfnGridColumnColor(this.dxGrid1, "TY_MONEY", "Blue", "TY_MONEY != '본인'");
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
        	this.dsSelect.addColumn("NO_UNIONMEMBER", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_ACNTUNIT", "string");
        	this.dsExec.addColumn("TY_GUBUN", "string");
        	this.dsExec.addColumn("NO_CHASU", "string");
        	this.dsExec.addColumn("NO_DONG", "string");
        	this.dsExec.addColumn("NO_FLOOR", "string");
        	this.dsExec.addColumn("NO_HO", "string");
        	this.dsExec.addColumn("NO_UNIONMEMBER", "string");
        	this.dsExec.addColumn("TY_NAPIP", "string");
        	this.dsExec.addColumn("NO_NAPIP", "string");
        	this.dsExec.addColumn("NO_BUNNAP", "string");
        	this.dsExec.addColumn("DT_RECEIPT", "string");
        	this.dsExec.addColumn("NO_CONTRACT", "string");
        	this.dsExec.addColumn("ID_INSERT", "string");

        	this.dsSelectSlip = new Dataset();
        	this.dsSelectSlip.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelectSlip.addColumn("TY_GUBUN", "string");
        	this.dsSelectSlip.addColumn("NO_CHASU", "string");
        	this.dsSelectSlip.addColumn("NO_DONG", "string");
        	this.dsSelectSlip.addColumn("NO_FLOOR", "string");
        	this.dsSelectSlip.addColumn("NO_HO", "string");
        	this.dsSelectSlip.addColumn("NO_UNIONMEMBER", "string");
        	this.dsSelectSlip.addColumn("NO_CONTRACT", "string");

        	/*
        	this.dsInsertSub = new Dataset();
        	this.dsUpdateSub = new Dataset();
        	this.dsDeleteSub = new Dataset();
        	*/
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

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));

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

        this.fnSelectEtc = function() {
        	//if (!this.fnSelectValidate()) return false;
        	this.gfnGridBeforeSelect(this.dxGridEtc);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));

        	var strSvcId    = "selectEtc";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectEtc=dsSelect";
        	var outData     = "dsListEtc=selectEtc0";
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

        this.fnSelectSub = function() {
        	this.dsDetail = new Dataset();
        	this.dsDetail.addColumn("CD_ACNTUNIT", "string");
        	this.dsDetail.addColumn("TY_GUBUN", "string");
        	this.dsDetail.addColumn("NO_CHASU", "string");
        	this.dsDetail.addColumn("NO_DONG", "string");
        	this.dsDetail.addColumn("NO_FLOOR", "string");
        	this.dsDetail.addColumn("NO_HO", "string");
        	this.dsDetail.addColumn("NO_UNIONMEMBER", "string");
        	this.dsDetail.addColumn("NO_CONTRACT", "string");

        	var tabIndex = this.fnGetTabIndex();

        	this.dsDetail.clearData();
        	this.dsDetail.addRow();

        	this.dsDetail.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsDetail.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsDetail.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsDetail.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsDetail.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsDetail.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsDetail.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsDetail.setColumn(0, "NO_CONTRACT", this.dsListEtc.getColumn(this.dsListEtc.rowposition, "NO_CONTRACT"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select" + tabIndex + "=dsDetail";
        	var outData     = "dsList" + tabIndex + "=select" + tabIndex + "0";
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


        // 가해약전표번호 조회
        this.fnSelectSlip = function() {
        	this.dsSelectSlip.clearData();
        	this.dsSelectSlip.addRow();

        	this.dsSelectSlip.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectSlip.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectSlip.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectSlip.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelectSlip.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelectSlip.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelectSlip.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelectSlip.setColumn(0, "NO_CONTRACT", this.dsListEtc.getColumn(this.dsListEtc.rowposition, "NO_CONTRACT"));

        	var strSvcId    = "selectSlip";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectSlip=dsSelectSlip";
        	var outData     = "dsListSlip=selectSlip0";
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
        	/*
        	switch(this.fnGetTabIndex())
        	{
        		case 4 :
        			var nrow = this.gfnGridAdd(this.dxGrid4);

        			this.dsList4.set_enableevent(false);
        			this.dsList4.setColumn(nrow, "RT_DISCOUNT", 0);
        			this.dsList4.setColumn(nrow, "RT_DELAY1", 0);
        			this.dsList4.setColumn(nrow, "RT_DELAY3", 0);
        			this.dsList4.setColumn(nrow, "RT_DELAY6", 0);
        			this.dsList4.setColumn(nrow, "RT_DELAY99", 0);
        			this.dsList4.set_enableevent(true);
        		break;
        	}
        	*/

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.valChgYn = "Y";
        	/*
        	switch(this.fnGetTabIndex())
        	{
        		case 4 :
        			this.gfnGridDel(this.dxGrid4);
        		break;
        	}
        	*/
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;

        	//this.fnSaveSub();

        }

        this.fnSaveSub = function()
        {
        	/*
        	var index = this.fnGetTabIndex();
        	this.fnSetSaveColumn(index);
        	this.fnSetSaveTab(index);
        	*/
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	var tabIndex = this.fnGetTabIndex();

        	if(tabIndex == 1){
        		this.gfnExcelExport(this.dxGrid1);
        	}else if(tabIndex == 2){
        		this.gfnExcelExport(this.dxGrid2);
        	}else if(tabIndex == 3){
        		this.gfnExcelExport(this.dxGrid3);
        	}
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_DONG"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.divSearchDong.form.ctxtNO_DONG.setFocus();
        		}
        		this.gfnAlert("동은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_FLOOR"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.divSearchDong.form.ctxtNO_FLOOR.setFocus();
        		}
        		this.gfnAlert("층은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_HO"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.divSearchDong.form.ctxtNO_HO.setFocus();
        		}
        		this.gfnAlert("호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;
        };

        this.fnSaveValidate = function() {
        	var validate = true;
        	/*
        	if(this.gfnIsNull(this.dsListEtc.getColumn(0, "TY_TYPE")))
        	{
        		validate = false;
        		this.fnValidate_callback = function()
        		{
        			//this.divSearch.form.ccboTY_GUBUN.setFocus();
        		}

        		this.gfnAlert("사업유형이 입력되지 않았습니다!", "fnValidate_callback");
        	}
        	else if(this.gfnIsNull(this.dsListEtc.getColumn(0, "ID_SUKUM1")))
        	{
        		validate = false;
        		this.fnValidate_callback = function()
        		{
        			//this.divSearch.form.ctxtNO_CHASU.setFocus();
        		}

        		this.gfnAlert("사수금담당자가 입력되지 않았습니다!", "fnValidate_callback");
        	}
        	else if(this.gfnIsNull(this.dsListEtc.getColumn(0, "UT_DISCOUNT")) || this.dsListEtc.getColumn(0, "UT_DISCOUNT") == 0)
        	{
        		validate = false;
        		this.fnValidate_callback = function()
        		{
        			//this.divSearch.form.ctxtNO_CHASU.setFocus();
        		}

        		this.gfnAlert("할인료계산이 입력되지 않았습니다!", "fnValidate_callback");
        	}
        	else if(this.gfnIsNull(this.dsListEtc.getColumn(0, "UT_DELAY")) || this.dsListEtc.getColumn(0, "UT_DELAY") == 0)
        	{
        		validate = false;
        		this.fnValidate_callback = function()
        		{
        			//this.divSearch.form.ctxtNO_CHASU.setFocus();
        		}

        		this.gfnAlert("연체료계산이 입력되지 않았습니다!", "fnValidate_callback");
        	}
        	else if(this.gfnIsNull(this.dsListEtc.getColumn(0, "STD_DELAY")))
        	{
        		validate = false;
        		this.fnValidate_callback = function()
        		{
        			//this.divSearch.form.ctxtNO_CHASU.setFocus();
        		}

        		this.gfnAlert("연체방법이 선택되지 않았습니다!", "fnValidate_callback");
        	}
        */

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
        		if(this.dsList.rowcount > 0){
        			this.YN_VACNT = this.dsList.getColumn(0, "YN_VACNT");
        			this.CD_GUJA = this.dsList.getColumn(0, "CD_GUJA");
        			this.NO_GUJA = this.dsList.getColumn(0, "NO_GUJA");
        			this.DS_BANK = this.dsList.getColumn(0, "DS_BANK");
        			this.YN_READONLY = this.dsList.getColumn(0, "YN_READONLY");

        			var NO_SIZE = this.dsList.getColumn(0, "NO_SIZE");
        			var TY_DISTRICT = this.dsList.getColumn(0, "TY_DISTRICT");
        			var TY_TYPE = this.dsList.getColumn(0, "TY_TYPE");
        			var RT_OPTION = this.dsList.getColumn(0, "RT_OPTION");

        			this.divData.form.divDataTop.form.staINFO.set_text("계약방식 : " + NO_SIZE + "m²           " + TY_TYPE + "형     군 : " + TY_DISTRICT + "         OPTION : " + RT_OPTION);

        			//this.fnReadOnlyChange(false);
        			//this.fnBtnEnable(true);
        			this.fnSelectEtc();
        		}else{
        			this.dsList1.clearData(); this.dsList2.clearData(); this.dsList3.clearData(); this.dsListEtc.clearData();
        		}
        	}
        	else if (svcID == "selectEtc") {
        		if(this.dsListEtc.rowcount > 0){
        			this.gfnGridAfterSelect(this.dxGridEtc);

        			this.fnBtnEnable();
        			//this.NO_CONTRACT = "";

        			// 탭의 그리드 조회
        			if(this.dsListEtc.getColumn(this.dsListEtc.rowposition, "YN_SERVICE") != "Y"){
        				this.fnSelectSub();
        			}
        		}
        	}
        	else if (svcID == "detail") {
        		this.fnBtnEnable();

        		this.fnSelectSlip();
        	}
        	else if(svcID == "save") {

        	}
        	else if(svcID == "cancelDel") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("수납취소 완료되었습니다.","fnCallback_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "saveGrid") {
        		/*
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        		*/
        	}
        }



        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "ccfCD_ACNTUNIT")
        	{
        		/*
        		if(this.dsList.rowcount > 0)
        		{
        			this.dsList.clearData();
        			this.dsList.addRow();
        		}
        		//this.fnReadOnlyChange(false);
        		*/
        	}

        	return true;
        }

        this.fnGrid3_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	/*
        	switch(id) {
        		case "DRX_CFVENDOR_CODEFIND":
        			dsUserParam.setColumn(nrow, "FLAG", this.dsList3.getColumn(this.dsList3.rowposition, "TY_VENDORGUBUN") == "당사" ? "A" : this.dsList3.getColumn(this.dsList3.rowposition, "TY_VENDORGUBUN") == "A" ? "A" : this.AuthClient.ID_USER);
        		break;
        	}

        	return true;
        	*/
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		this.FormBtns.SubSelect.click();

        		obj.oldrow = -1;
        	}
        };

        /*
        this.dsList_canrowposchange = function(obj:nexacro.NormalDataset,e:nexacro.DSRowPosChangeEventInfo) {
        	var tabIndex = this.fnGetTabIndex();

        	if(tabIndex != 4) return;

        	var can_rowchange = true;
        	for (var i = 0; i < this.dsList4.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList4, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsListEtc.set_enableevent(false);
        		this.dsListEtc.set_rowposition(this._row);
        		this.dsListEtc.set_enableevent(true);
        	}
        }
        */
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.dsList1.clearData(); this.dsList2.clearData(); this.dsList3.clearData();
        		this.dsList.clearData(); this.dsListEtc.clearData();

        		this.fnBtnEnable();
        	}
        };


        // 탭 관련 관리함수
        this.fnGetTabIndex = function()
        {
        	var index = -1;

        	var text = this.divData.form.divDataBottom.form.tabData.tabpages[this.divData.form.divDataBottom.form.tabData.tabindex].text;

        	switch(text)
        	{
        		case "약정/수납내역" : index = 1;
        			break;
        		case "예수금" : index = 2;
        			break;
        		case "해약HISTORY" : index = 3;
        			break;
        	}

        	return index;
        }

        this.divData_tabData_onchanged = function(obj,e)
        {
        	if(this.dsList.rowcount == 0) return;

        	this.fnBtnEnable();

        	if(this.dsListEtc.getColumn(this.dsListEtc.rowposition, "YN_SERVICE") != "Y"){
        		//this.valChgYn = "N";
        		//this.fnSelectSub();
        		this.FormBtns.SubSelect.click();
        	}
        };

        /*
        this.fnSetSaveColumn = function(index)
        {
        	this.dsInsertSub.clearData();
        	this.dsUpdateSub.clearData();
        	this.dsDeleteSub.clearData();

        	switch(index)
        	{
        		case 4 :
        			this.dsInsertSub = new Dataset();
        			this.dsInsertSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsInsertSub.addColumn("TY_GUBUN", "string");
        			this.dsInsertSub.addColumn("NO_CHASU", "string");
        			this.dsInsertSub.addColumn("NO_DONG", "string");
        			this.dsInsertSub.addColumn("NO_FLOOR", "string");
        			this.dsInsertSub.addColumn("NO_HO", "string");
        			this.dsInsertSub.addColumn("NO_UNIONMEMBER", "string");
        			this.dsInsertSub.addColumn("NO_CONTRACT", "string");
        			this.dsInsertSub.addColumn("TY_NAPIP", "string");
        			this.dsInsertSub.addColumn("NO_NAPIP", "string");
        			this.dsInsertSub.addColumn("DT_START", "string");
        			this.dsInsertSub.addColumn("DT_END", "string");
        			this.dsInsertSub.addColumn("RT_DISCOUNT", "bigdecimal");
        			this.dsInsertSub.addColumn("RT_DELAY1", "bigdecimal");
        			this.dsInsertSub.addColumn("RT_DELAY3", "bigdecimal");
        			this.dsInsertSub.addColumn("RT_DELAY6", "bigdecimal");
        			this.dsInsertSub.addColumn("RT_DELAY99", "bigdecimal");
        			this.dsInsertSub.addColumn("ID_INSERT", "string");

        			this.dsUpdateSub = new Dataset();
        			this.dsUpdateSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsUpdateSub.addColumn("TY_GUBUN", "string");
        			this.dsUpdateSub.addColumn("NO_CHASU", "string");
        			this.dsUpdateSub.addColumn("NO_DONG", "string");
        			this.dsUpdateSub.addColumn("NO_FLOOR", "string");
        			this.dsUpdateSub.addColumn("NO_HO", "string");
        			this.dsUpdateSub.addColumn("NO_UNIONMEMBER", "string");
        			this.dsUpdateSub.addColumn("NO_CONTRACT", "string");
        			this.dsUpdateSub.addColumn("TY_NAPIP", "string");
        			this.dsUpdateSub.addColumn("NO_NAPIP", "string");
        			this.dsUpdateSub.addColumn("DT_START", "string");
        			this.dsUpdateSub.addColumn("DT_END", "string");
        			this.dsUpdateSub.addColumn("RT_DISCOUNT", "bigdecimal");
        			this.dsUpdateSub.addColumn("RT_DELAY1", "bigdecimal");
        			this.dsUpdateSub.addColumn("RT_DELAY3", "bigdecimal");
        			this.dsUpdateSub.addColumn("RT_DELAY6", "bigdecimal");
        			this.dsUpdateSub.addColumn("RT_DELAY99", "bigdecimal");
        			this.dsUpdateSub.addColumn("ID_UPDATE", "string");

        			this.dsDeleteSub = new Dataset();
        			this.dsDeleteSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsDeleteSub.addColumn("TY_GUBUN", "string");
        			this.dsDeleteSub.addColumn("NO_CHASU", "string");
        			this.dsDeleteSub.addColumn("NO_DONG", "string");
        			this.dsDeleteSub.addColumn("NO_FLOOR", "string");
        			this.dsDeleteSub.addColumn("NO_HO", "string");
        			this.dsDeleteSub.addColumn("NO_UNIONMEMBER", "string");
        			this.dsDeleteSub.addColumn("NO_CONTRACT", "string");
        			this.dsDeleteSub.addColumn("TY_NAPIP", "string");
        			this.dsDeleteSub.addColumn("NO_NAPIP", "string");
        			this.dsDeleteSub.addColumn("DT_START", "string");
        		break;
        	}
        }

        this.fnSetSaveTab = function(index)
        {
        	var cd_acntunit = this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6);
        	var ty_gubun = this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1);
        	var no_chasu = this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2);

        	// 상담일지
        	if(index == 4)
        	{
        		if (!this.gfnGridValidate(this.dxGrid4)) return;
        		for(var i = 0; i < this.dsList4.rowcount; i++)
        		{
        			var flag = this.gfnGetFlag(this.dsList4, i);

        			if(this.gfnGetDiffDate(this.dsList4.getColumn(i, "DT_START"), this.dsList4.getColumn(i, "DT_END")) <= -1){
        				this.gfnAlert("종료일자는 시작일자보다 크거나 같아야 합니다.");
        				return;
        			}

        			var tyNapip = "";

        			if(this.dsList4.getColumn(i, "TY_NAPIP") == "계약금"){
        				tyNapip = "C";
        			}else if(this.dsList4.getColumn(i, "TY_NAPIP") == "중도금"){
        				tyNapip = "J";
        			}else if(this.dsList4.getColumn(i, "TY_NAPIP") == "잔금"){
        				tyNapip = "R";
        			}

        			switch(flag) {
        				case "I":
        					var nrow = this.dsInsertSub.addRow();
        					this.dsInsertSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsInsertSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsInsertSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsInsertSub.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        					this.dsInsertSub.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        					this.dsInsertSub.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        					this.dsInsertSub.setColumn(nrow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        					this.dsInsertSub.setColumn(nrow, "NO_CONTRACT", this.dsListEtc.getColumn(this.dsListEtc.rowposition, "NO_CONTRACT"));
        					this.dsInsertSub.setColumn(nrow, "TY_NAPIP", tyNapip);
        					this.dsInsertSub.setColumn(nrow, "NO_NAPIP", this.dsList4.getColumn(i, "NO_NAPIP"));
        					this.dsInsertSub.setColumn(nrow, "DT_START", nexacro.replaceAll(this.dsList4.getColumn(i, "DT_START"), "-", ""));
        					this.dsInsertSub.setColumn(nrow, "DT_END", nexacro.replaceAll(this.dsList4.getColumn(i, "DT_END"), "-", ""));
        					this.dsInsertSub.setColumn(nrow, "RT_DISCOUNT", this.dsList4.getColumn(i, "RT_DISCOUNT"));
        					this.dsInsertSub.setColumn(nrow, "RT_DELAY1", this.dsList4.getColumn(i, "RT_DELAY1"));
        					this.dsInsertSub.setColumn(nrow, "RT_DELAY3", this.dsList4.getColumn(i, "RT_DELAY3"));
        					this.dsInsertSub.setColumn(nrow, "RT_DELAY6", this.dsList4.getColumn(i, "RT_DELAY6"));
        					this.dsInsertSub.setColumn(nrow, "RT_DELAY99", this.dsList4.getColumn(i, "RT_DELAY99"));
        					this.dsInsertSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        					break;
        				case "U":
        					var nrow = this.dsUpdateSub.addRow();
        					this.dsUpdateSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsUpdateSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsUpdateSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsUpdateSub.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        					this.dsUpdateSub.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        					this.dsUpdateSub.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        					this.dsUpdateSub.setColumn(nrow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        					this.dsUpdateSub.setColumn(nrow, "NO_CONTRACT", this.dsListEtc.getColumn(this.dsListEtc.rowposition, "NO_CONTRACT"));
        					this.dsUpdateSub.setColumn(nrow, "TY_NAPIP", tyNapip);
        					this.dsUpdateSub.setColumn(nrow, "NO_NAPIP", this.dsList4.getColumn(i, "NO_NAPIP"));
        					this.dsUpdateSub.setColumn(nrow, "DT_START", nexacro.replaceAll(this.dsList4.getColumn(i, "DT_START"), "-", ""));
        					this.dsUpdateSub.setColumn(nrow, "DT_END", nexacro.replaceAll(this.dsList4.getColumn(i, "DT_END"), "-", ""));
        					this.dsUpdateSub.setColumn(nrow, "RT_DISCOUNT", this.dsList4.getColumn(i, "RT_DISCOUNT"));
        					this.dsUpdateSub.setColumn(nrow, "RT_DELAY1", this.dsList4.getColumn(i, "RT_DELAY1"));
        					this.dsUpdateSub.setColumn(nrow, "RT_DELAY3", this.dsList4.getColumn(i, "RT_DELAY3"));
        					this.dsUpdateSub.setColumn(nrow, "RT_DELAY6", this.dsList4.getColumn(i, "RT_DELAY6"));
        					this.dsUpdateSub.setColumn(nrow, "RT_DELAY99", this.dsList4.getColumn(i, "RT_DELAY99"));
        					this.dsUpdateSub.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        					break;
        				case "D":
        					var nrow = this.dsDeleteSub.addRow();
        					this.dsDeleteSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsDeleteSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsDeleteSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsDeleteSub.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        					this.dsDeleteSub.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        					this.dsDeleteSub.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        					this.dsDeleteSub.setColumn(nrow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        					this.dsDeleteSub.setColumn(nrow, "NO_CONTRACT", this.dsListEtc.getColumn(this.dsListEtc.rowposition, "NO_CONTRACT"));
        					this.dsDeleteSub.setColumn(nrow, "TY_NAPIP", tyNapip);
        					this.dsDeleteSub.setColumn(nrow, "NO_NAPIP", this.dsList4.getColumn(i, "NO_NAPIP"));
        					this.dsDeleteSub.setColumn(nrow, "DT_START", nexacro.replaceAll(this.dsList4.getColumn(i, "DT_START"), "-", ""));
        					break;
        			}
        		}

        	}

        	if (this.dsInsertSub.rowcount == 0 && this.dsUpdateSub.rowcount == 0 && this.dsDeleteSub.rowcount == 0) return;

        	var strSvcId    = "saveGrid";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert" + index + "=dsInsertSub update" + index + "=dsUpdateSub delete" + index + "=dsDeleteSub";
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
        */

         // 예상수납안내 버튼 클릭시 팝업화면 호출
         this.fnEstimate = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if(this.dsList1.rowcount > 0) {
        		if(this.dsList1.getColumn(this.dsList1.rowcount-1, "TY_NAPIP") == "잔금" && this.dsList1.getColumn(this.dsList1.rowcount-1, "NO_BUNNAP") == "99"){
        			this.gfnAlert("수납이 이미 완료되었습니다.");
        			return;
        		}
        	}

        	var param = {};
        	//var nRow = this.dsList.rowposition;
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.NO_UNIONMEMBER = this.dsSearch.getColumn(0, "NO_UNIONMEMBER");


        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLF_DLGESTIMATERECEIPT_CM", "fnEstimateCallback", param);
        }

        this.fnEstimateCallback =  function(svcID, val) {
        	this.FormBtns.Select.click();
        };

         // 해약관리 버튼 클릭시 팝업화면 호출
         this.fnCancel = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.AM_TEMP = 0;
        	this.AM_BUNYANGPLAN = 0;
        	this.AM_BUNYANGGET = 0;
        	this.NO_CONT = 0;
        	this.NO_CONTRACT = "";;

        	this.AM_BUNYANGPLAN_TEXT = 0;
        	this.AM_BUNYANGGET_TEXT = 0;

        	if(this.dsList1.rowcount > 1){
        		this.AM_BUNYANGPLAN_TEXT = this.dsListEtc.getColumn(0, "AM_AMOUNT");
        		this.AM_BUNYANGGET_TEXT = this.dsList1.getColumn(this.dsList1.rowcount-1, "AM_BUNYANG");	// rowcount 가져오는 데이터셋이 이게 맞는지 확인필요. 닷넷소스와 똑같이 구현함
        		this.AM_BUNYANGPLAN = nexacro.toNumber(this.AM_BUNYANGPLAN_TEXT);
        		this.AM_BUNYANGGET = nexacro.toNumber(this.AM_BUNYANGGET_TEXT);
        	}else{
        		this.AM_BUNYANGPLAN_TEXT = "0";
        		this.AM_BUNYANGGET_TEXT = "0";
        		this.AM_BUNYANGPLAN = 0;
        		this.AM_BUNYANGGET = 0;
        	}

        	if (this.AM_BUNYANGPLAN != 0 && (this.AM_BUNYANGPLAN - this.AM_BUNYANGGET) <= 0)
        	{
        		this.gfnConfirm("수납이 이미완료되었습니다.\n계약을 해약 하시겠습니까?", "fnCancel_callback");
        	}else{

        		this.fnCancel_popopen();
        	}
        }

        // 확인창 콜빽
        this.fnCancel_callback = function(strId, val)
        {
        	if(val == true) {
        		this.fnCancel_popopen();
        	}else{
        		return;
        	}
        }

        // 팝업창 파라미터 설정
        this.fnCancel_popopen = function()
        {
        	this.NO_CONTRACT = this.dsListEtc.getColumn(this.dsListEtc.rowposition, "NO_CONTRACT"); //계약번호

        	for(var i = 0; i < this.dsListEtc.rowcount; i++){
        		if(this.dsListEtc.getColumn(i, "NO_CONTRACT") == this.NO_CONTRACT){
        			this.NO_CONT++;
        		}
        	}

        	var param = {};
        	var tyService = false;
        	if(this.dsListEtc.getColumn(this.dsListEtc.rowposition, "YN_SERVICE") == "Y"){
        		tyService = true;
        	}

        	//var nRow = this.dsList.rowposition;
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.NO_UNIONMEMBER = this.dsSearch.getColumn(0, "NO_UNIONMEMBER");

        	param.NO_SIZE = this.dsList.getColumn(0, "NO_SIZE");
        	param.TY_TYPE = this.dsList.getColumn(0, "TY_TYPE");
        	param.CD_ITEM = this.dsListEtc.getColumn(0, "CD_ITEM");
        	param.DS_CONTRACTOR = this.dsList.getColumn(0, "DS_CONTRACTOR");
        	param.NO_CONTRACT = this.NO_CONTRACT;
        	param.TY_SERVICE = tyService;

        	if (this.NO_CONT == 1)
        	{
        		param.DS_CONTRACT = this.dsListEtc.getColumn(this.dsListEtc.rowposition, "DS_ITEM");
        	}
        	else
        	{
        		param.DS_CONTRACT = this.dsListEtc.getColumn(this.dsListEtc.rowposition, "DS_ITEM") + "외 " + (this.NO_CONT - 1).toString();
        	}

        	var title = "별도계약해약      ( "+this.dsSearch.getColumn(0, "NO_DONG")+"동 "+this.dsSearch.getColumn(0, "NO_FLOOR")+"층 "+this.dsSearch.getColumn(0, "NO_HO")+"호)";
        	param.Title = title;

        	param.AM_BUNYANG = this.AM_BUNYANGPLAN_TEXT;
        	//hashParam.Add("AM_BUNYANG", GlobalLibrary.AmtCommaAdd(double.Parse(txtAM_BUNYANGPLAN.Text)));

        	if (this.dsList1.rowcount == 0){
        		param.AM_RECEIPT = "0";
        		param.AM_DISCOUNT = "0";
        		param.AM_DELAY = "0";
        		param.AM_REALRECEIPT = "0";
        	}else{
        		param.AM_RECEIPT = this.dsList1.getColumn(this.dsList1.rowcount-1, "AM_BUNYANG");		//입금원금
        		param.AM_DISCOUNT = this.dsList1.getColumn(this.dsList1.rowcount-1, "AM_DISCOUNT");		//선납료
        		param.AM_DELAY = this.dsList1.getColumn(this.dsList1.rowcount-1, "AM_DELAY");			//연체료
        		param.AM_REALRECEIPT = this.dsList1.getColumn(this.dsList1.rowcount-1, "AM_RECEIPT");	//실수납금
        	}

        	//위약금 = 총분양금 * 0.1
        	this.AM_TEMP = nexacro.toNumber(this.AM_BUNYANGPLAN_TEXT) * 0.1;
        	param.AM_FORFEIT = this.AM_TEMP;

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLF_DLGCANCELACC", "fnCancelCallback", param);
        }



        this.fnCancelCallback =  function(svcID, val) {
        	if(val == true) {
        		this.FormBtns.Select.click();
        		this.divData.form.divDataBottom.form.tabData.set_tabindex(3);
        		//tabCol.SelectedIndex = 2;
        	}
        };


         // 약정관리 버튼 클릭시 팝업화면 호출
         this.fnAgree = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	if(!this.fnServiceItemCheck("약정")) { return; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.divSearch.form.ctxtDS_ACNTUNIT.value;
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.NO_UNIONMEMBER = this.dsSearch.getColumn(0, "NO_UNIONMEMBER");
        	param.NO_CONTRACT = this.dsListEtc.getColumn(this.dsListEtc.rowposition, "NO_CONTRACT");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLF_CONTRACTAGREE", "fnAgreeCallback", param);
        }

        this.fnAgreeCallback =  function(svcID, val) {
        	this.FormBtns.Select.click();
        };

         // 상담일지 버튼 클릭시 팝업화면 호출
         this.fnCounsel = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.divSearch.form.ctxtDS_ACNTUNIT.value;
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.NO_UNIONMEMBER = this.dsSearch.getColumn(0, "NO_UNIONMEMBER");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLF_COUNSEL", "", param);
        }



        // 수납 버튼 클릭시
        this.divData_divDataBottom_tabData_tab1_btnReceipt_onclick = function(obj,e)
        {
        	if(!this.fnServiceItemCheck("수납사항")) { return; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.NO_UNIONMEMBER = this.dsSearch.getColumn(0, "NO_UNIONMEMBER");
        	param.NO_CONTRACT = this.dsListEtc.getColumn(this.dsListEtc.rowposition, "NO_CONTRACT");
        	param.YN_COLLECT = false;
        	param.Title = "계약번호 [" + this.dsListEtc.getColumn(this.dsListEtc.rowposition, "NO_CONTRACT") + "] 을(를) 수납합니다";

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLF_DLGRECEIPT", "fnReceiptCallback", param);
        };

        // 수납 버튼 클릭 후 callback
        this.fnReceiptCallback = function(strId, val)
        {
        	if(val == true) {
        		this.FormBtns.Select.click();
        	}
        }



        // 수납취소 버튼 클릭시
        this.divData_divDataBottom_tabData_tab1_btnReceiptCancel_onclick = function(obj,e)
        {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if(this.dsList1.rowcount < 1) { return; }
        	if(!this.fnServiceItemCheck("수납사항")) { return; }

        	var msg = "계약번호 [" + this.dsListEtc.getColumn(this.dsListEtc.rowposition, "NO_CONTRACT") + "]의 최종 수납내역이 취소됩니다.";
        	this.gfnConfirm(msg, "fnReceiptCancel_callback");
        };

        // 수납취소 버튼 클릭 후 callback
        this.fnReceiptCancel_callback = function(strId, val)
        {
        	if(val == true) {
        		var i = 0;
        		for ( i =this.dsList1.rowcount-1; i > -1 ; i--){
        			if(!this.gfnIsNull(this.dsList1.getColumn(i, "DT_RECEIPT"))){
        				break;
        			}
        		}

        		if (i < 0){
        			this.gfnAlert("수납내역이 없습니다.");
        			return;
        		}else{
        			this.fnExec(i);
        		}
        	}
        }


        this.fnServiceItemCheck = function(msg)
        {
        	if(this.dsListEtc.getColumn(this.dsListEtc.rowposition, "YN_SERVICE") == "Y"){
        		this.gfnAlert("서비스품목은 " + msg + "이 존재하지 않습니다.");
        		return false;
        	}

        	return true;
        }

        // 특별수납 버튼 클릭시
        this.divData_divDataBottom_tabData_tab1_btnSpecial_onclick = function(obj,e)
        {
        	if(!this.fnServiceItemCheck("수납사항")) { return; }

        	var i = 0;
        	var endRow = 0;

        	for ( i =this.dsList1.rowcount-1; i > -1 ; i--){
        		if(!this.gfnIsNull(this.dsList1.getColumn(i, "DT_RECEIPT"))){
        			break;
        		}
        	}

        	if (i < 0){
        		this.gfnAlert("수납내역이 없습니다.");
        		return;
        	}else{
        		endRow = this.dsList1.rowposition;

        		var tyNapip = "";
        		if(this.dsList1.getColumn(endRow, "TY_NAPIP") == "계약금"){
        			tyNapip = "C";
        		}else if(this.dsList1.getColumn(endRow, "TY_NAPIP") == "중도금"){
        			tyNapip = "J";
        		}else if(this.dsList1.getColumn(endRow, "TY_NAPIP") == "잔금"){
        			tyNapip = "R";
        		}

        		var param = {};
        		//var nRow = this.dsList.rowposition;
        		param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        		param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        		param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        		param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        		param.NO_UNIONMEMBER = this.dsSearch.getColumn(0, "NO_UNIONMEMBER");
        		param.NO_CONTRACT = this.dsListEtc.getColumn(this.dsListEtc.rowposition, "NO_CONTRACT");
        		param.DT_RECEIVED = this.dsList1.getColumn(endRow, "DT_RECEIPT");
        		param.AM_RECEIVED = this.dsList1.getColumn(endRow, "AM_RECEIPT");
        		param.AM_BUNYANG = this.dsList1.getColumn(endRow, "AM_BUNYANG");
        		param.DD_COUNT = this.dsList1.getColumn(endRow, "DD_DAY");
        		param.TY_NAPIP = tyNapip;
        		param.NO_NAPCHA = nexacro.replaceAll(this.dsList1.getColumn(endRow, "NO_NAPCHA").toString(), "-", "");
        		param.NO_BUNNAP = this.dsList1.getColumn(endRow, "NO_BUNNAP");

        		if(this.dsList1.getColumn(endRow, "AM_DELAY") > 0){	//연체료 > 0
        			param.TY_DELAY = true;
        			param.TY_DISCOUNT = false;
        			param.AM_MONEY = this.dsList1.getColumn(endRow, "AM_DELAY");	//연체료
        		}else{
        			param.TY_DELAY = false;
        			param.TY_DISCOUNT = true;
        			param.AM_MONEY = this.dsList1.getColumn(endRow, "AM_DISCOUNT");	//할인료
        		}

        		param.CD_GUJA = this.dsList1.getColumn(endRow, "CD_GUJA");
        		param.NO_GUJA = this.dsList1.getColumn(endRow, "NO_GUJA");
        		param.TY_MONEY = this.dsList1.getColumn(endRow, "TY_MONEY");

        		// 화면 오픈.
        		// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        		// 타 모듈 화면 호출시 지정할것.

        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLF_DLGSPECIALRECEIPT", "fnSpecialCallback", param);
        	}
        };

        // 특별수납 버튼 클릭 후 callback
        this.fnSpecialCallback = function(strId, val)
        {
        	if(val == true) {
        		this.FormBtns.Select.click();
        	}
        }

        /*
         *	수납취소 처리
         */
        this.fnExec = function(nRow) {
        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	var tyNapip = "";
        	if(this.dsList1.getColumn(nRow, "TY_NAPIP") == "계약금"){
        		tyNapip = "C";
        	}else if(this.dsList1.getColumn(nRow, "TY_NAPIP") == "중도금"){
        		tyNapip = "J";
        	}else if(this.dsList1.getColumn(nRow, "TY_NAPIP") == "잔금"){
        		tyNapip = "R";
        	}

        	this.dsExec.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsExec.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsExec.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsExec.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsExec.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsExec.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsExec.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsExec.setColumn(0, "TY_NAPIP", tyNapip);
        	this.dsExec.setColumn(0, "NO_NAPIP", nexacro.replaceAll(this.dsList1.getColumn(nRow, "NO_NAPCHA"), "-", ""));
        	this.dsExec.setColumn(0, "NO_BUNNAP", this.dsList1.getColumn(nRow, "NO_BUNNAP"));
        	this.dsExec.setColumn(0, "DT_RECEIPT", nexacro.replaceAll(this.dsList1.getColumn(nRow, "DT_RECEIPT"), "-", ""));
        	this.dsExec.setColumn(0, "NO_CONTRACT", this.dsListEtc.getColumn(this.dsListEtc.rowposition, "NO_CONTRACT"));
        	this.dsExec.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "cancelDel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cancelDel=dsExec";
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



        // 확장버튼 활성화 or 비활성화 처리
        this.fnBtnEnable = function()
        {

        	if (this.FormInfo.TY_AUTH != "R"){
        		if(this.gfnGetFormStatus(this) == "Q"){

        			/*
        			switch(this.fnGetTabIndex())
        			{
        				case 1 :
        				case 3 :
        					this.FormBtns.Save.set_enable(false);
        					this.FormBtns.Add.set_enable(false);
        					this.FormBtns.Del.set_enable(false);
        					break;
        				case 4 :
        					this.FormBtns.Save.set_enable(true);
        					this.FormBtns.Add.set_enable(true);
        					this.FormBtns.Del.set_enable(true);
        					break;
        				case 2 :
        					if (this.dsList2.rowcount == 0)
        					{
        						this.FormBtns.Save.set_enable(false);
        						this.FormBtns.Add.set_enable(false);
        						this.FormBtns.Del.set_enable(false);
        					}
        					break;
        			}
        			*/

        			this.divData.form.divDataBottom.form.tabData.tab1.form.btnReceipt.set_enable(true);
        			this.divData.form.divDataBottom.form.tabData.tab1.form.btnReceiptCancel.set_enable(true);
        			this.divData.form.divDataBottom.form.tabData.tab1.form.btnSpecial.set_enable(true);

        			this.btnEstimate.set_enable(true);
        			this.btnCancel.set_enable(true);
        			this.btnAgree.set_enable(true);

        		}else if(this.gfnGetFormStatus(this) == "X"){
        			if (this.dsListEtc.rowcount == 0){
        				this.btnEstimate.set_enable(false);
        				this.btnCancel.set_enable(false);
        				this.btnAgree.set_enable(false);
        				this.btnCounsel.set_enable(false);
        			}else{
        				//if(this.dsListEtc.getColumn(this.dsListEtc.rowposition, "YN_SERVICE") == "Y"){
        				//	this.FormBtns.Add.set_enable(false);
        				//}
        				this.btnEstimate.set_enable(true);
        				this.btnCancel.set_enable(true);
        				this.btnAgree.set_enable(true);
        			}
        		}else{
        			this.divData.form.divDataBottom.form.tabData.tab1.form.btnReceipt.set_enable(false);
        			this.divData.form.divDataBottom.form.tabData.tab1.form.btnReceiptCancel.set_enable(false);
        			this.divData.form.divDataBottom.form.tabData.tab1.form.btnSpecial.set_enable(false);

        			this.btnEstimate.set_enable(false);
        			this.btnCancel.set_enable(false);
        			this.btnAgree.set_enable(false);
        		}
        	}else{
        		//this.divData.form.divDataBottom.form.tabData.tab1.form.btnReceipt.set_enable(false);
        		//this.divData.form.divDataBottom.form.tabData.tab1.form.btnReceiptCancel.set_enable(false);
        		//this.divData.form.divDataBottom.form.tabData.tab1.form.btnSpecial.set_enable(false);

        		this.btnEstimate.set_enable(false);
        		this.btnCancel.set_enable(false);
        		this.btnAgree.set_enable(false);
        	}

        	/*
        	if (this.YN_READONLY == "Y"){
        		this.FormBtns.Save.set_enable(false);
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        	}
        	*/

        };


        this.divSearch_divSearchDong_ctxtNO_DONG_onkillfocus = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_DONG"))) return;
        	this.dsSearch.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG").padLeft(4, "0"));
        };

        this.divSearch_divSearchDong_ctxtNO_FLOOR_onkillfocus = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_FLOOR"))) return;
        	this.dsSearch.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR").padLeft(2, "0"));
        };

        this.divSearch_divSearchDong_ctxtNO_HO_onkillfocus = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HO"))) return;
        	this.dsSearch.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO").padLeft(3, "0"));
        };

        this.divSearch_ctxt_onkeyup = function(obj,e)
        {
        	if (obj.value.length == obj.maxlength) {
        		switch (obj.id) {
        			case "ctxtNO_DONG":
        				this.divSearch.form.divSearchDong.form.ctxtNO_FLOOR.setFocus();
        				break;
        			case "ctxtNO_FLOOR":
        				this.divSearch.form.divSearchDong.form.ctxtNO_HO.setFocus();
        				break;
        		}
        	}
        };


        this.divSearch_divSearchDong_btnDong_onclick = function(obj,e)
        {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG = "1";

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen("DRI", "DRI_DONGHOCONTRACT", "fnDongCallback", param);
        };

        this.fnDongCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	if (json.DONG.length > 0) {
        		this.dsSearch.setColumn(0, "NO_DONG", json.DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", json.FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", json.HO);

        		this.FormBtns.Select.click();
        	}
        };




        /*
        this.dsList4_onvaluechanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "DT_START") {
        			if(this.gfnIsNull(this.dsList4.getColumn(this.dsList4.rowposition, "DT_END"))){
        				this.dsList4.setColumn(this.dsList4.rowposition, "DT_END", this.dsList4.getColumn(this.dsList4.rowposition, "DT_START"));
        			}
        		}
        	}
        };
        */



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_DONG.addEventHandler("onkillfocus",this.divSearch_divSearchDong_ctxtNO_DONG_onkillfocus,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_DONG.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_FLOOR.addEventHandler("onkillfocus",this.divSearch_divSearchDong_ctxtNO_FLOOR_onkillfocus,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_FLOOR.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_HO.addEventHandler("onkillfocus",this.divSearch_divSearchDong_ctxtNO_HO_onkillfocus,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_HO.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.divSearchDong.form.btnDong.addEventHandler("onclick",this.divSearch_divSearchDong_btnDong_onclick,this);
            this.divData.form.divDataTop.form.objGridEtc.addEventHandler("oncelldblclick",this.divData_divDataTop_objGrid_oncelldblclick,this);
            this.divData.form.divDataBottom.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.divDataBottom.form.tabData.tab1.form.btnSpecial.addEventHandler("onclick",this.divData_divDataBottom_tabData_tab1_btnSpecial_onclick,this);
            this.divData.form.divDataBottom.form.tabData.tab1.form.btnReceiptCancel.addEventHandler("onclick",this.divData_divDataBottom_tabData_tab1_btnReceiptCancel_onclick,this);
            this.divData.form.divDataBottom.form.tabData.tab1.form.btnReceipt.addEventHandler("onclick",this.divData_divDataBottom_tabData_tab1_btnReceipt_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsTabList_onvaluechanged,this);
            this.dsList2.addEventHandler("onvaluechanged",this.dsTabList_onvaluechanged,this);
            this.dsList3.addEventHandler("onvaluechanged",this.dsTabList_onvaluechanged,this);
        };
        this.loadIncludeScript("DLF_RECEIPTDETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
