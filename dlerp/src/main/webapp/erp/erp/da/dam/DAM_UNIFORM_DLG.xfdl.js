(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAM_UNIFORM_DLG");
            this.set_titletext("근무복신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(495,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WIN_TOP_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WIN_TOP_SIZE_DP\" type=\"STRING\" size=\"256\"/><Column id=\"QN_WIN_TOP\" type=\"INT\" size=\"256\"/><Column id=\"DS_WIN_BOTTOMS_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WIN_BOTTOMS_SIZE_DP\" type=\"STRING\" size=\"256\"/><Column id=\"QN_WIN_BOTTOMS\" type=\"INT\" size=\"256\"/><Column id=\"DS_SUM_TOP_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUM_TOP_SIZE_DP\" type=\"STRING\" size=\"256\"/><Column id=\"QN_SUM_TOP\" type=\"INT\" size=\"256\"/><Column id=\"DS_SUM_BOTTOMS_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUM_BOTTOMS_SIZE_DP\" type=\"STRING\" size=\"256\"/><Column id=\"QN_SUM_BOTTOMS\" type=\"INT\" size=\"256\"/><Column id=\"DS_SUM_VEST_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUM_VEST_SIZE_DP\" type=\"STRING\" size=\"256\"/><Column id=\"QN_SUM_VEST\" type=\"INT\" size=\"256\"/><Column id=\"DS_WIN_VEST_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WIN_VEST_SIZE_DP\" type=\"STRING\" size=\"256\"/><Column id=\"QN_WIN_VEST\" type=\"INT\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"TY_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JIGUB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAXPR_COMMONCODE_UPCODEFIND</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAMPR_UNIFORM_SAVE</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAMPR_UNIFORM_SELECT_DTL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GENDER", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">남자</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_REQUEST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","52",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_REQUEST_BG","15%","165",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REQUEST","0","165",null,"30","staDS_REQUEST_BG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("신청사유");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_L","9","139","70","18",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("신청내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_T","9","9","90","18",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_BG","15%","34",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","34",null,"30","staID_SABUN_BG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:8","39","200","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BG","15%","63",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0","63",null,"30","staCD_DEPT_BG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:8","68","280","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION_BG","15%","92",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION","0","92",null,"30","staCD_POSITION_BG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_POSITION","staCD_POSITION:8","97","280","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboDS_REQUEST","staDS_REQUEST:8","169","162","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsDS_REQUEST");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQN","74.93%","235",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("수량");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSIZE","15%","235",null,"30","staQN:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("사이즈");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staGUBUN","0","235",null,"30","staSIZE:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQN_WIN_TOP_GB","74.93%","264",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_WIN_TOP_SIZE_BG","30%","264",null,"30","staQN_WIN_TOP_GB:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_WIN_TOP","15%","264",null,"30","staDS_WIN_TOP_SIZE_BG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("상의");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staWIN","0","264",null,"59","staDS_WIN_TOP:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("동복");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQN_SUM_TOP_BG","74.93%","322",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SUM_TOP_SIZE_BG","30%","322",null,"30","staQN_SUM_TOP_BG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SUM_TOP","15%","322",null,"30","staDS_SUM_TOP_SIZE_BG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("상의");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSUM","0","322",null,"59","staDS_SUM_TOP:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("하복");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQN_WIN_BOTTOMS_BG","74.93%","293",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_WIN_BOTTOMS_SIZE_BG","30%","293",null,"30","staQN_WIN_BOTTOMS_BG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_WIN_BOTTOMS","15%","293",null,"30","staDS_WIN_BOTTOMS_SIZE_BG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("하의");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQN_SUM_BOTTOMS_BG","74.93%","351",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SUM_BOTTOMS_SIZE_BG","30%","351",null,"30","staQN_SUM_BOTTOMS_BG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SUM_BOTTOMS","15%","351",null,"30","staDS_SUM_BOTTOMS_SIZE_BG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("하의");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQN_SUM_VEST_BG","74.93%","380",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SUM_VEST_SIZE_BG","30%","380",null,"30","staQN_SUM_VEST_BG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SUM_VEST1","0","380",null,"30","staDS_SUM_VEST_SIZE_BG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("하절기 조끼");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQN_WIN_VEST_BG","74.93%","409",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_WIN_VEST_SIZE_BG","30%","409",null,"30","staQN_WIN_VEST_BG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_WIN_VEST","0","409",null,"30","staDS_WIN_VEST_SIZE_BG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("동절기 점퍼");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_GENDER","ccfID_SABUN:2","39","119","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_innerdataset("dsTY_GENDER");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskQN_WIN_TOP","staDS_WIN_TOP_SIZE_BG:8","269",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskQN_WIN_BOTTOMS","staDS_WIN_BOTTOMS_SIZE_BG:8","298",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskQN_SUM_TOP","staDS_SUM_TOP_SIZE_BG:8","327",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskQN_SUM_BOTTOMS","staDS_SUM_BOTTOMS_SIZE_BG:8","356",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskQN_SUM_VEST","staDS_SUM_VEST_SIZE_BG:8","386",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskQN_WIN_VEST","staDS_WIN_VEST_SIZE_BG:8","414",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfDS_WIN_TOP_SIZE","staDS_WIN_TOP:8","269",null,"20","staQN_WIN_TOP_GB:13",null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("44");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODEUP");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfDS_WIN_BOTTOMS_SIZE","staDS_WIN_BOTTOMS:8","298",null,"20","staQN_WIN_BOTTOMS_BG:13",null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("45");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODEUP");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfDS_SUM_TOP_SIZE","staDS_SUM_TOP:8","327",null,"20","staQN_SUM_TOP_BG:13",null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("46");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODEUP");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfDS_SUM_BOTTOMS_SIZE","staDS_SUM_BOTTOMS:8","356",null,"20","staQN_SUM_BOTTOMS_BG:13",null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("47");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODEUP");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfDS_SUM_VEST_SIZE","staDS_SUM_VEST1:8","385",null,"20","staQN_SUM_VEST_BG:13",null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("48");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODEUP");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfDS_WIN_VEST_SIZE","staDS_WIN_VEST:8","414",null,"20","staQN_WIN_VEST_BG:13",null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("49");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODEUP");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK",null,"divData:15","70","27","51.01%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","divData:15","70","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccfCD_DEPT.form.CDTextBox","value","dsList","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfCD_DEPT.form.DSTextBox","value","dsList","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfCD_POSITION.form.CDTextBox","value","dsList","CD_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ccfCD_POSITION.form.DSTextBox","value","dsList","DS_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cboTY_GENDER","value","dsList","TY_GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.cboDS_REQUEST","value","dsList","DS_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.mskQN_WIN_TOP","value","dsList","QN_WIN_TOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.mskQN_WIN_BOTTOMS","value","dsList","QN_WIN_BOTTOMS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.mskQN_SUM_TOP","value","dsList","QN_SUM_TOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.mskQN_SUM_BOTTOMS","value","dsList","QN_SUM_BOTTOMS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.mskQN_SUM_VEST","value","dsList","QN_SUM_VEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.mskQN_WIN_VEST","value","dsList","QN_WIN_VEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.ccfDS_WIN_TOP_SIZE.form.CDTextBox","value","dsList","DS_WIN_TOP_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ccfDS_WIN_TOP_SIZE.form.DSTextBox","value","dsList","DS_WIN_TOP_SIZE_DP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.ccfDS_WIN_BOTTOMS_SIZE.form.CDTextBox","value","dsList","DS_WIN_BOTTOMS_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.ccfDS_WIN_BOTTOMS_SIZE.form.DSTextBox","value","dsList","DS_WIN_BOTTOMS_SIZE_DP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.ccfDS_SUM_TOP_SIZE.form.CDTextBox","value","dsList","DS_SUM_TOP_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.ccfDS_SUM_TOP_SIZE.form.DSTextBox","value","dsList","DS_SUM_TOP_SIZE_DP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.ccfDS_SUM_BOTTOMS_SIZE.form.CDTextBox","value","dsList","DS_SUM_BOTTOMS_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.ccfDS_SUM_BOTTOMS_SIZE.form.DSTextBox","value","dsList","DS_SUM_BOTTOMS_SIZE_DP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.ccfDS_SUM_VEST_SIZE.form.CDTextBox","value","dsList","DS_SUM_VEST_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.ccfDS_SUM_VEST_SIZE.form.DSTextBox","value","dsList","DS_SUM_VEST_SIZE_DP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.ccfDS_WIN_VEST_SIZE.form.CDTextBox","value","dsList","DS_WIN_VEST_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.ccfDS_WIN_VEST_SIZE.form.DSTextBox","value","dsList","DS_WIN_VEST_SIZE_DP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAM_UNIFORM_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.fv_NO_SEQ = "";
        this.fv_DT_REQUEST = "";

        this.fv_CD_CORP = "";
        this.fv_CD_DEPT = "";
        this.fv_ID_SABUN = "";
        this.fv_DS_HNAME = "";

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSetCombo("U4", "", this.dsDS_REQUEST);//신청사유

        	this.fv_NO_SEQ = this.gfnNvl(this.getOwnerFrame().NO_SEQ, "");
        	this.fv_DT_REQUEST = this.gfnNvl(this.getOwnerFrame().DT_REQUEST, "");
        	this.fv_CD_CORP = this.gfnNvl(this.getOwnerFrame().CD_CORP, "");
        	this.fv_CD_DEPT = this.gfnNvl(this.getOwnerFrame().CD_DEPT, "");
        	this.fv_ID_SABUN = this.gfnNvl(this.getOwnerFrame().ID_SABUN, "");
        	this.fv_DS_HNAME = this.gfnNvl(this.getOwnerFrame().DS_HNAME, "");

        	if(!this.gfnIsNull(this.fv_NO_SEQ)){
        		//기존데이타 조회
        		this.ccfID_SABUN.set_enable(false);
        		this.ccfCD_DEPT.set_enable(false);
        		this.ccfCD_POSITION.set_enable(false);
        		this.cboTY_GENDER.set_enable(false);
        		this.fnSelect();
        	}else{
        		//신규등록
        		this.dsList.clearData();
        		this.dsList.addRow();


        		if(!this.gfnIsNull(this.fv_ID_SABUN)){
        trace("111111111111111111");

        			this.dsList.setColumn(0, "ID_SABUN", this.fv_ID_SABUN);
        			this.dsList.setColumn(0, "DS_HNAME", this.fv_DS_HNAME);
        			this.ccfID_SABUN.form.fnCodeFindLoad();
        		}
        	}

        	if(this.FormInfo.GR_SEARCH == "9"){
        		//GR_SEARCH 가 9인경우에는 본인것만 신청 가능
        		this.ccfCD_POSITION.form.CDTextBox.set_value(this.AuthClient.CD_POSITION);
        		this.ccfCD_POSITION.form.DSTextBox.set_value(this.AuthClient.DS_POSITION);
        		this.ccfID_SABUN.set_enable(false);
        		this.ccfCD_DEPT.set_enable(false);
        		this.ccfCD_POSITION.set_enable(false);
        	}

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfID_SABUN = this.divData.form.ccfID_SABUN;
        	this.ccfCD_DEPT = this.divData.form.ccfCD_DEPT;
        	this.ccfCD_POSITION = this.divData.form.ccfCD_POSITION;
        	this.cboTY_GENDER = this.divData.form.cboTY_GENDER;

        	this.ccfDS_WIN_TOP_SIZE     = this.divData.form.ccfDS_WIN_TOP_SIZE    ;
        	this.ccfDS_WIN_BOTTOMS_SIZE = this.divData.form.ccfDS_WIN_BOTTOMS_SIZE;
        	this.ccfDS_SUM_TOP_SIZE     = this.divData.form.ccfDS_SUM_TOP_SIZE    ;
        	this.ccfDS_SUM_BOTTOMS_SIZE = this.divData.form.ccfDS_SUM_BOTTOMS_SIZE;
        	this.ccfDS_SUM_VEST_SIZE    = this.divData.form.ccfDS_SUM_VEST_SIZE   ;
        	this.ccfDS_WIN_VEST_SIZE    = this.divData.form.ccfDS_WIN_VEST_SIZE   ;

        	this.mskQN_WIN_TOP     = this.divData.form.mskQN_WIN_TOP     ;
        	this.mskQN_WIN_BOTTOMS = this.divData.form.mskQN_WIN_BOTTOMS ;
        	this.mskQN_SUM_TOP     = this.divData.form.mskQN_SUM_TOP     ;
        	this.mskQN_SUM_BOTTOMS = this.divData.form.mskQN_SUM_BOTTOMS ;
        	this.mskQN_SUM_VEST    = this.divData.form.mskQN_SUM_VEST    ;
        	this.mskQN_WIN_VEST    = this.divData.form.mskQN_WIN_VEST    ;

        	this.cboDS_REQUEST = this.divData.form.cboDS_REQUEST;

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_GUBUN", "string");
        	this.dsCombo.addColumn("CN_ROW", "int");
        	this.dsCombo.addColumn("VALUE", "string");
        	this.dsCombo.addColumn("MIN_VALUE", "string");
        	this.dsCombo.addColumn("CD_PREFIX", "string");
        	this.dsCombo.addColumn("CD_UPPREFIX", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_SEQ", "int");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("DT_REQUEST", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("DT_REQUEST", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("CD_POSITION", "string");
        	this.dsSave.addColumn("TY_GENDER", "string");
        	this.dsSave.addColumn("DS_REQUEST", "string");
        	this.dsSave.addColumn("DS_WIN_TOP_SIZE", "string");
        	this.dsSave.addColumn("QN_WIN_TOP", "int");
        	this.dsSave.addColumn("DS_WIN_BOTTOMS_SIZE", "string");
        	this.dsSave.addColumn("QN_WIN_BOTTOMS", "int");
        	this.dsSave.addColumn("DS_SUM_TOP_SIZE", "string");
        	this.dsSave.addColumn("QN_SUM_TOP", "int");
        	this.dsSave.addColumn("DS_SUM_BOTTOMS_SIZE", "string");
        	this.dsSave.addColumn("QN_SUM_BOTTOMS", "int");
        	this.dsSave.addColumn("DS_SUM_VEST_SIZE", "string");
        	this.dsSave.addColumn("QN_SUM_VEST", "int");
        	this.dsSave.addColumn("DS_WIN_VEST_SIZE", "string");
        	this.dsSave.addColumn("QN_WIN_VEST", "int");
        	this.dsSave.addColumn("TY_APPROVAL", "string");
        	this.dsSave.addColumn("DT_APPROVAL", "string");
        	this.dsSave.addColumn("DT_JIGUB", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_POSITION.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_POSITION.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfDS_WIN_TOP_SIZE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_WIN_BOTTOMS_SIZE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_SUM_TOP_SIZE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_SUM_BOTTOMS_SIZE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_SUM_VEST_SIZE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_WIN_VEST_SIZE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfDS_WIN_TOP_SIZE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_WIN_BOTTOMS_SIZE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_SUM_TOP_SIZE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_SUM_BOTTOMS_SIZE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_SUM_VEST_SIZE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_WIN_VEST_SIZE.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        this.fnSetCombo = function(CD_PREFIX, CD_UPPREFIX, dsTarget) {

        	this.dsCombo.clearData();
        	this.dsCombo.addRow();
        	//this.dsCombo.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	//this.dsCombo.setColumn(0, "CN_ROW", this.dsSearch.getColumn(0, "CN_ROW"));
        	//this.dsCombo.setColumn(0, "VALUE", this.dsSearch.getColumn(0, "VALUE"));
        	//this.dsCombo.setColumn(0, "MIN_VALUE", this.dsSearch.getColumn(0, "MIN_VALUE"));
        	this.dsCombo.setColumn(0, "CD_PREFIX", CD_PREFIX);
        	this.dsCombo.setColumn(0, "CD_UPPREFIX", CD_UPPREFIX);

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = dsTarget.name+"=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc, false); // 통신방법 정의 [생략가능]
        };

         /*
          *	등록된 데이타 조회
          */
        this.fnSelect = function() {
        	if(this.gfnIsNull(this.fv_NO_SEQ)
        			||this.gfnIsNull(this.fv_ID_SABUN)
        			||this.gfnIsNull(this.fv_DT_REQUEST) ) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_SEQ", this.fv_NO_SEQ);
        	this.dsSelect.setColumn(0, "ID_SABUN", this.fv_ID_SABUN);
        	this.dsSelect.setColumn(0, "DT_REQUEST", this.fv_DT_REQUEST);
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);

         	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
        }


        this.btnOK_onclick = function(obj,e){
        	this.fnSave();
        };

        this.fnSave = function() {
        	if(this.dsList.rowcount == 0) return;
        	if(!this.fnSaveValid()) return;

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

         	var nNO_SEQ = this.gfnNvl(this.dsList.getColumn(0, "NO_SEQ"), 0);
         	var flag = (nNO_SEQ == 0) ? "I" : "U";
        	this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        	this.dsSave.setColumn(nrow, "NO_SEQ", nNO_SEQ);
        	this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "DT_REQUEST", this.dsList.getColumn(0, "DT_REQUEST"));
        	this.dsSave.setColumn(nrow, "CD_CORP", (flag == "I" ? this.fv_CD_CORP : this.dsList.getColumn(0, "CD_CORP")));
        	this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(0, "CD_DEPT"));
        	this.dsSave.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(0, "CD_POSITION"));
        	this.dsSave.setColumn(nrow, "TY_GENDER", this.dsList.getColumn(0, "TY_GENDER"));
        	this.dsSave.setColumn(nrow, "DS_REQUEST", this.dsList.getColumn(0, "DS_REQUEST"));
        	this.dsSave.setColumn(nrow, "DS_WIN_TOP_SIZE", this.dsList.getColumn(0, "DS_WIN_TOP_SIZE"));
        	this.dsSave.setColumn(nrow, "QN_WIN_TOP", this.dsList.getColumn(0, "QN_WIN_TOP"));
        	this.dsSave.setColumn(nrow, "DS_WIN_BOTTOMS_SIZE", this.dsList.getColumn(0, "DS_WIN_BOTTOMS_SIZE"));
        	this.dsSave.setColumn(nrow, "QN_WIN_BOTTOMS", this.dsList.getColumn(0, "QN_WIN_BOTTOMS"));
        	this.dsSave.setColumn(nrow, "DS_SUM_TOP_SIZE", this.dsList.getColumn(0, "DS_SUM_TOP_SIZE"));
        	this.dsSave.setColumn(nrow, "QN_SUM_TOP", this.dsList.getColumn(0, "QN_SUM_TOP"));
        	this.dsSave.setColumn(nrow, "DS_SUM_BOTTOMS_SIZE", this.dsList.getColumn(0, "DS_SUM_BOTTOMS_SIZE"));
        	this.dsSave.setColumn(nrow, "QN_SUM_BOTTOMS", this.dsList.getColumn(0, "QN_SUM_BOTTOMS"));
        	this.dsSave.setColumn(nrow, "DS_SUM_VEST_SIZE", this.dsList.getColumn(0, "DS_SUM_VEST_SIZE"));
        	this.dsSave.setColumn(nrow, "QN_SUM_VEST", this.dsList.getColumn(0, "QN_SUM_VEST"));
        	this.dsSave.setColumn(nrow, "DS_WIN_VEST_SIZE", this.dsList.getColumn(0, "DS_WIN_VEST_SIZE"));
        	this.dsSave.setColumn(nrow, "QN_WIN_VEST", this.dsList.getColumn(0, "QN_WIN_VEST"));
        	this.dsSave.setColumn(nrow, "TY_APPROVAL", this.dsList.getColumn(0, "TY_APPROVAL"));
        	this.dsSave.setColumn(nrow, "DT_APPROVAL", this.dsList.getColumn(0, "DT_APPROVAL"));
        	this.dsSave.setColumn(nrow, "DT_JIGUB", this.dsList.getColumn(0, "DT_JIGUB"));
        	this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);

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

        this.btnCANCLE_onclick = function(obj,e){
        	// 취소
        	this.getParentContext().close(false);
        };

        this.fnSaveValid = function(){
        	if(this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)) {
        		this.fnValidCallback = function(){
        			this.ccfID_SABUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("성명을 입력해주세요", "fnValidCallback");
        		return false;
        	}

        	if(this.gfnIsNull(this.cboDS_REQUEST.value)) {
        		this.fnValidCallback = function(){
        			this.cboDS_REQUEST.setFocus();
        		}
        		this.gfnAlert("사유를 입력해주세요", "fnValidCallback");
        		return false;
        	}

        	if(!this.fnValidSizeQty(this.ccfDS_WIN_TOP_SIZE, this.mskQN_WIN_TOP)) return;
        	if(!this.fnValidSizeQty(this.ccfDS_WIN_BOTTOMS_SIZE, this.mskQN_WIN_BOTTOMS)) return;
        	if(!this.fnValidSizeQty(this.ccfDS_SUM_TOP_SIZE, this.mskQN_SUM_TOP)) return;
        	if(!this.fnValidSizeQty(this.ccfDS_SUM_BOTTOMS_SIZE, this.mskQN_SUM_BOTTOMS)) return;
        	if(!this.fnValidSizeQty(this.ccfDS_SUM_VEST_SIZE, this.mskQN_SUM_VEST)) return;
        	if(!this.fnValidSizeQty(this.ccfDS_WIN_VEST_SIZE, this.mskQN_WIN_VEST)) return;

        	return true;
        }

        this.fnValidSizeQty = function(objSize, objQty){
        	var sSize = this.gfnTrim(objSize.form.CDTextBox.value);
        	var nQty = this.gfnNvl(objQty.value, 0);

        	if(sSize == "" && nQty == 0){
        		;//ok
        	}
        	else if(sSize != "" && nQty > 0){
        		;//ok
        	}else{
        		this.fnValidCallback = function(){
        			objQty.setFocus();
        		}
        		this.gfnAlert("사이즈와 수량을 확인하세요!", "fnValidCallback");
        		return false;
        	}

        	return true;
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sTY_GENDER = this.cboTY_GENDER.value;

        	if(id == "ccfID_SABUN"){
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.gfnNvl(this.getOwnerFrame().CD_DEPT,""));
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.getOwnerFrame().CD_CORP,"%"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}
        	else if(id == "ccfCD_DEPT"){
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.gfnNvl(this.AuthClient.CD_DEPT,""));
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.getOwnerFrame().CD_CORP,"%"));
        		dsUserParam.setColumn(nrow, "YN_DELETE", "N");
        	}
        	else if(id == "ccfCD_POSITION"){ //직위
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'ED');	//직위
        	}
        	else if(id == "ccfDS_WIN_TOP_SIZE"){
        		//동복-상의-사이즈
        		if(this.gfnIsNull(sTY_GENDER)){
        			this.fnValidCallback = function(){
        				this.cboTY_GENDER.setFocus();
        			}
        			this.gfnAlert("성별을 입력하세요!", "fnValidCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'U2');
        		dsUserParam.setColumn(nrow, "CD_UPPREFIX", this.cboTY_GENDER.value);

        	}
        	else if(id == "ccfDS_WIN_BOTTOMS_SIZE"){
        		//동복-하의-사이즈
        		if(this.gfnIsNull(sTY_GENDER)){
        			this.fnValidCallback = function(){
        				this.cboTY_GENDER.setFocus();
        			}
        			this.gfnAlert("성별을 입력하세요!", "fnValidCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'U3');
        		dsUserParam.setColumn(nrow, "CD_UPPREFIX", this.cboTY_GENDER.value);
        	}
        	else if(id == "ccfDS_SUM_TOP_SIZE"){
        		//하복-상의-사이즈
        		if(this.gfnIsNull(sTY_GENDER)){
        			this.fnValidCallback = function(){
        				this.cboTY_GENDER.setFocus();
        			}
        			this.gfnAlert("성별을 입력하세요!", "fnValidCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'U2');
        		dsUserParam.setColumn(nrow, "CD_UPPREFIX", this.cboTY_GENDER.value);
        	}
        	else if(id == "ccfDS_SUM_BOTTOMS_SIZE"){
        		//하복-하의-사이즈
        		if(this.gfnIsNull(sTY_GENDER)){
        			this.fnValidCallback = function(){
        				this.cboTY_GENDER.setFocus();
        			}
        			this.gfnAlert("성별을 입력하세요!", "fnValidCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'U3');
        		dsUserParam.setColumn(nrow, "CD_UPPREFIX", this.cboTY_GENDER.value);
        	}
        	else if(id == "ccfDS_SUM_VEST_SIZE"){
        		//하절기조끼
        		if(this.gfnIsNull(sTY_GENDER)){
        			this.fnValidCallback = function(){
        				this.cboTY_GENDER.setFocus();
        			}
        			this.gfnAlert("성별을 입력하세요!", "fnValidCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'U2');
        		dsUserParam.setColumn(nrow, "CD_UPPREFIX", this.cboTY_GENDER.value);
        	}
        	else if(id == "ccfDS_WIN_VEST_SIZE"){
        		//하절기조끼
        		if(this.gfnIsNull(sTY_GENDER)){
        			this.fnValidCallback = function(){
        				this.cboTY_GENDER.setFocus();
        			}
        			this.gfnAlert("성별을 입력하세요!", "fnValidCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'U2');
        		dsUserParam.setColumn(nrow, "CD_UPPREFIX", this.cboTY_GENDER.value);
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfID_SABUN"){
         		this.cboTY_GENDER.set_value("");
         		if(arr.length >0){
        			var rowData = arr[0];

         			this.cboTY_GENDER.set_value(rowData.TY_GENDER);
        			this.ccfCD_DEPT.form.CDTextBox.set_value(rowData.CD_DEPT);
        			this.ccfCD_DEPT.form.DSTextBox.set_value(rowData.DS_DEPT);
        			this.ccfCD_POSITION.form.CDTextBox.set_value(rowData.CD_POSITION);
        			this.ccfCD_POSITION.form.DSTextBox.set_value(rowData.DS_POSITION);

         		}else{
         			this.cboTY_GENDER.set_value("");
        			this.ccfCD_DEPT.form.CDTextBox.set_value("");
        			this.ccfCD_DEPT.form.DSTextBox.set_value("");
        			this.ccfCD_POSITION.form.CDTextBox.set_value("");
        			this.ccfCD_POSITION.form.DSTextBox.set_value("");
        		}
        	}
        	else if(id == "ccfDS_WIN_TOP_SIZE"){
        	}
        	else if(id == "ccfDS_WIN_BOTTOMS_SIZE"){
        	}
        	else if(id == "ccfDS_SUM_TOP_SIZE"){
        	}
        	else if(id == "ccfDS_SUM_BOTTOMS_SIZE"){
        	}
        	else if(id == "ccfDS_SUM_VEST_SIZE"){
        	}
        	else if(id == "ccfDS_WIN_VEST_SIZE"){
        	}

        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnSaveAfter = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("저장되었습니다.", "fnSaveAfter");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "combo") {
        		this.divData.form.cboDS_REQUEST.set_index(0);

        	}else if(svcID == "select"){
        		if(this.dsList.rowcount >0){
        			var sTY_APPROVAL = this.dsList.getColumn(0, "TY_APPROVAL");
        // --01	신청
        // --02	승인
        // --03	승인취소
        			if(sTY_APPROVAL == "02"){
        				this.btnOK.set_enable(false);
        			}
        		}
        	}
        }


        this.dsList_onvaluechanged = function(obj,e){
        	if(e.newvalue != e.oldvalue){
        		if(e.columnid == "ID_SABUN"){
        			//this.dsList.clearData();
        		}
        		else if(e.columnid == "TY_GENDER"){
        			this.ccfDS_WIN_TOP_SIZE.form.fnCodeFindClear();
        			this.ccfDS_WIN_BOTTOMS_SIZE.form.fnCodeFindClear();
        			this.ccfDS_SUM_TOP_SIZE.form.fnCodeFindClear();
        			this.ccfDS_SUM_BOTTOMS_SIZE.form.fnCodeFindClear();
        			this.ccfDS_SUM_VEST_SIZE.form.fnCodeFindClear();
        			this.ccfDS_WIN_VEST_SIZE.form.fnCodeFindClear();

        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staDS_REQUEST_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_REQUEST.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staID_SABUN_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staCD_DEPT_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staCD_POSITION_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staQN.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staSIZE.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staGUBUN.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staQN_WIN_TOP_GB.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_WIN_TOP_SIZE_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_WIN_TOP.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staWIN.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staQN_SUM_TOP_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_SUM_TOP_SIZE_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_SUM_TOP.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staSUM.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staQN_WIN_BOTTOMS_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_WIN_BOTTOMS_SIZE_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_WIN_BOTTOMS.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staQN_SUM_BOTTOMS_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_SUM_BOTTOMS_SIZE_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_SUM_BOTTOMS.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staQN_SUM_VEST_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_SUM_VEST_SIZE_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_SUM_VEST1.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staQN_WIN_VEST_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_WIN_VEST_SIZE_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_WIN_VEST.addEventHandler("onclick",this.sta05_onclick,this);
            this.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAM_UNIFORM_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
