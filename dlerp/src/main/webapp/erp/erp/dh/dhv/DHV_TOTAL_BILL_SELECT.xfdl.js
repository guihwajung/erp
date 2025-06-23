(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DHV_BUYTAXRATE");
            this.set_titletext("현장안분비율관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSingle", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SJC2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CT_PROOF2_TOT\" type=\"INT\" size=\"256\"/><Column id=\"AM_SUPPLY2_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT2_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_PROOF2_EBILL\" type=\"INT\" size=\"256\"/><Column id=\"AM_SUPPLY2_EBILL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT2_EBILL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_PROOF2_NBILL\" type=\"INT\" size=\"256\"/><Column id=\"AM_SUPPLY2_NBILL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT2_NBILL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAEPYO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PRINT\" type=\"STRING\" size=\"256\"/><Column id=\"CT_VENDOR_TOT\" type=\"INT\" size=\"256\"/><Column id=\"CT_PROOF1_TOT\" type=\"INT\" size=\"256\"/><Column id=\"AM_SUPPLY1_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT1_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_VENDORF_TOT\" type=\"INT\" size=\"256\"/><Column id=\"CT_PROOFF_TOT\" type=\"INT\" size=\"256\"/><Column id=\"AM_SUPPLYF_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VATF_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_VENDORP_TOT\" type=\"INT\" size=\"256\"/><Column id=\"CT_PROOFP_TOT\" type=\"INT\" size=\"256\"/><Column id=\"AM_SUPPLYP_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VATP_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_VENDOR_EBILL\" type=\"INT\" size=\"256\"/><Column id=\"CT_PROOF1_EBILL\" type=\"INT\" size=\"256\"/><Column id=\"AM_SUPPLY1_EBILL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT1_EBILL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_VENDORF_EBILL\" type=\"INT\" size=\"256\"/><Column id=\"CT_PROOFF_EBILL\" type=\"INT\" size=\"256\"/><Column id=\"AM_SUPPLYF_EBILL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VATF_EBILL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_VENDORP_EBILL\" type=\"INT\" size=\"256\"/><Column id=\"CT_PROOFP_EBILL\" type=\"INT\" size=\"256\"/><Column id=\"AM_SUPPLYP_EBILL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VATP_EBILL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_VENDOR_NBILL\" type=\"INT\" size=\"256\"/><Column id=\"CT_PROOF1_NBILL\" type=\"INT\" size=\"256\"/><Column id=\"AM_SUPPLY1_NBILL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT1_NBILL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_VENDORF_NBILL\" type=\"INT\" size=\"256\"/><Column id=\"CT_PROOFF_NBILL\" type=\"INT\" size=\"256\"/><Column id=\"AM_SUPPLYF_NBILL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VATF_NBILL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_VENDORP_NBILL\" type=\"INT\" size=\"256\"/><Column id=\"CT_PROOFP_NBILL\" type=\"INT\" size=\"256\"/><Column id=\"AM_SUPPLYP_NBILL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VATP_NBILL\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_TOTAL_BILL_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_TOTALBILL_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VATPROOF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PRINT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1기예정</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">1기확정</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">2기예정</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">2기확정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VATPROOF", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">AA</Col><Col id=\"DS_CODE\">세금계산서</Col></Row><Row><Col id=\"CD_CODE\">BA</Col><Col id=\"DS_CODE\">계산서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALEBUY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">O</Col><Col id=\"DS_CODE\">매출</Col></Row><Row><Col id=\"CD_CODE\">I</Col><Col id=\"DS_CODE\">매입</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta00:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("작성년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_WORK","staYY_WORK:0","10.0","67","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK00","ctclYY_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("작성기수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNO_TAX","staYY_WORK00:0.0","10.0","98","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsNO_TAX");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_FROM","ccboNO_TAX:5","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","ctxtDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_TO","staDT_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","0","staCD_CORP:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("계산서구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_VATPROOF","sta01:0.0","staCD_CORP:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_VATPROOF");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_SALEBUY","ccboTY_VATPROOF:5","staCD_CORP:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_SALEBUY");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK01","ccfCD_CORP:0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("작성일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PRINT","staYY_WORK01:0.0","staCD_CORP:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_YEAR","ctclDT_PRINT:20","staCD_CORP:10.0","116","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("년 집계");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","240",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","sta00:-1","0","150","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","staBg00:-1","0","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("상호(법인명)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","sta01:-1","0","250","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","staBg01:-1","0","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("거래기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg02","sta02:-1","0","250","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta00:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("성명(대표자)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg03","sta03:-1","staBg00:-1","150","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","staBg03:-1","sta01:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("사업장소재지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg04","sta04:-1","staBg01:-1","250","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_SJC1","sta00:5","4","138","19",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT_SELFACNT","sta01:5","4","238","19",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_PERIOD","sta02:5","4","238","19",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DAEPYO","sta03:5","staBg00:3","138","19",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_ADDR","sta04:5","staBg01:3","238","19",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","60",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("매출처 계산서 총합계");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg05","0","96","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","109","96","370","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("총합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","96","370","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("전자발행분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","96","370","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("일반발행분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","staBg05:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta05:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("매출처수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","sta05:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("매수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","sta05:-1","123","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("매출(수입)금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","sta11:-1","sta05:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("세액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","sta06:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("매출차수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","sta13:-1","sta06:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("매수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta06:-1","123","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("매출(수입)금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta16","sta15:-1","sta06:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("세액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","sta07:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("매출차수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","sta17:-1","sta07:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("매수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","sta18:-1","sta07:-1","123","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("매출(수입)금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta20","sta19:-1","sta07:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("세액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21","0","sta08:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg06","sta21:-1","sta09:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg07","staBg06:-1","sta10:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg08","staBg07:-1","sta11:-1","123","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg09","staBg08:-1","sta12:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg10","staBg09:-1","sta13:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg11","staBg10:-1","sta14:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg12","staBg11:-1","sta15:-1","123","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg13","staBg12:-1","sta16:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg14","staBg13:-1","sta17:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg15","staBg14:-1","sta18:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg16","staBg15:-1","sta19:-1","123","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg17","staBg16:-1","sta20:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","0","sta21:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg18","sta22:-1","staBg06:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg19","staBg18:-1","staBg07:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg20","staBg19:-1","staBg08:-1","123","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg21","staBg20:-1","staBg09:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg22","staBg21:-1","staBg10:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg23","staBg22:-1","staBg11:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg24","staBg23:-1","staBg12:-1","123","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg25","staBg24:-1","staBg13:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg26","staBg25:-1","staBg14:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg27","staBg26:-1","staBg15:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg28","staBg27:-1","staBg16:-1","123","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg29","staBg28:-1","staBg17:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23","0","sta22:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg30","sta23:-1","staBg18:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg31","staBg30:-1","staBg19:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg32","staBg31:-1","staBg20:-1","123","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg33","staBg32:-1","staBg21:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg34","staBg33:-1","staBg22:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg35","staBg34:-1","staBg23:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg36","staBg35:-1","staBg24:-1","123","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg37","staBg36:-1","staBg25:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg38","staBg37:-1","staBg26:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg39","staBg38:-1","staBg27:-1","70","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg40","staBg39:-1","staBg28:-1","123","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg41","staBg40:-1","staBg29:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_VENDOR_TOT","sta21:4","sta09:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_PROOF1_TOT","staBg06:4","sta10:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SUPPLY1_TOT","staBg07:4","sta11:3","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("75");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_VAT1_TOT","staBg08:4","sta12:3","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("76");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_VENDOR_EBILL","staBg09:4","sta13:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("77");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_PROOF1_EBILL","staBg10:4","sta14:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("78");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SUPPLY1_EBILL","staBg11:4","sta15:3","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("79");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_VAT1_EBILL","staBg12:4","sta16:3","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("80");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_VENDOR_NBILL","staBg13:4","sta17:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("81");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_PROOF1_NBILL","staBg14:4","sta18:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("82");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SUPPLY1_NBILL","staBg15:4","sta19:3","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("83");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_VAT1_NBILL","staBg16:4","sta20:3","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("84");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_VENDORF_TOT","sta22:4","staBg06:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("85");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_PROOFF_TOT","staBg18:4","staBg07:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("86");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SUPPLYF_TOT","staBg19:4","staBg08:3","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("87");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_VATF_TOT","staBg20:4","staBg09:3","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("88");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_VENDORF_EBILL","staBg21:4","staBg10:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("89");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_PROOFF_EBILL","staBg22:4","staBg11:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("90");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SUPPLYF_EBILL","staBg23:4","staBg12:3","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("91");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_VATF_EBILL","staBg24:4","staBg13:3","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("92");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_VENDORF_NBILL","staBg25:4","staBg14:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("93");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_PROOFF_NBILL","staBg26:4","staBg15:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("94");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SUPPLYF_NBILL","staBg27:4","staBg16:3","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("95");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_VATF_NBILL","staBg28:4","staBg17:3","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("96");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_VENDORP_TOT","sta23:4","staBg18:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("97");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_PROOFP_TOT","staBg30:4","staBg19:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("98");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SUPPLYP_TOT","staBg31:4","staBg20:3","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("99");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_VATP_TOT","staBg32:4","staBg21:3","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("100");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_VENDORP_EBILL","staBg33:4","staBg22:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("101");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_PROOFP_EBILL","staBg34:4","staBg23:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("102");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SUPPLYP_EBILL","staBg35:4","staBg24:3","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("103");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_VATP_EBILL","staBg36:4","staBg25:3","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("104");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_VENDORP_NBILL","staBg37:4","staBg26:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("105");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_PROOFP_NBILL","staBg38:4","staBg27:3","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("106");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SUPPLYP_NBILL","staBg39:4","staBg28:3","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("107");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_VATP_NBILL","staBg40:4","staBg29:3","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("108");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYY_WORK.form.TextBox","value","dsSearch","YY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboNO_TAX","value","dsSearch","NO_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboTY_VATPROOF","value","dsSearch","TY_VATPROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccboTY_SALEBUY","value","dsSearch","TY_SALEBUY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ctclDT_PRINT","value","dsSearch","DT_PRINT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.chkYN_YEAR","value","dsSearch","YN_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtNO_SJC1","value","dsSingle","NO_SJC1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtDS_DEPT_SELFACNT","value","dsSingle","DS_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.txtDT_PERIOD","value","dsSingle","DT_PERIOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.txtDS_DAEPYO","value","dsSingle","DS_DAEPYO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.txtDS_ADDR","value","dsSingle","DS_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.txtCT_VENDOR_TOT","value","dsSingle","CT_VENDOR_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.txtCT_PROOF1_TOT","value","dsSingle","CT_PROOF1_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.txtAM_SUPPLY1_TOT","value","dsSingle","AM_SUPPLY1_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.txtAM_VAT1_TOT","value","dsSingle","AM_VAT1_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.txtCT_VENDOR_EBILL","value","dsSingle","CT_VENDOR_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.txtCT_PROOF1_EBILL","value","dsSingle","CT_PROOF1_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.txtAM_SUPPLY1_EBILL","value","dsSingle","AM_SUPPLY1_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.txtAM_VAT1_EBILL","value","dsSingle","AM_VAT1_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.txtCT_VENDOR_NBILL","value","dsSingle","CT_VENDOR_NBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.txtCT_PROOF1_NBILL ","value","dsSingle","CT_PROOF1_NBILL ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.txtAM_SUPPLY1_NBILL","value","dsSingle","AM_SUPPLY1_NBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.txtAM_VAT1_NBILL","value","dsSingle","AM_VAT1_NBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.txtCT_VENDORF_TOT","value","dsSingle","CT_VENDORF_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.txtCT_PROOFF_TOT","value","dsSingle","CT_PROOFF_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.txtAM_SUPPLYF_TOT","value","dsSingle","AM_SUPPLYF_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.txtAM_VATF_TOT","value","dsSingle","AM_VATF_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.txtCT_VENDORF_EBILL","value","dsSingle","CT_VENDORF_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.txtCT_PROOFF_EBILL","value","dsSingle","CT_PROOFF_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.txtAM_SUPPLYF_EBILL","value","dsSingle","AM_SUPPLYF_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.txtAM_VATF_EBILL","value","dsSingle","AM_VATF_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.txtCT_VENDORF_NBILL","value","dsSingle","CT_VENDORF_NBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.txtCT_PROOFF_NBILL","value","dsSingle","CT_PROOFF_NBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.txtAM_SUPPLYF_NBILL","value","dsSingle","AM_SUPPLYF_NBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.txtAM_VATF_NBILL","value","dsSingle","AM_VATF_NBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.txtCT_VENDORP_TOT","value","dsSingle","CT_VENDORP_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.txtCT_PROOFP_TOT","value","dsSingle","CT_PROOFP_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.txtAM_SUPPLYP_TOT","value","dsSingle","AM_SUPPLYP_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.txtAM_VATP_TOT","value","dsSingle","AM_VATP_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.txtCT_VENDORP_EBILL","value","dsSingle","CT_VENDORP_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.txtCT_PROOFP_EBILL","value","dsSingle","CT_PROOFP_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.txtAM_SUPPLYP_EBILL","value","dsSingle","AM_SUPPLYP_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.txtAM_VATP_EBILL","value","dsSingle","AM_VATP_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.txtCT_VENDORP_NBILL","value","dsSingle","CT_VENDORP_NBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.txtCT_PROOFP_NBILL","value","dsSingle","CT_PROOFP_NBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.txtAM_SUPPLYP_NBILL","value","dsSingle","AM_SUPPLYP_NBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.txtAM_VATP_NBILL","value","dsSingle","AM_VATP_NBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_TOTAL_BILL_SELECT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWA_SILHENG_onload = function(obj,e)
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

        	if (this.gfnIsNull(this.getOwnerFrame().CD_SELFACNT)) {
        		this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        		this.dsSearch.setColumn(0, "YY_WORK", this.gfnGetDate().substring(0, 4));
        		this.dsSearch.setColumn(0, "DT_PRINT", this.gfnGetDate());
        		this.dsSearch.setColumn(0, "NO_TAX", "1");
        		this.dsSearch.setColumn(0, "TY_VATPROOF", "AA");
        		this.dsSearch.setColumn(0, "TY_SALEBUY", "O");

        		this.dsSearch.setColumn(0, "CD_DEPT", this.UserInfo.CD_DEPT_SELFACNT);
        		if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT")))
        			this.ccfCD_DEPT.form.fnCodeFindLoad();
        	}
        	else {
        		this.dsSearch.setColumn(0, "CD_DEPT", this.getOwnerFrame().CD_SELFACNT);
        		this.dsSearch.setColumn(0, "DS_DEPT", this.getOwnerFrame().DS_SELFACNT);
        		this.dsSearch.setColumn(0, "YY_WORK", this.getOwnerFrame().YM_MAGAM);
        		this.dsSearch.setColumn(0, "NO_TAX", this.getOwnerFrame().NO_TAX);
        		this.dsSearch.setColumn(0, "DT_FROM", this.getOwnerFrame().DT_FROM);
        		this.dsSearch.setColumn(0, "DT_TO", this.getOwnerFrame().DT_TO);
        		this.dsSearch.setColumn(0, "DT_PRINT", this.getOwnerFrame().DT_PRINT);
        		this.dsSearch.setColumn(0, "TY_VATPROOF", this.getOwnerFrame().TY_TAX);
        		this.dsSearch.setColumn(0, "TY_SALEBUY", this.getOwnerFrame().TY_IO);

        		this.FormBtns.Select.click();
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
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ctclYY_WORK = this.divSearch.form.ctclYY_WORK;
        	this.ccboNO_TAX = this.divSearch.form.ccboNO_TAX;
        	this.ctxtDT_FROM = this.divSearch.form.ctxtDT_FROM;
        	this.ctxtDT_TO = this.divSearch.form.ctxtDT_TO;
        	this.ccboTY_VATPROOF = this.divSearch.form.ccboTY_VATPROOF;
        	this.ccboTY_SALEBUY = this.divSearch.form.ccboTY_SALEBUY;
        	this.chkYN_YEAR = this.divSearch.form.chkYN_YEAR;
        	this.ctclDT_PRINT = this.divSearch.form.ctclDT_PRINT;


        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_TOTAL_BILL_SELECT");

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("DT_FR", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("TY_SALEBUY", "string");
        	this.dsSelect.addColumn("TY_VATPROOF", "string");
        	this.dsSelect.addColumn("DT_PRINT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsUpdate.addColumn("DT_FR", "string");
        	this.dsUpdate.addColumn("DT_TO", "string");
        	this.dsUpdate.addColumn("TY_SALEBUY", "string");
        	this.dsUpdate.addColumn("TY_VATPROOF", "string");
        	this.dsUpdate.addColumn("DT_PRINT", "string");
        	this.dsUpdate.addColumn("CT_VENDORP", "bigdecimal");
        	this.dsUpdate.addColumn("CT_PROOFP", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SUPPLYP", "bigdecimal");
        	this.dsUpdate.addColumn("AM_VATP", "bigdecimal");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "DT_FR", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_FROM"), "-", ""));
        	this.dsSelect.setColumn(0, "DT_TO", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));
        	this.dsSelect.setColumn(0, "TY_SALEBUY", this.dsSearch.getColumn(0, "TY_SALEBUY"));
        	this.dsSelect.setColumn(0, "TY_VATPROOF", this.dsSearch.getColumn(0, "TY_VATPROOF"));
        	this.dsSelect.setColumn(0, "DT_PRINT", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_PRINT"), "-", ""));

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
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsUpdate.setColumn(nrow, "DT_FR", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_FROM"), "-", ""));
        	this.dsUpdate.setColumn(nrow, "DT_TO", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));
        	this.dsUpdate.setColumn(nrow, "TY_SALEBUY", this.dsSearch.getColumn(0, "TY_SALEBUY"));
        	this.dsUpdate.setColumn(nrow, "TY_VATPROOF", this.dsSearch.getColumn(0, "TY_VATPROOF"));
        	this.dsUpdate.setColumn(nrow, "DT_PRINT", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_PRINT"), "-", ""));
        	this.dsUpdate.setColumn(nrow, "CT_VENDORP", this.dsSingle.getColumn(0, "CT_VENDORP_EBILL"));
        	this.dsUpdate.setColumn(nrow, "CT_PROOFP", this.dsSingle.getColumn(0, "CT_PROOFP_EBILL"));
        	this.dsUpdate.setColumn(nrow, "AM_SUPPLYP", this.dsSingle.getColumn(0, "AM_SUPPLYP_EBILL"));
        	this.dsUpdate.setColumn(nrow, "AM_VATP", this.dsSingle.getColumn(0, "AM_VATP_EBILL"));

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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
        // 	DHV_TOTAL_TAXBILL_SALE_REPORT
        // 	DHV_TOTAL_TAXBILL_BUY_REPORT
        // 	DHV_TOTAL_BILL_SALE_REPORT
        // 	DHV_TOTAL_BILL_BUY_REPORT
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT_SELFACNT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "YY_WORK"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYY_WORK.setFocus();
        		}
        		this.gfnAlert("작성년도를 입력하세요.","fnVaidateCallback");
        		return false;
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_TAX"))) {
        		this.fnVaidateCallback = function() {
        			this.ccboNO_TAX.setFocus();
        		}
        		this.gfnAlert("작성기수를 입력하세요.","fnVaidateCallback");
        		return false;
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_PRINT"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_PRINT.setFocus();
        		}
        		this.gfnAlert("작성일자를 입력하세요.","fnVaidateCallback");
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
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.dsSingle.clearData();
        		if (this.dsList.rowcount > 0) {
        			var r = this.dsSingle.addRow();
        			this.dsSingle.copyRow(r, this.dsList, 0)
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "execute") {
        		if (errorCode == 0) {
        			this.fnExecute_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("자료이관 작업이 완료되었습니다.", "fnExecute_callback");
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        			break;

        		case "ccfCD_DEPT": // 세무단위
        			if (this.gfnIsNull(cdCorp)) {
        				this.gfnAlert("법인코드를 먼저 선택하세요.");
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        			//dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        			break;
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.ccfCD_DEPT.form.fnCodeFindClear();
        			break;
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.dsSingle.clearData();

        		switch(e.columnid) {
        			case "YY_WORK":
        			case "NO_TAX":
        				this.fnMagamSetting();
        				break;
        			case "TY_VATPROOF":
        				this.fnTY_VATPROOFchange();
        				this.fnTY_SALEBUYChange();
        				break;
        			case "TY_SALEBUY":
        				this.fnTY_SALEBUYChange();
        				break;
        			case "YN_YEAR":
        				if (this.gfnIsNull(this.dsSearch.getColumn(0, "YY_WORK")))
        					this.dsSearch.setColumn(0, "YY_WORK", this.gfnGetDate().substring(0, 4));

        				if (this.dsSearch.getColumn(0, "YN_YEAR") == "Y") {
        					this.ccboNO_TAX.set_enable(false);
        					this.dsSearch.setColumn(0, "NO_TAX", "");
        					this.dsSearch.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "YY_WORK") + "-01-01");
        					this.dsSearch.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "YY_WORK") + "-12-31");

        					this.divData.form["txtCT_PROOFP_EBILL"].set_readonly(true);
        					this.divData.form["txtCT_VENDORP_EBILL"].set_readonly(true);
        					this.divData.form["txtCT_PROOFP_NBILL"].set_readonly(true);
        					this.divData.form["txtCT_VENDORP_NBILL"].set_readonly(true);
        				}
        				else {
        					this.ccboNO_TAX.set_enable(true);
        					this.dsSearch.setColumn(0, "NO_TAX", "");
        					this.dsSearch.setColumn(0, "DT_FROM", "");
        					this.dsSearch.setColumn(0, "DT_TO", "");

        					if (this.dsSearch.getColumn(0, "TY_SALEBUY") == "O") {
        						this.divData.form["txtCT_PROOFP_EBILL"].set_readonly(false);
        						this.divData.form["txtCT_VENDORP_EBILL"].set_readonly(false);
        						this.divData.form["txtCT_PROOFP_NBILL"].set_readonly(false);
        						this.divData.form["txtCT_VENDORP_NBILL"].set_readonly(false);
        					}
        				}
        				break;
        		}
        	}
        };

        this.fnMagamSetting = function() {
        	var dtFrom;
        	var dtTo;

        	var ymMagam = this.dsSearch.getColumn(0, "YY_WORK");
        	var noTax = this.dsSearch.getColumn(0, "NO_TAX");

        	if (this.gfnIsNull(ymMagam) || this.gfnIsNull(noTax)) {
        		dtFrom = "";
        		dtTo = "";
        	}
        	else {
        		switch(noTax) {
        			case "1" :
        				dtFrom = ymMagam + "-01-01";
        				dtTo = ymMagam + "-03-31";
        				break;
        			case "2" :
        				dtFrom = ymMagam + "-04-01";
        				dtTo = ymMagam + "-06-30";
        				break;
        			case "3" :
        				dtFrom = ymMagam + "-07-01";
        				dtTo = ymMagam + "-09-30";
        				break;
        			case "4" :
        				dtFrom = ymMagam + "-10-01";
        				dtTo = ymMagam + "-12-31";
        				break;
        			default :
        				dtFrom = "";
        				dtTo = "";
        				break;
        		}
        	}

        	this.dsSearch.setColumn(0, "DT_FROM", dtFrom);
        	this.dsSearch.setColumn(0, "DT_TO", dtTo);
        }

        this.fnTY_VATPROOFchange = function() {
        	switch (this.dsSearch.getColumn(0, "TY_VATPROOF")) {
        		case "AA":
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_VAT2_TOT"), "size", 100);
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_VAT2_EBILL"), "size", 100);
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_VAT2_NBILL"), "size", 100);

        			this.divData.form["sta12"].set_visible(true);
        			this.divData.form["txtAM_VAT1_TOT"].set_visible(true);
        			this.divData.form["txtAM_VATP_TOT"].set_visible(true);
        			this.divData.form["txtAM_VATF_TOT"].set_visible(true);

        			this.divData.form["sta16"].set_visible(true);
        			this.divData.form["txtAM_VAT1_EBILL"].set_visible(true);
        			this.divData.form["txtAM_VATP_EBILL"].set_visible(true);
        			this.divData.form["txtAM_VATF_EBILL"].set_visible(true);

        			this.divData.form["sta20"].set_visible(true);
        			this.divData.form["txtAM_VAT1_NBILL"].set_visible(true);
        			this.divData.form["txtAM_VATP_NBILL"].set_visible(true);
        			this.divData.form["txtAM_VATF_NBILL"].set_visible(true);

        			this.chkYN_YEAR.set_visible(false);
        			this.dsSearch.setColumn(0, "YN_YEAR", "N");

        			this.ccboNO_TAX.set_enable(true);
        			this.dsSearch.setColumn(0, "NO_TAX", "");
        			this.dsSearch.setColumn(0, "DT_FROM", "");
        			this.dsSearch.setColumn(0, "DT_TO", "");
        			break;
        		case "BA":
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_VAT2_TOT"), "size", 0);
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_VAT2_EBILL"), "size", 0);
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_VAT2_NBILL"), "size", 0);

        			this.divData.form["sta12"].set_visible(false);
        			this.divData.form["txtAM_VAT1_TOT"].set_visible(false);
        			this.divData.form["txtAM_VATP_TOT"].set_visible(false);
        			this.divData.form["txtAM_VATF_TOT"].set_visible(false);

        			this.divData.form["sta16"].set_visible(false);
        			this.divData.form["txtAM_VAT1_EBILL"].set_visible(false);
        			this.divData.form["txtAM_VATP_EBILL"].set_visible(false);
        			this.divData.form["txtAM_VATF_EBILL"].set_visible(false);

        			this.divData.form["sta20"].set_visible(false);
        			this.divData.form["txtAM_VAT1_NBILL"].set_visible(false);
        			this.divData.form["txtAM_VATP_NBILL"].set_visible(false);
        			this.divData.form["txtAM_VATF_NBILL"].set_visible(false);

        			this.chkYN_YEAR.set_visible(true);
        			break;
        		default:
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_VAT2_TOT"), "size", 0);
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_VAT2_EBILL"), "size", 0);
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "AM_VAT2_NBILL"), "size", 0);

        			this.divData.form["sta12"].set_visible(true);
        			this.divData.form["txtAM_VAT1_TOT"].set_visible(true);
        			this.divData.form["txtAM_VATP_TOT"].set_visible(true);
        			this.divData.form["txtAM_VATF_TOT"].set_visible(true);

        			this.divData.form["sta16"].set_visible(true);
        			this.divData.form["txtAM_VAT1_EBILL"].set_visible(true);
        			this.divData.form["txtAM_VATP_EBILL"].set_visible(true);
        			this.divData.form["txtAM_VATF_EBILL"].set_visible(true);

        			this.divData.form["sta20"].set_visible(true);
        			this.divData.form["txtAM_VAT1_NBILL"].set_visible(true);
        			this.divData.form["txtAM_VATP_NBILL"].set_visible(true);
        			this.divData.form["txtAM_VATF_NBILL"].set_visible(true);

        			this.chkYN_YEAR.set_visible(false);
        			this.dsSearch.setColumn(0, "YN_YEAR", "N");

        			this.ccboNO_TAX.set_enable(true);
        			this.dsSearch.setColumn(0, "NO_TAX", "");
        			this.dsSearch.setColumn(0, "DT_FROM", "");
        			this.dsSearch.setColumn(0, "DT_TO", "");
        			break;
        	}
        }

        this.fnTY_SALEBUYChange = function() {
        	var saleBuy = this.dsSearch.getColumn(0, "TY_SALEBUY") == "O" ? "매출처" : "매입처";
        	var vatProof = this.dsSearch.getColumn(0, "TY_VATPROOF") == "AA" ? "세금계산서" : "계산서";
        	this.divData.form["staTITLE"].set_text(saleBuy + " " + vatProof + " 총합계");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_TOTAL_BILL_SELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
