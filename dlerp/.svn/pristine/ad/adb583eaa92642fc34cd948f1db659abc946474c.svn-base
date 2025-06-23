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
            this.set_titletext("자재전표발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWBPR_HDGISUNGSLIP_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DWBPR_HDGISUNGMONTH_MAX_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DWBPR_HDGISUNGSLIP_EXECUTE</Col></Row><Row><Col id=\"TARGET\">exemo</Col><Col id=\"SP\">DWBPR_HDGISUNGMONTH_MAGAM_OK</Col></Row><Row><Col id=\"TARGET\">exemc</Col><Col id=\"SP\">DWBPR_HDGISUNGMONTH_MAGAM_CANCEL</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWBPR_HDGISUNGSLIP_UPDATE</Col></Row><Row><Col id=\"TARGET\">sapauto</Col><Col id=\"SP\">DWZPR_SAP_AUTOSLIP_ISSUE_SELECT</Col></Row><Row><Col id=\"TARGET\">sapauto_cancel</Col><Col id=\"SP\">DWZPR_SAP_AUTOSLIP_CANCEL_SELECT</Col></Row><Row><Col id=\"TARGET\">appSelect</Col><Col id=\"SP\">DWBPR_APP_DW01_SELECT</Col></Row><Row><Col id=\"TARGET\">appChk</Col><Col id=\"SP\">DWBPR_APP_DW01_CHK</Col></Row><Row><Col id=\"TARGET\">exec_etax</Col><Col id=\"SP\">DWBPR_ETAX_EXECUTE</Col></Row><Row><Col id=\"TARGET\">appSlipChk</Col><Col id=\"SP\">DMBPR_SLIP_CHK</Col></Row><Row><Col id=\"TARGET\">ledgerRpt</Col><Col id=\"SP\">DWBPR_HDGISUNG_REPORT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DGR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/><Col id=\"NO_DGR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_DGR", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChangeColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_PREPAY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PAYSCHD\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GONGJAE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_REAL_TOT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AM_PREPAY\">AM_PREPAY_TAX|AM_PREPAY_TXFR|AM_PREPAY_VAT|AM_PREPAY_PROV</Col><Col id=\"AM_PAYSCHD\">AM_PAYSCHD_TAX|AM_PAYSCHD_TXFR|AM_PAYSCHD_PROV|AM_PAYSCHD_VAT|AM_PAYSCHD_TOT</Col><Col id=\"AM_GONGJAE\">AM_GONGJAE1|AM_GONGJAE3|AM_GONGJAE5|AM_GONGJAE_TOT|AM_GONGJAE2|AM_GONGJAE3VAT|AM_GONGJAE4|AM_GONGJAE6|AM_GONGJAE6VAT</Col><Col id=\"AM_REAL_TOT\">AM_REAL_TOT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAM_GONGJAE", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_GONGJAE1\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJAE3\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJAE5\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJAE_TOT\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJAE2\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJAE3VAT\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJAE4\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJAE6\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJAE6VAT\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfSite","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboNO_DGR","ccfSite:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsNO_DGR");
            obj.set_datacolumn("DS_DGR");
            obj.set_codecolumn("NO_DGR");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","cboNO_DGR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkAM_PREPAY","ctclYM_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("선급금");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkAM_PAYSCHD","cchkAM_PREPAY:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("지급예정");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkAM_GONGJAE","cchkAM_PAYSCHD:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("공제금");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkAM_REAL_TOT","cchkAM_PAYSCHD:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("실집행금");
            obj.set_value("true");
            obj.set_visible("false");
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
            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfSite.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboNO_DGR","value","dsSearch","NO_DGR");
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
        this.addIncludeScript("DWB_HDGISUNGSLIP_M.xfdl",'lib::libCommon.xjs');
        this.registerScript("DWB_HDGISUNGSLIP_M.xfdl", function() {
        this.executeIncludeScript('lib::libCommon.xjs'); /*include 'lib::libCommon.xjs'*/
        this.objApp = this.gfnGetApplication();
        this.selSlipNo;
        var yn_Gw = ""; // 링크로 페이지 오픈 했는지 유무

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//va
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YM_WORK))
        	{
        		this.dsSearch.setColumn(0,"CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0,"YM_WORK", this.getOwnerFrame().YM_WORK);
        		this.ccfSite.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.ccfSite.form.fnCodeFindLoad();
        	}else{
        		// 10일까지는 전월로 표시한다
        		var today = this.gfnGetDate();
        		var day = today.substr(6,2);
        		var ymWork = "";
        		if(day < 11){
        			ymWork = this.gfnAddMonth(today,-1).substr(0,6);
        		}else{
        			ymWork = today.substr(0,6);
        		}

        		//this.dsSearch.setColumn(0,"YM_WORK",today.substr(0,6));
        		this.dsSearch.setColumn(0,"YM_WORK",ymWork);
        	}

        	// 링크로 페이지 오픈 했는지 유무
        	this.yn_Gw = this.getOwnerFrame().YN_GW;

        	// 기성차수 조회조건 보이기/숨기기
        	this.YN_DGR = this.gfnGetConfig("DW" , "YN_DGR");
        	if(this.YN_DGR != "Y")
        	{
        		this.divSearch.form.cboNO_DGR.set_width(0);
        		this.divSearch.form.cboNO_DGR.set_readonly(true);
        		this.divSearch.form.resetScroll();
        	}
        	else if(this.YN_DGR == "Y")
        	{
        		this.divSearch.form.cboNO_DGR.set_width(100);
        		this.divSearch.form.cboNO_DGR.set_readonly(false);
        		this.divSearch.form.resetScroll();
        	}

        	//this.btn1.set_enable(false);
        	this.fnGetAM_GONGJAE_Size();

        	// checkbox 이벤트 강제 실행. (grid width 조절 onLoad시 적용하기 위해서)
        	this.divSearch_cchkAM_PREPAY_onchanged(this.divSearch.form.cchkAM_PREPAY, {postvalue:false});
        	this.divSearch_cchkAM_PAYSCHD_onchanged(this.divSearch.form.cchkAM_PAYSCHD, {postvalue:false});
        	this.divSearch_cchkAM_GONGJAE_onchanged(this.divSearch.form.cchkAM_GONGJAE, {postvalue:false});
        	this.divSearch_cchkAM_REAL_TOT_onchanged(this.divSearch.form.cchkAM_REAL_TOT, {postvalue:true});

        	// 링크로 페이지 진입한 경우 버튼 Hidden처리
        	this.fnSetExBtn();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnHadoDj", "fnHadoDj");
        	this.btn2 = this.gfnFormButtonAdd("btnSlipIssue", "fnSlipIssue");
        	this.btn3 = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");
        	this.btn4 = this.gfnFormButtonAdd("btnSlipCancel", "fnSlipCancel");
        	this.btn5 = this.gfnFormButtonAdd("btnMagam", "fnMagam");
        	this.btn6 = this.gfnFormButtonAdd("btnMagamCancel", "fnMagamCancel");
        	this.btn7 = this.gfnFormButtonAdd("btnSgnReq", "fnSgnReq");
            //this.btn8 = this.gfnFormButtonAdd("btnSlipIssueSap", "fnSlipIssueSap");
        	//this.btn9 = this.gfnFormButtonAdd("btnSlipCancelSap", "fnSlipCancelSap");
        	this.btn10 = this.gfnFormButtonAdd("btnHdGisungSplt", "fnHdGisungSplt");
        	this.btn11 = this.gfnFormButtonAdd("btnApp", "fnApp");
        	this.btn12 = this.gfnFormButtonAdd("btnAppCancel", "fnAppCancel");
        	this.btn13 = this.gfnFormButtonAdd("btnBill", "fnBill");
        	this.btnLedgerRpt = this.gfnFormButtonAdd("BTN_LEDGER_RPT", "fnLedger_rpt");

        	this.btn1.set_enable(false);
        	this.btn2.set_enable(false);
        	this.btn3.set_enable(false);
        	this.btn4.set_enable(false);
        	this.btn5.set_enable(false);
        	this.btn6.set_enable(false);
        	this.btn7.set_enable(false);
        	//this.btn8.set_enable(false);
        	//this.btn9.set_enable(false);
        	this.btn10.set_enable(false);
        	this.btn11.set_enable(false);
        	this.btn12.set_enable(false);
        	this.btn13.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfSite = this.divSearch.form.ccfSite;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_HDGISUNGSLIP", "DS_COST", "GR_COST");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_DGR", "string");
        	this.dsSelect.addColumn("DS_CONTMETHOD", "string");

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SITE", "string");
        	this.dsCombo.addColumn("YM_WORK", "string");
        	this.dsCombo.addColumn("DS_CONTMETHOD", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("YM_WORK", "string");
        	this.dsExec.addColumn("NO_HADOCONT", "string");
        	this.dsExec.addColumn("NO_DGR", "string");
        	this.dsExec.addColumn("CD_VENDOR", "string");
        	this.dsExec.addColumn("CD_DEPT", "string");
        	this.dsExec.addColumn("NO_SLIP", "string");
        	this.dsExec.addColumn("CD_ACCOUNT_D", "string");
        	this.dsExec.addColumn("TY_GUBUN", "string");

        	this.dsMa = new Dataset();
        	this.dsMa.addColumn("CD_SITE", "string");
        	this.dsMa.addColumn("YM_WORK", "string");
        	this.dsMa.addColumn("ID_UPDATE", "string");
        	this.dsMa.addColumn("NO_DGR", "string");
        	this.dsMa.addColumn("DS_CONTMETHOD", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("YMD_WORK", "string");
        	this.dsSave.addColumn("AM_GISUNG_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_PREPAY_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_JIKBUL", "bigdecimal");
        	this.dsSave.addColumn("CD_PAYMENT", "string");
        	this.dsSave.addColumn("DT_PAYMENT", "string");
        	this.dsSave.addColumn("CD_VATPROOF", "string");
        	this.dsSave.addColumn("DT_VATPROOF", "string");
        	this.dsSave.addColumn("YN_ETAX", "string");
        	this.dsSave.addColumn("YN_FORWARD", "string");
        	this.dsSave.addColumn("NO_VAT1", "string");
        	this.dsSave.addColumn("NO_VAT2", "string");
        	this.dsSave.addColumn("CONVERSATION_ID1", "string");
        	this.dsSave.addColumn("CONVERSATION_ID2", "string");
        	this.dsSave.addColumn("CONVERSATION_ID3", "string");
        	this.dsSave.addColumn("CD_ACCOUNT", "string");
        	this.dsSave.addColumn("YN_DIVTARGET", "string");
        	this.dsSave.addColumn("YN_JIKBUL", "string");
        	this.dsSave.addColumn("NO_DGR", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("YN_DEFER", "string");
        	this.dsSave.addColumn("NO_ACCOUNT", "string");

        	this.dsSapAuto = new Dataset();
        	this.dsSapAuto.addColumn("TY_WRK", "string");
        	this.dsSapAuto.addColumn("CD_AUTOSLIP", "string");
        	this.dsSapAuto.addColumn("NO_ERPKEY", "string");

        	this.dsAppParam = new Dataset();
        	this.dsAppParam.addColumn("ID_USER", "string");
        	this.dsAppParam.addColumn("CD_SITE", "string");
        	this.dsAppParam.addColumn("YM_WORK", "string");
        	this.dsAppParam.addColumn("NO_HADOCONTS", "string");
        	this.dsAppParam.addColumn("CD_ACCOUNT_D", "string");
        	this.dsAppParam.addColumn("ID_AP_TYPE", "string");

        	this.dsExecEtax = new Dataset();
        	this.dsExecEtax.addColumn("TY_WORK", "string");
        	this.dsExecEtax.addColumn("CD_SYSTEM", "string");
        	this.dsExecEtax.addColumn("CD_TRADE", "string");
        	this.dsExecEtax.addColumn("ID_INSERT", "string");

        	this.dsAppCheck = new Dataset();
        	this.dsAppCheck.addColumn("CD_SITE", "string");
        	this.dsAppCheck.addColumn("YM_ACT", "string");
        	this.dsAppCheck.addColumn("DS_MODULE", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("YM_WORK", "string");
        	this.dsExec.addColumn("NO_DGR", "string");
        	this.dsExec.addColumn("NO_ERPKEY", "string");
        	this.dsExec.addColumn("CD_DEPT", "string");
        	this.dsExec.addColumn("TY_GUBUN", "string");

        	this.dsSelectLedger = new Dataset();
        	this.dsSelectLedger.addColumn("YM_WORK", "string");
        	this.dsSelectLedger.addColumn("CD_SITE", "string");
        	this.dsSelectLedger.addColumn("NO_HADOCONT", "string");
        	this.dsSelectLedger.addColumn("CD_VENDOR", "string");
        	this.dsSelectLedger.addColumn("AUTH_ID_USER", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        	this.dsSelect.setColumn(0, "DS_CONTMETHOD", this.FormInfo.DS_PARAM);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
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
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	//if (!this.fnSaveValidate()) return false;
        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsSave.setColumn(nrow, "YMD_WORK", this.dsList.getColumn(i, "YMD_WORK"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_VAT", this.dsList.getColumn(i, "AM_GISUNG_VAT"));
        				this.dsSave.setColumn(nrow, "AM_PREPAY_VAT", this.dsList.getColumn(i, "AM_PREPAY_VAT"));
        				this.dsSave.setColumn(nrow, "AM_JIKBUL", this.dsList.getColumn(i, "AM_JIKBUL"));
        				this.dsSave.setColumn(nrow, "CD_PAYMENT", this.dsList.getColumn(i, "CD_PAYMENT"));
        				this.dsSave.setColumn(nrow, "DT_PAYMENT", this.dsList.getColumn(i, "DT_PAYMENT"));
        				this.dsSave.setColumn(nrow, "CD_VATPROOF", this.dsList.getColumn(i, "CD_VATPROOF"));
        				this.dsSave.setColumn(nrow, "DT_VATPROOF", this.dsList.getColumn(i, "DT_VATPROOF"));
        				this.dsSave.setColumn(nrow, "YN_ETAX", this.dsList.getColumn(i, "YN_ETAX"));
        				this.dsSave.setColumn(nrow, "YN_FORWARD", this.dsList.getColumn(i, "YN_FORWARD"));
        				this.dsSave.setColumn(nrow, "NO_VAT1", this.dsList.getColumn(i, "NO_VAT1"));
        				this.dsSave.setColumn(nrow, "NO_VAT2", this.dsList.getColumn(i, "NO_VAT2"));
        				this.dsSave.setColumn(nrow, "CONVERSATION_ID1", this.dsList.getColumn(i, "CONVERSATION_ID1"));
        				this.dsSave.setColumn(nrow, "CONVERSATION_ID2", this.dsList.getColumn(i, "CONVERSATION_ID2"));
        				this.dsSave.setColumn(nrow, "CONVERSATION_ID3", this.dsList.getColumn(i, "CONVERSATION_ID3"));
        				this.dsSave.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "YN_DIVTARGET", this.dsList.getColumn(i, "YN_DIVTARGET"));
        				this.dsSave.setColumn(nrow, "YN_JIKBUL", this.dsList.getColumn(i, "YN_JIKBUL"));
        				this.dsSave.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "YN_DEFER", this.dsList.getColumn(i, "YN_DEFER"));
        				this.dsSave.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));

        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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
        };

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
        	this.fnLedger_rpt();
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	var validate = true;
        	var nRow = this.dsList.rowposition;

        	var ymd_work           = this.dsList.getColumn(nRow, "YMD_WORK");
        	var dt_vatProof_e1     = this.dsList.getColumn(nRow, "DT_VATPROOF_E1");
        	var dt_vatProof_e2     = this.dsList.getColumn(nRow, "DT_VATPROOF_E2");
        	var dt_vatProof_e3     = this.dsList.getColumn(nRow, "DT_VATPROOF_E3");
        	var am_gisung_proa     = this.dsList.getColumn(nRow, "AM_GISUNG_PROA");
        	var am_gisung_tax_e1   = this.dsList.getColumn(nRow, "AM_GISUNG_TAX_E1");
        	var am_gisung_pros     = this.dsList.getColumn(nRow, "AM_GISUNG_PROS");
        	var am_gisung_tax_e2   = this.dsList.getColumn(nRow, "AM_GISUNG_TAX_E2");
        	var am_gisung_txfr     = this.dsList.getColumn(nRow, "AM_GISUNG_TXFR");
        	var am_gisung_txfr_e3  = this.dsList.getColumn(nRow, "AM_GISUNG_TXFR_E3");
        	var am_gisung_vata     = this.dsList.getColumn(nRow, "AM_GISUNG_VATA");
        	var am_gisung_vat_e1   = this.dsList.getColumn(nRow, "AM_GISUNG_VAT_E1");
        	var am_gisung_vats     = this.dsList.getColumn(nRow, "AM_GISUNG_VATS");
        	var am_gisung_vat_e2   = this.dsList.getColumn(nRow, "AM_GISUNG_VAT_E2");
        	var no_sjc             = this.dsList.getColumn(nRow, "NO_SJC");
        	var no_sjc_e1          = this.dsList.getColumn(nRow, "NO_SJC_E1");
        	var no_sjc_e2          = this.dsList.getColumn(nRow, "NO_SJC_E2");
        	var no_sjc_e3          = this.dsList.getColumn(nRow, "NO_SJC_E3");

        	if(dt_vatProof_e1 != ymd_work||dt_vatProof_e1 != ymd_work||dt_vatProof_e1 != ymd_work){
        		this.gfnAlert("회계일자 이상");
        		return false;
        	}

        	if(am_gisung_tax_e1 != am_gisung_proa){
        		this.gfnAlert("과세분1 이상");
        		return false;
        	}
        	if(am_gisung_tax_e2 != am_gisung_pros){
        		this.gfnAlert("과세분2 이상");
        		return false;
        	}
            if(am_gisung_txfr_e3 != am_gisung_txfr){
        		this.gfnAlert("면세분 이상");
        		return false;
        	}

        	if(am_gisung_vat_e1 != am_gisung_vata){
        		this.gfnAlert("과세분1 부가세 이상");
        		return false;
        	}

        	if(am_gisung_vat_e2 != am_gisung_vats){
        		this.gfnAlert("과세분2 부가세 이상");
        		return false;
        	}

        	if((no_sjc_e1 != no_sjc)||(no_sjc_e2 != no_sjc) || (no_sjc_e3 != no_sjc) ){
        		this.gfnAlert("사업자번호 이상");
        		return false;
        	}

        	return validate;
        }

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
        	}else if(svcID == "SLPPUB"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표발행이 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "SLPCNC"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표취소가 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "magamok"){
        		if (errorCode == 0) {
        			this.gfnAlert("기성마감이 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "magamcancel"){
        		if (errorCode == 0) {
        			this.gfnAlert("기성마감취소가 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "save"){
        		if (errorCode == 0) {

                  this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		  }
        	}else if(svcID == "appChk")
        	{
        		if (errorCode == 0)
        		{
        			this.fnAppSelect();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "appSelect") {
        		if (errorCode == 0)
        		{
        			this.fnAppOpen();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec_etax") {
        		if (errorCode == 0)
        		{
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("세금계산서 발행 정상처리되었습니다.", "fnCallback_callback");
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "appSlipChk")
        	{
        		if (errorCode == 0)
        		{
        			if(strArg == "REQ")
        			{
        				this.fnAppChk();
        			}
        			else if(strArg == "CANCEL")
        			{
        				this.fnAppCancelChk();
        			}
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		this.divSearch.form.cboNO_DGR.set_index(0);
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	//그리드 발주처 코드파인드
        	if (id == "DWX_CFPAYMENT_01") {
        		var cd_site = this.dsSearch.getColumn(0, "CD_SITE");

        		if(this.gfnIsNull(cd_site)) {
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "TY_DIV", "DWB01");
        	}

        	if(id == "DFX_CFACCOUNTMATCH"){
        	  	dsUserParam.setColumn(nrow, "TY_VENDOR", "F");
        		dsUserParam.setColumn(nrow, "CD_PAY", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR_DH"));
        		dsUserParam.setColumn(nrow, "TY_CASH", "C");
        		dsUserParam.setColumn(nrow, "CO_CORP", "");
        	}

        	return true;
        }

        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	if(colnm == "YN_FORWARD" && this.FormInfo.DS_PARAM == "MM")
        	{
        		return false;
        	}

        	if(colnm == "YN_JIKBUL"){
        		if(this.dsList.getColumn(this.dsList.rowposition, "YN_JIKBUL") == "Y"){
        			//this.dsList.setColumn(this.dsList.rowposition, "DT_PAYMENT", "");
        		}
        	}

        	if(colnm == "DT_PAYMENT"){
        		if(this.dsList.getColumn(this.dsList.rowposition, "YN_JIKBUL") == "Y"){
        			return false;
        		}
        	}
        }

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row) || (obj.oldrow == -1 && e.oldrow != e.row)) {
        		var bMagam = true;

        		if(this.dsList.getColumn(e.row, "YN_MAGAM") == "Y")
        		{
        			bMagam = false;
        		}
        		//this.btn11.set_enable(bMagam);
        		this.btn12.set_enable(bMagam);
        		this.btn5.set_enable(bMagam);
        		this.btn6.set_enable(!bMagam);

        		obj.oldrow = -1;
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		this.btn1.set_enable(false);
        		this.btn2.set_enable(false);
        		this.btn3.set_enable(false);
        		this.btn4.set_enable(false);
        		this.btn5.set_enable(false);
        		this.btn6.set_enable(false);
        		this.btn7.set_enable(false);
        		//this.btn8.set_enable(false);
        		//this.btn9.set_enable(false);
        		this.btn10.set_enable(false);
        	}

        	if(e.columnid == "CD_SITE" || e.columnid == "YM_WORK"){
        	  this.fnSetCombo();
           }
        };

        this.fnSetCombo = function() {
        	this.dsCombo.clearData();

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCombo.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsCombo.setColumn(0, "DS_CONTMETHOD", this.FormInfo.DS_PARAM);

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsNO_DGR=combo0";
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

        this.fnHadoDj = function(obj,e) {
        	var param = {};
        	var rowposition = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfSite.form.DSTextBox.text;
        	param.DS_CONTMETHOD = this.FormInfo.DS_PARAM;

        	if(rowposition > -1){
        		param.NO_HADOCONT = this.dsList.getColumn(rowposition, "NO_HADOCONT");
        		param.DS_HADOCONT = this.dsList.getColumn(rowposition, "DS_HADOCONT");
        		param.CD_VENDOR = this.dsList.getColumn(rowposition, "CD_VENDOR");
        		param.DS_VENDOR = this.dsList.getColumn(rowposition, "DS_VENDOR");
        	}

        	// TODO : param 추가가 있을지 모르겠음.
        	this.gfnFormOpen("DWB", "DWB_HADODJ", "", param);
        };

        this.fnSlipIssue = function(obj,e) {
        	var msg = "선택한 기성내역의 전표를 일괄 발행합니다. 계속하시겠습니까?";

        	this.gfnConfirm(msg, "fnSlip_callback", "SLPPUB");
        };

        this.fnSlipCancel = function(obj,e) {
        	var msg = "선택한 기성내역의 발행전표를 취소합니다. 계속하시겠습니까?";

        	this.gfnConfirm(msg, "fnSlip_callback", "SLPCNC");
        };

        // 전표 발행 or 취소 처리
        this.fnSlip_callback = function(strId, val) {
        	if(val == true)
        	{
        		if(strId=="SLPPUB"){
        			this.fnHdExec("SLPPUB");
        		}else if(strId=="SLPCNC"){
        			this.fnHdExec("SLPCNC");
        		}
        	}
        }

        this.fnHdExec = function(flg,acnt){
        	this.dxGrid.updateToDataset();

        	var no_erpkeys ="";

        	for(var i=0;i < this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			if(no_erpkeys != ""){
        				no_erpkeys += ",";
        			}
        			no_erpkeys += this.dsList.getColumn(i, "NO_ERPKEY");
        		}
        	}

        	this.dsExec.clearData();

        	var nrow = this.dsExec.addRow();
        	this.dsExec.setColumn(nrow, "TY_WRK", flg);
        	//this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	//기성 생성자의 ID로 전표발행 되도록 하기 위해 ID_USER를 비움(SP에서 처리)
        	this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExec.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsExec.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        	this.dsExec.setColumn(nrow, "NO_ERPKEY", no_erpkeys);
        	this.dsExec.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsExec.setColumn(nrow, "TY_GUBUN", this.FormInfo.DS_PARAM);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = flg;
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
        };

        this.fnMagam = function(obj,e) {
        	//this.gfnConfirm("기성마감을 하시겠습니까?", "fnMagamOk");
        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfSite.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]";

        	if(this.FormInfo.DS_PARAM == "MM")
        	{
        		msg += "\n\n자재기성마감 처리 하시겠습니까?";
        	}
        	else
        	{
        		msg += "\n\n외주기성마감 처리 하시겠습니까?";
        	}

        	this.gfnConfirm(msg, "fnMagam_callback", "magamok");
        };

        this.fnMagamCancel = function(obj,e) {
        	//this.gfnConfirm("기성마감취소를 하시겠습니까?", "fnMagamCa");
        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfSite.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]";

        	if(this.FormInfo.DS_PARAM == "MM")
        	{
        		msg += "\n\n자재기성마감취소 처리 하시겠습니까?";
        	}
        	else
        	{
        		msg += "\n\n외주기성마감취소 처리 하시겠습니까?";
        	}

        	this.gfnConfirm(msg, "fnMagam_callback", "magamcancel");
        };

        // 마감 or 취소 처리
        this.fnMagam_callback = function(strId, val) {
        	if(val == true)
        	{
        		this.fnMagamGo(strId);
        	}
        }

        /*
        this.fnMagamOk = function(){
        	this.fnMagamGo("magamok");
        };
        this.fnMagamCa = function(){
        	this.fnMagamGo("magamcancel");
        };
        */

        this.fnMagamGo = function(flg){
        	var inData = "";

        	if(flg == "magamok"){
        		inData = "exemo=dsMa";
        	}else if("magamcancel"){
        		inData = "exemc=dsMa";
        	}

        	this.dsMa.clearData();
        	var nrow = this.dsMa.addRow();

        	this.dsMa.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsMa.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsMa.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        	this.dsMa.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        	this.dsMa.setColumn(nrow, "DS_CONTMETHOD", this.FormInfo.DS_PARAM);

        	var strSvcId    = flg;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
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

        };

        this.fnSlipSearch = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		this.gfnAlert("전표조회할 데이터를 선택하세요.");
        		return false;
        	}

        	var param = {};
        	//var colCD_STANDARD = this.dxGrid.getBindCellIndex("body", "CD_STANDARD");
        	var no_slip = this.gfnIsNull(this.selSlipNo) ?  this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP") : this.selSlipNo;

        	param.CD_TRADE = no_slip; //this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP");

        	//param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP");
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, this.dxGrid.getCellPos());

        	if(colnm == "NO_SLIP3" && this.FormInfo.DS_PARAM == "MM")
        	{
        		param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP3");
        	}

        	//this.gfnFormOpen("DHA", "DHA_ERPKEY_SLIP", "", param);
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };

        this.fnSgnReq = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfSite.form.DSTextBox.text;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);
        	param.NO_DGR = this.dsSearch.getColumn(0, "NO_DGR");
        	param.DS_CONTMETHOD = this.FormInfo.DS_PARAM;

        	this.gfnFormOpen("DWB", "DWB_HDGISUNGSGNREQ", "", param);
        }

        this.fnSetGridSize = function(check, columnNames, width)
        {
        	for(var k=0; k<this.dxGrid.getFormatColCount(); k++){
        		var ds_field = this.dxGrid.getCellProperty("body", k, "text");

        		if(ds_field.indexOf("bind:") > -1) {
        			ds_field = ds_field.replace("bind:", "");

        			for(var i=0; i < columnNames.length; i++){
        				if(ds_field == columnNames[i]){
        					if(check == true){
        						this.dxGrid.setFormatColProperty(k, "size", width);
        					}else{
        						this.dxGrid.setFormatColProperty(k, "size", 0);
        					}
        					break;
        				}
        			}
        		}
        	}
        }

        // 공제금들의 경우 무조건 보이게하면 안되는 컬럼들이 존재하여 기존의 크기를 저장해둔다.
        this.fnGetAM_GONGJAE_Size = function()
        {
        	var temp = this.dsChangeColumn.getColumn(0, "AM_GONGJAE");
        	var columnNames = temp.split('|');

        	for(var i = 0; i < columnNames.length; i++)
        	{
        		var index = this.dxGrid.getBindCellIndex("body", columnNames[i]);
        		this.dsAM_GONGJAE.setColumn(0, columnNames[i], this.dxGrid.getFormatColProperty(index, "size"));
        	}
        }

        // 선급금 checkbox onchanged
        this.divSearch_cchkAM_PREPAY_onchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var temp = this.dsChangeColumn.getColumn(0, "AM_PREPAY");
        		var columnNames = temp.split('|');

        		this.fnSetGridSize(e.postvalue, columnNames, 100);
        	}
        };
        // 지급예정 checkbox onchanged
        this.divSearch_cchkAM_PAYSCHD_onchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var temp = this.dsChangeColumn.getColumn(0, "AM_PAYSCHD");
        		var columnNames = temp.split('|');

        		this.fnSetGridSize(e.postvalue, columnNames, 100);
        	}
        };

        // 공제금 checkbox onchanged
        // 공제금은 컬럼별로 크기가 다르기 때문에 별도 관리.
        this.divSearch_cchkAM_GONGJAE_onchanged = function(obj,e)
        {
        	var temp = this.dsChangeColumn.getColumn(0, "AM_GONGJAE");
        	var columnNames = temp.split('|');

        	for(var k=0; k<this.dxGrid.getFormatColCount(); k++){
              var ds_field = this.dxGrid.getCellProperty("body", k, "text");
              if(ds_field.indexOf("bind:") > -1) {
                 ds_field = ds_field.replace("bind:", "");

        		 for(var i=0; i < columnNames.length; i++)
        		 {
        			 if(ds_field == columnNames[i])
        			 {
        				if(e.postvalue == true)
        				{
        					this.dxGrid.setFormatColProperty(k, "size", this.dsAM_GONGJAE.getColumn(0, columnNames[i]));
        				}
        				else
        				{
        					this.dxGrid.setFormatColProperty(k, "size", 0);
        				}
        				break;
        			 }
        		 }
              }
           }
        };

        // 실집행금 checkbox onchanged
        this.divSearch_cchkAM_REAL_TOT_onchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var temp = this.dsChangeColumn.getColumn(0, "AM_REAL_TOT");
        		var columnNames = temp.split('|');

        		this.fnSetGridSize(e.postvalue, columnNames, 100);
        	}
        };


        // 그리드 데이터 변경시 이벤트 처리
        this.dsList_onvaluechanged = function(obj,e)
        {
        	// 그리드에서 값 변경이 일어났을경우 확정버튼 비활성화 처리(체크박스 체크시에는 제외시킴)
        	if(e.columnid != "CHK"){
        		if(e.oldvalue != e.newvalue){
        			this.btn1.set_enable(false);
        			this.btn2.set_enable(false);
        			this.btn3.set_enable(false);
        			this.btn4.set_enable(false);
        			this.btn5.set_enable(false);
        			this.btn6.set_enable(false);
        		}
        	}

        	// 자동산식
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "AM_GISUNG_VAT")
        		{
        			var am_gisung_prov = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_GISUNG_PROV"), 0);
        			var am_prepay_vat = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_PREPAY_VAT"), 0);

        			this.dsList.setColumn(e.row, "AM_GISUNG_TOT", nexacro.toNumber(e.newvalue + am_gisung_prov, 0));
        			this.dsList.setColumn(e.row, "AM_PAYSCHD_VAT", nexacro.toNumber(e.newvalue - am_prepay_vat, 0));
        		}

        		if(e.columnid == "AM_PREPAY_VAT")
        		{
        			var am_prepay_prov = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_PREPAY_PROV"), 0);
        			var am_gisung_vat = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_GISUNG_VAT"), 0);

        			this.dsList.setColumn(e.row, "AM_PREPAY_TOT", nexacro.toNumber(am_prepay_prov + e.newvalue, 0));
        			this.dsList.setColumn(e.row, "AM_PAYSCHD_VAT", nexacro.toNumber(am_gisung_vat - e.newvalue, 0));
        		}

        		if(e.columnid == "AM_PAYSCHD_VAT")
        		{
        			var am_payschd_prov = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_PAYSCHD_PROV"), 0);

        			this.dsList.setColumn(e.row, "AM_PAYSCHD_TOT", nexacro.toNumber(am_payschd_prov + e.newvalue, 0));
        		}

        		if(e.columnid == "AM_PAYSCHD_TOT")
        		{
        			var am_gongjae_tot = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_GONGJAE_TOT"), 0);

        			this.dsList.setColumn(e.row, "AM_REAL_TOT", nexacro.toNumber(e.newvalue - am_gongjae_tot, 0));
        		}
        	}
        };


        this.fnSlipIssueSap = function() {

        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("전표발행 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	var chkCnt = 0;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			chkCnt = chkCnt + 1;
        		}
        	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfSite.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n발행건수 : [" + chkCnt + "] "
        			+ "\n\n외주 전표발행 하시겠습니까?";

        	this.gfnConfirm(msg, "fnSlipIssueSap_Confirm");
        }

        this.fnSlipIssueSap_Confirm = function(strId, val) {
        	if(val == true) {
        		this.dsSapAuto.clearData();

        		var arrOut = [];
        		this._cntChk = 0;
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, "CHK") == "1"){
        				var nrow = this.dsSapAuto.addRow();

        				this.dsSapAuto.setColumn(nrow, "TY_WRK", "Q");
        				this.dsSapAuto.setColumn(nrow, "CD_AUTOSLIP", "DWB0002");
        				this.dsSapAuto.setColumn(nrow, "NO_ERPKEY", this.dsList.getColumn(i, "NO_ERPKEY"));

        				// 체크박스 다중건 조회 건수에 맞게 리턴 dataset 추가
        				arrOut.push("dsListSap" + this._cntChk + "=sapauto" + this._cntChk);
        				this["dsListSap"+this._cntChk] = new Dataset();
        				this._cntChk++;
        			}
        		}

        		var strSvcId    = "sapauto";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "sapauto=dsSapAuto";
        		var outData     = arrOut.join(' ');
        		var strArg      = "";
        		var callBackFnc = "fnSlipIssueSap_Callback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        this.fnSlipIssueSap_Callback = function(svcID, errorCode, errorMsg) {
        	if(errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	if(svcID == "sapauto") {
        		// 전표발행 다중건 처리용 Dataset 생성
        		var ds = new Dataset();
        		ds.addColumn("NO_ERPKEY", "string");
        		ds.addColumn("CD_TRADE", "string");
        		ds.addColumn("ID_USER", "string");

        		// 다중조회된 데이터셋에서 가져오기
        		for(var c = 0; c < this._cntChk; c++) {
        			for(var i = 0; i < this["dsListSap"+c].rowcount; i++) {
        				var nrow = ds.addRow();
        				ds.setColumn(nrow, "NO_ERPKEY", this["dsListSap"+c].getColumn(i, "NO_ERPKEY"));
        				ds.setColumn(nrow, "CD_TRADE", this["dsListSap"+c].getColumn(i, "CD_TRADE"));
        				ds.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		// 전표발행 다중건 처리
        		this.gfnSlipIssueDs(ds, "fnSlipIssueSap_Complete");
        	}
        	else if(svcID == "sapauto_cancel") {
        		// 전표취소(SAP) 다중건 처리용 Dataset 생성
        		var ds = new Dataset();
        		ds.addColumn("NO_ERPKEY", "string");
        		ds.addColumn("CD_TRADE", "string");
        		ds.addColumn("ID_USER", "string");
        		ds.addColumn("BUKRS", "string");
        		ds.addColumn("BELNR", "string");
        		ds.addColumn("GJAHR", "string");

        		// 다중조회된 데이터셋에서 가져오기
        		for(var c = 0; c < this._cntChk; c++) {
        			for(var i = 0; i < this["dsListSap"+c].rowcount; i++) {
        				var nrow = ds.addRow();
        				ds.setColumn(nrow, "NO_ERPKEY", this["dsListSap"+c].getColumn(i, "NO_ERPKEY"));
        				ds.setColumn(nrow, "CD_TRADE", this["dsListSap"+c].getColumn(i, "CD_TRADE"));
        				ds.setColumn(nrow, "ID_USER", this["dsListSap"+c].getColumn(i, "CD_TRADE"));
        				ds.setColumn(nrow, "BUKRS", this["dsListSap"+c].getColumn(i, "BUKRS"));
        				ds.setColumn(nrow, "BELNR", this["dsListSap"+c].getColumn(i, "BELNR"));
        				ds.setColumn(nrow, "GJAHR", this["dsListSap"+c].getColumn(i, "GJAHR"));
        			}
        		}

        		// 전표취소(SAP) 다중건 처리
        		this.gfnSlipCancelDs(ds, "fnSlipCancelSap_Complete");
        	}
        }

        /*
         *	전표취소(SAP)
         */
        this.fnSlipCancelSap = function() {

        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("전표취소 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	var chkCnt = 0;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			chkCnt = chkCnt + 1;
        		}
        	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfSite.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n발행건수 : [" + chkCnt + "] "
        			+ "\n\n외주 전표취소(SAP) 하시겠습니까?";

        	this.gfnConfirm(msg, "fnSlipCancelSap_Confirm");
        }

        this.fnSlipCancelSap_Confirm = function(strId, val) {
        	if(val == true) {
        		this.dsSapAuto.clearData();

        		var arrOut = [];
        		this._cntChk = 0;
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, "CHK") == "1"){
        				var nrow = this.dsSapAuto.addRow();

        				this.dsSapAuto.setColumn(nrow, "TY_WRK", "Q");
        				this.dsSapAuto.setColumn(nrow, "CD_AUTOSLIP", "DWB0002");
        				this.dsSapAuto.setColumn(nrow, "NO_ERPKEY", this.dsList.getColumn(i, "NO_ERPKEY"));

        				// 체크박스 다중건 조회 건수에 맞게 리턴 dataset 추가
        				arrOut.push("dsListSap" + this._cntChk + "=sapauto_cancel" + this._cntChk);
        				this["dsListSap"+this._cntChk] = new Dataset();
        				this._cntChk++;
        			}
        		}

        		var strSvcId    = "sapauto_cancel";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "sapauto_cancel=dsSapAuto";
                var outData     = arrOut.join(' ');
        		var strArg      = "";
        		var callBackFnc = "fnSlipIssueSap_Callback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }


        this.fnSlipIssueSap_Complete = function() {
        	this.fnSelect();
        }

        this.fnSlipCancelSap_Complete = function() {
        	this.fnSelect();
        }


        this.fnHdGisungSplt = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfSite.form.DSTextBox.text;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        	param.NO_DGR = this.dsSearch.getColumn(0, "NO_DGR");
        	param.NO_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT");
        	param.DS_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT");
        	param.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");
        	param.DS_CONTMETHOD = this.FormInfo.DS_PARAM;

        	this.gfnFormOpen("DWB", "DWB_HDGISUNGSPLT", "fnHdGisungSplt_CallBack", param);
        }

        this.fnHdGisungSplt_CallBack = function(id, val) {
        	if(val == true) {
        		this.FormBtns.Select.click();
        	}
        }

        //전자결재
        this.fnApp = function(obj,e)
        {
        	if(this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) < "202006"){
        		this.gfnAlert("2020년6월 이전자료는 이관된 자료라 작업을 할 수 없습니다");
        		return false;
        	}
        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("전표결재 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        // 	var chkCnt = 0;
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		if(this.dsList.getColumn(i, "CHK") == "1"){
        // 			chkCnt = chkCnt + 1;
        // 		}
        // 	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfSite.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n\전표 전자결재를 하시겠습니까?";
        	this.gfnConfirm(msg, "fnApp_callback", "");
        }

        //전자결재취소
        this.fnAppCancel = function(obj,e)
        {
        	if(this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) < "202006"){
        		this.gfnAlert("2020년6월 이전자료는 이관된 자료라 작업을 할 수 없습니다");
        		return false;
        	}
        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("전표결재 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == 1)
        		{
        			if(this.dsList.getColumn(i, "TY_BILL") != "Y" || this.dsList.getColumn(i, "TY_BILL2") != "Y")
        			{
        				this.gfnAlert("전자세금계산서가 취소불가한 상태입니다.");
        				return false;
        			}
        		}
        	}

        // 	var chkCnt = 0;
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		if(this.dsList.getColumn(i, "CHK") == "1"){
        // 			chkCnt = chkCnt + 1;
        // 		}
        // 	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfSite.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n\n외주전표 취소전자결재를 하시겠습니까?";
        	this.gfnConfirm(msg, "fnAppCancel_callback", "");
        }

        //전자결재
        this.fnApp_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.fnAppStartChk("REQ");
        	}
        }

        //전자결재취소
        this.fnAppCancel_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.fnAppStartChk("CANCEL");
        	}
        }


        // 전표발행/취소시 최초 체크로직.
        this.fnAppStartChk = function(status)
        {
        	var ds_module = "SU";

        	if(this.FormInfo.DS_PARAM == "MM") ds_module = "DM";

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsAppCheck.clearData();
        	this.dsAppCheck.addRow();
        	this.dsAppCheck.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsAppCheck.setColumn(0, "YM_ACT", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsAppCheck.setColumn(0, "DS_MODULE", ds_module);

        	var strSvcId    = "appSlipChk";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "appSlipChk=dsAppCheck";
        	var outData     = "";
        	var strArg      = status;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        // 전표발행 체크.
        this.fnAppChk = function()
        {
        	if(this.FormInfo.DS_PARAM=="MM")
        	{
        		var param = {};
        		//param.STRID = strId;
        		param.STRID = "SLPPUB";
        		this.gfnFormOpen("DMB", "DMB_INVOICEGGP_DLG", "fnGGP_Callback", param, 350, 200);
        	}
        	else
        	{
        		this.fnGGP_Callback("","외주");
        	}
        }

        this.fnGGP_Callback = function(id, val) {

        	if(val != null) {
        		var json;

        		if(val != "외주")
        		{
        			json = JSON.parse(val);
        		}
        		else
        		{
        			json = {CD_ACCOUNT_D: "외주"};
        		}

        		var noHadoConts ="";
        		for(var i=0;i < this.dsList.rowcount;i++){
        			if(this.dsList.getColumn(i, "CHK") == "1"){
        				if(noHadoConts != ""){
        					noHadoConts += ",";
        				}
        				noHadoConts += this.dsList.getColumn(i, "NO_HADOCONT");
        			}
        		}
        		this.dsAppParam.clearData();

        		var nrow = this.dsAppParam.addRow();

        		//this.dsAppParam.setColumn(nrow, "TY_WRK", flg);
        		this.dsAppParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsAppParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsAppParam.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6)+this.dsSearch.getColumn(0, "NO_DGR"));
        		this.dsAppParam.setColumn(nrow, "NO_HADOCONTS", noHadoConts);
        		this.dsAppParam.setColumn(nrow, "CD_ACCOUNT_D", json.CD_ACCOUNT_D);
        		this.dsAppParam.setColumn(nrow, "ID_AP_TYPE", "DW01");

        		if (this.dsAppParam.rowcount == 0) return;

        		var strSvcId    = "appChk";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "appChk=dsAppParam";
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
        	};
        };

        // 전표발행취소 체크.
        this.fnAppCancelChk = function()
        {
        	var noHadoConts ="";
        	for(var i=0;i < this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			if(noHadoConts != ""){
        				noHadoConts += ",";
        			}
        			noHadoConts += this.dsList.getColumn(i, "NO_HADOCONT");
        		}
        	}
        	this.dsAppParam.clearData();

        	var nrow = this.dsAppParam.addRow();

        	//this.dsAppParam.setColumn(nrow, "TY_WRK", flg);

        	this.dsAppParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsAppParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsAppParam.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6)+this.dsSearch.getColumn(0, "NO_DGR"));
        	this.dsAppParam.setColumn(nrow, "NO_HADOCONTS", noHadoConts);
        	this.dsAppParam.setColumn(nrow, "CD_ACCOUNT_D", "CANCEL");
        	this.dsAppParam.setColumn(nrow, "ID_AP_TYPE", "DW02");
        	//this.dsAppParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);


        	if (this.dsAppParam.rowcount == 0) return;

        	var strSvcId    = "appChk";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "appChk=dsAppParam";
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

        //전자결재 대상조회
        this.fnAppSelect = function()
        {
        	var strSvcId    = "appSelect";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "appSelect=dsAppParam";
        	var outData     = "dsAppList=appSelect0";
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

        //그룹웨어 팝업 호출
        this.fnAppOpen = function()
        {
        	if(this.dsAppList.rowcount > 0)
        	{
        		var sApType = "";
        		var sTitle  = "";
        		sApType = this.dsAppParam.getColumn(0,"ID_AP_TYPE");

        		if(sApType == "DW01"){
        			sTitle = this.dsSearch.getColumn(0, "YM_WORK").substr(0,4)+'년 '+this.dsSearch.getColumn(0, "YM_WORK").substr(4,6)+'월 기성고 전표['+ this.ccfSite.form.DSTextBox.text+']'
        		}else if(sApType == "DW02"){
        			sTitle = this.dsSearch.getColumn(0, "YM_WORK").substr(0,4)+'년 '+this.dsSearch.getColumn(0, "YM_WORK").substr(4,6)+'월 기성고 전표 취소 ['+ this.ccfSite.form.DSTextBox.text+']'
        		}

        		var sRef01  = this.dsSearch.getColumn(0, "CD_SITE");
        		var sRef02  = this.dsSearch.getColumn(0, "YM_WORK")+this.dsSearch.getColumn(0, "NO_DGR");
        		var sRef03  = this.dsAppParam.getColumn(0,"NO_HADOCONTS");	//계약번호 ,로 구분하여 n건 발송
        		var sRef04  = this.dsAppParam.getColumn(0, "CD_ACCOUNT_D");

        		var oParam  = this.gfnDataSetToJson(this.dsAppList, this.dsAppList.rowposition)

        		console.info("================ oParam");
        		console.info(oParam);

        		this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, sRef04, oParam, "fnAprvDialogCallback");
        	}
        }

        this.fnAprvDialogCallback = function()
        {
        	// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        	this.FormBtns.Select.click();
        };

        // 세금계산서 발행 버튼.
        this.fnBill = function(obj,e) {
        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("세금계산서 발행 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	var chkCnt = 0;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			chkCnt = chkCnt + 1;
        		}
        	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfSite.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n발행건수 : [" + chkCnt + "] "
        			+ "\n\n세금계산서 발행 하시겠습니까?";

        	this.gfnConfirm(msg, "fnBill_callback");
        }

        this.fnBill_callback = function(strId, val) {
        	if(val == true)
        	{
        		this.dsExecEtax.clearData();

        		for(var i= 0 ; i < this.dsList.rowcount ; i++){
        			if(this.dsList.getColumn(i, "CHK") == "1"){
        				if(!this.gfnIsNull(this.dsList.getColumn(i, "NO_SLIP")))
        				{
        					var nrow = this.dsExecEtax.addRow();
        					this.dsExecEtax.setColumn(nrow, "TY_WORK", "1");
        					this.dsExecEtax.setColumn(nrow, "CD_SYSTEM", this.FormInfo.DS_PARAM);
        					this.dsExecEtax.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "NO_SLIP"));
        					this.dsExecEtax.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				}

        				if(!this.gfnIsNull(this.dsList.getColumn(i, "NO_SLIP2")))
        				{
        					var nrow = this.dsExecEtax.addRow();
        					this.dsExecEtax.setColumn(nrow, "TY_WORK", "1");
        					this.dsExecEtax.setColumn(nrow, "CD_SYSTEM", this.FormInfo.DS_PARAM);
        					this.dsExecEtax.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "NO_SLIP2"));
        					this.dsExecEtax.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				}
        			}
        		}

        		if (this.dsExecEtax.rowcount == 0)
        		{
        			this.gfnAlert("대상 전표가 없습니다.");
        			return;
        		}

        		var strSvcId    = "exec_etax";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "exec_etax=dsExecEtax";
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
        // this.divData_objGrid_oncelldblclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        // {
        // 	this.fnSlipSearch();
        // };

        this.divData_objGrid_oncellposchanged = function(obj,e)
        {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, e.cell);
        	if(colnm == "NO_SLIP"||colnm == "NO_SLIP2"||colnm == "NO_SLIP3"){
        		this.selSlipNo = this.dsList.getColumn(e.row,colnm);
        	}
        };

        // OZ_REPORT 출력
        this.fnLedger_rpt = function(){
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	this.dsSelectLedger.clearData();

        	var nrow = this.dsSelectLedger.addRow();
        	this.dsSelectLedger.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK")); 	// 작업년월
        	this.dsSelectLedger.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE")); 	// 현장코드
        	this.dsSelectLedger.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT")); 	// 하도계약NO
        	this.dsSelectLedger.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));	// 공사코드
        	this.dsSelectLedger.setColumn(nrow, "AUTH_ID_USER", this.AuthClient.ID_USER);

        	if (this.dsSelectLedger.rowcount == 0) return;

        	var inProc		= "_dsProc";
        	var inParam 	= "";	// 필요없는 경우 생략
        	var inData      = "ledgerRpt=dsSelectLedger";
        	var reportpath  = "/dw/dwb/DWB_HDGISUNG_REPORT.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }

        // 링크로 페이지 진입한 경우 버튼 Hidden처리
        this.fnSetExBtn = function(){
        	if(this.yn_Gw == "Y"){
        		this.btn1.set_visible(false);
        		this.btn2.set_visible(false);
        		this.btn3.set_visible(false);
        		this.btn4.set_visible(false);
        		this.btn5.set_visible(false);
        		this.btn6.set_visible(false);
        		this.btn7.set_visible(false);
        		this.btn10.set_visible(false);
        		this.btn11.set_visible(false);
        		this.btn12.set_visible(false);
        		this.btn13.set_visible(false);
        		this.btnLedgerRpt.set_visible(true);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cchkAM_PREPAY.addEventHandler("onchanged",this.divSearch_cchkAM_PREPAY_onchanged,this);
            this.divSearch.form.cchkAM_PAYSCHD.addEventHandler("onchanged",this.divSearch_cchkAM_PAYSCHD_onchanged,this);
            this.divSearch.form.cchkAM_GONGJAE.addEventHandler("onchanged",this.divSearch_cchkAM_GONGJAE_onchanged,this);
            this.divSearch.form.cchkAM_REAL_TOT.addEventHandler("onchanged",this.divSearch_cchkAM_REAL_TOT_onchanged,this);
            this.divData.form.objGrid.addEventHandler("oncellposchanged",this.divData_objGrid_oncellposchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsAppList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DWB_HDGISUNGSLIP_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
