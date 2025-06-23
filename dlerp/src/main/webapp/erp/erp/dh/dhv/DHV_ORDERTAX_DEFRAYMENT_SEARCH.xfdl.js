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
            obj._setContents("<ColumnInfo><Column id=\"NO_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_NATION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUSINESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BUSINESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PAYMENTAMT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FARMTAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_AMOUNTAMT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INCOMETAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CORPTAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INHERBANTTAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TAXTOTAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_ORDERTAX_DEFRAYMENT_MASTER</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DHVPR_ORDERTAX_DEFRAYMENT_DETAIL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPUTE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPUTE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_DEPT_SELFACNT\"/><Col id=\"YM_IMPUTE_FROM\"/><Col id=\"YM_IMPUTE_TO\"/><Col id=\"CD_VENDOR\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYN_DELETE","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("세무단위");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfSELFACNT","staYN_DELETE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM00","0.0","staYN_DELETE:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_START","staDT_FROM00:0.0","staYN_DELETE:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("귀속년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_START00","staDT_START:0.0","staYN_DELETE:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfVENDOR","staDT_START00:0.0","staYN_DELETE:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFVENDOR_INCOME");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPUTE_FROM","ccfVENDOR:0.0","staYN_DELETE:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPUTE_TO","ctclYM_IMPUTE_FROM:0.0","staYN_DELETE:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","-10","300",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT00","0","19","110","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("영수일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBg00","109","19","182","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_CASH00","123","22","115","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("sta00","0","58","300","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("3");
            obj.set_text("소득자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","90",null,null,"0","320",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("4");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("sta01","0","objGrid:30","300","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("5");
            obj.set_text("총 계");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT01","sta01:-300","sta01:17","110","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("6");
            obj.set_text("대상인원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBg01","109","sta01:17","191","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Edit("txtNO_TARGETUSERCNT","staDS_CONTENT01:15","staDS_CONTENT01:-23","110","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDT_START00","txtNO_TARGETUSERCNT:9","txtNO_TARGETUSERCNT:-20","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("9");
            obj.set_text("명");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT02","0","staDS_CONTENT01:3","110","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("10");
            obj.set_text("지급총액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBg02","109","staBg01:3","191","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PAYMENTAMT","staDS_CONTENT02:15","staDS_CONTENT02:-24","110","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("12");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDT_START01","txtAM_PAYMENTAMT:9","txtAM_PAYMENTAMT:-20","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("13");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT03","0","staDS_CONTENT02:3","110","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("14");
            obj.set_text("소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBg03","109","staBg02:3","191","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_INCOMETAX","staDS_CONTENT03:15","staDS_CONTENT03:-24","110","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("16");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDT_START02","txtAM_INCOMETAX:9","txtAM_INCOMETAX:-21","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("17");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT04","0","staDS_CONTENT03:3","110","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("18");
            obj.set_text("법인세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBg04","109","staBg03:3","191","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CORPTAX","staDS_CONTENT04:15","staDS_CONTENT04:-24","110","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("20");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT05","0","staDS_CONTENT04:3","109","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("21");
            obj.set_text("주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBg05","108","staBg04:3","191","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_INHERBANTTAX","staDS_CONTENT05:15","staDS_CONTENT05:-24","110","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("23");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT06","0","staDS_CONTENT05:3","110","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("24");
            obj.set_text("농특세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBg06","109","staBg05:3","191","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_FARMTAX","staDS_CONTENT06:15","staDS_CONTENT06:-24","110","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("26");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDT_START05","txtAM_FARMTAX:9","txtAM_FARMTAX:-19","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("27");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT07","0","staDS_CONTENT06:3","110","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("28");
            obj.set_text("차인지급액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBg07","109","staBg06:3","191","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_AMOUNTAMT","staDS_CONTENT07:15","staDS_CONTENT07:-24","110","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("30");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDT_START06","txtAM_AMOUNTAMT:9","txtAM_AMOUNTAMT:-21","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("31");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDT_START03","txtAM_CORPTAX:9","txtAM_CORPTAX:-21","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("32");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDT_START04","txtAM_INHERBANTTAX:10","txtAM_INHERBANTTAX:-21","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("33");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divDataLeft:10","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","40","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staNO_BUSINESS","0","staCD_CORP:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta14","staCD_CORP:-1","40","174","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta15","staNO_BUSINESS:-1","sta14:-1","564","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_ZIP_CODE","staNO_BUSINESS:5","73","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00","382","40","298","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","293","40","94","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_text("소득구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta01","762","40","118","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staCD_CORP01","679","40","84","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_text("거주여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta04","0","8","880","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_text("소득자정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staCD_CORP02","679","69","84","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_text("외국인여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","762","69","118","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","140",null,null,"90","44",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","0","108","880","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_text("소득자지급정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtYN_NATION","775","74","90","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtYN_RESIDENT","775","45","90","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtCD_BUSINESSTYPE","395","45","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_BUSINESSTYPE","521","45","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_JUMIN","126","45","160","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_ADDR","236","73","436","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","divData.form.divDataRight.form.txtNO_JUMIN","value","dsList","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.txtCD_BUSINESSTYPE","value","dsList","CD_INCOMECLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.txtDS_BUSINESSTYPE","value","dsList","DS_INCOMECLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.txtYN_RESIDENT","value","dsList","YN_RESIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.txtNO_ZIP_CODE","value","dsList","NO_ZIP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.txtDS_ADDR","value","dsList","DS_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.txtYN_NATION","value","dsList","YN_NATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.ccfSELFACNT.form.CDTextBox","value","dsSearch","CD_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.ccfVENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.ctclYM_IMPUTE_FROM.form.TextBox","value","dsSearch","YM_IMPUTE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.ctclYM_IMPUTE_TO.form.TextBox","value","dsSearch","YM_IMPUTE_TO");
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
        this.registerScript("DHV_ORDERTAX_DEFRAYMENT_SEARCH.xfdl", function() {
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

        	this.ctclYM_IMPUTE_FROM.form.TextBox.set_value(this.gfnGetDate().substring(0,6));
        	this.ctclYM_IMPUTE_TO.form.TextBox.set_value(this.gfnGetDate().substring(0,6));
        	this.ctclDT_CASH00.set_value(this.gfnGetDate());

        	// 세무단위 초기값 설정
        	this.dsSearch.setColumn(0, "CD_DEPT_SELFACNT", this.UserInfo.LEVCD_DEPT_SELFACNT);
        	this.divSearch.form.ccfSELFACNT.form.fnCodeFindLoad();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Save.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDfrmt = this.gfnFormButtonAdd("btnDfrmt", "fnDfrmt");
        	this.btnReport = this.gfnFormButtonAdd("btnReport", "fnReport");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//검색조건
        	this.ccfSELFACNT = this.divSearch.form.ccfSELFACNT;
        	this.ccfVENDOR = this.divSearch.form.ccfVENDOR;
        	this.ctclYM_IMPUTE_FROM = this.divSearch.form.ctclYM_IMPUTE_FROM;
        	this.ctclYM_IMPUTE_TO = this.divSearch.form.ctclYM_IMPUTE_TO;
        	this.ctclDT_CASH00 = this.divData.form.divDataLeft.form.ctclDT_CASH00;

        	//왼쪽 싱글폼
        	this.txtNO_TARGETUSERCNT = this.divData.form.divDataLeft.form.txtNO_TARGETUSERCNT;
        	this.txtAM_PAYMENTAMT = this.divData.form.divDataLeft.form.txtAM_PAYMENTAMT;
        	this.txtAM_INCOMETAX = this.divData.form.divDataLeft.form.txtAM_INCOMETAX;
        	this.txtAM_CORPTAX = this.divData.form.divDataLeft.form.txtAM_CORPTAX;
        	this.txtAM_INHERBANTTAX = this.divData.form.divDataLeft.form.txtAM_INHERBANTTAX;
        	this.txtAM_FARMTAX = this.divData.form.divDataLeft.form.txtAM_FARMTAX;
        	this.txtAM_AMOUNTAMT = this.divData.form.divDataLeft.form.txtAM_AMOUNTAMT;

        	//오른쪽 싱글폼
        	this.txtNO_JUMIN = this.divData.form.divDataRight.form.txtNO_JUMIN;
        	this.txtCD_BUSINESSTYPE = this.divData.form.divDataRight.form.txtCD_BUSINESSTYPE;
        	this.txtDS_BUSINESSTYPE = this.divData.form.divDataRight.form.txtDS_BUSINESSTYPE;
        	this.txtYN_RESIDENT = this.divData.form.divDataRight.form.txtYN_RESIDENT;
        	this.txtNO_ZIP_CODE = this.divData.form.divDataRight.form.txtNO_ZIP_CODE;
        	this.txtDS_ADDR = this.divData.form.divDataRight.form.txtDS_ADDR;
        	this.txtYN_NATION = this.divData.form.divDataRight.form.txtYN_NATION;

        	//그리드
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_ORDERTAX_DEFRAYMENT_SEARCH_01");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHV_ORDERTAX_DEFRAYMENT_SEARCH_02");

        	this.ccfSELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfVENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfSELFACNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfVENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("YM_IMPUTE_FROM", "string");
        	this.dsSelect.addColumn("YM_IMPUTE_TO", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");

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

        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "YM_IMPUTE_FROM", this.dsSearch.getColumn(0, "YM_IMPUTE_FROM"));
        	this.dsSelect.setColumn(0, "YM_IMPUTE_TO", this.dsSearch.getColumn(0, "YM_IMPUTE_TO"));

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

        this.fnSelectSub = function(row) {
        	if (row < 0) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsList.getColumn(this.dsList.rowposition,"CD_DEPT_SELFACNT"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition,"CD_VENDOR"));
        	this.dsSelect.setColumn(0, "YM_IMPUTE_FROM", this.dsList.getColumn(this.dsList.rowposition,"YM_IMPUTE_FROM"));
        	this.dsSelect.setColumn(0, "YM_IMPUTE_TO", this.dsList.getColumn(this.dsList.rowposition,"YM_IMPUTE_TO"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "d_select=dsSelect";
         	var outData     = "dsListSub=d_select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능
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
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	if(this.gfnIsNull(this.ccfSELFACNT.form.CDTextBox.text)) {
        		this.fnVaidateCallback = function() {
        			this.ccfSELFACNT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 입력하세요.","fnVaidateCallback");
        		return false;
        	}
        	 else if(this.gfnIsNull(this.ctclYM_IMPUTE_FROM.form.TextBox.value)) {
        			this.fnVaidateCallback = function() {
        				this.ctclYM_IMPUTE_FROM.setFocus();
        			}
        			this.gfnAlert("귀속년월을 입력하세요.","fnVaidateCallback");
        			return false;
        	}

        	 else if(this.gfnIsNull(this.ctclYM_IMPUTE_TO.form.TextBox.value)) {
        			this.fnVaidateCallback = function() {
        				this.ctclYM_IMPUTE_TO.setFocus();
        			}
        			this.gfnAlert("귀속년월을 입력하세요.","fnVaidateCallback");
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
        	if (svcID == "select") {
        		this.fnSetButton();
        		//trace(this.dsList.rowcount);

        		this.txtNO_TARGETUSERCNT.set_value(this.dsList.rowcount);


        		var AM_PAYMENTAMT_SUM = 0;
        		var AM_INCOMETAX_SUM = 0;
        		var AM_CORPTAX_SUM = 0;
        		var AM_INHERBANTTAX_SUM = 0;
        		var AM_FARMTAX_SUM = 0;
        		var AM_AMOUNTAMT_SUM = 0;

        		// 그리드 총계 금액 싱글폼에 표시
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			AM_PAYMENTAMT_SUM = AM_PAYMENTAMT_SUM + this.dsList.getColumn(i, "AM_PAYMENTAMT");
        			AM_INCOMETAX_SUM = AM_INCOMETAX_SUM + this.dsList.getColumn(i, "AM_INCOMETAX");
        			AM_CORPTAX_SUM = AM_CORPTAX_SUM + this.dsList.getColumn(i, "AM_CORPTAX");
        			AM_INHERBANTTAX_SUM = AM_INHERBANTTAX_SUM + this.dsList.getColumn(i, "AM_INHERBANTTAX");
        			AM_FARMTAX_SUM = AM_FARMTAX_SUM + this.dsList.getColumn(i, "AM_FARMTAX");
        			AM_AMOUNTAMT_SUM = AM_AMOUNTAMT_SUM + this.dsList.getColumn(i, "AM_AMOUNTAMT");
        		}
        		this.txtAM_PAYMENTAMT.set_value(AM_PAYMENTAMT_SUM);
        		this.txtAM_INCOMETAX.set_value(AM_INCOMETAX_SUM);
        		this.txtAM_CORPTAX.set_value(AM_CORPTAX_SUM);
        		this.txtAM_INHERBANTTAX.set_value(AM_INHERBANTTAX_SUM);
        		this.txtAM_FARMTAX.set_value(AM_FARMTAX_SUM);
        		this.txtAM_AMOUNTAMT.set_value(AM_AMOUNTAMT_SUM);

        		this.gfnGridAfterSelect(this.dxGrid);
        		/*this.gfnSetFormStatus(this);*/
        	} else if (svcID == "detail") {
        		if (this.dsList.rowcount < 1) {
        			this.fnSetButton();
        			this.dsListSub.clearData();
        		}
        		if (this.dsListSub.rowcount > 0) {
         			this.fnSetButton();
        // 			this.gfnSetFormStatus(this,"Q");
        		}
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfSELFACNT") {
        		dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVCD_DEPT_SELFACNT);
        	}

        	if (id == "ccfVENDOR") {
        		var CD_DEPT_SELFACNT = this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT");
        		if(this.gfnIsNull(CD_DEPT_SELFACNT)){
        			this.gfnAlert("세무단위를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "YN_INCOMETARGET", "Y");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        		if(id == "ccfSELFACNT") {
        			this.fnSearchInit();
        			//this.gfnSetFormStatus(this, "I");
        		}else if(id == "ccfVENDOR") {
        			this.fnSearchInit();
        			//this.gfnSetFormStatus(this, "I");
        		}
        }



        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        		this.clearDivDataLeft();
        		this.clearDivDataRightUp();
        	}
        };

        this.clearDivDataLeft = function() {
        	this.txtNO_TARGETUSERCNT.set_value("");
        	this.txtAM_PAYMENTAMT.set_value("");
        	this.txtAM_INCOMETAX.set_value("");
        	this.txtAM_CORPTAX.set_value("");
        	this.txtAM_INHERBANTTAX.set_value("");
        	this.txtAM_FARMTAX.set_value("");
        	this.txtAM_AMOUNTAMT.set_value("");
        }

        this.clearDivDataRightUp = function() {
        	this.txtNO_JUMIN.set_value("");
        	this.txtCD_BUSINESSTYPE.set_value("");
        	this.txtDS_BUSINESSTYPE.set_value("");
        	this.txtYN_RESIDENT.set_value("");
        	this.txtNO_ZIP_CODE.set_value("");
        	this.txtDS_ADDR.set_value("");
        	this.txtYN_NATION.set_value("");
        }

        // this.fnDetail = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        // 	var param = {};
        // 	param.CD_SYSTEM = this.dsList.getColumn(this.dsList.rowposition, "CODEFIND");
        // 	param.DS_SYSTEM = this.dsList.getColumn(this.dsList.rowposition, "DS_CODEFIND");
        // 	param.ID_GRID = "DZZ_SAMPLE1";
        //
        // 	// 화면 오픈.
        // 	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        // 	// 타 모듈 화면 호출시 지정할것.
        // 	this.gfnFormOpen("DZO", "DXX_NXGRIDSPEC", "", param);
        //
        // }



        /*
        this.fnUserInfo = function() {
        	this.dsSelectUser.clearData();
        	this.dsSelectUser.addRow();
        	this.dsSelectUser.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelectUser.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);

        	var strSvcId    = "userinfo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "userinfo=dsSelectUser";
        	var outData     = "dsUserInfo=userinfo0";
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
        */

         // 소득정보조회 버튼 클릭시 팝업화면 호출
         this.fnDfrmt = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.CD_DEPT_SELFACNT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_SELFACNT");
        	param.DS_DEPT_SELFACNT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_SELFACNT");
            param.CD_DEPT_ACNT = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_DEPT_ACNT");
        	param.DS_DEPT_ACNT = this.dsListSub.getColumn(this.dsListSub.rowposition, "DS_DEPT_ACNT");
        	param.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");
        	param.YM_IMPUTE_FROM = nexacro.replaceAll(this.dsListSub.getColumn(this.dsListSub.rowposition, "YM_IMPUTE"), "-", "");
        	param.YM_IMPUTE_TO = nexacro.replaceAll(this.dsListSub.getColumn(this.dsListSub.rowposition, "YM_IMPUTE"), "-", "");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_ORDERTAX_DEFRAYMENT", "fnDfrmtCallback", param);
        }

         this.fnDfrmtCallback = function(svcID, value) {
        	//this.FormBtns.Select.click();
        };

        // 월전체출력 버튼 클릭 이벤트
         this.fnReport = function(obj,e) {

        	this.gfnAlert("레포트 출력 준비중입니다.");

        	// 레포트가 만들어지면 주석풀고 연결하기
        	/*
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (this.dsList.rowposition > 1) { this.gfnAlert("출력하실 자료가 없습니다."); return false; }

        	if(this.gfnIsNull(this.ctclDT_CASH00.value)){
        		this.gfnAlert("영수일자가 입력되지 않았습니다.");
        		this.ctclDT_CASH00.setFocus();
        		return false;
        	}

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsReport.addColumn("CD_VENDOR", 		"string");
        	this.dsReport.addColumn("DT_PRINTDATE", 	"string");
        	this.dsReport.addColumn("CD_KEY_CODE", 		"string");
        	this.dsReport.addColumn("YM_IMPUTE", 		"string");

        	var cdKeyCode = "";
        	//소득자 지급정보
        	for(var i=0;i<this.dsListSub.rowcount;i++){

        		if(this.dsListSub.getColumn(i, "YN_SELECT") == 1){
        			var cdDeptAcnt = this.dsListSub.getColumn(i, "CD_DEPT_ACNT");	//귀속부서
        			var noIdx 	   = this.dsListSub.getColumn(i, "NO_IDX");			//순번
        			var ymImpute   = this.dsListSub.getColumn(i, "YM_IMPUTE");		//귀속년월

        			cdKeyCode += cdDeptAcnt + noIdx + ymImpute+"|";
        		}
        	}

        	if (this.gfnIsNull(cdKeyCode)) {
        		this.gfnAlert("출력 대상 자료를 선택하십시요.");
        		return;
        	}

        	this.dsReport.clearData();
        	var nRow = this.dsReport.addRow();
        	this.dsReport.setColumn(nRow, "CD_DEPT_SELFACNT" , this.ccfSELFACNT.form.CDTextBox.value);
        	this.dsReport.setColumn(nRow, "CD_VENDOR"		 , this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
        	this.dsReport.setColumn(nRow, "DT_PRINTDATE"	 , this.ctclDT_CASH00.value);
        	this.dsReport.setColumn(nRow, "CD_KEY_CODE"	 	 , cdKeyCode);
        	this.dsReport.setColumn(nRow, "YM_IMPUTE"	 	 , this.dsSearch.getColumn(0, "YM_IMPUTE_FROM"));

        	var inProc		= "_dsProc";
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report=dsReport";
        	var reportpath  = "/dh/dhv/DHV_ORDERTAX_DEFRAYMENT_RPT.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	*/
        }
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	this.gfnSetFormStatus(this);	// 폼상태 초기화
        	this.gfnGridClear(this.dxGrid);
        	this.gfnGridClear(this.dxGridSub);
        	this.clearDivDataLeft();
        	this.clearDivDataRightUp();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfSELFACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staDT_FROM00.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staDT_START.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staDT_START00.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfVENDOR.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.staDT_START00.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.staDT_START01.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.staDT_START02.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.staDT_START05.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.staDT_START06.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.staDT_START03.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.staDT_START04.addEventHandler("onclick",this.Common_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_ORDERTAX_DEFRAYMENT_SEARCH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
