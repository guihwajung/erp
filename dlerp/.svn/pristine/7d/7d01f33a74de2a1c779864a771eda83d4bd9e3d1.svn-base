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
                this._setFormPosition(820,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DQDPR_CUSTOMER_AR_IF_INSERT</Col></Row><Row><Col id=\"SP\">DQDPR_SAP_PARAM_INSERT</Col><Col id=\"TARGET\">exec</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProcSap", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"KTOKD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME1\" type=\"STRING\" size=\"256\"/><Column id=\"SUPPL1\" type=\"STRING\" size=\"256\"/><Column id=\"SUPPL2\" type=\"STRING\" size=\"256\"/><Column id=\"LAND1\" type=\"STRING\" size=\"256\"/><Column id=\"REGIO\" type=\"STRING\" size=\"256\"/><Column id=\"STCD2\" type=\"STRING\" size=\"256\"/><Column id=\"J_1KFREPRE\" type=\"STRING\" size=\"256\"/><Column id=\"STCD1\" type=\"STRING\" size=\"256\"/><Column id=\"J_1KFTBUS\" type=\"STRING\" size=\"256\"/><Column id=\"J_1KFTIND\" type=\"STRING\" size=\"256\"/><Column id=\"ZSALES\" type=\"STRING\" size=\"256\"/><Column id=\"VKBUR\" type=\"STRING\" size=\"256\"/><Column id=\"INCO1\" type=\"STRING\" size=\"256\"/><Column id=\"ZTERM\" type=\"STRING\" size=\"256\"/><Column id=\"TAXKD\" type=\"STRING\" size=\"256\"/><Column id=\"PSTLZ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"KTOKD\"/><Col id=\"NAME1\"/><Col id=\"SUPPL1\"/><Col id=\"SUPPL2\"/><Col id=\"LAND1\">KR</Col><Col id=\"REGIO\"/><Col id=\"STCD2\"/><Col id=\"J_1KFREPRE\"/><Col id=\"STCD1\"/><Col id=\"J_1KFTBUS\"/><Col id=\"J_1KFTIND\"/><Col id=\"ZSALES\"/><Col id=\"VKBUR\"/><Col id=\"INCO1\"/><Col id=\"ZTERM\"/><Col id=\"TAXKD\"/><Col id=\"PSTLZ\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOT_ITAB", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOT_ADDR", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBgIN_TELF00","507","93","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgIN_SORTL00","109","151","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("매출(SAP) 거래처코드 생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIN_STCD2","0","staTITLE:5","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("고객 계정 그룹");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIN_KTOKK","0","staIN_STCD2:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("사업자등록번호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIN_NAME1","0","staIN_KTOKK:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("우편번호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIN_SORTL","0","staIN_NAME1:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("대표자이름");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIN_PSTLZ","0","staIN_SORTL:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("업 종");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIN_ORT01","0","staIN_PSTLZ:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("지급 조건");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgIN_STCD2","staIN_STCD2:-1","staTITLE:5","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgIN_KTOKK","staIN_KTOKK:-1","staBgIN_STCD2:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgIN_NAME1","staIN_NAME1:-1","staBgIN_KTOKK:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgIN_SORTL","staIN_SORTL:-1","staBgIN_NAME1:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgIN_ORT01","staIN_ORT01:-1","180","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIN_TELF1","staBgIN_STCD2:-1","staTITLE:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("고객명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIN_TELF2","staBgIN_KTOKK:-1","staIN_TELF1:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("지역");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIN_LFURL","staBgIN_NAME1:-1","staIN_TELF2:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("상세주소");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIN_J_1KFREPRE","staBgIN_SORTL:-1","staIN_LFURL:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("대표자주민번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIN_STCD1","408","staIN_J_1KFREPRE:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("업 태");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIN_J_1KFTBUS","staBgIN_ORT01:-1","staIN_STCD1:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("인도조건");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgIN_TELF1","staIN_TELF1:-1","staTITLE:5","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgIN_TELF2","staIN_TELF2:-1","staBgIN_TELF1:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgIN_J_1KFREPRE","staIN_J_1KFREPRE:-1","122","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgIN_STCD1","staIN_STCD1:-1","staBgIN_J_1KFREPRE:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgIN_J_1KFTBUS","staIN_J_1KFTBUS:-1","staBgIN_STCD1:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfZTERM","114","185","290","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNAME1","staIN_TELF1:4","staTITLE:10","290","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtSUPPL2","staIN_TELF2:4","ctxtNAME1:38","290","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtJ_1KFREPRE","staIN_J_1KFREPRE:-394","127","290","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtJ_1KFTBUS","staIN_STCD1:4","ctxtJ_1KFREPRE:9","290","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","38.66%","228","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","49.27%","228","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfKTOKD","114","40","290","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfREGIO","512","69","290","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtSTCD1","512","127","290","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtJ_1KFTIND","114","156","290","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfINCO1","512","185","290","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtSTCD2","114","69","290","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfPSTLZ","114","98","290","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divData.form.ccfKTOKD.form.CDTextBox","value","dsList","KTOKD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ccfREGIO.form.CDTextBox","value","dsList","REGIO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfINCO1.form.CDTextBox","value","dsList","INCO1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfZTERM.form.CDTextBox","value","dsList","ZTERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctxtNAME1","value","dsList","NAME1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctxtSUPPL2","value","dsList","SUPPL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ctxtSTCD2","value","dsList","STCD2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctxtJ_1KFREPRE","value","dsList","J_1KFREPRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctxtJ_1KFTBUS","value","dsList","J_1KFTBUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ctxtSTCD1","value","dsList","STCD1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ctxtJ_1KFTIND","value","dsList","J_1KFTIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.ccfPSTLZ.form.CDTextBox","value","dsList","PSTLZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ccfPSTLZ.form.DSTextBox","value","dsList","SUPPL1");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DQD_VENDOR_AR_CREATE.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        //this.beAfGun = "";	// sap처리전에는 값이 [be]가 셋팅되고 처리후에는 [af]가 셋팅된다(이력저장 구분용)

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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfKTOKD = this.divData.form.ccfKTOKD;
        	this.ccfREGIO = this.divData.form.ccfREGIO;
        	this.ccfINCO1 = this.divData.form.ccfINCO1;
        	this.ccfZTERM = this.divData.form.ccfZTERM;
        	this.ccfPSTLZ = this.divData.form.ccfPSTLZ;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfKTOKD.CodeFindName = "CF_CODE_DQ_S09";
        	this.ccfREGIO.CodeFindName = "CF_CODE_DQ_S05";
        	this.ccfINCO1.CodeFindName = "CF_CODE_DH_S14";
        	this.ccfZTERM.CodeFindName = "CF_CODE_DH_S06";
        	this.ccfPSTLZ.CodeFindName = "DZX_CFZIP_STREET";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelectSap = new Dataset();
        	this.dsSelectSap.addColumn("KTOKD", "string");
        	this.dsSelectSap.addColumn("NAME1", "string");
        	this.dsSelectSap.addColumn("SUPPL1", "string");
        	this.dsSelectSap.addColumn("SUPPL2", "string");
        	this.dsSelectSap.addColumn("LAND1", "string");
        	this.dsSelectSap.addColumn("REGIO", "string");
        	this.dsSelectSap.addColumn("STCD2", "string");
        	this.dsSelectSap.addColumn("J_1KFREPRE", "string");
        	this.dsSelectSap.addColumn("STCD1", "string");
        	this.dsSelectSap.addColumn("J_1KFTBUS", "string");
        	this.dsSelectSap.addColumn("J_1KFTIND", "string");
        	this.dsSelectSap.addColumn("ZSALES", "string");
        	this.dsSelectSap.addColumn("VKBUR", "string");
        	this.dsSelectSap.addColumn("INCO1", "string");
        	this.dsSelectSap.addColumn("ZTERM", "string");
        	this.dsSelectSap.addColumn("TAXKD", "string");
        	this.dsSelectSap.addColumn("PSTLZ", "string");
        	//this.dsSelectSap.addColumn("LIFNR", "string");
        	//this.dsSelectSap.addColumn("ZSUBRC", "string");
        	//this.dsSelectSap.addColumn("TXT", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("STR_SUPPL1", "string");
        	this.dsInsert.addColumn("STR_SUPPL2", "string");
        	this.dsInsert.addColumn("KUNNR", "string");
        	this.dsInsert.addColumn("MANDT", "string");
        	this.dsInsert.addColumn("LAND1", "string");
        	this.dsInsert.addColumn("NAME1", "string");
        	this.dsInsert.addColumn("NAME2", "string");
        	this.dsInsert.addColumn("ORT01", "string");
        	this.dsInsert.addColumn("LIFNR", "string");
        	this.dsInsert.addColumn("PSTLZ", "string");
        	this.dsInsert.addColumn("REGIO", "string");
        	this.dsInsert.addColumn("SORTL", "string");
        	this.dsInsert.addColumn("STRAS", "string");
        	this.dsInsert.addColumn("TELF1", "string");
        	this.dsInsert.addColumn("TELFX", "string");
        	this.dsInsert.addColumn("XCPDK", "string");
        	this.dsInsert.addColumn("ADRNR", "string");
        	this.dsInsert.addColumn("MCOD1", "string");
        	this.dsInsert.addColumn("MCOD2", "string");
        	this.dsInsert.addColumn("MCOD3", "string");
        	this.dsInsert.addColumn("SI_KNA1", "string");
        	this.dsInsert.addColumn("ANRED", "string");
        	this.dsInsert.addColumn("AUFSD", "string");
        	this.dsInsert.addColumn("BAHNE", "string");
        	this.dsInsert.addColumn("BAHNS", "string");
        	this.dsInsert.addColumn("BBBNR", "string");
        	this.dsInsert.addColumn("BBSNR", "string");
        	this.dsInsert.addColumn("BEGRU", "string");
        	this.dsInsert.addColumn("BRSCH", "string");
        	this.dsInsert.addColumn("BUBKZ", "string");
        	this.dsInsert.addColumn("DATLT", "string");
        	this.dsInsert.addColumn("ERDAT", "string");
        	this.dsInsert.addColumn("ERNAM", "string");
        	this.dsInsert.addColumn("EXABL", "string");
        	this.dsInsert.addColumn("FAKSD", "string");
        	this.dsInsert.addColumn("FISKN", "string");
        	this.dsInsert.addColumn("KNAZK", "string");
        	this.dsInsert.addColumn("KNRZA", "string");
        	this.dsInsert.addColumn("KONZS", "string");
        	this.dsInsert.addColumn("KTOKD", "string");
        	this.dsInsert.addColumn("KUKLA", "string");
        	this.dsInsert.addColumn("LIFSD", "string");
        	this.dsInsert.addColumn("LOCCO", "string");
        	this.dsInsert.addColumn("LOEVM", "string");
        	this.dsInsert.addColumn("NAME3", "string");
        	this.dsInsert.addColumn("NAME4", "string");
        	this.dsInsert.addColumn("NIELS", "string");
        	this.dsInsert.addColumn("ORT02", "string");
        	this.dsInsert.addColumn("PFACH", "string");
        	this.dsInsert.addColumn("PSTL2", "string");
        	this.dsInsert.addColumn("COUNC", "string");
        	this.dsInsert.addColumn("CITYC", "string");
        	this.dsInsert.addColumn("RPMKR", "string");
        	this.dsInsert.addColumn("SPERR", "string");
        	this.dsInsert.addColumn("SPRAS", "string");
        	this.dsInsert.addColumn("STCD1", "string");
        	this.dsInsert.addColumn("STCD2", "string");
        	this.dsInsert.addColumn("STKZA", "string");
        	this.dsInsert.addColumn("STKZU", "string");
        	this.dsInsert.addColumn("TELBX", "string");
        	this.dsInsert.addColumn("TELF2", "string");
        	this.dsInsert.addColumn("TELTX", "string");
        	this.dsInsert.addColumn("TELX1", "string");
        	this.dsInsert.addColumn("LZONE", "string");
        	this.dsInsert.addColumn("XZEMP", "string");
        	this.dsInsert.addColumn("VBUND", "string");
        	this.dsInsert.addColumn("STCEG", "string");
        	this.dsInsert.addColumn("DEAR1", "string");
        	this.dsInsert.addColumn("DEAR2", "string");
        	this.dsInsert.addColumn("DEAR3", "string");
        	this.dsInsert.addColumn("DEAR4", "string");
        	this.dsInsert.addColumn("DEAR5", "string");
        	this.dsInsert.addColumn("GFORM", "string");
        	this.dsInsert.addColumn("BRAN1", "string");
        	this.dsInsert.addColumn("BRAN2", "string");
        	this.dsInsert.addColumn("BRAN3", "string");
        	this.dsInsert.addColumn("BRAN4", "string");
        	this.dsInsert.addColumn("BRAN5", "string");
        	this.dsInsert.addColumn("EKONT", "string");
        	this.dsInsert.addColumn("UMSAT", "string");
        	this.dsInsert.addColumn("UMJAH", "string");
        	this.dsInsert.addColumn("UWAER", "string");
        	this.dsInsert.addColumn("JMZAH", "string");
        	this.dsInsert.addColumn("JMJAH", "string");
        	this.dsInsert.addColumn("KATR1", "string");
        	this.dsInsert.addColumn("KATR2", "string");
        	this.dsInsert.addColumn("KATR3", "string");
        	this.dsInsert.addColumn("KATR4", "string");
        	this.dsInsert.addColumn("KATR5", "string");
        	this.dsInsert.addColumn("KATR6", "string");
        	this.dsInsert.addColumn("KATR7", "string");
        	this.dsInsert.addColumn("KATR8", "string");
        	this.dsInsert.addColumn("KATR9", "string");
        	this.dsInsert.addColumn("KATR10", "string");
        	this.dsInsert.addColumn("STKZN", "string");
        	this.dsInsert.addColumn("UMSA1", "string");
        	this.dsInsert.addColumn("TXJCD", "string");
        	this.dsInsert.addColumn("PERIV", "string");
        	this.dsInsert.addColumn("ABRVW", "string");
        	this.dsInsert.addColumn("INSPBYDEBI", "string");
        	this.dsInsert.addColumn("INSPATDEBI", "string");
        	this.dsInsert.addColumn("KTOCD", "string");
        	this.dsInsert.addColumn("PFORT", "string");
        	this.dsInsert.addColumn("WERKS", "string");
        	this.dsInsert.addColumn("DTAMS", "string");
        	this.dsInsert.addColumn("DTAWS", "string");
        	this.dsInsert.addColumn("DUEFL", "string");
        	this.dsInsert.addColumn("HZUOR", "string");
        	this.dsInsert.addColumn("SPERZ", "string");
        	this.dsInsert.addColumn("ETIKG", "string");
        	this.dsInsert.addColumn("CIVVE", "string");
        	this.dsInsert.addColumn("MILVE", "string");
        	this.dsInsert.addColumn("KDKG1", "string");
        	this.dsInsert.addColumn("KDKG2", "string");
        	this.dsInsert.addColumn("KDKG3", "string");
        	this.dsInsert.addColumn("KDKG4", "string");
        	this.dsInsert.addColumn("KDKG5", "string");
        	this.dsInsert.addColumn("XKNZA", "string");
        	this.dsInsert.addColumn("FITYP", "string");
        	this.dsInsert.addColumn("STCDT", "string");
        	this.dsInsert.addColumn("STCD3", "string");
        	this.dsInsert.addColumn("STCD4", "string");
        	this.dsInsert.addColumn("XICMS", "string");
        	this.dsInsert.addColumn("XXIPI", "string");
        	this.dsInsert.addColumn("XSUBT", "string");
        	this.dsInsert.addColumn("CFOPC", "string");
        	this.dsInsert.addColumn("TXLW1", "string");
        	this.dsInsert.addColumn("TXLW2", "string");
        	this.dsInsert.addColumn("CCC01", "string");
        	this.dsInsert.addColumn("CCC02", "string");
        	this.dsInsert.addColumn("CCC03", "string");
        	this.dsInsert.addColumn("CCC04", "string");
        	this.dsInsert.addColumn("CASSD", "string");
        	this.dsInsert.addColumn("KNURL", "string");
        	this.dsInsert.addColumn("J_1KFREPRE", "string");
        	this.dsInsert.addColumn("J_1KFTBUS", "string");
        	this.dsInsert.addColumn("J_1KFTIND", "string");
        	this.dsInsert.addColumn("CONFS", "string");
        	this.dsInsert.addColumn("UPDAT", "string");
        	this.dsInsert.addColumn("UPTIM", "string");
        	this.dsInsert.addColumn("NODEL", "string");
        	this.dsInsert.addColumn("DEAR6", "string");
        	this.dsInsert.addColumn("R_KNA1_A", "string");
        	this.dsInsert.addColumn("R_KNA1_I", "string");
        	this.dsInsert.addColumn("R_PALHGT", "string");
        	this.dsInsert.addColumn("R_PAL_UL", "string");
        	this.dsInsert.addColumn("R_PK_MAT", "string");
        	this.dsInsert.addColumn("R_MATPAL", "string");
        	this.dsInsert.addColumn("R_I_NO_LYR", "string");
        	this.dsInsert.addColumn("R_ONE_MAT", "string");
        	this.dsInsert.addColumn("R_ONE_SORT", "string");
        	this.dsInsert.addColumn("R_ULD_SIDE", "string");
        	this.dsInsert.addColumn("R_LOAD_PREF", "string");
        	this.dsInsert.addColumn("R_DPOINT", "string");
        	this.dsInsert.addColumn("AKNA1_FMFG", "string");
        	this.dsInsert.addColumn("ALC", "string");
        	this.dsInsert.addColumn("PMT_OFFICE", "string");
        	this.dsInsert.addColumn("SI_FMFG_VP2", "string");
        	this.dsInsert.addColumn("AKNA1_PSO", "string");
        	this.dsInsert.addColumn("PSOFG", "string");
        	this.dsInsert.addColumn("PSOIS", "string");
        	this.dsInsert.addColumn("IADDR_PSO", "string");
        	this.dsInsert.addColumn("PSON1", "string");
        	this.dsInsert.addColumn("PSON2", "string");
        	this.dsInsert.addColumn("PSON3", "string");
        	this.dsInsert.addColumn("PSOVN", "string");
        	this.dsInsert.addColumn("PSOTL", "string");
        	this.dsInsert.addColumn("PSOHS", "string");
        	this.dsInsert.addColumn("PSOST", "string");
        	this.dsInsert.addColumn("PSO21", "string");
        	this.dsInsert.addColumn("PSOO1", "string");
        	this.dsInsert.addColumn("PSOO2", "string");
        	this.dsInsert.addColumn("PSOO3", "string");
        	this.dsInsert.addColumn("PSOO4", "string");
        	this.dsInsert.addColumn("PSOO5", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsSelectSap1 = new Dataset();
        	this.dsSelectSap1.addColumn("I_KUNNR", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("PARAM", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
          /*
          *	조회 버튼
          */
        this.fnSelect = function() {

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
        	if (errorCode == 0) {
        		if (svcID == "sap") {
        			if(this.dsList1.rowcount > 0) {trace(this.dsList1.saveXML());
        				this.fnExec();
        				/*
        				if(this.dsList1.getColumn(0, "ZSUBRC") == "S")
        				{
        					this.fnSapSub();
        				}
        				else if(this.gfnIsNull(this.dsList1.getColumn(0, "TXT")))
        				{
        					this.gfnAlert("입력 정보를 확인해주세요.");
        				}
        				else
        				{
        					this.gfnAlert(this.dsList1.getColumn(0, "TXT"));
        				}
        				*/
        			}
        			else
        			{
        				this.gfnAlert("반환된 데이터가 없습니다.");
        			}

        		}
        		else if (svcID == "sap1") {trace(this.dsExport.saveXML());trace(this.dsOT_ITAB.saveXML());
        			if(this.dsExport.rowcount > 0) {
        				//if(this.dsExport.getColumn(0, "O_RTNCD").substr(0,1) == "S")
        				if(this.dsExport.getColumn(0, "O_RTNCD") == "S")
        				{
        					this.fnInsert();
        				}
        				else
        				{
        					this.gfnAlert(this.dsExport.getColumn(0, "O_RTNMSG"));
        				}
        			}
        			else
        			{
        				this.gfnAlert("반환된 데이터가 없습니다.");
        			}
        		}
        		else if(svcID == "insert") {
        			if(errorCode == 0) {
        				this.fnInsert_callback = function()
        				{
        					// 전송 데이터 이력 저장
        					//this.beAfGun = "af";	// sap처리후 구분값 셋팅
        					//this.fnExec();
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert("거래처생성 완료되었습니다.", "fnInsert_callback");
        			}
        			else
        			{
        				this.gfnAlert(errorMsg);
        			}
        		}
        		else if(svcID == "exec") {	// sap 보낸정보를 먼저 저장한 후에 처리한다
        			if(errorCode == 0) {
        				if(this.dsList1.getColumn(0, "ZSUBRC") == "S")
        				{
        					this.fnSapSub();
        				}
        				else if(this.gfnIsNull(this.dsList1.getColumn(0, "TXT")))
        				{
        					this.gfnAlert("입력 정보를 확인해주세요.");
        				}
        				else
        				{
        					this.gfnAlert(this.dsList1.getColumn(0, "TXT"));
        				}
        				/*
        				if(this.beAfGun == "be"){
        					this.fnSap();
        				}else{
        					this.getParentContext().close(true);
        				}
        				*/
        			}
        			else
        			{
        				this.gfnAlert(errorMsg);
        			}
        		}
        	} else {
        		this.gfnAlert(errorMsg);
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

        this.fnSap = function() {
        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "ZSD_CUSTOMER_FD01");

        	this.dsSap = new Dataset();

        	this.dsSelectSap.clearData();
        	nrow = this.dsSelectSap.addRow();

        	// IN 파라미터 셋팅
        	this.dsSelectSap.setColumn(nrow, "KTOKD", this.dsList.getColumn(0, "KTOKD"));
        	this.dsSelectSap.setColumn(nrow, "NAME1", this.dsList.getColumn(0, "NAME1"));
        	this.dsSelectSap.setColumn(nrow, "SUPPL1", this.dsList.getColumn(0, "SUPPL1"));
        	this.dsSelectSap.setColumn(nrow, "SUPPL2", this.dsList.getColumn(0, "SUPPL2"));
        	this.dsSelectSap.setColumn(nrow, "LAND1", "KR");
        	this.dsSelectSap.setColumn(nrow, "REGIO", this.dsList.getColumn(0, "REGIO"));
        	this.dsSelectSap.setColumn(nrow, "STCD2", this.dsList.getColumn(0, "STCD2"));
        	this.dsSelectSap.setColumn(nrow, "J_1KFREPRE", this.dsList.getColumn(0, "J_1KFREPRE"));
        	this.dsSelectSap.setColumn(nrow, "STCD1", this.dsList.getColumn(0, "STCD1"));
        	this.dsSelectSap.setColumn(nrow, "J_1KFTBUS", this.dsList.getColumn(0, "J_1KFTBUS"));
        	this.dsSelectSap.setColumn(nrow, "J_1KFTIND", this.dsList.getColumn(0, "J_1KFTIND"));
        	this.dsSelectSap.setColumn(nrow, "ZSALES", "");
        	this.dsSelectSap.setColumn(nrow, "VKBUR", "");
        	this.dsSelectSap.setColumn(nrow, "INCO1", this.dsList.getColumn(0, "INCO1"));
        	this.dsSelectSap.setColumn(nrow, "ZTERM", this.dsList.getColumn(0, "ZTERM"));
        	this.dsSelectSap.setColumn(nrow, "TAXKD", "");
        	this.dsSelectSap.setColumn(nrow, "PSTLZ", this.dsList.getColumn(0, "PSTLZ"));
        	//this.dsSelectSap.setColumn(nrow, "LIFNR", "");
        	//this.dsSelectSap.setColumn(nrow, "ZSUBRC", "");
        	//this.dsSelectSap.setColumn(nrow, "TXT", "");

        	// SAP 호출
        	var strSvcId    = "sap";
        	var strSvcType  = "sap";
        	var inProc		= "_dsProcSap";
        	var inData      = "select=dsSap IN_TI_FD01=dsSelectSap";
        	//var outData     = "dsExport=export dsList1=TO_FD01";
        	var outData     = "dsList1=TO_FD01";
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


        this.fnSapSub = function() {

        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "ZERP_SD_0001");

        	this.dsSelectSap1.clearData();
        	this.dsSelectSap1.addRow();
        	// IN 파라미터 셋팅
        	this.dsSelectSap1.setColumn(0, "I_KUNNR", this.dsList1.getColumn(0, "TXT").substr(0,10));	// 거래처코드

        	// SAP 호출
        	var strSvcId    = "sap1";
        	var strSvcType  = "sap";
        	var inProc		= "_dsProcSap";
        	var inData      = "select=dsSelectSap1";
        	var outData     = "dsExport=export dsOT_ITAB=OT_ITAB dsOT_ADDR=OT_ADDR";
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

        this.fnInsert = function()
        {
        	this.dsInsert.clearData();

        	var nrow = this.dsInsert.addRow();
        	this.dsInsert.setColumn(nrow, "STR_SUPPL1", this.dsOT_ADDR.getColumn(0, "STR_SUPPL1"));
        	this.dsInsert.setColumn(nrow, "STR_SUPPL2", this.dsOT_ADDR.getColumn(0, "STR_SUPPL2"));
        	this.dsInsert.setColumn(nrow, "KUNNR", this.dsOT_ITAB.getColumn(0, "KUNNR"));
        	this.dsInsert.setColumn(nrow, "MANDT", this.dsOT_ITAB.getColumn(0, "MANDT"));
        	this.dsInsert.setColumn(nrow, "LAND1", this.dsOT_ITAB.getColumn(0, "LAND1"));
        	this.dsInsert.setColumn(nrow, "NAME1", this.dsOT_ITAB.getColumn(0, "NAME1"));
        	this.dsInsert.setColumn(nrow, "NAME2", this.dsOT_ITAB.getColumn(0, "NAME2"));
        	this.dsInsert.setColumn(nrow, "ORT01", this.dsOT_ITAB.getColumn(0, "ORT01"));
        	this.dsInsert.setColumn(nrow, "LIFNR", this.dsOT_ITAB.getColumn(0, "LIFNR"));
        	this.dsInsert.setColumn(nrow, "KUNNR", this.dsOT_ITAB.getColumn(0, "KUNNR"));
        	this.dsInsert.setColumn(nrow, "PSTLZ", this.dsOT_ITAB.getColumn(0, "PSTLZ"));
        	this.dsInsert.setColumn(nrow, "REGIO", this.dsOT_ITAB.getColumn(0, "REGIO"));
        	this.dsInsert.setColumn(nrow, "SORTL", this.dsOT_ITAB.getColumn(0, "SORTL"));
        	this.dsInsert.setColumn(nrow, "STRAS", this.dsOT_ADDR.getColumn(0, "STR_SUPPL1"));	//주소:STR_SUPPL1, 상세주소:STR_SUPPL2
        	this.dsInsert.setColumn(nrow, "TELF1", this.dsOT_ITAB.getColumn(0, "TELF1"));
        	this.dsInsert.setColumn(nrow, "TELFX", this.dsOT_ITAB.getColumn(0, "TELFX"));
        	this.dsInsert.setColumn(nrow, "XCPDK", this.dsOT_ITAB.getColumn(0, "XCPDK"));
        	this.dsInsert.setColumn(nrow, "ADRNR", this.dsOT_ITAB.getColumn(0, "ADRNR"));
        	this.dsInsert.setColumn(nrow, "MCOD1", this.dsOT_ITAB.getColumn(0, "MCOD1"));
        	this.dsInsert.setColumn(nrow, "MCOD2", this.dsOT_ITAB.getColumn(0, "MCOD2"));
        	this.dsInsert.setColumn(nrow, "MCOD3", this.dsOT_ITAB.getColumn(0, "MCOD3"));
        	this.dsInsert.setColumn(nrow, "SI_KNA1", this.dsOT_ITAB.getColumn(0, "SI_KNA1"));
        	this.dsInsert.setColumn(nrow, "ANRED", this.dsOT_ITAB.getColumn(0, "ANRED"));
        	this.dsInsert.setColumn(nrow, "AUFSD", this.dsOT_ITAB.getColumn(0, "AUFSD"));
        	this.dsInsert.setColumn(nrow, "BAHNE", this.dsOT_ITAB.getColumn(0, "BAHNE"));
        	this.dsInsert.setColumn(nrow, "BAHNS", this.dsOT_ITAB.getColumn(0, "BAHNS"));
        	this.dsInsert.setColumn(nrow, "BBBNR", this.dsOT_ITAB.getColumn(0, "BBBNR"));
        	this.dsInsert.setColumn(nrow, "BBSNR", this.dsOT_ITAB.getColumn(0, "BBSNR"));
        	this.dsInsert.setColumn(nrow, "BEGRU", this.dsOT_ITAB.getColumn(0, "BEGRU"));
        	this.dsInsert.setColumn(nrow, "BRSCH", this.dsOT_ITAB.getColumn(0, "BRSCH"));
        	this.dsInsert.setColumn(nrow, "BUBKZ", this.dsOT_ITAB.getColumn(0, "BUBKZ"));
        	this.dsInsert.setColumn(nrow, "DATLT", this.dsOT_ITAB.getColumn(0, "DATLT"));
        	this.dsInsert.setColumn(nrow, "ERDAT", this.dsOT_ITAB.getColumn(0, "ERDAT"));
        	this.dsInsert.setColumn(nrow, "ERNAM", this.dsOT_ITAB.getColumn(0, "ERNAM"));
        	this.dsInsert.setColumn(nrow, "EXABL", this.dsOT_ITAB.getColumn(0, "EXABL"));
        	this.dsInsert.setColumn(nrow, "FAKSD", this.dsOT_ITAB.getColumn(0, "FAKSD"));
        	this.dsInsert.setColumn(nrow, "FISKN", this.dsOT_ITAB.getColumn(0, "FISKN"));
        	this.dsInsert.setColumn(nrow, "KNAZK", this.dsOT_ITAB.getColumn(0, "KNAZK"));
        	this.dsInsert.setColumn(nrow, "KNRZA", this.dsOT_ITAB.getColumn(0, "KNRZA"));
        	this.dsInsert.setColumn(nrow, "KONZS", this.dsOT_ITAB.getColumn(0, "KONZS"));
        	this.dsInsert.setColumn(nrow, "KTOKD", this.dsOT_ITAB.getColumn(0, "KTOKD"));
        	this.dsInsert.setColumn(nrow, "KUKLA", this.dsOT_ITAB.getColumn(0, "KUKLA"));
        	this.dsInsert.setColumn(nrow, "LIFSD", this.dsOT_ITAB.getColumn(0, "LIFSD"));
        	this.dsInsert.setColumn(nrow, "LOCCO", this.dsOT_ITAB.getColumn(0, "LOCCO"));
        	this.dsInsert.setColumn(nrow, "LOEVM", this.dsOT_ITAB.getColumn(0, "LOEVM"));
        	this.dsInsert.setColumn(nrow, "NAME3", this.dsOT_ITAB.getColumn(0, "NAME3"));
        	this.dsInsert.setColumn(nrow, "NAME4", this.dsOT_ITAB.getColumn(0, "NAME4"));
        	this.dsInsert.setColumn(nrow, "NIELS", this.dsOT_ITAB.getColumn(0, "NIELS"));
        	this.dsInsert.setColumn(nrow, "ORT02", this.dsOT_ITAB.getColumn(0, "ORT02"));
        	this.dsInsert.setColumn(nrow, "PFACH", this.dsOT_ITAB.getColumn(0, "PFACH"));
        	this.dsInsert.setColumn(nrow, "PSTL2", this.dsOT_ITAB.getColumn(0, "PSTL2"));
        	this.dsInsert.setColumn(nrow, "COUNC", this.dsOT_ITAB.getColumn(0, "COUNC"));
        	this.dsInsert.setColumn(nrow, "CITYC", this.dsOT_ITAB.getColumn(0, "CITYC"));
        	this.dsInsert.setColumn(nrow, "RPMKR", this.dsOT_ITAB.getColumn(0, "RPMKR"));
        	this.dsInsert.setColumn(nrow, "SPERR", this.dsOT_ITAB.getColumn(0, "SPERR"));
        	this.dsInsert.setColumn(nrow, "SPRAS", this.dsOT_ITAB.getColumn(0, "SPRAS"));
        	this.dsInsert.setColumn(nrow, "STCD1", this.dsOT_ITAB.getColumn(0, "STCD1"));
        	this.dsInsert.setColumn(nrow, "STCD2", this.dsOT_ITAB.getColumn(0, "STCD2"));
        	this.dsInsert.setColumn(nrow, "STKZA", this.dsOT_ITAB.getColumn(0, "STKZA"));
        	this.dsInsert.setColumn(nrow, "STKZU", this.dsOT_ITAB.getColumn(0, "STKZU"));
        	this.dsInsert.setColumn(nrow, "TELBX", this.dsOT_ITAB.getColumn(0, "TELBX"));
        	this.dsInsert.setColumn(nrow, "TELF2", this.dsOT_ITAB.getColumn(0, "TELF2"));
        	this.dsInsert.setColumn(nrow, "TELTX", this.dsOT_ITAB.getColumn(0, "TELTX"));
        	this.dsInsert.setColumn(nrow, "TELX1", this.dsOT_ITAB.getColumn(0, "TELX1"));
        	this.dsInsert.setColumn(nrow, "LZONE", this.dsOT_ITAB.getColumn(0, "LZONE"));
        	this.dsInsert.setColumn(nrow, "XZEMP", this.dsOT_ITAB.getColumn(0, "XZEMP"));
        	this.dsInsert.setColumn(nrow, "VBUND", this.dsOT_ITAB.getColumn(0, "VBUND"));
        	this.dsInsert.setColumn(nrow, "STCEG", this.dsOT_ITAB.getColumn(0, "STCEG"));
        	this.dsInsert.setColumn(nrow, "DEAR1", this.dsOT_ITAB.getColumn(0, "DEAR1"));
        	this.dsInsert.setColumn(nrow, "DEAR2", this.dsOT_ITAB.getColumn(0, "DEAR2"));
        	this.dsInsert.setColumn(nrow, "DEAR3", this.dsOT_ITAB.getColumn(0, "DEAR3"));
        	this.dsInsert.setColumn(nrow, "DEAR4", this.dsOT_ITAB.getColumn(0, "DEAR4"));
        	this.dsInsert.setColumn(nrow, "DEAR5", this.dsOT_ITAB.getColumn(0, "DEAR5"));
        	this.dsInsert.setColumn(nrow, "GFORM", this.dsOT_ITAB.getColumn(0, "GFORM"));
        	this.dsInsert.setColumn(nrow, "BRAN1", this.dsOT_ITAB.getColumn(0, "BRAN1"));
        	this.dsInsert.setColumn(nrow, "BRAN2", this.dsOT_ITAB.getColumn(0, "BRAN2"));
        	this.dsInsert.setColumn(nrow, "BRAN3", this.dsOT_ITAB.getColumn(0, "BRAN3"));
        	this.dsInsert.setColumn(nrow, "BRAN4", this.dsOT_ITAB.getColumn(0, "BRAN4"));
        	this.dsInsert.setColumn(nrow, "BRAN5", this.dsOT_ITAB.getColumn(0, "BRAN5"));
        	this.dsInsert.setColumn(nrow, "EKONT", this.dsOT_ITAB.getColumn(0, "EKONT"));
        	this.dsInsert.setColumn(nrow, "UMSAT", this.dsOT_ITAB.getColumn(0, "UMSAT"));
        	this.dsInsert.setColumn(nrow, "UMJAH", this.dsOT_ITAB.getColumn(0, "UMJAH"));
        	this.dsInsert.setColumn(nrow, "UWAER", this.dsOT_ITAB.getColumn(0, "UWAER"));
        	this.dsInsert.setColumn(nrow, "JMZAH", this.dsOT_ITAB.getColumn(0, "JMZAH"));
        	this.dsInsert.setColumn(nrow, "JMJAH", this.dsOT_ITAB.getColumn(0, "JMJAH"));
        	this.dsInsert.setColumn(nrow, "KATR1", this.dsOT_ITAB.getColumn(0, "KATR1"));
        	this.dsInsert.setColumn(nrow, "KATR2", this.dsOT_ITAB.getColumn(0, "KATR2"));
        	this.dsInsert.setColumn(nrow, "KATR3", this.dsOT_ITAB.getColumn(0, "KATR3"));
        	this.dsInsert.setColumn(nrow, "KATR4", this.dsOT_ITAB.getColumn(0, "KATR4"));
        	this.dsInsert.setColumn(nrow, "KATR5", this.dsOT_ITAB.getColumn(0, "KATR5"));
        	this.dsInsert.setColumn(nrow, "KATR6", this.dsOT_ITAB.getColumn(0, "KATR6"));
        	this.dsInsert.setColumn(nrow, "KATR7", this.dsOT_ITAB.getColumn(0, "KATR7"));
        	this.dsInsert.setColumn(nrow, "KATR8", this.dsOT_ITAB.getColumn(0, "KATR8"));
        	this.dsInsert.setColumn(nrow, "KATR9", this.dsOT_ITAB.getColumn(0, "KATR9"));
        	this.dsInsert.setColumn(nrow, "KATR10", this.dsOT_ITAB.getColumn(0, "KATR10"));
        	this.dsInsert.setColumn(nrow, "STKZN", this.dsOT_ITAB.getColumn(0, "STKZN"));
        	this.dsInsert.setColumn(nrow, "UMSA1", this.dsOT_ITAB.getColumn(0, "UMSA1"));
        	this.dsInsert.setColumn(nrow, "TXJCD", this.dsOT_ITAB.getColumn(0, "TXJCD"));
        	this.dsInsert.setColumn(nrow, "PERIV", this.dsOT_ITAB.getColumn(0, "PERIV"));
        	this.dsInsert.setColumn(nrow, "ABRVW", this.dsOT_ITAB.getColumn(0, "ABRVW"));
        	this.dsInsert.setColumn(nrow, "INSPBYDEBI", this.dsOT_ITAB.getColumn(0, "INSPBYDEBI"));
        	this.dsInsert.setColumn(nrow, "INSPATDEBI", this.dsOT_ITAB.getColumn(0, "INSPATDEBI"));
        	this.dsInsert.setColumn(nrow, "KTOCD", this.dsOT_ITAB.getColumn(0, "KTOCD"));
        	this.dsInsert.setColumn(nrow, "PFORT", this.dsOT_ITAB.getColumn(0, "PFORT"));
        	this.dsInsert.setColumn(nrow, "WERKS", this.dsOT_ITAB.getColumn(0, "WERKS"));
        	this.dsInsert.setColumn(nrow, "DTAMS", this.dsOT_ITAB.getColumn(0, "DTAMS"));
        	this.dsInsert.setColumn(nrow, "DTAWS", this.dsOT_ITAB.getColumn(0, "DTAWS"));
        	this.dsInsert.setColumn(nrow, "DUEFL", this.dsOT_ITAB.getColumn(0, "DUEFL"));
        	this.dsInsert.setColumn(nrow, "HZUOR", this.dsOT_ITAB.getColumn(0, "HZUOR"));
        	this.dsInsert.setColumn(nrow, "SPERZ", this.dsOT_ITAB.getColumn(0, "SPERZ"));
        	this.dsInsert.setColumn(nrow, "ETIKG", this.dsOT_ITAB.getColumn(0, "ETIKG"));
        	this.dsInsert.setColumn(nrow, "CIVVE", this.dsOT_ITAB.getColumn(0, "CIVVE"));
        	this.dsInsert.setColumn(nrow, "MILVE", this.dsOT_ITAB.getColumn(0, "MILVE"));
        	this.dsInsert.setColumn(nrow, "KDKG1", this.dsOT_ITAB.getColumn(0, "KDKG1"));
        	this.dsInsert.setColumn(nrow, "KDKG2", this.dsOT_ITAB.getColumn(0, "KDKG2"));
        	this.dsInsert.setColumn(nrow, "KDKG3", this.dsOT_ITAB.getColumn(0, "KDKG3"));
        	this.dsInsert.setColumn(nrow, "KDKG4", this.dsOT_ITAB.getColumn(0, "KDKG4"));
        	this.dsInsert.setColumn(nrow, "KDKG5", this.dsOT_ITAB.getColumn(0, "KDKG5"));
        	this.dsInsert.setColumn(nrow, "XKNZA", this.dsOT_ITAB.getColumn(0, "XKNZA"));
        	this.dsInsert.setColumn(nrow, "FITYP", this.dsOT_ITAB.getColumn(0, "FITYP"));
        	this.dsInsert.setColumn(nrow, "STCDT", this.dsOT_ITAB.getColumn(0, "STCDT"));
        	this.dsInsert.setColumn(nrow, "STCD3", this.dsOT_ITAB.getColumn(0, "STCD3"));
        	this.dsInsert.setColumn(nrow, "STCD4", this.dsOT_ITAB.getColumn(0, "STCD4"));
        	this.dsInsert.setColumn(nrow, "XICMS", this.dsOT_ITAB.getColumn(0, "XICMS"));
        	this.dsInsert.setColumn(nrow, "XXIPI", this.dsOT_ITAB.getColumn(0, "XXIPI"));
        	this.dsInsert.setColumn(nrow, "XSUBT", this.dsOT_ITAB.getColumn(0, "XSUBT"));
        	this.dsInsert.setColumn(nrow, "CFOPC", this.dsOT_ITAB.getColumn(0, "CFOPC"));
        	this.dsInsert.setColumn(nrow, "TXLW1", this.dsOT_ITAB.getColumn(0, "TXLW1"));
        	this.dsInsert.setColumn(nrow, "TXLW2", this.dsOT_ITAB.getColumn(0, "TXLW2"));
        	this.dsInsert.setColumn(nrow, "CCC01", this.dsOT_ITAB.getColumn(0, "CCC01"));
        	this.dsInsert.setColumn(nrow, "CCC02", this.dsOT_ITAB.getColumn(0, "CCC02"));
        	this.dsInsert.setColumn(nrow, "CCC03", this.dsOT_ITAB.getColumn(0, "CCC03"));
        	this.dsInsert.setColumn(nrow, "CCC04", this.dsOT_ITAB.getColumn(0, "CCC04"));
        	this.dsInsert.setColumn(nrow, "CASSD", this.dsOT_ITAB.getColumn(0, "CASSD"));
        	this.dsInsert.setColumn(nrow, "KNURL", this.dsOT_ITAB.getColumn(0, "KNURL"));
        	this.dsInsert.setColumn(nrow, "J_1KFREPRE", this.dsOT_ITAB.getColumn(0, "J_1KFREPRE"));
        	this.dsInsert.setColumn(nrow, "J_1KFTBUS", this.dsOT_ITAB.getColumn(0, "J_1KFTBUS"));
        	this.dsInsert.setColumn(nrow, "J_1KFTIND", this.dsOT_ITAB.getColumn(0, "J_1KFTIND"));
        	this.dsInsert.setColumn(nrow, "CONFS", this.dsOT_ITAB.getColumn(0, "CONFS"));
        	this.dsInsert.setColumn(nrow, "UPDAT", this.dsOT_ITAB.getColumn(0, "UPDAT"));
        	this.dsInsert.setColumn(nrow, "UPTIM", this.dsOT_ITAB.getColumn(0, "UPTIM"));
        	this.dsInsert.setColumn(nrow, "NODEL", this.dsOT_ITAB.getColumn(0, "NODEL"));
        	this.dsInsert.setColumn(nrow, "DEAR6", this.dsOT_ITAB.getColumn(0, "DEAR6"));
        	this.dsInsert.setColumn(nrow, "R_KNA1_A", this.dsOT_ITAB.getColumn(0, "R_KNA1_A"));
        	this.dsInsert.setColumn(nrow, "R_KNA1_I", this.dsOT_ITAB.getColumn(0, "R_KNA1_I"));
        	this.dsInsert.setColumn(nrow, "R_PALHGT", this.dsOT_ITAB.getColumn(0, "R_PALHGT"));
        	this.dsInsert.setColumn(nrow, "R_PAL_UL", this.dsOT_ITAB.getColumn(0, "R_PAL_UL"));
        	this.dsInsert.setColumn(nrow, "R_PK_MAT", this.dsOT_ITAB.getColumn(0, "R_PK_MAT"));
        	this.dsInsert.setColumn(nrow, "R_MATPAL", this.dsOT_ITAB.getColumn(0, "R_MATPAL"));
        	this.dsInsert.setColumn(nrow, "R_I_NO_LYR", this.dsOT_ITAB.getColumn(0, "R_I_NO_LYR"));
        	this.dsInsert.setColumn(nrow, "R_ONE_MAT", this.dsOT_ITAB.getColumn(0, "R_ONE_MAT"));
        	this.dsInsert.setColumn(nrow, "R_ONE_SORT", this.dsOT_ITAB.getColumn(0, "R_ONE_SORT"));
        	this.dsInsert.setColumn(nrow, "R_ULD_SIDE", this.dsOT_ITAB.getColumn(0, "R_ULD_SIDE"));
        	this.dsInsert.setColumn(nrow, "R_LOAD_PREF", this.dsOT_ITAB.getColumn(0, "R_LOAD_PREF"));
        	this.dsInsert.setColumn(nrow, "R_DPOINT", this.dsOT_ITAB.getColumn(0, "R_DPOINT"));
        	this.dsInsert.setColumn(nrow, "AKNA1_FMFG", this.dsOT_ITAB.getColumn(0, "AKNA1_FMFG"));
        	this.dsInsert.setColumn(nrow, "ALC", this.dsOT_ITAB.getColumn(0, "ALC"));
        	this.dsInsert.setColumn(nrow, "PMT_OFFICE", this.dsOT_ITAB.getColumn(0, "PMT_OFFICE"));
        	this.dsInsert.setColumn(nrow, "SI_FMFG_VP2", this.dsOT_ITAB.getColumn(0, "SI_FMFG_VP2"));
        	this.dsInsert.setColumn(nrow, "AKNA1_PSO", this.dsOT_ITAB.getColumn(0, "AKNA1_PSO"));
        	this.dsInsert.setColumn(nrow, "PSOFG", this.dsOT_ITAB.getColumn(0, "PSOFG"));
        	this.dsInsert.setColumn(nrow, "PSOIS", this.dsOT_ITAB.getColumn(0, "PSOIS"));
        	this.dsInsert.setColumn(nrow, "IADDR_PSO", this.dsOT_ITAB.getColumn(0, "IADDR_PSO"));
        	this.dsInsert.setColumn(nrow, "PSON1", this.dsOT_ITAB.getColumn(0, "PSON1"));
        	this.dsInsert.setColumn(nrow, "PSON2", this.dsOT_ITAB.getColumn(0, "PSON2"));
        	this.dsInsert.setColumn(nrow, "PSON3", this.dsOT_ITAB.getColumn(0, "PSON3"));
        	this.dsInsert.setColumn(nrow, "PSOVN", this.dsOT_ITAB.getColumn(0, "PSOVN"));
        	this.dsInsert.setColumn(nrow, "PSOTL", this.dsOT_ITAB.getColumn(0, "PSOTL"));
        	this.dsInsert.setColumn(nrow, "PSOHS", this.dsOT_ITAB.getColumn(0, "PSOHS"));
        	this.dsInsert.setColumn(nrow, "PSOST", this.dsOT_ITAB.getColumn(0, "PSOST"));
        	this.dsInsert.setColumn(nrow, "PSO21", this.dsOT_ITAB.getColumn(0, "PSO21"));
        	this.dsInsert.setColumn(nrow, "PSOO1", this.dsOT_ITAB.getColumn(0, "PSOO1"));
        	this.dsInsert.setColumn(nrow, "PSOO2", this.dsOT_ITAB.getColumn(0, "PSOO2"));
        	this.dsInsert.setColumn(nrow, "PSOO3", this.dsOT_ITAB.getColumn(0, "PSOO3"));
        	this.dsInsert.setColumn(nrow, "PSOO4", this.dsOT_ITAB.getColumn(0, "PSOO4"));
        	this.dsInsert.setColumn(nrow, "PSOO5", this.dsOT_ITAB.getColumn(0, "PSOO5"));
        	this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsInsert.rowcount == 0) return;

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
         						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
         						callBackFnc); // 통신방법 정의 [생략가능]
        }


        // sap 보낸정보를 저장한다
        this.fnExec = function() {

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	var paramVal =
        	"<KTOKD:" + this.dsList.getColumn(0, "KTOKD") +
        	"><NAME1:" + this.dsList.getColumn(0, "NAME1") +
        	"><SUPPL1:" + this.dsList.getColumn(0, "SUPPL1") +
        	"><SUPPL2:" + this.dsList.getColumn(0, "SUPPL2") +
        	"><LAND1:" + "KR" +
        	"><REGIO:" + this.dsList.getColumn(0, "REGIO") +
        	"><STCD1:" + this.dsList.getColumn(0, "STCD1") +
        	"><STCD2:" + this.dsList.getColumn(0, "STCD2") +
        	"><J_1KFREPRE:" + this.dsList.getColumn(0, "J_1KFREPRE") +
        	"><J_1KFTBUS:" + this.dsList.getColumn(0, "J_1KFTBUS") +
        	"><J_1KFTIND:" + this.dsList.getColumn(0, "J_1KFTIND") +
        	"><ZSALES:" + "" +
        	"><VKBUR:" + "" +
        	"><INCO1:" + this.dsList.getColumn(0, "INCO1") +
        	"><ZTERM:" + this.dsList.getColumn(0, "ZTERM") +
        	"><TAXKD:" + "" +
        	"><PSTLZ:" + this.dsList.getColumn(0, "PSTLZ") +
        	"><ZSUBRC:" + this.dsList1.getColumn(0, "ZSUBRC") +
        	"><TXT:" + this.dsList1.getColumn(0, "TXT") +
        	"><ZSUBRC:" + this.dsList1.getColumn(0, "ZSUBRC") +
        	"><TXT:" + this.dsList1.getColumn(0, "TXT") + ">";
        	/*
        	if(this.dsList1.rowcount > 0){
        		paramVal = paramVal +
        		"<ZSUBRC:" + this.dsList1.getColumn(0, "ZSUBRC") +
        		"><TXT:" + this.dsList1.getColumn(0, "TXT") + ">";
        	}
        	*/

        	this.dsExec.setColumn(0, "PARAM", paramVal);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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

        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	//this.beAfGun = "be";	// sap처리전 구분값 셋팅
        	//this.fnExec();
        	this.fnSap();
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staIN_STCD2.addEventHandler("onclick",this.divData_staIN_STCD2_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DQD_VENDOR_AR_CREATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
