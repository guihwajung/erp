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
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCCPR_ACTUALPROOF_SELET</Col></Row><Row><Col id=\"SP\">DCCPR_ACTUALPROOF_SAVE</Col><Col id=\"TARGET\">save</Col></Row><Row><Col id=\"TARGET\">signSave</Col><Col id=\"SP\">DCCPR_ACTUALPROOF_SIGN_SAVE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCCPR_ACTUALPROOF_DELETE</Col></Row><Row><Col id=\"TARGET\">copy</Col><Col id=\"SP\">DCCPR_ACTUALPROOF_COPY</Col></Row><Row><Col id=\"TARGET\">reWrite</Col><Col id=\"SP\">DCCPR_ACTUALPROOF_REWRITE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo1</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SAVE_01</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DCCPR_ACTUALPROOF_REPORT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"WORKYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"ENO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"REPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListDtl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEDTREQRSNCD", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LICENSE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListDtl2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ACTUALPROOF", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_WORK","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_WORK","staYR_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ctclYR_WORK:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("업체코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFVENDOR_DH");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("FitToContents").set("true");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_APL","ccfCD_VENDOR:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("전자발급번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_FRM","staNO_APL:0.0","10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_APL00","ctxtCD_FRM:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_FRM00","staNO_APL00:0.0","10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData01","0","0",null,"305","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3_00","119","127",null,"30","0",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj.set_text("업체정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","0","staTITLE:10","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("상호명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDS_RDRTR","0","staDS_VENDOR:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("2");
            obj.set_text("대표자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDS_SLPLCLPLC","0","staDS_RDRTR:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("3");
            obj.set_text("본사소재지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_VENDOR:-1","staTITLE:10",null,"30","50%",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg2","staDS_RDRTR:-1","staBg1:-1",null,"30","50%",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg3","staDS_SLPLCLPLC:-1","staBg2:-1",null,"30","50%",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDS_BZCAT","staBg1:-1","staTITLE:10","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("7");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staNO_REG","staBg2:-1","staDS_BZCAT:28","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("8");
            obj.set_text("등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","staBg3:-1","staNO_REG:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("17");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg6","staDS_BZCAT:-1","staTITLE:10",null,"30","0",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg7","staNO_REG:-1","staBg6:-1",null,"30","0",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg8","staNO_TEL:-1","staBg7:-1",null,"30","0",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR","staDS_VENDOR:5","staTITLE:15",null,"20","staDS_BZCAT:5",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtREPNM","staDS_RDRTR:5","edtDS_VENDOR:9",null,"20","staNO_REG:5",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtADDR","staDS_SLPLCLPLC:5","edtREPNM:9",null,"20","staNO_TEL:5",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("15");
            obj.set_readonly("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtCD_LICNO","staNO_REG:5","103",null,"20","5",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtTELNO","staNO_TEL:5","edtCD_LICNO:9",null,"20","5",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDS_SLPLCLPLC00","0","127","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("18");
            obj.set_text("수정요청분류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboEDTREQRSNCD","125","132","169","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsEDTREQRSNCD");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboCD_LICENSE","staDS_BZCAT:5","45","209","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsCD_LICENSE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staNO_REG00","staBg2:-1","69","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("22");
            obj.set_text("세부공종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtCD_LICNO00","staNO_REG00:5","73",null,"20","5",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTY_ACTUALPROOF","0","staDS_SLPLCLPLC00:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("24");
            obj.set_text("실적양식");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgTY_ACTUALPROOF","staTY_ACTUALPROOF:-1","staBg3_00:-1",null,"30","0",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboTY_ACTUALPROOF","staTY_ACTUALPROOF:5","cboEDTREQRSNCD:9","169","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("26");
            obj.set_innerdataset("dsTY_ACTUALPROOF");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDS_VNDRMMO","0","staTY_ACTUALPROOF:-1","120","120",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("27");
            obj.set_text("\r\n수정요청사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg4","119","staBgTY_ACTUALPROOF:-1",null,"120","0",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new TextArea("ctxtCANCELREASON","staDS_VNDRMMO:5","cboTY_ACTUALPROOF:9",null,"115","5",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("29");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("divData02","0","divData01:5",null,null,"0","150",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("0");
            obj.set_text("실적 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staAM_UNIT",null,"5","200","25","5",null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_textDecoration("none");
            obj.set_textAlign("right");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("divData03","0","divData02:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("0");
            obj.set_text("복합 공종 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Static("staAM_UNIT",null,"5","200","25","5",null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_textDecoration("none");
            obj.set_textAlign("right");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","staTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divData03.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYR_WORK.form.TextBox","value","dsSearch","WORKYEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtCD_FRM","value","dsSearch","ENO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divData01.form.edtDS_VENDOR","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData01.form.edtREPNM","value","dsList","REPNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divData01.form.edtCD_LICNO","value","dsList","CD_LICNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divData01.form.edtADDR","value","dsList","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divData01.form.edtTELNO","value","dsList","TELNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtCD_FRM00","value","dsSearch","DS_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divData01.form.cboEDTREQRSNCD","value","dsList","EDTREQRSNCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divData01.form.cboCD_LICENSE","value","dsList","CD_LICENSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData01.form.edtCD_LICNO00","value","dsList","LICCDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divData01.form.ctxtCANCELREASON","value","dsList","CANCELREASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divData01.form.cboTY_ACTUALPROOF","value","dsList","TY_ACTUALPROOF");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCC_ACTUALPROOF.xfdl", function() {
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

        	//this.fnSetCombo();/**/
        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().WORKYEAR) && !this.gfnIsNull(this.getOwnerFrame().CD_VENDOR)
        	&& !this.gfnIsNull(this.getOwnerFrame().ENO_SEQ))
        	{
        		this.dsSearch.setColumn(0, "WORKYEAR", this.getOwnerFrame().WORKYEAR);
        		this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        		this.dsSearch.setColumn(0, "ENO_SEQ", this.getOwnerFrame().ENO_SEQ);
        		this.dsSearch.setColumn(0, "DS_STATUS", this.getOwnerFrame().DS_STATUS);

        		this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.set_value(this.getOwnerFrame().DS_VENDOR);
        		this.divSearch.form.ccfCD_VENDOR.form.fnFitToContents();

        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnReqAgree = this.gfnFormButtonAdd("btnReqAgree", "fnReqAgree");
        	this.btnCopy = this.gfnFormButtonAdd("btnCopy", "fnCopy");
        	this.btnReWrite = this.gfnFormButtonAdd("btnReWrite", "fnReWrite");
        	this.btnOzReport = this.gfnFormButtonAdd("btnOzReport", "fnOzReport");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divData02.form.objGrid;
        	this.dxGridSub = this.divData.form.divData03.form.objGrid2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsListDtl, "DC", "DCC_ACTUALPROOF");
        	this.gfnGridInit(this.dxGridSub, this.dsListDtl2, "DC", "DCC_ACTUALPROOF2");
        };

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "C53");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(1, "CD_TYPE", "C02");

        	this.dsCombo1 = new Dataset();
        	this.dsCombo1.addColumn("CD_SYSTEM", "string");
        	this.dsCombo1.addColumn("CD_TYPE", "string");
        	this.dsCombo1.addColumn("YN_USE", "string");
        	this.dsCombo1.addColumn("YN_MAND", "string");

        	this.dsCombo1.addRow();
        	this.dsCombo1.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo1.setColumn(0, "CD_TYPE", "C54");
        	this.dsCombo1.setColumn(0, "YN_USE", "");
        	this.dsCombo1.setColumn(0, "YN_MAND", "Y");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo combo1=dsCombo1";
        	var outData     = "dsEDTREQRSNCD=combo0 dsCD_LICENSE=combo1 dsTY_ACTUALPROOF=combo10";
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

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ENO_SEQ", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("ENO_SEQ", "string");
        	this.dsSave.addColumn("DS_VENDOR","string");
        	this.dsSave.addColumn("SUPDEPTCD","string");
        	this.dsSave.addColumn("SUPUSERID","string");
        	this.dsSave.addColumn("RESNO","string");
        	this.dsSave.addColumn("PROOFUSERID","string");
        	this.dsSave.addColumn("TRADEUSERID","string");
        	this.dsSave.addColumn("REPNM","string");
        	this.dsSave.addColumn("TELNO","string");
        	this.dsSave.addColumn("ADDR","string");
        	this.dsSave.addColumn("CD_LICCOST","string");
        	this.dsSave.addColumn("CD_LICNO","string");
        	this.dsSave.addColumn("BIZTYPENM","string");
        	this.dsSave.addColumn("PERMORG","string");
        	this.dsSave.addColumn("PERMYMD","string");
        	this.dsSave.addColumn("ETC","string");
        	this.dsSave.addColumn("SEQNUM","string");
        	this.dsSave.addColumn("REPORTNUM","string");
        	this.dsSave.addColumn("REGNUM","string");
        	this.dsSave.addColumn("CONTTYPE","string");
        	this.dsSave.addColumn("TOTCONTAMT","bigint");
        	this.dsSave.addColumn("YEARBEGCONTAMT","bigint");
        	this.dsSave.addColumn("CURYEARCONTAMT","bigint");
        	this.dsSave.addColumn("CURCONNETAMT","bigint");
        	this.dsSave.addColumn("CURYEARACCAMT","bigint");
        	this.dsSave.addColumn("PREYEARACCAMT","bigint");
        	this.dsSave.addColumn("CURYEARACCPAY","bigint");
        	this.dsSave.addColumn("PREYEARACCPAY","bigint");
        	this.dsSave.addColumn("ORDAMT","bigint");
        	this.dsSave.addColumn("TOTCONAMT","bigint");
        	this.dsSave.addColumn("YETACCAMT","bigint");
        	this.dsSave.addColumn("PREYEARTRANAMT","bigint");
        	this.dsSave.addColumn("SUBCONTAMT","bigint");
        	this.dsSave.addColumn("GOVAMT","bigint");
        	this.dsSave.addColumn("OTHPROACCAMT","bigint");
        	this.dsSave.addColumn("CURYEARADDAMT","bigint");
        	this.dsSave.addColumn("EDTREQRSNCD","string");
        	this.dsSave.addColumn("USERNM","string");
        	this.dsSave.addColumn("USERTELNO","string");
        	this.dsSave.addColumn("CANCELREASON","string");
        	this.dsSave.addColumn("ID_TRAN","string");

        	this.dsSave.addColumn("LICCDNM","string");
        	this.dsSave.addColumn("TY_ACTUALPROOF", "string");

        	this.dsSave.addColumn("ETC1_AMT_01","bigint");
        	this.dsSave.addColumn("ETC1_AMT_02","bigint");
        	this.dsSave.addColumn("ETC1_AMT_03","bigint");
        	this.dsSave.addColumn("ETC1_AMT_04","bigint");
        	this.dsSave.addColumn("ETC2_AMT_01","bigint");
        	this.dsSave.addColumn("ETC2_AMT_02","bigint");
        	this.dsSave.addColumn("ETC2_AMT_03","bigint");
        	this.dsSave.addColumn("ETC2_AMT_04","bigint");
        	this.dsSave.addColumn("ETC3_AMT_01","bigint");
        	this.dsSave.addColumn("ETC3_AMT_02","bigint");
        	this.dsSave.addColumn("ETC3_AMT_03","bigint");
        	this.dsSave.addColumn("ETC4_AMT_04","bigint");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("ENO_SEQ", "string");

        	this.dsCopy = new Dataset();
        	this.dsCopy.addColumn("ENO_SEQ", "string");

        	this.dsReWrite = new Dataset();
        	this.dsReWrite.addColumn("ENO_SEQ", "string");

        	this.dsSign = new Dataset();
        	this.dsSign.addColumn("ENO_SEQ", "string");
        	this.dsSign.addColumn("CD_VENDOR", "string");
        	this.dsSign.addColumn("SIGN_STATUS", "string");
        	this.dsSign.addColumn("DS_HASHVAL", "string");
        	this.dsSign.addColumn("DS_SIGNVAL", "string");
        	this.dsSign.addColumn("DN_CERTORGNAME", "string");
        	this.dsSign.addColumn("DN_SIGNNAME", "string");
        	this.dsSign.addColumn("ID_SIGN", "string");
        }

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
        	this.dsSelect.setColumn(0, "ENO_SEQ", this.dsSearch.getColumn(0, "ENO_SEQ"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsListDtl=select1 dsListDtl2=select2";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, false); // 통신방법 정의 [생략가능]
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

        	if(!this.fnSelectValidate()) return;

        	var msg = "기준년도 : ["+ this.dsSearch.getColumn(0, "WORKYEAR")  + "] 년도"
                    + "\n업체코드 : [" + this.dsSearch.getColumn(0, "CD_VENDOR")  +"]"+ this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.text
                    + "\n전자발급번호 : [" + this.dsSearch.getColumn(0, "ENO_SEQ")  + "]"
                    + "\n\n기성실적증명 신청정보를 삭제하시겠습니까?";

        	this.gfnConfirm(msg, "fnDel_callback");
        }

        this.fnDel_callback = function(strId, val) {
        	if(val == true) {
        		this.dsDelete.clearData();
        		var nrow = this.dsDelete.addRow();

        		this.dsDelete.setColumn(nrow, "ENO_SEQ", this.dsSearch.getColumn(0, "ENO_SEQ"));

        		if (this.dsDelete.rowcount == 0) return;

        		var strSvcId    = "delete";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "delete=dsDelete";
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
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function()
        {
        	this.dsSave.clearData();

        	var nrow = this.dsSave.addRow();
        	this.dsSave.setColumn(nrow,"ENO_SEQ",this.dsSearch.getColumn(0,"ENO_SEQ"));
        	this.dsSave.setColumn(nrow,"DS_VENDOR",this.dsList.getColumn(0,"DS_VENDOR"));
        	this.dsSave.setColumn(nrow,"SUPDEPTCD",this.dsList.getColumn(0,"SUPDEPTCD"));
        	this.dsSave.setColumn(nrow,"SUPUSERID",this.dsList.getColumn(0,"SUPUSERID"));
        	this.dsSave.setColumn(nrow,"RESNO",this.dsList.getColumn(0,"RESNO"));
        	this.dsSave.setColumn(nrow,"PROOFUSERID",this.dsList.getColumn(0,"PROOFUSERID"));
        	this.dsSave.setColumn(nrow,"TRADEUSERID",this.dsList.getColumn(0,"TRADEUSERID"));
        	this.dsSave.setColumn(nrow,"REPNM",this.dsList.getColumn(0,"REPNM"));
        	this.dsSave.setColumn(nrow,"TELNO",this.dsList.getColumn(0,"TELNO"));
        	this.dsSave.setColumn(nrow,"ADDR",this.dsList.getColumn(0,"ADDR"));
        	this.dsSave.setColumn(nrow,"CD_LICCOST",this.dsList.getColumn(0,"CD_LICENSE"));
        	this.dsSave.setColumn(nrow,"CD_LICNO",this.dsList.getColumn(0,"CD_LICNO"));
        	this.dsSave.setColumn(nrow,"LICCDNM",this.dsList.getColumn(0,"LICCDNM"));
        	this.dsSave.setColumn(nrow, "TY_ACTUALPROOF", this.dsList.getColumn(0, "TY_ACTUALPROOF"));

        	this.dsSave.setColumn(nrow,"BIZTYPENM",this.dsListDtl.getColumn(0,"BIZTYPENM"));
        	this.dsSave.setColumn(nrow,"PERMORG",this.dsListDtl.getColumn(0,"PERMORG"));
        	this.dsSave.setColumn(nrow,"PERMYMD",this.dsListDtl.getColumn(0,"PERMYMD"));
        	this.dsSave.setColumn(nrow,"ETC",this.dsListDtl.getColumn(0,"ETC"));
        	this.dsSave.setColumn(nrow,"SEQNUM",this.dsListDtl.getColumn(0,"SEQNUM"));
        	this.dsSave.setColumn(nrow,"REPORTNUM",this.dsListDtl.getColumn(0,"REPORTNUM"));
        	this.dsSave.setColumn(nrow,"REGNUM",this.dsListDtl.getColumn(0,"REGNUM"));
        	this.dsSave.setColumn(nrow,"CONTTYPE",this.dsListDtl.getColumn(0,"CONTTYPE"));
        	this.dsSave.setColumn(nrow,"TOTCONTAMT",this.dsListDtl.getColumn(0,"TOTCONTAMT"));
        	this.dsSave.setColumn(nrow,"YEARBEGCONTAMT",this.dsListDtl.getColumn(0,"YEARBEGCONTAMT"));
        	this.dsSave.setColumn(nrow,"CURYEARCONTAMT",this.dsListDtl.getColumn(0,"CURYEARCONTAMT"));
        	this.dsSave.setColumn(nrow,"CURCONNETAMT",this.dsListDtl.getColumn(0,"CURCONNETAMT"));
        	this.dsSave.setColumn(nrow,"CURYEARACCAMT",this.dsListDtl.getColumn(0,"CURYEARACCAMT"));
        	this.dsSave.setColumn(nrow,"PREYEARACCAMT",this.dsListDtl.getColumn(0,"PREYEARACCAMT"));
        	this.dsSave.setColumn(nrow,"CURYEARACCPAY",this.dsListDtl.getColumn(0,"CURYEARACCPAY"));
        	this.dsSave.setColumn(nrow,"PREYEARACCPAY",this.dsListDtl.getColumn(0,"PREYEARACCPAY"));
        	this.dsSave.setColumn(nrow,"ORDAMT",this.dsListDtl.getColumn(0,"ORDAMT"));
        	this.dsSave.setColumn(nrow,"TOTCONAMT",this.dsListDtl.getColumn(0,"TOTCONAMT"));
        	this.dsSave.setColumn(nrow,"YETACCAMT",this.dsListDtl.getColumn(0,"YETACCAMT"));
        	this.dsSave.setColumn(nrow,"PREYEARTRANAMT",this.dsListDtl.getColumn(0,"PREYEARTRANAMT"));
        	this.dsSave.setColumn(nrow,"SUBCONTAMT",this.dsListDtl.getColumn(0,"SUBCONTAMT"));
        	this.dsSave.setColumn(nrow,"GOVAMT",this.dsListDtl.getColumn(0,"GOVAMT"));
        	this.dsSave.setColumn(nrow,"OTHPROACCAMT",this.dsListDtl.getColumn(0,"OTHPROACCAMT"));
        	this.dsSave.setColumn(nrow,"CURYEARADDAMT",this.dsListDtl.getColumn(0,"CURYEARADDAMT"));
        	this.dsSave.setColumn(nrow,"EDTREQRSNCD",this.dsList.getColumn(0,"EDTREQRSNCD"));
        	this.dsSave.setColumn(nrow,"USERNM",this.dsListDtl.getColumn(0,"USERNM"));
        	this.dsSave.setColumn(nrow,"USERTELNO",this.dsListDtl.getColumn(0,"USERTELNO"));
        	this.dsSave.setColumn(nrow,"CANCELREASON",this.dsList.getColumn(0,"CANCELREASON"));
        	this.dsSave.setColumn(nrow,"ID_TRAN",this.AuthClient.ID_USER);

        	this.dsSave.setColumn(nrow, "ETC1_AMT_01", this.dsListDtl2.getColumn(0,"ETC1_AMT_01"));
        	this.dsSave.setColumn(nrow, "ETC1_AMT_02", this.dsListDtl2.getColumn(0,"ETC1_AMT_02"));
        	this.dsSave.setColumn(nrow, "ETC1_AMT_03", this.dsListDtl2.getColumn(0,"ETC1_AMT_03"));
        	this.dsSave.setColumn(nrow, "ETC1_AMT_04", this.dsListDtl2.getColumn(0,"ETC1_AMT_04"));
        	this.dsSave.setColumn(nrow, "ETC2_AMT_01", this.dsListDtl2.getColumn(0,"ETC2_AMT_01"));
        	this.dsSave.setColumn(nrow, "ETC2_AMT_02", this.dsListDtl2.getColumn(0,"ETC2_AMT_02"));
        	this.dsSave.setColumn(nrow, "ETC2_AMT_03", this.dsListDtl2.getColumn(0,"ETC2_AMT_03"));
        	this.dsSave.setColumn(nrow, "ETC2_AMT_04", this.dsListDtl2.getColumn(0,"ETC2_AMT_04"));
        	this.dsSave.setColumn(nrow, "ETC3_AMT_01", this.dsListDtl2.getColumn(0,"ETC3_AMT_01"));
        	this.dsSave.setColumn(nrow, "ETC3_AMT_02", this.dsListDtl2.getColumn(0,"ETC3_AMT_02"));
        	this.dsSave.setColumn(nrow, "ETC3_AMT_03", this.dsListDtl2.getColumn(0,"ETC3_AMT_03"));
        	this.dsSave.setColumn(nrow, "ETC4_AMT_04", this.dsListDtl2.getColumn(0,"ETC4_AMT_04"));

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

        this.fnCopy = function(obj,e) {

        	var strTY_STATUS = this.dsList.getColumn(0, "TY_STATUS");

        	if(strTY_STATUS != "SC05040")
        	{
        		this.gfnAlert("신청대기 자료만 복사 가능합니다.");
        		return;
        	}

        	var msg = "기준년도 : ["+ this.dsSearch.getColumn(0, "WORKYEAR")  + "] 년도"
                    + "\n업체코드 : [" + this.dsSearch.getColumn(0, "CD_VENDOR")  +"]"+ this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.text
                    + "\n전자발급번호 : [" + this.dsSearch.getColumn(0, "ENO_SEQ")  + "]"
                    + "\n\n기성실적증명 자료를 복사 하시겠습니까?";

        	this.gfnConfirm(msg, "fnCopy_callback", "");
        }

        this.fnCopy_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCopy.clearData();
        		var nrow = this.dsCopy.addRow();

        		this.dsCopy.setColumn(nrow, "ENO_SEQ", this.dsSearch.getColumn(0, "ENO_SEQ"));

        		if (this.dsCopy.rowcount == 0) return;

        		var strSvcId    = "copy";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "copy=dsCopy";
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
        };

        this.fnReWrite = function(obj,e) {

        	var strTY_STATUS = this.dsList.getColumn(0, "TY_STATUS");
        	var msg = "";

        	if(strTY_STATUS == "SC05050")
        	{
        		 msg = "기준년도 : ["+ this.dsSearch.getColumn(0, "WORKYEAR")  + "] 년도"
                    + "\n업체코드 : [" + this.dsSearch.getColumn(0, "CD_VENDOR")  +"]"+ this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.text
                    + "\n전자발급번호 : [" + this.dsSearch.getColumn(0, "ENO_SEQ")  + "]"
                    + "\n\n기성실적증명 승인 완료된 자료입니다.\n 정말 신청대기 상태로 변경 하시겠습니까?";
        	}
        	else{

        		 msg = "기준년도 : ["+ this.dsSearch.getColumn(0, "WORKYEAR")  + "] 년도"
                    + "\n업체코드 : [" + this.dsSearch.getColumn(0, "CD_VENDOR")  +"]"+ this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.text
                    + "\n전자발급번호 : [" + this.dsSearch.getColumn(0, "ENO_SEQ")  + "]"
                    + "\n\n기성실적증명 자료를 신청대기 상태로 변경 하시겠습니까?";
        	}


        	this.gfnConfirm(msg, "fnReWrite_callback", "");
        }

        this.fnReWrite_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsReWrite.clearData();
        		var nrow = this.dsReWrite.addRow();

        		this.dsReWrite.setColumn(nrow, "ENO_SEQ", this.dsSearch.getColumn(0, "ENO_SEQ"));

        		if (this.dsReWrite.rowcount == 0) return;

        		var strSvcId    = "reWrite";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "reWrite=dsReWrite";
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "WORKYEAR"))) {
        		validate = false;
        		//Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYR_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년도를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR"))) {
        		validate = false;
        		//Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_VENDOR.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("업체코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "ENO_SEQ"))){
        		this.gfnAlert("전자발급번호가 존재하지 않습니다.", "fnVaidateCallback");
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
        		if(this.dsList.rowcount > 0)
        		{
        			if(this.dsList.getColumn(0, "YN_EDIT") != "Y")
        			{
        				this.fnDivData01_set_readonly(true);
        			}
        			else
        			{
        				this.fnDivData01_set_readonly(false);
        			}

        			this.fnBtnCheckAll();
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "delete") {
        		if (errorCode == 0) {
        			this.fnDeleteCallback = function() {
        				this.getParentContext().close(true);
        				return;
        			}
        			this.gfnAlert("삭제가 완료 되었습니다.", "fnDeleteCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "copy") {
        		if (errorCode == 0) {
        			this.fnCopyCallback = function() {
        				this.getParentContext().close(true);
        				return;
        			}

        			var msg = "복사가 완료 되었습니다."
                    + "\n재조회 하셔야 이후 작업이 가능합니다.";

        			this.gfnAlert(msg, "fnCopyCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "reWrite") {
        		if (errorCode == 0) {
        			this.fnReWriteCallback = function() {
        				this.getParentContext().close(true);
        				return;
        			}

        			var msg = "처리가 완료 되었습니다."
                    + "\n재조회 하셔야 이후 작업이 가능합니다.";

        			this.gfnAlert(msg, "fnReWriteCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "sign") {
        		if(errorCode == 0)
        		{
        			this.fnSignSave();
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "signSave") {
        		if (errorCode == 0) {
        			this.fnSignSaveCallback = function() {
        				this.getParentContext().close(true);
        				return;
        			}

        			this.gfnAlert("승인 완료 되었습니다.", "fnSignSaveCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnClose = function(svcID, errorCode, errorMsg, strArg)
        {

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

            return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_VENDOR") {
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
        		this.dsList.clearData();
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnDivData01_set_readonly = function(value)
        {
        	this.divData.form.divData01.form.edtDS_VENDOR.set_readonly(value);
        	this.divData.form.divData01.form.cboCD_LICENSE.set_enable(!value);
        	this.divData.form.divData01.form.edtREPNM.set_readonly(value);
        	this.divData.form.divData01.form.edtCD_LICNO00.set_readonly(value);
        	this.divData.form.divData01.form.edtCD_LICNO.set_readonly(value);
        	this.divData.form.divData01.form.edtADDR.set_readonly(value);
        	this.divData.form.divData01.form.edtTELNO.set_readonly(value);
        	this.divData.form.divData01.form.cboEDTREQRSNCD.set_enable(!value);
        	this.divData.form.divData01.form.ctxtCANCELREASON.set_readonly(value);
        	this.divData.form.divData01.form.cboTY_ACTUALPROOF.set_enable(!value);
        	this.divData.form.divData01.form.resetScroll();
        }

        this.fnBtnCheckAll = function()
        {
        	/*
        	this.gfnBtnCheck(this.btnRstorDlg, this.dsList);
        	this.gfnBtnCheck(this.btnHqSgn, this.dsList);
        	this.gfnBtnCheck(this.btnSgnCnc, this.dsList);
        	this.gfnBtnCheck(this.btnIssCmpl, this.dsList);
        	this.gfnBtnCheck(this.btnCmplCnc, this.dsList);
        	*/
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");	// 폼상태 초기화
        	}
        };

        this.fnReqAgree = function(obj,e)
        {
        	var strTY_STATUS = this.dsList.getColumn(0, "TY_STATUS");

        	if(strTY_STATUS == "SC05010")
        	{
        		var msg = "기준년도 : ["+ this.dsSearch.getColumn(0, "WORKYEAR")  + "] 년도"
                    + "\n업체코드 : [" + this.dsSearch.getColumn(0, "CD_VENDOR")  +"]"+ this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.text
                    + "\n전자발급번호 : [" + this.dsSearch.getColumn(0, "ENO_SEQ")  + "]"
                    + "\n\n기성실적증명을 승인 하시겠습니까?";

        		this.gfnConfirm(msg, "fnSign_callback", "");
        	}
        	else{
        		this.gfnAlert("승인요청중인 자료만 승인 가능합니다.");
        		return;
        	}
        }

        this.fnSign_callback = function(strId, val)
        {
        	if(val == true) {
        		this.fnBonsaSign();
        	};
        };

        this.fnBonsaSign = function() {
        	var arrVal	= [];
        	var arrSign = [];
        	var arrEtc 	= [];

        	arrVal.push(this.dsList.getColumn(0,"NO_CONT"));
        	arrVal.push(this.dsList.getColumn(0,"WORKYEAR"));
        	arrVal.push(this.dsList.getColumn(0,"SN_SEQ"));
        	arrVal.push(this.dsList.getColumn(0,"ENO_SEQ"));
        	arrVal.push(this.dsList.getColumn(0,"CD_SITE"));
        	arrVal.push(this.dsList.getColumn(0,"TY_STATUS"));
        	arrVal.push(this.dsList.getColumn(0,"CD_VENDOR"));
        	arrVal.push(this.dsList.getColumn(0,"DS_VENDOR"));
        	arrVal.push(this.dsList.getColumn(0,"CD_LICCOST"));
        	arrVal.push(this.dsList.getColumn(0,"SUPDEPTCD"));
        	arrVal.push(this.dsList.getColumn(0,"SUPUSERID"));
        	arrVal.push(this.dsList.getColumn(0,"RESNO"));
        	arrVal.push(this.dsList.getColumn(0,"PROOFUSERID"));
        	arrVal.push(this.dsList.getColumn(0,"PROOFDATE"));
        	arrVal.push(this.dsList.getColumn(0,"TRADEUSERID"));
        	arrVal.push(this.dsList.getColumn(0,"REPNM"));
        	arrVal.push(this.dsList.getColumn(0,"TELNO"));
        	arrVal.push(this.dsList.getColumn(0,"ADDR"));
        	arrVal.push(this.dsList.getColumn(0,"CD_LICNO"));
        	arrVal.push(this.dsList.getColumn(0,"BIZTYPENM"));
        	arrVal.push(this.dsList.getColumn(0,"PERMORG"));
        	arrVal.push(this.dsList.getColumn(0,"PERMYMD"));
        	arrVal.push(this.dsList.getColumn(0,"ETC"));
        	arrVal.push(this.dsList.getColumn(0,"SEQNUM"));
        	arrVal.push(this.dsList.getColumn(0,"REPORTNUM"));
        	arrVal.push(this.dsList.getColumn(0,"REGNUM"));
        	arrVal.push(this.dsList.getColumn(0,"CONTTYPE"));
        	arrVal.push(this.dsList.getColumn(0,"TOTCONTAMT"));
        	arrVal.push(this.dsList.getColumn(0,"YEARBEGCONTAMT"));
        	arrVal.push(this.dsList.getColumn(0,"CURYEARCONTAMT"));
        	arrVal.push(this.dsList.getColumn(0,"CURCONNETAMT"));
        	arrVal.push(this.dsList.getColumn(0,"CURYEARACCAMT"));
        	arrVal.push(this.dsList.getColumn(0,"PREYEARACCAMT"));
        	arrVal.push(this.dsList.getColumn(0,"CURYEARACCPAY"));
        	arrVal.push(this.dsList.getColumn(0,"PREYEARACCPAY"));
        	arrVal.push(this.dsList.getColumn(0,"ORDAMT"));
        	arrVal.push(this.dsList.getColumn(0,"TOTCONAMT"));
        	arrVal.push(this.dsList.getColumn(0,"YETACCAMT"));
        	arrVal.push(this.dsList.getColumn(0,"PREYEARTRANAMT"));
        	arrVal.push(this.dsList.getColumn(0,"SUBCONTAMT"));
        	arrVal.push(this.dsList.getColumn(0,"GOVAMT"));
        	arrVal.push(this.dsList.getColumn(0,"OTHPROACCAMT"));
        	arrVal.push(this.dsList.getColumn(0,"CURYEARADDAMT"));

        	this.dsSign.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var nrow = this.dsSign.addRow();
        		this.dsSign.setColumn(nrow, "DS_HASHVAL", arrVal.join("/"));
        	};

        	var strSvcId    = "sign";
        	var strSvcType  = "pki/sign";
        	var inProc		= "";
        	var inData      = "input=dsSign";
        	var outData     = "dsSign=output0";
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

        this.fnSignSave = function()
        {
        	this.dsSign.setColumn(0,"ENO_SEQ", this.dsList.getColumn(0, "ENO_SEQ"));
        	this.dsSign.setColumn(0,"CD_VENDOR", "000000");
        	this.dsSign.setColumn(0,"SIGN_STATUS", "SC05050");
        	this.dsSign.setColumn(0,"ID_SIGN",this.AuthClient.ID_USER);

        	var strSvcId    = "signSave";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "signSave=dsSign";
        	var outData     = "dsSign=signSave";
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

        this.fnOzReport = function(obj,e)
        {
        	var param = {};

        	var strSiljukGubun = this.dsList.getColumn(this.dsList.rowposition, "TY_ACTUALPROOF");
        	var strReportName = "";

        	if(strSiljukGubun == "SC051010") strReportName = '/dp/scjaSC051010p.ozr';      // 대한전문건설협회
        	else if(strSiljukGubun == "SC051020") strReportName = '/dp/scjaSC051020p.ozr'; // 대한설비건설협회
        	else if(strSiljukGubun == "SC051030") strReportName = '/dp/scjaSC051030p.ozr'; // 한국전기공사협회
        	else if(strSiljukGubun == "SC051040") strReportName = '/dp/scjaSC051040p.ozr'; // 한국정보통신공사협회
        	else if(strSiljukGubun == "SC051050") strReportName = '/dp/scjaSC051050p.ozr'; // 대한시설물유지관리협회
        	else if(strSiljukGubun == "SC051060") strReportName = '/dp/scjaSC051010p.ozr'; // 한국엔지니어링진흥협회
            else if(strSiljukGubun == "SC051070") strReportName = '/dp/scjaSC051070p.ozr'; // 한국소방안전협회
            else if(strSiljukGubun == "SC051080") strReportName = '/dp/scjaSC051080p.ozr'; // 대한건설협회

        	param.REPORT_NAME = strReportName;

        	// 테스트용
        	var strENO_SEQ = this.dsList.getColumn(this.dsList.rowposition, "ENO_SEQ");

        	param.JSONPARAM = "{\"addSql\":\""+ strENO_SEQ + "\" , \"wsvrUrl\":\""+ this.gfnGetServerUrl() +"/images/ingam.png\"}";

        	this.gfnFormOpenNonAuth("DZU", "DZU_OZ", "", param, 900, 650);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DCC_ACTUALPROOF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
