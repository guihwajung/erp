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
            this.set_titletext("퇴거자 상세정보");
            this.getSetter("maxwidth").set("950");
            this.getSetter("maxheight").set("600");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_DONGHO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DISTRICT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ENTER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_OUT\" type=\"STRING\" size=\"256\"/><Column id=\"HNAME_QUIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_QUIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEPOSIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FORFEIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REPAIR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MISUMG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MISULEASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PAYMENT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"ID_QUIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REPAYBANK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REPAYGUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REPAYOWNER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLCPR_QUITDETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DLCPR_QUITRECEIVED_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DLCPR_QUITLEASERECEIVED_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLCPR_QUIT_LEASE_HANDLE</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLCPR_QUIT_HANDLE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_QUIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONGHO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_text("퇴거자 상세정보");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","32",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("해약자환급현황");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","60","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","60","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","60","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("입주일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","60","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","60","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("퇴거일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","60",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta02:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("퇴거자 성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta03:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","sta04:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("주민(사업자)번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","sta05:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta08:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","sta09:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","sta13:-1","sta10:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("위약금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta11:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta49","sta11:-1","sta06:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta16","sta15:-1","sta49:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("시설보수비");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta50","700","sta07:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","sta50:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","0","sta12:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("미수금(관리비)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","sta18:-1","sta13:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta20","sta19:-1","sta14:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("미수금(임대료)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21","sta20:-1","sta15:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","sta21:-1","sta16:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("기타금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23","sta22:-1","sta17:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta24","0","sta18:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("정산/지급완료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta25","sta24:-1","sta19:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta26","0","300",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("임대료 부과 및 수납 현황");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta27","sta25:-1","sta20:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("지급일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta28","sta27:-1","sta21:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta29","sta28:-1","sta22:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("지급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta30","sta29:-1","sta23:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta31","0","sta24:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("환불은행");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta32","sta31:-1","sta25:-1","478","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta35","sta32:-1","sta29:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("퇴거처리자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta36","sta35:-1","sta30:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta37","0","sta31:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_text("환불계좌");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta38","sta37:-1","sta32:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta39","sta38:-1","234","110","59",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("퇴거사유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta40","sta39:-1","234",null,"59","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta43","0","sta37:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("환불예금주");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta44","sta43:-1","sta38:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DONGHO","sta02:5","sta03:-25","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_IPJU","sta04:5","sta05:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_QUIT","sta06:5","sta07:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","sta08:5","sta09:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_JUMIN","sta10:5","sta11:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_MOBILE","sta49:5","sta50:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DEPOSIT","sta12:5","sta13:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta72","txtAM_DEPOSIT:5","sta13:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_FORFEIT","sta14:5","sta15:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta33","txtAM_FORFEIT:5","sta15:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_REPAIR","sta16:5","sta17:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta34","txtAM_REPAIR:5","sta17:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MISUMG","sta18:5","sta19:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta41","txtAM_MISUMG:5","sta19:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MISULEASE","sta20:5","sta21:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta42","txtAM_MISULEASE:5","sta21:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETC","sta22:5","sta23:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta45","txtAM_ETC:5","sta23:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtYN_PAYMENT","sta24:5","sta25:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_PAYMENT","sta27:5","sta28:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PAYMENT","sta29:5","sta30:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta46","txtAM_PAYMENT:5","sta30:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_REPAYBANK","sta31:5","sta32:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtID_QUIT","sta35:5","sta36:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_REPAYGUJA","sta37:5","sta38:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_REPAYOWNER","sta43:5","sta44:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtRM_APPQUIT","sta39:5","sta40:-54","467","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Tab("tabData","1","sta26:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("보증금 수납내역");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("임대료 수납내역");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"32","140","25","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_text("임대료엑셀받기");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divData.form.txtDT_IPJU","value","dsList","DT_IPJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.txtDT_QUIT","value","dsList","DT_QUIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtDS_CONTRACTOR","value","dsList","HNAME_QUIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtNO_JUMIN","value","dsList","NO_QUIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtNO_MOBILE","value","dsList","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtAM_DEPOSIT","value","dsList","AM_DEPOSIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtAM_FORFEIT","value","dsList","AM_FORFEIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtAM_REPAIR","value","dsList","AM_REPAIR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtAM_MISUMG","value","dsList","AM_MISUMG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtAM_MISULEASE","value","dsList","AM_MISULEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtAM_ETC","value","dsList","AM_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.txtYN_PAYMENT","value","dsList","YN_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.txtDT_PAYMENT","value","dsList","DT_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.txtAM_PAYMENT","value","dsList","AM_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.txtDS_REPAYBANK","value","dsList","DS_REPAYBANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.txtID_QUIT","value","dsList","ID_QUIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.txtNO_REPAYGUJA","value","dsList","NO_REPAYGUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.txtDS_REPAYOWNER","value","dsList","DS_REPAYOWNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.txtRM_APPQUIT","value","dsList","RM_APPQUIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.staDS_DONGHO","text","dsSearch","DS_DONGHO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLC_DLGQUITDETAIL.xfdl", function() {
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


        	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        	this.dsSearch.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        	this.dsSearch.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        	this.dsSearch.setColumn(0, "NO_QUIT", this.getOwnerFrame().NO_QUIT);
        	this.dsSearch.setColumn(0, "DS_DONGHO", this.getOwnerFrame().LABEL_TEXT_DONGHO);

        	this.fnSelect();
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
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid1 = this.divData.form.tabData.tab1.form.objGrid1;
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;

        	this.sta01 = this.divData.form.sta01;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DL", "DLC_DLGQUITDETAIL");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DL", "DLC_DLGQUITDETAIL_2");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");
        	this.dsSelect.addColumn("NO_QUIT", "string");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_QUIT", this.dsSearch.getColumn(0, "NO_QUIT"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select1=dsSelect select2=dsSelect";
        	var outData     = "dsList=select0 dsList1=select10 dsList2=select20";
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
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지정보가 정확하지 않습니다!!");
        		validate = false;
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_DONG")) || this.gfnIsNull(this.dsSearch.getColumn(0, "NO_FLOOR")) || this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HO"))) {
        		this.gfnAlert("동층호정보가 정확하지 않습니다!!");
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_QUIT"))) {
        		this.gfnAlert("퇴거번호가 정확하지 않습니다!!");
        		validate = false;
        	}
        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		if (this.dsList.rowcount > 0) {
        			var noJumin = this.gfnNvl(this.dsList.getColumn(0, "NO_QUIT_ID"));
        			if (noJumin.length > 6) {
        				this.dsList.setColumn(0, "NO_QUIT_ID", noJumin.substr(0, 6) + "-" + noJumin.substr(6));
        			}
        			var title = this.dsList.getColumn(0, "NO_SIZE") + "평  "
        						+ this.dsList.getColumn(0, "TY_TYPE") + "형    군: "
        						+ this.dsList.getColumn(0, "TY_DISTRICT") + "   OPTION: "
        						+ this.dsList.getColumn(0, "RT_OPTION") + "     별도계약: "
        						+ this.dsList.getColumn(0, "YN_OPTION");
        			this.sta01.set_text(title);
        		}
        		else {
        			this.fnSelectCallback = function() {
        				this.getParentContext().close(false);
        			}
        			this.gfnAlert("자료가 존재하지 않습니다.", "fnSelectCallback");
        			return;
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.divData_btnExcel_onclick = function(obj,e) {
        	this.gfnExcelExport(this.dxGrid2);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnExcel.addEventHandler("onclick",this.divData_btnExcel_onclick,this);
        };
        this.loadIncludeScript("DLC_DLGQUITDETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
