(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DGA_EQUIP_MOVE");
            this.set_titletext("비품 이동내역 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DAMPR_EQUIP_MOVE_SELECT</Col><Col id=\"TARGET\">select</Col></Row><Row><Col id=\"SP\">DAMPR_EQUIP_MOVE_SAVE</Col><Col id=\"TARGET\">save</Col></Row><Row><Col id=\"TARGET\">fileinfo_x</Col><Col id=\"SP\">DZUPR_FILEMANAGER_SELECT</Col></Row><Row><Col id=\"TARGET\">selectRpt</Col><Col id=\"SP\">DGAPR_EQUIP_MOVE_REPORT</Col></Row><Row><Col id=\"TARGET\">headRpt</Col><Col id=\"SP\">DGAPR_EQUIP_MOVE_HEADER_REPORT</Col></Row><Row><Col id=\"TARGET\">bodyRpt</Col><Col id=\"SP\">DGAPR_EQUIP_MOVE_BODY_REPORT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfoParam", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_EQUIPMENT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PRODUCT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SERIAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_MOVE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DISUSE_APP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INCOME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE_IN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_IN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_MANAGER_FIRST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MANAGER_FIRST\" type=\"STRING\" size=\"256\"/><Column id=\"ID_MANAGER_SECOND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MANAGER_SECOND\" type=\"STRING\" size=\"256\"/><Column id=\"CD_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DISUSE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"NM_PRT_USR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptListTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_EQUIPMENT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PRODUCT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SERIAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_MOVE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DISUSE_APP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INCOME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE_IN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_IN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_MANAGER_FIRST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MANAGER_FIRST\" type=\"STRING\" size=\"256\"/><Column id=\"ID_MANAGER_SECOND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MANAGER_SECOND\" type=\"STRING\" size=\"256\"/><Column id=\"CD_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DISUSE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"NM_PRT_USR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_EQUIPMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE_IN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_MANAGER_FIRST\" type=\"STRING\" size=\"256\"/><Column id=\"YN_FINAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_IN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staNO_EQUIPMENT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_EQUIPMENT","staNO_EQUIPMENT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("150");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAM_EQUIPINFO_CODEFIND");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ccfNO_EQUIPMENT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_GUBUN","staTY_GUBUN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_BUY","ccfTY_GUBUN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("구입일");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_FROM","staDT_BUY:0.0","10.0","98","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","calDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_TO","staCD_TILDE:0.0","10.0","94","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","staNO_EQUIPMENT:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("전입법인");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE_IN","staCD_CORP:0.0","staNO_EQUIPMENT:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_MANAGER","ccfCD_SITE_IN:0.0","staNO_EQUIPMENT:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("책임자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_MANAGER_FIRST","staID_MANAGER:0.0","staNO_EQUIPMENT:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_DEPT");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","staNO_EQUIPMENT:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE_IN","ccfCD_CORP:0.0","staNO_EQUIPMENT:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("전입부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_FINAL","ccfID_MANAGER_FIRST:0.0","staNO_EQUIPMENT:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("최종여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_FINAL","staYN_FINAL:0.0","staNO_EQUIPMENT:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var divSearch_form_cboYN_FINAL_innerdataset = new nexacro.NormalDataset("divSearch_form_cboYN_FINAL_innerdataset", obj);
            divSearch_form_cboYN_FINAL_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\">%</Col></Row><Row><Col id=\"datacolumn\">Y</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">N</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboYN_FINAL_innerdataset);
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.getSetter("BeforeUserDataSetParam").set("fnGrid_BeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnGrid_AfterCDTextChanged");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfNO_EQUIPMENT.form.CDTextBox","value","dsSearch","NO_EQUIPMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfTY_GUBUN.form.CDTextBox","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfTY_GUBUN.form.DSTextBox","value","dsSearch","DS_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_MANAGER_FIRST.form.CDTextBox","value","dsSearch","ID_MANAGER_FIRST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.calDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.calDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboYN_FINAL","value","dsSearch","YN_FINAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_SITE_IN.form.CDTextBox","value","dsSearch","CD_SITE_IN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_SITE_IN.form.DSTextBox","value","dsSearch","DS_SITE_IN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAM_EQUIP_MOVE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.nRptAppend = 0;

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

        	var today = this.gfnGetDate();

        	//구입일
        	this.calDT_FROM.set_value(today.substring(0,6)+"01");
        	this.calDT_TO.set_value(this.gfnGetLastDate(today));

        	if (this.FormInfo.GR_SEARCH >= "7" ){
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP) ;
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP) ;

        		this.ccfCD_SITE_IN.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        		this.ccfCD_SITE_IN.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.ccfCD_SITE_IN.set_enable(false);
        	}

        	this.cboYN_FINAL.set_index(0);
        	this.ccfNO_EQUIPMENT.form.DSTextBox.set_visible(false);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnHistoryCardPrint = this.gfnFormButtonAdd("HistoryCardPrint", "fnExtBtnEvent", "이력카드출력");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfNO_EQUIPMENT = this.divSearch.form.ccfNO_EQUIPMENT;
        	this.ccfTY_GUBUN = this.divSearch.form.ccfTY_GUBUN;
        	this.ccfID_MANAGER_FIRST = this.divSearch.form.ccfID_MANAGER_FIRST;
        	this.calDT_FROM = this.divSearch.form.calDT_FROM;
        	this.calDT_TO = this.divSearch.form.calDT_TO;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.cboYN_FINAL = this.divSearch.form.cboYN_FINAL;
        	this.ccfCD_SITE_IN = this.divSearch.form.ccfCD_SITE_IN;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;


        // 	//파일
        // 	this.fileConfig = this.gfnGetFileConfig();
        //
        // 	//파일 업다운 경로 정보
        // 	this.fnInfo();

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_EQUIPMENT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_EQUIPMENT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfTY_GUBUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfTY_GUBUN.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfID_MANAGER_FIRST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_MANAGER_FIRST.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_SITE_IN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE_IN.AfterCDTextChanged = "fnAfterCDTextChanged";


        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAM_EQUIP_MOVE");
        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	// 그리드 코드파인드 값 변경
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";


        	var grSearch = this.FormInfo.GR_SEARCH;	// 권한


        	//var strExpr = "expr:dataset.getRowType(currow)!='1' && " +  grSearch + " == '1' ?'combo':'none'";
        	// 최종여부
        	var strExpr1 = "expr:nx_flag=='#'? 'combo': " + grSearch + " == '1' ?'combo':'none'";
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "YN_FINAL"), "edittype", strExpr1);

        // 	// 전출부서
        // 	var strExpr2 = "expr:nx_flag=='#'? 'text': " + grSearch + " == '1' ?'text':'none'";
        // 	var strExpr3 = "expr:nx_flag=='#'? 'text': " + grSearch + " == '1' ?'show':'hide'";
        //
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DS_SITE_OUT"), "edittype", strExpr2);
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DS_SITE_OUT"), "expandshow", strExpr3);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_EQUIPMENT", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("CD_SITE_IN", "string");
        	this.dsSelect.addColumn("ID_MANAGER_FIRST", "string");
        	this.dsSelect.addColumn("YN_FINAL", "string");

        	//저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("NO_EQUIPMENT", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("DT_INCOME", "string");
        	this.dsSave.addColumn("YN_FINAL", "string");
        	this.dsSave.addColumn("CD_CORP_IN", "string");
        	this.dsSave.addColumn("CD_SITE_IN", "string");
        	this.dsSave.addColumn("ID_MANAGER_FIRST", "string");
        	this.dsSave.addColumn("ID_MANAGER_SECOND", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        // 	// 레포트
        // 	this.dsSelectRpt = new Dataset();
        // 	this.dsSelectRpt.addColumn("NO_EQUIPMENT", "string");
        // 	this.dsSelectRpt.addColumn("NO_SEQ", "bigdecimal");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValid()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_EQUIPMENT", this.dsSearch.getColumn(0, "NO_EQUIPMENT"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "CD_SITE_IN", this.dsSearch.getColumn(0, "CD_SITE_IN"));
        	this.dsSelect.setColumn(0, "ID_MANAGER_FIRST", this.dsSearch.getColumn(0, "ID_MANAGER_FIRST"));
        	this.dsSelect.setColumn(0, "YN_FINAL", this.dsSearch.getColumn(0, "YN_FINAL"));

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
        };

        /*
         *	조회 Validate
         */
        this.fnSelectValid = function() {
        	var validate = true;

        // 	if(this.gfnIsNull(this.ccfNO_EQUIPMENT.form.CDTextBox.value)) {
        // 		validate = false
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfNO_EQUIPMENT.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("관리번호를 입력하세요.", "fnVaidateCallback");
        // 		return validate;
        // 	}

        // 	if(this.gfnIsNull(this.ccfTY_GUBUN.form.CDTextBox.value)) {
        // 		validate = false
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfTY_GUBUN.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("품명을 입력하세요.", "fnVaidateCallback");
        // 		return validate;
        // 	}

        	if (this.gfnIsNull(this.calDT_FROM.value) || this.gfnIsNull(this.calDT_TO.value) )  {
        		validate = false;
        		this.fnDtVaidateCallback = function() {
        			this.calDT_FROM.setFocus();
        		}
        		this.gfnAlert("구입일을 입력하세요", "fnDtVaidateCallback");
        		return validate;
        	}

        	if (!this.gfnIsNull(this.calDT_FROM.value) && !this.gfnIsNull(this.calDT_TO.value) )  {
        		if (this.calDT_FROM.value > this.calDT_TO.value )  {
        			validate = false;
        			this.fnDtVaidateCallback = function() {
        				this.calDT_FROM.setFocus();
        			}
        			this.gfnAlert("구입일 시작일이 검색 종료일보다 클 수 없습니다.", "fnDtVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        		}
        		return validate;
        	}

        // 	if(this.gfnIsNull(this.ccfCD_SITE_IN.form.CDTextBox.value)) {
        // 		validate = false
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_SITE_IN.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("사업장을 입력하세요.", "fnVaidateCallback");
        // 		return validate;
        // 	}

        	return validate;
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.setColumn(nrow, "YN_FINAL", "N");
        	this.dsList.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsList.setColumn(nrow, "DS_CORP", this.dsSearch.getColumn(0, "DS_CORP"));

        	if (this.FormInfo.GR_SEARCH >= "7" ){ // 본인부서 셋팅
        		this.dsList.setColumn(nrow, "CD_SITE_IN", this.AuthClient.CD_DEPT);
        		this.dsList.setColumn(nrow, "DS_SITE_IN", this.AuthClient.DS_DEPT);
        	}
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        	var nRow = this.dsList.rowposition;
        	var flag = this.gfnGetFlag(this.dsList, nRow);
        	var grSearch = this.FormInfo.GR_SEARCH;	// 권한
        	//grSearch = "7";

        	var rows = this.dxGrid.getSelectedDatasetRows();
        	if(rows.length > 0) {
        		for(var i =0; i < rows.length; i++) {
        			var nrow = rows[i];
        			if(this.gfnNvl(this.dsList.getColumn(nrow, "FILE_CNT"), 0) > 0){
        				this.gfnAlert("첨부파일 먼저 삭제하세요!");
        				return;
        			}
        		}
        	}

        	if(grSearch == "1"){
        		this.gfnGridDel(this.dxGrid);
        	}else{
        		if(flag == "I"){
        			this.gfnGridDel(this.dxGrid);
        		}
        	}
        };

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
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "NO_EQUIPMENT", this.dsList.getColumn(i, "NO_EQUIPMENT"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "DT_INCOME", this.dsList.getColumn(i, "DT_INCOME"));
        				this.dsSave.setColumn(nrow, "YN_FINAL", this.dsList.getColumn(i, "YN_FINAL"));
        				this.dsSave.setColumn(nrow, "CD_CORP_IN", this.dsList.getColumn(i, "CD_CORP_IN"));
        				this.dsSave.setColumn(nrow, "CD_SITE_IN", this.dsList.getColumn(i, "CD_SITE_IN"));
        				this.dsSave.setColumn(nrow, "ID_MANAGER_FIRST", this.dsList.getColumn(i, "ID_MANAGER_FIRST"));
        				this.dsSave.setColumn(nrow, "ID_MANAGER_SECOND", this.dsList.getColumn(i, "ID_MANAGER_SECOND"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	//var outData     = "dsOutput=save";
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
        }


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        // 	} else if (svcID == "fileinfo") {
        // 		if(this.dsInfo.rowcount == 0) {
        // 			this.gfnAlert("[" + this.dsInfoParam.getColumn(0, "CD_GUBUN") + "] 설정값이 없습니다.");
        // 			return;
        // 		}else{
        // 			this.fileConfig.allowTypes = ["jpg","jpeg","gif","png","xls","doc","hwp","pdf","xlsx","ppt", "pptx"]; // 넥사브라우저 전용, 웹은 적용불가
        // 			this.fileConfig.uploadUrl = this.fileConfig.uploadUrl.replace("path=", "path=" + this.dsInfo.getColumn(0, "DS_PATH"));
        // 			this.fileConfig.downloadUrl = "/file/downloadFile.do";
        // 		}
        //
        // 	} else if(svcID == "selectRpt") {
        // 		if(this.dsRptListTemp.rowcount > 0){
        // 			var nAppendRow = this.dsRptList.addRow();
        // 			var bSucc = this.dsRptList.copyRow(nAppendRow, this.dsRptListTemp, 0);
        // 			// 출력자정보 셋팅
        // 			this.dsRptList.setColumn(nAppendRow, "NM_PRT_USR", this.AuthClient.DS_HNAME); 						//발행자명
        // 			this.dsRptList.setColumn(nAppendRow, "DT_PRT", this.fnDateToFormatStr(this.gfnGetDate("time"))); 	//발행일
        // 		}
        // 		this.nRptAppend = this.nRptAppend - 1;
        // 		//this.fnTrace("this.nRptAppend==>", this.nRptAppend);
        // 		if(this.nRptAppend == 0){
        // 			this.fnPrintByParamJson();
        // 		}
         	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         //코드 파인드
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	switch(id) {
        		case "ccfNO_EQUIPMENT": // 관리번호
        			break;

        		case "ccfTY_GUBUN": // 구분
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "M1");
        			break;

        		case "ccfCD_CORP"://전입법인
        			break;

        		case "ccfCD_SITE_IN": //전입부서
        			var sCD_CORP = this.dsSearch.getColumn(0,"CD_CORP");
        			if (this.gfnIsNull(sCD_CORP)) {
        				this.gfnAlert("법인을 먼저 입력하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "N");
        			break;

        		case "ccfID_MANAGER_FIRST" ://책임자
        			var sCD_CORP = this.dsSearch.getColumn(0,"CD_CORP");
        			if (this.gfnIsNull(sCD_CORP)) {
        				this.gfnAlert("전입법인을 먼저 입력하세요.");
        				return false;
        			}
        			var sCD_SITE_IN = this.dsSearch.getColumn(0,"CD_SITE_IN");
        			if (this.gfnIsNull(sCD_SITE_IN)) {
        				this.gfnAlert("전입부서를 먼저 입력하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP);	//전입법인코드
        			dsUserParam.setColumn(nrow, "CD_DEPT", sCD_SITE_IN);	//전입부서코드
        			break;
        		default:
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	//관리번호
        	if(id == "ccfNO_EQUIPMENT"){
        		if(arr.length >0){
        			if(this.ccfCD_CORP.enable){
        				this.dsSearch.setColumn(0, "CD_CORP", arr[0]["CD_CORP"]);
        				this.dsSearch.setColumn(0, "DS_CORP", arr[0]["DS_CORP"]);
        			}
        			this.dsSearch.setColumn(0, "TY_GUBUN", arr[0]["TY_GUBUN"]);
        			this.dsSearch.setColumn(0, "DS_GUBUN", arr[0]["DS_GUBUN"]);
        		}
        	}
        	if(id == "ccfCD_CORP"){ //법인
        		this.ccfCD_SITE_IN.form.fnCodeFindClear();
        		this.ccfID_MANAGER_FIRST.form.fnCodeFindClear();
        	}
        	if(id == "ccfCD_SITE_IN"){ //부서
        		this.ccfID_MANAGER_FIRST.form.fnCodeFindClear();
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	switch(id) {
        		case "ccfNO_EQUIPMENT": // 관리번호
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			break;

        		case "DAX_CFCORP_IN"://전입법인
        			break;

        		case "DAX_CFDEPT_IN": // 전입부서
        			var sCD_CORP_IN = this.dsList.getColumn(this.dsList.rowposition,"CD_CORP_IN");
        			if (this.gfnIsNull(sCD_CORP_IN)) {
        				this.gfnAlert("전입법인을 먼저 입력하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP_IN);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "N");
        			break;

        		case "DAX_CFDEPT_OUT"://전출부서
        			var sCD_CORP_OUT = this.dsList.getColumn(this.dsList.rowposition,"CD_CORP_OUT");
        			if (this.gfnIsNull(sCD_CORP_OUT)) {
        				this.gfnAlert("전출법인을 먼저 입력하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP_OUT);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "N");
        			break;

        		case "DAX_CFBASEINFO_DEPT": // 관리책임자 정
        			var sCD_CORP_IN = this.dsList.getColumn(this.dsList.rowposition,"CD_CORP_IN");
        			if (this.gfnIsNull(sCD_CORP_IN)) {
        				this.gfnAlert("전입법인을 먼저 입력하세요.");
        				return false;
        			}
        			var sCD_SITE_IN = this.dsList.getColumn(this.dsList.rowposition,"CD_SITE_IN");
        			if (this.gfnIsNull(sCD_SITE_IN)) {
        				this.gfnAlert("전입부서를 먼저 입력하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP_IN);	//전입법인코드
        			dsUserParam.setColumn(nrow, "CD_DEPT", sCD_SITE_IN);	//전입부서코드
        			break;
        		case "DAX_CFBASEINFO_DEPT_SUB": // 관리책임자 부
        			var sCD_CORP_IN = this.dsList.getColumn(this.dsList.rowposition,"CD_CORP_IN");
        			if (this.gfnIsNull(sCD_CORP_IN)) {
        				this.gfnAlert("전입법인을 먼저 입력하세요.");
        				return false;
        			}
        			var sCD_SITE_IN = this.dsList.getColumn(this.dsList.rowposition,"CD_SITE_IN");
        			if (this.gfnIsNull(sCD_SITE_IN)) {
        				this.gfnAlert("전입부서를 먼저 입력하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP_IN);	//전입법인코드
        			dsUserParam.setColumn(nrow, "CD_DEPT", sCD_SITE_IN);	//전입부서코드
        			break;
         		default:
        	}

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;
        	if(id == "DAM_EQUIPINFO_CODEFIND"){
        		//관리번호
        		if(arr.length >0){
        trace("CD_DEPT", arr[0]["CD_DEPT"]);
        trace("DS_DEPT", arr[0]["DS_DEPT"]);
        			this.dsList.setColumn(this.dsList.rowposition, "YN_FINAL" , "Y");
        			this.dsList.setColumn(this.dsList.rowposition, "CD_CORP_OUT" , arr[0]["CD_CORP"]); //전출법인
        			this.dsList.setColumn(this.dsList.rowposition, "DS_CORP_OUT" , arr[0]["DS_CORP"]);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_SITE_OUT" , arr[0]["CD_DEPT"]); //전출부서
        			this.dsList.setColumn(this.dsList.rowposition, "DS_SITE_OUT" , arr[0]["DS_DEPT"]);
        		}
        	}

        };

         //파일 업로드
        this.fnGrid_ExpandUp = function(obj, e){

        	var colId = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	switch(colId){
        		case "FILE_ATTACH":	//멀티 업로드
        			var fileManager = {};
        			fileManager.CD_GUBUN = "DAM2";
        			fileManager.CD_DIR = [ this.dsList.getColumn(this.dsList.rowposition, "NO_EQUIPMENT"), this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ")];
        			// CD_DIR 만 지정시 CD_DIR 배열 순대로 키1,키2,키3 까지 자동지정
        			// 저장되는 디렉토리와 키값이 다른경우 CD_REF 추가로 사용
        			//fileManager.CD_REF = [ "A1" ];
        			// 권한 및 상태에 따라 업로드,삭제 가능여부 지정 (기본: true)
        			fileManager.IS_READONLY = false;

        			this.gfnFileManager(fileManager, "fnFileCallback");
        			break;

        		default:
        	}
        };

        this.fnFileCallback = function(strID, val) {
        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(this.dsList.rowposition, "FILE_CNT", val.Cnt);
        	if(val.Cnt == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_ATTACH", "첨부");
        	} else {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_ATTACH", "첨부(" + val.Cnt + ")");
        	}
        	this.dsList.set_enableevent(true);
        };

        // 셀 수정가능 여부 (반드시 EnterCell에서 처리할것)
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var flag = this.gfnGetFlag(this.dsList, row);
        	var grSearch = this.FormInfo.GR_SEARCH;	// 권한
        	//grSearch = "7";

        	if(grSearch != "1" && (this.gfnIsNull(flag) || flag == "U")){
        		return false;
        	}

        	// grSearch가 7이상일 때 입력 시 전입부서, 첨부파일 입력 불가능
        	if(flag == "I"){
        		if(grSearch != "1"){
        			if (colnm == "DS_SITE_IN" || colnm == "CD_SITE_IN" ){
        				return false;
        			}
        		} else {
        			if (colnm == "FILE_ATTACH"){
        				return false;
        			}
        		}

        	}

        	// 공통 > Setting > 그리드정보 에서 셋팅한 내용대로
        	var nGrdSpcRow = this.dsGridSpec.findRow( "DS_FIELD", colnm);
        	var YN_READONLY = this.dsGridSpec.getColumn(nGrdSpcRow, "YN_READONLY");
        	if(YN_READONLY == "Y") return false;
        	if(YN_READONLY =="U" && (this.gfnIsNull(flag) || flag == "U")){	// flag 가 U 이거나 빈값
        		return false;
        	}
        	return true;
        }

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // this.fnExtBtnEvent = function(btn){
        // 	var param = {};
        // 	var btnUrl;
        // 	switch(btn.id){
        // 		case "btnExt_HistoryCardPrint": //이력카드출력
        // 			btnUrl = "";
        // 			//this.fnSelectRpt();	// 비품이력 내역( 1건만 출력됨 )
        // 			this.fnEquipReport();	// 비품이력 내역(여러건들이 출력됨)
        // 			break;
        //
        // 		default:
        //
        // 	}
        //
        // 	//this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "", param);
        // };

        // // DGA_EQUIP_CARD 비품이력카드 화면과 같은 출력물을 사용한다.
        // this.fnSelectRpt = function() {
        //
        // 	if(this.dsList.rowcount == 0) return;
        //
        // 	var rowFlag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);
        // 	if(rowFlag == "#" || rowFlag == "I" ) {
        // 		this.gfnAlert("출력할 자료를 선택하세요!");
        // 		return;
        // 	}
        //
        // 	this.dsRptList.clearData();
        // 	//this.nRptAppend = nChkRow;    //선택한 row 만큼 Append하기
        // 	this.nRptAppend = 1;    //선택한 row 만큼 Append하기 ( DGA_EQUIP_CARD 비품이력카드 화면과 같이 출력물을 사용한다. )
        //
        // 	//for(var i=0;i<this.dsList.rowcount;i++){
        // 		//if(this.dsList.getColumn(i, "CHK") == 0) continue;
        //
        // 		this.dsSelectRpt.clearData();
        // 		this.dsSelectRpt.addRow();
        //
        // 		this.dsRptListTemp.clearData();
        //
        // 		this.dsSelectRpt.setColumn(0, "NO_EQUIPMENT", this.dsList.getColumn(this.dsList.rowposition, "NO_EQUIPMENT"));
        // 		this.dsSelectRpt.setColumn(0, "NO_SEQ", this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ"));
        //
        // 		var strSvcId    = "selectRpt";
        // 		var strSvcType  = "select"; 					//url(select / grid / save)
        // 		var inProc		= "_dsProc";
        // 		var inData      = "selectRpt=dsSelectRpt"; 		//target=파라미터 Ds
        // 		var outData     = "dsRptListTemp=selectRpt0"; 	//return Ds=target순번
        // 		var strArg      = "";
        // 		var callBackFnc = "fnCallback";
        //
        // 		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 							strSvcType , 	// trabsaction을 요청할 구분
        // 							inProc,			// Procedure 정보 Dataset 이름
        // 							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 							callBackFnc); // 통신방법 정의 [생략가능]
        //
        // 	//}
        // }

        // this.fnPrintByParamJson = function() {
        //
        // 	var inProc		= "_dsProc"; 								//이건 없으면 에러나서 그냥둠
        // 	var inParam 	= "params=dsRptList";						// 조회SP이외 사용할 정보
        // 	var inData      = "";	//"selectReportList=dsSelect"; 		// target=파라미터 Ds
        //
        // 	// DGA_EQUIP_CARD 비품이력카드 화면과 같은 출력물을 사용한다.
        // 	var reportpath  = "/dg/dga/DGA_EQUIP_CARD.ozr";
        //
        // 	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        // }

        // this.fnEquipReport = function() {
        // 	if(this.dsList.rowcount == 0) return;
        //
        // 	var rowFlag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);
        // 	if(rowFlag == "#" || rowFlag == "I" ) {
        // 		this.gfnAlert("출력할 자료를 선택하세요!");
        // 		return;
        // 	}
        //
        // 	this.dsSelectRpt.clearData();
        // 	this.dsSelectRpt.addRow();
        //
        // 	this.dsSelectRpt.setColumn(0, "NO_EQUIPMENT", this.dsList.getColumn(this.dsList.rowposition, "NO_EQUIPMENT"));  // 선택한 비품번호
        // 	this.dsSelectRpt.setColumn(0, "NO_SEQ", this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ"));
        //
        //
        // 	this.dsReportParam = new Dataset();
        // 	//1.기본 PARAM
        // 	this.dsReportParam.addColumn("NM_PRT_USR", "string");	//발행자명
        // 	this.dsReportParam.addColumn("DT_PRT", "string");	    //발행일
        //
        // 	this.dsReportParam.clearData();
        // 	this.dsReportParam.addRow();
        //
        // 	this.dsReportParam.setColumn(0, "NM_PRT_USR", this.AuthClient.DS_HNAME);					//발행자명
        // 	this.dsReportParam.setColumn(0, "DT_PRT", this.fnDateToFormatStr(this.gfnGetDate("time"))); //발행일
        //
        // //trace("출력물 >>>>"+this.dsSelectRpt.saveXML());
        // //trace("출력물 param >>>>"+this.dsReportParam.saveXML());
        //
        // 	var inProc		= "_dsProc"; 								//이건 없으면 에러나서 그냥둠
        // 	var inParam 	= "params=dsReportParam";						// 조회SP이외 사용할 정보
        // 	var inData      = "headRpt=dsSelectRpt bodyRpt=dsSelectRpt";	// target=파라미터 Ds
        //
        // 	var reportpath  = "/dg/dga/DGA_EQUIP_HISTORY_CARD.ozr";
        //
        // 	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        //
        // };
        //
        // this.fnDateToFormatStr = function(argDate, argFormat){
        // 	//argDate : 8자리
        // 	//argFormat : 분리문자
        // 	var strFormat = "/";
        //
        // 	if(this.gfnIsNull(argDate)) return "";
        // 	if(!this.gfnIsNull(argFormat)) strFormat = argFormat;
        //
        // 	var strRtn = "";
        //     var strYYYY = argDate.substr(0, 4);
        //     var strMM = argDate.substr(4, 2);
        // 	var strDD = "";
        //
        // 	if(argDate.length >= 6){  // YYYYMM
        // 		strRtn =  strYYYY + strFormat + strMM;
        //
        // 		if(argDate.length >= 8){  // YYYYMMDD
        // 			strDD = argDate.substr(6, 2);
        // 			strRtn =  strRtn + strFormat + strDD;
        //
        // 			if(argDate.length >= 14){ // YYYYMMDDHH24MISS
        // 				var hh = argDate.substring(8,10);
        // 				var mm = argDate.substring(10,12);
        // 				var ss = argDate.substring(12,14);
        // 				strRtn = strRtn + " " + hh+":"+mm+":"+ss;
        // 			}
        // 		}
        // 	}
        //
        // //	trace("fnDateToFormatStr==>:",strRtn);
        //
        // 	return strRtn;
        // }

         /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // //파일 저장 경로 조회
        // this.fnInfo = function() {
        //
        // 	this.dsInfoParam.clearData();
        // 	this.dsInfoParam.addRow();
        //
        // 	this.dsInfoParam.setColumn(0, "CD_GUBUN", "DG01");
        //
        // 	var strSvcId    = "fileinfo";
        // 	var strSvcType  = "select";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "fileinfo=dsInfoParam";
        // 	var outData     = "dsInfo=fileinfo0";
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
        // };
        //
        // this.divData_objGrid_oncelldblclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        // {
        // 	var colId = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        //
        // 	switch(colId){
        // 		case "DS_FILE_NAME":
        // 			if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "DS_FILE_NAME"))) { return false; }
        //
        // 			var sFilename = this.dsList.getColumn(this.dsList.rowposition, "DS_FILE_NAME");
        // 			var encodeFileName = encodeURIComponent(sFilename);
        //
        // 			var svrPath = this.dsList.getColumn(this.dsList.rowposition, "DS_FILE_PATH").replace(/\//g, "\\") + "\\";
        // 			var filePath = svrPath.replace(/\\\\/g, "\\");
        //
        // 			var surl = this.fileConfig.host+ this.fileConfig.downloadUrl;
        // 			this.FileDownTransfer00.set_url(surl);
        // 			this.FileDownTransfer00.setPostData("path", filePath);
        // 			this.FileDownTransfer00.setPostData("fileName", sFilename);
        //
        // 			if( system.navigatorname =="nexacro"){
        // 				this.FileDownTransfer00.set_downloadfilename(sFilename);
        // 			}
        //
        // 			this.FileDownTransfer00.download();
        //
        // 			break;
        // 		case "FILE_ATTACH":
        // 			break;
        //
        // 		default:
        // 	}
        // };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboYN_FINAL.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAM_EQUIP_MOVE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
