(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAC_MGTYEARLYVACA");
            this.set_titletext("품의서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,790);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_HEADER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FOOTER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CNT_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CNT_PRE\" type=\"STRING\" size=\"256\"/><Column id=\"QN_CNT_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"QN_CNT_PRE\" type=\"STRING\" size=\"256\"/><Column id=\"QN_CNT_INCDEC\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE_PRE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_AUTOSLIPBASE_APRV_DLG_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSingle</Col><Col id=\"SP\">DAUPR_AUTOSLIPBASE_APRV_DLG_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAUPR_AUTOSLIPBASE_APRV_DLG_SAVE</Col></Row><Row><Col id=\"TARGET\">aprv_execute</Col><Col id=\"SP\">DAUPR_AUTOSLIPBASE_APRV_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"YM_SALARY\"/><Col id=\"TY_SALARY\"/><Col id=\"SN_SALARY\"/><Col id=\"ID_SABUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_SALARY","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("귀속년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_SALARY","staYM_SALARY:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.getSetter("AfterCDTextChanged").set("fnSearchInit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYM_SALARY:45","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","0.0","staYM_SALARY:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("지급구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","staTY_SALARY:0.0","staYM_SALARY:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_readonly("false");
            obj.set_value("S");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","cboTY_SALARY:5","staYM_SALARY:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboSN_SALARY_innerdataset = new nexacro.NormalDataset("divSearch_form_cboSN_SALARY_innerdataset", obj);
            divSearch_form_cboSN_SALARY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboSN_SALARY_innerdataset);
            obj.set_text("1");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","cboSN_SALARY:0.0","staCD_CORP:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staCD_CORP:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTITLE1","3","divSearch:10","820","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("인원 현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","staTITLE1:0","830","160",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stalDS_CNT_NOW_bg","0","staTITLE1:5","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_CNT_NOW","0","staTITLE1:5","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stalDS_CNT_PRE_bg","edtDS_CNT_NOW:-1","staTITLE1:5","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_CNT_PRE","edtDS_CNT_NOW:-1","staTITLE1:5","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stalDS_CNT_INCDEC","stalDS_CNT_PRE_bg:-1","staTITLE1:5","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("증감");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stalRM_BIGO","stalDS_CNT_INCDEC:-1","staTITLE1:5","220","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stalQN_CNT_NOW_bg","0","stalDS_CNT_NOW_bg:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtQN_CNT_NOW","5","stalDS_CNT_NOW_bg:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stalQN_CNT_PRE_bg","stalQN_CNT_NOW_bg:-1","stalDS_CNT_PRE_bg:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtQN_CNT_PRE","stalQN_CNT_NOW_bg:5","stalDS_CNT_PRE_bg:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stalQN_CNT_INCDEC_bg","stalQN_CNT_PRE_bg:-1","stalDS_CNT_INCDEC:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtQN_CNT_INCDEC","stalQN_CNT_PRE_bg:10","stalDS_CNT_INCDEC:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stalRM_BIGO_bg","stalQN_CNT_INCDEC_bg:-1","stalRM_BIGO:-1","220","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtRM_BIGO","stalQN_CNT_INCDEC_bg:5","stalRM_BIGO:4","210","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta200","3","divData:10","500","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("급여 내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta201",null,"divData:10","50%","20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[단위 : 원]");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Div("divData3","0","sta200:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","10",null,null,"0","0",null,null,null,null,this.divData3.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtDS_CNT_NOW","value","dsDetail","DS_CNT_NOW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtDS_CNT_PRE","value","dsDetail","DS_CNT_PRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtQN_CNT_NOW","value","dsDetail","QN_CNT_NOW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtQN_CNT_PRE","value","dsDetail","QN_CNT_PRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtQN_CNT_INCDEC","value","dsDetail","QN_CNT_INCDEC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtRM_BIGO","value","dsDetail","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctclYM_SALARY.form.TextBox","value","dsSearch","YM_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboTY_SALARY","value","dsSearch","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboSN_SALARY","value","dsSearch","SN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_AUTOSLIPBASE_APRV.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj, e) {
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
        	this.fnInit();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAprv     = this.gfnFormButtonAdd("btnAprv"    , "fnAprv");			// 결재상신 버튼
        	this.btnDocQ     = this.gfnFormButtonAdd("btnDocQ"    , "fnAprvDocQ");		// 결재문서조회 버튼
        };

        this.fnUpdateStatusExtendButton = function() {
        	var nrow = this.dsList.rowposition;

        	this.btnAprv.set_enable(false);
        	this.btnDocQ.set_enable(false);

        	var ST_APRV    = this.dsList.getColumn(nrow, "ST_APRV");
        	var AprvCnt    = this.dsList.getColumn(nrow, "BTN_APRV");
        	var DocQCnt    = this.dsList.getColumn(nrow, "BTN_DOC_Q");

        	// 결재상신
        	this.btnAprv.set_enable(AprvCnt == "Y");
        	// 결재문서조회
        	this.btnDocQ.set_enable(DocQCnt == "Y");
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid = this.divData3.form.objGrid;

        	// 검색영역
        	this.ccfCD_CORP 		= this.divSearch.form.ccfCD_CORP;		// 법인코드
        	this.ctclYM_SALARY 		= this.divSearch.form.ctclYM_SALARY;
        	this.cboTY_SALARY 		= this.divSearch.form.cboTY_SALARY;
        	this.cboSN_SALARY 		= this.divSearch.form.cboSN_SALARY;
        	this.ccfID_SABUN 		= this.divSearch.form.ccfID_SABUN;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_AUTOSLIPBASE_APRV");	// DAC_PERSONALVOCA
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.BeforeUserDataSetParam 	= "fnGridBeforeUserDataSetParam";	// 그리드 코드파인드 설정
        	this.dxGrid.EnterCell 				= "fnGrid_EnterCell";				// 셀 수정가능 여부
        	this.dxGrid.AfterCDTextChanged 		= "fnGridAfterCDTextChanged";		// 그리드 코드파인드 값 변경
        	this.dxGrid.AfterEdit 				= "fnGridAfterEdit";				// 셀 변경 후 이벤트
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	// 검색영역
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회
        	this.dsSelect = new Dataset();
        // 	this.dsSelect.addColumn("YR_BASE", "string");
        // 	this.dsSelect.addColumn("CD_CORP", "string");
        // 	this.dsSelect.addColumn("ID_PERSON", "int");
        // 	this.dsSelect.addColumn("ID_SABUN", "string");
        // 	this.dsSelect.addColumn("DT_VACAFROM", "string");
        // 	this.dsSelect.addColumn("DT_VACATO", "string");
        // 	this.dsSelect.addColumn("CD_VACATION", "string");
        // 	this.dsSelect.addColumn("ID_USER", "string");
        // 	this.dsSelect.addColumn("IP_ADDR", "string");
        // 	this.dsSelect.addColumn("GR_SEARCH", "string");
        // 	this.dsSelect.addColumn("GR_CORP", "string");

        	this.dsSelect.addColumn("TY_WORK", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_SALARY", "string");
        	this.dsSelect.addColumn("TY_SALARY", "string");
        	this.dsSelect.addColumn("SN_SALARY", "int");

        	// 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("YM_SALARY", "string");
        	this.dsSave.addColumn("TY_SALARY", "string");
        	this.dsSave.addColumn("SN_SALARY", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_CODE", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("RM_BIGO", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	// 결재
        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("TY_WRK", "string");
        	this.dsApproval.addColumn("YM_SALARY", "string");
        	this.dsApproval.addColumn("TY_SALARY", "string");
        	this.dsApproval.addColumn("SN_SALARY", "int");
        	this.dsApproval.addColumn("CD_CORP", "string");
        	this.dsApproval.addColumn("ID_APRV", "string");
        	this.dsApproval.addColumn("NO_APRV", "int");
        };

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {

        	this.dsSearch.setColumn(0, "YM_SALARY", this.getOwnerFrame().YM_SALARY);
        	this.dsSearch.setColumn(0, "TY_SALARY", this.getOwnerFrame().TY_SALARY);
        	this.dsSearch.setColumn(0, "SN_SALARY", this.getOwnerFrame().SN_SALARY);
        	this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsSearch.setColumn(0, "ID_SABUN", this.getOwnerFrame().ID_SABUN);

        	this.FormBtns.Select.click();
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {
        	if(!this.fnSelectValid()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        // 	this.dsSelect.setColumn(0, "YR_BASE"	, "2023");
        // 	this.dsSelect.setColumn(0, "CD_CORP"	, "01");
        // 	this.dsSelect.setColumn(0, "ID_PERSON"	, 5);
        // 	this.dsSelect.setColumn(0, "ID_SABUN"	, "CBC2202023");
        // 	this.dsSelect.setColumn(0, "DT_VACAFROM", "");
        // 	this.dsSelect.setColumn(0, "DT_VACATO"	, "");
        // 	this.dsSelect.setColumn(0, "CD_VACATION", "");
        // 	this.dsSelect.setColumn(0, "ID_USER"	, this.AuthClient.ID_USER);
        // 	this.dsSelect.setColumn(0, "IP_ADDR"	, this.AuthClient.NO_IP);
        // 	this.dsSelect.setColumn(0, "GR_SEARCH"	, this.FormInfo.GR_SEARCH);
        // 	this.dsSelect.setColumn(0, "GR_CORP"	, this.AuthClient.CD_CORP);

        	this.dsSelect.setColumn(0, "TY_WORK", "Q");
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YM_SALARY", this.ctclYM_SALARY.form.TextBox.value);
        	this.dsSelect.setColumn(0, "TY_SALARY", this.cboTY_SALARY.value);
        	this.dsSelect.setColumn(0, "SN_SALARY", this.cboSN_SALARY.value);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "select=dsSelect";
         	var outData     = "dsDetail=select0 dsList=select1";
        // 	var inData      = "select=dsSelect selectSingle=dsSelect";
        // 	var outData     = "dsList=select0 dsDetail=selectSingle0";
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

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {

        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE"		, flag);
        				this.dsSave.setColumn(nrow, "YM_SALARY", this.dsSearch.getColumn(0, "YM_SALARY"));
        				this.dsSave.setColumn(nrow, "TY_SALARY", this.dsSearch.getColumn(0, "TY_SALARY"));
        				this.dsSave.setColumn(nrow, "SN_SALARY", this.dsSearch.getColumn(0, "SN_SALARY"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "CD_CODE", this.dsList.getColumn(i, "CD_CODE"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "RM_BIGO", this.dsDetail.getColumn(0, "RM_BIGO"));
        				this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
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
        this.fnSelectValid = function() {
        	return true;
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 결재상신 버튼
        this.fnAprv = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        		if (isOk == false) {
        			return;
        		}

        		var initParam = {
        			CD_CORP: this.dsSearch.getColumn(0, "CD_CORP"),
        			ID_AP_TYPE: "DAU01",
        			TY_WRK: "APRV",
        			ID_APRV: this.AuthClient.ID_SABUN,
        			TT_DOC: "품의서",
        			//TT_DOC: "휴가신청서 (" + this.dsSearch.getColumn(0, "YY_TUITION") + "년도 " + this.dsSearch.getColumn(0, "CD_TUITION").replace("0", "") + "분기)",
        		}
        		this.gfnAprv(initParam, "fnAprvCallback", "APRV");
        	});
        }

        // 결재문서조회 버튼
        this.fnAprvDocQ = function(obj, e) {
        	var oParams = {
        		CD_CORP: this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"),
        		NO_APRV: this.dsList.getColumn(this.dsList.rowposition, "NO_APRV"),
        	}
        	this.gfnAprvDoc(oParams, this.fnAprvDocQCallback);
        }

        this.fnAprvDocQCallback = function() {
        	console.log('fnAprvDocQCallback');
        	alert('fnAprvDocQCallback');
        }


        this.fnAprvMsg = function(obj) {
        // 	var DT_VACAFROM = this.dsList.getColumn(this.dsList.rowposition, "DT_VACAFROM");
        // 	var DT_VACATO = this.dsList.getColumn(this.dsList.rowposition, "DT_VACATO");
        // 	var QN_VACATION = this.dsList.getColumn(this.dsList.rowposition, "QN_VACATION");
        // 	var DS_VACATION = this.dsList.getColumn(this.dsList.rowposition, "DS_VACATION");
        // 	var msg = "휴가기간 [" + DT_VACAFROM + " ~ " + DT_VACATO + "] ( " + QN_VACATION + " 일)\n";
        // 	msg += DS_VACATION + " 신청에 대하여 " + obj.text + " 하시겠습니까?";

        	var msg = "품의서 상신을 하시겠습니까?";
        	return msg;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		//this.fnUpdateStatusExtendButton();
        	} else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "APRV" || svcID == "APRVCNC") {
        		this.gfnOpenAppr(function() {
        			this.FormBtns.Select.click();
        		});
        	}
        }

        // 결재상신 버튼 콜백
        // 취소결재상신 버튼 콜백
        // 결재상태초기화 버튼 콜백
        this.fnAprvCallback = function(strId, val) {
        	this.dsApproval.clearData();
        	this.dsApproval.addRow();

        	this.dsApproval.setColumn(0, "TY_WRK",  strId);
        	this.dsApproval.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsApproval.setColumn(0, "ID_PERSON", this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON"));
        	this.dsApproval.setColumn(0, "NO_SEQ"	, this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ"));
        	this.dsApproval.setColumn(0, "ID_APRV", this.AuthClient.ID_SABUN);
        	if (strId == "APRV" || strId == "APRVCNC") {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsAprvOut.getColumn(0, "NO_APRV"));
        	} else {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsList.getColumn(this.dsList.rowposition, "NO_APRV"));
        	}

        	var strSvcId    = strId;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "aprv_execute=dsApproval";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP"	, this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"	, this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER"	, this.AuthClient.ID_USER);
        	} else if (id == "ccfID_SABUN") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			this.gfnAlert("법인을 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP"	, this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"	, this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	, this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP"	, "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE"	, "%");   // 재직구분
        	} else if (id == "ccfCD_VACATION") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX"	, "GT");	 // "GM");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if (id == "ccfCD_CORP") {
        		this.ccfID_SABUN.form.fnCodeFindClear();
        		this.edtID_PERSON.set_value("");
        	} else if (id == "ccfID_SABUN") {
        		if (arr.length > 0) {
        			this.ccfCD_CORP.form.CDTextBox.set_value(arr[0]["CD_CORP"]);
        			this.ccfCD_CORP.form.DSTextBox.set_value(arr[0]["DS_CORP"]);
        			this.dsSearch.set_enableevent(false);
        			this.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        			this.dsSearch.set_enableevent(true);

        			this.FormBtns.Select.click();
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        };

        this.fnGrid_EnterCell = function(obj, row, cell) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var flag = this.gfnGetFlag(this.dsList, row);

        };

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        }

        this.fnGridAfterEdit = function(obj,e) {
        	if( e.columnid == "DT_VACAFROM" //근태시작일
        			||e.columnid == "DT_VACATO" //근태종료일
        			||e.columnid == "TY_VACATION" //근태구분
        			||e.columnid == "CD_VACATION" //근태코드
        	) {
        		if (e.oldvalue != e.newvalue) {
        		}
        	}
        }

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		obj.oldrow = -1;
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsSearch_onvaluechanged = function(obj,e){
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.dsDetail.clearData();

        		if (e.columnid == "ID_SABUN" && this.gfnIsNull(e.newvalue)) {
        			this.dsList.clearData();
        			this.dsDetail.clearData();
        		}
        	}
        };

        this.dsList_onvaluechanged = function(obj,e){

        };

        // 결재문서
        this.divData3_objGrid_oncelldblclick = function(obj,e){

        // 	if(!this.gfnGridIsRow(this.dxGrid)) return;
        //
        // 	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        // 	var NO_GROUPWARE = this.dsList.getColumn(this.dsList.rowposition, "NO_GROUPWARE"); //그룹웨어번호
        // 	//20220627 추가 김민영  로그인사번이 아닌 조회된 사번이여야 함.
        // 	var LINK_SABUN = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"); //사번
        //
        // 	//결재상태, 그룹웨어번호
        // 	if(colnm != "CD_APPROVAL" && colnm != "NO_GROUPWARE") {
        // 		return;
        // 	}
        // 	if(this.gfnIsNull(NO_GROUPWARE)){
        // 		return;
        // 	}
        //
        // 	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        // 	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        // 	var nDCnt = this.dsList.findRow(this.ucFlag,"D");
        //
        // 	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        // 		this.gfnAlert("저장 후 처리하세요.", "");
        // 		return;
        // 	}
        //
        // 	// 그룹웨어전자결재URL
        // 	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        // 	url += "approval/legacy/goFormLink.do?mode=complete";
        //
        // 	//20220627 수정 김민영 로그인사번이 아닌 조회된 사번이여야 함.
        // 	//url += "&ID_USER="+this.AuthClient.ID_USER;
        // 	url += "&ID_USER="+LINK_SABUN;
        // 	url += "&fiid="+NO_GROUPWARE;
        // 	trace("url>>", url);
        // 	//http://dev.gw.dsmec.co.kr/approval/legacy/goFormLink.do?mode=complete&ID_USER=ERP1&fiid=
        //
        // 	window.open(url, "_blank", "width=1024,height=600,menubar=no,scrollbars=no,resizable=no,status=no");
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboSN_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.staTITLE1.addEventHandler("onclick",this.sta100_onclick,this);
            this.sta200.addEventHandler("onclick",this.sta200_onclick,this);
            this.divData3.form.objGrid.addEventHandler("oncelldblclick",this.divData3_objGrid_oncelldblclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_AUTOSLIPBASE_APRV.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
