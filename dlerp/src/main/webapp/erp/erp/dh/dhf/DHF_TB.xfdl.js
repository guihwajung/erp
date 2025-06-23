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
                this._setFormPosition(1315,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHFPR_TB_SELECT</Col></Row><Row><Col id=\"TARGET\">dept</Col><Col id=\"SP\">DHXPR_BALANCE_ACNTUNIT_CODEFIND</Col></Row><Row><Col id=\"SP\">DHXPR_ACNTUNIT</Col><Col id=\"TARGET\">selectYmMagam</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT </Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CORE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPANYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PRINT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSum", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_DR_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DR_MONTH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CR_MONTH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CR_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DR_DANGSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CR_DANGSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DR_IWOL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CR_IWOL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_CORE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">상세</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">요약</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYmMagam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PRINT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ORG","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_DEPT_ORG:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","276","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사용구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_CORE","staCD_SYSTEM:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_CORE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM00","ccboYN_CORE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_MAGAM","staCD_SYSTEM00:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoCD_CURR","ctclYM_MAGAM:25","10","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divSearch_form_rdoCD_CURR_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoCD_CURR_innerdataset", obj);
            divSearch_form_rdoCD_CURR_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">KRW</Col><Col id=\"datacolumn\">KRW</Col></Row><Row><Col id=\"codecolumn\">SGD</Col><Col id=\"datacolumn\">SGD</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoCD_CURR_innerdataset);
            obj.set_text("KRW");
            obj.set_value("KRW");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM00_00","1172","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("출력구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_PRINT","1259","10","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_PRINT");
            obj.set_text("한글");
            obj.set_value("KOR");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","10","divSearch:10",null,null,"-10","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"15","65",null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN06","816","objGrid:29","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN00","20","objGrid:29","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DR","26","objGrid:34","108","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN1","139","objGrid:29","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DR_SUM","145","objGrid:34","108","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN02","258","objGrid:29","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CR_MONTH","statxtNO_JUMIN06:-114","objGrid:34","108","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CR","statxtNO_JUMIN06:236","objGrid:5","120","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("대변잔액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN05","txtAM_CR_MONTH:242","objGrid:29","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CR","txtAM_CR_MONTH:249","objGrid:34","108","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN06_00","txtAM_CR_MONTH:5","objGrid:29","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DR_DANGSUM","265","objGrid:34","108","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CR_DANGSUM","txtAM_CR_MONTH:11","objGrid:34","108","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DR_MONTH","txtAM_DR_DANGSUM:4","objGrid:5","120","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("차변당월");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DR_DANGSUM","txtAM_DR_SUM:5","objGrid:5","120","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("차변당기합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CR_MONTH","staAM_DR_MONTH:319","objGrid:5","120","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("대변당월");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DR","20","objGrid:5","120","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("차변잔액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN05_00","txtAM_CR_DANGSUM:5","objGrid:29","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DR_SUM","staAM_DR:-1","objGrid:5","120","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("차변총합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CR_DANGSUM","staAM_CR_MONTH:-1","objGrid:5","120","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("대변당기합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CR_SUM","staAM_CR_DANGSUM:-1","objGrid:5","120","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("대변총합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CR_SUM","staAM_CR_DANGSUM:6","objGrid:34","108","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN02_00","377","objGrid:29","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DR_MONTH","384","objGrid:34","108","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DR_IWOL","496","objGrid:5","120","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("차변전기합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN02_00_00","496","objGrid:29","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DR_IWOL","504","objGrid:34","108","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CR_IWOL","staAM_DR_DANGSUM:319","objGrid:5","120","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("대변전기합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN06_01","staAM_CR_IWOL:-120","objGrid:29","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CR_IWOL","staAM_CR_IWOL:-115","objGrid:34","108","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboYN_CORE","value","dsSearch","YN_CORE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclYM_MAGAM.form.TextBox","value","dsSearch","YM_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtAM_DR_SUM","value","dsSum","AM_DR_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtAM_DR","value","dsSum","AM_DR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtAM_DR_MONTH","value","dsSum","AM_DR_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtAM_CR_MONTH","value","dsSum","AM_CR_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtAM_CR","value","dsSum","AM_CR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtAM_CR_SUM","value","dsSum","AM_CR_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.rdoCD_CURR","value","dsSearch","CD_CURR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.txtAM_DR_DANGSUM","value","dsSum","AM_DR_DANGSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.txtAM_CR_DANGSUM","value","dsSum","AM_CR_DANGSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.txtAM_DR_IWOL","value","dsSum","AM_DR_IWOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.txtAM_CR_IWOL","value","dsSum","AM_CR_IWOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.ccboTY_PRINT","value","dsSearch","TY_PRINT");
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
        this.registerScript("DHF_TB.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "YN_CORE", "N");
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	this.dsSearch.setColumn(0, "CD_DEPT", this.AuthClient.LEVCD_DEPT_UPPER);
        	this.ccfCD_DEPT.form.fnCodeFindLoad();

        	var sYmMagam = this.AuthClient.YM_MAGAM_MONTH1;
        	this.dsSearch.setColumn(0, "YM_MAGAM", sYmMagam);

        	this.dsSearch.setColumn(0, "CD_CURR", "KRW");
        	this.dsSearch.setColumn(0, "TY_PRINT", "KOR");

        	//this.fnsetGridCellProperty();
        	//this.fnDept();
        	//this.fnGetYmMagam();
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
        	this.btnAccountSelect   = this.gfnFormButtonAdd("AccountSelect", "fnAccountSelect");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ccboYN_CORE = this.divSearch.form.ccboYN_CORE;
        	this.ctclYM_MAGAM = this.divSearch.form.ctclYM_MAGAM;
        	this.rdoCD_CURR = this.divSearch.form.rdoCD_CURR;

        	this.txtAM_DR_SUM = this.divData.form.txtAM_DR_SUM;
        	this.txtAM_DR = this.divData.form.txtAM_DR;
        	this.txtAM_DR_MONTH = this.divData.form.txtAM_DR_MONTH;

        	this.txtAM_CR_SUM = this.divData.form.txtAM_CR_SUM;
        	this.txtAM_CR = this.divData.form.txtAM_CR;
        	this.txtAM_CR_MONTH = this.divData.form.txtAM_CR_MONTH;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHF_TB");
        	this.dxGrid.sort = "false";

        	this.fnsetGridCssCellProperty();

        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_Celldblclick, this);

        	this.ccfCD_DEPT.CodeFindName = "DHX_CFACNTUNIT";	// DHX_CFBALANCE_ACNTUNIT

        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        this.fnsetGridCssCellProperty = function() {

        	//this.gfnGridColumnColor(this.dxGrid, "DS_PRINT", "BACK_SoKe", "[TY_ATTR]<>'H' AND [TY_ATTR]<>'B' AND [TY_ATTR]<>'T'", true);

        	/*
        		AM_DRBALANCE	차변	잔액
        		AM_DRSUM		차변	총합계
        		AM_DRDANGSUM    차변	당기합계
        		AM_DRDANGWOL	차변	당월
        		AM_DRIWOL		차변	전기누계

        		AM_CRIWOL		대변	전기누계
        		AM_CRDANGWOL	대변	당월
        		AM_CRDANGSUM	대변	당기합계
        		AM_CRSUM		대변	총합계
        		AM_CRBALANCE	대변	잔액
        	*/
        	var nCellIdxAM_DRBALANCE = this.dxGrid.getBindCellIndex("body", "AM_DRBALANCE");
        	var nCellIdxAM_DRSUM = this.dxGrid.getBindCellIndex("body", "AM_DRSUM");
        	var nCellIdxAM_DRDANGWOL = this.dxGrid.getBindCellIndex("body", "AM_DRDANGWOL");
        	var nCellIdxAM_DRIWOL = this.dxGrid.getBindCellIndex("body", "AM_DRIWOL");

        	var nCellIdxAM_CRIWOL = this.dxGrid.getBindCellIndex("body", "AM_CRIWOL");
        	var nCellIdxAM_CRDANGWOL = this.dxGrid.getBindCellIndex("body", "AM_CRDANGWOL");
        	var nCellIdxAM_CRSUM = this.dxGrid.getBindCellIndex("body", "AM_CRSUM");
        	var nCellIdxAM_CRBALANCE = this.dxGrid.getBindCellIndex("body", "AM_CRBALANCE");

        	var nCellIdxAM_DRDANGSUM = this.dxGrid.getBindCellIndex("body", "AM_DRDANGSUM");
            var nCellIdxAM_CRDANGSUM = this.dxGrid.getBindCellIndex("body", "AM_CRDANGSUM");

        	var sGetProperty = this.dxGrid.getCellProperty( "body", nCellIdxAM_DRBALANCE, "cssclass" );

        	var sSetPropertyAM_DRBALANCE = sGetProperty.replace(": '')", ": AM_DRBALANCE < 0 ? 'Red' : '')");
        	var sSetPropertyAM_DRSUM = sGetProperty.replace(": '')", ": AM_DRSUM < 0 ? 'Red' : '')");
        	var sSetPropertyAM_DRDANGWOL = sGetProperty.replace(": '')", ": AM_DRDANGWOL < 0 ? 'Red' : '')");
        	var sSetPropertyAM_DRIWOL = sGetProperty.replace(": '')", ": AM_DRIWOL < 0 ? 'Red' : '')");
        	var sSetPropertyAM_CRIWOL = sGetProperty.replace(": '')", ": AM_CRIWOL < 0 ? 'Red' : '')");
        	var sSetPropertyAM_CRDANGWOL = sGetProperty.replace(": '')", ": AM_CRDANGWOL < 0 ? 'Red' : '')");
        	var sSetPropertyAM_CRSUM = sGetProperty.replace(": '')", ": AM_CRSUM < 0 ? 'Red' : '')");
        	var sSetPropertyAM_CRBALANCE = sGetProperty.replace(": '')", ": AM_CRBALANCE < 0 ? 'Red' : '')");

        	var sSetPropertyAM_DRDANGSUM = sGetProperty.replace(": '')", ": AM_DRDANGSUM < 0 ? 'Red' : '')");
        	var sSetPropertyAM_CRDANGSUM = sGetProperty.replace(": '')", ": AM_CRDANGSUM < 0 ? 'Red' : '')");

        	this.dxGrid.setCellProperty( "body", nCellIdxAM_DRBALANCE , "cssclass" , sSetPropertyAM_DRBALANCE );
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_DRSUM , "cssclass" , sSetPropertyAM_DRSUM );
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_DRDANGWOL , "cssclass" , sSetPropertyAM_DRDANGWOL );
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_DRIWOL , "cssclass" , sSetPropertyAM_DRIWOL );
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_CRIWOL , "cssclass" , sSetPropertyAM_CRIWOL );
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_CRDANGWOL , "cssclass" , sSetPropertyAM_CRDANGWOL );
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_CRSUM , "cssclass" , sSetPropertyAM_CRSUM );
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_CRBALANCE , "cssclass" , sSetPropertyAM_CRBALANCE );

        	this.dxGrid.setCellProperty( "body", nCellIdxAM_DRDANGSUM , "cssclass" , sSetPropertyAM_DRDANGSUM );
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_CRDANGSUM , "cssclass" , sSetPropertyAM_CRDANGSUM );

        	var nCellIdxAM_DRBALANCE_LOCAL = this.dxGrid.getBindCellIndex("body", "AM_DRBALANCE_LOCAL");
        	var nCellIdxAM_DRSUM_LOCAL = this.dxGrid.getBindCellIndex("body", "AM_DRSUM_LOCAL");
        	var nCellIdxAM_DRDANGWOL_LOCAL = this.dxGrid.getBindCellIndex("body", "AM_DRDANGWOL_LOCAL");
        	var nCellIdxAM_DRIWOL_LOCAL = this.dxGrid.getBindCellIndex("body", "AM_DRIWOL_LOCAL");
        	var nCellIdxAM_CRIWOL_LOCAL = this.dxGrid.getBindCellIndex("body", "AM_CRIWOL_LOCAL");
        	var nCellIdxAM_CRDANGWOL_LOCAL = this.dxGrid.getBindCellIndex("body", "AM_CRDANGWOL_LOCAL");
        	var nCellIdxAM_CRSUM_LOCAL = this.dxGrid.getBindCellIndex("body", "AM_CRSUM_LOCAL");
        	var nCellIdxAM_CRBALANCE_LOCAL = this.dxGrid.getBindCellIndex("body", "AM_CRBALANCE_LOCAL");

        	var nCellIdxAM_DRDANGSUM_LOCAL = this.dxGrid.getBindCellIndex("body", "AM_DRDANGSUM_LOCAL");
        	var nCellIdxAM_CRDANGSUM_LOCAL = this.dxGrid.getBindCellIndex("body", "AM_CRDANGSUM_LOCAL");

        	var sSetPropertyAM_DRBALANCE_LOCAL = sGetProperty.replace(": '')", ": AM_DRBALANCE_LOCAL < 0 ? 'Red' : '')");
        	var sSetPropertyAM_DRSUM_LOCAL = sGetProperty.replace(": '')", ": AM_DRSUM_LOCAL < 0 ? 'Red' : '')");
        	var sSetPropertyAM_DRDANGWOL_LOCAL = sGetProperty.replace(": '')", ": AM_DRDANGWOL_LOCAL < 0 ? 'Red' : '')");
        	var sSetPropertyAM_DRIWOL_LOCAL = sGetProperty.replace(": '')", ": AM_DRIWOL_LOCAL < 0 ? 'Red' : '')");
        	var sSetPropertyAM_CRIWOL_LOCAL = sGetProperty.replace(": '')", ": AM_CRIWOL_LOCAL < 0 ? 'Red' : '')");
        	var sSetPropertyAM_CRDANGWOL_LOCAL = sGetProperty.replace(": '')", ": AM_CRDANGWOL_LOCAL < 0 ? 'Red' : '')");
        	var sSetPropertyAM_CRSUM_LOCAL = sGetProperty.replace(": '')", ": AM_CRSUM_LOCAL < 0 ? 'Red' : '')");
        	var sSetPropertyAM_CRBALANCE_LOCAL = sGetProperty.replace(": '')", ": AM_CRBALANCE_LOCAL < 0 ? 'Red' : '')");

        	var sSetPropertyAM_DRDANGSUM_LOCAL = sGetProperty.replace(": '')", ": AM_DRDANGSUM_LOCAL < 0 ? 'Red' : '')");
        	var sSetPropertyAM_CRDANGSUM_LOCAL = sGetProperty.replace(": '')", ": AM_CRDANGSUM_LOCAL < 0 ? 'Red' : '')");

        	this.dxGrid.setCellProperty( "body", nCellIdxAM_DRBALANCE_LOCAL , "cssclass" , sSetPropertyAM_DRBALANCE_LOCAL );
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_DRSUM_LOCAL , "cssclass" , sSetPropertyAM_DRSUM_LOCAL );
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_DRDANGWOL_LOCAL , "cssclass" , sSetPropertyAM_DRDANGWOL_LOCAL );
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_DRIWOL_LOCAL , "cssclass" , sSetPropertyAM_DRIWOL_LOCAL );
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_CRIWOL_LOCAL , "cssclass" , sSetPropertyAM_CRIWOL_LOCAL );
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_CRDANGWOL_LOCAL , "cssclass" , sSetPropertyAM_CRDANGWOL_LOCAL );
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_CRSUM_LOCAL , "cssclass" , sSetPropertyAM_CRSUM_LOCAL );
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_CRBALANCE_LOCAL , "cssclass" , sSetPropertyAM_CRBALANCE_LOCAL );

        	this.dxGrid.setCellProperty( "body", nCellIdxAM_DRDANGSUM_LOCAL , "cssclass" , sSetPropertyAM_DRDANGSUM_LOCAL );
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_CRDANGSUM_LOCAL , "cssclass" , sSetPropertyAM_CRDANGSUM_LOCAL );

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("YN_CORE", "string");
        	this.dsSelect.addColumn("YM_MAGAM", "string");
        	this.dsSelect.addColumn("TY_PRINT", "string");

        	this.dsSelectDept = new Dataset();
        	this.dsSelectDept.addColumn("TY_GUBUN", "string");
        	this.dsSelectDept.addColumn("CN_ROW", "string");
        	this.dsSelectDept.addColumn("LEVEL", "string");
        	this.dsSelectDept.addColumn("ACNTUNIT", "string");
        	this.dsSelectDept.addColumn("VALUE", "string");
        	this.dsSelectDept.addColumn("MIN_VALUE", "string");
        	this.dsSelectDept.addColumn("CD_CORP", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");

        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("DS_CORP", "string");
        	this.dsReportParam.addColumn("YM_MAGAM", "string");
        	this.dsReportParam.addColumn("AM_DR_SUM", "BIGDECIMAL");
        	this.dsReportParam.addColumn("AM_DR", "BIGDECIMAL");
        	this.dsReportParam.addColumn("AM_DR_MONTH", "BIGDECIMAL");
        	this.dsReportParam.addColumn("AM_CR_MONTH", "BIGDECIMAL");
        	this.dsReportParam.addColumn("AM_CR", "BIGDECIMAL");
        	this.dsReportParam.addColumn("AM_CR_SUM", "BIGDECIMAL");

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

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "YN_CORE", this.dsSearch.getColumn(0, "YN_CORE"));
        	this.dsSelect.setColumn(0, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM"));
        	this.dsSelect.setColumn(0, "TY_PRINT", this.dsSearch.getColumn(0, "TY_PRINT"));

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


        	this.dsReportParam.clearData();
        	this.dsReportParam.addRow();

        	this.dsReportParam.setColumn(0, "DS_CORP", "법인명 : " + this.ccfCD_CORP.form.DSTextBox.value);

        	var sYmWork = this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_MAGAM")+"01");
        	this.dsReportParam.setColumn(0, "YM_MAGAM", sYmWork.substr(0,4) + "년 " + sYmWork.substr(4,2)+"월 " + sYmWork.substr(6,2) +"일 현재" );
        	this.dsReportParam.setColumn(0, "AM_DR_SUM", this.gfnNvl(this.txtAM_DR_SUM.value,0));
        	this.dsReportParam.setColumn(0, "AM_DR", this.gfnNvl(this.txtAM_DR.value,0));
        	this.dsReportParam.setColumn(0, "AM_DR_MONTH", this.gfnNvl(this.txtAM_DR_MONTH.value,0));
        	this.dsReportParam.setColumn(0, "AM_CR_MONTH", this.gfnNvl(this.txtAM_CR_MONTH.value,0));
        	this.dsReportParam.setColumn(0, "AM_CR", this.gfnNvl(this.txtAM_CR.value,0));
        	this.dsReportParam.setColumn(0, "AM_CR_SUM", this.gfnNvl(this.txtAM_CR_SUM.value,0));

        	var reportpath  = "/dh/dhf/DHF_TB_RPT.ozr";
        	var inProc		= "_dsProc";
        	var inParam 	= "params=dsReportParam";
        	var inData   	= "select=dsSelect";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);

        	return false;

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("귀속부서가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        		//validate = false;
        	}

        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_MAGAM"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_MAGAM.form.TextBox.setFocus();
        		}
        		this.gfnAlert("회계년월이 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        		//validate = false;
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

        		var col = (this.dsSearch.getColumn(0, "CD_CURR") == "KRW") ? "" : "_LOCAL";
        		trace("조회 콜백 ->" + col);
        		var amDrSum = 0, amDr = 0, amDrMonth = 0, amDrDangSum = 0, amDrIwol = 0 ;
        		var amCrSum = 0, amCr = 0, amCrMonth = 0, amCrDangSum = 0, amCrIwol = 0 ;
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, this.ucFlag) != "#") {
        				var tyAttr = this.dsList.getColumn(i, "TY_ATTR");
        				if (tyAttr == "A" || tyAttr == "C"  || tyAttr == "P" || tyAttr == "L" ){
        				//if (tyAttr != "H" && tyAttr != "B" && tyAttr != "T") {
        					amDrSum += nexacro.toNumber(this.dsList.getColumn(i, "AM_DRSUM" + col),0);
        					amDr += nexacro.toNumber(this.dsList.getColumn(i, "AM_DRBALANCE" + col),0);
        					amDrMonth += nexacro.toNumber(this.dsList.getColumn(i, "AM_DRDANGWOL" + col),0);
        					amDrDangSum += nexacro.toNumber(this.dsList.getColumn(i, "AM_DRDANGSUM" + col),0);
        					amDrIwol += nexacro.toNumber(this.dsList.getColumn(i,"AM_DRIWOL"+col),0);

        					amCrSum += nexacro.toNumber(this.dsList.getColumn(i, "AM_CRSUM" + col),0);
        					amCr += nexacro.toNumber(this.dsList.getColumn(i, "AM_CRBALANCE" + col),0);
        					amCrMonth += nexacro.toNumber(this.dsList.getColumn(i, "AM_CRDANGWOL" + col),0);
        					amCrDangSum += nexacro.toNumber(this.dsList.getColumn(i, "AM_CRDANGSUM" + col),0);
        					amCrIwol += nexacro.toNumber(this.dsList.getColumn(i,"AM_CRIWOL"+col),0);
        				}
        			}
        		}

        		//차변
        		this.dsSum.setColumn(0, "AM_DR_SUM", amDrSum);
        		this.dsSum.setColumn(0, "AM_DR", amDr);
        		this.dsSum.setColumn(0, "AM_DR_MONTH", amDrMonth);
        		this.dsSum.setColumn(0, "AM_DR_DANGSUM", amDrDangSum);
        		this.dsSum.setColumn(0, "AM_DR_DANGSUM", amDrDangSum);
        		this.dsSum.setColumn(0, "AM_DR_IWOL", amDrIwol);
        		//대변
        		this.dsSum.setColumn(0, "AM_CR_SUM", amCrSum);
        		this.dsSum.setColumn(0, "AM_CR", amCr);
        		this.dsSum.setColumn(0, "AM_CR_MONTH", amCrMonth);
        		this.dsSum.setColumn(0, "AM_CR_DANGSUM", amCrDangSum);
        		this.dsSum.setColumn(0, "AM_CR_IWOL", amCrIwol);

        	}
        	else if (svcID == "dept") {
        		this.dsSearch.setColumn(0, "CD_DEPT", this.dsDept.getColumn(0, "CD_DEPT_ACNT"));
        		this.dsSearch.setColumn(0, "DS_DEPT", this.dsDept.getColumn(0, "DS_DEPT_ACNT"));
        		this.dsSearch.setColumn(0, "YM_MAGAM", this.dsDept.getColumn(0, "YM_MAGAM_BS1"));
        		this.ccfCD_DEPT.form.fnCodeFindLoad();
        	}
        	else if (svcID == "selectYmMagam") {
        		var sYmMagam = this.gfnGetDate().substring(0, 6);
        		if(this.dsYmMagam.rowcount > 0){
        			sYmMagam = this.dsYmMagam.getColumn(0, "YM_MAGAM");
        		}
        		this.dsSearch.setColumn(0, "YM_MAGAM", sYmMagam);
        	}else if (svcID == "combo") {
        		if (errorCode == 0) {
        			var nrow = this.dsTY_PRINT.addRow();
        			this.dsTY_PRINT.setColumn(nrow, "CD_CODE", "");
        			this.dsTY_PRINT.setColumn(nrow, "DS_CODE", "전체");
        			this.divSearch.form.ccboTY_PRINT.set_index(0);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	var idSabun = this.AuthClient.ID_USER;
        	var grSerch = this.FormInfo.GR_SEARCH;

        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	if (id == "ccfCD_DEPT") {
        		if(this.gfnIsNull(sCdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");			//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");			//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);		//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");			//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");			//현장/본사여부
        		dsUserParam.setColumn(nrow, "ID_USER"	    , idSabun);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"	    , grSerch);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        		//dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		//dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		//dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        //
        // 		if (this.FormInfo.ID_GROUP == "M") {
        // 			this.ccfCD_DEPT.CodeFindName = "DHX_CFACNTUNIT_CLOSING";
        // 			dsUserParam.setColumn(nrow, "LEVEL", this.UserInfo.LEVLV_DEPT_ACNT);
        // 			dsUserParam.setColumn(nrow, "ACNTUNIT", this.UserInfo.LEVCD_DEPT_ACNT);
        // 			dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        // 			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 		}
        // 		else {
        // 			this.ccfCD_DEPT.CodeFindName = "DHX_CFBALANCE_ACNTUNIT";
        // 			dsUserParam.setColumn(nrow, "LEVEL", this.UserInfo.LEVLV_DEPT_ACNT);
        // 			dsUserParam.setColumn(nrow, "ACNTUNIT", this.UserInfo.LEVCD_DEPT_ACNT);
        // 			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 		}
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function ( id , codefindData ){
        	var arr = codefindData;
        	switch(id) {
        		case "ccfCD_CORP":
         			if (arr.length > 0) {
        				//var sCdCorp = arr[0]["CD_CORP"];
        				this.fnGetYmMagam();
        			}
        			this.ccfCD_DEPT.form.fnCodeFindClear();
        			break;
        // 		case "ccfCD_DEPT":
        // 			var arr = codefindData;
        // 			if (arr.length > 0) {
        // 				if (this.FormInfo.ID_GROUP == "M") {
        // 					this.dsSearch.setColumn(0, "YM_MAGAM", arr[0]["YM_MAGAM_MONTH1"]);
        // 				}
        // 				else {
        // 					this.dsSearch.setColumn(0, "YM_MAGAM", arr[0]["YM_MAGAM_BS1"]);
        // 					this.dsSearch.setColumn(0, "DS_COMPANYNAME", arr[0]["DS_CORP"]);
        // 				}
        // 			}
        // 			break;
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_Celldblclick = function(obj,e)
        {
        	this.fnAccountSelect();
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if (e.columnid == "CD_CURR" || e.columnid =="TY_PRINT") {
        			this.fnsetGridCellProperty()
        		}


        		//차변
        		this.dsSum.setColumn(0, "AM_DR_SUM", "");
        		this.dsSum.setColumn(0, "AM_DR", "");
        		this.dsSum.setColumn(0, "AM_DR_MONTH", "");
        		this.dsSum.setColumn(0, "AM_DR_DANGSUM", "");
        		//대변
        		this.dsSum.setColumn(0, "AM_CR_SUM", "");
        		this.dsSum.setColumn(0, "AM_CR", "");
        		this.dsSum.setColumn(0, "AM_CR_MONTH", "");
        		this.dsSum.setColumn(0, "AM_CR_DANGSUM", "");
        	}
        };

        this.fnAccountSelect = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	if(this.dsList.getColumn(this.dsList.rowposition, "TY_COMP") == "" || this.dsList.getColumn(this.dsList.rowposition, "TY_COMP") == "G"){
        		this.gfnAlert("하위계정을 선택하세요.");
        		return;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_MAGAM"))) {
        		this.gfnAlert("회계년월을 입력하세요.");
        	}

        	var param = {};
        	param.CD_DEPT_ACNT = this.dsSearch.getColumn(0, "CD_DEPT");
        	param.DS_DEPT_ACNT = this.dsSearch.getColumn(0, "DS_DEPT");
        	param.CD_CORP_REC = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP_REC = this.dsSearch.getColumn(0, "DS_CORP");
        	param.CD_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "CD_ACNT");
        	param.DS_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "DS_PRINT");

        	param.DT_MAGAM = this.dsSearch.getColumn(0, "YM_MAGAM").substr(0, 4) + "0101";
        	param.DT_MAGAM2 = this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_MAGAM") + "01");
        	param.TY_VENDOR = "";
        	param.CD_VENDOR = "";
        	param.DS_VENDOR = "";

        	this.gfnFormOpen("DHE", "DHE_ACCOUNTSELECT_PW", "", param);
        };

        // 회계년월 가져오기
        this.fnGetYmMagam = function() {
        	return;

        	this.dsSelectYmMagam = new Dataset();
        	this.dsSelectYmMagam.addColumn("TY_GUBUN", "string");
        	this.dsSelectYmMagam.addColumn("CN_ROW", "string");
        	this.dsSelectYmMagam.addColumn("VALUE", "string");
        	this.dsSelectYmMagam.addColumn("MIN_VALUE", "string");
        	this.dsSelectYmMagam.addColumn("YN_SLIPACCEPT", "string");
        	this.dsSelectYmMagam.addColumn("CD_CORP", "string");
        	this.dsSelectYmMagam.addColumn("YN_USE", "string");
        	this.dsSelectYmMagam.addColumn("GR_DEPT_ACNT", "string");
        	this.dsSelectYmMagam.addColumn("ID_USER", "string");
        	this.dsSelectYmMagam.addColumn("GR_SEARCH", "string");
        	this.dsSelectYmMagam.addColumn("CD_DEPT", "string");

        	this.dsSelectYmMagam.clearData();
        	this.dsSelectYmMagam.addRow();
        	this.dsSelectYmMagam.setColumn(0, "TY_GUBUN", "0");
        	this.dsSelectYmMagam.setColumn(0, "CN_ROW", 100);
        	//this.dsSelectYmMagam.setColumn(0, "VALUE", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        	this.dsSelectYmMagam.setColumn(0, "MIN_VALUE", "");
        	this.dsSelectYmMagam.setColumn(0, "YN_SLIPACCEPT", "Y");
        	this.dsSelectYmMagam.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectYmMagam.setColumn(0, "YN_USE", "Y");

        	var strSvcId    = "selectYmMagam";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectYmMagam=dsSelectYmMagam";
        	var outData     = "dsYmMagam=selectYmMagam0";
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

        this.fnDept = function() {
        	this.dsSelectDept.clearData();
        	this.dsSelectDept.addRow();
        	this.dsSelectDept.setColumn(0, "TY_GUBUN", "0");
        	this.dsSelectDept.setColumn(0, "CN_ROW", 100);
        	this.dsSelectDept.setColumn(0, "LEVEL", this.UserInfo.LEVLV_DEPT_ACNT);
        	this.dsSelectDept.setColumn(0, "ACNTUNIT", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        	this.dsSelectDept.setColumn(0, "VALUE", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        	this.dsSelectDept.setColumn(0, "MIN_VALUE", "");
        	this.dsSelectDept.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);

        	var strSvcId    = "dept";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "dept=dsSelectDept";
        	var outData     = "dsDept=dept0";
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

        this.fnsetGridCellProperty = function() {
        	var CD_CURR = this.dsSearch.getColumn(0, "CD_CURR");

        	var nCellIdxAM_DRBALANCE = this.dxGrid.getBindCellIndex("body", "AM_DRBALANCE");
        	var nCellIdxAM_DRSUM = this.dxGrid.getBindCellIndex("body", "AM_DRSUM");
        	var nCellIdxAM_DRDANGWOL = this.dxGrid.getBindCellIndex("body", "AM_DRDANGWOL");
        	var nCellIdxAM_DRIWOL = this.dxGrid.getBindCellIndex("body", "AM_DRIWOL");

        	var nCellIdxAM_CRBALANCE = this.dxGrid.getBindCellIndex("body", "AM_CRBALANCE");
        	var nCellIdxAM_CRSUM = this.dxGrid.getBindCellIndex("body", "AM_CRSUM");
        	var nCellIdxAM_CRDANGWOL = this.dxGrid.getBindCellIndex("body", "AM_CRDANGWOL");
        	var nCellIdxAM_CRIWOL = this.dxGrid.getBindCellIndex("body", "AM_CRIWOL");

        	var nCellIdxAM_DRDANGSUM = this.dxGrid.getBindCellIndex("body", "AM_DRDANGSUM");
        	var nCellIdxAM_CRDANGSUM = this.dxGrid.getBindCellIndex("body", "AM_CRDANGSUM");

        	this.dxGrid.setFormatColProperty(nCellIdxAM_DRBALANCE	, "size", (CD_CURR == "KRW") ? 120 : 0);
        	this.dxGrid.setFormatColProperty(nCellIdxAM_DRSUM		, "size", (CD_CURR == "KRW") ? 120 : 0);
        	this.dxGrid.setFormatColProperty(nCellIdxAM_DRDANGWOL	, "size", (CD_CURR == "KRW") ? 120 : 0);
        	this.dxGrid.setFormatColProperty(nCellIdxAM_DRIWOL		, "size", (CD_CURR == "KRW") ? 120 : 0);
        	this.dxGrid.setFormatColProperty(nCellIdxAM_CRBALANCE	, "size", (CD_CURR == "KRW") ? 120 : 0);
        	this.dxGrid.setFormatColProperty(nCellIdxAM_CRSUM		, "size", (CD_CURR == "KRW") ? 120 : 0);
        	this.dxGrid.setFormatColProperty(nCellIdxAM_CRDANGWOL	, "size", (CD_CURR == "KRW") ? 120 : 0);
        	this.dxGrid.setFormatColProperty(nCellIdxAM_CRIWOL		, "size", (CD_CURR == "KRW") ? 120 : 0);

        	this.dxGrid.setFormatColProperty(nCellIdxAM_DRDANGSUM   , "size", (CD_CURR == "KRW") ? 120 : 0);
        	this.dxGrid.setFormatColProperty(nCellIdxAM_CRDANGSUM	, "size", (CD_CURR == "KRW") ? 120 : 0);

        	nCellIdxAM_DRBALANCE = this.dxGrid.getBindCellIndex("body", "AM_DRBALANCE_LOCAL");
        	nCellIdxAM_DRSUM = this.dxGrid.getBindCellIndex("body", "AM_DRSUM_LOCAL");
        	nCellIdxAM_DRDANGWOL = this.dxGrid.getBindCellIndex("body", "AM_DRDANGWOL_LOCAL");
        	nCellIdxAM_DRIWOL = this.dxGrid.getBindCellIndex("body", "AM_DRIWOL_LOCAL");
        	nCellIdxAM_CRIWOL = this.dxGrid.getBindCellIndex("body", "AM_CRIWOL_LOCAL");
        	nCellIdxAM_CRDANGWOL = this.dxGrid.getBindCellIndex("body", "AM_CRDANGWOL_LOCAL");
        	nCellIdxAM_CRSUM = this.dxGrid.getBindCellIndex("body", "AM_CRSUM_LOCAL");
        	nCellIdxAM_CRBALANCE = this.dxGrid.getBindCellIndex("body", "AM_CRBALANCE_LOCAL");

        	nCellIdxAM_DRDANGSUM = this.dxGrid.getBindCellIndex("body", "AM_DRDANGSUM_LOCAL");
        	nCellIdxAM_CRDANGSUM = this.dxGrid.getBindCellIndex("body", "AM_CRDANGSUM_LOCAL");

        	this.dxGrid.setFormatColProperty(nCellIdxAM_DRBALANCE	, "size", (CD_CURR == "KRW") ? 0 : 120);
        	this.dxGrid.setFormatColProperty(nCellIdxAM_DRSUM		, "size", (CD_CURR == "KRW") ? 0 : 120);
        	this.dxGrid.setFormatColProperty(nCellIdxAM_DRDANGWOL	, "size", (CD_CURR == "KRW") ? 0 : 120);
        	this.dxGrid.setFormatColProperty(nCellIdxAM_DRIWOL		, "size", (CD_CURR == "KRW") ? 0 : 120);
        	this.dxGrid.setFormatColProperty(nCellIdxAM_CRBALANCE	, "size", (CD_CURR == "KRW") ? 0 : 120);
        	this.dxGrid.setFormatColProperty(nCellIdxAM_CRSUM		, "size", (CD_CURR == "KRW") ? 0 : 120);
        	this.dxGrid.setFormatColProperty(nCellIdxAM_CRDANGWOL	, "size", (CD_CURR == "KRW") ? 0 : 120);
        	this.dxGrid.setFormatColProperty(nCellIdxAM_CRIWOL		, "size", (CD_CURR == "KRW") ? 0 : 120);

        	this.dxGrid.setFormatColProperty(nCellIdxAM_DRDANGSUM	, "size", (CD_CURR == "KRW") ? 0 : 120);
        	this.dxGrid.setFormatColProperty(nCellIdxAM_CRDANGSUM	, "size", (CD_CURR == "KRW") ? 0 : 120);

        	var TY_PRINT = this.dsSearch.getColumn(0, "TY_PRINT");

        	var nCellIdxDS_PRINT = this.dxGrid.getBindCellIndex("body", "DS_PRINT");
        	var nCellIdxDS_PRINT_ENG = this.dxGrid.getBindCellIndex("body", "DS_PRINT_ENG");

        	this.dxGrid.setFormatColProperty(nCellIdxDS_PRINT	, "size", (TY_PRINT == "ENG") ? 0 : 260);
        	this.dxGrid.setFormatColProperty(nCellIdxDS_PRINT_ENG	, "size", (TY_PRINT == "KOR") ? 0 : 200);

        };


        // 콤보 조회
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(0, "CD_TYPE", "A25");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_PRINT=combo0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staCD_SYSTEM.addEventHandler("onclick",this.divSearch_staCD_SYSTEM_onclick,this);
            this.divSearch.form.staCD_SYSTEM00.addEventHandler("onclick",this.divSearch_staCD_SYSTEM_onclick,this);
            this.divSearch.form.staCD_SYSTEM00_00.addEventHandler("onclick",this.divSearch_staCD_SYSTEM_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHF_TB.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
