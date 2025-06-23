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
            this.set_titletext("판례데이터등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DVAPR_PRECEDENTS_DATA_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DVAPR_PRECEDENTS_DATA_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSUEKIND", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData","10","divSearch:0",null,null,"-10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("div_STD","0","10",null,"550","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"22","0",null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("0");
            obj.set_text("판례데이터 등록");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staLAWSUIT_NO","0","27","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("1");
            obj.set_text("사건번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg00","staLAWSUIT_NO:-1","27","478","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staGBN","566","27","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("3");
            obj.set_text("소송유형");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg02","655","staTitle:5","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staDECDATE","0","staLAWSUIT_NO:-1","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("5");
            obj.set_text("판결선고일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg03","staDECDATE:-1","56","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staLOC","283","56","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("7");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg04","372","56","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staTOTAL_HOUSE","staBg04:-1","56","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("9");
            obj.set_text("세대수");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg05","staTOTAL_HOUSE:-1","staBg02:-1","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staWONGO","0","staDECDATE:-1","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("11");
            obj.set_text("원고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg06","89","85","478","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staWONGO_DEPUTY","566","85","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("14");
            obj.set_text("원고대리인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg08","staWONGO_DEPUTY:-1","staBg05:-1","478","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staPIGO","0","staWONGO:-1","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("16");
            obj.set_text("피고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg09","89","114","478","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staJUDGE_AMT","0","172","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("18");
            obj.set_text("판결금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg09_00","0","143","567","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg12","staJUDGE_AMT:-1","172","478","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staUSE_CONF_DATE","283","201","90","50",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("20");
            obj.set_text("사용승인일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staSAFE_AMT","566","143","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("34");
            obj.set_text("안전진단금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staWIN_RATE","566","172","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("21");
            obj.set_text("승소율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg11_01","655","143","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg14","655","staBg11_01:-1","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FOUNDATION","94","61","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_WIN_RATE","staWIN_RATE:5","177","184","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("24");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Div("ccfCOURTHOUSE","94","32","185","20",null,null,null,"604",null,null,this.divData.form.div_STD.form);
            obj.set_taborder("25");
            obj.getSetter("CodeFindName").set("DVA_COURTHOUSE_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta02_00","staBg02:-1","27","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staTRANS_HOUSE","staBg05:-1","56","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("27");
            obj.set_text("양도비율\r\n(전유면적)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staGAMJUNG_AMT","849","143","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("37");
            obj.set_text("법원감정금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staONE_POINT_AMT","849","172","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("28");
            obj.set_text("1세대당판결금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg11_00_00","staGAMJUNG_AMT:-1","143","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg14_00","938","172","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg05_00","staTRANS_HOUSE:-1","56","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg02_00","sta02_00:-1","27","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_SAFE_AMT","661","148","184","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("35");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staPIGO_DEPUTY","566","114","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("39");
            obj.set_text("피고대리인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg09_01","655","114","478","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_PIGO_DEPUTY","661","119","467","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("40");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_ONE_POINT_AMT","944","177","184","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("42");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_GAMJUNG_AMT","944","148","184","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("43");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtLAWSUIT_YEAR","284","32","87","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("48");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","edtLAWSUIT_YEAR:4","36","10","10",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("47");
            obj.set_text("-");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtLAWSUIT_CODE","sta01_00_00:1","32","67","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("44");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta01_00","edtLAWSUIT_CODE:3","36","10","10",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("46");
            obj.set_text("-");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtLAWSUIT_NO","sta01_00:2","32","94","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("45");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg12_00","89","201","195","50",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staRESP_LIMIT","0","201","90","50",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("50");
            obj.set_text("책임제한");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staMETHOD","566","201","90","50",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("51");
            obj.set_text("균열공법");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staFIRST_SOGA","0","143","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("32");
            obj.set_text("최초소가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staFINAL_SOGA","283","143","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("13");
            obj.set_text("최종소가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_LOC","377","61","184","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("53");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_WONGO","94","90","468","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("54");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_PIGO3","416","119","145","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("55");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta00","406","118","21","23",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("56");
            obj.set_text("/");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_PIGO1","94","119","145","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("57");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_PIGO2","256","119","145","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("58");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta00_00","246","117","21","23",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("59");
            obj.set_text("/");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_FIRST_SOGA","94","148","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("60");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_FINAL_SOGA","377","148","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("61");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg12_00_00","372","201","195","50",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_USE_CONF_DATE","378","214","133","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_JUDGE_AMT1","94","177","145","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("63");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","246","175","21","23",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("64");
            obj.set_text("/");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtJUDGE_AMT2","256","177","145","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("65");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta00_01","406","176","21","23",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("66");
            obj.set_text("/");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_JUDGE_AMT3","416","177","145","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("67");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_RESP_LIMIT","98","215","158","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("68");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta01","262","208","28","34",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("69");
            obj.set_text("%");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_TOTAL_HOUSE","661","61","59","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("70");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_DONG","759","61","59","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("71");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta03","726","62","48","18",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("72");
            obj.set_text("세대");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staDONG","824","62","48","18",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("73");
            obj.set_text("동");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_TRANS_HOUSE","943","61","184","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("74");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg08_00","655","201","478","50",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_WONGO_DEPUTY","660","90","467","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("76");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staMETHOD1","666","211","42","29",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("77");
            obj.set_text("0.3mm\r\n미만 :");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staMETHOD2","827","212","42","29",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("78");
            obj.set_text("0.3mm\r\n이상 :");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staMETHOD3","988","211","42","29",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("79");
            obj.set_text("층간 :");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_METHOD1","staMETHOD1:2","214","80","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("80");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_METHOD2","staMETHOD2:2","215","80","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("81");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_METHOD3","staMETHOD3:2","215","80","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("82");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta09","805","217","22","19",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("83");
            obj.set_text("/");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta09_00","967","216","22","19",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("84");
            obj.set_text("/");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staKEYWORD","0","250","90","250",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("85");
            obj.set_text("키워드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg12_00_01","89","250","195","250",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staPANRAE_POINT","283","250","90","140",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("87");
            obj.set_text("판례요지");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staREMARK","283","389","90","111",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("88");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg12_00_00_00","372","250","761","140",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg12_00_00_00_00","372","389","761","111",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_PANRAE_POINT","378","255","750","129",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("91");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_REMARK","378","395","750","99",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("92");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Grid("grd00","94","280","186","216",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("93");
            obj._setContents("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Button("btn01","110","255","71","21",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("94");
            obj.set_text("추가");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Button("btn02","196","255","71","21",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("95");
            obj.set_text("삭제");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Combo("cboSUEKIND","661","42","184","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsSUEKIND");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item21","divData.form.div_STD.form.ctclDT_FOUNDATION","value","dsList","SUEDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.div_STD.form.edtDS_WIN_RATE","value","dsList","WONGO_SOGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.div_STD.form.ccfCOURTHOUSE.form.CDTextBox","value","dsList","COURTCODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.div_STD.form.ccfCOURTHOUSE.form.DSTextBox","value","dsList","COURTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.div_STD.form.edtDS_GAMJUNG_AMT","value","dsList","PIGO_SOGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.div_STD.form.edtLAWSUIT_CODE","value","dsList","LAWSUIT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.div_STD.form.edtLAWSUIT_NO","value","dsList","LAWSUIT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.div_STD.form.edtDS_SAFE_AMT","value","dsList","JAEPAN_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.div_STD.form.edtDS_ONE_POINT_AMT","value","dsList","GAMJUNG_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.div_STD.form.edtLAWSUIT_YEAR","value","dsList","LAWSUIT_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.div_STD.form.ctclDT_USE_CONF_DATE","value","dsList","SUEDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cboSUEKIND","value","dsSearch","SUEKIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.div_STD.form.edtDS_METHOD1","value","dsList","WONGO_SOGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.div_STD.form.edtDS_METHOD2","value","dsList","WONGO_SOGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.div_STD.form.edtDS_METHOD3","value","dsList","WONGO_SOGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.div_STD.form.edtDS_PANRAE_POINT","value","dsList","WONGO_SOGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.div_STD.form.edtDS_REMARK","value","dsList","WONGO_SOGA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DVA_PRECEDENTS_DATA_SAVE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 ------------------- //
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// --------------------------- //

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSetCombo();
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DV");
        	this.dsCombo.setColumn(0, "CD_TYPE", "SUEKIND");



        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsSUEKIND=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId , 	    // transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.div_STD;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DV", "DVAPR_PRECEDENTS_DATA_SAVE");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSeve = new Dataset();
        	this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        	this.dsSave.setColumn(nrow, "YEAR", this.dsList.getColumn(i, "YEAR"));                        // 기준년도
        	this.dsSave.setColumn(nrow, "NO", this.dsList.getColumn(i, "NO"));                            // 일련번호
        	this.dsSave.setColumn(nrow, "GBN", this.dsList.getColumn(i, "GBN"));                          // 구분
        	this.dsSave.setColumn(nrow, "KEYWORD", this.dsList.getColumn(i, "KEYWORD"));                  // 키워드
        	this.dsSave.setColumn(nrow, "DECDATE", this.dsList.getColumn(i, "DECDATE"));                  // 판결선고일
        	this.dsSave.setColumn(nrow, "COURTCODE", this.dsList.getColumn(i, "COURTCODE"));              // 법원명
        	this.dsSave.setColumn(nrow, "LAWSUIT_YEAR", this.dsList.getColumn(i, "LAWSUIT_YEAR"));        // 사건년도
        	this.dsSave.setColumn(nrow, "LAWSUIT_CODE", this.dsList.getColumn(i, "LAWSUIT_CODE"));        // 사건코드
        	this.dsSave.setColumn(nrow, "LAWSUIT_NO", this.dsList.getColumn(i, "LAWSUIT_NO"));            // 사건번호
        	this.dsSave.setColumn(nrow, "LOC", this.dsList.getColumn(i, "LOC"));                          // 지역
        	this.dsSave.setColumn(nrow, "DONG", this.dsList.getColumn(i, "DONG"));                        // 동
        	this.dsSave.setColumn(nrow, "TOTAL_HOUSE", this.dsList.getColumn(i, "TOTAL_HOUSE"));          // 총세대
        	this.dsSave.setColumn(nrow, "TRANS_HOUSE", this.dsList.getColumn(i, "TRANS_HOUSE"));          // 양도세대
        	this.dsSave.setColumn(nrow, "WONGO", this.dsList.getColumn(i, "WONGO"));                      // 원고
        	this.dsSave.setColumn(nrow, "WONGO_DEPUTY", this.dsList.getColumn(i, "WONGO_DEPUTY"));        // 원고대리인
        	this.dsSave.setColumn(nrow, "PIGO1", this.dsList.getColumn(i, "PIGO1"));                      // 피고1
        	this.dsSave.setColumn(nrow, "PIGO2", this.dsList.getColumn(i, "PIGO2"));                      // 피고2
        	this.dsSave.setColumn(nrow, "PIGO3", this.dsList.getColumn(i, "PIGO3"));                      // 피고3
        	this.dsSave.setColumn(nrow, "PIGO_DEPUTY", this.dsList.getColumn(i, "PIGO_DEPUTY"));          // 피고대리인
        	this.dsSave.setColumn(nrow, "FIRST_SOGA", this.dsList.getColumn(i, "FIRST_SOGA"));            // 최소소가
        	this.dsSave.setColumn(nrow, "FINAL_SOGA", this.dsList.getColumn(i, "FINAL_SOGA"));            // 최종소가
        	this.dsSave.setColumn(nrow, "SAFE_AMT", this.dsList.getColumn(i, "SAFE_AMT"));                // 안전진단금액
        	this.dsSave.setColumn(nrow, "GAMJUNG_AMT", this.dsList.getColumn(i, "GAMJUNG_AMT"));          // 법원감정금액
        	this.dsSave.setColumn(nrow, "JUDGE_AMT1", this.dsList.getColumn(i, "JUDGE_AMT1"));            // 판결금액1
        	this.dsSave.setColumn(nrow, "JUDGE_AMT2", this.dsList.getColumn(i, "JUDGE_AMT2"));            // 판결금액2
        	this.dsSave.setColumn(nrow, "JUDGE_AMT3", this.dsList.getColumn(i, "JUDGE_AMT3"));            // 판결금액3
        	this.dsSave.setColumn(nrow, "PANRAE_POINT", this.dsList.getColumn(i, "PANRAE_POINT"));        // 판례요지
        	this.dsSave.setColumn(nrow, "REMARK", this.dsList.getColumn(i, "REMARK"));                    // 비고
        	this.dsSave.setColumn(nrow, "WIN_RATE", this.dsList.getColumn(i, "WIN_RATE"));                // 승소율
        	this.dsSave.setColumn(nrow, "ONE_POINT_AMT", this.dsList.getColumn(i, "ONE_POINT_AMT"));      // 인당판결금액
        	this.dsSave.setColumn(nrow, "RESP_LIMIT", this.dsList.getColumn(i, "RESP_LIMIT"));            // 책임재한
        	this.dsSave.setColumn(nrow, "USE_CONF_DATE", this.dsList.getColumn(i, "USE_CONF_DATE"));      // 사용승인일
        	this.dsSave.setColumn(nrow, "METHOD1", this.dsList.getColumn(i, "METHOD1"));                  // 0.3mm미만 균열공법
        	this.dsSave.setColumn(nrow, "METHOD2", this.dsList.getColumn(i, "METHOD2"));                  // 0.3mm이상 균열공법
        	this.dsSave.setColumn(nrow, "METHOD3", this.dsList.getColumn(i, "METHOD3"));                  // 층간 균열공법
        	this.dsSave.setColumn(nrow, "WRITE_ER", this.dsList.getColumn(i, "WRITE_ER"));                // 작성자
        	this.dsSave.setColumn(nrow, "WRITE_YMD", this.dsList.getColumn(i, "WRITE_YMD"));              // 작성일

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

        	this.dsSelect.setColumn(0, "YEAR", this.dsSearch.getColumn(0, "YEAR"));
        	this.dsSelect.setColumn(0, "GBN", this.dsSearch.getColumn(0, "GBN"));
        	this.dsSelect.setColumn(0, "NO", this.dsSearch.getColumn(0, "NO"));
        	this.dsSelect.setColumn(0, "COURT", this.dsSearch.getColumn(0, "COURT"));
        	this.dsSelect.setColumn(0, "CODE", this.dsSearch.getColumn(0, "CODE"));
        	this.dsSelect.setColumn(0, "KEYWORD", this.dsSearch.getColumn(0, "KEYWORD"));
        	this.dsSelect.setColumn(0, "DECDATEFR", this.dsSearch.getColumn(0, "DECDATEFR"));
        	this.dsSelect.setColumn(0, "DECDATETO", this.dsSearch.getColumn(0, "DECDATETO"));

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
            this.dsList.clearData();
        	this.dsList.addRow();
        	this.dsList.setColumn(0, "TY_SAVE", "I");
        	this.gfnSetFormStatus(this, "I");
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	// save SP 한개로 사용하는 경우

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.dsList.getColumn(i, "TY_SAVE");
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        			    this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "YEAR", this.dsList.getColumn(i, "YEAR"));                        // 기준년도
        				this.dsSave.setColumn(nrow, "NO", this.dsList.getColumn(i, "NO"));                            // 일련번호
        				this.dsSave.setColumn(nrow, "GBN", this.dsList.getColumn(i, "GBN"));                          // 구분
        				this.dsSave.setColumn(nrow, "KEYWORD", this.dsList.getColumn(i, "KEYWORD"));                  // 키워드
        				this.dsSave.setColumn(nrow, "DECDATE", this.dsList.getColumn(i, "DECDATE"));                  // 판결선고일
        				this.dsSave.setColumn(nrow, "COURTCODE", this.dsList.getColumn(i, "COURTCODE"));              // 법원명
        				this.dsSave.setColumn(nrow, "LAWSUIT_YEAR", this.dsList.getColumn(i, "LAWSUIT_YEAR"));        // 사건년도
        				this.dsSave.setColumn(nrow, "LAWSUIT_CODE", this.dsList.getColumn(i, "LAWSUIT_CODE"));        // 사건코드
        				this.dsSave.setColumn(nrow, "LAWSUIT_NO", this.dsList.getColumn(i, "LAWSUIT_NO"));            // 사건번호
        				this.dsSave.setColumn(nrow, "LOC", this.dsList.getColumn(i, "LOC"));                          // 지역
        				this.dsSave.setColumn(nrow, "DONG", this.dsList.getColumn(i, "DONG"));                        // 동
        				this.dsSave.setColumn(nrow, "TOTAL_HOUSE", this.dsList.getColumn(i, "TOTAL_HOUSE"));          // 총세대
        				this.dsSave.setColumn(nrow, "TRANS_HOUSE", this.dsList.getColumn(i, "TRANS_HOUSE"));          // 양도세대
        				this.dsSave.setColumn(nrow, "WONGO", this.dsList.getColumn(i, "WONGO"));                      // 원고
        				this.dsSave.setColumn(nrow, "WONGO_DEPUTY", this.dsList.getColumn(i, "WONGO_DEPUTY"));        // 원고대리인
        				this.dsSave.setColumn(nrow, "PIGO1", this.dsList.getColumn(i, "PIGO1"));                      // 피고1
        				this.dsSave.setColumn(nrow, "PIGO2", this.dsList.getColumn(i, "PIGO2"));                      // 피고2
        				this.dsSave.setColumn(nrow, "PIGO3", this.dsList.getColumn(i, "PIGO3"));                      // 피고3
        				this.dsSave.setColumn(nrow, "PIGO_DEPUTY", this.dsList.getColumn(i, "PIGO_DEPUTY"));          // 피고대리인
        				this.dsSave.setColumn(nrow, "FIRST_SOGA", this.dsList.getColumn(i, "FIRST_SOGA"));            // 최소소가
        				this.dsSave.setColumn(nrow, "FINAL_SOGA", this.dsList.getColumn(i, "FINAL_SOGA"));            // 최종소가
        				this.dsSave.setColumn(nrow, "SAFE_AMT", this.dsList.getColumn(i, "SAFE_AMT"));                // 안전진단금액
        				this.dsSave.setColumn(nrow, "GAMJUNG_AMT", this.dsList.getColumn(i, "GAMJUNG_AMT"));          // 법원감정금액
        				this.dsSave.setColumn(nrow, "JUDGE_AMT1", this.dsList.getColumn(i, "JUDGE_AMT1"));            // 판결금액1
        				this.dsSave.setColumn(nrow, "JUDGE_AMT2", this.dsList.getColumn(i, "JUDGE_AMT2"));            // 판결금액2
        				this.dsSave.setColumn(nrow, "JUDGE_AMT3", this.dsList.getColumn(i, "JUDGE_AMT3"));            // 판결금액3
        				this.dsSave.setColumn(nrow, "PANRAE_POINT", this.dsList.getColumn(i, "PANRAE_POINT"));        // 판례요지
        				this.dsSave.setColumn(nrow, "REMARK", this.dsList.getColumn(i, "REMARK"));                    // 비고
        				this.dsSave.setColumn(nrow, "WIN_RATE", this.dsList.getColumn(i, "WIN_RATE"));                // 승소율
        				this.dsSave.setColumn(nrow, "ONE_POINT_AMT", this.dsList.getColumn(i, "ONE_POINT_AMT"));      // 인당판결금액
        				this.dsSave.setColumn(nrow, "RESP_LIMIT", this.dsList.getColumn(i, "RESP_LIMIT"));            // 책임재한
        				this.dsSave.setColumn(nrow, "USE_CONF_DATE", this.dsList.getColumn(i, "USE_CONF_DATE"));      // 사용승인일
        				this.dsSave.setColumn(nrow, "METHOD1", this.dsList.getColumn(i, "METHOD1"));                  // 0.3mm미만 균열공법
        				this.dsSave.setColumn(nrow, "METHOD2", this.dsList.getColumn(i, "METHOD2"));                  // 0.3mm이상 균열공법
        				this.dsSave.setColumn(nrow, "METHOD3", this.dsList.getColumn(i, "METHOD3"));                  // 층간 균열공법
        				this.dsSave.setColumn(nrow, "WRITE_ER", this.dsList.getColumn(i, "WRITE_ER"));                // 작성자
        				this.dsSave.setColumn(nrow, "WRITE_YMD", this.dsList.getColumn(i, "WRITE_YMD"));              // 작성일

        				break;
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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {

        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
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
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id = "DAX_CFDEPT"){
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        	}else if(id = "DAX_CFBASEINFO_ALL"){
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");   // 재직구분
        	}

        	return true;
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.divData_div_STD_btn01_onclick = function(obj,e)
        {
        	this.dsList.addRow();
        	this.dsList.setColumn(0, "TY_SAVE", "I");
        	this.gfnSetFormStatus(this, "U");
        };

        this.divData_div_STD_btn02_onclick = function(obj,e)
        {
        	this.dsList.addRow();
        	this.dsList.setColumn(0, "TY_SAVE", "D");
        	this.gfnSetFormStatus(this, "U");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.div_STD.form.staTRANS_HOUSE.addEventHandler("onclick",this.divData_div_STD_sta05_00_onclick,this);
            this.divData.form.div_STD.form.sta03.addEventHandler("onclick",this.divData_div_STD_sta03_onclick,this);
            this.divData.form.div_STD.form.staDONG.addEventHandler("onclick",this.divData_div_STD_sta03_onclick,this);
            this.divData.form.div_STD.form.staMETHOD3.addEventHandler("onclick",this.divData_div_STD_sta06_00_00_onclick,this);
            this.divData.form.div_STD.form.staKEYWORD.addEventHandler("onclick",this.divData_div_STD_sta12_00_00_onclick,this);
            this.divData.form.div_STD.form.btn01.addEventHandler("onclick",this.divData_div_STD_btn01_onclick,this);
            this.divData.form.div_STD.form.btn02.addEventHandler("onclick",this.divData_div_STD_btn02_onclick,this);
            this.dsSUEKIND.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DVA_PRECEDENTS_DATA_SAVE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
