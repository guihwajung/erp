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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DOTPR_SCHEME_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub1</Col><Col id=\"SP\">DOTPR_CONDITION_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DOTPR_SALE_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DOTPR_CARRY_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub3</Col><Col id=\"SP\">DOTPR_DAY_SELECT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DOTPR_CONT_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub4</Col><Col id=\"SP\">DOTPR_COLLECT_SELECT</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DOTPR_CHAIP_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub5</Col><Col id=\"SP\">DOTPR_LOAN_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList5", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub5", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROJ","staCD_PROJ:0.0","10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOXPR_PROJ_CODEFIND");
            obj.getSetter("CDTextWidth").set("65");
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enableevent("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("기본정보");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter1","0","50%","100.00%","5",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter1:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnRegSub1",null,"5","80","22","20",null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("등록/변경");
            this.divData.form.tabData.tab1.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta02","5","0","200","22",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("사업참여조건");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub1","5","sta02:5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab1.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab1.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter1:5",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","5","0","200","22",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("건축개요");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid1","5","sta01:5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab1.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab1.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnReg1",null,"5","80","22","20",null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("등록/변경");
            this.divData.form.tabData.tab1.form.divDataTop.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("분양현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("sta01","5","0","200","22",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("분양현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","sta01:5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnReg2",null,"5","80","22","20",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj.set_text("등록/변경");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("사업추진/진행사항");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter3","0","50.00%","100.00%","5",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            obj.set_text("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter3:5",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("1");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta01","5","0","200","22",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("사업추진현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab3.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid3","5","sta01:5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab3.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab3.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnReg3",null,"5","80","22","20",null,null,null,null,null,this.divData.form.tabData.tab3.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("등록/변경");
            this.divData.form.tabData.tab3.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter3:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("2");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Button("btnRegSub3",null,"5","80","22","20",null,null,null,null,null,this.divData.form.tabData.tab3.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("등록/변경");
            this.divData.form.tabData.tab3.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta02","5","0","200","22",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("사업진행사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab3.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub3","5","sta02:5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab3.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab3.form.divDataBottom.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("공사비현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter4","0","50.00%","100.00%","5",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter4:5",null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("1");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta01","5","0","200","22",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("도급공사비현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid4","5","sta01:5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab4.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab4.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnReg4",null,"5","80","22","20",null,null,null,null,null,this.divData.form.tabData.tab4.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("등록/변경");
            this.divData.form.tabData.tab4.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter4:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("2");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Button("btnRegSub4",null,"5","80","22","20",null,null,null,null,null,this.divData.form.tabData.tab4.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("등록/변경");
            this.divData.form.tabData.tab4.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta02","5","0","200","22",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("공사비수금현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub4","5","sta02:5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab4.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab4.form.divDataBottom.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("대출/대여금현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter5","0","50.00%","100.00%","5",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            obj.set_text("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter5:5",null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("1");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Static("sta01","5","0","200","22",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("대출현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab5.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid5","5","sta01:5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab5.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab5.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnReg5",null,"5","80","22","20",null,null,null,null,null,this.divData.form.tabData.tab5.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("등록/변경");
            this.divData.form.tabData.tab5.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter5:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("2");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Button("btnRegSub5",null,"5","80","22","20",null,null,null,null,null,this.divData.form.tabData.tab5.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("등록/변경");
            this.divData.form.tabData.tab5.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta02","5","0","200","22",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("대여금현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab5.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub5","5","sta02:5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab5.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab5.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_PROJ.form.CDTextBox","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_PROJ.form.DSTextBox","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOT_CARD.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_PROJ)) {
        		this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	    this.dsSearch.setColumn(0, "DS_PROJ", this.getOwnerFrame().DS_PROJ);
        		this.FormBtns.Select.click();
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

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_PROJ = this.divSearch.form.ccfCD_PROJ;

        	//tab1
        	this.dxGrid1 = this.divData.form.tabData.tab1.form.divDataTop.form.objGrid1;
        	this.dxGridSub1 = this.divData.form.tabData.tab1.form.divDataBottom.form.objGridSub1;

        	//tab2
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;

        	//tab3
        	this.dxGrid3 = this.divData.form.tabData.tab3.form.divDataTop.form.objGrid3;
        	this.dxGridSub3 = this.divData.form.tabData.tab3.form.divDataBottom.form.objGridSub3;

        	//tab4
        	this.dxGrid4 = this.divData.form.tabData.tab4.form.divDataTop.form.objGrid4;
        	this.dxGridSub4 = this.divData.form.tabData.tab4.form.divDataBottom.form.objGridSub4;

        	//tab5
        	this.dxGrid5 = this.divData.form.tabData.tab5.form.divDataTop.form.objGrid5;
        	this.dxGridSub5 = this.divData.form.tabData.tab5.form.divDataBottom.form.objGridSub5;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_PROJ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_PROJ.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화

        	//tab1
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DO", "DOT_SCHEME"); //건축개요
        	this.gfnGridInit(this.dxGridSub1, this.dsListSub1, "DO", "DOT_CONDITION"); //사업참여조건
        	this.dxGrid1.info = "Y";
        	this.dxGridSub1.info = "Y";

        	this.dxGridSub1.setFormatRowProperty( 1,"size",this.dxGridSub1.getFormatRowProperty(0,"size")*2 );

        	//tab2
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DO", "DOT_SALE"); //분양현황
        	this.dxGrid2.info = "Y";

        	//tab3
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DO", "DOT_CARRY"); //사업추진현황
        	this.gfnGridInit(this.dxGridSub3, this.dsListSub3, "DO", "DOT_DAY"); //사업진행사항
        	this.dxGrid3.info = "Y";
        	this.dxGridSub3.info = "Y";

        	this.dxGridSub3.setFormatRowProperty( 1,"size",this.dxGridSub3.getFormatRowProperty(0,"size")*2 );

        	//tab4
        	this.gfnGridInit(this.dxGrid4, this.dsList4, "DO", "DOT_CONT"); //도급공사비현황
        	this.gfnGridInit(this.dxGridSub4, this.dsListSub4, "DO", "DOT_COLLECT"); //공사비수금현황
        	this.dxGrid4.info = "Y";
        	this.dxGridSub4.info = "Y";

        	//tab5
        	this.gfnGridInit(this.dxGrid5, this.dsList5, "DO", "DOT_CHAIP"); //대출현황
        	this.gfnGridInit(this.dxGridSub5, this.dsListSub5, "DO", "DOT_LOAN"); //대여금현황
        	this.dxGrid5.info = "Y";
        	this.dxGridSub5.info = "Y";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "string");


        }

        this.fnGetTarget = function (nTabIdx){
        	var objTarget = {};

        	objTarget.dxGrid = null;
        	objTarget.dxGridSub = null;

        	if(nTabIdx == 0) {	// 기본정보
        		objTarget.dxGrid = this.dxGrid1;
        		objTarget.dxGridSub = this.dxGridSub1;
        	}
        	else if(nTabIdx == 1){	// 분양현황
        		objTarget.dxGrid = this.dxGrid2;
        		objTarget.dxGridSub = null;
        	}
        	else if(nTabIdx == 2){		// 사업추진/진행사항
        		objTarget.dxGrid = this.dxGrid3;
        		objTarget.dxGridSub = this.dxGridSub3;
        	}
        	else if(nTabIdx == 3){	// 공사비현황
        		objTarget.dxGrid = this.dxGrid4;
        		objTarget.dxGridSub = this.dxGridSub4;
        	}
        	else if(nTabIdx == 4){	// 대출/대여금현황
        		objTarget.dxGrid = this.dxGrid5;
        		objTarget.dxGridSub = this.dxGridSub5;
        	}

        	return objTarget;
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	var nTabIdx = this.divData.form.tabData.tabindex;

        	var objTarget = this.fnGetTarget(nTabIdx);
        	var nSvcNum = nTabIdx+1;

        	var strSvcId    = "select_"+nSvcNum;
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));


        	if(nTabIdx == 1) {
        		this.gfnGridBeforeSelect(objTarget.dxGrid);

        		inData      = "select"+nSvcNum+"=dsSelect";
        		outData     = "dsList"+nSvcNum+"=select"+nSvcNum+"0";
        	}
        	else{
        		this.gfnGridBeforeSelect(objTarget.dxGrid);
        		this.gfnGridBeforeSelect(objTarget.dxGridSub);

        		inData      = "select"+nSvcNum+"=dsSelect selectSub"+nSvcNum+"=dsSelect";
        		outData     = "dsList"+nSvcNum+"=select"+nSvcNum+"0 dsListSub"+nSvcNum+"=selectSub"+nSvcNum+"0";
        	}

        trace("strSvcId", strSvcId);
        trace("inData", inData);
        trace("outData", outData);

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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	var nTabIdx = this.divData.form.tabData.tabindex;
        	var objTarget = this.fnGetTarget(nTabIdx);

        	if(nTabIdx == 1) {
        		this.gfnExcelExport(objTarget.dxGrid);
        	}
        	else{
        		this.gfnExcelExport(objTarget.dxGrid);
        		this.gfnExcelExport(objTarget.dxGridSub);
        	}
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_PROJ"))) {
        		this.fnValidCallback = function() {
        			this.ccfCD_PROJ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("프로젝트코드를 입력하세요.", "fnValidCallback");
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
        	if (svcID.startsWith("select_")) {
        		var arrSvcID = svcID.split("_");

        		var nTabIdx = parseInt(arrSvcID[1]) -1;

        trace("nTabIdx", nTabIdx);

        		var objTarget = this.fnGetTarget(nTabIdx);

        trace("objTarget", objTarget);

        		if(nTabIdx == 1){
        			this.gfnGridAfterSelect(objTarget.dxGrid);
        		}else{
        			this.gfnGridAfterSelect(objTarget.dxGrid);
        			this.gfnGridAfterSelect(objTarget.dxGridSub);
        		}
        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_PROJ"){
        		dsUserParam.setColumn(nrow, "TY_PROJ", this.getOwnerFrame().TY_PROJ);
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화

        		var nTabIdx = this.divData.form.tabData.tabindex;
        		var objTarget = this.fnGetTarget(nTabIdx);

        		if(nTabIdx == 1){
        			this.gfnGridClear(objTarget.dxGrid);
        		}else{
        			this.gfnGridClear(objTarget.dxGrid);
        			this.gfnGridClear(objTarget.dxGridSub);
        		}
        	}
        };

        this.divData_tabData_onchanged = function(obj,e){
        	// 탭 변경시 조회처리시
        	if(e.preindex != e.postindex) {
        		this.FormBtns.Select.click();
        	}
        };

        //tab1
        this.divData_tabData_tab1_divSplitter1_ondrag = function(obj,e){
        	e.set_userdata("splitter1");
        	return true;
        };
        //tab1
        this.divData_tabData_tab1_ondragmove = function(obj,e){
        	if(e.userdata == "splitter1") {
        		this.divData.form.tabData.tab1.form.divSplitter1.set_top(e.clienty);
        		this.divData.form.tabData.tab1.form.resetScroll();
        	}
        };
        //tab3
        this.divData_tabData_tab3_divSplitter3_ondrag = function(obj,e){
        	e.set_userdata("splitter3");
        	return true;
        };
        //tab3
        this.divData_tabData_tab3_ondragmove = function(obj,e){
        	if(e.userdata == "splitter3") {
        		this.divData.form.tabData.tab3.form.divSplitter3.set_top(e.clienty);
        		this.divData.form.tabData.tab3.form.resetScroll();
        	}
        };
        //tab4
        this.divData_tabData_tab4_divSplitter4_ondrag = function(obj,e){
        	e.set_userdata("splitter4");
        	return true;
        };
        //tab4
        this.divData_tabData_tab4_ondragmove = function(obj,e){
        	if(e.userdata == "splitter4") {
        		this.divData.form.tabData.tab4.form.divSplitter4.set_top(e.clienty);
        		this.divData.form.tabData.tab4.form.resetScroll();
        	}
        };
        //tab5
        this.divData_tabData_tab5_divSplitter5_ondrag = function(obj,e){
        	e.set_userdata("splitter5");
        	return true;
        };
        //tab5
        this.divData_tabData_tab5_ondragmove = function(obj,e){
        	if(e.userdata == "splitter5") {
        		this.divData.form.tabData.tab5.form.divSplitter5.set_top(e.clienty);
        		this.divData.form.tabData.tab5.form.resetScroll();
        	}
        };

        //등록/변경
        this.fnRegChange = function(obj,e){
        	trace("fnRegChange>>button id>>", obj.id);


        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};
        	param.CD_PROJ = this.dsSearch.getColumn(0, "CD_PROJ");
        	param.DS_PROJ = this.dsSearch.getColumn(0, "DS_PROJ");
        	param.grid_readonly = "N"; //this.dxGrid.info = "Y";

        	//tab1
        	if(obj.id == "btnReg1"){
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOT_SCHEME", "fnRegChange_callback", param);
        	}
        	else if(obj.id == "btnRegSub1"){
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOT_CONDITION", "fnRegChange_callback", param);
        	}
        	//tab2
        	else if(obj.id == "btnReg2"){
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOT_SALE", "fnRegChange_callback", param);
        	}
        	//tab3
        	else if(obj.id == "btnReg3"){
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOT_CARRY", "fnRegChange_callback", param);
        	}
        	else if(obj.id == "btnRegSub3"){
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOT_DAY", "fnRegChange_callback", param);
        	}
        	//tab4
        	else if(obj.id == "btnReg4"){
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOT_CONT", "fnRegChange_callback", param);
        	}
        	else if(obj.id == "btnRegSub4"){
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOT_COLLECT", "fnRegChange_callback", param);
        	}
        	//tab5
        	else if(obj.id == "btnReg5"){
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOT_CHAIP", "fnRegChange_callback", param);
        	}
        	else if(obj.id == "btnRegSub5"){
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOT_LOAN", "fnRegChange_callback", param);
        	}
        };

        this.fnRegChange_callback = function(id,val){
        	trace("fnRegChange_callback>>", id, val);

        	//if(val){
        		this.FormBtns.Select.click();
        	//}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab1.addEventHandler("ondragmove",this.divData_tabData_tab1_ondragmove,this);
            this.divData.form.tabData.tab1.form.divSplitter1.addEventHandler("ondrag",this.divData_tabData_tab1_divSplitter1_ondrag,this);
            this.divData.form.tabData.tab1.form.divDataBottom.form.btnRegSub1.addEventHandler("onclick",this.fnRegChange,this);
            this.divData.form.tabData.tab1.form.divDataTop.form.btnReg1.addEventHandler("onclick",this.fnRegChange,this);
            this.divData.form.tabData.tab2.form.btnReg2.addEventHandler("onclick",this.fnRegChange,this);
            this.divData.form.tabData.tab3.addEventHandler("ondragmove",this.divData_tabData_tab3_ondragmove,this);
            this.divData.form.tabData.tab3.form.divSplitter3.addEventHandler("ondrag",this.divData_tabData_tab3_divSplitter3_ondrag,this);
            this.divData.form.tabData.tab3.form.divDataTop.form.btnReg3.addEventHandler("onclick",this.fnRegChange,this);
            this.divData.form.tabData.tab3.form.divDataBottom.form.btnRegSub3.addEventHandler("onclick",this.fnRegChange,this);
            this.divData.form.tabData.tab4.addEventHandler("ondragmove",this.divData_tabData_tab4_ondragmove,this);
            this.divData.form.tabData.tab4.form.divSplitter4.addEventHandler("ondrag",this.divData_tabData_tab4_divSplitter4_ondrag,this);
            this.divData.form.tabData.tab4.form.divDataTop.form.btnReg4.addEventHandler("onclick",this.fnRegChange,this);
            this.divData.form.tabData.tab4.form.divDataBottom.form.btnRegSub4.addEventHandler("onclick",this.fnRegChange,this);
            this.divData.form.tabData.tab5.addEventHandler("ondragmove",this.divData_tabData_tab5_ondragmove,this);
            this.divData.form.tabData.tab5.form.divSplitter5.addEventHandler("ondrag",this.divData_tabData_tab5_divSplitter5_ondrag,this);
            this.divData.form.tabData.tab5.form.divDataTop.form.btnReg5.addEventHandler("onclick",this.fnRegChange,this);
            this.divData.form.tabData.tab5.form.divDataBottom.form.btnRegSub5.addEventHandler("onclick",this.fnRegChange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOT_CARD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
