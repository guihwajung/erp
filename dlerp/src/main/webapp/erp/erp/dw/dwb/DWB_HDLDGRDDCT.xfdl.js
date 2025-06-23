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
            this.set_titletext("기성공제관리(매출)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWBPR_HDLDGRDDCT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWBPR_HDLDGRDDCT_SAVE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DWBPR_HDLDGRDDCT_EXECUTE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DWBPR_HDGISUNGMONTH_MAX_SELECT</Col></Row><Row><Col id=\"TARGET\">sapauto</Col><Col id=\"SP\">DWZPR_SAP_AUTOSLIP_ISSUE_SELECT</Col></Row><Row><Col id=\"TARGET\">sapcancel</Col><Col id=\"SP\">DWZPR_SAP_AUTOSLIP_CANCEL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DGR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SAP_AR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"DS_SITE\"/><Col id=\"YM_WORK\"/><Col id=\"NO_HADOCONT\"/><Col id=\"DS_HADOCONT\"/><Col id=\"NO_DGR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_DGR", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSap", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboNO_DGR","ccfCD_SITE:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsNO_DGR");
            obj.set_datacolumn("DS_DGR");
            obj.set_codecolumn("NO_DGR");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","cboNO_DGR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기성년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_HADOCONT","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_HADOCONT","staNO_HADOCONT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFHADO_01");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfNO_HADOCONT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("업체코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFHADOVENDOR_01");
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_HADOCONT.form.CDTextBox","value","dsSearch","NO_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfNO_HADOCONT.form.DSTextBox","value","dsSearch","DS_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboNO_DGR","value","dsSearch","NO_DGR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
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
        this.registerScript("DWB_HDLDGRDDCT.xfdl", function() {
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


        	// 타화면의 데이터가 있을시.
        	this.fnSetLoadParam();

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

        	this.btnSlipIssue.set_enable(false);
        	this.btnSlipSearch.set_enable(false);
        	this.btnSlipCancel.set_enable(false);
        	this.btnSlipIssueSap.set_enable(false);
        	this.btnSlipCancelSap.set_enable(false);

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YM_WORK))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);

        		if(!this.gfnIsNull(this.getOwnerFrame().NO_HADOCONT) && !this.gfnIsNull(this.getOwnerFrame().CD_VENDOR))
        		{
        			this.dsSearch.setColumn(0, "NO_HADOCONT", this.getOwnerFrame().NO_HADOCONT);
        			this.ccfNO_HADOCONT.form.DSTextBox.set_value(this.getOwnerFrame().DS_HADOCONT);

        			this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        			this.ccfCD_VENDOR.form.DSTextBox.set_value(this.getOwnerFrame().DS_VENDOR);

        			// 그리드 insert시에 NO_SAP_AR 값을 넣어 주기위해서 업체 코드파인드를 실행함(실행해서 NO_SAP_AR값을 가져옴)
        			this.ccfCD_VENDOR.form.fnCodeFindLoad();
        		}
        			this.FormBtns.Select.click();
        	}

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

        	this.btnSlipIssue = this.gfnFormButtonAdd("btnSlipIssue", "fnSlipIssue");
        	this.btnSlipSearch = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");
        	this.btnSlipCancel = this.gfnFormButtonAdd("btnSlipCancel", "fnSlipCancel");
        	this.btnSlipIssueSap = this.gfnFormButtonAdd("btnSlipIssueSap", "fnSlipIssueSap");
        	this.btnSlipCancelSap = this.gfnFormButtonAdd("btnSlipCancelSap", "fnSlipCancelSap");
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_HADOCONT = this.divSearch.form.ccfNO_HADOCONT;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_HADOCONT.CodeFindName = "DWX_CFHADO_01";
        	this.ccfNO_HADOCONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_HADOCONT.AfterCDTextChanged = "ccfNO_HADOCONT_AfterCDTextChanged";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "ccfCD_VENDOR_AfterCDTextChanged";


        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_HDLDGRDDCT");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// row 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	// 셀 변경 후 이벤트
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	// 그리드 코드파인드 값 변경
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("NO_DGR", "string");
        	this.dsSelect.addColumn("NO_HADOCONT", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("NO_DGR", "string");
        	this.dsSave.addColumn("NO_SEQ", "string");
        	this.dsSave.addColumn("TY_IO", "string");
        	this.dsSave.addColumn("TY_DDCT", "string");
        	this.dsSave.addColumn("CD_BIMOK", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("AM_SPLPRC", "bigdecimal");
        	this.dsSave.addColumn("AM_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_TOT", "bigdecimal");
        	this.dsSave.addColumn("YN_DDCT", "string");
        	this.dsSave.addColumn("DT_ACNT", "string");
        	this.dsSave.addColumn("DT_EXESCH", "string");
        	this.dsSave.addColumn("DS_RMKS", "string");
        	this.dsSave.addColumn("CD_VNDR", "string");
        	this.dsSave.addColumn("NO_PAYBACCT", "string");
        	this.dsSave.addColumn("CD_PAYMENT", "string");
        	this.dsSave.addColumn("NO_SLIP", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");


        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_WRK", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("YM_WORK", "string");
        	this.dsExecute.addColumn("NO_DGR", "string");
        	this.dsExecute.addColumn("NO_HADOCONT", "string");
        	this.dsExecute.addColumn("NO_SEQ", "string");
        	this.dsExecute.addColumn("CD_DEPT", "string");
        	this.dsExecute.addColumn("NO_SLIP", "string");
        	this.dsExecute.addColumn("CD_VENDOR", "string");

        	this.dsCombo = new Dataset();
            this.dsCombo.addColumn("CD_SITE", "string");
            this.dsCombo.addColumn("YM_WORK", "string");
        	this.dsCombo.addColumn("DS_CONTMETHOD", "string");

        	this.dsSapAuto = new Dataset();
        	this.dsSapAuto.addColumn("TY_WRK", "string");
        	this.dsSapAuto.addColumn("CD_AUTOSLIP", "string");
        	this.dsSapAuto.addColumn("NO_ERPKEY", "string");
        }

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

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        	this.dsSelect.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current

        	//var today = this.gfnGetDate().substr(0,6);
        	//var ACNT =  this.gfnGetLastDate(today);
        	//var EXESCH = this.gfnAddDate(this.gfnGetLastDate(today),15);
        	var ym_work = this.dsSearch.getColumn(0, "YM_WORK");

        	this.dsList.set_enableevent(false);

        	this.dsList.setColumn(nrow, "YN_EDIT", "Y");
        	this.dsList.setColumn(nrow, "DT_ACNT",  this.gfnGetLastDate(ym_work));
        	this.dsList.setColumn(nrow, "DT_EXESCH", this.gfnAddDate(this.gfnGetLastDate(ym_work),15));//this.gfnAddMonth(ym_work).substr(0,6)+"15");
        	this.dsList.setColumn(nrow, "YN_DDCT", "Y");

        	this.dsList.setColumn(nrow, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	this.dsList.setColumn(nrow, "DS_HADOCONT", this.ccfNO_HADOCONT.form.DSTextBox.text);
        	this.dsList.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsList.setColumn(nrow, "DS_VENDOR", this.ccfCD_VENDOR.form.DSTextBox.text);
        	this.dsList.setColumn(nrow, "CD_VNDR", this.dsSearch.getColumn(0, "NO_SAP_AR"));
        	this.dsList.setColumn(nrow, "DS_VNDR", this.ccfCD_VENDOR.form.DSTextBox.text);

        	this.dsList.set_enableevent(true);

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
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsSave.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "TY_IO", this.dsList.getColumn(i, "TY_IO"));
        				this.dsSave.setColumn(nrow, "TY_DDCT", this.dsList.getColumn(i, "TY_DDCT"));
        				this.dsSave.setColumn(nrow, "CD_BIMOK", this.dsList.getColumn(i, "CD_BIMOK"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "AM_SPLPRC", this.dsList.getColumn(i, "AM_SPLPRC"));
        				this.dsSave.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				this.dsSave.setColumn(nrow, "AM_TOT", this.dsList.getColumn(i, "AM_TOT"));
        				this.dsSave.setColumn(nrow, "YN_DDCT", this.dsList.getColumn(i, "YN_DDCT"));
        				this.dsSave.setColumn(nrow, "DT_ACNT", this.dsList.getColumn(i, "DT_ACNT"));
        				this.dsSave.setColumn(nrow, "DT_EXESCH", this.dsList.getColumn(i, "DT_EXESCH"));
        				this.dsSave.setColumn(nrow, "DS_RMKS", this.dsList.getColumn(i, "DS_RMKS"));
        				this.dsSave.setColumn(nrow, "CD_VNDR", this.dsList.getColumn(i, "CD_VNDR"));
        				this.dsSave.setColumn(nrow, "NO_PAYBACCT", this.dsList.getColumn(i, "NO_PAYBACCT"));
        				this.dsSave.setColumn(nrow, "CD_PAYMENT", this.dsList.getColumn(i, "CD_PAYMENT"));
        				this.dsSave.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(i, "NO_SLIP"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
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
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode != 0)
        	{
        		this.gfnAlert(errorMsg);

        		return;
        	}

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.btnSlipIssue.set_enable(true);
        		this.btnSlipSearch.set_enable(true);
        		this.btnSlipCancel.set_enable(true);
        		this.btnSlipIssueSap.set_enable(true);
        		this.btnSlipCancelSap.set_enable(true);

        	}
        	else if(svcID == "save") {
        		this.fnExecute();
        	}
        	else if(svcID == "execute") {
        		this.FormBtns.Select.click();
        	}
        	else if(svcID == "execute_SLPPUB") {
        		this.gfnAlert("전표발행이 정상 처리되었습니다.");

        		this.FormBtns.Select.click();
        	}
        	else if(svcID == "execute_SLPCNC") {
        		this.gfnAlert("전표취소가 정상 처리되었습니다.");

        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfNO_HADOCONT") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        		dsUserParam.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));	// 기성년월
        		dsUserParam.setColumn(nrow, "TY_DIV", "CONT");
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

        this.ccfNO_HADOCONT_AfterCDTextChanged = function(id, codeFindData) {

        	var arr = this.ccfNO_HADOCONT.form.SelectedData;

        	if(arr.length > 0)
        	{
        		this.dsSearch.setColumn(0, "CD_VENDOR", arr[0]["CD_VENDOR"]);
        		this.ccfCD_VENDOR.form.DSTextBox.set_value(arr[0]["DS_VENDOR"]);
        	}
        	else
        	{
        		this.dsSearch.setColumn(0, "CD_VENDOR", "");
        		this.ccfCD_VENDOR.form.DSTextBox.set_value("");
        	}
        }


        this.ccfCD_VENDOR_AfterCDTextChanged = function(id, codeFindData) {

        	   var arr = this.ccfCD_VENDOR.form.SelectedData;

        	   this.dsSearch.set_enableevent(false);
        	   if(arr.length > 0)
        	   {
        		  this.dsSearch.setColumn(0, "CD_VENDOR", arr[0]["CD_VENDOR"]);
        		  this.ccfCD_VENDOR.form.DSTextBox.set_value(arr[0]["DS_VENDOR"]);
        		  this.dsSearch.setColumn(0, "NO_SAP_AR", arr[0]["NO_SAP_AR"]);
        	   }
        	   else
        	   {
        		  this.dsSearch.setColumn(0, "CD_VENDOR", "");
        		  this.ccfCD_VENDOR.form.DSTextBox.set_value("");
        		  this.dsSearch.setColumn(0, "NO_SAP_AR", "");
        	   }

        	   this.dsSearch.set_enableevent(true);
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	// 계약번호
        	if (id == "DWX_CFHADO_01") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        		dsUserParam.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));	// 기성년월
        		dsUserParam.setColumn(nrow, "TY_DIV", "CONT");

        	}
        	// 비목코드
        	else if(id == "DWX_CFACCOUNT_SAP") {
        		dsUserParam.setColumn(nrow, "TY_ACNT", "DDCT");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	// 거래처코드
        	else if(id == "DWX_CFVENDOR_DH") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "DDCT");
        	}
        	// 공종코드
        	else if(id == "DWX_CFCOST_ADJUST")
        	{
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "NO_HADOCONT", "");
        	}
        	// 업체코드
        	else if(id == "DWX_CFHADOVENDOR_01")
        	{
        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT")))
        		{
        			this.gfnAlert("계약정보의 계약번호를 먼저 입력해주십시오.");
        			return;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        		dsUserParam.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT"));
        	}
        	// 지급구분
        	else if(id == "DWX_CFPAYMENT_01")
        	{
        		var cd_site = this.dsSearch.getColumn(0, "CD_SITE");
        		if(this.gfnIsNull(cd_site)) {
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "TY_DIV", "DWB03");
        	}

        	return true;
         }

         this.fnGrid_AfterEdit = function(obj, e)
         {
        	if(e.columnid == "AM_SPLPRC")
        	{
        		if(e.oldvalue != e.newvalue)
        		{
        			this.dsList.setColumn(this.dsList.rowposition, "AM_VAT", e.newvalue * 0.1);
        			this.dsList.setColumn(this.dsList.rowposition, "AM_TOT", e.newvalue + e.newvalue * 0.1);
        		}
        	}
        	else if(e.columnid == "AM_VAT")
        	{
        		var AM_SPLPRC = this.dsList.getColumn(this.dsList.rowposition, "AM_SPLPRC");
        		this.dsList.setColumn(this.dsList.rowposition, "AM_TOT", AM_SPLPRC + e.newvalue);
        	}
        	else if(e.columnid == "AM_VAT")
        	{
        		var AM_SPLPRC = this.dsList.getColumn(this.dsList.rowposition, "AM_SPLPRC");
        		this.dsList.setColumn(this.dsList.rowposition, "AM_TOT", AM_SPLPRC + e.newvalue);
        	}
        	else if(e.columnid == "NO_HADOCONT")
        	{
        		this.dsList.setColumn(this.dsList.rowposition, "CD_VENDOR", "");
        		this.dsList.setColumn(this.dsList.rowposition, "DS_VENDOR", "");
        		this.dsList.setColumn(this.dsList.rowposition, "CD_VNDR", "");
        		this.dsList.setColumn(this.dsList.rowposition, "DS_VNDR", "");
        	}
        	if(e.columnid == "CD_VENDOR") {
              // 사업비코드 변경시 계정코드 초기화
              if(this.gfnIsNull(e.newvalue)) {
                 this.dsList.setColumn(this.dsList.rowposition, "CD_VNDR", "");
                 this.dsList.setColumn(this.dsList.rowposition, "DS_VNDR", "");
              }
         }
        }


         this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;
        	if(id == "DWX_CFHADO_01")
        	{
        		if(arr.length > 0){
        			var cd_vndr = arr[0]["CD_VENDOR"];
        			var ds_vndr = arr[0]["DS_VENDOR"];

        			this.dsList.setColumn(this.dsList.rowposition, "CD_VENDOR", cd_vndr);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_VENDOR", ds_vndr);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_VNDR", "");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_VNDR", "");
        		}
        	}
        };
         this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
         	var arr = codeFindData;

         if(id == "DWX_CFHADOVENDOR_01")
        	{
        		if(arr.length > 0){
        			var cd_vndr = arr[0]["CD_VENDOR"];
        			var ds_vndr = arr[0]["DS_VENDOR"];
        		    var no_sap_ar = arr[0]["NO_SAP_AR"];

        					if(this.gfnIsNull(no_sap_ar)){
        							  this.dsList.setColumn(this.dsList.rowposition, "CD_VNDR", "");
        							  this.dsList.setColumn(this.dsList.rowposition, "DS_VNDR", "");
        						}else{
        							  this.dsList.setColumn(this.dsList.rowposition, "CD_VNDR", no_sap_ar);
        							  this.dsList.setColumn(this.dsList.rowposition, "DS_VNDR", ds_vndr);

        						}
        			this.dsList.setColumn(this.dsList.rowposition, "CD_VENDOR", cd_vndr);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_VENDOR", ds_vndr);
        			}
              }
         };

         this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT 값이 Y일때만 수정가능상태
        	/*
        	if(this.dsList.getColumn(row, "YN_EDIT") == "N") {
        		return false;
        	}
        	*/
        	return;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		this.btnSlipIssue.set_enable(false);
        		this.btnSlipSearch.set_enable(false);
        		this.btnSlipCancel.set_enable(false);

        		if(e.columnid == "CD_SITE" || e.columnid == "YM_WORK"){
        		   this.fnSetCombo();

        		   this.dsSearch.setColumn(0, "NO_HADOCONT", "");
        		   this.ccfNO_HADOCONT.form.DSTextBox.set_value("");
        		   this.dsSearch.setColumn(0, "CD_VENDOR", "");
        		   this.ccfCD_VENDOR.form.DSTextBox.set_value("");
        	    }
        		else if(e.columnid == "NO_HADOCONT")
        		{
        		   this.dsSearch.setColumn(0, "CD_VENDOR", "");
        		   this.ccfCD_VENDOR.form.DSTextBox.set_value("");
        		}
        	}
        };

        // 넘어오는 값 체크.
        this.fnSetLoadParam = function()
        {
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().DS_SITE) &&
        	   !this.gfnIsNull(this.getOwnerFrame().YM_WORK)) {

        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);	// 현장코드
        		this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);	// 실행번호
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);	// 기성년월
        		this.dsSearch.setColumn(0, "NO_HADOCONT", this.getOwnerFrame().NO_HADOCONT);	// 계약번호
        		this.dsSearch.setColumn(0, "DS_HADOCONT", this.getOwnerFrame().DS_HADOCONT);	// 계약명
        		this.dsSearch.setColumn(0, "NO_DGR", this.getOwnerFrame().NO_DGR);				// 차수

        		this.FormBtns.Select.click();
        	}else
        	{
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0, "YM_WORK", today.substr(0,6));
        	}
        }

        // 아래부터는 확장 버튼.
        this.fnSlipIssue = function(obj,e) {
        	this.fnSlipExecute("SLPPUB");
        }

         // 전표조회 버튼 클릭시 팝업화면 호출
         this.fnSlipSearch = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.NO_ERPKEY = this.dsList.getColumn(this.dsList.rowposition, "NO_ERPKEY");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen("DHA", "DHA_ERPKEY_SLIP", "", param);
        }


        this.fnSlipCancel = function(obj,e) {
        	this.fnSlipExecute("SLPCNC");
        }

        // Execute. save 뒤에 실행됨.
        this.fnExecute = function() {
        	this.dsExecute.clearData();

        	var nrow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nrow, "TY_WRK", "LDGR");
        	this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExecute.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsExecute.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        	this.dsExecute.setColumn(nrow, "NO_HADOCONT", "");
        	this.dsExecute.setColumn(nrow, "NO_SEQ", 0);
        	this.dsExecute.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsExecute.setColumn(nrow, "NO_SLIP", "");
        	this.dsExecute.setColumn(nrow, "CD_VENDOR", "");

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
        						callBackFnc);   // 통신방법 정의 [생략가능]

        }

        // 확장버튼 클릭시 사용 (전표 발행/취소)
        this.fnSlipExecute = function(ty_wrk)
        {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dsExecute.clearData();

        	this.dxGrid.updateToDataset();

        	for (var row = 0; row < this.dsList.rowcount; row++) {
        		if(this.dsList.getColumn(row, "CHK") == 1)
        		{
        			var nrow = this.dsExecute.addRow();
        			this.dsExecute.setColumn(nrow, "TY_WRK", ty_wrk);
        			this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsExecute.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        			this.dsExecute.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        			this.dsExecute.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(row, "NO_HADOCONT"));
        			this.dsExecute.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(row, "NO_SEQ"));
        			this.dsExecute.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			this.dsExecute.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(row, "NO_SLIP"));
        			this.dsExecute.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

        		}
        	}


        	var strSvcId    = "execute";
        	var strTY_wrk   = "";

        	if(ty_wrk == "SLPPUB")
        	{
        		strSvcId = "execute_SLPPUB";
        		strTY_wrk = "전표발행";
        	}
        	else if(ty_wrk == "SLPCNC")
        	{
        		strSvcId = "execute_SLPCNC";
        		strTY_wrk = "전표취소";
        	}

        	// 비었으면 선택하라고 알람메세지 처리.
        	if (this.dsExecute.rowcount == 0)
        	{
        		this.gfnAlert(strTY_wrk + " 하실 정보를 선택하시기 바랍니다.");

        		return;
        	}

        	//var strSvcId    = "execute";
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
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }


        /*
         *	전표발행(SAP)
         */
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

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.value
        			+ "\n계약번호 : [" + this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT") + "] " + this.dsList.getColumn(0, "DS_HADOCONT")
        			+ "\n발행건수 : [" + chkCnt + "] "
        			+ "\n\n기성공제관리 전표발행(SAP) 하시겠습니까?";

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
        				this.dsSapAuto.setColumn(nrow, "CD_AUTOSLIP", "DWB0003");
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

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.value
        			+ "\n계약번호 : [" + this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT") + "] " + this.dsList.getColumn(0, "DS_HADOCONT")
        			+ "\n발행건수 : [" + chkCnt + "] "
        			+ "\n\n기성공제관리 전표취소(SAP) 하시겠습니까?";

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
        				this.dsSapAuto.setColumn(nrow, "CD_AUTOSLIP", "DWB0003");
        				this.dsSapAuto.setColumn(nrow, "NO_ERPKEY", this.dsList.getColumn(i, "NO_ERPKEY"));

        				// 체크박스 다중건 조회 건수에 맞게 리턴 dataset 추가
        				arrOut.push("dsListSap" + this._cntChk + "=sapcancel" + this._cntChk);
        				this["dsListSap"+this._cntChk] = new Dataset();
        				this._cntChk++;
        			}
        		}

        		var strSvcId    = "sapcancel";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "sapcancel=dsSapAuto";
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
        	else if(svcID == "sapcancel") {
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
        				ds.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				ds.setColumn(nrow, "BUKRS", this["dsListSap"+c].getColumn(i, "BUKRS"));
        				ds.setColumn(nrow, "BELNR", this["dsListSap"+c].getColumn(i, "BELNR"));
        				ds.setColumn(nrow, "GJAHR", this["dsListSap"+c].getColumn(i, "GJAHR"));
        			}
        		}

        		// 전표취소(SAP) 다중건 처리
        		this.gfnSlipCancelDs(ds, "fnSlipCancelSap_Complete");
        	}
        }

        this.fnSlipIssueSap_Complete = function() {
        	this.fnSelect();
        }

        this.fnSlipCancelSap_Complete = function() {
        	this.fnSelect();
        }




        // 기성차수 콤보 셋팅
        this.fnSetCombo = function() {

        	this.dsCombo.clearData();

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCombo.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	if(!this.gfnIsNull(this.getOwnerFrame().DS_CONTMETHOD)){
        		this.dsCombo.setColumn(0, "DS_CONTMETHOD", this.getOwnerFrame().DS_CONTMETHOD);
        	}else{
        		this.dsCombo.setColumn(0, "DS_CONTMETHOD", this.FormInfo.DS_PARAM);
        	}

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

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		/*
        		this.dsNO_DGR.insertRow(0);
        		this.dsNO_DGR.setColumn(0, "CD_DGR", "");
        		this.dsNO_DGR.setColumn(0, "DS_DGR", "전체");
         		*/
        		this.divSearch.form.cboNO_DGR.set_index(0);

        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWB_HDLDGRDDCT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
