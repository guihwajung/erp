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
            this.set_titletext("원가전표가져오기");
            if (Form == this.constructor)
            {
                this._setFormPosition(430,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWXPR_RFCINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">save_head</Col><Col id=\"SP\">SIFPR_SITESLIPHD_SAVE</Col></Row><Row><Col id=\"TARGET\">save_item</Col><Col id=\"SP\">SIFPR_SITESLIPDT_SAVE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DWDPR_JTCOST_DH_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"FR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"TO_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFunc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInParam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProcSap", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutTables", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("안분전표가져오기");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","staTITLE:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","0","staCD_SITE:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staFR_TO_WORK","0","staYM_WORK:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staCD_SITE:-1","staTITLE:5",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staYM_WORK:-1","staBg1:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staFR_TO_WORK:-1","staBg2:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_SITE","staCD_SITE:5","staTITLE:10","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_SITE","txtCD_SITE:5","staTITLE:10",null,"20","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:5","txtDS_SITE:9","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctcl_FR_WORK","staFR_TO_WORK:5","ctclYM_WORK:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_range","ctcl_FR_WORK:10","ctclYM_WORK:8","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("~");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctcl_TO_WORK","sta_range:10","ctclYM_WORK:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMsg01","25","ctcl_TO_WORK:5","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("회계일자 기간의 원가전표 중 안분미포함 전표자료를 가져옵니다.");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMsg02","20","staMsg01:5","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("※ 오류발생 시 기간을 한달단위로 처리해주시기 바랍니다.");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("red");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","35%","staMsg02:10","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("확인");
            obj.set_cssclass("btnExt");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","55%","staMsg02:10","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("닫기");
            obj.set_cssclass("btnExt");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.txtCD_SITE","value","dsData","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtDS_SITE","value","dsData","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctclYM_WORK.form.TextBox","value","dsData","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctcl_FR_WORK","value","dsData","FR_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctcl_TO_WORK","value","dsData","TO_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DWD_JTCOSTDLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this._CHECK = false;

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
        	this.dsData.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsData.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        	this.dsData.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        	this.dsData.setColumn(0, "FR_WORK", this.getOwnerFrame().FR_WORK);
        	this.dsData.setColumn(0, "TO_WORK", this.getOwnerFrame().TO_WORK);
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

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("DS_PARAM", "string");
        	this.dsSelect.addColumn("DS_VALUE", "string");

        	this.dsSaveHead = new Dataset();
        	this.dsSaveHead.addColumn("TY_WRK", "string");
        	this.dsSaveHead.addColumn("ID_USER", "string");
        	this.dsSaveHead.addColumn("BUKRS", "string");
        	this.dsSaveHead.addColumn("BELNR", "string");
        	this.dsSaveHead.addColumn("GJAHR", "string");
        	this.dsSaveHead.addColumn("BLART", "string");
        	this.dsSaveHead.addColumn("BLDAT", "string");
        	this.dsSaveHead.addColumn("BUDAT", "string");
        	this.dsSaveHead.addColumn("MONAT", "string");
        	this.dsSaveHead.addColumn("CPUDT", "string");
        	this.dsSaveHead.addColumn("CPUTM", "string");
        	this.dsSaveHead.addColumn("USNAM", "string");
        	this.dsSaveHead.addColumn("XBLNR", "string");
        	this.dsSaveHead.addColumn("STBLG", "string");
        	this.dsSaveHead.addColumn("STJAH", "string");
        	this.dsSaveHead.addColumn("BKTXT", "string");
        	this.dsSaveHead.addColumn("WAERS", "string");
        	this.dsSaveHead.addColumn("BSTAT", "string");

        	this.dsSaveItem = new Dataset();
        	this.dsSaveItem.addColumn("TY_WRK", "string");
        	this.dsSaveItem.addColumn("ID_USER", "string");
        	this.dsSaveItem.addColumn("BUKRS", "string");
        	this.dsSaveItem.addColumn("BELNR", "string");
        	this.dsSaveItem.addColumn("GJAHR", "string");
        	this.dsSaveItem.addColumn("BUZEI", "string");
        	this.dsSaveItem.addColumn("AUGDT", "string");
        	this.dsSaveItem.addColumn("AUGCP", "string");
        	this.dsSaveItem.addColumn("AUGBL", "string");
        	this.dsSaveItem.addColumn("KOART", "string");
        	this.dsSaveItem.addColumn("SHKZG", "string");
        	this.dsSaveItem.addColumn("GSBER", "string");
        	this.dsSaveItem.addColumn("MWSKZ", "string");
        	this.dsSaveItem.addColumn("DMBTR", "bigdecimal");
        	this.dsSaveItem.addColumn("WRBTR", "bigdecimal");
        	this.dsSaveItem.addColumn("PSWBT", "bigdecimal");
        	this.dsSaveItem.addColumn("PSWSL", "bigdecimal");
        	this.dsSaveItem.addColumn("WMWST", "bigdecimal");
        	this.dsSaveItem.addColumn("HWBAS", "bigdecimal");
        	this.dsSaveItem.addColumn("FWBAS", "bigdecimal");
        	this.dsSaveItem.addColumn("VALUT", "string");
        	this.dsSaveItem.addColumn("ZUONR", "string");
        	this.dsSaveItem.addColumn("SGTXT", "string");
        	this.dsSaveItem.addColumn("KOKRS", "string");
        	this.dsSaveItem.addColumn("KOSTL", "string");
        	this.dsSaveItem.addColumn("AUFNR", "string");
        	this.dsSaveItem.addColumn("PERNR", "string");
        	this.dsSaveItem.addColumn("SAKNR", "string");
        	this.dsSaveItem.addColumn("HKONT", "string");
        	this.dsSaveItem.addColumn("KUNNR", "string");
        	this.dsSaveItem.addColumn("LIFNR", "string");
        	this.dsSaveItem.addColumn("HZUON", "string");
        	this.dsSaveItem.addColumn("ZFBDT", "string");
        	this.dsSaveItem.addColumn("ZTERM", "string");
        	this.dsSaveItem.addColumn("ZLSCH", "string");
        	this.dsSaveItem.addColumn("ZLSPR", "string");
        	this.dsSaveItem.addColumn("ZBFIX", "string");
        	this.dsSaveItem.addColumn("HBKID", "string");
        	this.dsSaveItem.addColumn("BVTYP", "string");
        	this.dsSaveItem.addColumn("PRCTR", "string");
        	this.dsSaveItem.addColumn("FISTL", "string");
        	this.dsSaveItem.addColumn("XREF1", "string");
        	this.dsSaveItem.addColumn("XREF2", "string");
        	this.dsSaveItem.addColumn("XREF3", "string");
        	this.dsSaveItem.addColumn("BUPLA", "string");
        	this.dsSaveItem.addColumn("SECCO", "string");
        	this.dsSaveItem.addColumn("HKTID", "string");
        	this.dsSaveItem.addColumn("BSCHL", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_WRK", "string");
        	/*this.dsExecute.addColumn("ID_USER", "string");*/
        	this.dsExecute.addColumn("ID_INSERT", "string");
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("YM_WORK", "string");
        	this.dsExecute.addColumn("FR_WORK", "string");
        	this.dsExecute.addColumn("TO_WORK", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         this.fnSelect = function()
         {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	var ds_value = [];
        	ds_value.push(this.dsData.getColumn(0, "CD_SITE"));
        	ds_value.push(this.dsData.getColumn(0, "FR_WORK"));
        	ds_value.push(this.dsData.getColumn(0, "TO_WORK"));

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "DS_PARAM", this.FormInfo.DS_PARAM);
        	this.dsSelect.setColumn(0, "DS_VALUE", ds_value.join(','));

        	// SAP 호출
        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsFunc=select0 dsInParam=select1 dsOutTables=select2";
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


        this.fnSap = function() {
        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", this.dsFunc.getColumn(0, "NM_RFC"));


        	this.dsSelectSap = new Dataset();

        	// IN 파라미터 셋팅
        	for(var i = 0 ; i < this.dsInParam.rowcount; i++) {
        		this.dsSelectSap.addColumn(this.dsInParam.getColumn(i, "IN_PARAM"), "string");
        	}

        	nrow = this.dsSelectSap.addRow();
        	for(var i = 0 ; i < this.dsInParam.rowcount; i++) {
        		this.dsSelectSap.setColumn(nrow, this.dsInParam.getColumn(i, "IN_PARAM"), this.dsInParam.getColumn(i, "IN_VALUE"));
        	}

        	var outList = "";
        	for(var i = 0 ; i < this.dsOutTables.rowcount; i++) {
        		outList += " dsList" + (i+1) + "=" + this.dsOutTables.getColumn(i, "NM_OUT");
        	}

        	// SAP 호출
        	var strSvcId    = "sap";
        	var strSvcType  = "sap";
        	var inProc		= "_dsProcSap";
        	var inData      = "select=dsSelectSap";
        	var outData     = "dsExport=export" + outList;
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

        this.fnSaveHead = function()
        {
        	this.dsSaveHead.clearData();

        	for (var i = 0; i < this.dsList1.rowcount; i++) {
        		var nrow = this.dsSaveHead.addRow();
        		this.dsSaveHead.setColumn(nrow, "TY_WRK", "I");
        		this.dsSaveHead.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsSaveHead.setColumn(nrow, "BUKRS", this.dsList1.getColumn(i, "BUKRS"));
        		this.dsSaveHead.setColumn(nrow, "BELNR", this.dsList1.getColumn(i, "BELNR"));
        		this.dsSaveHead.setColumn(nrow, "GJAHR", this.dsList1.getColumn(i, "GJAHR"));
        		this.dsSaveHead.setColumn(nrow, "BLART", this.dsList1.getColumn(i, "BLART"));
        		this.dsSaveHead.setColumn(nrow, "BLDAT", this.dsList1.getColumn(i, "BLDAT"));
        		this.dsSaveHead.setColumn(nrow, "BUDAT", this.dsList1.getColumn(i, "BUDAT"));
        		this.dsSaveHead.setColumn(nrow, "MONAT", this.dsList1.getColumn(i, "MONAT"));
        		this.dsSaveHead.setColumn(nrow, "CPUDT", this.dsList1.getColumn(i, "CPUDT"));
        		this.dsSaveHead.setColumn(nrow, "CPUTM", this.dsList1.getColumn(i, "CPUTM"));
        		this.dsSaveHead.setColumn(nrow, "USNAM", this.dsList1.getColumn(i, "USNAM"));
        		this.dsSaveHead.setColumn(nrow, "XBLNR", this.dsList1.getColumn(i, "XBLNR"));
        		this.dsSaveHead.setColumn(nrow, "STBLG", this.dsList1.getColumn(i, "STBLG"));
        		this.dsSaveHead.setColumn(nrow, "STJAH", this.dsList1.getColumn(i, "STJAH"));
        		this.dsSaveHead.setColumn(nrow, "BKTXT", this.dsList1.getColumn(i, "BKTXT"));
        		this.dsSaveHead.setColumn(nrow, "WAERS", this.dsList1.getColumn(i, "WAERS"));
        		this.dsSaveHead.setColumn(nrow, "BSTAT", this.dsList1.getColumn(i, "BSTAT"));
        	}

        	if (this.dsSaveHead.rowcount == 0) return;


        	var strSvcId    = "save_head";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_head=dsSaveHead";
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

        this.fnSaveItem = function()
        {
        	this.dsSaveItem.clearData();

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var nrow = this.dsSaveItem.addRow();
        		this.dsSaveItem.setColumn(nrow, "TY_WRK", "I");
        		this.dsSaveItem.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsSaveItem.setColumn(nrow, "BUKRS", this.dsList2.getColumn(i, "BUKRS"));
        		this.dsSaveItem.setColumn(nrow, "BELNR", this.dsList2.getColumn(i, "BELNR"));
        		this.dsSaveItem.setColumn(nrow, "GJAHR", this.dsList2.getColumn(i, "GJAHR"));
        		this.dsSaveItem.setColumn(nrow, "BUZEI", this.dsList2.getColumn(i, "BUZEI"));
        		this.dsSaveItem.setColumn(nrow, "AUGDT", this.dsList2.getColumn(i, "AUGDT"));
        		this.dsSaveItem.setColumn(nrow, "AUGCP", this.dsList2.getColumn(i, "AUGCP"));
        		this.dsSaveItem.setColumn(nrow, "AUGBL", this.dsList2.getColumn(i, "AUGBL"));
        		this.dsSaveItem.setColumn(nrow, "KOART", this.dsList2.getColumn(i, "KOART"));
        		this.dsSaveItem.setColumn(nrow, "SHKZG", this.dsList2.getColumn(i, "SHKZG"));
        		this.dsSaveItem.setColumn(nrow, "GSBER", this.dsList2.getColumn(i, "GSBER"));
        		this.dsSaveItem.setColumn(nrow, "MWSKZ", this.dsList2.getColumn(i, "MWSKZ"));
        		this.dsSaveItem.setColumn(nrow, "DMBTR", this.dsList2.getColumn(i, "DMBTR"));
        		this.dsSaveItem.setColumn(nrow, "WRBTR", this.dsList2.getColumn(i, "WRBTR"));
        		this.dsSaveItem.setColumn(nrow, "PSWBT", this.dsList2.getColumn(i, "PSWBT"));
        		this.dsSaveItem.setColumn(nrow, "PSWSL", this.dsList2.getColumn(i, "PSWSL"));
        		this.dsSaveItem.setColumn(nrow, "WMWST", this.dsList2.getColumn(i, "WMWST"));
        		this.dsSaveItem.setColumn(nrow, "HWBAS", this.dsList2.getColumn(i, "HWBAS"));
        		this.dsSaveItem.setColumn(nrow, "FWBAS", this.dsList2.getColumn(i, "FWBAS"));
        		this.dsSaveItem.setColumn(nrow, "VALUT", this.dsList2.getColumn(i, "VALUT"));
        		this.dsSaveItem.setColumn(nrow, "ZUONR", this.dsList2.getColumn(i, "ZUONR"));
        		this.dsSaveItem.setColumn(nrow, "SGTXT", this.dsList2.getColumn(i, "SGTXT"));
        		this.dsSaveItem.setColumn(nrow, "KOKRS", this.dsList2.getColumn(i, "KOKRS"));
        		this.dsSaveItem.setColumn(nrow, "KOSTL", this.dsList2.getColumn(i, "KOSTL"));
        		this.dsSaveItem.setColumn(nrow, "AUFNR", this.dsList2.getColumn(i, "AUFNR"));
        		this.dsSaveItem.setColumn(nrow, "PERNR", this.dsList2.getColumn(i, "PERNR"));
        		this.dsSaveItem.setColumn(nrow, "SAKNR", this.dsList2.getColumn(i, "SAKNR"));
        		this.dsSaveItem.setColumn(nrow, "HKONT", this.dsList2.getColumn(i, "HKONT"));
        		this.dsSaveItem.setColumn(nrow, "KUNNR", this.dsList2.getColumn(i, "KUNNR"));
        		this.dsSaveItem.setColumn(nrow, "LIFNR", this.dsList2.getColumn(i, "LIFNR"));
        		this.dsSaveItem.setColumn(nrow, "HZUON", this.dsList2.getColumn(i, "HZUON"));
        		this.dsSaveItem.setColumn(nrow, "ZFBDT", this.dsList2.getColumn(i, "ZFBDT"));
        		this.dsSaveItem.setColumn(nrow, "ZTERM", this.dsList2.getColumn(i, "ZTERM"));
        		this.dsSaveItem.setColumn(nrow, "ZLSCH", this.dsList2.getColumn(i, "ZLSCH"));
        		this.dsSaveItem.setColumn(nrow, "ZLSPR", this.dsList2.getColumn(i, "ZLSPR"));
        		this.dsSaveItem.setColumn(nrow, "ZBFIX", this.dsList2.getColumn(i, "ZBFIX"));
        		this.dsSaveItem.setColumn(nrow, "HBKID", this.dsList2.getColumn(i, "HBKID"));
        		this.dsSaveItem.setColumn(nrow, "BVTYP", this.dsList2.getColumn(i, "BVTYP"));
        		this.dsSaveItem.setColumn(nrow, "PRCTR", this.dsList2.getColumn(i, "PRCTR"));
        		this.dsSaveItem.setColumn(nrow, "FISTL", this.dsList2.getColumn(i, "FISTL"));
        		this.dsSaveItem.setColumn(nrow, "XREF1", this.dsList2.getColumn(i, "XREF1"));
        		this.dsSaveItem.setColumn(nrow, "XREF2", this.dsList2.getColumn(i, "XREF2"));
        		this.dsSaveItem.setColumn(nrow, "XREF3", this.dsList2.getColumn(i, "XREF3"));
        		this.dsSaveItem.setColumn(nrow, "BUPLA", this.dsList2.getColumn(i, "BUPLA"));
        		this.dsSaveItem.setColumn(nrow, "SECCO", this.dsList2.getColumn(i, "SECCO"));
        		this.dsSaveItem.setColumn(nrow, "HKTID", this.dsList2.getColumn(i, "HKTID"));
        		this.dsSaveItem.setColumn(nrow, "BSCHL", this.dsList2.getColumn(i, "BSCHL"));
        	}

        	if (this.dsSaveItem.rowcount == 0) return;

        	var strSvcId    = "save_item";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_item=dsSaveItem";
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


        this.fnExecute = function()
        {
        	this.dsExecute.clearData();

        	var nrow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nrow, "TY_WRK", "GET_SAP");
        	this.dsExecute.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsExecute.setColumn(nrow, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        	this.dsExecute.setColumn(nrow, "YM_WORK", this.dsData.getColumn(0, "YM_WORK"));
        	this.dsExecute.setColumn(nrow, "FR_WORK", this.dsData.getColumn(0, "FR_WORK"));
        	this.dsExecute.setColumn(nrow, "TO_WORK", this.dsData.getColumn(0, "TO_WORK"));

        	if (this.dsExecute.rowcount == 0) return;

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExecute";
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
        /************************************************************************
         * Validate
         ************************************************************************/

        this.fnSelectValidate = function() {
        	var validate = true;
        	var ym_work_lastday = this.gfnGetLastDate(this.dsData.getColumn(0, "YM_WORK"));

        	if(this.gfnIsNull(this.dsData.getColumn(0, "CD_SITE"))) {
        		validate = false;

        		this.gfnAlert("현장코드를 입력하세요.");
        	}else if(this.gfnIsNull(this.dsData.getColumn(0, "YM_WORK"))) {
        		validate = false;

        		this.gfnAlert("작업년월을 입력하세요.");
        	}else if(this.gfnIsNull(this.dsData.getColumn(0, "FR_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctcl_FR_WORK.setFocus();
        		}
        		this.gfnAlert("회계시작일자를 입력하세요.", "fnVaidateCallback");
        	}
        	else if(this.gfnIsNull(this.dsData.getColumn(0, "TO_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctcl_TO_WORK.setFocus();
        		}
        		this.gfnAlert("회계종료일자를 입력하세요.", "fnVaidateCallback");
        	}
        	else if(ym_work_lastday < this.dsData.getColumn(0, "TO_WORK")) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctcl_TO_WORK.setFocus();
        		}
        		this.gfnAlert("회계종료일자는 작업년월의 말일자를 초과해서 입력하실 수 없습니다.", "fnVaidateCallback");
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
        		if(this.dsFunc.rowcount > 0 && this.dsInParam.rowcount > 0) {
        			//this.fnSap();
        			this.fnSaveHead();
        		}
        	}
        	else if(svcID == "sap") {
        		if(this.dsList1.rowcount > 0)
        		{
        			this.fnSaveHead();
        		}
        	}
        	else if (svcID == "save_head") {
        		if(errorCode == 0)
        		{
        			if(this.dsList2.rowcount > 0)
        			{
        				this.fnSaveItem();
        			}
        			//this.fnExecute();
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save_item") {
        		if(errorCode == 0)
        		{
        			this.fnExecute();
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "execute")
        	{
        		if(errorCode == 0)
        		{
        			this._CHECK = true;

        			this.gfnAlert("정상적으로 처리되었습니다.");
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************"
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	/*this.fnSelect();*/
        	this.fnExecute();
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(this._CHECK);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_JTCOSTDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
