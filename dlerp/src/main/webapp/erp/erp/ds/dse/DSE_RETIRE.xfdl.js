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
                this._setFormPosition(1280,1580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ID_RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BITH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SLIP_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ETCALLOW\" type=\"STRING\" size=\"256\"/><Column id=\"QN_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"QN_WORKYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"QN_WORKMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"QN_WORKDAY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_APPROVAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YM_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ORGSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INCOME\" type=\"STRING\" size=\"256\"/><Column id=\"AM_AVE_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_AVE_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"QN_WORKYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"QN_WORKMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"QN_WORKDAY\" type=\"STRING\" size=\"256\"/><Column id=\"QN_WORKYEAR_BEFORE_2013\" type=\"STRING\" size=\"256\"/><Column id=\"QN_WORKMONTH_BEFORE_2013\" type=\"STRING\" size=\"256\"/><Column id=\"QN_WORK_BEFORE_2013\" type=\"STRING\" size=\"256\"/><Column id=\"QN_WORKYEAR_AFTER_2013\" type=\"STRING\" size=\"256\"/><Column id=\"QN_WORKMONTH_AFTER_2013\" type=\"STRING\" size=\"256\"/><Column id=\"QN_WORK_AFTER_2013\" type=\"STRING\" size=\"256\"/><Column id=\"CT_WORKYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CT_WORKMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"CT_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CT_WORK_AFTER_2016\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RETIRE_SODUK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_OTERT_SODUK\" type=\"STRING\" size=\"256\"/><Column id=\"TT_RETIRE_SODUK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MIDRETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FINAL_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RETIREINCOME\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FIXRATE_GONGJE_2015\" type=\"STRING\" size=\"256\"/><Column id=\"AM_YEAR_GONGJE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_STDRETINCTAXTATION_2015\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HWANSAN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HWANSANINCOME\" type=\"STRING\" size=\"256\"/><Column id=\"AM_STDRETINCTAXTATION\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEFULT_TAX_ANBUN_BEFORE_2013\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEFULT_TAX_AVE_BEFORE_2013\" type=\"STRING\" size=\"256\"/><Column id=\"AM_YEAR_TAX_AVE_BEFORE_2013\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TAX_BEFORE_2013\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEFULT_TAX_ANBUN_AFTER_2013\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEFULT_TAX_AVE_AFTER_2013\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HWANSAN_DEFULT_TAX_AFTER_2013\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HWANSAN_TAX_AFTER_2013\" type=\"STRING\" size=\"256\"/><Column id=\"AM_YEAR_TAX_AVE_AFTER_2013\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TAX_AFTER_2013\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEFULT_TAX_ANBUN_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEFULT_TAX_AVE_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HWANSAN_DEFULT_TAX_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HWANSAN_TAX_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_YEAR_TAX_AVE_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TAX_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HWANSAN_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"YY_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SANCHUL_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BEFOR_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SODUK_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_JUMIN_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CHAGAM_SODUK_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CHAGAM_JUMIN_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_JIGUB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSEPR_RETIRE_BASE_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DSEPR_RETIREINCOME_UPDATE</Col></Row><Row><Col id=\"SP\">DSEPR_COSTTOJA_SAVE</Col><Col id=\"TARGET\">gridSave</Col></Row><Row><Col id=\"TARGET\">info</Col><Col id=\"SP\">DZUPR_FILEMANAGER_SELECT</Col></Row><Row><Col id=\"SP\">DZZPR_FILEMANAGER_SAVE</Col><Col id=\"TARGET\">upload</Col></Row><Row><Col id=\"TARGET\">cancelApproval</Col><Col id=\"SP\">DSEPR_RETIRETARGET_APPROVAL_CANCEL</Col></Row><Row><Col id=\"SP\">DSEPR_RETIRETARGET_APPROVAL_SELECT</Col><Col id=\"TARGET\">approve</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"YM_RETIRE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrade", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">A</Col></Row><Row><Col id=\"CD_CODE\">B</Col><Col id=\"DS_CODE\">B</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">C</Col></Row><Row><Col id=\"CD_CODE\">D</Col><Col id=\"DS_CODE\">D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTotalCalcurate", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_WONGA0\" type=\"STRING\" size=\"256\"/><Column id=\"AM_WONGA1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_WONGA2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_WONGA3\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ETCPAY0\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ETCPAY1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ETCPAY2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ETCPAY3\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MONTH_AVG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TOIJIK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub3", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub4", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AT_RETIREDOC\" type=\"STRING\" size=\"256\"/><Column id=\"AT_RETIRE_PAY_ASKDOC\" type=\"STRING\" size=\"256\"/><Column id=\"GR_JIKMU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REJECT\" type=\"STRING\" size=\"256\"/><Column id=\"AT_RETIREDOC_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"AT_RETIRE_PAY_ASKDOC_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"RETIREDOC_NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RETIREDOC_DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"RETIREDOC_NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"RETIREDOC_DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_ASKDOC_NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_ASKDOC_DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_ASKDOC_NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_ASKDOC_DS_ETC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRemove", this);
            obj._setContents("<ColumnInfo><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filepath\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRemove2", this);
            obj._setContents("<ColumnInfo><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filepath\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_FILE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF3\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave2", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_FILE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF3\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApproveSeq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTransfer2", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog2", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer2", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장/부서 코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFDEPTCORP");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_NAME","ccfCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DSX_CFEMPLOYEE_NAMELIST");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_NAME","ccfDS_NAME:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_TOIJIK","staDS_NAME:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("퇴직년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_TOIJIK","staYM_TOIJIK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData01","0","0",null,"135","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","5","0",null,"22","5",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj.set_text("1. 대상자");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME","5","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("성    명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDS_ADDR","5","staDS_HNAME:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("2");
            obj.set_text("주    소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_START","5","staDS_ADDR:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("3");
            obj.set_text("퇴직기산일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg00","staDS_HNAME:-1","staTitle:5","400","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg01","staDS_ADDR:-1","staBg00:-1","919","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg02","staDT_START:-1","staBg01:-1","140","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_BITH","staBg00:-1","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("7");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg03","staDT_BITH:-1","staTitle:5","401","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRE","staBg02:-1","staDS_ADDR:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("9");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg04","staDT_RETIRE:-1","staBg01:-1","141","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staQN_WORK","staBg04:-1","staDS_ADDR:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_text("근속기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg05","staQN_WORK:-1","staBg01:-1","140","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_SLIP_PLAN","staBg05:-1","staDS_ADDR:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("13");
            obj.set_text("전표발행예정일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg06","staDT_SLIP_PLAN:-1","staBg01:-1","144","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_HNAME","staDS_HNAME:5","staTitle:10",null,"20","staDT_BITH:5",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("15");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_BITH","staDT_BITH:5","staTitle:10","390","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("16");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR","staDS_ADDR:5","ctxtDS_HNAME:9","908","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("17");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtQN_WORK","staQN_WORK:5","ctxtDS_ADDR:9",null,"20","staDT_SLIP_PLAN:5",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("18");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_START","130","90","128","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_readonly("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_RETIRE","388","90","128","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SLIP_PLAN","904","90","128","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_readonly("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("divData02","0","divData01:0",null,"260","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","5","0",null,"22","5",null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("0");
            obj.set_text("2. 평균임금 산정내역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta00","5","staTitle:5","120","60",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("임금계산기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","staTitle:5","139","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_text("FROM");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta02","sta00:-1","sta01:-1","139","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("3");
            obj.set_text("TO");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staDT_FROM0","sta01:-1","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staDT_FROM1","staDT_FROM0:-1","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staDT_FROM2","staDT_FROM1:-1","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staDT_FROM3","staDT_FROM2:-1","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staDT_TO0","sta02:-1","staDT_FROM0:-1","120","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staDT_TO1","staDT_TO0:-1","staDT_FROM1:-1","120","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staDT_TO2","staDT_TO1:-1","staDT_FROM2:-1","120","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staDT_TO3","staDT_TO2:-1","staDT_FROM3:-1","120","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta03","staDT_FROM3:-1","staTitle:5","305","60",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("12");
            obj.set_text("계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta04","5","sta00:-1","258","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("13");
            obj.set_text("산정일수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg04_01","sta04:-1","staDT_TO0:-1","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg04_02","staBg04_01:-1","staDT_TO0:-1","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg04_03","staBg04_02:-1","staDT_TO0:-1","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg04_04","staBg04_03:-1","staDT_TO0:-1","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg04_05","staBg04_04:-1","staDT_TO0:-1","305","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta05","5","sta04:-1","120","90",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("19");
            obj.set_text("임금내역");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta05_01","sta05:-1","sta04:-1","139","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("20");
            obj.set_text("기본급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta05_02","sta05:-1","sta05_01:-1","139","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("21");
            obj.set_text("기타수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta05_03","sta05:-1","sta05_02:-1","139","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("22");
            obj.set_text("계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg05_01_01","sta05_01:-1","sta04:-1","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg05_01_02","staBg05_01_01:-1","sta04:-1","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg05_01_03","staBg05_01_02:-1","sta04:-1","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg05_01_04","staBg05_01_03:-1","sta04:-1","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg05_01_05","staBg05_01_04:-1","sta04:-1","305","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg05_02_01","sta05_02:-1","staBg05_01_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg05_02_02","staBg05_02_01:-1","staBg05_01_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg05_02_03","staBg05_02_02:-1","staBg05_01_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg05_02_04","staBg05_02_03:-1","staBg05_01_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg05_02_05","staBg05_02_04:-1","staBg05_01_01:-1","305","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg05_03_01","sta05_03:-1","staBg05_02_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg05_03_02","staBg05_03_01:-1","staBg05_02_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg05_03_03","staBg05_03_02:-1","staBg05_02_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg05_03_04","staBg05_03_03:-1","staBg05_02_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBg05_03_05","staBg05_03_04:-1","staBg05_02_01:-1","305","31",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta06","5","sta05:-1","258","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("38");
            obj.set_text("일평균임금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staDS_DAY_AVG","sta06:-1","sta05:-1","358","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("0 ÷ 0 = 0");
            obj.set_font("bold");
            obj.set_color("#0000ff");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta07","staDS_DAY_AVG:-1","sta05:-1","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("40");
            obj.set_text("월평균임금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staDS_MONTH_AVG","sta07:-1","sta05:-1","305","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("0 × 0 = 0");
            obj.set_color("#0000ff");
            obj.set_font("bold");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("ctxtQN_WORK0","sta04:5","staDT_TO0:4","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("42");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("ctxtQN_WORK1","ctxtQN_WORK0:9","staDT_TO0:4","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("ctxtQN_WORK2","ctxtQN_WORK1:9","staDT_TO0:4","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("44");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("ctxtQN_WORK3","ctxtQN_WORK2:9","staDT_TO0:4","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("45");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("ctxtQN_WORK_TOT","ctxtQN_WORK3:9","staDT_TO0:4","295","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("46");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_WONGA0","sta05_01:5","ctxtQN_WORK0:9","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("47");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_WONGA1","ctxtAM_WONGA0:9","ctxtQN_WORK0:9","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("48");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_WONGA2","ctxtAM_WONGA1:9","ctxtQN_WORK0:9","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("49");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_WONGA3","ctxtAM_WONGA2:9","ctxtQN_WORK0:9","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("50");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_displaynulltext("0");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_WONGA_TOT","ctxtAM_WONGA3:9","ctxtQN_WORK0:9","295","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("51");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ETCPAY0","sta05_02:5","ctxtAM_WONGA0:9","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("52");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ETCPAY1","ctxtAM_ETCPAY0:9","ctxtAM_WONGA0:9","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("53");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ETCPAY2","ctxtAM_ETCPAY1:9","ctxtAM_WONGA0:9","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("54");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ETCPAY3","ctxtAM_ETCPAY2:9","ctxtAM_WONGA0:9","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("55");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_displaynulltext("0");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ETCPAY_TOT","ctxtAM_ETCPAY3:9","ctxtAM_WONGA0:9","295","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("56");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_INCOME0","sta05_03:5","ctxtAM_ETCPAY0:10","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("57");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_INCOME1","ctxtAM_INCOME0:9","ctxtAM_ETCPAY0:10","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("58");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_INCOME2","ctxtAM_INCOME1:9","ctxtAM_ETCPAY0:10","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("59");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_INCOME3","ctxtAM_INCOME2:9","ctxtAM_ETCPAY0:10","110","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("60");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            obj.set_displaynulltext("0");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_INCOME_TOT","ctxtAM_INCOME3:9","ctxtAM_ETCPAY0:10","295","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("61");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("divData03","0","divData02:0",null,"150","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","5","0",null,"22","5",null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("0");
            obj.set_text("3. 퇴직급여 내역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Static("sta00","5","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("1");
            obj.set_text("퇴직소득A");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Static("sta01","5","sta00:-1","120","30",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("2");
            obj.set_text("기타소득B");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Static("staBg00","sta00:-1","staTitle:5","919","30",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Static("staBg01","sta00:-1","staBg00:-1","400","30",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Static("sta02","staBg01:-1","sta00:-1","120","30",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("6");
            obj.set_text("계(A+B)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Static("staBg02","sta02:-1","staBg00:-1","401","30",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_TOIJIK","sta00:5","staTitle:10","908","20",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ETCALLOW","sta01:5","ctxtDS_TOIJIK:9","390","20",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TOIJIK_TOT","sta02:5","ctxtDS_TOIJIK:9","390","20",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Static("staMsg00","5","sta02:0",null,"22","5",null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("11");
            obj.set_text("※ 자동계산 된 임금내역이나 퇴직소득이 맞지 않을 경우 \'임금계산기간, 임금내역, 기타소득B\'를 수정후 \'저장버튼\' 클릭");
            obj.set_font("bold 12px/normal \"Dotum\"");
            obj.set_color("red");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Static("staMsg01","5","staMsg00:0",null,"22","5",null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("12");
            obj.set_text("※ 수정된 내역은 \'평균임금자동계산\' 클릭시 초기화 되며, 임금은 일할계산 됨. (월임금 = 월노무비총액 × 해당월근무일수 / 해당월총일수)");
            obj.set_font("bold 12px/normal \"Dotum\"");
            obj.set_visible("false");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Div("divData04","0","divData03:0",null,"540","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","5","0",null,"22","5",null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("0");
            obj.set_text("4. 세액계산");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta00","5","staTitle:5","50","180",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("1");
            obj.set_text("퇴직\r\n소득\r\n과세\r\n표준\r\n계산");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta01","5","sta00:-1","50","311",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("2");
            obj.set_text("퇴직\r\n소득\r\n세액\r\n계산");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta02","sta00:-1","staTitle:5","280","30",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("3");
            obj.set_text("2015.12.31 이전 계산방법");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("4");
            obj.set_text("중간지급 등");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("5");
            obj.set_text("최종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("6");
            obj.set_text("정산");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","staTitle:5","353","30",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("7");
            obj.set_text("2016.1.1 이후 계산방법");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg00_01","sta00:-1","sta02:-1","280","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("①퇴직소득(3)");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg00_02","staBg00_01:-1","sta02:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg00_03","staBg00_02:-1","sta02:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg00_04","staBg00_03:-1","sta02:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg00_05","staBg00_04:-1","sta02:-1","234","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("⑤정산퇴직소득(3)");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg00_06","staBg00_05:-1","sta02:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg01_01","sta00:-1","staBg00_01:-1","280","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("②퇴직소득정률공제");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg01_02","staBg01_01:-1","staBg00_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg01_03","staBg01_02:-1","staBg00_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg01_04","staBg01_03:-1","staBg00_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg01_05","staBg01_04:-1","staBg00_01:-1","234","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("⑥근속연수공제");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg01_06","staBg01_05:-1","staBg00_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg02_01","sta00:-1","staBg01_01:-1","280","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("③근속연수공제");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg02_02","staBg02_01:-1","staBg01_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg02_03","staBg02_02:-1","staBg01_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg02_04","staBg02_03:-1","staBg01_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg02_05","staBg02_04:-1","staBg01_01:-1","234","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("⑦환산급여(⑤-⑥)÷정산근속연수×12배");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg02_06","staBg02_05:-1","staBg01_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg03_01","sta00:-1","staBg02_01:-1","280","61",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("④퇴직소득과세표준(①-②-③)");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg03_02","staBg03_01:-1","staBg02_01:-1","120","61",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg03_03","staBg03_02:-1","staBg02_01:-1","120","61",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg03_04","staBg03_03:-1","staBg02_01:-1","120","61",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg03_05_00","staBg03_04:-1","staBg02_01:-1","234","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("⑧환산급여별공제");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg03_06_00","staBg03_05_00:-1","staBg02_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg03_05_01","staBg03_04:-1","staBg03_05_00:-1","234","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("⑨퇴직소득과세표준(⑦-⑧)");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg03_06_01","staBg03_05_00:-1","staBg03_05_00:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta07","sta01:-1","sta00:-1","280","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("34");
            obj.set_text("2015.12.31 이전 계산방법");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta08","sta02:-1","sta00:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("35");
            obj.set_text("12.12.31 이전");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta00:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("36");
            obj.set_text("13.1.1 이후");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","sta00:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("37");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","sta00:-1","353","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("38");
            obj.set_text("2016.1.1 이후 계산방법");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg07_01","sta01:-1","sta07:-1","280","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("근속월수/근속연수");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg07_02","staBg07_01:-1","sta07:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg07_03","staBg07_02:-1","sta07:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg07_04","staBg07_03:-1","sta07:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg07_05","staBg07_04:-1","sta07:-1","234","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg07_06","staBg07_05:-1","sta07:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg08_01","sta01:-1","staBg07_01:-1","280","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("세율");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg08_02","staBg08_01:-1","staBg07_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg08_03","staBg08_02:-1","staBg07_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg08_04","staBg08_03:-1","staBg07_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg08_05","staBg08_04:-1","staBg07_01:-1","234","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg08_06","staBg08_05:-1","staBg07_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg09_01","sta01:-1","staBg08_01:-1","280","61",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("⑩과세표준안분(④×각 근속연수÷정산근속연수)");
            obj.set_wordWrap("char");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg09_02","staBg09_01:-1","staBg08_01:-1","120","61",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg09_03","staBg09_02:-1","staBg08_01:-1","120","61",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg09_04","staBg09_03:-1","staBg08_01:-1","120","61",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg09_05_00","staBg09_04:-1","staBg08_01:-1","234","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("⑯환산세출세액(⑨×세율)");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg09_06_00","staBg09_05_00:-1","staBg08_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg09_05_01","staBg09_04:-1","staBg09_05_00:-1","234","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("⑰산출세액(⑯÷12배×정산근속연수)");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg09_06_01","staBg09_05_01:-1","staBg09_05_00:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg10_01","sta01:-1","staBg09_01:-1","280","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("⑪연평균 과세표준(⑩÷각 근속연수)");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg10_02","staBg10_01:-1","staBg09_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg10_03","staBg10_02:-1","staBg09_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg10_04","staBg10_03:-1","staBg09_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta12","staBg10_04:-1","staBg09_01:-1","353","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("63");
            obj.set_text("세액계산특례");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg11_01","sta01:-1","staBg10_01:-1","280","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("⑫환산 과세표준(⑪×5배)");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg11_02","staBg11_01:-1","staBg10_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg11_03","staBg11_02:-1","staBg10_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg11_04","staBg11_03:-1","staBg10_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg11_05","staBg11_04:-1","staBg10_01:-1","234","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("⑱퇴직일이 속하는 과세연도");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg11_06","staBg11_05:-1","staBg10_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg12_01","sta01:-1","staBg11_01:-1","280","41",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("⑬환산산출세액(⑫×세율)");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg12_02","staBg12_01:-1","staBg11_01:-1","120","41",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg12_03","staBg12_02:-1","staBg11_01:-1","120","41",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg12_04","staBg12_03:-1","staBg11_01:-1","120","41",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg12_05","staBg12_04:-1","staBg11_01:-1","234","41",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("⑲특례 적용 산출세액 (⑮×퇴직연도별 비율)+(⑰×퇴직연도별 비율))");
            obj.set_wordWrap("char");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg12_06","staBg12_05:-1","staBg11_01:-1","120","41",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg13_01","sta01:-1","staBg12_01:-1","280","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("⑭연평균 산출세액(⑬÷5배)");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg13_02","staBg13_01:-1","staBg12_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg13_03","staBg13_02:-1","staBg12_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg13_04","staBg13_03:-1","staBg12_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg13_05","staBg13_04:-1","staBg12_01:-1","234","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("⑳기납부(또는 기과세이연)세액");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg13_06","staBg13_05:-1","staBg12_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg14_01","sta01:-1","staBg13_01:-1","280","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("⑮산출세액(⑭×각 근속연수)");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg14_02","staBg14_01:-1","staBg13_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg14_03","staBg14_02:-1","staBg13_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg14_04","staBg14_03:-1","staBg13_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg14_05","staBg14_04:-1","staBg13_01:-1","234","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("㉑신고대상세액(⑲-⑳)");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staBg14_06","staBg14_05:-1","staBg13_01:-1","120","31",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_MIDRETIRE","staBg00_01:5","sta03:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("88");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_RETIREINCOME1","ctxtAM_MIDRETIRE:9","sta03:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("89");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_RETIREINCOME2","ctxtAM_RETIREINCOME1:9","sta03:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("90");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_RETIREINCOME3","staBg00_05:5","sta03:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("91");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_FIXRATE_GONGJE_2015","staBg01_03:5","ctxtAM_MIDRETIRE:10","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("92");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_YEAR_GONGJE1","staBg01_05:5","ctxtAM_MIDRETIRE:9","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("93");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_YEAR_GONGJE2","staBg02_03:5","ctxtAM_FIXRATE_GONGJE_2015:10","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("94");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_HWANSAN","staBg02_05:5","ctxtAM_FIXRATE_GONGJE_2015:10","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("95");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_STDRETINCTAXTATION1","staBg03_03:5","ctxtAM_YEAR_GONGJE2:25","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("96");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_HWANSANINCOME","staBg03_05_00:5","ctxtAM_YEAR_GONGJE2:10","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("97");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_STDRETINCTAXTATION2","staBg03_05_01:5","ctxtAM_HWANSANINCOME:10","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("98");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Edit("ctxtQN_WORK_BEFORE_2013","staBg07_01:5","sta07:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("99");
            obj.set_value("");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Edit("ctxtQN_WORK_AFTER_2013","staBg07_02:5","sta07:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("100");
            obj.set_value("");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Edit("ctxtCT_WORK","staBg07_03:5","sta07:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("101");
            obj.set_value("");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Edit("ctxt04_03","staBg07_05:5","sta07:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("102");
            obj.set_value("");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt05_00","staBg08_02:5","ctxtQN_WORK_BEFORE_2013:10","90","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("103");
            obj.set_format("#,0.##%");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta05_00_PERCENT","ctxt05_00:0","ctxtQN_WORK_BEFORE_2013:10","20","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("104");
            obj.set_text("%");
            obj.set_textAlign("center");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt05_01","staBg08_03:5","ctxtQN_WORK_BEFORE_2013:10","90","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("105");
            obj.set_format("#,0.##%");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta05_01_PERCENT","ctxt05_01:0","ctxtQN_WORK_BEFORE_2013:10","20","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("106");
            obj.set_text("%");
            obj.set_textAlign("center");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt05_02","staBg08_05:5","ctxtQN_WORK_BEFORE_2013:10","90","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("107");
            obj.set_format("#,0.##%");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta05_02_PERCENT","ctxt05_02:0","ctxtQN_WORK_BEFORE_2013:10","20","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("108");
            obj.set_text("%");
            obj.set_textAlign("center");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt06_00","staBg09_01:5","ctxt05_00:25","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("109");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt06_01","ctxt06_00:9","ctxt05_00:25","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("110");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt06_02","ctxt06_01:9","ctxt05_00:25","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("111");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt06_03","staBg09_05_00:5","ctxt05_00:10","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("112");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt06_04","staBg09_05_00:5","ctxt06_03:10","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("113");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt07_00","staBg10_01:5","staBg09_02:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("114");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt07_01","ctxt07_00:9","staBg09_02:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("115");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt07_02","ctxt07_01:9","staBg09_02:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("116");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt08_00","staBg11_02:5","ctxt07_01:10","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("118");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt08_01","ctxt08_00:9","ctxt07_01:10","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("119");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Edit("ctxt08_02","staBg11_05:5","ctxt07_01:10","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("120");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt09_00","staBg12_02:5","ctxt08_01:15","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("121");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt09_01","ctxt09_00:9","ctxt08_01:15","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("122");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt09_02","staBg12_05:5","ctxt08_01:15","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("123");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt10_00","staBg13_01:5","staBg12_01:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("124");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt10_01","ctxt10_00:9","staBg12_01:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("125");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt10_02","ctxt10_01:9","staBg12_01:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("126");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt10_03","staBg13_05:5","staBg12_01:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("127");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt11_00","staBg14_01:5","staBg13_01:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("128");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt11_01","ctxt11_00:9","staBg13_01:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("129");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt11_02","ctxt11_01:9","staBg13_01:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("130");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt11_03","staBg14_05:5","staBg13_01:5","110","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("131");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Div("divData05","0","divData04:0",null,"90","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","5","0",null,"22","5",null,null,null,null,null,this.divData.form.divData05.form);
            obj.set_taborder("0");
            obj.set_text("5. 공제액 및 차인지급액");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divData05.addChild(obj.name, obj);

            obj = new Static("sta00","5","staTitle:5","120","40",null,null,null,null,null,null,this.divData.form.divData05.form);
            obj.set_taborder("1");
            obj.set_text("공제액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData05.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","staTitle:5","120","40",null,null,null,null,null,null,this.divData.form.divData05.form);
            obj.set_taborder("2");
            obj.set_text("소득세\r\n( ㉑ )");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData05.addChild(obj.name, obj);

            obj = new Static("staBg01","sta01:-1","staTitle:5","180","40",null,null,null,null,null,null,this.divData.form.divData05.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData05.addChild(obj.name, obj);

            obj = new Static("sta02","staBg01:-1","staTitle:5","120","40",null,null,null,null,null,null,this.divData.form.divData05.form);
            obj.set_taborder("4");
            obj.set_text("지방소득세\r\n(㉒ = ㉑×10%)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData05.addChild(obj.name, obj);

            obj = new Static("staBg02","sta02:-1","staTitle:5","180","40",null,null,null,null,null,null,this.divData.form.divData05.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData05.addChild(obj.name, obj);

            obj = new Static("sta03","staBg02:-1","staTitle:5","120","40",null,null,null,null,null,null,this.divData.form.divData05.form);
            obj.set_taborder("6");
            obj.set_text("차인지급액\r\n(3 - ㉑ - ㉒)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData05.addChild(obj.name, obj);

            obj = new Static("staBg03","sta03:-1","staTitle:5","204","40",null,null,null,null,null,null,this.divData.form.divData05.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData05.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt01","sta01:5","staTitle:15","170","20",null,null,null,null,null,null,this.divData.form.divData05.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData05.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt02","sta02:5","staTitle:15","170","20",null,null,null,null,null,null,this.divData.form.divData05.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData05.addChild(obj.name, obj);

            obj = new MaskEdit("ctxt03","sta03:5","staTitle:15","193","20",null,null,null,null,null,null,this.divData.form.divData05.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData05.addChild(obj.name, obj);

            obj = new Div("divData06","0","divData05:0",null,"350","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","5","0",null,"22","5",null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("0");
            obj.set_text("6. 기타");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Static("sta00","5","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("1");
            obj.set_text("사직서첨부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Static("staBg00","sta00:-1","staTitle:5","919","30",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Static("sta01","5","sta00:-1","120","30",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("3");
            obj.set_text("퇴직금정산신청서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Static("staBg01","sta01:-1","staBg00:-1","919","30",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Static("sta02","5","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("5");
            obj.set_text("* 평가등급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Static("staBg02","sta02:-1","staBg01:-1","919","30",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Static("sta03","5","sta02:-1","120","170",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("7");
            obj.set_text("공 종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Static("staBg03","sta03:-1","staBg02:-1","919","170",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Static("sta04","5","sta03:-1","120","60",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("9");
            obj.set_text("*특기사항(평가)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Static("staBg04","sta04:-1","staBg03:-1","919","60",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Radio("crdo02","sta02:5","sta01:5","200","20",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsGrade");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("A");
            obj.set_value("A");
            obj.set_index("0");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new TextArea("ctxt04","sta04:4","288","909","50",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("12");
            obj.set_visible("true");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Grid("objGrid","129","149","661","130",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("13");
            obj._setContents("");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Button("btnAddRow","633","119","49","27",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("14");
            obj.set_text("추가");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Button("btnDelRow","687","119","49","27",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("15");
            obj.set_text("삭제");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Button("btnSaveGrid","741","119","49","27",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("16");
            obj.set_text("저장");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Static("staAT_RETIREDOC","194","27","250","30",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("17");
            obj.set_text("file_nm");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Button("btnAT_RETIREDOC","130","32","49","20",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("18");
            obj.set_text("첨부");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Button("btnAT_RETIRE_PAY_ASKDOC","130","61","49","20",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("19");
            obj.set_text("첨부");
            this.divData.form.divData06.addChild(obj.name, obj);

            obj = new Static("staAT_RETIRE_PAY_ASKDOC","194","56","250","30",null,null,null,null,null,null,this.divData.form.divData06.form);
            obj.set_taborder("20");
            obj.set_text("file_nm");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData06.addChild(obj.name, obj);
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

            obj = new BindItem("item4","divSearch.form.ccfDS_NAME.form.CDTextBox","value","dsSearch","DS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclYM_TOIJIK.form.TextBox","value","dsSearch","YM_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfDS_NAME.form.DSTextBox","value","dsSearch","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divData01.form.ctxtDS_HNAME","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData01.form.ctxtDS_ADDR","value","dsList","DS_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divData01.form.ctxtDT_BITH","value","dsList","DT_BITH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divData01.form.ctxtQN_WORK","value","dsList","QN_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData01.form.ctclDT_START","value","dsList","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divData01.form.ctclDT_RETIRE","value","dsList","DT_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divData01.form.ctclDT_SLIP_PLAN","value","dsList","DT_SLIP_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divData02.form.ctxtAM_ETCPAY3","value","dsTotalCalcurate","AM_ETCPAY3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divData02.form.ctxtAM_WONGA0","value","dsTotalCalcurate","AM_WONGA0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divData02.form.ctxtAM_WONGA1","value","dsTotalCalcurate","AM_WONGA1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divData02.form.ctxtAM_WONGA2","value","dsTotalCalcurate","AM_WONGA2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divData02.form.ctxtAM_WONGA3","value","dsTotalCalcurate","AM_WONGA3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divData02.form.ctxtAM_ETCPAY0","value","dsTotalCalcurate","AM_ETCPAY0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divData02.form.ctxtAM_ETCPAY1","value","dsTotalCalcurate","AM_ETCPAY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divData02.form.ctxtAM_ETCPAY2","value","dsTotalCalcurate","AM_ETCPAY2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divData04.form.ctxtAM_MIDRETIRE","value","dsListSub2","AM_MIDRETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divData04.form.ctxtAM_RETIREINCOME1","value","dsListSub2","AM_FINAL_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divData04.form.ctxtAM_RETIREINCOME2","value","dsListSub2","AM_RETIREINCOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divData04.form.ctxtAM_FIXRATE_GONGJE_2015","value","dsListSub2","AM_FIXRATE_GONGJE_2015");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divData04.form.ctxtAM_YEAR_GONGJE2","value","dsListSub2","AM_YEAR_GONGJE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divData04.form.ctxtAM_STDRETINCTAXTATION1","value","dsListSub2","AM_STDRETINCTAXTATION_2015");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divData04.form.ctxtAM_RETIREINCOME3","value","dsListSub2","AM_RETIREINCOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divData04.form.ctxtAM_YEAR_GONGJE1","value","dsListSub2","AM_YEAR_GONGJE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divData04.form.ctxtAM_HWANSAN","value","dsListSub2","AM_HWANSAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divData04.form.ctxtAM_HWANSANINCOME","value","dsListSub2","AM_HWANSANINCOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divData04.form.ctxtAM_STDRETINCTAXTATION2","value","dsListSub2","AM_STDRETINCTAXTATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divData04.form.ctxt06_01","value","dsListSub2","AM_DEFULT_TAX_ANBUN_AFTER_2013");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divData04.form.ctxt06_02","value","dsListSub2","AM_DEFULT_TAX_ANBUN_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divData04.form.ctxt07_01","value","dsListSub2","AM_DEFULT_TAX_AVE_AFTER_2013");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divData04.form.ctxt07_02","value","dsListSub2","AM_DEFULT_TAX_AVE_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divData04.form.ctxt08_00","value","dsListSub2","AM_HWANSAN_DEFULT_TAX_AFTER_2013");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divData04.form.ctxt09_00","value","dsListSub2","AM_HWANSAN_TAX_AFTER_2013");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.divData04.form.ctxt10_01","value","dsListSub2","AM_YEAR_TAX_AVE_AFTER_2013");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divData04.form.ctxt10_02","value","dsListSub2","AM_YEAR_TAX_AVE_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.divData04.form.ctxt09_01","value","dsListSub2","AM_HWANSAN_TAX_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.divData04.form.ctxt08_01","value","dsListSub2","AM_HWANSAN_DEFULT_TAX_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.divData04.form.ctxt11_01","value","dsListSub2","AM_TAX_AFTER_2013");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.divData04.form.ctxt11_02","value","dsListSub2","AM_TAX_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.divData04.form.ctxt11_03","value","dsListSub2","AM_SODUK_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.divData04.form.ctxt10_03","value","dsListSub2","AM_BEFOR_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.divData04.form.ctxt09_02","value","dsListSub2","AM_SANCHUL_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.divData04.form.ctxt08_02","value","dsListSub2","YY_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.divData04.form.ctxt06_04","value","dsListSub2","AM_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.divData04.form.ctxt06_03","value","dsListSub2","AM_HWANSAN_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.divData05.form.ctxt01","value","dsListSub2","AM_CHAGAM_SODUK_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.divData05.form.ctxt02","value","dsListSub2","AM_CHAGAM_JUMIN_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.divData05.form.ctxt03","value","dsListSub2","AM_JIGUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.divData04.form.ctxt11_00","value","dsListSub2","AM_TAX_BEFORE_2013");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.divData04.form.ctxt10_00","value","dsListSub2","AM_YEAR_TAX_AVE_BEFORE_2013");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.divData04.form.ctxt07_00","value","dsListSub2","AM_DEFULT_TAX_AVE_BEFORE_2013");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.divData04.form.ctxt06_00","value","dsListSub2","AM_DEFULT_TAX_ANBUN_BEFORE_2013");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.divData04.form.ctxtQN_WORK_BEFORE_2013","value","dsListSub2","QN_WORK_BEFORE_2013");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.divData04.form.ctxtQN_WORK_AFTER_2013","value","dsListSub2","QN_WORK_AFTER_2013");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.divData04.form.ctxtCT_WORK","value","dsListSub2","CT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.divData04.form.ctxt05_01","value","dsListSub2","RT_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.divData04.form.ctxt05_00","value","dsListSub2","RT_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.divData04.form.ctxt05_02","value","dsListSub2","RT_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.divData04.form.ctxt04_03","value","dsListSub2","CT_WORK_AFTER_2016");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.divData06.form.crdo02","value","dsListSub4","GR_JIKMU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divData.form.divData06.form.ctxt04","value","dsListSub4","DS_REJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.divData03.form.ctxtAM_ETCALLOW","value","dsList","AM_ETCALLOW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.divData06.form.staAT_RETIREDOC","text","dsListSub4","RETIREDOC_DS_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.divData06.form.staAT_RETIRE_PAY_ASKDOC","text","dsListSub4","PAY_ASKDOC_DS_ETC");
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
        this.addIncludeScript("DSE_RETIRE.xfdl","lib::libCommon.xjs");
        this.registerScript("DSE_RETIRE.xfdl", function() {
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.objApp = this.gfnGetApplication();
        this.fileConfig = {
        	host : this.gfnGetServerUrl(),
        	uploadUrl : this.gfnGetServerUrl() + "/file/saveFile.do",
        	downloadUrl : this.gfnGetServerUrl() + "/file/downloadFile.do",
        	deleteUrl : this.gfnGetServerUrl() + "/file/deleteFile.do",
        	downImage : "theme://img_file.png",
        	delImage : "theme://btn_del.png",
        	allowTypes : ["html", "txt"],
        	maxCount : 1,
        	maxSize : "200MB",
        	maxTotalSize : "200MB"
        };

        this.fileConfig = this.gfnGetFileConfig();

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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "DS_NAME", this.getOwnerFrame().DS_NAME);
        		this.dsSearch.setColumn(0, "NO_ID", this.getOwnerFrame().NO_ID);
        		this.dsSearch.setColumn(0, "NO_JUMIN", this.getOwnerFrame().NO_JUMIN);
        		this.dsSearch.setColumn(0, "YM_RETIRE", this.getOwnerFrame().YM_TOIJIK);

        		this.fnSearchFileInfo("DS07");
        		this.fnSearchFileInfo("DS08");

        		this.BTN_APPROVAL.set_enable(false);
        		this.BTN_CANCEL_APPROVAL.set_enable(false);

        		this.fnSelect();
        	} else {
        		this.gfnSetFormStatus(this, "I");
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

        	//this.BTN_FIXED = this.gfnFormButtonAdd("BTN_FIXED", "fnRetireFixed");	// 퇴직금확정
        	this.BTN_RETIRE_DOC = this.gfnFormButtonAdd("BTN_RETIRE_DOC", "fnRetireDoc");	// 사직서
        	this.BTN_WORK = this.gfnFormButtonAdd("BTN_WORK", "fnWorkPopupOpen");	// 월별출역일수
        	this.BTN_APPROVAL = this.gfnFormButtonAdd("BTN_APPROVAL", "fnApprovalPopupOpen");	// 품의서 버튼
        	this.BTN_CANCEL_APPROVAL = this.gfnFormButtonAdd("BTN_CANCEL_APPROVAL", "fnCancelApproval");	// 품의서 취소 버튼
        	this.BTN_RETIRE_JUNGSAN_D = this.gfnFormButtonAdd("BTN_RETIRE_JUNGSAN_D", "fnRetireJungsanD");	// 퇴직금정산 신청서
        	this.BTN_RETIRERECEIPT = this.gfnFormButtonAdd("BTN_RETIRERECEIPT", "fnRetireReceipt");	// 퇴직급여 계산내용





        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfDS_NAME = this.divSearch.form.ccfDS_NAME;

        	this.dxGrid = this.divData.form.divData06.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_NAME.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "codefind_AfterCDTextChanged";
        	this.ccfDS_NAME.AfterCDTextChanged = "codefind_AfterCDTextChanged";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsListSub3, "DS", "DSB_COSTTOJA");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_RETIRE", "string");
        	this.dsSelect.addColumn("ID_RESIDENT", "string");

        	this.dsSubSelect = new Dataset();
        	this.dsSubSelect.addColumn("CD_SITE", "string");
        	this.dsSubSelect.addColumn("YM_WORK", "string");
        	this.dsSubSelect.addColumn("NO_ERPKEY", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YM_RETIRE", "string");
        	this.dsUpdate.addColumn("ID_RESIDENT", "string");
        	this.dsUpdate.addColumn("FR_SALARY1", "string");		// 시작일1
        	this.dsUpdate.addColumn("TO_SALARY1", "string");		// 종료일1
        	this.dsUpdate.addColumn("AM_SALARY1", "bigdecimal");	// 기본급1
        	this.dsUpdate.addColumn("AM_ETCPAY1", "bigdecimal");	// 기타수당1
        	this.dsUpdate.addColumn("FR_SALARY2", "string");		// 시작일2
        	this.dsUpdate.addColumn("TO_SALARY2", "string");		// 종료일2
        	this.dsUpdate.addColumn("AM_SALARY2", "bigdecimal");	// 기본급2
        	this.dsUpdate.addColumn("AM_ETCPAY2", "bigdecimal");	// 기타수당2
        	this.dsUpdate.addColumn("FR_SALARY3", "string");		// 시작일3
        	this.dsUpdate.addColumn("TO_SALARY3", "string");		// 종료일3
        	this.dsUpdate.addColumn("AM_SALARY3", "bigdecimal");	// 기본급3
        	this.dsUpdate.addColumn("AM_ETCPAY3", "bigdecimal");	// 기타수당3
        	this.dsUpdate.addColumn("FR_SALARY4", "string");		// 시작일4
        	this.dsUpdate.addColumn("TO_SALARY4", "string");		// 종료일4
        	this.dsUpdate.addColumn("AM_SALARY4", "bigdecimal");	// 기본급4
        	this.dsUpdate.addColumn("AM_ETCPAY4", "bigdecimal");	// 기타수당4
        	this.dsUpdate.addColumn("TT_BONUS", "bigdecimal");		// 상여합계
        	this.dsUpdate.addColumn("CT_BONUS", "bigdecimal");		// 상여횟수
        	this.dsUpdate.addColumn("AM_VACAALLOW", "bigdecimal");	// 연월차수당
        	this.dsUpdate.addColumn("AM_ETCALLOW", "bigdecimal");	// 기타수당
        	this.dsUpdate.addColumn("ID_UPDATE", "bigdecimal");		// 수정자
        	this.dsUpdate.addColumn("CD_SITE", "bigdecimal");		// 부서코드
        	this.dsUpdate.addColumn("DT_START", "string");			// 기산일자
        	this.dsUpdate.addColumn("DT_SLIP_PLAN", "string");		// 전표발행예정일자

        	this.dsListSub3Save = new Dataset();

        	this.dsListSub3Save.addColumn("YM_RETIRE", "string");		// 적용년월
        	this.dsListSub3Save.addColumn("ID_RESIDENT", "string");		// 직번
        	this.dsListSub3Save.addColumn("CD_SITE", "string");		// 현장코드
        	this.dsListSub3Save.addColumn("CD_COST", "string");		// 공종코드
        	this.dsListSub3Save.addColumn("DS_COST", "string");		// 공종명
        	this.dsListSub3Save.addColumn("AM_COST", "bigdecimal");		// 공종금액
        	this.dsListSub3Save.addColumn("ID_USER", "string");		// 입력,수정자
        	this.dsListSub3Save.addColumn("TY_STATUS", "string");		// 상태값(입력:I,수정:U,삭제:D)

        	this.dsApprove = new Dataset();

        	this.dsApprove.addColumn("CD_SITE", "string");			// 현장코드
        	this.dsApprove.addColumn("YM_RETIRE", "string");		// 적용년월
        	this.dsApprove.addColumn("ID_RESIDENT", "string");		// 직번

        	this.dsCancelApproval = new Dataset();

        	this.dsCancelApproval.addColumn("CD_SITE", "string");		// 현장코드
        	this.dsCancelApproval.addColumn("YM_RETIRE", "string");		// 적용년월
        	this.dsCancelApproval.addColumn("ID_RESIDENT", "string");		// 직번

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

        	this.dsSelect.setColumn(0, "YM_RETIRE", this.dsSearch.getColumn(0, "YM_RETIRE"));
        	this.dsSelect.setColumn(0, "ID_RESIDENT", this.dsSearch.getColumn(0, "NO_ID"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsListSub=select1 dsListSub2=select2 dsListSub4=select3 dsListSub3=select4";
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
        	// 그리드 필수항목 체크
        	var DT_RETIRE_TEMP = this.dsList.getColumn(0, "DT_RETIRE").substr(0,4);			// 퇴사일자
        	var DT_SLIP_PLAN_TEMP = this.dsList.getColumn(0, "DT_SLIP_PLAN").substr(0,4); // 전표발행예정일자

        //	consols.log(DT_RETIRE_TEMP);
        //	consols.log(DT_SLIP_PLAN_TEMP);

        	if(DT_RETIRE_TEMP != DT_SLIP_PLAN_TEMP){
        		this.gfnConfirm("퇴사일자와 전표발행예정일자의 연도가 다를 경우 경리팀과 협의후 진행하시기 바랍니다. 계속진행 하시겠습니까?","fnConfirm_retire");
        	}
        	else {
        		this.fnConfirm_retire("", true);
        	}
        }

        this.fnConfirm_retire = function(strID, val) {
        	if(val == true)
        	{
        		this.gfnConfirm("퇴직금을 저장 하시겠습니까?", "fnRetireFixed_callback");
        	}
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
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

        		if(0 < this.dsList.rowcount){
        			var QN_WORKYEAR = this.dsList.getColumn(0, "QN_WORKYEAR");
        			var QN_WORKMONTH = this.dsList.getColumn(0, "QN_WORKMONTH");
        			var QN_WORKDAY = this.dsList.getColumn(0, "QN_WORKDAY");

        			this.dsList.setColumn(0, "QN_WORK", QN_WORKYEAR + "년 " + QN_WORKMONTH + "월 " + QN_WORKDAY + "일");
        		}

        		this.divData.form.divData02.form.ctxtAM_WONGA3.set_readonly(true);
        		this.divData.form.divData02.form.ctxtAM_ETCPAY3.set_readonly(true);

        		if(0 < this.dsListSub.rowcount){
        			for(var i = 0; i < this.dsListSub.rowcount; i++){

        				eval("this.divData.form.divData02.form.ctxtAM_WONGA" + i + ".set_readonly(false)");
        				eval("this.divData.form.divData02.form.ctxtAM_ETCPAY" + i + ".set_readonly(false)");

        				var DT_FROM = this.dsListSub.getColumn(i, "DT_FROM");
        				var DT_TO   = this.dsListSub.getColumn(i, "DT_TO");
        				DT_FROM = DT_FROM.substring(0,4).toString() + "/" + DT_FROM.substring(4,6).toString() + "/" + DT_FROM.substring(6,8).toString();
        				DT_TO 	= DT_TO.substring(0,4).toString() + "/" + DT_TO.substring(4,6).toString() + "/" + DT_TO.substring(6,8).toString();

        				var QN_WORK   = this.dsListSub.getColumn(i, "QN_WORK");
        				var AM_WONGA = this.dsListSub.getColumn(i, "AM_WONGA");
        				var AM_ETCPAY   = this.dsListSub.getColumn(i, "AM_ETCPAY");
        				var AM_INCOME   = this.dsListSub.getColumn(i, "AM_INCOME");

        				eval("this.divData.form.divData02.form.staDT_FROM" + i + ".set_text('" + DT_FROM + "')");
        				eval("this.divData.form.divData02.form.staDT_TO" + i + ".set_text('" + DT_TO + "')");
        				eval("this.divData.form.divData02.form.ctxtQN_WORK" + i + ".set_value('" + QN_WORK + "')");
        				eval("this.divData.form.divData02.form.ctxtAM_WONGA" + i + ".set_value('" + AM_WONGA + "')");
        				eval("this.divData.form.divData02.form.ctxtAM_ETCPAY" + i + ".set_value('" + AM_ETCPAY + "')");
        				eval("this.divData.form.divData02.form.ctxtAM_INCOME" + i + ".set_value('" + AM_INCOME + "')");

        				this.divData.form.divData02.form.ctxtQN_WORK_TOT.set_value(this.dsListSub.getSum("QN_WORK", 0));
        			}
        		}

        		if(0 < this.dsListSub2.rowcount){
        			var QN_WORKYEAR_BEFORE_2013 = this.dsListSub2.getColumn(0, "QN_WORKYEAR_BEFORE_2013");
        			var QN_WORKMONTH_BEFORE_2013 = this.dsListSub2.getColumn(0, "QN_WORKMONTH_BEFORE_2013");
        			var QN_WORKYEAR_AFTER_2013 = this.dsListSub2.getColumn(0, "QN_WORKYEAR_AFTER_2013");
        			var QN_WORKMONTH_AFTER_2013 = this.dsListSub2.getColumn(0, "QN_WORKMONTH_AFTER_2013");
        			var CT_WORKYEAR = this.dsListSub2.getColumn(0, "CT_WORKYEAR");
        			var CT_WORKMONTH = this.dsListSub2.getColumn(0, "CT_WORKMONTH");

        			this.dsListSub2.setColumn(0, "QN_WORK_BEFORE_2013", QN_WORKMONTH_BEFORE_2013 + "/" + QN_WORKYEAR_BEFORE_2013);
        			this.dsListSub2.setColumn(0, "QN_WORK_AFTER_2013", QN_WORKMONTH_AFTER_2013 + "/" + QN_WORKYEAR_AFTER_2013);
        			this.dsListSub2.setColumn(0, "CT_WORK", CT_WORKMONTH + "/" + CT_WORKYEAR);
        			this.dsListSub2.setColumn(0, "CT_WORK_AFTER_2016", CT_WORKMONTH + "/" + CT_WORKYEAR);

        		}
        		// 폼상태 초기화.
        		this.gfnSetFormStatus(this);

        		this.BTN_APPROVAL.set_enable(false);
        		this.BTN_CANCEL_APPROVAL.set_enable(false);
        		var TY_APPROVAL = this.gfnTrim(this.dsList.getColumn(0, "TY_APPROVAL"));
        		if(TY_APPROVAL == "0")
        		{
        			this.BTN_APPROVAL.set_enable(true);
        		}
        		else if(TY_APPROVAL == "2")
        		{
        			this.BTN_CANCEL_APPROVAL.set_enable(true);
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "gridSave") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "saveFile") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "removeFile") {
        		if (errorCode == 0) {
        			this.fileUpTransfer.upload(this.fileConfig.uploadUrl);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "removeFile2") {
        		if (errorCode == 0) {
        			this.fileUpTransfer2.upload(this.fileConfig.uploadUrl);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "approve") {
        		if (errorCode == 0) {
        			this.fnCallGfnApprove();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "cancelApproval") {
        		if (errorCode == 0) {
        			this.gfnAlert("전자결재가 취소되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
        	}
        	else if (id == "ccfDS_NAME") {
        		if(!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		}
        		else
        		{
        			dsUserParam.setColumn(nrow, "CD_SITE", "");
        		}
        		dsUserParam.setColumn(nrow, "TY_CHAIYONG", "");
        	}
        	return true;
        }

        this.codefind_AfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE")
        	{
        		this.dsSearch.setColumn(0, "DS_NAME", "");
        		this.dsSearch.setColumn(0, "NO_ID", "");
        		this.divSearch.form.ccfDS_NAME.form.DSTextBox.set_value("");
        	}
        	else if(id == "ccfDS_NAME")
        	{
        		var arr = codeFindData;
        		this.dsSearch.setColumn(0, "NO_ID", "");

        		if(arr.length > 0)
        		{
        			var no_id = arr[0]["NO_ID_REAL"];
        			this.dsSearch.setColumn(0, "NO_ID", no_id);
        		}
        	}

        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DWX_CFCOST_TREE_01") {

         		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_GBIMOK", "");
         		dsUserParam.setColumn(nrow, "CD_STDAGG", "");

        	}
        	return true;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        	}
        };

        // 평균임금 산정내역 계산.
        this.dsTotalCalcurate_oncolumnchanged = function(obj,e)
        {
        	var AM_WONGA0 = nexacro.toNumber(obj.getColumn(0, "AM_WONGA0"));
        	var AM_WONGA1 = nexacro.toNumber(obj.getColumn(0, "AM_WONGA1"));
        	var AM_WONGA2 = nexacro.toNumber(obj.getColumn(0, "AM_WONGA2"));
        	var AM_WONGA3 = 0

        	var AM_ETCPAY0 = nexacro.toNumber(obj.getColumn(0, "AM_ETCPAY0"));
        	var AM_ETCPAY1 = nexacro.toNumber(obj.getColumn(0, "AM_ETCPAY1"));
        	var AM_ETCPAY2 = nexacro.toNumber(obj.getColumn(0, "AM_ETCPAY2"));
        	var AM_ETCPAY3 = 0

        	var AM_INCOME0 = AM_WONGA0 + AM_ETCPAY0;
        	var AM_INCOME1 = AM_WONGA1 + AM_ETCPAY1;
        	var AM_INCOME2 = AM_WONGA2 + AM_ETCPAY2;
        	var AM_INCOME3 = 0;

        	if(!this.gfnIsNull(obj.getColumn(0, "AM_WONGA3"))){
        		AM_WONGA3 = nexacro.toNumber(obj.getColumn(0, "AM_WONGA3"));
        		AM_ETCPAY3 = nexacro.toNumber(obj.getColumn(0, "AM_ETCPAY3"));
        		AM_INCOME3 = nexacro.toNumber(AM_WONGA3) + nexacro.toNumber(AM_ETCPAY3);
        	}

        	// 임금총금액.
        	var AM_INCOME_TOT = nexacro.toNumber(AM_INCOME0) + nexacro.toNumber(AM_INCOME1) + nexacro.toNumber(AM_INCOME2) + nexacro.toNumber(AM_INCOME3);

        	// 2. 평균임금 산정내역 계산.
        	this.divData.form.divData02.form.ctxtAM_WONGA_TOT.set_value(AM_WONGA0 + AM_WONGA1 + AM_WONGA2 + AM_WONGA3);
        	this.divData.form.divData02.form.ctxtAM_ETCPAY_TOT.set_value(AM_ETCPAY0 + AM_ETCPAY1 + AM_ETCPAY2 + AM_ETCPAY3);
        	this.divData.form.divData02.form.ctxtAM_INCOME_TOT.set_value(AM_INCOME_TOT);

        	this.divData.form.divData02.form.ctxtAM_INCOME0.set_value(AM_INCOME0);
        	this.divData.form.divData02.form.ctxtAM_INCOME1.set_value(AM_INCOME1);
        	this.divData.form.divData02.form.ctxtAM_INCOME2.set_value(AM_INCOME2);
        	this.divData.form.divData02.form.ctxtAM_INCOME3.set_value(AM_INCOME3);

        	//일, 월 평균임금 계산.
        	var QN_WORK = this.divData.form.divData02.form.ctxtQN_WORK_TOT.value;
        	var AM_DAY_AVG = AM_INCOME_TOT/QN_WORK;
        	var AM_MONTH_AVG = (AM_DAY_AVG * 30).toFixed();

        	var DS_DAY_AVG = this.gfnAppendComma(AM_INCOME_TOT) + " ÷ " + QN_WORK + " = " + this.gfnAppendComma(AM_DAY_AVG.toFixed(2));
        	var DS_MONTH_AVG = this.gfnAppendComma(AM_DAY_AVG.toFixed(2)) + " × " + "30 = " + this.gfnAppendComma(AM_MONTH_AVG);
        	obj.setColumn(0, "AM_MONTH_AVG", AM_MONTH_AVG);

        	this.divData.form.divData02.form.staDS_DAY_AVG.set_text(DS_DAY_AVG);
        	this.divData.form.divData02.form.staDS_MONTH_AVG.set_text(DS_MONTH_AVG);

        	// 3. 퇴직급여 내역 계산
        	var QN_WORKYEAR = this.dsList.getColumn(0, "QN_WORKYEAR");
        	var QN_WORKMONTH = this.dsList.getColumn(0, "QN_WORKMONTH");
        	var QN_WORKDAY = this.dsList.getColumn(0, "QN_WORKDAY");
        	var AM_TOIJIK = (AM_MONTH_AVG * QN_WORKYEAR) + ((AM_MONTH_AVG * QN_WORKMONTH) / 12) + ((AM_MONTH_AVG * QN_WORKDAY) / 365);
        	AM_TOIJIK = Math.floor(AM_TOIJIK.toFixed() / 10) * 10;
        	var DS_TOIJIK = "(" + this.gfnAppendComma(AM_MONTH_AVG) + " × " + QN_WORKYEAR + ") + (" + this.gfnAppendComma(AM_MONTH_AVG) + " × " + QN_WORKMONTH + " ÷ 12) + (" + this.gfnAppendComma(AM_MONTH_AVG) + " × " + QN_WORKDAY + " ÷ 365) = " + this.gfnAppendComma(AM_TOIJIK);

        	this.divData.form.divData03.form.ctxtDS_TOIJIK.set_value(DS_TOIJIK);

        	var AM_ETCALLOW = this.gfnIsNull(this.dsList.getColumn(0, "AM_ETCALLOW")) ? 0 : this.dsList.getColumn(0, "AM_ETCALLOW");
        	this.dsTotalCalcurate.setColumn(0, "AM_TOIJIK", AM_TOIJIK);
        	this.divData.form.divData03.form.ctxtAM_TOIJIK_TOT.set_value(nexacro.toNumber(AM_TOIJIK) + nexacro.toNumber(AM_ETCALLOW));

        	this.gfnSetFormStatus(this, "U");
        };


         /*
          *	파일경로 조회 버튼
          */
        this.fnSearchFileInfo = function(flag) {
        	var inData      = "";
        	var outData     = "";
        	if(flag == "DS07"){	// 사직서
        		this.dsFile.clearData();
        		var nRow = this.dsFile.addRow();
        		this.dsFile.setColumn(nRow, "CD_GUBUN", flag);
        		inData      = "info=dsFile";
        		outData     = "dsFile=info0";
        	}
        	if(flag == "DS08"){	// 퇴직금정산신청서
        		this.dsFile2.clearData();
        		var nRow = this.dsFile2.addRow();
        		this.dsFile2.setColumn(nRow, "CD_GUBUN", flag);
        		inData      = "info=dsFile2";
        		outData     = "dsFile2=info0";
        	}

        	var strSvcId    = "fileInfo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc, false);
        };

        this.fnRetireFixed = function(){
        	this.gfnConfirm("퇴직금을 저장 하시겠습니까?", "fnRetireFixed_callback");
        }

        this.fnRetireFixed_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		// 공통 저장버튼 눌렀을때. 그리드 데이터 함께 저장.
        		if(this.divData_divData06_btnSaveGrid_onclick()){ return; }

        		this.dsUpdate.clearData();
        		this.dsUpdate.addRow();

        		this.dsUpdate.setColumn(0, "YM_RETIRE", this.dsSearch.getColumn(0, "YM_RETIRE"));
        		this.dsUpdate.setColumn(0, "ID_RESIDENT", this.dsSearch.getColumn(0, "NO_ID"));
        		this.dsUpdate.setColumn(0, "FR_SALARY1", nexacro.replaceAll(this.divData.form.divData02.form.staDT_FROM0.text, "/", ""));// 시작일1
        		this.dsUpdate.setColumn(0, "TO_SALARY1", nexacro.replaceAll(this.divData.form.divData02.form.staDT_TO0.text, "/", ""));	// 종료일1
        		this.dsUpdate.setColumn(0, "AM_SALARY1", this.dsTotalCalcurate.getColumn(0, "AM_WONGA0"));	// 기본급1
        		this.dsUpdate.setColumn(0, "AM_ETCPAY1", this.dsTotalCalcurate.getColumn(0, "AM_ETCPAY0"));	// 기타수당1
        		this.dsUpdate.setColumn(0, "FR_SALARY2", nexacro.replaceAll(this.divData.form.divData02.form.staDT_FROM1.text, "/", ""));// 시작일2
        		this.dsUpdate.setColumn(0, "TO_SALARY2", nexacro.replaceAll(this.divData.form.divData02.form.staDT_TO1.text, "/", ""));	// 종료일2
        		this.dsUpdate.setColumn(0, "AM_SALARY2", this.dsTotalCalcurate.getColumn(0, "AM_WONGA1"));	// 기본급2
        		this.dsUpdate.setColumn(0, "AM_ETCPAY2", this.dsTotalCalcurate.getColumn(0, "AM_ETCPAY1"));	// 기타수당2
        		this.dsUpdate.setColumn(0, "FR_SALARY3", nexacro.replaceAll(this.divData.form.divData02.form.staDT_FROM2.text, "/", ""));// 시작일3
        		this.dsUpdate.setColumn(0, "TO_SALARY3", nexacro.replaceAll(this.divData.form.divData02.form.staDT_TO2.text, "/", ""));	// 종료일3
        		this.dsUpdate.setColumn(0, "AM_SALARY3", this.dsTotalCalcurate.getColumn(0, "AM_WONGA2"));	// 기본급3
        		this.dsUpdate.setColumn(0, "AM_ETCPAY3", this.dsTotalCalcurate.getColumn(0, "AM_ETCPAY2"));	// 기타수당3
        		this.dsUpdate.setColumn(0, "FR_SALARY4", nexacro.replaceAll(this.divData.form.divData02.form.staDT_FROM3.text, "/", ""));// 시작일4
        		this.dsUpdate.setColumn(0, "TO_SALARY4", nexacro.replaceAll(this.divData.form.divData02.form.staDT_TO3.text, "/", ""));	// 종료일4
        		this.dsUpdate.setColumn(0, "AM_SALARY4", this.dsTotalCalcurate.getColumn(0, "AM_WONGA3"));	// 기본급4
        		this.dsUpdate.setColumn(0, "AM_ETCPAY4", this.dsTotalCalcurate.getColumn(0, "AM_ETCPAY3"));	// 기타수당4
        		this.dsUpdate.setColumn(0, "TT_BONUS", "");		// 상여합계
        		this.dsUpdate.setColumn(0, "CT_BONUS", "");		// 상여횟수
        		this.dsUpdate.setColumn(0, "AM_VACAALLOW", "");	// 연월차수당
        		this.dsUpdate.setColumn(0, "AM_ETCALLOW", "");	// 기타수당
        		this.dsUpdate.setColumn(0, "ID_UPDATE", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));	// 수정자
        		this.dsUpdate.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));				// 부서코드
        		this.dsUpdate.setColumn(0, "DT_START", this.dsList.getColumn(0, "DT_START"));				// 기산일자
        		this.dsUpdate.setColumn(0, "DT_SLIP_PLAN", this.dsList.getColumn(0, "DT_SLIP_PLAN"));				// 전표발행예정일자

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
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        // 사직서
        this.fnRetireDoc = function(){

        	var param = {};

        	var sitecd = this.dsSearch.getColumn(0, "CD_SITE");
        	var idno = this.dsSearch.getColumn(0, "NO_ID");
        	var strReportName = "/ds/cmbd0230jmsub2.ozr";

        	param.REPORT_NAME = strReportName;
        	param.JSONPARAM = "{\"sitecd\":\"" + sitecd +
        				   "\", \"idno\":\"" + idno + "\"}";
        	console.log(param);
        	this.gfnFormOpenNonAuth("DZU", "DZU_OZ", "", param, 900, 650);
        }

        // 퇴직금정산 신청서
        this.fnRetireJungsanD = function(){

        	var param = {};

        	var sitecd = this.dsSearch.getColumn(0, "CD_SITE");
        	var idno = this.dsSearch.getColumn(0, "NO_ID");
        	var retiredt = this.dsList.getColumn(0, "DT_RETIRE");
        	var strReportName = "/ds/cmbd0230jmsub1.ozr";

        	param.REPORT_NAME = strReportName;
        	param.JSONPARAM = "{\"sitecd\":\"" + sitecd +
        	               "\", \"idno\":\"" + idno +
        				   "\", \"retiredt\":\"" + retiredt + "\"}";
        	console.log(param);
        	this.gfnFormOpenNonAuth("DZU", "DZU_OZ", "", param, 900, 650);

        }

        // 퇴직급여 계산내용
        this.fnRetireReceipt = function(){

        	var param = {};

        	var sitecd = this.dsSearch.getColumn(0, "CD_SITE");
        	var sitenm = this.ccfCD_SITE.form.DSTextBox.value ;
        	var idno = this.dsSearch.getColumn(0, "NO_ID");
        	var strReportName = "/ds/cmbd0230jm_2016.ozr";

        	param.REPORT_NAME = strReportName;
        	param.JSONPARAM = "{\"sitecd\":\"" + sitecd +
        	               "\", \"sitenm\":\"" + sitenm +
        				   "\", \"idno\":\"" + idno + "\"}";
        	console.log(param);
        	this.gfnFormOpenNonAuth("DZU", "DZU_OZ", "", param, 900, 650);

        }

        this.fnWorkPopupOpen = function(){
        	var param = {
        		CD_SITE : this.dsSearch.getColumn(0, "CD_SITE")
        		,NO_ID : this.dsSearch.getColumn(0, "NO_ID")
        		,DS_NAME : this.dsSearch.getColumn(0, "DS_NAME")
        	};

        	// 화면 오픈.
            this.gfnFormOpen("DSE", "DSE_WORKLIST", "fnPopupCallback", param, 320, 490);
        }

        // 공동 그리드 추가 버튼
        this.divData_divData06_btnAddRow_onclick = function(obj,e)
        {
            this.gfnGridAdd(this.dxGrid);
        };

        // 공동 그리드 삭제 버튼
        this.divData_divData06_btnDelRow_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGrid);
        };

        // 공종 저장 버튼.
        this.divData_divData06_btnSaveGrid_onclick = function(obj,e)
        {
        	//중복 valid
        	for(var i = 0; i < this.dsListSub3.rowcount; i++){
        		var flag1 = this.gfnGetFlag(this.dsListSub3, i);
        		if(flag1 == "I" || flag1 == "U"){
        			for(var j = 0; j < this.dsListSub3.rowcount; j++){
        				var flag2 = this.gfnGetFlag(this.dsListSub3, j);
        				if(flag2 != "D" && i != j ){
        					if(this.dsListSub3.getColumn(i, "CD_COST") == this.dsListSub3.getColumn(j, "CD_COST")){
        						this.gfnAlert("동일한 공종은 입력이 불가능합니다.");
        						return true;
        					}
        				}
        			}
        		}
        	}

        	var AM_TOIJIK_TOT = this.divData.form.divData03.form.ctxtAM_TOIJIK_TOT.value;
        	var AM_COST_TOTAL = 0;
        	for(var i = 0; i < this.dsListSub3.rowcount; i++){
        		var flag = this.gfnGetFlag(this.dsListSub3, i);
        		if(flag != "D"){
        			AM_COST_TOTAL = AM_COST_TOTAL + this.dsListSub3.getColumn(i, "AM_COST");
        		}
        	}

        	if(AM_COST_TOTAL != AM_TOIJIK_TOT){
        		this.gfnAlert("퇴직급여와 공종금액 합계가 다릅니다.");
        		return true;
        	}

        	this.dsListSub3Save.clearData();

        	for (var i = 0; i < this.dsListSub3.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub3, i);
        		var nrow = this.dsListSub3Save.addRow();

        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				this.dsListSub3Save.setColumn(nrow, "YM_RETIRE", this.dsSearch.getColumn(0, "YM_RETIRE"));	// 적용년월
        				this.dsListSub3Save.setColumn(nrow, "ID_RESIDENT", this.dsSearch.getColumn(0, "NO_ID"));	// 직번
        				this.dsListSub3Save.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        				this.dsListSub3Save.setColumn(nrow, "CD_COST", this.dsListSub3.getColumn(i, "CD_COST"));	// 공종코드
        				this.dsListSub3Save.setColumn(nrow, "DS_COST", this.dsListSub3.getColumn(i, "DS_COST"));	// 공종명
        				this.dsListSub3Save.setColumn(nrow, "AM_COST", this.dsListSub3.getColumn(i, "AM_COST"));	// 공종금액
        				this.dsListSub3Save.setColumn(nrow, "ID_USER", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));	// 입력,수정자
        				this.dsListSub3Save.setColumn(nrow, "TY_STATUS", flag);	// 상태값(입력:I,수정:U,삭제:D)
        		}
        	}

        	if (this.dsListSub3Save.rowcount == 0) return;

        	var strSvcId    = "gridSave";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "gridSave=dsListSub3Save";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnApprovalPopupOpen = function(){

        	if (this.dsList.rowcount < 1) { return false; }

        	if(!this.gfnIsNull(this.gfnGetFormStatus(this))){
        		this.gfnAlert("수정사항 저장 후 품의서 작성이 가능합니다.");
        		return;
        	}

        	var AM_TOIJIK_TOT = this.divData.form.divData03.form.ctxtAM_TOIJIK_TOT.value;
        	var AM_COST_TOTAL = 0;
        	for(var i = 0; i < this.dsListSub3.rowcount; i++){
        		var flag = this.gfnGetFlag(this.dsListSub3, i);
        		if(flag != "D"){
        			AM_COST_TOTAL = AM_COST_TOTAL + this.dsListSub3.getColumn(i, "AM_COST");
        		}
        	}

        	if(AM_COST_TOTAL != AM_TOIJIK_TOT){
        		this.gfnAlert("퇴직급여와 공종금액 합계가 다릅니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsListSub4.getColumn(0, "RETIREDOC_NM_FILE"))){
        		this.gfnAlert("사직서를 첨부하여 주시기 바랍니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsListSub4.getColumn(0, "PAY_ASKDOC_NM_FILE"))){
        		this.gfnAlert("퇴직금 정산신청서를 첨부하여 주시기 바랍니다.");
        		return false;
        	}

        	this.gfnConfirm("결재요청 하시겠습니까?",
        		function(svcId, args)
        		{
        			if (args)
        			{

        				if (args)
        			{
        				this.dsApprove.clearData();
        				this.dsApprove.addRow();

        				this.dsApprove.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsApprove.setColumn(0, "YM_RETIRE", this.dsSearch.getColumn(0, "YM_RETIRE").substr(0,6));
        				this.dsApprove.setColumn(0, "ID_RESIDENT", this.dsSearch.getColumn(0, "NO_ID"));

        				var strSvcId    = "approve";
        				var strSvcType  = "grid";
        				var inProc		= "_dsProc";
        				var inData      = "approve=dsApprove";
        				var outData     = "dsApproveSeq=approve0";
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
        		}, "newApprove");
        }

        this.fnCallGfnApprove = function(){

        	var DETAIL = "";
        	var DS_COST = "";
        	var AM_COST = "";

        	for(var i = 0; i < this.dsListSub.rowcount; i++){	// 금액 목록
        		DETAIL += "<tr>";
        		DETAIL += "<td class='td1'>" + this.dsListSub.getColumn(i, "DT_FROM").substr(0,4) + "-" + this.dsListSub.getColumn(i, "DT_FROM").substr(4,2) + "</td>";
        		DETAIL += "<td class='td1_r'>" + this.dsListSub.getColumn(i, "QN_WORK") + "</td>";
        		DETAIL += "<td class='td1_r'>" + this.gfnAppendComma(this.dsListSub.getColumn(i, "AM_INCOME")) + "</td>";
        		DETAIL += "</tr>";
        	}

        	for(var i=0; i < this.dsListSub3.rowcount; i++){
        		var brTag = "<br>";
        		if(i == this.dsListSub3.rowcount){
        			brTag = "";
        		}
        		DS_COST += this.dsListSub3.getColumn(i, "DS_COST") + "(" + this.dsListSub3.getColumn(i, "CD_COST") + ")" + brTag;
        		AM_COST += this.gfnAppendComma(this.dsListSub3.getColumn(i, "AM_COST")) + brTag;
        	}

        	var sApType = "DS03";
        	var sTitle  = "퇴직금 계산서";
        	var sRef01  = this.dsSearch.getColumn(0, "CD_SITE");
        	var sRef02  = this.dsSearch.getColumn(0, "YM_RETIRE");
        	var sRef03  = this.dsSearch.getColumn(0, "NO_ID");
        	var sRef04  = this.dsApproveSeq.getColumn(0, "DS03_SEQ");
        	var oParam  = {};

        	// 1.대상자 정보
        	oParam.DS_HNAME = this.dsList.getColumn(0, "DS_HNAME");	// 성명
        	oParam.NO_JUMIN = this.dsList.getColumn(0, "NO_JUMIN").substr(0, 6) + "-" + this.dsList.getColumn(0, "NO_JUMIN").substr(6);	// 주민번호
        	oParam.DS_ADDR = this.dsList.getColumn(0, "DS_ADDR");	// 주소
        	oParam.DT_JOIN = this.dsList.getColumn(0, "DT_JOIN").substr(0,4) + "-" + this.dsList.getColumn(0, "DT_JOIN").substr(4,2) + "-" + this.dsList.getColumn(0, "DT_JOIN").substr(6,2);  // 입사일자
        	oParam.DT_RETIRE = this.dsList.getColumn(0, "DT_RETIRE").substr(0,4) + "-" + this.dsList.getColumn(0, "DT_RETIRE").substr(4,2) + "-" + this.dsList.getColumn(0, "DT_RETIRE").substr(6,2);	// 퇴사일자
        	oParam.DT_SLIP_PLAN = this.dsList.getColumn(0, "DT_SLIP_PLAN").substr(0,4) + "-" + this.dsList.getColumn(0, "DT_SLIP_PLAN").substr(4,2) + "-" + this.dsList.getColumn(0, "DT_SLIP_PLAN").substr(6,2);// 지급일자
        	oParam.QN_WORKYEAR = this.dsList.getColumn(0, "QN_WORKYEAR");	// 년
        	oParam.QN_WORKMONTH = this.dsList.getColumn(0, "QN_WORKMONTH");	// 월
        	oParam.QN_WORKDAY = this.dsList.getColumn(0, "QN_WORKDAY");	// 일

        	// 2.평균임금 산정내역
        	oParam.SUM_WORK = this.divData.form.divData02.form.ctxtQN_WORK_TOT.value;	// 일수
        	oParam.SUM_INCOME = this.gfnAppendComma(this.divData.form.divData02.form.ctxtAM_INCOME_TOT.value);	// 임금지급액

        	// 3.과세표준 및 퇴직소득액 계산
        	oParam.AM_RETIREINCOME = this.gfnAppendComma(this.dsListSub2.getColumn(0, "AM_RETIREINCOME"));	// 퇴직소득
        	oParam.AM_YEAR_GONGJE = this.gfnAppendComma(this.dsListSub2.getColumn(0, "AM_YEAR_GONGJE"));	// 근속연수공제
        	oParam.AM_HWANSAN = this.gfnAppendComma(this.dsListSub2.getColumn(0, "AM_HWANSAN"));	// 환산급여
        	oParam.AM_HWANSANINCOME = this.gfnAppendComma(this.dsListSub2.getColumn(0, "AM_HWANSANINCOME"));	// 환산급여별공제
        	oParam.AM_STDRETINCTAXTATION = this.gfnAppendComma(this.dsListSub2.getColumn(0, "AM_STDRETINCTAXTATION"));	// 퇴직소득과세표준
        	oParam.AM_HWANSAN_TAX = this.gfnAppendComma(this.dsListSub2.getColumn(0, "AM_HWANSAN_TAX"));	// 퇴직산출세액
        	oParam.AM_TAX = this.gfnAppendComma(this.dsListSub2.getColumn(0, "AM_TAX"));	// 퇴직소득 산출세액
        	//oParam. = 0 ;	// 세액공제
        	oParam.AM_BEFOR_TAX = this.gfnAppendComma(this.dsListSub2.getColumn(0, "AM_BEFOR_TAX"));	// 기납부세액
        	oParam.AM_SODUK_TAX = this.gfnAppendComma(this.dsListSub2.getColumn(0, "AM_SODUK_TAX"));	// 신고대상액

        	// 4.공제액 및 차인지급액
        	oParam.AM_CHAGAM_SODUK_TAX = this.gfnAppendComma(this.dsListSub2.getColumn(0, "AM_CHAGAM_SODUK_TAX"));	// 소득세
        	oParam.AM_CHAGAM_JUMIN_TAX = this.gfnAppendComma(this.dsListSub2.getColumn(0, "AM_CHAGAM_JUMIN_TAX"));	// 지방소득세
        	oParam.SUM_CHAGAM_TAX = this.gfnAppendComma(this.dsListSub2.getColumn(0, "AM_CHAGAM_SODUK_TAX") + this.dsListSub2.getColumn(0, "AM_CHAGAM_JUMIN_TAX"));	// 세액계
        	oParam.AM_JIGUB = this.gfnAppendComma(this.dsListSub2.getColumn(0, "AM_JIGUB"));	// 차인지급액

        	// 5.기타
        	oParam.DS_COST = DS_COST;		// 공종
        	oParam.AM_COST = AM_COST;		// 금액
        	oParam.DS_REJECT = this.dsListSub4.getColumn(0, "DS_REJECT") == null ? "" : this.dsListSub4.getColumn(0, "DS_REJECT");	// 특기사항(평가)
        	oParam.AT_RETIREDOC = this.dsListSub4.getColumn(0, "AT_RETIREDOC_APPROVAL") == null ? "" : this.dsListSub4.getColumn(0, "AT_RETIREDOC_APPROVAL");	// 첨부문서1
        	oParam.AT_RETIRE_PAY_ASKDOC = this.dsListSub4.getColumn(0, "AT_RETIRE_PAY_ASKDOC_APPROVAL") == null ? "" : this.dsListSub4.getColumn(0, "AT_RETIRE_PAY_ASKDOC_APPROVAL");	// 첨부문서2
        	oParam.DETAIL = DETAIL;

        	this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, sRef04, oParam, "fnAprvDialogCallback");
        }

        this.fnCancelApproval = function(){

        	if (this.dsList.rowcount < 1) { return false; }

        	this.gfnConfirm("전자결재 취소후 재 전자결재가 완료되어야 전표발행이 가능합니다. 정말로 취소하시겠습니까?",
        		function(svcId, args)
        		{
        			if (args)
        			{

        				this.dsCancelApproval.clearData();
        				this.dsCancelApproval.addRow();

        				this.dsCancelApproval.setColumn(0, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        				this.dsCancelApproval.setColumn(0, "YM_RETIRE", nexacro.replaceAll(this.dsList.getColumn(0, "YM_RETIRE"), "-", ""));
        				this.dsCancelApproval.setColumn(0, "ID_RESIDENT", this.gfnTrim(this.dsList.getColumn(0, "ID_RESIDENT")));

        				var strSvcId    = "cancelApproval";
        				var strSvcType  = "save";
        				var inProc		= "_dsProc";
        				var inData      = "cancelApproval=dsCancelApproval";
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
        		}, "newApprove");


        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };

        this.divData_divData03_ctxt01_onchanged = function(obj,e)
        {
        	var AM_TOIJIK =  this.dsTotalCalcurate.getColumn(0, "AM_TOIJIK");
        	var AM_ETCALLOW = this.dsList.getColumn(0, "AM_ETCALLOW");
        	this.divData.form.divData03.form.ctxtAM_TOIJIK_TOT.set_value(nexacro.toNumber(AM_TOIJIK) + nexacro.toNumber(AM_ETCALLOW));
        	this.gfnSetFormStatus(this, "U");
        };

        this.divData_divData06_btnAT_RETIRE_PAY_ASKDOC_onclick = function(obj,e)
        {
        	this.fnSetFileDialog("PAY_ASKDOC");
        };

        this.divData_divData06_btnAT_RETIREDOC_onclick = function(obj,e)
        {
        	this.fnSetFileDialog("RETIREDOC");
        };

        this.fnSetFileDialog = function(fileFlag){
        	if(fileFlag == "RETIREDOC"){
        		this.fileDialog.set_filter("Text Files(*.html)|*.html|" );
        		this.fileDialog.open( "FileSave", FileDialog.SAVE, "%UserApp%" );
        	}else if(fileFlag == "PAY_ASKDOC"){
        		this.fileDialog2.set_filter("Text Files(*.html)|*.html|" );
        		this.fileDialog2.open( "FileSave", FileDialog.SAVE, "%UserApp%" );
        	}
        };

        this.fileDialog_onclose = function(obj,e)
        {
        	var file = e.virtualfiles[0];
        	var NEW_NM_FILE = file.filename;

        	this.fileUpTransfer.clearFileList();
        	this.fileUpTransfer.clearPostDataList();

        	var extnIdx = NEW_NM_FILE.lastIndexOf(".");

        	var extn = this.gfnRight(NEW_NM_FILE, NEW_NM_FILE.length - extnIdx).replace(".", "").toLowerCase();

        	var allowTypes = this.fileConfig.allowTypes;
        	if (allowTypes != null && allowTypes.indexOf(extn) > -1)
        	{
        		this.fileUpTransfer.addFile("file", file);
        		this.fileUpTransfer.setPostData("path", NEW_DS_PATH);
        		this.fileUpTransfer.setPostData("fileName", NEW_NM_FILE);
        		var NEW_DS_PATH = this.dsFile.getColumn(this.dsFile.rowposition, "DS_PATH") + this.dsSearch.getColumn(0, "NO_ID") + "/" + this.dsList.getColumn(0, "NO_SEQ");
        		this.fileUpTransfer.setPostData("path", NEW_DS_PATH);

        		var OLD_NM_FILE = this.dsListSub4.getColumn(this.dsListSub4.rowposition, "RETIREDOC_NM_FILE");
        		var OLD_DS_PATH = this.dsListSub4.getColumn(this.dsListSub4.rowposition, "RETIREDOC_DS_PATH");

        // 		this.dsRemove.setColumn(0, "filename", OLD_NM_FILE);
        // 		this.dsRemove.setColumn(0, "filepath", OLD_DS_PATH);
        		this.dsRemove.setColumn(0, "filename", this.gfnIsNull(OLD_NM_FILE) ? "" : OLD_NM_FILE);
        		this.dsRemove.setColumn(0, "filepath", this.gfnIsNull(OLD_DS_PATH) ? "" : OLD_DS_PATH);

        		this.fnRemoveFile();
        		//this.fileUpTransfer.upload(this.fileConfig.uploadUrl);

        		this.dsListSub4.setColumn(0, "RETIREDOC_NM_FILE", NEW_NM_FILE);
        		this.dsListSub4.setColumn(0, "RETIREDOC_DS_ETC", NEW_NM_FILE);
        	}
        	else
        	{
        		this.gfnAlert("결재 양식파일은 html 파일 이어야 합니다.");
        	}
        };

        this.fileDialog2_onclose = function(obj,e)
        {
        	var file = e.virtualfiles[0];
        	var NEW_NM_FILE = file.filename;

        	this.fileUpTransfer2.clearFileList();
        	this.fileUpTransfer2.clearPostDataList();

        	var extnIdx = NEW_NM_FILE.lastIndexOf(".");

        	var extn = this.gfnRight(NEW_NM_FILE, NEW_NM_FILE.length - extnIdx).replace(".", "").toLowerCase();

        	var allowTypes = this.fileConfig.allowTypes;
        	if (allowTypes != null && allowTypes.indexOf(extn) > -1)
        	{
        		this.fileUpTransfer2.addFile("file", file);
        		this.fileUpTransfer2.setPostData("fileName", NEW_NM_FILE);

        		var NEW_DS_PATH = this.dsFile2.getColumn(this.dsFile2.rowposition, "DS_PATH") + this.dsSearch.getColumn(0, "NO_ID") + "/" + this.dsList.getColumn(0, "NO_SEQ");
        		this.fileUpTransfer2.setPostData("path", NEW_DS_PATH);

        		var OLD_NM_FILE = this.dsListSub4.getColumn(this.dsListSub4.rowposition, "PAY_ASKDOC_NM_FILE");
        		var OLD_DS_PATH = this.dsListSub4.getColumn(this.dsListSub4.rowposition, "PAY_ASKDOC_DS_PATH");

        // 		this.dsRemove2.setColumn(0, "filename", OLD_NM_FILE);
        // 		this.dsRemove2.setColumn(0, "filepath", OLD_DS_PATH);
        		this.dsRemove2.setColumn(0, "filename", this.gfnIsNull(OLD_NM_FILE) ? "" : OLD_NM_FILE);
        		this.dsRemove2.setColumn(0, "filepath", this.gfnIsNull(OLD_DS_PATH) ? "" : OLD_DS_PATH);
        		this.fnRemoveFile2();
        		//this.fileUpTransfer2.upload(this.fileConfig.uploadUrl);

        		this.dsListSub4.setColumn(0, "PAY_ASKDOC_NM_FILE", NEW_NM_FILE);
        		this.dsListSub4.setColumn(0, "PAY_ASKDOC_DS_ETC", NEW_NM_FILE);

        	}
        	else
        	{
        		this.gfnAlert("결재 양식파일은 html 파일 이어야 합니다.");
        	}
        };

        this.fileUpTransfer_onsuccess = function(obj,e)
        {
        	if(e.code == 0)
        	{
        		if(e.datasets.length > 0)
        		{
        			this.dsSave.clearData();

        			var gdsUserInfo = this.gfnGetApplication().gdsUserInfo;
        			var RETIREDOC_NO_SEQ = this.dsListSub4.getColumn(this.dsListSub4.rowposition, "RETIREDOC_NO_SEQ");

        			var NO_ID = this.dsSearch.getColumn(0, "NO_ID");
        			var NO_SEQ = this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ");
        			var CD_GUBUN = this.dsFile.getColumn(this.dsFile.rowposition, "CD_GUBUN");
        			var DS_PATH = this.dsFile.getColumn(this.dsFile.rowposition, "DS_PATH");
        			var DS_ETC = this.dsFile.getColumn(this.dsFile.rowposition, "DS_ETC");

        			var nRow = this.dsSave.addRow();
        			this.dsSave.setColumn(nRow, "TY_SAVE", "D");
        			this.dsSave.setColumn(nRow, "NO_SEQ", RETIREDOC_NO_SEQ);

        			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        				var sFileName = e.datasets[0].getColumn(i, "filename");
        				var iFileSize = e.datasets[0].getColumn(i, "filesize");
        				var dirExptType = sFileName.lastIndexOf(".")+1;
        				var sFileType = sFileName.substr(dirExptType);
        				//var sIconImage = this.getFileIcon(sFileName);

        				var nRow = this.dsSave.addRow();
        				this.dsSave.setColumn(nRow, "TY_SAVE", "I");
        				this.dsSave.setColumn(nRow, "NO_SEQ", 0);
        				this.dsSave.setColumn(nRow, "CD_GUBUN", CD_GUBUN);
        				this.dsSave.setColumn(nRow, "DS_PATH", DS_PATH + NO_ID + "/" + NO_SEQ);
        				this.dsSave.setColumn(nRow, "NM_FILE", sFileName);
        				this.dsSave.setColumn(nRow, "SZ_FILE", iFileSize);
        				//this.dsSave.setColumn(nRow, "DS_ETC", DS_ETC);
        				this.dsSave.setColumn(nRow, "DS_ETC", sFileName);
        				this.dsSave.setColumn(nRow, "CD_REF1", NO_ID);
        				this.dsSave.setColumn(nRow, "CD_REF2", NO_SEQ);
        				this.dsSave.setColumn(nRow, "CD_REF3", "");
        				this.dsSave.setColumn(nRow, "ID_INSERT", gdsUserInfo.getColumn(gdsUserInfo.rowposition, "ID_USER"));
        			}
        			this.fnSaveFile();
        		}
        	}
        };


        this.fileUpTransfer2_onsuccess = function(obj,e)
        {
        	if(e.code == 0)
        	{
        		if(e.datasets.length > 0)
        		{
        			this.dsSave2.clearData();

        			var gdsUserInfo = this.gfnGetApplication().gdsUserInfo;
        			var PAY_ASKDOC_NO_SEQ = this.dsListSub4.getColumn(this.dsListSub4.rowposition, "PAY_ASKDOC_NO_SEQ");

        			var NO_ID = this.dsSearch.getColumn(0, "NO_ID");
        			var NO_SEQ = this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ");
        			var CD_GUBUN = this.dsFile2.getColumn(this.dsFile2.rowposition, "CD_GUBUN");
        			var DS_PATH = this.dsFile2.getColumn(this.dsFile2.rowposition, "DS_PATH");
        			var DS_ETC = this.dsFile2.getColumn(this.dsFile2.rowposition, "DS_ETC");

        			var nRow = this.dsSave2.addRow();
        			this.dsSave2.setColumn(nRow, "TY_SAVE", "D");
        			this.dsSave2.setColumn(nRow, "NO_SEQ", PAY_ASKDOC_NO_SEQ);

        			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        				var sFileName = e.datasets[0].getColumn(i, "filename");
        				var iFileSize = e.datasets[0].getColumn(i, "filesize");
        				var dirExptType = sFileName.lastIndexOf(".")+1;
        				var sFileType = sFileName.substr(dirExptType);

        				var nRow = this.dsSave2.addRow();
        				this.dsSave2.setColumn(nRow, "TY_SAVE", "I");
        				this.dsSave2.setColumn(nRow, "NO_SEQ", 0);
        				this.dsSave2.setColumn(nRow, "CD_GUBUN", CD_GUBUN);
        				this.dsSave2.setColumn(nRow, "DS_PATH", DS_PATH + NO_ID + "/" + NO_SEQ);
        				this.dsSave2.setColumn(nRow, "NM_FILE", sFileName);
        				this.dsSave2.setColumn(nRow, "SZ_FILE", iFileSize);
        				//this.dsSave2.setColumn(nRow, "DS_ETC", DS_ETC);
        				this.dsSave2.setColumn(nRow, "DS_ETC", sFileName);
        				this.dsSave2.setColumn(nRow, "CD_REF1", NO_ID);
        				this.dsSave2.setColumn(nRow, "CD_REF2", NO_SEQ);
        				this.dsSave2.setColumn(nRow, "CD_REF3", "");
        				this.dsSave2.setColumn(nRow, "ID_INSERT", gdsUserInfo.getColumn(gdsUserInfo.rowposition, "ID_USER"));
        			}
        			this.fnSaveFile2();
        		}
        	}

        };

        this.fnSaveFile = function()
        {
        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "saveFile";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "upload=dsSave:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnSaveFile2 = function()
        {
        	if (this.dsSave2.rowcount == 0) return;

        	var strSvcId    = "saveFile";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "upload=dsSave2:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnRemoveFile = function()
        {
        	if (this.dsRemove.rowcount == 0) return;

        	var strSvcId    = "removeFile";
        	var strSvcType  = "file/deleteFile";
        	var inProc		= "";
        	var inData      = "input=dsRemove:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnRemoveFile2 = function()
        {
        	if (this.dsRemove2.rowcount == 0) return;

        	var strSvcId    = "removeFile2";
        	var strSvcType  = "file/deleteFile";
        	var inProc		= "";
        	var inData      = "input=dsRemove2:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };


        this.divData_divData06_staAT_RETIREDOC_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsListSub4.getColumn(0, "RETIREDOC_NM_FILE"))) return;
        	this.fnDownload("RETIREDOC");
        };

        this.divData_divData06_staAT_RETIRE_PAY_ASKDOC_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsListSub4.getColumn(0, "PAY_ASKDOC_NM_FILE"))) return;
        	this.fnDownload("PAY_ASKDOC");
        };


        this.fnDownload = function(downFlag) {
        	var sFilename = this.dsListSub4.getColumn(0, downFlag + "_NM_FILE");
        	var sFilepath = this.dsListSub4.getColumn(0, downFlag + "_DS_PATH")+"/";

        	var encodeFileName = encodeURIComponent(sFilename);

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;
        	this.FileDownTransfer.set_url(surl);

        	this.FileDownTransfer.setPostData("path", sFilepath);
        	this.FileDownTransfer.setPostData("fileName", encodeFileName);

        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer.set_downloadfilename(sFilename);
        	}
        	this.FileDownTransfer.download();
        };
        this.divData_divData01_ctclDT_START_onchanged = function(obj,e)
        {
        	this.gfnSetFormStatus(this, "U");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divData01.form.ctclDT_START.addEventHandler("onchanged",this.divData_divData01_ctclDT_START_onchanged,this);
            this.divData.form.divData01.form.ctclDT_SLIP_PLAN.addEventHandler("onchanged",this.divData_divData01_ctclDT_START_onchanged,this);
            this.divData.form.divData03.form.ctxtAM_ETCALLOW.addEventHandler("onchanged",this.divData_divData03_ctxt01_onchanged,this);
            this.divData.form.divData06.form.objGrid.addEventHandler("onselectchanged",this.divData_objGrid1_onselectchanged,this);
            this.divData.form.divData06.form.btnAddRow.addEventHandler("onclick",this.divData_divData06_btnAddRow_onclick,this);
            this.divData.form.divData06.form.btnDelRow.addEventHandler("onclick",this.divData_divData06_btnDelRow_onclick,this);
            this.divData.form.divData06.form.btnSaveGrid.addEventHandler("onclick",this.divData_divData06_btnSaveGrid_onclick,this);
            this.divData.form.divData06.form.staAT_RETIREDOC.addEventHandler("onclick",this.divData_divData06_staAT_RETIREDOC_onclick,this);
            this.divData.form.divData06.form.btnAT_RETIREDOC.addEventHandler("onclick",this.divData_divData06_btnAT_RETIREDOC_onclick,this);
            this.divData.form.divData06.form.btnAT_RETIRE_PAY_ASKDOC.addEventHandler("onclick",this.divData_divData06_btnAT_RETIRE_PAY_ASKDOC_onclick,this);
            this.divData.form.divData06.form.staAT_RETIRE_PAY_ASKDOC.addEventHandler("onclick",this.divData_divData06_staAT_RETIRE_PAY_ASKDOC_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsTotalCalcurate.addEventHandler("oncolumnchanged",this.dsTotalCalcurate_oncolumnchanged,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTransfer.addEventHandler("onsuccess",this.fileUpTransfer_onsuccess,this);
            this.fileUpTransfer2.addEventHandler("onsuccess",this.fileUpTransfer2_onsuccess,this);
            this.fileDialog2.addEventHandler("onclose",this.fileDialog2_onclose,this);
        };
        this.loadIncludeScript("DSE_RETIRE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
