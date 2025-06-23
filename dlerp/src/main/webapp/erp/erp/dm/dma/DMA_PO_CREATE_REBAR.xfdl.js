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
            this.set_titletext("철근PO생성(현장)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMAPR_CREATE_PO_PR_REBAR_MASTER_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DMAPR_CREATE_PO_PR_REBAR_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DMAPR_CREATE_PO_REBAR_MASTER_SELECT</Col></Row><Row><Col id=\"TARGET\">d_insert</Col><Col id=\"SP\">DMAPR_CREATE_PO_REBAR_MASTER_INSERT</Col></Row><Row><Col id=\"TARGET\">d_update</Col><Col id=\"SP\">DMAPR_CREATE_PO_REBAR_MASTER_UPDATE</Col></Row><Row><Col id=\"TARGET\">d_delete</Col><Col id=\"SP\">DMAPR_CREATE_PO_REBAR_MASTER_DELETE</Col></Row><Row><Col id=\"TARGET\">d1_select</Col><Col id=\"SP\">DMAPR_CREATE_PO_REBAR_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">d1_insert</Col><Col id=\"SP\">DMAPR_CREATE_PO_REBAR_DETAIL_INSERT</Col></Row><Row><Col id=\"TARGET\">d1_update</Col><Col id=\"SP\">DMAPR_CREATE_PO_REBAR_DETAIL_UPDATE</Col></Row><Row><Col id=\"TARGET\">d1_delete</Col><Col id=\"SP\">DMAPR_CREATE_PO_REBAR_DETAIL_DELETE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ORDER_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ORDER_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE_SUB\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"DT_ORDER_FR\"/><Col id=\"DT_ORDER_TO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsID_DAM", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0.0%","10.0","5","24.0%",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSearchLeft","divSplitter:0.0","10.0",null,"24.0","divSplitter:5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchLeft.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.form.divSearchLeft.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","240","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchLeft.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.form.divSearchLeft.addChild(obj.name, obj);

            obj = new Static("staDT_ORDER","0.0","staCD_SITE:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchLeft.form);
            obj.set_taborder("2");
            obj.set_text("발주요청일");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.form.divSearchLeft.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ORDER_FR","staDT_ORDER:0.0","ccfCD_SITE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchLeft.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.form.divSearchLeft.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_ORDER_FR:0.0","staCD_SITE:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchLeft.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.form.divSearchLeft.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ORDER_TO","sta_range:0.0","ccfCD_SITE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchLeft.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.form.divSearchLeft.addChild(obj.name, obj);

            obj = new Div("divSearchRight","divSplitter:0.0","10.0",null,"24.0","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE_SUB","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchRight.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.form.divSearchRight.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE_SUB","staCD_SITE_SUB:0.0","10.0","240","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchRight.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.form.divSearchRight.addChild(obj.name, obj);

            obj = new Static("staNO_BID","0.0","staCD_SITE_SUB:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchRight.form);
            obj.set_taborder("2");
            obj.set_text("PO번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.form.divSearchRight.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_BID","staNO_BID:0.0","ccfCD_SITE_SUB:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchRight.form);
            obj.set_taborder("3");
            obj.set_value("");
            this.divSearch.form.divSearchRight.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:40","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft_Top","0","0",null,null,"0","50%",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form.divDataLeft_Top.form);
            obj.set_taborder("1");
            obj.set_text("구매요청리스트");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.form.divDataLeft_Top.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form.divDataLeft_Top.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.form.divDataLeft_Top.addChild(obj.name, obj);

            obj = new Div("divDataLeft_Bottom","0","divDataLeft_Top:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form.divDataLeft_Bottom.form);
            obj.set_taborder("1");
            obj.set_text("구매요청품목");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.form.divDataLeft_Bottom.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form.divDataLeft_Bottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.form.divDataLeft_Bottom.addChild(obj.name, obj);

            obj = new Button("btnRight","divDataLeft:5","60%","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("▶");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnLeft","divDataLeft:5","btnRight:10","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("◀");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataRight_Top","0","0",null,null,"0","50%",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight_Top.form);
            obj.set_taborder("1");
            obj.set_text("철근PO리스트");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataRight_Top.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta03:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataRight_Top.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataRight_Top.addChild(obj.name, obj);

            obj = new Div("divDataRight_Bottom","0","divDataRight_Top:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta04","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight_Bottom.form);
            obj.set_taborder("1");
            obj.set_text("철근PO내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataRight_Bottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub1","0","sta04:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataRight_Bottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataRight_Bottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.divSearchLeft.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.divSearchLeft.form.ctclDT_ORDER_FR","value","dsSearch","DT_ORDER_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.divSearchLeft.form.ctclDT_ORDER_TO","value","dsSearch","DT_ORDER_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.divSearchRight.form.ccfCD_SITE_SUB.form.CDTextBox","value","dsSearch","CD_SITE_SUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.divSearchRight.form.ctxtNO_BID","value","dsSearch","NO_PO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DMA_PO_CREATE_REBAR.xfdl", function() {
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
        	this.fnSetCombo();

        	var today = this.gfnGetDate();
        	this.divSearch.form.divSearchLeft.form.ctclDT_ORDER_FR.set_value(this.gfnGetFirstDate(today));
        	this.divSearch.form.divSearchLeft.form.ctclDT_ORDER_TO.set_value(this.gfnGetLastDate(today));

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {

        	this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter, "fnCustomDragMove"); // divSplitter sync
        }

        this.fnCustomDragMove = function(obj,e) {
        	if(e.userdata == "splitter") {
        		this.divSearch.form.divSplitter.set_left(e.clientx);
        		this.divSearch.form.resetScroll();
        	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.divSearchLeft.form.ccfCD_SITE;
        	this.ctxtNO_PR = this.divSearch.form.divSearchLeft.form.ctxtNO_PR; //입찰번호
        	this.ccboID_DAM = this.divSearch.form.divSearchLeft.form.ccboID_DAM; //담당
        	this.ctclDT_ORDER_FR = this.divSearch.form.divSearchLeft.form.ctclDT_ORDER_FR;
        	this.ctclDT_ORDER_TO = this.divSearch.form.divSearchLeft.form.ctclDT_ORDER_TO;
        	this.ccfCD_SITE_SUB = this.divSearch.form.divSearchRight.form.ccfCD_SITE_SUB;

        	this.dxGrid = this.divData.form.divDataLeft.form.divDataLeft_Top.form.objGrid;
        	this.dxGrid1 = this.divData.form.divDataLeft.form.divDataLeft_Bottom.form.objGrid1;
        	this.dxGridSub = this.divData.form.divDataRight.form.divDataRight_Top.form.objGridSub;
        	this.dxGridSub1 = this.divData.form.divDataRight.form.divDataRight_Bottom.form.objGridSub1;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.ccfCD_SITE_SUB.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        // 	this.ccfNO_PR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMA_PO_CREATE_ETC_PR_REBAR_MASTER");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DM", "DMA_PO_CREATE_ETC_PR_REBAR_DETAIL");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DM", "DMA_PO_CREATE_ETC_PO_REBAR_MASTER");
        	this.gfnGridInit(this.dxGridSub1, this.dsListSub1, "DM", "DMA_PO_CREATE_ETC_PO_REBAR_DETAIL");

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGridSub.addEventHandler("onselectchanged", this.fnGridSub_RowCellChanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("DT_ORDER_FR", "string");
        	this.dsSelect.addColumn("DT_ORDER_TO", "string");

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("NO_PR", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("NO_PO", "string");

        	this.dsInsertSub = new Dataset();
        	this.dsInsertSub.addColumn("CD_SITE", "string");
        	this.dsInsertSub.addColumn("NO_BID", "string");
        	this.dsInsertSub.addColumn("NO_CONT", "string");
        	this.dsInsertSub.addColumn("DS_SUBCON", "string");
        	this.dsInsertSub.addColumn("CD_VENDOR", "string");
        	this.dsInsertSub.addColumn("CD_LICCOST", "string");
        	this.dsInsertSub.addColumn("CD_PAYMENT", "string");
        	this.dsInsertSub.addColumn("CD_DELIVERY", "string");
        	this.dsInsertSub.addColumn("CD_ORDER", "string");
        	this.dsInsertSub.addColumn("CD_PAY_CONDITION", "string");
        	this.dsInsertSub.addColumn("CD_QUALITY", "string");
        	this.dsInsertSub.addColumn("CD_PACKING", "string");
        	this.dsInsertSub.addColumn("CD_INCREASE", "string");
        	this.dsInsertSub.addColumn("CD_H02", "string");
        	this.dsInsertSub.addColumn("TY_SELECT", "string");
        	this.dsInsertSub.addColumn("ID_DAM", "string");

        	this.dsUpdateSub = new Dataset();
        	this.dsUpdateSub.addColumn("CD_SITE", "string");
        	this.dsUpdateSub.addColumn("NO_BID", "string");
        	this.dsUpdateSub.addColumn("NO_CONT", "string");
        	this.dsUpdateSub.addColumn("DS_SUBCON", "string");
        	this.dsUpdateSub.addColumn("CD_VENDOR", "string");
        	this.dsUpdateSub.addColumn("CD_LICCOST", "string");
        	this.dsUpdateSub.addColumn("CD_PAYMENT", "string");
        	this.dsUpdateSub.addColumn("CD_DELIVERY", "string");
        	this.dsUpdateSub.addColumn("CD_ORDER", "string");
        	this.dsUpdateSub.addColumn("CD_PAY_CONDITION", "string");
        	this.dsUpdateSub.addColumn("CD_QUALITY", "string");
        	this.dsUpdateSub.addColumn("CD_PACKING", "string");
        	this.dsUpdateSub.addColumn("CD_INCREASE", "string");
        	this.dsUpdateSub.addColumn("CD_H02", "string");
        	this.dsUpdateSub.addColumn("TY_SELECT", "string");
        	this.dsUpdateSub.addColumn("ID_DAM", "string");

        	this.dsDeleteSub = new Dataset();
        	this.dsDeleteSub.addColumn("CD_SITE", "string");
        	this.dsDeleteSub.addColumn("NO_BID", "string");
        	this.dsDeleteSub.addColumn("NO_CONT", "string");

        	this.dsSelectSub1 = new Dataset();
        	this.dsSelectSub1.addColumn("NO_CONT", "string");

        	this.dsInsertSub1 = new Dataset();
        	this.dsInsertSub1.addColumn("NO_HADOCONT", "string");
        	this.dsInsertSub1.addColumn("CD_SITE", "string");
        	this.dsInsertSub1.addColumn("NO_BID", "string");
        	this.dsInsertSub1.addColumn("NO_PR", "string");
        	this.dsInsertSub1.addColumn("CD_COST", "string");
        	this.dsInsertSub1.addColumn("DS_ITEM", "string");
        	this.dsInsertSub1.addColumn("SZ_SIZE", "string");
        	this.dsInsertSub1.addColumn("DS_UNIT", "string");
        	this.dsInsertSub1.addColumn("QN_TT_HADO", "bigdecimal");
        	this.dsInsertSub1.addColumn("UP_TT_HADO", "bigdecimal");
        	this.dsInsertSub1.addColumn("AM_TT_HADO", "bigdecimal");
        	this.dsInsertSub1.addColumn("DT_DELIVERY", "string");

        	this.dsUpdateSub1 = new Dataset();
        	this.dsUpdateSub1.addColumn("NO_HADOCONT", "string");
        	this.dsUpdateSub1.addColumn("NO_PR", "string");
        	this.dsUpdateSub1.addColumn("CD_SITE", "string");
        	this.dsUpdateSub1.addColumn("CD_COST", "string");
        	this.dsUpdateSub1.addColumn("DS_ITEM", "string");
        	this.dsUpdateSub1.addColumn("SZ_SIZE", "string");
        	this.dsUpdateSub1.addColumn("DS_UNIT", "string");
        	this.dsUpdateSub1.addColumn("QN_TT_HADO", "bigdecimal");
        	this.dsUpdateSub1.addColumn("UP_TT_HADO", "bigdecimal");
        	this.dsUpdateSub1.addColumn("AM_TT_HADO", "bigdecimal");
        	this.dsUpdateSub1.addColumn("DT_DELIVERY", "string");

        	this.dsDeleteSub1 = new Dataset();
        	this.dsDeleteSub1.addColumn("NO_HADOCONT", "string");
        	this.dsDeleteSub1.addColumn("NO_PR", "string");
        	this.dsDeleteSub1.addColumn("CD_SITE", "string");
        	this.dsDeleteSub1.addColumn("CD_COST", "string");
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
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSelect.setColumn(0, "ID_DAM", this.dsSearch.getColumn(0, "ID_DAM"));
        	this.dsSelect.setColumn(0, "TY_SELECT", "");
        	this.dsSelect.setColumn(0, "DT_ORDER_FR", this.dsSearch.getColumn(0, "DT_ORDER_FR"));
        	this.dsSelect.setColumn(0, "DT_ORDER_TO", this.dsSearch.getColumn(0, "DT_ORDER_TO"));

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
        						callBackFnc); // 통신방법 정의 [생략가능]

        	//this.fnSelectSub();
        }


        //1
        this.fnSelect1 = function() {

        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.gfnGridBeforeSelect(this.dxGrid1);

        	// 디테일 데이터셋 데이터 삭제
        	this.dsList1.clearData();

        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelect1.clearData();
        	this.dsSelect1.addRow();

        	this.dsSelect1.setColumn(0, "NO_PR", this.dsList.getColumn(this.dsList.rowposition, "NO_PR"));

        	var strSvcId    = "select1";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select1=dsSelect1";
        	var outData     = "dsList1=select10";
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

        //2
        this.fnSelectSub = function() {
        	if(!this.fnSelectSubValidate()) return;

            this.dsListSub1.clearData();
        	this.gfnGridBeforeSelect(this.dxGridSub);

        	// 디테일 파라미터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE_SUB"));
        	this.dsSelectSub.setColumn(0, "NO_PO", this.dsSearch.getColumn(0, "NO_PO"));

        	var strSvcId    = "d_select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
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

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGridSub);
        	this.fnReverseDelete();
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
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSaveSub = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridSub)) return;
        	if (!this.gfnGridValidate(this.dxGridSub1)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsInsertSub.clearData();
        	this.dsUpdateSub.clearData();
        	this.dsDeleteSub.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsertSub.addRow();
        				this.dsInsertSub.setColumn(nrow, "CD_SITE", this.dsListSub.getColumn(i, "CD_SITE"));
        				this.dsInsertSub.setColumn(nrow, "NO_BID", this.dsListSub.getColumn(i, "NO_BID"));
        				this.dsInsertSub.setColumn(nrow, "NO_CONT", this.dsListSub.getColumn(i, "NO_CONT"));
        				this.dsInsertSub.setColumn(nrow, "DS_SUBCON", this.dsListSub.getColumn(i, "DS_SUBCON"));
        				this.dsInsertSub.setColumn(nrow, "CD_VENDOR", this.dsListSub.getColumn(i, "CD_VENDOR"));
        				this.dsInsertSub.setColumn(nrow, "CD_LICCOST", this.dsListSub.getColumn(i, "CD_LICCOST"));
        				this.dsInsertSub.setColumn(nrow, "CD_PAYMENT", this.dsListSub.getColumn(i, "CD_PAYMENT"));
        				this.dsInsertSub.setColumn(nrow, "CD_DELIVERY", this.dsListSub.getColumn(i, "CD_DELIVERY"));
        				this.dsInsertSub.setColumn(nrow, "CD_ORDER", this.dsListSub.getColumn(i, "CD_ORDER"));
        				this.dsInsertSub.setColumn(nrow, "CD_PAY_CONDITION", this.dsListSub.getColumn(i, "CD_PAY_CONDITION"));
        				this.dsInsertSub.setColumn(nrow, "CD_QUALITY", this.dsListSub.getColumn(i, "CD_QUALITY"));
        				this.dsInsertSub.setColumn(nrow, "CD_PACKING", this.dsListSub.getColumn(i, "CD_PACKING"));
        				this.dsInsertSub.setColumn(nrow, "CD_INCREASE", this.dsListSub.getColumn(i, "CD_INCREASE"));
        				this.dsInsertSub.setColumn(nrow, "CD_H02", this.dsListSub.getColumn(i, "CD_H02"));
        				this.dsInsertSub.setColumn(nrow, "TY_SELECT", this.dsListSub.getColumn(i, "TY_SELECT"));
        				this.dsInsertSub.setColumn(nrow, "ID_DAM", this.dsListSub.getColumn(i, "ID_DAM"));
        				break;
        			case "U":
        				var nrow = this.dsUpdateSub.addRow();
        				this.dsUpdateSub.setColumn(nrow, "CD_SITE", this.dsListSub.getColumn(i, "CD_SITE"));
        				this.dsUpdateSub.setColumn(nrow, "NO_BID", this.dsListSub.getColumn(i, "NO_BID"));
        				this.dsUpdateSub.setColumn(nrow, "NO_CONT", this.dsListSub.getColumn(i, "NO_CONT"));
        				this.dsUpdateSub.setColumn(nrow, "DS_SUBCON", this.dsListSub.getColumn(i, "DS_SUBCON"));
        				this.dsUpdateSub.setColumn(nrow, "CD_VENDOR", this.dsListSub.getColumn(i, "CD_VENDOR"));
        				this.dsUpdateSub.setColumn(nrow, "CD_LICCOST", this.dsListSub.getColumn(i, "CD_LICCOST"));
        				this.dsUpdateSub.setColumn(nrow, "CD_PAYMENT", this.dsListSub.getColumn(i, "CD_PAYMENT"));
        				this.dsUpdateSub.setColumn(nrow, "CD_DELIVERY", this.dsListSub.getColumn(i, "CD_DELIVERY"));
        				this.dsUpdateSub.setColumn(nrow, "CD_ORDER", this.dsListSub.getColumn(i, "CD_ORDER"));
        				this.dsUpdateSub.setColumn(nrow, "CD_PAY_CONDITION", this.dsListSub.getColumn(i, "CD_PAY_CONDITION"));
        				this.dsUpdateSub.setColumn(nrow, "CD_QUALITY", this.dsListSub.getColumn(i, "CD_QUALITY"));
        				this.dsUpdateSub.setColumn(nrow, "CD_PACKING", this.dsListSub.getColumn(i, "CD_PACKING"));
        				this.dsUpdateSub.setColumn(nrow, "CD_INCREASE", this.dsListSub.getColumn(i, "CD_INCREASE"));
        				this.dsUpdateSub.setColumn(nrow, "CD_H02", this.dsListSub.getColumn(i, "CD_H02"));
        				this.dsUpdateSub.setColumn(nrow, "TY_SELECT", this.dsListSub.getColumn(i, "TY_SELECT"));
        				this.dsUpdateSub.setColumn(nrow, "ID_DAM", this.dsListSub.getColumn(i, "ID_DAM"));
        				break;
        			case "D":
        				var nrow = this.dsDeleteSub.addRow();
        				this.dsDeleteSub.setColumn(nrow, "CD_SITE", this.dsListSub.getColumn(i, "CD_SITE"));
        				this.dsDeleteSub.setColumn(nrow, "NO_BID", this.dsListSub.getColumn(i, "NO_BID"));
        				this.dsDeleteSub.setColumn(nrow, "NO_CONT", this.dsListSub.getColumn(i, "NO_CONT"));
        				break;
        		}
        	}

        	if (this.dsInsertSub.rowcount == 0 && this.dsUpdateSub.rowcount == 0 && this.dsDeleteSub.rowcount == 0) {
        		// 대상PO리스트 저장할 내역이 없으면 대상PO내역 저장 호출
        		this.fnSaveSub1();
        		return;
        	}

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_insert=dsInsertSub d_update=dsUpdateSub d_delete=dsDeleteSub";
        	var outData     = "dsOutput=d_insert";
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


        this.fnAddSub = function() {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE_SUB"))){
        		this.gfnAlert("철근 현장코드는 입력하세요.");
        		return;
        	}

        	var nrow = this.gfnGridAdd(this.dxGridSub, "bottom");
        	//var nrow = this.dsListSub.addRow();

        	this.dsListSub.set_enableevent(false);
        	this.dsListSub.setColumn(nrow, this.ucFlag, "I");
        	this.dsListSub.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE_SUB"));
        	//this.dsListSub.setColumn(nrow, "DS_SITE", this.dsList.getColumn(this.dsList.rowposition,"DS_SITE"));
        	//this.dsListSub.setColumn(nrow, "DS_SUBCON", this.dsList.getColumn(this.dsList.rowposition, "DS_SUBCON"));
        	//this.dsListSub.setColumn(nrow, "ID_DAM", this.dsList.getColumn(this.dsList.rowposition, "ID_DAM"));
        	//this.dsListSub.setColumn(nrow, "DS_DAM", this.dsList.getColumn(this.dsList.rowposition, "DS_DAM"));
        	this.dsListSub.set_enableevent(true);
        	this.dxGridSub.setCellPos(1, nrow);
        }

        this.fnDelSub = function() {
        	this.gfnGridDel(this.dxGridSub);
        }

        this.fnExcelSub = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

        //////////////

        /*
        서브 조회
        */
        this.fnSelectSub1 = function() {

        	this.gfnGridBeforeSelect(this.dxGridSub1);

        	this.dsSelectSub1.clearData();
        	this.dsSelectSub1.addRow();

        	this.dsSelectSub1.setColumn(0, "NO_CONT", this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_CONT"));

        	var strSvcId    = "d1_select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d1_select=dsSelectSub1";
        	var outData     = "dsListSub1=d1_select0";
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
         *	저장 버튼
         */
        this.fnSaveSub1 = function() {

        	this.dxGridSub1.updateToDataset();

        	this.dsInsertSub1.clearData();
        	this.dsUpdateSub1.clearData();
        	this.dsDeleteSub1.clearData();

        	for (var i = 0; i < this.dsListSub1.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub1, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsertSub1.addRow();
        				this.dsInsertSub1.setColumn(nrow, "NO_HADOCONT", this.dsListSub1.getColumn(i, "NO_HADOCONT"));
        				this.dsInsertSub1.setColumn(nrow, "CD_SITE", this.dsListSub1.getColumn(i, "CD_SITE"));
        				this.dsInsertSub1.setColumn(nrow, "NO_BID", this.dsListSub1.getColumn(i, "NO_BID"));
        				this.dsInsertSub1.setColumn(nrow, "NO_PR", this.dsListSub1.getColumn(i, "NO_PR"));
        				this.dsInsertSub1.setColumn(nrow, "CD_COST", this.dsListSub1.getColumn(i, "CD_COST"));
        				this.dsInsertSub1.setColumn(nrow, "DS_ITEM", this.dsListSub1.getColumn(i, "DS_ITEM"));
        				this.dsInsertSub1.setColumn(nrow, "SZ_SIZE", this.dsListSub1.getColumn(i, "SZ_SIZE"));
        				this.dsInsertSub1.setColumn(nrow, "DS_UNIT", this.dsListSub1.getColumn(i, "DS_UNIT"));
        				this.dsInsertSub1.setColumn(nrow, "QN_TT_HADO", this.dsListSub1.getColumn(i, "QN_TT_HADO"));
        				this.dsInsertSub1.setColumn(nrow, "UP_TT_HADO", this.dsListSub1.getColumn(i, "UP_TT_HADO"));
        				this.dsInsertSub1.setColumn(nrow, "AM_TT_HADO", this.dsListSub1.getColumn(i, "AM_TT_HADO"));
        				this.dsInsertSub1.setColumn(nrow, "DT_DELIVERY", this.dsListSub1.getColumn(i, "DT_DELIVERY"));
        				break;
        			case "U":
        				var nrow = this.dsUpdateSub1.addRow();
        				this.dsUpdateSub1.setColumn(nrow, "NO_HADOCONT", this.dsListSub1.getColumn(i, "NO_HADOCONT"));
        				this.dsUpdateSub1.setColumn(nrow, "NO_PR", this.dsListSub1.getColumn(i, "NO_PR"));
        				this.dsUpdateSub1.setColumn(nrow, "CD_SITE", this.dsListSub1.getColumn(i, "CD_SITE"));
        				this.dsUpdateSub1.setColumn(nrow, "CD_COST", this.dsListSub1.getColumn(i, "CD_COST"));
        				this.dsUpdateSub1.setColumn(nrow, "DS_ITEM", this.dsListSub1.getColumn(i, "DS_ITEM"));
        				this.dsUpdateSub1.setColumn(nrow, "SZ_SIZE", this.dsListSub1.getColumn(i, "SZ_SIZE"));
        				this.dsUpdateSub1.setColumn(nrow, "DS_UNIT", this.dsListSub1.getColumn(i, "DS_UNIT"));
        				this.dsUpdateSub1.setColumn(nrow, "QN_TT_HADO", this.dsListSub1.getColumn(i, "QN_TT_HADO"));
        				this.dsUpdateSub1.setColumn(nrow, "UP_TT_HADO", this.dsListSub1.getColumn(i, "UP_TT_HADO"));
        				this.dsUpdateSub1.setColumn(nrow, "AM_TT_HADO", this.dsListSub1.getColumn(i, "AM_TT_HADO"));
        				this.dsUpdateSub1.setColumn(nrow, "DT_DELIVERY", this.dsListSub1.getColumn(i, "DT_DELIVERY"));
        				break;
        			case "D":
        				var nrow = this.dsDeleteSub1.addRow();
        				this.dsDeleteSub1.setColumn(nrow, "NO_HADOCONT", this.dsListSub1.getColumn(i, "NO_HADOCONT"));
        				this.dsDeleteSub1.setColumn(nrow, "NO_PR", this.dsListSub1.getColumn(i, "NO_PR"));
        				this.dsDeleteSub1.setColumn(nrow, "CD_SITE", this.dsListSub1.getColumn(i, "CD_SITE"));
        				this.dsDeleteSub1.setColumn(nrow, "CD_COST", this.dsListSub1.getColumn(i, "CD_COST"));
        				break;
        		}
        	}

        	if (this.dsInsertSub1.rowcount == 0 && this.dsUpdateSub1.rowcount == 0 && this.dsDeleteSub1.rowcount == 0) return;

        	var strSvcId    = "save1";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d1_insert=dsInsertSub1 d1_update=dsUpdateSub1 d1_delete=dsDeleteSub1";
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

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        	{
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", " fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"DT_ORDER_FR")) || this.gfnIsNull(this.dsSearch.getColumn(0,"DT_ORDER_TO"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			if(this.gfnIsNull(this.dsSearch.getColumn(0,"DT_ORDER_FR"))){
        				this.ctclDT_ORDER_FR.setFocus();
        			}else{
        				this.ctclDT_ORDER_TO.setFocus();
        			}
        		}
        		this.gfnAlert("발주요청일자는 반드시 입력 하셔야 합니다.", " fnVaidateCallback");
        	}
        	return validate;
        };

        /*
         *	조회 Validate
         */
        this.fnSelectSubValidate = function() {
        	var validate = true;
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE_SUB")))
        	{
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE_SUB.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", " fnVaidateCallback");
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
        	}
        	else if (svcID == "select1") {
        		this.gfnGridAfterSelect(this.dxGrid1);
        	}
        	if (svcID == "d_select") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        	else if (svcID == "d1_select") {
        		this.gfnGridAfterSelect(this.dxGridSub1);
        	}
           else if (svcID == "save") {
              // 보통 output 처리는 단일건이 될듯..
              if(this.dsOutput.rowcount > 0) {
                 // INSERT 로우는 새로 채번된 NO_BID, NO_CONT 를 OUTPUT 받아서 처리
                 var r = 0;
                 for(var i = 0; i < this.dsListSub.rowcount; i++) {
                    if(this.dsListSub.getColumn(i, this.ucFlag) == "I") {
                       var no_bid = this.dsOutput.getColumn(r, "NO_BID");
                       var no_cont = this.dsOutput.getColumn(r, "NO_CONT");
                       this.dsListSub.setColumn(i, "NO_BID", no_bid);
                       this.dsListSub.setColumn(i, "NO_CONT", no_cont);
                       r++;
                    }
                 }
              }
              this.fnSaveSub1();
              this.fnSelectSub();
           }
           else if(svcID == "save1")
           {
        		if(errorCode == 0)
        		{
        			this.FormBtns.SubSelect.click();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
           }

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        // 	if (id == "ccfCD_SITE" || id == "ccfCD_SITE_SUB") {
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        //
        //  	}
        //  else if(id == "ccfNO_BID"){
        // 		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 	}
        	return true;
        }


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGridSub);
        		this.gfnGridClear(this.dxGridSub1);
        	}
        }

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };


        // ▶ 버튼 클릭시.
        this.divData_btnRight_onclick = function(obj,e)
        {
        	if(this.dxGridSub.currentrow < 0) {
        		this.gfnAlert("대상PO 리스트 항목을 선택하세요.");
        		return;
        	}
        	var rows = this.dxGrid1.getSelectedDatasetRows();

        	this.dsListSub1.set_enableevent(false);

        	for(var i = 0; i < rows.length; i++)
        	{
        		var nrow = rows[i];

        		var listRow = this.dsListSub1.addRow();

        		//this.dsListSub1.copyRow(listRow, this.dsList1, nrow);
        		this.dsListSub1.setColumn(listRow, this.ucFlag, "I");
        		this.dsListSub1.setColumn(listRow, "CD_SITE", this.dsList1.getColumn(nrow, "CD_SITE"));
        		this.dsListSub1.setColumn(listRow, "CD_ITEM", this.dsList1.getColumn(nrow, "CD_CBS"));
        		this.dsListSub1.setColumn(listRow, "NO_BID", this.dsList1.getColumn(nrow, "NO_BID"));
        		this.dsListSub1.setColumn(listRow, "NO_PR", this.dsList1.getColumn(nrow, "NO_PR"));
        		this.dsListSub1.setColumn(listRow, "NO_HADOCONT", this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_CONT"));
        		this.dsListSub1.setColumn(listRow, "CD_COST", this.dsList1.getColumn(nrow, "CD_COST"));
        		this.dsListSub1.setColumn(listRow, "SZ_SIZE", this.dsList1.getColumn(nrow, "SZ_SIZE"));
        		this.dsListSub1.setColumn(listRow, "DS_UNIT", this.dsList1.getColumn(nrow, "DS_UNIT"));
        		this.dsListSub1.setColumn(listRow, "CD_ITEM", this.dsList1.getColumn(nrow, "CD_CBS"));
        		this.dsListSub1.setColumn(listRow, "DS_ITEM", this.dsList1.getColumn(nrow, "DS_CBS"));
        		this.dsListSub1.setColumn(listRow, "QN_TT_SILHENG", this.dsList1.getColumn(nrow, "QN_TT_SILHENG"));
        		this.dsListSub1.setColumn(listRow, "UP_TT_SILHENG", this.dsList1.getColumn(nrow, "UP_TT_SILHENG"));
        		this.dsListSub1.setColumn(listRow, "AM_TT_SILHENG", this.dsList1.getColumn(nrow, "AM_TT_SILHENG"));
        		this.dsListSub1.setColumn(listRow, "QN_TT_DOKUB", this.dsList1.getColumn(nrow, "QN_TT_ORDER"));
        		this.dsListSub1.setColumn(listRow, "QN_TT_HADO", this.dsList1.getColumn(nrow, "QN_TT_ORDER_REMAIN"));
        		this.dsListSub1.setColumn(listRow, "NO_BID_ORG", this.dsList1.getColumn(nrow, "NO_BID"));
        		this.dsListSub1.setColumn(listRow, "CD_COST_ORG", this.dsList1.getColumn(nrow, "CD_COST"));
        	}
        	this.gfnSetFormSubStatus(this, "I");

        	this.dsListSub1.set_enableevent(true);
        };


        // ◀ 버튼 클릭시.
        this.divData_btnLeft_onclick = function(obj,e)
        {
        	this.fnReverseDelete();
        };

        // 기존 공통함수의 삭제로는 여러건이 Insert로 등록되어있으면 전체 삭제가 안되서 함수로 생성.
        this.fnReverseDelete = function() {
        	var rows = this.dxGridSub1.getSelectedDatasetRows();
        	if(rows.length < 1) return;

        	this.dsListSub1.set_enableevent(false);

        	for(var i = rows.length - 1; i >= 0; i--)
        	{
        		var nrow = rows[i];

        		var flag = this.dsListSub1.getColumn(nrow, this.ucFlag);

        		if (flag == "I") {
        			this.dsListSub1.deleteRow(nrow);
        		}
        		else if (flag == "D") {
        			this.dsListSub1.setColumn(nrow, this.ucFlag, "");
        		}
        		else if (flag == "DU") {
        			this.dsListSub1.setColumn(nrow, this.ucFlag, "U");
        		}
        		else {
        			if (flag == "U") {
        				this.dsListSub1.setColumn(nrow, this.ucFlag, "DU");
        			}
        			else if (flag != "#") {
        				this.dsListSub1.setColumn(nrow, this.ucFlag, "D");
        			}
        		}
        	}
        	this.gfnSetFormSubStatus(this, "D");
        	this.dsListSub1.set_enableevent(true);

        	this._grd_entercell(this.dxGridSub1, this.dxGridSub1.currentrow, this.dxGridSub1.currentcell);
        }

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		this.fnSelect1();
        		obj.oldrow = -1;
        	}
        };

        this.fnGridSub_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.fnSelectSub1();
        		obj.oldrow = -1;
        	}
        };

        this.dsListSub_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub1.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub1, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsListSub_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsListSub_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsListSub.set_enableevent(false);
        		this.dsListSub.set_rowposition(this._row);
        		this.dsListSub.set_enableevent(true);
        	}
        }

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(0, "CD_TYPE", "H07");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsID_DAM=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
         		//this.divData.form.divData01.form.cboTY_HAJA.set_index(0);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.btnRight.addEventHandler("onclick",this.divData_btnRight_onclick,this);
            this.divData.form.btnLeft.addEventHandler("onclick",this.divData_btnLeft_onclick,this);
            this.dsListSub.addEventHandler("canrowposchange",this.dsListSub_canrowposchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DMA_PO_CREATE_REBAR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
