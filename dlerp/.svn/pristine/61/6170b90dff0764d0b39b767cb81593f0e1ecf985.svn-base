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
            obj._setContents("<ColumnInfo><Column id=\"TY_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BUNYANG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DISTRICT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RECPOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICETEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPTAE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BUNYANGPLAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUNYANGGET\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_KASU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MLEASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_LEASE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LEASE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"INT\" size=\"256\"/><Column id=\"YN_JOINT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_AUTOLEASE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUNSU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_SUNSU\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MANAGEMENT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLBPR_AGREEMENT_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLBPR_AGREEMENT_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLBPR_AGREEMENT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DLBPR_AGREEMENT_DELETE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DLBPR_CONTRACT_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">exec_lease</Col><Col id=\"SP\">DLBPR_CONTRACT_LEASECHG</Col></Row><Row><Col id=\"TARGET\">exec_manage</Col><Col id=\"SP\">DLBPR_CONTRACT_MANAGEMENTCHG</Col></Row><Row><Col id=\"TARGET\">cont_handle</Col><Col id=\"SP\">DRBPR_CONTRACTPOSSILBE_HANDLE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CONTRACT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_JOINT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">있음</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_STATE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">O</Col><Col id=\"DS_CODE\">전체보기</Col></Row><Row><Col id=\"DS_CODE\">미분양</Col><Col id=\"CD_CODE\">X</Col></Row><Row><Col id=\"CD_CODE\">K</Col><Col id=\"DS_CODE\">분양</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_BUNYANG", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">분양</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">임대</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSum", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUILDING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SELLING\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_AUTOLEASE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">자동</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">수동</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_SUNSU", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Yes</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">No</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_RETURN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Yes</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">No</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONTRACTOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">P</Col><Col id=\"DS_CODE\">개인</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">법인</Col></Row><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">개인사업자</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ACNTUNIT","ctxtCD_ACNTUNIT:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_DONG","ctxtDS_ACNTUNIT:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("동층호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staNO_DONG:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_CONTRACT","ctxtNO_HO:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("계약처리여부");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtYN_CONTRACT","staYN_CONTRACT:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","50%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTopTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_STATE","0","staTopTitle:10","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("분양상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_STATE","staTY_STATE:-1","staTopTitle:10","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_BUNYANG","staBgTY_STATE:-1","staTopTitle:10","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("분양구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_BUNYANG","staTY_BUNYANG:-1","staTopTitle:10",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_CONTRACT","0","staTY_STATE:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_CONTRACT","staDT_CONTRACT:-1","staBgTY_STATE:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_CONTRACTOR","staBgDT_CONTRACT:-1","staTY_BUNYANG:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_CONTRACTOR","staTY_CONTRACTOR:-1","staBgTY_BUNYANG:-1",null,"30","0",null,"190",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_CONTRACTOR","0","staDT_CONTRACT:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_text("계약자명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_CONTRACTOR","staDS_CONTRACTOR:-1","staBgDT_CONTRACT:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_JUMIN","staBgDS_CONTRACTOR:-1","staTY_CONTRACTOR:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_JUMIN","staNO_JUMIN:-1","staBgTY_CONTRACTOR:-1",null,"30","0",null,"190",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","0","staDS_CONTRACTOR:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_text("☎(자택)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_TEL","staNO_TEL:-1","staBgDS_CONTRACTOR:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_OFFICETEL","staBgNO_TEL:-1","staDS_CONTRACTOR:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_OFFICETEL","staNO_OFFICETEL:-1","staBgDS_CONTRACTOR:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_MOBILE","staBgNO_OFFICETEL:-1","staDS_CONTRACTOR:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_MOBILE","staNO_MOBILE:-1","staBgDS_CONTRACTOR:-1",null,"30","0",null,"190",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_POST","0","staNO_TEL:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("19");
            obj.set_text("현주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_POST","staNO_POST:-1","staBgNO_TEL:-1",null,"30","0",null,"832",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_RECPOST","0","staNO_POST:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("21");
            obj.set_text("주민등록주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_RECPOST","staNO_RECPOST:-1","staBgNO_POST:-1",null,"30","0",null,"832",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL","0","staNO_RECPOST:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("23");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_EMAIL","staDS_EMAIL:-1","staBgNO_RECPOST:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_JOINT","staBgDS_EMAIL:-1","staNO_RECPOST:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("25");
            obj.set_text("공동명의계약자여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_JOINT","staYN_JOINT:-1","staBgNO_RECPOST:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_AUTOLEASE","staBgYN_JOINT:-1","staNO_RECPOST:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_text("자동이체");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_AUTOLEASE","staYN_AUTOLEASE:-1","staBgNO_RECPOST:-1",null,"30","0",null,"190",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_LEASE","0","staDS_EMAIL:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("29");
            obj.set_text("임대료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_LEASE","staAM_LEASE:-1","staBgDS_EMAIL:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_SUNSU","staBgAM_LEASE:-1","staYN_JOINT:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("31");
            obj.set_text("선수관리비여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_SUNSU","staYN_JOINT:-1","staBgYN_JOINT:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_RETURN","staBgYN_SUNSU:-1","staYN_AUTOLEASE:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("33");
            obj.set_text("회수여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_RETURN","staYN_RETURN:-1","staBgYN_AUTOLEASE:-1",null,"30","0",null,"190",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_MANAGEMENT","0","staAM_LEASE:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("35");
            obj.set_text("관리비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_MANAGEMENT","staAM_MANAGEMENT:-1","staBgAM_LEASE:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_SUNSU","staBgAM_MANAGEMENT:-1","staYN_SUNSU:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("37");
            obj.set_text("선수관리비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_SUNSU","staAM_SUNSU:-1","staBgYN_SUNSU:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_RETURN","staBgAM_SUNSU:-1","staYN_RETURN:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("39");
            obj.set_text("회수일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_RETURN","staDT_RETURN:-1","staBgYN_RETURN:-1",null,"30","0",null,"190",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtTY_STATE","staTY_STATE:5","staTopTitle:15","90","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtTY_BUNYANG","staTY_BUNYANG:5","staTopTitle:15","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDT_CONTRACT","staDT_CONTRACT:5","txtTY_STATE:9","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CONTRACTOR","staTY_CONTRACTOR:5","txtTY_BUNYANG:9","187","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("50");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_CONTRACTOR");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("계약구분");
            obj.set_enable("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","staDS_CONTRACTOR:5","txtDT_CONTRACT:9","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("52");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_JUMIN","staNO_JUMIN:5","rdoTY_CONTRACTOR:9","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("53");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL","staNO_TEL:5","txtDS_CONTRACTOR:9","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("54");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_OFFICETEL","staNO_OFFICETEL:5","txtNO_JUMIN:9","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("56");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_MOBILE","staNO_MOBILE:5","txtNO_JUMIN:9","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("55");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_POST","staNO_POST:5","txtNO_TEL:9","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("58");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_ADDR2","txtNO_POST:5","txtNO_TEL:9","220","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("58");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_ADDR3","txtDS_ADDR2:5","txtNO_TEL:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("58");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_RECPOST","staNO_RECPOST:5","txtNO_POST:9","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("58");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_RECADDR2","txtNO_RECPOST:5","txtNO_POST:9","220","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("58");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_RECADDR3","txtDS_RECADDR2:5","txtNO_POST:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("58");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMAIL","staDS_EMAIL:5","txtNO_RECPOST:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("67");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoYN_JOINT","staYN_JOINT:5","txtDS_RECADDR2:9","133","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_JOINT");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("계약구분");
            obj.set_enable("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoYN_AUTOLEASE","staYN_AUTOLEASE:5","txtDS_RECADDR3:9","133","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_AUTOLEASE");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("계약구분");
            obj.set_enable("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LEASE","staAM_LEASE:5","rdoYN_JOINT:9","120","20",null,null,"100",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnAM_LEASE","txtAM_LEASE:10","txtDS_EMAIL:9","80","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("62");
            obj.set_text("임대료변경");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoYN_SUNSU","staYN_SUNSU:5","txtDS_EMAIL:9","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_SUNSU");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoYN_RETURN","staYN_RETURN:5","txtDS_EMAIL:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_RETURN");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MANAGEMENT","staAM_MANAGEMENT:5","txtAM_LEASE:9","120","20",null,null,"100",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnAM_MANAGEMENT","txtAM_MANAGEMENT:10","txtAM_LEASE:9","80","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("62");
            obj.set_text("관리비변경");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SUNSU","staAM_SUNSU:5","crdoYN_SUNSU:9","120","20",null,null,"100",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_RETURN","staDT_RETURN:5","crdoYN_RETURN:9","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_LAND","0",null,"80","30",null,"5",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("3");
            obj.set_text("토지가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staBgAM_LAND","staAM_LAND:-1",null,null,"30","75%","5","110",null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staAM_BUILDING","staBgAM_LAND:-1",null,"80","30",null,"5",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("건물가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staBgAM_BUILDING","staAM_BUILDING:-1",null,null,"30","50%","5","110",null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staAM_VAT","staBgAM_BUILDING:-1",null,"80","30",null,"5",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staBgAM_VAT","staAM_VAT:-1",null,null,"30","25%","5","110",null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staAM_SELLING","staBgAM_VAT:-1",null,"80","30",null,"5",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("5");
            obj.set_text("분양가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staBgAM_SELLING","staAM_SELLING:-1",null,null,"30","5","5","110",null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LAND","staAM_LAND:5",null,null,"20","staAM_BUILDING:5","10","100",null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUILDING","staAM_BUILDING:5",null,null,"20","staAM_VAT:5","10","100",null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_VAT","staAM_VAT:5",null,null,"20","staAM_SELLING:5","10","100",null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SELLING","staAM_SELLING:5",null,null,"20","10","10","100",null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid1","5","0",null,null,"5","50",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
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

            obj = new BindItem("item5","divSearch.form.ctxtYN_CONTRACT","value","dsSearch","YN_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.txtTY_STATE","value","dsList1","TY_STATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.txtTY_BUNYANG","value","dsList1","TY_BUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.txtDT_CONTRACT","value","dsList1","DT_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.rdoTY_CONTRACTOR","value","dsList1","TY_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.txtDS_CONTRACTOR","value","dsList1","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.txtNO_JUMIN","value","dsList1","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.txtNO_TEL","value","dsList1","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataTop.form.txtNO_OFFICETEL","value","dsList1","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataTop.form.txtNO_MOBILE","value","dsList1","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataTop.form.txtNO_POST","value","dsList1","NO_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataTop.form.txtDS_ADDR2","value","dsList1","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataTop.form.txtDS_ADDR3","value","dsList1","DS_ADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataTop.form.txtNO_RECPOST","value","dsList1","NO_RECPOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataTop.form.txtDS_RECADDR2","value","dsList1","DS_RECADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataTop.form.txtDS_RECADDR3","value","dsList1","DS_RECADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataTop.form.txtDS_EMAIL","value","dsList1","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataTop.form.rdoYN_JOINT","value","dsList1","YN_JOINT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataTop.form.rdoYN_AUTOLEASE","value","dsList1","YN_AUTOLEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataTop.form.txtAM_LEASE","value","dsList1","AM_MLEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataTop.form.crdoYN_SUNSU","value","dsList1","YN_SUNSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataTop.form.crdoYN_RETURN","value","dsList1","YN_RETURN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataTop.form.txtAM_MANAGEMENT","value","dsList1","AM_MANAGEMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataTop.form.txtAM_SUNSU","value","dsList1","AM_SUNSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataTop.form.ctclDT_RETURN","value","dsList1","DT_RETURN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataBottom.form.txtAM_LAND","value","dsListSum","AM_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataBottom.form.txtAM_BUILDING","value","dsListSum","AM_BUILDING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataBottom.form.txtAM_VAT","value","dsListSum","AM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataBottom.form.txtAM_SELLING","value","dsListSum","AM_SELLING");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLB_CONTRACT_DETAIL.xfdl", function() {
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
        	this.dsSearch.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        	this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().DONG);
        	this.dsSearch.setColumn(0, "NO_FLOOR", this.getOwnerFrame().FLOOR);
        	this.dsSearch.setColumn(0, "NO_HO", this.getOwnerFrame().HO);
        	this.dsSearch.setColumn(0, "YN_CONTRACT", this.getOwnerFrame().YN_CONTRACT);

        	if(this.dsSearch.getColumn(0, "YN_CONTRACT") == "계약가능")
        	{
        		this.divSearch.form.ctxtYN_CONTRACT.set_color("Blue");
        	}
        	else
        	{
        		this.divSearch.form.ctxtYN_CONTRACT.set_color("Red");
        	}

        	// 저장버튼이 아래 그리드 변경으로만 변경이 되어야하여 sub설정 부여.
        	this.divData.form.divDataTop.form.txtAM_LEASE.sub = true;
        	this.divData.form.divDataTop.form.txtAM_MANAGEMENT.sub = true;

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
        	this.btnContract = this.gfnFormButtonAdd("btnContract", "fnContract"); // 임대계약
        	this.btnContractChg = this.gfnFormButtonAdd("btnContractChg", "fnContractChg"); // 계약변경
        	this.btnReceived = this.gfnFormButtonAdd("btnReceived", "fnReceived"); // 수납내역
        	this.btnJoint = this.gfnFormButtonAdd("btnJoint", "fnJoint"); // 공동명의
        	this.btnContractCancel = this.gfnFormButtonAdd("btnContractCancel", "fnContractCancel"); // 계약취소
        	this.btnContImpossible = this.gfnFormButtonAdd("btnContImpossible", "fnContImpossible"); // 계약불가

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid1 = this.divData.form.divDataBottom.form.objGrid1;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid1, this.dsList, "DL", "DLB_CONTRACT_DETAIL");

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

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_FLOOR", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("TY_NAPIP", "string");
        	this.dsInsert.addColumn("NO_NAPCHA", "string");
        	this.dsInsert.addColumn("DT_STARTAGREE", "string");
        	this.dsInsert.addColumn("DT_ENDAGREE", "string");
        	this.dsInsert.addColumn("AM_LAND", "bigdecimal");
        	this.dsInsert.addColumn("AM_BUILDING", "bigdecimal");
        	this.dsInsert.addColumn("AM_VAT", "bigdecimal");
        	this.dsInsert.addColumn("AM_SELLING", "bigdecimal");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("TY_NAPIP", "string");
        	this.dsUpdate.addColumn("NO_NAPCHA", "string");
        	this.dsUpdate.addColumn("DT_STARTAGREE", "string");
        	this.dsUpdate.addColumn("DT_ENDAGREE", "string");
        	this.dsUpdate.addColumn("AM_LAND", "bigdecimal");
        	this.dsUpdate.addColumn("AM_BUILDING", "bigdecimal");
        	this.dsUpdate.addColumn("AM_VAT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SELLING", "bigdecimal");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_DONG", "string");
        	this.dsDelete.addColumn("NO_FLOOR", "string");
        	this.dsDelete.addColumn("NO_HO", "string");
        	this.dsDelete.addColumn("TY_NAPIP", "string");
        	this.dsDelete.addColumn("NO_NAPCHA", "string");

        	// 상단 싱글폼
        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect1.addColumn("TY_GUBUN", "string");
        	this.dsSelect1.addColumn("NO_CHASU", "string");
        	this.dsSelect1.addColumn("NO_DONG", "string");
        	this.dsSelect1.addColumn("NO_FLOOR", "string");
        	this.dsSelect1.addColumn("NO_HO", "string");

        	this.dsExecLease = new Dataset();
        	this.dsExecLease.addColumn("CD_ACNTUNIT", "string");
        	this.dsExecLease.addColumn("TY_GUBUN", "string");
        	this.dsExecLease.addColumn("NO_CHASU", "string");
        	this.dsExecLease.addColumn("NO_DONG", "string");
        	this.dsExecLease.addColumn("NO_FLOOR", "string");
        	this.dsExecLease.addColumn("NO_HO", "string");
        	this.dsExecLease.addColumn("AM_LEASE", "bigdecimal");
        	this.dsExecLease.addColumn("ID_UPDATE", "string");

        	this.dsExecManage = new Dataset();
        	this.dsExecManage.addColumn("CD_ACNTUNIT", "string");
        	this.dsExecManage.addColumn("TY_GUBUN", "string");
        	this.dsExecManage.addColumn("NO_CHASU", "string");
        	this.dsExecManage.addColumn("NO_DONG", "string");
        	this.dsExecManage.addColumn("NO_FLOOR", "string");
        	this.dsExecManage.addColumn("NO_HO", "string");
        	this.dsExecManage.addColumn("AM_MANAGEMENT", "bigdecimal");
        	this.dsExecManage.addColumn("ID_UPDATE", "string");

        	this.dsContHandle = new Dataset();
        	this.dsContHandle.addColumn("CD_ACNTUNIT", "string");
        	this.dsContHandle.addColumn("TY_GUBUN", "string");
        	this.dsContHandle.addColumn("NO_CHASU", "string");
        	this.dsContHandle.addColumn("NO_DONG", "string");
        	this.dsContHandle.addColumn("NO_FLOOR", "string");
        	this.dsContHandle.addColumn("NO_HO", "string");
        	this.dsContHandle.addColumn("ID_UPDATE", "string");
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

        this.fnSelectTop = function()
        {
        	this.dsSelect1.clearData();
        	this.dsSelect1.addRow();
        	this.dsSelect1.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect1.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect1.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect1.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect1.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect1.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));

        	var strSvcId    = "select_top";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "select1=dsSelect1";
         	var outData     = "dsList1=select10";
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
        	this.gfnGridAdd(this.dxGrid1);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid1);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid1)) return;

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	 for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsInsert.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsInsert.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsInsert.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsInsert.setColumn(nrow, "TY_NAPIP", this.dsList.getColumn(i, "TY_NAPIP"));
        				this.dsInsert.setColumn(nrow, "NO_NAPCHA", this.dsList.getColumn(i, "NO_NAPCHA"));
        				this.dsInsert.setColumn(nrow, "DT_STARTAGREE", this.dsList.getColumn(i, "DT_STARTAGREE"));
        				this.dsInsert.setColumn(nrow, "DT_ENDAGREE", this.dsList.getColumn(i, "DT_ENDAGREE"));
        				this.dsInsert.setColumn(nrow, "AM_LAND", this.dsList.getColumn(i, "AM_LAND"));
        				this.dsInsert.setColumn(nrow, "AM_BUILDING", this.dsList.getColumn(i, "AM_BUILDING"));
        				this.dsInsert.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				this.dsInsert.setColumn(nrow, "AM_SELLING", this.dsList.getColumn(i, "AM_SELLING"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate1.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsUpdate.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsUpdate.setColumn(nrow, "TY_NAPIP", this.dsList.getColumn(i, "TY_NAPIP"));
        				this.dsUpdate.setColumn(nrow, "NO_NAPCHA", this.dsList.getColumn(i, "NO_NAPCHA"));
        				this.dsUpdate.setColumn(nrow, "DT_STARTAGREE", this.dsList.getColumn(i, "DT_STARTAGREE"));
        				this.dsUpdate.setColumn(nrow, "DT_ENDAGREE", this.dsList.getColumn(i, "DT_ENDAGREE"));
        				this.dsUpdate.setColumn(nrow, "AM_LAND", this.dsList.getColumn(i, "AM_LAND"));
        				this.dsUpdate.setColumn(nrow, "AM_BUILDING", this.dsList.getColumn(i, "AM_BUILDING"));
        				this.dsUpdate.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				this.dsUpdate.setColumn(nrow, "AM_SELLING", this.dsList.getColumn(i, "AM_SELLING"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        			break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsDelete.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsDelete.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsDelete.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsDelete.setColumn(nrow, "TY_NAPIP", this.dsList1.getColumn(i, "TY_NAPIP"));
        				this.dsDelete.setColumn(nrow, "NO_NAPCHA", this.dsList1.getColumn(i, "NO_NAPCHA"));
        			break;
        		}
        	}

        	if(this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        	this.gfnExcelExport(this.dxGrid1);
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_DONG"))) {
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctxtNO_DONG.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("동층호를 입력하세요!", "fnVaidateCallback");

        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_FLOOR"))) {
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctxtNO_FLOOR.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("동층호를 입력하세요!", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HO"))) {
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctxtNO_HO.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("동층호를 입력하세요!", "fnVaidateCallback");
        	}
        	return validate;
        };

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var strMsg = "";
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		strMsg += "사업지코드는 반드시 입력 하셔야 합니다.\n";
        		validate = false;
        	}

        	if(this.gfnTrim(this.dsList.getColumn(0, "TY_STATE")) == "계약")
        	{
        		if (this.gfnTrim(this.dsSearch.getColumn(0, "NO_DONG")) == "") {
        			strMsg += "동은 반드시 입력 하셔야 합니다.\n";
        			validate = false;
        		}

        		if (this.gfnTrim(this.dsSearch.getColumn(0, "NO_FLOOR")) == "") {
        			strMsg += "층은 반드시 입력 하셔야 합니다.\n";
        			validate = false;
        		}

        		if (this.gfnTrim(this.dsSearch.getColumn(0, "NO_HO")) == "") {
        			strMsg += "호는 반드시 입력 하셔야 합니다.\n";
        			validate = false;
        		}

        		if (this.gfnTrim(this.dsList.getColumn(0, "DS_CONTRACTOR")) == "") {
        			strMsg += "계약자성명을 입력하지 않았습니다.\n";
        			validate = false;
        		}

        		if ((this.dsList.getColumn(0, "TY_CONTRACTOR") == "P" || this.dsList.getColumn(0, "TY_CONTRACTOR") == "A")
        		&& this.gfnTrim(this.dsList.getColumn(0, "NO_JUMIN")) == "") {
        			strMsg += "주민등록번호를 입력하지 않았습니다.\n";
        			validate = false;
        		}

        		if ((this.dsList.getColumn(0, "TY_CONTRACTOR") == "C" || this.dsList.getColumn(0, "TY_CONTRACTOR") == "A")
        		&& this.gfnTrim(this.dsList.getColumn(0, "CD_VENDOR")) == "") {
        			strMsg += "사업자등록번호를 입력하지 않았습니다.\n";
        			validate = false;
        		}

        		if ((this.dsList.getColumn(0, "TY_CONTRACTOR") == "C" || this.dsList.getColumn(0, "TY_CONTRACTOR") == "A")
        		&& this.gfnTrim(this.dsList.getColumn(0, "DS_VENDOR")) == "") {
        			strMsg += "상호를 입력하지 않았습니다.\n";
        			validate = false;
        		}

        		if (this.gfnTrim(this.dsList.getColumn(0, "NO_TEL")) == "" && this.gfnTrim(this.dsList.getColumn(0, "NO_OFFICETELTEL")) == "" && this.gfnTrim(this.dsList.getColumn(0, "NO_MOBILE")) == "") {
        			strMsg += "전화번호를 입력하지 않았습니다.\n";
        			validate = false;
        		}

        		if (this.gfnTrim(this.dsList.getColumn(0, "NO_TEL")) != "") {
        			if (!nexacro.isNumeric(nexacro.replaceAll(nexacro.replaceAll(this.dsList.getColumn(0, "NO_TEL"), "-", ""), ")", ""))) {
        				strMsg += "자택 전화번호가 정확하지 않습니다.\n";
        				validate = false;
        			}
        		}

        		if (this.gfnTrim(this.dsList.getColumn(0, "NO_OFFICETELTEL")) != "") {
        			if (!nexacro.isNumeric(nexacro.replaceAll(nexacro.replaceAll(this.dsList.getColumn(0, "NO_OFFICETELTEL"), "-", ""), ")", ""))) {
        				strMsg += "직장 전화번호가 정확하지 않습니다.\n";
        				validate = false;
        			}
        		}

        		if (this.gfnTrim(this.dsList.getColumn(0, "NO_MOBILE")) != "") {
        			if (!nexacro.isNumeric(nexacro.replaceAll(nexacro.replaceAll(this.dsList.getColumn(0, "NO_MOBILE"), "-", ""), ")", ""))) {
        				strMsg += "휴대폰 번호가 정확하지 않습니다.\n";
        				validate = false;
        			}
        		}

        		if (this.gfnTrim(this.dsList.getColumn(0, "NO_RECPOST")) == "") {
        			strMsg += "현주소를 입력하지 않았습니다.\n";
        			validate = false;
        		}
        	}

        	if (!validate) {
        		this.gfnAlert(strMsg);
        		return false;
        	}
        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if(svcID == "select") {
        		this.fnSelectTop();
        		if(this.dsList.rowcount > 0)
        		{
        			var mobileNum = this.dsList.getColumn(0, "NO_MOBILE");
        			this.dsList.setColumn(0, "NO_MOBILE", this.fnConvertMobileNumber(mobileNum));
        			this.fnGridSum();
        		}
        	}
        	else if(svcID == "select_top") {
        		trace("dsList1>>>" + this.dsList1.saveXML());
        		if(this.dsList1.rowcount > 0)
        		{
        			this.fnSetReadonly(this.dsList1.getColumn(0, "DT_CONTRACT"));
        			trace("DT_CONTRACT>>>" + this.dsList1.getColumn(0, "DT_CONTRACT"));
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec_lease") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "cont_handle")
        	{
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			if(this.dsSearch.getColumn(0, "YN_CONTRACT") == "계약가능")
        			{
        				this.dsSearch.setColumn(0, "YN_CONTRACT", "계약불가");
        				this.divSearch.form.ctxtYN_CONTRACT.set_color("Red");
        			}
        			else
        			{
        				this.dsSearch.setColumn(0, "YN_CONTRACT", "계약가능");
        				this.divSearch.form.ctxtYN_CONTRACT.set_color("Blue");
        			}

        			this.gfnAlert("변경처리가 완료되었습니다.", "fnCallback_callback");
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
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid1);
        	}
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };


        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid1);
        		this.dsList.clearData();
        	}
        }


        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{

        	}
        };

        this.fnGridSum = function()
        {
        	if(this.dsList.rowcount > 0)
        	{
        		this.dsListSum.clearData();
        		var am_land = 0;
        		var am_building = 0;
        		var am_vat = 0;
        		var am_selling = 0;

        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			am_land += this.gfnNvl(this.dsList.getColumn(i, "AM_LAND"),0);
        			am_building += this.gfnNvl(this.dsList.getColumn(i, "AM_BUILDING"),0);
        			am_vat += this.gfnNvl(this.dsList.getColumn(i, "AM_VAT"),0);
        			am_selling += this.gfnNvl(this.dsList.getColumn(i, "AM_SELLING"),0);
        		}

        		this.dsListSum.addRow();

        		this.dsListSum.setColumn(0, "AM_LAND", am_land);
        		this.dsListSum.setColumn(0, "AM_BUILDING", am_building);
        		this.dsListSum.setColumn(0, "AM_VAT", am_vat);
        		this.dsListSum.setColumn(0, "AM_SELLING", am_selling);
        	}
        }

        this.fnConvertMobileNumber = function(number)
        {
        	var reno = this.gfnNvl(number,"").trim();
        	number = reno.replaceAll("-","");

        	switch(number.length)
        	{
        		case 3 : reno = number + "-"; break;
        		case 6 : reno = number.substr(0,3) + "-" + number.substr(3,3) + "-"; break;
        		case 7 : reno = number.substr(0,3) + "-" + number.substr(3,4) + "-"; break;
        		case 10 : reno = number.substr(0,3) + "-" + number.substr(3,3) + "-" + number.substr(6); break;
        		case 11 : reno = number.substr(0,3) + "-" + number.substr(3,4) + "-" + number.substr(7); break;
        	}

        	return reno;
        }


        this.divData_divDataTop_txtNO_MOBILE_onkeyup = function(obj,e)
        {
        	if((e.keycode >= 48 && e.keycode <= 57) || (e.keycode >= 96 && e.keycode <= 105))
        	{
        		obj.set_value(this.fnConvertMobileNumber(obj.value));
        	}
        };

        this.fnSetReadonly = function(val)
        {
        	// 미계약, 약정
        	if(this.gfnIsNull(val))
        	{
        		this.btnContractCancel.set_enable(false);
        		this.btnContractChg.set_enable(false);
        		this.btnReceived.set_enable(false);
        		this.btnJoint.set_enable(false);

        		if(this.FormInfo.ID_GROUP == "H" || this.FormInfo.ID_GROUP == "0")
        		{
        			this.btnContImpossible.set_enable(true);
        		}
        		else
        		{
        			this.btnContImpossible.set_enable(false);
        		}

        		if(this.dsSearch.getColumn(0, "YN_CONTRACT") == "계약가능")
        		{
        			this.btnContract.set_enable(true);
        		}
        		else
        		{
        			this.btnContract.set_enable(false);
        		}

        		this.divData.form.divDataTop.form.btnAM_LEASE.set_enable(false);
        		this.divData.form.divDataTop.form.btnAM_MANAGEMENT.set_enable(false);
        		this.divData.form.divDataTop.form.txtAM_LEASE.set_readonly(true);
        		this.divData.form.divDataTop.form.txtAM_MANAGEMENT.set_readonly(true);
        	}
        	// 계약, 약정
        	else
        	{
        		this.btnContractCancel.set_enable(true);
        		this.btnContractChg.set_enable(true);
        		this.btnReceived.set_enable(true);
        		this.btnJoint.set_enable(true);
        		this.btnContImpossible.set_enable(false);
        		this.btnContract.set_enable(false);

        		this.divData.form.divDataTop.form.btnAM_LEASE.set_enable(true);
        		this.divData.form.divDataTop.form.btnAM_MANAGEMENT.set_enable(true);
        		this.divData.form.divDataTop.form.txtAM_LEASE.set_readonly(false);
        		this.divData.form.divDataTop.form.txtAM_MANAGEMENT.set_readonly(false);
        	}
        }

        /************************************************************************
         * 확장 버튼 실행
         ************************************************************************/
        this.fnConform = function()
        {
        	if(this.dsList1.rowcount == 0)
        	{
        		this.gfnAlert("약정정보가 없습니다. 약정정보를 입력해주십시오.");
        		return false;
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");;
        	param.DONG		  = this.dsSearch.getColumn(0, "NO_DONG");
        	param.FLOOR		  = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.HO 		  = this.dsSearch.getColumn(0, "NO_HO");
        	param.UNIONMEMBER = this.dsSearch.getColumn(0, "NO_UNIONMEMBER");
        	param.NO_SIZE 	  = this.dsList.getColumn(0, "NO_SIZE");
        	param.TY_TYPE 	  = this.dsList.getColumn(0, "TY_TYPE");
        	param.TY_DISTRIC  = this.dsList.getColumn(0, "TY_DISTRICT");
        	param.RT_OPTION   = this.dsList.getColumn(0, "RT_OPTION");
        	param.DS_OPTION   = this.dsList.getColumn(0, "DS_OPTION");
        	param.AM_RECEIVED = this.dsList1.getColumn(0, "AM_SELLING");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRB_DLGCONTRACT", "fnDLGCONTRACT_callback", param);
        }

        this.fnDLGCONTRACT_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }


        // 임대료 변경
        this.divData_divDataTop_btnAM_LEASE_onclick = function(obj,e)
        {
        	this.gfnConfirm("임대료를 변경하시겠습니까?","fnCallback_AM_LEASE");
        };


        this.fnCallback_AM_LEASE = function()
        {
        	if(this.gfnIsNull(this.dsList1.getColumn(0, "AM_LEASE")))
        	{
        		this.dsList1.getColumn(0, "AM_LEASE") = 0;
        	}

        	this.dsExecLease.clearData();
        	var nrow = this.dsExecLease.addRow();

        	this.dsExecLease.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	this.dsExecLease.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsExecLease.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));
        	this.dsExecLease.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsExecLease.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsExecLease.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsExecLease.setColumn(nrow, "AM_LEASE", this.dsList1.getColumn(0, "AM_LEASE"));
        	this.dsExecLease.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        	if(this.dsExecLease.rowcount == 0) return;

        	var strSvcId    = "exec_lease";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec_lease=dsExecLease";
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


        // 관리비 변경
        this.divData_divDataTop_btnAM_MANAGEMENT_onclick = function(obj,e)
        {
        	this.gfnConfirm("임대료를 변경하시겠습니까?","fnCallback_AM_MANAGEMENT");
        };


        this.fnCallback_AM_MANAGEMENT = function()
        {
        	if(this.gfnIsNull(this.dsList1.getColumn(0, "AM_MANAGEMENT")))
        	{
        		this.dsList1.getColumn(0, "AM_MANAGEMENT") = 0;
        	}

        	this.dsExecManage.clearData();
        	var nrow = this.dsExecManage.addRow();

        	this.dsExecManage.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	this.dsExecManage.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsExecManage.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));
        	this.dsExecManage.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsExecManage.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsExecManage.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsExecManage.setColumn(nrow, "AM_MANAGEMENT", this.dsList1.getColumn(0, "AM_MANAGEMENT"));
        	this.dsExecManage.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        	if(this.dsExecManage.rowcount == 0) return;

        	var strSvcId    = "exec_manage";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec_manage=dsExecManage";
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

        // 임대계약
        this.fnContract = function()
        {
        	if(this.dsList.rowcount == 0)
        	{
        		this.gfnAlert("약정(계약금)을 먼저 등록하셔야 합니다.");
        		return false;
        	}

        	var cntC = 0;
        	var am_received = 0;

        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.gfnGetFlag(this.dsList, i) != "I" && this.gfnGetFlag(this.dsList, i) != "U")
        		{
        			if(this.dsList.getColumn(i, "TY_NAPIP") == "C")
        			{
        				cntC++;
        				am_received += nexacro.toNumber(this.dsList.getColumn(i, "AM_SELLING"),0);
        			}
        		}
        	}

        	if(cntC == 0)
        	{
        		this.gfnAlert("약정(계약금)을 먼저 등록하셔야 합니다.");
        		return false;
        	}

        	if(am_received <= 0)
        	{
        		this.gfnAlert("약정(계약금)의 액수가 0원 이상이어야 합니다.");
        		return false;
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.AM_RECIVE = am_received;
        	param.TY_TYPE = this.dsList1.getColumn(0, "TY_DISTRICT");
        	param.RT_OPTION = this.dsList1.getColumn(0, "RT_OPTION");
        	param.DS_OPTION = this.dsList1.getColumn(0, "DS_OPTION");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLB_DLGCONTRACT", "fnContract_callback", param);
        }

        this.fnContract_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        // 계약변경
        this.fnContractChg = function()
        {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.TY_TYPE = this.dsList1.getColumn(0, "TY_DISTRICT");
        	param.RT_OPTION = this.dsList1.getColumn(0, "RT_OPTION");
        	param.DS_OPTION = this.dsList1.getColumn(0, "DS_OPTION");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLB_DLGCONTRACT_CHANGE", "fnContract_callback", param);
        }

        // 수납내역
        this.fnReceived = function()
        {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.HO = this.dsSearch.getColumn(0, "NO_HO");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLB_SELECT_RECEIVED", "fnContract_callback", param);
        }

        // 계약불가처리
        this.fnContImpossible = function()
        {
        	var msg = "해당 세대의 계약처리여부 상태값을 변경합니다.\r\n계약불가->계약가능 / 계약가능->계약불가.\r\n처리 하시겠습니까?";
        	this.gfnConfirm(msg, "fnContImpossible_callback");
        }

        this.fnContImpossible_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsContHandle.clearData();
        		var nrow = this.dsContHandle.addRow();

        		this.dsContHandle.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        		this.dsContHandle.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        		this.dsContHandle.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        		this.dsContHandle.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        		this.dsContHandle.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        		this.dsContHandle.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        		this.dsContHandle.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        		if(this.dsContHandle.rowcount == 0) return;

        		var strSvcId    = "cont_handle";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "cont_handle=dsContHandle";
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

        // 계약취소
        this.fnContractCancel = function()
        {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.NO_SIZE = this.dsList1.getColumn(0, "NO_SIZE");
        	param.TY_TYPE = this.dsList1.getColumn(0, "TY_TYPE");
        	param.DT_CONTRACT = this.dsList1.getColumn(0, "DT_CONTRACT");
        	param.DS_CONTRACTOR = this.dsList1.getColumn(0, "DS_CONTRACTOR");
        	param.NO_JUMIN = this.dsList1.getColumn(0, "NO_JUMIN");
        	param.RT_OPTION = this.dsList1.getColumn(0, "RT_OPTION");
        	param.DS_EMAIL = this.dsList1.getColumn(0, "DS_EMAIL");
        	param.NO_OFFICETEL = this.dsList1.getColumn(0, "NO_OFFICETEL");
        	param.NO_TEL = this.dsList1.getColumn(0, "NO_TEL");
        	param.NO_MOBILE = this.dsList1.getColumn(0, "NO_MOBILE");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLB_DLGCONTRACTRETRACT", "fnContract_callback", param);
        }

        // 공동명의
        this.fnJoint = function()
        {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.TY_TYPE = this.dsList1.getColumn(0, "TY_TYPE");
        	param.RT_OPTION = this.dsList1.getColumn(0, "RT_OPTION");
        	param.DS_OPTION = this.dsList1.getColumn(0, "DS_OPTION");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLB_JOINTCONTRACTOR", "fnContract_callback", param);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataTop.form.txtNO_MOBILE.addEventHandler("onkeyup",this.divData_divDataTop_txtNO_MOBILE_onkeyup,this);
            this.divData.form.divDataTop.form.btnAM_LEASE.addEventHandler("onclick",this.divData_divDataTop_btnAM_LEASE_onclick,this);
            this.divData.form.divDataTop.form.btnAM_MANAGEMENT.addEventHandler("onclick",this.divData_divDataTop_btnAM_MANAGEMENT_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList1_onvaluechanged,this);
        };
        this.loadIncludeScript("DLB_CONTRACT_DETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
