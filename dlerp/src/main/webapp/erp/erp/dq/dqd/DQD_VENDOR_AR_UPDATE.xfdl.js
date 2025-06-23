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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DQDPR_CUSTOMER_AR_IF_INSERT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DQDPR_SAP_PARAM_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DQDPR_CUSTOMER_AR_IF_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProcSap", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"KTOKD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME1\" type=\"STRING\" size=\"256\"/><Column id=\"SUPPL1\" type=\"STRING\" size=\"256\"/><Column id=\"SUPPL2\" type=\"STRING\" size=\"256\"/><Column id=\"LAND1\" type=\"STRING\" size=\"256\"/><Column id=\"REGIO\" type=\"STRING\" size=\"256\"/><Column id=\"STCD2\" type=\"STRING\" size=\"256\"/><Column id=\"J_1KFREPRE\" type=\"STRING\" size=\"256\"/><Column id=\"STCD1\" type=\"STRING\" size=\"256\"/><Column id=\"J_1KFTBUS\" type=\"STRING\" size=\"256\"/><Column id=\"J_1KFTIND\" type=\"STRING\" size=\"256\"/><Column id=\"ZSALES\" type=\"STRING\" size=\"256\"/><Column id=\"VKBUR\" type=\"STRING\" size=\"256\"/><Column id=\"INCO1\" type=\"STRING\" size=\"256\"/><Column id=\"ZTERM\" type=\"STRING\" size=\"256\"/><Column id=\"TAXKD\" type=\"STRING\" size=\"256\"/><Column id=\"PSTLZ\" type=\"STRING\" size=\"256\"/><Column id=\"LIFNR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"KTOKD\"/><Col id=\"NAME1\"/><Col id=\"SUPPL1\"/><Col id=\"SUPPL2\"/><Col id=\"LAND1\">KR</Col><Col id=\"REGIO\"/><Col id=\"STCD2\"/><Col id=\"J_1KFREPRE\"/><Col id=\"STCD1\"/><Col id=\"J_1KFTBUS\"/><Col id=\"J_1KFTIND\"/><Col id=\"ZSALES\"/><Col id=\"VKBUR\"/><Col id=\"INCO1\"/><Col id=\"ZTERM\"/><Col id=\"TAXKD\"/><Col id=\"PSTLZ\"/><Col id=\"LIFNR\"/></Row></Rows>");
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


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"KUNNR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"KUNNR\"/></Row></Rows>");
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
            obj.set_taborder("14");
            obj.set_text("매출(SAP) 거래처코드 변경");
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
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_textDecoration("none");
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
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_textDecoration("none");
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
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNAME1","staIN_TELF1:4","staTITLE:10","290","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtSUPPL2","staIN_TELF2:4","ctxtNAME1:38","290","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtJ_1KFREPRE","staIN_J_1KFREPRE:-394","127","290","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtJ_1KFTBUS","staIN_STCD1:4","ctxtJ_1KFREPRE:9","290","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","38.66%","228","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","49.27%","228","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfKTOKD","114","40","290","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfREGIO","512","69","290","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtSTCD1","512","127","290","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtJ_1KFTIND","114","156","290","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfINCO1","512","185","290","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtSTCD2","114","69","290","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfPSTLZ","114","98","290","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("4");
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
        this.registerScript("DQD_VENDOR_AR_UPDATE.xfdl", function() {
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

        	// 이전 화면에서 데이터 받기.
        	this.dsSearch.setColumn(0, "KUNNR", this.getOwnerFrame().KUNNR);

        	this.fnSapSelect(this.dsSearch.getColumn(0, "KUNNR"));	//거래처번호

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
        	this.dsSelectSap.addColumn("STCD1", "string");
        	this.dsSelectSap.addColumn("STCD2", "string");
        	this.dsSelectSap.addColumn("J_1KFREPRE", "string");
        	this.dsSelectSap.addColumn("J_1KFTBUS", "string");
        	this.dsSelectSap.addColumn("J_1KFTIND", "string");
        	this.dsSelectSap.addColumn("ZSALES", "string");
        	this.dsSelectSap.addColumn("VKBUR", "string");
        	this.dsSelectSap.addColumn("INCO1", "string");
        	this.dsSelectSap.addColumn("ZTERM", "string");
        	this.dsSelectSap.addColumn("TAXKD", "string");
        	this.dsSelectSap.addColumn("LIFNR", "string");
        	this.dsSelectSap.addColumn("ZSUBRC", "string");
        	this.dsSelectSap.addColumn("TXT", "string");
        	this.dsSelectSap.addColumn("PSTLZ", "string");

        	this.dsSap = new Dataset();
        	this.dsSap.addColumn("IV_KUNNR", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("PARAM", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("KUNNR", "string");

        	//this.dsSelectSap1 = new Dataset();
        	//this.dsSelectSap1.addColumn("I_KUNNR", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
          /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        }

        this.fnSapSelect = function(plifnr) {
        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "ZERP_SD_0001");

        	this.dsSelectSap1 = new Dataset();
        	this.dsSelectSap1.addColumn("I_KUNNR", "string");

        	nrow = this.dsSelectSap1.addRow();
        	// IN 파라미터 셋팅
        	this.dsSelectSap1.setColumn(nrow, "I_KUNNR", plifnr);	// 거래처코드
        	//this.dsSelectSap1.setColumn(nrow, "I_KUNNR", "0000305720");	// 거래처코드

        	// SAP 호출
        	var strSvcId    = "sap_select";
        	var strSvcType  = "sap";
        	var inProc		= "_dsProcSap";
        	var inData      = "select=dsSelectSap1";
        	var outData     = "dsExport=export dsOT_ITAB=OT_ITAB dsOT_ADDR=OT_ADDR";
        	var strArg      = "gubun=update";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }


        this.fnSapUpdate = function()
        {
        	this.dsList.clearData();

        	var nrow = this.dsList.addRow();

        	this.dsList.setColumn(nrow, "KTOKD", this.dsOT_ITAB.getColumn(0, "KTOKD"));
        	this.dsList.setColumn(nrow, "NAME1", this.dsOT_ITAB.getColumn(0, "NAME1"));
        	this.dsList.setColumn(nrow, "STCD2", this.dsOT_ITAB.getColumn(0, "STCD2"));
        	this.dsList.setColumn(nrow, "REGIO", this.dsOT_ITAB.getColumn(0, "REGIO"));
        	this.dsList.setColumn(nrow, "PSTLZ", this.dsOT_ITAB.getColumn(0, "PSTLZ"));
        	this.dsList.setColumn(nrow, "SUPPL2", this.dsOT_ADDR.getColumn(0, "STR_SUPPL2"));
        	this.dsList.setColumn(nrow, "J_1KFREPRE", this.dsOT_ITAB.getColumn(0, "J_1KFREPRE"));
        	this.dsList.setColumn(nrow, "STCD1", this.dsOT_ITAB.getColumn(0, "STCD1"));
        	this.dsList.setColumn(nrow, "J_1KFTIND", this.dsOT_ITAB.getColumn(0, "J_1KFTIND"));
        	this.dsList.setColumn(nrow, "J_1KFTBUS", this.dsOT_ITAB.getColumn(0, "J_1KFTBUS"));
        	this.dsList.setColumn(nrow, "LIFNR", this.dsOT_ITAB.getColumn(0, "LIFNR"));

        	this.divData.form.ccfPSTLZ.form.DSTextBox.set_value(this.dsOT_ADDR.getColumn(0, "STR_SUPPL1"));

        	this.divData.form.ccfKTOKD.form.fnCodeFindLoad();
        	this.divData.form.ccfREGIO.form.fnCodeFindLoad();
        }

        this.fnUpdate = function()
        {
        	this.dsUpdate.clearData();

        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(0, "KUNNR", this.dsSearch.getColumn(0, "KUNNR"));

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "update";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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
        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if(svcID == "sap_select")
        	{
        		if(this.dsExport.rowcount > 0) {
        			var json = this.gfnArgsToJson(strArg);
        			strArg = json.gubun;

        			if(strArg == "insert")
        			{
        				this.fnSapInsert();
        			}
        			else if(strArg == "update")
        			{
        				if(this.dsExport.getColumn(0, "O_RTNCD") == "S")
        				{
        					this.fnSapUpdate();
        				}
        				else
        				{
        					this.gfnAlert(this.dsExport.getColumn(0, "O_RTNMSG"));
        				}
        			}
        		}
        		else
        		{
        			this.gfnAlert("반환된 데이터가 없습니다.");
        		}
        	}
        	else if(svcID == "sap_update")
        	{
        		if(this.dsExport.rowcount > 0) {
        			this.fnExec();
        			/*
        			if(this.dsExport.getColumn(0, "O_RTNCD") == "S")
        			{
        				this.fnSapUpdateCallback = function() {
        					// 전송 데이터 이력 저장
        					this.beAfGun = "af";	// sap처리후 구분값 셋팅
        					this.fnExec();
        					//this.getParentContext().close(true);
        				}
        				this.gfnAlert("거래처수정 완료되었습니다.", "fnSapUpdateCallback");
        			}
        			else
        			{
        				this.gfnAlert("입력값을 확인하세요.");
        				//this.gfnAlert("입력값을 확인하세요.\n\n("+this.dsExport.getColumn(0, "O_RTNMSG")+")");
        			}
        			*/
        		}
        	}
        	else if(svcID == "exec") {	// sap 보낸정보를 먼저 저장한 후에 처리한다
        		if(errorCode == 0) {
        			if(this.dsExport.getColumn(0, "O_RTNCD") == "S")
        			{
        				this.fnUpdate();
        // 				this.fnSapUpdateCallback = function() {
        // 					// 전송 데이터 이력 저장
        // 					//this.beAfGun = "af";	// sap처리후 구분값 셋팅
        // 					//this.fnExec();
        // 					this.getParentContext().close(true);
        // 				}
        // 				this.gfnAlert("거래처수정 완료되었습니다.", "fnSapUpdateCallback");
        			}
        			else
        			{
        				this.gfnAlert("입력값을 확인하세요.");
        				//this.gfnAlert("입력값을 확인하세요.\n\n("+this.dsExport.getColumn(0, "O_RTNMSG")+")");
        			}
        			/*
        			if(this.beAfGun == "be"){
        				this.fnSapVenderUpdate();
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
        	else if(svcID == "update")
        	{
        		if(errorCode == 0) {
        			this.fnUpdate_callback = function() {

        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("거래처수정 완료되었습니다.", "fnUpdate_callback");
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}

        	/*
        	if (errorCode == 0) {
        		if (svcID == "sap") {
        			if(this.dsList1.rowcount > 0) {trace(this.dsList1.saveXML());
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
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert("거래처생성 완료되었습니다.", "fnInsert_callback");
        			}
        			else
        			{
        				this.gfnAlert(errorMsg);
        			}
        		}
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        	*/
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
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	//this.beAfGun = "be";	// sap처리전 구분값 셋팅
        	//this.fnExec();
        	this.fnSapVenderUpdate();
        };

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
        	"><INCO1:" + "" +
        	"><ZTERM:" + "" +
        	"><TAXKD:" + "" +
        	"><LIFNR:" + this.dsList.getColumn(0, "LIFNR") +
        	"><ZSUBRC:" + "" +
        	"><TXT:" + "" +
        	"><PSTLZ:" + this.dsList.getColumn(0, "PSTLZ") +
        	"><O_RTNCD:" + this.dsExport.getColumn(0, "O_RTNCD") +
        	"><O_RTNMSG:" + this.dsExport.getColumn(0, "O_RTNMSG") + ">";
        	/*
        	if(this.dsExport.rowcount > 0){
        		paramVal = paramVal +
        		"<O_RTNCD:" + this.dsExport.getColumn(0, "O_RTNCD") +
        		"><O_RTNMSG:" + this.dsExport.getColumn(0, "O_RTNMSG") + ">";
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

        this.fnSapVenderUpdate = function() {
        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "ZERP_SD_0002");

        	//var listRow = this.dsList.rowposition;

        	this.dsSap.clearData();
        	this.dsSap.addRow();
        	this.dsSap.setColumn(0, "IV_KUNNR", this.dsSearch.getColumn(0, "KUNNR"));

        	this.dsSelectSap.clearData();
        	nrow = this.dsSelectSap.addRow();

        	// IN 파라미터 셋팅
        	this.dsSelectSap.setColumn(nrow, "KTOKD", this.dsList.getColumn(0, "KTOKD"));
        	this.dsSelectSap.setColumn(nrow, "NAME1", this.dsList.getColumn(0, "NAME1"));
        	this.dsSelectSap.setColumn(nrow, "SUPPL1", this.dsList.getColumn(0, "SUPPL1"));	// 주소
        	this.dsSelectSap.setColumn(nrow, "SUPPL2", this.dsList.getColumn(0, "SUPPL2"));	// 상세주소
        	this.dsSelectSap.setColumn(nrow, "LAND1", "KR");
        	this.dsSelectSap.setColumn(nrow, "REGIO", this.dsList.getColumn(0, "REGIO"));
        	this.dsSelectSap.setColumn(nrow, "STCD1", this.dsList.getColumn(0, "STCD1"));
        	this.dsSelectSap.setColumn(nrow, "STCD2", this.dsList.getColumn(0, "STCD2"));
        	this.dsSelectSap.setColumn(nrow, "J_1KFREPRE", this.dsList.getColumn(0, "J_1KFREPRE"));
        	this.dsSelectSap.setColumn(nrow, "J_1KFTBUS", this.dsList.getColumn(0, "J_1KFTBUS"));
        	this.dsSelectSap.setColumn(nrow, "J_1KFTIND", this.dsList.getColumn(0, "J_1KFTIND"));
        	this.dsSelectSap.setColumn(nrow, "ZSALES", "");
        	this.dsSelectSap.setColumn(nrow, "VKBUR", "");
        	this.dsSelectSap.setColumn(nrow, "INCO1", "");
        	this.dsSelectSap.setColumn(nrow, "ZTERM", "");
        	this.dsSelectSap.setColumn(nrow, "TAXKD", "");
        	this.dsSelectSap.setColumn(nrow, "LIFNR", this.dsList.getColumn(0, "LIFNR"));
        	this.dsSelectSap.setColumn(nrow, "ZSUBRC", "");
        	this.dsSelectSap.setColumn(nrow, "TXT", "");
        	this.dsSelectSap.setColumn(nrow, "PSTLZ", this.dsList.getColumn(0, "PSTLZ"));


        	// SAP 호출
        	var strSvcId    = "sap_update";
        	var strSvcType  = "sap";
        	var inProc		= "_dsProcSap";
        	var inData      = "select=dsSap ST_IS_DATA=dsSelectSap";
        	//var outData     = "dsExport=export dsList1=TO_FD01";
        	var outData     = "dsExport=export";
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
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DQD_VENDOR_AR_UPDATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
