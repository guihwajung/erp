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
            this.set_titletext("계정코드별명세서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHEPR_ACCOUNT_SUBLEDGER_SELECT1_1</Col></Row><Row><Col id=\"TARGET\">s_select</Col><Col id=\"SP\">DHEPR_ACCOUNT_SUBLEDGER_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\"/></Row><Row><Col id=\"CODE\">거래처</Col><Col id=\"VALUE\">VENDOR</Col></Row><Row><Col id=\"CODE\">참고번호</Col><Col id=\"VALUE\">REFNO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACNT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"REFNO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSubRpt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","278","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","ccfCD_DEPT_ACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TO","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACNT_FROM","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("계정코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNT_FROM","staCD_ACNT_FROM:0.0","staCD_CORP:10.0","277","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNT_SLIP_AND_TRIAL");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTYPE","ccfCD_ACNT_FROM:10","staCD_CORP:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsTYPE");
            obj.set_datacolumn("CODE");
            obj.set_codecolumn("VALUE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_CON","cboTYPE:5","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CON","cboTYPE:5","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SEMOK_FR","ccfCD_CON:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("세목코드");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SEMOK_FR","staCD_SEMOK_FR:0.0","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACSEMOK");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","14%","0","5",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboTYPE","value","dsSearch","TY_CON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPT_ACNT.form.DSTextBox","value","dsSearch","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_ACNT_FROM.form.CDTextBox","value","dsSearch","CD_ACNT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_ACNT_FROM.form.DSTextBox","value","dsSearch","DS_ACNT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_CON.form.CDTextBox","value","dsSearch","VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.txtCD_CON","value","dsSearch","REFNO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHE_ACCOUNTSELECT.xfdl", function() {
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

        	this.ccfCD_CORP.form.CDTextBox.setFocus();
        	this.cboTYPE.set_index( 1 );
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
         	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Save.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFormButtonGe = this.gfnFormButtonAdd("tbbHistory", "fnTbbHistory", "전표조회");

        	this.btnFormButtonGe.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ccfCD_ACNT_FROM = this.divSearch.form.ccfCD_ACNT_FROM;
        	this.ccfCD_SEMOK_FR = this.divSearch.form.ccfCD_SEMOK_FR;
        	this.ccfCD_CON = this.divSearch.form.ccfCD_CON;
        	this.cboTYPE = this.divSearch.form.cboTYPE;
        	this.txtCD_CON = this.divSearch.form.txtCD_CON;
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHE_ACCOUNTSELECT_01");
        	this.dxGrid.set_selecttype("cell");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHE_ACCOUNTSELECT");

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	this.ctclDT_FROM.set_value(this.gfnGetFirstDate(this.gfnGetDate()));
        	this.ctclDT_TO.set_value(this.gfnGetDate());


         	this.ccfCD_DEPT_ACNT.CodeFindName = "DHX_CFACNTUNIT";	// DHX_CFBALANCE_ACNTUNIT
        	this.ccfCD_CON.CodeFindName = "DHX_CFALLVENDOR_CODEFIND";	// DHX_CFNVENDOR_CODEFIND


        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT_ACNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_ACNT_FROM.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CON.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNT_FROM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SEMOK_FR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CON.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.dxGridSub.addEventHandler("oncelldblclick", this.fnGrid_Celldblclick, this);
        	this.dxGridSub.addEventHandler("onselectchanged", this.fnGridSub_RowCellChanged, this);

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("TY_CON", "string");
        	this.dsSelect.addColumn("CD_CON", "string");
        	this.dsSelect.addColumn("CD_ACNT_FROM", "string");


        //     this.dsSelect.addColumn("CD_DETAIL1", "string");
        //     this.dsSelect.addColumn("CD_DETAIL2", "string");
        //     this.dsSelect.addColumn("CD_DETAIL3", "string");
        //     this.dsSelect.addColumn("CD_SEMOK", "string");
        //     this.dsSelect.addColumn("CD_GRDEPT", "string");
        //     this.dsSelect.addColumn("CHECK_FLAG", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_CORP", "string");
        	this.dsSelectSub.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelectSub.addColumn("DT_FROM", "string");
        	this.dsSelectSub.addColumn("DT_TO", "string");
        	this.dsSelectSub.addColumn("TY_CON", "string");
        	this.dsSelectSub.addColumn("CD_CON", "string");
        	this.dsSelectSub.addColumn("CD_ACNT_FROM", "string");
        	//this.dsSelectSub.addColumn("CD_SEMOK_FR", "string");
        	//this.dsSelectSub.addColumn("TY_FLAG", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	var nRow = this.dsSelect.addRow();

        	var sTyCon = this.dsSearch.getColumn(0, "TY_CON");
        	this.dsSelect.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(nRow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(nRow, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(nRow, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(nRow, "TY_CON", this.dsSearch.getColumn(0, "TY_CON"));
        	this.dsSelect.setColumn(nRow, "CD_CON", this.dsSearch.getColumn(0, sTyCon)); // VENDOR / REFNO
        	this.dsSelect.setColumn(nRow, "CD_ACNT_FROM", this.dsSearch.getColumn(0, "CD_ACNT_FROM"));

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

        this.fnSelectSub = function() {

        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	var nRow = this.dsSelectSub.addRow();

        	var sTyCon = this.dsSearch.getColumn(0, "TY_CON");
        	this.dsSelectSub.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectSub.setColumn(nRow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelectSub.setColumn(nRow, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelectSub.setColumn(nRow, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelectSub.setColumn(nRow, "TY_CON", this.dsSearch.getColumn(0, "TY_CON"));
        	this.dsSelectSub.setColumn(nRow, "CD_CON", this.dsSearch.getColumn(0, sTyCon)); // VENDOR / REFNO
        	//this.dsSelectSub.setColumn(nRow, "CD_ACNT_FROM", this.dsSearch.getColumn(0, "CD_ACNT_FROM"));
        	this.dsSelectSub.setColumn(nRow, "CD_ACNT_FROM", this.dsList.getColumn(this.dsList.rowposition, "CD_ACCOUNT"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "s_select=dsSelectSub";
        	var outData     = "dsListSub=s_select0";
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
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("CD_CORP", "string");
        	this.dsReportParam.addColumn("DS_CORP", "string");
        	this.dsReportParam.addColumn("DT_FROM", "string");
        	this.dsReportParam.addColumn("DT_TO", "string");
        	this.dsReportParam.addColumn("CD_ACCOUNT", "string");
        	this.dsReportParam.addColumn("DS_ACCOUNT", "string");
        	this.dsReportParam.addColumn("CD_DEPT_ACNT", "string");
        	this.dsReportParam.addColumn("DS_DEPT_ACNT", "string");
        	this.dsReportParam.addColumn("DT_TERM", "string");

        	this.dsReportParam.clearData();
        	this.dsReportParam.addRow();

        	var CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	var DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	var DT_FROM = this.dsSearch.getColumn(0, "DT_FROM");
        	var DT_TO = this.dsSearch.getColumn(0, "DT_TO");
        	var CD_ACCOUNT = this.dsSearch.getColumn(0, "CD_ACNT_FROM");
        	var DS_ACCOUNT = this.dsSearch.getColumn(0, "DS_ACNT_FROM");
        	var CD_DEPT_ACNT = this.dsSearch.getColumn(0, "CD_DEPT_ACNT");
        	var DS_DEPT_ACNT = this.dsSearch.getColumn(0, "DS_DEPT_ACNT");

        	var DT_FR_FROMAT = DT_FROM.substr(0,4) + "년 " + DT_FROM.substr(4,2)+"월 " + DT_FROM.substr(6,2) +"일";
        	var DT_TO_FROMAT = DT_TO.substr(0,4) + "년 " + DT_TO.substr(4,2)+"월 " + DT_TO.substr(6,2) +"일";

        	this.dsReportParam.setColumn(0, "CD_CORP", CD_CORP);
        	this.dsReportParam.setColumn(0, "DS_CORP", DS_CORP);
        	this.dsReportParam.setColumn(0, "CD_ACCOUNT", CD_ACCOUNT);
        	this.dsReportParam.setColumn(0, "DS_ACCOUNT", DS_ACCOUNT);
        	this.dsReportParam.setColumn(0, "DT_FROM", DT_FROM);
        	this.dsReportParam.setColumn(0, "DT_TO", DT_TO);
        	this.dsReportParam.setColumn(0, "DT_TERM", ("기 간 : " + DT_FR_FROMAT + " ~ " + DT_TO_FROMAT));
        	this.dsReportParam.setColumn(0, "CD_DEPT_ACNT", CD_DEPT_ACNT);
        	this.dsReportParam.setColumn(0, "DS_DEPT_ACNT", DS_DEPT_ACNT);


        	this.dsSelectSub.clearData();
        	var nRow = this.dsSelectSub.addRow();

        	var sTyCon = this.dsSearch.getColumn(0, "TY_CON");
        	this.dsSelectSub.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectSub.setColumn(nRow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelectSub.setColumn(nRow, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelectSub.setColumn(nRow, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelectSub.setColumn(nRow, "TY_CON", this.dsSearch.getColumn(0, "TY_CON"));
        	this.dsSelectSub.setColumn(nRow, "CD_CON", this.dsSearch.getColumn(0, sTyCon)); // VENDOR / REFNO
        	this.dsSelectSub.setColumn(nRow, "CD_ACNT_FROM", this.dsSearch.getColumn(0, "CD_ACNT_FROM"));

         	var inProc		= "_dsProc";
         	var inParam 	= "params=dsReportParam";
         	var inData   	= "s_select=dsSelectSub";
         	var reportpath  = "/dh/dhe/DHE_ACCOUNTSELECT.ozr";

         	gfnOpenReport(this, reportpath, inProc, inParam, inData);
         	return false;

        // 	var param = {};
        // 	param.FORM_TITLE = "계정코드별명세서";	// "계정코드별명세서(FROM~TO)"
        // 	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        // 	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        // 	param.DT_FR = this.dsSearch.getColumn(0, "DT_FR");
        // 	param.DT_TO = this.dsSearch.getColumn(0, "DT_TO");
        // 	param.CD_ACCOUNT = this.dsSearch.getColumn(0, "CD_ACCOUNT");
        // 	param.DS_ACCOUNT = this.dsSearch.getColumn(0, "DS_ACCOUNT");
        // // 	param.CD_ACNT_FROM = this.dsSearch.getColumn(0, "CD_ACCOUNT");
        // // 	param.DS_ACNT_FROM = this.dsSearch.getColumn(0, "DS_ACCOUNT");
        // // 	param.CD_ACNT_TO = this.dsSearch.getColumn(0, "CD_ACCOUNT");
        // // 	param.DS_ACNT_TO = this.dsSearch.getColumn(0, "DS_ACCOUNT");
        //
        // 	this.gfnFormOpen("DHE", "DHE_ACCOUNTSELECT_DLG", "fnPopupCallback", param, 1200, 800);
        // 	return false;
        };

         this.fnPopupCallback = function(svcID, value) {

        	if(strId.indexOf("DHE_ACCOUNTSELECT_DLG") > 0) {
        		if(!this.gfnIsNull(val) && val == true){
        			//this.FormBtns.Select.click();
        		}
        	}
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        // 	if (this.gfnIsNull(this.ccfCD_DEPT_ACNT.form.CDTextBox.text))
        // 	{
        // 		this.gfnAlert("귀속부서를 입력 하세요.");
        // 		this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        // 		return false;
        //  	}
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text))
        	{
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ccfCD_ACNT_FROM.form.CDTextBox.text))
        	{
        		this.gfnAlert("계정코드를 입력 하세요.");
        		this.ccfCD_ACNT_FROM.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclDT_FROM.value) || this.gfnIsNull(this.ctclDT_TO.value) )
        	{
        		this.gfnAlert("기간을 입력 하세요.");
        		this.ctclDT_TO.setFocus();
        		return false;
        	}

        	if ( this.gfnGetDiffDate(this.ctclDT_FROM.value, this.ctclDT_TO.value) < 0 )
        	{
        		this.gfnAlert("일자가 잘못 입력 되었습니다.");
        		this.ctclDT_TO.setFocus();
        		return false;
        	}

        	return true;
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
        		this.fnSetButton();
        		this.gfnGridAfterSelect(this.dxGrid);
        		/*this.gfnGridAfterSelect(this.dxGridSub);*/
        		this.FormBtns.SubSelect.click();
        	}
        	else if (svcID == "detail") {
        		if (this.dsList.rowcount < 1) {
        			this.fnSetButton();
        			this.dsListSub.clearData();
        			this.btnFormButtonGe.set_enable(false);
        		}
        		if (this.dsListSub.rowcount > 0) {
        			this.fnSetButton();
        			this.gfnSetFormStatus(this,"Q");
        			this.btnFormButtonGe.set_enable(true);
        		}

        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	switch(id) {
        		case "ccfCD_CORP":
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        			//dsUserParam.setColumn(nrow, "LEVLV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        			//dsUserParam.setColumn(nrow, "LEVCD_DEPT", this.UserInfo.LEVCD_DEPT_ACNT);
        			break;

        		case "ccfCD_DEPT_ACNT":
        			if(this.gfnIsNull(sCdCorp)){
        				this.gfnAlert("법인코드를 선택하세요.");
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        			//dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			//dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        			//dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);

        	//
        	// 		dsUserParam.setColumn(nrow, "LEVEL"		, this.UserInfo.LV_3);	//법인코드
        	// 		dsUserParam.setColumn(nrow, "ACNTUNIT"		, this.UserInfo.LEVCD_DEPT_ACNT);	//법인코드
        	// 		dsUserParam.setColumn(nrow, "CD_CORP"		, this.ccfCD_CORP.form.CDTextBox.value);	//법인코드
        			break;
        		case "ccfCD_SEMOK_FR":
        			if(!this.gfnIsNull(sCdCorp)){
        				var CD_ACNT_FROM = this.gfnNvl(this.ccfCD_ACNT_FROM.form.CDTextBox.value, "");
        				var CD_BIMOK = CD_ACNT_FROM.length - 2 > 0 ? CD_ACNT_FROM.substring(CD_ACNT_FROM.length - 2, 2) : "";
        				dsUserParam.setColumn(nrow, "CD_BIMOK", CD_BIMOK);
        			}else{
        				this.gfnAlert("계정코드는 필수입력 값입니다.");
        				return false;
        			}
        			break;
        		case "ccfCD_ACNT_FROM":
        		case "ccfCD_CON":
        			if(!this.gfnIsNull(sCdCorp)){
        				dsUserParam.setColumn(nrow, "CD_CORP", sCdCorp);
        			}else{
        				this.gfnAlert("법인코드는 필수입력 값입니다.");
        				return false;
        			}
        			break;
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "ccfCD_CORP") {
        		this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        		this.ccfCD_CON.form.fnCodeFindClear();
        	}else if (id == "ccfCD_ACNT_FROM"){
        		var CD_ACNT_FROM = this.gfnNvl(this.ccfCD_ACNT_FROM.form.CDTextBox.value, "");
        		var CD_BIMOK1 = CD_ACNT_FROM.length - 2 > 0 ? CD_ACNT_FROM.substring(CD_ACNT_FROM.length - 2, 2) : "";

        		if (CD_BIMOK1.length != 2){
        			this.ccfCD_SEMOK_FR.form.fnCodeFindClear();
        			this.ccfCD_SEMOK_FR.set_enable(false);
        		}else{
        			this.ccfCD_SEMOK_FR.set_enable(true);
        		}
        	}

        	this.fnSearchInit();
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };

        this.fnGrid_Celldblclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	//총계 합계 데이터일 경우 리턴
        	if(!this.gfnIsDate(nexacro.replaceAll(this.dsListSub.getColumn(e.row, "DT_ACCOUNT"), "-", ""))){
        		return false;
        	}

        	var param = {};

        	var no_slip = this.gfnTrim(this.dsListSub.getColumn(e.row, "CD_TRADE"));

        	if(this.gfnIsNull(no_slip))
        	{
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	param.CD_TRADE = no_slip;
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };

        this.fnGridSub_RowCellChanged = function(obj,e)
        {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	var objDs = obj.getBindDataset();
        	var rows = obj.getSelectedDatasetRows();
        	var sum = 0;
        	var bRet = true;

        	// 공통 > Setting > 그리드정보 에서 셋팅한 내용대로
        	var nGrdSpcRow = this.dsGridSpec.findRow( "DS_FIELD", colnm);
        	var TY_CELLTYPE = this.dsGridSpec.getColumn(nGrdSpcRow, "TY_CELLTYPE");
        	if(TY_CELLTYPE != "TEXT"){
        		for(var i = 0; i < rows.length; i++) {
        			var am = objDs.getColumn(rows[i], colnm);

        			bRet = isNaN(am); // 문자:true, 숫자:false

        			if(bRet == true){
        				break;
        			}

        			if(!this.gfnIsNull(am)) {
        				sum += nexacro.toNumber(am, 0);
        			}
        		}
        	}

        	// 숫자면 합계표시, 문자면 null
        	var textSummary = (bRet && TY_CELLTYPE == "TEXT") ? "" : this.gfnAppendComma(sum);
        	var colDSummary = obj.getBindCellIndex("body", "DT_ACCOUNT");
        	obj.setCellProperty("summ", colDSummary, "text", textSummary);
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnTbbHistory = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGridSub)) { return false; }

        	//총계 합계 데이터일 경우 리턴
        	if(!this.gfnIsDate(nexacro.replaceAll(this.dsListSub.getColumn(this.dsListSub.rowposition, "DT_ACCOUNT"), "-", ""))){
        		return false;
        	}

        	var param = {};

        	var no_slip = this.gfnTrim(this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_TRADE"));
        	if(this.gfnIsNull(no_slip)){
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	param.CD_TRADE = no_slip;
        	param.IUD_FLAG = "S";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        }

        this.divSearch_cboTYPE_onitemchanged = function(obj,e)
        {
        	this.fnSearchInit();
        	this.ccfCD_CON.form.fnCodeFindClear();
        	this.txtCD_CON.set_value("");

        	this.ccfCD_CON.set_visible((e.postvalue == "VENDOR"));
        	this.txtCD_CON.set_visible((e.postvalue == "REFNO") );
        };

        this.divSearch_ctclDT_FROM_onchanged = function(obj,e)
        {
        	this.fnSearchInit();
        };

        this.divSearch_ctclDT_TO_onchanged = function(obj,e)
        {
        	this.fnSearchInit();
        };


        // 스플리터 함수
        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_FROM.addEventHandler("onchanged",this.divSearch_ctclDT_FROM_onchanged,this);
            this.divSearch.form.ctclDT_TO.addEventHandler("onchanged",this.divSearch_ctclDT_TO_onchanged,this);
            this.divSearch.form.cboTYPE.addEventHandler("onitemchanged",this.divSearch_cboTYPE_onitemchanged,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.objGridSub.addEventHandler("oncelldblclick",this.divData_divDataRight_objGridSub_oncelldblclick,this);
        };
        this.loadIncludeScript("DHE_ACCOUNTSELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
