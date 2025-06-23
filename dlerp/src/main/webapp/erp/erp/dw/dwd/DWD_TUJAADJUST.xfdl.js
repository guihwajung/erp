(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWD_TUJAADJUST");
            this.set_titletext("투자조정_불명자료처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWDPR_TUJAADJUSTTREE_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DWDPR_TUJAADJUSTDIV_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_YN_COMBO_COMMON_SELECT_01</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SELECT_01</Col></Row><Row><Col id=\"TARGET\">d_save</Col><Col id=\"SP\">DWDPR_TUJAADJUST_SAVE</Col></Row><Row><Col id=\"TARGET\">rfc_select</Col><Col id=\"SP\">DWXPR_RFCINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">rfc_save_head</Col><Col id=\"SP\">SIFPR_SITESLIPHD_SAVE</Col></Row><Row><Col id=\"TARGET\">rfc_save_item</Col><Col id=\"SP\">SIFPR_SITESLIPDT_SAVE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DWDPR_COSTTUJA_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_OPR_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BIMOK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BIMOK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_GUBUN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub1", this);
            obj._setContents("");
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


            obj = new Dataset("dsExport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_BIMOK", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기성년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_GUBUN","ctclYM_WORK:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_GUBUN","staYN_GUBUN:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsYN_GUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_BIMOK","cboYN_GUBUN:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("비목");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_BIMOK","staYN_BIMOK:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_BIMOK");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk_OPR_VIEW","cboYN_BIMOK:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("운영예산보기");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_visible("false");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0","535",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","26",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBOT_YM_WORK","0","0","95.51%","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("1");
            obj.set_text("운영예산");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","534","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBOT_YM_WORK","0","0",null,"20","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("투입내역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub1","0","staBOT_YM_WORK:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboYN_GUBUN","value","dsSearch","GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.chk_OPR_VIEW","value","dsSearch","CHK_OPR_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboYN_BIMOK","value","dsSearch","CD_BIMOK");
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
        this.registerScript("DWD_TUJAADJUST.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWD_TUJAADJUST_onload = function(obj,e)
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
           this.fnSetCombo();
           this.fnSetCombo2();


        	//운영예산 안보이기
        	this.divData.form.divDataLeft.set_visible(false);
        	this.divData.form.divDataLeft.set_enable(false);
        	this.divData.form.divDataRight.set_left(0);



           // 화면 오픈시 조회함
           //this.FormBtns.Select.click();

           	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YR_WORK))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		//this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        	}else{

        	}
        	//this.dsSearch.setColumn(0, "YM_WORK", this.gfnGetDate().substr(0,6));
        	//this.dsSearch.setColumn(0, "YM_WORK", this.gfnGetDate().substr(0,6));
        	//this.dsSearch.setColumn(0, "YM_WORK", "202010");
         	//this.divSearch.form.ctclYM_WORK.form.TextBox.setFocus();

         	this.divSearch.form.ctclYM_WORK.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
         	//this.divSearch.form.ctclYM_WORK.form.TextBox.TextBox_canchange();

        	// 그리드 서브 타이틀 셋팅
        	//this.fnMonTitle();

        	/* 정렬해제 */
        	this.dxGrid.sort = "false";

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
           // 서브 버튼 사용
        }


        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnGetCstSlip = this.gfnFormButtonAdd("btnGetCstSlip", "fnGetCstSlip");	//원가전표(SAP)가져오기
        	this.btnTujaAdj = this.gfnFormButtonAdd("btnTujaAdj", "fnTujaAdj");				//투입분할조정
        	this.btnEbgtCost = this.gfnFormButtonAdd("btnEbgtCost", "fnEbgtCost");			//예산현황
        	this.btnSlipSearch = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");	//전표조회
        	this.btnIptCncCstSlip = this.gfnFormButtonAdd("btnIptCncCstSlip", "fnIptCncCstSlip");	//원가전표(SAP)투입/취소
        	this.btnChgContCost = this.gfnFormButtonAdd("btnChgContCost", "fnChgContCost");	//계약번호 공종코드 변경
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
           this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
           this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;

           this.cboYN_GUBUN = this.divSearch.form.cboYN_GUBUN;
           this.staYN_GUBUN = this.divSearch.form.staYN_GUBUN;

           this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
           //this.dxGridSub = this.divData.form.divDataRight.form.divDataTop.form.objGridSub;
           this.dxGridSub1 = this.divData.form.divDataRight.form.divDataBottom.form.objGridSub1;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_TUJAADJUST_TREE",  "DS_COST", "GR_COST");
        	this.gfnGridInit(this.dxGridSub1, this.dsListSub1, "DW", "DWD_TUJAADJUST_GRID");

        	// var CD_HADO_idx =  this.dsListSub1.getColIndex("CD_HADO");
        	// var CD_DKCOST_idx =  this.dsListSub1.getColIndex("CD_DKCOST");

        	this.divData.form.divDataRight.form.divDataBottom.form.objGridSub1.setCellProperty("body", 1, "cssclass", "expr: YN_NOCONT == 'Y' ? '' : 'BACK_ReadOnly'");
        	this.divData.form.divDataRight.form.divDataBottom.form.objGridSub1.setCellProperty("body", 6, "cssclass", "expr: YN_PSBLE == 'Y' ? '' : 'BACK_ReadOnly'");

        	this.dxGridSub1.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.dxGrid.addEventHandler("oncelldblclick", this.fnDxGrid_oncelldblclick, this);
        	this.dxGridSub1.addEventHandler("onselectchanged", this.fnGridSub1_RowCellChanged, this);

        	// 셀 수정가능 여부
            this.dxGridSub1.EnterCell = "fnGrid_EnterCell";

            // 그리드 코드파인드 값 변경
        	this.dxGridSub1.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("CD_BIMOK", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("YM_WORK", "string");
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("GUBUN", "string");
        	this.dsSelectSub.addColumn("NO_SERIAL", "bigdecimal");

        	this.dsSelectSub1 = new Dataset();
        	this.dsSelectSub1.addColumn("YM_WORK", "string");
        	this.dsSelectSub1.addColumn("CD_SITE", "string");
        	this.dsSelectSub1.addColumn("GUBUN", "string");
        	this.dsSelectSub1.addColumn("NO_SERIAL", "bigdecimal");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("CD_DKCOST", "string");
        	this.dsSave.addColumn("DT_DATE", "string");
        	this.dsSave.addColumn("RM_DESC", "string");
        	this.dsSave.addColumn("QN_QUANTITY", "bigdecimal");
        	this.dsSave.addColumn("AM_KUMYAEK", "bigdecimal");
        	this.dsSave.addColumn("TY_SYSTEM", "string");
        	this.dsSave.addColumn("CD_SLIP", "string");
        	this.dsSave.addColumn("CD_BIMOK", "string");
        	this.dsSave.addColumn("CD_ACCOUNT", "string");
        	this.dsSave.addColumn("NO_SERIAL", "bigdecimal");
        	this.dsSave.addColumn("CD_SYSPRIMARY", "string");
        	this.dsSave.addColumn("AM_TOTAL", "bigdecimal");
        	this.dsSave.addColumn("CD_HADO", "string");
        	this.dsSave.addColumn("NO_CHA", "int");

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_YNTYPE", "string");
        	this.dsCombo.addColumn("CD_DSTYPE", "string");
        	this.dsCombo.addColumn("CD_CODE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_ALL", "string");



        	this.dsInfoSap = new Dataset();
        	this.dsInfoSap.addColumn("TY_WRK", "string");
        	this.dsInfoSap.addColumn("DS_PARAM", "string");
        	this.dsInfoSap.addColumn("DS_VALUE", "string");


        	this.dsRfcSave = new Dataset();
        	this.dsRfcSave.addColumn("TY_WRK", "string");
        	this.dsRfcSave.addColumn("ID_USER", "string");
        	this.dsRfcSave.addColumn("BUKRS", "string");
        	this.dsRfcSave.addColumn("BELNR", "string");
        	this.dsRfcSave.addColumn("GJAHR", "string");
        	this.dsRfcSave.addColumn("BLART", "string");
        	this.dsRfcSave.addColumn("BLDAT", "string");
        	this.dsRfcSave.addColumn("BUDAT", "string");
        	this.dsRfcSave.addColumn("MONAT", "string");
        	this.dsRfcSave.addColumn("CPUDT", "string");
        	this.dsRfcSave.addColumn("CPUTM", "string");
        	this.dsRfcSave.addColumn("USNAM", "string");
        	this.dsRfcSave.addColumn("XBLNR", "string");
        	this.dsRfcSave.addColumn("STBLG", "string");
        	this.dsRfcSave.addColumn("STJAH", "string");
        	this.dsRfcSave.addColumn("BKTXT", "string");
        	this.dsRfcSave.addColumn("WAERS", "string");
        	this.dsRfcSave.addColumn("BSTAT", "string");

        	this.dsRfcItemSave = new Dataset();
        	this.dsRfcItemSave.addColumn("TY_WRK", "string");
        	this.dsRfcItemSave.addColumn("ID_USER", "string");
        	this.dsRfcItemSave.addColumn("BUKRS", "string");
        	this.dsRfcItemSave.addColumn("BELNR", "string");
        	this.dsRfcItemSave.addColumn("GJAHR", "string");
        	this.dsRfcItemSave.addColumn("BUZEI", "string");
        	this.dsRfcItemSave.addColumn("AUGDT", "string");
        	this.dsRfcItemSave.addColumn("AUGCP", "string");
        	this.dsRfcItemSave.addColumn("AUGBL", "string");
        	this.dsRfcItemSave.addColumn("KOART", "string");
        	this.dsRfcItemSave.addColumn("SHKZG", "string");
        	this.dsRfcItemSave.addColumn("GSBER", "string");
        	this.dsRfcItemSave.addColumn("MWSKZ", "string");
        	this.dsRfcItemSave.addColumn("DMBTR", "bigdecimal");
        	this.dsRfcItemSave.addColumn("WRBTR", "bigdecimal");
        	this.dsRfcItemSave.addColumn("PSWBT", "bigdecimal");
        	this.dsRfcItemSave.addColumn("PSWSL", "bigdecimal");
        	this.dsRfcItemSave.addColumn("WMWST", "bigdecimal");
        	this.dsRfcItemSave.addColumn("HWBAS", "bigdecimal");
        	this.dsRfcItemSave.addColumn("FWBAS", "bigdecimal");
        	this.dsRfcItemSave.addColumn("VALUT", "string");
        	this.dsRfcItemSave.addColumn("ZUONR", "string");
        	this.dsRfcItemSave.addColumn("SGTXT", "string");
        	this.dsRfcItemSave.addColumn("KOKRS", "string");
        	this.dsRfcItemSave.addColumn("KOSTL", "string");
        	this.dsRfcItemSave.addColumn("AUFNR", "string");
        	this.dsRfcItemSave.addColumn("PERNR", "string");
        	this.dsRfcItemSave.addColumn("SAKNR", "string");
        	this.dsRfcItemSave.addColumn("HKONT", "string");
        	this.dsRfcItemSave.addColumn("KUNNR", "string");
        	this.dsRfcItemSave.addColumn("LIFNR", "string");
        	this.dsRfcItemSave.addColumn("HZUON", "string");
        	this.dsRfcItemSave.addColumn("ZFBDT", "string");
        	this.dsRfcItemSave.addColumn("ZTERM", "string");
        	this.dsRfcItemSave.addColumn("ZLSCH", "string");
        	this.dsRfcItemSave.addColumn("ZLSPR", "string");
        	this.dsRfcItemSave.addColumn("ZBFIX", "string");
        	this.dsRfcItemSave.addColumn("HBKID", "string");
        	this.dsRfcItemSave.addColumn("BVTYP", "string");
        	this.dsRfcItemSave.addColumn("PRCTR", "string");
        	this.dsRfcItemSave.addColumn("FISTL", "string");
        	this.dsRfcItemSave.addColumn("XREF1", "string");
        	this.dsRfcItemSave.addColumn("XREF2", "string");
        	this.dsRfcItemSave.addColumn("XREF3", "string");
        	this.dsRfcItemSave.addColumn("BUPLA", "string");
        	this.dsRfcItemSave.addColumn("SECCO", "string");
        	this.dsRfcItemSave.addColumn("HKTID", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("YM_WORK", "string");
        	this.dsExec.addColumn("TY_SYSTEM", "string");
        	this.dsExec.addColumn("CD_BIMOK", "string");
        	this.dsExec.addColumn("NO_DGR", "string");
        }


        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *   조회 버튼
          */
        // this.fnSelect = function() {
        // 	if (!this.fnSelectValidate()) return false;
        //
        // 	this.gfnGridBeforeSelect(this.dxGrid);
        // 	this.dsSelect.clearData();
        // 	this.dsSelect.addRow();
        //
        // 	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        //
        //    var strSvcId    = "select";
        //    var strSvcType  = "grid";
        //    var inProc      = "_dsProc";
        //    var inData      = "select=dsSelect";
        //    var outData     = "dsList=select0";
        //    var strArg      = "";
        //    var callBackFnc = "fnCallback";
        //
        //    this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
        //                   strSvcType ,    // transaction을 요청할 구분
        //                   inProc,         // Procedure 정보 Dataset 이름
        //                   inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        //                   outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        //                   strArg,          // 입력값으로 보낼 arguments, strFormData="20120607"
        //                   callBackFnc); // 통신방법 정의 [생략가능]
        //
        // 	1
        //    디테일 파마리터 데이터셋 셋팅
        //    this.dsSelectSub.clearData();
        //    var nrow =  this.dsSelectSub.addRow();
        //
        // 	this.dsSelectSub.setColumn(nrow, "YM_WORK", this.gfnAddMonth(this.dsSearch.getColumn(0, "YM_WORK")+"01", -1).substr(0,6));
        // 	this.dsSelectSub.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 	this.dsSelectSub.setColumn(nrow, "GUBUN", "");
        // 	this.dsSelectSub.setColumn(nrow, "NO_SERIAL", this.dsSearch.getColumn(0, "NO_SERIAL"));
        //
        //    var strSvcId    = "detail";
        //    var strSvcType  = "grid";
        //    var inProc      = "_dsProc";
        //    var inData      = "d_select=dsSelectSub";
        //    var outData     = "dsListSub=d_select0";
        //    var strArg      = "";
        //    var callBackFnc = "fnCallback";
        //
        //    this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
        //                   strSvcType ,    // transaction을 요청할 구분
        //                   inProc,         // Procedure 정보 Dataset 이름
        //                   inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        //                   outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        //                   strArg,          // 입력갑스로 보낼 arguments, strFormData="20120607"
        //                   callBackFnc); // 통신방법 정의 [생략가능]
        //
        // 	2
        // 	this.fnSelect2();
        // }


        this.fnSelect2 = function() {

           // 디테일 파라미터 데이터셋 셋팅
           this.dsSelectSub1.clearData();
           var nrow =  this.dsSelectSub1.addRow();

        	this.dsSelectSub1.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelectSub1.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub1.setColumn(nrow, "GUBUN", this.dsSearch.getColumn(0, "GUBUN"));
        	this.dsSelectSub1.setColumn(nrow, "NO_SERIAL", 0);

           var strSvcId    = "detail";
           var strSvcType  = "grid";
           var inProc      = "_dsProc";
           var inData      = "d_select=dsSelectSub1";
           var outData     = "dsListSub1=d_select0";
           var strArg      = "";
           var callBackFnc = "fnCallback";

           this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
                          strSvcType ,    // transaction을 요청할 구분
                          inProc,         // Procedure 정보 Dataset 이름
                          inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                          outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                          strArg,          // 입력값으로 보낼 arguments, strFormData="20120607"
                          callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnSelect = function()
        {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	/*this.gfnGridBeforeSelect(this.dxGridSub);*/
        	this.gfnGridBeforeSelect(this.dxGridSub1);
        	this.dsSelect.clearData();
        	var nrow =  this.dsSelect.addRow();

        	this.dsSelect.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));

        	this.dsSelect.setColumn(nrow, "CD_BIMOK", this.dsSearch.getColumn(0, "CD_BIMOK"));

        	var inData ="";
        	var outData ="";

        	this.dsSelectSub.clearData();
        // 	nrow =  this.dsSelectSub.addRow();
        //
        // 	this.dsSelectSub.setColumn(nrow, "YM_WORK", this.gfnAddMonth(this.dsSearch.getColumn(0, "YM_WORK")+"01", -1).substr(0,6));
        // 	this.dsSelectSub.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 	this.dsSelectSub.setColumn(nrow, "GUBUN", this.dsSearch.getColumn(0, "GUBUN"));
        // 	this.dsSelectSub.setColumn(nrow, "NO_SERIAL", 0);

        	nrow = this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelectSub.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub.setColumn(nrow, "GUBUN", this.dsSearch.getColumn(0, "GUBUN"));
        	this.dsSelectSub.setColumn(nrow, "NO_SERIAL", 0);
        	if("1" == this.dsSearch.getColumn(0, "CHK_OPR_VIEW")){
        		inData      = "select=dsSelect d_select=dsSelectSub";
        		outData     = "dsList=select0 dsListSub1=d_select0";
        	}else{
        		inData      = "d_select=dsSelectSub";
        		outData     = "dsListSub1=d_select0";
        	}



           var strSvcId    = "select";
           var strSvcType  = "grid";
           var inProc      = "_dsProc";

           var strArg      = "";
           var callBackFnc = "fnCallback";

           this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
                          strSvcType ,    // transaction을 요청할 구분
                          inProc,         // Procedure 정보 Dataset 이름
                          inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                          outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                          strArg,          // 입력값으로 보낼 arguments, strFormData="20120607"
                          callBackFnc); // 통신방법 정의 [생략가능]
        }

        //
        // this.fnSelect2 = function() {
        //
        //    // 디테일 파마리터 데이터셋 셋팅
        //    this.dsSelectSub1.clearData();
        //    var nrow =  this.dsSelectSub1.addRow();
        //
        // 	this.dsSelectSub1.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        // 	this.dsSelectSub1.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 	this.dsSelectSub1.setColumn(nrow, "GUBUN", "");
        // 	this.dsSelectSub1.setColumn(nrow, "NO_SERIAL", this.dsSearch.getColumn(0, "NO_SERIAL"));
        //
        //
        //    var strSvcId    = "detail";
        //    var strSvcType  = "grid";
        //    var inProc      = "_dsProc";
        //    var inData      = "d_select=dsSelectSub1";
        //    var outData     = "dsListSub1=d_select0";
        //    var strArg      = "";
        //    var callBackFnc = "fnCallback";
        //
        //    this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
        //                   strSvcType ,    // transaction을 요청할 구분
        //                   inProc,         // Procedure 정보 Dataset 이름
        //                   inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        //                   outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        //                   strArg,          // 입력갑스로 보낼 arguments, strFormData="20120607"
        //                   callBackFnc); // 통신방법 정의 [생략가능]
        // }

        /*
         *   입력 버튼
         */
        this.fnAdd = function() {
           //this.gfnGridAdd(this.dxGrid);
        }

        /*
         *   삭제 버튼
         */
        this.fnDel = function() {
           this.gfnGridDel(this.dxGridSub1, "YN_PSBLE");
        }


        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridSub1)) return;

        	this.dxGridSub1.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsListSub1.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub1, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsListSub1.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "CD_DKCOST", this.dsListSub1.getColumn(i, "CD_DKCOST"));
        				this.dsSave.setColumn(nrow, "DT_DATE", this.dsListSub1.getColumn(i, "DT_DATE"));
        				this.dsSave.setColumn(nrow, "RM_DESC", this.dsListSub1.getColumn(i, "RM_DESC"));
        				this.dsSave.setColumn(nrow, "QN_QUANTITY", this.dsListSub1.getColumn(i, "QN_QUANTITY"));
        				this.dsSave.setColumn(nrow, "AM_KUMYAEK", this.dsListSub1.getColumn(i, "AM_KUMYAEK"));
        				this.dsSave.setColumn(nrow, "TY_SYSTEM", this.dsListSub1.getColumn(i, "TY_SYSTEM"));
        				this.dsSave.setColumn(nrow, "CD_SLIP", this.dsListSub1.getColumn(i, "CD_SLIP"));
        				this.dsSave.setColumn(nrow, "CD_BIMOK", this.dsListSub1.getColumn(i, "CD_BIMOK"));
        				this.dsSave.setColumn(nrow, "CD_ACCOUNT", this.dsListSub1.getColumn(i, "CD_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "NO_SERIAL", this.dsListSub1.getColumn(i, "NO_SERIAL"));
        				this.dsSave.setColumn(nrow, "CD_SYSPRIMARY", this.dsListSub1.getColumn(i, "CD_SYSPRIMARY"));
        				this.dsSave.setColumn(nrow, "AM_TOTAL", this.dsListSub1.getColumn(i, "AM_TOTAL"));
        				this.dsSave.setColumn(nrow, "CD_HADO", this.dsListSub1.getColumn(i, "CD_HADO"));
        				this.dsSave.setColumn(nrow, "NO_CHA", this.dsListSub1.getColumn(i, "NO_CHA"));
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_save=dsSave";
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
         *   엑셀 버튼
         */
        this.fnExcel = function() {
           this.gfnExcelExport(this.dxGridSub1);
        }

        /*
         *   출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}else if(this.gfnIsNull(this.dsSearch.getColumn(0,"YM_WORK"))){
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기성년월을 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		/*this.gfnGridAfterSelect(this.dxGridSub);*/
        		this.gfnGridAfterSelect(this.dxGridSub1);

        		if(this.dsList.rowcount == 0)
        		{
        			//this.btnLedger.set_enable(false);
        			//this.btnDetail.set_enable(false);
        		}
        	}else if(svcID == "save") {
        		if (errorCode == 0) {
        			//this.FormBtns.Select.click();
        			this.fnSelect2();
        		}
        	}
        	else if(svcID == "detail") {
        		if (errorCode == 0) {
        			/*this.gfnGridAfterSelect(this.dxGridSub);*/
        			this.gfnGridAfterSelect(this.dxGridSub1);

        			this.gfnSetFormStatus(this, "Q");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "rfc_select") {
        		if (errorCode == 0) {
        			this.fnSap();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "sap") {
        		if(this.dsExport.rowcount > 0) {
        			if(this.dsExport.getColumn(0, "E_RTNCD") == "S") {
        				this.fnSapHeadSave();
        			}
        			else {
        				// 실패
        				this.gfnAlert(this.dsExport.getColumn(0, "E_RTNMSG"));
        				return false;
        			}
        		}
        	}
        	else if(svcID == "rfc_save_head")
        	{
        		if (errorCode == 0) {
        			if(this.dsList2.rowcount > 0) {
        				this.fnSapItemSave();
        			}
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}

        	}
        	else if(svcID == "rfc_save_item")
        	{
        		if (errorCode == 0) {
        			this.fnExecute_CostSap();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "execute") {
        		if (errorCode == 0) {
        			this.gfnAlert("원가전표(SAP)가져오기가 완료되었습니다.");
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
        // cell 클릭했을때 이벤트(해당 cell에 대한 이벤트를 건다)
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub1, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	if(colnm == "CD_HADO" || colnm == "CD_DKCOST")
        	{
        		if(this.dsListSub1.getColumn(row, "YN_NOCONT") == "Y" && colnm == "CD_HADO")
        		{
        			return true;
        		}

        		// YN_PSBLE 값이 Y일때만 수정가능 상태로 만든다
        		if(this.dsListSub1.getColumn(row, "YN_PSBLE") == "Y" && colnm == "CD_DKCOST")
        		{
        			return true;
        		}

        		return false;
        	}
        	else
        	{
        		return false;
        	}
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DWX_CFHADO_ADJUST") {
         		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_COST", this.dsListSub1.getColumn(this.dsListSub1.rowposition, "CD_COST"));
        		dsUserParam.setColumn(nrow, "TY_SYSTEM", this.dsListSub1.getColumn(this.dsListSub1.rowposition, "TY_SYSTEM"));

        	}else if (id == "DWX_CFCOST_BATSEL")
        	{
        		if(this.dsListSub1.getColumn(this.dsListSub1.rowposition, "YN_PSBLE") != "Y") return false;

        		if(this.gfnIsNull(this.dsListSub1.getColumn(this.dsListSub1.rowposition, "CD_HADO"))){
        			this.gfnAlert("계약번호를 선택후 공종코드 선택이 가능합니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "NO_HADOCONT", this.dsListSub1.getColumn(this.dsListSub1.rowposition, "CD_HADO"));
         	}else if (id == "DWX_CFHADO_JIK")
        	{
        		if(this.dsListSub1.getColumn(this.dsListSub1.rowposition, "YN_NOCONT") != "Y") return false;

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "NO_HADOCONT", this.dsListSub1.getColumn(this.dsListSub1.rowposition, "CD_HADO"));

         	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	var rowPos = this.dsListSub1.rowposition;

        	if(id == "DWX_CFHADO_JIK") {

        		if(arr.length > 0)
        		{
         			if(this.dsListSub1.getColumn(this.dsListSub1.rowposition, "YN_NOCONT") == "Y" && this.dsListSub1.getColumn(this.dsListSub1.rowposition, "YN_PSBLE") == "Y")
        			{
        				this.dsListSub1.setColumn(this.dsListSub1.rowposition,"CD_COST","");
        				this.dsListSub1.setColumn(this.dsListSub1.rowposition,"CD_DKCOST","");
        				this.dsListSub1.setColumn(this.dsListSub1.rowposition,"DS_COST","");
        			}
        		}
        	}

        	if(id == "DWX_CFCOST_BATSEL") {
        		// 기존잔여
        		var amSilengJan = (arr.length > 0) ? arr[0]["AM_SILHENG_JAN"] : 0;
        		var amKumyaek = nexacro.toNumber(this.gfnNvl(this.dsListSub1.getColumn(rowPos, "AM_KUMYAEK"), 0));
        		var amSilhengJanPlus = amSilengJan - amKumyaek;

        		// 투입후잔여 = 기존잔여 - 금액
        		this.dsListSub1.setColumn(rowPos, "AM_SILHENG_JANPLUS", amSilhengJanPlus);
        	}

        	return true;
        };

        this.fnGridSub1_RowCellChanged = function(obj,e)
        {
        	var rows = obj.getSelectedDatasetRows();
        	var sum = 0;
        	for(var i = 0; i < rows.length; i++) {
        		var am = this.dsListSub1.getColumn(rows[i], "AM_KUMYAEK");
        		if(!this.gfnIsNull(am)) {
        			sum += am;
        		}
        	}

        	var colDS_HADOCONT = this.dxGridSub1.getBindCellIndex("body", "DS_HADOCONT");
        	this.dxGridSub1.setCellProperty("summ", colDS_HADOCONT, "text", "선택합계=" + this.gfnAppendComma(sum));
        }

        this.fnDxGrid_oncelldblclick = function(obj,e)
        {
        	var cdCost = this.dsList.getColumn(e.row,"CD_COST");
        	var cdDkCost = this.dsList.getColumn(e.row,"CD_DKCOST");
        	var dsCost = this.dsList.getColumn(e.row,"DS_COST");

        	if(this.dsList.getColumn(e.row,"YN_COST") == "Y"){
        		var rows = this.dxGridSub1.getSelectedDatasetRows();

        		this.dsListSub1.set_enableevent(false);
        		var bUpdate = false;
        		for(var i = 0; i < rows.length; i++) {
        			if(this.dsListSub1.getColumn(rows[i],"YN_PSBLE") == "Y"){
        				this.dsListSub1.setColumn(rows[i], "nx_flag", "U");
        				this.dsListSub1.setColumn(rows[i],"CD_COST", cdCost);
        				this.dsListSub1.setColumn(rows[i],"CD_DKCOST", cdDkCost);
        				this.dsListSub1.setColumn(rows[i],"DS_COST", dsCost);
        				bUpdate = true;
        			}
        		}
        		this.dsListSub1.set_enableevent(true);
        		if(bUpdate) {
        			this.gfnSetFormStatus(this, "U");
        		}
        	}else{
        		this.gfnAlert("공종 : ["+cdCost+"]"+dsCost+"\n\n선택하신 공종은 최하위 항목이 아닙니다.\n최하위 항목만 선택하실 수 있습니다.");
        	}
        }

        this.fnDxGridSub_oncelldblclick = function(obj,e)
        {
        	var cdCost = this.dsListSub.getColumn(e.row,"CD_COST");
        	var cdDkCost = this.dsListSub.getColumn(e.row,"CD_DKCOST");
        	var dsCost = this.dsListSub.getColumn(e.row,"DS_COST");

        	if(this.dsListSub.getColumn(e.row,"YN_PSBLE") == "Y"){
        		var rows = this.dxGridSub1.getSelectedDatasetRows();

        		for(var i = 0; i < rows.length; i++) {
        			if(this.dsListSub1.getColumn(rows[i],"YN_PSBLE") == "Y"){
        				this.dsListSub1.setColumn(rows[i],"CD_COST", cdCost);
        				this.dsListSub1.setColumn(rows[i],"CD_DKCOST", cdDkCost);
        				this.dsListSub1.setColumn(rows[i],"DS_COST", dsCost);
        			}
        		}
        		this.dsListSub1.set_enableevent(true);
        		if(bUpdate) {
        			this.gfnSetFormStatus(this, "U");
        		}
        	}else{
        		this.gfnAlert("공종 : ["+cdCost+"]"+dsCost+"\n\n선택하신 공종은 투자조정/불명자료 처리 가능한\n공종이 아닙니다.");
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 작업구분 콤보 셋팅
        this.fnSetCombo = function() {

        	this.dsCombo.clearData();

        	var nrow = this.dsCombo.addRow();
        	this.dsCombo.setColumn(nrow, "CD_SYSTEM", "DW");
        	this.dsCombo.setColumn(nrow, "CD_YNTYPE", "90");
        	this.dsCombo.setColumn(nrow, "CD_DSTYPE", "91");
        	this.dsCombo.setColumn(nrow, "CD_CODE", "YN08");
        	this.dsCombo.setColumn(nrow, "YN_USE", "Y");
        	this.dsCombo.setColumn(nrow, "YN_ALL", "Y");


        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsYN_GUBUN=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        // 작업구분 콤보 셋팅
        this.fnSetCombo2 = function() {
        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_TYPE", "string");
        	this.dsCombo2.addColumn("YN_USE", "string");
        	this.dsCombo2.addColumn("YN_ALL", "string");

        	this.dsCombo2.addRow();
        	this.dsCombo2.setColumn(0, "CD_SYSTEM", "DW");
        	this.dsCombo2.setColumn(0, "CD_TYPE", "16");
        	this.dsCombo2.setColumn(0, "YN_USE", "Y");
        	this.dsCombo2.setColumn(0, "YN_ALL", "Y");


        	var strSvcId    = "combo2";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo2=dsCombo2";
        	var outData     = "dsCD_BIMOK=combo20";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo2";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		/*
        		this.dsNO_DGR.insertRow(0);
        		this.dsNO_DGR.setColumn(0, "CD_DGR", "");
        		this.dsNO_DGR.setColumn(0, "DS_DGR", "전체");
         		*/
        		this.divSearch.form.cboYN_GUBUN.set_index(2); //미처리전표

        	}else if(svcID == "combo2") {
        		trace("cnt : "+this.dsCD_BIMOK.getRowCount());
        	}

        };
        this.fnCallbackCombo2 = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		/*
        		this.dsNO_DGR.insertRow(0);
        		this.dsNO_DGR.setColumn(0, "CD_DGR", "");
        		this.dsNO_DGR.setColumn(0, "DS_DGR", "전체");
         		*/
        		this.divSearch.form.cboYN_GUBUN.set_index(2); //미처리전표

        	}else if(svcID == "combo2") {
        		trace("cnt : "+this.dsCD_BIMOK.getRowCount());
        		this.divSearch.form.cboYN_BIMOK.set_index(0); //비목
        	}

        };

        //원가전표(SAP)가져오기
        this.fnGetCstSlip = function(obj,e) {
        	this.fnSelectSap();
        };

        //투입분할 조정
        this.fnTujaAdj = function(obj,e) {
        	//if(!this.gfnGridIsRow(this.dxGridSub1)){return false;}
        	if(this.dsListSub1.getColumn(this.dsListSub1.rowposition,"YN_PSBLE") == "Y"){
        		var param = {};

        		param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        		param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        		param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        		param.NO_SERIAL = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "NO_SERIAL");

        		this.gfnFormOpen("DWD", "DWD_TUJAADJUSTDIVDLG", "fnTujaAdj_callback", param);
        	}else{
        		this.gfnAlert("선택하신 내역은 투자조정/불명자료 처리 불가능한 내역입니다.");
        	}
        }

        this.fnTujaAdj_callback = function(strId, val) {
        	if(val == true) {
        		this.fnSelect2();
        	}
        }



        //예산현황
        this.fnEbgtCost = function(obj,e) {

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.CD_COST = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "CD_COST");
        	param.CD_DKCOST = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "CD_DKCOST");
        	param.DS_COST = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "DS_COST");//
        	param.SZ_SIZE = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "SZ_SIZE");
        	param.DS_UNIT = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "DS_UNIT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWX_COSTTUJA", "", param);
        }


        //전표조회
        this.fnSlipSearch = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)){return false;}

        	var param = {};
        	param.NO_SLIP = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "NO_SLIP");

        	//화면ID 추후개발예정
        	this.gfnAlert("추후 진행예정입니다.");

        }

        this.fnSearchInit = function(obj,e) {
           if(e == null || (e.pretext != e.posttext)) {
              this.gfnSetFormStatus(this);
              this.gfnGridClear(this.dxGrid);
              /*this.gfnGridClear(this.dxGridSub);*/
        	  this.gfnGridClear(this.dxGridSub1);
           }
        }

        this.divData_ondragmove = function(obj,e)
        {
           if(e.userdata == "splitter") {
              this.divData.form.divSplitter.set_left(e.clientx);
              this.divData.form.resetScroll();
           }
           else if(e.userdata == "splitter2") {
        		this.divData.form.divDataRight.form.divSplitter2.set_top(e.clienty);
        		this.divData.form.divDataRight.form.resetScroll();
           }
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
           e.set_userdata("splitter");
           return true;
        };

        this.divData_divSplitter2_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter2");
        	return true;
        };


        this.dsSearch_onvaluechanged = function(obj,e)
        {
           if(e.oldvalue != e.newvalue){
        	  /*this.gfnGridClear(this.dxGrid);*/
        /*	  this.gfnGridClear(this.dxGridSub);*/
        	  this.gfnGridClear(this.dxGridSub1);

        	  /*
        	  if(e.columnid == "YM_WORK"){
        		this.fnMonTitle();
        	  }
        	  */

        	  if(e.columnid == "CHK_OPR_VIEW"){
        		this.fnChkOprView();
        	  }
           }
         }

        this.fnChkOprView = function() {
        	if(this.dsSearch.getColumn(0, "CHK_OPR_VIEW") == "0") {
        		this.divData.form.divDataLeft.set_visible(false);
        		this.divData.form.divDataLeft.set_enable(false);
        		this.divData.form.divDataRight.set_left(0);
        	}else{
        		this.divData.form.divDataLeft.set_visible(true);
        		this.divData.form.divDataLeft.set_enable(true);
        		this.divData.form.divDataRight.set_left(540);
        	}

        }
        // 그리드 서브 타이틀 셋팅
        this.fnMonTitle = function() {
        	var befMon = this.gfnAddMonth(this.dsSearch.getColumn(0, "YM_WORK").substr(0,6)+"01", -1);
        	this.divData.form.divDataRight.form.divDataTop.form.staTOP_YM_WORK.set_text("전월("+befMon.substr(0,4)+"-"+befMon.substr(4,2)+")투입내역");
        	this.divData.form.divDataRight.form.divDataBottom.form.staBOT_YM_WORK.set_text("당월("+this.dsSearch.getColumn(0, "YM_WORK").substr(0,4)+"-"+this.dsSearch.getColumn(0, "YM_WORK").substr(4,2)+")투입내역");
        }

         /*
          *	SAP 처리
          */
         this.fnSelectSap = function() {

        	this.dsInfoSap.clearData();
        	this.dsInfoSap.addRow();

        	var ds_value = [];
        	ds_value.push(this.dsSearch.getColumn(0, "CD_SITE"));
        	trace(this.dsSearch.getColumn(0, "YM_WORK"));
        	ds_value.push(this.dsSearch.getColumn(0, "YM_WORK")+"01");
        	ds_value.push(this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_WORK").substr(0,6)));

        	this.dsInfoSap.setColumn(0, "TY_WRK", "Q");
        	this.dsInfoSap.setColumn(0, "DS_PARAM", this.FormInfo.DS_PARAM);
        	this.dsInfoSap.setColumn(0, "DS_VALUE", ds_value.join(','));

        	// SAP 호출
        	var strSvcId    = "rfc_select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "rfc_select=dsInfoSap";
        	var outData     = "dsFunc=rfc_select0 dsInParam=rfc_select1 dsOutTables=rfc_select2";
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
        };

        this.fnSapHeadSave = function()
        {
        	this.dsRfcSave.clearData();

        	if(this.dsList1.rowcount == 0) return;

        	for (var i = 0; i < this.dsList1.rowcount; i++) {
        		var nrow = this.dsRfcSave.addRow();
        		this.dsRfcSave.setColumn(nrow, "TY_WRK", "I");
        		this.dsRfcSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsRfcSave.setColumn(nrow, "BUKRS", this.dsList1.getColumn(i, "BUKRS"));
        		this.dsRfcSave.setColumn(nrow, "BELNR", this.dsList1.getColumn(i, "BELNR"));
        		this.dsRfcSave.setColumn(nrow, "GJAHR", this.dsList1.getColumn(i, "GJAHR"));
        		this.dsRfcSave.setColumn(nrow, "BLART", this.dsList1.getColumn(i, "BLART"));
        		this.dsRfcSave.setColumn(nrow, "BLDAT", this.dsList1.getColumn(i, "BLDAT"));
        		this.dsRfcSave.setColumn(nrow, "BUDAT", this.dsList1.getColumn(i, "BUDAT"));
        		this.dsRfcSave.setColumn(nrow, "MONAT", this.dsList1.getColumn(i, "MONAT"));
        		this.dsRfcSave.setColumn(nrow, "CPUDT", this.dsList1.getColumn(i, "CPUDT"));
        		this.dsRfcSave.setColumn(nrow, "CPUTM", this.dsList1.getColumn(i, "CPUTM"));
        		this.dsRfcSave.setColumn(nrow, "USNAM", this.dsList1.getColumn(i, "USNAM"));
        		this.dsRfcSave.setColumn(nrow, "XBLNR", this.dsList1.getColumn(i, "XBLNR"));
        		this.dsRfcSave.setColumn(nrow, "STBLG", this.dsList1.getColumn(i, "STBLG"));
        		this.dsRfcSave.setColumn(nrow, "STJAH", this.dsList1.getColumn(i, "STJAH"));
        		this.dsRfcSave.setColumn(nrow, "BKTXT", this.dsList1.getColumn(i, "BKTXT"));
        		this.dsRfcSave.setColumn(nrow, "WAERS", this.dsList1.getColumn(i, "WAERS"));
        		this.dsRfcSave.setColumn(nrow, "BSTAT", this.dsList1.getColumn(i, "BSTAT"));
        	}

        	if (this.dsRfcSave.rowcount == 0) return;

        	var strSvcId    = "rfc_save_head";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "rfc_save_head=dsRfcSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }

        this.fnSapItemSave = function()
        {
        	this.dsRfcItemSave.clearData();

        	if(this.dsList2.rowcount == 0) return;

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var nrow = this.dsRfcItemSave.addRow();
        		this.dsRfcItemSave.setColumn(nrow, "TY_WRK", "I");
        		this.dsRfcItemSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsRfcItemSave.setColumn(nrow, "BUKRS", this.dsList2.getColumn(i, "BUKRS"));
        		this.dsRfcItemSave.setColumn(nrow, "BELNR", this.dsList2.getColumn(i, "BELNR"));
        		this.dsRfcItemSave.setColumn(nrow, "GJAHR", this.dsList2.getColumn(i, "GJAHR"));
        		this.dsRfcItemSave.setColumn(nrow, "BUZEI", this.dsList2.getColumn(i, "BUZEI"));
        		this.dsRfcItemSave.setColumn(nrow, "AUGDT", this.dsList2.getColumn(i, "AUGDT"));
        		this.dsRfcItemSave.setColumn(nrow, "AUGCP", this.dsList2.getColumn(i, "AUGCP"));
        		this.dsRfcItemSave.setColumn(nrow, "AUGBL", this.dsList2.getColumn(i, "AUGBL"));
        		this.dsRfcItemSave.setColumn(nrow, "KOART", this.dsList2.getColumn(i, "KOART"));
        		this.dsRfcItemSave.setColumn(nrow, "SHKZG", this.dsList2.getColumn(i, "SHKZG"));
        		this.dsRfcItemSave.setColumn(nrow, "GSBER", this.dsList2.getColumn(i, "GSBER"));
        		this.dsRfcItemSave.setColumn(nrow, "MWSKZ", this.dsList2.getColumn(i, "MWSKZ"));
        		this.dsRfcItemSave.setColumn(nrow, "DMBTR", this.dsList2.getColumn(i, "DMBTR"));
        		this.dsRfcItemSave.setColumn(nrow, "WRBTR", this.dsList2.getColumn(i, "WRBTR"));
        		this.dsRfcItemSave.setColumn(nrow, "PSWBT", this.dsList2.getColumn(i, "PSWBT"));
        		this.dsRfcItemSave.setColumn(nrow, "PSWSL", this.dsList2.getColumn(i, "PSWSL"));
        		this.dsRfcItemSave.setColumn(nrow, "WMWST", this.dsList2.getColumn(i, "WMWST"));
        		this.dsRfcItemSave.setColumn(nrow, "HWBAS", this.dsList2.getColumn(i, "HWBAS"));
        		this.dsRfcItemSave.setColumn(nrow, "FWBAS", this.dsList2.getColumn(i, "FWBAS"));
        		this.dsRfcItemSave.setColumn(nrow, "VALUT", this.dsList2.getColumn(i, "VALUT"));
        		this.dsRfcItemSave.setColumn(nrow, "ZUONR", this.dsList2.getColumn(i, "ZUONR"));
        		this.dsRfcItemSave.setColumn(nrow, "SGTXT", this.dsList2.getColumn(i, "SGTXT"));
        		this.dsRfcItemSave.setColumn(nrow, "KOKRS", this.dsList2.getColumn(i, "KOKRS"));
        		this.dsRfcItemSave.setColumn(nrow, "KOSTL", this.dsList2.getColumn(i, "KOSTL"));
        		this.dsRfcItemSave.setColumn(nrow, "AUFNR", this.dsList2.getColumn(i, "AUFNR"));
        		this.dsRfcItemSave.setColumn(nrow, "PERNR", this.dsList2.getColumn(i, "PERNR"));
        		this.dsRfcItemSave.setColumn(nrow, "SAKNR", this.dsList2.getColumn(i, "SAKNR"));
        		this.dsRfcItemSave.setColumn(nrow, "HKONT", this.dsList2.getColumn(i, "HKONT"));
        		this.dsRfcItemSave.setColumn(nrow, "KUNNR", this.dsList2.getColumn(i, "KUNNR"));
        		this.dsRfcItemSave.setColumn(nrow, "LIFNR", this.dsList2.getColumn(i, "LIFNR"));
        		this.dsRfcItemSave.setColumn(nrow, "HZUON", this.dsList2.getColumn(i, "HZUON"));
        		this.dsRfcItemSave.setColumn(nrow, "ZFBDT", this.dsList2.getColumn(i, "ZFBDT"));
        		this.dsRfcItemSave.setColumn(nrow, "ZTERM", this.dsList2.getColumn(i, "ZTERM"));
        		this.dsRfcItemSave.setColumn(nrow, "ZLSCH", this.dsList2.getColumn(i, "ZLSCH"));
        		this.dsRfcItemSave.setColumn(nrow, "ZLSPR", this.dsList2.getColumn(i, "ZLSPR"));
        		this.dsRfcItemSave.setColumn(nrow, "ZBFIX", this.dsList2.getColumn(i, "ZBFIX"));
        		this.dsRfcItemSave.setColumn(nrow, "HBKID", this.dsList2.getColumn(i, "HBKID"));
        		this.dsRfcItemSave.setColumn(nrow, "BVTYP", this.dsList2.getColumn(i, "BVTYP"));
        		this.dsRfcItemSave.setColumn(nrow, "PRCTR", this.dsList2.getColumn(i, "PRCTR"));
        		this.dsRfcItemSave.setColumn(nrow, "FISTL", this.dsList2.getColumn(i, "FISTL"));
        		this.dsRfcItemSave.setColumn(nrow, "XREF1", this.dsList2.getColumn(i, "XREF1"));
        		this.dsRfcItemSave.setColumn(nrow, "XREF2", this.dsList2.getColumn(i, "XREF2"));
        		this.dsRfcItemSave.setColumn(nrow, "XREF3", this.dsList2.getColumn(i, "XREF3"));
        		this.dsRfcItemSave.setColumn(nrow, "BUPLA", this.dsList2.getColumn(i, "BUPLA"));
        		this.dsRfcItemSave.setColumn(nrow, "SECCO", this.dsList2.getColumn(i, "SECCO"));
        		this.dsRfcItemSave.setColumn(nrow, "HKTID", this.dsList2.getColumn(i, "HKTID"));
        		this.dsRfcItemSave.setColumn(nrow, "BSCHL", this.dsList2.getColumn(i, "BSCHL"));
        }

        	if (this.dsRfcItemSave.rowcount == 0) return;

        	var strSvcId    = "rfc_save_item";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "rfc_save_item=dsRfcItemSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }


        this.fnExecute_CostSap = function() {

        	this.dsExec.clearData();
        	var nrow = this.dsExec.addRow();
        	this.dsExec.setColumn(nrow, "TY_WRK", "COST_GET");
        	this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExec.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsExec.setColumn(nrow, "TY_SYSTEM", "SAP");
        	this.dsExec.setColumn(nrow, "CD_BIMOK", "");
        	this.dsExec.setColumn(nrow, "NO_DGR", "01");

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExec";
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

        this.fnIptCncCstSlip = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.value;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWD_COSTTUJA_SAP", "fnIptCncCstSlip_Callback", param);
        }

        this.fnIptCncCstSlip_Callback = function(svcID, value) {
        	// 리턴값
        	if(value == true){
        		// 확인 클릭하면 재조회
        		this.FormBtns.Select.click();
        	}
        }

        //계약번호 공종코드 변경
        this.fnChgContCost = function(){
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.CD_HADO = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "CD_HADO");
        	param.DS_HADOCONT = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "DS_HADOCONT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWD_JTCONTCOSTDLG", "fnChgContCost_Callback", param, 430, 260);
        }

        this.fnChgContCost_Callback = function(svcID, val) {

        	// 리턴값
        	if(val != false){
        		var json = JSON.parse(val);
        		trace(this.dsListSub1.rowcount);
        		var rows = this.dxGridSub1.getSelectedDatasetRows();

        		this.dsListSub1.set_enableevent(false);
        		for(var i = 0; i < rows.length; i++) {
        			if(this.dsListSub1.getColumn(rows[i],"YN_PSBLE") == "Y"){
        				this.dsListSub1.setColumn(rows[i], "nx_flag", "U");
        				this.dsListSub1.setColumn(rows[i],"CD_HADO", json.CD_HADO);
        				this.dsListSub1.setColumn(rows[i],"DS_HADOCONT", json.DS_HADOCONT);
        				this.dsListSub1.setColumn(rows[i],"CD_DKCOST", json.CD_DKCOST);
        				this.dsListSub1.setColumn(rows[i],"DS_COST", json.DS_COST);
        				bUpdate = true;
        			}
        		}
        		this.dsListSub1.set_enableevent(true);
        		if(bUpdate) {
        			this.gfnSetFormStatus(this, "U");
        		}
        	}
        }

        this.dsListSub1_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){

        		switch (e.columnid) {
        			case "CD_HADO":
        				if(this.dsListSub1.getColumn(e.row, "YN_NOCONT") == "Y" && this.dsListSub1.getColumn(e.row, "YN_PSBLE") == "Y")
        				{
        					this.dsListSub1.setColumn(e.row,"CD_COST","");
        					this.dsListSub1.setColumn(e.row,"CD_DKCOST","");
        					this.dsListSub1.setColumn(e.row,"DS_COST","");
        				}
        			break;
        			case "CD_DKCOST":	// 공종코드

        				var amSilengJan = nexacro.toNumber(this.gfnNvl(this.dsListSub1.getColumn(e.row, "AM_SILHENG_JAN"), 0));
        				var amKumyaek = nexacro.toNumber(this.gfnNvl(this.dsListSub1.getColumn(e.row, "AM_KUMYAEK"), 0));

        				var amSilhengJanPlus = (amSilengJan == 0)? 0 : amSilengJan - amKumyaek;
        				// 투입후잔여 = 기존잔여 - 금액
        				this.dsListSub1.setColumn(e.row, "AM_SILHENG_JANPLUS", amSilhengJanPlus);

        			break;
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWD_TUJAADJUST_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsListSub1.addEventHandler("onvaluechanged",this.dsListSub1_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_TUJAADJUST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
