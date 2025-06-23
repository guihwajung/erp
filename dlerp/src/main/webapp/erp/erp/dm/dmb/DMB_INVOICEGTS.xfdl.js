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
            this.set_titletext("현장간이동송장");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"GW_STATUS_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select0</Col><Col id=\"SP\">DMBPR_INVOITEMFORGTS_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMBPR_INVOBAS_SELECT </Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DMBPR_INVOMST_SAVE</Col></Row><Row><Col id=\"TARGET\">savedtl</Col><Col id=\"SP\">DMBPR_InvoDtl_Save</Col></Row><Row><Col id=\"TARGET\">confirm</Col><Col id=\"SP\">DMBPR_InvoStk_Act</Col></Row><Row><Col id=\"TARGET\">jaego</Col><Col id=\"SP\">DMBPR_GTS_INVOITEM_LOAD</Col></Row><Row><Col id=\"TARGET\">execslip</Col><Col id=\"SP\">DMBPR_CPS_AUTOSLIP_ISSUE</Col></Row><Row><Col id=\"TARGET\">execcancel</Col><Col id=\"SP\">DMBPR_CPS_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">appChk</Col><Col id=\"SP\">DMBPR_APP_DM14_CHK</Col></Row><Row><Col id=\"TARGET\">appSelect</Col><Col id=\"SP\">DMBPR_APP_DM14_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_INVOICE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"BiGo\" type=\"STRING\" size=\"256\"/><Column id=\"CD_INSITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_INVOICE\"/><Col id=\"CD_SITE\"/><Col id=\"DT_WORK\"/><Col id=\"BiGo\"/><Col id=\"CD_INSITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutputTrade", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGW_STATUS_SLIP", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">결재요청</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">결재반려</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">결재완료</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">결재취소요청</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">결재취소반려</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","40",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("송장정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0.0","sta00:10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfINCD_SITE","0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("AutoSet").set("false");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ccfINCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("전출현장");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfOUTCD_SITE","staCD_CORP:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfOUTCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("전출일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBigo","staTY_JAJIK:0.0","ccfOUTCD_SITE:10.0","369","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORK","staCD_DEPT:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","ctclDT_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("전입현장");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBigo00","0.0","ccfINCD_SITE:10.0","195","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK00","edtBigo00:0.0","ccfINCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staGW_STATUS_SLIP","ctclDT_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboGW_STATUS_SLIP","staGW_STATUS_SLIP:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsGW_STATUS_SLIP");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_COST",null,"10.0","180","24.0","0",null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("CodeFindName").set("DWX_CFCOST_TREE_01");
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","0","divSearch:10",null,"22","-10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("품목정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","sta01:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divTop","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","4","60","20",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_text("송장번호");
            this.divTop.addChild(obj.name, obj);

            obj = new MaskEdit("mskNoSong","sta00:10","4","150","20",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_type("number");
            this.divTop.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divTop.form.mskNoSong","value","dsSearch","NO_INVOICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfOUTCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_WORK","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtBigo","value","dsSearch","BiGo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfINCD_SITE.form.CDTextBox","value","dsSearch","CD_INSITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtBigo00","value","dsSearch","CD_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboGW_STATUS_SLIP","value","dsList","GW_STATUS_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.addIncludeScript("DMB_INVOICEGTS.xfdl","lib::libCommon.xjs");
        this.registerScript("DMB_INVOICEGTS.xfdl", function() {
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.objApp = this.gfnGetApplication();
        // 저장시 dtl부분의 분기가 있어 나누기 위해 사용.
        this._SAVE_SELECT_CHK = false;
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


        	if(!this.gfnIsNull(this.getOwnerFrame().Flag)) {
        		if(this.getOwnerFrame().Flag == "I"){
        			var today = this.gfnGetDate();
        			this.dsSearch.clearData();
        			this.dsSearch.addRow();
        			this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        			this.dsSearch.setColumn(0, "DT_WORK", today);
        			this.dsSearch.setColumn(0, "NO_INVOICE", "");
        			this.ccfCD_SITE.form.fnCodeFindLoad();
        			this.ccfCD_SITE.set_enable(true);
        			this.divSearch.form.ctclDT_WORK.set_enable(true);
        			this.divSearch.form.edtBigo.set_enable(true);
        			this.formMngFlag = "I";
        			this.FormBtns.Select.click();


        		}else if(this.getOwnerFrame().Flag == "U"){

        			this.dsSearch.setColumn(0, "NO_INVOICE", this.getOwnerFrame().NO_INVOICE.replace(/\-/g, ""));
        			this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        			this.dsSearch.setColumn(0, "CD_INSITE", this.getOwnerFrame().CD_INSITE);
        			this.dsSearch.setColumn(0, "DT_WORK", this.getOwnerFrame().DT_WORK);
        			this.dsSearch.setColumn(0, "BiGo", this.getOwnerFrame().BiGo);
        			this.dsSearch.setColumn(0, "CD_TRADE", this.getOwnerFrame().CD_TRADE_OUT);
        			this.cd_gubun = this.getOwnerFrame().CD_GUBUN;
        			this.ccfCD_SITE.form.fnCodeFindLoad();
        			this.ccfCD_SITE.set_enable(false);
        			this.ccfINCD_SITE.form.fnCodeFindLoad();
        			this.divSearch.form.ctclDT_WORK.set_enable(true);
        			this.divSearch.form.edtBigo.set_enable(true);
        			this.formMngFlag = "U";
        			this.SELECT = this.getOwnerFrame().SELECT;
        			this.fn_masterinfo();

        		}


        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        this.fn_btlslip = function(gubun) {
        	if (gubun == "GGP")
        	{
        		this.btnSlipIssue.set_enable(false);
        		this.btnSlipCancel.set_enable(false);
        	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnConfirm", "fnConfirm");
        	this.btn2 = this.gfnFormButtonAdd("btnConfirmCancel", "fnConfirmCancel");
        	this.btn3 = this.gfnFormButtonAdd("btnDelete", "fnDelete");
        	this.btn4 = this.gfnFormButtonAdd("btnJaegoLoad", "fnJaegoLoad");
        	this.btn5 = this.gfnFormButtonAdd("btnFileAttach", "fnFileAttach");
         	this.btnSlipIssue = this.gfnFormButtonAdd("btnSlipIssue", "fnSlipIssue");
         	this.btnSlipSearch = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");
         	this.btnSlipCancel = this.gfnFormButtonAdd("btnSlipCancel", "fnSlipCancel");
        	this.btnCost = this.gfnFormButtonAdd("btnCost", "fnCost");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfOUTCD_SITE;
        	this.ccfINCD_SITE = this.divSearch.form.ccfINCD_SITE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMB_INVOICEGTS");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.divSearch.form.ccfINCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divSearch.form.ccfCD_COST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divSearch.form.ccfCD_COST.AfterCDTextChanged = "ccfCD_COST_AfterCDTextChanged";
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
        	this.dsSave.addColumn("NO_INVOICE1", "string");

        	this.dsSaveDtl = new Dataset();
        	this.dsSaveDtl.addColumn("TY_ACT", "string");
        	this.dsSaveDtl.addColumn("NO_INVOICE1", "string");
        	this.dsSaveDtl.addColumn("SN_NO", "int");
        	this.dsSaveDtl.addColumn("CD_ITEM", "string");
        	this.dsSaveDtl.addColumn("TY_ITEM", "string");
        	this.dsSaveDtl.addColumn("NO_CONTROL", "string");
        	this.dsSaveDtl.addColumn("QN_ITEM", "bigdecimal");
        	this.dsSaveDtl.addColumn("UP_ITEM", "bigdecimal");
        	this.dsSaveDtl.addColumn("AM_ITEM", "bigdecimal");
        	this.dsSaveDtl.addColumn("CD_COST", "string");
        	this.dsSaveDtl.addColumn("NO_LC", "string");
        	this.dsSaveDtl.addColumn("ID_USER", "string");
        	this.dsSaveDtl.addColumn("NO_REVINVOICE", "string");
        	this.dsSaveDtl.addColumn("SN_REVNO", "int");
        	this.dsSaveDtl.addColumn("YN_INPUT", "string");
        	this.dsSaveDtl.addColumn("NO_SERIAL", "string");
        	this.dsSaveDtl.addColumn("RM_ETC", "string");
        	this.dsSaveDtl.addColumn("SZ_SITEITEM", "string");
        	this.dsSaveDtl.addColumn("YN_TRAN", "string");
        	this.dsSaveDtl.addColumn("YN_SELECT", "string");
        	this.dsSaveDtl.addColumn("NO_GASOLJAE", "string");
        	this.dsSaveDtl.addColumn("UP_CMS", "bigdecimal");
        	this.dsSaveDtl.addColumn("AM_CMS", "bigdecimal");
        	this.dsSaveDtl.addColumn("NO_HADOCONT", "string");
        	this.dsSaveDtl.addColumn("CNT_GASOLJAE_MONTH", "int");
        	this.dsSaveDtl.addColumn("CD_COST_IN", "string");
        	this.dsSaveDtl.addColumn("NO_HADOCONT_IN", "string");
        	this.dsSaveDtl.addColumn("CD_COST_OUT", "string");
        	this.dsSaveDtl.addColumn("NO_HADOCONT_OUT", "string");
        	this.dsSaveDtl.addColumn("CD_VENDOR", "string");
        	this.dsSaveDtl.addColumn("NO_HADOCONT_JAKUP", "string");

        	this.dsCon = new Dataset();
        	this.dsCon.addColumn("TY_ACT", "string");
        	this.dsCon.addColumn("NO_INVOICE1", "string");
        	this.dsCon.addColumn("NO_INVOICE2", "string");
        	this.dsCon.addColumn("ID_USER", "string");
        	this.dsCon.addColumn("CD_DEPT_LOGIN", "string");

        	this.dsSelectJ = new Dataset();
        	this.dsSelectJ.addColumn("CD_SITE", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("NO_INVOICE", "string");
        	this.dsExecute.addColumn("USER_ID", "string");

        	this.dsExecuteCan = new Dataset();
        	this.dsExecuteCan.addColumn("NO_INVOICE", "string");

        	this.dsAppParam = new Dataset();
        	this.dsAppParam.addColumn("NO_INVOICE", "string");
        	this.dsAppParam.addColumn("ID_AP_TYPE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_INVOICE", this.dsSearch.getColumn(0, "NO_INVOICE"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select0=dsSelect";
        	var outData     = "dsList=select00";
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
        	var nrow = this.gfnGridAdd(this.dxGrid);
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
        	if(this.formMngFlag == "I" || this.modflg){
        		this.fn_saveMain();
        	}else{
        		this._SAVE_SELECT_CHK = true;
        		this.fn_dtlSave();
        	}
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
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
        		if(this.formMngFlag == "I"){
        			this.gfnSetFormStatus(this, "I");
        		}
        		if(this.SELECT == "S")
        		{
        			this.fnselectvlaue();
        		}
        		this.fn_btlslip(this.cd_gubun);

        		if(this.dsList.rowcount > 0 && this.gfnIsNull(this.dsSearch.getColumn(0, "CD_TRADE")))
        		{
        			var tradeName = "CD_TRADE_OUT";
        			if(this.getOwnerFrame().CD_GUBUN == "GGP")  tradeName = "CD_TRADE_IN";
        			this.dsSearch.set_enableevent(false);
        			this.dsSearch.setColumn(0, "CD_TRADE", this.dsList.getColumn(0, tradeName));
        			this.dsSearch.set_enableevent(true);
        		}

        		this.fnBtnCheck();

        	}else if(svcID == "save"){
        		if (errorCode == 0) {
        			if(this.formMngFlag == "I"){
        				if(this.dsOutput.rowcount > 0) {
        					this.dsSearch.setColumn(0, "NO_INVOICE", this.dsOutput.getColumn(0, "NO_INVOICE1"));
        				}
        				this.formMngFlag = "U";
        				this.ccfCD_SITE.set_enable(false);
        			}
        			this.modflg = false;
        			if(!this.fn_dtlSave()){
        				this.fn_masterinfo();
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "savedtl"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();

        			if(this._SAVE_SELECT_CHK == true)
        			{
        				this.gfnConfirm("검수를 확정하시겠습니까?", "fnSaveAf_callback");
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "selectmaster"){
        		this.FormBtns.Select.click();

        	}else if(svcID == "jaego"){
        		if(this.dsList.rowcount > 0){
        			for(var i = 0;i<this.dsList.rowcount;i++){
        				this.dsList.setColumn(i, "nx_flag", "I");
        			}
        			this.gfnSetFormStatus(this, "I");
        		}
        	}else if(svcID == "confirm"){
        		if (errorCode == 0) {
        			this.fn_masterinfo();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "delete"){
        		if (errorCode == 0) {
        			this.getParentContext().close();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "SLPPUB"){
        		if(this.dsOutputTrade.rowcount > 0) {
        			this.dsSearch.setColumn(0, "CD_TRADE", this.dsOutputTrade.getColumn(0, "CD_TRADE_OUT1"));
        		}
        	}else if(svcID == "SLPCNC"){
        		if(this.dsOutputTrade.rowcount > 0) {
        			this.dsSearch.setColumn(0, "CD_TRADE", this.dsOutputTrade.getColumn(0, "CD_TRADE_OUT1"));
        		}
        	}
        	else if(svcID == "appChk")
        	{
        		if (errorCode == 0)
        		{
        			this.fnAppSelect();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "appSelect") {
        		if (errorCode == 0)
        		{
        			this.fnAppOpen();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }
        this.fnselectvlaue = function()
        {

        	this.btn1.set_enable(false);
        	this.btn2.set_enable(false);
        	this.btn3.set_enable(false);
        	this.btn4.set_enable(false);
        	//this.btn5.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);

        	this.divSearch.set_enable(false);
        	this.dxGrid.setCellProperty("body", 2, "edittype", 'none');
        	this.dxGrid.setCellProperty("body", 2, "expandshow", 'hide');
        	this.dxGrid.setCellProperty("body", 13, "edittype", 'none');
        	this.dxGrid.setCellProperty("body", 17, "edittype", 'none');


        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfINCD_SITE") {

        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		// 현장권한이더라도 전체현장이 조회되어야하여 조치.
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "1");
        	}
        	else if (id == "ccfCD_COST") {
        		var cd_site = "CD_SITE";
        		if(this.getOwnerFrame().CD_GUBUN == "GGP") cd_site = "CD_INSITE";
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, cd_site));
        		dsUserParam.setColumn(nrow, "CD_GBIMOK", "");
        		dsUserParam.setColumn(nrow, "CD_STDAGG", "");
        	}

        	return true;
        }

        this.ccfCD_COST_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
        	var cd_cost = "";
        	var ds_cost = "";
        	if (arr.length > 0) {

        		cd_cost = arr[0]["CD_DKCOST"];
        		ds_cost = arr[0]["DS_COST"];
        		this.dsList.set_enableevent(false);
        		var rows = this.dxGrid.getSelectedDatasetRows();
        		for(var i = 0; i < rows.length; i++)
        		{
        			this.dsList.setColumn(rows[i], "CD_DKCOST", cd_cost);
        			this.dsList.setColumn(rows[i], "DS_COST", ds_cost);
        			this.dsList.setColumn(rows[i], this.ucFlag, "U");
        		}

        		if(rows.length > 0) this.gfnSetFormStatus(this, "U");
        		this.dsList.set_enableevent(true);
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if(id == "DMX_INVOICECPS_CODEFIND"){
         		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
         	}else if(id == "DWX_JIK_NOHADOCONT"){
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_COST", this.dsList.getColumn(this.dsList.rowposition, "CD_COST"));
        	}
        	return true;
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fn_saveMain=function(){
        	if(!this.fnSaveValidate())return;

        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	this.dsSave.setColumn(0, "TY_ACT", this.formMngFlag);
        	this.dsSave.setColumn(0, "TY_INVOICE", "GTS");
        	this.dsSave.setColumn(0, "TY_INVOIO", "O");
        	this.dsSave.setColumn(0, "NO_INVOICE1", this.dsSearch.getColumn(0, "NO_INVOICE"));
        	this.dsSave.setColumn(0, "DT_INVOICE", this.dsSearch.getColumn(0, "DT_WORK"));
        	this.dsSave.setColumn(0, "AM_INVOICE", "0");
        	this.dsSave.setColumn(0, "CD_INSIT", this.dsSearch.getColumn(0, "CD_INSITE"));
        	this.dsSave.setColumn(0, "CD_OUTSIT", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSave.setColumn(0, "NO_PO", "");
        	this.dsSave.setColumn(0, "CD_VENDOR", "");
        	this.dsSave.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(0, "RM_BIGO", this.dsSearch.getColumn(0, "BiGo"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsOutput=save";
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

        this.fn_masterinfo=function(){

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_INVOICE", this.dsSearch.getColumn(0, "NO_INVOICE"));

        	var strSvcId    = "selectmaster";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsMaster=select0";
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

        this.fn_dtlSave=function(){

        	if(this.dsList.findRow("nx_flag", "I") > -1 || this.dsList.findRow("nx_flag", "U") > -1 || this.dsList.findRow("nx_flag", "D") > -1 ){
        		if (!this.gfnGridValidate(this.dxGrid)) return false;

        		this.dxGrid.updateToDataset();

        		this.dsSaveDtl.clearData();


        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsList, i);
        			switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveDtl.addRow();
        				this.dsSaveDtl.setColumn(nrow, "TY_ACT", flag);
        				this.dsSaveDtl.setColumn(nrow, "NO_INVOICE1", this.dsSearch.getColumn(0, "NO_INVOICE"));
        				this.dsSaveDtl.setColumn(nrow, "SN_NO", this.dsList.getColumn(i, "SN_NO"));
        				this.dsSaveDtl.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(i, "CD_ITEM"));
        				this.dsSaveDtl.setColumn(nrow, "TY_ITEM", this.dsList.getColumn(i, "TY_ITEM"));
        				this.dsSaveDtl.setColumn(nrow, "QN_ITEM", this.dsList.getColumn(i, "QN_ITEM"));
        				this.dsSaveDtl.setColumn(nrow, "UP_ITEM", this.dsList.getColumn(i, "UP_ITEM"));
        				this.dsSaveDtl.setColumn(nrow, "AM_ITEM", this.dsList.getColumn(i, "AM_ITEM"));
        				this.dsSaveDtl.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsSaveDtl.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSaveDtl.setColumn(nrow, "YN_INPUT", this.dsList.getColumn(i, "YN_INPUT"));
        				this.dsSaveDtl.setColumn(nrow, "RM_ETC", this.dsList.getColumn(i, "RM_ETC"));
        				this.dsSaveDtl.setColumn(nrow, "SZ_SITEITEM", this.dsList.getColumn(i, "SZ_SITEITEM"));
        				this.dsSaveDtl.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsSaveDtl.setColumn(nrow, "NO_REVINVOICE", this.dsList.getColumn(i, "NO_REVINVOICE"));
        				this.dsSaveDtl.setColumn(nrow, "SN_REVNO", this.dsList.getColumn(i, "SN_REVNO"));
        				this.dsSaveDtl.setColumn(nrow, "CD_COST_OUT", this.dsList.getColumn(i, "CD_COST_OUT"));
        				this.dsSaveDtl.setColumn(nrow, "NO_HADOCONT_OUT", this.dsList.getColumn(i, "NO_HADOCONT_OUT"));
        				this.dsSaveDtl.setColumn(nrow, "NO_LC", this.dsList.getColumn(i, "NO_LC"));
        				this.dsSaveDtl.setColumn(nrow, "NO_HADOCONT_JAKUP", this.dsList.getColumn(i, "NO_HADOCONT_JAKUP"));

        			break;
        			}
        		}

        	if (this.dsSaveDtl.rowcount == 0) return false;

        	this._SAVE_SELECT_CHK = true;
        	for(var i = 0; i < this.dsSaveDtl.rowcount; i++)
        	{
        		if(this.dsSaveDtl.getColumn(nrow, "TY_ACT") == "D")
        		{
        			this._SAVE_SELECT_CHK = false;
        			break;
        		}
        	}

        	var strSvcId    = "savedtl";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "savedtl=dsSaveDtl";
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
        	}else{
        		return false;
        	}

        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if(e.columnid == "QN_ITEM"){
        			this.dsList.setColumn(e.row, "AM_ITEM", this.dsList.getColumn(e.row, "QN_ITEM")*this.dsList.getColumn(e.row, "UP_IN"));
        		}
        	}
        };

        this.dsSearch_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		this.modflg = true;
        		this.gfnSetFormStatus(this, "I");
        	}
        };


        this.fnConfirm = function(obj,e) {
        	this.conflag = "I";
        	this.gfnConfirm("검수를 확정하시겠습니까?", "fnConfirm_callback");
        };

        this.fnConfirmCancel = function(obj,e) {
        	this.conflag = "D";
        	this.gfnConfirm("검수 확정을 취소하시겠습니까?", "fnConfirm_callback");

        };

        this.fnDelete = function(obj,e) {
        	this.gfnConfirm("삭제하시겠습니까?", "fnDelete_callback");
        };

        this.fnFileAttach = function(obj,e) {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_INVOICE"))){
        		this.gfnAlert("송장번호는 필수 입니다.");
        		return false;
        	}
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DM60";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0, "NO_INVOICE")];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}
        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        this.fnFileCallback = function() {
        };

        this.fnJaegoLoad = function(obj,e) {

        	this.dsSelectJ.clearData();
        	this.dsSelectJ.addRow();

        	this.dsSelectJ.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	var strSvcId    = "jaego";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "jaego=dsSelectJ";
        	var outData     = "dsList=jaego0";
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

        this.fnConfirm_callback = function(strId, val) {
        	if(val == true) {
        		this.dsCon.clearData();

        		this.dsCon.addRow();

        		this.dsCon.setColumn(0, "TY_ACT", this.conflag);
        		this.dsCon.setColumn(0, "NO_INVOICE1", this.dsSearch.getColumn(0, "NO_INVOICE"));
        		this.dsCon.setColumn(0, "NO_INVOICE2","");
        		this.dsCon.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        		var strSvcId    = "confirm";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "confirm=dsCon";
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
        	else
        	{
        		this._SAVE_SELECT_CHK = false;
        	}
        };

        this.fnDelete_callback = function(strId, val) {
        	if(val == true) {
        		this.dsSave.clearData();
        		this.dsSave.addRow();

        		this.dsSave.setColumn(0, "TY_ACT", "D");
        		this.dsSave.setColumn(0, "TY_INVOICE", "CPS");
        		this.dsSave.setColumn(0, "TY_INVOIO", "O");
        		this.dsSave.setColumn(0, "NO_INVOICE1", this.dsSearch.getColumn(0, "NO_INVOICE"));
        		this.dsSave.setColumn(0, "DT_INVOICE", this.dsSearch.getColumn(0, "DT_WORK"));
        		this.dsSave.setColumn(0, "AM_INVOICE", "0");
        		this.dsSave.setColumn(0, "CD_INSIT", this.dsSearch.getColumn(0, "CD_INSITE"));
        		this.dsSave.setColumn(0, "CD_OUTSIT", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsSave.setColumn(0, "NO_PO", "");
        		this.dsSave.setColumn(0, "CD_VENDOR", "");
        		this.dsSave.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsSave.setColumn(0, "RM_BIGO", this.dsSearch.getColumn(0, "BiGo"));

        		var strSvcId    = "delete";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "save=dsSave";
        		var outData     = "dsOutput=save";
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
        };
        this.fnSaveAf_callback = function(strId, val) {
        	if(val == true) {
        		this.conflag = "I";
        		this.fnConfirm_callback(strId, val);
        	}else{
        		this._SAVE_SELECT_CHK = false;
        		this.fn_masterinfo();
        	}
        };

        this.fnSaveValidate = function(){
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_INSITE"))){
        		this.gfnAlert("전입현장은 필수 입니다.");
        		return false;
        	}else if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))){
        		this.gfnAlert("전출현장은 필수 입니다.");
        		return false;
        	}else if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_WORK"))){
        		this.gfnAlert("출고일자는 필수 입니다.");
        		return false;
        	}else if(this.dsSearch.getColumn(0, "CD_INSITE") == this.dsSearch.getColumn(0, "CD_SITE"))
        	{
        		this.gfnAlert("전입현장과 전출현장을 동일하게하여 이동할 수 없습니다.");
        		return false;
        	}

        	return true;
        };

         // 전표발행 버튼 클릭 이벤트
        this.fnSlipIssue = function(obj,e) {

        // 	if (this.dsSearch.getColumn(0, "CD_TRADE") != "")
        // 	{
        // 		this.gfnAlert("현장간 이동전표가 이미 발행된 내역입니다.");
        // 		return false;
        // 	}

        	var msg = "전표발행 하시겠습니까?";

        	//this.gfnConfirm(msg, "fnSlip_callback", "SLPPUB");
        	this.gfnConfirm(msg, "fnApp_callback");
        }

        // 전표취소 버튼 클릭 이벤트
        this.fnSlipCancel = function(obj,e) {

        // 	if (this.dsSearch.getColumn(0, "CD_TRADE") == "")
        // 	{
        // 		this.gfnAlert("발행된 전표내역이 없습니다.");
        // 		return false;
        // 	}

        	var msg = "전표취소 하시겠습니까?";

        	//this.gfnConfirm(msg, "fnSlip_callback", "SLPCNC");
        	this.gfnConfirm(msg, "fnAppCancel_callback");
        }

        // 전표발행 or 취소 처리
        this.fnSlip_callback = function(strId, val) {
        	if(val == true)
        	{
        		var dsGubun = "";
        		var dsout = "";
        		if(strId == "SLPPUB"){
        			this.dsExecute.clearData();

        			var nrow = this.dsExecute.addRow();

        			this.dsExecute.setColumn(nrow, "NO_INVOICE", this.dsSearch.getColumn(0, "NO_INVOICE"));
        			this.dsExecute.setColumn(nrow, "USER_ID", this.AuthClient.ID_USER);

        			if (this.dsExecute.rowcount == 0) return;

        			dsGubun = "execslip=dsExecute";
        			dsout = "dsOutputTrade=execslip";

        		}else{
        			this.dsExecuteCan.clearData();

        			var nrow = this.dsExecuteCan.addRow();

        			this.dsExecuteCan.setColumn(nrow, "NO_INVOICE", this.dsSearch.getColumn(0, "NO_INVOICE"));

        			if (this.dsExecuteCan.rowcount == 0) return;

        			dsGubun = "execcancel=dsExecuteCan";
        			dsout = "dsOutputTrade=execcancel";
        		}

        		var strSvcId    = strId;
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = dsGubun;
        		var outData     = dsout;
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        }

        // 전표조회 버튼 클릭
        this.fnSlipSearch = function(obj, e) {

            if (this.dsSearch.rowcount > 0) {
                if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_TRADE"))) {

                    this.gfnAlert("발행된 전표가 없습니다.");
                } else {

                    this.gfnConfirm("전표를 조회하시겠습니까?", "fnSlipSearch_callback");
                }
            }
        }

        //전표조회 콜백
        this.fnSlipSearch_callback = function(strId, val) {
         if (val == true) {
                var param = {};
                param.CD_TRADE = this.dsSearch.getColumn(0, "CD_TRADE");

                //전표발행시 팝업창 띄움
                this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnDialogCallback", param);
            }
        };



        //전자결재 체크로직
        this.fnApp_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsAppParam.clearData();

        		var nrow = this.dsAppParam.addRow();
        		this.dsAppParam.setColumn(nrow, "NO_INVOICE", this.dsSearch.getColumn(0, "NO_INVOICE"));
        		this.dsAppParam.setColumn(nrow, "ID_AP_TYPE", "DM14");

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
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        //전자결재취소 체크로직
        this.fnAppCancel_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsAppParam.clearData();

        		var nrow = this.dsAppParam.addRow();
        		this.dsAppParam.setColumn(nrow, "NO_INVOICE", this.dsSearch.getColumn(0, "NO_INVOICE"));
        		this.dsAppParam.setColumn(nrow, "ID_AP_TYPE", "DM15");

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
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
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

        		if(sApType == "DM14"){
        			sTitle = this.divSearch.form.ccfOUTCD_SITE.form.DSTextBox.text +" 출고송장 전표발행 [" + this.dsSearch.getColumn(0, "NO_INVOICE") + "]";
        		}else if(sApType == "DM15"){
        			sTitle = this.divSearch.form.ccfOUTCD_SITE.form.DSTextBox.text +" 출고송장 전표취소 [" + this.dsSearch.getColumn(0, "NO_INVOICE") + "]";
        		}

        		var sRef01  = this.dsSearch.getColumn(0, "NO_INVOICE");
        		var sRef02  = this.AuthClient.ID_USER;
        		var sRef03  = "";
        		var sRef04  = "";
        		var oParam  = this.gfnDataSetToJson(this.dsAppList, this.dsAppList.rowposition);

        		console.info("================ oParam");
        		console.info(oParam);

        		this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, sRef04, oParam, "fnAprvDialogCallback");
        	}
        }

        // 공종코드 적용
        this.fnCost = function()
        {
        	this.divSearch.form.ccfCD_COST.form.fnPopup();
        }

        this.fnBtnCheck = function()
        {
        // 	if(this.dsList.rowcount > 0)
        // 	{
        		// 결재완료인 경우
        		if(this.dsList.getColumn(0, "GW_STATUS_SLIP") == "03")
        		{
        			this.btn1.set_enable(false);
        			this.btn2.set_enable(false);
        			this.btn3.set_enable(false);
        			this.btn4.set_enable(false);
        			this.btnSlipIssue.set_enable(false);
        			this.btnSlipCancel.set_enable(false);
        		}
        		else if(!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_TRADE")))
        		{
        			this.btnSlipIssue.set_enable(false);
        			this.btnSlipCancel.set_enable(true);
        			this.btnSlipSearch.set_enable(true);
        		}
        		else if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_TRADE")))
        		{
        			this.btnSlipIssue.set_enable(true);
        			this.btnSlipCancel.set_enable(false);
        			this.btnSlipSearch.set_enable(false);
        		}
        		else
        		{
        			this.btn1.set_enable(true);
        			this.btn2.set_enable(true);
        			this.btn3.set_enable(true);
        			this.btn4.set_enable(true);
        			this.btnSlipIssue.set_enable(true);
        			this.btnSlipCancel.set_enable(true);
        			this.btnSlipSearch.set_enable(true);
        		}

        		this.fn_btlslip();
        //	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
            this.dsAppList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DMB_INVOICEGTS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
