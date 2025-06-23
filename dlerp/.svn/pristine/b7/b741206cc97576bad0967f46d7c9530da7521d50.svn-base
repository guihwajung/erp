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
            this.set_titletext("대출신청관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_LOANMANAGE_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DABPR_LOANREPAYMENT_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row><Row><Col id=\"TARGET\">slip</Col><Col id=\"SP\">DABPR_LOANREQUEST_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">slipCancel</Col><Col id=\"SP\">DABPR_LOANREQUEST_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">slipRe</Col><Col id=\"SP\">DABPR_LOANREPAYMENT_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">slipReCancel</Col><Col id=\"SP\">DABPR_LOANREPAYMENT_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_LOANMANAGE_SAVE</Col></Row><Row><Col id=\"TARGET\">seqList</Col><Col id=\"SP\">DABPR_LOANSET_SEQLIST</Col></Row><Row><Col id=\"SP\">DABPR_LOANMANAGE_DTLOSTSAVE</Col><Col id=\"TARGET\">lost</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DABPR_LOANMANAGE_EXEC</Col></Row><Row><Col id=\"TARGET\">execCancel</Col><Col id=\"SP\">DABPR_LOANMANAGE_EXECCANCEL</Col></Row><Row><Col id=\"TARGET\">fileinfo</Col><Col id=\"SP\">DZUPR_FILEMANAGER_SELECT</Col></Row><Row><Col id=\"SP\">DZZPR_FILEMANAGER_SELECT</Col><Col id=\"TARGET\">filelist</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"ID_LOANSCH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LOANSCH\" type=\"STRING\" size=\"256\"/><Column id=\"TY_END\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsST_APRV", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTrans", this);
            obj._setContents("<ColumnInfo><Column id=\"TM_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_LOANREQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"78","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","1","10","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","99","10","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","196","10","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","224","10","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staST_APRV","338","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("승인상태");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboST_APRV","426","10","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsST_APRV");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("전체");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_LOANSCH","698","10","122","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("대출신청회차");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_LOANSCH","818","10","272","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_LAONSCH");
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","2","40","72","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","336","40","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","426","40","222","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_END","720","44","117","15",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("상환완료포함");
            obj.set_value("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","99","40","225","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","518","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_GUBUN","606","10","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("전체");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_DATE","6","10","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboTY_DATE_innerdataset = new nexacro.NormalDataset("divSearch_form_cboTY_DATE_innerdataset", obj);
            divSearch_form_cboTY_DATE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">R</Col><Col id=\"datacolumn\">신청일자</Col></Row><Row><Col id=\"codecolumn\">L</Col><Col id=\"datacolumn\">대출일자</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboTY_DATE_innerdataset);
            obj.set_text("신청일자");
            obj.set_value("R");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","50%","100.00%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("상환정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboST_APRV","value","dsSearch","ST_APRV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_LOANSCH.form.CDTextBox","value","dsSearch","ID_LOANSCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_LOANSCH.form.DSTextBox","value","dsSearch","DS_LOANSCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.chkYN_END","value","dsSearch","TY_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.cboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.cboTY_DATE","value","dsSearch","TY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_LOANMANAGE.xfdl", function() {
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

        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

            this.dsSearch.setColumn(0,"TY_DATE","R");
        	this.dsSearch.setColumn(0,"CD_CORP",this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0,"DS_CORP",this.AuthClient.DS_CORP);
        	this.dsSearch.setColumn(0,"DT_FROM", this.gfnAddMonth(this.gfnGetDate(), -1));
        	this.dsSearch.setColumn(0,"DT_TO", this.gfnGetDate());
        	this.chkYN_END.set_value(true);
        	this.btnSeq.set_enable(false);
        	this.fnSetCombo();


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
        	this.btnRequest        = this.gfnFormButtonAdd("btnRequest"    	, "fnRequest"); 	// 대출신청
        	this.btnRepayment      = this.gfnFormButtonAdd("btnRepayment"  	, "fnRepayment"); 	// 중도상환신청
            this.btnChange         = this.gfnFormButtonAdd("btnChange"     	, "fnChange"); 	    // 상환기간변경신청
        	this.btnSimulation     = this.gfnFormButtonAdd("btnSimulation" 	, "fnSimulation");  // 대출시뮬레이션
        	this.btnCancel    	   = this.gfnFormButtonAdd("btnCancel" 		, "fnCancel");      // 취소
        	this.btnAppr     	   = this.gfnFormButtonAdd("btnAppr" 		, "fnAppr");        // 승인
        	this.btnReturn         = this.gfnFormButtonAdd("btnReturn" 		, "fnReturn");   	// 반려
        	this.btnSeq            = this.gfnFormButtonAdd("btnSeq" 		, "fnSeq");   	    // 순위지정
        	this.btnExec           = this.gfnFormButtonAdd("btnExec" 		, "fnExec");   	    // 대출실행, 상환실행
        	this.btnExecCancel     = this.gfnFormButtonAdd("btnExecCancel" 	, "fnExecCancel");  // 대출실행, 상환실행 취소
        	this.btnIssueSlip      = this.gfnFormButtonAdd("btnIssueSlip" 	, "fnIssueSlip");   // 전표발행
        	this.btnSelectSlip     = this.gfnFormButtonAdd("btnSelectSlip" 	, "fnSelectSlip");   // 전표조회
        	this.btnCancelSlip     = this.gfnFormButtonAdd("btnCancelSlip" 	, "fnCancelSlip");   // 전표삭제
        	this.btnAllFileDown    = this.gfnFormButtonAdd("btnAllFileDown" , "fnbtnAllFileDown");   // 첨부파일 다운로드
        	this.btnAllFileDown2    = this.gfnFormButtonAdd("btnAllFileDown2" , "fnbtnAllFileDown2");
        	this.btnAllFileDown3    = this.gfnFormButtonAdd("btnAllFileDown3" , "fnbtnAllFileDown3");
        };
        // 버튼 활성/비활성 공통 처리
        this.fnButtonCheck = function (){
            var nrow = this.dsList.rowposition;
        	var bEnable = (nrow > 0) ? true : false;
        	var bExcute = (this.dsList.getColumn(nrow, "YN_EXCUTE")== "Y") ? true : false;

        	trace(" TY_GUBUN=>" + this.dsList.getColumn(nrow, "TY_GUBUN"));
        	trace(" ST_APRV=>" + this.dsList.getColumn(nrow, "ST_APRV"));
        	trace(" CD_TRADE=>" + this.gfnNvl(this.dsList.getColumn(nrow, "CD_TRADE"), ""));

        	this.btnRequest.set_enable(bEnable);
        	this.btnRepayment.set_enable(bEnable);
        	this.btnChange.set_enable(bEnable);
        	this.btnSimulation.set_enable(bEnable);
        	this.btnCancel.set_enable(bEnable &&( this.dsList.getColumn(nrow, "ST_APRV") == "02" || this.dsList.getColumn(nrow, "ST_APRV") == "03"));
        	this.btnAppr.set_enable(bEnable && this.dsList.getColumn(nrow, "ST_APRV") == "02");
        	this.btnReturn.set_enable(bEnable && this.dsList.getColumn(nrow, "ST_APRV") == "02");
        	this.btnExec.set_enable(bEnable && (this.dsList.getColumn(nrow, "ST_APRV") == "03" || this.dsList.getColumn(nrow, "ST_APRV") == "05"));
        	this.btnExecCancel.set_enable(bEnable && (this.dsList.getColumn(nrow, "ST_APRV") == "06"));

        	this.btnIssueSlip.set_enable(bEnable && bExcute && (this.dsList.getColumn(nrow, "TY_GUBUN") =="1" || this.dsList.getColumn(nrow, "TY_GUBUN") =="2")  && this.dsList.getColumn(nrow, "ST_APRV") == "06" && this.gfnNvl(this.dsList.getColumn(nrow, "CD_TRADE"), "") == "");
        	this.btnSelectSlip.set_enable(bEnable && bExcute && this.gfnNvl(this.dsList.getColumn(nrow, "CD_TRADE"), "") != "");
        	this.btnCancelSlip.set_enable(bEnable && bExcute && this.gfnNvl(this.dsList.getColumn(nrow, "CD_TRADE"), "") != "");
        };
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;

        	this.ccfCD_CORP 	= this.divSearch.form.ccfCD_CORP;
        	this.ccfID_SABUN    = this.divSearch.form.ccfID_SABUN;
        	this.cboST_APRV     = this.divSearch.form.cboST_APRV;
        	this.chkYN_END      = this.divSearch.form.chkYN_END;
        	this.ctclDT_FROM    = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO      = this.divSearch.form.ctclDT_TO;
        	this.ccfID_LOANSCH    = this.divSearch.form.ccfID_LOANSCH;
        	this.cboTY_GUBUN    = this.divSearch.form.cboTY_GUBUN;
        	this.cboTY_DATE     = this.divSearch.form.cboTY_DATE;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfID_LOANSCH.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_LOANSCH.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInitAsync(this.dxGrid, this.dsList, "DA", "DAB_LOANMANAGE");
        	//this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	// BUTTON, BUTTON-IN 처리
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.addEventHandler("oncelldblclick",this.dxGrid_oncelldblclick,this);

        	var colDsReturn = this.dxGrid.getBindCellIndex("body", "DS_RETURN");
        	this.dxGrid.setCellProperty("body",colDsReturn,"tooltiptext","bind:DS_RETURN");

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAB_LOANREPAYMENT");

        	//검색조건 변경 이벤트
        	this.bSelect= false;
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);

        	this.bSave = true;
        	this.isDblClick = false;

        	//파일
        	this.fileConfig = this.gfnGetFileConfig();
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_GUBUN" , "STRING");
        	this.dsSelect.addColumn("CD_CORP"  , "STRING");
        	this.dsSelect.addColumn("ID_SABUN" , "STRING");
        	this.dsSelect.addColumn("ST_APRV"  , "STRING");
        	this.dsSelect.addColumn("TY_END"   , "STRING");
        	this.dsSelect.addColumn("DT_FROM"   , "STRING");
        	this.dsSelect.addColumn("DT_TO"   , "STRING");
        	this.dsSelect.addColumn("ID_LOANSCH"   , "STRING");
        	this.dsSelect.addColumn("GR_SEARCH", "STRING");
        	this.dsSelect.addColumn("ID_USER"  , "STRING");
        	this.dsSelect.addColumn("TY_DATE"  , "STRING");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("NO_LOAN" , "STRING");
        	this.dsSelectSub.addColumn("CD_CORP"  , "STRING");
        	this.dsSelectSub.addColumn("DT_BASE"  , "STRING");
        	this.dsSelectSub.addColumn("YN_SALARY"  , "STRING");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("NO_LOANREQUEST", "INT");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("CD_LOAN", "string");
        	this.dsSave.addColumn("ST_APRV", "string");
        	this.dsSave.addColumn("DT_APRV", "string");
        	this.dsSave.addColumn("DT_LOAN", "string");
        	this.dsSave.addColumn("YN_EXCUTE", "string");
        	this.dsSave.addColumn("DS_RETURN", "string");
        	this.dsSave.addColumn("NO_LOANSEQ", "int");
        	this.dsSave.addColumn("NO_LOAN", "INT");
        	this.dsSave.addColumn("DT_LOST", "string");
        	this.dsSave.addColumn("DS_REM", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsSlips = new Dataset();
        	this.dsSlips.addColumn("TM_SLIP", "string");
        	this.dsSlips.addColumn("NO_LOANREQUEST", "INT");
        	this.dsSlips.addColumn("YN_SLIP", "string");
        	this.dsSlips.addColumn("CD_CORP", "string");
        	this.dsSlips.addColumn("ID_USER", "string");
        	this.dsSlips.addColumn("TY_GUBUN", "string");


        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.clearData();
            this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_GUBUN"  , this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_SABUN" , this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "ST_APRV" , this.dsSearch.getColumn(0, "ST_APRV"));
        	this.dsSelect.setColumn(0, "TY_END" , (this.chkYN_END.value) ? "" : "N" );
        	this.dsSelect.setColumn(0, "DT_FROM" , this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO" , this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "ID_LOANSCH" , this.dsSearch.getColumn(0, "ID_LOANSCH"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "ID_USER" , this.AuthClient.ID_SABUN);
        	this.dsSelect.setColumn(0, "TY_DATE" ,  this.dsSearch.getColumn(0, "TY_DATE"));

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
        	// 그리드 필수항목 체크

            if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		trace(" flag=>" + flag );
        		if( flag == "U" ) {
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSave.setColumn(nrow, "ID_SABUN" , this.dsList.getColumn(i, "ID_SABUN"));
        			this.dsSave.setColumn(nrow, "NO_LOANREQUEST"  , this.dsList.getColumn(i, "NO_LOANREQUEST"));
        			this.dsSave.setColumn(nrow, "TY_GUBUN"   , this.dsList.getColumn(i, "TY_GUBUN"));
        			this.dsSave.setColumn(nrow, "CD_LOAN"   , this.dsList.getColumn(i, "CD_LOAN"));
        			this.dsSave.setColumn(nrow, "ST_APRV"   , this.dsList.getColumn(i, "ST_APRV") );
        			this.dsSave.setColumn(nrow, "DT_APRV"   , this.dsList.getColumn(i, "DT_APRV"));
        			this.dsSave.setColumn(nrow, "DT_LOAN"   , this.dsList.getColumn(i, "DT_LOAN"));
        			this.dsSave.setColumn(nrow, "NO_LOANSEQ"   , this.dsList.getColumn(i, "NO_LOANSEQ"));
        			this.dsSave.setColumn(nrow, "DS_RETURN"   , this.dsList.getColumn(i, "DS_RETURN"));
        			this.dsSave.setColumn(nrow, "NO_LOAN"  , this.dsList.getColumn(i, "NO_LOAN"));
        			this.dsSave.setColumn(nrow, "DT_LOST"   , this.dsList.getColumn(i, "DT_LOST"));
        			this.dsSave.setColumn(nrow, "DS_REM"   , this.dsList.getColumn(i, "DS_REM"));
        			this.dsSave.setColumn(nrow, "ID_USER"   , this.AuthClient.ID_SABUN);
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
        }


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	// 멀티시트 샘플
        	var arrGrid = [this.dxGrid, this.dxGridSub];
        	var arrSheetName = ["신청정보", "상환정보"];
        	var sFileName = "사내대출신청관리";

        	// 1 (시트명: sheet1,sheet2.. 사용, 파일명: 화면명_날짜)
        	this.gfnExcelExportMulti(arrGrid, arrSheetName, sFileName);
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
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if (svcID == "selectSub") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	}  else if(svcID == "lost") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}  else if(svcID == "exec" || svcID =="execCancel") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	}else if (svcID == "combo") {
        		if (errorCode == 0) {
        			this.cboST_APRV.set_index(0);
        			this.cboTY_GUBUN.set_index(0);
        		}else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "seqList")
        	{
        	    this.gfnAlert("순위지정 처리되었습니다.", "fnMsgCallback");
        	}else if(svcID == "slipN")
        	{	if (errorCode == 0) {
        			this.fnIssue("Y");
        		}else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "slipY")
        	{
        		if (errorCode == 0) {
        			this.gfnAlert("전표발행 처리되었습니다.", "fnMsgCallback");
        		}else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if (svcID == "slipCancel")
        	{
        		if (errorCode == 0) {
        			this.gfnAlert("전표취소 처리되었습니다.", "fnMsgCallback");
        		}else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnMsgCallback = function(strId, val)
        {
        	this.FormBtns.Select.click();
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        // 셀 수정가능 여부 (반드시 EnterCell에서 처리할것)
        // cell 수정안되는것만 return false 할것
        // 마지막에 return true 해버리면 전체 컬럼 수정가능해져버림
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var objDs = this.dxGrid.getBindDataset();
        	var changFalg = false;

        	var NO_LOAN = this.gfnNvl(this.dsList.getColumn(row, "NO_LOAN"), "");
        	var TY_GUBUN = this.dsList.getColumn(row, "TY_GUBUN");
        	var ST_APRV = this.dsList.getColumn(row, "ST_APRV");

        	trace(" TY_GUBUN=>" + TY_GUBUN);
        	if (colnm == "DT_LOST")
        	{ if(TY_GUBUN == "1" && ST_APRV == "06" && NO_LOAN != "")
        		{
        			changFalg = true;
        		} else {
        			changFalg = false;
        		}
        	}
        	if (colnm == "NO_LOANSEQ")
        	{ if(TY_GUBUN == "1" && ST_APRV == "02")
        	  { changFalg = true;}
        	  else {changFalg = false; }
        	}

        	if (colnm == "DS_RETURN")
        	{
        		changFalg = true;
        		this.fnSetMutilineReadOnly(obj, row, cell);
        	}
        	if (colnm == "CHK" || colnm == "URL_PROOF" ||  colnm == "URL_PROOF2" ||  colnm == "URL_PROOF3" || colnm == "DS_REM" ) changFalg = true;
        	return changFalg;
        }

        this.fnSetMutilineReadOnly = function(obj, row, cell) {
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "DS_RETURN"), "edittype", "none");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "DS_RETURN"), "expandshow", "show");
        	var objDs = obj.getBindDataset();

        	objDs.set_enableevent(false);
        	for (var i = 0; i < objDs.rowcount; i++) {
        		objDs.setColumn(i, "MULTILINE_READONLY", "Y");
        		objDs.setColumn(i, "MULTILINE_EXCLUDE_COLUMNS", "");
        	}
        	objDs.set_enableevent(true);

        };


        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		if (!this.gfnIsNull(this.dsList.getColumn(e.row, "NO_LOAN")))
        		{
        			this.fnSelectSub(e.row);
        		} else {
        			this.dsListSub.clearData();
        		}
        		obj.oldrow = -1;
        		this.fnButtonCheck();
        	}
        };

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }


         this.fnGrid_ExpandUp = function(obj, e) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm == "URL_PROOF") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        		if(this.gfnGetFlag(this.dsList, e.row) == "I"){
        			this.gfnAlert("저장 후 파일첨부 진행.");
        			return false;
        		}

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DAB1";
        		fileManager.CD_DIR = [this.dsList.getColumn(e.row, "NO_LOANREQUEST")];
        		fileManager.IS_READONLY = false;
        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}else if (colnm == "URL_PROOF2")
        	{
        	    var fileManager = {};
        		fileManager.CD_GUBUN = "DAB2";
        		fileManager.CD_DIR = [this.dsList.getColumn(e.row, "NO_LOANREQUEST")];
        		fileManager.IS_READONLY = false;

        		this.gfnFileManager(fileManager, "fnFileCallback2");
        	}
        	else if (colnm == "URL_PROOF3")
        	{
        		var fileManager = {};
        		fileManager.CD_GUBUN = "DAB3";
        		fileManager.CD_DIR = [this.dsList.getColumn(e.row, "NO_LOANREQUEST")];
        		fileManager.IS_READONLY = false;

        		this.gfnFileManager(fileManager, "fnFileCallback3");
        	}
        }

        this.dxGrid_oncelldblclick = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;
        	this.isDblClick = true;
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	trace("e.cell =>" + e.cell);
        	if(e.cell >= 0 &&  e.cell <= 30) {
        		if(this.dsList.getColumn(e.row, "TY_GUBUN")=="1")
        		{
        			this.fnRequest();
        		}
        		if(this.dsList.getColumn(e.row, "TY_GUBUN")=="2")
        		{
        			this.fnRepayment();
        		}
        		if(this.dsList.getColumn(e.row, "TY_GUBUN")=="3")
        		{
        			this.fnChange();
        		}
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 파일개수를 다시 셋팅
        	trace("fnFileCallback strID =>" + strID);

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF", "첨부(" + val.Cnt + ")");
        	this.dsList.set_enableevent(true);
        };

        this.fnFileCallback2 = function(strID, val) {
            this.dsList.set_enableevent(false);
        	this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF2", "첨부(" + val.Cnt + ")");
        	this.dsList.set_enableevent(true);
        }
        this.fnFileCallback3 = function(strID, val) {
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF3", "첨부(" + val.Cnt + ")");
        	this.dsList.set_enableevent(true);
        }

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	trace("this.bSelect = " + this.bSelect)
        	if(e.oldvalue != e.newvalue) {
        		if( e.columnid == "CD_CORP" ) {
        			this.dsSearch.setColumn(0,"ID_SABUN","");
        			this.dsSearch.setColumn(0,"DS_HNAME","");
        		}
        		if( e.columnid == "ID_LOANSCH" ) {
        			if (this.gfnNvl(this.dsSearch.getColumn(0, "ID_LOANSCH"), "") =="" )
        			{
        				this.btnSeq.set_enable(false);
        			}
        			else
        			{
        				this.btnSeq.set_enable(true);
        			}
        		}

        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);

        	}

        };

        this.fnSetCombo = function ()
        {
           this.dsCombo = new Dataset();
           this.dsCombo.addColumn("TY_SEL"     , "string");
           this.dsCombo.addColumn("CD_PREFIX"  , "string");
           this.dsCombo.addColumn("CD_UPPREFIX", "string");

           this.dsCombo.addRow();
           this.dsCombo.setColumn(0, "TY_SEL"     , "A");
           this.dsCombo.setColumn(0, "CD_PREFIX"  , "LS");
           this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

           this.dsCombo.addRow();
           this.dsCombo.setColumn(1, "TY_SEL"     , "A");
           this.dsCombo.setColumn(1, "CD_PREFIX"  , "LP");
           this.dsCombo.setColumn(1, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsST_APRV=combo0 dsTY_GUBUN=combo1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , "");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "");
        	}
        	if (id == "ccfID_LOANSCH")
        	{
        		dsUserParam.setColumn(nrow, "YY_BASE"  , this.dsSearch.getColumn(0, "DT_TO").substr(0, 4));
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id,codeFindData) {
           	var arr = codeFindData;
        	if(id == "ccfID_SABUN") {
        		if(arr.length > 0) {
        			this.dsSearch.setColumn(0,"CD_CORP",arr[0]["CD_CORP"]);
        			this.dsSearch.setColumn(0,"DS_CORP",arr[0]["DS_CORP"]);
        			this.dsSearch.setColumn(0,"ID_SABUN",arr[0]["ID_SABUN"]);
        			this.dsSearch.setColumn(0,"DS_HNAME",arr[0]["DS_HNAME"]);

        		}
        	}
        	if (id == "ccfID_LOANSCH")
        	{
        		if(arr.length > 0) {
        			this.dsSearch.setColumn(0,"DT_FROM",arr[0]["DT_FROM"]);
        			this.dsSearch.setColumn(0,"DT_TO",arr[0]["DT_TO"]);
        			this.dsSearch.setColumn(0,"TY_GUBUN","1");
        			this.dsSearch.setColumn(0,"TY_DATE","R");
        		}
        		if (this.gfnNvl(this.dsSearch.getColumn(0, "ID_LOANSCH"), "") =="" )
        		{
        			this.btnSeq.set_enable(false);
        		}
        		else
        		{
        			this.btnSeq.set_enable(true);
        		}
        	}
        };
        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function(nRow) {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.dsListSub.clearData();

        	this.gfnGridBeforeSelect(this.dxGridSub);

            this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "NO_LOAN"  , this.dsList.getColumn(nRow, "NO_LOAN"));
        	this.dsSelectSub.setColumn(0, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectSub.setColumn(0, "YN_SALARY"  , "");
        	this.dsSelectSub.setColumn(0, "DT_BASE"  , "");

            var strSvcId    = "selectSub";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub";
        	var outData     = "dsListSub=selectSub0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        };


        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 대출 신청
        this.fnRequest = function(obj,e) {

        	//if (!this.gfnGridIsRow(this.dxGrid) && this.isDblClick) return false;
        	var fndRow = this.dsList.findRow("CHK", 1);

        	if (this.isDblClick == false)  // 신규
        	{
        		var param = {};
        		param.TY_WRK = "I";
        		param.TY_STATUS = "01";
        		param.GR_SEARCH = this.FormInfo.GR_SEARCH;

        	} else {           // 수정
        		var param = {};
        		param.TY_WRK     = "U";
        		param.CD_CORP    = this.dsSearch.getColumn(0, "CD_CORP");
        		param.ID_SABUN   = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        		param.NO_LOANREQUEST = this.dsList.getColumn(this.dsList.rowposition, "NO_LOANREQUEST");
        		param.GR_SEARCH = this.FormInfo.GR_SEARCH;
        	}

        	this.isDblClick = false;
        	trace('fnRequest > param', param);
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LOANREQUEST_DLG", "fnPopupCallback", param);
        };

        // 대출시뮬레이션
        this.fnSimulation = function(obj,e) {
        	var param = {};
        	param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        	param.ID_SABUN  = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.DS_HNAME  = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LOANSIMULATION_DLG", "fnPopupCallback", param);
        };

        // 중도 상환 신청
        this.fnRepayment = function(obj,e) {
        	trace(" this.isDblClick=>" + this.isDblClick);
        	if(this.isDblClick) {

        		var param = {};
        		param.TY_WRK   = "U"
        		param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        		param.ID_SABUN  = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        		param.NO_LOAN   = this.dsList.getColumn(this.dsList.rowposition, "NO_LOAN");
        		param.CD_LOAN    = this.dsList.getColumn(this.dsList.rowposition, "CD_LOAN");
        		param.NO_LOANREQUEST    = this.dsList.getColumn(this.dsList.rowposition, "NO_LOANREQUEST");
        		param.GR_SEARCH = this.FormInfo.GR_SEARCH;
        		this.isDblClick = false;
        	} else {

        		var nChkRow = this.dsList.findRow( "CHK", 1 );

        		if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        			this.gfnAlert("상환신청할 행을 선택하세요.");
        			return false;
        		}

        		if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") > 1){
        			this.gfnAlert("상환신청할 행을 1개만 선택하세요.");
        			return false;
        		}

        		if( this.dsList.getColumn(nChkRow,"ST_APRV") != "06" ) {
        			this.gfnAlert("승인상태가 '최종완료' 상태인 경우만 상환 신청 가능합니다.");
        			this.dsList.setColumn(nChkRow, "CHK", 0);
        			return false;
        		}

        		if( this.dsList.getColumn(nChkRow,"TY_GUBUN") != "1" ) {
        			this.gfnAlert("신규 대출 자료를 선택하세요 .");
        			this.dsList.setColumn(nChkRow, "CHK", 0);
        			return false;
        		}

        		if( this.dsList.getColumn(nChkRow,"YN_END") == "Y" ) {
        			this.gfnAlert("상환완료 대출입니다. 중도 상환 신청 할 수 없습니다.");
        			this.dsList.setColumn(nChkRow, "CHK", 0);
        			return false;
        		}
        		var param = {};
        		param.TY_WRK   = "I"
        		param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        		param.ID_SABUN  = this.dsList.getColumn(nChkRow, "ID_SABUN");
        		param.NO_LOAN   = this.dsList.getColumn(nChkRow, "NO_LOAN");
        		param.CD_LOAN    = this.dsList.getColumn(nChkRow, "CD_LOAN");
        		param.GR_SEARCH = this.FormInfo.GR_SEARCH;
        	}
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LOANREPAYMENT_DLG", "fnPopupCallback", param);
        	this.isDblClick = false;
        };
        //대출상환기간변경
        this.fnChange = function(obj,e) {
        	trace(" this.isDblClick=>" + this.isDblClick);
        	if(this.isDblClick) {

        		var param = {};
        		param.TY_WRK   = "U"
        		param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        		param.ID_SABUN  = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        		param.NO_LOAN   = this.dsList.getColumn(this.dsList.rowposition, "NO_LOAN");
        		param.CD_LOAN    = this.dsList.getColumn(this.dsList.rowposition, "CD_LOAN");
        		param.NO_LOANREQUEST    = this.dsList.getColumn(this.dsList.rowposition, "NO_LOANREQUEST");
        		param.GR_SEARCH = this.FormInfo.GR_SEARCH;
        		this.isDblClick = false;
        	} else {

        		var nChkRow = this.dsList.findRow( "CHK", 1 );
        		if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        			this.gfnAlert("상환기간 변경 신청할 행을 선택하세요.");
        			return false;
        		}

        		if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") > 1){
        			this.gfnAlert("상환기간 변경 신청할 행을 1개만 선택하세요.");
        			return false;
        		}

        		if( this.dsList.getColumn(nChkRow,"TY_GUBUN") != "1" ) {
        			this.gfnAlert("신규 대출 자료를 선택하세요 .");
        			this.dsList.setColumn(nChkRow, "CHK", 0);
        			return false;
        		}

        		if( this.dsList.getColumn(nChkRow,"ST_APRV") != "06" ) {
        			this.gfnAlert("승인상태가 '최종완료' 상태인 경우만 상환 기간 변경 신청 가능합니다.");
        			this.dsList.setColumn(nChkRow, "CHK", 0);
        			return false;
        		}
        		if( this.dsList.getColumn(nChkRow,"YN_END") == "Y" ) {
        			this.gfnAlert("상환완료 대출입니다. 상환기간 변경 신청 할 수 없습니다.");
        			this.dsList.setColumn(nChkRow, "CHK", 0);
        			return false;
        		}
        		var param = {};
        		param.TY_WRK   = "I"
        		param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        		param.ID_SABUN  = this.dsList.getColumn(nChkRow, "ID_SABUN");
        		param.NO_LOAN   = this.dsList.getColumn(nChkRow, "NO_LOAN");
        		param.CD_LOAN    = this.dsList.getColumn(nChkRow, "CD_LOAN");
        		param.GR_SEARCH = this.FormInfo.GR_SEARCH;
        	}
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LOANCHANGE_DLG", "fnPopupCallback", param);
        	this.isDblClick = false;
        }
        this.fnPopupCallback = function (svcId, sRtn)
        {

        	this.FormBtns.Select.click();

        };

        //접수취소
        this.fnCancel = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("취소할 행을 선택하세요.");
        		return false;
        	}
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i, "CHK") == 1){
        			if( !(this.dsList.getColumn(i,"ST_APRV") == "02" || this.dsList.getColumn(i,"ST_APRV") == "03"|| this.dsList.getColumn(i,"ST_APRV") == "04")) {
        				this.gfnAlert("상태값을 확인하세요. 취소할 수 없습니다.");
        				return false;
        			}
        		}
        	}

        	this.gfnConfirm("취소 처리 하시겠습니까?", "fnAppr_callback" , "01");

        };

        this.fnAppr_callback = function (svcId, sRtn)
        {
        	if (sRtn)
        	{
        		switch(svcId) {
        		case "01":
        			for (var i = 0; i < this.dsList.rowcount; i++) {
        				if (this.dsList.getColumn( i , "CHK") == 1)
        				{
        					this.gfnSetFormStatus(this, "U");
        					this.dsList.setColumn(i, this.ucFlag , "U");
        					this.dsList.setColumn(i, "ST_APRV" , svcId);
        				}
        			}
        			this.fnSave(svcId);
        			break;
        		case "03":
        			for (var i = 0; i < this.dsList.rowcount; i++) {
        				if (this.dsList.getColumn( i , "CHK") == 1)
        				{
        					this.dsList.set_enableevent(true);
        					this.gfnSetFormStatus(this, "U");
        					this.dsList.setColumn(i, this.ucFlag , "U");

        					this.dsList.setColumn(i, "ST_APRV" , svcId);
        					this.dsList.setColumn(i, "DT_APRV" , this.gfnGetDate()); // 승인일자
        				}
        			}
        			this.fnSave(svcId);
        			break;
        		default:
        		}
        	}
        }
        // 승인
        this.fnAppr = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("승인할 행을 선택하세요.");
        		return false;
        	}

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) == "U" || this.dsList.getColumn(i, this.ucFlag) == "I" || this.dsList.getColumn(i, this.ucFlag) == "D"){
        			this.gfnAlert("수정중인자료가 있습니다. 저장후 작업하세요.");
        			return false;
        		}
        		if(this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i, "CHK") == 1){
        			if( this.dsList.getColumn(i,"ST_APRV") != "02" ) {
        				this.gfnAlert("승인상태가 '신청' 상태인 경우만 승인 가능합니다.");
        				return false;
        			}
        		}

        	}

        	this.gfnConfirm("승인 처리 하시겠습니까?", "fnAppr_callback" , "03");
        };
        // 반려
        this.fnReturn = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	//var nChkRow = this.dsList.findRow("CHK" ,"1");

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("반려할 행을 선택하세요.");
        		return false;
        	}

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) == "U" || this.dsList.getColumn(i, this.ucFlag) == "I" || this.dsList.getColumn(i, this.ucFlag) == "D"){
        			this.gfnAlert("수정중인자료가 있습니다. 저장후 작업하세요.");
        			return false;
        		}
        		if(this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i, "CHK") == 1){
        			if( this.dsList.getColumn(i,"ST_APRV") != "02" ) {
        				this.gfnAlert("승인상태가 '신청' 상태인 경우만 반려 가능합니다.");
        				return false;
        			}
        		}

        	}

         	var param = {};
        // 		param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        // 		param.ID_SABUN  = this.dsList.getColumn(nChkRow, "ID_SABUN");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LOAN_REJECT_DLG", "fnReturnCallback", param);

        };

        this.fnReturnCallback =  function (svcId, value)
        {
        	if (value)
        	{
        		var json = JSON.parse(value);

        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn( i , "CHK") == 1)
        			{
        				this.gfnSetFormStatus(this, "U");
        				this.dsList.setColumn(i, this.ucFlag , "U");
        				this.dsList.setColumn(i, "ST_APRV" , "04");
        				this.dsList.setColumn(i, "DS_RETURN" , json.DS_RETURN);
        				this.dsList.setColumn(i, "DT_APRV" , this.gfnGetDate());  // 반려일자
        			}
        		}
        		this.fnSave("04");
        	}
        };
        // 순위지정
        this.fnSeq = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	this.gfnConfirm("순위지정을 하시겠습니까?", "fnSeq_callback" );
        };

        this.fnSeq_callback = function (svcId, value)
        {
        	if (value)
        	{
        		this.dsSeq = new Dataset();
        		this.dsSeq.addColumn("CD_CORP", "string");
        		this.dsSeq.addColumn("ID_LOANSCH", "string");
        		this.dsSeq.addColumn("TY_GUBUN", "string");
        		this.dsSeq.addColumn("ID_USER", "string");

        		this.dsSeq.clearData();
        		var nrow = this.dsSeq.addRow();
        		this.dsSeq.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsSeq.setColumn(nrow, "ID_LOANSCH", this.dsSearch.getColumn(0, "ID_LOANSCH"));
        		this.dsSeq.setColumn(nrow, "TY_GUBUN", "1");
        		this.dsSeq.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);


        		if (this.dsSeq.rowcount == 0) return;

        		var strSvcId    = "seqList";
        		var strSvcType  = "savesel";
        		var inProc		= "_dsProc";
        		var inData      = "seqList=dsSeq";
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
        }
        //최종완료
        this.fnExec = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("행을 선택하세요.");
        		return false;
        	}

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) == "U" || this.dsList.getColumn(i, this.ucFlag) == "I" || this.dsList.getColumn(i, this.ucFlag) == "D"){
        			this.gfnAlert("수정중인자료가 있습니다. 저장후 작업하세요.");
        			return false;
        		}
        		if(this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i, "CHK") == 1){
        			if( this.dsList.getColumn(i,"ST_APRV") != "03" ) {
        				this.gfnAlert("승인상태가 '승인' 상태인 경우에 작업 가능합니다.");
        				return false;
        			}
        		}
        	}

        	this.gfnConfirm("최종 완료 처리 하시겠습니까?", "fnExec_callback" );

        };

        this.fnExec_callback =  function (svcId, value)
        {
        	if (value)
        	{
        		this.dsExec = new Dataset();
        		this.dsExec.addColumn("CD_CORP", "string");
        		this.dsExec.addColumn("NO_LOANREQUEST", "INT");
        		this.dsExec.addColumn("TY_GUBUN", "string");
        		this.dsExec.addColumn("NO_LOAN", "INT");
        		this.dsExec.addColumn("DT_REPAYMENT", "string");
        		this.dsExec.addColumn("ID_USER", "string");

        		this.dsExec.clearData();

        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn( i , "CHK") == 1)
        			{
        				var nrow = this.dsExec.addRow();
        				this.dsExec.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsExec.setColumn(nrow, "NO_LOANREQUEST", this.dsList.getColumn(i, "NO_LOANREQUEST"));
        				this.dsExec.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsExec.setColumn(nrow, "NO_LOAN", this.dsList.getColumn(i, "NO_LOAN"));
        				this.dsExec.setColumn(nrow, "DT_REPAYMENT", this.dsList.getColumn(i, "DT_REPAYMENT"));
        				this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		if (this.dsExec.rowcount == 0) return;

        		var strSvcId    = "exec";
        		var strSvcType  = "savesel";
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
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        };

        // 최종실행 취소
        this.fnExecCancel = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("행을 선택하세요.");
        		return false;
        	}

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) == "U" || this.dsList.getColumn(i, this.ucFlag) == "I" || this.dsList.getColumn(i, this.ucFlag) == "D"){
        			this.gfnAlert("수정중인자료가 있습니다. 저장후 작업하세요.");
        			return false;
        		}
        		if(this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i, "CHK") == 1){
        			if( this.dsList.getColumn(i,"ST_APRV") != "06" ) {
        				this.gfnAlert("승인상태가 '최종완료' 상태인 경우만 취소 가능합니다.");
        				return false;
        			}
        			if( this.gfnNvl(this.dsList.getColumn(i,"CD_TRADE"),"") != "" )
        			{
        				this.gfnAlert("전표발행이 완료 되었습니다. 취소 할 수 없습니다.");
        				return false;
        			}
        		}

        	}

        	this.gfnConfirm("최종 완료 취소 처리 하시겠습니까?", "fnExecCancel_callback" );

        };

        this.fnExecCancel_callback =  function (svcId, value)
        {
        	if (value)
        	{
        		this.dsExecCancel = new Dataset();
        		this.dsExecCancel.addColumn("CD_CORP", "string");
        		this.dsExecCancel.addColumn("NO_LOANREQUEST", "INT");
        		this.dsExecCancel.addColumn("TY_GUBUN", "string");
        		this.dsExecCancel.addColumn("NO_LOAN", "INT");
        		this.dsExecCancel.addColumn("DT_REPAYMENT", "string");
        		this.dsExecCancel.addColumn("ID_USER", "string");

        		this.dsExecCancel.clearData();

        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn( i , "CHK") == 1)
        			{
        				var nrow = this.dsExecCancel.addRow();
        				this.dsExecCancel.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsExecCancel.setColumn(nrow, "NO_LOANREQUEST", this.dsList.getColumn(i, "NO_LOANREQUEST"));
        				this.dsExecCancel.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsExecCancel.setColumn(nrow, "NO_LOAN", this.dsList.getColumn(i, "NO_LOAN"));
        				this.dsExecCancel.setColumn(nrow, "DT_REPAYMENT", this.dsList.getColumn(i, "DT_REPAYMENT"));
        				this.dsExecCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		if (this.dsExecCancel.rowcount == 0) return;

        		var strSvcId    = "execCancel";
        		var strSvcType  = "savesel";
        		var inProc		= "_dsProc";
        		var inData      = "execCancel=dsExecCancel";
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
        };

        // 전표발행
        this.fnIssueSlip = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("전표발행할 행을 선택하세요.");
        		return false;
        	}

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) == "U" || this.dsList.getColumn(i, this.ucFlag) == "I" || this.dsList.getColumn(i, this.ucFlag) == "D"){
        			this.gfnAlert("수정중인자료가 있습니다. 저장후 작업하세요.");
        			return false;
        		}
        		if(this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i, "CHK") == 1){
        			if( this.dsList.getColumn(i,"ST_APRV") != "06" ) {
        				this.gfnAlert("승인상태가 '최종완료' 상태인 경우만 전표발행 가능합니다.");
        				return false;
        			}
        			if( this.gfnNvl(this.dsList.getColumn(i,"CD_TRADE"),"") != "" ) {
        				this.gfnAlert("이미 전표발행된 자료입니다.");
        				return false;
        			}
        			if( this.gfnNvl(this.dsList.getColumn(i,"TY_GUBUN"),"") =="3" ) {
        				this.gfnAlert("상환기간변경 건은 전표발행 할 수 없습니다.");
        				return false;
        			}
        		}
        	}

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i, "CHK") == 1){
        			var TY_GUBUN = this.dsList.getColumn(i, "TY_GUBUN");
        			if( this.gfnNvl(TY_GUBUN,"") != this.dsList.getColumn(i, "TY_GUBUN") ) {
        				this.gfnAlert("신청구분이 서로 다른 자료는 한번에 전표발행 할 수 없습니다. 신청구분을 확인하세요.");
        				return false;
        			}
        		}
        	}

        	this.gfnConfirm("전표발행 처리 하시겠습니까?", "fnIssueSlip_callback" );

        };

        this.fnIssueSlip_callback =  function (svcId, value)
        {
        	if (value)
        	{
        		this.fnIssue("N");
        	}
        }

        // 전표조회
        this.fnSelectSlip = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var NO_SLIP = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");

        	if ( this.gfnIsNull(NO_SLIP) ) {
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	var param = {};
        	param.CD_TRADE = NO_SLIP;
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopCallBack", param);

        };
        // 전표삭제
        this.fnCancelSlip = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("전표취소할 행을 선택하세요.");
        		return false;
        	}

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i, "CHK") == 1){
        			if(this.gfnIsNull(this.dsList.getColumn(i, "CD_TRADE"))) {
        				this.gfnAlert("발행된 전표가 없습니다.");
        				return false;
        			}
        		}
        	}
        	this.gfnConfirm("전표취소 처리 하시겠습니까?", "fnCancelSlip_callback" );

        };

        this.fnCancelSlip_callback = function (svcId, value)
        {
        	if (value)
        	{
        		this.dsCancel = new Dataset();
        		this.dsCancel.addColumn("CD_TRADE", "string");
        		this.dsCancel.addColumn("ID_USER", "string");
        		this.dsCancel.addColumn("TY_GUBUN", "string");

        		this.dsCancel.clearData();
        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i, "CHK") == 1){
        				var nrow = this.dsCancel.addRow();
        				this.dsCancel.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        				this.dsCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsCancel.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        			}
        		}

        		if (this.dsCancel.rowcount == 0) return;

        		var strSvcId    = "slipCancel";
        		var strSvcType  = "savesel";
        		var inProc		= "_dsProc";
        		var inData      = "slipCancel=dsCancel";
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
        };

        this.fnIssue = function (slipYn)
        {
        	this.dsSlips.clearData();

        	// 전표발행
        	if (slipYn == "N") {

        		tmSlip = this.AuthClient.ID_USER + this.gfnGetDate("milli");


        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsSlips.addRow();
        				this.dsSlips.setColumn(nrow, "TM_SLIP", tmSlip);
        				this.dsSlips.setColumn(nrow, "NO_LOANREQUEST", this.dsList.getColumn(i, "NO_LOANREQUEST"));
        				this.dsSlips.setColumn(nrow, "YN_SLIP", slipYn);
        				this.dsSlips.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSlips.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSlips.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				tyGubun = this.dsList.getColumn(i, "TY_GUBUN");
        			}
        		}

        	// 전표발행후처리
        	} else {
        		var nrow = this.dsSlips.addRow();
        		this.dsSlips.setColumn(nrow, "TM_SLIP", tmSlip);
        		this.dsSlips.setColumn(nrow, "NO_LOANREQUEST", -1);
        		this.dsSlips.setColumn(nrow, "YN_SLIP", slipYn);
        		this.dsSlips.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsSlips.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsSlips.setColumn(nrow, "TY_GUBUN", tyGubun);
        	}

        	if (this.dsSlips.rowcount == 0) return;

        	var strSvcId    = "slip" + slipYn;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "slip=dsSlips";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        // 첨부파일 전체 다운로드
        this.fnbtnAllFileDown = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("첨부파일 다운로드 할 행을 선택하세요.");
        		return false;
        	}

        	this.fileRef = [];
        	for (var i=0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			this.fileRef.push(this.dsList.getColumn(i, "NO_LOANREQUEST"));
        		}
        	}

        	this.fileGubun = "DAB1";

        	var fileManager = {};
        	fileManager.CD_GUBUN = this.fileGubun;
        	fileManager.CD_DIR = [];
        	fileManager.IS_READONLY = true;
        	fileManager.CD_REF = [this.fileRef.join(','), ''];

        	this.gfnFileManager(fileManager, "fnFileCallback4");

        }

        // 대출약정서/보증증권 전체 다운로드
        this.fnbtnAllFileDown2 = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("대출약정서/보증서 다운로드 할 행을 선택하세요.");
        		return false;
        	}
        	this.fileRef = [];
        	for (var i=0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			this.fileRef.push(this.dsList.getColumn(i, "NO_LOANREQUEST"));
        		}
        	}

        	this.fileGubun = "DAB2";

        	var fileManager = {};
        	fileManager.CD_GUBUN = this.fileGubun;
        	fileManager.CD_DIR = [];
        	fileManager.IS_READONLY = true;
        	fileManager.CD_REF = [this.fileRef.join(','), ''];

        	this.gfnFileManager(fileManager, "fnFileCallback4");

        }

        // 사후서류 첨부 전체 다운로드
        this.fnbtnAllFileDown3 = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("사후서류첨부파일 다운로드 할 행을 선택하세요.");
        		return false;
        	}
        	this.fileRef = [];
        	for (var i=0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			this.fileRef.push(this.dsList.getColumn(i, "NO_LOANREQUEST"));
        		}
        	}

        	this.fileGubun = "DAB3";

        	var fileManager = {};
        	fileManager.CD_GUBUN = this.fileGubun;
        	fileManager.CD_DIR = [];
        	fileManager.IS_READONLY = true;
        	fileManager.CD_REF = [this.fileRef.join(','), ''];

        	this.gfnFileManager(fileManager, "fnFileCallback4");

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
        };
        this.loadIncludeScript("DAB_LOANMANAGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
