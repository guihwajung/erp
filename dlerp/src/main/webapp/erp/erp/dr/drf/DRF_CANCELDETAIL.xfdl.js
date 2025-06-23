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
            obj._setContents("<ColumnInfo><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CANCEL_B\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICETEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INTEREST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_OUTBREAKDELAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUJA_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BANKVENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANKVENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FORFEIT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LOANINTEREST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRFPR_CANCEL_DETAIL_SELECT</Col></Row><Row><Col id=\"SP\">DRFPR_CANCEL_ITEM_SELECT</Col><Col id=\"TARGET\">selectEtc</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DRFPR_CANCEL_RECEIVED_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DRFPR_CANCEL_APPROPRIATE_SELECT</Col></Row><Row><Col id=\"TARGET\">cancelUpdt</Col><Col id=\"SP\">DRFPR_CANCEL_UPDATE</Col></Row><Row><Col id=\"TARGET\">cancelDel</Col><Col id=\"SP\">DRFPR_CANCEL_RESTORE_SHINYOUNG</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CANCEL_B\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETURN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"NO_DONG\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_HO\"/><Col id=\"NO_CANCEL\"/><Col id=\"NO_CONTRACT\"/><Col id=\"NO_UNIONMEMBER\"/><Col id=\"NO_SIZE\"/><Col id=\"TY_TYPE\"/><Col id=\"TY_STATE\"/><Col id=\"DT_CANCEL_B\"/><Col id=\"DS_CONTRACTOR\"/><Col id=\"DT_RETURN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RETURN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">지급</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미지급</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListEtc", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SUKUM1\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SUKUM2\" type=\"STRING\" size=\"256\"/><Column id=\"UT_DISCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"STD_DISCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REFTEL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"UT_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"STD_DELAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_HO:0.0","10.0","33","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","ctxtNO_FLOOR:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","ctxtNO_DONG:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ACNTUNIT","staCD_CORP00:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_ACNTUNIT","ctxtDS_ACNTUNIT:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctxtCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP01","staCD_CORP:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("해약번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_CANCEL","staCD_CORP01:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_CONTRACT","ctxtNO_CANCEL:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP02","ctxtNO_CONTRACT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"360","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","0","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("평형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_CORP","staCD_CORP:-1","0","200","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staSZ_EARTH_TOTAL","staBgCD_CORP:-1","0","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("본계약상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgSZ_EARTH_TOTAL","staSZ_EARTH_TOTAL:-1","0","523","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_TYPE","0","staCD_CORP:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_text("본계약해약일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_TYPE","staTY_TYPE:-1","staBgCD_CORP:-1","200","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_OPTION","staBgTY_TYPE:-1","staSZ_EARTH_TOTAL:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_text("해약자명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_OPTION","staYN_OPTION:-1","staBgSZ_EARTH_TOTAL:-1","200","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_ADDRESS","0","staTY_TYPE:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_text("☎(자택)");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_ADDRESS","staDS_ADDRESS:-1","staBgTY_TYPE:-1","200","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","staBgDS_ADDRESS:-1","staYN_OPTION:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_TEL","staNO_TEL:-1","58","200","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_REFTEL","0","100","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_text("해약일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_REFTEL","staNO_REFTEL:-1","100","200","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staID_SUKUM","staBgNO_REFTEL:-1","100","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_text("해약사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgID_SUKUM","staID_SUKUM:-1","100","523","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_END","0","staNO_REFTEL:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_text("지급여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_END","119","staBgNO_REFTEL:-1","200","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_IPJU_START_END2","staBgDT_END:-1","staID_SUKUM:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_text("지급일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_IPJU_START_END2","staDT_IPJU_START_END2:-1","staBgID_SUKUM:-1","205","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_JUNGONG","0","staDT_END:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_text("지급이자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_JUNGONG","staYN_JUNGONG:-1","staBgDT_END:-1","200","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_DELAY","staBgYN_JUNGONG:-1","158","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("22");
            obj.set_text("대위변제원금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_DELAY","staTY_DELAY:-1","158","205","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoTY_RETURN","staYN_OPTION:-318","134","157","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("24");
            obj.set_innerdataset("dsTY_RETURN");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_TEL","staDS_ADDRESS:5","63","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("25");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SIZE","125","5","75","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("26");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_INTEREST","125","163","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_DELAY00","442","187","523","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_DELAY00","318","187","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("29");
            obj.set_text("환불은행/계좌(개인)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_JUNGONG00","119","187","200","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_PAYMENT","125","192","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("31");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_JUNGONG00","0","187","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("32");
            obj.set_text("환불금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_DELAY01","442","216","523","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_DELAY01","318","216","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("34");
            obj.set_text("환불은행(은행)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_JUNGONG01","0","216","319","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta01","0","250","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("36");
            obj.set_text("계약품목");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","279",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("37");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","641","29","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("38");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_CORP00","760","29","205","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_JUMIN","766","34","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("40");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_CORP01","641","58","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("41");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_CORP01","760","58","205","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_MOBILE","766","63","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_CORP02","646","129","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("44");
            obj.set_text("위약금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_CORP02","765","129","200","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_CORP03","646","158","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("46");
            obj.set_text("대위변제상환/이자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_CORP03","765","158","200","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta00","205","4","25","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("48");
            obj.set_text("㎡");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_TYPE","235","5","35","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("49");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta02","277","4","25","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("50");
            obj.set_text("형");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_STATE","448","5","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("51");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CONTRACTOR","448","34","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("52");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_OFFICETEL","448","63","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("53");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_CANCEL","125","105","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("54");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta03","292","163","25","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("55");
            obj.set_text("원");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta04","292","193","25","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("56");
            obj.set_text("원");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CANCEL","448","105","483","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("57");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_FORFEIT","771","134","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("58");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta05","938","134","25","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("59");
            obj.set_text("원");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta06","938","164","25","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("60");
            obj.set_text("원");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LOANINTEREST","771","163","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("61");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_OUTBREAKDELAY","448","163","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("62");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta07","615","164","25","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("63");
            obj.set_text("원");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("tclDT_RETURN","448","134","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("64");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_BANK_CANCEL","448","192","72","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("65");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta08","528","193","28","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_text("은행");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_GUJA_CANCEL","558","192","372","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("67");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_BANKVENDOR","448","221","108","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("68");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_BANKVENDOR","ctxtCD_BANKVENDOR:5","221","369","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("69");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_CANCEL_B","125","34","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("70");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:10",null,null,"0","0",null,null,"300",null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("약정/수납내역");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("예수금");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Static("sta01","0","10","72.69%","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("계상내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","sta01:5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","divData.form.divDataTop.form.crdoTY_RETURN","value","dsList","TY_RETURN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.ctxtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataTop.form.ctxtAM_INTEREST","value","dsList","AM_INTEREST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divSearch.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divSearch.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divSearch.form.ctxtCD_ACNTUNIT","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divSearch.form.ctxtNO_CANCEL","value","dsSearch","NO_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divSearch.form.ctxtNO_CONTRACT","value","dsSearch","NO_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataTop.form.ctxtAM_PAYMENT","value","dsList","AM_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.ctxtDT_CANCEL","value","dsList","DT_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataTop.form.ctxtAM_FORFEIT","value","dsList","AM_FORFEIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataTop.form.ctxtAM_LOANINTEREST","value","dsList","AM_LOANINTEREST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataTop.form.ctxtAM_OUTBREAKDELAY","value","dsList","AM_OUTBREAKDELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.divDataTop.form.tclDT_RETURN","value","dsSearch","DT_RETURN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tclDT_STARTAGREE_CHG","value","dsData","DT_STARTAGREE_CHG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.ctxtDT_CANCEL_B","value","dsSearch","DT_CANCEL_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataTop.form.ctxtNO_SIZE","value","dsSearch","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.ctxtTY_TYPE","value","dsSearch","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.ctxtTY_STATE","value","dsSearch","TY_STATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.ctxtDS_CONTRACTOR","value","dsSearch","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.ctxtNO_OFFICETEL","value","dsList","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.ctxtNO_JUMIN","value","dsList","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataTop.form.ctxtNO_MOBILE","value","dsList","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataTop.form.ctxtDS_CANCEL","value","dsList","DS_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataTop.form.ctxtDS_BANK_CANCEL","value","dsList","DS_BANK_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataTop.form.ctxtCD_BANKVENDOR","value","dsList","CD_BANKVENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataTop.form.ctxtDS_BANKVENDOR","value","dsList","DS_BANKVENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataTop.form.ctxtDS_GUJA_CANCEL","value","dsList","DS_GUJA_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DRF_CANCELDETAIL.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        //this.TY_STATUS = "";
        //this.valChgYn = "N";

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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_ACNTUNIT)) {
        		this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        		this.divSearch.form.ctxtDS_ACNTUNIT.set_value(this.getOwnerFrame().DS_ACNTUNIT);
        		this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        		this.dsSearch.setColumn(0, "NO_CANCEL", this.getOwnerFrame().NO_CANCEL);
        		this.dsSearch.setColumn(0, "NO_CONTRACT", this.getOwnerFrame().NO_CONTRACT);
        		this.dsSearch.setColumn(0, "NO_UNIONMEMBER", this.getOwnerFrame().NO_UNIONMEMBER);

        		this.dsSearch.setColumn(0, "NO_SIZE", this.getOwnerFrame().NO_SIZE);
        		this.dsSearch.setColumn(0, "TY_TYPE", this.getOwnerFrame().TY_TYPE);
        		this.dsSearch.setColumn(0, "TY_STATE", this.getOwnerFrame().TY_STATE);
        		this.dsSearch.setColumn(0, "DT_CANCEL_B", this.getOwnerFrame().DT_CANCEL_B);
        		this.dsSearch.setColumn(0, "DS_CONTRACTOR", this.getOwnerFrame().DS_CONTRACTOR);
        		this.dsSearch.setColumn(0, "DT_RETURN", this.getOwnerFrame().DT_PAYMENT);

        		this.FormBtns.Select.click();
        	}



        	//this.fnReadOnlyChange(true);
        	//this.fnBtnEnable(false);
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
        	this.btnCanDel = this.gfnFormButtonAdd("btnCanDel", "fnCanDel");
        	//this.btnItem = this.gfnFormButtonAdd("btnItem", "fnItem");
        	//this.btnAgree = this.gfnFormButtonAdd("btnAgree", "fnAgree");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGrid1 = this.divData.form.divDataBottom.form.tabData.tab1.form.objGrid1;
        	this.dxGrid2 = this.divData.form.divDataBottom.form.tabData.tab2.form.objGrid2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsListEtc, "DR", "DRF_CANCELDETAIL_CONS");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DR", "DRF_CANCELDETAIL_RECEIVED");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DR", "DRF_CANCELDETAIL_APPROPRIATE");
        };

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
        	this.dsSelect.addColumn("NO_UNIONMEMBER", "string");
        	this.dsSelect.addColumn("NO_CANCEL", "string");
        	this.dsSelect.addColumn("NO_CONTRACT", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_DONG", "string");
        	this.dsDelete.addColumn("NO_FLOOR", "string");
        	this.dsDelete.addColumn("NO_HO", "string");
        	this.dsDelete.addColumn("NO_UNIONMEMBER", "string");
        	this.dsDelete.addColumn("NO_CANCEL", "string");
        	this.dsDelete.addColumn("CD_SLIP", "string");
        	this.dsDelete.addColumn("ID_INSERT", "string");
        	this.dsDelete.addColumn("NO_CONTRACT", "string");


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

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelect.setColumn(0, "NO_CANCEL", this.dsSearch.getColumn(0, "NO_CANCEL"));
        	this.dsSelect.setColumn(0, "NO_CONTRACT", this.dsSearch.getColumn(0, "NO_CONTRACT"));

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

        this.fnSelectEtc = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelect.setColumn(0, "NO_CANCEL", this.dsSearch.getColumn(0, "NO_CANCEL"));
        	this.dsSelect.setColumn(0, "NO_CONTRACT", this.dsSearch.getColumn(0, "NO_CONTRACT"));

        	var strSvcId    = "selectEtc";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectEtc=dsSelect";
        	var outData     = "dsListEtc=selectEtc0";
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

        this.fnDetail = function() {
        	var tabIndex = this.fnGetTabIndex();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelect.setColumn(0, "NO_CANCEL", this.dsSearch.getColumn(0, "NO_CANCEL"));
        	this.dsSelect.setColumn(0, "NO_CONTRACT", this.dsSearch.getColumn(0, "NO_CONTRACT"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select" + tabIndex + "=dsSelect";
        	var outData     = "dsList" + tabIndex + "=select" + tabIndex + "0";
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
        	switch(this.fnGetTabIndex())
        	{
        		case 1 :
        			var nrow = this.gfnGridAdd(this.dxGrid1);
        		break;
        		case 2 :
        			var nrow = this.gfnGridAdd(this.dxGrid2);
        		break;
        	}


        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        	switch(this.fnGetTabIndex())
        	{
        		case 1 :
        			this.gfnGridDel(this.dxGrid1);
        		break;
        		case 2 :
        			this.gfnGridDel(this.dxGrid2);
        		break;
        	}
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
        	var validate = true;

        	// validate 선 체크 후 기능 살린뒤 조회되도록 설정.
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_ACNTUNIT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드를 입력하세요.", "fnVaidateCallback");
        	}

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
        		this.fnSelectEtc();
        	}
        	else if (svcID == "selectEtc") {
        		this.fnDetail();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "cancelDel") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.getParentContext().close(true);
        				//this.FormBtns.Select.click();
        			}

        			this.gfnAlert("삭제가 완료되었습니다.","fnCallback_callback");
        		} else {
        			this.gfnAlert(errorMsg);
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
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	/*
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.dsList1.clearData(); this.dsList2.clearData(); this.dsList3.clearData();
        		this.dsList.clearData(); this.dsListEtc.clearData();
        	}
        	*/
        };


        // 탭 관련 관리함수
        this.fnGetTabIndex = function()
        {
        	var index = -1;

        	var text = this.divData.form.divDataBottom.form.tabData.tabpages[this.divData.form.divDataBottom.form.tabData.tabindex].text;

        	switch(text)
        	{
        		case "약정/수납내역" : index = 1;
        			break;
        		case "예수금" : index = 2;
        			break;
        	}

        	return index;
        }

        this.divData_tabData_onchanged = function(obj,e)
        {
        	if(this.dsList.rowcount == 0) return;

        	this.fnDetail();
        };



        // 별도계약해약복원 버튼 클릭시 팝업화면 호출
         this.fnCanDel = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsList.rowcount < 1) { return false; }

        	var msg = "";
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "CD_SLIP"))){
        		msg = "전표번호: " + this.dsList.getColumn(0, "CD_SLIP") + "를 취소한 후 해약건을 복원합니다.\n계속진행하시겠습니까?";
        	}else{
        		msg = "별도계약 해약건을 복원하시겠습니까?";
        	}

        	this.gfnConfirm(msg, "fnCanDel_callback");
        }

        // 등록삭제 버튼 클릭 후 callback
        this.fnCanDel_callback = function(strId, val)
        {
        	if(val == true) {
        		this.fnExec();
        	}
        }

        /*
         *	등록삭제 처리
         */
        this.fnExec = function() {

        	this.dsDelete.clearData();

        	this.dsDelete.addRow();

        	this.dsDelete.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsDelete.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsDelete.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsDelete.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsDelete.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsDelete.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsDelete.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsDelete.setColumn(0, "NO_CANCEL", this.dsSearch.getColumn(0, "NO_CANCEL"));
        	this.dsDelete.setColumn(0, "CD_SLIP", nexacro.replaceAll(this.dsList.getColumn(0, "CD_SLIP"), "-", ""));
        	this.dsDelete.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsDelete.setColumn(0, "NO_CONTRACT", this.dsSearch.getColumn(0, "NO_CONTRACT"));

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "cancelDel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cancelDel=dsDelete";
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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divDataTop.form.objGrid.addEventHandler("oncelldblclick",this.divData_divDataTop_objGrid_oncelldblclick,this);
            this.divData.form.divDataBottom.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRF_CANCELDETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
