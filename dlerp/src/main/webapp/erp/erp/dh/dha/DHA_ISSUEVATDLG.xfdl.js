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
            this.set_titletext("부가세등록(팝업)");
            this.getSetter("maxwidth").set("550");
            this.getSetter("maxheight").set("590");
            if (Form == this.constructor)
            {
                this._setFormPosition(550,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_VAT_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">fileInfo</Col><Col id=\"SP\">DZUPR_FILEMANAGER_SELECT</Col></Row><Row><Col id=\"TARGET\">fileSelect</Col><Col id=\"SP\">DZZPR_FILEMANAGER_SELECT</Col></Row><Row><Col id=\"TARGET\">fileDelete</Col><Col id=\"SP\">DZZPR_FILEMANAGER_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VATBGJE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VENDOR", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","42",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","10","2","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ACNT","10","31","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("투자계정");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","104","2",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","104","31",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_SALEBUY","10","60","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","104","60",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_VATPROOF","10","89","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("증빙선택");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","104","89",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","104","176",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PROOF","10","176","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("증빙일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SUPPLY","10","205","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("공급가액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","104","205",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_VAT","10","234","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("부가세액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","104","234",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REM","10","292","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("적요");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","104","292",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta20","104","321",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staVENDOR","10","321","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","104","350",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_SJC","10","350","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_CREDIT","10","379","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("카드번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta25","104","379",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta27","364","60","96","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("본사매출여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_ISSUE","10","118","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("발행구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta29","104","118",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","110","7","329","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNT","110","36","329","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_SALEBUY","110","64","239","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_rdoTY_SALEBUY_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_SALEBUY_innerdataset", obj);
            divData_form_rdoTY_SALEBUY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">매입</Col><Col id=\"codecolumn\">I</Col></Row><Row><Col id=\"codecolumn\">O</Col><Col id=\"datacolumn\">매출</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_SALEBUY_innerdataset);
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_PROOF","111","181","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_ACCOUNT","calDT_PROOF:10","181","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SUPPLY","111","210","148","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_VAT","111","239","148","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###,###");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_REM","110","297",null,"20","17",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_VENDOR","111","326","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsTY_VENDOR");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_enable("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","214","326",null,"20","17",null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_SJC","111","355","148","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_maxlength("7");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfNO_CREDIT","111","384","329","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("148");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("chkCK_BONSA","466","63","62","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_ISSUE","110","123","239","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            var divData_form_rdoTY_ISSUE_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_ISSUE_innerdataset", obj);
            divData_form_rdoTY_ISSUE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">전자발행</Col></Row><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">일반발행</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_ISSUE_innerdataset);
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_VATBGJE","10","147","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_text("불공제사유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta31","104","147",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_VATBGJE","111","152","328","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsTY_VATBGJE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SERVICE","10","263","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_text("봉사료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta33","104","263",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SERVICE","111","268","148","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###,###");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROOF","110","94","329","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_CREDIT","111","384","148","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_maxlength("20");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","10","408","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","104","408",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtFILE","110","412","148","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnFile","262","413","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_text("첨부");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","10",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("증빙정보 입력");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf","158",null,"69","27",null,"19",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","310",null,"69","27",null,"19",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","234",null,"69","27",null,"19",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfCD_DEPT.form.CDTextBox","value","dsList","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfCD_ACNT.form.CDTextBox","value","dsList","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.rdoTY_SALEBUY","value","dsList","TY_SALEBUY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.mskAM_SUPPLY","value","dsList","AM_SUPPLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.mskAM_VAT","value","dsList","AM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtDS_REM","value","dsList","DS_REM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ccboTY_VENDOR","value","dsList","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ccfCD_VENDOR.form.CDTextBox","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtNO_SJC","value","dsList","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ccfNO_CREDIT.form.CDTextBox","value","dsList","NO_CREDIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.chkCK_BONSA","value","dsList","CK_BONSA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.rdoTY_ISSUE","value","dsList","TY_ISSUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ccboTY_VATBGJE","value","dsList","TY_VATBGJE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.mskAM_SERVICE","value","dsList","AM_SERVICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.calDT_PROOF","value","dsList","DT_PROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfCD_PROOF.form.CDTextBox","value","dsList","CD_PROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfCD_DEPT.form.DSTextBox","value","dsList","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ccfCD_ACNT.form.DSTextBox","value","dsList","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.ccfCD_VENDOR.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.ccfCD_PROOF.form.DSTextBox","value","dsList","DS_PROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.txtNO_CREDIT","value","dsList","NO_CREDIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.ccfNO_CREDIT.form.DSTextBox","value","dsList","DS_CREDIT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_ISSUEVATDLG.xfdl", function() {
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

        	this.CD_SLIP   = this.getOwnerFrame().P_CD_SLIP;
        	this.NO_VAT    = this.getOwnerFrame().P_NO_VAT;
        	this.IUD_FLAG  = this.getOwnerFrame().P_IUD_FLAG;
        	this.GUBUN     = this.getOwnerFrame().P_GUBUN;
        	this.YN_VAT    = this.getOwnerFrame().P_YN_VAT;
        	this.YN_APPR   = this.getOwnerFrame().P_YN_APPR;

        	trace("넘어온 부가세번호 NO_VAT :: "+this.NO_VAT);
        	trace("넘어온 구분 GUBUN :: "+this.GUBUN);
        	trace("넘어온 구분 IUD_FLAG :: "+this.IUD_FLAG);
        	trace("넘어온 승인여부 YN_APPR :: "+this.YN_APPR);
        	trace("넘어온 파일구분 FILE_DIR :: "+this.getOwnerFrame().P_FILE_DIR);
        	trace("넘어온 귀속부서 P_CD_DEPT :: "+this.getOwnerFrame().P_CD_DEPT);
        	trace("넘어온 귀속부서 P_DS_DEPT :: "+this.getOwnerFrame().P_DS_DEPT);

        	trace("넘어온 증빙코드 P_CD_PROOF :: "+this.getOwnerFrame().P_CD_PROOF);

        	trace("넘어온 매입귀속부서 CD_DEPT_BUY :: "+this.getOwnerFrame().CD_DEPT_BUY);
        	trace("넘어온 매입귀속부서 DS_DEPT_BUY :: "+this.getOwnerFrame().DS_DEPT_BUY);

        	trace("넘어온 본사귀속부서 CD_DEPT_ACNT_BON :: "+this.getOwnerFrame().CD_DEPT_ACNT_BON);
        	trace("넘어온 본사귀속부서 DS_DEPT_ACNT_BON :: "+this.getOwnerFrame().DS_DEPT_ACNT_BON);

        	//trace("넘어온 결재상태 코드 CD_APP :: "+this.getOwnerFrame().P_CD_APP);	// 결재코드(구버젼 사용안함)
        	trace("넘어온 결재상태 코드 ST_APRV :: "+this.getOwnerFrame().P_ST_APRV);	// 결재코드

        	trace("넘어온 카드번호 NO_CREDIT :: "+this.getOwnerFrame().NO_CREDIT);

        	trace("넘어온 차대변구분 TY_CRDR :: "+this.getOwnerFrame().TY_CRDR);
        	trace("넘어온 회계일자 DT_ACCOUNT :: "+this.getOwnerFrame().DT_ACCOUNT);

        	trace("넘어온 계정코드 CD_ACCOUNT :: "+this.getOwnerFrame().CD_ACCOUNT);

        	trace("넘어온 집행통화 CD_EXEC_CURR :: "+this.getOwnerFrame().CD_EXEC_CURR);
        	trace("넘어온 로컬통화 CD_LOCAL_CURR :: "+this.getOwnerFrame().CD_LOCAL_CURR);

        	this.calDT_ACCOUNT.set_value( this.getOwnerFrame().DT_ACCOUNT);


        	// 발행구분 전자발행 기본값
        	this.rdoTY_ISSUE.set_index(0);

        	//부가관리에서 호출시 조회 처리
        	if(this.GUBUN == "VATCONTROL"){
        		this.fnSelect();

        		this.btnConf.set_visible(false);	//확인버튼 숨기기
        		this.btnDel.set_visible(false);		//삭제버튼 숨기기
        		this.btnCancel.set_left(235);		//취소버튼 가운데
        		this.btnCancel.set_text("닫기");
        	}else{	//전표발행
        		//승인된 전표 또는 조회일 경우
        		if(this.IUD_FLAG == "A" || this.IUD_FLAG == "S"){
        			this.fnSelect();

        			this.btnConf.set_visible(false);	//확인버튼 숨기기
        			this.btnDel.set_visible(false);		//삭제버튼 숨기기
        			this.btnCancel.set_left(235);		//닫기버튼 가운데

        			this.btnCancel.set_text("닫기");

        		}else{
        			if(this.gfnIsNull(this.getOwnerFrame().CD_PROOF)){
        				this.btnDel.set_visible(false);		//삭제버튼 숨기기
        				this.btnConf.set_left(190);			//확인버튼
        				this.btnCancel.set_left(265);		//닫기버튼
        			}

        			//파라미터 데이터 셋팅
        			this.fnSetParamData();
        		}
        	}

        	//파일 조회
        	this.fnFileSelect();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

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

        	this.ccfCD_DEPT = this.divData.form.ccfCD_DEPT;
        	this.ccfCD_ACNT = this.divData.form.ccfCD_ACNT;
        	this.ccfCD_VENDOR = this.divData.form.ccfCD_VENDOR;
        	this.ccfCD_PROOF =  this.divData.form.ccfCD_PROOF;	//증빙선택
        	this.rdoTY_SALEBUY  =  this.divData.form.rdoTY_SALEBUY;

        	this.ccboTY_VATBGJE =  this.divData.form.ccboTY_VATBGJE;	//불공제 사유

        	this.calDT_PROOF =  this.divData.form.calDT_PROOF;			//증빙일자
        	this.calDT_ACCOUNT =  this.divData.form.calDT_ACCOUNT;		//회계일자

        	this.mskAM_SUPPLY =  this.divData.form.mskAM_SUPPLY;		//공급가액
        	this.mskAM_VAT =  this.divData.form.mskAM_VAT;				//부가세
        	this.mskAM_SERVICE =  this.divData.form.mskAM_SERVICE;		//봉사료

        	this.txtDS_REM =  this.divData.form.txtDS_REM;				//적요
        	this.ccboTY_VENDOR =  this.divData.form.ccboTY_VENDOR;		//거래처구분
        	this.txtNO_SJC =  this.divData.form.txtNO_SJC;				//사업자번호

        	this.ccfNO_CREDIT =  this.divData.form.ccfNO_CREDIT;		//신용카드
        	//this.chkCK_OMIT =  this.divData.form.chkCK_OMIT;			//체크필드(누락여부)
        	this.chkCK_BONSA =  this.divData.form.chkCK_BONSA;			//본사매출여부
        	this.rdoTY_ISSUE =  this.divData.form.rdoTY_ISSUE;			//발행구분

        	this.staNO_CREDIT = this.divData.form.staNO_CREDIT;		//카드번호 라벨
        	this.txtNO_CREDIT = this.divData.form.txtNO_CREDIT;		//카드번호(현금영수증)

        	this.btnFile = this.divData.form.btnFile;
        	this.txtFILE = this.divData.form.txtFILE;		//파일

        	this.vDeleteFlag = false;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//발의부서
         	this.ccfCD_DEPT.CodeFindName = "DHX_CFACNTUNIT";
         	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//계정코드
         	this.ccfCD_ACNT.CodeFindName = "DHX_CFACCOUNT";
         	this.ccfCD_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//증빙선택
         	//this.ccfCD_PROOF.CodeFindName = "CF_CODE_DH_V10";
        	this.ccfCD_PROOF.CodeFindName = "DHX_COMMON_CODEFIND_SELECT";
         	this.ccfCD_PROOF.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_PROOF.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//거래처
         	this.ccfCD_VENDOR.CodeFindName = "DHX_CFETC_CODEFIND";
         	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//신용카드
         	this.ccfNO_CREDIT.CodeFindName = "DFX_CFCARD_CODEFIND";
         	this.ccfNO_CREDIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_VAT", "string");

        	//데이터셋 컬럼 셋팅
        	this.dsList.addColumn("IN_CD_SLIP", "string");
         	this.dsList.addColumn("NO_VAT", "string");
         	this.dsList.addColumn("CD_DEPT_ACNT", "string");
        	this.dsList.addColumn("DS_DEPT_ACNT", "string");
        	this.dsList.addColumn("TY_SALEBUY", "string");
        	this.dsList.addColumn("CD_PROOF", "string");
        	this.dsList.addColumn("DS_PROOF", "string");
        	this.dsList.addColumn("TY_VATBGJE", "string");
        	this.dsList.addColumn("CD_ACCOUNT", "string");
        	this.dsList.addColumn("DS_ACCOUNT", "string");
        	this.dsList.addColumn("TY_VENDOR", "string");
        	this.dsList.addColumn("CD_VENDOR", "string");
        	this.dsList.addColumn("DS_VENDOR", "string");
        	this.dsList.addColumn("AM_SUPPLY", "BIGDECIMAL");
        	this.dsList.addColumn("AM_VAT", "BIGDECIMAL");
        	this.dsList.addColumn("AM_SERVICE", "BIGDECIMAL");
        	this.dsList.addColumn("NO_CREDIT", "string");
        	this.dsList.addColumn("DS_CREDIT", "string");
        	this.dsList.addColumn("DT_PROOF", "string");
        	this.dsList.addColumn("DS_REM", "string");
        	this.dsList.addColumn("CK_OMIT", "string");
        	this.dsList.addColumn("NO_SJC", "string");
        	this.dsList.addColumn("TY_ISSUE", "string");
        	this.dsList.addColumn("VAT_RATE", "BIGDECIMAL");
        	this.dsList.addColumn("YN_VATBGJE", "string");
        	this.dsList.addColumn("FILE_DIR", "string");
        	this.dsList.addColumn("CD_DEPT_ACNT_BON", "string");
        	this.dsList.addColumn("DS_DEPT_ACNT_BON", "string");
        	this.dsList.addColumn("CK_BONSA", "string");

        	this.dsResult = new Dataset();	//리턴용 데이터셋
        	this.dsResult.addColumn("CD_VATDEPT_ACNT", "string");	//발의부서
        	this.dsResult.addColumn("CD_VATACCOUNT", "string");		//계정
        	this.dsResult.addColumn("TY_SALEBUY", "string");		//거래구분
        	this.dsResult.addColumn("CD_PROOF", "string");			//증빙코드
        	this.dsResult.addColumn("DS_PROOF", "string");			//증빙코드명
        	this.dsResult.addColumn("TY_VATBGJE", "string");		//불공제사유
        	this.dsResult.addColumn("CD_VATVENDOR", "string");		//거래처코드
        	this.dsResult.addColumn("DS_VATVENDOR", "string");		//거래처명
        	this.dsResult.addColumn("TY_VATVENDOR", "string");		//거래처구분
        	this.dsResult.addColumn("AM_SUPPLY", "BIGDECIMAL");		//공급가액
        	this.dsResult.addColumn("AM_VAT", "BIGDECIMAL");		//부가세
        	this.dsResult.addColumn("AM_SERVICE", "BIGDECIMAL");	//봉사료
        	this.dsResult.addColumn("DT_PROOF", "string");			//증빙일자
        	this.dsResult.addColumn("NO_CREDIT", "string");			//카드번호
        	this.dsResult.addColumn("DS_VATREM", "string");			//적요
        	this.dsResult.addColumn("CK_OMIT", "string");			//누락여부
        	this.dsResult.addColumn("TY_ISSUE", "string");			//발행구분
        	this.dsResult.addColumn("NO_VIEW", "string");			//부가세 발행하는 전표의 항번

        	this.dsResult.addColumn("VAT_RATE", "BIGDECIMAL");		//부가세율
        	this.dsResult.addColumn("YN_VATBGJE", "string");		//부가세여부
        	this.dsResult.addColumn("NO_VAT", "string");			//부가세번호
        	this.dsResult.addColumn("FILE_DIR", "string");			//첨부파일 경로

        	this.dsDeleteList = new Dataset();	//파일삭제용 데이터셋
        	this.dsDeleteList.addColumn("filepath", "string");
        	this.dsDeleteList.addColumn("filename", "string");

        	this.dsFileSave = new Dataset();	//파일삭제용 데이터셋
        	this.dsFileSave.addColumn("TY_SAVE", "string");
        	this.dsFileSave.addColumn("CD_GUBUN", "string");
        	this.dsFileSave.addColumn("NO_SEQ", "string");
        	this.dsFileSave.addColumn("CD_REF1", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	this.dsList.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "NO_VAT", this.NO_VAT);     // 부가세번호

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

        }

         /*
         *	입력 버튼
         */
        this.fnAdd = function() {


        }

         /*
         *	저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }
        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;

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
        		if(this.dsList.rowcount > 0){

        			var cdProof = this.dsList.getColumn(0, "CD_PROOF");

        			if(cdProof == "16" || cdProof == "17" || cdProof == "18" || cdProof == "19"){	//신용카드(개인제외)
        				this.ccfNO_CREDIT.set_visible(true);
        				this.txtNO_CREDIT.set_visible(false);
        			}else if(cdProof == "22"){	//현금영수증
        				this.ccfNO_CREDIT.set_visible(false);
        				this.txtNO_CREDIT.set_visible(true);
        			}
        		}
        		//enable 처리
        		this.fnEnableComp();
        	}else if(svcID == "combo"){
        		if(this.dsTY_VATBGJE.rowcount > 0){
        			var nRow = this.dsTY_VATBGJE.insertRow(0);
        			this.dsTY_VATBGJE.setColumn(nRow, "CD_CODE", "");
        			this.dsTY_VATBGJE.setColumn(nRow, "DS_CODE", "선택");
        		}
        	}else if(svcID == "fileSelect"){
        		//trace("saveXML :: "+this.dsFileList.saveXML());

        		if(this.dsFileList.rowcount > 0){
        			if(this.vDeleteFlag){
        				this.fnFileDelete();
        			}else{
        				this.txtFILE.set_value(this.dsFileList.rowcount + " 건");
        			}
        		}
        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	switch(id) {
        		case "ccfCD_VENDOR":	//거래처코드
        			if (arrData.length > 0) {
        				this.dsList.setColumn(this.dsList.rowposition, "NO_SJC", arrData[0]["NO_SJC"]);
        			}
        		break;
        		case "ccfCD_PROOF":	//증빙선택
        			if (arrData.length > 0) {

        				if(this.getOwnerFrame().CD_EXEC_CURR != "KRW"){
        					var tySaleBuy = this.dsList.getColumn(this.dsList.rowposition, "TY_SALEBUY");	//거래구분
        					var chkCdProof = (tySaleBuy == "I") ? "24" : "59";
        					var chkdsProof = (tySaleBuy == "I") ? "기타(24)" : "영수증(59)";
        					/*
        					if(arrData[0]["CD_CODE"] != chkCdProof){
        						alert("집행화 화폐단위 KRW가 아닌경우 "+chkdsProof+" 증빙코드를 선택하세요");
        						this.dsList.setColumn(this.dsList.rowposition, "CD_PROOF", "");
        						this.dsList.setColumn(this.dsList.rowposition, "DS_PROOF", "");

        						return;
        					}
        					*/
        				}

        				var vatRate   = arrData[0]["DS_ETC2"];	//부가세율
        				var ynVatBgje = arrData[0]["DS_ETC3"];	//불공제여부

        				//부가세율
        				this.dsList.setColumn(this.dsList.rowposition, "VAT_RATE", vatRate);
        				//불공제 여부
        				this.dsList.setColumn(this.dsList.rowposition, "YN_VATBGJE", ynVatBgje);

        				//if(vatRate == "0"){
        				if(vatRate == "0" || (this.getOwnerFrame().CD_EXEC_CURR != "KRW" )){
        					this.mskAM_VAT.set_enable(false);
        				}else{
        					this.mskAM_VAT.set_enable(true);
        				}

        				//전자세금계산서일 경우
        				if(!this.gfnIsNull(this.getOwnerFrame().P_ISSUE_ID)){
        					this.mskAM_VAT.set_enable(false);	//부가세수정불가
        				}

        				this.ccboTY_VATBGJE.set_enable(false);
        				//불공제 사유
        				this.dsList.setColumn(this.dsList.rowposition, "TY_VATBGJE", "");
        				if(ynVatBgje == "Y"){	//세금계산서(매입세액불공제), 신용카드(매입세액불공제)
        					this.ccboTY_VATBGJE.set_enable(true);
        					this.ccboTY_VATBGJE.set_index(0);
        				}

        				//전자세금계산서가 아닐경우
        				if(this.gfnIsNull(this.getOwnerFrame().P_ISSUE_ID)){
        					//부가세 계산
        					this.fnVatCal(nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_SUPPLY"),0));
        				}

        				this.txtNO_CREDIT.set_value("");
        				//코드파인더 클리어
        				this.ccfNO_CREDIT.form.fnCodeFindClear();
        				//카드 셋팅
        				this.fnCreditSetting();

        			}
        		break;
        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id) {
        		case "ccfCD_ACNT":	//계정코드
        			dsUserParam.setColumn(nrow, "YN_SLIP", "Y");
        		break;
        		case "ccfCD_DEPT":		//귀속부서

        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");			//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");			//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, this.getOwnerFrame().CD_CORP);		//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");			//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");			//현장/본사여부

        		break;
        		/*
        		case "CF_CODE_DH_V10":		//증빙선택 - 사용안함
        			var tySaleBuy = this.dsList.getColumn(this.dsList.rowposition, "TY_SALEBUY");	//거래구분

        			trace("## tySaleBuy :: "+tySaleBuy);

        			var cdType = "V10";	//매입
        			if(tySaleBuy == "O"){
        				cdType = "V11";	//매입
        			}else if(tySaleBuy == "Z"){
        				cdType = "V12";	//매입
        			}

        			dsUserParam.setColumn(nrow, "CD_SYSTEM"	, "DH");						//시스템코드
        			dsUserParam.setColumn(nrow, "CD_TYPE"	, cdType);						//공통분류코드
        		break;
        		*/

        		case "ccfCD_PROOF" :
        			var tySaleBuy = this.dsList.getColumn(this.dsList.rowposition, "TY_SALEBUY");	//거래구분

        			trace("## 코드파인더 tySaleBuy :: "+tySaleBuy);

        			dsUserParam.setColumn(nrow, "DS_ETC1" , (tySaleBuy == "I" ? "VAT" : ""));
        			dsUserParam.setColumn(nrow, "CD_SYSTEM"	, "DH");						//시스템코드
        			dsUserParam.setColumn(nrow, "CD_TYPE"	, (tySaleBuy == "I" ? "V10" : "V11"));		//공통분류코드
        		break;

        		case "ccfCD_VENDOR":	//거래처
        			dsUserParam.setColumn(nrow, "TY_VENDOR"   , this.ccboTY_VENDOR.value);
        			dsUserParam.setColumn(nrow, "CD_VENDOR"   , "");
        			dsUserParam.setColumn(nrow, "CD_CORP" 	  , this.getOwnerFrame().CD_CORP);

        		break;
        		case "ccfNO_CREDIT":	//신용카드
        			dsUserParam.setColumn(nrow, "CD_DEPT"     , "");
        			dsUserParam.setColumn(nrow, "CD_SUABUN"   , "");
        			dsUserParam.setColumn(nrow, "CD_CORP" 	  , this.getOwnerFrame().CD_CORP);
        		break;
        	}

        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         //그리드 값변경 이벤트
        this.dsList_ColumnChanged = function(obj, e)
        {
        	trace("그리드 값변경 이벤트 columnid :: " +e.columnid + " / newvalue :: "+e.newvalue);

        	if(e.columnid == "TY_SALEBUY"){	//거래구분

        		//증빙선택 코드파인더 셋팅
        		//this.fnSetCodeFind(e.newvalue);

        		//코드파인더 클리어
        		this.ccfCD_PROOF.form.fnCodeFindClear();

        		//불공제사유 초기화
        		obj.setColumn(e.row, "TY_VATBGJE", "");

        		if(e.newvalue == "I"){	//매입
        			this.chkCK_BONSA.set_enable(false);
        			obj.setColumn(e.row, "CK_BONSA", "N");	//본사매출여부 초기화
        		}else{	//매출
        			this.chkCK_BONSA.set_enable(true);
        		}

        		if(e.newvalue == "I"){	//매입
        			if(!this.gfnIsNull(this.getOwnerFrame().CD_DEPT_BUY)){
        				this.ccfCD_DEPT.form.CDTextBox.set_value(this.getOwnerFrame().CD_DEPT_BUY);
        				this.ccfCD_DEPT.form.DSTextBox.set_value(this.getOwnerFrame().DS_DEPT_BUY);
        			}else{
        				this.ccfCD_DEPT.form.CDTextBox.set_value(this.getOwnerFrame().P_CD_DEPT);
        				this.ccfCD_DEPT.form.DSTextBox.set_value(this.getOwnerFrame().P_DS_DEPT);
        			}
        		}else{
        			if(obj.getColumn(e.row, "CK_BONSA") == "Y"){
        				this.ccfCD_DEPT.form.CDTextBox.set_value(this.getOwnerFrame().CD_DEPT_ACNT_BON);
        				this.ccfCD_DEPT.form.DSTextBox.set_value(this.getOwnerFrame().DS_DEPT_ACNT_BON);
        			}else{
        				this.ccfCD_DEPT.form.CDTextBox.set_value(this.getOwnerFrame().P_CD_DEPT);
        				this.ccfCD_DEPT.form.DSTextBox.set_value(this.getOwnerFrame().P_DS_DEPT);
        			}
        			obj.setColumn(e.row, "TY_ISSUE", "E");	// 발행구분 대변일때 E전자발행, 수정불가
        		}

        		this.rdoTY_ISSUE.set_enable((e.newvalue == "I")?true:false);			//발행구분
        	}

        	if(e.columnid == "AM_SUPPLY"){	//공급가
        		this.fnVatCal(nexacro.toNumber(e.newvalue, 0));
        	}

        	if(e.columnid == "CK_BONSA"){	//본사매출여부
        		if(obj.getColumn(e.row, "TY_SALEBUY") == "O"){	//거래구분이 매출일 경우
        			if(e.newvalue == "Y"){	//체크할경우
        				this.ccfCD_DEPT.form.CDTextBox.set_value(this.getOwnerFrame().CD_DEPT_ACNT_BON);
        				this.ccfCD_DEPT.form.DSTextBox.set_value(this.getOwnerFrame().DS_DEPT_ACNT_BON);
        			}else{
        				this.ccfCD_DEPT.form.CDTextBox.set_value(this.getOwnerFrame().P_CD_DEPT);
        				this.ccfCD_DEPT.form.DSTextBox.set_value(this.getOwnerFrame().P_DS_DEPT);
        			}
        		}
        	}

        	if(e.columnid == "DT_PROOF"){	//증빙일자
        		if(e.newvalue != e.oldvalue && !this.gfnIsNull(e.oldvalue)){
        			var DT_PROOF = e.newvalue;
        			var DT_ACCOUNT = this.calDT_ACCOUNT.value;
        			var DS_ALERT_MSG = (DT_ACCOUNT.substring(0, 6) != DT_PROOF.substring(0, 6)) ? "[증빙월차이] " : "";
        			var DS_REM = this.dsList.getColumn(this.dsList.rowposition, "DS_REM");
        			if(DS_REM.substring(0, 8) == "[증빙월차이] "){
        				DS_REM = DS_REM.substring(8, DS_REM.toString().length);
        			}
        			this.dsList.setColumn(this.dsList.rowposition, "DS_REM", DS_ALERT_MSG + DS_REM);
        		}
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //취소버튼 클릭
        this.btnCancel_onclick = function(obj,e)
        {
        	//임시파일 업로드 여부 체크
        /*	if(this.fnFileCheck()){
        		this.vDeleteFlag = true;
        		this.fnFileSelect();	//첨부파일 조회해서 삭제 처리
        		return false;
        	}*/

        	this.getParentContext().close();
        };

        //확인버튼 클릭
        this.btnConf_onclick = function(obj,e)
        {
        	if(!this.fnCheckResultData()) return;

        	var rPos = this.dsList.rowposition;

        	this.dsResult.clearData();

        	var nRow = this.dsResult.addRow();

        	this.dsResult.set_enableevent(false);

        	var tySaleBuy  = this.dsList.getColumn(rPos, "TY_SALEBUY");		//거래구분
        	var cdProof    = this.dsList.getColumn(rPos, "CD_PROOF");		//증빙선택

        	var noCredit = "";
        	//거래구분이 매입일경우
        	if(tySaleBuy == "I"){
        		if(cdProof == "16" || cdProof == "17" || cdProof == "18" || cdProof == "19"){	//신용카드(개인제외)
        			noCredit = this.ccfNO_CREDIT.form.CDTextBox.value;
        		}else if(cdProof == "22"){	//현금영수증
        			noCredit = this.txtNO_CREDIT.value;
        		}
        	}

        	this.dsResult.setColumn(nRow, "NO_CREDIT", noCredit);	//카드번호

        	var cdDeptAcnt = this.ccfCD_DEPT.form.CDTextBox.value + "|" + this.ccfCD_DEPT.form.DSTextBox.value;
        	this.dsResult.setColumn(nRow, "CD_VATDEPT_ACNT", cdDeptAcnt);	//발의부서

        	var cdAccount = this.ccfCD_ACNT.form.CDTextBox.value + "|" + this.ccfCD_ACNT.form.DSTextBox.value;
        	this.dsResult.setColumn(nRow, "CD_VATACCOUNT", cdAccount);	//계정코드

        	var cdVendor = this.ccfCD_VENDOR.form.CDTextBox.value;
        	var dsVendor = this.ccfCD_VENDOR.form.DSTextBox.value;
        	var tyVendor = this.dsList.getColumn(rPos, "TY_VENDOR");
        	this.dsResult.setColumn(nRow, "CD_VATVENDOR", cdVendor);	//거래처코드
        	this.dsResult.setColumn(nRow, "DS_VATVENDOR", dsVendor);	//거래처명
        	this.dsResult.setColumn(nRow, "TY_VATVENDOR", tyVendor);	//거래처구분

        	this.dsResult.setColumn(nRow, "TY_SALEBUY"	, tySaleBuy);	//거래구분
        	this.dsResult.setColumn(nRow, "CD_PROOF"	, this.dsList.getColumn(rPos, "CD_PROOF"));		//증빙코드
        	this.dsResult.setColumn(nRow, "DS_PROOF"	, this.dsList.getColumn(rPos, "DS_PROOF"));		//증빙코드명
        	this.dsResult.setColumn(nRow, "TY_VATBGJE"	, this.dsList.getColumn(rPos, "TY_VATBGJE"));	//불공제사유
        	this.dsResult.setColumn(nRow, "AM_SUPPLY"	, this.dsList.getColumn(rPos, "AM_SUPPLY"));	//공급가액
        	this.dsResult.setColumn(nRow, "AM_VAT"   	, this.dsList.getColumn(rPos, "AM_VAT"));		//부가세액
        	this.dsResult.setColumn(nRow, "AM_SERVICE"  , this.dsList.getColumn(rPos, "AM_SERVICE"));	//봉사료
        	this.dsResult.setColumn(nRow, "DT_PROOF"    , this.dsList.getColumn(rPos, "DT_PROOF"));		//증빙일자
        	this.dsResult.setColumn(nRow, "DS_VATREM"   , this.dsList.getColumn(rPos, "DS_REM"));		//비고
        	this.dsResult.setColumn(nRow, "CK_OMIT"     , this.dsList.getColumn(rPos, "CK_OMIT"));		//누락여부
        	this.dsResult.setColumn(nRow, "TY_ISSUE"    , this.dsList.getColumn(rPos, "TY_ISSUE"));		//발행구분

        	this.dsResult.setColumn(nRow, "VAT_RATE"    , this.dsList.getColumn(rPos, "VAT_RATE"));		//부가세율
        	this.dsResult.setColumn(nRow, "YN_VATBGJE"  , this.dsList.getColumn(rPos, "YN_VATBGJE"));	//불공제여부

        	this.dsResult.setColumn(nRow, "NO_VIEW"     , this.getOwnerFrame().P_NO_VIEW);		//발행하는 전표의 항번

        	this.dsResult.setColumn(nRow, "NO_VAT"     , this.NO_VAT);
        	this.dsResult.setColumn(nRow, "FILE_DIR"   , this.dsList.getColumn(rPos, "FILE_DIR"));	//첨부파일경로


        	trace("########### 확인버튼 P_NO_VIEW :: "+this.getOwnerFrame().P_NO_VIEW);

        	this.dsResult.set_enableevent(true);

        	//팝업 닫기 처리
        	this.getParentContext().close(this.dsResult.saveXML());
        };


        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        //거래구분 변경
        // this.fnChangeTY_SALEBUY = function(val)
        // {
        // 	var cdProof = this.dsList.getColumn(this.dsList.rowposition, "CD_PROOF");
        //
        // 	this.fnSetCodeFind(val);
        // }

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE"  , "string");

        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(0, "CD_TYPE"  , "V01");

        	this.dsCombo2.addRow();
        	this.dsCombo2.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsCombo2.setColumn(0, "CD_TYPE", "A02");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo combo2=dsCombo2";
        	var outData     = "dsTY_VATBGJE=combo0 dsTY_VENDOR=combo20";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,
        						false); // 통신방법 정의 [생략가능]
        };

        //파라미터 데이터 셋팅
        this.fnSetParamData = function ()
        {
        	trace("IUD_FLAG ::: "+this.IUD_FLAG);

        	//전표발행에서 호출했을 경우
        	if(this.GUBUN == "SLIP"){

        		var nRow = this.dsList.addRow();

        		//귀속부서
        		//this.ccfCD_DEPT.form.CDTextBox.set_value(this.getOwnerFrame().CD_DEPT);
        		//this.ccfCD_DEPT.form.DSTextBox.set_value(this.getOwnerFrame().DS_DEPT);

        		//계정코드
        		this.ccfCD_ACNT.form.CDTextBox.set_value(this.getOwnerFrame().CD_ACCOUNT);
        		this.ccfCD_ACNT.form.DSTextBox.set_value(this.getOwnerFrame().DS_ACCOUNT);

        		//거래처
        		this.ccfCD_VENDOR.form.CDTextBox.set_value(this.getOwnerFrame().CD_VENDOR);
        		this.ccfCD_VENDOR.form.DSTextBox.set_value(this.getOwnerFrame().DS_VENDOR);

        		trace(" 부가세 팝업 파라미터 TY_SALEBUY :: "+this.getOwnerFrame().TY_SALEBUY);

        		this.dsList.setColumn(nRow, "TY_SALEBUY", this.getOwnerFrame().TY_SALEBUY);	//거래구분
        		this.dsList.setColumn(nRow, "DS_REM"	, this.getOwnerFrame().DS_REM);			//비고
        		this.dsList.setColumn(nRow, "DT_PROOF"	, this.getOwnerFrame().DT_PROOF);		//회계일자(증빙일자)
        		this.dsList.setColumn(nRow, "DT_ACCOUNT", this.getOwnerFrame().DT_ACCOUNT);	//회계일자
        		this.dsList.setColumn(nRow, "TY_VENDOR"	, this.getOwnerFrame().TY_VENDOR);		//거래처구분
        		this.dsList.setColumn(nRow, "NO_SJC"	, this.getOwnerFrame().NO_SJC);			//사업자번호
        		this.dsList.setColumn(nRow, "AM_SUPPLY"	, this.getOwnerFrame().AM_SUPPLY);		//금액

        		if(this.getOwnerFrame().TY_SALEBUY == "O"){	//거래구분이 매출일 경우
        			if(this.getOwnerFrame().CD_DEPT_ACNT_BON == this.getOwnerFrame().CD_DEPT){	//본사귀속부서코드,귀속부서 코드가 같을경우
        				this.dsList.setColumn(nRow, "CK_BONSA"	, "Y");
        			}
        		}else{
        			//귀속부서
        			this.ccfCD_DEPT.form.CDTextBox.set_value(this.getOwnerFrame().CD_DEPT);
        			this.ccfCD_DEPT.form.DSTextBox.set_value(this.getOwnerFrame().DS_DEPT);
        		}

        		var amVat = 0;
        		if(this.gfnIsNull(this.getOwnerFrame().TY_SALEBUY)){	//처음 부가세 팝업 띄었을 경우 기본 10프로
        			var amSupply = nexacro.toNumber(this.getOwnerFrame().AM_SUPPLY,0);
        			amVat = nexacro.round(amSupply / 10, 0);
        		}else{
        			amVat = this.getOwnerFrame().AM_VAT;
        		}

        		trace("### 부가세팝업 부가세금액 :: "+this.getOwnerFrame().AM_VAT);
        		trace("### 부가세팝업 부가세율 :: "+this.getOwnerFrame().VAT_RATE);
        		trace("### 부가세팝업 amVat :: "+amVat);

        		var sSaleBuy = (this.getOwnerFrame().TY_CRDR == "C") ? "O" : "I";// (대변->매출)
        		trace("TY_SALEBUY 수정 함 대변이면 매출->" + sSaleBuy);
        		this.dsList.setColumn(nRow, "TY_SALEBUY"	, sSaleBuy);

        		var tyIssue = this.getOwnerFrame().TY_ISSUE;
        		var ckOmit  = this.getOwnerFrame().CK_OMIT;
        		this.dsList.setColumn(nRow, "AM_VAT"	, amVat);										//부가세
        		//this.dsList.setColumn(nRow, "TY_ISSUE"	, (this.gfnIsNull(tyIssue) ? "P" : tyIssue));	//발행구분(E:전자발행|P:일반발행)
        		this.dsList.setColumn(nRow, "TY_ISSUE"	, (this.getOwnerFrame().TY_CRDR == "C") ? "E" : (this.gfnIsNull(tyIssue) ? "P" : tyIssue));	//발행구분(E:전자발행|P:일반발행)
        		this.dsList.setColumn(nRow, "CK_OMIT"	, (this.gfnIsNull(ckOmit)  ? "N" : ckOmit));	//누락여부
        		this.dsList.setColumn(nRow, "VAT_RATE"	, this.getOwnerFrame().VAT_RATE);				//부가세율

        		var fileDir = "";
        		if(this.gfnIsNull(this.CD_SLIP)){
        			fileDir = this.getOwnerFrame().P_FILE_DIR;
        		}else{
        			fileDir = this.CD_SLIP;
        		}
        		this.dsList.setColumn(nRow, "FILE_DIR"	, fileDir);				//첨부파일 경로

        		//컴포넌트 셋팅
        		this.fnCompSetting();

        		trace("@@@ 증빙선택 코드 :: "+this.getOwnerFrame().CD_PROOF);
        		trace("@@@ 증빙선택 명 :: "+this.getOwnerFrame().DS_PROOF);

        		if(!this.gfnIsNull(this.getOwnerFrame().CD_PROOF)){
        			//증빙선택
        			this.ccfCD_PROOF.form.CDTextBox.set_value(this.getOwnerFrame().CD_PROOF);
        			this.ccfCD_PROOF.form.DSTextBox.set_value(this.getOwnerFrame().DS_PROOF);

        			if(this.getOwnerFrame().YN_VATBGJE == "Y"){	//세금계산서(매입세액불공제), 신용카드(매입세액불공제)
        				this.ccboTY_VATBGJE.set_enable(true);
        			}else{
        				this.ccboTY_VATBGJE.set_enable(false);
        			}
        		}

        		//카드셋팅
        		this.fnCreditSetting();

        		//불공제사유
        		this.ccboTY_VATBGJE.set_value(this.getOwnerFrame().TY_VATBGJE);

        		if(!this.gfnIsNull(this.getOwnerFrame().NO_CREDIT)){
        			//신용카드일때
        			if(this.getOwnerFrame().CD_PROOF == "16" || this.getOwnerFrame().CD_PROOF == "17" || this.getOwnerFrame().CD_PROOF == "18" || this.getOwnerFrame().CD_PROOF == "19"){
        				this.ccfNO_CREDIT.form.CDTextBox.set_value(this.getOwnerFrame().NO_CREDIT);
        				//카드번호 코드파인더 실행
        				this.ccfNO_CREDIT.form.CDTextBox_onchanged(this.ccfNO_CREDIT.form.CDTextBox, nexacro.ChangeEventInfo);
        			}

        			//현금영수증일때
        			if(this.getOwnerFrame().CD_PROOF == "22"){
        				this.txtNO_CREDIT.set_value(this.getOwnerFrame().NO_CREDIT);
        			}
        		}

        		//enable 처리
        		this.fnEnableComp();
        	}
        };

        //증빙선택 코드파인더 셋팅
        this.fnSetCodeFind = function (tySaleBuy)
        {
        	var cdType = "V10";	//매입
        	if(tySaleBuy == "O"){
        		cdType = "V11";	//매입
        	}

        	this.ccfCD_PROOF.CodeFindName = "CF_CODE_DH_"+cdType;
        };

        //컴포넌트 셋팅
        this.fnCompSetting = function ()
        {
        	var tySaleBuy = this.dsList.getColumn(this.dsList.rowposition, "TY_SALEBUY");	//거래구분

        	//증빙선택 코드파인더 셋팅
        	//this.fnSetCodeFind(tySaleBuy);

        	var ynVatBgje = this.dsList.getColumn(this.dsList.rowposition, "YN_VATBGJE");

        	this.ccboTY_VATBGJE.set_enable(false);
        	if(ynVatBgje == "Y"){
        		this.ccboTY_VATBGJE.set_enable(true);
        	}

        };

        //데이터 체크
        this.fnCheckResultData = function ()
        {
        	var rPos = this.dsList.rowposition;
        	if(this.gfnIsNull(this.dsList.getColumn(rPos, "CD_DEPT_ACNT"))){
        		this.gfnAlert("발의부서를 입력하세요.");
        		this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(rPos, "CD_ACCOUNT"))){
        		this.gfnAlert("계정코드를 입력하세요.");
        		this.ccfCD_ACNT.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(rPos, "CD_PROOF"))){
        		this.gfnAlert("증빙선택을 입력하세요.");
        		this.ccfCD_PROOF.form.CDTextBox.setFocus();
        		return false;
        	}

        	var cdProof = this.dsList.getColumn(rPos, "CD_PROOF");

        	if(cdProof == "13" || cdProof == "19"){
        		if(this.gfnIsNull(this.dsList.getColumn(rPos, "TY_VATBGJE"))){
        			this.gfnAlert("불공제사유를 선택하세요.");
        			this.ccboTY_VATBGJE.setFocus();
        			return false;
        		}
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(rPos, "DT_PROOF"))){
        		this.gfnAlert("증빙일자을 입력하세요.");
        		this.calDT_PROOF.setFocus();
        		return false;
        	}

        	if(nexacro.toNumber(this.dsList.getColumn(rPos, "AM_SUPPLY"), 0) == 0){
        		this.gfnAlert("공급가액을 입력하세요.");
        		this.mskAM_SUPPLY.setFocus();
        		return false;
        	}

        	var tySaleBuy  = this.dsList.getColumn(rPos, "TY_SALEBUY");		//거래구분
        	var cdProof = this.dsList.getColumn(rPos, "CD_PROOF");	//증빙선택


        	if(!this.gfnIsNull(this.getOwnerFrame().P_ISSUE_ID)){
        		if(cdProof == "16" || cdProof == "17" || cdProof == "18" || cdProof == "19" ||
        		   cdProof == "20" || cdProof == "21" || cdProof == "22" || cdProof == "23" || cdProof == "24" || cdProof == "25"){
        		   this.gfnAlert("전자세금계산서는 세금계산서 증빙코드를 선택해야 합니다.");
        			this.ccfCD_PROOF.form.CDTextBox.setFocus();
        			return false;
        		}
        	}

        	var vatRate = nexacro.toNumber(this.dsList.getColumn(rPos, "VAT_RATE") ,0);
        	if(vatRate > 0){
        		if(nexacro.toNumber(this.dsList.getColumn(rPos, "AM_VAT"), 0) == 0){
        			if (!confirm("선택된 증빙이 부가세액 입력항목입니다.\n\n부가세를 \"0\"으로 처리하시겠습니까 ?")) {
        				this.mskAM_VAT.setFocus();
        				return false;
        			}
        		}
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(rPos, "DS_REM"))){
        		this.gfnAlert("적요를 입력하세요.");
        		this.txtDS_REM.setFocus();
        		return false;
        	}

        	return true;
        };

        //거래처구분 변경 이벤트
        this.divData_ccboTY_VENDOR_onitemchanged = function(obj,e)
        {
        	//거래처 코드파인더 클리어
        	this.ccfCD_VENDOR.form.fnCodeFindClear();
        	this.dsList.setColumn(this.dsList.rowposition, "NO_SJC", "");	//사업자번호 초기화

        };

        this.fnEnableComp = function()
        {
        	this.ccfCD_DEPT.form.set_readonly(true);	//발의부서
        	this.ccfCD_ACNT.form.set_readonly(true);	//계정
        	this.ccfCD_VENDOR.form.set_readonly(true);	//거래처

        	if(this.GUBUN == "SLIP" && (this.IUD_FLAG == "I" || this.IUD_FLAG == "U")){

        		this.mskAM_SERVICE.set_enable(false);		//봉사료
        		this.btnFile.set_enable(true);				//첨부 버튼

        		if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_PROOF"))){
        			var vatRate = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "VAT_RATE") ,0);	//부가세율
        			if(vatRate == 0){
        				this.mskAM_VAT.set_enable(false);			//부가세
        			}else{
        				this.mskAM_VAT.set_enable(true);			//부가세
        			}
        		}else{
        			this.mskAM_VAT.set_enable(false);			//부가세
        		}
        	}


        	// 집행통화 KRW 일때만 공급가액 수정가능
        	if(this.getOwnerFrame().CD_EXEC_CURR != "KRW"){
        		this.mskAM_SUPPLY.set_enable(false);
        	}else{
        		this.mskAM_SUPPLY.set_enable(true);
        	}

        	//전자세금계산서일경우
        	if(!this.gfnIsNull(this.getOwnerFrame().P_ISSUE_ID)){
        		//this.ccfCD_ACNT.form.set_readonly(false);	//계정
        		this.rdoTY_SALEBUY.set_enable(false);		//거래구분
        		this.rdoTY_ISSUE.set_enable(false);			//발행구분
        		this.calDT_PROOF.set_enable(false);			//증빙일자
        		this.mskAM_SUPPLY.set_enable(false);		//공급가액
        		this.mskAM_VAT.set_enable(false);			//부가세
        		this.btnFile.set_enable(true);				//첨부 버튼
        	}

        	//전표발행에서 호출(전체 비활성 처리)
        	if(this.GUBUN == "SLIP" && (this.IUD_FLAG == "A" || this.IUD_FLAG == "S")){
        		this.gfnSetAllEnable(this.divData.form, false);

        // 		var cdApp = this.getOwnerFrame().P_CD_APP;
        // 		if(!this.gfnIsNull(cdApp)){

        		// 상신상태ST_APRV 공통코드 DZ - DZ_APRV
        		// 1임시저장	2결재상신	3결재중	4결재완료	5반려	6상신취소	7작성취소
         		var stAprv = this.getOwnerFrame().P_ST_APRV;
         		if(!this.gfnIsNull(stAprv)){
        			if(stAprv == "4"){	//결재상태가 결재완료가 아닐경우
        				this.btnFile.set_enable(false);
        			}else{
        				this.btnFile.set_enable(true);
        			}
        		}else{
        			this.btnFile.set_enable(true);
        		}

        		//자동전표일 경우
        		if(!this.gfnIsNull(this.getOwnerFrame().P_CD_AUTOSLIP)){
        			this.btnFile.set_enable(false);
        		}
        	}

        	//부과세관리에서 호출(전체 비활성 처리)
        	if(this.GUBUN == "VATCONTROL"){
        		this.gfnSetAllEnable(this.divData.form, false);
        	}

        	//데이터가 없을경우
        	if(this.dsList.rowcount == 0){
        		this.btnFile.set_enable(false);
        	}
        }

        //부가세 계산
        this.fnVatCal = function (amSupply)
        {
        	trace("부가세 계산 들어온다");

        	var tySaleBuy = this.dsList.getColumn(this.dsList.rowposition, "TY_SALEBUY");	//거래구분
        	var cdProof   = this.dsList.getColumn(this.dsList.rowposition, "CD_PROOF");	//증빙선택
        	//var amSupply  = nexacro.toNumber(this.getOwnerFrame().AM_SUPPLY, 0);	//공급가액
        	var vatRate   = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "VAT_RATE") ,0);	//부가세율
        	var ynVatBgje = this.dsList.getColumn(this.dsList.rowposition, "YN_VATBGJE");	//불공제여부

        // 	if(ynVatBgje == "Y"){
        // 		var calAmSupply = nexacro.round(amSupply / vatRate, 0);
        // 		var amVat = nexacro.floor(amSupply - calAmSupply, 0);
        //
        // 		trace("## 불공제 calAmSupply :: "+calAmSupply);
        // 		trace("## 불공제 amVat :: "+amVat);
        //
        // 		this.dsList.setColumn(this.dsList.rowposition, "AM_SUPPLY", calAmSupply);
        // 		this.dsList.setColumn(this.dsList.rowposition, "AM_VAT", amVat);
        // 	}else {
        		var amVat = (vatRate == 0 ? 0 : this.fnGetTrunc(amSupply / vatRate,1));
        		trace("## else amVat :: "+amVat);

        		this.dsList.setColumn(this.dsList.rowposition, "AM_SUPPLY", amSupply);
        		this.dsList.setColumn(this.dsList.rowposition, "AM_VAT", amVat);
        	//}

        };

        //카드 셋팅
        this.fnCreditSetting = function ()
        {
        	var tySaleBuy = this.dsList.getColumn(this.dsList.rowposition, "TY_SALEBUY");	//거래구분
        	var cdProof   = this.dsList.getColumn(this.dsList.rowposition, "CD_PROOF");	//증빙선택

        	trace("카드셋팅 들어옴!!! ");

        	trace("카드셋팅 tySaleBuy :: "+tySaleBuy);
        	trace("카드셋팅 cdProof :: "+cdProof);

        	if(tySaleBuy == "I"){
        		if(cdProof == "16" || cdProof == "17" || cdProof == "18" || cdProof == "19"){	//신용카드(개인제외)
        			this.staNO_CREDIT.set_text("카드번호");
        			this.ccfNO_CREDIT.set_visible(true);
        			this.txtNO_CREDIT.set_visible(false);
        			this.ccfNO_CREDIT.form.set_readonly(false);

        			trace("카드 코드파인드 리드온리 false !!");
        		}else if(cdProof == "22"){	//현금영수증
        			this.staNO_CREDIT.set_text("현금영수증");
        			this.ccfNO_CREDIT.set_visible(false);
        			this.txtNO_CREDIT.set_visible(true);
        		}else{
        			this.staNO_CREDIT.set_text("카드번호");
        			this.ccfNO_CREDIT.set_visible(true);
        			this.ccfNO_CREDIT.form.set_readonly(true);
        			this.txtNO_CREDIT.set_visible(false);

        			trace("카드 코드파인드 리드온리 true !!");
        		}
        	}else{
        		this.staNO_CREDIT.set_text("카드번호");
        		this.ccfNO_CREDIT.set_visible(true);
        		this.ccfNO_CREDIT.form.set_readonly(true);
        		this.txtNO_CREDIT.set_visible(false);

        		trace("카드 코드파인드 리드온리 true2 !!");
        	}
        };

        this.btnFile_onclick = function(obj,e)
        {
        	if(!this.gfnIsNull(this.CD_SLIP)){
        		cdDir = this.CD_SLIP;
        	}else{
        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "FILE_DIR"))){
        			cdDir = "TEMP_"+this.gfnGetDate("milli");
        		}else{
        			cdDir = this.dsList.getColumn(this.dsList.rowposition, "FILE_DIR");
        		}
        	}

        	trace("## gfnGetDate :: "+this.gfnGetDate("milli"));

        	trace("## cdDir :: "+cdDir);

        	FileManager = {};
        	FileManager.CD_GUBUN = "DH03";
        	FileManager.CD_DIR = [cdDir];
        	FileManager.IS_READONLY = false;
        	this.gfnFileManager(FileManager, "fnFileCallback");
        };


        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	trace("## val :: "+val);

        	// 파일개수를 다시 셋팅
        	//this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_DIR", "");
        	} else {
        		if(this.gfnIsNull(this.CD_SLIP)){
        			this.dsList.setColumn(this.dsList.rowposition, "FILE_DIR", FileManager.CD_DIR);
        		}
        	}

        	trace("## 첨부파일 건수 :: "+val.Cnt);
        	trace("## FILE_DIR :: "+this.dsList.getColumn(this.dsList.rowposition, "FILE_DIR"));

        	if(val.IsChange){
        		this.txtFILE.set_value(val.Cnt + " 건");
        	}
        	//this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF", "첨부(" + val.Cnt + ")");
        	//this.dsList.set_enableevent(true);
        };

        this.fnClose = function ()
        {
        	//임시파일 업로드 여부 체크
        /*	if(this.fnFileCheck()){
        		this.vDeleteFlag = true;
        		this.fnFileSelect();	//첨부파일 조회해서 삭제 처리
        		return false;
        	}*/
        };

        //임시파일 업로드 여부 체크
        this.fnFileCheck = function ()
        {
        	var mFileDir = this.getOwnerFrame().P_FILE_DIR;
        	if(this.gfnIsNull(mFileDir)){
        		var fileDir = this.dsList.getColumn(this.dsList.rowposition, "FILE_DIR");

        		if(!this.gfnIsNull(fileDir) && fileDir.indexOf("TEMP") > -1){
        			return true;
        		}
        	}
        	return false;
        };

        //파일 조회
        this.fnFileSelect = function ()
        {
        	this.dsFileSelect = new Dataset();
        	this.dsFileSelect.addColumn("CD_GUBUN", "string");
        	this.dsFileSelect.addColumn("CD_REF1", "string");

        	this.dsFileSelect.clearData();
        	this.dsFileSelect.addRow();
        	this.dsFileSelect.setColumn(0, "CD_GUBUN", "DH03");     // 첨부파일 구분

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "FILE_DIR"))){
        		if(this.GUBUN == "VATCONTROL"){
        			this.dsFileSelect.setColumn(0, "CD_REF1", this.CD_SLIP);
        		}else{
        			if(this.IUD_FLAG == "I" || this.IUD_FLAG == "U"){
        				this.dsFileSelect.setColumn(0, "CD_REF1", "ZZZ");		//파일경로 구분
        			}else{
        				this.dsFileSelect.setColumn(0, "CD_REF1", this.CD_SLIP);
        			}
        		}
        	}else{
        		this.dsFileSelect.setColumn(0, "CD_REF1", this.dsList.getColumn(this.dsList.rowposition, "FILE_DIR"));		//파일경로 구분
        	}

        	var strSvcId    = "fileSelect";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "fileSelect=dsFileSelect";
        	var outData     = "dsFileList=fileSelect0";
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

        //파일삭제
        this.fnFileDelete = function ()
        {
        	this.dsDeleteList.clearData();

        	// 체크된 내역에 대해서만 삭제
        	for( var i=0; i<this.dsFileList.rowcount;i++)
        	{
        		var nrow = this.dsDeleteList.addRow();
        		this.dsDeleteList.setColumn(nrow, "filepath", this.dsFileList.getColumn(i, "DS_PATH"));
        		this.dsDeleteList.setColumn(nrow, "filename", this.dsFileList.getColumn(i, "NM_FILE"));
        	}

        	var strSvcId    = "deletefile";
        	var strSvcType  = "file/deleteFile";	//
        	var inProc		= "";
        	var inData      = "input=dsDeleteList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnDeleteCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnDeleteCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "deletefile") {
        		if (errorCode == 0) {
        			this.fnDelete();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "fileDelete") {

        		this.getParentContext().close();
        	}
        }

        this.fnDelete = function() {

        	this.dsFileSave.clearData();

        	var nrow = this.dsFileSave.addRow();
        	this.dsFileSave.setColumn(nrow, "TY_SAVE" , "D");
        	this.dsFileSave.setColumn(nrow, "NO_SEQ"  , "0");
        	this.dsFileSave.setColumn(nrow, "CD_GUBUN", "DH03");
        	this.dsFileSave.setColumn(nrow, "CD_REF1" , this.dsList.getColumn(this.dsList.rowposition, "FILE_DIR"));

        	if (this.dsFileSave.rowcount == 0) return;

        	var strSvcId    = "fileDelete";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "fileDelete=dsFileSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnDeleteCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.btnDel_onclick = function(obj,e)
        {
        	this.getParentContext().close("DEL");
        };
        // 원단위 절사
        this.fnGetTrunc = function(amVal, vCnt){
        	var returnVal = this.gfnNvl(amVal, 0);
        	if(returnVal > 0){
        		returnVal = Math.floor(amVal/vCnt) * vCnt;
        	}else{
        		returnVal = Math.ceil(amVal/vCnt) * vCnt;
        	}
        	return returnVal;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondeactivate",this.form_ondeactivate,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.divData.form.staCD_DEPT.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.rdoTY_SALEBUY.addEventHandler("onitemchanged",this.divData_rdoTY_SALEBUY_onitemchanged,this);
            this.divData.form.ccboTY_VENDOR.addEventHandler("onitemchanged",this.divData_ccboTY_VENDOR_onitemchanged,this);
            this.divData.form.rdoTY_ISSUE.addEventHandler("onitemchanged",this.divData_rdoTY_ISSUE_onitemchanged,this);
            this.divData.form.btnFile.addEventHandler("onclick",this.btnFile_onclick,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
        };
        this.loadIncludeScript("DHA_ISSUEVATDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
