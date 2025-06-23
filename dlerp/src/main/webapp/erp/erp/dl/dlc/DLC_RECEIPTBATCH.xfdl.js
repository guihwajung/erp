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
            this.set_titletext("자동전표 코드등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLCPR_AUTORECEIPT_BATCH_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLCPR_TEMP_SUNAP_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLCPR_AUTOSUNAP_TEMP_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DLCPR_AUTOSUNAP_TEMP_DELETE</Col></Row><Row><Col id=\"TARGET\">autoSunap</Col><Col id=\"SP\">DLCPR_REAL_AUTOSUNAP_INSERT</Col></Row><Row><Col id=\"TARGET\">error</Col><Col id=\"SP\">DLCPR_REAL_AUTOSUNAP_INSERT_ERR</Col></Row><Row><Col id=\"TARGET\">saveExcel</Col><Col id=\"SP\">DLCPR_EXECL_JIROSUNAP_INSERT</Col></Row><Row><Col id=\"TARGET\">sunapImpose</Col><Col id=\"SP\">DLCPR_SUNAP_IMPOSE_APPLY</Col></Row><Row><Col id=\"TARGET\">sunapCancel</Col><Col id=\"SP\">DLCPR_LEASE_SUNAP_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CHKRECEIPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"DS_ACNTUNIT\"/><Col id=\"DT_START\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_CHKRECEIPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미수납건</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">수납건</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","sta00:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("부가년월");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_WORK","sta01:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ctclDT_WORK:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("입금기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_START","sta02:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_PERIOD_TIL","ctclDT_START:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_END","staDT_PERIOD_TIL:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoYN_CHKRECEIPT","ctclDT_END:0.0","10.0","187","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_CHKRECEIPT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_WORK.form.TextBox","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclDT_END","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.crdoYN_CHKRECEIPT","value","dsSearch","YN_CHKRECEIPT");
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
        this.registerScript("DLC_RECEIPTBATCH.xfdl", function() {
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

        	this.fileConfig = this.gfnGetFileConfig();
        	this.fileConfig.downloadUrl = "/file/downloadFile.do";

        	this.dsSearch.set_enableevent(false);
        	this.dsSearch.setColumn(0, "DT_WORK", this.gfnGetDate().substr(0, 6));
        	this.dsSearch.setColumn(0, "DT_START", this.gfnGetDate());
        	this.dsSearch.setColumn(0, "DT_END", this.gfnGetDate());
        	this.dsSearch.setColumn(0, "YN_CHKRECEIPT", "N");
        	this.dsSearch.set_enableevent(true);
        	//this.dsSearch.setColumn(0, "YM_IMPOSE",  this.gfnGetDate().substr(0,6));


        	this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        };

        this.fnSetButton = function() {

        }

        this.fnSetExtendButton = function() {
        	this.btnAutoSunap = this.gfnFormButtonAdd("AutoSunap", "fnAutoSunap");
        	this.btnSunapCancel = this.gfnFormButtonAdd("SunapCancel", "fnSunapCancel");
        	this.btnExcelData = this.gfnFormButtonAdd("ExcelData", "fnExcelData");
        	this.btnSunapImpose = this.gfnFormButtonAdd("SunapImpose", "fnSunapImpose");
        	this.btnDownLoad = this.gfnFormButtonAdd("DownLoad", "fnDownLoad");
        	this.btnAllDelete = this.gfnFormButtonAdd("AllDelete", "fnAllDelete");

        	this.btnAutoSunap.set_enable(false);
        	this.btnSunapCancel.set_enable(false);
        	this.btnExcelData.set_enable(false);

        };

        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.ctclDT_WORK = this.divSearch.form.ctclDT_WORK;
        	this.ctclDT_START = this.divSearch.form.ctclDT_START;
        	this.ctclDT_END = this.divSearch.form.ctclDT_END;
        	this.crdoYN_CHKRECEIPT = this.divSearch.form.crdoYN_CHKRECEIPT;

        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLC_RECEIPTBATCH");

        	this.gfnGridColumnColor(this.dxGrid, "", "Blue", "[YN]=='Y'", true);
        	this.gfnGridColumnColor(this.dxGrid, "", "BACK_ReadOnly", "[YN]=='Y'", true);
        	this.gfnGridColumnColor(this.dxGrid, "DT_RECEIPT", "BACK_ReadOnly", "[YN]=='N'", true);
        	this.gfnGridColumnColor(this.dxGrid, "DS_RECEIPT", "BACK_ReadOnly", "[YN]=='N'", true);
        	this.gfnGridColumnColor(this.dxGrid, "AM_RECEIPT", "BACK_ReadOnly", "[YN]=='N'", true);
        	this.gfnGridColumnColor(this.dxGrid, "AM_PAN", "BACK_ReadOnly", "[YN]=='N'", true);
        	this.gfnGridColumnColor(this.dxGrid, "NO_ACCOUNT", "BACK_ReadOnly", "[YN]=='N'", true);
        	this.gfnGridColumnColor(this.dxGrid, "CD_TRANS", "BACK_ReadOnly", "[YN]=='N'", true);
        	this.gfnGridColumnColor(this.dxGrid, "DT_TRADE", "BACK_ReadOnly", "[YN]=='N'", true);
        	this.gfnGridColumnColor(this.dxGrid, "YN_CHKRECEIPT", "BACK_ReadOnly", "[YN]=='N'", true);
        	this.gfnGridColumnColor(this.dxGrid, "DS_REMARK", "BACK_ReadOnly", "[YN]=='N'", true);
        	this.gfnGridColumnColor(this.dxGrid, "DS_ACNTUNIT", "BACK_ReadOnly", "[YN]=='N'", true);
        	this.gfnGridColumnColor(this.dxGrid, "TY_GUBUN", "BACK_ReadOnly", "[YN]=='N'", true);
        	this.gfnGridColumnColor(this.dxGrid, "NO_CHASU", "BACK_ReadOnly", "[YN]=='N'", true);

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_oncolumnchanged, this);

        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("DT_START", "string");
        	this.dsSelect.addColumn("DT_END", "string");
        	this.dsSelect.addColumn("YN_CHKRECEIPT", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("DS_ACNTUNIT", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_FLOOR", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("NO_CUSTOMER", "string");
        	this.dsInsert.addColumn("DS_CONTRACTOR", "string");
        	this.dsInsert.addColumn("DT_RECEIPT", "string");
        	this.dsInsert.addColumn("AM_RECEIPT", "bigdecimal");
        	this.dsInsert.addColumn("AM_PAN", "bigdecimal");
        	this.dsInsert.addColumn("CD_GUJA", "string");
        	this.dsInsert.addColumn("NO_ACCOUNT", "string");
        	this.dsInsert.addColumn("DS_REMITTER", "string");
        	this.dsInsert.addColumn("CD_TRADE", "string");
        	this.dsInsert.addColumn("DT_TRADE", "string");
        	this.dsInsert.addColumn("DS_REMARK", "string");
        	this.dsInsert.addColumn("YN_CHKRECEIPT", "string");
        	this.dsInsert.addColumn("AM_LEASE", "bigdecimal");
        	this.dsInsert.addColumn("AM_MANAGEMENT", "bigdecimal");
        	this.dsInsert.addColumn("AM_ELEC", "bigdecimal");
        	this.dsInsert.addColumn("AM_WATER", "bigdecimal");
        	this.dsInsert.addColumn("AM_HEAT", "bigdecimal");
        	this.dsInsert.addColumn("AM_GAS", "bigdecimal");
        	this.dsInsert.addColumn("AM_PARKING", "bigdecimal");
        	this.dsInsert.addColumn("AM_PARKING2", "bigdecimal");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_SEQ", "string");
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("DS_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("NO_CUSTOMER", "string");
        	this.dsUpdate.addColumn("DS_CONTRACTOR", "string");
        	this.dsUpdate.addColumn("DT_RECEIPT", "string");
        	this.dsUpdate.addColumn("AM_RECEIPT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PAN", "bigdecimal");
        	this.dsUpdate.addColumn("CD_GUJA", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT", "string");
        	this.dsUpdate.addColumn("DS_REMITTER", "string");
        	this.dsUpdate.addColumn("CD_TRADE", "string");
        	this.dsUpdate.addColumn("DT_TRADE", "string");
        	this.dsUpdate.addColumn("DS_REMARK", "string");
        	this.dsUpdate.addColumn("AM_LEASE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_MANAGEMENT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ELEC", "bigdecimal");
        	this.dsUpdate.addColumn("AM_WATER", "bigdecimal");
        	this.dsUpdate.addColumn("AM_HEAT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_GAS", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PARKING", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PARKING2", "bigdecimal");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_SEQ", "string");
        	this.dsDelete.addColumn("DT_RECEIPT", "string");

        	this.dsAutoSunap = new Dataset();
        	this.dsAutoSunap.addColumn("DT_RECEIPT", "string");
        	this.dsAutoSunap.addColumn("NO_SEQ", "string");
        	this.dsAutoSunap.addColumn("ID_INSERT", "string");
        	this.dsAutoSunap.addColumn("YM_RECEIPT", "string");

        	this.dsSunapCancel = new Dataset();
        	this.dsSunapCancel.addColumn("CD_ACNTUNIT", "string");
        	this.dsSunapCancel.addColumn("TY_GUBUN", "string");
        	this.dsSunapCancel.addColumn("NO_CHASU", "string");
        	this.dsSunapCancel.addColumn("NO_DONG", "string");
        	this.dsSunapCancel.addColumn("NO_FLOOR", "string");
        	this.dsSunapCancel.addColumn("NO_HO", "string");
        	this.dsSunapCancel.addColumn("YM_IMPOSE", "string");
        	this.dsSunapCancel.addColumn("DT_RECEIPT", "string");
        	this.dsSunapCancel.addColumn("ID_INSERT", "string");
        	this.dsSunapCancel.addColumn("DT_TRADE", "string");
        	this.dsSunapCancel.addColumn("TM_TRADE", "string");

        	this.dsError = new Dataset();
        	this.dsError.addColumn("DT_RECEIVED", "string");
        	this.dsError.addColumn("NO_SEQ", "string");
        	this.dsError.addColumn("DS_REMARK", "string");
        	this.dsError.addColumn("ID_UPDATE", "string");

        	this.dsInsertExcel = new Dataset();
        	this.dsInsertExcel.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsertExcel.addColumn("TY_GUBUN", "string");
        	this.dsInsertExcel.addColumn("NO_CHASU", "string");
        	this.dsInsertExcel.addColumn("DS_ACNTUNIT", "string");
        	this.dsInsertExcel.addColumn("NO_DONG", "string");
        	this.dsInsertExcel.addColumn("NO_FLOOR", "string");
        	this.dsInsertExcel.addColumn("NO_HO", "string");
        	this.dsInsertExcel.addColumn("DT_RECEIPT", "string");
        	this.dsInsertExcel.addColumn("AM_RECEIPT", "bigdecimal");
        	this.dsInsertExcel.addColumn("AM_LEASE", "bigdecimal");
        	this.dsInsertExcel.addColumn("AM_MANAGEMENT", "bigdecimal");
        	this.dsInsertExcel.addColumn("AM_ELEC", "bigdecimal");
        	this.dsInsertExcel.addColumn("AM_WATER", "bigdecimal");
        	this.dsInsertExcel.addColumn("AM_HEAT", "bigdecimal");
        	this.dsInsertExcel.addColumn("AM_GAS", "bigdecimal");
        	this.dsInsertExcel.addColumn("AM_PARKING", "bigdecimal");
        	this.dsInsertExcel.addColumn("AM_PARKING2", "bigdecimal");
        	this.dsInsertExcel.addColumn("NO_ACCOUNT", "string");
        	this.dsInsertExcel.addColumn("ID_INSERT", "string");

        	this.dsSunapImpose = new Dataset();
        	this.dsSunapImpose.addColumn("CD_ACNTUNIT", "string");
        	this.dsSunapImpose.addColumn("TY_GUBUN", "string");
        	this.dsSunapImpose.addColumn("NO_CHASU", "string");
        	this.dsSunapImpose.addColumn("YM_IMPOSE", "string");
        	this.dsSunapImpose.addColumn("NO_SEQLIST", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "DT_START", this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSelect.setColumn(0, "DT_END", this.dsSearch.getColumn(0, "DT_END"));
        	this.dsSelect.setColumn(0, "YN_CHKRECEIPT", this.dsSearch.getColumn(0, "YN_CHKRECEIPT"));

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

        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom");
        	//this.dsList.setColumn(nrow, "DT_RECEIPT", this.gfnGetDate());
        }

        this.fnDel = function() {
           this.gfnGridDel(this.dxGrid);
        }

        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	//this.dsInsertExcel.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsInsert.setColumn(nrow, "DS_ACNTUNIT", this.dsList.getColumn(i, "DS_ACNTUNIT"));
        				this.dsInsert.setColumn(nrow, "NO_DONG", this.dsList.getColumn(i, "NO_DONG"));
        				this.dsInsert.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(i, "NO_FLOOR"));
        				this.dsInsert.setColumn(nrow, "NO_HO", this.dsList.getColumn(i, "NO_HO"));
        				this.dsInsert.setColumn(nrow, "NO_CUSTOMER", this.dsList.getColumn(i, "NO_CUSTOMER"));
        				this.dsInsert.setColumn(nrow, "DS_CONTRACTOR", this.dsList.getColumn(i, "DS_CONTRACTOR"));
        				this.dsInsert.setColumn(nrow, "DT_RECEIPT", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_RECEIPT")), "-", ""));
        				this.dsInsert.setColumn(nrow, "AM_RECEIPT", this.dsList.getColumn(i, "AM_RECEIPT"));
        				this.dsInsert.setColumn(nrow, "AM_PAN", this.dsList.getColumn(i, "AM_PAN"));
        				this.dsInsert.setColumn(nrow, "CD_GUJA", this.dsList.getColumn(i, "CD_GUJA"));
        				this.dsInsert.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "DS_REMITTER", this.dsList.getColumn(i, "DS_REMITTER"));
        				this.dsInsert.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        				this.dsInsert.setColumn(nrow, "DT_TRADE", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_TRADE")), "-", ""));
        				this.dsInsert.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsInsert.setColumn(nrow, "YN_CHKRECEIPT", this.dsList.getColumn(i, "YN_CHKRECEIPT"));
        				this.dsInsert.setColumn(nrow, "AM_LEASE", this.dsList.getColumn(i, "AM_LEASE"));
        				this.dsInsert.setColumn(nrow, "AM_MANAGEMENT", this.dsList.getColumn(i, "AM_MANAGEMENT"));
        				this.dsInsert.setColumn(nrow, "AM_ELEC", this.dsList.getColumn(i, "AM_ELEC"));
        				this.dsInsert.setColumn(nrow, "AM_WATER", this.dsList.getColumn(i, "AM_WATER"));
        				this.dsInsert.setColumn(nrow, "AM_HEAT", this.dsList.getColumn(i, "AM_HEAT"));
        				this.dsInsert.setColumn(nrow, "AM_GAS", this.dsList.getColumn(i, "AM_GAS"));
        				this.dsInsert.setColumn(nrow, "AM_PARKING", this.dsList.getColumn(i, "AM_PARKING"));
        				this.dsInsert.setColumn(nrow, "AM_PARKING2", this.dsList.getColumn(i, "AM_PARKING2"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        // 				var nrow = this.dsInsertExcel.addRow();
        // 				this.dsInsertExcel.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        // 			    this.dsInsertExcel.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        // 			    this.dsInsertExcel.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        // 			    this.dsInsertExcel.setColumn(nrow, "DS_ACNTUNIT", this.dsSearch.getColumn(0, "DS_ACNTUNIT"));
        // 		    	this.dsInsertExcel.setColumn(nrow, "NO_DONG", this.dsList.getColumn(i, "NO_DONG"));
        // 		    	this.dsInsertExcel.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(i, "NO_FLOOR"));
        // 		    	this.dsInsertExcel.setColumn(nrow, "NO_HO", this.dsList.getColumn(i, "NO_HO"));
        // 		    	this.dsInsertExcel.setColumn(nrow, "DT_RECEIPT", nexacro.replaceAll(this.dsList.getColumn(i, "DT_RECEIPT"), "-", ""));
        // 		    	this.dsInsertExcel.setColumn(nrow, "AM_RECEIPT", this.dsList.getColumn(i, "AM_RECEIPT"));
        // 		    	this.dsInsertExcel.setColumn(nrow, "AM_LEASE", this.dsList.getColumn(i, "AM_LEASE"));
        // 		    	this.dsInsertExcel.setColumn(nrow, "AM_MANAGEMENT", this.dsList.getColumn(i, "AM_MANAGEMENT"));
        // 		    	this.dsInsertExcel.setColumn(nrow, "AM_ELEC", this.dsList.getColumn(i, "AM_ELEC"));
        // 		    	this.dsInsertExcel.setColumn(nrow, "AM_WATER", this.dsList.getColumn(i, "AM_WATER"));
        // 		    	this.dsInsertExcel.setColumn(nrow, "AM_HEAT", this.dsList.getColumn(i, "AM_HEAT"));
        // 		    	this.dsInsertExcel.setColumn(nrow, "AM_GAS", this.dsList.getColumn(i, "AM_GAS"));
        // 		    	this.dsInsertExcel.setColumn(nrow, "AM_PARKING", this.dsList.getColumn(i, "AM_PARKING"));
        // 		    	this.dsInsertExcel.setColumn(nrow, "AM_PARKING2", this.dsList.getColumn(i, "AM_PARKING2"));
        // 			    this.dsInsertExcel.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        // 			    this.dsInsertExcel.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);


        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsUpdate.setColumn(nrow, "DS_ACNTUNIT", this.dsList.getColumn(i, "DS_ACNTUNIT"));
        				this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsList.getColumn(i, "NO_DONG"));
        				this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(i, "NO_FLOOR"));
        				this.dsUpdate.setColumn(nrow, "NO_HO", this.dsList.getColumn(i, "NO_HO"));
        				this.dsUpdate.setColumn(nrow, "NO_CUSTOMER", this.dsList.getColumn(i, "NO_CUSTOMER"));
        				this.dsUpdate.setColumn(nrow, "DS_CONTRACTOR", this.dsList.getColumn(i, "DS_CONTRACTOR"));
        				this.dsUpdate.setColumn(nrow, "DT_RECEIPT", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_RECEIPT")), "-", ""));
        				this.dsUpdate.setColumn(nrow, "AM_RECEIPT", this.dsList.getColumn(i, "AM_RECEIPT"));
        				this.dsUpdate.setColumn(nrow, "AM_PAN", this.dsList.getColumn(i, "AM_PAN"));
        				this.dsUpdate.setColumn(nrow, "CD_GUJA", this.dsList.getColumn(i, "CD_GUJA"));
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "DS_REMITTER", this.dsList.getColumn(i, "DS_REMITTER"));
        				this.dsUpdate.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        				this.dsUpdate.setColumn(nrow, "DT_TRADE", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_TRADE")), "-", ""));
        				this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsUpdate.setColumn(nrow, "AM_LEASE", this.dsList.getColumn(i, "AM_LEASE"));
        				this.dsUpdate.setColumn(nrow, "AM_MANAGEMENT", this.dsList.getColumn(i, "AM_MANAGEMENT"));
        				this.dsUpdate.setColumn(nrow, "AM_ELEC", this.dsList.getColumn(i, "AM_ELEC"));
        				this.dsUpdate.setColumn(nrow, "AM_WATER", this.dsList.getColumn(i, "AM_WATER"));
        				this.dsUpdate.setColumn(nrow, "AM_HEAT", this.dsList.getColumn(i, "AM_HEAT"));
        				this.dsUpdate.setColumn(nrow, "AM_GAS", this.dsList.getColumn(i, "AM_GAS"));
        				this.dsUpdate.setColumn(nrow, "AM_PARKING", this.dsList.getColumn(i, "AM_PARKING"));
        				this.dsUpdate.setColumn(nrow, "AM_PARKING2", this.dsList.getColumn(i, "AM_PARKING2"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;
        		    case "D":
        			    var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsDelete.setColumn(nrow, "DT_RECEIPT", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_RECEIPT")), "-", ""));
        				break;

        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount ==0 && this.dsDelete.rowcount ==0 && this.dsInsertExcel.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	//var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete saveExcel=dsInsertExcel";
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

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드가 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_START"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_START.setFocus();
        		}
        		this.gfnAlert("입금기간 시작일이 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_END"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_END.setFocus();
        		}
        		this.gfnAlert("입금기간 종료일이 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	if (this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_START"), this.dsSearch.getColumn(0, "DT_END")) < 0) {
        		this.gfnAlert("입금기간 종료일은 시작일보다 크거나 같아야 합니다.");
        	}
        	return validate;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if (this.dsList.rowcount > 0) {
        			this.dsList.addColumn("YN", "string");

        			this.dsList.set_enableevent(false);
        			for (var i = 0; i < this.dsList.rowcount; i++) {
        				this.dsList.setColumn(i, "YN", this.dsSearch.getColumn(0, "YN_CHKRECEIPT"));
        			}
        			this.dsList.set_enableevent(true);

        			var isEnable = this.dsSearch.getColumn(0, "YN_CHKRECEIPT") == "N";
        			this.btnAutoSunap.set_enable(isEnable);
        			this.btnExcelData.set_enable(isEnable);
        			this.btnSunapCancel.set_enable(false);
        		}
        		else {
        			this.btnAutoSunap.set_enable(false);
        			this.btnExcelData.set_enable(false);

        			if (this.dsSearch.getColumn(0, "YN_CHKRECEIPT") == "N")
        				this.btnExcelData.set_enable(true);
        		}

        		if(this.dsSearch.getColumn(0, "YN_CHKRECEIPT") == "Y"){
        			this.btnSunapCancel.set_enable(true);
        			this.FormBtns.Del.set_enable(false);
        		}
        	}
        	else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "autoSunap") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.fnAutoSunapErrorCallback = function() {
        				this.fnAutoSunapError(errorMsg);
        			}
        			this.gfnAlert(errorMsg, "fnAutoSunapErrorCallback");
        		}
        	}
        	else if (svcID == "sunapCancel") { //수납취소
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.fnAutoSunapErrorCallback = function() {
        				this.fnAutoSunapError(errorMsg);
        			}
        			this.gfnAlert(errorMsg, "fnAutoSunapErrorCallback");
        		}
        	}
        	else if (svcID == "error") {
        		this.FormBtns.Select.click();
        	}

        	else if(svcID == "sunapImpose"){
        	    if (errorCode == 0)
        		{
        			this.FormBtns.Select.click();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
         /*
        	else if (svcID == "saveExcel") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	*/
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "FLAG", "A");
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_TOTALCHASU", "");
        	}

        	return true;
        };

        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id) {
        	case "DRX_CFACCOUNT_CODEFIND_BATCH":
        			dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0,"CD_ACNTUNIT"));
        			dsUserParam.setColumn(nrow, "YN_OPTION", "N");
        		break;

        	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

             var arr = codeFindData;
        	 if (id == "DRX_CFACCOUNT_CODEFIND_BATCH") {
        	    if (arr.length > 0) {
        		    this.dsList.setColumn(this.dsList.rowposition, "CD_GUJA", arr[0]["CD_GUJA"]);
        			this.dsList.setColumn(this.dsList.rowposition, "NO_ACCOUNT", arr[0]["NO_GUJA"]);


        		}
        	}
        };



        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var flg = this.gfnGetFlag(this.dsList, row);
        	if (flg != "I") {
        		if (this.dsSearch.getColumn(0, "YN_CHKRECEIPT") == "Y")
        			return;
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if (e.columnid == "YN_CHKRECEIPT") {
        			this.FormBtns.Select.click();
        		}
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e){
            if(e.oldvalue != e.newvalue){
              if(e.columnid == "AM_LEASE" || e.columnid == "AM_MANAGEMENT" || e.columnid == "AM_ELEC" || e.columnid == "AM_HEAT" || e.columnid == "AM_GAS" || e.columnid == "AM_WATER" || e.columnid == "AM_PARKING" || e.columnid == "AM_PARKING2"){
        	     this.dsList.setColumn(e.row, "AM_TOTAL", this.dsList.getColumn(e.row, "AM_LEASE") + this.dsList.getColumn(e.row, "AM_MANAGEMENT") + this.dsList.getColumn(e.row, "AM_ELEC")+this.dsList.getColumn(e.row, "AM_HEAT") + this.dsList.getColumn(e.row, "AM_GAS") + this.dsList.getColumn(e.row, "AM_WATER")+this.dsList.getColumn(e.row, "AM_PARKING") + this.dsList.getColumn(e.row, "AM_PARKING2"));
        	  }
        	  if(this.dsSearch.getColumn(0, "YN_CHKRECEIPT") == "Y") {
        		this.FormBtns.Del.set_enable(false);
        	  }
            }
        };


        this.fnAutoSunap = function() {
        	if (this.dsList.rowcount == 0) return;

        	if (this.dsList.findRow("CHK", 1) < 0){
        		this.gfnAlert("수납처리할 대상을 선택하여 주십시오!");
        		return;
        	}

        	var arrChk = [];
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			arrChk.push(i);
        		}
        	}



        	this.dsAutoSunap.clearData();
        	for (var i = 0; i < arrChk.length; i++) {
        		var r = arrChk[i];

        		var nrow = this.dsAutoSunap.addRow();
        		this.dsAutoSunap.setColumn(nrow, "DT_RECEIPT", nexacro.replaceAll(this.dsList.getColumn(r, "DT_RECEIPT"), "-", ""));
        		this.dsAutoSunap.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(r, "NO_SEQ"));
        		this.dsAutoSunap.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        		this.dsAutoSunap.setColumn(nrow, "YM_RECEIPT", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_WORK"), "-", ""));
        	}

        	if (this.dsAutoSunap.rowcount == 0) return;

        	var strSvcId    = "autoSunap";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "autoSunap=dsAutoSunap";
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

        this.fnSunapCancel = function() { //수납취소
        	if (this.dsList.rowcount == 0) return;

        	if (this.dsList.findRow("CHK", 1) < 0){
        		this.gfnAlert("수납취소처리할 대상을 선택하여 주십시오!");
        		return;
        	}

        	var arrChk = [];
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			arrChk.push(i);
        		}
        	}

        	this.dsSunapCancel.clearData();
        	for (var i = 0; i < arrChk.length; i++) {
        		var r = arrChk[i];

        		var nrow = this.dsSunapCancel.addRow();
        		this.dsSunapCancel.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        		this.dsSunapCancel.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        		this.dsSunapCancel.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(i, "NO_CHASU"));
        		this.dsSunapCancel.setColumn(nrow, "NO_DONG", this.dsList.getColumn(i, "NO_DONG"));
        		this.dsSunapCancel.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(i, "NO_FLOOR"));
        		this.dsSunapCancel.setColumn(nrow, "NO_HO", this.dsList.getColumn(i, "NO_HO"));
        		this.dsSunapCancel.setColumn(nrow, "YM_IMPOSE", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_WORK"), "-", ""));
        		this.dsSunapCancel.setColumn(nrow, "DT_RECEIPT", this.dsList.getColumn(i, "DT_RECEIPT"));
        		this.dsSunapCancel.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        		this.dsSunapCancel.setColumn(nrow, "DT_TRADE", this.dsList.getColumn(i, "DT_TRADE"));
        		this.dsSunapCancel.setColumn(nrow, "TM_TRADE", this.dsList.getColumn(i, "TM_TRADE"));
        	}

        	if (this.dsSunapCancel.rowcount == 0) return;

        	var strSvcId    = "sunapCancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "sunapCancel=dsSunapCancel";
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

        this.fnAutoSunapError = function(strMsg) {
        	this.dsError.clearData();
        	this.dsError.addRow();
        	this.dsError.setColumn(0, "DT_RECEIVED", nexacro.replaceAll(this.dsList.getColumn(i, "DT_RECEIPT"), "-", ""));
        	this.dsError.setColumn(0, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        	this.dsError.setColumn(0, "DS_REMARK", strMsg);
        	this.dsError.setColumn(0, "ID_UPDATE", this.AuthClient.ID_USER);

        	var strSvcId    = "error";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "error=dsError";
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

        this.fnExcelData = function() {
        	//return;	//엑셀양식이 없어서 처리못함.

        	// this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	// sheet명 없으면 첫번째 sheet
        	this.gfnExcelImport("dsList","sheet1","A2","fnExcelImportCallback","import",this);
        };

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        // 	if (dsSheet.rowcount > 1) {
        // 		trace(dsSheet.getColumn(1, "sheetname"));
        // 	}

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);

        	this.dsList.set_enableevent(false);
        	for (var i=0; i<dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		// 양식이 일치하는 경우 copyRow
        		this.dsList.copyRow(nrow, dsOut, i);

        		// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
         // 		this.dsList.setColumn(nrow, "CHK", 0);
         // 		this.dsList.setColumn(nrow, "NO_SEQ", dsOut.getColumn(i, "NO_SEQ"));

        	}
        	this.dsList.set_enableevent(true);

        	this.gfnSetFormStatus(this, "I");

        	//this.fnSave();
        	this.fnSaveExcel();
        };
        this.fnSunapImpose = function(obj,e) {
        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("부과내용적용 하실 대상을 선택하시기 바랍니다.");
        		return false;
        	}

        	var chkCnt = 0;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			chkCnt = chkCnt + 1;
        		}
        	}

        	var msg = "부과내용을 적용하시겠습니까?";

        	this.gfnConfirm(msg, "fnSunapImpose_callback");
        }

        this.fnSunapImpose_callback = function(strId, val) {
        	if(val == true)
        	{
        	  var seqs ="";
        	     for(var i=0;i < this.dsList.rowcount;i++){
        		  if(this.dsList.getColumn(i, "CHK") == "1"){
        			if(seqs != ""){
        				seqs += ",";
        			}
        			seqs += this.dsList.getColumn(i, "NO_SEQ");
        		}
        	}
        	this.dsSunapImpose.clearData();

        	var nrow = this.dsSunapImpose.addRow();

        	this.dsSunapImpose.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSunapImpose.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSunapImpose.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSunapImpose.setColumn(nrow, "YM_IMPOSE", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_WORK"), "-", ""));
        	this.dsSunapImpose.setColumn(nrow, "NO_SEQLIST", seqs);

        	if (this.dsSunapImpose.rowcount == 0) return;

        	var strSvcId    = "sunapImpose";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "sunapImpose=dsSunapImpose";
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




        this.fnSaveExcel = function() {

        	this.dxGrid.updateToDataset();

        	this.dsInsertExcel.clearData();



        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			var nrow = this.dsInsertExcel.addRow();
        			this.dsInsertExcel.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        			this.dsInsertExcel.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        			this.dsInsertExcel.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        			this.dsInsertExcel.setColumn(nrow, "DS_ACNTUNIT", this.dsSearch.getColumn(0, "DS_ACNTUNIT"));
        			this.dsInsertExcel.setColumn(nrow, "NO_DONG", this.dsList.getColumn(i, "NO_DONG"));
        			this.dsInsertExcel.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(i, "NO_FLOOR"));
        			this.dsInsertExcel.setColumn(nrow, "NO_HO", this.dsList.getColumn(i, "NO_HO"));
        			this.dsInsertExcel.setColumn(nrow, "DT_RECEIPT", nexacro.replaceAll(this.dsList.getColumn(i, "DT_RECEIPT"), "-", ""));
        			this.dsInsertExcel.setColumn(nrow, "AM_RECEIPT", this.dsList.getColumn(i, "AM_RECEIPT"));
        			this.dsInsertExcel.setColumn(nrow, "AM_LEASE", this.dsList.getColumn(i, "AM_LEASE"));
        			this.dsInsertExcel.setColumn(nrow, "AM_MANAGEMENT", this.dsList.getColumn(i, "AM_MANAGEMENT"));
        			this.dsInsertExcel.setColumn(nrow, "AM_ELEC", this.dsList.getColumn(i, "AM_ELEC"));
        			this.dsInsertExcel.setColumn(nrow, "AM_WATER", this.dsList.getColumn(i, "AM_WATER"));
        			this.dsInsertExcel.setColumn(nrow, "AM_HEAT", this.dsList.getColumn(i, "AM_HEAT"));
        			this.dsInsertExcel.setColumn(nrow, "AM_GAS", this.dsList.getColumn(i, "AM_GAS"));
        			this.dsInsertExcel.setColumn(nrow, "AM_PARKING", this.dsList.getColumn(i, "AM_PARKING"));
        			this.dsInsertExcel.setColumn(nrow, "AM_PARKING2", this.dsList.getColumn(i, "AM_PARKING2"));
        			this.dsInsertExcel.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        			this.dsInsertExcel.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        			break;
        		}
        	}

        	if (this.dsInsertExcel.rowcount == 0) return;

        	var strSvcId    = "saveExcel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveExcel=dsInsertExcel";
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

        this.fnDownload = function() {
        	var sFilename = "자동수납양식.xls";
        	var encodeFileName = encodeURIComponent(sFilename);

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;
        	this.FileDownTransfer00.set_url(surl);
        	this.FileDownTransfer00.setPostData("path", "DL\DLC");
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	if (system.navigatorname =="nexacro"){
        		this.FileDownTransfer00.set_downloadfilename(sFilename);
        	}
        	this.FileDownTransfer00.download();
        };

        this.fnAllDelete = function() {
        	if (this.dsList.rowcount == 0) return;

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		this.dsList.setColumn(i, this.ucFlag, "D");
        	}
        	this.gfnSetFormStatus(this, "D");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLC_RECEIPTBATCH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
