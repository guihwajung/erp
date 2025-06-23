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
            this.set_titletext("입주종합현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLeft", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BUNYANG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DISTRICT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RECPOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICETEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPTAE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BUNYANGPLAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUNYANGGET\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_KASU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EBILL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_JOINT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_VACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUILDING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SELLING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ESIGN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DELMISU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_BUNYANG\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SMS\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUNSU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_SUNSU\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SMART\" type=\"STRING\" size=\"256\"/><Column id=\"YN_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MINUSOPTION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONTRACT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select_left</Col><Col id=\"SP\">DRBPR_CONTRACTSIMPLE_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRBPR_CONTRACTDETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRBPR_CONTRACTOR_UPDATE</Col></Row><Row><Col id=\"TARGET\">select_sum</Col><Col id=\"SP\">DRAPR_SIZEOPTION_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DRBPR_AGREEMENT_SELECT</Col></Row><Row><Col id=\"TARGET\">insert1</Col><Col id=\"SP\">DRBPR_AGREEMENT_INSERT</Col></Row><Row><Col id=\"TARGET\">update1</Col><Col id=\"SP\">DRBPR_AGREEMENT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete1</Col><Col id=\"SP\">DRBPR_AGREEMENT_DELETE</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DRBPR_RECEIVED_SELECT</Col></Row><Row><Col id=\"TARGET\">delete_agree</Col><Col id=\"SP\">DRBPR_AGREEMENT_SAEDAE_DELETE</Col></Row><Row><Col id=\"TARGET\">select_agree</Col><Col id=\"SP\">DRBPR_AGREEMENT_SELECT</Col></Row><Row><Col id=\"TARGET\">update_cont</Col><Col id=\"SP\">DRBPR_CONTRACTPOSSILBE_HANDLE</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DRAPR_CONTRACTOR_HIS_SELECT</Col></Row><Row><Col id=\"SP\">DRBPR_CONTRACT_PRINT_APT_DAEBANG</Col><Col id=\"TARGET\">report</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_STATE\">O</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsQRY_CONDITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">수납중</Col><Col id=\"DS_CODE\">수납중</Col></Row><Row><Col id=\"CD_CODE\">수납완료</Col><Col id=\"DS_CODE\">수납완료</Col></Row><Row><Col id=\"DS_CODE\">전체보기</Col><Col id=\"CD_CODE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONTRACTOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">P</Col><Col id=\"DS_CODE\">개인</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">법인</Col></Row><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">개인사업자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EBILL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">전자</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">종이</Col></Row></Rows>");
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


            obj = new Dataset("dsTY_STATE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">O</Col><Col id=\"DS_CODE\">전체보기</Col></Row><Row><Col id=\"DS_CODE\">미분양</Col><Col id=\"CD_CODE\">X</Col></Row><Row><Col id=\"CD_CODE\">K</Col><Col id=\"DS_CODE\">분양</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_BUNYANG", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">분양</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">임대</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSum", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUILDING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SELLING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_LANDRATE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSum1", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUILDING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SELLING\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_STATE","ccfCD_ACNTUNIT:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_STATE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_DONG","ccboTY_STATE:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("동");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_DONG","staNO_DONG:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFDONG_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("DSTextWidth").set("0");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","18%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSplitter2","0","59%","100%","5",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter2:5",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTopTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_SIZE","0","staTopTitle:10","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("평형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_SIZE","staNO_SIZE:-1","staTopTitle:10","519","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_CONTRACT","staBgNO_SIZE:-1","staTopTitle:10","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("계약서번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_CONTRACT","staNO_CONTRACT:-1","staTopTitle:10",null,"30","0",null,"190",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_STATE","0","staNO_SIZE:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("분양상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_STATE","staTY_STATE:-1","staBgNO_SIZE:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_BUNYANG","staBgTY_STATE:-1","staBgNO_SIZE:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_text("분양구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_BUNYANG","staTY_BUNYANG:-1","staBgNO_SIZE:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_CONTRACTOR","staBgTY_BUNYANG:-1","staNO_CONTRACT:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_CONTRACTOR","staTY_CONTRACTOR:-1","staBgNO_CONTRACT:-1",null,"30","0",null,"190",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_CONTRACT","0","staTY_STATE:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_CONTRACT","staDT_CONTRACT:-1","staBgTY_STATE:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_CONTRACTOR","staBgDT_CONTRACT:-1","staTY_BUNYANG:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_text("계약자명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_CONTRACTOR","staDS_CONTRACTOR:-1","staBgTY_BUNYANG:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_JUMIN","staBgDS_CONTRACTOR:-1","staTY_CONTRACTOR:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_JUMIN","staNO_JUMIN:-1","staBgTY_CONTRACTOR:-1",null,"30","0",null,"190",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","0","staDT_CONTRACT:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_text("☎(자택)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_TEL","staNO_TEL:-1","staBgDT_CONTRACT:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_OFFICETEL","staBgNO_TEL:-1","staDS_CONTRACTOR:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("19");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_OFFICETEL","staNO_OFFICETEL:-1","staBgDS_CONTRACTOR:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_MOBILE","staBgNO_OFFICETEL:-1","staNO_JUMIN:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("21");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_MOBILE","staNO_MOBILE:-1","staBgNO_JUMIN:-1",null,"30","0",null,"190",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_RECPOST","0","staNO_TEL:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("23");
            obj.set_text("주민등록주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_RECPOST","staNO_RECPOST:-1","staBgNO_TEL:-1",null,"30","0",null,"832",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_POST","0","staNO_RECPOST:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("25");
            obj.set_text("현주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_POST","staNO_POST:-1","staBgNO_RECPOST:-1",null,"30","0",null,"832",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","staNO_POST:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_VENDOR","staCD_VENDOR:-1","staBgNO_POST:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_UPTAE","staBgCD_VENDOR:-1","staBgNO_POST:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("29");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_UPTAE","staDS_UPTAE:-1","staBgNO_POST:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_UPJONG","staBgDS_UPTAE:-1","staBgNO_POST:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("31");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_UPJONG","staDS_UPJONG:-1","staBgNO_POST:-1",null,"30","0",null,"190",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","0","staCD_VENDOR:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("33");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_VENDOR","staDS_VENDOR:-1","staBgCD_VENDOR:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_EBILL","staBgDS_VENDOR:-1","staDS_UPTAE:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("35");
            obj.set_text("세금계산서발급구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_EBILL","staTY_EBILL:-1","staBgDS_UPTAE:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_GUJA","staBgTY_EBILL:-1","staDS_UPJONG:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("31");
            obj.set_text("가상계좌");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_GUJA","staNO_GUJA:-1","staBgDS_UPJONG:-1",null,"30","0",null,"190",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL","0","staDS_VENDOR:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("39");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_EMAIL","staDS_EMAIL:-1","staBgDS_VENDOR:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_JOINT","staBgDS_EMAIL:-1","staTY_EBILL:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("37");
            obj.set_text("공동명의계약자여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_JOINT","staYN_JOINT:-1","staTY_EBILL:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_BUNYANG","staBgYN_JOINT:-1","staNO_GUJA:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("31");
            obj.set_text("분양구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_BUNYANG","staYN_BUNYANG:-1","staBgNO_GUJA:-1",null,"30","0",null,"190",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK","0","staDS_EMAIL:-1","100","50",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("41");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_REMARK","staDS_REMARK:-1","staBgDS_EMAIL:-1",null,"50","0",null,"832",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staSumTitle","0","staDS_REMARK:1","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("분양가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_LAND","0","staSumTitle:9","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("41");
            obj.set_text("토지가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_LAND","staAM_LAND:-1","staSumTitle:9",null,"30","80%",null,"110",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_BUILDING","staBgAM_LAND:-1","staSumTitle:9","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("41");
            obj.set_text("건물가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_BUILDING","staAM_BUILDING:-1","staSumTitle:9",null,"30","60%",null,"110",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_VAT","staBgAM_BUILDING:-1","staSumTitle:9","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("41");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_VAT","staAM_VAT:-1","staSumTitle:9",null,"30","40%",null,"110",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_SELLING","staBgAM_VAT:-1","staSumTitle:9","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("41");
            obj.set_text("분양가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_SELLING","staAM_SELLING:-1","staSumTitle:9",null,"30","20%",null,"110",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staRT_LANDRATE","staBgAM_SELLING:-1","staSumTitle:9","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("41");
            obj.set_text("토지비율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgRT_LANDRATE","staRT_LANDRATE:-1","staSumTitle:9",null,"30","0",null,"110",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtNO_SIZE","staNO_SIZE:5","37","80","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_format("#,##0.000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta53","txtNO_SIZE:5","37","30","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("44");
            obj.set_text("면적");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtTY_TYPE","sta53:5","37","40","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta43","txtTY_TYPE:5","37","20","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("46");
            obj.set_text("형");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_CONTRACT","staNO_CONTRACT:5","37","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("47");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtTY_STATE","staTY_STATE:5","staBgNO_SIZE:4","90","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtTY_BUNYANG","474","staBgNO_SIZE:4","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CONTRACTOR","staTY_CONTRACTOR:5","staBgNO_CONTRACT:4","187","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("50");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_CONTRACTOR");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("계약구분");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDT_CONTRACT","staDT_CONTRACT:5","staBgTY_STATE:4","100","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","staDS_CONTRACTOR:5","staBgTY_BUNYANG:4","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("52");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_JUMIN","staNO_JUMIN:5","staBgTY_CONTRACTOR:4","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("53");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL","staNO_TEL:5","staBgDT_CONTRACT:4","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("54");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_MOBILE","staNO_MOBILE:5","staBgNO_JUMIN:4","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("55");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_OFFICETEL","staNO_OFFICETEL:5","staBgDS_CONTRACTOR:4","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("56");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfNO_RECPOST","staNO_RECPOST:5","staBgNO_TEL:4","400","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("57");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("주소");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_RECADDR2","cfNO_RECPOST:5","staBgNO_TEL:4","410","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("58");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfNO_POST","staNO_POST:5","staBgNO_RECPOST:4","400","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("59");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("주소");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_ADDR2","cfNO_POST:5","staBgNO_RECPOST:4","410","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("60");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtCD_VENDOR","staCD_VENDOR:5","staBgNO_POST:4","200","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("61");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_UPTAE","staDS_UPTAE:5","staBgNO_POST:4","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("62");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_UPJONG","staDS_UPJONG:5","staBgNO_POST:4","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("63");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","staDS_VENDOR:5","staBgCD_VENDOR:4","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("64");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoTY_EBILL","staTY_EBILL:5","staBgDS_UPTAE:4","133","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("65");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_EBILL");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("계약구분");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_GUJA","staNO_GUJA:5","txtDS_UPJONG:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMAIL","staDS_EMAIL:5","staBgDS_VENDOR:4","200","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("67");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoYN_JOINT","staYN_JOINT:5","staTY_EBILL:4","133","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_JOINT");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("계약구분");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoYN_BUNYANG","staYN_BUNYANG:5","ctxtNO_GUJA:9","133","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_BUNYANG");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("계약구분");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","staDS_REMARK:5","staBgDS_EMAIL:4","810","40",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("68");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LAND","staAM_LAND:5","staSumTitle:14",null,"20","staAM_BUILDING:5",null,"100",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUILDING","staAM_BUILDING:5","staSumTitle:14",null,"20","staAM_VAT:5",null,"100",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_VAT","staAM_VAT:5","staSumTitle:14",null,"20","staAM_SELLING:5",null,"100",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SELLING","staAM_SELLING:5","staSumTitle:14",null,"20","staRT_LANDRATE:5",null,"100",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_LANDRATE","staRT_LANDRATE:5","staSumTitle:14",null,"20","5",null,"100",null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_format("0.#########0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter2:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.divDataRight.form.divDataBottom.form.tabData);
            obj.set_text("약정정보");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Button("btnDivCopy",null,"5","70","20","10",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("안분내역복사");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staSumTitle","0",null,"100%","22",null,"40",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_text("분양가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_LAND","0","staSumTitle:9","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("41");
            obj.set_text("토지가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBgAM_LAND","staAM_LAND:-1","staSumTitle:9",null,"30","75%",null,"110",null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_BUILDING","staBgAM_LAND:-1","staSumTitle:9","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("41");
            obj.set_text("건물가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBgAM_BUILDING","staAM_BUILDING:-1","staSumTitle:9",null,"30","50%",null,"110",null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_VAT","staBgAM_BUILDING:-1","staSumTitle:9","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("41");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBgAM_VAT","staAM_VAT:-1","staSumTitle:9",null,"30","25%",null,"110",null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_SELLING","staBgAM_VAT:-1","staSumTitle:9","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("41");
            obj.set_text("분양가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBgAM_SELLING","staAM_SELLING:-1","staSumTitle:9",null,"30","5",null,"110",null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LAND","staAM_LAND:5","staSumTitle:14",null,"20","staAM_BUILDING:5",null,"100",null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUILDING","staAM_BUILDING:5","staSumTitle:14",null,"20","staAM_VAT:5",null,"100",null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_VAT","staAM_VAT:5","staSumTitle:14",null,"20","staAM_SELLING:5",null,"100",null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SELLING","staAM_SELLING:5","staSumTitle:14",null,"20","10",null,"100",null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_format("#,###");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGrid1","5","btnDivCopy:1",null,null,"5","staSumTitle:1",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.divDataRight.form.divDataBottom.form.tabData);
            obj.set_text("수납정보");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboTY_STATE","value","dsSearch","TY_STATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfNO_DONG.form.CDTextBox","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataRight.form.divDataTop.form.txtNO_SIZE","value","dsList","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.divDataTop.form.txtTY_TYPE","value","dsList","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.divDataTop.form.txtNO_CONTRACT","value","dsList","NO_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.divDataTop.form.txtTY_STATE","value","dsList","TY_STATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.divDataTop.form.txtTY_BUNYANG","value","dsList","TY_BUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.divDataTop.form.rdoTY_CONTRACTOR","value","dsList","TY_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.divDataTop.form.txtDT_CONTRACT","value","dsList","DT_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.divDataTop.form.txtDS_CONTRACTOR","value","dsList","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.divDataTop.form.txtNO_JUMIN","value","dsList","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.divDataTop.form.txtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.divDataTop.form.txtNO_OFFICETEL","value","dsList","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.divDataTop.form.txtNO_MOBILE","value","dsList","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.divDataTop.form.cfNO_RECPOST.form.CDTextBox","value","dsList","NO_RECPOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataRight.form.divDataTop.form.cfNO_RECPOST.form.DSTextBox","value","dsList","DS_RECADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataRight.form.divDataTop.form.txtDS_RECADDR2","value","dsList","DS_RECADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataRight.form.divDataTop.form.cfNO_POST.form.CDTextBox","value","dsList","NO_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataRight.form.divDataTop.form.cfNO_POST.form.DSTextBox","value","dsList","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.divDataTop.form.txtDS_ADDR2","value","dsList","DS_ADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.divDataTop.form.txtCD_VENDOR","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.divDataTop.form.txtDS_VENDOR","value","dsList","DS_VENDOR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataRight.form.divDataTop.form.txtDS_UPTAE","value","dsList","DS_UPTAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataRight.form.divDataTop.form.txtDS_UPJONG","value","dsList","DS_UPJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataRight.form.divDataTop.form.rdoTY_EBILL","value","dsList","YN_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataRight.form.divDataTop.form.ctxtNO_GUJA","value","dsList","NO_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataRight.form.divDataTop.form.txtDS_EMAIL","value","dsList","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataRight.form.divDataTop.form.rdoYN_JOINT","value","dsList","YN_JOINT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataRight.form.divDataTop.form.rdoYN_BUNYANG","value","dsList","YN_BUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataRight.form.divDataTop.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataRight.form.divDataTop.form.txtAM_LAND","value","dsListSum","AM_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataRight.form.divDataTop.form.txtAM_BUILDING","value","dsListSum","AM_BUILDING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divDataRight.form.divDataTop.form.txtAM_VAT","value","dsListSum","AM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divDataRight.form.divDataTop.form.txtAM_SELLING","value","dsListSum","AM_SELLING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divDataRight.form.divDataTop.form.txtRT_LANDRATE","value","dsListSum","RT_LANDRATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form.txtAM_LAND","value","dsListSum1","AM_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form.txtAM_BUILDING","value","dsListSum1","AM_BUILDING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form.txtAM_VAT","value","dsListSum1","AM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form.txtAM_SELLING","value","dsListSum1","AM_SELLING");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRB_CONTRACTMANAGE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.amSelling = 0;
        this.amBunyang = 0;

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

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_ACNTUNIT)) {
        		this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        		this.dsSearch.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        		this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        	}

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT")))
        		this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnConform = this.gfnFormButtonAdd("btnConform", "fnConform");
        	this.btnCancel = this.gfnFormButtonAdd("btnCancel", "fnCancel");
        	this.btnJoint = this.gfnFormButtonAdd("btnJoint", "fnJoint");
        	this.btnAgreeCopy = this.gfnFormButtonAdd("btnAgreeCopy", "fnAgreeCopy");
        	this.btnAgreeDelete = this.gfnFormButtonAdd("btnAgreeDelete", "fnAgreeDeleteChk");
        	this.btnItemContract = this.gfnFormButtonAdd("btnItemContract", "fnItemContract");
        	this.btnContractSetting = this.gfnFormButtonAdd("btnContractSetting", "fnContractSetting");
        	this.btnPreview2 = this.gfnFormButtonAdd("btnPreview2", "fnPreview2");
        	this.btnPayment = this.gfnFormButtonAdd("btnPayment", "fnPayment");
        	this.btnDrcReceipt = this.gfnFormButtonAdd("btnDrcReceipt", "fnDrcReceipt");
        	this.btnDrfReceipt = this.gfnFormButtonAdd("btnDrfReceipt", "fnDrfReceipt");
        	this.btnContractorHis = this.gfnFormButtonAdd("btnContractorHis", "fnContractorHis");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.tabData = this.divData.form.divDataRight.form.divDataBottom.form.tabData;

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGrid1 = this.tabData.tab1.form.objGrid1;
        	this.dxGrid2 = this.tabData.tab2.form.objGrid2;

        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.ctclDT_STANDARD = this.divSearch.form.ctclDT_STANDARD;
        	this.ccboQRY_CONDITION = this.divSearch.form.ccboQRY_CONDITION;
        	this.ctxtNO_DONG = this.divSearch.form.ctxtNO_DONG;
        	this.ctxtNO_FLOOR = this.divSearch.form.ctxtNO_FLOOR;
        	this.ctxtNO_HO = this.divSearch.form.ctxtNO_HO;

        	this.txtNO_SIZE      = this.divData.form.divDataRight.form.divDataTop.form.txtNO_SIZE;
        	this.txtTY_TYPE      = this.divData.form.divDataRight.form.divDataTop.form.txtTY_TYPE;
        	this.txtNO_CONTRACT  = this.divData.form.divDataRight.form.divDataTop.form.txtNO_CONTRACT;
        	this.txtTY_STATE     = this.divData.form.divDataRight.form.divDataTop.form.txtTY_STATE;
        	this.txtTY_BUNYANG   = this.divData.form.divDataRight.form.divDataTop.form.txtTY_BUNYANG;
        	this.rdoTY_CONTRACTOR= this.divData.form.divDataRight.form.divDataTop.form.rdoTY_CONTRACTOR;
        	this.txtDT_CONTRACT  = this.divData.form.divDataRight.form.divDataTop.form.txtDT_CONTRACT;
        	this.txtDS_CONTRACTOR= this.divData.form.divDataRight.form.divDataTop.form.txtDS_CONTRACTOR;
        	this.txtNO_JUMIN     = this.divData.form.divDataRight.form.divDataTop.form.txtNO_JUMIN;
        	this.txtNO_TEL       = this.divData.form.divDataRight.form.divDataTop.form.txtNO_TEL;
        	this.txtNO_MOBILE    = this.divData.form.divDataRight.form.divDataTop.form.txtNO_MOBILE;
        	this.txtNO_OFFICETEL = this.divData.form.divDataRight.form.divDataTop.form.txtNO_OFFICETEL;
        	this.cfNO_RECPOST    = this.divData.form.divDataRight.form.divDataTop.form.cfNO_RECPOST;
        	this.txtDS_RECADDR2  = this.divData.form.divDataRight.form.divDataTop.form.txtDS_RECADDR2;
        	this.cfNO_POST       = this.divData.form.divDataRight.form.divDataTop.form.cfNO_POST;
        	this.txtDS_ADDR2     = this.divData.form.divDataRight.form.divDataTop.form.txtDS_ADDR2;
        	this.txtCD_VENDOR    = this.divData.form.divDataRight.form.divDataTop.form.txtCD_VENDOR;
        	this.txtDS_UPTAE     = this.divData.form.divDataRight.form.divDataTop.form.txtDS_UPTAE;
        	this.txtDS_UPJONG    = this.divData.form.divDataRight.form.divDataTop.form.txtDS_UPJONG;
        	this.txtDS_VENDOR    = this.divData.form.divDataRight.form.divDataTop.form.txtDS_VENDOR;
        	this.rdoTY_EBILL     = this.divData.form.divDataRight.form.divDataTop.form.rdoTY_EBILL;
        	this.ctxtNO_GUJA     = this.divData.form.divDataRight.form.divDataTop.form.ctxtNO_GUJA;
        	this.txtDS_EMAIL     = this.divData.form.divDataRight.form.divDataTop.form.txtDS_EMAIL;
        	this.rdoYN_JOINT     = this.divData.form.divDataRight.form.divDataTop.form.rdoYN_JOINT;
        	this.rdoYN_BUNYANG   = this.divData.form.divDataRight.form.divDataTop.form.rdoYN_BUNYANG;
        	this.txtDS_REMARK    = this.divData.form.divDataRight.form.divDataTop.form.txtDS_REMARK;

        	// 분양가
        	this.txtAM_LAND      = this.divData.form.divDataRight.form.divDataTop.form.txtAM_LAND;
        	this.txtAM_BUILDING  = this.divData.form.divDataRight.form.divDataTop.form.txtAM_BUILDING;
        	this.txtAM_VAT       = this.divData.form.divDataRight.form.divDataTop.form.txtAM_VAT;
        	this.txtAM_SELLING   = this.divData.form.divDataRight.form.divDataTop.form.txtAM_SELLING;
        	this.txtRT_LANDRATE  = this.divData.form.divDataRight.form.divDataTop.form.txtRT_LANDRATE;

        	this.btnDivCopy 	 = this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form.btnDivCopy;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsLeft, "DR", "DRB_CONTRACTSIMPLE");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DR", "DRB_CONTRACTDETAIL_AGREE");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DR", "DRB_CONTRACTDETAIL_RECEIVED");

         	this.gfnGridColumnColor(this.dxGrid, "TY_STATE", "Blue", "TY_STATE == '계약'");
        	this.gfnGridColumnColor(this.dxGrid, "TY_STATE", "Green", "TY_STATE == '가계약'");
        	this.gfnGridColumnColor(this.dxGrid, "TY_STATE", "Red", "TY_STATE == '미계약'");
        	this.gfnGridColumnColor(this.dxGrid, "YN_CONTRACT", "Blue", "YN_CONTRACT == '계약가능'");
        	this.gfnGridColumnColor(this.dxGrid, "YN_CONTRACT", "Red", "YN_CONTRACT == '계약불가'");

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);


        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.divSearch.form.ccfNO_DONG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 좌측 그리드
        	this.dsSelectLeft = new Dataset();
        	this.dsSelectLeft.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelectLeft.addColumn("TY_GUBUN", "string");
        	this.dsSelectLeft.addColumn("NO_CHASU", "string");
        	this.dsSelectLeft.addColumn("NO_DONG", "string");
        	this.dsSelectLeft.addColumn("NO_UNIONMEMBER_1", "string");
        	this.dsSelectLeft.addColumn("NO_UNIONMEMBER_2", "string");
        	this.dsSelectLeft.addColumn("TY_STATE", "string");

        	// 조회시에 파라미터가 같아서 같이 쓰는 중.
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");
        	this.dsSelect.addColumn("NO_UNIONMEMBER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("NO_UNIONMEMBER", "string");
        	this.dsUpdate.addColumn("TY_DISTRICT", "string");
        	this.dsUpdate.addColumn("RT_OPTION", "string");
        	this.dsUpdate.addColumn("DT_CONTRACT", "string");
        	this.dsUpdate.addColumn("TY_CONTRACTOR", "string");
        	this.dsUpdate.addColumn("DS_CONTRACTOR", "string");
        	this.dsUpdate.addColumn("NO_JUMIN", "string");
        	this.dsUpdate.addColumn("NO_TEL", "string");
        	this.dsUpdate.addColumn("NO_OFFICETEL", "string");
        	this.dsUpdate.addColumn("NO_MOBILE", "string");
        	this.dsUpdate.addColumn("NO_POST", "string");
        	this.dsUpdate.addColumn("DS_ADDR2", "string");
        	this.dsUpdate.addColumn("DS_ADDR3", "string");
        	this.dsUpdate.addColumn("NO_RECPOST", "string");
        	this.dsUpdate.addColumn("DS_RECADDR2", "string");
        	this.dsUpdate.addColumn("DS_RECADDR3", "string");
        	this.dsUpdate.addColumn("DS_EMAIL", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("DS_VENDOR", "string");
        	this.dsUpdate.addColumn("DS_UPTAE", "string");
        	this.dsUpdate.addColumn("DS_UPJONG", "string");
        	this.dsUpdate.addColumn("DS_REMARK", "string");
        	this.dsUpdate.addColumn("YN_EBILL", "string");
        	this.dsUpdate.addColumn("YN_JOINT", "string");
        	this.dsUpdate.addColumn("AM_MLEASE", "bigdecimal");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("YN_SMS", "string");
        	this.dsUpdate.addColumn("YN_SUNSU", "string");
        	this.dsUpdate.addColumn("AM_SUNSU", "bigdecimal");
        	this.dsUpdate.addColumn("YN_RETURN", "string");
        	this.dsUpdate.addColumn("DT_RETURN", "string");
        	this.dsUpdate.addColumn("AM_REFUND", "bigdecimal");
        	this.dsUpdate.addColumn("DT_REFUND", "string");
        	this.dsUpdate.addColumn("NO_CONTRACT", "string");

        	// 기본정보의 분양가
        	this.dsSelectSum = new Dataset();
        	this.dsSelectSum.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelectSum.addColumn("TY_GUBUN", "string");
        	this.dsSelectSum.addColumn("NO_CHASU", "string");
        	this.dsSelectSum.addColumn("NO_SIZE", "bigdecimal");
        	this.dsSelectSum.addColumn("TY_TYPE", "string");
        	this.dsSelectSum.addColumn("TY_DISTRICT", "string");
        	this.dsSelectSum.addColumn("RT_OPTION", "string");

        	// 약정정보 탭의 그리드
        	this.dsInsert1 = new Dataset();
        	this.dsInsert1.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert1.addColumn("TY_GUBUN", "string");
        	this.dsInsert1.addColumn("NO_CHASU", "string");
        	this.dsInsert1.addColumn("NO_DONG", "string");
        	this.dsInsert1.addColumn("NO_FLOOR", "string");
        	this.dsInsert1.addColumn("NO_HO", "string");
        	this.dsInsert1.addColumn("NO_UNIONMEMBER", "string");
        	this.dsInsert1.addColumn("NO_SIZE", "bigdecimal");
        	this.dsInsert1.addColumn("TY_TYPE", "string");
        	this.dsInsert1.addColumn("TY_DISTRICT", "string");
        	this.dsInsert1.addColumn("RT_OPTION", "string");
        	this.dsInsert1.addColumn("TY_NAPIP", "string");
        	this.dsInsert1.addColumn("NO_NAPCHA", "string");
        	this.dsInsert1.addColumn("DT_STARTAGREE", "string");
        	this.dsInsert1.addColumn("DT_ENDAGREE", "string");
        	this.dsInsert1.addColumn("AM_SELLING_HANDLE", "bigdecimal");
        	this.dsInsert1.addColumn("AM_LAND", "bigdecimal");
        	this.dsInsert1.addColumn("AM_BUILDING", "bigdecimal");
        	this.dsInsert1.addColumn("AM_VAT", "bigdecimal");
        	this.dsInsert1.addColumn("AM_SELLING", "bigdecimal");
        	this.dsInsert1.addColumn("ID_INSERT", "string");

        	this.dsUpdate1 = new Dataset();
        	this.dsUpdate1.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate1.addColumn("TY_GUBUN", "string");
        	this.dsUpdate1.addColumn("NO_CHASU", "string");
        	this.dsUpdate1.addColumn("NO_DONG", "string");
        	this.dsUpdate1.addColumn("NO_FLOOR", "string");
        	this.dsUpdate1.addColumn("NO_HO", "string");
        	this.dsUpdate1.addColumn("NO_UNIONMEMBER", "string");
        	this.dsUpdate1.addColumn("NO_SIZE", "bigdecimal");
        	this.dsUpdate1.addColumn("TY_TYPE", "string");
        	this.dsUpdate1.addColumn("TY_DISTRICT", "string");
        	this.dsUpdate1.addColumn("RT_OPTION", "string");
        	this.dsUpdate1.addColumn("TY_NAPIP", "string");
        	this.dsUpdate1.addColumn("NO_NAPCHA", "string");
        	this.dsUpdate1.addColumn("DT_STARTAGREE", "string");
        	this.dsUpdate1.addColumn("DT_ENDAGREE", "string");
        	this.dsUpdate1.addColumn("AM_SELLING_HANDLE", "bigdecimal");
        	this.dsUpdate1.addColumn("AM_LAND", "bigdecimal");
        	this.dsUpdate1.addColumn("AM_BUILDING", "bigdecimal");
        	this.dsUpdate1.addColumn("AM_VAT", "bigdecimal");
        	this.dsUpdate1.addColumn("AM_SELLING", "bigdecimal");
        	this.dsUpdate1.addColumn("ID_UPDATE", "string");

        	this.dsDelete1 = new Dataset();
        	this.dsDelete1.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete1.addColumn("TY_GUBUN", "string");
        	this.dsDelete1.addColumn("NO_CHASU", "string");
        	this.dsDelete1.addColumn("NO_DONG", "string");
        	this.dsDelete1.addColumn("NO_FLOOR", "string");
        	this.dsDelete1.addColumn("NO_HO", "string");
        	this.dsDelete1.addColumn("NO_UNIONMEMBER", "string");
        	this.dsDelete1.addColumn("TY_NAPIP", "string");
        	this.dsDelete1.addColumn("NO_NAPCHA", "string");

        	// 약정 삭제/복사
        	this.dsAgree = new Dataset();
        	this.dsAgree.addColumn("CD_ACNTUNIT", "string");
        	this.dsAgree.addColumn("TY_GUBUN", "string");
        	this.dsAgree.addColumn("NO_CHASU", "string");
        	this.dsAgree.addColumn("NO_DONG", "string");
        	this.dsAgree.addColumn("NO_FLOOR", "string");
        	this.dsAgree.addColumn("NO_HO", "string");
        	this.dsAgree.addColumn("NO_UNIONMEMBER", "string");

        	this.dsUpdateCont = new Dataset();
        	this.dsUpdateCont.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdateCont.addColumn("TY_GUBUN", "string");
        	this.dsUpdateCont.addColumn("NO_CHASU", "string");
        	this.dsUpdateCont.addColumn("NO_DONG", "string");
        	this.dsUpdateCont.addColumn("NO_FLOOR", "string");
        	this.dsUpdateCont.addColumn("NO_HO", "string");
        	this.dsUpdateCont.addColumn("ID_UPDATE", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelectLeft.clearData();
        	this.dsSelectLeft.addRow();
        	this.dsSelectLeft.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsSelectLeft.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsSelectLeft.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsSelectLeft.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelectLeft.setColumn(0, "NO_UNIONMEMBER_1", "");
        	this.dsSelectLeft.setColumn(0, "NO_UNIONMEMBER_2", "");
        	this.dsSelectLeft.setColumn(0, "TY_STATE", this.dsSearch.getColumn(0, "TY_STATE"));

        	// 계약일자, 계약자명, 주민번호 입력 가능
        	this.txtDT_CONTRACT.set_readonly(false);
        	this.txtDS_CONTRACTOR.set_readonly(false);
        	this.txtNO_JUMIN.set_readonly(false);


        	var strSvcId    = "selectleft";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_left=dsSelectLeft";
        	var outData     = "dsLeft=select_left0";
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

        this.fnSelectDetail = function() {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_UNIONMEMBER"));

        	var strSvcId    = "detail";
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

        this.fnSelectSum = function() {
        	this.dsSelectSum.clearData();
        	this.dsSelectSum.addRow();
        	this.dsSelectSum.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectSum.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectSum.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectSum.setColumn(0, "NO_SIZE", this.dsList.getColumn(0, "NO_SIZE"));
        	this.dsSelectSum.setColumn(0, "TY_TYPE", this.dsList.getColumn(0, "TY_TYPE"));
        	this.dsSelectSum.setColumn(0, "TY_DISTRICT", this.dsList.getColumn(0, "TY_DISTRICT"));
        	this.dsSelectSum.setColumn(0, "RT_OPTION", this.dsList.getColumn(0, "RT_OPTION"));

        	var strSvcId    = "select_sum";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "select_sum=dsSelectSum";
         	var outData     = "dsListSum=select_sum0";
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

        this.fnSelectTabData = function()
        {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_UNIONMEMBER"));

        	var index = this.fnGetTabIndex();

        	var strSvcId    = "selecttab";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "select" + index + "=dsSelect";
         	var outData     = "dsList" + index + "=select" + index + "0";
        	var strArg      = "tabindex=" + index;
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
        	if (this.tabData.tabindex == 0)
        	{
        		this.gfnGridAdd(this.dxGrid1);
        	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if (this.tabData.tabindex == 0)
        	{
        		this.gfnGridDel(this.dxGrid1);
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;

        	// Detail
        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        	this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        	this.dsUpdate.setColumn(nrow, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        	this.dsUpdate.setColumn(nrow, "NO_UNIONMEMBER", this.dsList.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsUpdate.setColumn(nrow, "TY_DISTRICT", this.dsList.getColumn(0, "TY_DISTRICT"));
        	this.dsUpdate.setColumn(nrow, "RT_OPTION", this.dsList.getColumn(0, "RT_OPTION"));
        	this.dsUpdate.setColumn(nrow, "DT_CONTRACT", this.gfnNvl(this.dsList.getColumn(0, "DT_CONTRACT"),"").replace("-",""));
        	this.dsUpdate.setColumn(nrow, "TY_CONTRACTOR", this.dsList.getColumn(0, "TY_CONTRACTOR"));
        	this.dsUpdate.setColumn(nrow, "DS_CONTRACTOR", this.dsList.getColumn(0, "DS_CONTRACTOR"));
        	this.dsUpdate.setColumn(nrow, "NO_JUMIN", this.gfnNvl(this.dsList.getColumn(0, "NO_JUMIN"),"").replace("-",""));
        	this.dsUpdate.setColumn(nrow, "NO_TEL", this.dsList.getColumn(0, "NO_TEL"));
        	this.dsUpdate.setColumn(nrow, "NO_OFFICETEL", this.dsList.getColumn(0, "NO_OFFICETEL"));
        	this.dsUpdate.setColumn(nrow, "NO_MOBILE", this.gfnNvl(this.dsList.getColumn(0, "NO_MOBILE"),"").replace("-",""));
        	this.dsUpdate.setColumn(nrow, "NO_POST", this.gfnNvl(this.dsList.getColumn(0, "NO_POST"),"").replace("-",""));
        	this.dsUpdate.setColumn(nrow, "DS_ADDR2", this.dsList.getColumn(0, "DS_ADDR2"));
        	this.dsUpdate.setColumn(nrow, "DS_ADDR3", this.dsList.getColumn(0, "DS_ADDR3"));
        	this.dsUpdate.setColumn(nrow, "NO_RECPOST", this.gfnNvl(this.dsList.getColumn(0, "NO_RECPOST"),"").replace("-",""));
        	this.dsUpdate.setColumn(nrow, "DS_RECADDR2", this.dsList.getColumn(0, "DS_RECADDR2"));
        	this.dsUpdate.setColumn(nrow, "DS_RECADDR3", this.dsList.getColumn(0, "DS_RECADDR3"));
        	this.dsUpdate.setColumn(nrow, "DS_EMAIL", this.dsList.getColumn(0, "DS_EMAIL"));
        	this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        	this.dsUpdate.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(0, "DS_VENDOR"));
        	this.dsUpdate.setColumn(nrow, "DS_UPTAE", this.dsList.getColumn(0, "DS_UPTAE"));
        	this.dsUpdate.setColumn(nrow, "DS_UPJONG", this.dsList.getColumn(0, "DS_UPJONG"));
        	this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        	this.dsUpdate.setColumn(nrow, "YN_EBILL", this.dsList.getColumn(0, "YN_EBILL"));
        	this.dsUpdate.setColumn(nrow, "YN_JOINT", this.dsList.getColumn(0, "YN_JOINT"));
        	this.dsUpdate.setColumn(nrow, "AM_MLEASE", this.dsList.getColumn(0, "AM_MLEASE"));
        	this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        	this.dsUpdate.setColumn(nrow, "YN_SMS", this.dsList.getColumn(0, "YN_SMS"));
        	this.dsUpdate.setColumn(nrow, "YN_SUNSU", this.dsList.getColumn(0, "YN_SUNSU"));
        	this.dsUpdate.setColumn(nrow, "AM_SUNSU", this.dsList.getColumn(0, "AM_SUNSU"));
        	this.dsUpdate.setColumn(nrow, "YN_RETURN", this.dsList.getColumn(0, "YN_RETURN"));
        	this.dsUpdate.setColumn(nrow, "DT_RETURN", this.gfnNvl(this.dsList.getColumn(0, "DT_RETURN"),"").replace("-",""));
        	this.dsUpdate.setColumn(nrow, "AM_REFUND", this.dsList.getColumn(0, "AM_REFUND"));
        	this.dsUpdate.setColumn(nrow, "DT_REFUND", this.gfnNvl(this.dsList.getColumn(0, "DT_REFUND"),"").replace("-",""));
        	this.dsUpdate.setColumn(nrow, "NO_CONTRACT", this.dsList.getColumn(0, "NO_CONTRACT"));

        	var strInData = "update=dsUpdate";

        	switch(this.fnGetTabIndex())
        	{
        		case 1 :
        			this.dsInsert1.clearData();
        			this.dsUpdate1.clearData();
        			this.dsDelete1.clearData();
        			for (var i = 0; i < this.dsList1.rowcount; i++) {
        				var flag = this.gfnGetFlag(this.dsList1, i);
        				switch(flag) {
        					case "I":
        						var nrow = this.dsInsert1.addRow();
        						this.dsInsert1.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        						this.dsInsert1.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        						this.dsInsert1.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        						this.dsInsert1.setColumn(nrow, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        						this.dsInsert1.setColumn(nrow, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        						this.dsInsert1.setColumn(nrow, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        						this.dsInsert1.setColumn(nrow, "NO_UNIONMEMBER", "");
        						this.dsInsert1.setColumn(nrow, "NO_SIZE", this.dsList.getColumn(0, "NO_SIZE"));
        						this.dsInsert1.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(0, "TY_TYPE"));
        						this.dsInsert1.setColumn(nrow, "TY_DISTRICT", this.dsList.getColumn(0, "TY_DISTRICT"));
        						this.dsInsert1.setColumn(nrow, "RT_OPTION", this.dsList.getColumn(0, "RT_OPTION"));
        						this.dsInsert1.setColumn(nrow, "TY_NAPIP", this.dsList1.getColumn(i, "TY_NAPIP"));
        						this.dsInsert1.setColumn(nrow, "NO_NAPCHA", this.dsList1.getColumn(i, "NO_NAPCHA"));
        						this.dsInsert1.setColumn(nrow, "DT_STARTAGREE", this.gfnNvl(this.dsList1.getColumn(i, "DT_STARTAGREE"),"").replace("-",""));
        						this.dsInsert1.setColumn(nrow, "DT_ENDAGREE", this.gfnNvl(this.dsList1.getColumn(i, "DT_ENDAGREE"),"").replace("-",""));
        						this.dsInsert1.setColumn(nrow, "AM_SELLING_HANDLE", this.dsList1.getColumn(i, "처리금액"));
        						this.dsInsert1.setColumn(nrow, "AM_LAND", this.dsList1.getColumn(i, "AM_LAND"));
        						this.dsInsert1.setColumn(nrow, "AM_BUILDING", this.dsList1.getColumn(i, "AM_BUILDING"));
        						this.dsInsert1.setColumn(nrow, "AM_VAT", this.dsList1.getColumn(i, "AM_VAT"));
        						this.dsInsert1.setColumn(nrow, "AM_SELLING", this.dsList1.getColumn(i, "AM_SELLING"));
        						this.dsInsert1.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        						break;
        					case "U":
        						var nrow = this.dsUpdate1.addRow();
        						this.dsUpdate1.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        						this.dsUpdate1.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        						this.dsUpdate1.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        						this.dsUpdate1.setColumn(nrow, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        						this.dsUpdate1.setColumn(nrow, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        						this.dsUpdate1.setColumn(nrow, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        						this.dsUpdate1.setColumn(nrow, "NO_UNIONMEMBER", "");
        						this.dsUpdate1.setColumn(nrow, "NO_SIZE", this.dsList.getColumn(0, "NO_SIZE"));
        						this.dsUpdate1.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(0, "TY_TYPE"));
        						this.dsUpdate1.setColumn(nrow, "TY_DISTRICT", this.dsList.getColumn(0, "TY_DISTRICT"));
        						this.dsUpdate1.setColumn(nrow, "RT_OPTION", this.dsList.getColumn(0, "RT_OPTION"));
        						this.dsUpdate1.setColumn(nrow, "TY_NAPIP", this.dsList1.getColumn(i, "TY_NAPIP"));
        						this.dsUpdate1.setColumn(nrow, "NO_NAPCHA", this.dsList1.getColumn(i, "NO_NAPCHA"));
        						this.dsUpdate1.setColumn(nrow, "DT_STARTAGREE", this.gfnNvl(this.dsList1.getColumn(i, "DT_STARTAGREE"),"").replace("-",""));
        						this.dsUpdate1.setColumn(nrow, "DT_ENDAGREE", this.gfnNvl(this.dsList1.getColumn(i, "DT_ENDAGREE"),"").replace("-",""));
        						this.dsUpdate1.setColumn(nrow, "AM_SELLING_HANDLE", this.dsList1.getColumn(i, "처리금액"));
        						this.dsUpdate1.setColumn(nrow, "AM_LAND", this.dsList1.getColumn(i, "AM_LAND"));
        						this.dsUpdate1.setColumn(nrow, "AM_BUILDING", this.dsList1.getColumn(i, "AM_BUILDING"));
        						this.dsUpdate1.setColumn(nrow, "AM_VAT", this.dsList1.getColumn(i, "AM_VAT"));
        						this.dsUpdate1.setColumn(nrow, "AM_SELLING", this.dsList1.getColumn(i, "AM_SELLING"));
        						this.dsUpdate1.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        					break;
        					case "D":
        						var nrow = this.dsUpdate1.addRow();
        						this.dsDelete1.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        						this.dsDelete1.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        						this.dsDelete1.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        						this.dsDelete1.setColumn(nrow, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        						this.dsDelete1.setColumn(nrow, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        						this.dsDelete1.setColumn(nrow, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        						this.dsDelete1.setColumn(nrow, "NO_UNIONMEMBER", "");
        						this.dsDelete1.setColumn(nrow, "TY_NAPIP", this.dsList1.getColumn(i, "TY_NAPIP"));
        						this.dsDelete1.setColumn(nrow, "NO_NAPCHA", this.dsList1.getColumn(i, "NO_NAPCHA"));
        					break;
        				}
        			}
        			if(this.dsInsert1.rowcount > 0) strInData+= " insert1=dsInsert1";
        			if(this.dsUpdate1.rowcount > 0) strInData+= " update1=dsUpdate1";
        			if(this.dsDelete1.rowcount > 0) strInData+= " delete1=dsDelete1";
        			break;
        	}

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = strInData;
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
        this.fnPrint = function() { //분양계약서 출력
        	//DRC_RECEIPTMANAGEPREVIEW

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_ACNTUNIT", "string");
        	this.dsReport.addColumn("TY_GUBUN", "string");
        	this.dsReport.addColumn("NO_CHASU", "string");
        	this.dsReport.addColumn("NO_DONG", "string");
        	this.dsReport.addColumn("NO_FLOOR", "string");
        	this.dsReport.addColumn("NO_HO", "string");
        	this.dsReport.addColumn("NO_UNIONMEMBER", "string");

        	this.dsReport.clearData();
        	this.dsReport.addRow();

        	this.dsReport.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsReport.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsReport.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsReport.setColumn(0, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        	this.dsReport.setColumn(0, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        	this.dsReport.setColumn(0, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        	this.dsReport.setColumn(0, "NO_UNIONMEMBER", "");

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReport1";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report=dsReport";
        	var reportpath  = "/dr/drb/DRB_CONTRACTMANAGE_REPORT.ozr";

        	trace("DRB_CONTRACTMANAGE_REPORT!!!!!!!!!!!!!!!!");

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드를 입력하세요!", "fnVaidateCallback");
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

        	if (this.dsLeft.rowposition < 0)
        		return false;

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

        	if (this.gfnTrim(this.dsList.getColumn(0, "DT_CONTRACT")) == "") {
        		strMsg += "계약일자를 입력하지 않았습니다.\n";
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
        		strMsg += "주민등록주소를 입력하지 않았습니다.\n";
        		validate = false;
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
        	if (svcID == "selectleft") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.fnSelectDetail();
        	}
        	else if(svcID == "detail") {
        		if(this.dsList.rowcount > 0)
        		{
        			this.fnInit();
        			this.dsList_onvaluechanged(this.dsList, {columnid : "TY_CONTRACTOR", newvalue : this.dsList.getColumn(0, "TY_CONTRACTOR")});
        			this.fnSelectSum();
        			var mobileNum = this.dsList.getColumn(0, "NO_MOBILE");
        			this.dsList.setColumn(0, "NO_MOBILE", this.fnConvertMobileNumber(mobileNum));
        		}
        	}
        	else if(svcID == "selecttab") {
        		var json = this.gfnArgsToJson(strArg);
        		if(json.tabindex == "1")
        		{
        			this.fnGrid1Sum();
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "delete_agree") {
        		if (errorCode == 0) {
        			var json = this.gfnArgsToJson(strArg);
        			if(json.copy == "copy")
        			{
        				this.fnAgreeOpen();
        			}
        			else
        			{
        				this.FormBtns.Select.click();
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "select_agree") {
        		if (errorCode == 0) {
        			for(var i = 0; i < this.dsList1.rowcount; i++)
        			{
        				this.dsList1setColumn(i, this.ucFlag, "I");
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "update_cont") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
        	else if(id == "ccfNO_DONG") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id){
        		case "ccfCD_ACNTUNIT" :
        			this.dsSearch.setColumn(0, "NO_DONG", "");
        			break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		this.fnSelectDetail();
        		this.fnSelectTabData();

        		obj.oldrow = -1;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divDataRight_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter2") {
        		this.divData.form.divDataRight.form.divSplitter2.set_top(e.clienty);
        		this.divData.form.divDataRight.form.resetScroll();
        	}
        };

        this.divData_divSplitter2_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter2");
        	return true;
        };

        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
        		this.dsList.clearData();
        	}
        }

        this.divData_tabData_onchanged = function(obj,e)
        {
        	if (e.preindex == e.postindex) return;

        	this.fnSelectTabData();
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "TY_CONTRACTOR")
        		{
        			if(e.newvalue == "P")
        			{
        				this.txtCD_VENDOR.set_readonly(true);
                        this.txtDS_VENDOR.set_readonly(true);
                        this.txtDS_UPJONG.set_readonly(true);
                        this.txtDS_UPTAE.set_readonly(true);

        				this.dsList.setColumn(0, "CD_VENDOR", "");
        				this.dsList.setColumn(0, "DS_VENDOR", "");
        				this.dsList.setColumn(0, "DS_UPJONG", "");
        				this.dsList.setColumn(0, "DS_UPTAE", "");

        				this.divData.form.divDataRight.form.divDataTop.form.staCD_VENDOR.set_textDecoration("none");
        				this.divData.form.divDataRight.form.divDataTop.form.staDS_VENDOR.set_textDecoration("none");

        			}
        			else
        			{
        				this.txtCD_VENDOR.set_readonly(false);
                        this.txtDS_VENDOR.set_readonly(false);
                        this.txtDS_UPJONG.set_readonly(false);
                        this.txtDS_UPTAE.set_readonly(false);

        				this.divData.form.divDataRight.form.divDataTop.form.staCD_VENDOR.set_textDecoration("underline");
        				this.divData.form.divDataRight.form.divDataTop.form.staDS_VENDOR.set_textDecoration("underline");
        			}
        		}
        	}
        };

        this.fnInit = function() {
        	if(this.dsList.getColumn(0, "TY_STATE") == "미계약" && this.gfnIsNull(this.dsList.getColumn(0, "DS_CONTRACTOR")))
        	{
        		this.rdoTY_CONTRACTOR.set_enable(false);
        		this.cfNO_POST.set_enable(false);
        		this.cfNO_RECPOST.set_enable(false);
        		this.rdoTY_EBILL.set_enable(false);
        		this.rdoYN_JOINT.set_enable(false);
        		this.rdoYN_BUNYANG.set_enable(false);

        		this.txtNO_TEL.set_readonly(true);
        		this.txtNO_MOBILE.set_readonly(true);
        		this.txtNO_OFFICETEL.set_readonly(true);
        		this.txtDS_ADDR2.set_readonly(true);
        		this.txtDS_RECADDR2.set_readonly(true);
        		this.txtDS_EMAIL.set_readonly(true);
        		this.txtDS_UPTAE.set_readonly(true);
        		this.txtDS_UPJONG.set_readonly(true);
        		this.txtDS_VENDOR.set_readonly(true);
        		this.txtDS_REMARK.set_readonly(true);
        		this.txtNO_CONTRACT.set_readonly(true);
        	}
        	else
        	{
        		this.rdoTY_CONTRACTOR.set_enable(true);
        		this.cfNO_POST.set_enable(true);
        		this.cfNO_RECPOST.set_enable(true);
        		this.rdoYN_JOINT.set_enable(true);

        		this.txtNO_TEL.set_readonly(false);
        		this.txtNO_MOBILE.set_readonly(false);
        		this.txtNO_OFFICETEL.set_readonly(false);
        		this.txtDS_ADDR2.set_readonly(false);
        		this.txtDS_RECADDR2.set_readonly(false);
        		this.txtDS_EMAIL.set_readonly(false);
        		this.txtDS_REMARK.set_readonly(false);
        		this.txtNO_CONTRACT.set_readonly(false);
        	}

        	if(this.dsList.getColumn(0, "YN_READONLY") == "Y")
        	{
        		this.fnDataReadOnly();
        	}

        	if(this.gfnNvl(this.dsList.getColumn(0, "TY_STATE"),"").trim() == "계약")
        	{
        		this.divData.form.divDataRight.form.divDataTop.form.staYN_JOINT.set_visible(false);
        		this.divData.form.divDataRight.form.divDataTop.form.rdoYN_JOINT.set_visible(false);
        	}
        	else
        	{
        		this.divData.form.divDataRight.form.divDataTop.form.staYN_JOINT.set_visible(true);
        		this.divData.form.divDataRight.form.divDataTop.form.rdoYN_JOINT.set_visible(true);
        	}

        	 if (this.FormInfo.TY_AUTH != "R")
        	{
        		if (this.dsList.getColumn(0, "TY_STATE") == "미계약")
        		{
        			this.btnConform.set_enable(true); //계약체결
        			this.btnCancel.set_enable(false); //계약취소
        			this.btnJoint.set_enable(false); //공동명의계약자
        			this.btnItemContract.set_enable(false); //별도계약
        			this.btnContractSetting.set_enable(false);
        			this.btnPreview2.set_enable(false); //도로점용 권리ㆍ의무 양도 및 인수 계약서
        			this.btnPayment.set_enable(false); //대납확인서
        			//tbbPartSunapMemoset_enable(false); //분할납부각서

        			if (this.FormInfo.ID_GROUP == "H" || this.FormInfo.ID_GROUP == "0")
        			{ this.btnContractSetting.set_enable(true); }

        			if (this.dsLeft.getColumn(this.dsLeft.rowposition, "YN_CONTRACT") == "계약가능")
        			{ this.btnConform.set_enable(true); }    //계약체결
        			else
        			{ this.btnConform.set_enable(false); }    //계약체결

        		}
        		else
        		{
        			this.btnConform.set_enable(false); //계약체결
        			this.btnCancel.set_enable(true); //계약취소
        			this.btnItemContract.set_enable(true); //별도계약
        			this.btnPreview2.set_enable(true); //도로점용 권리ㆍ의무 양도 및 인수 계약서
        			this.btnPayment.set_enable(true); //대납확인서

        			if (this.dsList.getColumn(0, "YN_JOINT") == "Y")
        			{
        				this.btnJoint.set_enable(true); //공동명의계약자
        			}

        			this.btnContractSetting.set_enable(false);
        		}
        		this.btnDivCopy.set_enable(true); // 안분내역복사
        	}
        	else
        	{
        		this.btnConform.set_enable(false); //계약체결
        		this.btnCancel.set_enable(false); //계약취소
        		this.btnJoint.set_enable(false); //공동명의계약자
        		this.btnContractSetting.set_enable(false);
        		this.btnPreview2.set_enable(false); //계약취소
        		this.btnPayment.set_enable(false); //대납확인서
        		this.btnDivCopy.set_enable(false); // 안분내역복사

        	}
        }

        this.fnDataReadOnly = function()
        {
        	this.rdoTY_CONTRACTOR.set_enable(false);
        	this.cfNO_POST.set_enable(false);
        	this.cfNO_RECPOST.set_enable(false);
        	this.rdoYN_JOINT.set_enable(false);

        	this.txtNO_TEL.set_readonly(true);
        	this.txtNO_MOBILE.set_readonly(true);
        	this.txtNO_OFFICETEL.set_readonly(true);
        	this.txtDS_ADDR2.set_readonly(true);
        	this.txtDS_RECADDR2.set_readonly(true);
        	this.txtDS_EMAIL.set_readonly(true);
        	this.txtDS_UPTAE.set_readonly(true);
        	this.txtDS_UPJONG.set_readonly(true);
        	this.txtDS_VENDOR.set_readonly(true);
        	this.txtDS_REMARK.set_readonly(true);
        	this.txtNO_CONTRACT.set_readonly(true);
        }

        // 약정정보 변경 이벤트
        this.dsList1_onvaluechanged = function(obj,e)
        {
        	if(e.newvalue != e.oldvalue)
        	{
        		if(e.columnid == "처리금액" && nexacro.toNumber(e.newvalue,0) > 0)
        		{
        			var gap_land = 0;
        			var gap_building = 0;
        			var gap_vat = 0;
        			var am_totalLand = 0;
        			var am_totalBuilding = 0;
        			var am_totalVat = 0;

        			var am_land = 0;
        			var am_building = 0;
        			var am_vat = 0;
        			var am_selling = 0;
        			var rt_division = 0;


        			if(this.dsList1.getColumn(this.dsList1.rowposition, "TY_NAPIP") != "R")
        			{
        				rt_division = this.dsListSum.getColumn(0, "AM_SELLING") / nexacro.toNumber(e.newvalue,0);

        				am_land = nexacro.floor(this.dsListSum.getColumn(0, "AM_LAND") / rt_division);
        				am_building = nexacro.floor(this.dsListSum.getColumn(0, "AM_BUILDING") / rt_division);
        				am_vat = nexacro.floor(this.dsListSum.getColumn(0, "AM_VAT") / rt_division);

        				am_selling = am_land + am_building + am_vat;

        				var mod = nexacro.toNumber(e.newvalue,0) - am_selling;

        				if(this.gfnNvl(this.dsList.getColumn(0, "AM_VAT"),0) == 0)
        				{
        					switch(mod)
        					{
        						case 1 : am_building++; break;
        						case 2 : am_building++; am_land++; break;
        					}
        				}
        				else
        				{
        					switch(mod)
        					{

        						case 1 : am_vat++; break;
        						case 2 : am_vat++; am_building++; break;
        						case 3 : am_vat++; am_building++; am_land++; break;
        					}
        				}
        			}
        			// 잔금이 맞다면.
        			else
        			{
        				for (var i = 0; i < this.dsList1.rowcount; i++)
        				{
        					am_totalLand += Math.abs(this.dsList1.getColumn(i, "AM_LAND"));
        					am_totalBuilding += Math.abs(this.dsList1.getColumn(i, "AM_BUILDING"));
        					am_totalVat += Math.abs(this.dsList1.getColumn(i, "AM_VAT"));
        				}

        				gap_land = nexacro.toNumber(this.dsListSum.getColumn(0, "AM_LAND"),0) - am_totalLand;
        				gap_building = nexacro.toNumber(this.dsListSum.getColumn(0, "AM_BUILDING"),0) - am_totalBuilding;
        				gap_vat = nexacro.toNumber(this.dsListSum.getColumn(0, "AM_VAT"),0) - am_totalVat;

        				am_land = am_land + gap_land;
        				am_building = am_building + gap_building;
        				am_vat = am_vat + gap_vat;
        			}

        			am_selling = am_land + am_building + am_vat;

        			this.dsList1.set_enableevent(false);
        			this.dsList1.setColumn(this.dsList1.rowposition, "AM_LAND", am_land);
        			this.dsList1.setColumn(this.dsList1.rowposition, "AM_BUILDING", am_building);
        			this.dsList1.setColumn(this.dsList1.rowposition, "AM_VAT", am_vat);
        			this.dsList1.setColumn(this.dsList1.rowposition, "AM_SELLING", am_selling);
        			this.fnGrid1Sum();
        			this.dsList1.set_enableevent(true);
        		}
        	}
        };

        this.fnGrid1Sum = function()
        {
        	if(this.dsList1.rowcount > 0)
        	{
        		this.dsListSum1.clearData();
        		var am_land = 0;
        		var am_building = 0;
        		var am_vat = 0;
        		var am_selling = 0;

        		for(var i = 0; i < this.dsList1.rowcount; i++)
        		{
        			am_land += this.gfnNvl(this.dsList1.getColumn(i, "AM_LAND"),0);
        			am_building += this.gfnNvl(this.dsList1.getColumn(i, "AM_BUILDING"),0);
        			am_vat += this.gfnNvl(this.dsList1.getColumn(i, "AM_VAT"),0);
        			am_selling += this.gfnNvl(this.dsList1.getColumn(i, "AM_SELLING"),0);
        		}

        		this.dsListSum1.addRow();

        		this.dsListSum1.setColumn(0, "AM_LAND", am_land);
        		this.dsListSum1.setColumn(0, "AM_BUILDING", am_building);
        		this.dsListSum1.setColumn(0, "AM_VAT", am_vat);
        		this.dsListSum1.setColumn(0, "AM_SELLING", am_selling);
        	}
        }

        // 탭 관련 관리함수
        this.fnGetTabIndex = function()
        {
        	var index = -1;

        	var text = this.divData.form.divDataRight.form.divDataBottom.form.tabData.tabpages[this.divData.form.divDataRight.form.divDataBottom.form.tabData.tabindex].text;

        	switch(text)
        	{
        		case "약정정보" : index = 1;
        			break;
        		case "수납정보" : index = 2;
        			break;
        	}

        	return index;
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

        this.divData_divDataRight_divDataTop_txtNO_MOBILE_onkeyup = function(obj,e)
        {
        	if((e.keycode >= 48 && e.keycode <= 57) || (e.keycode >= 96 && e.keycode <= 105))
        	{
        		obj.set_value(this.fnConvertMobileNumber(obj.value));
        	}
        };


        this.divData_divDataRight_divDataBottom_tabData_tab1_btnDivCopy_onclick = function(obj,e)
        {
        	// 약정정보 탭이라면.
        	if(this.fnGetTabIndex() == 1)
        	{
        		var nrow = this.gfnGridAdd(this.dxGrid1, "bottom");
        		this.dsList1.setColumn(nrow, "TY_NAPIP" , this.dsList1.getColumn(nrow-1, "TY_NAPIP"));
        		this.dsList1.setColumn(nrow, "NO_NAPCHA" , this.dsList1.getColumn(nrow-1, "NO_NAPCHA"));
        		this.dsList1.setColumn(nrow, "DT_STARTAGREE" , this.dsList1.getColumn(nrow-1, "DT_STARTAGREE"));
        		this.dsList1.setColumn(nrow, "DT_ENDAGREE" , this.dsList1.getColumn(nrow-1, "DT_ENDAGREE"));
        		this.dsList1.setColumn(nrow, "처리금액" , this.dsList1.getColumn(nrow-1, "처리금액"));
        		this.dsList1.setColumn(nrow, "AM_LAND" , this.dsList1.getColumn(nrow-1, "AM_LAND"));
        		this.dsList1.setColumn(nrow, "AM_BUILDING" , this.dsList1.getColumn(nrow-1, "AM_BUILDING"));
        		this.dsList1.setColumn(nrow, "AM_VAT" , this.dsList1.getColumn(nrow-1, "AM_VAT" ));
        		this.dsList1.setColumn(nrow, "AM_SELLING" , this.dsList1.getColumn(nrow-1, "AM_SELLING"));
        	}
        };

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
        	param.DONG		  = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.FLOOR		  = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.HO 		  = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");
        	param.UNIONMEMBER = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_UNIONMEMBER");
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

        this.fnCancel = function()
        {
        	var param = {};
        	param.CD_ACNTUNIT 	= this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT 	= this.dsSearch.getColumn(0, "DS_ACNTUNIT");;
        	param.DONG		  	= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.FLOOR		  	= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.HO 		  	= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");
        	param.UNIONMEMBER 	= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_UNIONMEMBER");
        	param.NO_SIZE 	  	= this.dsList.getColumn(0, "NO_SIZE");
        	param.TY_TYPE 	  	= this.dsList.getColumn(0, "TY_TYPE");
        	param.TY_DISTRIC  	= this.dsList.getColumn(0, "TY_DISTRICT");
        	param.RT_OPTION   	= this.dsList.getColumn(0, "RT_OPTION");
        	param.DS_OPTION   	= this.dsList.getColumn(0, "DS_OPTION");
        	param.DT_CONTRACT   = this.dsList.getColumn(0, "DT_CONTRACT");
        	param.DS_CONTRACTOR = this.dsList.getColumn(0, "DS_CONTRACTOR");
        	param.NO_JUMIN      = this.dsList.getColumn(0, "NO_JUMIN");
        	param.NO_OFFICETEL  = this.dsList.getColumn(0, "NO_OFFICETEL");
        	param.NO_TEL        = this.dsList.getColumn(0, "NO_TEL");
        	param.NO_MOBILE     = this.dsList.getColumn(0, "NO_MOBILE");
        	param.CD_VENDOR     = this.dsList.getColumn(0, "CD_VENDOR");
        	param.DS_VENDOR     = this.dsList.getColumn(0, "DS_VENDOR");
        	param.DS_UPTAE      = this.dsList.getColumn(0, "DS_UPTAE");
        	param.DS_UPJONG     = this.dsList.getColumn(0, "DS_UPJONG");
        	param.DS_EMAIL      = this.dsList.getColumn(0, "DS_EMAIL");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRB_DLGCONTRACTRETRACT", "fnDLGCONTRACTRETRACT_callback", param);
        }

        this.fnDLGCONTRACTRETRACT_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        this.fnJoint = function()
        {
        	var param = {};
        	param.CD_ACNTUNIT 	= this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT 	= this.dsSearch.getColumn(0, "DS_ACNTUNIT");;
        	param.DONG		  	= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.FLOOR		  	= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.HO 		  	= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");
        	param.UNIONMEMBER 	= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_UNIONMEMBER");
        	param.NO_SIZE 	  	= this.dsList.getColumn(0, "NO_SIZE");
        	param.TY_TYPE 	  	= this.dsList.getColumn(0, "TY_TYPE");
        	param.TY_DISTRIC  	= this.dsList.getColumn(0, "TY_DISTRICT");
        	param.RT_OPTION   	= this.dsList.getColumn(0, "RT_OPTION");
        	param.DS_OPTION   	= this.dsList.getColumn(0, "DS_OPTION");
        	param.AM_RECEIVED   = this.dsListSum1.getColumn(0, "AM_SELLING");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRB_JOINTCONTRACTOR", "fnJOINTCONTRACTOR_callback", param);
        }

        this.fnJOINTCONTRACTOR_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        this.fnAgreeCopy = function()
        {
        	var msg = "타 동층호의 약정을 복사하기 위해서는 현재의 약정 정보를\r\n삭제해야 합니다. 삭제 하시겠습니까?";
        	this.gfnConfirm(msg , "fnAgreeCopy_callback");
        }

        this.fnAgreeCopy_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnAgreeDelete("copy");
        	}
        }

        this.fnAgreeOpen = function()
        {
        	var param = {};
        	param.CD_ACNTUNIT 	= this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT 	= this.dsSearch.getColumn(0, "DS_ACNTUNIT");;
        	param.DONG		  	= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.FLOOR		  	= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.HO 		  	= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");
        	param.UNIONMEMBER 	= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_UNIONMEMBER");
        	param.NO_SIZE 	  	= this.dsList.getColumn(0, "NO_SIZE");
        	param.TY_TYPE 	  	= this.dsList.getColumn(0, "TY_TYPE");
        	param.TY_DISTRIC  	= this.dsList.getColumn(0, "TY_DISTRICT");
        	param.RT_OPTION   	= this.dsList.getColumn(0, "RT_OPTION");
        	param.DS_OPTION   	= this.dsList.getColumn(0, "DS_OPTION");
        	param.AM_RECEIVED   = this.dsListSum1.getColumn(0, "AM_SELLING");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRB_DLGAGREEMENTCOPY", "fnAgreeOpen_callback", param);
        }

        this.fnAgreeOpen_callback = function(strID, val)
        {
        	if(!this.gfnIsNull(val))
        	{
        		this.fnAgreeSelect(val.COPY_DONG, val.COPY_FLOOR, val.COPY_HO, val.DONG_CD_ACNTUNIT);
        	}
        }

        this.fnAgreeDeleteChk = function()
        {
        	var msg = "기존 해당 동층호의 약정정보를 삭제하시겠습니까";
        	this.gfnConfirm(msg, "fnAgreeDeleteChk_callback");
        }

        this.fnAgreeDeleteChk_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnAgreeDelete("del");
        	}
        }

        // 약정 삭제.
        this.fnAgreeDelete = function(val)
        {
        	this.dsAgree.clearData();
        	var nrow = this.dsAgree.addRow();

        	this.dsAgree.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsAgree.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsAgree.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsAgree.setColumn(nrow, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        	this.dsAgree.setColumn(nrow, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        	this.dsAgree.setColumn(nrow, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        	this.dsAgree.setColumn(nrow, "NO_UNIONMEMBER", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_UNIONMEMBER"));

        	var strSvcId    = "delete_agree";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete_agree=dsAgree";
        	var outData     = "";
        	var strArg      = "copy=" + val;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        // 약정 복사.
        this.fnAgreeSelect = function(dong, floor, ho, cd_acntunit)
        {
        	this.dsAgree.clearData();
        	this.dsAgree.addRow();
        	this.dsAgree.setColumn(0, "CD_ACNTUNIT", this.gfnNvl(cd_acntunit,"").substr(0,6));
        	this.dsAgree.setColumn(0, "TY_GUBUN", this.gfnNvl(cd_acntunit,"").substr(6,1));
        	this.dsAgree.setColumn(0, "NO_CHASU",this.gfnNvl(cd_acntunit,"").substr(7,2));
        	this.dsAgree.setColumn(0, "NO_DONG", dong);
        	this.dsAgree.setColumn(0, "NO_FLOOR", floor);
        	this.dsAgree.setColumn(0, "NO_HO", ho);
        	this.dsAgree.setColumn(0, "NO_UNIONMEMBER", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_UNIONMEMBER"));

        	var strSvcId    = "select_agree";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "select1=dsSelect";
         	var outData     = "dsList1=select10";
        	var strArg      = "" ;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnItemContract = function()
        {
        	var param = {};

        	param.CD_ACNTUNIT 	= this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT 	= this.dsSearch.getColumn(0, "DS_ACNTUNIT");;
        	param.NO_DONG		= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.NO_FLOOR		= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.NO_HO 		= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");
        	param.NO_UNIONMEMBER= "";
        	param.NO_CONTRACT	= "";
        	param.NO_SIZE 	  	= this.dsList.getColumn(0, "NO_SIZE");
        	param.TY_TYPE 	  	= this.dsList.getColumn(0, "TY_TYPE");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRF_ITEMCONTRACT", "", param);
        }

        this.fnContractSetting = function()
        {
        	var msg = "해당 세대의 계약처리여부 상태값을 변경합니다.\r\n계약불가->계약가능 / 계약가능->계약불가.\r\n처리 하시겠습니까?";
        	this.gfnConfirm(msg,"fnContractSetting_callback");
        }

        this.fnContractSetting_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsUpdateCont.clearData();
        		var nrow = this.dsUpdateCont.addRow();
        		this.dsUpdateCont.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        		this.dsUpdateCont.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        		this.dsUpdateCont.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        		this.dsUpdateCont.setColumn(nrow, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        		this.dsUpdateCont.setColumn(nrow, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        		this.dsUpdateCont.setColumn(nrow, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        		this.dsUpdateCont.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        		var strSvcId    = "update_cont";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "update_cont=dsUpdateCont";
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

        this.fnPreview2 = function()
        {
        	this.gfnAlert("Drb_ContractDetailPreview2 호출");
        }

        this.fnPayment = function()
        {
        	var param = {};

        	param.CD_ACNTUNIT 	= this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT 	= this.dsSearch.getColumn(0, "DS_ACNTUNIT");;
        	param.NO_DONG		= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.NO_FLOOR		= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.NO_HO 		= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");
        	param.NO_UNIONMEMBER= "";
        	param.TY_TYPE 	  	= this.dsList.getColumn(0, "TY_TYPE");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRB_CONTRACTDETAIL_DLG", "fnPayment_callback", param);

        }

        this.fnPayment_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.gfnAlert("Drb_ContractDetailPreview4 호출");
        	}
        }

        this.fnDrcReceipt = function()
        {
        	var param = {};

        	param.CD_ACNTUNIT 	= this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT 	= this.dsSearch.getColumn(0, "DS_ACNTUNIT");;
        	param.NO_DONG		= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.NO_FLOOR		= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.NO_HO 		= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");
        	param.NO_UNIONMEMBER= "";
        	param.DS_CONTRACTOR = this.dsList.getColumn(0, "DS_CONTRACTOR");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRC_RECEIPTDETAIL", "fnDrcReceipt_callback", param);
        }

        this.fnDrcReceipt_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        this.fnDrfReceipt = function()
        {
        	var param = {};

        	param.CD_ACNTUNIT 	= this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT 	= this.dsSearch.getColumn(0, "DS_ACNTUNIT");;
        	param.NO_DONG		= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.NO_FLOOR		= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.NO_HO 		= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");
        	param.NO_UNIONMEMBER= "";
        	param.DS_CONTRACTOR = this.dsList.getColumn(0, "DS_CONTRACTOR");
        	param.TY_TYPE 		= this.dsList.getColumn(0, "TY_TYPE");
        	param.NO_SIZE 		= this.dsList.getColumn(0, "NO_SIZE");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRF_RECEIPTDETAIL", "fnDrFReceipt_callback", param);
        }

        this.fnDrfReceipt_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        this.fnContractorHis = function()
        {
        	var param = {};

        	param.CD_ACNTUNIT 	= this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT 	= this.dsSearch.getColumn(0, "DS_ACNTUNIT");;
        	param.TY_GUBUN 		= this.dsSelectLeft.getColumn(0, "TY_GUBUN");
        	param.NO_CHASU		= this.dsSelectLeft.getColumn(0, "NO_CHASU");
        	param.NO_DONG		= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.NO_FLOOR		= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.NO_HO 		= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");
        	param.NO_UNIONMEMBER= this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_UNIONMEMBER");;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRB_CONTRACTOR_HIS", "", param);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.addEventHandler("ondragmove",this.divDataRight_ondragmove,this);
            this.divData.form.divDataRight.form.divSplitter2.addEventHandler("ondrag",this.divData_divSplitter2_ondrag,this);
            this.divData.form.divDataRight.form.divDataTop.form.txtNO_MOBILE.addEventHandler("onkeyup",this.divData_divDataRight_divDataTop_txtNO_MOBILE_onkeyup,this);
            this.divData.form.divDataRight.form.divDataTop.form.txtDS_RECADDR2.addEventHandler("onkillfocus",this.divData_divDataRight_divDataTop_txtDS_RECADDR2_onkillfocus,this);
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form.btnDivCopy.addEventHandler("onclick",this.divData_divDataRight_divDataBottom_tabData_tab1_btnDivCopy_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList1_onvaluechanged,this);
        };
        this.loadIncludeScript("DRB_CONTRACTMANAGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
