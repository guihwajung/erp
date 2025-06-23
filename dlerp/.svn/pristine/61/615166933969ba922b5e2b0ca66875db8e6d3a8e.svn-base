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
            this.set_titletext("기성청구내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWBPR_HDGISUNGDOWN_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWBPR_HDGISUNG_SAVE</Col></Row><Row><Col id=\"TARGET\">selectno</Col><Col id=\"SP\">DWBPR_HDGISUNGMONTH_MAX_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DWBPR_HDLEDGER_EXECUTE</Col></Row><Row><Col id=\"TARGET\">exec_gisung</Col><Col id=\"SP\">DWBPR_HDGISUNG_EXECUTE</Col></Row><Row><Col id=\"TARGET\">selectcopy</Col><Col id=\"SP\">DWBPR_HDGISUNG_VNDR_COPY_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DGR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNodgr", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChangeColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"HADOGS_VNDR\" type=\"STRING\" size=\"256\"/><Column id=\"HADOGS_PMIS\" type=\"STRING\" size=\"256\"/><Column id=\"HADOGS_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"HADOGS_PRETOT\" type=\"STRING\" size=\"256\"/><Column id=\"HADOGS_GISUNGTOT\" type=\"STRING\" size=\"256\"/><Column id=\"HADOGS_REMGISUNG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"HADOGS_VNDR\">QN_HADOGS_VNDR|AM_HADOGS_VNDR</Col><Col id=\"HADOGS_PMIS\">QN_HADOGS_PMIS|AM_HADOGS_PMIS</Col><Col id=\"HADOGS_HADO\">QN_TT_HADO|UP_TT_HADO|AM_TT_HADO|QN_TT_SILHENG|UP_TT_SILHENG|AM_TT_SILHENG</Col><Col id=\"HADOGS_PRETOT\">PRE_QN_TTHADOGS|PRE_AM_TTHADOGS|PRE_RT_TTHADOGS|PRE_QN_TTSILHENGGS|PRE_AM_TTSILHENGGS</Col><Col id=\"HADOGS_GISUNGTOT\">QN_TTHADOGS|AM_TTHADOGS|RT_TTHADOGS|QN_TTSILHENGGS|AM_TTSILHENGGS|RT_TTSILHENGGS</Col><Col id=\"HADOGS_REMGISUNG\">J_RT_TTHADOGS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_B2B", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_B2B\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatus", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cchkHADOGS_VNDR","0.0","10.0","89","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("협력사청구");
            obj.set_value("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkHADOGS_CONTAMT","0.0","cchkHADOGS_VNDR:10.0","89","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("계약금액");
            obj.set_value("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkHADOGS_PRETOT","cchkHADOGS_CONTAMT:0.0","cchkHADOGS_VNDR:10.0","89","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("전회누계");
            obj.set_value("false");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkHADOGS_GISUNGTOT","cchkHADOGS_PRETOT:0.0","cchkHADOGS_VNDR:10.0","89","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("누계기성");
            obj.set_value("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkHADOGS_REMGISUNG","cchkHADOGS_GISUNGTOT:0.0","cchkHADOGS_VNDR:10.0","89","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("잔여기성");
            obj.set_value("false");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cb_Nodgr","ccfCD_SITE:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsNodgr");
            obj.set_datacolumn("DS_DGR");
            obj.set_codecolumn("NO_DGR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","cb_Nodgr:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("기성년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_HADOCONT","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_HADOCONT","staNO_HADOCONT:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFHADO_01");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfNO_HADOCONT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("업체코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFHADOVENDOR_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkHADOGS_PMIS",null,"10.0","55","24.0","-76",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("PMIS");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_VENDOR_SAP",null,"10.0","30","24.0","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_STATUS1","0.0","cchkHADOGS_VNDR:10.0","69","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_STATUS","ctxtDS_STATUS1:0.0","cchkHADOGS_VNDR:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("상태");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_STATUS2","staDS_STATUS:0.0","cchkHADOGS_VNDR:10.0","69","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_STATUS3","ctxtDS_STATUS2:0.0","cchkHADOGS_VNDR:10.0","69","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staPRGSSTATS","ctxtDS_STATUS3:0.0","cchkHADOGS_VNDR:10.0",null,null,"0","-26",null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_textDecoration("none");
            obj.set_background("");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_usedecorate("true");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctxtDS_STATUS2:0.0","cchkHADOGS_VNDR:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("[청구요청건]만 협력업체가 기성청구 가능하며 현장에서 기성작업 가능, 기성누계 수량 입력(식공종은 금액)");
            obj.set_color("red");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkTY_CONTS","sta00:0.0","cchkHADOGS_VNDR:10.0","136","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("전체잔여(공동수급사)");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_HADOCONT.form.CDTextBox","value","dsSearch","NO_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cb_Nodgr","value","dsSearch","NO_DGR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
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
        this.registerScript("DWB_HDGISUNGMONTH_DETAIL.xfdl", function() {
        this.YN_B2B = "";

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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE)
        		&& !this.gfnIsNull(this.getOwnerFrame().YM_WORK)
        		&& !this.gfnIsNull(this.getOwnerFrame().NO_HADOCONT)
        		&& !this.gfnIsNull(this.getOwnerFrame().NO_DGR)
        		&& !this.gfnIsNull(this.getOwnerFrame().CD_VENDOR)
        // 		&& !this.gfnIsNull(this.getOwnerFrame().DS_STATUS1)
        // 		&& !this.gfnIsNull(this.getOwnerFrame().DS_STATUS2)
        // 		&& !this.gfnIsNull(this.getOwnerFrame().DS_STATUS3)
        	)
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "NO_HADOCONT", this.getOwnerFrame().NO_HADOCONT);
        		this.divSearch.form.ccfNO_HADOCONT.form.DSTextBox.set_value(this.getOwnerFrame().DS_HADOCONT);

        		//this.divSearch.form.ccfNO_HADOCONT.form.fnCodeFindLoad();

        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        		this.dsSearch.setColumn(0, "NO_DGR", this.getOwnerFrame().NO_DGR);

        		this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        		this.ccfCD_VENDOR.form.DSTextBox.set_value(this.getOwnerFrame().DS_VENDOR);
        		this.divSearch.form.chkTY_CONTS.set_value(this.getOwnerFrame().TY_CONTS);

        		this.FormBtns.Select.click();
        	}else{
        		var dt = new Date();
        		this.dsSearch.setColumn(0, "YM_WORK", dt.getFullYear().toString()+this.inZero((dt.getMonth() + 1),2));

        		this.fnNodgrInit();
        	}

        	// 기성차수 조회조건 보이기/숨기기
        	this.YN_DGR = this.gfnGetConfig("DW" , "YN_DGR");
        	if(this.YN_DGR != "Y")
        	{
        		this.divSearch.form.cb_Nodgr.set_readonly(true);
        		this.divSearch.form.cb_Nodgr.set_width(0);
        		this.divSearch.form.resetScroll();
        	}
        	else if(this.YN_DGR == "Y")
        	{
        		this.divSearch.form.cb_Nodgr.set_width(100);
        		this.divSearch.form.cb_Nodgr.set_readonly(false);
        		this.divSearch.form.resetScroll();
        	}

        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);

        	//this.divSearch_cchkHADOGS_VNDR_onchanged(this.divSearch.form.cchkHADOGS_VNDR, {postvalue:this.divSearch.form.cchkHADOGS_VNDR.value});
        	//this.divSearch_cchkHADOGS_PMIS_onchanged(this.divSearch.form.cchkHADOGS_PMIS, {postvalue:this.divSearch.form.cchkHADOGS_PMIS.value});

        	//this.divSearch_cchkHADOGS_CONTAMT_onchanged(this.divSearch.form.cchkHADOGS_CONTAMT, {postvalue:this.divSearch.form.cchkHADOGS_CONTAMT.value});
        	//this.divSearch_cchkHADOGS_PRETOT_onchanged(this.divSearch.form.cchkHADOGS_PRETOT, {postvalue:this.divSearch.form.cchkHADOGS_PRETOT.value});
        	//this.divSearch_cchkHADOGS_GISUNGTOT_onchanged(this.divSearch.form.cchkHADOGS_GISUNGTOT, {postvalue:this.divSearch.form.cchkHADOGS_GISUNGTOT.value});
        	//this.divSearch_cchkHADOGS_REMGISUNG_onchanged(this.divSearch.form.cchkHADOGS_REMGISUNG, {postvalue:this.divSearch.form.cchkHADOGS_REMGISUNG.value});
        	this.divSearch_chkTY_CONTS_onchanged(this.divSearch.form.chkTY_CONTS, {postvalue:this.divSearch.form.chkTY_CONTS.value});
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
        	this.btnCopyVndr = this.gfnFormButtonAdd("btnCopyVndr", "fnSelectCopy");
        	//this.btnCopyVndr = this.gfnFormButtonAdd("btnCopyVndr", "fnCopyVndr");
        	this.btnCopyPmis = this.gfnFormButtonAdd("btnCopyPmis", "fnCopyPmis");
        	this.btnCostTuja = this.gfnFormButtonAdd("btnCostTuja", "fnCostTuja");
        	this.btnReqB2b   = this.gfnFormButtonAdd("btnReqB2b", "fnReqB2b");
        	this.btnAtchB2b  = this.gfnFormButtonAdd("btnAtchB2b", "fnAtchB2b");
        	this.btnCncB2b   = this.gfnFormButtonAdd("btnCncB2b", "fnCncB2b");
        	this.btnDeleteAll   = this.gfnFormButtonAdd("btnDeleteAll", "fnDeleteAll");
        	this.btnAttachFileSite   = this.gfnFormButtonAdd("btnAttachFileSite", "fnAttachFileSite");
        	this.btnAttachFileVndr   = this.gfnFormButtonAdd("btnAttachFileVndr", "fnAttachFileVndr");
        	this.btnRstorDlg   = this.gfnFormButtonAdd("btnRstorDlg", "fnRstorDlg");
        	this.btnChgRsnDlg   = this.gfnFormButtonAdd("btnChgRsnDlg", "fnChgRsnDlg");
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_HADOCONT = this.divSearch.form.ccfNO_HADOCONT;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.chkTY_CONTS = this.divSearch.form.chkTY_CONTS;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.AfterCDTextChanged = "ccfCD_SITE_AfterCDTextChanged";
        	this.ccfNO_HADOCONT.AfterCDTextChanged = "ccfNO_HADOCONT_AfterCDTextChanged";
        	this.ccfNO_HADOCONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_HDGISUNGMONTH_DETAIL", "DS_COST", "GR_COST");

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	this.dxGrid.addEventHandler("onselectchanged", this.dxGrid_RowCellChanged, this);

        	// 그리드정렬 사용 안함
        	this.dxGrid.sort = "false";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_HADOCONT", "string");
        	this.dsSelect.addColumn("NO_DGR", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("NO_DGR", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("QN_DOKUBGS", "bigdecimal");
        	this.dsSave.addColumn("QN_SILHENGGS", "bigdecimal");
        	this.dsSave.addColumn("QN_HADOGS", "bigdecimal");
        	this.dsSave.addColumn("AM_DOKUBGS", "bigdecimal");
        	this.dsSave.addColumn("AM_SILHENGGS", "bigdecimal");
        	this.dsSave.addColumn("AM_HADOGS", "bigdecimal");
        	this.dsSave.addColumn("CD_VENDOR", "string");

        	this.dsCopy = new Dataset();
        	this.dsCopy.addColumn("YM_WORK", "string");
        	this.dsCopy.addColumn("CD_SITE", "string");
        	this.dsCopy.addColumn("NO_HADOCONT", "string");
        	this.dsCopy.addColumn("NO_DGR", "string");

        	this.dsSelNodgr = new Dataset();
        	this.dsSelNodgr.addColumn("CD_SITE", "string");
        	this.dsSelNodgr.addColumn("YM_WORK", "string");
        	this.dsSelNodgr.addColumn("DS_CONTMETHOD", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("NO_HADOCONT", "string");
        	this.dsExec.addColumn("YM_WORK", "string");
        	this.dsExec.addColumn("NO_DGR", "string");
        	this.dsExec.addColumn("CD_VENDOR", "string");

        	this.dsExecGisung = new Dataset();
        	this.dsExecGisung.addColumn("TY_WRK", "string");
        	this.dsExecGisung.addColumn("ID_USER", "string");
        	this.dsExecGisung.addColumn("CD_SITE", "string");
        	this.dsExecGisung.addColumn("YM_WORK", "string");
        	this.dsExecGisung.addColumn("NO_DGR", "string");
        	this.dsExecGisung.addColumn("NO_HADOCONT", "string");
        	this.dsExecGisung.addColumn("CD_VENDOR", "string");

        	this.dsDeleteAll = new Dataset();
        	this.dsDeleteAll.addColumn("TY_WRK", "string");
        	this.dsDeleteAll.addColumn("ID_USER", "string");
        	this.dsDeleteAll.addColumn("CD_SITE", "string");
        	this.dsDeleteAll.addColumn("YM_WORK", "string");
        	this.dsDeleteAll.addColumn("NO_DGR", "string");
        	this.dsDeleteAll.addColumn("NO_HADOCONT", "string");
        	this.dsDeleteAll.addColumn("CD_VENDOR", "string");

        }

        this.dsList_onload = function(obj,e)
        {
        	//24 : 수량 , 25 : 금액
        // 	this.divData.form.objGrid.setCellProperty("body", 24, "edittype", "expr:DS_UNIT=='식' || DS_UNIT=='LS' || DS_UNIT=='L/S'?'none':'text'");
        // 	this.divData.form.objGrid.setCellProperty("body", 25, "edittype", "expr:DS_UNIT=='식' || DS_UNIT=='LS' || DS_UNIT=='L/S'?'text':'none'");

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

        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	this.dsSelect.setColumn(0, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsYN_B2B=select1 dsStatus=select2";
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

        this.fnSelectCopy = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsCopy.clearData();
        	this.dsCopy.addRow();

        	this.dsCopy.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsCopy.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCopy.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	this.dsCopy.setColumn(0, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));

        	var strSvcId    = "selectcopy";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectcopy=dsCopy";
        	var outData     = "dsList=selectcopy0 dsYN_B2B=selectcopy1 dsStatus=selectcopy2";
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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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
        	var flag = true;

        	if(this.gfnIsNull(this.dsStatus.getColumn(0,"DS_APPROVAL"))){
        		this.gfnAlert("기성청구 요청한 건만 저장 할수 있습니다.", "fnValidateCallback");
        		return;
        	}

        	this.fnExec();

        	/*
        	if(this.gfnIsNull(this.dsStatus.getColumn(0,"CHG_RSN"))){
        		this.dsList.set_enableevent(false);
        		for(var i = 0; i < this.dsList.rowcount; i++) {
        			var am_hadogs_vendorn = this.dsList.getColumn(i,"AM_HADOGS_VNDR").toString().trim();
        			var am_hadogs = this.dsList.getColumn(i,"AM_HADOGS").toString().trim();
        			var yn_cost = this.dsList.getColumn(i,"YN_COST").toString().trim();

        			if(yn_cost == "Y" && am_hadogs_vendorn != am_hadogs){
        				flag = false;
        				this.fnChgRsnDlg();
        				break;
        			}
        		}
        		this.dsList.set_enableevent(true);
        		if(flag){
        			//저장실행
        			this.fnExec();
        		}

        // 		var sum_am_hadogs_vendorn = this.dsList.getSum("AM_HADOGS_VNDR").toString().trim();
        // 		var sum_am_hadogs = this.dsList.getSum("AM_HADOGS").toString().trim();
        //
        // 		if(sum_am_hadogs_vendorn != sum_am_hadogs){
        // 			//확정사유팝업 호출
        // 			this.fnChgRsnDlg();
        // 		}else{
        // 			//저장실행
        // 			this.fnExec();
        // 		}
        	}else{
        		//저장실행
        		this.fnExec();
        	}
        	*/

        }


        this.fnExec = function() {
        	this.dxGrid.updateToDataset();

        	// save SP 한개로 사용하는 경우
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsSave.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "QN_DOKUBGS", this.dsList.getColumn(i, "QN_DOKUBGS"));
        				this.dsSave.setColumn(nrow, "QN_SILHENGGS", this.dsList.getColumn(i, "QN_SILHENGGS"));
        				this.dsSave.setColumn(nrow, "QN_HADOGS", this.dsList.getColumn(i, "QN_HADOGS"));
        				this.dsSave.setColumn(nrow, "AM_DOKUBGS", this.dsList.getColumn(i, "AM_DOKUBGS"));
        				this.dsSave.setColumn(nrow, "AM_SILHENGGS", this.dsList.getColumn(i, "AM_SILHENGGS"));
        				this.dsSave.setColumn(nrow, "AM_HADOGS", this.dsList.getColumn(i, "AM_HADOGS"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	// 트랜잭션 처리를 위해 DWBPR_HDGISUNG_EXECUTE 같이 보낸다.
        	this.dsExecGisung.clearData();
        	var nrow = this.dsExecGisung.addRow();

        	this.dsExecGisung.setColumn(nrow, "TY_WRK", "CALC");
        	this.dsExecGisung.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExecGisung.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExecGisung.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsExecGisung.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        	this.dsExecGisung.setColumn(nrow, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	this.dsExecGisung.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave exec_gisung=dsExecGisung";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg,			// 입력값으로 보낼 arguments, strFormData="20120607"
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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnValidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnValidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HADOCONT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnValidateCallback = function() {
        			this.ccfNO_HADOCONT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("하도계약번호를 입력하세요.", "fnValidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnValidateCallback = function() {
        			this.ccfCD_VENDOR.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("업체코드를 입력하세요.", "fnValidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnValidateCallback = function() {
        			this.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기성년월를 입력하세요.", "fnValidateCallback");
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

        		// 닷넷 화면에 입력/삭제 버튼 미존재.
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);

        		this.YN_B2B = this.dsYN_B2B.getColumn(0, "YN_B2B");
        		this.divSearch.form.ctxtDS_STATUS1.set_value(this.dsStatus.getColumn(0,"DS_APPROVAL"));
        		this.divSearch.form.ctxtDS_STATUS2.set_value(this.dsStatus.getColumn(0,"DS_PERMIT"));
        		this.divSearch.form.ctxtDS_STATUS3.set_value(this.dsStatus.getColumn(0,"DS_PERMITPM"));

        		//if(""){
        			var msg = this.dsStatus.getColumn(0,"CHG_RSN");
        			//alert(msg);
        			//this.divData.form.divData01.form.staPRGSSTATS00.set_text(msg);

        		//}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnAfterExecute();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "selnodgr"){
        		if(this.gfnIsNull(this.getOwnerFrame().NO_DGR)){
        			this.divSearch.form.cb_Nodgr.set_index(0);
        		}

        	}
        	else if(svcID == "exec"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec_ReqB2B"){
        		if (errorCode == 0) {
        			this.fnExecReqB2B_callback();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "deleteAll") {
        		if (errorCode == 0) {
        			this.fndeleteAllCallback = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("기성내역일괄삭제가 정상 처리되었습니다.", "fndeleteAllCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	if (svcID == "selectcopy") {
        		this.FormBtns.Save.set_enable(true);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfNO_HADOCONT") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 먼저 입력하십시오.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        		dsUserParam.setColumn(nrow, "TY_DIV", "DWB01");
        		if(!this.gfnIsNull(this.getOwnerFrame().DS_CONTMETHOD)){
        			dsUserParam.setColumn(nrow, "DS_CONTMETHOD", this.getOwnerFrame().DS_CONTMETHOD);
        		}else{
        			dsUserParam.setColumn(nrow, "DS_CONTMETHOD", "");
        		}
        		dsUserParam.setColumn(nrow, "CD_VENDOR", "");
        	}
        	else if(id == "ccfCD_VENDOR") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 먼저 입력하십시오.");
        			return false;
        		}
        		else if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK")))
        		{
        			this.gfnAlert("기성년월을 먼저 입력하십시오.");
        			return false;
        		}
        		else if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HADOCONT")))
        		{
        			this.gfnAlert("계약번호를 먼저 입력하십시오.");
        			return false;
        		}


        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        		dsUserParam.setColumn(nrow, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	}
        	return true;
        }

        this.ccfCD_SITE_AfterCDTextChanged = function(id, codeFindData) {

        	this.dsSearch.setColumn(0, "NO_HADOCONT", "");
        	this.divSearch.form.ccfNO_HADOCONT.form.DSTextBox.set_value("");
        	this.divSearch.form.ctxtCD_VENDOR_SAP.set_value("");

        	this.fnSearchInit();
        }

        this.ccfNO_HADOCONT_AfterCDTextChanged = function(id, codeFindData) {

        	var arr = this.ccfNO_HADOCONT.form.SelectedData;

        	if(arr.length > 0)
        	{
        		this.divSearch.form.ctxtCD_VENDOR_SAP.set_value(arr[0]["CD_VENDOR_SAP"]);
        		this.dsSearch.setColumn(0, "CD_VENDOR", arr[0]["CD_VENDOR"]);
        		this.ccfCD_VENDOR.form.DSTextBox.set_value(arr[0]["DS_VENDOR"]);
        	}
        	else
        	{
        		this.divSearch.form.ctxtCD_VENDOR_SAP.set_value("");
        		this.dsSearch.setColumn(0, "CD_VENDOR", "");
        		this.ccfCD_VENDOR.form.DSTextBox.set_value("");
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

         /*this.fnGrid_EnterCell = function(obj:nexacro.Grid, row, cell){
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);
        	if(colnm == "QN_HADOGS"){
        		if(this.dsList.getColumn(row, "DS_UNIT")=='식'){
        			return false;
        		}
        		if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        			if(this.dsList.getColumn(row, "YN_EDIT") == "Y"){
        				return true;
        			}
        		}
        	}else if(colnm == "AM_HADOGS"){
        		//if(this.dsList.getColumn(row, "YN_EDIT") == "Y"){
        		if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        			return false;
        		}else{
        			return true;
        		}
        	}else if(colnm == "QN_DOKUBGS"){
        		if(this.dsList.getColumn(row, "DS_UNIT")=='식'){
        			return false;
        		}
        		if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        			if(this.dsList.getColumn(row, "YN_EDIT") == "Y"){
        				return true;
        			}
        		}
        	}else if(colnm == "AM_DOKUBGS"){
        		//if(this.dsList.getColumn(row, "YN_EDIT") == "Y"){
        		if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        			return false;
        		}else{
        			return true;
        		}
        	}else if(colnm == "QN_SILHENGGS"){
        		if(this.dsList.getColumn(row, "DS_UNIT")=='식'){
        			return false;
        		}
        		if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        			if(this.dsList.getColumn(row, "YN_EDIT") == "Y"){
        				return true;
        			}
        		}

        	}else if(colnm == "AM_SILHENGGS"){
        		//if(this.dsList.getColumn(row, "YN_EDIT") == "Y"){
        		if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        			return false;
        		}else{
        			return true;
        		}
        	}


        	//그리드 수정가능하도록 주석처리
        	//return false;
         };*/

         this.fnGrid_EnterCell = function(obj, row, cell){
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        	switch(colnm){
        		case "QN_TTHADOGS":
        			if(this.FormInfo.CD_MODULE == "DWN"){
        				return false;
        			}else{
        				if(this.dsList.getColumn(row, "DS_UNIT")=='식'){
        					return false;
        				}
        				if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        					if(this.dsList.getColumn(row, "YN_EDIT") == "Y"){
        						return true;
        					}
        				}
        			}
        		break;
        		case "AM_TTHADOGS":
        			if(this.FormInfo.CD_MODULE == "DWN"){
        				return false;
        			}else{
        				if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        					return false;
        				}else{
        					return true;
        				}
        			}
        		break;
        		case "QN_TTDOKUBGS":
        			if(this.dsList.getColumn(row, "DS_UNIT")=='식'){
        				return false;
        			}
        			if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        				if(this.dsList.getColumn(row, "YN_EDIT") == "Y"){
        					return true;
        				}
        			}
        		break;
        		case "AM_TTDOKUBGS":
        			if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        				return false;
        			}else{
        				return true;
        			}
        		break;
        		case "QN_TTSILHENGGS":
        			if(this.dsList.getColumn(row, "DS_UNIT")=='식'){
        				return false;
        			}
        			if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        				if(this.dsList.getColumn(row, "YN_EDIT") == "Y"){
        					return true;
        				}
        			}
        		break;
        		case "AM_TTSILHENGGS":
        			if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        				return false;
        			}else{
        				return true;
        			}
        		break;
        		case "QN_HADOGS":
        			if(this.dsList.getColumn(row, "DS_UNIT") == '식'){
        				return false;
        			}else{
        				if(this.FormInfo.CD_MODULE == "DWN"){
        					return true;
        				}else{
        					return false;
        				}
        			}
        		break;
        		case "AM_HADOGS":
        			if(this.FormInfo.CD_MODULE == "DWN"){
        				return true;
        			}else{
        				return false;
        			}
        		break;
        	}
         };

         this.dxGrid_RowCellChanged = function(obj,e)
        {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, e.cell);	// 컬럼 인덱스로 컬럼명 가져오기

        	var rows = obj.getSelectedDatasetRows();
        	var sum = 0;
        	var bRet = "";
        	for(var i = 0; i < rows.length; i++) {
        		//var am = this.dsList.getColumn(rows[i], e.selectstartcol);
        		var am = this.dsList.getColumn(rows[i], colnm);

        		//bRet = nexacro.isNumeric(am);
        		bRet = isNaN(am); // 문자:true, 숫자:false

        		//alert(am+":::"+bRet);
        		if(bRet){
        			break;
        		}

        		if(!this.gfnIsNull(am)) {
        			sum += am;
        		}
        	}

        	var colDS_COST = this.dxGrid.getBindCellIndex("body", "DS_COST");

        	if(!bRet){	// 숫자면 합계표시, 문자면 null
        		this.dxGrid.setCellProperty("summ", colDS_COST, "text", "선택합계=" + this.gfnAppendComma(sum));
        	}else{
        		this.dxGrid.setCellProperty("summ", colDS_COST, "text", "");
        	}
        	/*
        	var colAM_HADOGS = this.dxGrid.getBindCellIndex("body", "AM_HADOGS");
        	var colAM_TTHADOGS = this.dxGrid.getBindCellIndex("body", "AM_TTHADOGS");

        	if(!bRet){	// 숫자면 합계표시, 문자면 null
        		// 동시에 보여지게 하는 방식
        		this.dxGrid.setCellProperty("summ", colAM_HADOGS, "text", this.gfnAppendComma(sum));
        		this.dxGrid.setCellProperty("summ", colAM_TTHADOGS, "text", this.gfnAppendComma(sum));

        		//아래는 각각 보여지게끔 하는 방식
        // 		if(e.col == colAM_HADOGS){
        // 			this.dxGrid.setCellProperty("summ", colAM_HADOGS, "text", this.gfnAppendComma(sum));
        // 		}
        // 		else if(e.col == colAM_TTHADOGS)
        // 		{
        // 			this.dxGrid.setCellProperty("summ", colAM_TTHADOGS, "text", this.gfnAppendComma(sum));
        // 		}
        // 		else
        // 		{
        // 		}
        	}else{
        		this.dxGrid.setCellProperty("summ", colAM_HADOGS, "text", "");
        		this.dxGrid.setCellProperty("summ", colAM_TTHADOGS, "text", "");
        	}
        	*/
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		if(e.columnid =="CD_SITE" || e.columnid =="YM_WORK"){
        			this.fnNodgrInit();
        		}
        		else if(e.columnid == "NO_HADOCONT")
        		{
        			this.dsSearch.setColumn(0, "CD_VENDOR", "");
        			this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.set_value("");
        		}
        	}
        };

        this.fnSearchInit = function(obj,e) {
           if(e == null || (e.pretext != e.posttext)) {
              this.gfnSetFormStatus(this);
              this.gfnGridClear(this.dxGrid);
           }
        }

        this.fnNodgrInit = function(){
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")) || this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))){
        		this.dsNodgr.clearData();
        	}else{
        		this.dsSelNodgr.clearData();
        		this.dsSelNodgr.addRow();
        		this.dsSelNodgr.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsSelNodgr.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        		if(!this.gfnIsNull(this.getOwnerFrame().DS_CONTMETHOD)){
        			this.dsSelNodgr.setColumn(0, "DS_CONTMETHOD", this.getOwnerFrame().DS_CONTMETHOD);
        		}else{
        			this.dsSelNodgr.setColumn(0, "DS_CONTMETHOD", this.FormInfo.DS_PARAM);
        		}

        		var strSvcId    = "selnodgr";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "selectno=dsSelNodgr";
        		var outData     = "dsNodgr=selectno0";
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
        };

        this.inZero = function(p1,p2){
        	var zero ="";
        	for(var i = 0; i  <p2; i++) zero +="0";
        	return zero.toString().concat(p1).match(new RegExp("\\d{"+p2+"}$"));
        };

        this.fnAfterExecute = function(){
        	this.dsExec.clearData();
        	var nrow = this.dsExec.addRow();

        	this.dsExec.setColumn(nrow, "TY_WRK", "CRT");
        	this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExec.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(nrow, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	this.dsExec.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsExec.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        	this.dsExec.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

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
        						strArg,			// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		this.fnCalcRow(e.columnid, e.row);
        	}
        };

        //20200330 금회기성 계산을 누계기성 계산으로 변경으로 인한 주석처리
        /*this.fnCalcRow = function(colnm, row) {
        	if(colnm == "AM_HADOGS" ||colnm == "AM_DOKUBGS" ||colnm == "AM_SILHENGGS" ||colnm == "QN_HADOGS" ||colnm == "QN_DOKUBGS" ||colnm == "QN_SILHENGGS"){
        		this.dsList.set_enableevent(false);
        		 //해당컬럼 조회하고있지않아서 임시로 추가
        		 this.dsList.addColumn("QN_DOKUBGS", "bigdecimal");
        		 this.dsList.addColumn("AM_DOKUBGS", "bigdecimal");
        		 this.dsList.addColumn("QN_SILHENGGS", "bigdecimal");
        		 this.dsList.addColumn("AM_SILHENGGS", "bigdecimal");

        		 this.dsList.addColumn("QN_TTDOKUBGS", "bigdecimal");
        		 this.dsList.addColumn("AM_TTDOKUBGS", "bigdecimal");
        		 this.dsList.addColumn("QN_TTSILHENGGS", "bigdecimal");
        		 this.dsList.addColumn("AM_TTSILHENGGS", "bigdecimal");
        		 //this.dsList.addColumn("J_QN_TTDOKUBGS", "bigdecimal");
        		 //this.dsList.addColumn("J_AM_TTDOKUBGS", "bigdecimal");


        		//금회기성(금액) 변경 시
        		if(colnm == "AM_HADOGS"){
        			 this.dsList.setColumn(row, "AM_TTHADOGS", nexacro.floor(this.dsList.getColumn(row, "PRE_AM_TTHADOGS") + this.dsList.getColumn(row, "AM_HADOGS")));
        			 this.dsList.setColumn(row, "J_AM_TTHADOGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_HADO") - this.dsList.getColumn(row, "AM_TTHADOGS")));

        			 //금회기성율
        			 this.dsList.setColumn(row, "RT_HADOGS", nexacro.floor((this.dsList.getColumn(row, "AM_HADOGS") / this.dsList.getColumn(row, "AM_TT_HADO")) * 100,2));

        			 //누계기성율
        			 this.dsList.setColumn(row, "RT_TTHADOGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTHADOGS") / this.dsList.getColumn(row, "AM_TT_HADO") * 100),2));

        			 //누계기성금액(도급)
        			 // 도급금액 : AM_TT_DOKUB, 실행금액 : AM_TT_SILHENG
        			 var amTtDokub = nexacro.floor((this.dsList.getColumn(row, "AM_TT_DOKUB")/100)  * this.dsList.getColumn(row, "RT_TTHADOGS") )    // 도급금액 / 누계기성율
        			 var amTtSilheng = nexacro.floor((this.dsList.getColumn(row, "AM_TT_SILHENG")/100)  * this.dsList.getColumn(row, "RT_TTHADOGS") ) // 실행금액 / 누계기성율

        			 //AM_DOKUBGS : 도급기성금회 , AM_SILHENGGS : 실행기성금회
        			 this.dsList.setColumn(row, "AM_DOKUBGS", amTtDokub);
        			 this.dsList.setColumn(row, "AM_SILHENGGS", amTtSilheng);


        			 //도급,실행기성 금회(진행중)
        			 if(amTtDokub -  this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")> 0){
        				this.dsList.setColumn(row, "AM_DOKUBGS", amTtDokub - this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS"));
        			 }

        			 if(amTtSilheng - this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS") > 0){
        				this.dsList.setColumn(row, "AM_SILHENGGS", amTtSilheng - this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS"));
        			 }


        			 //도급기성(누계) 변경
        			 this.dsList.setColumn(row, "AM_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "AM_DOKUBGS") + this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")));

        			 //실행기성(누계) 변경
        			 this.dsList.setColumn(row, "AM_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_SILHENGGS") + this.dsList.getColumn(row, "PRE_AM_TTSILHENGGS")));

        			 //도급기성(잔여) 변경
        			 this.dsList.setColumn(row, "J_AM_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_DOKUB") - this.dsList.getColumn(row, "AM_TTDOKUBGS")));

        			 //실행기성(잔여)
        			 this.dsList.setColumn(row, "J_AM_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_SILHENG") - this.dsList.getColumn(row, "AM_TTSILHENGGS")));



        			 //잔여기성율
        			 this.dsList.setColumn(row, "J_RT_TTHADOGS", nexacro.floor(100 - this.dsList.getColumn(row, "RT_TTHADOGS")),2);

        			 //도급기성율(누계)
        			 this.dsList.setColumn(row, "RT_TTDOKUBGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTDOKUBGS") / this.dsList.getColumn(row, "AM_TT_DOKUB") * 100),2));

        			 //실행기성율(누계)
        			 this.dsList.setColumn(row, "RT_TTSILHENGGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTSILHENGGS") / this.dsList.getColumn(row, "AM_TT_SILHENG") * 100),2));
        		//도급기성(금액) 변경 시
        		}else if(colnm == "AM_DOKUBGS"){
        			 //도급기성(누계) 변경
        			 this.dsList.setColumn(row, "AM_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "AM_DOKUBGS") + this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")));

        			 //도급기성(잔여) 변경
        			 this.dsList.setColumn(row, "J_AM_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_DOKUB") - this.dsList.getColumn(row, "AM_TTDOKUBGS")));

        			 //도급기성율(누계)
        			 this.dsList.setColumn(row, "RT_TTDOKUBGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTDOKUBGS") / this.dsList.getColumn(row, "AM_TT_DOKUB") * 100),2));
        		//실행기성(금액) 변경 시
        		}else if(colnm == "AM_SILHENGGS"){

        			 //실행기성(누계) 변경
        			 this.dsList.setColumn(row, "AM_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_SILHENGGS") + this.dsList.getColumn(row, "PRE_AM_TTSILHENGGS")));

        			 //실행기성(잔여)
        			 this.dsList.setColumn(row, "J_AM_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_SILHENG") - this.dsList.getColumn(row, "AM_TTSILHENGGS")));

        			 //실행기성율(누계)
        			 this.dsList.setColumn(row, "RT_TTSILHENGGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTSILHENGGS") / this.dsList.getColumn(row, "AM_TT_SILHENG") * 100),2));

        		//금회기성(수량) 변경 시
        		}else if(colnm == "QN_HADOGS"){
        		  if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        			 this.dsList.setColumn(row, "AM_HADOGS", nexacro.floor(this.dsList.getColumn(row, "QN_HADOGS") * this.dsList.getColumn(row, "UP_TT_HADO")));
        			 this.dsList.setColumn(row, "QN_TTHADOGS", nexacro.floor(this.dsList.getColumn(row, "PRE_QN_TTHADOGS") + this.dsList.getColumn(row, "QN_HADOGS")));
        			 this.dsList.setColumn(row, "J_QN_TTHADOGS", nexacro.floor(this.dsList.getColumn(row, "QN_TT_HADO") - this.dsList.getColumn(row, "QN_TTHADOGS")));
        			 this.dsList.setColumn(row, "AM_TTHADOGS", nexacro.floor(this.dsList.getColumn(row, "PRE_AM_TTHADOGS") + this.dsList.getColumn(row, "AM_HADOGS")));
        			 this.dsList.setColumn(row, "J_AM_TTHADOGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_HADO") - this.dsList.getColumn(row, "AM_TTHADOGS")));

        			 //도급기성 변경
        			 this.dsList.setColumn(row, "QN_DOKUBGS", this.dsList.getColumn(row, "QN_HADOGS"));
        			 this.dsList.setColumn(row, "AM_DOKUBGS", nexacro.floor(this.dsList.getColumn(row, "QN_HADOGS") * this.dsList.getColumn(row, "UP_TT_DOKUB")));


        			 //실행기성 변경
        			 this.dsList.setColumn(row, "QN_SILHENGGS", this.dsList.getColumn(row, "QN_HADOGS"));
        			 this.dsList.setColumn(row, "AM_SILHENGGS", nexacro.floor(this.dsList.getColumn(row, "QN_HADOGS") * this.dsList.getColumn(row, "UP_TT_SILHENG")));

        			 //도급기성(누계) 변경
        			 this.dsList.setColumn(row, "QN_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "QN_DOKUBGS") + this.dsList.getColumn(row, "PRE_QN_TTDOKUBGS")));
        			 this.dsList.setColumn(row, "AM_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "QN_DOKUBGS") * nexacro.floor(this.dsList.getColumn(row, "UP_TT_DOKUB")) + this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")));

        			 //실행기성(누계) 변경
        			 this.dsList.setColumn(row, "QN_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "QN_SILHENGGS") + this.dsList.getColumn(row, "PRE_QN_TTSILHENGGS")));
        			 this.dsList.setColumn(row, "AM_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_SILHENGGS") + this.dsList.getColumn(row, "PRE_AM_TTSILHENGGS")));

        			 //도급기성(잔여) 변경
        			 this.dsList.setColumn(row, "J_QN_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "QN_TT_DOKUB") - this.dsList.getColumn(row, "QN_TTDOKUBGS")));
        			 this.dsList.setColumn(row, "J_AM_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_DOKUB") - this.dsList.getColumn(row, "AM_TTDOKUBGS")));

        			 //실행기성(잔여)
        			 this.dsList.setColumn(row, "J_QN_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "QN_TT_SILHENG") - this.dsList.getColumn(row, "QN_TTSILHENGGS")));
        			 this.dsList.setColumn(row, "J_AM_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_SILHENG") - this.dsList.getColumn(row, "AM_TTSILHENGGS")));

        			 //금회기성율
        			 this.dsList.setColumn(row, "RT_HADOGS", nexacro.floor((this.dsList.getColumn(row, "AM_HADOGS") / this.dsList.getColumn(row, "AM_TT_HADO")) * 100),2);

        			 //누계기성율
        			 this.dsList.setColumn(row, "RT_TTHADOGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTHADOGS") / this.dsList.getColumn(row, "AM_TT_HADO")) * 100),2);

        			 //잔여기성율
        			 this.dsList.setColumn(row, "J_RT_TTHADOGS", nexacro.floor(100 - this.dsList.getColumn(row, "RT_TTHADOGS")),2);

        			 //도급기성율(누계)
        			 this.dsList.setColumn(row, "RT_TTDOKUBGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTDOKUBGS") / this.dsList.getColumn(row, "AM_TT_DOKUB")) * 100),2);

        			 //실행기성율(누계)
        			 this.dsList.setColumn(row, "RT_TTSILHENGGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTSILHENGGS") / this.dsList.getColumn(row, "AM_TT_SILHENG")) * 100),2);
        		  }
        		//도급기성(금회) 수량
        		}else if(colnm == "QN_DOKUBGS"){
        			//도급기성(금회) 금액
        			this.dsList.setColumn(row, "AM_DOKUBGS", nexacro.floor(this.dsList.getColumn(row, "QN_DOKUBGS") * this.dsList.getColumn(row, "UP_TT_DOKUB")));

        			//도급기성(누계) 변경
        			this.dsList.setColumn(row, "QN_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "QN_DOKUBGS") + this.dsList.getColumn(row, "PRE_QN_TTDOKUBGS")));
        			this.dsList.setColumn(row, "AM_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "QN_DOKUBGS") * nexacro.floor(this.dsList.getColumn(row, "UP_TT_DOKUB")) + this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")));

        			//도급기성(잔여) 변경
        			this.dsList.setColumn(row, "J_QN_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "QN_TT_DOKUB") - this.dsList.getColumn(row, "QN_TTDOKUBGS")));
        			this.dsList.setColumn(row, "J_AM_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_DOKUB") - this.dsList.getColumn(row, "AM_TTDOKUBGS")));

        			//도급기성율(누계)
        			this.dsList.setColumn(row, "RT_TTDOKUBGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTDOKUBGS") / this.dsList.getColumn(row, "AM_TT_DOKUB")) * 100),2);

        		//실행기성(금회) 수량
        		}else if(colnm == "QN_SILHENGGS"){
        			//실행기성(금회) 금액
        			this.dsList.setColumn(row, "AM_SILHENGGS", nexacro.floor(this.dsList.getColumn(row, "QN_SILHENGGS") * this.dsList.getColumn(row, "UP_TT_SILHENG")));

        			//실행기성(누계) 변경
        			this.dsList.setColumn(row, "QN_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "QN_SILHENGGS") + this.dsList.getColumn(row, "PRE_QN_TTSILHENGGS")));
        			this.dsList.setColumn(row, "AM_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_SILHENGGS") + this.dsList.getColumn(row, "PRE_AM_TTSILHENGGS")));

        			//실행기성(잔여)
        			this.dsList.setColumn(row, "J_QN_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "QN_TT_SILHENG") - this.dsList.getColumn(row, "QN_TTSILHENGGS")));
        			this.dsList.setColumn(row, "J_AM_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_SILHENG") - this.dsList.getColumn(row, "AM_TTSILHENGGS")));

        			//실행기성율(누계)
        			this.dsList.setColumn(row, "RT_TTSILHENGGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTSILHENGGS") / this.dsList.getColumn(row, "AM_TT_SILHENG")) * 100),2);
        		}

        	   this.dsList.set_enableevent(true);
           }
        }*/


        /* 20220125 Javascript 64bit 부동소수점 문제로 인하여 소스 변경
        this.fnCalcRow = function(colnm, row) {
        	if(colnm == "AM_TTHADOGS" ||colnm == "AM_TTDOKUBGS" ||colnm == "AM_TTSILHENGGS" ||colnm == "QN_TTHADOGS" ||colnm == "QN_TTDOKUBGS" ||colnm == "QN_TTSILHENGGS"){
        		this.dsList.set_enableevent(false);
        		//해당컬럼 조회하고있지않아서 임시로 추가
        		this.dsList.addColumn("QN_DOKUBGS", "bigdecimal");
        		this.dsList.addColumn("AM_DOKUBGS", "bigdecimal");
        		this.dsList.addColumn("QN_SILHENGGS", "bigdecimal");
        		this.dsList.addColumn("AM_SILHENGGS", "bigdecimal");

        		this.dsList.addColumn("QN_TTDOKUBGS", "bigdecimal");
        		this.dsList.addColumn("AM_TTDOKUBGS", "bigdecimal");
        		this.dsList.addColumn("QN_TTSILHENGGS", "bigdecimal");
        		this.dsList.addColumn("AM_TTSILHENGGS", "bigdecimal");
        		//this.dsList.addColumn("J_QN_TTDOKUBGS", "bigdecimal");
        		//this.dsList.addColumn("J_AM_TTDOKUBGS", "bigdecimal");

        		//금회기성(금액) 변경 시
        		if(colnm == "AM_TTHADOGS"){
        			//금회기성금
        			this.dsList.setColumn(row, "AM_HADOGS", nexacro.floor(this.dsList.getColumn(row, "AM_TTHADOGS") - this.dsList.getColumn(row, "PRE_AM_TTHADOGS"),0));
        			this.dsList.setColumn(row, "J_AM_TTHADOGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_HADO") - this.dsList.getColumn(row, "AM_TTHADOGS"),0));

        			//금회기성율
        			this.dsList.setColumn(row, "RT_HADOGS", nexacro.floor((this.dsList.getColumn(row, "AM_HADOGS") / this.dsList.getColumn(row, "AM_TT_HADO")) * 100,2));

        			//누계기성율
        			this.dsList.setColumn(row, "RT_TTHADOGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTHADOGS") / this.dsList.getColumn(row, "AM_TT_HADO") * 100),2));

        			//누계기성금액(도급)
        			// 도급금액 : AM_TT_DOKUB, 실행금액 : AM_TT_SILHENG
        			var amTtDokub = nexacro.floor(nexacro.toNumber(this.dsList.getColumn(row, "AM_TT_DOKUB")/100,0)  * this.dsList.getColumn(row, "RT_TTHADOGS",0) )    // 도급금액 / 누계기성율
        			var amTtSilheng = nexacro.floor(nexacro.toNumber(this.dsList.getColumn(row, "AM_TT_SILHENG")/100,0)  * this.dsList.getColumn(row, "RT_TTHADOGS",0) ) // 실행금액 / 누계기성율

        			//AM_DOKUBGS : 도급기성금회 , AM_SILHENGGS : 실행기성금회
        			this.dsList.setColumn(row, "AM_DOKUBGS", amTtDokub);
        			this.dsList.setColumn(row, "AM_SILHENGGS", amTtSilheng);

        			//도급,실행기성 금회(진행중)
        			if(amTtDokub -  this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")> 0){
        				this.dsList.setColumn(row, "AM_DOKUBGS", amTtDokub - this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS"));
        			}

        			if(amTtSilheng - this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS") > 0){
        				this.dsList.setColumn(row, "AM_SILHENGGS", amTtSilheng - this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS"));
        			}

        			//도급기성(누계) 변경
        			this.dsList.setColumn(row, "AM_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "AM_DOKUBGS") + this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS"),0));

        			//실행기성(누계) 변경
        			this.dsList.setColumn(row, "AM_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_SILHENGGS") + this.dsList.getColumn(row, "PRE_AM_TTSILHENGGS"),0));

        			//도급기성(잔여) 변경
        			this.dsList.setColumn(row, "J_AM_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_DOKUB") - this.dsList.getColumn(row, "AM_TTDOKUBGS"),0));

        			//실행기성(잔여)
        			this.dsList.setColumn(row, "J_AM_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_SILHENG") - this.dsList.getColumn(row, "AM_TTSILHENGGS"),0));

        			//잔여기성율
        			this.dsList.setColumn(row, "J_RT_TTHADOGS", nexacro.floor(100 - this.dsList.getColumn(row, "RT_TTHADOGS")),2);

        			//도급기성율(누계)
        			this.dsList.setColumn(row, "RT_TTDOKUBGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTDOKUBGS") / this.dsList.getColumn(row, "AM_TT_DOKUB") * 100),2));

        			//실행기성율(누계)
        			this.dsList.setColumn(row, "RT_TTSILHENGGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTSILHENGGS") / this.dsList.getColumn(row, "AM_TT_SILHENG") * 100),2));
        		//도급기성(금액) 변경 시
        		}else if(colnm == "AM_TTDOKUBGS"){
        			 //도급기성(누계) 변경
        			 //this.dsList.setColumn(row, "AM_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "AM_DOKUBGS") + this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")));
        			 this.dsList.setColumn(row, "AM_DOKUBGS", nexacro.floor(this.dsList.getColumn(row, "AM_TTDOKUBGS") - this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS"),0));

        			 //도급기성(잔여) 변경
        			 this.dsList.setColumn(row, "J_AM_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_DOKUB") - this.dsList.getColumn(row, "AM_TTDOKUBGS"),0));

        			 //도급기성율(누계)
        			 this.dsList.setColumn(row, "RT_TTDOKUBGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTDOKUBGS") / this.dsList.getColumn(row, "AM_TT_DOKUB") * 100),2));
        		//실행기성(금액) 변경 시
        		}else if(colnm == "AM_TTSILHENGGS"){
        			 //실행기성(누계) 변경
        			 //this.dsList.setColumn(row, "AM_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_SILHENGGS") + this.dsList.getColumn(row, "PRE_AM_TTSILHENGGS")));
        			 this.dsList.setColumn(row, "AM_SILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_TTSILHENGGS") - this.dsList.getColumn(row, "PRE_AM_TTSILHENGGS"),0));

        			 //실행기성(잔여)
        			 this.dsList.setColumn(row, "J_AM_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_SILHENG") - this.dsList.getColumn(row, "AM_TTSILHENGGS"),0));

        			 //실행기성율(누계)
        			 this.dsList.setColumn(row, "RT_TTSILHENGGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTSILHENGGS") / this.dsList.getColumn(row, "AM_TT_SILHENG") * 100),2));

        		//금회기성(수량) 변경 시
        		}else if(colnm == "QN_TTHADOGS"){
        			if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        			this.dsList.setColumn(row, "QN_HADOGS", nexacro.toNumber(this.dsList.getColumn(row, "QN_TTHADOGS") - this.dsList.getColumn(row, "PRE_QN_TTHADOGS"),3));
        			this.dsList.setColumn(row, "AM_HADOGS", nexacro.floor(this.dsList.getColumn(row, "QN_HADOGS") * this.dsList.getColumn(row, "UP_TT_HADO"),0));
        			this.dsList.setColumn(row, "QN_TTHADOGS", nexacro.toNumber(this.dsList.getColumn(row, "PRE_QN_TTHADOGS") + this.dsList.getColumn(row, "QN_HADOGS"),3));
        			this.dsList.setColumn(row, "J_QN_TTHADOGS", nexacro.toNumber(this.dsList.getColumn(row, "QN_TT_HADO") - this.dsList.getColumn(row, "QN_TTHADOGS"),3));
        			this.dsList.setColumn(row, "AM_TTHADOGS", nexacro.floor(this.dsList.getColumn(row, "PRE_AM_TTHADOGS") + this.dsList.getColumn(row, "AM_HADOGS"),0));
        			this.dsList.setColumn(row, "J_AM_TTHADOGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_HADO") - this.dsList.getColumn(row, "AM_TTHADOGS"),0));

        			//도급기성(누계) 변경
        			if(this.dsList.getColumn(row, "QN_TT_DOKUB") == 0 || this.dsList.getColumn(row, "UP_TT_DOKUB") ==0){	//도급기성 수량이나 단가가 0일 경우 도급 누계 수량,금액 0으로 처리
         				this.dsList.setColumn(row, "QN_TTDOKUBGS",0);
         				this.dsList.setColumn(row, "AM_TTDOKUBGS",0);
        				this.dsList.setColumn(row, "QN_DOKUBGS",0);
        				this.dsList.setColumn(row, "AM_DOKUBGS",0);
        			 }else{
        				//도급기성 변경
        				this.dsList.setColumn(row, "QN_DOKUBGS", this.dsList.getColumn(row, "QN_HADOGS"));
        				this.dsList.setColumn(row, "AM_DOKUBGS", nexacro.floor(this.dsList.getColumn(row, "QN_HADOGS") * this.dsList.getColumn(row, "UP_TT_DOKUB"),0));

         				this.dsList.setColumn(row, "QN_TTDOKUBGS", nexacro.toNumber(this.dsList.getColumn(row, "QN_DOKUBGS") + this.dsList.getColumn(row, "PRE_QN_TTDOKUBGS"),3));
         				this.dsList.setColumn(row, "AM_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "QN_DOKUBGS") * nexacro.toNumber(this.dsList.getColumn(row, "UP_TT_DOKUB")) + this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS"),0));
        			 }

        			 //실행기성(누계) 변경
        			 if(this.dsList.getColumn(row, "QN_TT_SILHENG") == 0 || this.dsList.getColumn(row, "UP_TT_SILHENG") == 0){	//도급기성 수량이나 단가가 0일 경우 도급 누계 수량,금액 0으로 처리
        				this.dsList.setColumn(row, "QN_TTSILHENGGS",0);
        				this.dsList.setColumn(row, "QN_TTSILHENGGS",0);
        				this.dsList.setColumn(row, "QN_SILHENGGS",0);
        				this.dsList.setColumn(row, "AM_SILHENGGS",0);
        			 }else{
        				 //실행기성 변경
        				this.dsList.setColumn(row, "QN_SILHENGGS", this.dsList.getColumn(row, "QN_HADOGS"));
         				this.dsList.setColumn(row, "AM_SILHENGGS", nexacro.floor(this.dsList.getColumn(row, "QN_HADOGS") * this.dsList.getColumn(row, "UP_TT_SILHENG"),0));
         				this.dsList.setColumn(row, "QN_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "QN_SILHENGGS") + this.dsList.getColumn(row, "PRE_QN_TTSILHENGGS"),3));
         				this.dsList.setColumn(row, "AM_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_SILHENGGS") + this.dsList.getColumn(row, "PRE_AM_TTSILHENGGS"),0));

        			 }

        			 //도급기성(잔여) 변경
        			 this.dsList.setColumn(row, "J_QN_TTDOKUBGS", nexacro.toNumber(this.dsList.getColumn(row, "QN_TT_DOKUB") - this.dsList.getColumn(row, "QN_TTDOKUBGS"),3));
        			 this.dsList.setColumn(row, "J_AM_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_DOKUB") - this.dsList.getColumn(row, "AM_TTDOKUBGS"),0));

        			 //실행기성(잔여)
        			 this.dsList.setColumn(row, "J_QN_TTSILHENGGS", nexacro.toNumber(this.dsList.getColumn(row, "QN_TT_SILHENG") - this.dsList.getColumn(row, "QN_TTSILHENGGS"),3));
        			 this.dsList.setColumn(row, "J_AM_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_SILHENG") - this.dsList.getColumn(row, "AM_TTSILHENGGS"),0));

        			 //금회기성율
        			 this.dsList.setColumn(row, "RT_HADOGS", nexacro.floor((this.dsList.getColumn(row, "AM_HADOGS") / this.dsList.getColumn(row, "AM_TT_HADO")) * 100),2);

        			 //누계기성율
        			 this.dsList.setColumn(row, "RT_TTHADOGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTHADOGS") / this.dsList.getColumn(row, "AM_TT_HADO")) * 100),2);

        			 //잔여기성율
        			 this.dsList.setColumn(row, "J_RT_TTHADOGS", nexacro.floor(100 - this.dsList.getColumn(row, "RT_TTHADOGS")),2);

        			 //도급기성율(누계)
        			 this.dsList.setColumn(row, "RT_TTDOKUBGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTDOKUBGS") / this.dsList.getColumn(row, "AM_TT_DOKUB")) * 100),2);

        			 //실행기성율(누계)
        			 this.dsList.setColumn(row, "RT_TTSILHENGGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTSILHENGGS") / this.dsList.getColumn(row, "AM_TT_SILHENG")) * 100),2);
        		  }
        		//도급기성(금회) 수량
        		}else if(colnm == "QN_TTDOKUBGS"){
        			this.dsList.setColumn(row, "QN_DOKUBGS", nexacro.toNumber(this.dsList.getColumn(row, "QN_TTDOKUBGS") - this.dsList.getColumn(row, "PRE_QN_TTDOKUBGS"),3));

        			//도급기성(금회) 금액
        			this.dsList.setColumn(row, "AM_DOKUBGS", nexacro.floor(this.dsList.getColumn(row, "QN_DOKUBGS") * this.dsList.getColumn(row, "UP_TT_DOKUB"),0));

        			//도급기성(누계) 변경
        			this.dsList.setColumn(row, "QN_TTDOKUBGS", nexacro.toNumber(this.dsList.getColumn(row, "QN_DOKUBGS") + this.dsList.getColumn(row, "PRE_QN_TTDOKUBGS"),3));
        			this.dsList.setColumn(row, "AM_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "QN_DOKUBGS") * nexacro.toNumber(this.dsList.getColumn(row, "UP_TT_DOKUB")) + this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS"),0));

        			//도급기성(잔여) 변경
        			this.dsList.setColumn(row, "J_QN_TTDOKUBGS", nexacro.toNumber(this.dsList.getColumn(row, "QN_TT_DOKUB") - this.dsList.getColumn(row, "QN_TTDOKUBGS"),3));
        			this.dsList.setColumn(row, "J_AM_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_DOKUB") - this.dsList.getColumn(row, "AM_TTDOKUBGS"),0));

        			//도급기성율(누계)
        			this.dsList.setColumn(row, "RT_TTDOKUBGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTDOKUBGS") / this.dsList.getColumn(row, "AM_TT_DOKUB")) * 100),2);

        		//실행기성(금회) 수량
        		}else if(colnm == "QN_TTSILHENGGS"){
        			this.dsList.setColumn(row, "QN_SILHENGGS", nexacro.toNumber(this.dsList.getColumn(row, "QN_TTSILHENGGS") - this.dsList.getColumn(row, "PRE_QN_TTSILHENGGS"),3));

        			//실행기성(금회) 금액
        			this.dsList.setColumn(row, "AM_SILHENGGS", nexacro.floor(this.dsList.getColumn(row, "QN_SILHENGGS") * this.dsList.getColumn(row, "UP_TT_SILHENG"),0));

        			//실행기성(누계) 변경
        			this.dsList.setColumn(row, "QN_TTSILHENGGS", nexacro.toNumber(this.dsList.getColumn(row, "QN_SILHENGGS") + this.dsList.getColumn(row, "PRE_QN_TTSILHENGGS"),3));
        			this.dsList.setColumn(row, "AM_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_SILHENGGS") + this.dsList.getColumn(row, "PRE_AM_TTSILHENGGS"),0));

        			//실행기성(잔여)
        			this.dsList.setColumn(row, "J_QN_TTSILHENGGS", nexacro.toNumber(this.dsList.getColumn(row, "QN_TT_SILHENG") - this.dsList.getColumn(row, "QN_TTSILHENGGS"),3));
        			this.dsList.setColumn(row, "J_AM_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "AM_TT_SILHENG") - this.dsList.getColumn(row, "AM_TTSILHENGGS"),0));

        			//실행기성율(누계)
        			this.dsList.setColumn(row, "RT_TTSILHENGGS", nexacro.floor((this.dsList.getColumn(row, "AM_TTSILHENGGS") / this.dsList.getColumn(row, "AM_TT_SILHENG")) * 100),2);
        		}
        	   this.setLastJAmt(row);

        	   this.dsList.set_enableevent(true);
           }
        }
        */

        this.fnCalcRow = function(colnm, row) {
        	if(colnm == "AM_HADOGS" || colnm == "QN_HADOGS" || colnm == "AM_TTHADOGS" ||colnm == "AM_TTDOKUBGS" ||colnm == "AM_TTSILHENGGS" ||colnm == "QN_TTHADOGS" ||colnm == "QN_TTDOKUBGS" ||colnm == "QN_TTSILHENGGS"){
        		this.dsList.set_enableevent(false);
        /*
        		//해당컬럼 조회하고있지않아서 임시로 추가
        		this.dsList.addColumn("QN_DOKUBGS", "bigdecimal");
        		this.dsList.addColumn("AM_DOKUBGS", "bigdecimal");
        		this.dsList.addColumn("QN_SILHENGGS", "bigdecimal");
        		this.dsList.addColumn("AM_SILHENGGS", "bigdecimal");
        		this.dsList.addColumn("QN_TTDOKUBGS", "bigdecimal");
        		this.dsList.addColumn("AM_TTDOKUBGS", "bigdecimal");
        		this.dsList.addColumn("QN_TTSILHENGGS", "bigdecimal");
        		this.dsList.addColumn("AM_TTSILHENGGS", "bigdecimal");
        		//this.dsList.addColumn("J_QN_TTDOKUBGS", "bigdecimal");
        		//this.dsList.addColumn("J_AM_TTDOKUBGS", "bigdecimal");
        */
        		switch (colnm){
        			// 누계-금액 수정 시
        			case "AM_TTHADOGS" :
        				// 당회-금액 연산
        				var am_hadogs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTHADOGS"));

        				am_hadogs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTHADOGS"))); // 감산
        				// AM_TTHADOGS - PRE_AM_TTHADOGS = AM_HADOGS (68520)
        				this.dsList.setColumn(row, "AM_HADOGS", nexacro.floor(am_hadogs, 0));

        				// 잔여-금액 연산
        				var j_am_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_HADO"));

        				j_am_tthadogs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TTHADOGS")));
        				// AM_TT_HADO - AM_TTHADOGS = J_AM_TTHADOGS
        				this.dsList.setColumn(row, "J_AM_TTHADOGS", nexacro.floor(j_am_tthadogs, 0));

        				// 당회-기성률 연산
        				var rt_hadogs = nexacro.Decimal(this.dsList.getColumn(row, "AM_HADOGS")); // 당회-금액

        				rt_hadogs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_HADO"))); // 나누기 연산
        				rt_hadogs.mulDecimal(nexacro.Decimal(100)); // 곱 연산

        				this.dsList.setColumn(row, "RT_HADOGS", nexacro.floor(rt_hadogs, 2)); // 당회-기성율

        				// 누계-기성률 연산
        				var rt_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTHADOGS")); // 누계-금액

        				rt_tthadogs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_HADO"))); // 나누기 연산
        				rt_tthadogs.mulDecimal(nexacro.Decimal(100)); // 곱 연산

        				this.dsList.setColumn(row, "RT_TTHADOGS", nexacro.floor(rt_tthadogs, 2)); // 누계-기성률

        				// 도급기성(금회)-금액 연산
        				var am_dokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_DOKUB")); // 도급금액-금액

        				am_dokubgs.divDecimal(nexacro.Decimal(100)); // 나누기 연산
        				am_dokubgs.mulDecimal(nexacro.Decimal(this.dsList.getColumn(row, "RT_TTHADOGS"))); // 곱 연산

        				this.dsList.setColumn(row, "AM_DOKUBGS", nexacro.floor(am_dokubgs, 0)); // 도급기성(금회)-금액

        				// 도급기성(금회)-금액 - 도급기성(전회)-금액 : 소스 변경 금지 : 이후 금액 연산 시 결과값 달라질 수 있음
        				if(am_dokubgs - this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS") > 0){
        					var am_dokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_DOKUBGS"));

        					am_dokubgs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")));

        					this.dsList.setColumn(row, "AM_DOKUBGS",  am_dokubgs);
        				}

        				// 실행기성(금회)-금액 연산
        				var am_silhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_SILHENG")); // 실행금액-금액

        				am_silhenggs.divDecimal(nexacro.Decimal(100)); // 나누기 연산
        				am_silhenggs.mulDecimal(nexacro.Decimal(this.dsList.getColumn(row, "RT_TTHADOGS"))); // 곱 연산

        				this.dsList.setColumn(row, "AM_SILHENGGS", nexacro.floor(am_silhenggs, 0)); // 실행기성(금회)-금액

        				// 실행금액-금액 - 도급기성(전회)-금액 : 소스 변경 금지 : 이후 금액 연산 시 결과값 달라질 수 있음
        				if(am_silhenggs - this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS") > 0){
        					var am_silhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_SILHENGGS"));

        					am_silhenggs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")));

        					this.dsList.setColumn(row, "AM_SILHENGGS", am_silhenggs);
        				}

        				// 도급기성(누계)-금액 연산
        				var am_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_DOKUBGS"));

        				am_ttdokubgs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")));

        				this.dsList.setColumn(row, "AM_TTDOKUBGS", nexacro.floor(am_ttdokubgs, 0));

        				// 도급기성(잔여)-금액 연산
        				var j_am_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_DOKUB"));

        				j_am_ttdokubgs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TTDOKUBGS")));

        				this.dsList.setColumn(row, "J_AM_TTDOKUBGS", nexacro.floor(j_am_ttdokubgs, 0));

        				// 도급기성(누계)-기성율 연산
        				var rt_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTDOKUBGS"));

        				rt_ttdokubgs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_DOKUB"))); // 나누기 연산
        				rt_ttdokubgs.mulDecimal(nexacro.Decimal(100)); // 곱 연산

        				this.dsList.setColumn(row, "RT_TTDOKUBGS", nexacro.floor(rt_ttdokubgs, 2));

        				// 실행기성(누계)-금액 연산
        				var am_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_SILHENGGS"));

        				am_ttsilhenggs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTSILHENGGS")));

        				this.dsList.setColumn(row, "AM_TTSILHENGGS", nexacro.floor(am_ttsilhenggs, 0));

        				// 실행기성(잔여)-금액 연산
        				var j_am_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_SILHENG"));

        				j_am_ttsilhenggs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TTSILHENGGS")));

        				this.dsList.setColumn(row, "J_AM_TTSILHENGGS", nexacro.floor(j_am_ttsilhenggs, 0));

        				// 실행기성(누계)-기성율 연산
        				var rt_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTSILHENGGS")); // 실행기성(누계)-금액

        				rt_ttsilhenggs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_SILHENG"))); // 나누기 연산
        				rt_ttsilhenggs.mulDecimal(nexacro.Decimal(100)); // 곱 연산

        				this.dsList.setColumn(row, "RT_TTSILHENGGS", nexacro.floor(rt_ttsilhenggs, 2)); // 실행기성(누계)-기성율

        				// 잔여-기성율 연산
        				var j_rt_tthadogs = nexacro.Decimal(100);

        				j_rt_tthadogs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "RT_TTHADOGS")));

        				this.dsList.setColumn(row, "J_RT_TTHADOGS", nexacro.floor(j_rt_tthadogs, 2));
        			break;
        			// 도급기성(누계)-금액 수정 시
        			case "AM_TTDOKUBGS" :
        				// 도급기성(금회)-금액 연산
        				var am_dokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTDOKUBGS"));

        				am_dokubgs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")));

        				this.dsList.setColumn(row, "AM_DOKUBGS", nexacro.floor( am_dokubgs, 0));

        				// 도급기성(잔여)-금액 연산
        				var j_am_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_DOKUB"));

        				j_am_ttdokubgs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TTDOKUBGS")));

        				this.dsList.setColumn(row, "J_AM_TTDOKUBGS", nexacro.floor( j_am_ttdokubgs, 0));

        				// 도급기성(누계)-기성율 연산
        				var rt_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTDOKUBGS"));

        				rt_ttdokubgs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_DOKUB"))); // 나누기 연산
        				rt_ttdokubgs.mulDecimal(nexacro.Decimal(100)); // 곱 연산

        				this.dsList.setColumn(row, "RT_TTDOKUBGS", nexacro.floor(rt_ttdokubgs, 2)); // 도급기성(누계)-기성율
        			break;
        			// 실행기성(누계)-금액 수정 시
        			case "AM_TTSILHENGGS" :
        				// 실행기성(금회)-금액 연산
        				var am_silhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTSILHENGGS"));

        				am_silhenggs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTSILHENGGS")));

        				this.dsList.setColumn(row, "AM_SILHENGGS", nexacro.floor(am_silhenggs, 0));

        				// 실행기성(잔여)-금액 연산
        				var j_am_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_SILHENG"));

        				j_am_ttsilhenggs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TTSILHENGGS")));

        				this.dsList.setColumn(row, "J_AM_TTSILHENGGS", nexacro.floor(j_am_ttsilhenggs, 0));

        				// 실행기성(누계)-기성율 연산
        				var rt_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTSILHENGGS")); // 실행기성(누계)-금액

        				rt_ttsilhenggs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_SILHENG"))); // 나누기 연산
        				rt_ttsilhenggs.mulDecimal(nexacro.Decimal(100)); // 곱 연산

        				this.dsList.setColumn(row, "RT_TTSILHENGGS", nexacro.floor(rt_ttsilhenggs, 2)); // 실행기성(누계)-기성율
        			break;
        			// 누계-수량 수정 시
        			case "QN_TTHADOGS" :
        				// 식공종여부가 Y가 아닌 경우
        				if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        					// 당회-수량 연산
        					var qn_hadogs = nexacro.Decimal(this.dsList.getColumn(row, "QN_TTHADOGS"));

        					qn_hadogs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_QN_TTHADOGS"))); // 감산

        					this.dsList.setColumn(row, "QN_HADOGS", qn_hadogs);

        					// 당회-금액 연산
        					var am_hadogs = nexacro.Decimal(this.dsList.getColumn(row, "QN_HADOGS")); // 당회-수량

        					am_hadogs.mulDecimal(nexacro.Decimal(this.dsList.getColumn(row, "UP_TT_HADO"))); // 곱 연산

        					this.dsList.setColumn(row, "AM_HADOGS", nexacro.floor(am_hadogs, 0)); // 당회-금액

        					// 누계-수량 연산
        					var qn_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "PRE_QN_TTHADOGS"));

        					qn_tthadogs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "QN_HADOGS"))); //합산

        					this.dsList.setColumn(row, "QN_TTHADOGS", qn_tthadogs);

        					// 잔여-수량 연산
        					var j_qn_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "QN_TT_HADO"));

        					j_qn_tthadogs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "QN_TTHADOGS")));

        					this.dsList.setColumn(row, "J_QN_TTHADOGS", nexacro.floor(j_qn_tthadogs, 3));

        					// 누계-금액 연산
        					var am_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTHADOGS"));

        					am_tthadogs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_HADOGS")));
        					this.dsList.setColumn(row, "AM_TTHADOGS", nexacro.floor(am_tthadogs, 0));

        					// 잔여-금액 연산
        					var j_am_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_HADO"));

        					j_am_tthadogs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TTHADOGS")));

        					this.dsList.setColumn(row, "J_AM_TTHADOGS", nexacro.floor(j_am_tthadogs, 0));

        					// 도급금액-수량이나 도급금액-단가가 0일 경우 도급기성(누계, 금회)-수량, 도급기성(누계, 금회)-금액 0으로 처리
        					if(this.dsList.getColumn(row, "QN_TT_DOKUB") == 0 || this.dsList.getColumn(row, "UP_TT_DOKUB") == 0){
        						this.dsList.setColumn(row, "QN_TTDOKUBGS", 0); // 도급기성(누계)-수량
        						this.dsList.setColumn(row, "AM_TTDOKUBGS", 0); // 도급기성(누계)-금액
        						this.dsList.setColumn(row, "QN_DOKUBGS", 0); // 도급기성(금회)-수량
        						this.dsList.setColumn(row, "AM_DOKUBGS", 0); // 도급기성(금회)-금액
        					}else{
        						// 도급기성(금회)-수량 연산
        						this.dsList.setColumn(row, "QN_DOKUBGS", this.dsList.getColumn(row, "QN_HADOGS"));

        						// 도급기성(금회)-금액 연산
        						var am_dokubgs = nexacro.Decimal(this.dsList.getColumn(row, "QN_HADOGS"));

        						am_dokubgs.mulDecimal(nexacro.Decimal(this.dsList.getColumn(row, "UP_TT_DOKUB")));

        						this.dsList.setColumn(row, "AM_DOKUBGS", nexacro.floor(am_dokubgs, 0));

        						// 도급기성(누계)-수량 연산
        						var qn_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "QN_DOKUBGS"));

        						qn_ttdokubgs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_QN_TTDOKUBGS")));

        						this.dsList.setColumn(row, "QN_TTDOKUBGS", nexacro.toNumber(qn_ttdokubgs, 3));

        						// 도급기성(누계)-금액 연산
        						var am_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "QN_DOKUBGS"));

        						am_ttdokubgs.mulDecimal(nexacro.Decimal(this.dsList.getColumn(row, "UP_TT_DOKUB")));
        						am_ttdokubgs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")));

        						this.dsList.setColumn(row, "AM_TTDOKUBGS", nexacro.floor(am_ttdokubgs, 0));
        					}

        					// 실행금액-수량이나 실행금액-단가가 0일 경우 실행기성(누계, 금회)-수량, 실행기성(누계, 금회)-금액 0으로 처리
        					if(this.dsList.getColumn(row, "QN_TT_SILHENG") == 0 || this.dsList.getColumn(row, "UP_TT_SILHENG") == 0){
        						this.dsList.setColumn(row, "QN_TTSILHENGGS", 0); // 실행기성(누계)-수량
        						this.dsList.setColumn(row, "AM_TTSILHENGGS", 0); // 실행기성(누계)-금액
        						this.dsList.setColumn(row, "QN_SILHENGGS", 0); // 실행기성(금회)-수량
        						this.dsList.setColumn(row, "AM_SILHENGGS", 0); // 실행기성(금회)-금액
        					}else{
        						// 실행기성(금회)-수량 연산
        						this.dsList.setColumn(row, "QN_SILHENGGS", this.dsList.getColumn(row, "QN_HADOGS"));

        						// 실행기성(금회)-금액 연산
        						var am_silhenggs = nexacro.Decimal(this.dsList.getColumn(row, "QN_HADOGS")); // 당회-수량

        						am_silhenggs.mulDecimal(nexacro.Decimal(this.dsList.getColumn(row, "UP_TT_SILHENG"))); // 곱 연산

        						this.dsList.setColumn(row, "AM_SILHENGGS", nexacro.floor(am_silhenggs, 0)); // 실행기성(금회)-금액

        						// 실행기성(누계)-수량 연산
        						var qn_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "QN_SILHENGGS"));

        						qn_ttsilhenggs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_QN_TTSILHENGGS")));

        						this.dsList.setColumn(row, "QN_TTSILHENGGS", nexacro.floor(qn_ttsilhenggs, 3));

        						// 실행기성(누계)-금액 연산
        						var am_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_SILHENGGS"));

        						am_ttsilhenggs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTSILHENGGS")));

        						this.dsList.setColumn(row, "AM_TTSILHENGGS", nexacro.floor(am_ttsilhenggs, 0));
        					}

        					// 도급기성(잔여)-수량 연산
        					var j_qn_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "QN_TT_DOKUB"));

        					j_qn_ttdokubgs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "QN_TTDOKUBGS")));

        					this.dsList.setColumn(row, "J_QN_TTDOKUBGS", nexacro.toNumber(j_qn_ttdokubgs, 3));

        					// 도급기성(잔여)-금액 연산
        					var j_am_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_DOKUB"));

        					j_am_ttdokubgs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TTDOKUBGS")));

        					this.dsList.setColumn(row, "J_AM_TTDOKUBGS", nexacro.floor(j_am_ttdokubgs, 0));

        					// 실행기성(잔여)-수량 연산
        					var j_qn_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "QN_TT_SILHENG"));

        					j_qn_ttsilhenggs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "QN_TTSILHENGGS")));

        					this.dsList.setColumn(row, "J_QN_TTSILHENGGS", nexacro.floor(j_qn_ttsilhenggs, 3));

        					// 실행기성(잔여)-금액 연산
        					var j_am_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_SILHENG"));

        					j_am_ttsilhenggs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TTSILHENGGS")));

        					this.dsList.setColumn(row, "J_AM_TTSILHENGGS", nexacro.floor(j_am_ttsilhenggs, 0));

        					// 당회-기성율 연산
        					var rt_hadogs = nexacro.Decimal(this.dsList.getColumn(row, "AM_HADOGS")); // 당회-금액

        					rt_hadogs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_HADO"))); // 나누기 연산
        					rt_hadogs.mulDecimal(nexacro.Decimal(100)); // 곱 연산

        					this.dsList.setColumn(row, "RT_HADOGS", nexacro.floor(rt_hadogs, 2)); // 당회-기성율

        					// 누계-기성율 연산
        					var rt_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTHADOGS")); // 누계-금액

        					rt_tthadogs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_HADO"))); // 나누기 연산
        					rt_tthadogs.mulDecimal(nexacro.Decimal(100)); // 곱 연산

        					this.dsList.setColumn(row, "RT_TTHADOGS", nexacro.floor(rt_tthadogs, 2)); // 누계-기성율

        					// 잔여-기성율 연산
        					var j_rt_tthadogs = nexacro.Decimal(100);

        					j_rt_tthadogs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "RT_TTHADOGS")));

        					this.dsList.setColumn(row, "J_RT_TTHADOGS", nexacro.floor(j_rt_tthadogs, 2));

        					// 도급기성(누계)-기성율 연산
        					var rt_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTDOKUBGS")); // 도급기성(누계)

        					rt_ttdokubgs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_DOKUB"))); // 나누기 연산
        					rt_ttdokubgs.mulDecimal(nexacro.Decimal(100)); // 곱 연산

        					this.dsList.setColumn(row, "RT_TTDOKUBGS", nexacro.floor(rt_ttdokubgs, 2)); // 도급기성(누계)-기성율

        					// 실행기성(누계)-기성율 연산
        					var rt_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTSILHENGGS")); // 실행기성(누계)-금액

        					rt_ttsilhenggs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_SILHENG"))); // 나누기 연산
        					rt_ttsilhenggs.mulDecimal(nexacro.Decimal(100)); // 곱 연산

        					this.dsList.setColumn(row, "RT_TTSILHENGGS", nexacro.floor(rt_ttsilhenggs, 2));	// 실행기성(누계)-기성율
        				}
        			break;
        			// 도급기성(누계)-수량 수정 시
        			case "QN_TTDOKUBGS" :
        				// 도급기성(금회)-수량 연산
        				var qn_dokubgs = nexacro.Decimal(this.dsList.getColumn(row, "QN_TTDOKUBGS"));

        				qn_dokubgs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_QN_TTDOKUBGS")));

        				this.dsList.setColumn(row, "QN_DOKUBGS", nexacro.floor(qn_dokubgs, 3));

        				// 도급기성(금회)-금액 연산
        				var am_dokubgs = nexacro.Decimal(this.dsList.getColumn(row, "QN_DOKUBGS")); // 도급기성(금회)-수량

        				am_dokubgs.mulDecimal(nexacro.Decimal(this.dsList.getColumn(row, "UP_TT_DOKUB"))); // 곱 연산

        				this.dsList.setColumn(row, "AM_DOKUBGS", nexacro.floor(am_dokubgs, 0)); // 도급기성(금회)-금액

        				// 도급기성(누계)-수량 연산
        				var qn_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "QN_DOKUBGS"));

        				qn_ttdokubgs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_QN_TTDOKUBGS")));

        				this.dsList.setColumn(row, "QN_TTDOKUBGS", nexacro.floor(qn_ttdokubgs, 3));

        				// 도급기성(누계)-금액 연산
        				var am_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "QN_DOKUBGS")); // 도급기성(금회)-수량

        				am_ttdokubgs.mulDecimal(nexacro.Decimal(this.dsList.getColumn(row, "UP_TT_DOKUB"))); // 곱 연산
        				am_ttdokubgs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")));

        				this.dsList.setColumn(row, "AM_TTDOKUBGS", nexacro.floor(am_ttdokubgs, 0));

        				// 도급기성(잔여)-수량 연산
        				var j_qn_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "QN_TT_DOKUB"));

        				j_qn_ttdokubgs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "QN_TTDOKUBGS")));

        				this.dsList.setColumn(row, "J_QN_TTDOKUBGS", nexacro.toNumber(j_qn_ttdokubgs, 3));

        				// 도급기성(잔여)-금액 연산
        				var j_am_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_DOKUB"));

        				j_am_ttdokubgs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TTDOKUBGS")));

        				this.dsList.setColumn(row, "J_AM_TTDOKUBGS", nexacro.floor(j_am_ttdokubgs, 0));

        				// 도급기성(누계)-기성율 연산
        				var rt_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTDOKUBGS")); // 도급기성(누계)-금액

        				rt_ttdokubgs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_DOKUB"))); // 나누기 연산
        				rt_ttdokubgs.mulDecimal(nexacro.Decimal(100)); // 곱 연산

        				this.dsList.setColumn(row, "RT_TTDOKUBGS", nexacro.floor(rt_ttdokubgs, 2)); // 도급기성(누계)-기성율
        			break;
        			// 실행기성(누계)-수량 수정 시
        			case "QN_TTSILHENGGS" :
        				// 실행기성(금회)-수량 연산
        				var qn_silhenggs = nexacro.Decimal(this.dsList.getColumn(row, "QN_TTSILHENGGS"));

        				qn_silhenggs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_QN_TTSILHENGGS")));

        				this.dsList.setColumn(row, "QN_SILHENGGS", nexacro.floor(qn_silhenggs, 3));

        				// 실행기성(금회)-금액 연산
        				var am_silhenggs = nexacro.Decimal(this.dsList.getColumn(row, "QN_SILHENGGS")); // 실행기성(금회)-수량

        				am_silhenggs.mulDecimal(nexacro.Decimal(this.dsList.getColumn(row, "UP_TT_SILHENG"))); // 곱 연산

        				this.dsList.setColumn(row, "AM_SILHENGGS", nexacro.floor(am_silhenggs, 0)); // 실행기성(금회)-금액

        				// 실행기성(누계)-수량 연산
        				var qn_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "QN_SILHENGGS"));

        				qn_ttsilhenggs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_QN_TTSILHENGGS")));

        				this.dsList.setColumn(row, "QN_TTSILHENGGS", nexacro.toNumber(qn_ttsilhenggs, 3));

        				// 실행기성(누계)-금액 연산
        				var am_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_SILHENGGS"));

        				am_ttsilhenggs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTSILHENGGS")));

        				this.dsList.setColumn(row, "AM_TTSILHENGGS", nexacro.floor(am_ttsilhenggs, 0));

        				// 실행기성(잔여)-수량 연산
        				var j_qn_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "QN_TT_SILHENG"));

        				j_qn_ttsilhenggs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "QN_TTSILHENGGS")));

        				this.dsList.setColumn(row, "J_QN_TTSILHENGGS", nexacro.floor(j_qn_ttsilhenggs, 3));

        				// 실행기성(잔여)-금액 연산
        				var j_am_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_SILHENG"));

        				j_am_ttsilhenggs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TTSILHENGGS")));

        				this.dsList.setColumn(row, "J_AM_TTSILHENGGS", nexacro.floor(j_am_ttsilhenggs, 0));

        				// 실행기성(누계)-기성율 연산
        				var rt_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTSILHENGGS")); // 실행기성(누계)-금액

        				rt_ttsilhenggs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_SILHENG"))); // 나누기 연산
        				rt_ttsilhenggs.mulDecimal(nexacro.Decimal(100)); // 곱 연산

        				this.dsList.setColumn(row, "RT_TTSILHENGGS", nexacro.floor(rt_ttsilhenggs, 2)); // 실행기성(누계)-기성율
        			break;
        			// 당회 수량 수정 시
        			case "QN_HADOGS" :
        				if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        					// 당회-금액
        					var am_hadogs = nexacro.Decimal(this.dsList.getColumn(row, "QN_HADOGS"));

        					am_hadogs.mulDecimal(nexacro.Decimal(this.dsList.getColumn(row, "UP_TT_HADO")));

        					this.dsList.setColumn(row, "AM_HADOGS", nexacro.floor(am_hadogs));

        					// 누계-수량
        					var qn_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "PRE_QN_TTHADOGS"));

        					qn_tthadogs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "QN_HADOGS")));
        					this.dsList.setColumn(row, "QN_TTHADOGS", nexacro.floor(qn_tthadogs));

        					// 누계-금액
        					var am_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTHADOGS"));

        					am_tthadogs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_HADOGS")));
        					this.dsList.setColumn(row, "AM_TTHADOGS", nexacro.floor(am_tthadogs));

        					// 잔여-수량
        					var j_qn_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "QN_TT_HADO"));

        					j_qn_tthadogs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "QN_TTHADOGS")));

        					this.dsList.setColumn(row, "J_QN_TTHADOGS", nexacro.floor(j_qn_tthadogs));

        					// 잔여-금액
        					var j_am_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_HADO"));

        					j_am_tthadogs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TTHADOGS")));

        					this.dsList.setColumn(row, "J_AM_TTHADOGS", nexacro.floor(j_am_tthadogs));

        					// 도급기성(금회)-수량
        					this.dsList.setColumn(row, "QN_DOKUBGS", this.dsList.getColumn(row, "QN_HADOGS"));

        					// 도급기성(금회)-금액
        					var am_dokubgs = nexacro.Decimal(this.dsList.getColumn(row, "QN_HADOGS"));

        					am_dokubgs.mulDecimal(nexacro.Decimal(this.dsList.getColumn(row, "UP_TT_DOKUB")));

        					this.dsList.setColumn(row, "AM_DOKUBGS", nexacro.floor(am_dokubgs));

        					// 실행기성(금회)-수량
        					this.dsList.setColumn(row, "QN_SILHENGGS", this.dsList.getColumn(row, "QN_HADOGS"));

        					// 실행기성(금회)-금액
        					var am_silhenggs = nexacro.Decimal(this.dsList.getColumn(row, "QN_HADOGS"));

        					am_silhenggs.mulDecimal(nexacro.Decimal(this.dsList.getColumn(row, "UP_TT_SILHENG")));

        					this.dsList.setColumn(row, "AM_SILHENGGS", nexacro.floor(am_silhenggs));

        					// 도급기성(누계)-수량
        					var qn_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "QN_DOKUBGS"));

        					qn_ttdokubgs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_QN_TTDOKUBGS")));

        					this.dsList.setColumn(row, "QN_TTDOKUBGS", nexacro.floor(qn_ttdokubgs));

        					// 도급기성(누계)-금액
        					var am_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "QN_DOKUBGS"));

        					am_ttdokubgs.mulDecimal(nexacro.Decimal(this.dsList.getColumn(row, "UP_TT_DOKUB")));
        					am_ttdokubgs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")));

        					this.dsList.setColumn(row, "AM_TTDOKUBGS", nexacro.floor(am_ttdokubgs));

        					// 실행기성(누계)-수량
        					var qn_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "QN_SILHENGGS"));

        					qn_ttsilhenggs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_QN_TTSILHENGGS")));

        					this.dsList.setColumn(row, "QN_TTSILHENGGS", nexacro.floor(qn_ttsilhenggs));

        					// 실행기성(누계)-금액
        					var am_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_SILHENGGS"));

        					am_ttsilhenggs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTSILHENGGS")));

        					this.dsList.setColumn(row, "AM_TTSILHENGGS", nexacro.floor(am_ttsilhenggs));

        					// 도급기성(잔여)-수량
        					var j_qn_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "QN_TT_DOKUB"));

        					j_qn_ttdokubgs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "QN_TTDOKUBGS")));

        					this.dsList.setColumn(row, "J_QN_TTDOKUBGS", nexacro.floor(j_qn_ttdokubgs));

        					// 도급기성(잔여)-금액
        					var j_am_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_DOKUB"));

        					j_am_ttdokubgs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TTDOKUBGS")));

        					this.dsList.setColumn(row, "J_AM_TTDOKUBGS", nexacro.floor(j_am_ttdokubgs));

        					// 실행기성(잔여)-수량
        					var j_qn_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "QN_TT_SILHENG"));

        					j_qn_ttsilhenggs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "QN_TTSILHENGGS")));

        					this.dsList.setColumn(row, "J_QN_TTSILHENGGS", nexacro.floor(j_qn_ttsilhenggs));

        					// 실행기성(잔여)-금액
        					var j_am_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_SILHENG"));

        					j_am_ttsilhenggs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TTSILHENGGS")));

        					this.dsList.setColumn(row, "J_AM_TTSILHENGGS", nexacro.floor(j_am_ttsilhenggs));

        					// 당회-기성율
        					var rt_hadogs = nexacro.Decimal(this.dsList.getColumn(row, "AM_HADOGS"));

        					rt_hadogs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_HADO")));
        					rt_hadogs.mulDecimal(nexacro.Decimal(100));

        					this.dsList.setColumn(row, "RT_HADOGS", nexacro.floor(rt_hadogs, 2));

        					// 누계-기성율
        					var rt_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTHADOGS"));

        					rt_tthadogs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_HADO")));
        					rt_tthadogs.mulDecimal(nexacro.Decimal(100));

        					this.dsList.setColumn(row, "RT_TTHADOGS", nexacro.floor(rt_tthadogs, 2));

        					// 잔여-기성율
        					var j_rt_tthadogs = nexacro.Decimal(100);

        					j_rt_tthadogs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "RT_TTHADOGS")));

        					this.dsList.setColumn(row, "J_RT_TTHADOGS", nexacro.floor(j_rt_tthadogs, 2));

        					// 도급기성(누계)-기성율
        					var rt_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTDOKUBGS"));

        					rt_ttdokubgs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_DOKUB")));
        					rt_ttdokubgs.mulDecimal(nexacro.Decimal(100));

        					this.dsList.setColumn(row, "RT_TTDOKUBGS", nexacro.floor(rt_ttdokubgs, 2));

        					// 실행기성(누계)-기성율
        					var rt_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTSILHENGGS"));

        					rt_ttsilhenggs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_SILHENG")));
        					rt_ttsilhenggs.mulDecimal(nexacro.Decimal(rt_ttsilhenggs));

        					this.dsList.setColumn(row, "RT_TTSILHENGGS", nexacro.floor(rt_ttsilhenggs, 2));
        				}
        			break;
        			// 당회 금액 수정 시
        			case "AM_HADOGS" :
        				if(this.dsList.getColumn(row, "YN_LSUNIT") != "Y"){
        					// 당회 수량
        // 					var qn_hadogs = nexacro.Decimal(this.dsList.getColumn(row, "AM_HADOGS"));
        //
        // 					qn_hadogs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "UP_TT_HADO")));
        //
        // 					this.dsList.setColumn(row, "QN_HADOGS", nexacro.floor(qn_hadogs, 3));

        					// 누계-수량
        					var qn_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "PRE_QN_TTHADOGS"));

        					qn_tthadogs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "QN_HADOGS")));
        					this.dsList.setColumn(row, "QN_TTHADOGS", nexacro.floor(qn_tthadogs));

        					// 도급기성(금회)-금액
        					var am_dokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_DOKUB"));

        					am_dokubgs.divDecimal(nexacro.Decimal(100));
        					am_dokubgs.mulDecimal(nexacro.Decimal(this.dsList.getColumn(row, "RT_TTHADOGS")));

        					this.dsList.setColumn(row, "AM_DOKUBGS", nexacro.floor(am_dokubgs, 0));

        					// 도급기성(금회)-금액 - 도급기성(전회)-금액 : 소스 변경 금지 : 이후 금액 연산 시 결과값 달라질 수 있음
        					if(am_dokubgs - this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")> 0){
        						var am_dokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_DOKUBGS"));

        						am_dokubgs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")));

        						this.dsList.setColumn(row, "AM_DOKUBGS", am_dokubgs);
        					}

        					// 실행기성(금회)-금액
        					var am_silhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_SILHENG"));

        					am_silhenggs.divDecimal(nexacro.Decimal(100));
        					am_silhenggs.mulDecimal(nexacro.Decimal(this.dsList.getColumn(row, "RT_TTHADOGS")));

        					this.dsList.setColumn(row, "AM_SILHENGGS", nexacro.floor(am_silhenggs, 0));

        					// 실행금액-금액 - 도급기성(전회)-금액 : 소스 변경 금지 : 이후 금액 연산 시 결과값 달라질 수 있음
        					if(am_silhenggs - this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS") > 0){
        						var am_silhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_SILHENGGS"));

        						am_silhenggs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")));

        						this.dsList.setColumn(row, "AM_SILHENGGS",  am_silhenggs);
        					}

        					// 도급기성(누계)-금액
        					var am_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_DOKUBGS"));

        					am_ttdokubgs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS")));

        					this.dsList.setColumn(row, "AM_TTDOKUBGS", nexacro.floor(am_ttdokubgs));

        					// 실행기성(누계)-금액
        					var am_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_SILHENGGS"));

        					am_ttsilhenggs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTSILHENGGS")));

        					this.dsList.setColumn(row, "AM_TTSILHENGGS", nexacro.floor(am_ttsilhenggs));

        					// 도급기성(잔여)-금액
        					var j_am_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_DOKUB"));

        					j_am_ttdokubgs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TTDOKUBGS")));

        					this.dsList.setColumn(row, "J_AM_TTDOKUBGS", nexacro.floor(j_am_ttdokubgs));

        					// 실행기성(잔여)-금액
        					var j_am_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_SILHENG"));

        					j_am_ttsilhenggs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TTSILHENGGS")));

        					this.dsList.setColumn(row, "J_AM_TTSILHENGGS", nexacro.floor(j_am_ttsilhenggs));

        					// 잔여-수량
        					var j_qn_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "QN_TT_HADO"));

        					j_qn_tthadogs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "QN_TTHADOGS")));

        					this.dsList.setColumn(row, "J_QN_TTHADOGS", nexacro.floor(j_qn_tthadogs));

        					// 도급기성(누계)-기성율
        					var rt_ttdokubgs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTDOKUBGS"));

        					rt_ttdokubgs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_DOKUB")));
        					rt_ttdokubgs.mulDecimal(nexacro.Decimal(100));

        					this.dsList.setColumn(row, "RT_TTDOKUBGS", nexacro.floor(rt_ttdokubgs, 2));

        					// 실행기성(누계)-기성율
        					var rt_ttsilhenggs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTSILHENGGS"));

        					rt_ttsilhenggs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_SILHENG")));
        					rt_ttsilhenggs.mulDecimal(nexacro.Decimal(100));

        					this.dsList.setColumn(row, "RT_TTSILHENGGS", nexacro.floor(rt_ttsilhenggs, 2));
        				}

        				// 누계-금액
        				var am_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTHADOGS"));

        				am_tthadogs.addDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_HADOGS")));
        				// PRE_AM_TTHADOGS + AM_HADOGS = AM_TTHADOGS
        				this.dsList.setColumn(row, "AM_TTHADOGS", nexacro.floor(am_tthadogs, 0));

        				// 잔여-금액
        				var j_am_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_HADO"));

        				j_am_tthadogs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TTHADOGS")));

        				this.dsList.setColumn(row, "J_AM_TTHADOGS", nexacro.floor(j_am_tthadogs, 0));

        				// 당회-기성율
        				var rt_hadogs = nexacro.Decimal(this.dsList.getColumn(row, "AM_HADOGS"));

        				rt_hadogs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_HADO")));
        				rt_hadogs.mulDecimal(nexacro.Decimal(100));

        				this.dsList.setColumn(row, "RT_HADOGS", nexacro.floor(rt_hadogs, 2));

        				// 누계-기성율(%)
        				var rt_tthadogs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TTHADOGS"));

        				rt_tthadogs.divDecimal(nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_HADO")));
        				rt_tthadogs.mulDecimal(nexacro.Decimal(100));

        				this.dsList.setColumn(row, "RT_TTHADOGS", nexacro.floor(rt_tthadogs, 2));

        				// 잔여-기성율
        				var j_rt_tthadogs = nexacro.Decimal(100);

        				j_rt_tthadogs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "RT_TTHADOGS")));

        				this.dsList.setColumn(row, "J_RT_TTHADOGS", nexacro.floor(j_rt_tthadogs, 2));
        			break;
        		}

        		this.setLastJAmt(row);

        		this.dsList.set_enableevent(true);
        	}
        }

        this.setLastJAmt = function(row){
        	if(this.dsList.getColumn(row, "DS_UNIT") != "식"){
        		trace("식 아님");
        		//도급누계 수량 초과 시
        		if(nexacro.floor(this.dsList.getColumn(row, "QN_TTDOKUBGS"), 3) > nexacro.floor(this.dsList.getColumn(row, "QN_TT_DOKUB"), 3) ){
        			this.dsList.setColumn(row, "QN_TTDOKUBGS", nexacro.floor(this.dsList.getColumn(row, "QN_TT_DOKUB"), 3));
        			this.fnCalcRow("QN_TTDOKUBGS", row);
        		}
        		//실행누계 수량 초과 시
        // 		if(nexacro.floor(this.dsList.getColumn(row, "QN_TTSILHENGGS"), 3) > nexacro.floor(this.dsList.getColumn(row, "QN_TT_SILHENG"), 3) ){
        // 			trace("QN_TTSILHENGGS =====> ", this.dsList.getColumn(row, "QN_TTSILHENGGS"));
        // 			trace("QN_TT_SILHENG =====> ", this.dsList.getColumn(row, "QN_TT_SILHENG"));
        //
        // 			this.dsList.setColumn(row, "QN_TTSILHENGGS", nexacro.floor(this.dsList.getColumn(row, "QN_TT_SILHENG"), 3));
        // 			this.fnCalcRow("QN_TTSILHENGGS", row);
        // 		}
        		if(nexacro.floor(this.dsList.getColumn(row, "QN_TTHADOGS"), 3) > nexacro.floor(this.dsList.getColumn(row, "QN_TT_HADO"), 3) ){

        			// 계약전체 수량 0이거나 0보다 크면
        			if(nexacro.floor(this.dsList.getColumn(row, "QN_TT_HADO"), 3) >= 0){
        				this.dsList.setColumn(row, "QN_TTHADOGS", nexacro.floor(this.dsList.getColumn(row, "QN_TT_HADO"), 3));
        				this.fnCalcRow("QN_TTHADOGS", row);
        			}else{
        				// 누계수량 0 보다 크면
        				if(nexacro.floor(this.dsList.getColumn(row, "QN_TTHADOGS"), 3) > 0){
        					this.dsList.setColumn(row, "QN_TTHADOGS", nexacro.floor(this.dsList.getColumn(row, "QN_TT_HADO"), 3));
        					this.fnCalcRow("QN_TTHADOGS", row);
        				}
        			}
        		}
        		// 선택업체 기성누계 금액 > 계약전체 금액
        		if(this.dsList.getColumn(row, "AM_TTHADOGS") > this.dsList.getColumn(row, "AM_TT_HADO")){
        			if(this.FormInfo.CD_MODULE == "DWB"){

        				// 계약전체 수량 0이거나 0보다 크면
        				if(this.dsList.getColumn(row, "AM_TT_HADO") >= 0){
        					this.dsList.setColumn(row, "AM_TTHADOGS", this.dsList.getColumn(row, "AM_TT_HADO"));
        					this.dsList.setColumn(row, "AM_HADOGS", this.dsList.getColumn(row, "AM_TT_HADO") - this.dsList.getColumn(row, "PRE_AM_TTHADOGS"));
        					this.fnCalcRow("AM_TTHADOGS", row);

        				}else{
        					// 누계수량 0 보다 크면
        					if(this.dsList.getColumn(row, "AM_TTHADOGS") > 0){
        						this.dsList.setColumn(row, "AM_TTHADOGS", this.dsList.getColumn(row, "AM_TT_HADO"));
        						this.dsList.setColumn(row, "AM_HADOGS", this.dsList.getColumn(row, "AM_TT_HADO") - this.dsList.getColumn(row, "PRE_AM_TTHADOGS"));
        						this.fnCalcRow("AM_TTHADOGS", row);
        					}
        				}

        			}
        		}

        		//외주_누계기성 수량과 외주_계약수량이 같을 시
        		if(nexacro.floor(this.dsList.getColumn(row, "QN_TTHADOGS"), 3) == nexacro.floor(this.dsList.getColumn(row, "QN_TT_HADO"), 3)){
        			//외주_누계기성 금액
        			this.dsList.setColumn(row, "AM_TTHADOGS", this.dsList.getColumn(row, "AM_TT_HADO"));
        			//외주_금회기성 수량
        			/*this.dsList.setColumn(row, "QN_HADOGS", this.dsList.getColumn(row, ""));*/
        			//외주_금회기성 금액
        			if(this.FormInfo.CD_MODULE == "DWB"){
        				this.dsList.setColumn(row, "AM_HADOGS", nexacro.toNumber(this.dsList.getColumn(row, "AM_TT_HADO") - this.dsList.getColumn(row, "PRE_AM_TTHADOGS"), 0));
        			}
        			//외주_잔여기성 수량
        			this.dsList.setColumn(row, "J_QN_TTHADOGS", 0);
        			//외주_잔여기성 금액
        			this.dsList.setColumn(row, "J_AM_TTHADOGS", 0);

        			//누계기성율
        			this.dsList.setColumn(row, "RT_TTHADOGS", nexacro.Decimal(100));

        			//잔여기성율
        			this.dsList.setColumn(row, "J_RT_TTHADOGS", 0);
        		}

        		//도급 수량 금액 있을 경우에만 동작하도록 한다.
        		if(this.dsList.getColumn(row, "QN_TT_DOKUB") > 0 && this.dsList.getColumn(row, "UP_TT_DOKUB") > 0){
        			//도급_누계기성 수량과 도급수량이 같을 시
        			if(nexacro.floor(this.dsList.getColumn(row, "QN_TTDOKUBGS"), 3) == nexacro.floor(this.dsList.getColumn(row, "QN_TT_DOKUB"), 3)){
        				//도급_누계기성 금액
        				this.dsList.setColumn(row, "AM_TTDOKUBGS", nexacro.toNumber(this.dsList.getColumn(row, "AM_TT_DOKUB"), 0));
        				//도급_금회기성 수량
        				/*this.dsList.setColumn(row, "QN_DOKUBGS", "");*/
        				//도급_금회기성 금액
        				this.dsList.setColumn(row, "AM_DOKUBGS", nexacro.toNumber(this.dsList.getColumn(row, "AM_TT_DOKUB") - this.dsList.getColumn(row, "PRE_AM_TTDOKUBGS"), 0));
        				//도급_잔여기성 수량
        				this.dsList.setColumn(row, "J_QN_TTDOKUBGS", 0);
        				//도급_잔여기성 금액
        				this.dsList.setColumn(row, "J_AM_TTDOKUBGS", 0);
        				//도급기성율(누계)
        				this.dsList.setColumn(row, "RT_TTDOKUBGS", nexacro.Decimal(100));
        			}
        		}

        		//실행 수량 금액 있을 경우에만 동작하도록 한다.
        		if(this.dsList.getColumn(row, "QN_TT_SILHENG") > 0 && this.dsList.getColumn(row, "UP_TT_SILHENG") > 0){
        			//실행_누계기성 수량과 실행수량이 같을 시
        			if(nexacro.floor(this.dsList.getColumn(row, "QN_TTSILHENGGS"), 3) == nexacro.floor(this.dsList.getColumn(row, "QN_TT_SILHENG"), 3)){
        				//실행_누계기성 금액
        				this.dsList.setColumn(row, "AM_TTSILHENGGS",nexacro.toNumber(this.dsList.getColumn(row, "AM_TT_SILHENG"), 0));
        				//실행_금회기성 수량
        				/*this.dsList.setColumn(row, "QN_SILHENGGS", "");*/
        				//실행_금회기성 금액
        				this.dsList.setColumn(row, "AM_SILHENGGS", nexacro.toNumber(this.dsList.getColumn(row, "AM_TT_SILHENG") - this.dsList.getColumn(row, "PRE_AM_TTSILHENGGS"), 0));
        				//실행_잔여기성 수량
        				this.dsList.setColumn(row, "J_QN_TTSILHENGGS", 0);
        				//실행_잔여기성 금액
        				this.dsList.setColumn(row, "J_AM_TTSILHENGGS", 0);
        				//실행기성율(누계)
        				this.dsList.setColumn(row, "RT_TTSILHENGGS", nexacro.Decimal(100));
        			}
        		}
        	}else{
        		//trace("식");
        		//도급누계 금액 초과 시
        // 		if(nexacro.floor(this.dsList.getColumn(row, "AM_TTDOKUBGS"),0) > nexacro.floor(this.dsList.getColumn(row, "AM_TT_DOKUB"),0) ){
        // 			this.dsList.setColumn(row, "AM_TTDOKUBGS", nexacro.toNumber(this.dsList.getColumn(row, "AM_TT_DOKUB"),0));
        // 			this.fnCalcRow("AM_TTDOKUBGS", row);
        // 		}
        		//실행누계 금액 초과 시
        // 		if(nexacro.floor(this.dsList.getColumn(row, "AM_TTSILHENGGS"),0) > nexacro.floor(this.dsList.getColumn(row, "AM_TT_SILHENG"),0) ){
        // 			this.dsList.setColumn(row, "AM_TTSILHENGGS", nexacro.toNumber(this.dsList.getColumn(row, "AM_TT_SILHENG"),3));
        // 			this.fnCalcRow("AM_TTSILHENGGS", row);
        // 		}

        		if((nexacro.floor(this.dsList.getColumn(row, "AM_HADOGS"), 3) > nexacro.floor(this.dsList.getColumn(row, "AM_TT_HADO"), 3)) && this.dsList.getColumn(row, "AM_TT_HADO") > 0){
        			var am_hadogs = nexacro.Decimal(this.dsList.getColumn(row, "AM_TT_HADO"));
        			//am_hadogs.subDecimal(nexacro.Decimal(this.dsList.getColumn(row, "PRE_AM_TTHADOGS"))); // -68520
        			this.dsList.setColumn(row, "AM_HADOGS", nexacro.floor(am_hadogs, 3));

        			this.fnCalcRow("AM_HADOGS", row);
        		}
        	}
        }

        //내역자료복사(전자조달)
        this.fnCopyVndr = function(obj, e){
        //alert(this.ucFlag);
        	this.copyFlag = false;
        	if(this.dsStatus.getColumn(0,"TY_APPROVALB2B") == '1' || this.dsStatus.getColumn(0,"TY_APPROVALB2B") == '2'){
        		if(this.dsStatus.getColumn(0,"YN_PERMIT") == "N"){
        			this.copyFlag = true;
        		}
        	}
        	if(!this.copyFlag){
        		this.gfnAlert("업체청구상태가 [청구완료]이고 기성확정상태가 [미확정]인 기성건만 복사할 수 있습니다.");
        		return;
        	}

           //this.imgLoading.set_visible(true);

           this.dsList.set_enableevent(false);
           for(var i = 0; i < this.dsList.rowcount; i++) {

        		if(this.dsList.getColumn(i, "YN_COST") == "Y" && this.dsList.getColumn(i, "YN_EDIT") == "Y")  {
        		this.dsList.setColumn(i, "QN_HADOGS", this.dsList.getColumn(i, "QN_HADOGS_VNDR"));
        		this.dsList.setColumn(i, "AM_HADOGS", this.dsList.getColumn(i, "AM_HADOGS_VNDR"));

        		if(this.dsList.getColumn(i, "DS_UNIT") != "식" ){
        			this.dsList.setColumn(i, "QN_TTHADOGS", nexacro.toNumber(this.dsList.getColumn(i, "PRE_QN_TTHADOGS") + this.dsList.getColumn(i, "QN_HADOGS_VNDR"),3));
        		}

        		this.dsList.setColumn(i, "AM_TTHADOGS", nexacro.floor(this.dsList.getColumn(i, "PRE_AM_TTHADOGS") + this.dsList.getColumn(i, "AM_HADOGS_VNDR"),0));
        		this.dsList.setColumn(i, this.ucFlag, "U");
        	  }
           }
           this.dsList.set_enableevent(true);
           for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "YN_COST") == "Y" && this.dsList.getColumn(i, "YN_EDIT") == "Y")  {


        			if(this.dsList.getColumn(i, "DS_UNIT") != "식" ){
        				this.fnCalcRow("QN_TTHADOGS", i);
        			}else{
        				this.fnCalcRow("AM_TTHADOGS", i);
        			}
        	  }
           }

           this.FormBtns.Save.set_enable(true);

        };


        //내역자료복사(PMIS)
        this.fnCopyPmis = function(obj, e){
          //[청구완료] AND 기성확정상태 = [미확정]) SP Validation [MSG]

           //this.dsList.set_enableevent(false);
           for(var i = 0; i < this.dsList.rowcount; i++) {
             if(this.dsList.getColumn(i, "YN_COST") == "Y" && this.dsList.getColumn(i, "YN_EDIT") == "Y") {
                 this.dsList.setColumn(i, "QN_HADOGS", this.dsList.getColumn(i, "QN_HADOGS_PMIS"));
                 this.dsList.setColumn(i, "AM_HADOGS", this.dsList.getColumn(i, "AM_HADOGS_PMIS"));
                 this.fnCalcRow("QN_HADOGS", i);
                 this.fnCalcRow("AM_HADOGS", i);
              }
           }
           //this.dsList.set_enableevent(true);
        };

        //예산현황
        this.fnCostTuja = function(obj, e){

        	if(!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("데이터를 선택해주세요.");
        		return false;
        	}

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE =  this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.CD_COST = this.dsList.getColumn(this.dsList.rowposition, "CD_COST");
        	param.CD_DKCOST = this.dsList.getColumn(this.dsList.rowposition, "CD_DKCOST");
        	param.DS_COST = this.dsList.getColumn(this.dsList.rowposition, "DS_COST");
        	param.SZ_SIZE = this.dsList.getColumn(this.dsList.rowposition, "SZ_SIZE");
        	param.DS_UNIT = this.dsList.getColumn(this.dsList.rowposition, "DS_UNIT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWX_COSTTUJA", "", param);
        };

        // 기성청구요청통보
        this.fnReqB2b = function(obj, e){
        	this.dsExecGisung.clearData();
        	var nrow = this.dsExecGisung.addRow();

        	this.dsExecGisung.setColumn(nrow, "TY_WRK", "REQ");
        	this.dsExecGisung.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExecGisung.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExecGisung.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsExecGisung.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        	this.dsExecGisung.setColumn(nrow, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	this.dsExecGisung.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

        	var strSvcId    = "exec_ReqB2B";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec_gisung=dsExecGisung";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg,			// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnExecReqB2B_callback = function()
        {
        	var url = "/buyer/earned/earned_edit_notice_pop.do";
        	var param = "";
        	param += "&poNo=" + this.dsSearch.getColumn(0, "NO_HADOCONT");
        	param += "&aeDate=" + this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_WORK"));
        	param += "&vendorCd=" + this.divSearch.form.ctxtCD_VENDOR_SAP.text;
        	param += "&siteCd=" + this.dsSearch.getColumn(0, "CD_SITE");

        	this.gfnOpenEPS(url, param);
        }

        this.fnAtchB2b = function(obj, e){
        	if(this.YN_B2B == "Y")
        	{
        		var url = "/buyer/earned/earned_edit_pop.do";
        		var param = "";
        		param += "&poNo=" + this.dsSearch.getColumn(0, "NO_HADOCONT");
        		param += "&aeDate=" + this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_WORK"));
        		param += "&vendorCd=" + this.divSearch.form.ctxtCD_VENDOR_SAP.text;
        		param += "&siteCd=" + this.dsSearch.getColumn(0, "CD_SITE");

        		this.gfnOpenEPS(url, param);
        	}
        }

        this.fnCncB2b = function(obj, e){
        	if(this.YN_B2B == "Y")
        	{
        		var url = "/buyer/earned/earned_edit_notice_pop.do";
        		var param = "";
        		param += "&poNo=" + this.dsSearch.getColumn(0, "NO_HADOCONT");
        		param += "&aeDate=" + this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_WORK"));
        		param += "&vendorCd=" + this.divSearch.form.ctxtCD_VENDOR_SAP.text;
        		param += "&siteCd=" + this.dsSearch.getColumn(0, "CD_SITE");

        		this.gfnOpenEPS(url, param);
        	}
        }

        this.fnDeleteAll = function(obj, e){
        	this.gfnConfirm("해당 기성내역을 일괄삭제하시겠습니까?", "fnDeleteAll_Confirm");
        }

        this.fnDeleteAll_Confirm = function(strId, val) {
        	if(val == true) {
        		this.dsDeleteAll.clearData();

        		this.dsDeleteAll.addRow();

        		this.dsDeleteAll.setColumn(0, "TY_WRK", "DD");
        		this.dsDeleteAll.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsDeleteAll.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsDeleteAll.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        		this.dsDeleteAll.setColumn(0, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        		this.dsDeleteAll.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        		this.dsDeleteAll.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

        		if (this.dsDeleteAll.rowcount == 0) return;

        		var strSvcId    = "deleteAll";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "save=dsDeleteAll";
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

        /*
        // 협력사 청구 체크박스 이벤트
        this.divSearch_cchkHADOGS_VNDR_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var temp = this.dsChangeColumn.getColumn(0, "HADOGS_VNDR");
        		var columnNames = temp.split('|');

        		this.fnSetGridSize(e.postvalue, columnNames, 100);
        	}
        };
        */
        /*
        // PMIS 체크박스 이벤트
        this.divSearch_cchkHADOGS_PMIS_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var temp = this.dsChangeColumn.getColumn(0, "HADOGS_PMIS");
        		var columnNames = temp.split('|');

        		this.fnSetGridSize(e.postvalue, columnNames, 100);
        	}
        };
        */
        /*
        // 계약금액 체크박스 이벤트
        this.divSearch_cchkHADOGS_CONTAMT_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var temp = this.dsChangeColumn.getColumn(0, "HADOGS_HADO");
        		var columnNames = temp.split('|');

        		this.fnSetGridSize(e.postvalue, columnNames, 100);
        	}
        };
        */
        /*
        // 전회누계 체크박스 이벤트
        this.divSearch_cchkHADOGS_PRETOT_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var temp = this.dsChangeColumn.getColumn(0, "HADOGS_PRETOT");
        		var columnNames = temp.split('|');

        		//기성률 60
        		//PRE_RT_TTHADOGS


        		this.fnSetGridSize(e.postvalue, columnNames, 100);
        	}
        };
        */
        /*
        // 누계기성 체크박스 이벤트
        this.divSearch_cchkHADOGS_GISUNGTOT_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var temp = this.dsChangeColumn.getColumn(0, "HADOGS_GISUNGTOT");
        		var columnNames = temp.split('|');

        		//외주,도급,실행 기성율 60
        		//RT_TTHADOGS RT_TTDOKUBGS RT_TTSILHENGGS



        		this.fnSetGridSize(e.postvalue, columnNames, 100);
        	}
        };
        */
        /*
        // 잔여기성 체크박스 이벤트
        this.divSearch_cchkHADOGS_REMGISUNG_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var temp = this.dsChangeColumn.getColumn(0, "HADOGS_REMGISUNG");
        		var columnNames = temp.split('|');

        		//외주기성 잔여 기성율 60
        		//J_RT_TTHADOGS

        		this.fnSetGridSize(e.postvalue, columnNames, 100);
        	}
        };
        */

        // 그리드 변경 함수.
        this.fnSetGridSize = function(check, columnNames, width)
        {
        	for(var k = 0; k < this.dxGrid.getFormatColCount(); k++){
              var ds_field = this.dxGrid.getCellProperty("body", k, "text");
              if(ds_field.indexOf("bind:") > -1) {
                 ds_field = ds_field.replace("bind:", "");

        		 for(var i=0; i < columnNames.length; i++)
        		 {
        			 if(ds_field == columnNames[i])
        			 {
        				if(ds_field == "PRE_RT_TTHADOGS" || ds_field == "RT_TTHADOGS" || ds_field == "RT_TTDOKUBGS" || ds_field == "RT_TTSILHENGGS" || ds_field == "J_RT_TTHADOGS"){
        					width = 60;
        				}else if(ds_field == "QN_TT_HADO" ||"PRE_QN_TTHADOGS"||"QN_HADOGS_VNDR" ||"QN_TTHADOGS_VNDR" ||"QN_HADOGS" ||"J_QN_TTHADOGS" ||"QN_TT_SILHENG" ||"PRE_QN_TTSILHENGGS" ||"QN_SILHENGGS" ||"QN_TTSILHENGGS" ||"J_QN_TTSILHENGGS"){
        					width = 70;

        			    }

        				if(check == false) width = 0;

        				this.dxGrid.setFormatColProperty(k, "size", width);

        				break;
        			 }
        		 }
              }
           }
        }


        // 첨부파일(현장)
        this.fnAttachFileSite = function(obj, e) {

            var cd_site = this.dsSearch.getColumn(0, "CD_SITE");
        	var no_dgr = this.dsSearch.getColumn(0, "NO_DGR");
        	var no_hadocont = this.dsSearch.getColumn(0, "NO_HADOCONT");
        	var cd_vendor = this.dsSearch.getColumn(0, "CD_VENDOR");

            var fileManager = {};
            fileManager.CD_GUBUN = "DWB1";
        	fileManager.CD_DIR = [ cd_site, no_dgr, no_hadocont, cd_vendor, 'SITE' ];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

            this.gfnFileManager(fileManager, "fnFileCallback");
        }

        // 첨부파일(업체)
        this.fnAttachFileVndr = function(obj, e) {

            var cd_site = this.dsSearch.getColumn(0, "CD_SITE");
        	var no_dgr = this.dsSearch.getColumn(0, "NO_DGR");
        	var no_hadocont = this.dsSearch.getColumn(0, "NO_HADOCONT");
        	var cd_vendor = this.dsSearch.getColumn(0, "CD_VENDOR");
        	var ym_work = this.dsSearch.getColumn(0, "YM_WORK");

        	var cdRef2 = (ym_work <= "202204")? no_dgr : (ym_work + no_dgr + "");

            var fileManager = {};
            fileManager.CD_GUBUN = "DWB2";
        	fileManager.CD_DIR = [ cd_site, cdRef2, no_hadocont, cd_vendor, 'VNDR' ];
        	fileManager.IS_READONLY = false;

            this.gfnFileManager(fileManager, "fnFileCallback");
        }

        //기성청구반려 버튼 이벤트
        this.fnRstorDlg = function(obj, e){
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE =  this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        	param.NO_DGR = this.dsSearch.getColumn(0, "NO_DGR");
        	param.NO_HADOCONT = this.dsSearch.getColumn(0, "NO_HADOCONT");
        	param.DS_HADOCONT = this.divSearch.form.ccfNO_HADOCONT.form.DSTextBox.text;
        	param.CD_VENDOR = this.dsSearch.getColumn(0, "CD_VENDOR");
        	param.DS_VENDOR = this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.text;
        	param.DS_CONTMETHOD = this.getOwnerFrame().DS_CONTMETHOD;

        	this.gfnFormOpenNonAuth("DWB", "DWB_HDGISUNGRSTORDLG", "fnDialogCallback", param);
        };

        this.fnDialogCallback = function()
        {
        	this.FormBtns.Select.click();
        }


        //변경사유 버튼 이벤트
        this.fnChgRsnDlg = function(){
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE =  this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        	param.NO_DGR = this.dsSearch.getColumn(0, "NO_DGR");
        	param.NO_HADOCONT = this.dsSearch.getColumn(0, "NO_HADOCONT");
        	param.DS_HADOCONT = this.divSearch.form.ccfNO_HADOCONT.form.DSTextBox.text;
        	param.CD_VENDOR = this.dsSearch.getColumn(0, "CD_VENDOR");
        	param.DS_VENDOR = this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.text;
        	param.DS_CONTMETHOD = this.getOwnerFrame().DS_CONTMETHOD;
        	var msg = this.dsStatus.getColumn(0,"CHG_RSN");
        	param.CHG_RSN = msg;


        	this.gfnFormOpenNonAuth("DWB", "DWB_HDGISUNGCHGRSN", "fnChgRsnDlg_callback", param);
        };

        this.fnChgRsnDlg_callback = function(rtn,gubun){
        	if(gubun == true){
        		this.fnExec();
        		this.FormBtns.Select.click();
        	}
        }

        // 전체잔여(공동수급사) 체크박스
        this.divSearch_chkTY_CONTS_onchanged = function(obj,e)
        {
        	var QN_ALL_TTHADOGS_Index = this.dxGrid.getBindCellIndex("body", "QN_ALL_TTHADOGS");
        	var AM_ALL_TTHADOGS_Index = this.dxGrid.getBindCellIndex("body", "AM_ALL_TTHADOGS");
        	var J_QN_ALL_TTHADOGS_Index = this.dxGrid.getBindCellIndex("body", "J_QN_ALL_TTHADOGS");
        	var J_AM_ALL_TTHADOGS_Index = this.dxGrid.getBindCellIndex("body", "J_AM_ALL_TTHADOGS");

        	if(obj.isChecked())
        	{
        		this.dxGrid.setRealColSize("body", QN_ALL_TTHADOGS_Index, 80);
        		this.dxGrid.setRealColSize("body", AM_ALL_TTHADOGS_Index, 100);
        		this.dxGrid.setRealColSize("body", J_QN_ALL_TTHADOGS_Index, 80);
        		this.dxGrid.setRealColSize("body", J_AM_ALL_TTHADOGS_Index, 100);
        	}
        	else
        	{
        		this.dxGrid.setRealColSize("body", QN_ALL_TTHADOGS_Index, 0);
        		this.dxGrid.setRealColSize("body", AM_ALL_TTHADOGS_Index, 0);
        		this.dxGrid.setRealColSize("body", J_QN_ALL_TTHADOGS_Index, 0);
        		this.dxGrid.setRealColSize("body", J_AM_ALL_TTHADOGS_Index, 0);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cchkHADOGS_VNDR.addEventHandler("onchanged",this.divSearch_cchkHADOGS_VNDR_onchanged,this);
            this.divSearch.form.cchkHADOGS_CONTAMT.addEventHandler("onchanged",this.divSearch_cchkHADOGS_CONTAMT_onchanged,this);
            this.divSearch.form.cchkHADOGS_PRETOT.addEventHandler("onchanged",this.divSearch_cchkHADOGS_PRETOT_onchanged,this);
            this.divSearch.form.cchkHADOGS_GISUNGTOT.addEventHandler("onchanged",this.divSearch_cchkHADOGS_GISUNGTOT_onchanged,this);
            this.divSearch.form.cchkHADOGS_REMGISUNG.addEventHandler("onchanged",this.divSearch_cchkHADOGS_REMGISUNG_onchanged,this);
            this.divSearch.form.cchkHADOGS_PMIS.addEventHandler("onchanged",this.divSearch_cchkHADOGS_PMIS_onchanged,this);
            this.divSearch.form.chkTY_CONTS.addEventHandler("onchanged",this.divSearch_chkTY_CONTS_onchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("onload",this.dsList_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsStatus.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsStatus.addEventHandler("onload",this.dsList_onload,this);
        };
        this.loadIncludeScript("DWB_HDGISUNGMONTH_DETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
