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
            this.set_titletext("합계잔액시산표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_BUYVATCOMP_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_BUYVATCOMP_UPDATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DHXPR_BUYVATCOMP_COMBO</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DHXPR_VAT_TY_VATPROOF</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_VATAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VATPROOF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VATBGJE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"YR_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"CK_OMIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPANYNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SELFACNT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_VATAPPR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">이체</Col></Row><Row><Col id=\"DS_CODE\">미이체</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VATPROOF", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VATBGJE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">AAA</Col><Col id=\"DS_CODE\">안분대상</Col></Row><Row><Col id=\"CD_CODE\">AAB</Col><Col id=\"DS_CODE\">안분제외</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VENDOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">F</Col><Col id=\"DS_CODE\">일반</Col></Row><Row><Col id=\"CD_CODE\">B</Col><Col id=\"DS_CODE\">금융</Col></Row><Row><Col id=\"CD_CODE\">P</Col><Col id=\"DS_CODE\">개인</Col></Row><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">0</Col><Col id=\"DS_CODE\"/></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1기예정</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">1기확정</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">2기예정</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">2기확정</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SELFACNT","sta00:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SELFACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta01:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT_BY_SELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("승인구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoYN_VATAPPR","sta02:0.0","sta00:10.0","184","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsYN_VATAPPR");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","crdoYN_VATAPPR:0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("증빙구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_VATPROOF","sta03:0.0","sta00:10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsTY_VATPROOF");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","ccboTY_VATPROOF:0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("안분구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_VATBGJE","sta04:0.0","sta00:10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTY_VATBGJE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta05","ccboTY_VATBGJE:0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_VENDOR","sta05:0.0","sta00:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_VENDOR");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","ccboTY_VENDOR:0.0","sta00:10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta06","ccfCD_VENDOR:0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("증빙기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_MAGAM","sta06:0.0","sta00:10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNO_TAX","ctclYR_MAGAM:0.0","sta00:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsNO_TAX");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_START","ccboNO_TAX:0.0","sta00:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","ctxtDT_START:0.0","sta00:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_END","staDT_WORK:0.0","sta00:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkCK_OMIT","ctxtDT_END:0.0","sta00:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("누락여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SELFACNT.form.CDTextBox","value","dsSearch","CD_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SELFACNT.form.DSTextBox","value","dsSearch","DS_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.crdoYN_VATAPPR","value","dsSearch","YN_VATAPPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboTY_VATPROOF","value","dsSearch","TY_VATPROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboTY_VATBGJE","value","dsSearch","TY_VATBGJE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccboTY_VENDOR","value","dsSearch","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_VENDOR.form.DSTextBox","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ctclYR_MAGAM.form.TextBox","value","dsSearch","YR_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccboNO_TAX","value","dsSearch","NO_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ctxtDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.ctxtDT_END","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.cchkCK_OMIT","value","dsSearch","CK_OMIT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_BUYVATCOMP.xfdl", function() {
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

        	this.fnCombo();

        	this.dsSearch.setColumn(0, "CD_DEPT", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        	this.dsSearch.setColumn(0, "DS_DEPT", this.AuthClient.DS_CORP);
        	this.dsSearch.setColumn(0, "CD_SELFACNT", this.UserInfo.LEVCD_DEPT_SELFACNT);
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SELFACNT")))
        		this.ccfCD_SELFACNT.form.fnCodeFindLoad();

        	this.dsSearch.setColumn(0, "YR_MAGAM", this.gfnGetDate().substring(0, 4));
        	this.dsSearch.setColumn(0, "YN_VATAPPR", "");
        	this.dsSearch.setColumn(0, "TY_VATBGJE", "");
        	this.dsSearch.setColumn(0, "TY_VENDOR", "A");
        	this.dsSearch.setColumn(0, "NO_TAX", "0");

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
        	this.btnQueryVat = this.gfnFormButtonAdd("QueryVat", "fnQueryVat");			//부가세상세조회
        	this.btnSlipSelect = this.gfnFormButtonAdd("SlipSelect", "fnSlipSelect");	//전표조회
        	this.btnInclude = this.gfnFormButtonAdd("Include", "fnInclude");			//안분대상
        	this.btnExcept = this.gfnFormButtonAdd("Except", "fnExcept");				//안분제외
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SELFACNT = this.divSearch.form.ccfCD_SELFACNT;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.crdoYN_VATAPPR = this.divSearch.form.crdoYN_VATAPPR;
        	this.ccboTY_VATPROOF = this.divSearch.form.ccboTY_VATPROOF;
        	this.ccboTY_VATBGJE = this.divSearch.form.ccboTY_VATBGJE;
        	this.ccboTY_VENDOR = this.divSearch.form.ccboTY_VENDOR;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.ctclYR_MAGAM = this.divSearch.form.ctclYR_MAGAM;
        	this.ccboNO_TAX = this.divSearch.form.ccboNO_TAX;
        	this.ctxtDT_START = this.divSearch.form.ctxtDT_START;
        	this.ctxtDT_END = this.divSearch.form.ctxtDT_END;
        	this.cchkCK_OMIT = this.divSearch.form.cchkCK_OMIT;
        	this.sta05 = this.divSearch.form.sta05;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_BUYVATCOMP");

         	this.gfnGridColumnColor(this.dxGrid, "TY_VATBGJE", "BACK_ReadOnly", "[TY_VATPROOF]='AD' OR ([TY_VATPROOF]<>'AA' AND [TY_VATPROOF]<>'AC' AND [TY_VATPROOF]<>'RJ' AND [TY_VATPROOF]<>'RK' AND [TY_VATPROOF]<>'RL')");
        	this.gfnGridColumnColor(this.dxGrid, "TY_VATPROOF", "BACK_ReadOnly", "[TY_VATPROOF]<>'AA' AND [TY_VATPROOF]<>'AC' AND [TY_VATPROOF]<>'RJ' AND [TY_VATPROOF]<>'RK' AND [TY_VATPROOF]<>'RL'");
         	this.gfnGridColumnColor(this.dxGrid, "", "BACK_ReadOnly", "[CD_VENDOR]='Z' OR [CK_OMIT]='Y'", true);
        	this.gfnGridColumnColor(this.dxGrid, "", "BACK_Frozen", "[CD_VENDOR]='ZZ'", true);
         	this.gfnGridColumnColor(this.dxGrid, "", "BACK_Sum", "[CD_VENDOR]='ZZZ'", true);

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_Celldblclick, this);
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	this.ccfCD_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";


        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("DT_START", "string");
        	this.dsSelect.addColumn("DT_END", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("YN_VATAPPR", "string");
        	this.dsSelect.addColumn("TY_VATPROOF", "string");
        	this.dsSelect.addColumn("TY_VATBGJE", "string");
        	this.dsSelect.addColumn("YM_FR", "string");
        	this.dsSelect.addColumn("YM_TO", "string");
        	this.dsSelect.addColumn("CK_OMIT", "string");
        	this.dsSelect.addColumn("TY_SALEBUY", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_VAT", "string");
        	this.dsUpdate.addColumn("TY_VATPROOF", "string");
        	this.dsUpdate.addColumn("TY_VATBGJE", "string");

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("PARAM", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
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

        	var ckOmit = "";
        	if (this.dsSearch.getColumn(0, "CK_OMIT") == "Y")
        		chkOmit = "Y";
        	else if (this.dsSearch.getColumn(0, "YN_VATAPPR") == "")
        		chkOmit = "N";

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_SELFACNT"));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "DT_START", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_START"), "-", ""));
        	this.dsSelect.setColumn(0, "DT_END", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_END"), "-", ""));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "YN_VATAPPR", this.dsSearch.getColumn(0, "YN_VATAPPR"));
        	this.dsSelect.setColumn(0, "TY_VATPROOF", this.dsSearch.getColumn(0, "TY_VATPROOF"));
        	this.dsSelect.setColumn(0, "TY_VATBGJE", this.dsSearch.getColumn(0, "TY_VATBGJE"));
        	this.dsSelect.setColumn(0, "YM_FR", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_START"), "-", "").substr(0,6));
        	this.dsSelect.setColumn(0, "YM_TO", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_END"), "-", "").substr(0,6));
        	this.dsSelect.setColumn(0, "CK_OMIT", chkOmit);
        	this.dsSelect.setColumn(0, "TY_SALEBUY", "I");

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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_VAT", this.dsList.getColumn(i, "NO_VAT"));
        				this.dsUpdate.setColumn(nrow, "TY_VATPROOF", this.dsList.getColumn(i, "TY_VATPROOF"));
        				this.dsUpdate.setColumn(nrow, "TY_VATBGJE", this.dsList.getColumn(i, "TY_VATBGJE"));
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SELFACNT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SELFACNT.setFocus();
        		}
        		this.gfnAlert("세무단위가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_MAGAM"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYR_MAGAM.form.TextBox.setFocus();
        		}
        		this.gfnAlert("회계년도이 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	else if (this.dsSearch.getColumn(0, "NO_TAX") == "0") {
        		this.fnVaidateCallback = function() {
        			this.ccboNO_TAX.setFocus();
        		}
        		this.gfnAlert("회기가 선택되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	else if (this.dsSearch.getColumn(0, "TY_VENDOR") != "A" && this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_VENDOR.setFocus();
        		}
        		this.gfnAlert("거래처정보가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	else if (this.dsSearch.getColumn(0, "CK_OMIT") == "Y") {
        		var mm = this.dsSearch.getColumn(0, "DT_TO").substr(4,2);
        		if (mm != "06" && mm != "12") {
        			this.gfnAlert("누락여부를 조회 하실려면 확정신고 기간일동만 가능합니다.");
        			return false;
        		}
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

        		if (this.dsList.rowcount > 0) {
        			if (this.dsList.getColumn(this.dsList.rowposition, "NO_VAT") == "" || this.gfnGridIsRow(this.dxGrid))
        				this.btnQueryVat.set_enable(false);
        			else
        				this.btnQueryVat.set_enable(true);

        			if (this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP") == "" || this.gfnGridIsRow(this.dxGrid))
        				this.btnSlipSelect.set_enable(false);
        			else
        				this.btnSlipSelect.set_enable(true);
        		}
        		else {
        			this.btnQueryVat.set_enable(false);
        			this.btnSlipSelect.set_enable(false);
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo") {
        		this.fnSetCombo();
        	}
        	else if (svcID == "grdCombo") {
        		var expr = "expr:";
        		for (var i=0; i<this.dsTY_VATPROOF.rowcount-1; i++) {
        			if (i == this.dsTY_VATPROOF.rowcount-2) {
        				expr += "TY_VATPROOF=='"+this.dsTY_VATPROOF.getColumn(i, "CD_CODE")+"'?'dsGrdCombo"+i+"':'dsGrdCombo"+(i+1)+"'";
        			}
        			else {
        				expr += "TY_VATPROOF=='"+this.dsTY_VATPROOF.getColumn(i, "CD_CODE")+"'?'dsGrdCombo"+i+"':";
        			}
        		}

        		var colTY_VATBGJE = this.dxGrid.getBindCellIndex("body", "TY_VATBGJE");
        		this.dxGrid.setCellProperty("body", colTY_VATBGJE, "combocodecol", "CD_CODE");
        		this.dxGrid.setCellProperty("body", colTY_VATBGJE, "combodatacol", "DS_CODE");
        		this.dxGrid.setCellProperty("body", colTY_VATBGJE, "combodataset", expr);

        		var nrow = this.dsTY_VATPROOF.insertRow(0);
        		this.dsTY_VATPROOF.setColumn(nrow, "CD_CODE", "");
        		this.dsTY_VATPROOF.setColumn(nrow, "DS_CODE", "전체");
        		//this.dsSearch.setColumn(0, "TY_VATPROOF", "");
        		this.ccboTY_VATPROOF.set_index(0);
        	}
        }

        this.fnSetCombo = function() {
        	for (var i=0; i<this.dsTY_VATPROOF.rowcount; i++) {
        		var ds = new Dataset();
        		this.addChild("dsGrdCombo"+i, ds);

        		this.dsCombo.clearData();
        		this.dsCombo.addRow();
        		this.dsCombo.setColumn(0, "PARAM", this.dsTY_VATPROOF.getColumn(i, "CD_CODE"));

        		var strSvcId    = "combo2";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "combo2=dsCombo";
        		var outData     = "dsGrdCombo"+i+"=combo20";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		if (i==this.dsTY_VATPROOF.rowcount-1) {
        			strSvcId    = "grdCombo";
        		}
        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SELFACNT") {
        		dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVCD_DEPT_ACNT);
        	}
        	else if (id == "ccfCD_DEPT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_SELFACNT"));
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", this.UserInfo.LEVCD_DEPT_ACNT);
        	}
        	else if (id == "ccfCD_VENDOR") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR", this.dsSearch.getColumn(0, "TY_VENDOR"));
        		dsUserParam.setColumn(nrow, "CD_DEPT_REF", this.UserInfo.LEVCD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "ORIGENTTAX", "");
        	}

        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        			if (this.dsList.getColumn(this.dsList.rowposition, "NO_VAT") == "")
        				this.btnQueryVat.set_enable(false);
        			else
        				this.btnQueryVat.set_enable(true);

        			if (this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP") == "")
        				this.btnSlipSelect.set_enable(false);
        			else
        				this.btnSlipSelect.set_enable(true);
        		obj.oldrow = -1;
        	}
        };

        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);
        	if (colnm != "TY_VATPROOF" && colnm != "TY_VATBGJE") return false;

        	var vatProof = this.dsList.getColumn(row, "TY_VATPROOF");
        	if (vatProof == "AA" || vatProof == "AC" || vatProof == "RJ" || vatProof == "RK" || vatProof == "RL") {
        		return true;
        	}
        	else if (vatProof == "AD") {
        		if (colnm == "TY_VATPROOF")
        			return true;
        		else if (colnm == "TY_VATBGJE")
        			return false;
        	}
        	else {
        		return false;
        	}

        	if (this.dsList.getColumn(row, "CD_VENDOR") == "Z"
        		|| this.dsList.getColumn(row, "CD_VENDOR") == "ZZ"
        		|| this.dsList.getColumn(row, "CD_VENDOR") == "ZZZ") {
        		return false;
        	}
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        	if (e.columnid == "TY_VATPROOF") {
        // 		if (e.newvalue == "AA") {
        // 			var targetColIdx = this.dxGrid.getBindCellIndex( "body", "TY_VATBGJE" );
        // 			if( targetColIdx != -1){
        // 				this.dxGrid.setCellProperty("body", targetColIdx, "displaytype", "combotext");
        // 				this.dxGrid.setCellProperty("body", targetColIdx, "combodataset", 'dsTY_VATBGJE');
        // 				this.dxGrid.setCellProperty("body", targetColIdx, "combocodecol", 'CD_CODE');
        // 				this.dxGrid.setCellProperty("body", targetColIdx, "combodatacol", 'DS_CODE');
        // 			}
        // 		}
        	}
        }

        this.fnGrid_Celldblclick = function(obj,e)
        {
        	this.fnQueryVat();
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if (e.columnid == "TY_VENDOR") {
        			this.dsSearch.setColumn(0, "CD_VENDOR", "");
        			this.dsSearch.setColumn(0, "DS_VENDOR", "");

        			if (e.newvalue == "A") {
        				this.sta05.set_textDecoration("");
        				this.ccfCD_VENDOR.set_enable(false);
        			}
        			else {
        				this.sta05.set_textDecoration("underline");
        				this.ccfCD_VENDOR.set_enable(true);
        			}
        		}
        		else if (e.columnid == "NO_TAX") {
        			if (e.newvalue != "0" && this.dsSearch.getColumn(0, "YR_MAGAM").length < 4) {
        				this.ctclYR_MAGAM.setFocus();
        				return;
        			}
        			else {
        				var dt_yr = this.dsSearch.getColumn(0, "YR_MAGAM");
        				if (dt_yr.length < 4) return;
        				switch (e.newvalue) {
        					case "1":
        						this.dsSearch.setColumn(0, "DT_START", dt_yr + "-01-01");
        						this.dsSearch.setColumn(0, "DT_END", dt_yr + "-03-31");
        						break;
        					case "2":
        						this.dsSearch.setColumn(0, "DT_START", dt_yr + "-04-01");
        						this.dsSearch.setColumn(0, "DT_END", dt_yr + "-06-30");
        						break;
        					case "3":
        						this.dsSearch.setColumn(0, "DT_START", dt_yr + "-07-01");
        						this.dsSearch.setColumn(0, "DT_END", dt_yr + "-09-30");
        						break;
        					case "4":
        						this.dsSearch.setColumn(0, "DT_START", dt_yr + "-10-01");
        						this.dsSearch.setColumn(0, "DT_END", dt_yr + "-12-31");
        						break;
        					default:
        						this.dsSearch.setColumn(0, "DT_START", "");
        						this.dsSearch.setColumn(0, "DT_END", "");
        						break;
        				}
        			}
        		}
        	}
        };

        this.fnQueryVat = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        // 	var param = {};
        // 	param.CD_DEPT_ACNT = this.dsSearch.getColumn(0, "CD_DEPT");
        // 	param.DS_DEPT_ACNT = this.dsSearch.getColumn(0, "DS_DEPT");
        // 	param.CD_CORP_REC = this.dsSearch.getColumn(0, "CD_CORP");
        // 	param.DS_CORP_REC = this.dsSearch.getColumn(0, "DS_CORP");
        // 	param.DT_MAGAM = this.dsSearch.getColumn(0, "YM_MAGAM");
        // 	param.DT_MAGAM2 = this.dsSearch.getColumn(0, "YM_MAGAM2");
        //
        // 	this.gfnFormOpen("DHF", "DHF_PL2", "", param);
        };

        this.fnSlipSelect = function(obj,e) {
        }

        this.fnInclude = function(obj,e) {
        }

        this.fnExcept = function(obj,e) {
        }

        this.fnCombo = function() {
        	this.dsCombo.clearData();
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "PARAM", "매입안분세금계산서");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_VATPROOF=combo0";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.crdoYN_VATAPPR.addEventHandler("onitemchanged",this.divSearch_rdoTY_SEARCH_onitemchanged,this);
            this.divSearch.form.ccboTY_VATPROOF.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ccboTY_VATBGJE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ccboTY_VENDOR.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ccboNO_TAX.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_BUYVATCOMP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
