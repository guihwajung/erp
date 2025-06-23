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
            this.set_titletext("예가(목표가)관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CT_BID\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"RT_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_YEGA\" type=\"STRING\" size=\"256\"/><Column id=\"RT_YEGA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_YEGA\" type=\"STRING\" size=\"256\"/><Column id=\"RM_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MAGAM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_ORDERPLANSR_YEGA_SELECT</Col></Row><Row><Col id=\"TARGET\">detail</Col><Col id=\"SP\">DCBPR_ORDERPLANSR_YEGA_GRID_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCBPR_ORDERPLANSR_YEGA_SAVE</Col></Row><Row><Col id=\"TARGET\">calculate</Col><Col id=\"SP\">DCBPR_ORDERPLANSR_YEGA_CALCULATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">select_incm</Col><Col id=\"SP\">DCBPR_ORDERPLANSR_YEGA_CD_INCMSTRT_SELECT </Col></Row><Row><Col id=\"TARGET\">save_incm</Col><Col id=\"SP\">DCBPR_ORDERPLANSR_YEGA_CD_INCMSTRT_SAVE</Col></Row><Row><Col id=\"TARGET\">magam</Col><Col id=\"SP\">DCBPR_ORDERPLANSR_YEGA_MAGAM</Col></Row><Row><Col id=\"TARGET\">magam_cancel</Col><Col id=\"SP\">DCBPR_ORDERPLANSR_YEGA_MAGAM_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_YEGA", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRT_YEGA", this);
            obj._setContents("<ColumnInfo><Column id=\"RT_YEGA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_BID","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_BID","staNO_BID:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFORDERPLAN_01");
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"190","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTopTitle","0","0","697","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("예가표");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_LICCOST","0","staTopTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_text("하도공종");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_DOKUB","0","staCD_LICCOST:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("도급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_SILHENG","0","staAM_DOKUB:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("실행금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_YEGA","0","staAM_SILHENG:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_text("예가");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staRM_REASON","0","staAM_YEGA:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("예가산정변경사유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta00","staCD_LICCOST:-1","staTopTitle:5","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta01","staAM_DOKUB:-1","sta00:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta02","staAM_SILHENG:-1","sta01:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta03","staAM_YEGA:-1","sta02:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta04","staRM_REASON:-1","sta03:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCT_BID","sta00:-1","staTopTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_text("입찰참여사");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_YEGA","sta00:-1","staCD_LICCOST:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_text("산정방식");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staSPACE00","sta00:-1","staAM_DOKUB:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_MAGAM","sta00:-1","staAM_SILHENG:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_text("확정여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta05","staCT_BID:-1","staTopTitle:5","160","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta06","staSPACE00:-1","sta05:-1","160","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta07","staYN_MAGAM:-1","sta06:-1","160","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_MAGAM","staCD_YEGA:-1","sta07:-1","160","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_LICCOST","staCD_LICCOST:5","staTopTitle:10","143","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("19");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LICCOST","ctxtCD_LICCOST:5","staTopTitle:10","142","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DOKUB","staAM_DOKUB:5","ctxtCD_LICCOST:9","290","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("21");
            obj.set_value("");
            obj.set_format("#,#0");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SILHENG","staAM_SILHENG:5","ctxtAM_DOKUB:9","143","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("22");
            obj.set_value("");
            obj.set_format("#,#0");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_SILHENG","ctxtAM_SILHENG:5","ctxtAM_DOKUB:9","80","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("23");
            obj.set_value("");
            obj.set_format("0.0");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staPercent00","ctxtRT_SILHENG:5","ctxtAM_DOKUB:9","30","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("24");
            obj.set_text("%");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_YEGA","staAM_YEGA:5","ctxtAM_SILHENG:9","143","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("25");
            obj.set_value("");
            obj.set_format("#,#0");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_YEGA","ctxtAM_YEGA:5","ctxtAM_SILHENG:9","80","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("26");
            obj.set_value("");
            obj.set_format("0.0");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staPercent01","ctxtRT_YEGA:5","ctxtAM_SILHENG:9","30","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_text("%");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtRM_REASON","staRM_REASON:5","ctxtAM_YEGA:9","290","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("28");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtCT_BID","staCT_BID:5","staTopTitle:10","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("29");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Combo("ccboCD_YEGA","staCD_YEGA:5","ctxtCD_LICCOST:9","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("30");
            obj.set_innerdataset("dsCD_YEGA");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTopTitle1","staTopTitle:5","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("수입구조");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_visible("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid1","sta05:5","staTopTitle1:5","330",null,null,"17",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("32");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtYN_MAGAM","staYN_MAGAM:5","sta07:4","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("33");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBottomTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("최근입찰정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staBottomTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_BID.form.CDTextBox","value","dsSearch","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataTop.form.ctxtCD_LICCOST","value","dsList","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataTop.form.ctxtDS_LICCOST","value","dsList","DS_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.ctxtCT_BID","value","dsList","CT_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataTop.form.ctxtAM_DOKUB","value","dsList","AM_TT_DOKUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.ctxtAM_SILHENG","value","dsList","AM_TT_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.ctxtRT_SILHENG","value","dsList","RT_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.ctxtAM_YEGA","value","dsList","AM_YEGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.ctxtRT_YEGA","value","dsList","RT_YEGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.ccboCD_YEGA","value","dsList","CD_YEGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.ctxtRM_REASON","value","dsList","RM_REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.ctxtCT_BID","value","dsList","CT_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataTop.form.ctxtYN_MAGAM","value","dsList","YN_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_ORDERPLANSR_YEGA.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_BID))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);

        		// 코드파인드의 명칭부분은 직접 접근해서 셋팅
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.ccfNO_BID.form.DSTextBox.set_value(this.getOwnerFrame().DS_SUBCON);

        		this.ccfCD_SITE.form.fnFitToContents();
        		this.ccfNO_BID.form.fnFitToContents();

        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCalc = this.gfnFormButtonAdd("btnCalc", "fnCalc");

        	this.btnConfirm = this.gfnFormButtonAdd("btnConfirm", "fnConfirm");
        	this.btnCancel = this.gfnFormButtonAdd("btnCancel", "fnCancel");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_BID = this.divSearch.form.ccfNO_BID;

        	this.dxGrid = this.divData.form.divDataBottom.form.objGrid;
        	this.dxGrid1 = this.divData.form.divDataTop.form.objGrid1;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_BID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList2, "DC", "DCB_ORDERPLANSR_YEGA");
        	this.gfnGridInit(this.dxGrid1, this.dsList3, "DC", "DCB_CD_INCMSTRT");

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_BID", "string");

        	this.dsDetail = new Dataset();
        	this.dsDetail.addColumn("CD_SITE", "string");
        	this.dsDetail.addColumn("NO_BID", "string");
        	this.dsDetail.addColumn("CD_LICCOST", "string");
        	this.dsDetail.addColumn("CD_YEGA", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_BID", "string");
        	this.dsSave.addColumn("CD_YEGA", "string");
        	this.dsSave.addColumn("AM_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_YEGA", "bigdecimal");
        	this.dsSave.addColumn("RT_YEGA", "bigdecimal");
        	this.dsSave.addColumn("RM_REASON", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsSelectIncm = new Dataset();
        	this.dsSelectIncm.addColumn("NO_BID", "string");

        	this.dsSaveIncm = new Dataset();
        	this.dsSaveIncm.addColumn("NO_BID", "string");
        	this.dsSaveIncm.addColumn("CHK", "string");
        	this.dsSaveIncm.addColumn("CD_INCMSTRT", "string");

        	this.dsMagam = new Dataset();
        	this.dsMagam.addColumn("NO_BID", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));

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
        }

        this.fnDetail = function() {
        	this.dsDetail.clearData();
        	this.dsDetail.addRow();

        	this.dsDetail.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsDetail.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsDetail.setColumn(0, "CD_LICCOST", this.dsList.getColumn(0, "CD_LICCOST"));
        	this.dsDetail.setColumn(0, "CD_YEGA", this.dsList.getColumn(0, "CD_YEGA"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "detail=dsDetail";
        	var outData     = "dsList2=detail0";
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

        this.fnSelectIncm = function() {
        	this.dsSelectIncm.clearData();
        	this.dsSelectIncm.addRow();

        	this.dsSelectIncm.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));

        	var strSvcId    = "select_incm";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_incm=dsSelectIncm";
        	var outData     = "dsList3=select_incm0";
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
        	//this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	this.dsSave.clearData();

        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSave.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSave.setColumn(nrow, "CD_YEGA", this.dsList.getColumn(0, "CD_YEGA"));
        	this.dsSave.setColumn(nrow, "AM_SILHENG", this.dsList.getColumn(0, "AM_TT_SILHENG"));
        	this.dsSave.setColumn(nrow, "AM_YEGA", this.dsList.getColumn(0, "AM_YEGA"));
        	this.dsSave.setColumn(nrow, "RT_YEGA", this.dsList.getColumn(0, "RT_YEGA"));
        	this.dsSave.setColumn(nrow, "RM_REASON", this.dsList.getColumn(0, "RM_REASON"));
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnSaveIncm = function()
        {
        	this.dsSaveIncm.clearData();

        	for(var i = 0 ; i < this.dsList3.rowcount; i++)
        	{
        		var nrow = this.dsSaveIncm.addRow();
        		this.dsSaveIncm.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        		this.dsSaveIncm.setColumn(nrow, "CHK", this.dsList3.getColumn(i, "CHK"));
        		this.dsSaveIncm.setColumn(nrow, "CD_INCMSTRT", this.dsList3.getColumn(i, "CD_INCMSTRT"));

        	}
        	if (this.dsSaveIncm.rowcount == 0) return;

        	var strSvcId    = "save_incm";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_incm=dsSaveIncm";
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
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_BID"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfNO_BID.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("입찰번호를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		//this.gfnGridAfterSelect(this.dxGrid);
        		this.fnDetail();
        		this.fnSelectIncm();
        		this.gfnSetFormStatus(this, "Q");

        		if(this.dsList.getColumn(0, "YN_MAGAM") == "Y")
        		{
        			this.btnConfirm.set_enable(false);
        			this.btnCancel.set_enable(true);
        		}
        		else
        		{
        			this.btnConfirm.set_enable(true);
        			this.btnCancel.set_enable(false);
        		}

        		this.fnBtnCheckAll();
        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if(this.dsList2.rowcount > 0 && this.gfnIsNull(this.dsList.getColumn(0, "RT_YEGA")))
        		{
        			this.dsList.setColumn(0, "RT_YEGA", this.dsList2.getColumn(0, "RT_AVG"));
        		}

        		this.fnCheckYega(this.dsList.getColumn(0, "CD_YEGA"));
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "calculate") {
        		if (errorCode == 0) {
        			//this.FormBtns.Select.click();
        			//this.fnDetail();
        			this.fnSaveIncm();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save_incm") {
        		if (errorCode == 0) {
        			this.fnSelect();
        			//this.fnDetail();
        			//this.fnSelectIncm();
        			//this.dsList.setColumn(0, "RT_YEGA", nexacro.toNumber(this.dsRT_YEGA.getColumn(0, "RT_YEGA"),0));

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "magam") {
        		if (errorCode == 0) {
        			this.fnMagam_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			var json = this.gfnArgsToJson(strArg);
        			strArg = json.gubun;

        			var msg = "";

        			if(strArg == "ok") msg += "확정이";
        			else if(strArg == "cancel") msg+= "확정취소가";

        			msg += " 정상처리 되었습니다.";

        			this.gfnAlert(msg, "fnMagam_callback");

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo")
        	{
        		this.divData.form.divDataTop.form.ccboCD_YEGA.set_index(0);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        // 	if (id == "ccfCD_SITE") {
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 	}

        	if (id == "ccfNO_BID") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 입력해주세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 입찰번호 초기화
        		this.ccfNO_BID.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		this.dsList.clearData();

        		if(e.columnid == "CD_SITE")
        		{
        			this.dsSearch.setColumn(0, "NO_BID", "");
        			this.divSearch.form.ccfNO_BID.form.DSTextBox.set_value("");
        		}
        	}
        }

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	var nrow = this.dsCombo.addRow();
        	this.dsCombo.setColumn(nrow, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(nrow, "CD_TYPE", "C05");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_YEGA=combo0";
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

        this.dsList_onvaluechanged = function(obj,e)
        {
        	this.gfnSetFormStatus(this, "U");	// 폼상태 초기화

        	if(e.columnid == "RT_YEGA")
        	{
        		var am_yega = nexacro.toNumber(this.dsList.getColumn(0, "AM_TT_SILHENG"),0) * nexacro.toNumber(e.newvalue,0) / 100;
        		this.dsList.setColumn(0, "AM_YEGA", am_yega);
        	}
        	else if(e.columnid == "CD_YEGA")
        	{
        		this.fnCheckYega(e.newvalue);

        // 		if(e.newvalue == "KIN")
        // 		{
        // 			this.divData.form.divDataTop.form.ctxtAM_YEGA.set_readonly(false);
        // 			this.divData.form.divDataTop.form.ctxtRT_YEGA.set_readonly(false);
        // 		}
        // 		else
        // 		{
        // 			this.divData.form.divDataTop.form.ctxtAM_YEGA.set_readonly(true);
        // 			this.divData.form.divDataTop.form.ctxtRT_YEGA.set_readonly(true);
        // 		}
        	}
        };

        this.fnCalc = function(obj,e) {

        	this.dsCalc = new Dataset();
        	this.dsCalc.addColumn("CD_SITE", "string");
        	this.dsCalc.addColumn("NO_BID", "string");
        	this.dsCalc.addColumn("CD_LICCOST", "string");
        	this.dsCalc.addColumn("CD_YEGA", "string");
        	this.dsCalc.addColumn("CD_INCMSTRT", "string");
        	this.dsCalc.addColumn("RT_YEGA", "bigdecimal");
        	this.dsCalc.addColumn("RM_REASON", "string");

        	var nrow = this.dsCalc.addRow();

        	var cd_incmstrt = "";
        	var first = true;

        	for(var i = 0 ; i < this.dsList3.rowcount; i++)
        	{
        		if(this.dsList3.getColumn(i, "CHK") == "Y")
        		{
        			if(first == true)
        			{
        				cd_incmstrt += this.dsList3.getColumn(i, "CD_INCMSTRT");
        				first = false;
        			}
        			else
        			{
        				cd_incmstrt += "," + this.dsList3.getColumn(i, "CD_INCMSTRT");
        			}
        		}
        	}

        	this.dsCalc.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCalc.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsCalc.setColumn(nrow, "CD_LICCOST", this.dsList.getColumn(0, "CD_LICCOST"));
        	this.dsCalc.setColumn(nrow, "CD_YEGA", this.dsList.getColumn(0, "CD_YEGA"));
        	this.dsCalc.setColumn(nrow, "CD_INCMSTRT", cd_incmstrt);
        	this.dsCalc.setColumn(nrow, "RM_REASON", this.dsList.getColumn(0, "RM_REASON"));
        	if(this.dsList.getColumn(0, "CD_YEGA") == "KIN")
        	{
        		this.dsCalc.setColumn(nrow, "RT_YEGA", this.dsList.getColumn(0, "RT_YEGA"));
        	}

        	var strSvcId    = "calculate";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "calculate=dsCalc";
        	var outData     = "dsRT_YEGA=calculate";
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

        // 확정
        this.fnConfirm = function(obj,e) {
        	this.gfnConfirm("해당 건을 확정처리하시겠습니까?", "fnConfirm_callback", "ok");
        }

        // 확정취소
        this.fnCancel = function(obj,e) {
        	this.gfnConfirm("해당 건을 확정취소처리하시겠습니까?", "fnConfirm_callback", "cancel");
        }

        this.fnConfirm_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnMagam(strID);
        	}
        }

        this.fnMagam = function(gubun)
        {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_BID")))
        	{
        		this.gfnAlert("입찰번호를 입력해주세요.");
        		return false;
        	}

        	this.dsMagam.clearData();
        	var nrow = this.dsMagam.addRow();

        	this.dsMagam.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));

        	var strSvcId    = "magam";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "magam=dsMagam";

        	if(gubun == "cancel") inData = "magam_cancel=dsMagam";

        	var outData     = "";
        	var strArg      = "gubun="+gubun;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }

        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btnCalc, this.dsList);
        	this.gfnBtnCheck(this.btnConfirm, this.dsList);
        	this.gfnBtnCheck(this.btnCancel, this.dsList);
        }

        this.fnCheckYega = function(value)
        {
        	if(value == "KIN")
        	{
        		this.divData.form.divDataTop.form.ctxtAM_YEGA.set_readonly(false);
        		this.divData.form.divDataTop.form.ctxtRT_YEGA.set_readonly(false);
        	}
        	else
        	{
        		this.divData.form.divDataTop.form.ctxtAM_YEGA.set_readonly(true);
        		this.divData.form.divDataTop.form.ctxtRT_YEGA.set_readonly(true);
        	}

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_ORDERPLANSR_YEGA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
