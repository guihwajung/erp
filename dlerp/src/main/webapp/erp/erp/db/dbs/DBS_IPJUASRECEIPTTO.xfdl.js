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
            this.set_titletext("BS 하자 접수입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_IPJUASRECEIPT_SELECT_STD</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DBSPR_IPJUASRECEIPT_INSERT_STD</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBSPR_IPJUASRECEIPT_UPDATE_STD</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DBSPR_IPJUASRECEIPT_DELETE_STD</Col></Row><Row><Col id=\"TARGET\">ipjusade</Col><Col id=\"SP\">DBSPR_IPJUSADE_SELECT_STD</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DBZPR_COMMCODE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CUNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_HAJAJS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIpjuSade", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_DONG","ccfCD_SITE:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("동");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_DONG","staDS_DONG:0.0","10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFASDONGHO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_HO","ccfDS_DONG:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_HO","staDS_HO:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFASDONGHO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("BtnfileDocu",null,"10.0","120","24.0","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("점검전사진업로드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"283","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("22");
            obj.set_text("신청자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta01","0","staTitle:10","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","staTitle:10","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta00","sta02:-1","staTitle:10","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("동/호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta03","sta00:-1","staTitle:10","220","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","staTitle:10","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_text("면적Type");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","staTitle:10","215","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta01:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta02:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta00:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_text("자택/휴대폰");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta03:-1","220","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","sta04:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","sta05:-1","215","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","sta06:10",null,"22","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_text("접수내용");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta12","0","staTitle00:10","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_text("실");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","staTitle00:10","250","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta14","sta13:-1","staTitle00:10","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_text("부위");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","staTitle00:10","358","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta16","sta15:-1","staTitle00:10","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_text("상세부위");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","staTitle00:10","366","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta18","0","sta12:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta19","sta18:-1","sta13:-1","250","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta20","sta19:-1","sta14:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("21");
            obj.set_text("공종");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta21","sta20:-1","sta15:-1","358","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta22","sta21:-1","sta16:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("24");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta23","sta22:-1","sta17:-1","366","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta25","99","sta19:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnRM_HAJA","0","sta18:-1","99","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("49");
            obj.set_text("하자내용");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta26","0","btnRM_HAJA:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_text("고객의 소리");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta27","sta26:-1","sta25:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta28","0","sta26:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("29");
            obj.set_text("방문예정일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta29","sta28:-1","sta27:-1","250","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta30","sta29:-1","sta27:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("31");
            obj.set_text("접수구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta31","sta30:-1","sta27:-1","170","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("tclDT_JEOBSU","sta01:5","37","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("33");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_DONG","sta00:5","37","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_background("#b0c4de");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_HO","txtDS_DONG:5","37","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.set_background("#b0c4de");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtSZ_TYPE","sta04:5","37","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_background("#87cefa");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtPN_SC","sta06:5","sta02:4","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("37");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_SCTELHOME","sta08:5","sta03:4","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("38");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_SCTEL","txtNO_SCTELHOME:5","sta03:4","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("39");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_SPECBIGO","sta10:5","sta05:4","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("40");
            obj.set_readonly("true");
            obj.set_background("#87cefa");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfCD_SIL","sta12:5","138","180","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DBX_CFSITESILCOMMON");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("41");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnPlan","cfCD_SIL:5","138","50","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("42");
            obj.set_text("도면");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfCD_PART","sta14:5","138","347","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DBX_CFSITESILPART");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("43");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfCD_DETAIL_TYPE","sta16:5","138","285","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DBX_CFSITESILDETAILPART");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("44");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfCD_UH","sta18:5","sta13:4","235","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DBX_CFWI");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("45");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfCD_ACT","sta20:5","sta15:4","347","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DBX_CFACT");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("46");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfCD_CTM","sta22:5","sta17:4","285","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DBX_CFSITECTM");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("47");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new CheckBox("chkTY_JBYB","cfCD_CTM:15","sta17:4","60","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("48");
            obj.set_text("재접수");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtRM_NY","btnRM_HAJA:5","sta19:4",null,"20","10",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("50");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtRM_CUSTOMER","sta26:5","sta25:4",null,"20","10",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("51");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("tclDT_VISITPLAN","sta28:5","sta27:4","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Combo("cboTY_HAJAJS","sta30:5","sta27:4","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("53");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_HAJAJS");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divData","0","divDataTop:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","1",null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfDS_DONG.form.CDTextBox","value","dsSearch","DS_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfDS_HO.form.CDTextBox","value","dsSearch","DS_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.tclDT_JEOBSU","value","dsList","DT_JEOBSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataTop.form.txtDS_DONG","value","dsList","DS_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.txtDS_HO","value","dsList","DS_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.txtSZ_TYPE","value","dsList","SZ_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.txtPN_SC","value","dsList","PN_SC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.txtNO_SCTELHOME","value","dsList","NO_SCTELHOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.txtNO_SCTEL","value","dsList","NO_SCTEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.txtDS_SPECBIGO","value","dsList","DS_SPECBIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.cfCD_SIL.form.CDTextBox","value","dsList","CD_SIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataTop.form.cfCD_SIL.form.DSTextBox","value","dsList","DS_SIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataTop.form.cfCD_PART.form.CDTextBox","value","dsList","CD_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataTop.form.cfCD_PART.form.DSTextBox","value","dsList","DS_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataTop.form.cfCD_DETAIL_TYPE.form.CDTextBox","value","dsList","CD_DETAIL_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataTop.form.cfCD_DETAIL_TYPE.form.DSTextBox","value","dsList","DS_DETAIL_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataTop.form.cfCD_UH.form.CDTextBox","value","dsList","CD_UH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataTop.form.cfCD_UH.form.DSTextBox","value","dsList","DS_UH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataTop.form.cfCD_ACT.form.CDTextBox","value","dsList","CD_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataTop.form.cfCD_ACT.form.DSTextBox","value","dsList","DS_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataTop.form.cfCD_CTM.form.CDTextBox","value","dsList","CD_CTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataTop.form.cfCD_CTM.form.DSTextBox","value","dsList","DS_CTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataTop.form.chkTY_JBYB","value","dsList","TY_JBYB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataTop.form.txtRM_NY","value","dsList","RM_NY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataTop.form.txtRM_CUSTOMER","value","dsList","RM_CUSTOMER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataTop.form.tclDT_VISITPLAN","value","dsList","DT_VISITPLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataTop.form.cboTY_HAJAJS","value","dsList","TY_HAJAJS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_IPJUASRECEIPTTO.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.NO_HADOCONT = "";
        this.DS_HADOCONT = "";

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

        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_DEPT);
        		this.dsSearch.setColumn(0, "DS_SITE", this.AuthClient.DS_DEPT);
        		this.ccfCD_SITE.set_enable(false);
        	}

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_SITE)) {
        		// AddData ?
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "DS_DONG", this.getOwnerFrame().DS_DONG);
        		this.dsSearch.setColumn(0, "DS_HO", this.getOwnerFrame().DS_HO);

        		this.dsList.setColumn(0, "DT_JEOBSU", this.gfnGetDate());
        	}

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnWorkDucu = this.gfnFormButtonAdd("WorkDucu", "fnWorkDucu");
        	this.btnJobEnd = this.gfnFormButtonAdd("JobEnd", "fnJobEnd");
        	this.btnAsPrint = this.gfnFormButtonAdd("AsPrint", "fnAsPrint");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfDS_DONG = this.divSearch.form.ccfDS_DONG;
        	this.ccfDS_HO = this.divSearch.form.ccfDS_HO;

        	this.cfCD_SIL = this.divData.form.divDataTop.form.cfCD_SIL;
        	this.cfCD_PART = this.divData.form.divDataTop.form.cfCD_PART;
        	this.cfCD_DETAIL_TYPE = this.divData.form.divDataTop.form.cfCD_DETAIL_TYPE;
        	this.cfCD_UH = this.divData.form.divDataTop.form.cfCD_UH;
        	this.cfCD_ACT = this.divData.form.divDataTop.form.cfCD_ACT;
        	this.cfCD_CTM = this.divData.form.divDataTop.form.cfCD_CTM;

        	this.txtPN_SC = this.divData.form.divDataTop.form.txtPN_SC;

        	this.dxGrid = this.divData.form.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_IPJUASRECEIPTTO");

         	this.gfnGridColumnColor(this.dxGrid, "", "Blue", "DT_JOBEND=='' && NO_MI_DAY>=70", true);
        	this.gfnGridColumnColor(this.dxGrid, "", "HotPink", "DT_JOBEND=='' && NO_MI_DAY>=30 && NO_MI_DAY<70", true);

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_DONG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_HO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.cfCD_SIL.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_PART.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_DETAIL_TYPE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_ACT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_CTM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.cfCD_SIL.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_PART.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_DETAIL_TYPE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_UH.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_ACT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_CTM.AfterCDTextChanged = "fnAfterCDTextChanged";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("DS_DONG", "string");
        	this.dsSelect.addColumn("DS_CUNG", "string");
        	this.dsSelect.addColumn("DS_HO", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("DS_DONG", "string");
        	this.dsInsert.addColumn("DS_CUNG", "string");
        	this.dsInsert.addColumn("DS_HO", "string");
        	this.dsInsert.addColumn("DT_JEOBSU", "string");
        	this.dsInsert.addColumn("PN_SC", "string");
        	this.dsInsert.addColumn("NO_SCTELHOME", "string");
        	this.dsInsert.addColumn("NO_SCTEL", "string");
        	this.dsInsert.addColumn("CD_SIL", "string");
        	this.dsInsert.addColumn("CD_PART", "string");
        	this.dsInsert.addColumn("CD_DETAIL_TYPE", "string");
        	this.dsInsert.addColumn("CD_UH", "string");
        	this.dsInsert.addColumn("CD_ACT", "string");
        	this.dsInsert.addColumn("CD_CTM", "string");
        	this.dsInsert.addColumn("NO_HADOCONT", "string");
        	this.dsInsert.addColumn("RM_NY", "string");
        	this.dsInsert.addColumn("RM_CUSTOMER", "string");
        	this.dsInsert.addColumn("TY_HAJAJS", "string");
        	this.dsInsert.addColumn("YN_SMS", "string");
        	this.dsInsert.addColumn("TY_JBYB", "string");
        	this.dsInsert.addColumn("DT_VISITPLAN", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_JOB", "string");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("DS_DONG", "string");
        	this.dsUpdate.addColumn("DS_CUNG", "string");
        	this.dsUpdate.addColumn("DS_HO", "string");
        	this.dsUpdate.addColumn("DT_JEOBSU", "string");
        	this.dsUpdate.addColumn("PN_SC", "string");
        	this.dsUpdate.addColumn("NO_SCTELHOME", "string");
        	this.dsUpdate.addColumn("NO_SCTEL", "string");
        	this.dsUpdate.addColumn("CD_SIL", "string");
        	this.dsUpdate.addColumn("CD_PART", "string");
        	this.dsUpdate.addColumn("CD_DETAIL_TYPE", "string");
        	this.dsUpdate.addColumn("CD_UH", "string");
        	this.dsUpdate.addColumn("CD_ACT", "string");
        	this.dsUpdate.addColumn("CD_CTM", "string");
        	this.dsUpdate.addColumn("NO_HADOCONT", "string");
        	this.dsUpdate.addColumn("RM_NY", "string");
        	this.dsUpdate.addColumn("RM_CUSTOMER", "string");
        	this.dsUpdate.addColumn("TY_HAJAJS", "string");
        	this.dsUpdate.addColumn("YN_SMS", "string");
        	this.dsUpdate.addColumn("TY_JBYB", "string");
        	this.dsUpdate.addColumn("DT_VISITPLAN", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("CD_JOB", "string");

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("CD_SITE", "string");
        	this.dsSelect2.addColumn("DS_DONG", "string");
        	this.dsSelect2.addColumn("DS_CUNG", "string");
        	this.dsSelect2.addColumn("DS_HO", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.NO_HADOCONT = "";
        	this.DS_HADOCONT = "";

        	var noHo = this.dsSearch.getColumn(0, "DS_HO");
        	var chung = "";
        	var ho = "";
        	if (noHo != "" && noHo != "공용") {
        		chung = noHo.substr(0, 2);
        		ho = "0" + noHo.substr(2, 2);
        	}
        	else if (noHo == "공용") {
        		chung = "00";
        		ho = "000";
        	}

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        	this.dsSelect.setColumn(0, "DS_CUNG", chung);
        	this.dsSelect.setColumn(0, "DS_HO", ho);

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

        this.fnSave = function() {
        	//if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	var noHo = this.dsSearch.getColumn(0, "DS_HO");
        	var chung = "";
        	var ho = "";
        	if (noHo != "" && noHo != "공용") {
        		chung = noHo.substr(0, 2);
        		ho = "0" + noHo.substr(2, 2);
        	}
        	else if (noHo == "공용") {
        		chung = "00";
        		ho = "000";
        	}

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				this.dsInsert.clearData();
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsInsert.setColumn(nrow, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        				this.dsInsert.setColumn(nrow, "DS_CUNG", chung);
        				this.dsInsert.setColumn(nrow, "DS_HO", ho);
        				this.dsInsert.setColumn(nrow, "DT_JEOBSU", this.dsList.getColumn(i, "DT_JEOBSU"));
        				this.dsInsert.setColumn(nrow, "PN_SC", this.dsList.getColumn(i, "PN_SC"));
        				this.dsInsert.setColumn(nrow, "NO_SCTELHOME", this.dsList.getColumn(i, "NO_SCTELHOME"));
        				this.dsInsert.setColumn(nrow, "NO_SCTEL", this.dsList.getColumn(i, "NO_SCTEL"));
        				this.dsInsert.setColumn(nrow, "CD_SIL", this.dsList.getColumn(i, "CD_SIL"));
        				this.dsInsert.setColumn(nrow, "CD_PART", this.dsList.getColumn(i, "CD_PART"));
        				this.dsInsert.setColumn(nrow, "CD_DETAIL_TYPE", this.dsList.getColumn(i, "CD_DETAIL_TYPE"));
        				this.dsInsert.setColumn(nrow, "CD_UH", this.dsList.getColumn(i, "CD_UH"));
        				this.dsInsert.setColumn(nrow, "CD_ACT", this.dsList.getColumn(i, "CD_ACT"));
        				this.dsInsert.setColumn(nrow, "CD_CTM", this.dsList.getColumn(i, "CD_CTM"));
        				this.dsInsert.setColumn(nrow, "NO_HADOCONT", this.NO_HADOCONT);
        				this.dsInsert.setColumn(nrow, "RM_NY", this.dsList.getColumn(i, "RM_NY"));
        				this.dsInsert.setColumn(nrow, "RM_CUSTOMER", this.dsList.getColumn(i, "RM_CUSTOMER"));
        				this.dsInsert.setColumn(nrow, "TY_HAJAJS", this.dsList.getColumn(i, "TY_HAJAJS"));
        				this.dsInsert.setColumn(nrow, "YN_SMS", this.dsList.getColumn(i, "YN_SMS"));
        				this.dsInsert.setColumn(nrow, "TY_JBYB", this.dsList.getColumn(i, "TY_JBYB"));
        				this.dsInsert.setColumn(nrow, "DT_VISITPLAN", this.dsList.getColumn(i, "DT_VISITPLAN"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_JOB", this.dsList.getColumn(i, "CD_PRIMARY"));
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        				this.dsUpdate.setColumn(nrow, "DS_CUNG", chung);
        				this.dsUpdate.setColumn(nrow, "DS_HO", ho);
        				this.dsUpdate.setColumn(nrow, "DT_JEOBSU", this.dsList.getColumn(i, "DT_JEOBSU"));
        				this.dsUpdate.setColumn(nrow, "PN_SC", this.dsList.getColumn(i, "PN_SC"));
        				this.dsUpdate.setColumn(nrow, "NO_SCTELHOME", this.dsList.getColumn(i, "NO_SCTELHOME"));
        				this.dsUpdate.setColumn(nrow, "NO_SCTEL", this.dsList.getColumn(i, "NO_SCTEL"));
        				this.dsUpdate.setColumn(nrow, "CD_SIL", this.dsList.getColumn(i, "CD_SIL"));
        				this.dsUpdate.setColumn(nrow, "CD_PART", this.dsList.getColumn(i, "CD_PART"));
        				this.dsUpdate.setColumn(nrow, "CD_DETAIL_TYPE", this.dsList.getColumn(i, "CD_DETAIL_TYPE"));
        				this.dsUpdate.setColumn(nrow, "CD_UH", this.dsList.getColumn(i, "CD_UH"));
        				this.dsUpdate.setColumn(nrow, "CD_ACT", this.dsList.getColumn(i, "CD_ACT"));
        				this.dsUpdate.setColumn(nrow, "CD_CTM", this.dsList.getColumn(i, "CD_CTM"));
        				this.dsUpdate.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsUpdate.setColumn(nrow, "RM_NY", this.dsList.getColumn(i, "RM_NY"));
        				this.dsUpdate.setColumn(nrow, "RM_CUSTOMER", this.dsList.getColumn(i, "RM_CUSTOMER"));
        				this.dsUpdate.setColumn(nrow, "TY_HAJAJS", this.dsList.getColumn(i, "TY_HAJAJS"));
        				this.dsUpdate.setColumn(nrow, "YN_SMS", this.dsList.getColumn(i, "YN_SMS"));
        				this.dsUpdate.setColumn(nrow, "TY_JBYB", this.dsList.getColumn(i, "TY_JBYB"));
        				this.dsUpdate.setColumn(nrow, "DT_VISITPLAN", this.dsList.getColumn(i, "DT_VISITPLAN"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsDelete.setColumn(nrow, "CD_JOB", this.dsList.getColumn(i, "CD_PRIMARY"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete insert=dsInsert update=dsUpdate";
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

        this.fnAdd = function() {
        	this.nAddrow = this.gfnGridAdd(this.dxGrid);

        	var noHo = this.dsSearch.getColumn(0, "DS_HO");
        	var chung = "";
        	var ho = "";
        	if (noHo != "" && noHo != "공용") {
        		chung = noHo.substr(0, 2);
        		ho = "0" + noHo.substr(2, 2);
        	}
        	else if (noHo == "공용") {
        		chung = "00";
        		ho = "000";
        	}

        	this.dsSelect2.clearData();
        	this.dsSelect2.addRow();
        	this.dsSelect2.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect2.setColumn(0, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        	this.dsSelect2.setColumn(0, "DS_CUNG", chung);
        	this.dsSelect2.setColumn(0, "DS_HO", ho);

        	var strSvcId    = "ipjusade";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "ipjusade=dsSelect2";
        	var outData     = "dsIpjuSade=ipjusade0";
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

        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력 하셔야 합니다.", "fnVaidateCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DS_DONG"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfDS_DONG.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("동을 입력 하셔야 합니다.", "fnVaidateCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DS_HO"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfDS_HO.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("호를 입력 하셔야 합니다.", "fnVaidateCallback");
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if (svcID == "save" ) {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "ipjusade") {
        		var row = this.dsList.rowposition;
        		this.dsList.setColumn(row, "DT_JEOBSU", this.gfnGetDate());
        		this.dsList.setColumn(row, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        		this.dsList.setColumn(row, "DS_HO", this.dsSearch.getColumn(0, "DS_HO"));

        		if (this.dsIpjuSade.rowcount > 0) {
        			this.dsList.setColumn(row, "PN_SC", this.dsIpjuSade.getColumn(0, "PN_SC"));
        			this.dsList.setColumn(row, "NO_SCTELHOME", this.dsIpjuSade.getColumn(0, "NO_SCTELHOME"));
        			this.dsList.setColumn(row, "NO_SCTEL", this.dsIpjuSade.getColumn(0, "NO_SCTEL"));
        			this.dsList.setColumn(row, "SZ_TYPE", this.dsIpjuSade.getColumn(0, "SZ_TYPE"));
        			this.dsList.setColumn(row, "DS_SPECBIGO", this.dsIpjuSade.getColumn(0, "DS_SPECBIGO"));
        			this.dsList.setColumn(row, "TY_IPJU", this.dsIpjuSade.getColumn(0, "TY_IPJU"));
        		}
        		if (this.dsTY_HAJAJS.rowcount > 0)
        			this.dsList.setColumn(this.dsList.rowposition, "TY_HAJAJS", this.dsTY_HAJAJS.getColumn(0, "CD_CODE"));

        		this.txtPN_SC.setFocus();
        	}
        	else if (svcID == "combo") {
        		if (this.dsTY_HAJAJS.rowcount > 0)
        			this.dsList.setColumn(this.dsList.rowposition, "TY_HAJAJS", this.dsTY_HAJAJS.getColumn(0, "CD_CODE"));
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", this.AuthClient.CD_DEPT);
        	}
        	else if (id == "ccfDS_DONG") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        			this.gfnAlert("현장코드를 입력하셔야 합니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "TY_TYPE", "DONG");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE1", "");
        		dsUserParam.setColumn(nrow, "VALUE2", "");
        	}
        	else if (id == "ccfDS_HO") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        			this.gfnAlert("현장코드를 입력하셔야 합니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "TY_TYPE", "HO");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE1", this.dsSearch.getColumn(0, "DS_DONG"));
        		dsUserParam.setColumn(nrow, "VALUE2", "");
        	}
        	else if (id == "cfCD_SIL") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        	}
        	else if (id == "cfCD_PART") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_SIL", this.dsList.getColumn(this.dsList.rowposition, "CD_SIL"));
        	}
        	else if (id == "cfCD_DETAIL_TYPE") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_SIL", this.dsList.getColumn(this.dsList.rowposition, "CD_SIL"));
        		dsUserParam.setColumn(nrow, "CD_PART", this.dsList.getColumn(this.dsList.rowposition, "CD_PART"));
        		dsUserParam.setColumn(nrow, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        	}
        	else if (id == "cfCD_ACT") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	else if (id == "cfCD_CTM") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if (id == "cfCD_UH" || id == "cfCD_DETAIL_TYPE" || id == "cfCD_PART" || id == "cfCD_SIL") {
        		this.dsList.setColumn(this.dsList.rowposition, "RM_NY",
        			this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "DS_SIL"))
        			+ this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "DS_PART"))
        			+ this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "DS_DETAIL_TYPE"))
        			+ this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "DS_UH"))
        		);
        	}
        	else if (id == "cfCD_ACT") {
        		this.dsList.setColumn(this.dsList.rowposition, "CD_CTM", arr[0]["CD_CTM"]);
        		this.dsList.setColumn(this.dsList.rowposition, "DS_CTM", arr[0]["DS_CTM"]);
        		this.NO_HADOCONT = arr[0]["NO_HADOCONT"];
        		this.DS_HADOCONT = arr[0]["DS_HADOCONT"];
        	}
        	else if (id == "cfCD_CTM") {
        		this.NO_HADOCONT = arr[0]["NO_HADOCONT"];
        		this.DS_HADOCONT = arr[0]["DS_HADOCONT"];
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e) {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		//this.fnGridToSingle();

        		obj.oldrow = -1;
        	}
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnWorkDucu = function() {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.dsSearch.getColumn(0, "DS_SITE");
        	param.CD_CTM = this.dsList.getColumn(this.dsList.rowposition, "CD_CTM");
        	param.DS_CTM = this.dsList.getColumn(this.dsList.rowposition, "DS_CTM");
        	param.CD_ACT = this.dsList.getColumn(this.dsList.rowposition, "CD_ACT");
        	param.DS_ACT = this.dsList.getColumn(this.dsList.rowposition, "DS_ACT");
        	param.DT_FR = "";
        	param.DT_TO = "";
        	param.CD_JOB = "";

        	this.gfnFormOpen("DBS", "DBS_WORKDOCU", "", param);
        }

        this.fnJobEnd = function() {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.dsSearch.getColumn(0, "DS_SITE");
        	param.CD_CTM = this.dsList.getColumn(this.dsList.rowposition, "CD_CTM");
        	param.DS_CTM = this.dsList.getColumn(this.dsList.rowposition, "DS_CTM");
        	param.CD_JOB = "";
        	param.CD_DONG = this.dsSearch.getColumn(0, "DS_DONG");
        	param.CD_HO = this.dsSearch.getColumn(0, "DS_HO");
        	param.cmbSearch = "0";
        	param.cmbGubun= "미완료";
        	param.cmbGr = "000";

        	this.gfnFormOpen("DBS", "DBS_WORKEND", "fnPopupCallback", param);
        }

        this.fnAsPrint = function() {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.NO_JOB = this.dsList.getColumn(this.dsList.rowposition, "CD_PRIMARY");
        	param.GUBUN = "N";

        	this.gfnFormOpen("DBS", "DBS_ASPRINTDLG", "", param);
        }

        this.fnPopupCallback = function(svcID, val) {
        	if (svcID.indexOf("DBS_JUMGUM_BEFORE_UPPIC") > -1) {
        		if (val) {
        			this.FormBtns.Select.click();
        		}
        	}
        	else {
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);

        		if (e.columnid == "CD_SITE") {
        			this.dsSearch.setColumn(0, "DS_DONG", "");
        			this.dsSearch.setColumn(0, "DS_HO", "");
        		}
        		else if (e.columnid == "CD_DONG") {
        			this.dsSearch.setColumn(0, "DS_HO", "");
        		}
        	}
        };

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if (flag == "I") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnAlert("입력중인 데이터가 있습니다.");
        	}
        	return can_rowchange;
        };

        this.divSearch_BtnfileDocu_onclick = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.CD_JOB = this.dsList.getColumn(this.dsList.rowposition, "CD_PRIMARY");
        	param.BeforeAfter = "BEFORE";

        	this.gfnFormOpen("DBS", "DBS_JUMGUM_BEFORE_UPPIC", "fnPopupCallback", param, 960, 330);
        };

        this.divData_divDataTop_btnPlan_onclick = function(obj,e) {
        	var szType = this.dsList.getColumn(this.dsList.rowposition, "SZ_TYPE")
        	if (this.gfnIsNull(szType)) return;

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.dsSearch.getColumn(0, "DS_SITE");
        	param.DS_SIZE = szType.substr(0, szType.indexOf("("));
        	param.DS_TYPE = szType.substr(szType.length - 1, 1);

        	this.gfnFormOpen("DBZ", "DBZ_SIZEINFOBLUEPRINT", "", param);
        };

        this.divData_divDataTop_btnRM_HAJA_onclick = function(obj,e) {
        	this.dsList.setColumn(this.dsList.rowposition, "RM_NY",
        		this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "DS_SIL"))
        		+ this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "DS_PART"))
        		+ this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "DS_DETAIL_TYPE"))
        		+ this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "DS_UH"))
        	);
        };

        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_GUBUN", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_GUBUN", "K1");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_HAJAJS=combo0";
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
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divSearch.form.BtnfileDocu.addEventHandler("onclick",this.divSearch_BtnfileDocu_onclick,this);
            this.divData.form.divDataTop.form.btnRM_HAJA.addEventHandler("onclick",this.divData_divDataTop_btnRM_HAJA_onclick,this);
            this.divData.form.divDataTop.form.btnPlan.addEventHandler("onclick",this.divData_divDataTop_btnPlan_onclick,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
        };
        this.loadIncludeScript("DBS_IPJUASRECEIPTTO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
