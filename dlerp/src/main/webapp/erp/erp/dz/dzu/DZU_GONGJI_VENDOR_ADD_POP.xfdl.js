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
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_GONGJI_TOTAL_VENDOR_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DZZPR_GONGJI_TOTAL_VENDOR_SAVE</Col></Row><Row><Col id=\"TARGET\">combo1</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DCXPR_TOTAL_LICCOST_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR_AP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC_AP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PRESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"TY_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE_HD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT_HD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR_AP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_HD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONT_HD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_COSTCLASS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LICCOST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LICENSE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCREDIT_GRADE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCASH_FLOW_GRADE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRM_GRADE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_REGIST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">등록회사제외</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">등록회사만</Col></Row><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBidInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_REGIST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"214","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_SYSTEM","208","56","90","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboTY_SYSTEM_innerdataset = new nexacro.NormalDataset("divSearch_form_cboTY_SYSTEM_innerdataset", obj);
            divSearch_form_cboTY_SYSTEM_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">필수선택</Col></Row><Row><Col id=\"codecolumn\">DC</Col><Col id=\"datacolumn\">외주</Col></Row><Row><Col id=\"codecolumn\">DM</Col><Col id=\"datacolumn\">자재</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboTY_SYSTEM_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","cboTY_SYSTEM:50","56","50","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("업체명");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","staDS_VENDOR:0","56","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","737","56","60","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("거래처코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_VENDOR","staCD_VENDOR:10","56","80","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_PRESIDENT","txtCD_VENDOR:30","56","70","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("대표자명");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_PREGIDENT","staDS_PRESIDENT:0","56","90","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_SJC","txtDS_VENDOR:40","56","69","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사업자번호");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtNO_SJC","staNO_SJC:0","56","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR00_00","148","82","50","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("등록구분");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_REGIST","staDS_VENDOR00_00:10","82","110","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_innerdataset("dsCD_REGIST");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_COSTCLASS","cboTY_REGIST:41","82","40","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("부문");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_COSTCLASS","staCD_COSTCLASS:-1","82","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_COSTCLASS");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_LICCOST","cboCD_COSTCLASS:40","82","70","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("공종코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_LICCOST","staCD_LICCOST:0","82","179","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_LICCOST");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","799","13","60","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("조회");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSave","btnSearch:10","13","60","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("추가");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnClose","btnSave:10","13","60","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("닫기");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_LICCOST00","cboCD_LICCOST:60","82","60","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("면허업코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_LICENSE","staCD_LICCOST00:10","82","160","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_LICENSE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_VENDOR","10","-2","131","104.25%",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("4");
            obj.set_columncount("1");
            var divSearch_form_rdoTY_VENDOR_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoTY_VENDOR_innerdataset", obj);
            divSearch_form_rdoTY_VENDOR_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">AP</Col><Col id=\"datacolumn\">매입거래처</Col></Row><Row><Col id=\"datacolumn\">외주/자재</Col><Col id=\"codecolumn\">VN</Col></Row><Row><Col id=\"codecolumn\">SITE</Col><Col id=\"datacolumn\">현장 계약업체</Col></Row><Row><Col id=\"codecolumn\">HD</Col><Col id=\"datacolumn\">부서(본사) 계약건</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoTY_VENDOR_innerdataset);
            obj.set_text("매입거래처");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","148","125","60","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("현장코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0","125","250","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR00","148","56","50","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("구분");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBg0","0","112","100.00%","2",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBg0_00","0","168","100.00%","2",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBg0_01","0","44","100.00%","2",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE01","148","181","60","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("부서코드");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE_HD","staCD_SITE01:0","181","250","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFDEPT_A");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("24");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE01_00","ccfCD_SITE_HD:30","181","50","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("계약번호");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_CONT_HD","staCD_SITE01_00:10","181","250","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("25");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE01_00_00","ccfCD_SITE:30","125","50","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("계약번호");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_CONT","staCD_SITE01_00_00:10","125","250","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("27");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR01","148","13","50","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("회사명");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR_AP","staDS_VENDOR01:10","13","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR01_00","txtDS_VENDOR_AP:30","13","60","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("사업자번호");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtNO_SJC_AP","staDS_VENDOR01_00:10","13","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR_AP","txtNO_SJC_AP:30","13","60","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("거래처코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_VENDOR_AP","staCD_VENDOR_AP:10","13","80","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divData","1260","191",null,null,"10","523",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.txtDS_VENDOR","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.txtDS_PREGIDENT","value","dsSearch","DS_PRESIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.txtNO_SJC","value","dsSearch","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboCD_COSTCLASS","value","dsSearch","CD_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboCD_LICCOST","value","dsSearch","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboCD_LICENSE","value","dsSearch","CD_LICENSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboTY_SYSTEM","value","dsSearch","TY_SYSTEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_SITE_HD.form.CDTextBox","value","dsSearch","CD_SITE_HD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_SITE_HD.form.DSTextBox","value","dsSearch","DS_SITE_HD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccfNO_CONT.form.CDTextBox","value","dsSearch","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ccfNO_CONT.form.DSTextBox","value","dsSearch","DS_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.ccfNO_CONT_HD.form.CDTextBox","value","dsSearch","NO_CONT_HD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.ccfNO_CONT_HD.form.DSTextBox","value","dsSearch","DS_CONT_HD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.txtDS_VENDOR_AP","value","dsSearch","DS_VENDOR_AP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.cboTY_REGIST","value","dsSearch","TY_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.txtNO_SJC_AP","value","dsSearch","NO_SJC_AP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.rdoTY_VENDOR","value","dsSearch","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.txtCD_VENDOR_AP","value","dsSearch","CD_VENDOR_AP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.txtCD_VENDOR","value","dsSearch","NO_SJC_AP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZU_GONGJI_VENDOR_ADD_POP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        // 부문, 공종을 최초 조회할때를 체크를 위한 전역변수.
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
        	//this.fnSetCombo();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().SN_SEQ)) {
        		this.dsSearch.setColumn(0 , "SN_SEQ" , this.getOwnerFrame().SN_SEQ )
        	}

        	//this.dsSearch.set_enableevent(false);
        	this.dsSearch.setColumn( 0 , "TY_VENDOR" , "AP")
        	//this.dsSearch.set_enableevent(true);
        	this.fnSearchInit();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Select.set_enable(false);
        	//this.FormBtns.set_value(true);
        	//this.FormBtns.set_visible(true);
        	//btnForm.btnAdd.set_visible(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        // 	this.btn1 = this.gfnFormButtonAdd("btnHUBlLink", "fnHUBlLink");
        // 	this.btn2 = this.gfnFormButtonAdd("btnReq", "fnReq");
        // 	this.btn3 = this.gfnFormButtonAdd("btnReqCancel", "fnReqCancel");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_SITE_HD = this.divSearch.form.ccfCD_SITE_HD;
        	this.ccfNO_CONT = this.divSearch.form.ccfNO_CONT;
        	this.ccfNO_CONT_HD = this.divSearch.form.ccfNO_CONT_HD;
        	this.dxGrid = this.divDataBottom.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_SITE.CodeFindName = "DZX_CFSITE";
        	this.ccfCD_SITE_HD.CodeFindName = "DZX_CFDEPT_A";

        	this.ccfNO_CONT.CodeFindName = "DCX_CFCONTRACT_ALL";
        	this.ccfNO_CONT_HD.CodeFindName = "DCX_CFCONTRACT_01_HD";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCB_GONGJI_VENDOR");

        	this.ccfCD_SITE.BeforeUserDataSetParam    = "fnBeforeUserDataSetParam";
        	this.ccfNO_CONT.BeforeUserDataSetParam    = "fnBeforeUserDataSetParam";
        	this.ccfNO_CONT_HD.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//this.ccfNO_CONT.AfterCDTextChanged    = "fnAfterCDTextChanged";
        	//this.ccfNO_CONT_HD.AfterCDTextChanged = "fnAfterCDTextChanged";
        	//this.ccfNO_BID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_VENDOR", "string");
        	this.dsSelect.addColumn("CD_VENDOR_AP", "string");
        	this.dsSelect.addColumn("DS_VENDOR_AP", "string");
        	this.dsSelect.addColumn("NO_SJC_AP", "string");
        	this.dsSelect.addColumn("TY_SYSTEM", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("DS_VENDOR", "string");
        	this.dsSelect.addColumn("DS_PRESIDENT", "string");
        	this.dsSelect.addColumn("NO_SJC", "string");
        	this.dsSelect.addColumn("TY_REGIST", "string");
        	this.dsSelect.addColumn("CD_COSTCLASS", "string");
        	this.dsSelect.addColumn("CD_LICCOST", "string");
        	this.dsSelect.addColumn("CD_LICENSE", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_CONT", "string");
        	this.dsSelect.addColumn("CD_SITE_HD", "string");
        	this.dsSelect.addColumn("NO_CONT_HD", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_FLAG", "string");
        	this.dsSave.addColumn("SN_SEQ", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("DS_VENDOR", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsSelectInfo = new Dataset();
        	this.dsSelectInfo.addColumn("NO_BID", "string");
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
        	this.dsSelect.setColumn(0, "TY_VENDOR",    this.dsSearch.getColumn(0, "TY_VENDOR"));
        	this.dsSelect.setColumn(0, "CS_VENDOR_AP", this.dsSearch.getColumn(0, "CS_VENDOR_AP"));
        	this.dsSelect.setColumn(0, "DS_VENDOR_AP", this.dsSearch.getColumn(0, "DS_VENDOR_AP"));
        	this.dsSelect.setColumn(0, "NO_SJC_AP",    this.dsSearch.getColumn(0, "NO_SJC_AP"));
        	this.dsSelect.setColumn(0, "TY_SYSTEM",    this.dsSearch.getColumn(0, "TY_SYSTEM"));
        	this.dsSelect.setColumn(0, "CD_VENDOR",    this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "DS_VENDOR",    this.dsSearch.getColumn(0, "DS_VENDOR"));
        	this.dsSelect.setColumn(0, "NO_SJC",       this.dsSearch.getColumn(0, "NO_SJC"));
        	this.dsSelect.setColumn(0, "DS_PRESIDENT", this.dsSearch.getColumn(0, "DS_PRESIDENT"));
        	this.dsSelect.setColumn(0, "TY_REGIST",    this.dsSearch.getColumn(0, "TY_REGIST"));
        	this.dsSelect.setColumn(0, "CD_COSTCLASS", this.dsSearch.getColumn(0, "CD_COSTCLASS"));
        	this.dsSelect.setColumn(0, "CD_LICCOST",   this.dsSearch.getColumn(0, "CD_LICCOST"));
        	this.dsSelect.setColumn(0, "CD_LICENSE",   this.dsSearch.getColumn(0, "CD_LICENSE"));
        	this.dsSelect.setColumn(0, "CD_SITE",      this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_CONT",      this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsSelect.setColumn(0, "CD_SITE_HD",   this.dsSearch.getColumn(0, "CD_SITE_HD"));
        	this.dsSelect.setColumn(0, "NO_CONT_HD",   this.dsSearch.getColumn(0, "NO_CONT_HD"));

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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        };


        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	this.dsSave.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var chk = this.dsList.getColumn(i, "CHK");

        		if( chk == 1 ) {
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "TY_FLAG",        "I" );
        			this.dsSave.setColumn(nrow, "SN_SEQ",         this.dsSearch.getColumn(0, "SN_SEQ"));
        			this.dsSave.setColumn(nrow, "CD_VENDOR",      this.dsList.getColumn(i, "CD_VENDOR"));
        			this.dsSave.setColumn(nrow, "DS_VENDOR",   	  this.dsList.getColumn(i, "DS_VENDOR"));
        			this.dsSave.setColumn(nrow, "ID_USER",        this.AuthClient.ID_USER);
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	var tyVendor = this.dsSearch.getColumn(0, "TY_VENDOR");

        	if( tyVendor == "VN") {
        	var tyStstem = this.dsSearch.getColumn(0, "TY_SYSTEM");
        		if( this.gfnIsNull(tyStstem) ){
        			this.gfnAlert( "협력회사 조회구분일경우 구분(외주/자재) 먼저 선택하여 주시기 바랍니다. ")
        			return false;
        		}
        	}

        // 	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_LICENSE1")))
        // 	{
        // 		validate = false;
        //
        // 		this.gfnAlert("보유면허 1. 은 반드시 입력하십시오.");
        // 	}

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




        		var UP_TT_SILHENG_GAP = this.dxGrid.getBindCellIndex("body", "UP_TT_SILHENG_GAP");
        		var AM_TT_SILHENG_GAP = this.dxGrid.getBindCellIndex("body", "AM_TT_SILHENG_GAP");

        		this.dxGrid.setRealColSize("body", QN_TT_SILHENG, 80);
        		this.dxGrid.setRealColSize("body", UP_TT_SILHENG, 90);


        	}
        	else if(svcID == "save") {
        		if(errorCode == 0)
        		{
        			this.gfnAlert("저장 하였습니다.");
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo") {
        		if (errorCode == 0) {
        			// 초기 선택값은 아래 3가지 방법으로 가능
        			this.dsCD_COSTCLASS.insertRow(0);
        			this.dsCD_COSTCLASS.setColumn(0, "CD_CODE", "");
        			this.dsCD_COSTCLASS.setColumn(0, "DS_CODE", "전체");

        			if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_COSTCLASS")))
        			{
        				this.divSearch.form.cboCD_COSTCLASS.set_index(0);
        			}
        			this.dsCD_LICCOST.insertRow(0);
        			this.dsCD_LICCOST.setColumn(0, "CD_CODE", "");
        			this.dsCD_LICCOST.setColumn(0, "DS_CODE", "전체");

        			if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_LICCOST")))
        			{
        				this.divSearch.form.cboCD_LICCOST.set_index(0);
        			}

        			// 초기 선택값은 아래 3가지 방법으로 가능
        			this.dsCD_LICENSE.insertRow(0);
        			this.dsCD_LICENSE.setColumn(0, "CD_CODE", "");
        			this.dsCD_LICENSE.setColumn(0, "DS_CODE", "전체");

        			if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_LICENSE")))
        			{
        				this.divSearch.form.cboCD_LICENSE.set_index(0);
        			}
        			this.dsCD_REGIST.insertRow(0);
        			this.dsCD_REGIST.setColumn(0, "CD_CODE", "");
        			this.dsCD_REGIST.setColumn(0, "DS_CODE", "전체");
        			if(this.gfnIsNull(this.dsSearch.getColumn(0, "TY_REGIST")))
        			{
        				this.divSearch.form.cboTY_REGIST.set_index(0);
        			}

        		}
        	}
        	else if(svcID == "combo1") {
        		if (errorCode == 0) {
        			this.dsCD_LICCOST.insertRow(0);
        			this.dsCD_LICCOST.setColumn(0, "CD_CODE", "");
        			this.dsCD_LICCOST.setColumn(0, "DS_CODE", "전체");

        			if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_LICCOST")))
        			{
        				this.divSearch.form.cboCD_LICCOST.set_index(0);
        			}
        			else
        			{
        				// 가끔 bid_info 조회 후 콤보박스에 없는 값들이 존재.
        				if(this.dsCD_LICCOST.findRow("CD_CODE", this.dsSearch.getColumn(0, "CD_LICCOST")) < 0)
        				{
        					this.divSearch.form.cboCD_LICCOST.set_index(0);
        				}
        			}
        		}
        	}
        	else if(svcID == "bid_info")
        	{
        		if(this.dsBidInfo.rowcount > 0)
        		{
        			this.dsSearch.setColumn(0, "CD_COSTCLASS", this.dsBidInfo.getColumn(0, "CD_COSTCLASS"));
        			this.dsSearch.setColumn(0, "CD_LICCOST", this.dsBidInfo.getColumn(0, "CD_LICCOST"));
        			//this._FIRST = false;
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_CORP", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "ID_USER", "");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "");

        	}else if (id == "ccfCD_SITE_HD") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		//dsUserParam.setColumn(nrow, "CD_CORP",  "");
        		dsUserParam.setColumn(nrow, "CD_SAUPCENTER", "");
        	}else if(id == "ccfNO_CONT"){
        		if(this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.value)){
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.value);
        	}else if(id == "ccfNO_CONT_HD"){
        		if (this.gfnIsNull(this.ccfCD_SITE_HD.form.CDTextBox.value)) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.ccfCD_SITE_HD.form.CDTextBox.value);

        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 입찰번호 초기화
        		//this.ccfNO_BID.form.fnCodeFindClear();
        	}else if( id == "ccfCD_SITE_HD" ){

        	}else if( id == "ccfNO_CONT" ){

        	}else if( id == "ccfNO_CONT_HD" ){

        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_ExpandUp = function(obj,e) {
        // 	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        // 	if(colnm == "NM_CREDIT") {
        // 		var param = {};
        //
        // 		param.NO_SJC = this.dsList.getColumn(this.dsList.rowposition, "NO_SJC");
        // 		param.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");
        //
        // 		this.gfnFormOpenNonAuth("DCZ", "DCZ_CREDIT_DLG", "fnAddDialogCallback", param, 430, 220);
        // 	}
        }

        this.fnAddDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value == true){
        		this.FormBtns.Select.click();
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSetCombo = function() {

        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		if(e.columnid == "TY_SYSTEM") {
        			if(e.newvalue == "DC" || e.newvalue == "DM" ) {
        				this.changLicComboSelect(e.newvalue);
        			}else{
        				this.dsCD_COSTCLASS.clearData();
        				this.dsCD_LICENSE.clearData();
        				this.dsCD_REGIST.clearData();
        				this.dsCD_LICCOST.clearData();
        			}

        		}
        		else if(e.columnid == "CD_COSTCLASS"){
        			this.fnSetCombo1();
        		}else if(e.columnid == "TY_VENDOR"){
        			//초기화 및 컨트롤
        			this.fnSearchInit();
        		}


        	}
        };


        //todo
        this.changLicComboSelect = function(type){

        	trace( "changLicComboSelect :" + type ) ;
        	this.dsCombo1 = new Dataset();
        	this.dsCombo1.addColumn("CD_SYSTEM", "string");
        	this.dsCombo1.addColumn("CD_TYPE", "string");

        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_BUMUN", "string");

        	//var inData  = "";
        	//var outData = "";

        	if( type == "DC" ){
        		//부문
        		this.dsCombo1.addRow();
        		this.dsCombo1.setColumn(0, "CD_SYSTEM", "DC");
        		this.dsCombo1.setColumn(0, "CD_TYPE", "C01");
        		//면허업코드
        		this.dsCombo1.addRow();
        		this.dsCombo1.setColumn(1, "CD_SYSTEM", "DC");
        		this.dsCombo1.setColumn(1, "CD_TYPE", "C02");
        		//등록구분
        		this.dsCombo1.addRow();
        		this.dsCombo1.setColumn(2, "CD_SYSTEM", "DC");
        		this.dsCombo1.setColumn(2, "CD_TYPE", "17");
        		//공종코드
        		this.dsCombo2.addRow();
        		this.dsCombo2.setColumn(0, "CD_SYSTEM", "DC");
        		this.dsCombo2.setColumn(0, "CD_BUMUN", "");


        	}else if( type == "DM" ) {
        		//부문
        		this.dsCombo1.addRow();
        		this.dsCombo1.setColumn(0, "CD_SYSTEM", "DM");
        		this.dsCombo1.setColumn(0, "CD_TYPE", "H01");
        		//면허업코드
        		this.dsCombo1.addRow();
        		this.dsCombo1.setColumn(1, "CD_SYSTEM", "DM");
        		this.dsCombo1.setColumn(1, "CD_TYPE", "RI02");
        		//등록구분
        		this.dsCombo1.addRow();
        		this.dsCombo1.setColumn(2, "CD_SYSTEM", "DM");
        		this.dsCombo1.setColumn(2, "CD_TYPE", "H05");
        		//공종코드
        		this.dsCombo2.addRow();
        		this.dsCombo2.setColumn(0, "CD_SYSTEM", "DM");
        		this.dsCombo2.setColumn(0, "CD_BUMUN", "");
        	}else{
        		this.dsCD_COSTCLASS.clearData();
        		this.dsCD_LICENSE.clearData();
        		this.dsCD_REGIST.clearData();
        		this.dsCD_LICCOST.clearData();
        		return false;
        	}

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo1=dsCombo1 combo2=dsCombo2";
        	var outData     = "dsCD_COSTCLASS=combo10 dsCD_LICENSE=combo11 dsCD_REGIST=combo12 dsCD_LICCOST=combo20 ";
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

        this.fnSearchInit = function(){

        	//선택구분
        	var tyVendor = this.dsSearch.getColumn(0 , "TY_VENDOR");

        	this.dsSearch.setColumn(0, "DS_VENDOR_AP", "");
        	this.dsSearch.setColumn(0, "NO_SJC_AP" , "");
        	this.dsSearch.setColumn(0, "CD_VENDOR_AP" , "");
        	this.dsSearch.setColumn(0, "TY_SYSTEM" , "");
        	this.dsSearch.setColumn(0, "DS_VENDOR" , "");
        	this.dsSearch.setColumn(0, "CD_VENDOR" , "");
        	this.dsSearch.setColumn(0, "DS_PRESIDENT", "");
        	this.dsSearch.setColumn(0, "NO_SJC"    , "");
        	this.dsSearch.setColumn(0, "TY_REGIST" , "");
        	this.dsSearch.setColumn(0, "CD_COSTCLASS", "");
        	this.dsSearch.setColumn(0, "CD_SITE"   , "");
        	this.dsSearch.setColumn(0, "NO_CONT"   , "");
        	this.dsSearch.setColumn(0, "CD_SITE_HD", "");
        	this.dsSearch.setColumn(0, "NO_CONT_HD", "");
        	this.dsSearch.setColumn(0, "DS_SITE"   , "");
        	this.dsSearch.setColumn(0, "DS_SITE_HD", "");
        	this.dsSearch.setColumn(0, "DS_CONT"   , "");
        	this.dsSearch.setColumn(0, "DS_CONT_HD", "");
        	this.dsSearch.setColumn(0, "TY_CONT"   , "");

        	this.dsSearch.setColumn(0, "TY_REGIST"     , "");
        	this.dsSearch.setColumn(0, "CD_COSTCLASS"  , "");
        	this.dsSearch.setColumn(0, "CD_LICCOST"    , "");
        	this.dsSearch.setColumn(0, "CD_LICENSE"    , "");

        	this.divSearch.form.ccfCD_SITE.form.CDTextBox.set_value("");
        	this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value("");
        	this.divSearch.form.ccfCD_SITE_HD.form.CDTextBox.set_value("");
        	this.divSearch.form.ccfCD_SITE_HD.form.DSTextBox.set_value("");

        	//매입
        	this.divSearch.form.txtDS_VENDOR_AP.set_enable(false);
        	this.divSearch.form.txtNO_SJC_AP.set_enable(false);
        	this.divSearch.form.txtCD_VENDOR_AP.set_enable(false);
        	//현장
        	this.divSearch.form.ccfCD_SITE.set_enable(false);
        	this.divSearch.form.ccfNO_CONT.set_enable(false);
        	this.divSearch.form.txtCD_VENDOR.set_enable(false);
        	//본사
        	this.divSearch.form.ccfCD_SITE_HD.set_enable(false);
        	this.divSearch.form.ccfNO_CONT_HD.set_enable(false);
        	//외주자재
        	this.divSearch.form.cboTY_SYSTEM.set_enable(false);
        	this.divSearch.form.txtDS_VENDOR.set_enable(false);
        	this.divSearch.form.txtDS_PREGIDENT.set_enable(false);
        	this.divSearch.form.txtNO_SJC.set_enable(false);
        	this.divSearch.form.cboTY_SYSTEM.set_enable(false);
        	this.divSearch.form.cboTY_REGIST.set_enable(false);
        	this.divSearch.form.cboCD_COSTCLASS.set_enable(false);
        	this.divSearch.form.cboCD_LICCOST.set_enable(false);
        	this.divSearch.form.cboCD_LICENSE.set_enable(false);

        	if( tyVendor == "AP") {
        		this.divSearch.form.txtDS_VENDOR_AP.set_enable(true);
        		this.divSearch.form.txtNO_SJC_AP.set_enable(true);
        		this.divSearch.form.txtCD_VENDOR_AP.set_enable(true);
        		this.divSearch.form.cboTY_SYSTEM.set_index(0);
        	}else if( tyVendor == "SITE") {
        		this.divSearch.form.ccfCD_SITE.set_enable(true);
        		this.divSearch.form.ccfNO_CONT.set_enable(true);
        		this.divSearch.form.cboTY_SYSTEM.set_index(0);
        	}else if( tyVendor == "HD") {
        		this.divSearch.form.ccfCD_SITE_HD.set_enable(true);
        		this.divSearch.form.ccfNO_CONT_HD.set_enable(true);
        		this.divSearch.form.cboTY_SYSTEM.set_index(0);
        	}else if( tyVendor == "VN") {
        		this.divSearch.form.cboTY_SYSTEM.set_enable(true);
        		this.divSearch.form.txtDS_VENDOR.set_enable(true);
        		this.divSearch.form.txtDS_PREGIDENT.set_enable(true);
        		this.divSearch.form.txtNO_SJC.set_enable(true);
        		this.divSearch.form.cboTY_REGIST.set_enable(true);
        		this.divSearch.form.cboCD_COSTCLASS.set_enable(true);
        		this.divSearch.form.cboCD_LICCOST.set_enable(true);
        		this.divSearch.form.cboCD_LICENSE.set_enable(true);
        		this.divSearch.form.txtCD_VENDOR.set_enable(true);
        		this.divSearch.form.cboTY_SYSTEM.set_index(0);
        	}
        	this.divSearch.form.rdoTY_VENDOR.set_enable(true);

        }



        this.fnSetCombo1 = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_BUMUN", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", this.dsSearch.getColumn(0, "TY_SYSTEM"));
        	this.dsCombo.setColumn(0, "CD_BUMUN",  this.dsSearch.getColumn(0, "CD_COSTCLASS"));

        	var strSvcId    = "combo1";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo2=dsCombo";
        	var outData     = "dsCD_LICCOST=combo20";
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

        this.fnSelectBidInfo = function()
        {
        	this.dsSelectInfo.clearData();
        	this.dsSelectInfo.addRow();

        	this.dsSelectInfo.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));

        	var strSvcId    = "bid_info";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "bid_info=dsSelectInfo";
        	var outData     = "dsBidInfo=bid_info0";
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

        this.divSearch_btnClose_onclick = function(obj,e)
        {
        	if(this._closeReturn == true) {
        		this.getParentContext().close(true);
        	} else {
        		this.getParentContext().close();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.fnSelect,this);
            this.divSearch.form.btnSave.addEventHandler("onclick",this.fnSave,this);
            this.divSearch.form.btnClose.addEventHandler("onclick",this.divSearch_btnClose_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZU_GONGJI_VENDOR_ADD_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
