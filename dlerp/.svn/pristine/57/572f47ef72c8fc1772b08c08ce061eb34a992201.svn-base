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
            this.set_titletext("소송등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"COURTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"COURTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LAWSUIT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"LAWSUIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAWSUIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REL_SITE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REL_SITE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LAWSUIT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LAWSUIT_INCHARGE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LAWSUIT_INCHARGE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSTANCEGBN\" type=\"STRING\" size=\"256\"/><Column id=\"ENDGBN\" type=\"STRING\" size=\"256\"/><Column id=\"REL_DEPT_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"REL_DEPT_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"REL_DEPT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"REL_DEPT_NM3\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_INCHARGE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_INCHARGE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUEKIND\" type=\"STRING\" size=\"256\"/><Column id=\"WONGO\" type=\"STRING\" size=\"256\"/><Column id=\"PIGO\" type=\"STRING\" size=\"256\"/><Column id=\"BOJO_CHAMGAIN\" type=\"STRING\" size=\"256\"/><Column id=\"JAEPAN_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"GAMJUNG_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CHUNGGU_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DANGSA_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"WONGO_SOGA\" type=\"STRING\" size=\"256\"/><Column id=\"PIGO_SOGA\" type=\"STRING\" size=\"256\"/><Column id=\"PANSA_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"PANSA_RIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PANSA_LEFT\" type=\"STRING\" size=\"256\"/><Column id=\"DECIDE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WONGO_AGENT\" type=\"STRING\" size=\"256\"/><Column id=\"PIGO_AGENT\" type=\"STRING\" size=\"256\"/><Column id=\"BOJO_AGENT\" type=\"STRING\" size=\"256\"/><Column id=\"APPELLANT\" type=\"STRING\" size=\"256\"/><Column id=\"APPELDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSIT\" type=\"STRING\" size=\"256\"/><Column id=\"SUCCESS_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"STAMP_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSMITTAL_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"THIS_YEAR_COST\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COST\" type=\"STRING\" size=\"256\"/><Column id=\"DECIDE_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PROGRESS\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"WONGO_OPINION\" type=\"STRING\" size=\"256\"/><Column id=\"PIGO_OPINION\" type=\"STRING\" size=\"256\"/><Column id=\"PURPORT_CLAIM\" type=\"STRING\" size=\"256\"/><Column id=\"JUDGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"ACTION_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"LAWSUIT_GBN\" type=\"STRING\" size=\"256\"/><Column id=\"WRITE_ER\" type=\"STRING\" size=\"256\"/><Column id=\"WRITE_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_ER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_YMD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DVAPR_LAWSUIT_REC_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo1</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo3</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DVAPR_LAWSUIT_REC_SAVE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DVAPR_LAWSUIT_REC_RELATE_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DVAPR_MULTI_FILE_EXPLORER_SELECT</Col></Row><Row><Col id=\"SP\">DVAPR_LAWSUIT_REC_RELATE_SAVE</Col><Col id=\"TARGET\">save1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsINSTANCEGBN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsENDGBN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLAWSUIT_GBN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSUEKIND", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ITEM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_STD","0","0",null,"205","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrolltype("both");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"22","0",null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("0");
            obj.set_text("기본사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta00","0","staTitle:5","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("1");
            obj.set_text("사건번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg00","sta00:-1","staTitle:5","478","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta02","staBg00:-1","staTitle:5","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("7");
            obj.set_text("관련현장");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg02","sta02:-1","staTitle:5","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta00:-1","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("13");
            obj.set_text("사건담당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg03","sta03:-1","staBg00:-1","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta04","staBg03:-1","56","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("16");
            obj.set_text("소송제기일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg04","sta04:-1","56","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta05","staBg04:-1","sta02:-1","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("19");
            obj.set_text("심급구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg05","sta05:-1","staBg02:-1","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta03:-1","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("25");
            obj.set_text("관련부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg06","sta06:-1","staBg03:-1","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta07","staBg06:-1","sta04:-1","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("28");
            obj.set_text("담당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg07","sta07:-1","staBg04:-1","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta08","staBg07:-1","sta05:-1","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("31");
            obj.set_text("사건구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg08","sta08:-1","staBg05:-1","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta09","0","sta06:-1","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("37");
            obj.set_text("원고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg09","sta09:-1","staBg06:-1","478","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta09_00","0","sta09:-1","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("43");
            obj.set_text("보조참가인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta09_00:-1","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("51");
            obj.set_text("청구금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg09_00","sta09_00:-1","staBg09:-1","478","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg12","sta12:-1","staBg09_00:-1","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta13","staBg12:-1","staBg09_00:-1","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("53");
            obj.set_text("당사분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg13","sta13:-1","staBg09_00:-1","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta11_01","staBg09_00:-1","143","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("46");
            obj.set_text("재판부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta14","staBg13:-1","sta11_01:-1","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("55");
            obj.set_text("원고소가");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg11_01","sta11_01:-1","143","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg14","sta14:-1","staBg11_01:-1","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FOUNDATION","sta07:4","61","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Combo("cboCD_KIND","sta08:5","90","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("32");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsLAWSUIT_GBN");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Div("ccfCOURTHOUSE","94","32","185","20",null,null,null,"604",null,null,this.divData.form.div_STD.form);
            obj.set_taborder("2");
            obj.getSetter("CodeFindName").set("DVA_COURTHOUSE_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","94","61","185","20",null,null,null,"604",null,null,this.divData.form.div_STD.form);
            obj.set_taborder("14");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","94","90","185","20",null,null,null,"604",null,null,this.divData.form.div_STD.form);
            obj.set_taborder("26");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta05_00","staBg05:-1","56","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("22");
            obj.set_text("종결구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta08_00","staBg08:-1","85","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("34");
            obj.set_text("소송유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta11_00_00","staBg11_01:-1","143","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("49");
            obj.set_text("감정가액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta14_00","staBg14:-1","sta11_00_00:-1","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("57");
            obj.set_text("피고소가");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg11_00_00","sta11_00_00:-1","143","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg14_00","sta14_00:-1","staBg11_00_00:-1","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg08_00","sta08_00:-1","85","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg05_00","sta05_00:-1","56","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN2","377","90","185","20",null,null,null,"604",null,null,this.divData.form.div_STD.form);
            obj.set_taborder("29");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_ITEM00","94","119","468","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("38");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_ITEM00_00","94","148","468","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("45");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_ITEM01","661","148","184","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("47");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta09_01","staBg09:-1","114","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("40");
            obj.set_text("피고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg09_01","sta09_01:-1","114","478","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_ITEM00_01","661","119","467","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("41");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Combo("cboCD_KIND00","661","61","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("20");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsINSTANCEGBN");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Combo("cboCD_KIND00_00","943","61","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("23");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsENDGBN");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Combo("cboCD_KIND00_00_00","943","90","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("35");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsSUEKIND");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Div("ccfREL_SITE_NM","661","32","185","20",null,null,null,"604",null,null,this.divData.form.div_STD.form);
            obj.set_taborder("8");
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtLAWSUIT_YEAR","284","32","87","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("4");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","edtLAWSUIT_YEAR:4","36","10","10",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("60");
            obj.set_text("-");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtLAWSUIT_CODE","sta01_00_00:1","32","67","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("5");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta01_00","edtLAWSUIT_CODE:3","36","10","10",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("59");
            obj.set_text("-");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtLAWSUIT_NO","sta01_00:2","32","94","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("6");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta02_00","staBg02:-1","27","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("10");
            obj.set_text("사건명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg02_00","938","27","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtLAWSUIT_NAME","943","32","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("11");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new MaskEdit("mskCHUNGGU_AMT","94","177","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("61");
            obj.set_format("#,0");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new MaskEdit("mskDANGSA_AMT","377","177","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("62");
            obj.set_format("#,0");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new MaskEdit("mskWONGO_SOGA","660","177","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("63");
            obj.set_format("#,0");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new MaskEdit("mskPIGO_SOGA","943","177","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("64");
            obj.set_format("#,0");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new MaskEdit("mskGAMJUNG_AMT","943","148","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("65");
            obj.set_format("#,0");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Tab("tabData","0","div_STD:5","1135","375",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_preload("true");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab00",this.divData.form.tabData);
            obj.set_text("상세내용");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("div_STD","0","0",null,"344","0",null,null,null,null,null,this.divData.form.tabData.tab00.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_formscrolltype("both");
            this.divData.form.tabData.tab00.addChild(obj.name, obj);

            obj = new Static("sta00","0","7","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("0");
            obj.set_text("담당판사(부)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg00","sta00:-1","7","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta02","staBg00:-1","7","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("3");
            obj.set_text("담당판사(우)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg02","sta02:-1","7","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta00:-1","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("12");
            obj.set_text("원고소송대리인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg03","sta03:-1","staBg00:-1","468","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta04","staBg03:-1","36","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("15");
            obj.set_text("피고소송대리인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg04","sta04:-1","36","468","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta03:-1","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("18");
            obj.set_text("보조참가대리인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg06","sta06:-1","staBg03:-1","468","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta07","staBg06:-1","sta04:-1","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("21");
            obj.set_text("상소인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg07","sta07:-1","staBg04:-1","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta09","0","sta06:-1","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("27");
            obj.set_text("착수금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg09","sta09:-1","staBg06:-1","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta09_00","0","sta09:-1","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("35");
            obj.set_text("감정료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta09_00:-1","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("43");
            obj.set_text("판결금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg09_00","sta09_00:-1","staBg09:-1","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg12","sta12:-1","staBg09_00:-1","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta11_01","staBg09_00:-1","123","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("37");
            obj.set_text("기타비용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg11_01","sta11_01:-1","123","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg14","staBg12:-1","staBg11_01:-1","850","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta02_00","staBg02:-1","7","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("6");
            obj.set_text("담당판사(좌)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta11_00_00","staBg11_01:-1","123","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("39");
            obj.set_text("당해소송총비용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg11_00_00","sta11_00_00:-1","123","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg02_00","sta02_00:-1","7","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta09_01","staBg09:-1","94","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("29");
            obj.set_text("성공보수금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg09_01","sta09_01:-1","94","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta04_00","staBg02_00:-1","7","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("9");
            obj.set_text("판결확정일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg04_00","sta04_00:-1","7","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FOUNDATION00","952","12","177","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta04_00_00","staBg07:-1","65","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("24");
            obj.set_text("상소일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg04_00_00","sta04_00_00:-1","65","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FOUNDATION00_00","952","70","177","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_ITEM01_01","670","70","176","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("22");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_ITEM01_01_00","103","70","460","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("19");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta09_01_00","staBg09_01:-1","94","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("31");
            obj.set_text("인지대");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg09_01_00","sta09_01_00:-1","94","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta09_01_00_00","staBg09_01_00:-1","94","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("33");
            obj.set_text("송달료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg09_01_00_00","sta09_01_00_00:-1","94","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta11_00_00_00","staBg11_00_00:-1","123","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("41");
            obj.set_text("전체소송총비용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg11_00_00_00","sta11_00_00_00:-1","123","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta12_00","0","181","100","82",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("46");
            obj.set_text("사건개요");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg14_00","sta12_00:-1","181","1034","82",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL00_00","103","186","1026","72",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("47");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta12_00_00","0","262","100","82",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("49");
            obj.set_text("주요진행사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg14_00_00","sta12_00_00:-1","262","1034","82",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL00_00_00","103","267","1026","72",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("50");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_ITEM00_02","103","12","177","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("1");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_ITEM00_02_00","386","12","177","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("4");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_ITEM01_01_00_00","103","41","460","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("13");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_ITEM01_01_00_00_00","670","41","460","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("16");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_ITEM00_02_00_00","670","12","176","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("7");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new MaskEdit("mskDEPOSIT","104","99","175","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("52");
            obj.set_format("#,0");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new MaskEdit("mskSUCCESS_PAY","387","99","175","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("53");
            obj.set_format("#,0");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new MaskEdit("mskSTAMP_FEE","670","99","175","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("54");
            obj.set_format("#,0");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new MaskEdit("mskTRANSMITTAL_FEE","953","99","175","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("55");
            obj.set_format("#,0");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new MaskEdit("mskAPPRAISAL_FEE","104","128","175","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("56");
            obj.set_format("#,0");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new MaskEdit("mskETC_FEE","387","128","175","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("57");
            obj.set_format("#,0");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new MaskEdit("mskTHIS_YEAR_COST","670","128","175","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("58");
            obj.set_format("#,0");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new MaskEdit("mskTOTAL_COST","953","128","175","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("59");
            obj.set_format("#,0");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Tabpage("tab10",this.divData.form.tabData);
            obj.set_text("쟁점사항");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"31","0",null,null,null,null,null,this.divData.form.tabData.tab10.form);
            obj.set_taborder("0");
            obj.set_text("쟁점정리");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab10.addChild(obj.name, obj);

            obj = new Static("staBg14","0","30",null,"132","0",null,null,null,null,null,this.divData.form.tabData.tab10.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab10.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","161",null,"30","50%",null,null,null,null,null,this.divData.form.tabData.tab10.form);
            obj.set_taborder("2");
            obj.set_text("원고주장");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab10.addChild(obj.name, obj);

            obj = new Static("staBg14_00","-1","190",null,null,"50.00%","0",null,null,null,null,this.divData.form.tabData.tab10.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab10.addChild(obj.name, obj);

            obj = new Static("staBg14_00_00","staBg14_00:-1","190",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab10.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab10.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","sta00_00:-1","161",null,"30","0",null,null,null,null,null,this.divData.form.tabData.tab10.form);
            obj.set_taborder("3");
            obj.set_text("피고주장");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab10.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL00_00_00","3","35","1127","122",null,null,null,null,null,null,this.divData.form.tabData.tab10.form);
            obj.set_taborder("1");
            this.divData.form.tabData.tab10.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL00_00_00_00","2","194","561","149",null,null,null,null,null,null,this.divData.form.tabData.tab10.form);
            obj.set_taborder("4");
            this.divData.form.tabData.tab10.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL00_00_00_00_00","570","194","560","149",null,null,null,null,null,null,this.divData.form.tabData.tab10.form);
            obj.set_taborder("5");
            this.divData.form.tabData.tab10.addChild(obj.name, obj);

            obj = new Tabpage("tab15",this.divData.form.tabData);
            obj.set_text("사건결과");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"31","0",null,null,null,null,null,this.divData.form.tabData.tab15.form);
            obj.set_taborder("0");
            obj.set_text("청구취지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab15.addChild(obj.name, obj);

            obj = new Static("staBg14","0","sta00:-1",null,"85","0",null,null,null,null,null,this.divData.form.tabData.tab15.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab15.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","staBg14:-1",null,"31","0",null,null,null,null,null,this.divData.form.tabData.tab15.form);
            obj.set_taborder("3");
            obj.set_text("판결");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab15.addChild(obj.name, obj);

            obj = new Static("staBg14_00","0","sta00_00:-1",null,"85","0",null,null,null,null,null,this.divData.form.tabData.tab15.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab15.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","0","staBg14_00:-1",null,"31","0",null,null,null,null,null,this.divData.form.tabData.tab15.form);
            obj.set_taborder("6");
            obj.set_text("결과조치");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab15.addChild(obj.name, obj);

            obj = new Static("staBg14_00_00","0","sta00_00_00:-1",null,"87","0",null,null,null,null,null,this.divData.form.tabData.tab15.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab15.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL00_00_00","3","35","1127","75",null,null,null,null,null,null,this.divData.form.tabData.tab15.form);
            obj.set_taborder("1");
            this.divData.form.tabData.tab15.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL00_00_00_00","3","149","1127","75",null,null,null,null,null,null,this.divData.form.tabData.tab15.form);
            obj.set_taborder("4");
            this.divData.form.tabData.tab15.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL00_00_00_00_00","3","263","1127","78",null,null,null,null,null,null,this.divData.form.tabData.tab15.form);
            obj.set_taborder("7");
            this.divData.form.tabData.tab15.addChild(obj.name, obj);

            obj = new Tabpage("tab20",this.divData.form.tabData);
            obj.set_text("진행내역");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid","5","30",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab20.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab20.addChild(obj.name, obj);

            obj = new Button("btn00",null,"3","100","25","5",null,null,null,null,null,this.divData.form.tabData.tab20.form);
            obj.set_taborder("1");
            obj.set_text("파일관리");
            this.divData.form.tabData.tab20.addChild(obj.name, obj);

            obj = new Div("div_STD00","0","tabData:8","1135","140",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_formscrolltype("both");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"22","0",null,null,null,null,null,this.divData.form.div_STD00.form);
            obj.set_taborder("0");
            obj.set_text("관련사건");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.div_STD00.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","staTitle:30",null,null,"0","0",null,null,null,null,this.divData.form.div_STD00.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.div_STD00.addChild(obj.name, obj);

            obj = new Button("btnAdd2","2","25","65","25",null,null,null,null,null,null,this.divData.form.div_STD00.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.divData.form.div_STD00.addChild(obj.name, obj);

            obj = new Button("btnDel2","72","25","65","25",null,null,null,null,null,null,this.divData.form.div_STD00.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.divData.form.div_STD00.addChild(obj.name, obj);

            obj = new Div("ccfLAWSUIT","94","6","185","20",null,null,null,"604",null,null,this);
            obj.set_taborder("2");
            obj.getSetter("CodeFindName").set("DVA_LAWSUIT_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item21","divData.form.div_STD.form.ctclDT_FOUNDATION","value","dsList","SUEDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.div_STD.form.cboCD_KIND","value","dsList","LAWSUIT_GBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.div_STD.form.ccfCOURTHOUSE.form.CDTextBox","value","dsList","COURTCODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.div_STD.form.ccfCOURTHOUSE.form.DSTextBox","value","dsList","COURTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.div_STD.form.ccfID_SABUN.form.CDTextBox","value","dsList","LAWSUIT_INCHARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.div_STD.form.ccfID_SABUN.form.DSTextBox","value","dsList","LAWSUIT_INCHARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.div_STD.form.ccfCD_DEPT.form.CDTextBox","value","dsList","REL_DEPT_CD1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.div_STD.form.ccfCD_DEPT.form.DSTextBox","value","dsList","REL_DEPT_NM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.div_STD.form.ccfID_SABUN2.form.CDTextBox","value","dsList","DEPT_INCHARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.div_STD.form.ccfID_SABUN2.form.DSTextBox","value","dsList","DEPT_INCHARGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.div_STD.form.cboCD_KIND00","value","dsList","INSTANCEGBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.div_STD.form.cboCD_KIND00_00","value","dsList","ENDGBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.div_STD.form.cboCD_KIND00_00_00","value","dsList","SUEKIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.div_STD.form.ccfREL_SITE_NM.form.CDTextBox","value","dsList","REL_SITE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.div_STD.form.ccfREL_SITE_NM.form.DSTextBox","value","dsList","REL_SITE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.div_STD.form.edtLAWSUIT_CODE","value","dsList","LAWSUIT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.div_STD.form.edtLAWSUIT_NO","value","dsList","LAWSUIT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.div_STD.form.edtLAWSUIT_NAME","value","dsList","LAWSUIT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.div_STD.form.edtDS_ITEM00","value","dsList","WONGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.div_STD.form.edtDS_ITEM00_01","value","dsList","PIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.div_STD.form.edtDS_ITEM00_00","value","dsList","BOJO_CHAMGAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.div_STD.form.edtDS_ITEM01","value","dsList","JAEPAN_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.tabData.tab00.form.div_STD.form.ctclDT_FOUNDATION00","value","dsList","DECIDE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.tabData.tab00.form.div_STD.form.ctclDT_FOUNDATION00_00","value","dsList","APPELDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.tabData.tab10.form.edtDS_EMAIL00_00_00","value","dsList","ISSUE_SUMMARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.tabData.tab10.form.edtDS_EMAIL00_00_00_00","value","dsList","WONGO_OPINION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab10.form.edtDS_EMAIL00_00_00_00_00","value","dsList","PIGO_OPINION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.tabData.tab15.form.edtDS_EMAIL00_00_00","value","dsList","PURPORT_CLAIM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.tabData.tab15.form.edtDS_EMAIL00_00_00_00","value","dsList","JUDGMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.tabData.tab15.form.edtDS_EMAIL00_00_00_00_00","value","dsList","ACTION_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.div_STD.form.edtLAWSUIT_YEAR","value","dsList","LAWSUIT_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","ccfLAWSUIT.form.CDTextBox","value","dsSearch","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","ccfLAWSUIT.form.DSTextBox","value","dsSearch","NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.div_STD.form.mskCHUNGGU_AMT","value","dsList","CHUNGGU_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.div_STD.form.mskDANGSA_AMT","value","dsList","DANGSA_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.div_STD.form.mskWONGO_SOGA","value","dsList","WONGO_SOGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.div_STD.form.mskPIGO_SOGA","value","dsList","PIGO_SOGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.div_STD.form.mskGAMJUNG_AMT","value","dsList","GAMJUNG_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.tabData.tab00.form.div_STD.form.mskDEPOSIT","value","dsList","DEPOSIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tabData.tab00.form.div_STD.form.mskSUCCESS_PAY","value","dsList","SUCCESS_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tabData.tab00.form.div_STD.form.mskSTAMP_FEE","value","dsList","STAMP_FEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tabData.tab00.form.div_STD.form.mskTRANSMITTAL_FEE","value","dsList","TRANSMITTAL_FEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab00.form.div_STD.form.mskAPPRAISAL_FEE","value","dsList","APPRAISAL_FEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab00.form.div_STD.form.mskETC_FEE","value","dsList","ETC_FEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab00.form.div_STD.form.mskTHIS_YEAR_COST","value","dsList","THIS_YEAR_COST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.tabData.tab00.form.div_STD.form.mskTOTAL_COST","value","dsList","TOTAL_COST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab00.form.div_STD.form.edtDS_ITEM00_02","value","dsList","PANSA_MAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.tabData.tab00.form.div_STD.form.edtDS_ITEM00_02_00","value","dsList","PANSA_RIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.tabData.tab00.form.div_STD.form.edtDS_ITEM00_02_00_00","value","dsList","PANSA_LEFT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.tabData.tab00.form.div_STD.form.edtDS_ITEM01_01_00_00","value","dsList","WONGO_AGENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.tabData.tab00.form.div_STD.form.edtDS_ITEM01_01_00_00_00","value","dsList","PIGO_AGENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.tabData.tab00.form.div_STD.form.edtDS_ITEM01_01_00","value","dsList","BOJO_AGENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.tabData.tab00.form.div_STD.form.edtDS_ITEM01_01","value","dsList","APPELLANT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.tabData.tab00.form.div_STD.form.edtDS_EMAIL00_00_00","value","dsList","MAIN_PROGRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.tabData.tab00.form.div_STD.form.edtDS_EMAIL00_00","value","dsList","DETAIL_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DVA_LAWSUIT_REC_SAVE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var chkR = "";

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

        	if(!this.gfnIsNull(this.getOwnerFrame().YEAR) && !this.gfnIsNull(this.getOwnerFrame().NO)) {
        		this.dsSearch.setColumn(0, "YEAR", this.getOwnerFrame().YEAR);
        	    this.dsSearch.setColumn(0, "GBN", this.getOwnerFrame().GBN);
        	    this.dsSearch.setColumn(0, "NO", this.getOwnerFrame().NO);
        		this.FormBtns.Select.click();
        	}

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
        	this.dsCombo.setColumn(0, "CD_TYPE", "INSTANCEGB");

        	this.dsCombo1 = new Dataset();
        	this.dsCombo1.addColumn("CD_SYSTEM", "string");
        	this.dsCombo1.addColumn("CD_TYPE", "string");

        	this.dsCombo1.addRow();
        	this.dsCombo1.setColumn(0, "CD_SYSTEM", "DV");
        	this.dsCombo1.setColumn(0, "CD_TYPE", "ENDGBN");

        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_TYPE", "string");

        	this.dsCombo2.addRow();
        	this.dsCombo2.setColumn(0, "CD_SYSTEM", "DV");
        	this.dsCombo2.setColumn(0, "CD_TYPE", "LAWSUITGBN");

        	this.dsCombo3 = new Dataset();
        	this.dsCombo3.addColumn("CD_SYSTEM", "string");
        	this.dsCombo3.addColumn("CD_TYPE", "string");

        	this.dsCombo3.addRow();
        	this.dsCombo3.setColumn(0, "CD_SYSTEM", "DV");
        	this.dsCombo3.setColumn(0, "CD_TYPE", "SUEKIND");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo combo1=dsCombo1 combo2=dsCombo2 combo3=dsCombo3";
        	var outData     = "dsINSTANCEGBN=combo0 dsENDGBN=combo10 dsLAWSUIT_GBN=combo20 dsSUEKIND=combo30";
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
        	this.dxGrid = this.divData.form.tabData.tab20.form.objGrid;
        	this.dxGrid1 = this.divData.form.div_STD00.form.objGrid1;
        	this.ccfCD_DEPT = this.divData.form.div_STD.form.ccfCD_DEPT;
        	this.ccfID_SABUN = this.divData.form.div_STD.form.ccfID_SABUN;
        	this.ccfID_SABUN2 = this.divData.form.div_STD.form.ccfID_SABUN2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DV", "DVA_LAWSUIT_REC_PROG");
        	this.gfnGridInit(this.dxGrid, this.dsList2, "DV", "DVA_LAWSUIT_FILE_EXPLORER");

        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN2.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 코드파인드 설정
        	this.dxGrid1.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 코드파인드 값 변경
        	this.dxGrid1.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YEAR", "string");  //년도
        	this.dsSelect.addColumn("GBN", "string");   //구분
        	this.dsSelect.addColumn("NO", "decimal");   //관리번호

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("YEAR", "string");  //년도
        	this.dsSelect1.addColumn("GBN", "string");   //구분
        	this.dsSelect1.addColumn("NO", "decimal");   //관리번호
        	this.dsSelect1.addColumn("TARGET_PROG", "string");   //구분

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");           // 저장구분
        	this.dsSave.addColumn("YEAR", "string");              // 기준년도
        	this.dsSave.addColumn("GBN", "string");               // 사건구분
        	this.dsSave.addColumn("NO", "decimal");               // 관리번호
        	this.dsSave.addColumn("COURTCODE", "string");         // 법원명
        	this.dsSave.addColumn("LAWSUIT_YEAR", "string");      // 사건년도
        	this.dsSave.addColumn("LAWSUIT_CODE", "string");      // 사건코드
        	this.dsSave.addColumn("LAWSUIT_NO", "string");        // 사건번호
        	this.dsSave.addColumn("REL_SITE", "string");          // 관련현장
        	this.dsSave.addColumn("LAWSUIT_NAME", "string");      // 사건명
        	this.dsSave.addColumn("LAWSUIT_INCHARGE", "string");  // 사건담당
        	this.dsSave.addColumn("SUEDATE", "string");           // 소송제기일
        	this.dsSave.addColumn("REL_DEPT1", "string");         // 관련부서1
        	this.dsSave.addColumn("REL_DEPT2", "string");         // 관련부서2
        	this.dsSave.addColumn("REL_DEPT3", "string");         // 관련부서3
        	this.dsSave.addColumn("DEPT_INCHARGE", "string");     // 부서담당
        	this.dsSave.addColumn("WONGO", "string");             // 원고
        	this.dsSave.addColumn("PIGO", "string");              // 피고
        	this.dsSave.addColumn("BOJO_CHAMGAIN", "string");     // 보조참가인
        	this.dsSave.addColumn("JAEPAN_DEPT", "string");       // 재판부
        	this.dsSave.addColumn("GAMJUNG_AMT", "string");       // 감정가액
        	this.dsSave.addColumn("CHUNGGU_AMT", "string");       // 청구금액
        	this.dsSave.addColumn("DANGSA_AMT", "string");        // 당사분
        	this.dsSave.addColumn("WONGO_SOGA", "string");        // 원고소가
        	this.dsSave.addColumn("PIGO_SOGA", "string");         // 피고소가
        	this.dsSave.addColumn("PANSA_MAIN", "string");        // 담당판사(부)
        	this.dsSave.addColumn("PANSA_RIGHT", "string");       // 담당판사(우)
        	this.dsSave.addColumn("PANSA_LEFT", "string");        // 담당판사(좌)
        	this.dsSave.addColumn("DECIDE_DATE", "string");       // 판결확정일
        	this.dsSave.addColumn("WONGO_AGENT", "string");       // 원고소송대리인
        	this.dsSave.addColumn("PIGO_AGENT", "string");        // 피고소송대리인
        	this.dsSave.addColumn("BOJO_AGENT", "string");        // 보조참가대리인
        	this.dsSave.addColumn("APPELLANT", "string");         // 상소인
        	this.dsSave.addColumn("APPELDATE", "string");         // 상소일
        	this.dsSave.addColumn("DEPOSIT", "string");           // 착수금
        	this.dsSave.addColumn("SUCCESS_PAY", "string");       // 선공보수금
        	this.dsSave.addColumn("STAMP_FEE", "string");         // 인지대
        	this.dsSave.addColumn("TRANSMITTAL_FEE", "string");   // 송달료
        	this.dsSave.addColumn("APPRAISAL_FEE", "string");     // 감정료
        	this.dsSave.addColumn("ETC_FEE", "string");           // 기타비용
        	this.dsSave.addColumn("THIS_YEAR_COST", "string");    // 당해소송총비용
        	this.dsSave.addColumn("TOTAL_COST", "string");        // 전체소송비용
        	this.dsSave.addColumn("DECIDE_AMT", "string");        // 판결금액
        	this.dsSave.addColumn("DETAIL_CONTENT", "string");    // 상세내용
        	this.dsSave.addColumn("MAIN_PROGRESS", "string");     // 주요진행사항
        	this.dsSave.addColumn("ISSUE_SUMMARY", "string");     // 쟁점정리
        	this.dsSave.addColumn("WONGO_OPINION", "string");     // 원고주장
        	this.dsSave.addColumn("PIGO_OPINION", "string");      // 피고주장
        	this.dsSave.addColumn("PURPORT_CLAIM", "string");     // 청구취지
        	this.dsSave.addColumn("JUDGMENT", "string");          // 판결
        	this.dsSave.addColumn("ACTION_RESULT", "string");     // 결과조치
        	this.dsSave.addColumn("LAWSUIT_GBN", "string");       // 사건구분
        	this.dsSave.addColumn("WRITE_ER", "string");          // 작성자
        	this.dsSave.addColumn("WRITE_YMD", "string");         // 작성일
        	this.dsSave.addColumn("INSTANCEGBN", "string");       // 심급구분
        	this.dsSave.addColumn("ENDGBN", "string");            // 종결구분
        	this.dsSave.addColumn("SUEKIND", "string");           // 소송유형

        	this.dsSave1 = new Dataset();
        	this.dsSave1.addColumn("TY_SAVE", "string");
        	this.dsSave1.addColumn("YEAR", "string");
        	this.dsSave1.addColumn("GBN", "string");
        	this.dsSave1.addColumn("NO", "int");
        	this.dsSave1.addColumn("SEQ", "int");
        	this.dsSave1.addColumn("WRITE_ER", "string");
        	this.dsSave1.addColumn("CON_YEAR", "string");
        	this.dsSave1.addColumn("CON_GBN", "string");
        	this.dsSave1.addColumn("CON_NO", "string");

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
        	this.dsSelect1.clearData();

        	this.dsList.clearData();
        	this.dsList1.clearData();
        	this.dsList2.clearData();

        	this.dsSelect.addRow();
        	this.dsSelect1.addRow();

        	this.dsSelect.setColumn(0, "YEAR", this.dsSearch.getColumn(0, "YEAR"));
        	this.dsSelect.setColumn(0, "NO", this.dsSearch.getColumn(0, "NO"));
        	this.dsSelect.setColumn(0, "GBN", "RG02");

        	this.dsSelect1.setColumn(0, "YEAR", this.dsSearch.getColumn(0, "YEAR"));
        	this.dsSelect1.setColumn(0, "NO", this.dsSearch.getColumn(0, "NO"));
        	this.dsSelect1.setColumn(0, "GBN", "RG02");
        	this.dsSelect1.setColumn(0, "TARGET_PROG", "LAWSUIT_PROG");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select1=dsSelect select2=dsSelect1";
        	var outData     = "dsList=select0 dsList1=select10 dsList2=select20";
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
        	this.dsList1.clearData();
        	this.dsList2.clearData();
        	this.dsSearch.clearData();
        	this.dsList.addRow();
        	this.dsList.setColumn(0, "TY_SAVE", "I");
        	this.dsSearch.addRow();
        	this.gfnSetFormStatus(this, "I");
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
            this.gfnConfirm("삭제하시겠습니까?", "fnMainDel");
        };

        /*
         *	삭제 버튼
         */
        this.fnMainDel = function(strId, val) {
            if(val == false) return;
            this.dsList.setColumn(0, "TY_SAVE", "D");
        	this.gfnSetFormStatus(this, "D");
        	this.fnSave();
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.gfnGridValidate(this.dxGrid1)) return;
        	if (!this.fnSaveValidate()) return;

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
        				this.dsSave.setColumn(nrow, "YEAR", this.dsList.getColumn(0, "YEAR"));                           // 기준년도
        				this.dsSave.setColumn(nrow, "GBN", this.dsList.getColumn(0, "GBN"));                             // 사건구분
        				this.dsSave.setColumn(nrow, "NO", this.dsList.getColumn(0, "NO"));                               // 관리번호
        				this.dsSave.setColumn(nrow, "COURTCODE", this.dsList.getColumn(0, "COURTCODE"));                 // 법원명
        				this.dsSave.setColumn(nrow, "LAWSUIT_YEAR", this.dsList.getColumn(0, "LAWSUIT_YEAR"));           // 사건년도
        				this.dsSave.setColumn(nrow, "LAWSUIT_CODE", this.dsList.getColumn(0, "LAWSUIT_CODE"));           // 사건코드
        				this.dsSave.setColumn(nrow, "LAWSUIT_NO", this.dsList.getColumn(0, "LAWSUIT_NO"));               // 사건번호
        				this.dsSave.setColumn(nrow, "REL_SITE", this.dsList.getColumn(0, "REL_SITE_CD"));                // 관련현장
        				this.dsSave.setColumn(nrow, "LAWSUIT_NAME", this.dsList.getColumn(0, "LAWSUIT_NAME"));           // 사건명
        				this.dsSave.setColumn(nrow, "LAWSUIT_INCHARGE", this.dsList.getColumn(0, "LAWSUIT_INCHARGE_CD"));// 사건담당
        				this.dsSave.setColumn(nrow, "SUEDATE", this.dsList.getColumn(0, "SUEDATE"));                     // 소송제기일
        				this.dsSave.setColumn(nrow, "REL_DEPT1", this.dsList.getColumn(0, "REL_DEPT_CD1"));              // 관련부서1
        				this.dsSave.setColumn(nrow, "REL_DEPT2", "");                                                    // 관련부서2
        				this.dsSave.setColumn(nrow, "REL_DEPT3", "");                                                    // 관련부서3
        				this.dsSave.setColumn(nrow, "DEPT_INCHARGE", this.dsList.getColumn(0, "DEPT_INCHARGE_CD"));      // 부서담당
        				this.dsSave.setColumn(nrow, "WONGO", this.dsList.getColumn(0, "WONGO"));                         // 원고
        				this.dsSave.setColumn(nrow, "PIGO", this.dsList.getColumn(0, "PIGO"));                           // 피고
        				this.dsSave.setColumn(nrow, "BOJO_CHAMGAIN", this.dsList.getColumn(0, "BOJO_CHAMGAIN"));         // 보조참가인
        				this.dsSave.setColumn(nrow, "JAEPAN_DEPT", this.dsList.getColumn(0, "JAEPAN_DEPT"));             // 재판부
        				this.dsSave.setColumn(nrow, "GAMJUNG_AMT", this.dsList.getColumn(0, "GAMJUNG_AMT"));             // 감정가액
        				this.dsSave.setColumn(nrow, "CHUNGGU_AMT", this.dsList.getColumn(0, "CHUNGGU_AMT"));             // 청구금액
        				this.dsSave.setColumn(nrow, "DANGSA_AMT", this.dsList.getColumn(0, "DANGSA_AMT"));               // 당사분
        				this.dsSave.setColumn(nrow, "WONGO_SOGA", this.dsList.getColumn(0, "WONGO_SOGA"));               // 원고소가
        				this.dsSave.setColumn(nrow, "PIGO_SOGA", this.dsList.getColumn(0, "PIGO_SOGA"));                 // 피고소가
        				this.dsSave.setColumn(nrow, "PANSA_MAIN", this.dsList.getColumn(0, "PANSA_MAIN"));               // 담당판사(부)
        				this.dsSave.setColumn(nrow, "PANSA_RIGHT", this.dsList.getColumn(0, "PANSA_RIGHT"));             // 담당판사(우)
        				this.dsSave.setColumn(nrow, "PANSA_LEFT", this.dsList.getColumn(0, "PANSA_LEFT"));               // 담당판사(좌)
        				this.dsSave.setColumn(nrow, "DECIDE_DATE", this.dsList.getColumn(0, "DECIDE_DATE"));             // 판결확정일
        				this.dsSave.setColumn(nrow, "WONGO_AGENT", this.dsList.getColumn(0, "WONGO_AGENT"));             // 원고소송대리인
        				this.dsSave.setColumn(nrow, "PIGO_AGENT", this.dsList.getColumn(0, "PIGO_AGENT"));               // 피고소송대리인
        				this.dsSave.setColumn(nrow, "BOJO_AGENT", this.dsList.getColumn(0, "BOJO_AGENT"));               // 보조참가대리인
        				this.dsSave.setColumn(nrow, "APPELLANT", this.dsList.getColumn(0, "APPELLANT"));                 // 상소인
        				this.dsSave.setColumn(nrow, "APPELDATE", this.dsList.getColumn(0, "APPELDATE"));                 // 상소일
        				this.dsSave.setColumn(nrow, "DEPOSIT", this.dsList.getColumn(0, "DEPOSIT"));                     // 착수금
        				this.dsSave.setColumn(nrow, "SUCCESS_PAY", this.dsList.getColumn(0, "SUCCESS_PAY"));             // 선공보수금
        				this.dsSave.setColumn(nrow, "STAMP_FEE", this.dsList.getColumn(0, "STAMP_FEE"));                 // 인지대
        				this.dsSave.setColumn(nrow, "TRANSMITTAL_FEE", this.dsList.getColumn(0, "TRANSMITTAL_FEE"));     // 송달료
        				this.dsSave.setColumn(nrow, "APPRAISAL_FEE", this.dsList.getColumn(0, "APPRAISAL_FEE"));         // 감정료
        				this.dsSave.setColumn(nrow, "ETC_FEE", this.dsList.getColumn(0, "ETC_FEE"));                     // 기타비용
        				this.dsSave.setColumn(nrow, "THIS_YEAR_COST", this.dsList.getColumn(0, "THIS_YEAR_COST"));       // 당해소송총비용
        				this.dsSave.setColumn(nrow, "TOTAL_COST", this.dsList.getColumn(0, "TOTAL_COST"));               // 전체소송비용
        				this.dsSave.setColumn(nrow, "DECIDE_AMT", this.dsList.getColumn(0, "DECIDE_AMT"));               // 판결금액
        				this.dsSave.setColumn(nrow, "DETAIL_CONTENT", this.dsList.getColumn(0, "DETAIL_CONTENT"));       // 상세내용
        				this.dsSave.setColumn(nrow, "MAIN_PROGRESS", this.dsList.getColumn(0, "MAIN_PROGRESS"));         // 주요진행사항
        				this.dsSave.setColumn(nrow, "ISSUE_SUMMARY", this.dsList.getColumn(0, "ISSUE_SUMMARY"));         // 쟁점정리
        				this.dsSave.setColumn(nrow, "WONGO_OPINION", this.dsList.getColumn(0, "WONGO_OPINION"));         // 원고주장
        				this.dsSave.setColumn(nrow, "PIGO_OPINION", this.dsList.getColumn(0, "PIGO_OPINION"));           // 피고주장
        				this.dsSave.setColumn(nrow, "PURPORT_CLAIM", this.dsList.getColumn(0, "PURPORT_CLAIM"));         // 청구취지
        				this.dsSave.setColumn(nrow, "JUDGMENT", this.dsList.getColumn(0, "JUDGMENT"));                   // 판결
        				this.dsSave.setColumn(nrow, "ACTION_RESULT", this.dsList.getColumn(0, "ACTION_RESULT"));         // 결과조치
        				this.dsSave.setColumn(nrow, "LAWSUIT_GBN", this.dsList.getColumn(0, "LAWSUIT_GBN"));             // 사건구분
        				this.dsSave.setColumn(nrow, "WRITE_ER", this.AuthClient.ID_USER);                                // 작성자
        				this.dsSave.setColumn(nrow, "WRITE_YMD", "");                                                    // 작성일 < SP에서 처리.
        				this.dsSave.setColumn(nrow, "INSTANCEGBN", this.dsList.getColumn(0, "INSTANCEGBN"));             // 심급구분
        				this.dsSave.setColumn(nrow, "ENDGBN", this.dsList.getColumn(0, "ENDGBN"));                       // 종결구분
        				this.dsSave.setColumn(nrow, "SUEKIND", this.dsList.getColumn(0, "SUEKIND"));                     // 소송유형
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0)  return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId , 	// transaction을 구분하기 위한 svc id값
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

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {

        	if (this.gfnIsNull(this.dsList.getColumn(0, "COURTCODE"))) {
        		this.gfnAlert("사건번호를 입력하세요.");
        		this.ccfCOURTHOUSE.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "LAWSUIT_YEAR"))) {
        		this.gfnAlert("사건번호를 입력하세요.");
        		this.edtLAWSUIT_YEAR.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "LAWSUIT_CODE"))) {
        		this.gfnAlert("사건번호를 입력하세요.");
        		this.edtLAWSUIT_CODE.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "LAWSUIT_NO"))) {
        		this.gfnAlert("사건번호를 입력하세요.");
        		this.edtLAWSUIT_NO.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "REL_SITE_CD","REL_SITE_NM"))){
        		this.gfnAlert("관련현장을 입력하세요.");
        		this.ccfREL_SITE_NM.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "LAWSUIT_NAME"))){
        		this.gfnAlert("사건명을 입력하세요.");
        		this.edtLAWSUIT_NAME.setFocus();
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
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.dsList.setColumn(0, "TY_SAVE", "");
        		this.chkR = "";
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo") {
        		if (errorCode == 0) {
        			this.dsINSTANCEGBN.deleteRow(0);
        			this.dsENDGBN.deleteRow(0);
        			this.dsLAWSUIT_GBN.deleteRow(0);
        			this.dsSUEKIND.deleteRow(0);

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
            if(e.oldvalue != e.newvalue && this.chkR != "dbl") {
        	    this.gfnSetFormStatus(this);	// 폼상태 초기화
        	    this.dsList.clearData();
        	    this.gfnGridClear(this.dxGrid);
        	    this.gfnGridClear(this.dxGrid1);
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
           var formState = this.gfnGetFormStatus(this);

        	if(formState == "Q"){
        	   this.dsList.setColumn(0, "TY_SAVE", "U");
        	   this.gfnSetFormStatus(this, "U");
        	}

        };

        this.divData_div_STD00_btnAdd2_onclick = function(obj,e)
        {
            this.gfnGridAdd(this.dxGrid1, "bottom", true);
        };

        this.divData_div_STD00_btnDel2_onclick = function(obj,e)
        {
            this.gfnConfirm("삭제하시겠습니까?", "fnDelproc");
        };

        this.fnDelproc = function(id, val){
        	if(val == false) return;
        		this.gfnGridDel(this.dxGrid1);
        		this.fnSaveR();
        }

        this.divData_tabData_tab20_btn00_onclick = function(obj,e)
        {
        	var param = {};
        	param.YEAR = this.dsSearch.getColumn(0, "YEAR");
        	param.NO = this.dsSearch.getColumn(0, "NO");
        	param.GBN = "RG02";
        	param.TARGET_PROG = "LAWSUIT_PROG";
        	param.TARGET_NAME = "소송등록 - 진행내역";

        	this.gfnFormOpen("DVA", "DVA_MULTI_FILE_EXPLORER", "", param, 1000, 600);
        };

        this.divData_div_STD00_objGrid1_oncelldblclick = function(obj,e){

        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.chkR = "dbl";
        	this.dsSearch.setColumn(0, "YEAR", this.dsList1.getColumn(e.row, "CON_YEAR"));
        	this.dsSearch.setColumn(0, "GBN", "RG02");
        	this.dsSearch.setColumn(0, "NO", this.dsList1.getColumn(e.row, "CON_NO"));

        	this.fnSelect();

        };

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DVA_LAWSUIT_CODEFIND_R") {
         		dsUserParam.setColumn(nrow, "YEAR", this.dsSearch.getColumn(0, "YEAR"));
        		dsUserParam.setColumn(nrow, "NO", this.dsSearch.getColumn(0, "NO"));
         	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	if(id == "DVA_LAWSUIT_CODEFIND_R") {
        	    this.fnSaveR();
        	}
        };

        this.fnSaveR = function() {
        	    this.dsSave1.clearData();
        		for (var i = 0; i < this.dsList1.rowcount; i++) {
        		var flag = this.dsList1.getColumn(i, "nx_flag");
        		switch(flag) {
        			case "I":
        			case "D":
        				var nrow = this.dsSave1.addRow();
        				this.dsSave1.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave1.setColumn(nrow, "YEAR", this.dsList.getColumn(0, "YEAR"));                // 기준년도
        				this.dsSave1.setColumn(nrow, "GBN", this.dsList.getColumn(0, "GBN"));                  // 사건구분
        				this.dsSave1.setColumn(nrow, "NO", this.dsList.getColumn(0, "NO"));                    // 관리번호
        				this.dsSave1.setColumn(nrow, "SEQ", this.dsList1.getColumn(i, "SEQ"));                 // 순번
        				this.dsSave1.setColumn(nrow, "WRITE_ER", this.AuthClient.ID_USER);                     // 작성자
        				this.dsSave1.setColumn(nrow, "CON_YEAR", this.dsList1.getColumn(i, "CON_YEAR"));       // 관련사건 기준년도
        				this.dsSave1.setColumn(nrow, "CON_GBN", this.dsList.getColumn(0, "GBN"));              // 관련사건 사건구분
        				this.dsSave1.setColumn(nrow, "CON_NO", this.dsList1.getColumn(i, "CON_NO"));           // 관련사건 관리번호
        				break;
        		}
        	}
        	if (this.dsSave1.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save1=dsSave1";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab20.form.btn00.addEventHandler("onclick",this.divData_tabData_tab20_btn00_onclick,this);
            this.divData.form.div_STD00.form.objGrid1.addEventHandler("oncelldblclick",this.divData_div_STD00_objGrid1_oncelldblclick,this);
            this.divData.form.div_STD00.form.btnAdd2.addEventHandler("onclick",this.divData_div_STD00_btnAdd2_onclick,this);
            this.divData.form.div_STD00.form.btnDel2.addEventHandler("onclick",this.divData_div_STD00_btnDel2_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList1_onvaluechanged,this);
            this.dsINSTANCEGBN.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsENDGBN.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsLAWSUIT_GBN.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSUEKIND.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DVA_LAWSUIT_REC_SAVE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
