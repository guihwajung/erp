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
            this.set_titletext("내역등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DWAPR_SILHENGCOMPARE_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DWAPR_SILHENGCOMPARE_TREE_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DWAPR_SILHENGCOMPARE_TREE_SELECT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DWAPR_SILHENGCOMPARE_TREE_SELECT</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DWAPR_SILHENGCOMPARE_TREE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SILHENG_BF\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BIMOK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_SILHENG_BF\"/><Col id=\"NO_SILHENG\"/><Col id=\"YN_CHANGE\">N</Col><Col id=\"CD_RP\"/><Col id=\"YN_AMT\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2_Left", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2_Right", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_SILHENG_CHK","ccfCD_SITE:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("실행번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_SILHENG_BF","staNO_SILHENG_CHK:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("이전");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SILHENG_BF","staNO_SILHENG_BF:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_SILHENG","ccfNO_SILHENG_BF:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("현재");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SILHENG","staNO_SILHENG:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk_GISUNGREQ","ccfNO_SILHENG:0.0","10.0","106","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("증감내역만 조회");
            obj.set_value("1");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_CHANGE","chk_GISUNGREQ:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("변경분");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DOKUB","chkYN_CHANGE:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("도급");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab0",this.divData.form.tabData);
            obj.set_text("현재차수기준");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid0","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab0.form);
            obj.set_taborder("0");
            obj.set_treeinitstatus("collapse,all");
            obj._setContents("");
            this.divData.form.tabData.tab0.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("트리기준(현재)");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("트리기준");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter","696","-1","5","100.00%",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            obj.set_text("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Div("divLeft","0","5",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGrid2_Left","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form.divLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.form.divLeft.addChild(obj.name, obj);

            obj = new Div("divRight","divSplitter:5","5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGrid2_Right","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form.divRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.form.divRight.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("코드기준");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_SILHENG_BF.form.CDTextBox","value","dsSearch","NO_SILHENG_BF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_SILHENG.form.CDTextBox","value","dsSearch","NO_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.chkYN_CHANGE","value","dsSearch","YN_CHANGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.chk_GISUNGREQ","value","dsSearch","YN_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWA_SILHENGCOMPAREITEM.xfdl", function() {
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

        // 	trace("getOwnerFrame : ", this.getOwnerFrame());
        // 	trace("getOwnerFrame.CD_SITE : ", this.getOwnerFrame().CD_SITE);
        // 	trace("getOwnerFrame.DS_SITE : ", this.getOwnerFrame().DS_SITE);
        // 	trace("getOwnerFrame.NO_SILHENG_BF : ", this.getOwnerFrame().NO_SILHENG_BF);
        // 	trace("getOwnerFrame.DS_SILHENG_BF : ", this.getOwnerFrame().DS_SILHENG_BF);
        // 	trace("getOwnerFrame.NO_SILHENG : ", this.getOwnerFrame().NO_SILHENG);
        // 	trace("getOwnerFrame.DS_SILHENG : ", this.getOwnerFrame().DS_SILHENG);

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_SILHENG)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);	// 현장코드
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);	// 현장코드명
        		this.dsSearch.setColumn(0, "NO_SILHENG_BF", this.getOwnerFrame().NO_SILHENG_BF); // 이전실행번호
        		this.divSearch.form.ccfNO_SILHENG_BF.form.DSTextBox.set_value(this.getOwnerFrame().DS_SILHENG_BF);
        		this.dsSearch.setColumn(0, "NO_SILHENG", this.getOwnerFrame().NO_SILHENG);	// 현재실행번호
        		this.divSearch.form.ccfNO_SILHENG.form.DSTextBox.set_value(this.getOwnerFrame().DS_SILHENG);	 // 실행번호명

        		//this.FormBtns.Select.click();
        	}
        	//this.divSearch_chkYN_DOKUB_onchanged(this.divSearch.form.chkYN_DOKUB, {postvalue:this.divSearch.form.chkYN_DOKUB.value});
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Excel.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_SILHENG_BF = this.divSearch.form.ccfNO_SILHENG_BF;
        	this.ccfNO_SILHENG = this.divSearch.form.ccfNO_SILHENG;
        	this.chkYN_CHANGE = this.divSearch.form.chkYN_CHANGE;

        	this.dxGrid0 = this.divData.form.tabData.tab0.form.objGrid0; // 현재차수기준 그리드
        	this.dxGrid1 = this.divData.form.tabData.tab1.form.objGrid1; // 트리기준(현재)
        	this.dxGrid2_Left = this.divData.form.tabData.tab2.form.divLeft.form.objGrid2_Left; // 트리기준 좌
        	this.dxGrid2_Right = this.divData.form.tabData.tab2.form.divRight.form.objGrid2_Right; // 트리기준 우
        	this.dxGrid3 = this.divData.form.tabData.tab3.form.objGrid3; // 코드기준

        	/* hjy
        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;
        	this.ccfCD_DEPT_ORG = this.divSearch.form.ccfCD_DEPT_ORG;
        	this.ctxtDS_UPDEPT = this.divSearch.form.ctxtDS_UPDEPT;
        	this.dxGrid0 = this.divData.form.objGrid;
        	*/
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_SILHENG_BF.CodeFindName = "DWX_CFNO_SILHENG_01";
        	this.ccfNO_SILHENG.CodeFindName = "DWX_CFNO_SILHENG_01";

        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_SILHENG_BF.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_SILHENG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid0, this.dsList, "DW", "DWA_SILHENGCOMPAREITEM", "DS_COST", "GR_COST");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DW", "DWA_SILHENGCOMPAREITEM_TREE", "DS_COST", "GR_COST");
        	this.gfnGridInit(this.dxGrid2_Left, this.dsList2_Left, "DW", "DWA_SILHENGCOMPAREITEM_TREE_L", "DS_COST", "GR_COST");
        	this.gfnGridInit(this.dxGrid2_Right, this.dsList2_Right, "DW", "DWA_SILHENGCOMPAREITEM_TREE_R", "DS_COST", "GR_COST");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DW", "DWA_SILHENGCOMPAREITEM_TREE_C", "DS_COST", "GR_COST");

        	this.dxGrid0.addEventHandler("onselectchanged", this.fnGrid_onselectchanged, this);
        	this.dxGrid1.addEventHandler("onselectchanged", this.fnGrid_onselectchanged, this);
        	this.dxGrid2_Left.addEventHandler("onselectchanged", this.fnGrid_onselectchanged, this);
        	this.dxGrid2_Right.addEventHandler("onselectchanged", this.fnGrid_onselectchanged, this);
        	this.dxGrid3.addEventHandler("onselectchanged", this.fnGrid_onselectchanged, this);
        	/*this.dxGrid0.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);*/
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_SILHENG_BF", "string");
        	this.dsSelect.addColumn("NO_SILHENG", "string");
        	this.dsSelect.addColumn("YN_CHANGE", "string");
        	this.dsSelect.addColumn("YN_QNITEM", "string");
        	this.dsSelect.addColumn("TY_COST", "string");
        	this.dsSelect.addColumn("CD_RP", "string");
        	this.dsSelect.addColumn("YN_AMT", "string");

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("TY_WRK", "string");
        	this.dsSelect2.addColumn("CD_SITE", "string");
        	this.dsSelect2.addColumn("NO_SILHENG_BF", "string");
        	this.dsSelect2.addColumn("NO_SILHENG", "string");
        	this.dsSelect2.addColumn("YN_CHANGE", "string");
        	this.dsSelect2.addColumn("YN_QNITEM", "string");
        	this.dsSelect2.addColumn("TY_COST", "string");
        	this.dsSelect2.addColumn("CD_RP", "string");
        	this.dsSelect2.addColumn("YN_AMT", "string");

        	this.dsLeftSelect = new Dataset();
        	this.dsLeftSelect.addColumn("TY_WRK", "string");
        	this.dsLeftSelect.addColumn("CD_SITE", "string");
        	this.dsLeftSelect.addColumn("NO_SILHENG_BF", "string");
        	this.dsLeftSelect.addColumn("NO_SILHENG", "string");
        	this.dsLeftSelect.addColumn("YN_CHANGE", "string");
        	this.dsLeftSelect.addColumn("YN_QNITEM", "string");
        	this.dsLeftSelect.addColumn("TY_COST", "string");
        	this.dsLeftSelect.addColumn("CD_RP", "string");
        	this.dsLeftSelect.addColumn("YN_AMT", "string");

        	this.dsRightSelect = new Dataset();
        	this.dsRightSelect.addColumn("TY_WRK", "string");
        	this.dsRightSelect.addColumn("CD_SITE", "string");
        	this.dsRightSelect.addColumn("NO_SILHENG_BF", "string");
        	this.dsRightSelect.addColumn("NO_SILHENG", "string");
        	this.dsRightSelect.addColumn("YN_CHANGE", "string");
        	this.dsRightSelect.addColumn("YN_QNITEM", "string");
        	this.dsRightSelect.addColumn("TY_COST", "string");
        	this.dsRightSelect.addColumn("CD_RP", "string");
        	this.dsRightSelect.addColumn("YN_AMT", "string");

        	this.dsSelect3 = new Dataset();
        	this.dsSelect3.addColumn("TY_WRK", "string");
        	this.dsSelect3.addColumn("CD_SITE", "string");
        	this.dsSelect3.addColumn("NO_SILHENG_BF", "string");
        	this.dsSelect3.addColumn("NO_SILHENG", "string");
        	this.dsSelect3.addColumn("YN_CHANGE", "string");
        	this.dsSelect3.addColumn("YN_QNITEM", "string");
        	this.dsSelect3.addColumn("TY_COST", "string");
        	this.dsSelect3.addColumn("CD_RP", "string");
        	this.dsSelect3.addColumn("YN_AMT", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	var strSvcId    = "";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	var tIdx = this.fnGetTabIndex();

        	switch(tIdx) {
        		case 0:
        			this.gfnGridBeforeSelect(this.dxGrid0);

        			this.dsSelect.clearData();
        			this.dsSelect.addRow();

        			this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSelect.setColumn(0, "NO_SILHENG_BF", this.dsSearch.getColumn(0, "NO_SILHENG_BF"));
        			this.dsSelect.setColumn(0, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        			this.dsSelect.setColumn(0, "YN_QNITEM", "");
        			this.dsSelect.setColumn(0, "TY_COST", "");
        			this.dsSelect.setColumn(0, "CD_RP", this.dsSearch.getColumn(0, "CD_RP"));
        			this.dsSelect.setColumn(0, "YN_AMT", this.dsSearch.getColumn(0, "YN_AMT"));
        			this.dsSelect.setColumn(0, "YN_CHANGE", this.dsSearch.getColumn(0, "YN_CHANGE") == "N" ? "" : this.dsSearch.getColumn(0, "YN_CHANGE"));

        			strSvcId    = "select1";
        			inData      = "select1=dsSelect";
        			outData     = "dsList=select10";
        		break;
        		case 1:
        			this.gfnGridBeforeSelect(this.dxGrid1);

        			this.dsSelect2.clearData();
        			this.dsSelect2.addRow();

        			this.dsSelect2.setColumn(0, "TY_WRK", "Q");
        			this.dsSelect2.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSelect2.setColumn(0, "NO_SILHENG_BF", this.dsSearch.getColumn(0, "NO_SILHENG_BF"));
        			this.dsSelect2.setColumn(0, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        			this.dsSelect2.setColumn(0, "YN_QNITEM", "");
        			this.dsSelect2.setColumn(0, "TY_COST", "");
        			this.dsSelect2.setColumn(0, "CD_RP", this.dsSearch.getColumn(0, "CD_RP"));
        			this.dsSelect2.setColumn(0, "YN_AMT", this.dsSearch.getColumn(0, "YN_AMT"));
        			this.dsSelect2.setColumn(0, "YN_CHANGE", this.dsSearch.getColumn(0, "YN_CHANGE") == "N" ? "" : this.dsSearch.getColumn(0, "YN_CHANGE"));

        			strSvcId    = "select2";
        			inData      = "select2=dsSelect2";
        			outData     = "dsList1=select20";
        		break;
        		case 2:
        			this.gfnGridBeforeSelect(this.dxGrid2_Left);
        			this.gfnGridBeforeSelect(this.dxGrid2_Right);

        			this.dsLeftSelect.clearData();
        			this.dsRightSelect.clearData();
        			this.dsLeftSelect.addRow();
        			this.dsRightSelect.addRow();

        			this.dsLeftSelect.setColumn(0, "TY_WRK", "L");
        			this.dsLeftSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsLeftSelect.setColumn(0, "NO_SILHENG_BF", this.dsSearch.getColumn(0, "NO_SILHENG_BF"));
        			this.dsLeftSelect.setColumn(0, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        			this.dsLeftSelect.setColumn(0, "YN_QNITEM", "");
        			this.dsLeftSelect.setColumn(0, "TY_COST", "");
        			this.dsLeftSelect.setColumn(0, "CD_RP", this.dsSearch.getColumn(0, "CD_RP"));
        			this.dsLeftSelect.setColumn(0, "YN_AMT", this.dsSearch.getColumn(0, "YN_AMT"));
        			this.dsLeftSelect.setColumn(0, "YN_CHANGE", this.dsSearch.getColumn(0, "YN_CHANGE") == "N" ? "" : this.dsSearch.getColumn(0, "YN_CHANGE"));

        			this.dsRightSelect.setColumn(0, "TY_WRK", "R");
        			this.dsRightSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsRightSelect.setColumn(0, "NO_SILHENG_BF", this.dsSearch.getColumn(0, "NO_SILHENG_BF"));
        			this.dsRightSelect.setColumn(0, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        			this.dsRightSelect.setColumn(0, "YN_QNITEM", "");
        			this.dsRightSelect.setColumn(0, "TY_COST", "");
        			this.dsRightSelect.setColumn(0, "CD_RP", this.dsSearch.getColumn(0, "CD_RP"));
        			this.dsRightSelect.setColumn(0, "YN_AMT", this.dsSearch.getColumn(0, "YN_AMT"));
        			this.dsRightSelect.setColumn(0, "YN_CHANGE", this.dsSearch.getColumn(0, "YN_CHANGE") == "N" ? "" : this.dsSearch.getColumn(0, "YN_CHANGE"));

        			strSvcId    = "select3";
        			inData      = "select3=dsLeftSelect select4=dsRightSelect";
        			outData     = "dsList2_Left=select30 dsList2_Right=select40";
        		break;
        		case 3:
        			this.gfnGridBeforeSelect(this.dxGrid3);

        			this.dsSelect3.clearData();
        			this.dsSelect3.addRow();

        			this.dsSelect3.setColumn(0, "TY_WRK", "C");
        			this.dsSelect3.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSelect3.setColumn(0, "NO_SILHENG_BF", this.dsSearch.getColumn(0, "NO_SILHENG_BF"));
        			this.dsSelect3.setColumn(0, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        			this.dsSelect3.setColumn(0, "YN_QNITEM", "");
        			this.dsSelect3.setColumn(0, "TY_COST", "");
        			this.dsSelect3.setColumn(0, "CD_RP", this.dsSearch.getColumn(0, "CD_RP"));
        			this.dsSelect3.setColumn(0, "YN_AMT", this.dsSearch.getColumn(0, "YN_AMT"));
        			this.dsSelect3.setColumn(0, "YN_CHANGE", this.dsSearch.getColumn(0, "YN_CHANGE") == "N" ? "" : this.dsSearch.getColumn(0, "YN_CHANGE"));

        			strSvcId    = "select5";
        			inData      = "select5=dsSelect3";
        			outData     = "dsList3=select50";
        		break;
        	}

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);  // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid0); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid0);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크``
        // 	if (!this.gfnGridValidate(this.dxGrid0)) return;
        //
        // 	this.dxGrid0.updateToDataset();
        // 	this.dsSave.clearData();
        //
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList, i);
        // 		switch(flag) {
        // 			case "I":
        // 			case "U":
        // 			case "D":
        // 				var nrow = this.dsSave.addRow();
        // 				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));			// 현장코드 검색조건값 셋팅
        // 				this.dsSave.setColumn(nrow, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));	// 실행번호 검색조건값 셋팅
        // 				this.dsSave.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        // 				this.dsSave.setColumn(nrow, "CD_DKCOST", this.dsList.getColumn(i, "CD_DKCOST"));
        // 				this.dsSave.setColumn(nrow, "DS_COST", this.dsList.getColumn(i, "DS_COST"));
        // 				this.dsSave.setColumn(nrow, "SZ_SIZE", this.dsList.getColumn(i, "SZ_SIZE"));
        // 				this.dsSave.setColumn(nrow, "DS_UNIT", this.dsList.getColumn(i, "DS_UNIT"));
        // 				this.dsSave.setColumn(nrow, "CD_GBIMOK", this.dsList.getColumn(i, "CD_GBIMOK"));
        // 				this.dsSave.setColumn(nrow, "QN_TT_DOKUB", this.dsList.getColumn(i, "QN_TT_DOKUB"));
        // 				this.dsSave.setColumn(nrow, "UP_TT_DOKUB", this.dsList.getColumn(i, "UP_TT_DOKUB"));
        // 				this.dsSave.setColumn(nrow, "AM_TT_DOKUB", this.dsList.getColumn(i, "AM_TT_DOKUB"));
        // 				this.dsSave.setColumn(nrow, "QN_TT_SILHENG", this.dsList.getColumn(i, "QN_TT_SILHENG"));
        // 				this.dsSave.setColumn(nrow, "UP_TT_SILHENG", this.dsList.getColumn(i, "UP_TT_SILHENG"));
        // 				this.dsSave.setColumn(nrow, "AM_TT_SILHENG", this.dsList.getColumn(i, "AM_TT_SILHENG"));
        // 				this.dsSave.setColumn(nrow, "QN_EXSILHENG", this.dsList.getColumn(i, "QN_EXSILHENG"));
        // 				this.dsSave.setColumn(nrow, "UP_EXSILHENG", this.dsList.getColumn(i, "UP_EXSILHENG"));
        // 				this.dsSave.setColumn(nrow, "AM_EXSILHENG", this.dsList.getColumn(i, "AM_EXSILHENG"));
        // 				this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        // 				this.dsSave.setColumn(nrow, "CD_STDITEM", this.dsList.getColumn(i, "CD_STDITEM"));
        // 				this.dsSave.setColumn(nrow, "CD_RP", this.dsList.getColumn(i, "CD_RP"));
        // 				this.dsSave.setColumn(nrow, "CD_STD", this.dsList.getColumn(i, "CD_STD"));
        // 				this.dsSave.setColumn(nrow, "UP_MATERIAL", this.dsList.getColumn(i, "UP_MATERIAL"));
        // 				this.dsSave.setColumn(nrow, "UP_LABOR", this.dsList.getColumn(i, "UP_LABOR"));
        // 				this.dsSave.setColumn(nrow, "UP_OUTSOURCING", this.dsList.getColumn(i, "UP_OUTSOURCING"));
        // 				this.dsSave.setColumn(nrow, "UP_EQUIPMENT", this.dsList.getColumn(i, "UP_EQUIPMENT"));
        // 				this.dsSave.setColumn(nrow, "UP_COST", this.dsList.getColumn(i, "UP_COST"));
        // 				break;
        // 		}
        // 	}
        //
        // 	if (this.dsSave.rowcount == 0) return;
        //
        // 	var strSvcId    = "save";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "save=dsSave";
        // 	var outData     = "";
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
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid0);
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
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		return validate;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_SILHENG"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_SILHENG.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현재 실행번호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		return validate;
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
        	if (svcID == "select1") {
        		this.gfnGridAfterSelect(this.dxGrid0);
        		this._gfnGridTreeOpen(this.dxGrid0, 1);
        	}else if(svcID == "select2"){
        		this.gfnGridAfterSelect(this.dxGrid1);
        		this._gfnGridTreeOpen(this.dxGrid1, 1);
        	}else if(svcID == "select3"){
        		this.gfnGridAfterSelect(this.dxGrid2_Left);
        		this.gfnGridAfterSelect(this.dxGrid2_Right);
        		this._gfnGridTreeOpen(this.dxGrid2_Left, 1);
        		this._gfnGridTreeOpen(this.dxGrid2_Right, 1);
        	}else if(svcID == "select5"){
        		this.gfnGridAfterSelect(this.dxGrid3);
        		this._gfnGridTreeOpen(this.dxGrid3, 1);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfNO_SILHENG") {
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        	}

        	if (id == "ccfNO_SILHENG_BF") {
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 초기화
        		this.ccfNO_SILHENG_BF.form.fnCodeFindClear();
        		this.ccfNO_SILHENG.form.fnCodeFindClear();
        	}
        }


        // 코드파인드 값의 기본값 코드,명 정보 외에 값을 내려받을때 사용하는 함수
        this.ccfNO_SILHENG_AfterCDTextChanged = function(id) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = this.ccfNO_SILHENG.form.SelectedData;

        	/* hjy
        	var ds_updept = "";
        	if (arr.length > 0) {
        		ds_updept = arr[0]["DS_UPDEPT"];
        	}

        	this.ctxtDS_UPDEPT.set_value(ds_updept);
        	*/
        }



        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_oncelldblclick = function(obj,e)
        {
        	//if tree cell column
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid0, e.cell);
        	if(colnm == "DS_COST")
        	{
        		var nCellIdx = obj.currentcell;
        		obj.setCellProperty("body", nCellIdx, "edittype", "normal");
        		obj.setCellPos(e.cell);
        	}
        }

        this.fnGrid_onselectchanged = function(obj,e)
        {
        	var colnm = "";
        	var summColName = "";

        	switch(obj.name){
        		case "objGrid0":
        			colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid0, e.cell);
        			summColName = this.dxGrid0.getBindCellIndex("body", "DS_COST") ;
        		break;
        		case "objGrid1":
        			colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid1, e.cell);
        			summColName = this.dxGrid1.getBindCellIndex("body", "DS_COST") ;
        		break;
        		case "objGrid2_Left":
        			colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid2_Left, e.cell);
        			summColName = this.dxGrid2_Left.getBindCellIndex("body", "DS_COST") ;
        		break;
        		case "objGrid2_Right":
        			colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid2_Right, e.cell);
        			summColName = this.dxGrid2_Right.getBindCellIndex("body", "DS_COST") ;
        		break;
        		case "objGrid3":
        			colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid3, e.cell);
        			summColName = this.dxGrid3.getBindCellIndex("body", "DS_COST_") ;
        		break;
        	}

        	if(obj.name == "objGrid0" && colnm == "DS_COST")
        	{
        		var nCellIdx = obj.currentcell;
        		if (this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I") {
        			obj.setCellProperty("body", nCellIdx, "edittype", "normal");
        		} else {
        			obj.setCellProperty("body", nCellIdx, "edittype", "tree");
        		}
        	}

        	if ((obj.oldrow > -1 && obj.oldrow == e.row) || (obj.oldrow == -1 && e.oldrow != e.row)) {
        		var rows = obj.getSelectedDatasetRows();
        		var sum = 0;
        		var bRet = "";
        		var curCellIdx = obj.currentcell;

        		for(var i = 0; i < rows.length; i++) {
        			if(obj.getCellProperty("body", curCellIdx, "edittype") == "mask" || obj.getCellProperty("body", curCellIdx, "edittype") == "int"){
        				var am = obj.getBindDataset().getColumn(rows[i], colnm);

        				//bRet = nexacro.isNumeric(am);
        				bRet = isNaN(am); // 문자:true, 숫자:false

        				//alert(am+":::"+bRet);
        				if(bRet){
        					break;
        				}

        				if(!this.gfnIsNull(am)) {
        					sum += am;
        				}
        			}else{
        				bRet = true;
        			}
        		}

        		if(!bRet){	// 숫자면 합계표시, 문자면 null
        			switch(obj.name){
        				case "objGrid0":
        					this.dxGrid0.setCellProperty("summ", summColName, "text", "선택합계=" + this.gfnAppendComma(sum));
        				break;
        				case "objGrid1":
        					this.dxGrid1.setCellProperty("summ", summColName, "text", "선택합계=" + this.gfnAppendComma(sum));
        				break;
        				case "objGrid2_Left":
        					this.dxGrid2_Left.setCellProperty("summ", summColName, "text", "선택합계=" + this.gfnAppendComma(sum));
        				break;
        				case "objGrid2_Right":
        					this.dxGrid2_Right.setCellProperty("summ", summColName, "text", "선택합계=" + this.gfnAppendComma(sum));
        				break;
        				case "objGrid3":
        					this.dxGrid3.setCellProperty("summ", summColName, "text", "선택합계=" + this.gfnAppendComma(sum));
        				break;
        			}
        		}else{
        			switch(obj.name){
        				case "objGrid0":
        					this.dxGrid0.setCellProperty("summ", summColName, "text", "");
        				break;
        				case "objGrid1":
        					this.dxGrid1.setCellProperty("summ", summColName, "text",  "");
        				break;
        				case "objGrid2_Left":
        					this.dxGrid2_Left.setCellProperty("summ", summColName, "text",  "");
        				break;
        				case "objGrid2_Right":
        					this.dxGrid2_Right.setCellProperty("summ", summColName, "text", "");
        				break;
        				case "objGrid3":
        					this.dxGrid3.setCellProperty("summ", summColName, "text",  "");
        				break;
        			}
        		}

        		obj.oldrow = -1;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid0);
        		this.gfnGridClear(this.dxGrid1);
        	}
        };

        // 탭 이동 후 이벤트.
        // this.divData_tabData_onchanged = function(obj:nexacro.Tab,e:nexacro.TabIndexChangeEventInfo)
        // {
        // 	this.FormBtns.Select.click();
        // };

        // 도급 체크박스
        this.divSearch_chkYN_DOKUB_onchanged = function(obj,e)
        {
        	var QN_TT_ENG_Index = this.dxGrid0.getBindCellIndex("body", "QN_TT_ENG");
        	var UP_TT_ENG_Index = this.dxGrid0.getBindCellIndex("body", "UP_TT_ENG");
        	var AM_TT_ENG_Index = this.dxGrid0.getBindCellIndex("body", "AM_TT_ENG");
        	var QN_TT_DOKUB_Index = this.dxGrid0.getBindCellIndex("body", "QN_TT_DOKUB");
        	var UP_TT_DOKUB_Index = this.dxGrid0.getBindCellIndex("body", "UP_TT_DOKUB");
        	var AM_TT_DOKUB_Index = this.dxGrid0.getBindCellIndex("body", "AM_TT_DOKUB");

        	if(obj.isChecked())
        	{
        		this.dxGrid0.setRealColSize("body", QN_TT_ENG_Index, 70);
        		this.dxGrid0.setRealColSize("body", UP_TT_ENG_Index, 80);
        		this.dxGrid0.setRealColSize("body", AM_TT_ENG_Index, 100);
        		this.dxGrid0.setRealColSize("body", QN_TT_DOKUB_Index, 70);
        		this.dxGrid0.setRealColSize("body", UP_TT_DOKUB_Index, 80);
        		this.dxGrid0.setRealColSize("body", AM_TT_DOKUB_Index, 100);
        	}
        	else
        	{
        		this.dxGrid0.setRealColSize("body", QN_TT_ENG_Index, 0);
        		this.dxGrid0.setRealColSize("body", UP_TT_ENG_Index, 0);
        		this.dxGrid0.setRealColSize("body", AM_TT_ENG_Index, 0);
        		this.dxGrid0.setRealColSize("body", QN_TT_DOKUB_Index, 0);
        		this.dxGrid0.setRealColSize("body", UP_TT_DOKUB_Index, 0);
        		this.dxGrid0.setRealColSize("body", AM_TT_DOKUB_Index, 0);
        	}
        };

        this.fnGetTabIndex = function()
        {
        	var index = -1;
        	var text = this.divData.form.tabData.tabpages[this.divData.form.tabData.tabindex].text;

        	switch(text)
        	{
        		case "현재차수기준" : index = 0;
        		break;
        		case "트리기준(현재)" : index = 1;
        		break;
        		case "트리기준" : index = 2;
        		break;
        		case "코드기준" : index = 3;
        		break;
        	}

        	return index;
        }

        this.divData_tabData_tab2_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
              this.divData.form.tabData.tab2.form.divSplitter.set_left(e.clientx);
              this.divData.form.tabData.tab2.form.resetScroll();
           }
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.chk_GISUNGREQ.addEventHandler("onclick",this.divSearch_chk_GISUNGREQ_onclick,this);
            this.divSearch.form.chkYN_DOKUB.addEventHandler("onchanged",this.divSearch_chkYN_DOKUB_onchanged,this);
            this.divData.form.tabData.tab2.addEventHandler("ondragmove",this.divData_tabData_tab2_ondragmove,this);
            this.divData.form.tabData.tab2.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_SILHENGCOMPAREITEM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
