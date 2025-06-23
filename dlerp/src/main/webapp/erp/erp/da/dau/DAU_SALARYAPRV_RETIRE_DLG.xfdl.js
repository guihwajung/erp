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
            this.set_titletext("품의서");
            this.getSetter("maxwidth").set("522");
            this.getSetter("maxheight").set("365");
            if (Form == this.constructor)
            {
                this._setFormPosition(522,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PENSION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"QN_VACA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"DS_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_APRV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_AUTOSLIPBASE_RETIRE_APRV_DLG_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAUPR_AUTOSLIPBASE_RETIRE_APRV_DLG_SAVE</Col></Row><Row><Col id=\"TARGET\">aprv_execute</Col><Col id=\"SP\">DAUPR_AUTOSLIPBASE_APRV_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"35","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle1","0","0","459","35",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_text("퇴사자 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staAprv",null,"0","135","35","130",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_text("결재상태 : 상신 전");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnAprv","staAprv:5","5","120","27",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_text("품의서상신");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divData","0","divTop:0",null,"220","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDs_Hname","0","0","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabelT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDs_HnameBg","staDs_Hname:-1","staDs_Hname:-30","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_HNAME","staDs_Hname:5","staDs_Hname:-25","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIdSabun","staDs_HnameBg:-1","staDs_HnameBg:-30","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabelT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIdSabunBg","staIdSabun:-1","staIdSabun:-30","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtID_SABUN","staIdSabun:5","staIdSabun:-25","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdDept","0","staIdSabun:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdDeptBg","staCdDept:-1","staCdDept:-30","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT","staCdDept:5","staCdDept:-25","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdPosition","staCdDeptBg:-1","staCdDeptBg:-30","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdPositionBg","staCdPosition:-1","staCdPosition:-30","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_POSITION","staCdPosition:5","staCdPosition:-25","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDt_Join","0","staCdDept:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("입사일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDt_JoinBg","staDt_Join:-1","staDt_Join:-30","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_JOIN","staDt_Join:5","staDt_Join:-25","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDt_Start","staDt_JoinBg:-1","staDt_JoinBg:-30","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("퇴직금 기산일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDt_StartBg","staDt_Start:-1","staDt_Start:-30","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_START","staDt_Start:5","staDt_Start:-25","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTy_Pension","0","staDt_Join:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("퇴직연금 구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTy_PensionBg","staTy_Pension:-1","staTy_Pension:-30","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtTY_PENSION","staTy_Pension:5","staTy_Pension:-25","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDt_Retire","staTy_PensionBg:-1","staTy_PensionBg:-30","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("퇴사일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDt_RetireBg","staDt_Retire:-1","staDt_Retire:-30","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_RETIRE","staDt_Retire:5","staDt_Retire:-25","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAmRetire","0","staTy_Pension:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("퇴직금 지급액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAmRetireBg","staAmRetire:-1","staAmRetire:-30","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_RETIRE","staAmRetire:5","staAmRetire:-25","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_format("###,###,###");
            obj.set_limitbymask("integer");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQn_Vaca","staAmRetireBg:-1","staAmRetireBg:-30","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("잔여 연차");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQn_VacaBg","staQn_Vaca:-1","staQn_Vaca:-30","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtQN_VACA","staQn_Vaca:5","staQn_Vaca:-25","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_limitbymask("decimal");
            obj.set_format("#,###.###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDsRemark","0","staAmRetire:-1","110","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("참고사항");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDsRemarkBg","staDsRemark:-1","staDsRemark:-60","368","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_REMARK","staDsRemark:5","staDsRemark:-54","356","47",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","0","divData:5","450","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","180","0","52","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_action");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnSave:10","0","52","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.divBtns.addChild(obj.name, obj);

            obj = new Div("ctclYM_SALARY","0","0","80","24.0",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.getSetter("onchanged").set("fnSearchInit");
            obj.set_visible("false");
            this.divBtns.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","0","0","70","24.0",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_readonly("false");
            obj.set_visible("false");
            obj.set_value("S");
            obj.set_index("0");
            this.divBtns.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","0","0","40","24.0",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("4");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_readonly("false");
            obj.set_visible("false");
            var divBtns_form_cboSN_SALARY_innerdataset = new nexacro.NormalDataset("divBtns_form_cboSN_SALARY_innerdataset", obj);
            divBtns_form_cboSN_SALARY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row></Rows>");
            obj.set_innerdataset(divBtns_form_cboSN_SALARY_innerdataset);
            obj.set_text("1");
            obj.set_value("1");
            obj.set_index("0");
            this.divBtns.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","0","0","200","24.0",null,null,null,null,null,null,this.divBtns.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_visible("false");
            this.divBtns.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","0","0","200","24.0",null,null,null,null,null,null,this.divBtns.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_visible("false");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.txtID_SABUN","value","dsDetail","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtDS_HNAME","value","dsDetail","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.txtDS_DEPT","value","dsDetail","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtDS_POSITION","value","dsDetail","DS_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtDT_JOIN","value","dsDetail","DT_JOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtDT_START","value","dsDetail","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtTY_PENSION","value","dsDetail","TY_PENSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtDT_RETIRE","value","dsDetail","DT_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtAM_RETIRE","value","dsDetail","AM_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtQN_VACA","value","dsDetail","QN_VACA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtDS_REMARK","value","dsDetail","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divBtns.form.ctclYM_SALARY.form.TextBox","value","dsSearch","YM_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divBtns.form.cboTY_SALARY","value","dsSearch","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divBtns.form.cboSN_SALARY","value","dsSearch","SN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divBtns.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divBtns.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
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
        this.registerScript("DAU_SALARYAPRV_RETIRE_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.dsSearch.setColumn(0, "YM_SALARY", this.getOwnerFrame().YM_SALARY);
        	this.dsSearch.setColumn(0, "TY_SALARY", this.getOwnerFrame().TY_SALARY);
        	this.dsSearch.setColumn(0, "SN_SALARY", this.getOwnerFrame().SN_SALARY);
        	this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsSearch.setColumn(0, "ID_SABUN", this.getOwnerFrame().ID_SABUN);

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnUpdateStatusExtendButton = function() {
        	this.divTop.form.btnAprv.set_enable(false);
        	this.divBtns.form.btnSave.set_enable(false);

        	var ST_APRV    = this.dsDetail.getColumn(0, "ST_APRV");
        	var DS_APRV    = this.dsDetail.getColumn(0, "DS_APRV");
        	var AprvCnt    = this.dsDetail.getColumn(0, "BTN_APRV");

        	this.divTop.form.btnAprv.set_enable(AprvCnt == "Y");	// 결재상신
        	this.divBtns.form.btnSave.set_enable(AprvCnt == "Y");	// 저장 버튼

        	this.divTop.form.staAprv.set_text(DS_APRV);
        	this.divData.form.txtQN_VACA.set_enable(AprvCnt == "Y")
        	this.divData.form.txtDS_REMARK.set_enable(AprvCnt == "Y")
        }
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divBtns.form.ccfCD_CORP;
        	this.ctclYM_SALARY = this.divBtns.form.ctclYM_SALARY;
        	this.cboTY_SALARY = this.divBtns.form.cboTY_SALARY;
        	this.cboSN_SALARY = this.divBtns.form.cboSN_SALARY;
        	this.ccfID_SABUN = this.divBtns.form.ccfID_SABUN;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";
        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFOCORP";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_SALARY", "string");
        	this.dsSelect.addColumn("TY_SALARY", "string");
        	this.dsSelect.addColumn("SN_SALARY", "int");
        	this.dsSelect.addColumn("ID_SABUN", "string");

        	//수정
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("YM_SALARY", "string");
        	this.dsSave.addColumn("TY_SALARY", "string");
        	this.dsSave.addColumn("SN_SALARY", "int");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("QN_VACA", "bigdecimal");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	// 결재
        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("TY_WRK", "string");
        	this.dsApproval.addColumn("TY_SALARY", "string");
        	this.dsApproval.addColumn("YM_SALARY", "string");
        	this.dsApproval.addColumn("SN_SALARY", "int");
        	this.dsApproval.addColumn("ID_SABUN", "string");
        	this.dsApproval.addColumn("CD_CORP", "string");
        	this.dsApproval.addColumn("ID_APRV", "string");
        	this.dsApproval.addColumn("NO_APRV", "int");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YM_SALARY", this.ctclYM_SALARY.form.TextBox.value);
        	this.dsSelect.setColumn(0, "TY_SALARY", this.cboTY_SALARY.value);
        	this.dsSelect.setColumn(0, "SN_SALARY", this.cboSN_SALARY.value);
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0,"ID_SABUN"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "select=dsSelect";
         	var outData     = "dsDetail=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
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
        	return true;
        };
        this.fnSaveValidate = function() {

        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	switch(svcID) {
        		case "select":		// 조회
        			if (this.dsDetail.rowcount == 0) {
        				this.gfnAlert("자료가 존재하지 않습니다.");
        			} else {
        				this.fnUpdateStatusExtendButton();
        			}
        			break;
        		case "APRV":		// 결재상신
        			this.gfnOpenAppr(function() {
        				this.FormBtns.Select.click();
        			});
        			break;
        		case "save":		// 저장
        			if (errorCode == 0) {
        				this.gfnAlert("저장되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}

        		default:
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfID_SABUN") {
        		if (!this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        			dsUserParam.setColumn(nrow, "CD_DEPT", "");
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		}else{
        			this.gfnAlert("먼저 법인을 선택해주세요.");
        			return false;
        		}
        	}
        	return true;
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         // 저장 버튼 클릭
        this.divData_btnSave_onclick = function(obj,e)
        {
        	this.dsSave.clearData();

        	var nrow = this.dsSave.addRow();
        	this.dsSave.setColumn(nrow, "TY_SAVE", "U");
        	this.dsSave.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSave.setColumn(nrow, "YM_SALARY", this.dsSearch.getColumn(0, "YM_SALARY"));
        	this.dsSave.setColumn(nrow, "TY_SALARY", this.dsSearch.getColumn(0, "TY_SALARY"));
        	this.dsSave.setColumn(nrow, "SN_SALARY", this.dsSearch.getColumn(0, "SN_SALARY"));
        	this.dsSave.setColumn(nrow, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "QN_VACA", this.dsDetail.getColumn(0, "QN_VACA"));
        	this.dsSave.setColumn(nrow, "DS_REMARK", this.dsDetail.getColumn(0, "DS_REMARK"));
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

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        // 결재상신 버튼 클릭
        this.divData_btnAprv_onclick = function(obj,e)
        {
        	var msg = "퇴직급여 지급 품의서에 대하여 결재상신 하시겠습니까?\n";

        	this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        		if (isOk == false) {
        			return;
        		}
        		var title = this.dsDetail.getColumn(0, "DS_TITLE");

        		var initParam = {
        			CD_CORP: this.dsSearch.getColumn(0, "CD_CORP"),
        			ID_AP_TYPE: "DAW02",
        			TY_WRK: "APRV",
        			ID_APRV: this.AuthClient.ID_SABUN,
        			TT_DOC: title,	// 퇴직급여 지급의 건(홍길동 차장)
        			CD_CORP_SUFFIX: this.gfnGetConfig("DZ" , "CD_CORP_SUFFIX"),
        		}
        		this.gfnAprv(initParam, "fnAprvCallback", "APRV");
        	});
        }

        this.fnAprvMsg = function(obj) {
        	var title = this.dsDetail.getColumn(0, "DS_TITLE");
        	var msg = title + "에 대하여 " + obj.text + " 하시겠습니까?";

        	return msg;
        }


        // 결재상신 버튼 콜백
        // 취소결재상신 버튼 콜백
        // 결재상태초기화 버튼 콜백
        this.fnAprvCallback = function(strId, val) {
        	this.dsApproval.clearData();
        	this.dsApproval.addRow();

        	this.dsApproval.setColumn(0, "TY_WRK",  strId);
        	this.dsApproval.setColumn(0, "TY_SALARY", this.dsSearch.getColumn(0, "TY_SALARY"));
        	this.dsApproval.setColumn(0, "YM_SALARY", this.dsSearch.getColumn(0, "YM_SALARY"));
        	this.dsApproval.setColumn(0, "SN_SALARY", this.dsSearch.getColumn(0, "SN_SALARY"));
        	this.dsApproval.setColumn(0, "ID_SABUN", this.dsDetail.getColumn(this.dsDetail.rowposition, "ID_SABUN"));
        	this.dsApproval.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsApproval.setColumn(0, "ID_APRV", this.AuthClient.ID_SABUN);
        	if (strId == "APRV" || strId == "APRVCNC") {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsAprvOut.getColumn(0, "NO_APRV"));
        	} else {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsDetail.getColumn(this.dsDetail.rowposition, "NO_APRV"));
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.divTop.form.btnAprv.addEventHandler("onclick",this.divData_btnAprv_onclick,this);
            this.divBtns.form.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.divBtns.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divBtns.form.cboTY_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divBtns.form.cboSN_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAU_SALARYAPRV_RETIRE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
