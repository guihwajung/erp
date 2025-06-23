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
            obj._setContents("<ColumnInfo><Column id=\"TY_TYPE_DS\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BUNYANG1\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BUNYANG2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR1_AFTERMOVE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2_AFTERMOVE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_END\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUSTART1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUEND1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUSTART2\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUEND2\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SUKUM1\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SUKUM2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SUKUM1_IN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SUKUM2_IN\" type=\"STRING\" size=\"256\"/><Column id=\"UT_DISCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"STD_DISCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REFTEL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"UT_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"STD_DELAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRAPR_BUNYANG_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLFPR_BASEINFO_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLFPR_BASEINFO_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DLFPR_BASEINFO_DELETE</Col></Row><Row><Col id=\"SP\">DLFPR_BASEINFO_SELECT</Col><Col id=\"TARGET\">selectEtc</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DRAPR_BANKACCOUNT_SELECT</Col></Row><Row><Col id=\"TARGET\">insert1</Col><Col id=\"SP\">DRAPR_BANKACCOUNT_INSERT</Col></Row><Row><Col id=\"TARGET\">update1</Col><Col id=\"SP\">DRAPR_BANKACCOUNT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete1</Col><Col id=\"SP\">DRAPR_BANKACCOUNT_DELETE</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DRFPR_PORTIONB_SELECT</Col></Row><Row><Col id=\"TARGET\">insert3</Col><Col id=\"SP\">DRFPR_PORTIONB_INSERT</Col></Row><Row><Col id=\"TARGET\">update3</Col><Col id=\"SP\">DRFPR_PORTIONB_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete3</Col><Col id=\"SP\">DRFPR_PORTIONB_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">자체사업</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">도급사업</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">조합사업</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">재건축사업</Col></Row><Row><Col id=\"CD_CODE\">5</Col><Col id=\"DS_CODE\">재개발사업</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_END", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">진행</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">종료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DELAY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">V</Col><Col id=\"DS_CODE\">변동연체율</Col></Row><Row><Col id=\"CD_CODE\">F</Col><Col id=\"DS_CODE\">고정</Col></Row><Row><Col id=\"DS_CODE\">고정연체율</Col><Col id=\"CD_CODE\">F</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSTD_DELAY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">절상</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">절사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCAL_DELAY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">업계방식</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">업계방식</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">주택은행방식</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인코드</Col></Row><Row><Col id=\"CD_FIELD\">TY_TYPE</Col><Col id=\"DS_FIELD\">사업유형</Col></Row><Row><Col id=\"CD_FIELD\">DT_APPROVE</Col><Col id=\"DS_FIELD\">분양승인일자</Col></Row><Row><Col id=\"CD_FIELD\">ID_BUNYANG1</Col><Col id=\"DS_FIELD\">분양담당자1</Col></Row><Row><Col id=\"CD_FIELD\">TY_BID</Col><Col id=\"DS_FIELD\">선정방법</Col></Row><Row><Col id=\"DS_FIELD\">재산의표시</Col><Col id=\"CD_FIELD\">CD_ZIP</Col></Row><Row><Col id=\"CD_FIELD\">DS_ADDR2_AFTERMOVE</Col><Col id=\"DS_FIELD\">재산의표시</Col></Row><Row><Col id=\"CD_FIELD\">ID_SUKUM1</Col><Col id=\"DS_FIELD\">수금담당자</Col></Row><Row><Col id=\"CD_FIELD\">UT_DISCOUNT</Col><Col id=\"DS_FIELD\">할인료계산</Col></Row><Row><Col id=\"CD_FIELD\">UT_DELAY</Col><Col id=\"DS_FIELD\">연체료계산</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ACNTUNIT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">업계방식</Col></Row><Row><Col id=\"CD_CODE\">S</Col><Col id=\"DS_CODE\">분양</Col></Row><Row><Col id=\"CD_CODE\">L</Col><Col id=\"DS_CODE\">임대</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSTD_DISCOUNT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">절상</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">절사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListEtc", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SUKUM1\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SUKUM2\" type=\"STRING\" size=\"256\"/><Column id=\"UT_DISCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"STD_DISCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REFTEL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"UT_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"STD_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DISCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_DISCOUNT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">적용함</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">적용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_DELAY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">적용함</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">적용안함</Col></Row></Rows>");
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
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DLX_CFACNTUNIT_OPT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"390","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTopTitle","0","0",null,"22","5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("본계약정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","staTopTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("사업유형");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_CORP","staCD_CORP:-1","staTopTitle:5","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staSZ_EARTH_TOTAL","staBgCD_CORP:-1","staTopTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("사업지구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgSZ_EARTH_TOTAL","staSZ_EARTH_TOTAL:-1","staTopTitle:5","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_TYPE","0","staCD_CORP:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("모델하우스");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_TYPE","staTY_TYPE:-1","staBgCD_CORP:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_OPTION","staBgTY_TYPE:-1","staSZ_EARTH_TOTAL:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_text("사업지상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_OPTION","staYN_OPTION:-1","staBgSZ_EARTH_TOTAL:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_ADDRESS","0","staTY_TYPE:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_text("분양승인일자");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_ADDRESS","staDS_ADDRESS:-1","staBgTY_TYPE:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","staBgDS_ADDRESS:-1","staYN_OPTION:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_text("☎(모델하우스)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_TEL","staNO_TEL:-1","staBgYN_OPTION:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_APPROVE","0","staDS_ADDRESS:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_text("확정준공일자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_APPROVE","staDT_APPROVE:-1","staBgDS_ADDRESS:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_START","staBgDT_APPROVE:-1","staBgNO_TEL:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_text("입주예정기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_START","staDT_START:-1","staBgNO_TEL:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_IPJU_START_END","0","staDT_APPROVE:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_text("연체적용방식");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_IPJU_START_END","staDT_IPJU_START_END:-1","staBgDT_APPROVE:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_END","staBgDT_IPJU_START_END:-1","staDT_START:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("19");
            obj.set_text("입주확정기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_END","staYN_END:-1","staBgDT_START:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staID_BUNYANG1","0","staDT_IPJU_START_END:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("21");
            obj.set_text("분양담당자1/2");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgID_BUNYANG1","staID_BUNYANG1:-1","staBgDT_IPJU_START_END:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staID_BUNYANG2","staBgID_BUNYANG1:-1","staYN_END:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("23");
            obj.set_text("수금담당자1/2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgID_BUNYANG2","staID_BUNYANG2:-1","staBgYN_END:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_APPR","0","staID_BUNYANG1:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("25");
            obj.set_text("재산의표시");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_APPR","staDS_APPR:-1","staBgID_BUNYANG1:-1","718","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_REFTEL","0","staDS_APPR:39","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_text("사업유형");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_REFTEL","staNO_REFTEL:-1","staBgDS_APPR:39","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staID_SUKUM","staBgNO_REFTEL:-1","staDS_APPR:39","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("29");
            obj.set_text("☎(문의)");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgID_SUKUM","staID_SUKUM:-1","staBgDS_APPR:39","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_END","0","staNO_REFTEL:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("31");
            obj.set_text("수금담당자1/2");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_END","staID_BUNYANG1:-1","staBgNO_REFTEL:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_IPJU_START_END2","staBgDT_END:-1","staID_SUKUM:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("33");
            obj.set_text("연체방법");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_IPJU_START_END2","staDT_IPJU_START_END2:-1","staBgID_SUKUM:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_JUNGONG","0","staDT_END:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("35");
            obj.set_text("할인적용");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_JUNGONG","staYN_JUNGONG:-1","staBgDT_END:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_DELAY","staBgYN_JUNGONG:-1","staDT_IPJU_START_END2:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("37");
            obj.set_text("연체적용");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_DELAY","staTY_DELAY:-1","staBgDT_IPJU_START_END2:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoYN_END","staYN_OPTION:7","61","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("39");
            obj.set_innerdataset("dsYN_END");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDRESS","staDS_ADDRESS:5","61","290","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("40");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_TEL","staNO_TEL:5","crdoYN_END:9","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("41");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR1_AFTERMOVE","235","206","280","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("64");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR2_AFTERMOVE","ctxtDS_ADDR1_AFTERMOVE:5","206","280","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("42");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_REFTEL","staID_SUKUM:5","ctxtDS_ADDR2_AFTERMOVE:49","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoTY_DELAY","staTY_DELAY:5","304","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("44");
            obj.set_innerdataset("dsTY_DELAY");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtID_SUKUM1_IN","125","304","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("47");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtID_SUKUM2_IN","ctxtID_SUKUM1_IN:5","304","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("48");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_TYPE","125","32","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("49");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Combo("ccboTY_TYPE","125","275","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("51");
            obj.set_innerdataset("dsTY_TYPE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoTY_ACNTUNIT","545","33","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("52");
            obj.set_innerdataset("dsTY_ACNTUNIT");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_IPJUSTART1","543","119","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("53");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_IPJUEND1","ctxtDT_IPJUSTART1:5","119","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("54");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_IPJUSTART2","543","148","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("55");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_IPJUEND2","653","148","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("56");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtID_SUKUM1","543","177","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("57");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtID_SUKUM2","653","177","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("58");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_APPROVE","125","90","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("59");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_END","125","119","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("60");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtID_BUNYANG1","125","177","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("61");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtID_BUNYANG2","235","177","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("62");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_ZIP","125","206","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("63");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTopTitle00","0","240",null,"22","5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("67");
            obj.set_text("별도계약기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_JUNGONG00","119","357","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_DELAY00","537","357","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_DELAY00","418","357","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("72");
            obj.set_text("연체료계산");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_JUNGONG00","0","357","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("73");
            obj.set_text("할인료계산");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta00","671","362","17","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_text("원");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoSTD_DELAY","sta00:8","362","124","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("45");
            obj.set_innerdataset("dsSTD_DELAY");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta01","253","362","17","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("65");
            obj.set_text("원");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoSTD_DISCOUNT","sta01:5","362","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("46");
            obj.set_innerdataset("dsSTD_DISCOUNT");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtUT_DISCOUNT","125","362","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("68");
            obj.set_format("#,###");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtUT_DELAY","543","362","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("69");
            obj.set_format("#,###");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoYN_DISCOUNT","125","333","162","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("74");
            obj.set_innerdataset("dsYN_DISCOUNT");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoYN_DELAY","543","333","167","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("75");
            obj.set_innerdataset("dsYN_DELAY");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoCAL_DELAY","126","148","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("50");
            obj.set_innerdataset("dsCAL_DELAY");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("true");
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
            obj.set_text("계좌관리");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("지분관리");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","divData.form.divDataTop.form.crdoYN_END","value","dsList","YN_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.ctxtDS_ADDRESS","value","dsList","DS_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.ctxtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataTop.form.ctxtDS_ADDR2_AFTERMOVE","value","dsList","DS_ADDR2_AFTERMOVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataTop.form.ctxtNO_REFTEL","value","dsListEtc","NO_REFTEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataTop.form.crdoTY_DELAY","value","dsListEtc","TY_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataTop.form.crdoSTD_DELAY","value","dsListEtc","STD_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataTop.form.crdoSTD_DISCOUNT","value","dsListEtc","STD_DISCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.divDataTop.form.ctxtID_SUKUM1_IN","value","dsListEtc","ID_SUKUM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataTop.form.ctxtID_SUKUM2_IN","value","dsListEtc","ID_SUKUM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataTop.form.crdoCAL_DELAY","value","dsList","CAL_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.ctxtDT_IPJUSTART1","value","dsList","DT_IPJUSTART1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.ctxtDT_IPJUEND1","value","dsList","DT_IPJUEND1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataTop.form.ctxtDT_IPJUSTART2","value","dsList","DT_IPJUSTART2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.ctxtDT_IPJUEND2","value","dsList","DT_IPJUEND2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataTop.form.ctxtID_SUKUM1","value","dsList","ID_SUKUM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataTop.form.ctxtID_SUKUM2","value","dsList","ID_SUKUM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataTop.form.ctxtDT_APPROVE","value","dsList","DT_APPROVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.ctxtDT_END","value","dsList","DT_APPROVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.ctxtID_BUNYANG1","value","dsList","ID_BUNYANG1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.ctxtID_BUNYANG2","value","dsList","ID_BUNYANG2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataTop.form.ctxtCD_ZIP","value","dsList","CD_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataTop.form.ctxtDS_ADDR1_AFTERMOVE","value","dsList","DS_ADDR1_AFTERMOVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataTop.form.crdoTY_ACNTUNIT","value","dsList","TY_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataTop.form.ccboTY_TYPE","value","dsListEtc","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataTop.form.ctxtUT_DISCOUNT","value","dsListEtc","UT_DISCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataTop.form.ctxtUT_DELAY","value","dsListEtc","UT_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataTop.form.crdoYN_DISCOUNT","value","dsListEtc","YN_DISCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataTop.form.crdoYN_DELAY","value","dsListEtc","YN_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLF_BASEINFO.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.TY_STATUS = "";
        this.valChgYn = "N";

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

        	this.fnReadOnlyChange(true);
        	this.fnBtnEnable(false);
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
        	this.btnDelBase = this.gfnFormButtonAdd("btnDelBase", "fnDelBase");
        	this.btnItem = this.gfnFormButtonAdd("btnItem", "fnItem");
        	this.btnAgree = this.gfnFormButtonAdd("btnAgree", "fnAgree");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid1 = this.divData.form.divDataBottom.form.tabData.tab1.form.objGrid1;
        	this.dxGrid3 = this.divData.form.divDataBottom.form.tabData.tab3.form.objGrid3;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.divSearch.form.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divSearch.form.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//this.divSearch.form.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.divSearch.form.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//this.divData.form.divDataTop.form.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DL", "DLA_BASE_DETAIL_1");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DL", "DLF_BASEINFO_PORTION");

        	this.dxGrid3.BeforeUserDataSetParam = "fnGrid3_BeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("ID_SUKUM1", "string");
        	this.dsInsert.addColumn("ID_SUKUM2", "string");
        	this.dsInsert.addColumn("NO_REFTEL", "string");
        	this.dsInsert.addColumn("TY_DELAY", "string");
        	this.dsInsert.addColumn("YN_DISCOUNT", "string");
        	this.dsInsert.addColumn("UT_DELAY", "int");
        	this.dsInsert.addColumn("STD_DELAY", "string");
        	this.dsInsert.addColumn("YN_DELAY", "string");
        	this.dsInsert.addColumn("UT_DISCOUNT", "int");
        	this.dsInsert.addColumn("STD_DISCOUNT", "string");
        	this.dsInsert.addColumn("YN_VIRTUAL", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("TY_TYPE", "string");
        	this.dsUpdate.addColumn("ID_SUKUM1", "string");
        	this.dsUpdate.addColumn("ID_SUKUM2", "string");
        	this.dsUpdate.addColumn("NO_REFTEL", "string");
        	this.dsUpdate.addColumn("YN_DELAY", "string");
        	this.dsUpdate.addColumn("TY_DELAY", "string");
        	this.dsUpdate.addColumn("UT_DELAY", "int");
        	this.dsUpdate.addColumn("STD_DELAY", "string");
        	this.dsUpdate.addColumn("YN_DISCOUNT", "string");
        	this.dsUpdate.addColumn("UT_DISCOUNT", "int");
        	this.dsUpdate.addColumn("STD_DISCOUNT", "string");
        	this.dsUpdate.addColumn("YN_VIRTUAL", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");

        	this.dsInsertSub = new Dataset();
        	this.dsUpdateSub = new Dataset();
        	this.dsDeleteSub = new Dataset();
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

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ACNTUNIT"),"").substr(0,6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ACNTUNIT"),"").substr(6,1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ACNTUNIT"),"").substr(7,2));

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

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ACNTUNIT"),"").substr(0,6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ACNTUNIT"),"").substr(6,1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ACNTUNIT"),"").substr(7,2));

        	var strSvcId    = "selectEct";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectEtc=dsSelect";
        	var outData     = "dsListEtc=selectEtc0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackForce";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnDetail = function() {
        	this.dsDetail = new Dataset();
        	this.dsDetail.addColumn("CD_ACNTUNIT", "string");
        	this.dsDetail.addColumn("TY_GUBUN", "string");
        	this.dsDetail.addColumn("NO_CHASU", "string");

        	var tabIndex = this.fnGetTabIndex();

        	if(tabIndex == 1){
        		this.dsDetail.addColumn("YN_OPTION", "string");
        	}

        	this.dsDetail.clearData();
        	this.dsDetail.addRow();

        	this.dsDetail.setColumn(0, "CD_ACNTUNIT", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ACNTUNIT"),"").substr(0,6));
        	this.dsDetail.setColumn(0, "TY_GUBUN", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ACNTUNIT"),"").substr(6,1));
        	this.dsDetail.setColumn(0, "NO_CHASU", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ACNTUNIT"),"").substr(7,2));

        	if(tabIndex == 1){
        		this.dsDetail.setColumn(0, "YN_OPTION", "Y");
        	}

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select" + tabIndex + "=dsDetail";
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
        		case 3 :
        			var nrow = this.gfnGridAdd(this.dxGrid3);
        			this.dsList1.setColumn(nrow, "TY_GUJA", "5");
        		break;
        	}


        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.valChgYn = "Y";

        	switch(this.fnGetTabIndex())
        	{
        		case 1 :
        			this.gfnGridDel(this.dxGrid1);
        		break;
        		case 3 :
        			this.gfnGridDel(this.dxGrid3);
        		break;
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;
        	//if (!this.gfnDataValidate(this.dsListEtc, this.dsRequired)) return;
        	//if (!this.gfnDataValidate(this.dsListEtc)) return;

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();

        	if(this.TY_STATUS == "I")
        	{
        		var nrow = this.dsInsert.addRow();
        		this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        		this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        		this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        		this.dsInsert.setColumn(nrow, "ID_SUKUM1", this.dsListEtc.getColumn(0, "ID_SUKUM1"));
        		this.dsInsert.setColumn(nrow, "ID_SUKUM2", this.dsListEtc.getColumn(0, "ID_SUKUM2"));
        		this.dsInsert.setColumn(nrow, "NO_REFTEL", this.dsListEtc.getColumn(0, "NO_REFTEL"));
        		this.dsInsert.setColumn(nrow, "TY_DELAY", this.dsListEtc.getColumn(0, "TY_DELAY"));
        		this.dsInsert.setColumn(nrow, "YN_DISCOUNT", this.dsListEtc.getColumn(0, "YN_DISCOUNT"));
        		this.dsInsert.setColumn(nrow, "UT_DELAY", this.dsListEtc.getColumn(0, "UT_DELAY"));
        		this.dsInsert.setColumn(nrow, "STD_DELAY", this.dsListEtc.getColumn(0, "STD_DELAY"));
        		this.dsInsert.setColumn(nrow, "YN_DELAY", this.dsListEtc.getColumn(0, "YN_DELAY"));
        		this.dsInsert.setColumn(nrow, "UT_DISCOUNT", this.dsListEtc.getColumn(0, "UT_DISCOUNT"));
        		this.dsInsert.setColumn(nrow, "STD_DISCOUNT", this.dsListEtc.getColumn(0, "STD_DISCOUNT"));
        		this.dsInsert.setColumn(nrow, "YN_VIRTUAL", "N");
        		this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        	}
        	else
        	{
        		var nrow = this.dsUpdate.addRow();
        		this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        		this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        		this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        		this.dsUpdate.setColumn(nrow, "TY_TYPE", this.dsListEtc.getColumn(0, "TY_TYPE"));
        		this.dsUpdate.setColumn(nrow, "ID_SUKUM1", this.dsListEtc.getColumn(0, "ID_SUKUM1"));
        		this.dsUpdate.setColumn(nrow, "ID_SUKUM2", this.dsListEtc.getColumn(0, "ID_SUKUM2"));
        		this.dsUpdate.setColumn(nrow, "NO_REFTEL", this.dsListEtc.getColumn(0, "NO_REFTEL"));
        		this.dsUpdate.setColumn(nrow, "YN_DELAY", this.dsListEtc.getColumn(0, "YN_DELAY"));
        		this.dsUpdate.setColumn(nrow, "TY_DELAY", this.dsListEtc.getColumn(0, "TY_DELAY"));
        		this.dsUpdate.setColumn(nrow, "UT_DELAY", this.dsListEtc.getColumn(0, "UT_DELAY"));
        		this.dsUpdate.setColumn(nrow, "STD_DELAY", this.dsListEtc.getColumn(0, "STD_DELAY"));
        		this.dsUpdate.setColumn(nrow, "YN_DISCOUNT", this.dsListEtc.getColumn(0, "YN_DISCOUNT"));
        		this.dsUpdate.setColumn(nrow, "UT_DISCOUNT", this.dsListEtc.getColumn(0, "UT_DISCOUNT"));
        		this.dsUpdate.setColumn(nrow, "STD_DISCOUNT", this.dsListEtc.getColumn(0, "STD_DISCOUNT"));
        		this.dsUpdate.setColumn(nrow, "YN_VIRTUAL", "N");
        		this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate";
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

        this.fnSaveSub = function()
        {
        	var index = this.fnGetTabIndex();
        	this.fnSetSaveColumn(index);
        	this.fnSetSaveTab(index);
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

        this.fnSaveValidate = function() {
        	var validate = true;

        	if(this.gfnIsNull(this.dsListEtc.getColumn(0, "TY_TYPE")))
        	{
        		validate = false;
        		this.fnValidate_callback = function()
        		{
        			//this.divSearch.form.ccboTY_GUBUN.setFocus();
        		}

        		this.gfnAlert("사업유형이 입력되지 않았습니다!", "fnValidate_callback");
        	}
        	else if(this.gfnIsNull(this.dsListEtc.getColumn(0, "ID_SUKUM1")))
        	{
        		validate = false;
        		this.fnValidate_callback = function()
        		{
        			//this.divSearch.form.ctxtNO_CHASU.setFocus();
        		}

        		this.gfnAlert("수금담당자가 입력되지 않았습니다!", "fnValidate_callback");
        	}
        	else if(this.gfnIsNull(this.dsListEtc.getColumn(0, "UT_DISCOUNT")) || this.dsListEtc.getColumn(0, "UT_DISCOUNT") == 0)
        	{
        		validate = false;
        		this.fnValidate_callback = function()
        		{
        			//this.divSearch.form.ctxtNO_CHASU.setFocus();
        		}

        		this.gfnAlert("할인료계산이 입력되지 않았습니다!", "fnValidate_callback");
        	}
        	else if(this.gfnIsNull(this.dsListEtc.getColumn(0, "UT_DELAY")) || this.dsListEtc.getColumn(0, "UT_DELAY") == 0)
        	{
        		validate = false;
        		this.fnValidate_callback = function()
        		{
        			//this.divSearch.form.ctxtNO_CHASU.setFocus();
        		}

        		this.gfnAlert("연체료계산이 입력되지 않았습니다!", "fnValidate_callback");
        	}
        	else if(this.gfnIsNull(this.dsListEtc.getColumn(0, "STD_DELAY")))
        	{
        		validate = false;
        		this.fnValidate_callback = function()
        		{
        			//this.divSearch.form.ctxtNO_CHASU.setFocus();
        		}

        		this.gfnAlert("연체방법이 선택되지 않았습니다!", "fnValidate_callback");
        	}


        	return validate;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		if(this.dsList.rowcount < 1){
        			this.fnReadOnlyChange(true);
        		}else{
        			this.fnReadOnlyChange(false);
        			this.fnBtnEnable(true);
        			this.fnSelectEtc();
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			if(this.valChgYn == "Y")
        			{
        				this.valChgYn = "N";
        				this.fnSaveSub();
        			}
        			else
        			{
        				this.valChgYn = "N";
        				this.FormBtns.Select.click();
        			}

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "delete") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        				//this.fnReadOnlyChange(true);
        			}

        			this.gfnAlert("삭제가 완료되었습니다.","fnCallback_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "saveGrid") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        // SP에서 강제리턴시 콜빽받게 처리하는 콜빽함수(콜빽명뒤에 'Force' 붙여준다)
        this.fnCallbackForce = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "selectEct") {
        		if (errorCode != 0) {
        			this.TY_STATUS = "I";

        			this.dsListEtc.clearData();

        			this.dsListEtc.set_enableevent(false);
        			this.dsListEtc.addRow();
        			this.dsListEtc.setColumn(0, "TY_TYPE", "1");
        			this.dsListEtc.set_enableevent(true);

        			this.gfnAlert("별도계약 기본정보를 입력하세요.");
        		}else{
        			this.TY_STATUS = "U";
        		}

        		this.divData.form.divDataTop.form.ctxtTY_TYPE.set_value(this.divData.form.divDataTop.form.ccboTY_TYPE.text);

        		this.fnDetail();
        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_TOTALCHASU", "N");
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "ccfCD_ACNTUNIT")
        	{
        		/*
        		if(this.dsList.rowcount > 0)
        		{
        			this.dsList.clearData();
        			this.dsList.addRow();
        		}
        		//this.fnReadOnlyChange(false);
        		*/
        	}

        	return true;
        }

        this.fnGrid3_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	switch(id) {
        		case "DRX_CFVENDOR_CODEFIND":
        			//dsUserParam.setColumn(nrow, "FLAG", this.dsList3.getColumn(this.dsList3.rowposition, "TY_VENDORGUBUN") == "당사" ? "A" : this.dsList3.getColumn(this.dsList3.rowposition, "TY_VENDORGUBUN") == "A" ? "A" : this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "FLAG", this.AuthClient.ID_USER);
        		break;
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
        		this.dsList1.clearData(); this.dsList3.clearData();
        		this.dsList.clearData(); this.dsListEtc.clearData();

        		this.divData.form.divDataTop.form.ctxtTY_TYPE.set_value("");

        		this.fnBtnEnable(false);
        	}
        };


        // 탭 관련 관리함수
        this.fnGetTabIndex = function()
        {
        	var index = -1;

        	var text = this.divData.form.divDataBottom.form.tabData.tabpages[this.divData.form.divDataBottom.form.tabData.tabindex].text;

        	switch(text)
        	{
        		case "계좌관리" : index = 1;
        			break;
        		case "지분관리" : index = 3;
        			break;
        	}

        	return index;
        }

        this.divData_tabData_onchanged = function(obj,e)
        {
        	if(this.dsList.rowcount == 0) return;
        	this.valChgYn = "N";
        	this.fnDetail();
        };

        this.fnSetSaveColumn = function(index)
        {
        	this.dsInsertSub.clearData();
        	this.dsUpdateSub.clearData();
        	this.dsDeleteSub.clearData();

        	switch(index)
        	{
        		case 1 :
        			this.dsInsertSub = new Dataset();
        			this.dsInsertSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsInsertSub.addColumn("TY_GUBUN", "string");
        			this.dsInsertSub.addColumn("NO_CHASU", "string");
        			this.dsInsertSub.addColumn("YN_OPTION", "string");
        			this.dsInsertSub.addColumn("CD_GUJA", "string");
        			this.dsInsertSub.addColumn("NO_GUJA", "string");
        			this.dsInsertSub.addColumn("TY_GUJA", "string");
        			this.dsInsertSub.addColumn("DS_OWNER", "string");
        			this.dsInsertSub.addColumn("CD_VENDOR", "string");
        			this.dsInsertSub.addColumn("DS_BANK", "string");
        			this.dsInsertSub.addColumn("NO_TEL", "string");
        			this.dsInsertSub.addColumn("YN_LIST", "string");
        			this.dsInsertSub.addColumn("ID_INSERT", "string");
        			this.dsInsertSub.addColumn("CD_ACCOUNT_DUZON", "string");
        			this.dsInsertSub.addColumn("DS_REMARK", "string");

        			this.dsUpdateSub = new Dataset();
        			this.dsUpdateSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsUpdateSub.addColumn("TY_GUBUN", "string");
        			this.dsUpdateSub.addColumn("NO_CHASU", "string");
        			this.dsUpdateSub.addColumn("YN_OPTION", "string");
        			this.dsUpdateSub.addColumn("CD_GUJA", "string");
        			this.dsUpdateSub.addColumn("NO_GUJA", "string");
        			this.dsUpdateSub.addColumn("TY_GUJA", "string");
        			this.dsUpdateSub.addColumn("DS_OWNER", "string");
        			this.dsUpdateSub.addColumn("CD_VENDOR", "string");
        			this.dsUpdateSub.addColumn("DS_BANK", "string");
        			this.dsUpdateSub.addColumn("NO_TEL", "string");
        			this.dsUpdateSub.addColumn("YN_LIST", "string");
        			this.dsUpdateSub.addColumn("ID_UPDATE", "string");
        			this.dsUpdateSub.addColumn("CD_ACCOUNT_DUZON", "string");
        			this.dsUpdateSub.addColumn("DS_REMARK", "string");

        			this.dsDeleteSub = new Dataset();
        			this.dsDeleteSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsDeleteSub.addColumn("TY_GUBUN", "string");
        			this.dsDeleteSub.addColumn("NO_CHASU", "string");
        			this.dsDeleteSub.addColumn("YN_OPTION", "string");
        			this.dsDeleteSub.addColumn("CD_GUJA", "string");
        		break;

        		case 3 :
        			this.dsInsertSub = new Dataset();
        			this.dsInsertSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsInsertSub.addColumn("TY_GUBUN", "string");
        			this.dsInsertSub.addColumn("NO_CHASU", "string");
        			this.dsInsertSub.addColumn("TY_VENDORGUBUN", "string");
        			this.dsInsertSub.addColumn("CD_VENDOR", "string");
        			this.dsInsertSub.addColumn("YN_DAEPYO", "string");
        			this.dsInsertSub.addColumn("RT_JIBUN", "bigdecimal");
        			this.dsInsertSub.addColumn("TY_ACCOUNT", "string");
        			this.dsInsertSub.addColumn("STD_ACCOUNT", "string");
        			this.dsInsertSub.addColumn("ID_INSERT", "string");

        			this.dsUpdateSub = new Dataset();
        			this.dsUpdateSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsUpdateSub.addColumn("TY_GUBUN", "string");
        			this.dsUpdateSub.addColumn("NO_CHASU", "string");
        			this.dsUpdateSub.addColumn("TY_VENDORGUBUN", "string");
        			this.dsUpdateSub.addColumn("CD_VENDOR", "string");
        			this.dsUpdateSub.addColumn("YN_DAEPYO", "string");
        			this.dsUpdateSub.addColumn("RT_JIBUN", "bigdecimal");
        			this.dsUpdateSub.addColumn("TY_ACCOUNT", "string");
        			this.dsUpdateSub.addColumn("STD_ACCOUNT", "string");
        			this.dsUpdateSub.addColumn("ID_UPDATE", "string");

        			this.dsDeleteSub = new Dataset();
        			this.dsDeleteSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsDeleteSub.addColumn("TY_GUBUN", "string");
        			this.dsDeleteSub.addColumn("NO_CHASU", "string");
        			this.dsDeleteSub.addColumn("TY_VENDORGUBUN", "string");
        			this.dsDeleteSub.addColumn("CD_VENDOR", "string");
        		break;
        	}
        }

        this.fnSetSaveTab = function(index)
        {
        	var cd_acntunit = this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6);
        	var ty_gubun = this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1);
        	var no_chasu = this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2);

        	// 계좌관리
        	if(index == 1)
        	{
        		if (!this.gfnGridValidate(this.dxGrid1)) return;
        		for(var i = 0; i < this.dsList1.rowcount; i++)
        		{
        			var flag = this.gfnGetFlag(this.dsList1, i);
        			var tyGuja = "";
        			var ynList = "";

        			if(this.dsList1.getColumn(i, "TY_GUJA") == "해약"){
        				tyGuja = "4";
        			}else if(this.dsList1.getColumn(i, "TY_GUJA") == "별도계약"){
        				tyGuja = "5";
        			}else if(this.dsList1.getColumn(i, "TY_GUJA") == "기타"){
        				tyGuja = "9";
        			}

        			if(this.dsList1.getColumn(i, "YN_LIST") == "포함"){
        				ynList = "Y";
        			}else if(this.dsList1.getColumn(i, "YN_LIST") == "제외"){
        				ynList = "N";
        			}

        			switch(flag) {
        				case "I":
        					var nrow = this.dsInsertSub.addRow();
        					this.dsInsertSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsInsertSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsInsertSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsInsertSub.setColumn(nrow, "YN_OPTION", "Y");
        					this.dsInsertSub.setColumn(nrow, "CD_GUJA", this.dsList1.getColumn(i, "CD_GUJA"));
        					this.dsInsertSub.setColumn(nrow, "NO_GUJA", this.dsList1.getColumn(i, "NO_GUJA"));
        					this.dsInsertSub.setColumn(nrow, "TY_GUJA", tyGuja);
        					this.dsInsertSub.setColumn(nrow, "DS_OWNER", this.dsList1.getColumn(i, "DS_OWNER"));
        					this.dsInsertSub.setColumn(nrow, "CD_VENDOR", this.dsList1.getColumn(i, "CD_VENDOR"));
        					this.dsInsertSub.setColumn(nrow, "DS_BANK", this.dsList1.getColumn(i, "DS_BANK"));
        					this.dsInsertSub.setColumn(nrow, "NO_TEL", this.dsList1.getColumn(i, "NO_TEL"));
        					this.dsInsertSub.setColumn(nrow, "YN_LIST", ynList);
        					this.dsInsertSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        					this.dsInsertSub.setColumn(nrow, "CD_ACCOUNT_DUZON", this.dsList1.getColumn(i, "CD_ACCOUNT_DUZON"));
        					this.dsInsertSub.setColumn(nrow, "DS_REMARK", this.dsList1.getColumn(i, "DS_REMARK"));
        					break;
        				case "U":
        					var nrow = this.dsUpdateSub.addRow();
        					this.dsUpdateSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsUpdateSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsUpdateSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsUpdateSub.setColumn(nrow, "YN_OPTION", "Y");
        					this.dsUpdateSub.setColumn(nrow, "CD_GUJA", this.dsList1.getColumn(i, "CD_GUJA"));
        					this.dsUpdateSub.setColumn(nrow, "NO_GUJA", this.dsList1.getColumn(i, "NO_GUJA"));
        					this.dsUpdateSub.setColumn(nrow, "TY_GUJA", tyGuja);
        					this.dsUpdateSub.setColumn(nrow, "DS_OWNER", this.dsList1.getColumn(i, "DS_OWNER"));
        					this.dsUpdateSub.setColumn(nrow, "CD_VENDOR", this.dsList1.getColumn(i, "CD_VENDOR"));
        					this.dsUpdateSub.setColumn(nrow, "DS_BANK", this.dsList1.getColumn(i, "DS_BANK"));
        					this.dsUpdateSub.setColumn(nrow, "NO_TEL", this.dsList1.getColumn(i, "NO_TEL"));
        					this.dsUpdateSub.setColumn(nrow, "YN_LIST", ynList);
        					this.dsUpdateSub.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        					this.dsUpdateSub.setColumn(nrow, "CD_ACCOUNT_DUZON", this.dsList1.getColumn(i, "CD_ACCOUNT_DUZON"));
        					this.dsUpdateSub.setColumn(nrow, "DS_REMARK", this.dsList1.getColumn(i, "DS_REMARK"));
        					break;
        				case "D":
        					var nrow = this.dsDeleteSub.addRow();
        					this.dsDeleteSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsDeleteSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsDeleteSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsDeleteSub.setColumn(nrow, "YN_OPTION", "Y");
        					this.dsDeleteSub.setColumn(nrow, "CD_GUJA", this.dsList1.getColumn(i, "CD_GUJA"));
        					break;
        			}
        		}

        	}
        	// 지분관리
        	else if(index == 3)
        	{
        		if (!this.gfnGridValidate(this.dxGrid3)) return;

        		var cntDangSa = 0;
        		var cntTaSa = 0;
        		var cntDAEPYO = 0;
        		var jiBunYul = 0;

        		for(var i = 0; i < this.dsList3.rowcount; i++)
        		{
        			var flag = this.gfnGetFlag(this.dsList3, i);
        			var tyVendorgubun = "N";
        			var ynDaepyo = "N";
        			var tyAccount = "N";
        			var sdtAccount = "N";

        			if(this.dsList3.getColumn(i, "TY_VENDORGUBUN") == "당사"){
        				tyVendorgubun = "Y";
        			}
        			if(this.dsList3.getColumn(i, "YN_DAEPYO") == "대표"){
        				ynDaepyo = "Y";
        			}
        			if(this.dsList3.getColumn(i, "TY_ACCOUNT") == "처리함"){
        				tyAccount = "Y";
        			}
        			if(this.dsList3.getColumn(i, "STD_ACCOUNT") == "절상"){
        				sdtAccount = "Y";
        			}

        			if(this.dsList3.getColumn(i, "TY_VENDORGUBUN") == "당사"){
        				cntDangSa += 1;
        			}else if(this.dsList3.getColumn(i, "TY_VENDORGUBUN") == "타사"){
        				cntTaSa += 1;
        			}

        			if(this.dsList3.getColumn(i, "YN_DAEPYO") == "대표" || this.dsList3.getColumn(i, "YN_DAEPYO") == "Y"){
        				cntDAEPYO += 1;
        			}

        			jiBunYul += this.dsList3.getColumn(i, "RT_JIBUN");

        			switch(flag) {
        				case "I":
        					var nrow = this.dsInsertSub.addRow();
        					this.dsInsertSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsInsertSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsInsertSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsInsertSub.setColumn(nrow, "TY_VENDORGUBUN", tyVendorgubun);
        					this.dsInsertSub.setColumn(nrow, "CD_VENDOR", this.dsList3.getColumn(i, "CD_VENDOR"));
        					this.dsInsertSub.setColumn(nrow, "YN_DAEPYO", ynDaepyo);
        					this.dsInsertSub.setColumn(nrow, "RT_JIBUN", this.dsList3.getColumn(i, "RT_JIBUN"));
        					this.dsInsertSub.setColumn(nrow, "TY_ACCOUNT", tyAccount);
        					this.dsInsertSub.setColumn(nrow, "STD_ACCOUNT", sdtAccount);
        					this.dsInsertSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        					break;
        				case "U":
        					var nrow = this.dsUpdateSub.addRow();
        					this.dsUpdateSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsUpdateSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsUpdateSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsUpdateSub.setColumn(nrow, "TY_VENDORGUBUN", tyVendorgubun);
        					this.dsUpdateSub.setColumn(nrow, "CD_VENDOR", this.dsList3.getColumn(i, "CD_VENDOR"));
        					this.dsUpdateSub.setColumn(nrow, "YN_DAEPYO", ynDaepyo);
        					this.dsUpdateSub.setColumn(nrow, "RT_JIBUN", this.dsList3.getColumn(i, "RT_JIBUN"));
        					this.dsUpdateSub.setColumn(nrow, "TY_ACCOUNT", tyAccount);
        					this.dsUpdateSub.setColumn(nrow, "STD_ACCOUNT", sdtAccount);
        					this.dsUpdateSub.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        					break;
        				case "D":
        					var nrow = this.dsDeleteSub.addRow();
        					this.dsDeleteSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsDeleteSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsDeleteSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsDeleteSub.setColumn(nrow, "TY_VENDORGUBUN", tyVendorgubun);
        					this.dsDeleteSub.setColumn(nrow, "CD_VENDOR", this.dsList3.getColumn(i, "CD_VENDOR"));
        					break;
        			}
        		}

        		if (cntDangSa > 1){
        			this.gfnAlert("당사가 이미 존재합니다!");
        			return;
        		}
        		if (cntDAEPYO > 1){
        			this.gfnAlert("대표거래처는 하나만 존재해야합니다!");
        			return;
        		}
        		if (jiBunYul > 100){
        			this.gfnAlert("지분율 입력이 잘못되었습니다! 지분율이 100%를 초과했습니다!");
        			return;
        		}
        	}

        	if (this.dsInsertSub.rowcount == 0 && this.dsUpdateSub.rowcount == 0 && this.dsDeleteSub.rowcount == 0) return;

        	var strSvcId    = "saveGrid";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert" + index + "=dsInsertSub update" + index + "=dsUpdateSub delete" + index + "=dsDeleteSub";
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

        this.fnReadOnlyChange = function(chk)
        {
        	this.divData.form.divDataTop.form.ccboTY_TYPE.set_readonly(chk);
        	this.divData.form.divDataTop.form.ctxtNO_REFTEL.set_readonly(chk);
        	this.divData.form.divDataTop.form.ctxtID_SUKUM1_IN.set_readonly(chk);
        	this.divData.form.divDataTop.form.ctxtID_SUKUM2_IN.set_readonly(chk);
        	this.divData.form.divDataTop.form.crdoTY_DELAY.set_readonly(chk);
        	this.divData.form.divDataTop.form.ctxtUT_DISCOUNT.set_readonly(chk);
        	this.divData.form.divDataTop.form.crdoSTD_DISCOUNT.set_readonly(chk);
        	this.divData.form.divDataTop.form.ctxtUT_DELAY.set_readonly(chk);
        	this.divData.form.divDataTop.form.crdoSTD_DELAY.set_readonly(chk);
        	this.divData.form.divDataTop.form.crdoYN_DISCOUNT.set_readonly(chk);
        	this.divData.form.divDataTop.form.crdoYN_DELAY.set_readonly(chk);
        }




         // 품목관리 버튼 클릭시 팝업화면 호출
         this.fnItem = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox.value;

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLF_ITEM", "fnItemCallback", param);
        }

        this.fnItemCallback =  function(svcID, val) {
        	if(val == true) {
        		this.FormBtns.Select.click();
        	}
        };


         // 약정내역 버튼 클릭시 팝업화면 호출
         this.fnAgree = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox.value;

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLF_AGREEMENT", "fnAgreeCallback", param);
        }

        this.fnAgreeCallback =  function(svcID, val) {
        	if(val == true) {
        		this.FormBtns.Select.click();
        	}
        };

        // 등록삭제 버튼 클릭시 팝업화면 호출
         this.fnDelBase = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsList.rowcount < 1) { return false; }

        	var msg = "삭제 하시겠습니까?";

        	this.gfnConfirm(msg, "fnDelBase_callback");
        }

        // 등록삭제 버튼 클릭 후 callback
        this.fnDelBase_callback = function(strId, val)
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

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "delete";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
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

        // 콤보, 라디오 값변경시에 상태값변경시킨다
        this.dsListEtc_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		this.gfnSetFormStatus(this, "U");	// 폼상태 업데이트

        		this.fnBtnEnable(false);
        	}
        };


        // 탭 그리드 값 변경시 이벤트
        this.dsTabList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		this.valChgYn = "Y";
        	}

        };

        // 확장버튼 활성화 or 비활성화 처리
        this.fnBtnEnable = function(chk)
        {
        	this.btnDelBase.set_enable(chk);
        	this.btnItem.set_enable(chk);
        	this.btnAgree.set_enable(chk);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_ACNTUNIT.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataBottom.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsTabList_onvaluechanged,this);
            this.dsList3.addEventHandler("onvaluechanged",this.dsTabList_onvaluechanged,this);
            this.dsListEtc.addEventHandler("onvaluechanged",this.dsListEtc_onvaluechanged,this);
        };
        this.loadIncludeScript("DLF_BASEINFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
