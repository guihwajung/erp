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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DQDPR_VENDOR_AP_IF_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DQDPR_VENDOR_AP_IF_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DQDPR_VENDOR_AP_IF_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DQDPR_VENDOR_AP_IF_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTYPE_SELECT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">코드</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">명칭</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SELECT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SEARCH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_SELECT\"/><Col id=\"DS_SEARCH\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProcSap", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFunc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelectSap", this);
            obj._setContents("<ColumnInfo><Column id=\"IN_AKONT\" type=\"STRING\" size=\"256\"/><Column id=\"IN_CJKTW\" type=\"STRING\" size=\"256\"/><Column id=\"IN_EKGRP\" type=\"STRING\" size=\"256\"/><Column id=\"IN_FDGRV\" type=\"STRING\" size=\"256\"/><Column id=\"IN_FITYP\" type=\"STRING\" size=\"256\"/><Column id=\"IN_INTAD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_J_1KFREPRE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_J_1KFTBUS\" type=\"STRING\" size=\"256\"/><Column id=\"IN_J_1KFTIND\" type=\"STRING\" size=\"256\"/><Column id=\"IN_KTOKK\" type=\"STRING\" size=\"256\"/><Column id=\"IN_LFURL\" type=\"STRING\" size=\"256\"/><Column id=\"IN_NAME1\" type=\"STRING\" size=\"256\"/><Column id=\"IN_ORT01\" type=\"STRING\" size=\"256\"/><Column id=\"IN_PSTLZ\" type=\"STRING\" size=\"256\"/><Column id=\"IN_REGIO\" type=\"STRING\" size=\"256\"/><Column id=\"IN_SORTL\" type=\"STRING\" size=\"256\"/><Column id=\"IN_STCD1\" type=\"STRING\" size=\"256\"/><Column id=\"IN_STCD2\" type=\"STRING\" size=\"256\"/><Column id=\"IN_STRAS\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TELF1\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TELF2\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TLFNS\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TLFXS\" type=\"STRING\" size=\"256\"/><Column id=\"IN_ZTERM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWALFA1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","79.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTYPE_SELECT","sta00:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTYPE_SELECT");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_text("코드");
            obj.set_value("C");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_SEARCH","rdoTYPE_SELECT:0.0","10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.rdoTYPE_SELECT","value","dsSearch","TY_SELECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtDS_SEARCH","value","dsSearch","DS_SEARCH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DQD_VENDOR_AP_SAP.xfdl", function() {
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

        	this.divSearch.form.rdoTYPE_SELECT.set_index(0);
        	//this.FormBtns.Select.click();
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
         	this.btnCREATE = this.gfnFormButtonAdd("btnCREATE", "fnCREATE");
         	this.btnQUERY = this.gfnFormButtonAdd("btnQUERY", "fnQUERY");
        	this.btnUPDATE = this.gfnFormButtonAdd("btnUPDATE","fnUPDATE");
        	this.btnALLDATA = this.gfnFormButtonAdd("btnALLDATA", "fnALLDATA");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DQ", "DQD_VENDOR_AP_SAP");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_SELECT", "string");
        	this.dsSelect.addColumn("DS_SEARCH", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("LIFNR", "string");
        	this.dsInsert.addColumn("MANDT", "string");
        	this.dsInsert.addColumn("LAND1", "string");
        	this.dsInsert.addColumn("NAME1", "string");
        	this.dsInsert.addColumn("NAME2", "string");
        	this.dsInsert.addColumn("NAME3", "string");
        	this.dsInsert.addColumn("NAME4", "string");
        	this.dsInsert.addColumn("ORT01", "string");
        	this.dsInsert.addColumn("ORT02", "string");
        	this.dsInsert.addColumn("PFACH", "string");
        	this.dsInsert.addColumn("PSTL2", "string");
        	this.dsInsert.addColumn("PSTLZ", "string");
        	this.dsInsert.addColumn("REGIO", "string");
        	this.dsInsert.addColumn("SORTL", "string");
        	this.dsInsert.addColumn("STRAS", "string");
        	this.dsInsert.addColumn("ADRNR", "string");
        	this.dsInsert.addColumn("MCOD1", "string");
        	this.dsInsert.addColumn("MCOD2", "string");
        	this.dsInsert.addColumn("MCOD3", "string");
        	this.dsInsert.addColumn("ANRED", "string");
        	this.dsInsert.addColumn("BAHNS", "string");
        	this.dsInsert.addColumn("BBBNR", "string");
        	this.dsInsert.addColumn("BBSNR", "string");
        	this.dsInsert.addColumn("BEGRU", "string");
        	this.dsInsert.addColumn("BRSCH", "string");
        	this.dsInsert.addColumn("BUBKZ", "string");
        	this.dsInsert.addColumn("DATLT", "string");
        	this.dsInsert.addColumn("DTAMS", "string");
        	this.dsInsert.addColumn("DTAWS", "string");
        	this.dsInsert.addColumn("ERDAT", "string");
        	this.dsInsert.addColumn("ERNAM", "string");
        	this.dsInsert.addColumn("ESRNR", "string");
        	this.dsInsert.addColumn("KONZS", "string");
        	this.dsInsert.addColumn("KTOKK", "string");
        	this.dsInsert.addColumn("KUNNR", "string");
        	this.dsInsert.addColumn("LNRZA", "string");
        	this.dsInsert.addColumn("LOEVM", "string");
        	this.dsInsert.addColumn("SPERR", "string");
        	this.dsInsert.addColumn("SPERM", "string");
        	this.dsInsert.addColumn("SPRAS", "string");
        	this.dsInsert.addColumn("STCD1", "string");
        	this.dsInsert.addColumn("STCD2", "string");
        	this.dsInsert.addColumn("STKZA", "string");
        	this.dsInsert.addColumn("STKZU", "string");
        	this.dsInsert.addColumn("TELBX", "string");
        	this.dsInsert.addColumn("TELF1", "string");
        	this.dsInsert.addColumn("TELF2", "string");
        	this.dsInsert.addColumn("TELFX", "string");
        	this.dsInsert.addColumn("TELTX", "string");
        	this.dsInsert.addColumn("TELX1", "string");
        	this.dsInsert.addColumn("XCPDK", "string");
        	this.dsInsert.addColumn("XZEMP", "string");
        	this.dsInsert.addColumn("VBUND", "string");
        	this.dsInsert.addColumn("FISKN", "string");
        	this.dsInsert.addColumn("STCEG", "string");
        	this.dsInsert.addColumn("STKZN", "string");
        	this.dsInsert.addColumn("SPERQ", "string");
        	this.dsInsert.addColumn("GBORT", "string");
        	this.dsInsert.addColumn("GBDAT", "string");
        	this.dsInsert.addColumn("SEXKZ", "string");
        	this.dsInsert.addColumn("KRAUS", "string");
        	this.dsInsert.addColumn("REVDB", "string");
        	this.dsInsert.addColumn("QSSYS", "string");
        	this.dsInsert.addColumn("KTOCK", "string");
        	this.dsInsert.addColumn("PFORT", "string");
        	this.dsInsert.addColumn("WERKS", "string");
        	this.dsInsert.addColumn("LTSNA", "string");
        	this.dsInsert.addColumn("WERKR", "string");
        	this.dsInsert.addColumn("PLKAL", "string");
        	this.dsInsert.addColumn("DUEFL", "string");
        	this.dsInsert.addColumn("TXJCD", "string");
        	this.dsInsert.addColumn("SPERZ", "string");
        	this.dsInsert.addColumn("SCACD", "string");
        	this.dsInsert.addColumn("SFRGR", "string");
        	this.dsInsert.addColumn("LZONE", "string");
        	this.dsInsert.addColumn("XLFZA", "string");
        	this.dsInsert.addColumn("DLGRP", "string");
        	this.dsInsert.addColumn("FITYP", "string");
        	this.dsInsert.addColumn("STCDT", "string");
        	this.dsInsert.addColumn("REGSS", "string");
        	this.dsInsert.addColumn("ACTSS", "string");
        	this.dsInsert.addColumn("STCD3", "string");
        	this.dsInsert.addColumn("STCD4", "string");
        	this.dsInsert.addColumn("IPISP", "string");
        	this.dsInsert.addColumn("TAXBS", "string");
        	this.dsInsert.addColumn("PROFS", "string");
        	this.dsInsert.addColumn("STGDL", "string");
        	this.dsInsert.addColumn("EMNFR", "string");
        	this.dsInsert.addColumn("LFURL", "string");
        	this.dsInsert.addColumn("J_1KFREPRE", "string");
        	this.dsInsert.addColumn("J_1KFTBUS", "string");
        	this.dsInsert.addColumn("J_1KFTIND", "string");
        	this.dsInsert.addColumn("CONFS", "string");
        	this.dsInsert.addColumn("UPDAT", "string");
        	this.dsInsert.addColumn("UPTIM", "string");
        	this.dsInsert.addColumn("NODEL", "string");
        	this.dsInsert.addColumn("QSSYSDAT", "string");
        	this.dsInsert.addColumn("PODKZB", "string");
        	this.dsInsert.addColumn("FISKU", "string");
        	this.dsInsert.addColumn("STENR", "string");
        	this.dsInsert.addColumn("CARRIER_CONF", "string");
        	this.dsInsert.addColumn("J_SC_CAPITAL", "string");
        	this.dsInsert.addColumn("J_SC_CURRENCY", "string");
        	this.dsInsert.addColumn("ALC", "string");
        	this.dsInsert.addColumn("PMT_OFFICE", "string");
        	this.dsInsert.addColumn("PSOFG", "string");
        	this.dsInsert.addColumn("PSOIS", "string");
        	this.dsInsert.addColumn("PSON1", "string");
        	this.dsInsert.addColumn("PSON2", "string");
        	this.dsInsert.addColumn("PSON3", "string");
        	this.dsInsert.addColumn("PSOVN", "string");
        	this.dsInsert.addColumn("PSOTL", "string");
        	this.dsInsert.addColumn("PSOHS", "string");
        	this.dsInsert.addColumn("PSOST", "string");
        	this.dsInsert.addColumn("TRANSPORT_CHAIN", "string");
        	this.dsInsert.addColumn("STAGING_TIME", "string");
        	this.dsInsert.addColumn("SCHEDULING_TYPE", "string");
        	this.dsInsert.addColumn("SUBMI_RELEVANT", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("LIFNR", "string");
        	this.dsUpdate.addColumn("MANDT", "string");
        	this.dsUpdate.addColumn("LAND1", "string");
        	this.dsUpdate.addColumn("NAME1", "string");
        	this.dsUpdate.addColumn("NAME2", "string");
        	this.dsUpdate.addColumn("NAME3", "string");
        	this.dsUpdate.addColumn("NAME4", "string");
        	this.dsUpdate.addColumn("ORT01", "string");
        	this.dsUpdate.addColumn("ORT02", "string");
        	this.dsUpdate.addColumn("PFACH", "string");
        	this.dsUpdate.addColumn("PSTL2", "string");
        	this.dsUpdate.addColumn("PSTLZ", "string");
        	this.dsUpdate.addColumn("REGIO", "string");
        	this.dsUpdate.addColumn("SORTL", "string");
        	this.dsUpdate.addColumn("STRAS", "string");
        	this.dsUpdate.addColumn("ADRNR", "string");
        	this.dsUpdate.addColumn("MCOD1", "string");
        	this.dsUpdate.addColumn("MCOD2", "string");
        	this.dsUpdate.addColumn("MCOD3", "string");
        	this.dsUpdate.addColumn("ANRED", "string");
        	this.dsUpdate.addColumn("BAHNS", "string");
        	this.dsUpdate.addColumn("BBBNR", "string");
        	this.dsUpdate.addColumn("BBSNR", "string");
        	this.dsUpdate.addColumn("BEGRU", "string");
        	this.dsUpdate.addColumn("BRSCH", "string");
        	this.dsUpdate.addColumn("BUBKZ", "string");
        	this.dsUpdate.addColumn("DATLT", "string");
        	this.dsUpdate.addColumn("DTAMS", "string");
        	this.dsUpdate.addColumn("DTAWS", "string");
        	this.dsUpdate.addColumn("ERDAT", "string");
        	this.dsUpdate.addColumn("ERNAM", "string");
        	this.dsUpdate.addColumn("ESRNR", "string");
        	this.dsUpdate.addColumn("KONZS", "string");
        	this.dsUpdate.addColumn("KTOKK", "string");
        	this.dsUpdate.addColumn("KUNNR", "string");
        	this.dsUpdate.addColumn("LNRZA", "string");
        	this.dsUpdate.addColumn("LOEVM", "string");
        	this.dsUpdate.addColumn("SPERR", "string");
        	this.dsUpdate.addColumn("SPERM", "string");
        	this.dsUpdate.addColumn("SPRAS", "string");
        	this.dsUpdate.addColumn("STCD1", "string");
        	this.dsUpdate.addColumn("STCD2", "string");
        	this.dsUpdate.addColumn("STKZA", "string");
        	this.dsUpdate.addColumn("STKZU", "string");
        	this.dsUpdate.addColumn("TELBX", "string");
        	this.dsUpdate.addColumn("TELF1", "string");
        	this.dsUpdate.addColumn("TELF2", "string");
        	this.dsUpdate.addColumn("TELFX", "string");
        	this.dsUpdate.addColumn("TELTX", "string");
        	this.dsUpdate.addColumn("TELX1", "string");
        	this.dsUpdate.addColumn("XCPDK", "string");
        	this.dsUpdate.addColumn("XZEMP", "string");
        	this.dsUpdate.addColumn("VBUND", "string");
        	this.dsUpdate.addColumn("FISKN", "string");
        	this.dsUpdate.addColumn("STCEG", "string");
        	this.dsUpdate.addColumn("STKZN", "string");
        	this.dsUpdate.addColumn("SPERQ", "string");
        	this.dsUpdate.addColumn("GBORT", "string");
        	this.dsUpdate.addColumn("GBDAT", "string");
        	this.dsUpdate.addColumn("SEXKZ", "string");
        	this.dsUpdate.addColumn("KRAUS", "string");
        	this.dsUpdate.addColumn("REVDB", "string");
        	this.dsUpdate.addColumn("QSSYS", "string");
        	this.dsUpdate.addColumn("KTOCK", "string");
        	this.dsUpdate.addColumn("PFORT", "string");
        	this.dsUpdate.addColumn("WERKS", "string");
        	this.dsUpdate.addColumn("LTSNA", "string");
        	this.dsUpdate.addColumn("WERKR", "string");
        	this.dsUpdate.addColumn("PLKAL", "string");
        	this.dsUpdate.addColumn("DUEFL", "string");
        	this.dsUpdate.addColumn("TXJCD", "string");
        	this.dsUpdate.addColumn("SPERZ", "string");
        	this.dsUpdate.addColumn("SCACD", "string");
        	this.dsUpdate.addColumn("SFRGR", "string");
        	this.dsUpdate.addColumn("LZONE", "string");
        	this.dsUpdate.addColumn("XLFZA", "string");
        	this.dsUpdate.addColumn("DLGRP", "string");
        	this.dsUpdate.addColumn("FITYP", "string");
        	this.dsUpdate.addColumn("STCDT", "string");
        	this.dsUpdate.addColumn("REGSS", "string");
        	this.dsUpdate.addColumn("ACTSS", "string");
        	this.dsUpdate.addColumn("STCD3", "string");
        	this.dsUpdate.addColumn("STCD4", "string");
        	this.dsUpdate.addColumn("IPISP", "string");
        	this.dsUpdate.addColumn("TAXBS", "string");
        	this.dsUpdate.addColumn("PROFS", "string");
        	this.dsUpdate.addColumn("STGDL", "string");
        	this.dsUpdate.addColumn("EMNFR", "string");
        	this.dsUpdate.addColumn("LFURL", "string");
        	this.dsUpdate.addColumn("J_1KFREPRE", "string");
        	this.dsUpdate.addColumn("J_1KFTBUS", "string");
        	this.dsUpdate.addColumn("J_1KFTIND", "string");
        	this.dsUpdate.addColumn("CONFS", "string");
        	this.dsUpdate.addColumn("UPDAT", "string");
        	this.dsUpdate.addColumn("UPTIM", "string");
        	this.dsUpdate.addColumn("NODEL", "string");
        	this.dsUpdate.addColumn("QSSYSDAT", "string");
        	this.dsUpdate.addColumn("PODKZB", "string");
        	this.dsUpdate.addColumn("FISKU", "string");
        	this.dsUpdate.addColumn("STENR", "string");
        	this.dsUpdate.addColumn("CARRIER_CONF", "string");
        	this.dsUpdate.addColumn("J_SC_CAPITAL", "string");
        	this.dsUpdate.addColumn("J_SC_CURRENCY", "string");
        	this.dsUpdate.addColumn("ALC", "string");
        	this.dsUpdate.addColumn("PMT_OFFICE", "string");
        	this.dsUpdate.addColumn("PSOFG", "string");
        	this.dsUpdate.addColumn("PSOIS", "string");
        	this.dsUpdate.addColumn("PSON1", "string");
        	this.dsUpdate.addColumn("PSON2", "string");
        	this.dsUpdate.addColumn("PSON3", "string");
        	this.dsUpdate.addColumn("PSOVN", "string");
        	this.dsUpdate.addColumn("PSOTL", "string");
        	this.dsUpdate.addColumn("PSOHS", "string");
        	this.dsUpdate.addColumn("PSOST", "string");
        	this.dsUpdate.addColumn("TRANSPORT_CHAIN", "string");
        	this.dsUpdate.addColumn("STAGING_TIME", "string");
        	this.dsUpdate.addColumn("SCHEDULING_TYPE", "string");
        	this.dsUpdate.addColumn("SUBMI_RELEVANT", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("LIFNR", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_SELECT", this.dsSearch.getColumn(0, "TY_SELECT"));
        	this.dsSelect.setColumn(0, "DS_SEARCH", this.dsSearch.getColumn(0, "DS_SEARCH"));

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
        	this.gfnGridAdd(this.dxGrid);
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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "LIFNR", this.dsList.getColumn(i, "LIFNR"));
        				this.dsInsert.setColumn(nrow, "MANDT", this.dsList.getColumn(i, "MANDT"));
        				this.dsInsert.setColumn(nrow, "LAND1", this.dsList.getColumn(i, "LAND1"));
        				this.dsInsert.setColumn(nrow, "NAME1", this.dsList.getColumn(i, "NAME1"));
        				this.dsInsert.setColumn(nrow, "NAME2", this.dsList.getColumn(i, "NAME2"));
        				this.dsInsert.setColumn(nrow, "NAME3", this.dsList.getColumn(i, "NAME3"));
        				this.dsInsert.setColumn(nrow, "NAME4", this.dsList.getColumn(i, "NAME4"));
        				this.dsInsert.setColumn(nrow, "ORT01", this.dsList.getColumn(i, "ORT01"));
        				this.dsInsert.setColumn(nrow, "ORT02", this.dsList.getColumn(i, "ORT02"));
        				this.dsInsert.setColumn(nrow, "PFACH", this.dsList.getColumn(i, "PFACH"));
        				this.dsInsert.setColumn(nrow, "PSTL2", this.dsList.getColumn(i, "PSTL2"));
        				this.dsInsert.setColumn(nrow, "PSTLZ", this.dsList.getColumn(i, "PSTLZ"));
        				this.dsInsert.setColumn(nrow, "REGIO", this.dsList.getColumn(i, "REGIO"));
        				this.dsInsert.setColumn(nrow, "SORTL", this.dsList.getColumn(i, "SORTL"));
        				this.dsInsert.setColumn(nrow, "STRAS", this.dsList.getColumn(i, "STRAS"));
        				this.dsInsert.setColumn(nrow, "ADRNR", this.dsList.getColumn(i, "ADRNR"));
        				this.dsInsert.setColumn(nrow, "MCOD1", this.dsList.getColumn(i, "MCOD1"));
        				this.dsInsert.setColumn(nrow, "MCOD2", this.dsList.getColumn(i, "MCOD2"));
        				this.dsInsert.setColumn(nrow, "MCOD3", this.dsList.getColumn(i, "MCOD3"));
        				this.dsInsert.setColumn(nrow, "ANRED", this.dsList.getColumn(i, "ANRED"));
        				this.dsInsert.setColumn(nrow, "BAHNS", this.dsList.getColumn(i, "BAHNS"));
        				this.dsInsert.setColumn(nrow, "BBBNR", this.dsList.getColumn(i, "BBBNR"));
        				this.dsInsert.setColumn(nrow, "BBSNR", this.dsList.getColumn(i, "BBSNR"));
        				this.dsInsert.setColumn(nrow, "BEGRU", this.dsList.getColumn(i, "BEGRU"));
        				this.dsInsert.setColumn(nrow, "BRSCH", this.dsList.getColumn(i, "BRSCH"));
        				this.dsInsert.setColumn(nrow, "BUBKZ", this.dsList.getColumn(i, "BUBKZ"));
        				this.dsInsert.setColumn(nrow, "DATLT", this.dsList.getColumn(i, "DATLT"));
        				this.dsInsert.setColumn(nrow, "DTAMS", this.dsList.getColumn(i, "DTAMS"));
        				this.dsInsert.setColumn(nrow, "DTAWS", this.dsList.getColumn(i, "DTAWS"));
        				this.dsInsert.setColumn(nrow, "ERDAT", this.dsList.getColumn(i, "ERDAT"));
        				this.dsInsert.setColumn(nrow, "ERNAM", this.dsList.getColumn(i, "ERNAM"));
        				this.dsInsert.setColumn(nrow, "ESRNR", this.dsList.getColumn(i, "ESRNR"));
        				this.dsInsert.setColumn(nrow, "KONZS", this.dsList.getColumn(i, "KONZS"));
        				this.dsInsert.setColumn(nrow, "KTOKK", this.dsList.getColumn(i, "KTOKK"));
        				this.dsInsert.setColumn(nrow, "KUNNR", this.dsList.getColumn(i, "KUNNR"));
        				this.dsInsert.setColumn(nrow, "LNRZA", this.dsList.getColumn(i, "LNRZA"));
        				this.dsInsert.setColumn(nrow, "LOEVM", this.dsList.getColumn(i, "LOEVM"));
        				this.dsInsert.setColumn(nrow, "SPERR", this.dsList.getColumn(i, "SPERR"));
        				this.dsInsert.setColumn(nrow, "SPERM", this.dsList.getColumn(i, "SPERM"));
        				this.dsInsert.setColumn(nrow, "SPRAS", this.dsList.getColumn(i, "SPRAS"));
        				this.dsInsert.setColumn(nrow, "STCD1", this.dsList.getColumn(i, "STCD1"));
        				this.dsInsert.setColumn(nrow, "STCD2", this.dsList.getColumn(i, "STCD2"));
        				this.dsInsert.setColumn(nrow, "STKZA", this.dsList.getColumn(i, "STKZA"));
        				this.dsInsert.setColumn(nrow, "STKZU", this.dsList.getColumn(i, "STKZU"));
        				this.dsInsert.setColumn(nrow, "TELBX", this.dsList.getColumn(i, "TELBX"));
        				this.dsInsert.setColumn(nrow, "TELF1", this.dsList.getColumn(i, "TELF1"));
        				this.dsInsert.setColumn(nrow, "TELF2", this.dsList.getColumn(i, "TELF2"));
        				this.dsInsert.setColumn(nrow, "TELFX", this.dsList.getColumn(i, "TELFX"));
        				this.dsInsert.setColumn(nrow, "TELTX", this.dsList.getColumn(i, "TELTX"));
        				this.dsInsert.setColumn(nrow, "TELX1", this.dsList.getColumn(i, "TELX1"));
        				this.dsInsert.setColumn(nrow, "XCPDK", this.dsList.getColumn(i, "XCPDK"));
        				this.dsInsert.setColumn(nrow, "XZEMP", this.dsList.getColumn(i, "XZEMP"));
        				this.dsInsert.setColumn(nrow, "VBUND", this.dsList.getColumn(i, "VBUND"));
        				this.dsInsert.setColumn(nrow, "FISKN", this.dsList.getColumn(i, "FISKN"));
        				this.dsInsert.setColumn(nrow, "STCEG", this.dsList.getColumn(i, "STCEG"));
        				this.dsInsert.setColumn(nrow, "STKZN", this.dsList.getColumn(i, "STKZN"));
        				this.dsInsert.setColumn(nrow, "SPERQ", this.dsList.getColumn(i, "SPERQ"));
        				this.dsInsert.setColumn(nrow, "GBORT", this.dsList.getColumn(i, "GBORT"));
        				this.dsInsert.setColumn(nrow, "GBDAT", this.dsList.getColumn(i, "GBDAT"));
        				this.dsInsert.setColumn(nrow, "SEXKZ", this.dsList.getColumn(i, "SEXKZ"));
        				this.dsInsert.setColumn(nrow, "KRAUS", this.dsList.getColumn(i, "KRAUS"));
        				this.dsInsert.setColumn(nrow, "REVDB", this.dsList.getColumn(i, "REVDB"));
        				this.dsInsert.setColumn(nrow, "QSSYS", this.dsList.getColumn(i, "QSSYS"));
        				this.dsInsert.setColumn(nrow, "KTOCK", this.dsList.getColumn(i, "KTOCK"));
        				this.dsInsert.setColumn(nrow, "PFORT", this.dsList.getColumn(i, "PFORT"));
        				this.dsInsert.setColumn(nrow, "WERKS", this.dsList.getColumn(i, "WERKS"));
        				this.dsInsert.setColumn(nrow, "LTSNA", this.dsList.getColumn(i, "LTSNA"));
        				this.dsInsert.setColumn(nrow, "WERKR", this.dsList.getColumn(i, "WERKR"));
        				this.dsInsert.setColumn(nrow, "PLKAL", this.dsList.getColumn(i, "PLKAL"));
        				this.dsInsert.setColumn(nrow, "DUEFL", this.dsList.getColumn(i, "DUEFL"));
        				this.dsInsert.setColumn(nrow, "TXJCD", this.dsList.getColumn(i, "TXJCD"));
        				this.dsInsert.setColumn(nrow, "SPERZ", this.dsList.getColumn(i, "SPERZ"));
        				this.dsInsert.setColumn(nrow, "SCACD", this.dsList.getColumn(i, "SCACD"));
        				this.dsInsert.setColumn(nrow, "SFRGR", this.dsList.getColumn(i, "SFRGR"));
        				this.dsInsert.setColumn(nrow, "LZONE", this.dsList.getColumn(i, "LZONE"));
        				this.dsInsert.setColumn(nrow, "XLFZA", this.dsList.getColumn(i, "XLFZA"));
        				this.dsInsert.setColumn(nrow, "DLGRP", this.dsList.getColumn(i, "DLGRP"));
        				this.dsInsert.setColumn(nrow, "FITYP", this.dsList.getColumn(i, "FITYP"));
        				this.dsInsert.setColumn(nrow, "STCDT", this.dsList.getColumn(i, "STCDT"));
        				this.dsInsert.setColumn(nrow, "REGSS", this.dsList.getColumn(i, "REGSS"));
        				this.dsInsert.setColumn(nrow, "ACTSS", this.dsList.getColumn(i, "ACTSS"));
        				this.dsInsert.setColumn(nrow, "STCD3", this.dsList.getColumn(i, "STCD3"));
        				this.dsInsert.setColumn(nrow, "STCD4", this.dsList.getColumn(i, "STCD4"));
        				this.dsInsert.setColumn(nrow, "IPISP", this.dsList.getColumn(i, "IPISP"));
        				this.dsInsert.setColumn(nrow, "TAXBS", this.dsList.getColumn(i, "TAXBS"));
        				this.dsInsert.setColumn(nrow, "PROFS", this.dsList.getColumn(i, "PROFS"));
        				this.dsInsert.setColumn(nrow, "STGDL", this.dsList.getColumn(i, "STGDL"));
        				this.dsInsert.setColumn(nrow, "EMNFR", this.dsList.getColumn(i, "EMNFR"));
        				this.dsInsert.setColumn(nrow, "LFURL", this.dsList.getColumn(i, "LFURL"));
        				this.dsInsert.setColumn(nrow, "J_1KFREPRE", this.dsList.getColumn(i, "J_1KFREPRE"));
        				this.dsInsert.setColumn(nrow, "J_1KFTBUS", this.dsList.getColumn(i, "J_1KFTBUS"));
        				this.dsInsert.setColumn(nrow, "J_1KFTIND", this.dsList.getColumn(i, "J_1KFTIND"));
        				this.dsInsert.setColumn(nrow, "CONFS", this.dsList.getColumn(i, "CONFS"));
        				this.dsInsert.setColumn(nrow, "UPDAT", this.dsList.getColumn(i, "UPDAT"));
        				this.dsInsert.setColumn(nrow, "UPTIM", this.dsList.getColumn(i, "UPTIM"));
        				this.dsInsert.setColumn(nrow, "NODEL", this.dsList.getColumn(i, "NODEL"));
        				this.dsInsert.setColumn(nrow, "QSSYSDAT", this.dsList.getColumn(i, "QSSYSDAT"));
        				this.dsInsert.setColumn(nrow, "PODKZB", this.dsList.getColumn(i, "PODKZB"));
        				this.dsInsert.setColumn(nrow, "FISKU", this.dsList.getColumn(i, "FISKU"));
        				this.dsInsert.setColumn(nrow, "STENR", this.dsList.getColumn(i, "STENR"));
        				this.dsInsert.setColumn(nrow, "CARRIER_CONF", this.dsList.getColumn(i, "CARRIER_CONF"));
        				this.dsInsert.setColumn(nrow, "J_SC_CAPITAL", this.dsList.getColumn(i, "J_SC_CAPITAL"));
        				this.dsInsert.setColumn(nrow, "J_SC_CURRENCY", this.dsList.getColumn(i, "J_SC_CURRENCY"));
        				this.dsInsert.setColumn(nrow, "ALC", this.dsList.getColumn(i, "ALC"));
        				this.dsInsert.setColumn(nrow, "PMT_OFFICE", this.dsList.getColumn(i, "PMT_OFFICE"));
        				this.dsInsert.setColumn(nrow, "PSOFG", this.dsList.getColumn(i, "PSOFG"));
        				this.dsInsert.setColumn(nrow, "PSOIS", this.dsList.getColumn(i, "PSOIS"));
        				this.dsInsert.setColumn(nrow, "PSON1", this.dsList.getColumn(i, "PSON1"));
        				this.dsInsert.setColumn(nrow, "PSON2", this.dsList.getColumn(i, "PSON2"));
        				this.dsInsert.setColumn(nrow, "PSON3", this.dsList.getColumn(i, "PSON3"));
        				this.dsInsert.setColumn(nrow, "PSOVN", this.dsList.getColumn(i, "PSOVN"));
        				this.dsInsert.setColumn(nrow, "PSOTL", this.dsList.getColumn(i, "PSOTL"));
        				this.dsInsert.setColumn(nrow, "PSOHS", this.dsList.getColumn(i, "PSOHS"));
        				this.dsInsert.setColumn(nrow, "PSOST", this.dsList.getColumn(i, "PSOST"));
        				this.dsInsert.setColumn(nrow, "TRANSPORT_CHAIN", this.dsList.getColumn(i, "TRANSPORT_CHAIN"));
        				this.dsInsert.setColumn(nrow, "STAGING_TIME", this.dsList.getColumn(i, "STAGING_TIME"));
        				this.dsInsert.setColumn(nrow, "SCHEDULING_TYPE", this.dsList.getColumn(i, "SCHEDULING_TYPE"));
        				this.dsInsert.setColumn(nrow, "SUBMI_RELEVANT", this.dsList.getColumn(i, "SUBMI_RELEVANT"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "LIFNR", this.dsList.getColumn(i, "LIFNR"));
        				this.dsUpdate.setColumn(nrow, "MANDT", this.dsList.getColumn(i, "MANDT"));
        				this.dsUpdate.setColumn(nrow, "LAND1", this.dsList.getColumn(i, "LAND1"));
        				this.dsUpdate.setColumn(nrow, "NAME1", this.dsList.getColumn(i, "NAME1"));
        				this.dsUpdate.setColumn(nrow, "NAME2", this.dsList.getColumn(i, "NAME2"));
        				this.dsUpdate.setColumn(nrow, "NAME3", this.dsList.getColumn(i, "NAME3"));
        				this.dsUpdate.setColumn(nrow, "NAME4", this.dsList.getColumn(i, "NAME4"));
        				this.dsUpdate.setColumn(nrow, "ORT01", this.dsList.getColumn(i, "ORT01"));
        				this.dsUpdate.setColumn(nrow, "ORT02", this.dsList.getColumn(i, "ORT02"));
        				this.dsUpdate.setColumn(nrow, "PFACH", this.dsList.getColumn(i, "PFACH"));
        				this.dsUpdate.setColumn(nrow, "PSTL2", this.dsList.getColumn(i, "PSTL2"));
        				this.dsUpdate.setColumn(nrow, "PSTLZ", this.dsList.getColumn(i, "PSTLZ"));
        				this.dsUpdate.setColumn(nrow, "REGIO", this.dsList.getColumn(i, "REGIO"));
        				this.dsUpdate.setColumn(nrow, "SORTL", this.dsList.getColumn(i, "SORTL"));
        				this.dsUpdate.setColumn(nrow, "STRAS", this.dsList.getColumn(i, "STRAS"));
        				this.dsUpdate.setColumn(nrow, "ADRNR", this.dsList.getColumn(i, "ADRNR"));
        				this.dsUpdate.setColumn(nrow, "MCOD1", this.dsList.getColumn(i, "MCOD1"));
        				this.dsUpdate.setColumn(nrow, "MCOD2", this.dsList.getColumn(i, "MCOD2"));
        				this.dsUpdate.setColumn(nrow, "MCOD3", this.dsList.getColumn(i, "MCOD3"));
        				this.dsUpdate.setColumn(nrow, "ANRED", this.dsList.getColumn(i, "ANRED"));
        				this.dsUpdate.setColumn(nrow, "BAHNS", this.dsList.getColumn(i, "BAHNS"));
        				this.dsUpdate.setColumn(nrow, "BBBNR", this.dsList.getColumn(i, "BBBNR"));
        				this.dsUpdate.setColumn(nrow, "BBSNR", this.dsList.getColumn(i, "BBSNR"));
        				this.dsUpdate.setColumn(nrow, "BEGRU", this.dsList.getColumn(i, "BEGRU"));
        				this.dsUpdate.setColumn(nrow, "BRSCH", this.dsList.getColumn(i, "BRSCH"));
        				this.dsUpdate.setColumn(nrow, "BUBKZ", this.dsList.getColumn(i, "BUBKZ"));
        				this.dsUpdate.setColumn(nrow, "DATLT", this.dsList.getColumn(i, "DATLT"));
        				this.dsUpdate.setColumn(nrow, "DTAMS", this.dsList.getColumn(i, "DTAMS"));
        				this.dsUpdate.setColumn(nrow, "DTAWS", this.dsList.getColumn(i, "DTAWS"));
        				this.dsUpdate.setColumn(nrow, "ERDAT", this.dsList.getColumn(i, "ERDAT"));
        				this.dsUpdate.setColumn(nrow, "ERNAM", this.dsList.getColumn(i, "ERNAM"));
        				this.dsUpdate.setColumn(nrow, "ESRNR", this.dsList.getColumn(i, "ESRNR"));
        				this.dsUpdate.setColumn(nrow, "KONZS", this.dsList.getColumn(i, "KONZS"));
        				this.dsUpdate.setColumn(nrow, "KTOKK", this.dsList.getColumn(i, "KTOKK"));
        				this.dsUpdate.setColumn(nrow, "KUNNR", this.dsList.getColumn(i, "KUNNR"));
        				this.dsUpdate.setColumn(nrow, "LNRZA", this.dsList.getColumn(i, "LNRZA"));
        				this.dsUpdate.setColumn(nrow, "LOEVM", this.dsList.getColumn(i, "LOEVM"));
        				this.dsUpdate.setColumn(nrow, "SPERR", this.dsList.getColumn(i, "SPERR"));
        				this.dsUpdate.setColumn(nrow, "SPERM", this.dsList.getColumn(i, "SPERM"));
        				this.dsUpdate.setColumn(nrow, "SPRAS", this.dsList.getColumn(i, "SPRAS"));
        				this.dsUpdate.setColumn(nrow, "STCD1", this.dsList.getColumn(i, "STCD1"));
        				this.dsUpdate.setColumn(nrow, "STCD2", this.dsList.getColumn(i, "STCD2"));
        				this.dsUpdate.setColumn(nrow, "STKZA", this.dsList.getColumn(i, "STKZA"));
        				this.dsUpdate.setColumn(nrow, "STKZU", this.dsList.getColumn(i, "STKZU"));
        				this.dsUpdate.setColumn(nrow, "TELBX", this.dsList.getColumn(i, "TELBX"));
        				this.dsUpdate.setColumn(nrow, "TELF1", this.dsList.getColumn(i, "TELF1"));
        				this.dsUpdate.setColumn(nrow, "TELF2", this.dsList.getColumn(i, "TELF2"));
        				this.dsUpdate.setColumn(nrow, "TELFX", this.dsList.getColumn(i, "TELFX"));
        				this.dsUpdate.setColumn(nrow, "TELTX", this.dsList.getColumn(i, "TELTX"));
        				this.dsUpdate.setColumn(nrow, "TELX1", this.dsList.getColumn(i, "TELX1"));
        				this.dsUpdate.setColumn(nrow, "XCPDK", this.dsList.getColumn(i, "XCPDK"));
        				this.dsUpdate.setColumn(nrow, "XZEMP", this.dsList.getColumn(i, "XZEMP"));
        				this.dsUpdate.setColumn(nrow, "VBUND", this.dsList.getColumn(i, "VBUND"));
        				this.dsUpdate.setColumn(nrow, "FISKN", this.dsList.getColumn(i, "FISKN"));
        				this.dsUpdate.setColumn(nrow, "STCEG", this.dsList.getColumn(i, "STCEG"));
        				this.dsUpdate.setColumn(nrow, "STKZN", this.dsList.getColumn(i, "STKZN"));
        				this.dsUpdate.setColumn(nrow, "SPERQ", this.dsList.getColumn(i, "SPERQ"));
        				this.dsUpdate.setColumn(nrow, "GBORT", this.dsList.getColumn(i, "GBORT"));
        				this.dsUpdate.setColumn(nrow, "GBDAT", this.dsList.getColumn(i, "GBDAT"));
        				this.dsUpdate.setColumn(nrow, "SEXKZ", this.dsList.getColumn(i, "SEXKZ"));
        				this.dsUpdate.setColumn(nrow, "KRAUS", this.dsList.getColumn(i, "KRAUS"));
        				this.dsUpdate.setColumn(nrow, "REVDB", this.dsList.getColumn(i, "REVDB"));
        				this.dsUpdate.setColumn(nrow, "QSSYS", this.dsList.getColumn(i, "QSSYS"));
        				this.dsUpdate.setColumn(nrow, "KTOCK", this.dsList.getColumn(i, "KTOCK"));
        				this.dsUpdate.setColumn(nrow, "PFORT", this.dsList.getColumn(i, "PFORT"));
        				this.dsUpdate.setColumn(nrow, "WERKS", this.dsList.getColumn(i, "WERKS"));
        				this.dsUpdate.setColumn(nrow, "LTSNA", this.dsList.getColumn(i, "LTSNA"));
        				this.dsUpdate.setColumn(nrow, "WERKR", this.dsList.getColumn(i, "WERKR"));
        				this.dsUpdate.setColumn(nrow, "PLKAL", this.dsList.getColumn(i, "PLKAL"));
        				this.dsUpdate.setColumn(nrow, "DUEFL", this.dsList.getColumn(i, "DUEFL"));
        				this.dsUpdate.setColumn(nrow, "TXJCD", this.dsList.getColumn(i, "TXJCD"));
        				this.dsUpdate.setColumn(nrow, "SPERZ", this.dsList.getColumn(i, "SPERZ"));
        				this.dsUpdate.setColumn(nrow, "SCACD", this.dsList.getColumn(i, "SCACD"));
        				this.dsUpdate.setColumn(nrow, "SFRGR", this.dsList.getColumn(i, "SFRGR"));
        				this.dsUpdate.setColumn(nrow, "LZONE", this.dsList.getColumn(i, "LZONE"));
        				this.dsUpdate.setColumn(nrow, "XLFZA", this.dsList.getColumn(i, "XLFZA"));
        				this.dsUpdate.setColumn(nrow, "DLGRP", this.dsList.getColumn(i, "DLGRP"));
        				this.dsUpdate.setColumn(nrow, "FITYP", this.dsList.getColumn(i, "FITYP"));
        				this.dsUpdate.setColumn(nrow, "STCDT", this.dsList.getColumn(i, "STCDT"));
        				this.dsUpdate.setColumn(nrow, "REGSS", this.dsList.getColumn(i, "REGSS"));
        				this.dsUpdate.setColumn(nrow, "ACTSS", this.dsList.getColumn(i, "ACTSS"));
        				this.dsUpdate.setColumn(nrow, "STCD3", this.dsList.getColumn(i, "STCD3"));
        				this.dsUpdate.setColumn(nrow, "STCD4", this.dsList.getColumn(i, "STCD4"));
        				this.dsUpdate.setColumn(nrow, "IPISP", this.dsList.getColumn(i, "IPISP"));
        				this.dsUpdate.setColumn(nrow, "TAXBS", this.dsList.getColumn(i, "TAXBS"));
        				this.dsUpdate.setColumn(nrow, "PROFS", this.dsList.getColumn(i, "PROFS"));
        				this.dsUpdate.setColumn(nrow, "STGDL", this.dsList.getColumn(i, "STGDL"));
        				this.dsUpdate.setColumn(nrow, "EMNFR", this.dsList.getColumn(i, "EMNFR"));
        				this.dsUpdate.setColumn(nrow, "LFURL", this.dsList.getColumn(i, "LFURL"));
        				this.dsUpdate.setColumn(nrow, "J_1KFREPRE", this.dsList.getColumn(i, "J_1KFREPRE"));
        				this.dsUpdate.setColumn(nrow, "J_1KFTBUS", this.dsList.getColumn(i, "J_1KFTBUS"));
        				this.dsUpdate.setColumn(nrow, "J_1KFTIND", this.dsList.getColumn(i, "J_1KFTIND"));
        				this.dsUpdate.setColumn(nrow, "CONFS", this.dsList.getColumn(i, "CONFS"));
        				this.dsUpdate.setColumn(nrow, "UPDAT", this.dsList.getColumn(i, "UPDAT"));
        				this.dsUpdate.setColumn(nrow, "UPTIM", this.dsList.getColumn(i, "UPTIM"));
        				this.dsUpdate.setColumn(nrow, "NODEL", this.dsList.getColumn(i, "NODEL"));
        				this.dsUpdate.setColumn(nrow, "QSSYSDAT", this.dsList.getColumn(i, "QSSYSDAT"));
        				this.dsUpdate.setColumn(nrow, "PODKZB", this.dsList.getColumn(i, "PODKZB"));
        				this.dsUpdate.setColumn(nrow, "FISKU", this.dsList.getColumn(i, "FISKU"));
        				this.dsUpdate.setColumn(nrow, "STENR", this.dsList.getColumn(i, "STENR"));
        				this.dsUpdate.setColumn(nrow, "CARRIER_CONF", this.dsList.getColumn(i, "CARRIER_CONF"));
        				this.dsUpdate.setColumn(nrow, "J_SC_CAPITAL", this.dsList.getColumn(i, "J_SC_CAPITAL"));
        				this.dsUpdate.setColumn(nrow, "J_SC_CURRENCY", this.dsList.getColumn(i, "J_SC_CURRENCY"));
        				this.dsUpdate.setColumn(nrow, "ALC", this.dsList.getColumn(i, "ALC"));
        				this.dsUpdate.setColumn(nrow, "PMT_OFFICE", this.dsList.getColumn(i, "PMT_OFFICE"));
        				this.dsUpdate.setColumn(nrow, "PSOFG", this.dsList.getColumn(i, "PSOFG"));
        				this.dsUpdate.setColumn(nrow, "PSOIS", this.dsList.getColumn(i, "PSOIS"));
        				this.dsUpdate.setColumn(nrow, "PSON1", this.dsList.getColumn(i, "PSON1"));
        				this.dsUpdate.setColumn(nrow, "PSON2", this.dsList.getColumn(i, "PSON2"));
        				this.dsUpdate.setColumn(nrow, "PSON3", this.dsList.getColumn(i, "PSON3"));
        				this.dsUpdate.setColumn(nrow, "PSOVN", this.dsList.getColumn(i, "PSOVN"));
        				this.dsUpdate.setColumn(nrow, "PSOTL", this.dsList.getColumn(i, "PSOTL"));
        				this.dsUpdate.setColumn(nrow, "PSOHS", this.dsList.getColumn(i, "PSOHS"));
        				this.dsUpdate.setColumn(nrow, "PSOST", this.dsList.getColumn(i, "PSOST"));
        				this.dsUpdate.setColumn(nrow, "TRANSPORT_CHAIN", this.dsList.getColumn(i, "TRANSPORT_CHAIN"));
        				this.dsUpdate.setColumn(nrow, "STAGING_TIME", this.dsList.getColumn(i, "STAGING_TIME"));
        				this.dsUpdate.setColumn(nrow, "SCHEDULING_TYPE", this.dsList.getColumn(i, "SCHEDULING_TYPE"));
        				this.dsUpdate.setColumn(nrow, "SUBMI_RELEVANT", this.dsList.getColumn(i, "SUBMI_RELEVANT"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "LIFNR", this.dsList.getColumn(i, "LIFNR"));
        				break;
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
         * 서브 버튼 이벤트
         ************************************************************************/


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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "sap_select")
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
        				if(this.dsExport.getColumn(0, "RETURN").substr(0,1) == "T")
        				{
        					this.fnSapUpdate();
        				}
        				else
        				{
        					this.gfnAlert(this.dsExport.getColumn(0, "RETURN"));
        				}
        			}
        		}
        		else
        		{
        			this.gfnAlert("반환된 데이터가 없습니다.");
        		}
        	}
        	else if(svcID == "update")
        	{
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			var rtn = this.dsExport.getColumn(0, "RETURN");
        			if(!this.gfnIsNull(rtn)) {
        				if(rtn.substr(0, 1) == "T") {

        					var msg1 = "회사명 : " + this.dsWALFA1.getColumn(0, "NAME1") +
        								"\n사업자번호 : " + this.dsWALFA1.getColumn(0, "ADRNR")
        								;
        								this.gfnAlert(msg1, "fnCallback_callback");

        				}
        				else if(rtn.substr(0, 1) == "F") {
        					this.gfnAlert("업체정보가 없습니다.", "fnCallback_callback");
        				}
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "insert")
        	{
        		if (errorCode == 0) {
        			this.fnInsert_callback = function()
        			{
        				//this.FormBtns.Select.click();
        			}

        			this.gfnAlert("전체 거래처 이관 완료되었습니다.", "", "", "fnInsert_callback");
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "sap_update")
        	{
        		if(this.dsExport.rowcount > 0)
        		{
        			if(this.dsExport.getColumn(0, "") == "S")
        			{
        				this.gfnAlert(this.dsExport.getColumn(0, "RTNMSG"), "", "", "fnQUERY");
        			}
        			else
        			{
        				this.gfnAlert(this.dsExport.getColumn(0, "RTNMSG") + "\n" + this.dsExport.getColumn(0, "RTNCD"));
        			}
        		}
        		else
        		{
        			this.gfnAleert(errorMsg);
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
         //SAP거래처생성
        this.fnCREATE = function(strId, val) {
        	var param = {};

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DQD_VENDOR_AP_CREATE", "fnCreate_callback", param, 940, 550);
        }

        this.fnCreate_callback = function(strId, val)
        {
        	this.FormBtns.Select.click();
        }

        this.fnQUERY = function(strId, val) {
        	if(this.dsList.rowcount < 1 || this.dsList.rowposition < 0)
        	{
        		this.gfnAlert("데이터를 선택해주세요.");
        		return false;
        	}

        	this.fnSapSelect(this.dsList.getColumn(this.dsList.rowposition, "LIFNR"));
        }


        this.fnSapSelect = function(plifnr) {
        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "ZSUAS_EDI02");

        	this.dsSelectSap1 = new Dataset();
        	this.dsSelectSap1.addColumn("PLIFNR", "string");

        	nrow = this.dsSelectSap1.addRow();
        	// IN 파라미터 셋팅
        	this.dsSelectSap1.setColumn(nrow, "PLIFNR", plifnr);

        	// SAP 호출
        	var strSvcId    = "sap_select";
        	var strSvcType  = "sap";
        	var inProc		= "_dsProcSap";
        	var inData      = "select=dsSelectSap1";
        	var outData     = "dsExport=export dsWALFA1=WALFA1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	if(plifnr != "*") strArg = "gubun=update";
        	else strArg = "gubun=insert"

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnSapInsert = function()
        {
        	this.dsInsert.clearData();

        	for(var i = 0 ; i < this.dsWALFA1.rowcount; i++)
        	{
        		var nrow = this.dsInsert.addRow();
        		this.dsInsert.setColumn(nrow, "LIFNR", this.dsWALFA1.getColumn(i, "LIFNR"));
        		this.dsInsert.setColumn(nrow, "MANDT", this.dsWALFA1.getColumn(i, "MANDT"));
        		this.dsInsert.setColumn(nrow, "LAND1", this.dsWALFA1.getColumn(i, "LAND1"));
        		this.dsInsert.setColumn(nrow, "NAME1", this.dsWALFA1.getColumn(i, "NAME1"));
        		this.dsInsert.setColumn(nrow, "NAME2", this.dsWALFA1.getColumn(i, "NAME2"));
        		this.dsInsert.setColumn(nrow, "NAME3", this.dsWALFA1.getColumn(i, "NAME3"));
        		this.dsInsert.setColumn(nrow, "NAME4", this.dsWALFA1.getColumn(i, "NAME4"));
        		this.dsInsert.setColumn(nrow, "ORT01", this.dsWALFA1.getColumn(i, "ORT01"));
        		this.dsInsert.setColumn(nrow, "ORT02", this.dsWALFA1.getColumn(i, "ORT02"));
        		this.dsInsert.setColumn(nrow, "PFACH", this.dsWALFA1.getColumn(i, "PFACH"));
        		this.dsInsert.setColumn(nrow, "PSTL2", this.dsWALFA1.getColumn(i, "PSTL2"));
        		this.dsInsert.setColumn(nrow, "PSTLZ", this.dsWALFA1.getColumn(i, "PSTLZ"));
        		this.dsInsert.setColumn(nrow, "REGIO", this.dsWALFA1.getColumn(i, "REGIO"));
        		this.dsInsert.setColumn(nrow, "SORTL", this.dsWALFA1.getColumn(i, "SORTL"));
        		this.dsInsert.setColumn(nrow, "STRAS", this.dsWALFA1.getColumn(i, "STRAS"));
        		this.dsInsert.setColumn(nrow, "ADRNR", this.dsWALFA1.getColumn(i, "ADRNR"));
        		this.dsInsert.setColumn(nrow, "MCOD1", this.dsWALFA1.getColumn(i, "MCOD1"));
        		this.dsInsert.setColumn(nrow, "MCOD2", this.dsWALFA1.getColumn(i, "MCOD2"));
        		this.dsInsert.setColumn(nrow, "MCOD3", this.dsWALFA1.getColumn(i, "MCOD3"));
        		this.dsInsert.setColumn(nrow, "ANRED", this.dsWALFA1.getColumn(i, "ANRED"));
        		this.dsInsert.setColumn(nrow, "BAHNS", this.dsWALFA1.getColumn(i, "BAHNS"));
        		this.dsInsert.setColumn(nrow, "BBBNR", this.dsWALFA1.getColumn(i, "BBBNR"));
        		this.dsInsert.setColumn(nrow, "BBSNR", this.dsWALFA1.getColumn(i, "BBSNR"));
        		this.dsInsert.setColumn(nrow, "BEGRU", this.dsWALFA1.getColumn(i, "BEGRU"));
        		this.dsInsert.setColumn(nrow, "BRSCH", this.dsWALFA1.getColumn(i, "BRSCH"));
        		this.dsInsert.setColumn(nrow, "BUBKZ", this.dsWALFA1.getColumn(i, "BUBKZ"));
        		this.dsInsert.setColumn(nrow, "DATLT", this.dsWALFA1.getColumn(i, "DATLT"));
        		this.dsInsert.setColumn(nrow, "DTAMS", this.dsWALFA1.getColumn(i, "DTAMS"));
        		this.dsInsert.setColumn(nrow, "DTAWS", this.dsWALFA1.getColumn(i, "DTAWS"));
        		this.dsInsert.setColumn(nrow, "ERDAT", this.dsWALFA1.getColumn(i, "ERDAT"));
        		this.dsInsert.setColumn(nrow, "ERNAM", this.dsWALFA1.getColumn(i, "ERNAM"));
        		this.dsInsert.setColumn(nrow, "ESRNR", this.dsWALFA1.getColumn(i, "ESRNR"));
        		this.dsInsert.setColumn(nrow, "KONZS", this.dsWALFA1.getColumn(i, "KONZS"));
        		this.dsInsert.setColumn(nrow, "KTOKK", this.dsWALFA1.getColumn(i, "KTOKK"));
        		this.dsInsert.setColumn(nrow, "KUNNR", this.dsWALFA1.getColumn(i, "KUNNR"));
        		this.dsInsert.setColumn(nrow, "LNRZA", this.dsWALFA1.getColumn(i, "LNRZA"));
        		this.dsInsert.setColumn(nrow, "LOEVM", this.dsWALFA1.getColumn(i, "LOEVM"));
        		this.dsInsert.setColumn(nrow, "SPERR", this.dsWALFA1.getColumn(i, "SPERR"));
        		this.dsInsert.setColumn(nrow, "SPERM", this.dsWALFA1.getColumn(i, "SPERM"));
        		this.dsInsert.setColumn(nrow, "SPRAS", this.dsWALFA1.getColumn(i, "SPRAS"));
        		this.dsInsert.setColumn(nrow, "STCD1", this.dsWALFA1.getColumn(i, "STCD1"));
        		this.dsInsert.setColumn(nrow, "STCD2", this.dsWALFA1.getColumn(i, "STCD2"));
        		this.dsInsert.setColumn(nrow, "STKZA", this.dsWALFA1.getColumn(i, "STKZA"));
        		this.dsInsert.setColumn(nrow, "STKZU", this.dsWALFA1.getColumn(i, "STKZU"));
        		this.dsInsert.setColumn(nrow, "TELBX", this.dsWALFA1.getColumn(i, "TELBX"));
        		this.dsInsert.setColumn(nrow, "TELF1", this.dsWALFA1.getColumn(i, "TELF1"));
        		this.dsInsert.setColumn(nrow, "TELF2", this.dsWALFA1.getColumn(i, "TELF2"));
        		this.dsInsert.setColumn(nrow, "TELFX", this.dsWALFA1.getColumn(i, "TELFX"));
        		this.dsInsert.setColumn(nrow, "TELTX", this.dsWALFA1.getColumn(i, "TELTX"));
        		this.dsInsert.setColumn(nrow, "TELX1", this.dsWALFA1.getColumn(i, "TELX1"));
        		this.dsInsert.setColumn(nrow, "XCPDK", this.dsWALFA1.getColumn(i, "XCPDK"));
        		this.dsInsert.setColumn(nrow, "XZEMP", this.dsWALFA1.getColumn(i, "XZEMP"));
        		this.dsInsert.setColumn(nrow, "VBUND", this.dsWALFA1.getColumn(i, "VBUND"));
        		this.dsInsert.setColumn(nrow, "FISKN", this.dsWALFA1.getColumn(i, "FISKN"));
        		this.dsInsert.setColumn(nrow, "STCEG", this.dsWALFA1.getColumn(i, "STCEG"));
        		this.dsInsert.setColumn(nrow, "STKZN", this.dsWALFA1.getColumn(i, "STKZN"));
        		this.dsInsert.setColumn(nrow, "SPERQ", this.dsWALFA1.getColumn(i, "SPERQ"));
        		this.dsInsert.setColumn(nrow, "GBORT", this.dsWALFA1.getColumn(i, "GBORT"));
        		this.dsInsert.setColumn(nrow, "GBDAT", this.dsWALFA1.getColumn(i, "GBDAT"));
        		this.dsInsert.setColumn(nrow, "SEXKZ", this.dsWALFA1.getColumn(i, "SEXKZ"));
        		this.dsInsert.setColumn(nrow, "KRAUS", this.dsWALFA1.getColumn(i, "KRAUS"));
        		this.dsInsert.setColumn(nrow, "REVDB", this.dsWALFA1.getColumn(i, "REVDB"));
        		this.dsInsert.setColumn(nrow, "QSSYS", this.dsWALFA1.getColumn(i, "QSSYS"));
        		this.dsInsert.setColumn(nrow, "KTOCK", this.dsWALFA1.getColumn(i, "KTOCK"));
        		this.dsInsert.setColumn(nrow, "PFORT", this.dsWALFA1.getColumn(i, "PFORT"));
        		this.dsInsert.setColumn(nrow, "WERKS", this.dsWALFA1.getColumn(i, "WERKS"));
        		this.dsInsert.setColumn(nrow, "LTSNA", this.dsWALFA1.getColumn(i, "LTSNA"));
        		this.dsInsert.setColumn(nrow, "WERKR", this.dsWALFA1.getColumn(i, "WERKR"));
        		this.dsInsert.setColumn(nrow, "PLKAL", this.dsWALFA1.getColumn(i, "PLKAL"));
        		this.dsInsert.setColumn(nrow, "DUEFL", this.dsWALFA1.getColumn(i, "DUEFL"));
        		this.dsInsert.setColumn(nrow, "TXJCD", this.dsWALFA1.getColumn(i, "TXJCD"));
        		this.dsInsert.setColumn(nrow, "SPERZ", this.dsWALFA1.getColumn(i, "SPERZ"));
        		this.dsInsert.setColumn(nrow, "SCACD", this.dsWALFA1.getColumn(i, "SCACD"));
        		this.dsInsert.setColumn(nrow, "SFRGR", this.dsWALFA1.getColumn(i, "SFRGR"));
        		this.dsInsert.setColumn(nrow, "LZONE", this.dsWALFA1.getColumn(i, "LZONE"));
        		this.dsInsert.setColumn(nrow, "XLFZA", this.dsWALFA1.getColumn(i, "XLFZA"));
        		this.dsInsert.setColumn(nrow, "DLGRP", this.dsWALFA1.getColumn(i, "DLGRP"));
        		this.dsInsert.setColumn(nrow, "FITYP", this.dsWALFA1.getColumn(i, "FITYP"));
        		this.dsInsert.setColumn(nrow, "STCDT", this.dsWALFA1.getColumn(i, "STCDT"));
        		this.dsInsert.setColumn(nrow, "REGSS", this.dsWALFA1.getColumn(i, "REGSS"));
        		this.dsInsert.setColumn(nrow, "ACTSS", this.dsWALFA1.getColumn(i, "ACTSS"));
        		this.dsInsert.setColumn(nrow, "STCD3", this.dsWALFA1.getColumn(i, "STCD3"));
        		this.dsInsert.setColumn(nrow, "STCD4", this.dsWALFA1.getColumn(i, "STCD4"));
        		this.dsInsert.setColumn(nrow, "IPISP", this.dsWALFA1.getColumn(i, "IPISP"));
        		this.dsInsert.setColumn(nrow, "TAXBS", this.dsWALFA1.getColumn(i, "TAXBS"));
        		this.dsInsert.setColumn(nrow, "PROFS", this.dsWALFA1.getColumn(i, "PROFS"));
        		this.dsInsert.setColumn(nrow, "STGDL", this.dsWALFA1.getColumn(i, "STGDL"));
        		this.dsInsert.setColumn(nrow, "EMNFR", this.dsWALFA1.getColumn(i, "EMNFR"));
        		this.dsInsert.setColumn(nrow, "LFURL", this.dsWALFA1.getColumn(i, "LFURL"));
        		this.dsInsert.setColumn(nrow, "J_1KFREPRE", this.dsWALFA1.getColumn(i, "J_1KFREPRE"));
        		this.dsInsert.setColumn(nrow, "J_1KFTBUS", this.dsWALFA1.getColumn(i, "J_1KFTBUS"));
        		this.dsInsert.setColumn(nrow, "J_1KFTIND", this.dsWALFA1.getColumn(i, "J_1KFTIND"));
        		this.dsInsert.setColumn(nrow, "CONFS", this.dsWALFA1.getColumn(i, "CONFS"));
        		this.dsInsert.setColumn(nrow, "UPDAT", this.dsWALFA1.getColumn(i, "UPDAT"));
        		this.dsInsert.setColumn(nrow, "UPTIM", this.dsWALFA1.getColumn(i, "UPTIM"));
        		this.dsInsert.setColumn(nrow, "NODEL", this.dsWALFA1.getColumn(i, "NODEL"));
        		this.dsInsert.setColumn(nrow, "QSSYSDAT", this.dsWALFA1.getColumn(i, "QSSYSDAT"));
        		this.dsInsert.setColumn(nrow, "PODKZB", this.dsWALFA1.getColumn(i, "PODKZB"));
        		this.dsInsert.setColumn(nrow, "FISKU", this.dsWALFA1.getColumn(i, "FISKU"));
        		this.dsInsert.setColumn(nrow, "STENR", this.dsWALFA1.getColumn(i, "STENR"));
        		this.dsInsert.setColumn(nrow, "CARRIER_CONF", this.dsWALFA1.getColumn(i, "CARRIER_CONF"));
        		this.dsInsert.setColumn(nrow, "J_SC_CAPITAL", this.dsWALFA1.getColumn(i, "J_SC_CAPITAL"));
        		this.dsInsert.setColumn(nrow, "J_SC_CURRENCY", this.dsWALFA1.getColumn(i, "J_SC_CURRENCY"));
        		this.dsInsert.setColumn(nrow, "ALC", this.dsWALFA1.getColumn(i, "ALC"));
        		this.dsInsert.setColumn(nrow, "PMT_OFFICE", this.dsWALFA1.getColumn(i, "PMT_OFFICE"));
        		this.dsInsert.setColumn(nrow, "PSOFG", this.dsWALFA1.getColumn(i, "PSOFG"));
        		this.dsInsert.setColumn(nrow, "PSOIS", this.dsWALFA1.getColumn(i, "PSOIS"));
        		this.dsInsert.setColumn(nrow, "PSON1", this.dsWALFA1.getColumn(i, "PSON1"));
        		this.dsInsert.setColumn(nrow, "PSON2", this.dsWALFA1.getColumn(i, "PSON2"));
        		this.dsInsert.setColumn(nrow, "PSON3", this.dsWALFA1.getColumn(i, "PSON3"));
        		this.dsInsert.setColumn(nrow, "PSOVN", this.dsWALFA1.getColumn(i, "PSOVN"));
        		this.dsInsert.setColumn(nrow, "PSOTL", this.dsWALFA1.getColumn(i, "PSOTL"));
        		this.dsInsert.setColumn(nrow, "PSOHS", this.dsWALFA1.getColumn(i, "PSOHS"));
        		this.dsInsert.setColumn(nrow, "PSOST", this.dsWALFA1.getColumn(i, "PSOST"));
        		this.dsInsert.setColumn(nrow, "TRANSPORT_CHAIN", this.dsWALFA1.getColumn(i, "TRANSPORT_CHAIN"));
        		this.dsInsert.setColumn(nrow, "STAGING_TIME", this.dsWALFA1.getColumn(i, "STAGING_TIME"));
        		this.dsInsert.setColumn(nrow, "SCHEDULING_TYPE", this.dsWALFA1.getColumn(i, "SCHEDULING_TYPE"));
        		this.dsInsert.setColumn(nrow, "SUBMI_RELEVANT", this.dsWALFA1.getColumn(i, "SUBMI_RELEVANT"));
        		this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

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


        this.fnSapUpdate = function()
        {
        	this.dsUpdate.clearData();

        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "LIFNR", this.dsWALFA1.getColumn(0, "LIFNR"));
        	this.dsUpdate.setColumn(nrow, "MANDT", this.dsWALFA1.getColumn(0, "MANDT"));
        	this.dsUpdate.setColumn(nrow, "LAND1", this.dsWALFA1.getColumn(0, "LAND1"));
        	this.dsUpdate.setColumn(nrow, "NAME1", this.dsWALFA1.getColumn(0, "NAME1"));
        	this.dsUpdate.setColumn(nrow, "NAME2", this.dsWALFA1.getColumn(0, "NAME2"));
        	this.dsUpdate.setColumn(nrow, "NAME3", this.dsWALFA1.getColumn(0, "NAME3"));
        	this.dsUpdate.setColumn(nrow, "NAME4", this.dsWALFA1.getColumn(0, "NAME4"));
        	this.dsUpdate.setColumn(nrow, "ORT01", this.dsWALFA1.getColumn(0, "ORT01"));
        	this.dsUpdate.setColumn(nrow, "ORT02", this.dsWALFA1.getColumn(0, "ORT02"));
        	this.dsUpdate.setColumn(nrow, "PFACH", this.dsWALFA1.getColumn(0, "PFACH"));
        	this.dsUpdate.setColumn(nrow, "PSTL2", this.dsWALFA1.getColumn(0, "PSTL2"));
        	this.dsUpdate.setColumn(nrow, "PSTLZ", this.dsWALFA1.getColumn(0, "PSTLZ"));
        	this.dsUpdate.setColumn(nrow, "REGIO", this.dsWALFA1.getColumn(0, "REGIO"));
        	this.dsUpdate.setColumn(nrow, "SORTL", this.dsWALFA1.getColumn(0, "SORTL"));
        	this.dsUpdate.setColumn(nrow, "STRAS", this.dsWALFA1.getColumn(0, "STRAS"));
        	this.dsUpdate.setColumn(nrow, "ADRNR", this.dsWALFA1.getColumn(0, "ADRNR"));
        	this.dsUpdate.setColumn(nrow, "MCOD1", this.dsWALFA1.getColumn(0, "MCOD1"));
        	this.dsUpdate.setColumn(nrow, "MCOD2", this.dsWALFA1.getColumn(0, "MCOD2"));
        	this.dsUpdate.setColumn(nrow, "MCOD3", this.dsWALFA1.getColumn(0, "MCOD3"));
        	this.dsUpdate.setColumn(nrow, "ANRED", this.dsWALFA1.getColumn(0, "ANRED"));
        	this.dsUpdate.setColumn(nrow, "BAHNS", this.dsWALFA1.getColumn(0, "BAHNS"));
        	this.dsUpdate.setColumn(nrow, "BBBNR", this.dsWALFA1.getColumn(0, "BBBNR"));
        	this.dsUpdate.setColumn(nrow, "BBSNR", this.dsWALFA1.getColumn(0, "BBSNR"));
        	this.dsUpdate.setColumn(nrow, "BEGRU", this.dsWALFA1.getColumn(0, "BEGRU"));
        	this.dsUpdate.setColumn(nrow, "BRSCH", this.dsWALFA1.getColumn(0, "BRSCH"));
        	this.dsUpdate.setColumn(nrow, "BUBKZ", this.dsWALFA1.getColumn(0, "BUBKZ"));
        	this.dsUpdate.setColumn(nrow, "DATLT", this.dsWALFA1.getColumn(0, "DATLT"));
        	this.dsUpdate.setColumn(nrow, "DTAMS", this.dsWALFA1.getColumn(0, "DTAMS"));
        	this.dsUpdate.setColumn(nrow, "DTAWS", this.dsWALFA1.getColumn(0, "DTAWS"));
        	this.dsUpdate.setColumn(nrow, "ERDAT", this.dsWALFA1.getColumn(0, "ERDAT"));
        	this.dsUpdate.setColumn(nrow, "ERNAM", this.dsWALFA1.getColumn(0, "ERNAM"));
        	this.dsUpdate.setColumn(nrow, "ESRNR", this.dsWALFA1.getColumn(0, "ESRNR"));
        	this.dsUpdate.setColumn(nrow, "KONZS", this.dsWALFA1.getColumn(0, "KONZS"));
        	this.dsUpdate.setColumn(nrow, "KTOKK", this.dsWALFA1.getColumn(0, "KTOKK"));
        	this.dsUpdate.setColumn(nrow, "KUNNR", this.dsWALFA1.getColumn(0, "KUNNR"));
        	this.dsUpdate.setColumn(nrow, "LNRZA", this.dsWALFA1.getColumn(0, "LNRZA"));
        	this.dsUpdate.setColumn(nrow, "LOEVM", this.dsWALFA1.getColumn(0, "LOEVM"));
        	this.dsUpdate.setColumn(nrow, "SPERR", this.dsWALFA1.getColumn(0, "SPERR"));
        	this.dsUpdate.setColumn(nrow, "SPERM", this.dsWALFA1.getColumn(0, "SPERM"));
        	this.dsUpdate.setColumn(nrow, "SPRAS", this.dsWALFA1.getColumn(0, "SPRAS"));
        	this.dsUpdate.setColumn(nrow, "STCD1", this.dsWALFA1.getColumn(0, "STCD1"));
        	this.dsUpdate.setColumn(nrow, "STCD2", this.dsWALFA1.getColumn(0, "STCD2"));
        	this.dsUpdate.setColumn(nrow, "STKZA", this.dsWALFA1.getColumn(0, "STKZA"));
        	this.dsUpdate.setColumn(nrow, "STKZU", this.dsWALFA1.getColumn(0, "STKZU"));
        	this.dsUpdate.setColumn(nrow, "TELBX", this.dsWALFA1.getColumn(0, "TELBX"));
        	this.dsUpdate.setColumn(nrow, "TELF1", this.dsWALFA1.getColumn(0, "TELF1"));
        	this.dsUpdate.setColumn(nrow, "TELF2", this.dsWALFA1.getColumn(0, "TELF2"));
        	this.dsUpdate.setColumn(nrow, "TELFX", this.dsWALFA1.getColumn(0, "TELFX"));
        	this.dsUpdate.setColumn(nrow, "TELTX", this.dsWALFA1.getColumn(0, "TELTX"));
        	this.dsUpdate.setColumn(nrow, "TELX1", this.dsWALFA1.getColumn(0, "TELX1"));
        	this.dsUpdate.setColumn(nrow, "XCPDK", this.dsWALFA1.getColumn(0, "XCPDK"));
        	this.dsUpdate.setColumn(nrow, "XZEMP", this.dsWALFA1.getColumn(0, "XZEMP"));
        	this.dsUpdate.setColumn(nrow, "VBUND", this.dsWALFA1.getColumn(0, "VBUND"));
        	this.dsUpdate.setColumn(nrow, "FISKN", this.dsWALFA1.getColumn(0, "FISKN"));
        	this.dsUpdate.setColumn(nrow, "STCEG", this.dsWALFA1.getColumn(0, "STCEG"));
        	this.dsUpdate.setColumn(nrow, "STKZN", this.dsWALFA1.getColumn(0, "STKZN"));
        	this.dsUpdate.setColumn(nrow, "SPERQ", this.dsWALFA1.getColumn(0, "SPERQ"));
        	this.dsUpdate.setColumn(nrow, "GBORT", this.dsWALFA1.getColumn(0, "GBORT"));
        	this.dsUpdate.setColumn(nrow, "GBDAT", this.dsWALFA1.getColumn(0, "GBDAT"));
        	this.dsUpdate.setColumn(nrow, "SEXKZ", this.dsWALFA1.getColumn(0, "SEXKZ"));
        	this.dsUpdate.setColumn(nrow, "KRAUS", this.dsWALFA1.getColumn(0, "KRAUS"));
        	this.dsUpdate.setColumn(nrow, "REVDB", this.dsWALFA1.getColumn(0, "REVDB"));
        	this.dsUpdate.setColumn(nrow, "QSSYS", this.dsWALFA1.getColumn(0, "QSSYS"));
        	this.dsUpdate.setColumn(nrow, "KTOCK", this.dsWALFA1.getColumn(0, "KTOCK"));
        	this.dsUpdate.setColumn(nrow, "PFORT", this.dsWALFA1.getColumn(0, "PFORT"));
        	this.dsUpdate.setColumn(nrow, "WERKS", this.dsWALFA1.getColumn(0, "WERKS"));
        	this.dsUpdate.setColumn(nrow, "LTSNA", this.dsWALFA1.getColumn(0, "LTSNA"));
        	this.dsUpdate.setColumn(nrow, "WERKR", this.dsWALFA1.getColumn(0, "WERKR"));
        	this.dsUpdate.setColumn(nrow, "PLKAL", this.dsWALFA1.getColumn(0, "PLKAL"));
        	this.dsUpdate.setColumn(nrow, "DUEFL", this.dsWALFA1.getColumn(0, "DUEFL"));
        	this.dsUpdate.setColumn(nrow, "TXJCD", this.dsWALFA1.getColumn(0, "TXJCD"));
        	this.dsUpdate.setColumn(nrow, "SPERZ", this.dsWALFA1.getColumn(0, "SPERZ"));
        	this.dsUpdate.setColumn(nrow, "SCACD", this.dsWALFA1.getColumn(0, "SCACD"));
        	this.dsUpdate.setColumn(nrow, "SFRGR", this.dsWALFA1.getColumn(0, "SFRGR"));
        	this.dsUpdate.setColumn(nrow, "LZONE", this.dsWALFA1.getColumn(0, "LZONE"));
        	this.dsUpdate.setColumn(nrow, "XLFZA", this.dsWALFA1.getColumn(0, "XLFZA"));
        	this.dsUpdate.setColumn(nrow, "DLGRP", this.dsWALFA1.getColumn(0, "DLGRP"));
        	this.dsUpdate.setColumn(nrow, "FITYP", this.dsWALFA1.getColumn(0, "FITYP"));
        	this.dsUpdate.setColumn(nrow, "STCDT", this.dsWALFA1.getColumn(0, "STCDT"));
        	this.dsUpdate.setColumn(nrow, "REGSS", this.dsWALFA1.getColumn(0, "REGSS"));
        	this.dsUpdate.setColumn(nrow, "ACTSS", this.dsWALFA1.getColumn(0, "ACTSS"));
        	this.dsUpdate.setColumn(nrow, "STCD3", this.dsWALFA1.getColumn(0, "STCD3"));
        	this.dsUpdate.setColumn(nrow, "STCD4", this.dsWALFA1.getColumn(0, "STCD4"));
        	this.dsUpdate.setColumn(nrow, "IPISP", this.dsWALFA1.getColumn(0, "IPISP"));
        	this.dsUpdate.setColumn(nrow, "TAXBS", this.dsWALFA1.getColumn(0, "TAXBS"));
        	this.dsUpdate.setColumn(nrow, "PROFS", this.dsWALFA1.getColumn(0, "PROFS"));
        	this.dsUpdate.setColumn(nrow, "STGDL", this.dsWALFA1.getColumn(0, "STGDL"));
        	this.dsUpdate.setColumn(nrow, "EMNFR", this.dsWALFA1.getColumn(0, "EMNFR"));
        	this.dsUpdate.setColumn(nrow, "LFURL", this.dsWALFA1.getColumn(0, "LFURL"));
        	this.dsUpdate.setColumn(nrow, "J_1KFREPRE", this.dsWALFA1.getColumn(0, "J_1KFREPRE"));
        	this.dsUpdate.setColumn(nrow, "J_1KFTBUS", this.dsWALFA1.getColumn(0, "J_1KFTBUS"));
        	this.dsUpdate.setColumn(nrow, "J_1KFTIND", this.dsWALFA1.getColumn(0, "J_1KFTIND"));
        	this.dsUpdate.setColumn(nrow, "CONFS", this.dsWALFA1.getColumn(0, "CONFS"));
        	this.dsUpdate.setColumn(nrow, "UPDAT", this.dsWALFA1.getColumn(0, "UPDAT"));
        	this.dsUpdate.setColumn(nrow, "UPTIM", this.dsWALFA1.getColumn(0, "UPTIM"));
        	this.dsUpdate.setColumn(nrow, "NODEL", this.dsWALFA1.getColumn(0, "NODEL"));
        	this.dsUpdate.setColumn(nrow, "QSSYSDAT", this.dsWALFA1.getColumn(0, "QSSYSDAT"));
        	this.dsUpdate.setColumn(nrow, "PODKZB", this.dsWALFA1.getColumn(0, "PODKZB"));
        	this.dsUpdate.setColumn(nrow, "FISKU", this.dsWALFA1.getColumn(0, "FISKU"));
        	this.dsUpdate.setColumn(nrow, "STENR", this.dsWALFA1.getColumn(0, "STENR"));
        	this.dsUpdate.setColumn(nrow, "CARRIER_CONF", this.dsWALFA1.getColumn(0, "CARRIER_CONF"));
        	this.dsUpdate.setColumn(nrow, "J_SC_CAPITAL", this.dsWALFA1.getColumn(0, "J_SC_CAPITAL"));
        	this.dsUpdate.setColumn(nrow, "J_SC_CURRENCY", this.dsWALFA1.getColumn(0, "J_SC_CURRENCY"));
        	this.dsUpdate.setColumn(nrow, "ALC", this.dsWALFA1.getColumn(0, "ALC"));
        	this.dsUpdate.setColumn(nrow, "PMT_OFFICE", this.dsWALFA1.getColumn(0, "PMT_OFFICE"));
        	this.dsUpdate.setColumn(nrow, "PSOFG", this.dsWALFA1.getColumn(0, "PSOFG"));
        	this.dsUpdate.setColumn(nrow, "PSOIS", this.dsWALFA1.getColumn(0, "PSOIS"));
        	this.dsUpdate.setColumn(nrow, "PSON1", this.dsWALFA1.getColumn(0, "PSON1"));
        	this.dsUpdate.setColumn(nrow, "PSON2", this.dsWALFA1.getColumn(0, "PSON2"));
        	this.dsUpdate.setColumn(nrow, "PSON3", this.dsWALFA1.getColumn(0, "PSON3"));
        	this.dsUpdate.setColumn(nrow, "PSOVN", this.dsWALFA1.getColumn(0, "PSOVN"));
        	this.dsUpdate.setColumn(nrow, "PSOTL", this.dsWALFA1.getColumn(0, "PSOTL"));
        	this.dsUpdate.setColumn(nrow, "PSOHS", this.dsWALFA1.getColumn(0, "PSOHS"));
        	this.dsUpdate.setColumn(nrow, "PSOST", this.dsWALFA1.getColumn(0, "PSOST"));
        	this.dsUpdate.setColumn(nrow, "TRANSPORT_CHAIN", this.dsWALFA1.getColumn(0, "TRANSPORT_CHAIN"));
        	this.dsUpdate.setColumn(nrow, "STAGING_TIME", this.dsWALFA1.getColumn(0, "STAGING_TIME"));
        	this.dsUpdate.setColumn(nrow, "SCHEDULING_TYPE", this.dsWALFA1.getColumn(0, "SCHEDULING_TYPE"));
        	this.dsUpdate.setColumn(nrow, "SUBMI_RELEVANT", this.dsWALFA1.getColumn(0, "SUBMI_RELEVANT"));
        	this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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

        this.fnUPDATE = function(strId, val) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.PLIFNR = this.dsList.getColumn(this.dsList.rowposition, "LIFNR");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DQD_VENDOR_AP_UPDATE", "fnUPDATE_callback", param, 940, 550);


        // 	this._dsProcSap.clearData();
        // 	var nrow = this._dsProcSap.addRow();
        // 	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        // 	this._dsProcSap.setColumn(nrow, "SP", "ZERP_MM_0002");
        //
        // 	this.dsSap = new Dataset();
        // 	this.dsSap.addColumn("IN_BONSA_ADDRESS");
        // 	this.dsSap.addColumn("IN_BONSA_FAXNO");
        // 	this.dsSap.addColumn("IN_BONSA_POSTNO");
        // 	this.dsSap.addColumn("IN_BONSA_TELNO");
        // 	this.dsSap.addColumn("IN_CT_REP_EMAIL");
        // 	this.dsSap.addColumn("IN_CT_REP_HP");
        // 	this.dsSap.addColumn("IN_CT_REP_NAME");
        // 	this.dsSap.addColumn("IN_CT_REP_TEL");
        // 	this.dsSap.addColumn("IN_GUBUN");
        // 	this.dsSap.addColumn("IN_J_1KFREPRE");
        // 	this.dsSap.addColumn("IN_LIFNR");
        // 	this.dsSap.addColumn("IN_NAME1");
        // 	this.dsSap.addColumn("IN_REGIO");
        // 	this.dsSap.addColumn("IN_REPHP");
        // 	this.dsSap.addColumn("IN_SALEM");
        // 	this.dsSap.addColumn("IN_STCD2");
        // 	this.dsSap.addColumn("IN_TELNO");
        // 	this.dsSap.addColumn("IN_ZCELPH");
        // 	this.dsSap.addColumn("IN_ZCONO");
        // 	this.dsSap.addColumn("IN_ZMAIL");
        //
        // 	var nrow = this.dsSap.addRow();
        // 	this.dsSap.setColumn(nrow, "IN_BONSA_ADDRESS", this.dsList.getColumn(this.dsList.rowposition, "STRAS"));
        // 	this.dsSap.setColumn(nrow, "IN_BONSA_FAXNO", this.dsList.getColumn(this.dsList.rowposition, "TELFX"));
        // 	this.dsSap.setColumn(nrow, "IN_BONSA_POSTNO", this.dsList.getColumn(this.dsList.rowposition, "PSTLZ"));
        // 	this.dsSap.setColumn(nrow, "IN_BONSA_TELNO", this.dsList.getColumn(this.dsList.rowposition, "TELF1"));
        // 	this.dsSap.setColumn(nrow, "IN_CT_REP_EMAIL", "CT_REP_EMAIL");
        // 	this.dsSap.setColumn(nrow, "IN_CT_REP_HP", "CT_REP_HP");
        // 	this.dsSap.setColumn(nrow, "IN_CT_REP_NAME", "CT_REP_NAME");
        // 	this.dsSap.setColumn(nrow, "IN_CT_REP_TEL", "CT_REP_TEL");
        // 	this.dsSap.setColumn(nrow, "IN_GUBUN", "GUBUN");
        // 	this.dsSap.setColumn(nrow, "IN_J_1KFREPRE", this.dsList.getColumn(this.dsList.rowposition, "J_1KFREPRE"));
        // 	this.dsSap.setColumn(nrow, "IN_LIFNR", this.dsList.getColumn(this.dsList.rowposition, "LIFNR"));
        // 	this.dsSap.setColumn(nrow, "IN_NAME1", this.dsList.getColumn(this.dsList.rowposition, "NAME1"));
        // 	this.dsSap.setColumn(nrow, "IN_REGIO", this.dsList.getColumn(this.dsList.rowposition, "REGIO"));
        // 	this.dsSap.setColumn(nrow, "IN_REPHP", "REPHP");
        // 	this.dsSap.setColumn(nrow, "IN_SALEM", "SALEM");
        // 	this.dsSap.setColumn(nrow, "IN_STCD2", this.dsList.getColumn(this.dsList.rowposition, "STCD2"));
        // 	this.dsSap.setColumn(nrow, "IN_TELNO", "TELNO");
        // 	this.dsSap.setColumn(nrow, "IN_ZCELPH", "ZCELPH");
        // 	this.dsSap.setColumn(nrow, "IN_ZCONO", "ZCONO");
        // 	this.dsSap.setColumn(nrow, "IN_ZMAIL", "ZMAIL");
        //
        // 	// SAP 호출
        // 	var strSvcId    = "sap_update";
        // 	var strSvcType  = "sap";
        // 	var inProc		= "_dsProcSap";
        // 	var inData      = "select=dsSap";
        // 	var outData     = "dsExport=export";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnUPDATE_callback = function()
        {
        	this.FormBtns.Select.click();
        }

        this.fnALLDATA = function(strId, val) {
        	this.gfnConfirm("전체거래처 이관을 진행하시겠습니까?", "fnALLDATA_callback");
        }

        this.fnALLDATA_callback = function(strID, val)
        {
        	if(val==true)
        	{
        		this.fnSapSelect("*");
        	}
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.edtDS_SEARCH.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DQD_VENDOR_AP_SAP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
