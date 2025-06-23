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
            this.set_titletext("입고송장");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"입고일자\" type=\"STRING\" size=\"256\"/><Column id=\"현장코드\" type=\"STRING\" size=\"256\"/><Column id=\"현장명\" type=\"STRING\" size=\"256\"/><Column id=\"전출현장코드\" type=\"STRING\" size=\"256\"/><Column id=\"전출현장명\" type=\"STRING\" size=\"256\"/><Column id=\"사업자번호\" type=\"STRING\" size=\"256\"/><Column id=\"거래처명\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/><Column id=\"완료\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"담당자사번\" type=\"STRING\" size=\"256\"/><Column id=\"담당자명\" type=\"STRING\" size=\"256\"/><Column id=\"완료일자\" type=\"STRING\" size=\"256\"/><Column id=\"발주번호\" type=\"STRING\" size=\"256\"/><Column id=\"발주명\" type=\"STRING\" size=\"256\"/><Column id=\"청구번호\" type=\"STRING\" size=\"256\"/><Column id=\"청구명\" type=\"STRING\" size=\"256\"/><Column id=\"송장금액\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"매각공급가\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"매각VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"대표품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"대표품목명\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE_STOCK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR_STOCK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ERPKEY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_A\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_DESC_A\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_B\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_DESC_B\" type=\"STRING\" size=\"256\"/><Column id=\"GW_ERPKEY\" type=\"STRING\" size=\"256\"/><Column id=\"GW_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ID_GWCMP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_INS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_INS\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OVERSEA\" type=\"STRING\" size=\"256\"/><Column id=\"TY_OVERSEA\" type=\"STRING\" size=\"256\"/><Column id=\"CNT_FILE\" type=\"INT\" size=\"256\"/><Column id=\"TY_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT_D\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"현장코드\"/><Col id=\"현장명\"/><Col id=\"전출현장코드\"/><Col id=\"입고일자\"/><Col id=\"전출현장명\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMBPR_INVOBAS_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DMBPR_INVOMST_SAVE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DMBPR_INVOITEMFORGGPM_SELECT</Col></Row><Row><Col id=\"TARGET\">save1</Col><Col id=\"SP\">DMBPR_INVODTL_SAVE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DMBPR_INVOSTK_ACT</Col></Row><Row><Col id=\"TARGET\">exec1</Col><Col id=\"SP\">DMBPR_INVOMST_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_INVOICE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_INVOICE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("<ColumnInfo><Column id=\"순번\" type=\"INT\" size=\"256\"/><Column id=\"CD_DKCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COST\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"하도계약번호\" type=\"STRING\" size=\"256\"/><Column id=\"하도계약명\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"품목명칭\" type=\"STRING\" size=\"256\"/><Column id=\"규격\" type=\"STRING\" size=\"256\"/><Column id=\"현장규격\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"비목\" type=\"STRING\" size=\"256\"/><Column id=\"발주수량\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"발주단가\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"발주금액\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"기입고수량\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"기입고금액\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"입고수량\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"입고단가\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"입고금액\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"누계수량\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"누계금액\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"잔여수량\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"잔여금액\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"입고즉시출고\" type=\"STRING\" size=\"256\"/><Column id=\"발주품목일련번호\" type=\"INT\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_COST\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_잔여수량\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"GR_COST\" type=\"INT\" size=\"256\"/><Column id=\"nx_flag\" type=\"string\" size=\"32\"/><Column id=\"nx_sort\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ACCOUNT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"DATA\">과세</Col></Row><Row><Col id=\"CODE\">면세</Col><Col id=\"DATA\">면세</Col></Row><Row><Col id=\"CODE\">공존</Col><Col id=\"DATA\">공존</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_ACCOUNT_D", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">과세</Col><Col id=\"DATA\">과세</Col></Row><Row><Col id=\"CODE\">면세</Col><Col id=\"DATA\">면세</Col></Row><Row><Col id=\"CODE\">공존</Col><Col id=\"DATA\">공존</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("송장번호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","0.0","sta01:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta02:0.0","sta01:10.0","250","24.0",null,null,null,"300",null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("fittocontents").set("true");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_PO","ccfCD_SITE:0.0","sta01:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("발주서번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_PO","staNO_PO:0.0","sta01:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("CodeFindName").set("DMX_CFPOGGP");
            obj.getSetter("AfterCDTextChanged").set("ccfNO_PO_AfterCDTextChanged");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNO_INVOICE","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_INVOICE","edtNO_INVOICE:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("입고일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_INVOICE","staDT_INVOICE:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0.0","sta01:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","sta01:10.0","250","24.0",null,null,null,"300",null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("CodeFindName").set("DMX_CFVENDOR_GGP");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"90","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00_00","86","24","824","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"25","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("송장정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_SITE00","0","53","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBg00","86","53","824","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edt00","91","59","810","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Combo("cboTY_ACCOUNT","91","29","139","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_ACCOUNT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_SITE00_00","0","24","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("계정구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_SITE00_00_00","234","24","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_text("차변계정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Combo("cboCD_ACCOUNT_D","325","29","219","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsCD_ACCOUNT_D");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnTY_ACCOUNT","cboCD_ACCOUNT_D:10","29","116","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_text("품목코드일괄적용");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staMsg","80","0","1000","25",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("※ 품목코드 일괄적용의 경우 계정구분에 따라 저장품기타, 경비기타, 장비기타로 입고 수량을 입력한 내역에 일괄 셋팅 됩니다.");
            obj.set_font("bold 14px/normal \"Dotum\"");
            obj.set_color("red");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataMedium","0","divDataTop:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"25","0",null,null,null,null,null,this.divData.form.divDataMedium.form);
            obj.set_taborder("0");
            obj.set_text("품목정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMedium.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataMedium.form);
            obj.set_taborder("0");
            obj.set_binddataset("");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataMedium.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","divData.form.divDataTop.form.edt00","value","dsList","비고");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtNO_INVOICE","value","dsSearch","NO_INVOICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_INVOICE","value","dsList","입고일자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsList","현장코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfNO_PO.form.CDTextBox","value","dsList","발주번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsList","사업자번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfNO_PO.form.DSTextBox","value","dsList","발주명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_VENDOR.form.DSTextBox","value","dsList","거래처명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.cboTY_ACCOUNT","value","dsList","TY_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.cboCD_ACCOUNT_D","value","dsList","CD_ACCOUNT_D");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DMB_INVOICEGGP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj, e) {
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

            this.MODE = this.getOwnerFrame().MODE;

            this.fnSetReadonlyControl();
            if (this.MODE == "I") {
                this.dsList.set_enableevent(false);
        		this.dsList.setColumn(0, "현장코드", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsList.setColumn(0, "입고일자",  this.gfnGetDate()); //입고일자
        		this.dsList.setColumn(0, "사업자번호", this.getOwnerFrame().CD_VENDOR);
        		this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.set_value(this.getOwnerFrame().DS_VENDOR);
                this.dsList.set_enableevent(true);

                //this.FormBtns.Add.set_enable(false);
                this.FormBtns.Save.set_enable(true);
                this.FormBtns.Del.set_enable(false);
            } else if (this.MODE == "U") {

                this.dsSearch.setColumn(0, "NO_INVOICE", this.getOwnerFrame().NO_INVOICE);

                this.FormBtns.Select.click();
            }
        };

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(0, "CD_TYPE", "M01");

        // 	this.dsCombo.addRow();
        // 	this.dsCombo.setColumn(1, "CD_SYSTEM", "DM");
        // 	this.dsCombo.setColumn(1, "CD_TYPE", this.dsList.getColumn(0,"TY_ACCOUNT"));

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_ACCOUNT=combo0";// dsCD_ACCOUNT_D=combo1";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

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
            this.btn1 = this.gfnFormButtonAdd("btnConfirm", "fnConfirm"); //검수확정
            this.btn2 = this.gfnFormButtonAdd("btnCancel", "fnCancel"); //확정취소
            this.btn3 = this.gfnFormButtonAdd("btnInDelete", "fnInDelete"); //입고삭제
            this.btn4 = this.gfnFormButtonAdd("btnInAdd", "fnInAdd"); //추가등록
            this.btn5 = this.gfnFormButtonAdd("btnFile", "fnFile"); //파일첨부
        	this.btn6 = this.gfnFormButtonAdd("btnItemAll", "fnItemAll"); //철근단가
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

            this.edtNO_INVOICE = this.divSearch.form.edtNO_INVOICE;
            this.ctclDT_INVOICE = this.divSearch.form.ctclDT_INVOICE; //입고일자
            this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
            this.ccfNO_PO = this.divSearch.form.ccfNO_PO; //발주서번호
            this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR; //거래처코드

            this.dxGrid = this.divData.form.divDataMedium.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

            this.ccfNO_PO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
            this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_PO.AfterCDTextChanged = "ccfNO_PO_AfterCDTextChanged";

            // 그리드 초기화
            this.gfnGridInit(this.dxGrid, this.dsListSub, "DM", "DMB_INVOICEGGP", "DS_COST", "GR_COST");

            this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
            this.dxGrid.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dxGrid.set_enableredraw(false);
            this.gfnGridColumnColor(this.dxGrid, "품목코드", "BACK_GangJo", "YN_COST == 'Y'");
        	this.gfnGridColumnColor(this.dxGrid, "입고수량", "BACK_GangJo", "YN_COST == 'Y'");
        	this.gfnGridColumnColor(this.dxGrid, "입고단가", "BACK_GangJo", "YN_COST == 'Y'");
        	this.gfnGridColumnColor(this.dxGrid, "입고금액", "BACK_GangJo", "YN_COST == 'Y'");
        	this.gfnGridColumnColor(this.dxGrid, "NO_HADOCONT_OUT", "BACK_GangJo", "YN_COST == 'Y'");
        	this.gfnGridColumnColor(this.dxGrid, "DS_HADOCONT_OUT", "BACK_GangJo", "YN_COST == 'Y'");

            this.dxGrid.set_enableredraw(true);
        };
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

            this.dsSelect = new Dataset();
            this.dsSelect.addColumn("NO_INVOICE", "string");

            this.dsSave = new Dataset();
            this.dsSave.addColumn("TY_ACT", "string");
            this.dsSave.addColumn("TY_INVOICE", "string");
            this.dsSave.addColumn("TY_INVOIO", "string");
            this.dsSave.addColumn("DT_INVOICE", "string");
            this.dsSave.addColumn("DT_INVOWK", "string");
            this.dsSave.addColumn("AM_INVOICE", "bigdecimal");
            this.dsSave.addColumn("CD_INSIT", "string");
            this.dsSave.addColumn("CD_OUTSIT", "string");
            this.dsSave.addColumn("NO_PO", "string");
            this.dsSave.addColumn("CD_VENDOR", "string");
            this.dsSave.addColumn("ID_USER", "string");
            this.dsSave.addColumn("NO_INVOICE2", "string");
            this.dsSave.addColumn("RM_BIGO", "string");
            this.dsSave.addColumn("YN_TRAN", "string");
            this.dsSave.addColumn("YN_SELECT", "string");
            this.dsSave.addColumn("NO_MR", "string");
            this.dsSave.addColumn("CD_ITEM", "string");
            this.dsSave.addColumn("CD_SITE_STOCK", "string");
            this.dsSave.addColumn("CD_VENDOR_STOCK", "string");
            this.dsSave.addColumn("AM_CMS", "bigdecimal");
            this.dsSave.addColumn("AM_SUPPLY", "bigdecimal");
            this.dsSave.addColumn("AM_VAT", "bigdecimal");
            this.dsSave.addColumn("TY_ACCOUNT", "string");
        	this.dsSave.addColumn("CD_ACCOUNT_D", "string");
        	this.dsSave.addColumn("NO_INVOICE1", "string");

            this.dsSelect1 = new Dataset();
            this.dsSelect1.addColumn("CD_SITE", "string");
            this.dsSelect1.addColumn("NO_PO", "string");
            this.dsSelect1.addColumn("CD_VENDOR", "string");
            this.dsSelect1.addColumn("CD_INS", "string");
            this.dsSelect1.addColumn("YN_OVERSEA", "string");
            this.dsSelect1.addColumn("NO_INVOICE", "string");
            this.dsSelect1.addColumn("DT_INVOICE", "string");


            this.dsSave1 = new Dataset();
            this.dsSave1.addColumn("TY_ACT", "string");
            this.dsSave1.addColumn("NO_INVOICE1", "string");
            this.dsSave1.addColumn("SN_NO", "int");
            this.dsSave1.addColumn("CD_ITEM", "string");
            this.dsSave1.addColumn("TY_ITEM", "string");
            this.dsSave1.addColumn("NO_CONTROL", "string");
            this.dsSave1.addColumn("QN_ITEM", "bigdecimal");
            this.dsSave1.addColumn("UP_ITEM", "bigdecimal");
            this.dsSave1.addColumn("AM_ITEM", "bigdecimal");
            this.dsSave1.addColumn("CD_COST", "string");
            this.dsSave1.addColumn("NO_LC", "string");
            this.dsSave1.addColumn("ID_USER", "string");
            this.dsSave1.addColumn("NO_REVINVOICE", "string");
            this.dsSave1.addColumn("SN_REVNO", "int");
            this.dsSave1.addColumn("YN_INPUT", "string");
            this.dsSave1.addColumn("NO_SERIAL", "string");
            this.dsSave1.addColumn("RM_ETC", "string");
            this.dsSave1.addColumn("SZ_SITEITEM", "string");
            this.dsSave1.addColumn("YN_TRAN", "string");
            this.dsSave1.addColumn("YN_SELECT", "string");
            this.dsSave1.addColumn("NO_GASOLJAE", "string");
            this.dsSave1.addColumn("UP_CMS", "bigdecimal");
            this.dsSave1.addColumn("AM_CMS", "bigdecimal");
            this.dsSave1.addColumn("NO_HADOCONT", "string");
            this.dsSave1.addColumn("CNT_GASOLJAE_MONTH", "int");
            this.dsSave1.addColumn("CD_COST_IN", "string");
            this.dsSave1.addColumn("NO_HADOCONT_IN", "string");
            this.dsSave1.addColumn("CD_COST_OUT", "string");
            this.dsSave1.addColumn("NO_HADOCONT_OUT", "string");
            this.dsSave1.addColumn("CD_VENDOR", "string");
        	this.dsSave1.addColumn("NO_HADOCONT_JAKUP", "string");

            this.dsExec = new Dataset();
            this.dsExec.addColumn("TY_ACT", "string");
            this.dsExec.addColumn("NO_INVOICE1", "string");
            this.dsExec.addColumn("NO_INVOICE2", "string");
            this.dsExec.addColumn("ID_USER", "string");
            this.dsExec.addColumn("CD_DEPT_LOGIN", "string");

            this.dsExec1 = new Dataset();
            this.dsExec1.addColumn("TY_ACT", "string");
            this.dsExec1.addColumn("DT_INVOICE", "string");
            this.dsExec1.addColumn("CD_INSIT", "string");
            this.dsExec1.addColumn("CD_OUTSIT", "string");
            this.dsExec1.addColumn("ID_USER", "string");
            this.dsExec1.addColumn("TY_ACCOUNT", "string");
        	this.dsExec1.addColumn("CD_ACCOUNT_D", "string");
            this.dsExec1.addColumn("NO_INVOICE1", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         *	조회 버튼
         */
        this.fnSelect = function() {
            if (this.MODE == "I") return false;

            this.dsSelect.clearData();
            this.dsSelect.addRow();

            this.dsSelect.setColumn(0, "NO_INVOICE", this.dsSearch.getColumn(0, "NO_INVOICE").replace(/\-/g, ''));

            var strSvcId = "select";
            var strSvcType = "grid";
            var inProc = "_dsProc";
            var inData = "select=dsSelect";
            var outData = "dsList=select0";
            var strArg = "";
            var callBackFnc = "fnCallback";

            this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                strSvcType, // transaction을 요청할 구분
                inProc, // Procedure 정보 Dataset 이름
                inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                callBackFnc); // 통신방법 정의 [생략가능]
        }


        /*
         *	입력 버튼
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
         *	저장 버튼
         */
        this.fnSave = function() {

            // 그리드 필수항목 체크
            if (!this.gfnGridValidate(this.dxGrid)) return;

            this.dsSave.clearData();

            if (this.dsList.rowcount > 0) {
                var nrow = this.dsSave.addRow();
                this.dsSave.setColumn(nrow, "TY_ACT", this.MODE);
                this.dsSave.setColumn(nrow, "TY_INVOICE", "GGP");
                this.dsSave.setColumn(nrow, "TY_INVOIO", "I");
                this.dsSave.setColumn(nrow, "DT_INVOICE", this.dsList.getColumn(0, "입고일자"));
                this.dsSave.setColumn(nrow, "DT_INVOWK", "");
                this.dsSave.setColumn(nrow, "AM_INVOICE", this.dsListSub.getSum("입고금액")); // 그리드 AM_ITEM 의 합계
                this.dsSave.setColumn(nrow, "CD_INSIT", this.dsList.getColumn(0, "현장코드"));
                this.dsSave.setColumn(nrow, "CD_OUTSIT", this.dsList.getColumn(0, "현장코드"));
                this.dsSave.setColumn(nrow, "NO_PO", this.dsList.getColumn(0, "발주번호"));
                this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "사업자번호"));
                this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
                this.dsSave.setColumn(nrow, "NO_INVOICE2", "");
                this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(0, "비고"));
                this.dsSave.setColumn(nrow, "YN_TRAN", "");
                this.dsSave.setColumn(nrow, "YN_SELECT", "");
                this.dsSave.setColumn(nrow, "NO_MR", "");
                this.dsSave.setColumn(nrow, "CD_ITEM", "");
                this.dsSave.setColumn(nrow, "CD_SITE_STOCK", "");
                this.dsSave.setColumn(nrow, "CD_VENDOR_STOCK", "");
                this.dsSave.setColumn(nrow, "AM_CMS", "");
                this.dsSave.setColumn(nrow, "AM_SUPPLY", "");
                this.dsSave.setColumn(nrow, "AM_VAT", "");
        		this.dsSave.setColumn(nrow, "TY_ACCOUNT", this.dsList.getColumn(0, "TY_ACCOUNT"));
        		this.dsSave.setColumn(nrow, "CD_ACCOUNT_D", this.dsList.getColumn(0, "CD_ACCOUNT_D"));
        		this.dsSave.setColumn(nrow, "NO_INVOICE1", this.dsSearch.getColumn(0, "NO_INVOICE").replace(/\-/g, ''));
            }

            if (this.dsSave.rowcount == 0) return;

            var strSvcId = "save";
            var strSvcType = "save";
            var inProc = "_dsProc";
            var inData = "save=dsSave";
            var outData = "dsOutput=save";
            var strArg = "";
            var callBackFnc = "fnCallback";

            this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                strSvcType, // transaction을 요청할 구분
                inProc, // Procedure 정보 Dataset 이름
                inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
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
        this.fnPrint = function() {}

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
            var validate = true;

            if (this.gfnIsNull(this.dsList.getColumn(0, "현장코드"))) {
                validate = false;
                // Alert후 실행할 처리
                this.fnVaidateCallback = function() {
                    this.ccfCD_SITE.form.CDTextBox.setFocus();
                }
                this.gfnAlert("현장코드 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
            } else if (this.gfnIsNull(this.dsList.getColumn(0, "입고일자"))) {
                validate = false;
                // Alert후 실행할 처리
                this.fnVaidateCallback = function() {
                    this.ctclDT_INVOICE.form.CDTextBox.setFocus();
                }
                this.gfnAlert("입고일자는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
            } else if (this.gfnIsNull(this.dsList.getColumn(0, "사업자번호"))) {
                validate = false;
                // Alert후 실행할 처리
                this.fnVaidateCallback = function() {
                    this.ccfCD_VENDOR.form.CDTextBox.setFocus();
                }
                this.gfnAlert("거래처는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
            } else if (this.gfnIsNull(this.dsList.getColumn(0, "발주번호"))) {
                validate = false;
                // Alert후 실행할 처리
                this.fnVaidateCallback = function() {
                    this.ccfNO_PO.form.CDTextBox.setFocus();
                }
                this.gfnAlert("발주서 번호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
            }
            return validate;

        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
            if (svcID == "select") {
                this.gfnSetFormStatus(this, "Q");

                this.fnSetReadonlyControl();
        		this.fnTyAccountDSelect(this.dsList.getColumn(this.dsList.rowposition,"TY_ACCOUNT"));

                // 첨부파일 개수 설정
                if (this.dsList.getColumn(0, "CNT_FILE") > 0) {
                    this.btn5.set_text("첨부파일(" + this.dsList.getColumn(0, "CNT_FILE") + ")");
                } else {
                    this.btn5.set_text("첨부파일");
                }
                this.btn5.parent.fnSetBtn();

                // 버튼설정
                if (this.dsList.getColumn(0, "YN_CONFIRM") == "Y") {
                    this.btn1.set_enable(false);
                    this.btn2.set_enable(true);
                    this.btn3.set_enable(false);
        			this.divData.form.divDataTop.form.edt00.set_readonly(true);
                } else {
                    this.btn1.set_enable(true);
                    this.btn2.set_enable(false);
                    this.btn3.set_enable(true);
        			this.divData.form.divDataTop.form.edt00.set_readonly(false);
                }


                this.fnSelect1();
            } else if (svcID == "save") {
                if (errorCode == 0) {

                    if (this.MODE == "I") {
        				if (this.dsOutput.rowcount > 0) {
        					var no_invoice = this.dsOutput.getColumn(0, "NO_INVOICE1");
        					// trace(this.dsOutput.saveXML());
        					// alert("송장번호" + this.dsOutput.getColumn(0, "NO_INVOICE1"));

                            // 송장번호 edit 박스에 셋팅
        					this.edtNO_INVOICE.set_value(no_invoice);
                            this.MODE = "U";
                        } else {
                            return;
                        }
                    }

                    // 디테일 저장
                    this.fnSave1();
                } else {
                    this.gfnAlert(errorMsg);
                }
            } else if (svcID == "save1") {
                this.gfnConfirm("검수를 확정하시겠습니까?", "fnSaveAf_callback");
        	   // this.FormBtns.Select.click();
                //this.fnSelect1();

            } else if (svcID == "exec") {
                if (errorCode == 0) {
                    this.gfnAlert("입고송장 확정이 완료되었습니다.");
                    this.FormBtns.Select.click();
                } else {
                    this.gfnAlert(errorMsg);
                }
            } else if (svcID == "execsub") {
                if (errorCode == 0) {
                    this.gfnAlert("입고송장 확정이 취소되었습니다.");
                    this.FormBtns.Select.click();
                } else {
                    this.gfnAlert(errorMsg);
                }
            } else if (svcID == "exec1") {
                if (errorCode == 0) {
                    this.gfnAlert("삭제 되었습니다.", "fnCloseForm");
                } else {
                    this.gfnAlert(errorMsg);
                }
            }else if(svcID == "select1"){
        		trace(this.dsListSub.saveXML());

        	}
        }


        this.fnCloseForm = function() {
            this.getParentContext().close(true);
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

            if (id == "ccfNO_PO") {
        		if(this.gfnIsNull(this.dsList.getColumn(0, "현장코드")))
        		{
        			this.fnBeforeUserDataSetParam_callback = function()
        			{
        				this.divSearch.form.ccfCD_SITE.setFocus();
        			}

        			this.gfnAlert("현장코드를 선택해주세요.", "fnBeforeUserDataSetParam_callback");
        			return false;
        		}

                dsUserParam.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "현장코드"));

            } else if (id == "ccfCD_VENDOR") {
        		if(this.gfnIsNull(this.dsList.getColumn(0, "현장코드")))
        		{
        			this.fnBeforeUserDataSetParam_callback = function()
        			{
        				this.divSearch.form.ccfCD_SITE.setFocus();
        			}

        			this.gfnAlert("현장코드를 선택해주세요.", "fnBeforeUserDataSetParam_callback");
        			return false;
        		}
        		else if(this.gfnIsNull(this.dsList.getColumn(0, "발주번호")))
        		{
        			this.fnBeforeUserDataSetParam_callback = function()
        			{
        				this.divSearch.form.ccfNO_PO.setFocus();
        			}

        			this.gfnAlert("발주서번호를 선택해주세요.", "fnBeforeUserDataSetParam_callback");
        			return false;
        		}

                dsUserParam.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "현장코드"));
                dsUserParam.setColumn(nrow, "NO_PO", this.dsList.getColumn(0, "발주번호"));
                dsUserParam.setColumn(nrow, "CD_INS", "");
        	} else if (id == "DMX_CFITEMUP") {
        	    dsUserParam.setColumn(nrow, "CD_UPPER", this.dsListSub.getColumn(nrow,"CD_SMALLITEM"));
        		dsUserParam.setColumn(nrow, "YM_INS", this.dsList.getColumn(0, "입고일자").substr(0,6));
        		dsUserParam.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "사업자번호"));
        		dsUserParam.setColumn(nrow, "UP_ITEM", this.dsListSub.getColumn(this.dsListSub.rowposition,"입고단가"));
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "현장코드"));
            } else if (id == "DWX_JIK_NOHADOCONT") {
        	    dsUserParam.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "현장코드"));
        		dsUserParam.setColumn(nrow, "CD_COST", this.dsListSub.getColumn(this.dsListSub.rowposition,"CD_COST"));
        	}
            return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
            var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        	if (colnm == "입고즉시출고") {
                if (this.gfnIsNull(this.dsListSub.getColumn(row, "품목코드"))) {
                    return false;
                } else {
                    return true;
                }
            }
        	else if(colnm == "입고단가")
        	{
        		if(this.dsListSub.getColumn(row, "YN_EDIT_UP") == "Y")
        		{
        			return true;
        		}
        		else
        		{
        			return false;
        		}
        	}
        	else if(colnm == "입고금액")
        	{
        		if(this.dsListSub.getColumn(row, "YN_EDIT_AM") != "Y")
        		{
        			return false;
        		}
        	}
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        	if(e.columnid == "입고수량") {
        		if(e.oldvalue != e.newvalue) {
        			//var usingToFixed = +((this.dsListSub.getColumn(this.dsListSub.rowposition, "입고수량")*1000)*this.dsListSub.getColumn(this.dsListSub.rowposition, "입고단가"));


        			var usingToFixed = ((this.dsListSub.getColumn(this.dsListSub.rowposition, "입고수량") * 10000) * this.dsListSub.getColumn(this.dsListSub.rowposition, "입고단가")) / 10000;
        			this.dsListSub.setColumn(this.dsListSub.rowposition, "입고금액", usingToFixed);
        			//this.dsListSub.setColumn(this.dsListSub.rowposition, "입고금액", (nexacro.toNumber(this.dsListSub.getColumn(this.dsListSub.rowposition, "입고수량"),0).toFixed(12) * this.dsListSub.getColumn(this.dsListSub.rowposition, "입고단가").toFixed(12)));
        		}
        	}
        }

        this.ccfNO_PO_AfterCDTextChanged = function(id, codeFindData) {
            // 코드,명칭 외 추가 컬럼 처리
            var arr = codeFindData;
            var cd_vendor = "";
            var ds_vendor = "";

            if (arr.length > 0) {
                cd_vendor = arr[0]["CD_VENDOR"];
                ds_vendor = arr[0]["DS_VENDOR"];
            }
            this.ccfCD_VENDOR.form.CDTextBox.set_value(cd_vendor);
            this.ccfCD_VENDOR.form.DSTextBox.set_value(ds_vendor);

            // 선택된 데이터가 있으면 그리드 조회
            if (arr.length > 0) {
                this.fnSelect1();
            }
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회1 버튼
         */
        this.fnSelect1 = function() {
            if (!this.fnValidate()) return false;

            this.dsSelect1.clearData();
            this.dsSelect1.addRow();

            this.dsSelect1.setColumn(0, "CD_SITE", this.dsList.getColumn(0, "현장코드"));
            this.dsSelect1.setColumn(0, "NO_PO", this.dsList.getColumn(0, "발주번호"));
            this.dsSelect1.setColumn(0, "CD_VENDOR", this.dsList.getColumn(0, "사업자번호"));
            this.dsSelect1.setColumn(0, "CD_INS", "");
            this.dsSelect1.setColumn(0, "YN_OVERSEA", "");
            this.dsSelect1.setColumn(0, "NO_INVOICE", this.dsSearch.getColumn(0, "NO_INVOICE").replace(/\-/g, ''));
            this.dsSelect1.setColumn(0, "DT_INVOICE", this.dsList.getColumn(0, "입고일자"));

            var strSvcId = "select1";
            var strSvcType = "grid";
            var inProc = "_dsProc";
            var inData = "select1=dsSelect1";
            var outData = "dsListSub=select10";
            var strArg = "";
            var callBackFnc = "fnCallback";

            this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                strSvcType, // transaction을 요청할 구분
                inProc, // Procedure 정보 Dataset 이름
                inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	저장1 버튼
         */
        this.fnSave1 = function() {
            if (!this.gfnGridValidate(this.dxGrid)) return;

            this.dxGrid.updateToDataset();

            this.dsSave1.clearData();

            for (var i = 0; i < this.dsListSub.rowcount; i++) {
                var flag = this.gfnGetFlag(this.dsListSub, i);
                switch (flag) {
                    case "I":
                    case "U":
                    case "D":
                        var nrow = this.dsSave1.addRow();
                        this.dsSave1.setColumn(nrow, "TY_ACT", flag);
                        this.dsSave1.setColumn(nrow, "NO_INVOICE1", this.dsSearch.getColumn(0, "NO_INVOICE").replace(/\-/g, ''));
                        this.dsSave1.setColumn(nrow, "SN_NO", this.dsListSub.getColumn(i, "순번"));
                        this.dsSave1.setColumn(nrow, "CD_ITEM", this.dsListSub.getColumn(i, "품목코드"));
                        this.dsSave1.setColumn(nrow, "TY_ITEM", this.dsListSub.getColumn(i, "비목"));
                        this.dsSave1.setColumn(nrow, "QN_ITEM", this.dsListSub.getColumn(i, "입고수량"));
                        this.dsSave1.setColumn(nrow, "UP_ITEM", this.dsListSub.getColumn(i, "입고단가"));
                        this.dsSave1.setColumn(nrow, "AM_ITEM", this.dsListSub.getColumn(i, "입고금액"));
                        this.dsSave1.setColumn(nrow, "CD_COST", this.dsListSub.getColumn(i, "CD_COST"));
                        this.dsSave1.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
                        this.dsSave1.setColumn(nrow, "YN_INPUT", this.dsListSub.getColumn(i, "입고즉시출고"));
                        this.dsSave1.setColumn(nrow, "RM_ETC", this.dsListSub.getColumn(i, "비고"));
                        this.dsSave1.setColumn(nrow, "SZ_SITEITEM", this.dsListSub.getColumn(i, "현장규격"));
                        this.dsSave1.setColumn(nrow, "NO_HADOCONT", this.dsListSub.getColumn(i, "하도계약번호"));
                        this.dsSave1.setColumn(nrow, "CD_COST_OUT", this.dsListSub.getColumn(i, "CD_COST"));
                        this.dsSave1.setColumn(nrow, "NO_HADOCONT_OUT", this.dsListSub.getColumn(i, "NO_HADOCONT_OUT"));
        				this.dsSave1.setColumn(nrow, "NO_HADOCONT_JAKUP", this.dsListSub.getColumn(i, "NO_HADOCONT_JAKUP"));
                        break;
                }
            }
            if (this.dsSave1.rowcount == 0) {
                this.FormBtns.Select.click();
                return;
            }

            var strSvcId = "save1";
            var strSvcType = "save";
            var inProc = "_dsProc";
            var inData = "save1=dsSave1";
            var outData = "";
            var strArg = "";
            var callBackFnc = "fnCallback";

            this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                strSvcType, // transaction을 요청할 구분
                inProc, // Procedure 정보 Dataset 이름
                inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                callBackFnc); // 통신방법 정의 [생략가능]
        }


        // 검수확정
        this.fnConfirm = function(obj, e) {
            if (!this.fnValidate()) return;

            this.gfnConfirm("입고작업을 확정 하시겠습니까?", "fnConfirm_callback");
        };

        this.fnConfirm_callback = function(strId, val) {
            if (val == false) {
                return false;
            }
            this.dsExec.clearData();
            this.dsExec.addRow();

            this.dsExec.setColumn(0, "TY_ACT", "I");
            this.dsExec.setColumn(0, "NO_INVOICE1", this.dsSearch.getColumn(0, "NO_INVOICE").replace(/\-/g, '')); //송장번호
            this.dsExec.setColumn(0, "NO_INVOICE2", "");
            this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
            this.dsExec.setColumn(0, "CD_DEPT_LOGIN", "");

            var strSvcId = "exec";
            var strSvcType = "save";
            var inProc = "_dsProc";
            var inData = "exec=dsExec";
            var outData = "";
            var strArg = "";
            var callBackFnc = "fnCallback";

            this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                strSvcType, // trabsaction을 요청할 구분
                inProc, // Procedure 정보 Dataset 이름
                inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                callBackFnc); // 통신방법 정의 [생략가능]
        };


        // 확정취소
        this.fnCancel = function(obj, e) {
            if (!this.fnValidate()) return;

            this.gfnConfirm("입고작업을 확정취소 하시겠습니까?", "fnCancel_callback");
        };

        this.fnCancel_callback = function(strId, val) {
            if (val == false) {
                return false;
            }
            this.dsExec.clearData();
            this.dsExec.addRow();

            this.dsExec.setColumn(0, "TY_ACT", "D");
            this.dsExec.setColumn(0, "NO_INVOICE1", this.dsSearch.getColumn(0, "NO_INVOICE").replace(/\-/g, '')); //송장번호
            this.dsExec.setColumn(0, "NO_INVOICE2", "");
            this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
            this.dsExec.setColumn(0, "CD_DEPT_LOGIN", "");

            var strSvcId = "execsub";
            var strSvcType = "save";
            var inProc = "_dsProc";
            var inData = "exec=dsExec";
            var outData = "";
            var strArg = "";
            var callBackFnc = "fnCallback";

            this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                strSvcType, // trabsaction을 요청할 구분
                inProc, // Procedure 정보 Dataset 이름
                inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                callBackFnc); // 통신방법 정의 [생략가능]
        };

        // 입고삭제
        this.fnInDelete = function(obj, e) {
            if (!this.fnValidate()) return;

            this.gfnConfirm("입고송장을 삭제하시겠습니까?", "fnInDelete_callback");
        };

        this.fnInDelete_callback = function(strId, val) {
            if (val == false) {
                return false;
            }
            this.dsExec1.clearData();
            this.dsExec1.addRow();

            this.dsExec1.setColumn(0, "TY_ACT", "D");
            this.dsExec1.setColumn(0, "DT_INVOICE", this.dsList.getColumn(0, "입고일자"));
            this.dsExec1.setColumn(0, "CD_INSIT", this.dsList.getColumn(0, "현장코드"));
            this.dsExec1.setColumn(0, "CD_OUTSIT", this.dsList.getColumn(0, "현장코드"));
            this.dsExec1.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExec1.setColumn(0, "TY_ACCOUNT", this.dsList.getColumn(0, "TY_ACCOUNT"));
        	this.dsExec1.setColumn(0, "CD_ACCOUNT_D", this.dsList.getColumn(0, "CD_ACCOUNT_D"));
            this.dsExec1.setColumn(0, "NO_INVOICE1", this.dsSearch.getColumn(0, "NO_INVOICE").replace(/\-/g, '')); //송장번호



            var strSvcId = "exec1";
            var strSvcType = "save";
            var inProc = "_dsProc";
            var inData = "exec1=dsExec1";
            var outData = "";
            var strArg = "";
            var callBackFnc = "fnCallback";
            //trace(this.dsSave1.saveXML());
            this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                strSvcType, // trabsaction을 요청할 구분
                inProc, // Procedure 정보 Dataset 이름
                inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                callBackFnc); // 통신방법 정의 [생략가능]
        };

        // 추가등록
        this.fnInAdd = function(obj, e) {

            this.MODE = "I";

            var cd_site = this.dsList.getColumn(0, "현장코드");
            var ds_site = this.dsList.getColumn(0, "현장명");

            this.dsSearch.setColumn(0, "NO_INVOICE", "");
            this.dsList.clearData();
            this.dsListSub.clearData();
            this.dsList.addRow();

            this.dsList.set_enableevent(false);
            this.dsList.setColumn(0, "현장코드", cd_site);
            this.dsList.setColumn(0, "현장명", ds_site);
            this.dsList.setColumn(0, "입고일자", this.gfnGetDate()); //입고일자
            this.dsList.set_enableevent(true);

            this.fnSetReadonlyControl();
            this.gfnSetFormStatus(this);
            this.FormBtns.Save.set_enable(true);
        }

        // 파일첨부
        this.fnFile = function(obj, e) {

            var cd_site = this.dsList.getColumn(0, "현장코드");
            var no_invoice = this.dsSearch.getColumn(0, "NO_INVOICE").replace(/\-/g, '');

            var fileManager = {};
            fileManager.CD_GUBUN = "DM50";
            fileManager.CD_DIR = [cd_site, no_invoice];

            if (this.FormInfo.TY_AUTH == "R") {
                fileManager.IS_READONLY = true;
            } else {
                fileManager.IS_READONLY = false;
            }

            this.gfnFileManager(fileManager, "fnFileCallback");
        }

        this.fnFileCallback = function(strID, val) {
            // val.IsChange : 변경여부, val.Cnt : 파일개수

            // 변경시 조회를 다시 하거나
            // 	if(val.IsChange == true) {
            // 		this.FormBtns.Select.click();
            // 	}

            // 파일개수를 다시 셋팅
            if (val.Cnt == 0) {
                this.btn5.set_text("첨부파일");
            } else {
                this.btn5.set_text("첨부파일(" + val.Cnt + ")");
            }
            this.btn5.parent.fnSetBtn();
        };

        this.fnItemAll = function(obj, e) {
        	var param = {};

        	if(	this.gfnIsNull(this.dsList.getColumn(0, "현장코드")) ||
        		this.gfnIsNull(this.dsList.getColumn(0, "입고일자"))){
        		this.gfnAlert("입고일자 및 현장코드를 입력하세요!");
        		return
        	};

        	param.CD_SITE 	= this.dsList.getColumn(0, "현장코드");
        	param.DS_SITE 	= this.divSearch.form.ccfCD_SITE.form.DSTextBox.value;
        	param.CD_VENDOR = this.dsList.getColumn(0, "사업자번호");
        	param.DS_VENDOR = this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.value;;
        	param.YM_WORK 	= this.dsList.getColumn(0, "입고일자").substring(0,6);
        	console.info(param);
        	this.gfnFormOpen("DMA", "DMA_SDINSITEM_ALL", "fnGGP_Callback", param);
        };

        this.dsList_onvaluechanged = function(obj, e) {
            if (this.MODE == "U" && e.newvalue != e.oldvalue) {
                this.gfnSetFormStatus(this, "U");
            }
        };

        this.fnSetReadonlyControl = function() {
            if (this.MODE == "I") {
                this.ccfCD_SITE.form.set_readonly(false);
                this.ccfNO_PO.form.set_readonly(false);
                this.ccfCD_VENDOR.form.set_readonly(false);
            } else {
                this.ccfCD_SITE.form.set_readonly(true);
                this.ccfNO_PO.form.set_readonly(true);
                this.ccfCD_VENDOR.form.set_readonly(true);
            }
        }

        this.divData_divDataTop_cboTY_ACCOUNT_onitemchanged = function(obj,e)
        {
        	this.fnTyAccountDSelect(obj.value);
        };

        this.fnTyAccountDSelect = function(cd)
        {
        	this.dsCombo.clearData();
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(0, "CD_TYPE", cd);

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_ACCOUNT_D=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnSaveAf_callback = function(strId, val) {
        	if(val == true) {
        		//this.conflag = "I";
        		this.fnConfirm_callback(strId, val);
        	}else{
        		//this.fn_masterinfo();
        		this.FormBtns.Select.click();
        	}
        };


        // 품목코드 일괄적용 버튼 클릭 이벤트.
        this.divData_divDataTop_btnTY_ACCOUNT_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsList.getColumn(0, "TY_ACCOUNT")))
        	{
        		this.gfnAlert("송장정보의 계정구분을 먼저 입력해주십시오.");
        		return false;
        	}

        	for(var i = 0; i < this.dsListSub.rowcount; i++)
        	{
        		if(nexacro.toNumber(this.dsListSub.getColumn(i, "입고수량"),0) != 0)
        		{
        			// A0110013 경비기타, A0110014 장비기타, A0110016 저장품기타

        			var ty_account = "";
        			switch(this.dsList.getColumn(0, "TY_ACCOUNT"))
        			{
        				case "CD01" :  ty_account = "A0110016";
        					break;
        				case "CD02" :  ty_account = "A0110013";
        					break;
        				case "CD03" :  ty_account = "A0110014";
        					break;
        			}

        			this.dsListSub.setColumn(i, "품목코드", ty_account);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divDataTop.form.cboTY_ACCOUNT.addEventHandler("onitemchanged",this.divData_divDataTop_cboTY_ACCOUNT_onitemchanged,this);
            this.divData.form.divDataTop.form.btnTY_ACCOUNT.addEventHandler("onclick",this.divData_divDataTop_btnTY_ACCOUNT_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DMB_INVOICEGGP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
