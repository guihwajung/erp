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
            this.set_titletext("계약서검토등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,640);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REL_SITE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REL_SITE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_OTHER\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"VATGBN\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_STR_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_END_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"PROG_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"REASON\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ASK_ER\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ASK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ASK_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_APPRV_ER\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_APPRV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_APPRV_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCEPT_ER\" type=\"STRING\" size=\"256\"/><Column id=\"ACCEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCEPT_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"REV_ASK_ER\" type=\"STRING\" size=\"256\"/><Column id=\"REV_ASK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REV_ASK_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"REV_APPRV_ER\" type=\"STRING\" size=\"256\"/><Column id=\"REV_APPRV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REV_APPRV_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"COOP_ER\" type=\"STRING\" size=\"256\"/><Column id=\"COOP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COOP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SEAL_ER\" type=\"STRING\" size=\"256\"/><Column id=\"SEAL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEAL_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WRITE_ER\" type=\"STRING\" size=\"256\"/><Column id=\"WRITE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRITE_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_ER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL_TO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_KEY_REQ\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DOC_REQ\" type=\"STRING\" size=\"256\"/><Column id=\"NO_KEY_CON\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DOC_CON\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SAVE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DVAPR_CONTRACT_REVIEW_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DVAPR_CONTRACT_REVIEW_SAVE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DVAPR_MULTI_FILE_EXPLORER_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DVAPR_MULTI_FILE_EXPLORER_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DVAPR_MULTI_FILE_EXPLORER_SELECT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DVAPR_MULTI_FILE_EXPLORER_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVATGBN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
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

            obj = new Static("staSTATUS","staCD_ITEM:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSTATUS","staSTATUS:0.0","10.0","147","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("div_STD","0","0",null,"340","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"22","0",null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("0");
            obj.set_text("계약서검토 등록");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staCONTNAME","0","27","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("1");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg00","89","27","478","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staREL_SITE","566","27","95","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("4");
            obj.set_text("관련현장");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg02","660","staTitle:5","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staCONT_AMT","0","56","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("10");
            obj.set_text("계약금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg03","89","56","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staVATGBN","283","56","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("12");
            obj.set_text("부가세구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg04","372","56","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staCONT","566","56","95","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("15");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg05","660","56","478","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staPROG_TEXT","0","85","90","70",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("20");
            obj.set_text("추진경과");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg07","89","staBg04:-1","478","70",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staMAIN_CONTENTS","566","85","95","70",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_text("계약주요내용");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg08","660","85","478","70",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staCOMMENTS","0","154","90","70",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("26");
            obj.set_text("검토의뢰사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staREQ_DEPT","0","223","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("32");
            obj.set_text("의뢰부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staACCEPT_ER","0","252","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("43");
            obj.set_text("접수자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg09_00","staREQ_DEPT:-1","223","478","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg12","89","252","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staREV_ASK_ER","283","252","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("46");
            obj.set_text("검토(승인요청)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg13","372","252","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staREQ_APPRV_ER","566","223","95","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("37");
            obj.set_text("의뢰(승인)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta14","566","252","95","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("49");
            obj.set_text("합의자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg11_01","staREQ_APPRV_ER:-1","223","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg14","sta14:-1","252","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staREMARK","566","154","95","70",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("29");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg09_01","staREMARK:-1","154","478","70",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtACCEPT_ER","94","257","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("44");
            obj.set_enable("false");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtREV_ASK_ER","377","257","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("47");
            obj.set_enable("false");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Combo("cboVATGBN","377","61","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("13");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsVATGBN");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Div("ccfREL_SITE_NM","665","32","185","20",null,null,null,"604",null,null,this.divData.form.div_STD.form);
            obj.set_taborder("5");
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staREV_APPRV_ER","0","281","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("54");
            obj.set_text("검토(승인)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta12_00_00","0","310","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("65");
            obj.set_text("반려/취소사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg13_00","89","310","1049","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg13_00_00","89","281","478","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL00_00_00","95","315","1038","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("66");
            obj.set_enable("false");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staREV_APPRV_YMD","283","281","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("57");
            obj.set_text("검토일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Calendar("ctclREV_APPRV_YMD","378","286","184","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("58");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtREV_APPRV_ER","94","286","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("55");
            obj.set_enable("false");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staREQ_ASK_ER","283","223","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("35");
            obj.set_text("의뢰(승인요청)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtREQ_DEPT","94","228","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("33");
            obj.set_enable("false");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtREQ_ASK_ER","377","228","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("36");
            obj.set_enable("false");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg09_02","89","154","478","70",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new TextArea("txtCOMMENTS","94","158","468","62",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("27");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new TextArea("txtPROG_TEXT","94","89","468","62",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("21");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtCONTNAME","94","32","468","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("2");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staSEAL_ER","566","281","95","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("59");
            obj.set_text("날인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staREQ_ASK_YMD","849","223","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("40");
            obj.set_text("의뢰일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta14_02","849","252","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("52");
            obj.set_text("합의일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staSEAL_YMD","849","281","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("62");
            obj.set_text("날인일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg14_01","660","281","190","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtSEAL_ER","667","286","176","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("60");
            obj.set_enable("false");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg14_00_00","938","281","200","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg14_00_00_00","938","252","200","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg14_00_00_00_00","938","223","200","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Calendar("ctclSEAL_YMD","943","286","190","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("63");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Calendar("ctclREQ_ASK_YMD","943","228","190","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("41");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Calendar("ctclCONT_STR_YMD","666","61","184","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Calendar("ctclCONT_END_YMD","948","61","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtCOOP_ER","667","257","177","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("50");
            obj.set_enable("false");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtREQ_APPRV_ER","667","228","177","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("38");
            obj.set_enable("false");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staCONT_OTHER00","854","56","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("18");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new TextArea("txtMAIN_CONTENTS","665","89","468","62",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("24");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new TextArea("txtREMARK","665","158","468","62",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("30");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staCONT_OTHER","854","27","90","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("7");
            obj.set_text("계약상대방");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg02_00","943","27","195","30",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtCONT_OTHER","948","32","185","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("8");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtCOOP_ER00","943","257","190","20",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("68");
            obj.set_enable("false");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new MaskEdit("edtCONT_AMT","94","60","185","22",null,null,null,null,null,null,this.divData.form.div_STD.form);
            obj.set_taborder("69");
            obj.set_format("#,0");
            obj.set_enable("true");
            this.divData.form.div_STD.addChild(obj.name, obj);

            obj = new Tab("tabData","0","350","1135",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_preload("true");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab00",this.divData.form.tabData);
            obj.set_text("의뢰");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("grd00","5","35",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab00.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab00.addChild(obj.name, obj);

            obj = new Button("btn00",null,"5","100","25","5",null,null,null,null,null,this.divData.form.tabData.tab00.form);
            obj.set_taborder("1");
            obj.set_text("파일관리");
            this.divData.form.tabData.tab00.addChild(obj.name, obj);

            obj = new Tabpage("tab10",this.divData.form.tabData);
            obj.set_text("검토");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("grd01","5","35",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab10.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab10.addChild(obj.name, obj);

            obj = new Button("btn00",null,"5","100","25","5",null,null,null,null,null,this.divData.form.tabData.tab10.form);
            obj.set_taborder("1");
            obj.set_text("파일관리");
            this.divData.form.tabData.tab10.addChild(obj.name, obj);

            obj = new Tabpage("tab15",this.divData.form.tabData);
            obj.set_text("진행사항");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("grd02","5","35",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab15.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab15.addChild(obj.name, obj);

            obj = new Button("btn00",null,"5","100","25","5",null,null,null,null,null,this.divData.form.tabData.tab15.form);
            obj.set_taborder("1");
            obj.set_text("파일관리");
            this.divData.form.tabData.tab15.addChild(obj.name, obj);

            obj = new Tabpage("tab20",this.divData.form.tabData);
            obj.set_text("결과(날인)");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("grd03","5","35",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab20.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab20.addChild(obj.name, obj);

            obj = new Button("btn00",null,"5","100","25","5",null,null,null,null,null,this.divData.form.tabData.tab20.form);
            obj.set_taborder("1");
            obj.set_text("파일관리");
            this.divData.form.tabData.tab20.addChild(obj.name, obj);

            obj = new Div("ccfCONTRACT_REVIEW","94","6","185","20",null,null,null,"604",null,null,this);
            obj.set_taborder("2");
            obj.getSetter("CodeFindName").set("DVA_CONTRACT_REVIEW_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item37","divData.form.div_STD.form.edtSEAL_ER","value","dsList","SEAL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.div_STD.form.edtACCEPT_ER","value","dsList","ACCEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.div_STD.form.edtREV_ASK_ER","value","dsList","REV_ASK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.div_STD.form.ccfREL_SITE_NM.form.CDTextBox","value","dsList","REL_SITE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.div_STD.form.ccfREL_SITE_NM.form.DSTextBox","value","dsList","REL_SITE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.div_STD.form.edtCONT_OTHER","value","dsList","CONT_OTHER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","ccfCONTRACT_REVIEW.form.CDTextBox","value","dsSearch","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","ccfCONTRACT_REVIEW.form.DSTextBox","value","dsSearch","NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.div_STD.form.ctclREV_APPRV_YMD","value","dsList","REV_APPRV_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.div_STD.form.edtREV_APPRV_ER","value","dsList","REV_APPRV_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.div_STD.form.edtREQ_DEPT","value","dsList","REQ_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.div_STD.form.edtREQ_ASK_ER","value","dsList","REQ_ASK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.div_STD.form.edtCONTNAME","value","dsList","CONTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.div_STD.form.ctclSEAL_YMD","value","dsList","SEAL_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.div_STD.form.ctclREQ_ASK_YMD","value","dsList","REQ_APPRV_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.div_STD.form.ctclCONT_STR_YMD","value","dsList","CONT_STR_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.div_STD.form.ctclCONT_END_YMD","value","dsList","CONT_END_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.div_STD.form.edtCOOP_ER","value","dsList","COOP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.div_STD.form.cboVATGBN","value","dsList","VATGBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.edtSTATUS","value","dsList","STATUS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.div_STD.form.txtCOMMENTS","value","dsList","COMMENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.div_STD.form.txtPROG_TEXT","value","dsList","PROG_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.div_STD.form.txtMAIN_CONTENTS","value","dsList","MAIN_CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.div_STD.form.txtREMARK","value","dsList","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.div_STD.form.edtREQ_APPRV_ER","value","dsList","REQ_APPRV_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.div_STD.form.edtCOOP_ER00","value","dsList","COOP_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.div_STD.form.edtDS_EMAIL00_00_00","value","dsList","REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.div_STD.form.edtCONT_AMT","value","dsList","CONT_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DVA_CONTRACT_REVIEW_SAVE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var newStat = "";

        var thisForm;

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
        	this.btnControlSet();

        	// 파일설정
        	this.fileConfig = this.gfnGetFileConfig();

        	if(!this.gfnIsNull(this.getOwnerFrame().YEAR) && !this.gfnIsNull(this.getOwnerFrame().NO)) {
        		this.dsSearch.setColumn(0, "YEAR", this.getOwnerFrame().YEAR);
        		this.dsSearch.setColumn(0, "NO", this.getOwnerFrame().NO);
        		this.FormBtns.Select.click();
        	}

        	thisForm = this;

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
        	this.dsCombo.setColumn(0, "CD_TYPE", "VATGBN");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsVATGBN=combo0";
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
             this.btnREQ = this.gfnFormButtonAdd("btnREQ", "fnBtnREQ","의뢰상신");
        	 this.btnREQS = this.gfnFormButtonAdd("btnREQS", "fnBtnREQS","의뢰조회");
        	 this.btnREC = this.gfnFormButtonAdd("btnREC", "fnBtnREC","접수");
        	 this.btnRECCAN = this.gfnFormButtonAdd("btnRECCAN", "fnBtnRECCAN","접수취소");
        	 this.btnCON = this.gfnFormButtonAdd("btnCON", "fnBtnCON","검토상신");
        	 this.btnCONS = this.gfnFormButtonAdd("btnCONS", "fnBtnCONS","검토조회");
        	 this.btnSEAL = this.gfnFormButtonAdd("btnSEAL", "fnBtnSEAL","날인");
        	 this.btnSEALCAN = this.gfnFormButtonAdd("btnSEALCAN", "fnBtnSEALCAN","날인취소");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.dxGrid1 = this.divData.form.tabData.tab00.form.grd00;
        	this.dxGrid2 = this.divData.form.tabData.tab10.form.grd01;
        	this.dxGrid3 = this.divData.form.tabData.tab15.form.grd02;
        	this.dxGrid4 = this.divData.form.tabData.tab20.form.grd03;
        	this.ccfREL_SITE_NM = this.divData.form.div_STD.form.ccfREL_SITE_NM;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DV", "DVA_LAWSUIT_FILE_EXPLORER");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DV", "DVA_LAWSUIT_FILE_EXPLORER");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DV", "DVA_LAWSUIT_FILE_EXPLORER");
        	this.gfnGridInit(this.dxGrid4, this.dsList4, "DV", "DVA_LAWSUIT_FILE_EXPLORER");

        	this.ccfREL_SITE_NM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dxGrid1.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        	this.dxGrid2.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        	this.dxGrid3.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        	this.dxGrid4.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YEAR", "string");
        	this.dsSelect.addColumn("NO", "int");

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("YEAR", "string");
        	this.dsSelect1.addColumn("NO", "string");
        	this.dsSelect1.addColumn("GBN", "string");
        	this.dsSelect1.addColumn("TARGET_PROG", "string");

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("YEAR", "string");
        	this.dsSelect2.addColumn("NO", "string");
        	this.dsSelect2.addColumn("GBN", "string");
        	this.dsSelect2.addColumn("TARGET_PROG", "string");

        	this.dsSelect3 = new Dataset();
        	this.dsSelect3.addColumn("YEAR", "string");
        	this.dsSelect3.addColumn("NO", "string");
        	this.dsSelect3.addColumn("GBN", "string");
        	this.dsSelect3.addColumn("TARGET_PROG", "string");

        	this.dsSelect4 = new Dataset();
        	this.dsSelect4.addColumn("YEAR", "string");
        	this.dsSelect4.addColumn("NO", "string");
        	this.dsSelect4.addColumn("GBN", "string");
        	this.dsSelect4.addColumn("TARGET_PROG", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CONTNAME", "string");         // 계약명
        	this.dsSave.addColumn("REL_SITE", "string");         // 관련현장
        	this.dsSave.addColumn("CONT_OTHER", "string");       // 예약상대방
        	this.dsSave.addColumn("CONT_AMT", "bigdecimal");     // 계약금액
        	this.dsSave.addColumn("VATGBN", "string");           // 부가세구분
        	this.dsSave.addColumn("CONT_STR_YMD", "string");     // 계약시작일
        	this.dsSave.addColumn("CONT_END_YMD", "string");     // 계약종료일
        	this.dsSave.addColumn("PROG_TEXT", "string");        // 추진경과
        	this.dsSave.addColumn("MAIN_CONTENTS", "string");    // 계약주요내용
        	this.dsSave.addColumn("COMMENTS", "string");         // 검토의뢰사항
        	this.dsSave.addColumn("REMARK", "string");           // 비고
        	this.dsSave.addColumn("STATUS", "string");           // 진행상태
        	this.dsSave.addColumn("REQ_DEPT", "string");         // 의뢰부서
        	this.dsSave.addColumn("YEAR", "string");             // 기준년도
        	this.dsSave.addColumn("NO", "int");                  // 관리번호
        	this.dsSave.addColumn("ID_USER", "string");          // 작성자

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;
        	this.newStat = "";
        	this.dsSelect.clearData();
        	this.dsSelect1.clearData();
        	this.dsSelect2.clearData();
        	this.dsSelect3.clearData();
        	this.dsSelect4.clearData();

        	this.dsSelect.addRow();
        	this.dsSelect1.addRow();
        	this.dsSelect2.addRow();
        	this.dsSelect3.addRow();
        	this.dsSelect4.addRow();

        	this.dsSelect.setColumn(0, "YEAR", this.dsSearch.getColumn(0, "YEAR"));
        	this.dsSelect.setColumn(0, "NO", this.dsSearch.getColumn(0, "NO"));

        	this.dsSelect1.setColumn(0, "YEAR", this.dsSearch.getColumn(0, "YEAR"));
        	this.dsSelect1.setColumn(0, "NO", this.dsSearch.getColumn(0, "NO"));
        	this.dsSelect1.setColumn(0, "GBN", "RG05");
        	this.dsSelect1.setColumn(0, "TARGET_PROG", "CONTRACT_REVIEW_REQ");

        	this.dsSelect2.setColumn(0, "YEAR", this.dsSearch.getColumn(0, "YEAR"));
        	this.dsSelect2.setColumn(0, "NO", this.dsSearch.getColumn(0, "NO"));
        	this.dsSelect2.setColumn(0, "GBN", "RG05");
        	this.dsSelect2.setColumn(0, "TARGET_PROG", "CONTRACT_REVIEW_STU");

        	this.dsSelect3.setColumn(0, "YEAR", this.dsSearch.getColumn(0, "YEAR"));
        	this.dsSelect3.setColumn(0, "NO", this.dsSearch.getColumn(0, "NO"));
        	this.dsSelect3.setColumn(0, "GBN", "RG05");
        	this.dsSelect3.setColumn(0, "TARGET_PROG", "CONTRACT_REVIEW_PROG");

        	this.dsSelect4.setColumn(0, "YEAR", this.dsSearch.getColumn(0, "YEAR"));
        	this.dsSelect4.setColumn(0, "NO", this.dsSearch.getColumn(0, "NO"));
        	this.dsSelect4.setColumn(0, "GBN", "RG05");
        	this.dsSelect4.setColumn(0, "TARGET_PROG", "CONTRACT_REVIEW_SEAL");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select1=dsSelect1 select2=dsSelect2 select3=dsSelect3 select4=dsSelect4";
        	var outData     = "dsList=select0 dsList1=select10 dsList2=select20 dsList3=select30 dsList4=select40";
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
        	this.dsList3.clearData();
        	this.dsList4.clearData();
        	this.dsSearch.clearData();
        	this.dsList.addRow();
        	this.dsList.setColumn(0, "TY_SAVE", "I");
        	this.dsSearch.addRow();
        	this.gfnSetFormStatus(this, "I");
        	this.newStat = "I";
        	this.btnControlSet();
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
            this.newStat = "";
        	var status = "";
        	if(this.dsList.getColumn(0, "STATUS") != 'undefined' && this.dsList.getColumn(0, "STATUS") != null){
        	     status = this.dsList.getColumn(0, "STATUS")
        	}

        	if(status != "" && status != "N"){
        	    this.alert("전자결재 진행건은 삭제 할 수 없습니다.")
        		return;
        	}
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
            this.newStat = "";
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.dsList.getColumn(i, "TY_SAVE");
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "CONTNAME", this.dsList.getColumn(i, "CONTNAME"));
        				this.dsSave.setColumn(nrow, "REL_SITE", this.dsList.getColumn(i, "REL_SITE_CD"));
        				this.dsSave.setColumn(nrow, "CONT_OTHER", this.dsList.getColumn(i, "CONT_OTHER"));
        				this.dsSave.setColumn(nrow, "CONT_AMT", this.dsList.getColumn(i, "CONT_AMT"));
        				this.dsSave.setColumn(nrow, "VATGBN", this.dsList.getColumn(i, "VATGBN"));
        				this.dsSave.setColumn(nrow, "CONT_STR_YMD", this.dsList.getColumn(i, "CONT_STR_YMD"));
        				this.dsSave.setColumn(nrow, "CONT_END_YMD", this.dsList.getColumn(i, "CONT_END_YMD"));
        				this.dsSave.setColumn(nrow, "PROG_TEXT", this.dsList.getColumn(i, "PROG_TEXT"));
        				this.dsSave.setColumn(nrow, "MAIN_CONTENTS", this.dsList.getColumn(i, "MAIN_CONTENTS"));
        				this.dsSave.setColumn(nrow, "COMMENTS", this.dsList.getColumn(i, "COMMENTS"));
        				this.dsSave.setColumn(nrow, "REMARK", this.dsList.getColumn(i, "REMARK"));
        				this.dsSave.setColumn(nrow, "STATUS", this.dsList.getColumn(i, "STATUS"));
        				this.dsSave.setColumn(nrow, "REQ_DEPT", this.AuthClient.CD_DEPT);
        				this.dsSave.setColumn(nrow, "YEAR", this.dsList.getColumn(i, "YEAR"));
        				this.dsSave.setColumn(nrow, "NO", this.dsList.getColumn(i, "NO"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var clearChk = this.fnVaildateSave();

        	if (!clearChk) return;

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
        	//this.gfnExcelExport(this.dxGrid);
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
        this.fnVaildateSave = function() {

        	for (var i = 0; i < this.dsSave.rowcount; i++) {
        			if (this.gfnIsNull(this.dsSave.getColumn(i, "CONTNAME"))) {
        			this.gfnAlert("계약명을 입력하세요.");
        			this.edtCONTNAME.setFocus();
        			return false;
        		}

        		if (this.gfnIsNull(this.dsSave.getColumn(i, "REL_SITE"))) {
        			this.gfnAlert("관련현장을 입력하세요.");
        			this.ccfREL_SITE_NM.setFocus();
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.btnControlSet();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "combo") {
        		if (errorCode == 0) {
        			this.dsVATGBN.deleteRow(0);

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
        	}
        	return true;
        	}

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "Q");	// 폼상태 초기화
        		this.dsList.clearData();
        		this.dsList1.clearData();
        		this.dsList2.clearData();
        		this.dsList3.clearData();
        		this.dsList4.clearData();
        		this.btnControlSet();
        	}
        };

        this.divData_tabData_tab00_btn00_onclick = function(obj,e)
        {
        	var param = {};
        	param.YEAR = this.dsSearch.getColumn(0, "YEAR");
        	param.NO = this.dsSearch.getColumn(0, "NO");
        	param.GBN = "RG05";
        	param.TARGET_PROG = "CONTRACT_REVIEW_REQ";
        	param.TARGET_NAME = "계약서검토 - 의뢰";

        	this.gfnFormOpen("DVA", "DVA_MULTI_FILE_EXPLORER", "", param, 1000, 600);
        };

        this.divData_tabData_tab10_btn00_onclick = function(obj,e)
        {
        	var param = {};
        	param.YEAR = this.dsSearch.getColumn(0, "YEAR");
        	param.NO = this.dsSearch.getColumn(0, "NO");
        	param.GBN = "RG05";
        	param.TARGET_PROG = "CONTRACT_REVIEW_STU";
        	param.TARGET_NAME = "계약서검토 - 검토";

        	this.gfnFormOpen("DVA", "DVA_MULTI_FILE_EXPLORER", "", param, 1000, 600);
        };

        this.divData_tabData_tab15_btn00_onclick = function(obj,e)
        {
        	var param = {};
        	param.YEAR = this.dsSearch.getColumn(0, "YEAR");
        	param.NO = this.dsSearch.getColumn(0, "NO");
        	param.GBN = "RG05";
        	param.TARGET_PROG = "CONTRACT_REVIEW_PROG";
        	param.TARGET_NAME = "계약서검토 - 진행사항";

        	this.gfnFormOpen("DVA", "DVA_MULTI_FILE_EXPLORER", "", param, 1000, 600);
        };

        this.divData_tabData_tab20_btn00_onclick = function(obj,e)
        {
        	var param = {};
        	param.YEAR = this.dsSearch.getColumn(0, "YEAR");
        	param.NO = this.dsSearch.getColumn(0, "NO");
        	param.GBN = "RG05";
        	param.TARGET_PROG = "CONTRACT_REVIEW_SEAL";
        	param.TARGET_NAME = "계약서검토 - 날인";

        	this.gfnFormOpen("DVA", "DVA_MULTI_FILE_EXPLORER", "", param, 1000, 600);
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
            var flag = this.dsList.getColumn(0, "TY_SAVE");

            if(flag != "I" && flag != "D"){
        	   this.dsList.setColumn(0, "TY_SAVE", "U");
        	   this.gfnSetFormStatus(this, "U");
        	}

        };


        /************************************************************************
         * 전자결재 관련
         ************************************************************************/
        this.fnBtnREQ = function(obj, e){

        	var strFormId = "DSMEC_CONTRACT_REVIEW_REQ";
        	var strSubject = "의뢰 상신";
        	strSubject = encodeURI(strSubject);
        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url = url + "approval/legacy/goFormLink.do?legacyFormID=" + strFormId;
        	url += "&mode=DRAFT";
        	url += "&ID_USER=" + this.AuthClient.ID_USER;
        	url += "&DS_KEY1=" + this.dsList.getColumn(0, "YEAR"); // 연도
        	url += "&DS_KEY2=" + this.dsList.getColumn(0, "NO");	 // 일련번호
        	url += "&DS_KEY3=" + this.dsList.getColumn(0, "STATUS");	 // 상태
        	url += "&DS_KEY4=RG05"
        	url += "&DS_KEY5=Q"
        	url += "&RTN_TITLE=" + strSubject;

        	var new_window = window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        	new_window.addEventListener('onbeforeunload', this.fnAprvDialogCallback(), true);

        };

        this.fnBtnREQS = function(obj, e){

            var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url = url + "approval/legacy/goFormLink.do?mode=COMPLETE";
        	url += "&ID_USER=" + this.AuthClient.ID_USER;
        	url += "&fiid=" + this.dsList.getColumn(0, "NO_KEY_REQ");

        	var new_window = window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        	new_window.addEventListener('onbeforeunload', this.fnAprvDialogCallback(), true);
        };

        this.fnBtnCON = function(obj, e){

        	var strFormId = "DSMEC_CONTRACT_REVIEW_CON";
        	var strSubject = "검토 상신";
        	strSubject = encodeURI(strSubject);
        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url = url + "approval/legacy/goFormLink.do?legacyFormID=" + strFormId;
        	url += "&mode=DRAFT";
        	url += "&ID_USER=" + this.AuthClient.ID_USER;
        	url += "&DS_KEY1=" + this.dsList.getColumn(0, "YEAR"); // 연도
        	url += "&DS_KEY2=" + this.dsList.getColumn(0, "NO");	 // 일련번호
        	url += "&DS_KEY3=" + this.dsList.getColumn(0, "STATUS");	 // 상태
        	url += "&DS_KEY4=RG05"
        	url += "&DS_KEY5=C"
        	url += "&RTN_TITLE=" + strSubject;

        	var new_window = window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        	new_window.addEventListener('onbeforeunload', this.fnAprvDialogCallback(), true);
        };

        this.fnBtnCONS = function(obj, e){

        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url = url + "approval/legacy/goFormLink.do?mode=COMPLETE";
        	url += "&ID_USER=" + this.AuthClient.ID_USER;
        	url += "&fiid=" + this.dsList.getColumn(0, "NO_KEY_CON");

        	var new_window = window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        	new_window.addEventListener('onbeforeunload', this.fnAprvDialogCallback(), true);
        };

        this.fnAprvDialogCallback = function(svcID, value) {
              thisForm.FormBtns.Select.click();
        };

        this.fnBtnREC = function(obj, e){

        	this.dsList.setColumn(0, "STATUS", "RQ")
        	this.fnSave();

        };

        this.fnBtnRECCAN = function(obj, e){

            this.dsList.setColumn(0, "STATUS", "RC")
        	this.fnSave();

        };

        this.fnBtnSEAL = function(obj, e){

            this.dsList.setColumn(0, "STATUS", "SS")
        	this.fnSave();

        };

        this.fnBtnSEALCAN = function(obj, e){

            this.dsList.setColumn(0, "STATUS", "SC")
        	this.fnSave();

        };

        this.btnControlSet = function() {

        	 var status = "";

        	 if(this.dsList.getColumn(0, "STATUS") != 'undefined' && this.dsList.getColumn(0, "STATUS") != null){
        	     status = this.dsList.getColumn(0, "STATUS")
        	 }

        	 if(this.newStat == "I") status = "I";

        	 switch (status) {
        	  case "N": //최소작성
        	     this.btnREQ.set_enable(true);  //의뢰상신
        		 this.btnREQS.set_enable(false); //의뢰조회
        		 this.btnREC.set_enable(false);  //접수
        		 this.btnRECCAN.set_enable(false);  //접수취소
        		 this.btnCON.set_enable(false);  //검토상신
        		 this.btnCONS.set_enable(false); //검토조회
        		 this.btnSEAL.set_enable(false);  //날인
        		 this.btnSEALCAN.set_enable(false);  //날인취소
        		break;
        	  case "QR": //의뢰반려
        	  case "QS": //의뢰상신
        	     this.btnREQ.set_enable(false);  //의뢰상신
        		 this.btnREQS.set_enable(true);  //의뢰조회
        		 this.btnREC.set_enable(false);  //접수
        		 this.btnRECCAN.set_enable(false);  //접수취소
        		 this.btnCON.set_enable(false);  //검토상신
        		 this.btnCONS.set_enable(false); //검토조회
        		 this.btnSEAL.set_enable(false);  //날인
        		 this.btnSEALCAN.set_enable(false);  //날인취소
        		break;
        	  case "QY": //의뢰승인
        		 this.btnREQ.set_enable(false);  //의뢰상신
        		 this.btnREQS.set_enable(true);  //의뢰조회
        		 this.btnREC.set_enable(true);   //접수
        		 this.btnRECCAN.set_enable(false);  //접수취소
        		 this.btnCON.set_enable(false);  //검토상신
        		 this.btnCONS.set_enable(false); //검토조회
        		 this.btnREF.set_enable(false);  //날인
        		 this.btnSEALCAN.set_enable(false);  //날인취소
        		break;
        	  case "RQ": //접수
        	     this.btnREQ.set_enable(false);  //의뢰상신
        		 this.btnREQS.set_enable(true);  //의뢰조회
        		 this.btnREC.set_enable(false);  //접수
        		 this.btnRECCAN.set_enable(true);   //접수취소
        		 this.btnCON.set_enable(true);   //검토상신
        		 this.btnCONS.set_enable(false); //검토조회
        		 this.btnSEAL.set_enable(false);  //날인
        		 this.btnSEALCAN.set_enable(false);  //날인취소
        		break;
        	  case "RC": //접수취소
        	     this.btnREQ.set_enable(false);  //의뢰상신
        		 this.btnREQS.set_enable(true);  //의뢰조회
        		 this.btnREC.set_enable(true);   //접수
        		 this.btnRECCAN.set_enable(false);  //접수취소
        		 this.btnCON.set_enable(false);  //검토상신
        		 this.btnCONS.set_enable(false); //검토조회
        		 this.btnSEAL.set_enable(false);  //날인
        		 this.btnSEALCAN.set_enable(false);  //날인취소
        		break;
        	  case "VS": //검토상신
        	  case "VR": //검토반려
        		 this.btnREQ.set_enable(false);  //의뢰상신
        		 this.btnREQS.set_enable(true); //의뢰조회
        		 this.btnREC.set_enable(false);  //접수
        		 this.btnRECCAN.set_enable(false);  //접수취소
        		 this.btnCON.set_enable(false);  //검토상신
        		 this.btnCONS.set_enable(true); //검토조회
        		 this.btnSEAL.set_enable(false);  //날인
        		 this.btnSEALCAN.set_enable(false);  //날인취소
        		break;
        	  case "VY":
        	  case "SC":
        	     this.btnREQ.set_enable(false);  //의뢰상신
        		 this.btnREQS.set_enable(true); //의뢰조회
        		 this.btnREC.set_enable(false);  //접수
        		 this.btnRECCAN.set_enable(false);  //접수취소
        		 this.btnCON.set_enable(false);  //검토상신
        		 this.btnCONS.set_enable(true); //검토조회
        		 this.btnSEAL.set_enable(true);  //날인
        		 this.btnSEALCAN.set_enable(false);  //날인취소
        		break;
        	  case "SS":
        		 this.btnREQ.set_enable(false);  //의뢰상신
        		 this.btnREQS.set_enable(true); //의뢰조회
        		 this.btnREC.set_enable(false);  //접수
        		 this.btnRECCAN.set_enable(false);  //접수취소
        		 this.btnCON.set_enable(false);  //검토상신
        		 this.btnCONS.set_enable(true); //검토조회
        		 this.btnSEAL.set_enable(false);  //날인
        		 this.btnSEALCAN.set_enable(true);  //날인취소
        		break;
        	  default:
        		 this.btnREQ.set_enable(false);  //의뢰상신
        		 this.btnREQS.set_enable(false); //의뢰조회
        		 this.btnREC.set_enable(false);  //접수
        		 this.btnRECCAN.set_enable(false);  //접수취소
        		 this.btnCON.set_enable(false);  //검토상신
        		 this.btnCONS.set_enable(false); //검토조회
        		 this.btnSEAL.set_enable(false);  //날인
        		 this.btnSEALCAN.set_enable(false);  //날인취소
        		break;
        	}

        	if(status != "N" && status != "I"){
        	     this.divData.form.div_STD.form.edtCONTNAME.set_enable(false);
        		 this.divData.form.div_STD.form.edtCONT_AMT.set_enable(false);
        		 this.divData.form.div_STD.form.cboVATGBN.set_enable(false);
        		 this.divData.form.div_STD.form.ccfREL_SITE_NM.set_enable(false);
        		 this.divData.form.div_STD.form.ctclCONT_STR_YMD.set_enable(false);
        		 this.divData.form.div_STD.form.ctclCONT_END_YMD.set_enable(false);
        		 this.divData.form.div_STD.form.edtCONT_OTHER.set_enable(false);
        		 this.divData.form.div_STD.form.txtPROG_TEXT.set_enable(false);
        		 this.divData.form.div_STD.form.txtMAIN_CONTENTS.set_enable(false);
        		 this.divData.form.div_STD.form.txtCOMMENTS.set_enable(false);
        		 this.divData.form.div_STD.form.txtREMARK.set_enable(false);
        	  }else{
        	     this.divData.form.div_STD.form.edtCONTNAME.set_enable(true);
        		 this.divData.form.div_STD.form.edtCONT_AMT.set_enable(true);
        		 this.divData.form.div_STD.form.cboVATGBN.set_enable(true);
        		 this.divData.form.div_STD.form.ccfREL_SITE_NM.set_enable(true);
        		 this.divData.form.div_STD.form.ctclCONT_STR_YMD.set_enable(true);
        		 this.divData.form.div_STD.form.ctclCONT_END_YMD.set_enable(true);
        		 this.divData.form.div_STD.form.edtCONT_OTHER.set_enable(true);
        		 this.divData.form.div_STD.form.txtPROG_TEXT.set_enable(true);
        		 this.divData.form.div_STD.form.txtMAIN_CONTENTS.set_enable(true);
        		 this.divData.form.div_STD.form.txtCOMMENTS.set_enable(true);
        		 this.divData.form.div_STD.form.txtREMARK.set_enable(true);
        	  }

        	  if(status == "N")
        	  {
        	      this.divData.form.tabData.tab00.form.btn00.set_enable(true);
        		  this.divData.form.tabData.tab10.form.btn00.set_enable(false);
        		  this.divData.form.tabData.tab15.form.btn00.set_enable(false);
        		  this.divData.form.tabData.tab20.form.btn00.set_enable(false);
        	  }
        	  else if(status == "RQ" || status == "RC" || status == "QY")
        	  {
        	      this.divData.form.tabData.tab00.form.btn00.set_enable(false);
        		  this.divData.form.tabData.tab10.form.btn00.set_enable(true);
        		  this.divData.form.tabData.tab15.form.btn00.set_enable(true);
        		  this.divData.form.tabData.tab20.form.btn00.set_enable(false);
        	  }
        	  else if(status == "SC" || status == "VY")
        	  {
        	      this.divData.form.tabData.tab00.form.btn00.set_enable(false);
        		  this.divData.form.tabData.tab10.form.btn00.set_enable(false);
        		  this.divData.form.tabData.tab15.form.btn00.set_enable(false);
        		  this.divData.form.tabData.tab20.form.btn00.set_enable(true);
        	  }
        	  else
        	  {
        	      this.divData.form.tabData.tab00.form.btn00.set_enable(false);
        		  this.divData.form.tabData.tab10.form.btn00.set_enable(false);
        		  this.divData.form.tabData.tab15.form.btn00.set_enable(false);
        		  this.divData.form.tabData.tab20.form.btn00.set_enable(false);
        	  }
        };


        this.fnDownload = function(ds) {
        	if(!this.gfnIsNull(this.gfnGetFlag(ds, ds.rowposition))) return;

        	var sFilename = ds.getColumn(ds.rowposition, "FILE_NM_REAL");
        	var sFilepath = ds.getColumn(ds.rowposition, "FILE_PATH");
        	var encodeFileName = encodeURIComponent(sFilename);

        	var surl = this.fileConfig.host + this.fileConfig.downloadUrl;
        	this.FileDownTransfer00.set_url(surl);
        	this.FileDownTransfer00.setPostData("path", sFilepath);
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer00.set_downloadfilename(sFilename);
        	}
        	this.FileDownTransfer00.download();
        };

        this.dxGrid_oncelldblclick = function(obj,e)
        {
        	if(this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "FILE_NM_REAL") {

        	    var ds = null;

        	    if(obj.binddataset == "dsList1")
        		   ds = this.dsList1;
        		else if(obj.binddataset == "dsList2")
        		   ds = this.dsList2;
        		else if(obj.binddataset == "dsList3")
        		   ds = this.dsList3;
        		else if(obj.binddataset == "dsList4")
        		   ds = this.dsList4;

        		this.fnDownload(ds);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab00.form.btn00.addEventHandler("onclick",this.divData_tabData_tab00_btn00_onclick,this);
            this.divData.form.tabData.tab10.form.btn00.addEventHandler("onclick",this.divData_tabData_tab10_btn00_onclick,this);
            this.divData.form.tabData.tab15.form.btn00.addEventHandler("onclick",this.divData_tabData_tab15_btn00_onclick,this);
            this.divData.form.tabData.tab20.form.btn00.addEventHandler("onclick",this.divData_tabData_tab20_btn00_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList2.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsVATGBN.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DVA_CONTRACT_REVIEW_SAVE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
