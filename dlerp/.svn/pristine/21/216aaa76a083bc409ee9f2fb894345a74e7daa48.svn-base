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
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BUNYANG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_PSIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DISTRICT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RECPOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICETEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPTAE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BUNYANGPLAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUNYANGGET\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_KASU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MLEASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MANAGEMENT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LEASEKASU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_LEASE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LEASE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RENEW\" type=\"INT\" size=\"256\"/><Column id=\"YN_EBILL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUPLAN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJU\" type=\"STRING\" size=\"256\"/><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_VACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LEASE_DELAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MINAP_LEASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_AUTOLEASE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TRANSFER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_JOINT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APPQUIT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTRACT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLCPR_CONTRACT_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLBPR_CONTRACTOR_UPDATE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DLBPR_RECEIVED_SELECT_DT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DLBPR_APPROPRIATE_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DLBPR_LAWSUIT_SELECT</Col></Row><Row><Col id=\"TARGET\">insert3</Col><Col id=\"SP\">DLBPR_LAWSUIT_INSERT</Col></Row><Row><Col id=\"TARGET\">update3</Col><Col id=\"SP\">DLBPR_LAWSUIT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete3</Col><Col id=\"SP\">DLBPR_LAWSUIT_DELETE</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DRCPR_SETUP_SELECT</Col></Row><Row><Col id=\"TARGET\">insert4</Col><Col id=\"SP\">DRCPR_SETUP_INSERT</Col></Row><Row><Col id=\"TARGET\">update4</Col><Col id=\"SP\">DRCPR_SETUP_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete4</Col><Col id=\"SP\">DRCPR_SETUP_DELETE</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DLBPR_LOAN_APPLY_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">select5_2</Col><Col id=\"SP\">DLBPR_LOANRECEIVED_SELECT</Col></Row><Row><Col id=\"TARGET\">select6</Col><Col id=\"SP\">DLBPR_CANCEL_HISTORY_SELECT</Col></Row><Row><Col id=\"TARGET\">select7</Col><Col id=\"SP\">DRBPR_TRANSFERHISTORY_SELECT</Col></Row><Row><Col id=\"TARGET\">recovery</Col><Col id=\"SP\">DLBPR_NOMINALTRANSFER_RECOVERY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONTRACTOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">P</Col><Col id=\"DS_CODE\">개인</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">법인</Col></Row><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">개인사업자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_AUTOLEASE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">자동이체</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">수동이체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_JOINT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">있음</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList5", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList5_2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList6", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList7", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ACNTUNIT","ctxtCD_ACNTUNIT:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_DONG","ctxtDS_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("동층호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staNO_DONG:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("cbtnNO_DONGHO","ctxtNO_HO:0.0","10.0","25","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_CF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","60%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_SIZE","0","staTitle:10","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("면적평형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_SIZE","staNO_SIZE:-1","staTitle:10","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_DISTRICT","staBgNO_SIZE:-1","staTitle:10","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("군/OPTION");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_DISTRICT","staTY_DISTRICT:-1","staTitle:10","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_IPJUPLAN","staBgTY_DISTRICT:-1","staTitle:10","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("입주(예정)일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_IPJUPLAN","staDT_IPJUPLAN:-1","staTitle:10","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_OPTION","0","staNO_SIZE:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_text("별도계약");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_OPTION","staYN_OPTION:-1","staBgNO_SIZE:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_STATE","staBgYN_OPTION:-1","staTY_DISTRICT:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_text("입주상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_STATE","staTY_STATE:-1","staBgTY_DISTRICT:-1","90","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_BUNYANG","staBgTY_STATE:-1","staTY_DISTRICT:-1","68","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_text("분양구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_BUNYANG","staTY_BUNYANG:-1","staBgTY_DISTRICT:-1","90","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_IPJUPLAN_G","staBgTY_BUNYANG:-1","staDT_IPJUPLAN:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_text("입주가산일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_IPJUPLAN_G","staDT_IPJUPLAN_G:-1","staBgDT_IPJUPLAN:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_CONTRACT","0","staYN_OPTION:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_CONTRACT","staYN_OPTION:-1","staBgYN_OPTION:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_LEASE","staBgDT_CONTRACT:-1","staTY_STATE:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_LEASE","staDT_LEASE:-1","staBgTY_STATE:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_RENEW","staBgDT_LEASE:-1","staDT_IPJUPLAN_G:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("19");
            obj.set_text("재계약");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_RENEW","staNO_RENEW:-1","staBgDT_IPJUPLAN_G:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_CONTRACTOR","0","staDT_CONTRACT:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("21");
            obj.set_text("계약자명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_CONTRACTOR","staDS_CONTRACTOR:-1","staBgDT_CONTRACT:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_JUMIN","staBgDS_CONTRACTOR:-1","staDT_LEASE:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("23");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_JUMIN","staNO_JUMIN:-1","staBgDT_LEASE:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_CONTRACTOR","staBgNO_JUMIN:-1","staNO_RENEW:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("25");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_CONTRACTOR","staTY_CONTRACTOR:-1","staBgNO_RENEW:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","0","staDS_CONTRACTOR:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_text("☎(자택)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_TEL","staNO_TEL:-1","staBgDS_CONTRACTOR:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_OFFICETEL","staBgNO_TEL:-1","staNO_JUMIN:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("29");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_OFFICETEL","staNO_OFFICETEL:-1","staBgNO_JUMIN:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_MOBILE","staBgNO_OFFICETEL:-1","staTY_CONTRACTOR:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("31");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_MOBILE","staNO_MOBILE:-1","staBgTY_CONTRACTOR:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_POST","0","staNO_TEL:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("33");
            obj.set_text("현주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_POST","staNO_POST:-1","staBgNO_TEL:-1","984","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_RECPOST","0","staNO_POST:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("35");
            obj.set_text("주민등록주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_RECPOST","staNO_RECPOST:-1","staBgNO_POST:-1","984","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","staNO_RECPOST:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("37");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_VENDOR","staCD_VENDOR:-1","staBgNO_RECPOST:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_UPTAE","staBgCD_VENDOR:-1","staNO_RECPOST:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("39");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_UPTAE","staDS_UPTAE:-1","staBgNO_RECPOST:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_UPJONG","staBgDS_UPTAE:-1","staNO_RECPOST:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("41");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_UPJONG","staDS_UPJONG:-1","staBgNO_RECPOST:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","0","staCD_VENDOR:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_VENDOR","staDS_VENDOR:-1","staBgCD_VENDOR:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_AUTOLEASE","staBgDS_VENDOR:-1","staDS_UPTAE:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("45");
            obj.set_text("세금계산서발급구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_AUTOLEASE","staYN_AUTOLEASE:-1","staBgDS_UPTAE:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL","staBgYN_AUTOLEASE:-1","staDS_UPJONG:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("47");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_EMAIL","staDS_EMAIL:-1","staBgDS_UPJONG:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_TRANSFER","0","staDS_VENDOR:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("49");
            obj.set_text("명의변경사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_TRANSFER","staDS_TRANSFER:-1","staBgDS_VENDOR:-1","615","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_JOINT","staBgDS_TRANSFER:-1","staDS_EMAIL:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("51");
            obj.set_text("공동명의계약자여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_JOINT","staYN_JOINT:-1","staBgDS_EMAIL:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK","0","staDS_TRANSFER:-1","100","60",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("53");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_REMARK","staDS_REMARK:-1","staBgDS_TRANSFER:-1","984","60",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_BUNYANGPLAN","0","staDS_REMARK:20","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("55");
            obj.set_text("약정보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_BUNYANGPLAN","staAM_BUNYANGPLAN:-1","staBgDS_REMARK:20","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_BUNYANGGET","staBgAM_BUNYANGPLAN:-1","staDS_REMARK:20","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("57");
            obj.set_text("수납분양금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_BUNYANGGET","staAM_BUNYANGGET:-1","staBgDS_REMARK:20","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_KASU","staBgAM_BUNYANGGET:-1","staDS_REMARK:20","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("59");
            obj.set_text("보증금예수금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_KASU","staAM_KASU:-1","staBgDS_REMARK:20","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_MLEASE","staBgAM_KASU:-1","staDS_REMARK:20","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("61");
            obj.set_text("월임대료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_MLEASE","staAM_MLEASE:-1","staBgDS_REMARK:20","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_SIZE","staNO_SIZE:5","staTitle:15","60","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("63");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staSIZE","ctxtNO_SIZE:5","staTitle:15","30","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("64");
            obj.set_text("면적");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtPNO_SIZE","staSIZE:5","staTitle:15","60","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("65");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staPSIZE","ctxtPNO_SIZE:5","staTitle:15","20","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_text("평");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_TYPE","staPSIZE:5","staTitle:15","30","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("67");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTYPE","ctxtTY_TYPE:5","staTitle:15","20","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("68");
            obj.set_text("형");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_DISTRICT","staTY_DISTRICT:5","staTitle:15","50","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("69");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfRT_OPTION","ctxtTY_DISTRICT:4","staTitle:15","180","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DRX_CFDistrict_CodeFind");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("70");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_IPJUPLAN","staDT_IPJUPLAN:5","staTitle:15","110","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("71");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtYN_OPTION","staYN_OPTION:5","ctxtNO_SIZE:9","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("72");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_STATE","staTY_STATE:5","ctxtNO_SIZE:9","80","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("73");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_BUNYANG","staTY_BUNYANG:5","ctxtNO_SIZE:9","80","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("74");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_IPJUPLAN_G","staDT_IPJUPLAN_G:5","ctxtNO_SIZE:9","110","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("75");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_CONTRACT","staDT_CONTRACT:5","ctxtYN_OPTION:9","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("76");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_LEASE_FR","staDT_LEASE:5","ctxtYN_OPTION:9","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("77");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_LEASE_range","ctxtDT_LEASE_FR:5","ctxtYN_OPTION:9","10","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("78");
            obj.set_text("~");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_CONTRACT_TO","staDT_LEASE_range:5","ctxtYN_OPTION:9","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("79");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_RENEW","staNO_RENEW:5","ctxtYN_OPTION:9","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("80");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staRENEW","ctxtNO_RENEW:5","ctxtYN_OPTION:9","20","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("81");
            obj.set_text("차");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CONTRACTOR","staDS_CONTRACTOR:5","ctxtDT_CONTRACT:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("82");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_JUMIN","staNO_JUMIN:5","ctxtDT_CONTRACT:9","234","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("83");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoTY_CONTRACTOR","staTY_CONTRACTOR:5","ctxtDT_CONTRACT:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("84");
            obj.set_innerdataset("dsTY_CONTRACTOR");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_TEL","staNO_TEL:5","ctxtDS_CONTRACTOR:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("85");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_OFFICETEL","staNO_OFFICETEL:5","ctxtDS_CONTRACTOR:9","234","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("86");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_MOBILE","staNO_MOBILE:5","ctxtDS_CONTRACTOR:9","177","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("87");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfNO_POST","staNO_POST:5","ctxtNO_TEL:9","350","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("88");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR2","ccfNO_POST:5","ctxtNO_TEL:9","300","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("89");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfNO_RECPOST","staNO_RECPOST:5","ccfNO_POST:9","350","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("90");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_RECADDR2","ccfNO_RECPOST:5","ccfNO_POST:9","300","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("91");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_VENDOR","staCD_VENDOR:5","ccfNO_RECPOST:9","180","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("92");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_UPTAE","staDS_UPTAE:5","ccfNO_RECPOST:9","180","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("93");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_UPJONG","staDS_UPJONG:5","ccfNO_RECPOST:9","180","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("94");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR","staDS_VENDOR:5","ctxtCD_VENDOR:9","180","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("95");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoYN_AUTOLEASE","staYN_AUTOLEASE:5","ctxtCD_VENDOR:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("96");
            obj.set_innerdataset("dsYN_AUTOLEASE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_EMAIL","staDS_EMAIL:5","ctxtCD_VENDOR:9","180","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("97");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_TRANSFER","staDS_TRANSFER:5","ctxtDS_VENDOR:9","603","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("98");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoYN_JOINT","staYN_JOINT:5","ctxtDS_VENDOR:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("99");
            obj.set_innerdataset("dsYN_JOINT");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new TextArea("ctxtDS_REMARK","staDS_REMARK:5","ctxtDS_TRANSFER:9","970","50",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("100");
            obj.set_readonly("false");
            obj.set_wordWrap("char");
            obj.set_visible("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BUNYANGPLAN","staAM_BUNYANGPLAN:5","ctxtDS_REMARK:30","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("101");
            obj.set_value("");
            obj.set_format("#,#0");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BUNYANGGET","staAM_BUNYANGGET:5","ctxtDS_REMARK:30","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("102");
            obj.set_value("");
            obj.set_format("#,#0");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_KASU","staAM_KASU:5","ctxtDS_REMARK:30","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("103");
            obj.set_value("");
            obj.set_format("#,#0");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_MLEASE","staAM_MLEASE:5","ctxtDS_REMARK:30","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("104");
            obj.set_value("");
            obj.set_format("#,#0");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
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

            obj = new Grid("objGrid2","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("제한사항");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("설정사항");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid4","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("융자내역");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid5","5","5","300",null,null,"5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab5.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGrid5_2","objGrid5:5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab5.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Tabpage("tab6",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("해약HISTORY");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid6","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab6.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Tabpage("tab7",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("명의변경HISTORY");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid7","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab7.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab7.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_ACNTUNIT","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_ACNTUNIT","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataTop.form.ctxtNO_SIZE","value","dsList","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.ctxtPNO_SIZE","value","dsList","NO_PSIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.ctxtTY_TYPE","value","dsList","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.ctxtTY_DISTRICT","value","dsList","TY_DISTRICT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.ccfRT_OPTION.form.CDTextBox","value","dsList","RT_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.ccfRT_OPTION.form.DSTextBox","value","dsList","DS_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.ctclDT_IPJUPLAN","value","dsList","DT_IPJUPLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.ctxtYN_OPTION","value","dsList","YN_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataTop.form.ctxtTY_STATE","value","dsList","TY_STATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataTop.form.ctxtTY_BUNYANG","value","dsList","TY_BUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataTop.form.ctclDT_IPJUPLAN_G","value","dsList","DT_IPJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataTop.form.ctxtDT_CONTRACT","value","dsList","DT_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataTop.form.ctxtDT_LEASE_FR","value","dsList","DT_LEASE_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataTop.form.ctxtDT_CONTRACT_TO","value","dsList","DT_LEASE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataTop.form.ctxtNO_RENEW","value","dsList","NO_RENEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataTop.form.ctxtDS_CONTRACTOR","value","dsList","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataTop.form.ctxtNO_JUMIN","value","dsList","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataTop.form.crdoTY_CONTRACTOR","value","dsList","TY_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataTop.form.ctxtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataTop.form.ctxtNO_OFFICETEL","value","dsList","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataTop.form.ctxtNO_MOBILE","value","dsList","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataTop.form.ccfNO_POST.form.CDTextBox","value","dsList","NO_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataTop.form.ccfNO_POST.form.DSTextBox","value","dsList","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataTop.form.ctxtDS_ADDR2","value","dsList","DS_ADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataTop.form.ccfNO_RECPOST.form.CDTextBox","value","dsList","NO_RECPOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataTop.form.ccfNO_RECPOST.form.DSTextBox","value","dsList","DS_RECADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataTop.form.ctxtDS_RECADDR2","value","dsList","DS_RECADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataTop.form.ctxtCD_VENDOR","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataTop.form.ctxtDS_UPTAE","value","dsList","DS_UPTAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divDataTop.form.ctxtDS_UPJONG","value","dsList","DS_UPJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divDataTop.form.ctxtDS_VENDOR","value","dsList","DS_VENDOR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divDataTop.form.crdoYN_AUTOLEASE","value","dsList","YN_AUTOLEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.divDataTop.form.ctxtDS_EMAIL","value","dsList","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divDataTop.form.ctxtDS_TRANSFER","value","dsList","DS_TRANSFER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.divDataTop.form.crdoYN_JOINT","value","dsList","YN_JOINT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.divDataTop.form.ctxtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.divDataTop.form.ctxtAM_BUNYANGPLAN","value","dsList","AM_BUNYANGPLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.divDataTop.form.ctxtAM_BUNYANGGET","value","dsList","AM_BUNYANGGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.divDataTop.form.ctxtAM_KASU","value","dsList","AM_KASU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.divDataTop.form.ctxtAM_MLEASE","value","dsList","AM_MLEASE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLB_CONTRACTOR.xfdl", function() {
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

        	this.dsSearch.set_enableevent(false);
        	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsSearch.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        	this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().DONG);
        	this.dsSearch.setColumn(0, "NO_FLOOR", this.getOwnerFrame().FLOOR);
        	this.dsSearch.setColumn(0, "NO_HO", this.getOwnerFrame().HO);
        	this.dsSearch.set_enableevent(true);
        	this.FormBtns.Select.click();

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
        	this.btnTransfer = this.gfnFormButtonAdd("btnTransfer", "fnTransfer"); // 명의변경
        	this.btnCancel = this.gfnFormButtonAdd("btnCancel", "fnCancel"); // 해약관리
        	this.btnIpju = this.gfnFormButtonAdd("btnIpju", "fnIpju"); // 정산관리
        	this.btnJoint = this.gfnFormButtonAdd("btnJoint", "fnJoint"); // 공동명의계약자
        	this.btnCounsel = this.gfnFormButtonAdd("btnCounsel", "fnCounsel"); // 상담일지
        	this.btnUploadList = this.gfnFormButtonAdd("btnUploadList", "fnUploadList"); // 파일관리
        	this.btnRecovery = this.gfnFormButtonAdd("btnRecovery", "fnRecovery"); // 최근 명의변경자 복원

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.divData.form.divDataTop.form.ccfRT_OPTION.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dxGrid1 = this.divData.form.divDataBottom.form.tabData.tab1.form.objGrid1;
        	this.dxGrid2 = this.divData.form.divDataBottom.form.tabData.tab2.form.objGrid2;
        	this.dxGrid3 = this.divData.form.divDataBottom.form.tabData.tab3.form.objGrid3;
        	this.dxGrid4 = this.divData.form.divDataBottom.form.tabData.tab4.form.objGrid4;
        	this.dxGrid5 = this.divData.form.divDataBottom.form.tabData.tab5.form.objGrid5;
        	this.dxGrid5_2 = this.divData.form.divDataBottom.form.tabData.tab5.form.objGrid5_2;
        	this.dxGrid6 = this.divData.form.divDataBottom.form.tabData.tab6.form.objGrid6;
        	this.dxGrid7 = this.divData.form.divDataBottom.form.tabData.tab7.form.objGrid7;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DL", "DLB_CONTRACTOR_1");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DL", "DLB_CONTRACTOR_2");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DL", "DLB_CONTRACTOR_3");
        	this.gfnGridInit(this.dxGrid4, this.dsList4, "DL", "DLB_CONTRACTOR_4");
        	this.gfnGridInit(this.dxGrid5, this.dsList5, "DL", "DLB_CONTRACTOR_5_1");
        	this.gfnGridInit(this.dxGrid5_2, this.dsList5_2, "DL", "DLB_CONTRACTOR_5_2");
        	this.gfnGridInit(this.dxGrid6, this.dsList6, "DL", "DLB_CONTRACTOR_6");
        	this.gfnGridInit(this.dxGrid7, this.dsList7, "DL", "DLB_CONTRACTOR_7");
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

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("TY_DISTRICT", "string");
        	this.dsUpdate.addColumn("RT_OPTION", "string");
        	this.dsUpdate.addColumn("TY_CONTRACTOR", "string");
        	this.dsUpdate.addColumn("DS_CONTRACTOR", "string");
        	this.dsUpdate.addColumn("NO_JUMIN", "string");
        	this.dsUpdate.addColumn("NO_TEL", "string");
        	this.dsUpdate.addColumn("NO_OFFICETEL", "string");
        	this.dsUpdate.addColumn("NO_MOBILE", "string");
        	this.dsUpdate.addColumn("DS_EMAIL", "string");
        	this.dsUpdate.addColumn("NO_POST", "string");
        	this.dsUpdate.addColumn("DS_ADDR2", "string");
        	this.dsUpdate.addColumn("DS_ADDR3", "string");
        	this.dsUpdate.addColumn("NO_RECPOST", "string");
        	this.dsUpdate.addColumn("DS_RECADDR2", "string");
        	this.dsUpdate.addColumn("DS_RECADDR3", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("DS_VENDOR", "string");
        	this.dsUpdate.addColumn("DS_UPTAE", "string");
        	this.dsUpdate.addColumn("DS_UPJONG", "string");
        	this.dsUpdate.addColumn("DS_REMARK", "string");
        	this.dsUpdate.addColumn("YN_EBILL", "string");
        	this.dsUpdate.addColumn("DT_IPJUPLAN", "string");
        	this.dsUpdate.addColumn("DT_IPJU", "string");
        	this.dsUpdate.addColumn("DT_CONTRACT", "string");
        	this.dsUpdate.addColumn("DT_LEASE_FR", "string");
        	this.dsUpdate.addColumn("DT_LEASE_TO", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("YN_JOINT", "string");
        	this.dsUpdate.addColumn("YN_AUTOLEASE", "string");
        	this.dsUpdate.addColumn("DS_TRANSFER", "string");
        	this.dsUpdate.addColumn("YN_SUNSU", "string");
        	this.dsUpdate.addColumn("AM_SUNSU", "bigdecimal");
        	this.dsUpdate.addColumn("YN_RETURN", "string");
        	this.dsUpdate.addColumn("DT_RETURN", "string");
        	this.dsUpdate.addColumn("NO_CONTRACT", "string");

        	this.dsInsertDetail = new Dataset();
        	this.dsUpdateDetail = new Dataset();
        	this.dsDeleteDetail = new Dataset();
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));

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

        this.fnDetail = function()
        {
        	var tabindex = this.fnGetTabIndex();

        	this.dsDetail = new Dataset();
        	this.dsDetail.addColumn("CD_ACNTUNIT", "string");
        	this.dsDetail.addColumn("TY_GUBUN", "string");
        	this.dsDetail.addColumn("NO_CHASU", "string");
        	this.dsDetail.addColumn("NO_DONG", "string");
        	this.dsDetail.addColumn("NO_FLOOR", "string");
        	this.dsDetail.addColumn("NO_HO", "string");

        	if(tabindex == 7)
        	{
        		this.dsDetail.addColumn("NO_UNIONMEMBER", "string");
        	}

        	this.dsDetail.clearData();
        	this.dsDetail.addRow();

        	this.dsDetail.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsDetail.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsDetail.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsDetail.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsDetail.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsDetail.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));

        	if(tabindex == 7)
        	{
        		this.dsDetail.setColumn(0, "NO_UNIONMEMBER", "");
        	}

        	var strSvcId    = "select" + tabindex;
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select" + tabindex + "=dsDetail";
        	var outData     = "dsList" + tabindex + "=select" + tabindex + "0";
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


        this.fnSelect5_2 = function()
        {
        	var strSvcId    = "select5_2";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select5_2=dsDetail";
        	var outData     = "dsList5_2=select5_20";
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
        	var tabindex = this.fnGetTabIndex();

        	switch(tabindex)
        	{
        		case 3:
        			var nrow = this.gfnGridAdd(this.dxGrid3); // top (default), bottom, current
        		break;
        		case 4:
        			var nrow = this.gfnGridAdd(this.dxGrid4); // top (default), bottom, current
        		break;

        	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var tabindex = this.fnGetTabIndex();

        	switch(tabindex)
        	{
        		case 3:
        			this.gfnGridDel(this.dxGrid3); // top (default), bottom, current
        		break;
        		case 4:
        			this.gfnGridDel(this.dxGrid4); // top (default), bottom, current
        		break;
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return false;

        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsUpdate.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsUpdate.setColumn(nrow, "TY_DISTRICT", this.dsList.getColumn(0, "TY_DISTRICT"));
        	this.dsUpdate.setColumn(nrow, "RT_OPTION", this.dsList.getColumn(0, "RT_OPTION"));
        	this.dsUpdate.setColumn(nrow, "TY_CONTRACTOR", this.dsList.getColumn(0, "TY_CONTRACTOR"));
        	this.dsUpdate.setColumn(nrow, "DS_CONTRACTOR", this.dsList.getColumn(0, "DS_CONTRACTOR"));
        	this.dsUpdate.setColumn(nrow, "NO_JUMIN", this.gfnNvl(this.dsList.getColumn(0, "NO_JUMIN"),"").replaceAll("-",""));
        	this.dsUpdate.setColumn(nrow, "NO_TEL", this.dsList.getColumn(0, "NO_TEL"));
        	this.dsUpdate.setColumn(nrow, "NO_OFFICETEL", this.dsList.getColumn(0, "NO_OFFICETEL"));
        	this.dsUpdate.setColumn(nrow, "NO_MOBILE", this.dsList.getColumn(0, "NO_MOBILE"));
        	this.dsUpdate.setColumn(nrow, "DS_EMAIL", this.dsList.getColumn(0, "DS_EMAIL"));
        	this.dsUpdate.setColumn(nrow, "NO_POST", this.gfnNvl(this.dsList.getColumn(0, "NO_POST"),"").replaceAll("-",""));
        	this.dsUpdate.setColumn(nrow, "DS_ADDR2", this.dsList.getColumn(0, "DS_ADDR2"));
        	this.dsUpdate.setColumn(nrow, "DS_ADDR3", this.dsList.getColumn(0, "DS_ADDR3"));
        	this.dsUpdate.setColumn(nrow, "NO_RECPOST", this.gfnNvl(this.dsList.getColumn(0, "NO_RECPOST"),"").replaceAll("-",""));
        	this.dsUpdate.setColumn(nrow, "DS_RECADDR2", this.dsList.getColumn(0, "DS_RECADDR2"));
        	this.dsUpdate.setColumn(nrow, "DS_RECADDR3", this.dsList.getColumn(0, "DS_RECADDR3"));
        	this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.gfnNvl(this.dsList.getColumn(0, "CD_VENDOR"),"").replaceAll("-",""));
        	this.dsUpdate.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(0, "DS_VENDOR1"));
        	this.dsUpdate.setColumn(nrow, "DS_UPTAE", this.dsList.getColumn(0, "DS_UPTAE"));
        	this.dsUpdate.setColumn(nrow, "DS_UPJONG", this.dsList.getColumn(0, "DS_UPJONG"));
        	this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        	this.dsUpdate.setColumn(nrow, "YN_EBILL", this.dsList.getColumn(0, "YN_EBILL"));
        	this.dsUpdate.setColumn(nrow, "DT_IPJUPLAN", this.dsList.getColumn(0, "DT_IPJUPLAN"));
        	this.dsUpdate.setColumn(nrow, "DT_IPJU", this.gfnNvl(this.dsList.getColumn(0, "DT_IPJU"),"").replaceAll("-",""));
        	this.dsUpdate.setColumn(nrow, "DT_CONTRACT", this.gfnNvl(this.dsList.getColumn(0, "DT_CONTRACT"),"").replaceAll("-",""));
        	this.dsUpdate.setColumn(nrow, "DT_LEASE_FR", this.gfnNvl(this.dsList.getColumn(0, "DT_LEASE_FR"),"").replaceAll("-",""));
        	this.dsUpdate.setColumn(nrow, "DT_LEASE_TO", this.gfnNvl(this.dsList.getColumn(0, "DT_LEASE_TO"),"").replaceAll("-",""));
        	this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        	this.dsUpdate.setColumn(nrow, "YN_JOINT", this.dsList.getColumn(0, "YN_JOINT"));
        	this.dsUpdate.setColumn(nrow, "YN_AUTOLEASE", this.dsList.getColumn(0, "YN_AUTOLEASE"));
        	this.dsUpdate.setColumn(nrow, "DS_TRANSFER", this.dsList.getColumn(0, "DS_TRANSFER"));
        	this.dsUpdate.setColumn(nrow, "YN_SUNSU", "X");
        	this.dsUpdate.setColumn(nrow, "AM_SUNSU", 0);
        	this.dsUpdate.setColumn(nrow, "YN_RETURN", "X");
        	this.dsUpdate.setColumn(nrow, "DT_RETURN", "X");
        	this.dsUpdate.setColumn(nrow, "NO_CONTRACT", this.dsList.getColumn(0, "NO_CONTRACT"));

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
        	//this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	var validate = true;
        	var strMsg = "";

        	if (this.gfnIsNull(this.dsList.getColumn(0, "DS_CONTRACTOR")))
        	{
        		strMsg = strMsg + "계약자성명을 입력하지 않았습니다." + "\r\n";
        		validate = false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_JUMIN"))
        	&& (this.dsList.getColumn(0, "TY_CONTRACTOR") == "P" || this.dsList.getColumn(0, "TY_CONTRACTOR") == "A"))
        	{
        		strMsg = strMsg + "주민등록번호를 입력하지 않았습니다." + "\r\n";
        		validate = false;
        	}


        	if (this.dsList.getColumn(0, "TY_CONTRACTOR") == "C" && this.gfnIsNull(this.dsList.getColumn(0, "CD_VENDOR")))
        	{
        	  strMsg = strMsg + "사업자등록번호를 입력하지 않았습니다." + "\r\n";
        	  validate = false;
        	}

        	if (this.dsList.getColumn(0, "TY_CONTRACTOR") == "C"  && this.gfnIsNull(this.dsList.getColumn(0, "DS_VENDOR1")))
        	{
        	  strMsg = strMsg + "상호를 입력하지 않았습니다." + "\r\n";
        	  validate = false;
        	}


        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_TEL")) && this.gfnIsNull(this.dsList.getColumn(0, "NO_OFFICETEL")) && this.gfnIsNull(this.dsList.getColumn(0, "NO_MOBILE")))
        	{
        	  strMsg = strMsg + "전화번호를 입력하지 않았습니다." + "\r\n";
        	  validate = false;
        	}

        	if(validate == false)
        	{
        		this.gfnAlert(strMsg);
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
        		this.fnDetail();
        	}
        	else if(svcID == "select5") {
        		this.fnSelect5_2();
        	}
        	else if(svcID == "select1" || svcID == "select2" || svcID == "select5_2"
        		  ||svcID == "select6" || svcID == "select7")
        	{
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.FormBtns.Save.set_enable(false);
        	}
        	else if(svcID == "select3" || svcID == "select4")
        	{
        		this.FormBtns.Add.set_enable(true);
        		this.FormBtns.Del.set_enable(true);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnSaveDetail();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "saveDetail") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "recovery") {
        		if (errorCode == 0) {
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
        	if (id == "ccfRT_OPTION") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT")); // CD_ACNTUNIT
        		dsUserParam.setColumn(nrow, "NO_SIZE", this.dsList.getColumn(0, "NO_SIZE")); // NO_SIZE
        		dsUserParam.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(0, "TY_TYPE")); // TY_TYPE
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.dsList.clearData();
        		this.gfnGridClear(this.dxGrid1); this.gfnGridClear(this.dxGrid2);
        		this.gfnGridClear(this.dxGrid3); this.gfnGridClear(this.dxGrid4);
        		this.gfnGridClear(this.dxGrid5); this.gfnGridClear(this.dxGrid5_2);
        		this.gfnGridClear(this.dxGrid6); this.gfnGridClear(this.dxGrid7);
        	}
        };

        // 조회조건 동/호/층 조회 버튼.
        this.divData_cbtnNO_DONGHO_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) return;

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG = "1";

        	this.gfnFormOpen("DRI", "DRI_DONGHOBATCHRECEIPT", "fnDonghoPopupCallback", param);

        };


        this.fnDonghoPopupCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	if (json.DONG.length > 0) {
        		this.dsSearch.setColumn(0, "NO_DONG", json.DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", json.FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", json.HO);
        	}
        	else {
        		this.dsSearch.setColumn(0, "NO_DONG", "");
        		this.dsSearch.setColumn(0, "NO_FLOOR", "");
        		this.dsSearch.setColumn(0, "NO_HO", "");
        	}
        }


        this.fnGetTabIndex = function()
        {
        	var index = -1;

        	var text = this.divData.form.divDataBottom.form.tabData.tabpages[this.divData.form.divDataBottom.form.tabData.tabindex].text;

        	switch(text)
        	{
        		case "약정/수납내역" : index = 1;
        			break;
        		case "예수금" :	index = 2;
        			break;
        		case "제한사항" : index = 3;
        			break;
        		case "설정사항" : index = 4;
        			break;
        		case "융자내역" : index = 5;
        			break;
        		case "해약HISTORY" : index = 6;
        			break;
        		case "명의변경HISTORY" : index = 7;
        			break;
        	}

        	return index;
        }

        this.fnSaveDetail = function()
        {
        	var tabindex = this.fnGetTabIndex();
        	var inData      = "";
        	this.dsInsertDetail.clearData();
        	this.dsUpdateDetail.clearData();
        	this.dsDeleteDetail.clearData();

        	switch(tabindex)
        	{
        		case 3 :
        			this.fnSetSaveParameter3();
        			this.fnSaveDetail3();
        			inData = "insert3=dsInsertDetail update3=dsUpdateDetail delete3=dsDeleteDetail";
        		break;

        		case 4 :
        			this.fnSetSaveParameter4();
        			this.fnSaveDetail4();
        			inData = "insert4=dsInsertDetail update4=dsUpdateDetail delete4=dsDeleteDetail";
        		break;
        	}

        	if(this.dsInsertDetail.rowcount == 0 && this.dsUpdateDetail.rowcount == 0 && this.dsDeleteDetail.rowcount == 0)
        	{
        		this.FormBtns.Select.click();
        		return;
        	}

        	var strSvcId    = "saveDetail";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
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

        this.fnSetSaveParameter3 = function()
        {
        	this.dsInsertDetail = new Dataset();
        	this.dsInsertDetail.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsertDetail.addColumn("TY_GUBUN", "string");
        	this.dsInsertDetail.addColumn("NO_CHASU", "string");
        	this.dsInsertDetail.addColumn("NO_DONG", "string");
        	this.dsInsertDetail.addColumn("NO_FLOOR", "string");
        	this.dsInsertDetail.addColumn("NO_HO", "string");
        	this.dsInsertDetail.addColumn("NO_SEQ", "string");
        	this.dsInsertDetail.addColumn("DT_DECISION", "string");
        	this.dsInsertDetail.addColumn("DS_COURT", "string");
        	this.dsInsertDetail.addColumn("NO_CASE", "string");
        	this.dsInsertDetail.addColumn("DS_CASE", "string");
        	this.dsInsertDetail.addColumn("YN_ENDCASE", "string");
        	this.dsInsertDetail.addColumn("DS_CREDITOR", "string");
        	this.dsInsertDetail.addColumn("AM_DEMAND", "bigdecimal");
        	this.dsInsertDetail.addColumn("DT_CLOSE", "string");
        	this.dsInsertDetail.addColumn("DS_JUDGE", "string");
        	this.dsInsertDetail.addColumn("DS_REMARK", "string");
        	this.dsInsertDetail.addColumn("ID_INSERT", "string");

        	this.dsUpdateDetail = new Dataset();
        	this.dsUpdateDetail.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdateDetail.addColumn("TY_GUBUN", "string");
        	this.dsUpdateDetail.addColumn("NO_CHASU", "string");
        	this.dsUpdateDetail.addColumn("NO_DONG", "string");
        	this.dsUpdateDetail.addColumn("NO_FLOOR", "string");
        	this.dsUpdateDetail.addColumn("NO_HO", "string");
        	this.dsUpdateDetail.addColumn("NO_SEQ", "string");
        	this.dsUpdateDetail.addColumn("DT_DECISION", "string");
        	this.dsUpdateDetail.addColumn("DS_COURT", "string");
        	this.dsUpdateDetail.addColumn("NO_CASE", "string");
        	this.dsUpdateDetail.addColumn("DS_CASE", "string");
        	this.dsUpdateDetail.addColumn("YN_ENDCASE", "string");
        	this.dsUpdateDetail.addColumn("DS_CREDITOR", "string");
        	this.dsUpdateDetail.addColumn("AM_DEMAND", "bigdecimal");
        	this.dsUpdateDetail.addColumn("DT_CLOSE", "string");
        	this.dsUpdateDetail.addColumn("DS_JUDGE", "string");
        	this.dsUpdateDetail.addColumn("DS_REMARK", "string");
        	this.dsUpdateDetail.addColumn("ID_UPDATE", "string");

        	this.dsDeleteDetail = new Dataset();
        	this.dsDeleteDetail.addColumn("CD_ACNTUNIT", "string");
        	this.dsDeleteDetail.addColumn("TY_GUBUN", "string");
        	this.dsDeleteDetail.addColumn("NO_CHASU", "string");
        	this.dsDeleteDetail.addColumn("NO_DONG", "string");
        	this.dsDeleteDetail.addColumn("NO_FLOOR", "string");
        	this.dsDeleteDetail.addColumn("NO_HO", "string");
        	this.dsDeleteDetail.addColumn("NO_SEQ", "string");
        }


        this.fnSetSaveParameter4 = function()
        {
        	this.dsInsertDetail = new Dataset();
        	this.dsInsertDetail.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsertDetail.addColumn("TY_GUBUN", "string");
        	this.dsInsertDetail.addColumn("NO_CHASU", "string");
        	this.dsInsertDetail.addColumn("NO_UNIONMEMBER", "string");
        	this.dsInsertDetail.addColumn("NO_DONG", "string");
        	this.dsInsertDetail.addColumn("NO_FLOOR", "string");
        	this.dsInsertDetail.addColumn("NO_HO", "string");
        	this.dsInsertDetail.addColumn("DT_SETUP", "string");
        	this.dsInsertDetail.addColumn("DS_CASE", "string");
        	this.dsInsertDetail.addColumn("AM_SETUP", "bigdecimal");
        	this.dsInsertDetail.addColumn("DT_START", "string");
        	this.dsInsertDetail.addColumn("DT_END", "string");
        	this.dsInsertDetail.addColumn("YN_ENDCASE", "string");
        	this.dsInsertDetail.addColumn("DT_CLOSE", "string");
        	this.dsInsertDetail.addColumn("DS_JUDGE", "string");
        	this.dsInsertDetail.addColumn("DS_REMARK", "string");
        	this.dsInsertDetail.addColumn("ID_INSERT", "string");

        	this.dsUpdateDetail = new Dataset();
        	this.dsUpdateDetail.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdateDetail.addColumn("TY_GUBUN", "string");
        	this.dsUpdateDetail.addColumn("NO_CHASU", "string");
        	this.dsUpdateDetail.addColumn("NO_UNIONMEMBER", "string");
        	this.dsUpdateDetail.addColumn("NO_DONG", "string");
        	this.dsUpdateDetail.addColumn("NO_FLOOR", "string");
        	this.dsUpdateDetail.addColumn("NO_HO", "string");
        	this.dsUpdateDetail.addColumn("NO_SEQ", "string");
        	this.dsUpdateDetail.addColumn("DT_SETUP", "string");
        	this.dsUpdateDetail.addColumn("DS_CASE", "string");
        	this.dsUpdateDetail.addColumn("AM_SETUP", "bigdecimal");
        	this.dsUpdateDetail.addColumn("DT_START", "string");
        	this.dsUpdateDetail.addColumn("DT_END", "string");
        	this.dsUpdateDetail.addColumn("YN_ENDCASE", "string");
        	this.dsUpdateDetail.addColumn("DT_CLOSE", "string");
        	this.dsUpdateDetail.addColumn("DS_JUDGE", "string");
        	this.dsUpdateDetail.addColumn("DS_REMARK", "string");
        	this.dsUpdateDetail.addColumn("ID_UPDATE", "string");

        	this.dsDeleteDetail = new Dataset();
        	this.dsDeleteDetail.addColumn("CD_ACNTUNIT", "string");
        	this.dsDeleteDetail.addColumn("TY_GUBUN", "string");
        	this.dsDeleteDetail.addColumn("NO_CHASU", "string");
        	this.dsDeleteDetail.addColumn("NO_DONG", "string");
        	this.dsDeleteDetail.addColumn("NO_FLOOR", "string");
        	this.dsDeleteDetail.addColumn("NO_HO", "string");
        	this.dsDeleteDetail.addColumn("NO_SEQ", "string");
        }

        this.fnSaveDetail3 = function()
        {
        	if (!this.gfnGridValidate(this.dxGrid3)) return;
        	for (var i = 0; i < this.dsList3.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList3, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsertDetail.addRow();
        				this.dsInsertDetail.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsInsertDetail.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsInsertDetail.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsInsertDetail.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsInsertDetail.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsInsertDetail.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsInsertDetail.setColumn(nrow, "NO_SEQ", this.dsList3.getColumn(i, "NO_SEQ"));
        				this.dsInsertDetail.setColumn(nrow, "DT_DECISION", this.dsList3.getColumn(i, "DT_DECISION"));
        				this.dsInsertDetail.setColumn(nrow, "DS_COURT", this.dsList3.getColumn(i, "DS_COURT"));
        				this.dsInsertDetail.setColumn(nrow, "NO_CASE", this.dsList3.getColumn(i, "NO_CASE"));
        				this.dsInsertDetail.setColumn(nrow, "DS_CASE", this.dsList3.getColumn(i, "DS_CASE"));
        				this.dsInsertDetail.setColumn(nrow, "YN_ENDCASE", this.dsList3.getColumn(i, "YN_ENDCASE"));
        				this.dsInsertDetail.setColumn(nrow, "DS_CREDITOR", this.dsList3.getColumn(i, "DS_CREDITOR"));
        				this.dsInsertDetail.setColumn(nrow, "AM_DEMAND", this.dsList3.getColumn(i, "AM_DEMAND"));
        				this.dsInsertDetail.setColumn(nrow, "DT_CLOSE", this.dsList3.getColumn(i, "DT_CLOSE"));
        				this.dsInsertDetail.setColumn(nrow, "DS_JUDGE", this.dsList3.getColumn(i, "DS_JUDGE"));
        				this.dsInsertDetail.setColumn(nrow, "DS_REMARK", this.dsList3.getColumn(i, "DS_REMARK"));
        				this.dsInsertDetail.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdateDetail.addRow();
        				this.dsUpdateDetail.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsUpdateDetail.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsUpdateDetail.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsUpdateDetail.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsUpdateDetail.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsUpdateDetail.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsUpdateDetail.setColumn(nrow, "NO_SEQ", this.dsList3.getColumn(i, "NO_SEQ"));
        				this.dsUpdateDetail.setColumn(nrow, "DT_DECISION", this.dsList3.getColumn(i, "DT_DECISION"));
        				this.dsUpdateDetail.setColumn(nrow, "DS_COURT", this.dsList3.getColumn(i, "DS_COURT"));
        				this.dsUpdateDetail.setColumn(nrow, "NO_CASE", this.dsList3.getColumn(i, "NO_CASE"));
        				this.dsUpdateDetail.setColumn(nrow, "DS_CASE", this.dsList3.getColumn(i, "DS_CASE"));
        				this.dsUpdateDetail.setColumn(nrow, "YN_ENDCASE", this.dsList3.getColumn(i, "YN_ENDCASE"));
        				this.dsUpdateDetail.setColumn(nrow, "DS_CREDITOR", this.dsList3.getColumn(i, "DS_CREDITOR"));
        				this.dsUpdateDetail.setColumn(nrow, "AM_DEMAND", this.dsList3.getColumn(i, "AM_DEMAND"));
        				this.dsUpdateDetail.setColumn(nrow, "DT_CLOSE", this.dsList3.getColumn(i, "DT_CLOSE"));
        				this.dsUpdateDetail.setColumn(nrow, "DS_JUDGE", this.dsList3.getColumn(i, "DS_JUDGE"));
        				this.dsUpdateDetail.setColumn(nrow, "DS_REMARK", this.dsList3.getColumn(i, "DS_REMARK"));
        				this.dsUpdateDetail.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDeleteDetail.addRow();
        				this.dsDeleteDetail.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsDeleteDetail.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsDeleteDetail.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsDeleteDetail.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsDeleteDetail.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsDeleteDetail.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsDeleteDetail.setColumn(nrow, "NO_SEQ", this.dsList3.getColumn(i, "NO_SEQ"));
        				break;
        		}
        	}
        	return true;
        }

        this.fnSaveDetail4 = function()
        {
        	if (!this.gfnGridValidate(this.dxGrid4)) return;
        	for (var i = 0; i < this.dsList4.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList4, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsertDetail.addRow();
        				this.dsInsertDetail.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsInsertDetail.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsInsertDetail.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsInsertDetail.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsInsertDetail.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsInsertDetail.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsInsertDetail.setColumn(nrow, "DT_SETUP", this.dsList4.getColumn(i, "DT_SETUP"));
        				this.dsInsertDetail.setColumn(nrow, "DS_CASE", this.dsList4.getColumn(i, "DS_CASE"));
        				this.dsInsertDetail.setColumn(nrow, "AM_SETUP", this.dsList4.getColumn(i, "AM_SETUP"));
        				this.dsInsertDetail.setColumn(nrow, "DT_START", this.dsList4.getColumn(i, "DT_START"));
        				this.dsInsertDetail.setColumn(nrow, "DT_END", this.dsList4.getColumn(i, "DT_END"));
        				this.dsInsertDetail.setColumn(nrow, "YN_ENDCASE", this.dsList4.getColumn(i, "YN_ENDCASE"));
        				this.dsInsertDetail.setColumn(nrow, "DT_CLOSE", this.dsList4.getColumn(i, "DT_CLOSE"));
        				this.dsInsertDetail.setColumn(nrow, "DS_JUDGE", this.dsList4.getColumn(i, "DS_JUDGE"));
        				this.dsInsertDetail.setColumn(nrow, "DS_REMARK", this.dsList4.getColumn(i, "DS_REMARK"));
        				this.dsInsertDetail.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdateDetail.addRow();
        				this.dsUpdateDetail.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsUpdateDetail.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsUpdateDetail.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsUpdateDetail.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsUpdateDetail.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsUpdateDetail.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsUpdateDetail.setColumn(nrow, "NO_SEQ", this.dsList4.getColumn(i, "NO_SEQ"));
        				this.dsUpdateDetail.setColumn(nrow, "DT_SETUP", this.dsList4.getColumn(i, "DT_SETUP"));
        				this.dsUpdateDetail.setColumn(nrow, "DS_CASE", this.dsList4.getColumn(i, "DS_CASE"));
        				this.dsUpdateDetail.setColumn(nrow, "AM_SETUP", this.dsList4.getColumn(i, "AM_SETUP"));
        				this.dsUpdateDetail.setColumn(nrow, "DT_START", this.dsList4.getColumn(i, "DT_START"));
        				this.dsUpdateDetail.setColumn(nrow, "DT_END", this.dsList4.getColumn(i, "DT_END"));
        				this.dsUpdateDetail.setColumn(nrow, "YN_ENDCASE", this.dsList4.getColumn(i, "YN_ENDCASE"));
        				this.dsUpdateDetail.setColumn(nrow, "DT_CLOSE", this.dsList4.getColumn(i, "DT_CLOSE"));
        				this.dsUpdateDetail.setColumn(nrow, "DS_JUDGE", this.dsList4.getColumn(i, "DS_JUDGE"));
        				this.dsUpdateDetail.setColumn(nrow, "DS_REMARK", this.dsList4.getColumn(i, "DS_REMARK"));
        				this.dsUpdateDetail.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDeleteDetail.addRow();
        				this.dsDeleteDetail.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsDeleteDetail.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsDeleteDetail.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsDeleteDetail.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsDeleteDetail.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsDeleteDetail.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsDeleteDetail.setColumn(nrow, "NO_SEQ", this.dsList4.getColumn(i, "NO_SEQ"));
        				break;
        		}
        	}
        	return true;
        }

        this.fnSetReadonly = function()
        {
        	if(this.dsList.rowcount == 0) return;

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DT_DONTRACT")))
        	{
        		this.divData.form.divDataTop.form.crdoTY_CONTRACTOR.set_enable(false);
        		this.divData.form.divDataTop.form.ctxtNO_TEL.set_readonly(true);
        		this.divData.form.divDataTop.form.ctxtNO_OFFICETEL.set_readonly(true);
        		this.divData.form.divDataTop.form.ctxtDS_EMAIL.set_readonly(true);
        		this.divData.form.divDataTop.form.ctxtDS_VENDOR.set_readonly(true);
        		this.divData.form.divDataTop.form.ctxtDS_UPJONG.set_readonly(true);
        		this.divData.form.divDataTop.form.ctxtDS_UPTAE.set_readonly(true);
        		this.divData.form.divDataTop.form.ctxtDS_REMARK.set_readonly(true);

        		this.btnTransfer.set_enable(false);
        		this.btnCancel.set_enable(false);
        	}
        	else
        	{
        		this.divData.form.divDataTop.form.crdoTY_CONTRACTOR.set_enable(true);
        		this.divData.form.divDataTop.form.ctxtNO_TEL.set_readonly(false);
        		this.divData.form.divDataTop.form.ctxtNO_OFFICETEL.set_readonly(false);
        		this.divData.form.divDataTop.form.ctxtDS_EMAIL.set_readonly(false);
        		this.divData.form.divDataTop.form.ctxtDS_REMARK.set_readonly(false);

        		this.btnCancel.set_enable(false);

        		if(this.dsList.getColumn(0, "TY_CONTRACTOR") == "P")
        		{
        			this.divData.form.divDataTop.form.ctxtDS_VENDOR.set_readonly(true);
        			this.divData.form.divDataTop.form.ctxtDS_UPJONG.set_readonly(true);
        			this.divData.form.divDataTop.form.ctxtDS_UPTAE.set_readonly(true);
        		}
        		else
        		{
        			this.divData.form.divDataTop.form.ctxtDS_VENDOR.set_readonly(false);
        			this.divData.form.divDataTop.form.ctxtDS_UPJONG.set_readonly(false);
        			this.divData.form.divDataTop.form.ctxtDS_UPTAE.set_readonly(false);
        		}

        		if(this.dsList.getColumn(0, "TY_STATE") == "임대계약")
        		{
        			this.divData.form.divDataTop.form.staDT_IPJUPLAN.set_text("입주예정일자");
        		}
        		else
        		{
        			this.divData.form.divDataTop.form.staDT_IPJUPLAN.set_text("입주일자");
        		}

        		if(this.dsList.getColumn(0, "YN_READONLY") == "Y")
        		{
        			this.divData.form.divDataTop.form.crdoTY_CONTRACTOR.set_enable(false);
        			this.divData.form.divDataTop.form.ctxtNO_TEL.set_readonly(true);
        			this.divData.form.divDataTop.form.ctxtNO_OFFICETEL.set_readonly(true);
        			this.divData.form.divDataTop.form.ctxtDS_EMAIL.set_readonly(true);
        			this.divData.form.divDataTop.form.ctxtDS_VENDOR.set_readonly(true);
        			this.divData.form.divDataTop.form.ctxtDS_UPJONG.set_readonly(true);
        			this.divData.form.divDataTop.form.ctxtDS_UPTAE.set_readonly(true);
        			this.divData.form.divDataTop.form.ctxtDS_REMARK.set_readonly(true);
        			this.divData.form.divDataTop.form.ccfRT_OPTION.set_enable(false);

        			this.btnTransfer.set_enable(false);
        			this.btnCancel.set_enable(false);
        		}
        	}
        }

        // 상단 기본정보 변경시.
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "TY_CONTRACTOR")
        		{
        			var readonly = false;
        			if(e.newvalue == "P")
        			{
        				readonly = true;
        			}

        			this.divData.form.divDataTop.form.ctxtDS_VENDOR.set_readonly(readonly);
        			this.divData.form.divDataTop.form.ctxtDS_UPJONG.set_readonly(readonly);
        			this.divData.form.divDataTop.form.ctxtDS_UPTAE.set_readonly(readonly);
        			this.divData.form.divDataTop.form.ctxtCD_VENDOR.set_readonly(readonly);
        		}
        	}
        };
        // 탭 변경시
        this.divData_tabData_onchanged = function(obj,e)
        {
        	if(e.preindex != e.postindex)
        	{
        		this.fnDetail();
        	}
        };


        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnTransfer = function() // 명의변경
        {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.NO_UNIONMEMBER = "";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLB_DLGTRANSFER", "fnTransferCallback", param);
        }

        this.fnTransferCallback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        this.fnCancel = function() // 해약관리
        {
        	var am_bunyangplan = nexacro.toNumber(this.dsList.getColumn(0, "AM_BUNYANGPLAN"),0);
        	var am_bunyangget = nexacro.toNumber(this.dsList.getColumn(0, "AM_BUNYANGGET"),0);

        	if(am_bunyangplan - am_bunyangget <= 0)
        	{
        		this.gfnConfirm("수납이 이미 완료되었습니다." + "\r\n" + "계약을 해약 하시겠습니까?", "fnCancelConfirm");
        		return false;
        	}

        	this.fnCancelConfirm("", true);
        }

        this.fnCancelConfirm = function(strId, val)
        {
        	if(val == true)
        	{
        		var param = {};
        		param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        		param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        		param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        		param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        		param.NO_UNIONMEMBER = "";
        		param.DS_CONTRACTOR = this.dsList.getColumn(0, "DS_CONTRACTOR");
        		param.AM_MISULEASE = this.dsList.getColumn(0, "AM_MINAP_LEASE");
        		param.AM_BUNYANGPLAN = this.dsList.getColumn(0, "AM_BUNYANGPLAN");
        		param.AM_BUNYANGGET = this.dsList.getColumn(0, "AM_BUNYANGGET");

        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLB_DLGCANCEL", "fnCancelCallback", param);
        	}
        }

        this.fnCancelCallback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        this.fnIpju = function()  // 정산관리
        {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.NO_UNIONMEMBER = "";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLC_IPJUSCHEDULE", "", param);
        }

        this.fnJoint = function() // 공동명의계약자
        {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.NO_SIZE = this.dsList.getColumn(0, "NO_SIZE");
        	param.TY_TYPE = this.dsList.getColumn(0, "TY_TYPE");
        	param.TY_DISTRIC = this.dsList.getColumn(0, "TY_DISTRIC");
        	param.RT_OPTION = this.dsList.getColumn(0, "RT_OPTION");
        	param.DS_OPTION = this.dsList.getColumn(0, "DS_OPTION");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLB_JOINTCONTRACTOR", "fnJointCallback", param);
        }

        this.fnJointCallback = function()
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        this.fnCounsel = function() // 상담일지
        {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.NO_UNIONMEMBER = "";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRB_COUNSEL", "", param);
        }

        this.fnUploadList = function() // 파일관리
        {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLB_CONTRACT_FILEUPLOADLIST", "", param);
        }

        this.fnRecovery = function() // 최근명의변경자로 복원
        {
        	if(this.dsList7.rowcount == 0)
        	{
        		this.gfnAlert("명의변경 내역이 없습니다.");
        		return false;
        	}

        	var msg = "최근 명의변경자로 복원하시겠습니까?\n복원되면 기존 계약자 정보는 영구 삭제됩니다.";
        	this.gfnConfirm( msg,"fnRecoveryConfirm");
        }

        this.fnRecoveryConfirm = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsRecovery = new Dataset();
        		this.dsRecovery.addColumn("CD_ACNTUNIT", "string");
        		this.dsRecovery.addColumn("TY_GUBUN", "string");
        		this.dsRecovery.addColumn("NO_CHASU", "string");
        		this.dsRecovery.addColumn("NO_DONG", "string");
        		this.dsRecovery.addColumn("NO_FLOOR", "string");
        		this.dsRecovery.addColumn("NO_HO", "string");
        		this.dsRecovery.addColumn("NO_UNIONMEMBER", "string");
        		this.dsRecovery.addColumn("ID_INSERT", "string");

        		this.dsRecovery.clearData();
        		this.dsRecovery.addRow();
        		this.dsRecovery.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        		this.dsRecovery.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        		this.dsRecovery.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        		this.dsRecovery.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        		this.dsRecovery.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        		this.dsRecovery.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        		this.dsRecovery.setColumn(0, "NO_UNIONMEMBER", "");
        		this.dsRecovery.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        		var strSvcId    = "recovery";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "recovery=dsRecovery";
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
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cbtnNO_DONGHO.addEventHandler("onclick",this.divData_cbtnNO_DONGHO_onclick,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataBottom.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLB_CONTRACTOR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
