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
            this.set_titletext("세금계산서/계산서");
            this.getSetter("maxwidth").set("1010");
            this.getSetter("maxheight").set("750");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOut", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_BILL_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHVPR_BILL_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_BILL_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHVPR_BILL_DELETE</Col></Row><Row><Col id=\"SP\">DHVPR_TAX_NO_SELECT</Col><Col id=\"TARGET\">taxno</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YY_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TAXDAMDANG\" type=\"STRING\" size=\"256\"/><Column id=\"ID_TAXEMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PROOF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VATPROOF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUPPLY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"ModiBill\" type=\"STRING\" size=\"256\"/><Column id=\"ModiBill_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BLANK\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUEGUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VENDOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\"/></Row><Row><Col id=\"CD_CODE\">F</Col><Col id=\"DS_CODE\">일반거래처</Col></Row><Row><Col id=\"CD_CODE\">B</Col><Col id=\"DS_CODE\">금융거래처</Col></Row><Row><Col id=\"CD_CODE\">P</Col><Col id=\"DS_CODE\">개인거래처</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VATPROOF", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">세금계산서</Col></Row><Row><Col id=\"CD_CODE\">B</Col><Col id=\"DS_CODE\">계산서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_RECEIPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">영수</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">청구</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsModiBill", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\"/></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">기재사항의 착오, 정정</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">공급가액의 변동</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">환입</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">계약의 해제</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">내국신용장 사후 개설</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTaxNo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDetail","0","70",null,"250","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg00","sta00:-1","0","313","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta01","staBg00:-1","0","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg01","sta01:-1","0","200","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta02","staBg01:-1","0","80","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("권");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg02","sta02:-1","0","60","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta03","staBg02:-1","0","80","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg03","sta03:-1","0","70","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta00:-1","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("작업년도");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg04","sta04:-1","staBg00:-1","313","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","staBg04:-1","sta01:-1","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg05","staCD_VENDOR:-1","staBg01:-1","486","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta04:-1","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("회계단위");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg06","sta06:-1","staBg04:-1","313","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta07","staBg06:-1","staCD_VENDOR:-1","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("거래처담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg07","sta07:-1","staBg05:-1","318","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta08","staBg07:-1","staBg05:-1","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("종사업장번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg08","sta08:-1","staBg05:-1","80","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDT_PROOF","0","sta06:-1","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("증빙일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg09","staDT_PROOF:-1","staBg06:-1","115","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta10","staBg09:-1","staBg06:-1","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("증빙구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg10","sta10:-1","staBg06:-1","110","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staAM_SUPPLY","staBg10:-1","sta07:-1","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg11","staAM_SUPPLY:-1","staBg07:-1","200","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staAM_VAT","staBg11:-1","staBg07:-1","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg12","staAM_VAT:-1","staBg08:-1","198","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta13","0","staDT_PROOF:-1","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("적요");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg13","sta13:-1","staBg09:-1","313","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staNO_VAT","staBg13:-1","staAM_SUPPLY:-1","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_text("증빙번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg14","staNO_VAT:-1","staBg11:-1","200","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta15","staBg14:-1","staAM_VAT:-1","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("영수");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg15","sta15:-1","staBg12:-1","198","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_SELFACNT","sta00:4","4","50","19",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_SELFACNT","ctxtCD_SELFACNT:5","4","245","19",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SJC","sta01:4","4","190","19",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("txtNO_GUN","sta02:4","4","50","19",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("txtNO_SEQ","sta03:4","4","60","19",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("ctclYY_MAGAM","sta04:4","29","60","20",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("37");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("ccboTY_VENDOR","staCD_VENDOR:4","29","98","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("38");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_VENDOR");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","ccboTY_VENDOR:5","29","373","20",null,null,null,null,null,null,this.divDetail.form);
            obj.getSetter("CodeFindName").set("DHX_CFVENDOR_BY_TYVENDOR");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("39");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","sta06:4","56","300","20",null,null,null,null,null,null,this.divDetail.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT_BY_SELFACNT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("40");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("txtDS_TAXDAMDANG","sta07:4","56","70","19",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("txtID_TAXEMAIL","txtDS_TAXDAMDANG:5","56","225","19",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("42");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("txtCD_JONG","sta08:4","56","70","19",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("43");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PROOF","staDT_PROOF:4","81","105","20",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("44");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("ccboTY_VATPROOF","sta10:4","81","97","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("45");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_VATPROOF");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SUPPLY","staAM_SUPPLY:4","81","185","20",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("46");
            obj.set_enable("false");
            obj.set_format("#,###");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_VAT","staAM_VAT:4","81","188","20",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("47");
            obj.set_enable("false");
            obj.set_format("#,###");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("txtDS_REM","94","108","300","19",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("cfNO_VAT","staNO_VAT:4","108","185","20",null,null,null,null,null,null,this.divDetail.form);
            obj.getSetter("CodeFindName").set("DHX_VAT_NO");
            obj.getSetter("CDTextWidth").set("160");
            obj.set_taborder("49");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("ccboYN_RECEIPT","sta15:4","107","97","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("50");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_RECEIPT");
            obj.set_text("cbo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new GroupBox("grb00","0","154","976","86",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("51");
            obj.set_text("수정세금계산서");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta16","8","177","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("53");
            obj.set_text("수정사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg16","sta16:-1","177","873","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta17","8","sta16:-1","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("54");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg17","sta17:-1","staBg16:-1","873","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("ccboModiBill","sta16:4","180","292","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("56");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsModiBill");
            obj.set_text("cbo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("txtRM_BIGO","102","207","292","19",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("57");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkModiBill_YN","ccboModiBill:5","180","150","20",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("58");
            obj.set_text("수정세금계산서 여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staComment","txtRM_BIGO:5","207",null,"20","20",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("59");
            obj.set_color("blue");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divData","0","divDetail:10",null,null,"0","90",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("세금계산서/계산서");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","10","38",null,"22","600",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("세금계산서 정보");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","350",null,"69","27",null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf","430",null,"69","27",null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","510",null,"69","27",null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","35",null,null,"22","20","55",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("증빙번호는 입력한 증빙중 회계단위, 거래처코드, 증빙일자, 공급가, 부가세가 모두 일치하는것만 가능합니다.");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkIssueGubun","60",null,"150","20",null,"20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("전자발행");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.ctxtCD_SELFACNT","value","dsSearch","CD_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.ctxtDS_SELFACNT","value","dsSearch","DS_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.ctxtNO_SJC","value","dsSearch","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.txtNO_GUN","value","dsSearch","NO_GUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.txtNO_SEQ","value","dsSearch","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.ctclYY_MAGAM.form.TextBox","value","dsSearch","YY_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.ccboTY_VENDOR","value","dsSearch","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.ccfCD_VENDOR.form.DSTextBox","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.ccfCD_DEPT_ACNT.form.DSTextBox","value","dsSearch","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.txtDS_TAXDAMDANG","value","dsSearch","DS_TAXDAMDANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.txtID_TAXEMAIL","value","dsSearch","ID_TAXEMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.txtCD_JONG","value","dsSearch","CD_JONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.ctclDT_PROOF","value","dsSearch","DT_PROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.ccboTY_VATPROOF","value","dsSearch","TY_VATPROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDetail.form.txtAM_SUPPLY","value","dsSearch","AM_SUPPLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDetail.form.txtAM_VAT","value","dsSearch","AM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divDetail.form.txtDS_REM","value","dsSearch","DS_REM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divDetail.form.cfNO_VAT.form.CDTextBox","value","dsSearch","NO_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divDetail.form.ccboYN_RECEIPT","value","dsSearch","YN_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divDetail.form.ccboModiBill","value","dsSearch","ModiBill");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divDetail.form.chkModiBill_YN","value","dsSearch","ModiBill_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divDetail.form.txtRM_BIGO","value","dsSearch","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divDetail.form.staComment","text","dsSearch","COMMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","chkIssueGubun","value","dsSearch","ISSUEGUBUN");
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
        this.registerScript("DHV_PBILLDETAIL2.xfdl", function() {
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

        	if (!this.getOwnerFrame().IUD_FLAG) {
        		this.IUD_FLAG = this.getOwnerFrame().IUD_FLAG;
        		this.dsSearch.setColumn(0, "CD_SELFACNT", this.getOwnerFrame().CD_SELFACNT);
        		this.dsSearch.setColumn(0, "DS_SELFACNT", this.getOwnerFrame().DS_SELFACNT);
        		this.dsSearch.setColumn(0, "NO_SJC", this.getOwnerFrame().NO_SJC);
        		this.dsSearch.setColumn(0, "YY_MAGAM", this.getOwnerFrame().YY_MAGAM);

        		if (this.IUD_FLAG == "B") {
        			this.dsSearch.setColumn(0, "YN_BLANK", "Y");
        			this.dsSearch.setColumn(0, "YN_RECEIPT", "Y");
        			this.dsSearch.setColumn(0, "TY_VATPROOF", "A");
        		}
        		else {
        			this.dsSearch.setColumn(0, "YN_BLANK", this.getOwnerFrame().YN_BLANK == "백지발행" ? "Y" : "N");
        			if (!this.gfnIsNull(this.getOwnerFrame().DT_PROOF))
        				this.dsSearch.setColumn(0, "DT_PROOF", this.getOwnerFrame().DT_PROOF);
        			this.dsSearch.setColumn(0, "YN_RECEIPT", this.getOwnerFrame().YN_RECEIPT == "영수" ? "Y" : "N");

        			this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        			this.dsSearch.setColumn(0, "DS_VENDOR", this.getOwnerFrame().DS_VENDOR);

        			this.dsSearch.setColumn(0, "AM_SUPPLY", this.getOwnerFrame().AM_SUPPLY);
        			this.dsSearch.setColumn(0, "AM_VAT", this.getOwnerFrame().AM_VAT);
        			this.dsSearch.setColumn(0, "DS_REM", this.getOwnerFrame().DS_REM);
        			this.dsSearch.setColumn(0, "NO_VAT", this.getOwnerFrame().NO_VAT);

        			if (this.IUD_FLAG != "S") {
        				//TaxNo?
        			}
        			else {
        				this.dsSearch.setColumn(0, "NO_GUN", this.getOwnerFrame().NO_GUN);
        			}
        			this.dsSearch.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);

        			this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.getOwnerFrame().CD_DEPT_ACNT);
        			this.dsSearch.setColumn(0, "DS_DEPT_ACNT", this.getOwnerFrame().DS_DEPT_ACNT);

        			this.dsSearch.setColumn(0, "TY_VENDOR", this.getOwnerFrame().TY_VENDOR);
        			this.dsSearch.setColumn(0, "TY_VATPROOF", this.getOwnerFrame().TY_VATPROOF);

        // 			this.dsSearch.setColumn(0, "CD_SLIP", this.getOwnerFrame().CD_SLIP);
        // 			this.dsSearch.setColumn(0, "INVDATE", this.getOwnerFrame().INVDATE);
        // 			this.dsSearch.setColumn(0, "INVSEQ", this.getOwnerFrame().INVSEQ);

        			this.dsSearch.setColumn(0, "DS_TAXDAMDANG", this.getOwnerFrame().DS_TAXDAMDANG);
        			this.dsSearch.setColumn(0, "ID_TAXEMAIL", this.getOwnerFrame().ID_TAXEMAIL);

        			if (this.getOwnerFrame().TY_ISSUE == "전자" || this.getOwnerFrame().TY_ISSUE == "미발행")
        				this.dsSearch.setColumn(0, "ISSUEGUBUN", "Y");
        			else
        				this.dsSearch.setColumn(0, "ISSUEGUBUN", "N");
        		}

        		this.fnInitGrid();
        		this.fnBillInit();

        		if (this.IUD_FLAG == "S") {
        			this.fnSelect();
        		}

        		if (this.IUD_FLAG == "I") {
        			this.dsSearch.setColumn(0, "YN_RECEIPT", "N");

        			this.fnGetTaxNO();
        		}
        	}
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
        	this.ctxtCD_SELFACNT = this.divDetail.form.ctxtCD_SELFACNT;
        	this.ctxtDS_SELFACNT = this.divDetail.form.ctxtDS_SELFACNT;
        	this.ctxtNO_SJC = this.divDetail.form.ctxtNO_SJC;
        	this.txtNO_GUN = this.divDetail.form.txtNO_GUN;
        	this.txtNO_SEQ = this.divDetail.form.txtNO_SEQ;
        	this.ctclYY_MAGAM = this.divDetail.form.ctclYY_MAGAM;
        	this.ccboTY_VENDOR = this.divDetail.form.ccboTY_VENDOR;
        	this.ccfCD_VENDOR = this.divDetail.form.ccfCD_VENDOR;
        	this.ccfCD_DEPT_ACNT = this.divDetail.form.ccfCD_DEPT_ACNT;
        	this.txtDS_TAXDAMDANG = this.divDetail.form.txtDS_TAXDAMDANG;
        	this.txtID_TAXEMAIL = this.divDetail.form.txtID_TAXEMAIL;
        	this.txtCD_JONG = this.divDetail.form.txtCD_JONG;
        	this.ctclDT_PROOF = this.divDetail.form.ctclDT_PROOF;
        	this.ccboTY_VATPROOF = this.divDetail.form.ccboTY_VATPROOF;
        	this.txtAM_SUPPLY = this.divDetail.form.txtAM_SUPPLY;
        	this.txtAM_VAT = this.divDetail.form.txtAM_VAT;
        	this.txtDS_REM = this.divDetail.form.txtDS_REM;
        	this.cfNO_VAT = this.divDetail.form.cfNO_VAT;
        	this.ccboYN_RECEIPT = this.divDetail.form.ccboYN_RECEIPT;
        	this.ccboModiBill = this.divDetail.form.ccboModiBill;
        	this.chkModiBill_YN = this.divDetail.form.chkModiBill_YN;
        	this.txtRM_BIGO = this.divDetail.form.txtRM_BIGO;
        	this.staComment = this.divDetail.form.staComment;

        	this.staDT_PROOF = this.divDetail.form.staDT_PROOF;
        	this.staCD_VENDOR = this.divDetail.form.staCD_VENDOR;
        	this.staAM_SUPPLY = this.divDetail.form.staAM_SUPPLY;
        	this.staAM_VAT = this.divDetail.form.staAM_VAT;
        	this.staNO_VAT = this.divDetail.form.staNO_VAT;


        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_PBILLSELECT");

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_VAT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("CD_VATPROOF", "string");
        	this.dsSelect.addColumn("DT_FR", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("NO_GUN_FR", "int");
        	this.dsSelect.addColumn("NO_SEQ_FR", "int");
        	this.dsSelect.addColumn("NO_GUN_TO", "int");
        	this.dsSelect.addColumn("NO_SEQ_TO", "int");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsInsert.addColumn("YR_ACCOUNT", "string");
        	this.dsInsert.addColumn("CD_VATPROOF", "string");
        	this.dsInsert.addColumn("NO_GUN", "int");
        	this.dsInsert.addColumn("NO_SEQ", "int");
        	this.dsInsert.addColumn("DS_DEPT_SELFACNT", "string");
        	this.dsInsert.addColumn("NO_SJC", "string");
        	this.dsInsert.addColumn("CD_DEPT_ACNT", "string");
        	this.dsInsert.addColumn("TY_VENDOR", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("DS_VENDOR", "string");
        	this.dsInsert.addColumn("YN_BLANK", "string");
        	this.dsInsert.addColumn("DT_PROOF", "string");
        	this.dsInsert.addColumn("AM_SUPPLY", "bigdecimal");
        	this.dsInsert.addColumn("AM_VAT", "bigdecimal");
        	this.dsInsert.addColumn("YN_RECEIPT", "string");
        	this.dsInsert.addColumn("DS_REM", "string");
        	this.dsInsert.addColumn("NO_VAT", "string");

        	this.dsInsert.addColumn("MM_PROOF1", "string");
        	this.dsInsert.addColumn("DD_PROOF1", "string");
        	this.dsInsert.addColumn("DS_ITEM1", "string");
        	this.dsInsert.addColumn("DS_STANDARD1", "string");
        	this.dsInsert.addColumn("CN_ITEM1", "int");
        	this.dsInsert.addColumn("AM_UNIT1", "bigdecimal");
        	this.dsInsert.addColumn("AM_SUPPLY1", "bigdecimal");
        	this.dsInsert.addColumn("AM_VAT1", "bigdecimal");
        	this.dsInsert.addColumn("DS_REM1", "string");

        	this.dsInsert.addColumn("MM_PROOF2", "string");
        	this.dsInsert.addColumn("DD_PROOF2", "string");
        	this.dsInsert.addColumn("DS_ITEM2", "string");
        	this.dsInsert.addColumn("DS_STANDARD2", "string");
        	this.dsInsert.addColumn("CN_ITEM2", "int");
        	this.dsInsert.addColumn("AM_UNIT2", "bigdecimal");
        	this.dsInsert.addColumn("AM_SUPPLY2", "bigdecimal");
        	this.dsInsert.addColumn("AM_VAT2", "bigdecimal");
        	this.dsInsert.addColumn("DS_REM2", "string");

        	this.dsInsert.addColumn("MM_PROOF3", "string");
        	this.dsInsert.addColumn("DD_PROOF3", "string");
        	this.dsInsert.addColumn("DS_ITEM3", "string");
        	this.dsInsert.addColumn("DS_STANDARD3", "string");
        	this.dsInsert.addColumn("CN_ITEM3", "int");
        	this.dsInsert.addColumn("AM_UNIT3", "bigdecimal");
        	this.dsInsert.addColumn("AM_SUPPLY3", "bigdecimal");
        	this.dsInsert.addColumn("AM_VAT3", "bigdecimal");
        	this.dsInsert.addColumn("DS_REM3", "string");

        	this.dsInsert.addColumn("MM_PROOF4", "string");
        	this.dsInsert.addColumn("DD_PROOF4", "string");
        	this.dsInsert.addColumn("DS_ITEM4", "string");
        	this.dsInsert.addColumn("DS_STANDARD4", "string");
        	this.dsInsert.addColumn("CN_ITEM4", "int");
        	this.dsInsert.addColumn("AM_UNIT4", "bigdecimal");
        	this.dsInsert.addColumn("AM_SUPPLY4", "bigdecimal");
        	this.dsInsert.addColumn("AM_VAT4", "bigdecimal");
        	this.dsInsert.addColumn("DS_REM4", "string");

        	this.dsInsert.addColumn("ISSUE_GUBUN", "string");
        	this.dsInsert.addColumn("YN_MODIBILL", "string");
        	this.dsInsert.addColumn("CD_MODIBILL", "string");
        	this.dsInsert.addColumn("RM_MODIBILL", "string");
        	this.dsInsert.addColumn("CD_JONG", "string");
        	this.dsInsert.addColumn("ID_UPDATE", "string");
        	this.dsInsert.addColumn("NO_SEQ_RETURN", "int");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsUpdate.addColumn("YR_ACCOUNT", "string");
        	this.dsUpdate.addColumn("CD_VATPROOF", "string");
        	this.dsUpdate.addColumn("NO_GUN", "int");
        	this.dsUpdate.addColumn("NO_SEQ", "int");
        	this.dsUpdate.addColumn("DS_DEPT_SELFACNT", "string");
        	this.dsUpdate.addColumn("NO_SJC", "string");
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("TY_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("DS_VENDOR", "string");
        	this.dsUpdate.addColumn("YN_BLANK", "string");
        	this.dsUpdate.addColumn("DT_PROOF", "string");
        	this.dsUpdate.addColumn("AM_SUPPLY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_VAT", "bigdecimal");
        	this.dsUpdate.addColumn("YN_RECEIPT", "string");
        	this.dsUpdate.addColumn("DS_REM", "string");
        	this.dsUpdate.addColumn("NO_VAT", "string");

        	this.dsUpdate.addColumn("MM_PROOF1", "string");
        	this.dsUpdate.addColumn("DD_PROOF1", "string");
        	this.dsUpdate.addColumn("DS_ITEM1", "string");
        	this.dsUpdate.addColumn("DS_STANDARD1", "string");
        	this.dsUpdate.addColumn("CN_ITEM1", "int");
        	this.dsUpdate.addColumn("AM_UNIT1", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SUPPLY1", "bigdecimal");
        	this.dsUpdate.addColumn("AM_VAT1", "bigdecimal");
        	this.dsUpdate.addColumn("DS_REM1", "string");

        	this.dsUpdate.addColumn("MM_PROOF2", "string");
        	this.dsUpdate.addColumn("DD_PROOF2", "string");
        	this.dsUpdate.addColumn("DS_ITEM2", "string");
        	this.dsUpdate.addColumn("DS_STANDARD2", "string");
        	this.dsUpdate.addColumn("CN_ITEM2", "int");
        	this.dsUpdate.addColumn("AM_UNIT2", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SUPPLY2", "bigdecimal");
        	this.dsUpdate.addColumn("AM_VAT2", "bigdecimal");
        	this.dsUpdate.addColumn("DS_REM2", "string");

        	this.dsUpdate.addColumn("MM_PROOF3", "string");
        	this.dsUpdate.addColumn("DD_PROOF3", "string");
        	this.dsUpdate.addColumn("DS_ITEM3", "string");
        	this.dsUpdate.addColumn("DS_STANDARD3", "string");
        	this.dsUpdate.addColumn("CN_ITEM3", "int");
        	this.dsUpdate.addColumn("AM_UNIT3", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SUPPLY3", "bigdecimal");
        	this.dsUpdate.addColumn("AM_VAT3", "bigdecimal");
        	this.dsUpdate.addColumn("DS_REM3", "string");

        	this.dsUpdate.addColumn("MM_PROOF4", "string");
        	this.dsUpdate.addColumn("DD_PROOF4", "string");
        	this.dsUpdate.addColumn("DS_ITEM4", "string");
        	this.dsUpdate.addColumn("DS_STANDARD4", "string");
        	this.dsUpdate.addColumn("CN_ITEM4", "int");
        	this.dsUpdate.addColumn("AM_UNIT4", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SUPPLY4", "bigdecimal");
        	this.dsUpdate.addColumn("AM_VAT4", "bigdecimal");
        	this.dsUpdate.addColumn("DS_REM4", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsDelete.addColumn("YR_ACCOUNT", "string");
        	this.dsDelete.addColumn("CD_VATPROOF", "string");
        	this.dsDelete.addColumn("NO_GUN", "int");
        	this.dsDelete.addColumn("NO_SEQ", "int");
        	this.dsDelete.addColumn("ID_DELETE", "string");

        	this.dsSelectTax = new Dataset();
        	this.dsSelectTax.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelectTax.addColumn("CD_VATPROOF", "string");
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
         	this.dsSelect.setColumn(0, "NO_VAT", this.getOwnerFrame().NO_VAT);
         	this.dsSelect.setColumn(0, "CD_SLIP", this.getOwnerFrame().CD_SLIP);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList1=select0";
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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	if (this.IUD_FLAG == "I" || this.IUD_FLAG == "B") {
        		var nrow = this.dsInsert.addRow();
        		this.dsInsert.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_SELFACNT"));
        		this.dsInsert.setColumn(nrow, "YR_ACCOUNT", this.dsSearch.getColumn(0, "YY_MAGAM"));
        		this.dsInsert.setColumn(nrow, "CD_VATPROOF", this.dsSearch.getColumn(0, "TY_VATPROOF"));
        		this.dsInsert.setColumn(nrow, "NO_GUN", this.dsSearch.getColumn(0, "NO_GUN"));
        		this.dsInsert.setColumn(nrow, "NO_SEQ", 0);
        		this.dsInsert.setColumn(nrow, "DS_DEPT_SELFACNT", this.dsSearch.getColumn(0, "DS_SELFACNT"));
        		this.dsInsert.setColumn(nrow, "NO_SJC", this.dsSearch.getColumn(0, "NO_SJC"));
        		this.dsInsert.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        		this.dsInsert.setColumn(nrow, "TY_VENDOR", this.dsSearch.getColumn(0, "TY_VENDOR"));
        		this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        		this.dsInsert.setColumn(nrow, "DS_VENDOR", this.dsSearch.getColumn(0, "DS_VENDOR"));
        		this.dsInsert.setColumn(nrow, "YN_BLANK", this.dsSearch.getColumn(0, "YN_BLANK"));
        		this.dsInsert.setColumn(nrow, "DT_PROOF", this.dsSearch.getColumn(0, "DT_PROOF"));
        		this.dsInsert.setColumn(nrow, "AM_SUPPLY", this.dsSearch.getColumn(0, "AM_SUPPLY"));
        		this.dsInsert.setColumn(nrow, "AM_VAT", this.dsSearch.getColumn(0, "AM_VAT"));
        		this.dsInsert.setColumn(nrow, "YN_RECEIPT", this.dsSearch.getColumn(0, "YN_RECEIPT"));
        		this.dsInsert.setColumn(nrow, "DS_REM", this.dsSearch.getColumn(0, "DS_REM"));
        		this.dsInsert.setColumn(nrow, "NO_VAT", this.dsSearch.getColumn(0, "NO_VAT"));

        		this.dsInsert.setColumn(nrow, "MM_PROOF1", this.dsList.getColumn(0, "MM_PROOF"));
        		this.dsInsert.setColumn(nrow, "DD_PROOF1", this.dsList.getColumn(0, "DD_PROOF"));
        		this.dsInsert.setColumn(nrow, "DS_ITEM1", this.dsList.getColumn(0, "DS_ITEM"));
        		this.dsInsert.setColumn(nrow, "DS_STANDARD1", this.dsList.getColumn(0, "DS_STANDARD"));
        		this.dsInsert.setColumn(nrow, "CN_ITEM1", this.dsList.getColumn(0, "CN_ITEM"));
        		this.dsInsert.setColumn(nrow, "AM_UNIT1", this.dsList.getColumn(0, "AM_UNIT"));
        		this.dsInsert.setColumn(nrow, "AM_SUPPLY1", this.dsList.getColumn(i, "AM_SUPPLY"));
        		this.dsInsert.setColumn(nrow, "AM_VAT1", this.dsList.getColumn(0, "AM_VAT"));
        		this.dsInsert.setColumn(nrow, "DS_REM1", this.dsList.getColumn(0, "DS_REM"));

        		this.dsInsert.setColumn(nrow, "MM_PROOF2", this.dsList.getColumn(1, "MM_PROOF"));
        		this.dsInsert.setColumn(nrow, "DD_PROOF2", this.dsList.getColumn(1, "DD_PROOF"));
        		this.dsInsert.setColumn(nrow, "DS_ITEM2", this.dsList.getColumn(1, "DS_ITEM"));
        		this.dsInsert.setColumn(nrow, "DS_STANDARD2", this.dsList.getColumn(1, "DS_STANDARD"));
        		this.dsInsert.setColumn(nrow, "CN_ITEM2", this.dsList.getColumn(1, "CN_ITEM"));
        		this.dsInsert.setColumn(nrow, "AM_UNIT2", this.dsList.getColumn(1, "AM_UNIT"));
        		this.dsInsert.setColumn(nrow, "AM_SUPPLY2", this.dsList.getColumn(1, "AM_SUPPLY"));
        		this.dsInsert.setColumn(nrow, "AM_VAT2", this.dsList.getColumn(1, "AM_VAT"));
        		this.dsInsert.setColumn(nrow, "DS_REM2", this.dsList.getColumn(1, "DS_REM"));

        		this.dsInsert.setColumn(nrow, "MM_PROOF3", this.dsList.getColumn(2, "MM_PROOF"));
        		this.dsInsert.setColumn(nrow, "DD_PROOF3", this.dsList.getColumn(2, "DD_PROOF"));
        		this.dsInsert.setColumn(nrow, "DS_ITEM3", this.dsList.getColumn(2, "DS_ITEM"));
        		this.dsInsert.setColumn(nrow, "DS_STANDARD3", this.dsList.getColumn(2, "DS_STANDARD"));
        		this.dsInsert.setColumn(nrow, "CN_ITEM3", this.dsList.getColumn(2, "CN_ITEM"));
        		this.dsInsert.setColumn(nrow, "AM_UNIT3", this.dsList.getColumn(2, "AM_UNIT"));
        		this.dsInsert.setColumn(nrow, "AM_SUPPLY3", this.dsList.getColumn(2, "AM_SUPPLY"));
        		this.dsInsert.setColumn(nrow, "AM_VAT3", this.dsList.getColumn(2, "AM_VAT"));
        		this.dsInsert.setColumn(nrow, "DS_REM3", this.dsList.getColumn(2, "DS_REM"));

        		this.dsInsert.setColumn(nrow, "MM_PROOF4", this.dsList.getColumn(3, "MM_PROOF"));
        		this.dsInsert.setColumn(nrow, "DD_PROOF4", this.dsList.getColumn(3, "DD_PROOF"));
        		this.dsInsert.setColumn(nrow, "DS_ITEM4", this.dsList.getColumn(3, "DS_ITEM"));
        		this.dsInsert.setColumn(nrow, "DS_STANDARD4", this.dsList.getColumn(3, "DS_STANDARD"));
        		this.dsInsert.setColumn(nrow, "CN_ITEM4", this.dsList.getColumn(3, "CN_ITEM"));
        		this.dsInsert.setColumn(nrow, "AM_UNIT4", this.dsList.getColumn(3, "AM_UNIT"));
        		this.dsInsert.setColumn(nrow, "AM_SUPPLY4", this.dsList.getColumn(3, "AM_SUPPLY"));
        		this.dsInsert.setColumn(nrow, "AM_VAT4", this.dsList.getColumn(3, "AM_VAT"));
        		this.dsInsert.setColumn(nrow, "DS_REM4", this.dsList.getColumn(3, "DS_REM"));

        		this.dsInsert.setColumn(nrow, "ISSUE_GUBUN", this.dsSearch.getColumn(0, "ISSUEGUBUN") == "Y" ? "E" : "P");
        		this.dsInsert.setColumn(nrow, "YN_MODIBILL", this.dsSearch.getColumn(0, "ModiBill_YN"));
        		this.dsInsert.setColumn(nrow, "CD_MODIBILL", this.dsSearch.getColumn(0, "ModiBill"));
        		this.dsInsert.setColumn(nrow, "RM_MODIBILL", this.dsSearch.getColumn(0, "RM_BIGO"));
        		this.dsInsert.setColumn(nrow, "CD_JONG", this.dsSearch.getColumn(0, "CD_JONG"));
        		this.dsInsert.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        		this.dsInsert.setColumn(nrow, "NO_SEQ_RETURN", "");
        	}
        	else if (this.IUD_FLAG == "D") {
        		var nrow = this.dsUpdate.addRow();
        		this.dsUpdate.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_SELFACNT"));
        		this.dsUpdate.setColumn(nrow, "YR_ACCOUNT", this.dsSearch.getColumn(0, "YY_MAGAM"));
        		this.dsUpdate.setColumn(nrow, "CD_VATPROOF", this.dsSearch.getColumn(0, "TY_VATPROOF"));
        		this.dsUpdate.setColumn(nrow, "NO_GUN", this.dsSearch.getColumn(0, "NO_GUN"));
        		this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        		this.dsUpdate.setColumn(nrow, "DS_DEPT_SELFACNT", this.dsSearch.getColumn(0, "DS_SELFACNT"));
        		this.dsUpdate.setColumn(nrow, "NO_SJC", this.dsSearch.getColumn(0, "NO_SJC"));
        		this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        		this.dsUpdate.setColumn(nrow, "TY_VENDOR", this.dsSearch.getColumn(0, "TY_VENDOR"));
        		this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        		this.dsUpdate.setColumn(nrow, "DS_VENDOR", this.dsSearch.getColumn(0, "DS_VENDOR"));
        		this.dsUpdate.setColumn(nrow, "YN_BLANK", this.dsSearch.getColumn(0, "YN_BLANK"));
        		this.dsUpdate.setColumn(nrow, "DT_PROOF", this.dsSearch.getColumn(0, "DT_PROOF"));
        		this.dsUpdate.setColumn(nrow, "AM_SUPPLY", this.dsSearch.getColumn(0, "AM_SUPPLY"));
        		this.dsUpdate.setColumn(nrow, "AM_VAT", this.dsSearch.getColumn(0, "AM_VAT"));
        		this.dsUpdate.setColumn(nrow, "YN_RECEIPT", this.dsSearch.getColumn(0, "YN_RECEIPT"));
        		this.dsUpdate.setColumn(nrow, "DS_REM", this.dsSearch.getColumn(0, "DS_REM"));
        		this.dsUpdate.setColumn(nrow, "NO_VAT", this.dsSearch.getColumn(0, "NO_VAT"));

        		this.dsUpdate.setColumn(nrow, "MM_PROOF1", this.dsList.getColumn(0, "MM_PROOF"));
        		this.dsUpdate.setColumn(nrow, "DD_PROOF1", this.dsList.getColumn(0, "DD_PROOF"));
        		this.dsUpdate.setColumn(nrow, "DS_ITEM1", this.dsList.getColumn(0, "DS_ITEM"));
        		this.dsUpdate.setColumn(nrow, "DS_STANDARD1", this.dsList.getColumn(0, "DS_STANDARD"));
        		this.dsUpdate.setColumn(nrow, "CN_ITEM1", this.dsList.getColumn(0, "CN_ITEM"));
        		this.dsUpdate.setColumn(nrow, "AM_UNIT1", this.dsList.getColumn(0, "AM_UNIT"));
        		this.dsUpdate.setColumn(nrow, "AM_SUPPLY1", this.dsList.getColumn(0, "AM_SUPPLY"));
        		this.dsUpdate.setColumn(nrow, "AM_VAT1", this.dsList.getColumn(0, "AM_VAT"));
        		this.dsUpdate.setColumn(nrow, "DS_REM1", this.dsList.getColumn(0, "DS_REM"));

        		this.dsUpdate.setColumn(nrow, "MM_PROOF2", this.dsList.getColumn(1, "MM_PROOF"));
        		this.dsUpdate.setColumn(nrow, "DD_PROOF2", this.dsList.getColumn(1, "DD_PROOF"));
        		this.dsUpdate.setColumn(nrow, "DS_ITEM2", this.dsList.getColumn(1, "DS_ITEM"));
        		this.dsUpdate.setColumn(nrow, "DS_STANDARD2", this.dsList.getColumn(1, "DS_STANDARD"));
        		this.dsUpdate.setColumn(nrow, "CN_ITEM2", this.dsList.getColumn(1, "CN_ITEM"));
        		this.dsUpdate.setColumn(nrow, "AM_UNIT2", this.dsList.getColumn(1, "AM_UNIT"));
        		this.dsUpdate.setColumn(nrow, "AM_SUPPLY2", this.dsList.getColumn(1, "AM_SUPPLY"));
        		this.dsUpdate.setColumn(nrow, "AM_VAT2", this.dsList.getColumn(1, "AM_VAT"));
        		this.dsUpdate.setColumn(nrow, "DS_REM2", this.dsList.getColumn(1, "DS_REM"));

        		this.dsUpdate.setColumn(nrow, "MM_PROOF3", this.dsList.getColumn(2, "MM_PROOF"));
        		this.dsUpdate.setColumn(nrow, "DD_PROOF3", this.dsList.getColumn(2, "DD_PROOF"));
        		this.dsUpdate.setColumn(nrow, "DS_ITEM3", this.dsList.getColumn(2, "DS_ITEM"));
        		this.dsUpdate.setColumn(nrow, "DS_STANDARD3", this.dsList.getColumn(2, "DS_STANDARD"));
        		this.dsUpdate.setColumn(nrow, "CN_ITEM3", this.dsList.getColumn(2, "CN_ITEM"));
        		this.dsUpdate.setColumn(nrow, "AM_UNIT3", this.dsList.getColumn(2, "AM_UNIT"));
        		this.dsUpdate.setColumn(nrow, "AM_SUPPLY3", this.dsList.getColumn(2, "AM_SUPPLY"));
        		this.dsUpdate.setColumn(nrow, "AM_VAT3", this.dsList.getColumn(2, "AM_VAT"));
        		this.dsUpdate.setColumn(nrow, "DS_REM3", this.dsList.getColumn(2, "DS_REM"));

        		this.dsUpdate.setColumn(nrow, "MM_PROOF4", this.dsList.getColumn(3, "MM_PROOF"));
        		this.dsUpdate.setColumn(nrow, "DD_PROOF4", this.dsList.getColumn(3, "DD_PROOF"));
        		this.dsUpdate.setColumn(nrow, "DS_ITEM4", this.dsList.getColumn(3, "DS_ITEM"));
        		this.dsUpdate.setColumn(nrow, "DS_STANDARD4", this.dsList.getColumn(3, "DS_STANDARD"));
        		this.dsUpdate.setColumn(nrow, "CN_ITEM4", this.dsList.getColumn(3, "CN_ITEM"));
        		this.dsUpdate.setColumn(nrow, "AM_UNIT4", this.dsList.getColumn(3, "AM_UNIT"));
        		this.dsUpdate.setColumn(nrow, "AM_SUPPLY4", this.dsList.getColumn(3, "AM_SUPPLY"));
        		this.dsUpdate.setColumn(nrow, "AM_VAT4", this.dsList.getColumn(3, "AM_VAT"));
        		this.dsUpdate.setColumn(nrow, "DS_REM4", this.dsList.getColumn(3, "DS_REM"));
        		this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        	}
        	else if (this.IUD_FLAG == "U") {
        		var nrow = this.dsDelete.addRow();
        		this.dsDelete.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsDelete.getColumn(0, "CD_SELFACNT"));
        		this.dsDelete.setColumn(nrow, "YR_ACCOUNT", this.dsDelete.getColumn(0, "YY_MAGAM"));
        		this.dsDelete.setColumn(nrow, "CD_VATPROOF", this.dsDelete.getColumn(0, "TY_VATPROOF"));
        		this.dsDelete.setColumn(nrow, "NO_GUN", this.dsDelete.getColumn(0, "NO_GUN"));
        		this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsDelete.getColumn(0, "NO_SEQ"));
        		this.dsDelete.setColumn(nrow, "ID_DELETE", this.AuthClient.ID_USER);
        	}
        	else {
        		this.gfnAlert("저장작업을 할 수 없습니다. 개발자 오류");
        		return;
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        	var outData     = "dsOut=insert";
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

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	return true;
        };

        this.fnSaveValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SELFACNT"))) {
        		this.fnVaidateCallback = function() {
        			this.ctxtCD_SELFACNT.setFocus();
        		}
        		this.gfnAlert("세무단위가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_GUN"))) {
        		this.fnVaidateCallback = function() {
        			this.txtNO_GUN.setFocus();
        		}
        		this.gfnAlert("권이 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_PROOF"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_PROOF.setFocus();
        		}
        		this.gfnAlert("증빙일자가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.dsSearch.getColumn(0, "YN_BLANK") == "N") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR"))) {
        			this.fnVaidateCallback = function() {
        				this.ccfCD_VENDOR.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("거래처가 입력되지 않았습니다.", "fnVaidateCallback");
        			return false;
        		}
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "AM_SUPPLY"))) {
        			this.fnVaidateCallback = function() {
        				this.txtAM_SUPPLY.setFocus();
        			}
        			this.gfnAlert("공급가를 먼저 입력하세요.", "fnVaidateCallback");
        			return false;
        		}
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "AM_VAT"))) {
        			this.fnVaidateCallback = function() {
        				this.txtAM_VAT.setFocus();
        			}
        			this.gfnAlert("부가세 먼저 입력하세요.", "fnVaidateCallback");
        			return false;
        		}
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_VAT"))) {
        			this.fnVaidateCallback = function() {
        				this.cfNO_VAT.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("증빙번호를 먼저 입력하세요.", "fnVaidateCallback");
        			return false;
        		}
        	}

        	if (this.dsSearch.getColumn(0, "ModiBill_YN") == "Y") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "ModiBill"))) {
        			this.fnVaidateCallback = function() {
        				this.ccboModiBill.setFocus();
        			}
        			this.gfnAlert("수정사유를 선택하여 입력하세요.", "fnVaidateCallback");
        			return false;
        		}
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "RM_BIGO"))) {
        			this.fnVaidateCallback = function() {
        				this.txtRM_BIGO.setFocus();
        			}
        			this.gfnAlert("비고를 입력하세요.", "fnVaidateCallback");
        			return false;
        		}
        	}

        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
        */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if (this.dsList1.rowcount > 0) {
        			this.dsSearch.setColumn(0, "NO_GUN", this.dsList1.getColumn(0, "NO_GUN"))
        			this.dsSearch.setColumn(0, "NO_SEQ", this.dsList1.getColumn(0, "NO_SEQ"))
        			this.dsSearch.setColumn(0, "DS_TAXDAMDANG", this.dsList1.getColumn(0, "DS_TAXDAMDANG"))
        			this.dsSearch.setColumn(0, "ID_TAXEMAIL", this.dsList1.getColumn(0, "ID_TAXEMAIL"))

        			this.dsList.setColumn(0, "MM_PROOF", this.dsList1.getColumn(0, "MM_PROOF1"));
        			this.dsList.setColumn(0, "DD_PROOF", this.dsList1.getColumn(0, "DD_PROOF1"));
        			this.dsList.setColumn(0, "DS_ITEM", this.dsList1.getColumn(0, "DS_ITEM1"));
        			this.dsList.setColumn(0, "DS_STANDARD", this.dsList1.getColumn(0, "DS_STANDARD1"));
        			this.dsList.setColumn(0, "CN_ITEM", this.dsList1.getColumn(0, "CN_ITEM1"));
        			this.dsList.setColumn(0, "AM_UNIT", this.dsList1.getColumn(0, "AM_UNIT1"));
        			this.dsList.setColumn(0, "AM_SUPPLY", this.dsList1.getColumn(0, "AM_SUPPLY1"));
        			this.dsList.setColumn(0, "AM_VAT", this.dsList1.getColumn(0, "AM_VAT1"));
        			this.dsList.setColumn(0, "DS_REM", this.dsList1.getColumn(0, "DS_REM1"));

        			this.dsList.setColumn(1, "MM_PROOF", this.dsList1.getColumn(0, "MM_PROOF2"));
        			this.dsList.setColumn(1, "DD_PROOF", this.dsList1.getColumn(0, "DD_PROOF2"));
        			this.dsList.setColumn(1, "DS_ITEM", this.dsList1.getColumn(0, "DS_ITEM2"));
        			this.dsList.setColumn(1, "DS_STANDARD", this.dsList1.getColumn(0, "DS_STANDARD2"));
        			this.dsList.setColumn(1, "CN_ITEM", this.dsList1.getColumn(0, "CN_ITEM2"));
        			this.dsList.setColumn(1, "AM_UNIT", this.dsList1.getColumn(0, "AM_UNIT2"));
        			this.dsList.setColumn(1, "AM_SUPPLY", this.dsList1.getColumn(0, "AM_SUPPLY2"));
        			this.dsList.setColumn(1, "AM_VAT", this.dsList1.getColumn(0, "AM_VAT2"));
        			this.dsList.setColumn(1, "DS_REM", this.dsList1.getColumn(0, "DS_REM2"));

        			this.dsList.setColumn(2, "MM_PROOF", this.dsList1.getColumn(0, "MM_PROOF3"));
        			this.dsList.setColumn(2, "DD_PROOF", this.dsList1.getColumn(0, "DD_PROOF3"));
        			this.dsList.setColumn(2, "DS_ITEM", this.dsList1.getColumn(0, "DS_ITEM3"));
        			this.dsList.setColumn(2, "DS_STANDARD", this.dsList1.getColumn(0, "DS_STANDARD3"));
        			this.dsList.setColumn(2, "CN_ITEM", this.dsList1.getColumn(0, "CN_ITEM3"));
        			this.dsList.setColumn(2, "AM_UNIT", this.dsList1.getColumn(0, "AM_UNIT3"));
        			this.dsList.setColumn(2, "AM_SUPPLY", this.dsList1.getColumn(0, "AM_SUPPLY3"));
        			this.dsList.setColumn(2, "AM_VAT", this.dsList1.getColumn(0, "AM_VAT3"));
        			this.dsList.setColumn(2, "DS_REM", this.dsList1.getColumn(0, "DS_REM3"));

        			this.dsList.setColumn(3, "MM_PROOF", this.dsList1.getColumn(0, "MM_PROOF4"));
        			this.dsList.setColumn(3, "DD_PROOF", this.dsList1.getColumn(0, "DD_PROOF4"));
        			this.dsList.setColumn(3, "DS_ITEM", this.dsList1.getColumn(0, "DS_ITEM4"));
        			this.dsList.setColumn(3, "DS_STANDARD", this.dsList1.getColumn(0, "DS_STANDARD4"));
        			this.dsList.setColumn(3, "CN_ITEM", this.dsList1.getColumn(0, "CN_ITEM4"));
        			this.dsList.setColumn(3, "AM_UNIT", this.dsList1.getColumn(0, "AM_UNIT4"));
        			this.dsList.setColumn(3, "AM_SUPPLY", this.dsList1.getColumn(0, "AM_SUPPLY4"));
        			this.dsList.setColumn(3, "AM_VAT", this.dsList1.getColumn(0, "AM_VAT4"));
        			this.dsList.setColumn(3, "DS_REM", this.dsList1.getColumn(0, "DS_REM4"));
        		}

        		this.fnYN_BLANKChanged();
        		this.btnDel.set_visible(true);
        	}
        	else if (svcID == "save") {
        		if (errorCode == 0) {
        			if (this.IUD_FLAG == "I" || this.IUD_FLAG == "B") {
        				this.dsSearch.setColumn(0, "NO_SEQ", this.dsOut.getColumn(0, "NO_SEQ_RETURN"));
        			}

        			if (this.IUD_FLAG != "D") {
        				if (this.dsSearch.getColumn(0, "ISSUEGUBUN") == "N")  {
        					// Print
        					// DHV_BILLTAX_REPORT or DHV_BILL_REPORT
        				}
        			}

        			this.getParentContext().close(true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "taxno") {
        		if (errorCode == 0) {
        			if (this.dsTaxNo.rowcount > 0) {
        				this.dsSearch.setColumn(0, "NO_GUN", this.dsTaxNo.getColumn(0, "NO_GUN"));
        				this.dsSearch.setColumn(0, "NO_SEQ", this.dsTaxNo.getColumn(0, "NO_MAX"));
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_DEPT_ACNT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_SELFACNT"));
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPPER", "");
        	}
        	else if (id == "ccfCD_VENDOR") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR", this.dsSearch.getColumn(0, "TY_VENDOR"));
        		dsUserParam.setColumn(nrow, "CD_DEPT_REF", this.dsSearch.getColumn(0, "CD_SELFACNT"));
        		dsUserParam.setColumn(nrow, "ORIGENTTAX", "");
        	}
        	else if (id == "ccfNO_VAT") {
        // 		//?? DHX_VAT_NO 코드파인드 정보가 없음.
        // 		this.dsSearch.getColumn(0, "CD_DEPT_ACNT")
        // 		this.dsSearch.getColumn(0, "CD_VENDOR")
        // 		this.dsSearch.getColumn(0, "DT_PROOF")
        // 		this.dsSearch.getColumn(0, "TY_VENDOR")
        // 		this.dsSearch.getColumn(0, "AM_SUPPLY")
        // 		this.dsSearch.getColumn(0, "AM_VAT")
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	if (this.IUD_FLAG == "S") {
        		return false;
        	}
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        	if (e.columnid == "AM_SUPPLY") {
        		if (e.oldvalue != e.newvalue) {
        			var r = this.dsList.rowposition;
        			var amVat = nexacro.toNumber(this.dsList.getColumn(r, "AM_SUPPLY")) / 10 > 0 ? nexacro.toNumber(this.dsList.getColumn(r, "AM_SUPPLY")) : 0;
        			this.dsList.setColumn(r, "AM_VAT", amVat);
        		}
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		switch(e.columnid) {
        			case "ModiBill":
        				var msg = "";
        				switch (e.newvalue) {
        					case "01":
        						msg = "<- 수정분 발급일자 및 사유";
        						break;
        					case "02":
        						msg = "<- 당초 발급일자 및 사유";
        						break;
        					case "03":
        						msg = "<- 당초 세금계산서 작성일자 기재";
        						break;
        					case "04":
        						msg = "<- 당초 세금계산서 작성일자 기재";
        						break;
        					case "05":
        						msg = "<- 내국신용장개설일자 기재";
        						break;
        				}
        				this.dsSearch.setColumn(0, "COMMENT", msg)
        				break;

        			case "ModiBill_YN":
        				if (e.newvalue == "Y") {
        					this.ccboModiBill.set_enable(true);
        					this.txtRM_BIGO.set_readonly(false);
        				}
        				else {
        					this.ccboModiBill.set_enable(false);
        					this.dsSearch.setColumn(0, "ModiBill", "");
        					this.dsSearch.setColumn(0, "RM_BIGO", "");
        					this.txtRM_BIGO.set_readonly(true);

        				}
        				break;
        		}
        	}
        };

        this.fnInitGrid = function() {
        	for (var i=0; i<=3; i++) {
        		this.dsList.addRow();
        	}

        	if (this.IUD_FLAG == "I") {
        		this.dsList.setColumn(nRow, "MM_PROOF", this.dsSearch.getColumn(0, "DT_PROOF").substr(4, 2));
        		this.dsList.setColumn(nRow, "DD_PROOF", this.dsSearch.getColumn(0, "DT_PROOF").substr(6, 2));
        		this.dsList.setColumn(nRow, "DS_ITEM", this.dsSearch.getColumn(0, "DS_REM"));
        		this.dsList.setColumn(nRow, "AM_SUPPLY", this.dsSearch.getColumn(0, "AM_SUPPLY"));
        		this.dsList.setColumn(nRow, "AM_VAT", this.dsSearch.getColumn(0, "AM_VAT"));
        	}
        }

        this.fnBillInit = function() {
        	this.ctclDT_PROOF.set_enable(false);

        	this.dsSearch.setColumn(0, "ModiBill_YN", "N");
        	this.chkModiBill_YN.set_enable(false);
        	this.txtRM_BIGO.set_readonly(true);

        	this.ccfCD_DEPT_ACNT.set_enable(false);
        	this.ccfCD_VENDOR.set_enable(false);
        	this.ccboTY_VENDOR.set_enable(false);
        	this.cfNO_VAT.set_enable(false);

        	if (this.IUD_FLAG == "I") {
        		this.txtNO_GUN.set_readonly(false);
        		this.ccboTY_VATPROOF.set_enable(false);
        	}
        	else if (this.IUD_FLAG == "I") {
        		this.dsSearch.setColumn(0, "YN_BLANK", "Y");
        		this.ctclYY_MAGAM.set_enable(true);
        		this.ccboTY_VATPROOF.set_enable(true);
        		this.ccfCD_DEPT_ACNT.set_enable(true);
        		this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.AuthClient.CD_DEPT);
        		this.dsSearch.setColumn(0, "DS_DEPT_ACNT", this.AuthClient.DS_DEPT);
        		this.ccfCD_VENDOR.set_enable(true);
        		this.cfNO_VAT.set_enable(false);
        		this.txtNO_GUN.set_readonly(false);
        		this.txtAM_VAT.set_readonly(false);
        		this.txtAM_SUPPLY.set_readonly(false);
        		this.txtDS_REM.set_readonly(false);
        		this.ccboTY_VENDOR.set_enable(true);
        		this.ccboYN_RECEIPT.set_enable(true);
        	}
        }

        this.fnYN_BLANKChanged = function() {
        	if (this.dsSearch.getColumn(0, "YN_BLANK") == "Y") {
        		if (this.IUD_FLAG == "I") {
        			this.dsSearch.setColumn(0, "CD_VENDOR", "");
        			this.dsSearch.setColumn(0, "DS_VENDOR", "");
        			this.dsSearch.setColumn(0, "DT_PROOF", "");
        			this.dsSearch.setColumn(0, "AM_SUPPLY", 0);
        			this.dsSearch.setColumn(0, "AM_VAT", 0);
        			this.dsSearch.setColumn(0, "DS_REM", "");
        			this.dsSearch.setColumn(0, "NO_VAT", "");
        			this.dsSearch.setColumn(0, "TY_VENDOR", "");
        			this.dsSearch.setColumn(0, "TY_VATPROOF", "");

        			this.ctclYY_MAGAM.set_enable(true);
        			this.ctclDT_PROOF.set_enable(true);

        			this.ccboTY_VATPROOF.set_enable(true);
        			this.ccboTY_VENDOR.set_enable(true);

        			this.ccfCD_VENDOR.set_enable(true);
        			this.ccfCD_DEPT_ACNT.set_enable(true);

        			this.txtAM_SUPPLY.set_readonly(false);
        			this.txtAM_VAT.set_readonly(false);
        			this.txtDS_REM.set_readonly(false);

        			this.cfNO_VAT.set_enable(false);

        			this.staDT_PROOF.set_textDecoration("underline");
        			this.staCD_VENDOR.set_textDecoration("");
        			this.staAM_SUPPLY.set_textDecoration("");
        			this.staAM_VAT.set_textDecoration("");
        			this.staNO_VAT.set_textDecoration("");

        			for (var i=0; i<this.dsList.rowcount; i++) {
        				for (var j=0; j<this.dsList.colcount; j++) {
        // 					if (this.dsList.getColumnInfo(j).type == "bigdecimal")
        // 						this.dsList.setColumn(i, j, 0);
        // 					else
        						this.dsList.setColumn(i, j, "");
        				}
        			}
        		}
        		else {
        			this.ctclYY_MAGAM.set_enable(false);
        			this.ctclDT_PROOF.set_enable(false);

        			this.ccboTY_VATPROOF.set_enable(false);
        			this.ccboTY_VENDOR.set_enable(false);

        			this.ccfCD_VENDOR.set_enable(false);
        			this.ccfCD_DEPT_ACNT.set_enable(false);

        			this.txtAM_SUPPLY.set_readonly(true);
        			this.txtAM_VAT.set_readonly(true);
        			this.txtDS_REM.set_readonly(true);

        			this.cfNO_VAT.set_enable(false);
        			this.ccboYN_RECEIPT.set_enable(false);

        			this.staDT_PROOF.set_textDecoration("");
        			this.staCD_VENDOR.set_textDecoration("");
        			this.staAM_SUPPLY.set_textDecoration("");
        			this.staAM_VAT.set_textDecoration("");
        			this.staNO_VAT.set_textDecoration("");
        		}
        	}
        	else {
        		this.staDT_PROOF.set_textDecoration("underline");
        		this.staCD_VENDOR.set_textDecoration("underline");
        		this.staAM_SUPPLY.set_textDecoration("underline");
        		this.staAM_VAT.set_textDecoration("underline");
        		this.staNO_VAT.set_textDecoration("underline");

        		if (this.IUD_FLAG == "I") {
        			this.cfNO_VAT.set_enable(false);
        			this.ctclYY_MAGAM.set_enable(false);
        			this.ctclDT_PROOF.set_enable(false);
        		}
        		else if (this.IUD_FLAG == "S") {
        			this.ctclYY_MAGAM.set_enable(false);
        			this.ctclDT_PROOF.set_enable(false);

        			this.ccboTY_VATPROOF.set_enable(false);
        			this.ccboTY_VENDOR.set_enable(false);

        			this.cfNO_VAT.set_enable(false);
        			this.ccboYN_RECEIPT.set_enable(false);
        		}
        	}
        }

        this.fnGetTaxNO = function() {
        	this.dsSelectTax.clearData();
        	this.dsSelectTax.addRow();
         	this.dsSelectTax.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_SELFACNT"));
         	this.dsSelectTax.setColumn(0, "CD_VATPROOF", this.dsSearch.getColumn(0, "TY_VATPROOF"));

        	var strSvcId    = "taxno";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "taxno=dsSelectTax";
        	var outData     = "dsTaxNo=taxno0";
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

        //확인버튼 클릭
        this.btnConf_onclick = function(obj,e) {
        	if (this.IUD_FLAG == "S" && this.dsSearch.getColumn(0, "YN_BLANK") == "Y") {
        		this.gfnAlert("백지발행의 경우 세금계산서를 재발행할 수 없습니다. 삭제후 다시 발행하세요.");
        		return;
        	}
        	if (this.IUD_FLAG != "S") {
        		if (!this.fnSaveValidate())
        			return;

        		this.fnSave();
        	}
        };

        //삭제버튼 클릭
        this.btnDel_onclick = function(obj,e) {
        	if (this.IUD_FLAG == "S") {
        		this.IUD_FLAG = "D";
        		if (!this.fnSaveValidate())
        			return;

        		this.fnSave();
        	}
        };

        //취소버튼 클릭
        this.btnCancel_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_PBILLDETAIL2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
