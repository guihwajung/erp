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
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUSTART1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUEND1\" type=\"STRING\" size=\"256\"/><Column id=\"YN_END\" type=\"STRING\" size=\"256\"/><Column id=\"YN_VIRTUAL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OVERHEAT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BUNYANG1\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BUNYANG2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR1_AFTERMOVE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2_AFTERMOVE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REFTEL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUSTART2\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUEND2\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BUNNAP\" type=\"STRING\" size=\"256\"/><Column id=\"UT_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"STD_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"UT_DISCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"STD_DISCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SUKUM1\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SUKUM2\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DONGHO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"DD_HALIN\" type=\"STRING\" size=\"256\"/><Column id=\"DD_DELAY\" type=\"INT\" size=\"256\"/><Column id=\"YN_JUNGONG\" type=\"STRING\" size=\"256\"/><Column id=\"MAXYN\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"INT\" size=\"256\"/><Column id=\"DT_MH_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONTRACT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONTRACT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RESERVE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RESERVE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ORDER_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ORDER_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BUNYANG_COMPLETE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OWNER1\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_EARTH_TOTAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"DS_COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ETC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRAPR_BUNYANGDETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRAPR_BUNYANG_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRAPR_BUNYANG_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DRAPR_BUNYANG_DELETE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DRAPR_BANKACCOUNT_SELECT</Col></Row><Row><Col id=\"TARGET\">insert1</Col><Col id=\"SP\">DRAPR_BANKACCOUNT_INSERT</Col></Row><Row><Col id=\"TARGET\">update1</Col><Col id=\"SP\">DRAPR_BANKACCOUNT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete1</Col><Col id=\"SP\">DRAPR_BANKACCOUNT_DELETE</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DRAPR_HOUSEHOLD_SELECT</Col></Row><Row><Col id=\"TARGET\">insert2</Col><Col id=\"SP\">DRAPR_HOUSEHOLD_INSERT</Col></Row><Row><Col id=\"TARGET\">update2</Col><Col id=\"SP\">DRAPR_HOUSEHOLD_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete2</Col><Col id=\"SP\">DRAPR_HOUSEHOLD_DELETE</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DRAPR_FINANCING_SELECT</Col></Row><Row><Col id=\"TARGET\">insert3</Col><Col id=\"SP\">DRAPR_FINANCING_INSERT</Col></Row><Row><Col id=\"TARGET\">update3</Col><Col id=\"SP\">DRAPR_FINANCING_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete3</Col><Col id=\"SP\">DRAPR_FINANCING_DELETE</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DRAPR_PORTION_SELECT</Col></Row><Row><Col id=\"TARGET\">insert4</Col><Col id=\"SP\">DRAPR_PORTION_INSERT</Col></Row><Row><Col id=\"TARGET\">update4</Col><Col id=\"SP\">DRAPR_PORTION_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete4</Col><Col id=\"SP\">DRAPR_PORTION_DELETE</Col></Row><Row><Col id=\"SP\">DRAPR_RATEBYDAY_SELECT</Col><Col id=\"TARGET\">select5</Col></Row><Row><Col id=\"SP\">DRAPR_RATEBYDAY_INSERT</Col><Col id=\"TARGET\">insert5</Col></Row><Row><Col id=\"SP\">DRAPR_RATEBYDAY_UPDATE</Col><Col id=\"TARGET\">update5</Col></Row><Row><Col id=\"SP\">DRAPR_RATEBYDAY_DELETE</Col><Col id=\"TARGET\">delete5</Col></Row><Row><Col id=\"TARGET\">select6</Col><Col id=\"SP\">DRAPR_ACNT_RTDELAY_SELECT</Col></Row><Row><Col id=\"TARGET\">insert6</Col><Col id=\"SP\">DRAPR_ACNT_RTDELAY_INSERT</Col></Row><Row><Col id=\"TARGET\">update6</Col><Col id=\"SP\">DRAPR_ACNT_RTDELAY_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete6</Col><Col id=\"SP\">DRAPR_ACNT_RTDELAY_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACNTUNIT_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT_INSERT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">아파트</Col></Row><Row><Col id=\"CD_CODE\">O</Col><Col id=\"DS_CODE\">오피스텔</Col></Row><Row><Col id=\"CD_CODE\">S</Col><Col id=\"DS_CODE\">상가(근생시설)</Col></Row><Row><Col id=\"CD_CODE\">F</Col><Col id=\"DS_CODE\">오피스</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">자체사업</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">도급사업</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">조합사업</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">재건축사업</Col></Row><Row><Col id=\"CD_CODE\">5</Col><Col id=\"DS_CODE\">재개발사업</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_OPTION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">있음</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_END", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">진행</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">종료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_JUNGONG", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미완료</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DELAY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">V</Col><Col id=\"DS_CODE\">변동연체율</Col></Row><Row><Col id=\"CD_CODE\">F</Col><Col id=\"DS_CODE\">고정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_BUNNAP", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">허용</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">불가</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSTD_DELAY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">절상</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">절사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCAL_DELAY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">업계방식</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">주택은행방식</Col></Row></Rows>");
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


            obj = new Dataset("dsList6", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인코드</Col></Row><Row><Col id=\"CD_FIELD\">TY_TYPE</Col><Col id=\"DS_FIELD\">사업유형</Col></Row><Row><Col id=\"CD_FIELD\">DT_APPROVE</Col><Col id=\"DS_FIELD\">분양승인일자</Col></Row><Row><Col id=\"CD_FIELD\">ID_BUNYANG1</Col><Col id=\"DS_FIELD\">분양담당자1</Col></Row><Row><Col id=\"CD_FIELD\">TY_BID</Col><Col id=\"DS_FIELD\">선정방법</Col></Row><Row><Col id=\"DS_FIELD\">재산의표시</Col><Col id=\"CD_FIELD\">CD_ZIP</Col></Row><Row><Col id=\"CD_FIELD\">DS_ADDR2_AFTERMOVE</Col><Col id=\"DS_FIELD\">재산의표시</Col></Row><Row><Col id=\"CD_FIELD\">ID_SUKUM1</Col><Col id=\"DS_FIELD\">수금담당자</Col></Row><Row><Col id=\"CD_FIELD\">UT_DISCOUNT</Col><Col id=\"DS_FIELD\">할인료계산</Col></Row><Row><Col id=\"CD_FIELD\">UT_DELAY</Col><Col id=\"DS_FIELD\">연체료계산</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_ACNTUNIT:0.0","10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFSITE");
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ccfCD_SITE:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("구분");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","staTY_GUBUN:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_CHASU","ccboTY_GUBUN:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("차수");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_CHASU","staNO_CHASU:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.getSetter("trimtype").set("none");
            obj.set_maxlength("2");
            obj.set_inputtype("number");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_ACNTUNIT","ctxtNO_CHASU:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("사업지명칭");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ACNTUNIT","staDS_ACNTUNIT:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.getSetter("trimtype").set("none");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"420","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTopTitle","0","0",null,"22","5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","staTopTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_CORP","staCD_CORP:-1","staTopTitle:5","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staSZ_EARTH_TOTAL","staBgCD_CORP:-1","staTopTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("대지권비율(분모)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgSZ_EARTH_TOTAL","staSZ_EARTH_TOTAL:-1","staTopTitle:5","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_TYPE","0","staCD_CORP:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("사업유형");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_TYPE","staTY_TYPE:-1","staBgCD_CORP:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_OPTION","staBgTY_TYPE:-1","staSZ_EARTH_TOTAL:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_text("별도계약");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_OPTION","staYN_OPTION:-1","staBgSZ_EARTH_TOTAL:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_ADDRESS","0","staTY_TYPE:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_text("모델하우스 주소");
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
            obj.set_text("분양승인일자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_APPROVE","staDT_APPROVE:-1","staBgDS_ADDRESS:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_START","staBgDT_APPROVE:-1","staBgNO_TEL:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_text("착공일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_START","staDT_START:-1","staBgNO_TEL:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_IPJU_START_END","0","staDT_APPROVE:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_text("입주예정기간");
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
            obj.set_text("사업지상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_END","staYN_END:-1","staBgDT_START:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staID_BUNYANG1","0","staDT_IPJU_START_END:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("21");
            obj.set_text("분양담당자1");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgID_BUNYANG1","staID_BUNYANG1:-1","staBgDT_IPJU_START_END:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staID_BUNYANG2","staBgID_BUNYANG1:-1","staYN_END:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("23");
            obj.set_text("분양담당자2");
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

            obj = new Static("staNO_REFTEL","0","staDS_APPR:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_text("☎(문의)");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_REFTEL","staNO_REFTEL:-1","staBgDS_APPR:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staID_SUKUM","staBgNO_REFTEL:-1","staDS_APPR:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("29");
            obj.set_text("수금담당자1/2");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgID_SUKUM","staID_SUKUM:-1","staBgDS_APPR:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_END","0","staNO_REFTEL:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("31");
            obj.set_text("확정준공일자");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_END","staID_BUNYANG1:-1","staBgNO_REFTEL:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_IPJU_START_END2","staBgDT_END:-1","staID_SUKUM:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("33");
            obj.set_text("입주확정기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_IPJU_START_END2","staDT_IPJU_START_END2:-1","staBgID_SUKUM:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_JUNGONG","0","staDT_END:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("35");
            obj.set_text("준공여부");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_JUNGONG","staYN_JUNGONG:-1","staBgDT_END:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_DELAY","staBgYN_JUNGONG:-1","staDT_IPJU_START_END2:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("37");
            obj.set_text("연체방법");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_DELAY","staTY_DELAY:-1","staBgDT_IPJU_START_END2:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_BUNNAP","0","staYN_JUNGONG:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("39");
            obj.set_text("계약금분납여부");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_BUNNAP","staYN_BUNNAP:-1","staBgYN_JUNGONG:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staUT_DELAY","staBgYN_BUNNAP:-1","staTY_DELAY:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("41");
            obj.set_text("연체료계산");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgUT_DELAY","staUT_DELAY:-1","staBgTY_DELAY:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staUT_DISCOUNT","0","staYN_BUNNAP:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_text("할인료계산");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgUT_DISCOUNT","staUT_DISCOUNT:-1","staBgYN_BUNNAP:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCAL_DELAY","staBgUT_DISCOUNT:-1","staUT_DELAY:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("45");
            obj.set_text("연체적용방식");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCAL_DELAY","staCAL_DELAY:-1","staBgUT_DELAY:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDD_HALIN","0","staUT_DISCOUNT:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("47");
            obj.set_text("할인료 면제일수");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDD_HALIN","staDD_HALIN:-1","staBgUT_DISCOUNT:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDD_DELAY","staBgDD_HALIN:-1","staCAL_DELAY:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("49");
            obj.set_text("연체료 면제일수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDD_DELAY","staDD_DELAY:-1","staBgCAL_DELAY:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","staTopTitle:10","290","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DRX_CFCORP_SELECT");
            obj.set_taborder("51");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_EARTH_TOTAL","staSZ_EARTH_TOTAL:5","staTopTitle:10","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("52");
            obj.set_value("");
            obj.set_format("#,#.0000");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Combo("ccboTY_TYPE","staTY_TYPE:5","ccfCD_CORP:9","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("53");
            obj.set_innerdataset("dsTY_TYPE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoYN_OPTION","staYN_OPTION:5","ctxtSZ_EARTH_TOTAL:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("54");
            obj.set_innerdataset("dsYN_OPTION");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDRESS","staDS_ADDRESS:5","ccboTY_TYPE:9","290","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("55");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_TEL","staNO_TEL:5","crdoYN_OPTION:9","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("56");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_APPROVE","staDT_APPROVE:5","ctxtDS_ADDRESS:9","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("57");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_START","staDT_START:5","ctxtNO_TEL:9","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("58");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_IPJU_START","staDT_IPJU_START_END:5","ctclDT_APPROVE:9","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("59");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staIPJU_range","ctclDT_IPJU_START:5","ctclDT_APPROVE:9","10","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("60");
            obj.set_text("~");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_IPJU_END","staIPJU_range:5","ctclDT_APPROVE:9","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("61");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoYN_END","staYN_END:10","ctclDT_APPROVE:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("62");
            obj.set_innerdataset("dsYN_END");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtID_BUNYANG1","staID_BUNYANG1:5","ctclDT_IPJU_START:9","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("63");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtID_BUNYANG2","staID_BUNYANG2:5","crdoYN_END:9","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("64");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfDS_APPR","staDS_APPR:5","ctxtID_BUNYANG1:9","300","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("65");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_APPR2","ccfDS_APPR:5","ctxtID_BUNYANG1:9","300","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_REFTEL","staNO_REFTEL:5","ccfDS_APPR:9","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("67");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtID_SUKUM","staID_SUKUM:5","ctxtDS_APPR2:9","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("68");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtID_SUKUM2","ctxtID_SUKUM:5","ctxtDS_APPR2:9","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("69");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_END","staDT_END:5","ctxtNO_REFTEL:9","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("70");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_IPJU_START2","staDT_IPJU_START_END2:5","ctxtID_SUKUM:9","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("71");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staIPJU_range2","ctclDT_IPJU_START2:5","ctxtID_SUKUM:9","10","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("72");
            obj.set_text("~");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_IPJU_END2","staIPJU_range2:5","ctxtID_SUKUM:9","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("73");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoYN_JUNGONG","staYN_JUNGONG:5","ctclDT_END:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("74");
            obj.set_innerdataset("dsYN_JUNGONG");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoTY_DELAY","staTY_DELAY:5","ctclDT_IPJU_START2:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("75");
            obj.set_innerdataset("dsTY_DELAY");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoYN_BUNNAP","staYN_BUNNAP:5","crdoYN_JUNGONG:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("76");
            obj.set_innerdataset("dsYN_BUNNAP");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtUT_DELAY","staUT_DELAY:5","crdoTY_DELAY:9","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("77");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoSTD_DELAY","ctxtUT_DELAY:15","crdoTY_DELAY:9","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("78");
            obj.set_innerdataset("dsSTD_DELAY");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtUT_DISCOUNT","staUT_DISCOUNT:5","crdoYN_BUNNAP:9","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("79");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoSTD_DISCOUNT","ctxtUT_DISCOUNT:15","crdoYN_BUNNAP:9","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("80");
            obj.set_innerdataset("dsSTD_DELAY");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("crdoCAL_DELAY","staCAL_DELAY:5","crdoSTD_DELAY:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("81");
            obj.set_innerdataset("dsCAL_DELAY");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDD_HALIN","staDD_HALIN:5","ctxtUT_DISCOUNT:9","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("82");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new CheckBox("cchkTY_ETC","ctxtDD_HALIN:10","ctxtUT_DISCOUNT:9","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("83");
            obj.set_text("공공주택산업");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_visible("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDD_DELAY","staDD_DELAY:5","crdoCAL_DELAY:9","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("84");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:10",null,null,"0","0",null,null,"300",null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBottomTitle","0","0",null,"22","5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Tab("tabData","0","staBottomTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
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

            obj = new Tabpage("tab2",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("세대수");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Button("btnELEVATOR","5","5","100","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj.set_text("Elevator등록");
            this.divData.form.divDataBottom.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","btnELEVATOR:0",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("알선융자사");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("지분관리");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid4","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("특별할인율");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid5","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab5.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Tabpage("tab6",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("변동금리");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid6","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab6.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab6.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_ACNTUNIT_INSERT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataTop.form.ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataTop.form.ctxtSZ_EARTH_TOTAL","value","dsList","SZ_EARTH_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.ccboTY_TYPE","value","dsList","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataTop.form.crdoYN_OPTION","value","dsList","YN_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.ctxtDS_ADDRESS","value","dsList","DS_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.ctxtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.ctclDT_APPROVE","value","dsList","DT_APPROVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.ctclDT_START","value","dsList","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.ctclDT_IPJU_START","value","dsList","DT_IPJUSTART1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.ctclDT_IPJU_END","value","dsList","DT_IPJUEND1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.crdoYN_END","value","dsList","YN_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataTop.form.ctxtID_BUNYANG1","value","dsList","ID_BUNYANG1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataTop.form.ctxtID_BUNYANG2","value","dsList","ID_BUNYANG2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataTop.form.ccfDS_APPR.form.CDTextBox","value","dsList","CD_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataTop.form.ccfDS_APPR.form.DSTextBox","value","dsList","DS_ADDR1_AFTERMOVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataTop.form.ctxtDS_APPR2","value","dsList","DS_ADDR2_AFTERMOVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataTop.form.ctxtNO_REFTEL","value","dsList","NO_REFTEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataTop.form.ctxtID_SUKUM","value","dsList","ID_SUKUM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataTop.form.ctxtID_SUKUM2","value","dsList","ID_SUKUM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataTop.form.ctclDT_END","value","dsList","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataTop.form.ctclDT_IPJU_START2","value","dsList","DT_IPJUSTART2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataTop.form.ctclDT_IPJU_END2","value","dsList","DT_IPJUEND2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataTop.form.crdoYN_JUNGONG","value","dsList","YN_JUNGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataTop.form.crdoTY_DELAY","value","dsList","TY_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataTop.form.crdoYN_BUNNAP","value","dsList","YN_BUNNAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataTop.form.ctxtUT_DELAY","value","dsList","UT_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataTop.form.crdoSTD_DELAY","value","dsList","STD_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataTop.form.ctxtUT_DISCOUNT","value","dsList","UT_DISCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataTop.form.crdoSTD_DISCOUNT","value","dsList","STD_DISCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataTop.form.crdoCAL_DELAY","value","dsList","CAL_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataTop.form.ctxtDD_HALIN","value","dsList","DD_HALIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataTop.form.cchkTY_ETC","value","dsList","TY_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divDataTop.form.ctxtDD_DELAY","value","dsList","DD_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divSearch.form.ccboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divSearch.form.ctxtNO_CHASU","value","dsSearch","NO_CHASU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divSearch.form.ctxtDS_ACNTUNIT","value","dsSearch","DS_ACNTUNIT_INSERT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divDataTop.form.ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRA_INSERTBUNYANG.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.TY_STATUS = "";

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

        	this.fnReadOnlyChange(false);
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
        	this.btnCreateSite = this.gfnFormButtonAdd("btnCreateSite", "fnCreateSite");
        	this.btnDeleteSite = this.gfnFormButtonAdd("btnDeleteSite", "fnDeleteSite");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid1 = this.divData.form.divDataBottom.form.tabData.tab1.form.objGrid1;
        	this.dxGrid2 = this.divData.form.divDataBottom.form.tabData.tab2.form.objGrid2;
        	this.dxGrid3 = this.divData.form.divDataBottom.form.tabData.tab3.form.objGrid3;
        	this.dxGrid4 = this.divData.form.divDataBottom.form.tabData.tab4.form.objGrid4;
        	this.dxGrid5 = this.divData.form.divDataBottom.form.tabData.tab5.form.objGrid5;
           	this.dxGrid6 = this.divData.form.divDataBottom.form.tabData.tab6.form.objGrid6;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.divSearch.form.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divSearch.form.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.divSearch.form.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divSearch.form.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.divData.form.divDataTop.form.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DR", "DRA_BUNYANGDETAIL_BANK");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DR", "DRA_BUNYANGDETAIL_HOUSE");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DR", "DRA_BUNYANGDETAIL_FINANCING");
        	this.gfnGridInit(this.dxGrid4, this.dsList4, "DR", "DRA_BUNYANGDETAIL_PORTION");
        	this.gfnGridInit(this.dxGrid5, this.dsList5, "DR", "DRA_BUNYANGDETAIL_RATEBYDAY");
        	this.gfnGridInit(this.dxGrid6, this.dsList6, "DR", "DRA_BUNYANGDETAIL_RTDELAY");

        	this.dxGrid1.BeforeUserDataSetParam = "fnGrid1_BeforeUserDataSetParam";
        	this.dxGrid3.BeforeUserDataSetParam = "fnGrid3_BeforeUserDataSetParam";
        	this.dxGrid4.BeforeUserDataSetParam = "fnGrid4_BeforeUserDataSetParam";
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
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("DS_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_ACNTUNIT", "string");
        	this.dsInsert.addColumn("YN_OPTION", "string");
        	this.dsInsert.addColumn("TY_TYPE", "string");
        	this.dsInsert.addColumn("DS_ADDRESS", "string");
        	this.dsInsert.addColumn("NO_TEL", "string");
        	this.dsInsert.addColumn("DT_APPROVE", "string");
        	this.dsInsert.addColumn("DT_START", "string");
        	this.dsInsert.addColumn("DT_IPJUSTART1", "string");
        	this.dsInsert.addColumn("DT_IPJUEND1", "string");
        	this.dsInsert.addColumn("YN_END", "string");
        	this.dsInsert.addColumn("YN_VIRTUAL", "string");
        	this.dsInsert.addColumn("YN_OVERHEAT", "string");
        	this.dsInsert.addColumn("ID_BUNYANG1", "string");
        	this.dsInsert.addColumn("ID_BUNYANG2", "string");
        	this.dsInsert.addColumn("YN_DONGHO", "string");
        	this.dsInsert.addColumn("CD_ZIP", "string");
        	this.dsInsert.addColumn("DS_ADDR1_AFTERMOVE", "string");
        	this.dsInsert.addColumn("DS_ADDR2_AFTERMOVE", "string");
        	this.dsInsert.addColumn("NO_REFTEL", "string");
        	this.dsInsert.addColumn("DT_END", "string");
        	this.dsInsert.addColumn("DT_IPJUSTART2", "string");
        	this.dsInsert.addColumn("DT_IPJUEND2", "string");
        	this.dsInsert.addColumn("YN_BUNNAP", "string");
        	this.dsInsert.addColumn("UT_DELAY", "int");
        	this.dsInsert.addColumn("STD_DELAY", "string");
        	this.dsInsert.addColumn("UT_DISCOUNT", "int");
        	this.dsInsert.addColumn("STD_DISCOUNT", "string");
        	this.dsInsert.addColumn("ID_SUKUM1", "string");
        	this.dsInsert.addColumn("ID_SUKUM2", "string");
        	this.dsInsert.addColumn("TY_DELAY", "string");
        	this.dsInsert.addColumn("CAL_DELAY", "string");
        	this.dsInsert.addColumn("DD_HALIN", "int");
        	this.dsInsert.addColumn("DD_DELAY", "int");
        	this.dsInsert.addColumn("YN_JUNGONG", "string");
        	this.dsInsert.addColumn("DT_MH_OPEN", "string");
        	this.dsInsert.addColumn("DT_CONTRACT_FR", "string");
        	this.dsInsert.addColumn("DT_CONTRACT_TO", "string");
        	this.dsInsert.addColumn("DT_RESERVE_FR", "string");
        	this.dsInsert.addColumn("DT_RESERVE_TO", "string");
        	this.dsInsert.addColumn("DT_ORDER_FR", "string");
        	this.dsInsert.addColumn("DT_ORDER_TO", "string");
        	this.dsInsert.addColumn("DT_BUNYANG_COMPLETE", "string");
        	this.dsInsert.addColumn("YN_OWNER", "string");
        	this.dsInsert.addColumn("SZ_EARTH_TOTAL", "bigdecimal");
        	this.dsInsert.addColumn("CD_REPORT", "string");
        	this.dsInsert.addColumn("SN_SEQ", "int");
        	this.dsInsert.addColumn("DS_COMPANY", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("TY_ETC", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("DS_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("YN_OPTION", "string");
        	this.dsUpdate.addColumn("TY_TYPE", "string");
        	this.dsUpdate.addColumn("DS_ADDRESS", "string");
        	this.dsUpdate.addColumn("NO_TEL", "string");
        	this.dsUpdate.addColumn("DT_APPROVE", "string");
        	this.dsUpdate.addColumn("DT_START", "string");
        	this.dsUpdate.addColumn("DT_IPJUSTART1", "string");
        	this.dsUpdate.addColumn("DT_IPJUEND1", "string");
        	this.dsUpdate.addColumn("YN_END", "string");
        	this.dsUpdate.addColumn("YN_VIRTUAL", "string");
        	this.dsUpdate.addColumn("YN_OVERHEAT", "string");
        	this.dsUpdate.addColumn("ID_BUNYANG1", "string");
        	this.dsUpdate.addColumn("ID_BUNYANG2", "string");
        	this.dsUpdate.addColumn("YN_DONGHO", "string");
        	this.dsUpdate.addColumn("CD_ZIP", "string");
        	this.dsUpdate.addColumn("DS_ADDR1_AFTERMOVE", "string");
        	this.dsUpdate.addColumn("DS_ADDR2_AFTERMOVE", "string");
        	this.dsUpdate.addColumn("NO_REFTEL", "string");
        	this.dsUpdate.addColumn("DT_END", "string");
        	this.dsUpdate.addColumn("DT_IPJUSTART2", "string");
        	this.dsUpdate.addColumn("DT_IPJUEND2", "string");
        	this.dsUpdate.addColumn("YN_BUNNAP", "string");
        	this.dsUpdate.addColumn("UT_DELAY", "int");
        	this.dsUpdate.addColumn("STD_DELAY", "string");
        	this.dsUpdate.addColumn("UT_DISCOUNT", "int");
        	this.dsUpdate.addColumn("STD_DISCOUNT", "string");
        	this.dsUpdate.addColumn("ID_SUKUM1", "string");
        	this.dsUpdate.addColumn("ID_SUKUM2", "string");
        	this.dsUpdate.addColumn("TY_DELAY", "string");
        	this.dsUpdate.addColumn("CAL_DELAY", "string");
        	this.dsUpdate.addColumn("DD_HALIN", "int");
        	this.dsUpdate.addColumn("DD_DELAY", "int");
        	this.dsUpdate.addColumn("YN_JUNGONG", "string");
        	this.dsUpdate.addColumn("DT_MH_OPEN", "string");
        	this.dsUpdate.addColumn("DT_CONTRACT_FR", "string");
        	this.dsUpdate.addColumn("DT_CONTRACT_TO", "string");
        	this.dsUpdate.addColumn("DT_RESERVE_FR", "string");
        	this.dsUpdate.addColumn("DT_RESERVE_TO", "string");
        	this.dsUpdate.addColumn("DT_ORDER_FR", "string");
        	this.dsUpdate.addColumn("DT_ORDER_TO", "string");
        	this.dsUpdate.addColumn("DT_BUNYANG_COMPLETE", "string");
        	this.dsUpdate.addColumn("YN_OWNER", "string");
        	this.dsUpdate.addColumn("SZ_EARTH_TOTAL", "bigdecimal");
        	this.dsUpdate.addColumn("CD_REPORT", "string");
        	this.dsUpdate.addColumn("SN_SEQ", "int");
        	this.dsUpdate.addColumn("DS_COMPANY", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("TY_ETC", "string");

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

        this.fnDetail = function() {
        	this.dsDetail = new Dataset();
        	this.dsDetail.addColumn("CD_ACNTUNIT", "string");
        	this.dsDetail.addColumn("TY_GUBUN", "string");
        	this.dsDetail.addColumn("NO_CHASU", "string");

        	var tabIndex = this.fnGetTabIndex();

        	if(tabIndex == 1 || tabIndex == 3 || tabIndex == 5)
        	{
        		this.dsDetail.addColumn("YN_OPTION", "string");
        	}

        	this.dsDetail.clearData();
        	this.dsDetail.addRow();

        	this.dsDetail.setColumn(0, "CD_ACNTUNIT", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ACNTUNIT"),"").substr(0,6));
        	this.dsDetail.setColumn(0, "TY_GUBUN", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ACNTUNIT"),"").substr(6,1));
        	this.dsDetail.setColumn(0, "NO_CHASU", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ACNTUNIT"),"").substr(7,2));

        	if(tabIndex == 1 || tabIndex == 3 || tabIndex == 5)
        	{
        		this.dsDetail.setColumn(0, "YN_OPTION", "N");
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
        		case 2 :
        			var nrow = this.gfnGridAdd(this.dxGrid2);
        		break;
        		case 3 :
        			var nrow = this.gfnGridAdd(this.dxGrid3);
        		break;
        		case 4 :
        			var nrow = this.gfnGridAdd(this.dxGrid4);
        		break;
        		case 5 :
        			var nrow = this.gfnGridAdd(this.dxGrid5);
        		break;
        		case 6 :
        			var nrow = this.gfnGridAdd(this.dxGrid6);
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
        		case 3 :
        			this.gfnGridDel(this.dxGrid3);
        		break;
        		case 4 :
        			this.gfnGridDel(this.dxGrid4);
        		break;
        		case 5 :
        			this.gfnGridDel(this.dxGrid5);
        		break;
        		case 6 :
        			this.gfnGridDel(this.dxGrid6);
        		break;
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;
        	if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return;

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();

        	if(this.TY_STATUS == "I")
        	{
        		this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT_INSERT") + this.dsSearch.getColumn(0, "TY_GUBUN") + this.dsSearch.getColumn(0, "NO_CHASU"));
        		this.divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox.set_value(this.dsSearch.getColumn(0, "DS_ACNTUNIT_INSERT"));

        		var nrow = this.dsInsert.addRow();
        		this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT_INSERT"));
        		this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        		this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));
        		this.dsInsert.setColumn(nrow, "DS_ACNTUNIT", this.dsSearch.getColumn(0, "DS_ACNTUNIT_INSERT"));
        		this.dsInsert.setColumn(nrow, "TY_ACNTUNIT", "S");
        		this.dsInsert.setColumn(nrow, "YN_OPTION", this.dsList.getColumn(0, "YN_OPTION"));
        		this.dsInsert.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(0, "TY_TYPE"));
        		this.dsInsert.setColumn(nrow, "DS_ADDRESS", this.dsList.getColumn(0, "DS_ADDRESS"));
        		this.dsInsert.setColumn(nrow, "NO_TEL", this.dsList.getColumn(0, "NO_TEL"));
        		this.dsInsert.setColumn(nrow, "DT_APPROVE", this.dsList.getColumn(0, "DT_APPROVE"));
        		this.dsInsert.setColumn(nrow, "DT_START", this.dsList.getColumn(0, "DT_START"));
        		this.dsInsert.setColumn(nrow, "DT_IPJUSTART1", this.dsList.getColumn(0, "DT_IPJUSTART1"));
        		this.dsInsert.setColumn(nrow, "DT_IPJUEND1", this.dsList.getColumn(0, "DT_IPJUEND1"));
        		this.dsInsert.setColumn(nrow, "YN_END", this.dsList.getColumn(0, "YN_END"));
        		this.dsInsert.setColumn(nrow, "YN_VIRTUAL", this.dsList.getColumn(0, "YN_VIRTUAL"));
        		this.dsInsert.setColumn(nrow, "YN_OVERHEAT", this.dsList.getColumn(0, "YN_OVERHEAT"));
        		this.dsInsert.setColumn(nrow, "ID_BUNYANG1", this.dsList.getColumn(0, "ID_BUNYANG1"));
        		this.dsInsert.setColumn(nrow, "ID_BUNYANG2", this.dsList.getColumn(0, "ID_BUNYANG2"));
        		this.dsInsert.setColumn(nrow, "YN_DONGHO", this.dsList.getColumn(0, "YN_DONGHO"));
        		this.dsInsert.setColumn(nrow, "CD_ZIP", this.gfnNvl(this.dsList.getColumn(0, "CD_ZIP"),"").replace("-",""));
        		this.dsInsert.setColumn(nrow, "DS_ADDR1_AFTERMOVE", this.dsList.getColumn(0, "DS_ADDR1_AFTERMOVE"));
        		this.dsInsert.setColumn(nrow, "DS_ADDR2_AFTERMOVE", this.dsList.getColumn(0, "DS_ADDR2_AFTERMOVE"));
        		this.dsInsert.setColumn(nrow, "NO_REFTEL", this.dsList.getColumn(0, "NO_REFTEL"));
        		this.dsInsert.setColumn(nrow, "DT_END", this.dsList.getColumn(0, "DT_END"));
        		this.dsInsert.setColumn(nrow, "DT_IPJUSTART2", this.dsList.getColumn(0, "DT_IPJUSTART2"));
        		this.dsInsert.setColumn(nrow, "DT_IPJUEND2", this.dsList.getColumn(0, "DT_IPJUEND2"));
        		this.dsInsert.setColumn(nrow, "YN_BUNNAP", this.dsList.getColumn(0, "YN_BUNNAP"));
        		this.dsInsert.setColumn(nrow, "UT_DELAY", this.dsList.getColumn(0, "UT_DELAY"));
        		this.dsInsert.setColumn(nrow, "STD_DELAY", this.dsList.getColumn(0, "STD_DELAY"));
        		this.dsInsert.setColumn(nrow, "UT_DISCOUNT", this.dsList.getColumn(0, "UT_DISCOUNT"));
        		this.dsInsert.setColumn(nrow, "STD_DISCOUNT", this.dsList.getColumn(0, "STD_DISCOUNT"));
        		this.dsInsert.setColumn(nrow, "ID_SUKUM1", this.dsList.getColumn(0, "ID_SUKUM1"));
        		this.dsInsert.setColumn(nrow, "ID_SUKUM2", this.dsList.getColumn(0, "ID_SUKUM2"));
        		this.dsInsert.setColumn(nrow, "TY_DELAY", this.dsList.getColumn(0, "TY_DELAY"));
        		this.dsInsert.setColumn(nrow, "CAL_DELAY", this.dsList.getColumn(0, "CAL_DELAY"));
        		this.dsInsert.setColumn(nrow, "DD_HALIN", this.gfnNvl(this.dsList.getColumn(0, "DD_HALIN"),0));
        		this.dsInsert.setColumn(nrow, "DD_DELAY", this.gfnNvl(this.dsList.getColumn(0, "DD_DELAY"),0));
        		this.dsInsert.setColumn(nrow, "YN_JUNGONG", this.dsList.getColumn(0, "YN_JUNGONG"));
        		this.dsInsert.setColumn(nrow, "DT_MH_OPEN", this.dsList.getColumn(0, "DT_MH_OPEN"));
        		this.dsInsert.setColumn(nrow, "DT_CONTRACT_FR", this.dsList.getColumn(0, "DT_CONTRACT_FR"));
        		this.dsInsert.setColumn(nrow, "DT_CONTRACT_TO", this.dsList.getColumn(0, "DT_CONTRACT_TO"));
        		this.dsInsert.setColumn(nrow, "DT_RESERVE_FR", this.dsList.getColumn(0, "DT_RESERVE_FR"));
        		this.dsInsert.setColumn(nrow, "DT_RESERVE_TO", this.dsList.getColumn(0, "DT_RESERVE_TO"));
        		this.dsInsert.setColumn(nrow, "DT_ORDER_FR", this.dsList.getColumn(0, "DT_ORDER_FR"));
        		this.dsInsert.setColumn(nrow, "DT_ORDER_TO", this.dsList.getColumn(0, "DT_ORDER_TO"));
        		this.dsInsert.setColumn(nrow, "DT_BUNYANG_COMPLETE", this.dsList.getColumn(0, "DT_BUNYANG_COMPLETE"));
        		this.dsInsert.setColumn(nrow, "YN_OWNER", this.dsList.getColumn(0, "YN_OWNER"));
        		this.dsInsert.setColumn(nrow, "SZ_EARTH_TOTAL", this.dsList.getColumn(0, "SZ_EARTH_TOTAL"));
        		this.dsInsert.setColumn(nrow, "CD_REPORT", this.dsList.getColumn(0, "CD_REPORT"));
        		this.dsInsert.setColumn(nrow, "SN_SEQ", this.gfnNvl(this.dsList.getColumn(0, "SN_SEQ"),0));
        		this.dsInsert.setColumn(nrow, "DS_COMPANY", this.dsList.getColumn(0, "DS_COMPANY"));
        		this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        		this.dsInsert.setColumn(nrow, "TY_ETC", this.dsList.getColumn(0, "TY_ETC"));
        	}
        	else
        	{
        		var nrow = this.dsUpdate.addRow();
        		this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        		this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        		this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        		this.dsUpdate.setColumn(nrow, "DS_ACNTUNIT", this.divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox.text);
        		this.dsUpdate.setColumn(nrow, "TY_ACNTUNIT", "S");
        		this.dsUpdate.setColumn(nrow, "YN_OPTION", this.dsList.getColumn(0, "YN_OPTION"));
        		this.dsUpdate.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(0, "TY_TYPE"));
        		this.dsUpdate.setColumn(nrow, "DS_ADDRESS", this.dsList.getColumn(0, "DS_ADDRESS"));
        		this.dsUpdate.setColumn(nrow, "NO_TEL", this.dsList.getColumn(0, "NO_TEL"));
        		this.dsUpdate.setColumn(nrow, "DT_APPROVE", this.dsList.getColumn(0, "DT_APPROVE"));
        		this.dsUpdate.setColumn(nrow, "DT_START", this.dsList.getColumn(0, "DT_START"));
        		this.dsUpdate.setColumn(nrow, "DT_IPJUSTART1", this.dsList.getColumn(0, "DT_IPJUSTART1"));
        		this.dsUpdate.setColumn(nrow, "DT_IPJUEND1", this.dsList.getColumn(0, "DT_IPJUEND1"));
        		this.dsUpdate.setColumn(nrow, "YN_END", this.dsList.getColumn(0, "YN_END"));
        		this.dsUpdate.setColumn(nrow, "YN_VIRTUAL", this.dsList.getColumn(0, "YN_VIRTUAL"));
        		this.dsUpdate.setColumn(nrow, "YN_OVERHEAT", this.dsList.getColumn(0, "YN_OVERHEAT"));
        		this.dsUpdate.setColumn(nrow, "ID_BUNYANG1", this.dsList.getColumn(0, "ID_BUNYANG1"));
        		this.dsUpdate.setColumn(nrow, "ID_BUNYANG2", this.dsList.getColumn(0, "ID_BUNYANG2"));
        		this.dsUpdate.setColumn(nrow, "YN_DONGHO", this.dsList.getColumn(0, "YN_DONGHO"));
        		this.dsUpdate.setColumn(nrow, "CD_ZIP", this.gfnNvl(this.dsList.getColumn(0, "CD_ZIP"),"").replace("-",""));
        		this.dsUpdate.setColumn(nrow, "DS_ADDR1_AFTERMOVE", this.dsList.getColumn(0, "DS_ADDR1_AFTERMOVE"));
        		this.dsUpdate.setColumn(nrow, "DS_ADDR2_AFTERMOVE", this.dsList.getColumn(0, "DS_ADDR2_AFTERMOVE"));
        		this.dsUpdate.setColumn(nrow, "NO_REFTEL", this.dsList.getColumn(0, "NO_REFTEL"));
        		this.dsUpdate.setColumn(nrow, "DT_END", this.dsList.getColumn(0, "DT_END"));
        		this.dsUpdate.setColumn(nrow, "DT_IPJUSTART2", this.dsList.getColumn(0, "DT_IPJUSTART2"));
        		this.dsUpdate.setColumn(nrow, "DT_IPJUEND2", this.dsList.getColumn(0, "DT_IPJUEND2"));
        		this.dsUpdate.setColumn(nrow, "YN_BUNNAP", this.dsList.getColumn(0, "YN_BUNNAP"));
        		this.dsUpdate.setColumn(nrow, "UT_DELAY", this.dsList.getColumn(0, "UT_DELAY"));
        		this.dsUpdate.setColumn(nrow, "STD_DELAY", this.dsList.getColumn(0, "STD_DELAY"));
        		this.dsUpdate.setColumn(nrow, "UT_DISCOUNT", this.dsList.getColumn(0, "UT_DISCOUNT"));
        		this.dsUpdate.setColumn(nrow, "STD_DISCOUNT", this.dsList.getColumn(0, "STD_DISCOUNT"));
        		this.dsUpdate.setColumn(nrow, "ID_SUKUM1", this.dsList.getColumn(0, "ID_SUKUM1"));
        		this.dsUpdate.setColumn(nrow, "ID_SUKUM2", this.dsList.getColumn(0, "ID_SUKUM2"));
        		this.dsUpdate.setColumn(nrow, "TY_DELAY", this.dsList.getColumn(0, "TY_DELAY"));
        		this.dsUpdate.setColumn(nrow, "CAL_DELAY", this.dsList.getColumn(0, "CAL_DELAY"));
        		this.dsUpdate.setColumn(nrow, "DD_HALIN", this.gfnNvl(this.dsList.getColumn(0, "DD_HALIN"),0));
        		this.dsUpdate.setColumn(nrow, "DD_DELAY", this.gfnNvl(this.dsList.getColumn(0, "DD_DELAY"),0));
        		this.dsUpdate.setColumn(nrow, "YN_JUNGONG", this.dsList.getColumn(0, "YN_JUNGONG"));
        		this.dsUpdate.setColumn(nrow, "DT_MH_OPEN", this.dsList.getColumn(0, "DT_MH_OPEN"));
        		this.dsUpdate.setColumn(nrow, "DT_CONTRACT_FR", this.dsList.getColumn(0, "DT_CONTRACT_FR"));
        		this.dsUpdate.setColumn(nrow, "DT_CONTRACT_TO", this.dsList.getColumn(0, "DT_CONTRACT_TO"));
        		this.dsUpdate.setColumn(nrow, "DT_RESERVE_FR", this.dsList.getColumn(0, "DT_RESERVE_FR"));
        		this.dsUpdate.setColumn(nrow, "DT_RESERVE_TO", this.dsList.getColumn(0, "DT_RESERVE_TO"));
        		this.dsUpdate.setColumn(nrow, "DT_ORDER_FR", this.dsList.getColumn(0, "DT_ORDER_FR"));
        		this.dsUpdate.setColumn(nrow, "DT_ORDER_TO", this.dsList.getColumn(0, "DT_ORDER_TO"));
        		this.dsUpdate.setColumn(nrow, "DT_BUNYANG_COMPLETE", this.dsList.getColumn(0, "DT_BUNYANG_COMPLETE"));
        		this.dsUpdate.setColumn(nrow, "YN_OWNER", this.dsList.getColumn(0, "YN_OWNER"));
        		this.dsUpdate.setColumn(nrow, "SZ_EARTH_TOTAL", this.gfnNvl(this.dsList.getColumn(0, "SZ_EARTH_TOTAL"),0));
        		this.dsUpdate.setColumn(nrow, "CD_REPORT", this.dsList.getColumn(0, "CD_REPORT"));
        		this.dsUpdate.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(0, "SN_SEQ"));
        		this.dsUpdate.setColumn(nrow, "DS_COMPANY", this.dsList.getColumn(0, "DS_COMPANY"));
        		this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        		this.dsUpdate.setColumn(nrow, "TY_ETC", this.dsList.getColumn(0, "TY_ETC"));

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

        	// 현장등록 버튼클릭시의 코드파인드가 보이는 상태라면
        	// 조회가 아니라 최초 조회조건으로 변환 및 비활성화 상태로 전환.
        	if(this.divSearch.form.ccfCD_SITE.visible == true)
        	{
        		this.fnReadOnlyChange(false);
        		return false;
        	}
        	else
        	{
        		// validate 선 체크 후 기능 살린뒤 조회되도록 설정.
        		if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_ACNTUNIT"))) {
        			validate = false;
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("사업지코드를 입력하세요.", "fnVaidateCallback");
        		}
        		else
        		{
        			this.fnReadOnlyChange(true, true);
        		}
        	}

        	return validate;
        };

        this.fnSaveValidate = function() {
        	var validate = true;

        	// 현장등록 상태
        	if(this.TY_STATUS == "I")
        	{
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT_INSERT")))
        		{
        			validate = false;
        			this.fnValidate_callback = function()
        			{
        				this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        			}

        			this.gfnAlert("사업지코드가 입력되지 않았습니다.", "fnValidate_callback");
        		}
        		else if(this.gfnIsNull(this.dsSearch.getColumn(0, "TY_GUBUN")))
        		{
        			validate = false;
        			this.fnValidate_callback = function()
        			{
        				this.divSearch.form.ccboTY_GUBUN.setFocus();
        			}

        			this.gfnAlert("사업지유형이 입력되지 않았습니다.", "fnValidate_callback");
        		}
        		else if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_CHASU")))
        		{
        			validate = false;
        			this.fnValidate_callback = function()
        			{
        				this.divSearch.form.ctxtNO_CHASU.setFocus();
        			}

        			this.gfnAlert("사업지차수가 입력되지 않았습니다. 사업지차수는 2자리입니다. (ex) 01, 02 ..", "fnValidate_callback");
        		}
        		else if(this.dsSearch.getColumn(0, "NO_CHASU").length != 0 && this.dsSearch.getColumn(0, "NO_CHASU").length != 2)
        		{
        			validate = false;
        			this.fnValidate_callback = function()
        			{
        				this.divSearch.form.ctxtNO_CHASU.setFocus();
        			}

        			this.gfnAlert("사업지차수는 2자리입니다. (ex) 01, 02 ..", "fnValidate_callback");
        		}
        		else if(this.gfnIsNull(this.dsSearch.getColumn(0, "DS_ACNTUNIT_INSERT")))
        		{
        			validate = false;
        			this.fnValidate_callback = function()
        			{
        				this.divSearch.form.ctxtDS_ACNTUNIT.setFocus();
        			}

        			this.gfnAlert("사업지명칭이 입력되지 않았습니다.", "fnValidate_callback");
        		}
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
        		this.TY_STATUS = "U";
        		this.fnDetail();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			if(this.TY_STATUS == "U")
        			{
        				//this.gfnSetFormStatus(this, "Q");	// 폼상태 조회상태로셋팅(탭안의 그리드가 저장로직 타지않을경우 저장버튼이 활성화 되어있어서 비활성화되도록처리)
        				this.fnSaveSub();
        			}
        			else
        			{
        				this.fnReadOnlyChange(true, true);
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
        				this.fnReadOnlyChange(false);
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
        	else if(svcID == "detail") {
        		trace("dsList4>>>" + this.dsList4.saveXML());
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
        	}
        	else if(id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "DIV_PUBPRIV", "2");
        	}
        	else if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "ccfCD_ACNTUNIT")
        	{
        		if(this.dsList.rowcount > 0)
        		{
        			this.dsList.clearData();
        			this.dsList.addRow();
        		}
        		this.fnReadOnlyChange(false, true);

        	}
        	else if (id == "ccfCD_SITE")
        	{
        		var arr = codeFindData;
        		if(arr.length > 0)
        		{
        			this.dsSearch.setColumn(0, "DS_ACNTUNIT_INSERT", arr[0]["DS_DEPT"]);
        		}
        	}
        	return true;
        }

        this.fnGrid1_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	switch(id) {
        		case "DFX_CFACCOUNTNO_SUJI":
        			dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		break;
        	}

        	return true;
        }

        this.fnGrid3_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	switch(id) {
        		case "DRX_CFRentVendor_CodeFind":
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		break;
        	}

        	return true;
        }

        this.fnGrid4_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	switch(id) {
        		case "DRX_CFVENDOR_CODEFIND":
        			dsUserParam.setColumn(nrow, "FLAG", this.dsList4.getColumn(this.dsList4.rowposition, "TY_VENDORGUBUN") == "당사" ? "A" : this.dsList4.getColumn(this.dsList4.rowposition, "TY_VENDORGUBUN") == "A" ? "A" : this.AuthClient.ID_USER);
        		break;

        		case "DRX_CFACNTUNIT": //처리부서
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		break;

        		case "DAX_CFBASEINFO_ALL": //담당자
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");

        // 			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        // 			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        // 			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 			dsUserParam.setColumn(nrow, "YN_CORP", "N");
        // 			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
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
        	}
        };

        // 현장등록 상태에서는 입력/삭제/현장삭제 불가.
        this.divData_divDataTop_onkeydown = function(obj,e)
        {
        	if(this.TY_STATUS == "I")
        	{
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.btnDeleteSite.set_enable(false);
        	}
        };

        // 현장등록 버튼
        this.fnCreateSite = function()
        {
        	this.fnReadOnlyChange(true);
        	this.divSearch.form.ccfCD_ACNTUNIT.form.fnCodeFindClear();
        	this.btnDeleteSite.set_enable(false);
        	this.dsSearch.setColumn(0, "TY_GUBUN", "A");
        	this.TY_STATUS = "I";

        	this.dsList.setColumn(0, "YN_OPTION", "N");
        	this.dsList.setColumn(0, "YN_END", 1);
        	this.dsList.setColumn(0, "YN_JUNGONG", "N");
        	this.dsList.setColumn(0, "YN_BUNNAP", "N");
        	this.dsList.setColumn(0, "TY_DELAY", "V");
        	this.dsList.setColumn(0, "STD_DELAY", 2);
        	this.dsList.setColumn(0, "STD_DISCOUNT", 2);
        	this.dsList.setColumn(0, "CAL_DELAY", 2);
        }

        // 현장삭제 버튼
        this.fnDeleteSite = function()
        {
        	this.gfnConfirm("정말 삭제하시겠습니까?", "fnDeleteSite_callback");
        }

        this.fnDeleteSite_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsDelete.clearData();
        		var nrow = this.dsDelete.addRow();
        		this.dsDelete.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        		this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        		this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));

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
        }


        // 탭 관련 관리함수
        this.fnGetTabIndex = function()
        {
        	var index = -1;

        	var text = this.divData.form.divDataBottom.form.tabData.tabpages[this.divData.form.divDataBottom.form.tabData.tabindex].text;

        	switch(text)
        	{
        		case "계좌관리" : index = 1;
        			break;
        		case "세대수" : index = 2;
        			break;
        		case "알선융자사" : index = 3;
        			break;
        		case "지분관리" : index = 4;
        			break;
        		case "특별할인율" : index = 5;
        			break;
        		case "변동금리" :	index = 6;
        			break;
        	}

        	return index;
        }

        this.divData_tabData_onchanged = function(obj,e)
        {
        	if(this.dsList.rowcount == 0) return;
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
        			this.dsInsertSub.addColumn("CD_BANK", "string");
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
        			this.dsUpdateSub.addColumn("CD_BANK", "string");
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

        		case 2 :
        			this.dsInsertSub = new Dataset();
        			this.dsInsertSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsInsertSub.addColumn("TY_GUBUN", "string");
        			this.dsInsertSub.addColumn("NO_CHASU", "string");
        			this.dsInsertSub.addColumn("NO_DONG", "string");
        			this.dsInsertSub.addColumn("NO_SAEDAE", "int");
        			this.dsInsertSub.addColumn("NO_MAXHO", "int");
        			this.dsInsertSub.addColumn("NO_MAXFLOOR", "int");
        			this.dsInsertSub.addColumn("ID_INSERT", "string");

        			this.dsUpdateSub = new Dataset();
        			this.dsUpdateSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsUpdateSub.addColumn("TY_GUBUN", "string");
        			this.dsUpdateSub.addColumn("NO_CHASU", "string");
        			this.dsUpdateSub.addColumn("NO_DONG", "string");
        			this.dsUpdateSub.addColumn("NO_SAEDAE", "int");
        			this.dsUpdateSub.addColumn("NO_MAXHO", "int");
        			this.dsUpdateSub.addColumn("NO_MAXFLOOR", "int");
        			this.dsUpdateSub.addColumn("ID_UPDATE", "string");

        			this.dsDeleteSub = new Dataset();
        			this.dsDeleteSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsDeleteSub.addColumn("TY_GUBUN", "string");
        			this.dsDeleteSub.addColumn("NO_CHASU", "string");
        			this.dsDeleteSub.addColumn("NO_DONG", "string");
        		break;
        		case 3 :
        			this.dsInsertSub = new Dataset();
        			this.dsInsertSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsInsertSub.addColumn("TY_GUBUN", "string");
        			this.dsInsertSub.addColumn("NO_CHASU", "string");
        			this.dsInsertSub.addColumn("YN_OPTION", "string");
        			this.dsInsertSub.addColumn("CD_VENDOR", "string");
        			this.dsInsertSub.addColumn("DS_VENDOR", "string");
        			this.dsInsertSub.addColumn("NO_TEL", "string");
        			this.dsInsertSub.addColumn("ID_CHARGER", "string");
        			this.dsInsertSub.addColumn("DS_REMARK", "string");
        			this.dsInsertSub.addColumn("ID_INSERT", "string");

        			this.dsUpdateSub = new Dataset();
        			this.dsUpdateSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsUpdateSub.addColumn("TY_GUBUN", "string");
        			this.dsUpdateSub.addColumn("NO_CHASU", "string");
        			this.dsUpdateSub.addColumn("YN_OPTION", "string");
        			this.dsUpdateSub.addColumn("CD_VENDOR", "string");
        			this.dsUpdateSub.addColumn("DS_VENDOR", "string");
        			this.dsUpdateSub.addColumn("NO_TEL", "string");
        			this.dsUpdateSub.addColumn("ID_CHARGER", "string");
        			this.dsUpdateSub.addColumn("DS_REMARK", "string");
        			this.dsUpdateSub.addColumn("ID_UPDATE", "string");

        			this.dsDeleteSub = new Dataset();
        			this.dsDeleteSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsDeleteSub.addColumn("TY_GUBUN", "string");
        			this.dsDeleteSub.addColumn("NO_CHASU", "string");
        			this.dsDeleteSub.addColumn("YN_OPTION", "string");
        			this.dsDeleteSub.addColumn("CD_VENDOR", "string");
        		break;
        		case 4 :
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
        			this.dsInsertSub.addColumn("CD_TREATMENT", "string");
        			this.dsInsertSub.addColumn("ID_DAMDANG", "string");

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
        			this.dsUpdateSub.addColumn("CD_TREATMENT", "string");
        			this.dsUpdateSub.addColumn("ID_DAMDANG", "string");
        			this.dsUpdateSub.addColumn("ID_UPDATE", "string");

        			this.dsDeleteSub = new Dataset();
        			this.dsDeleteSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsDeleteSub.addColumn("TY_GUBUN", "string");
        			this.dsDeleteSub.addColumn("NO_CHASU", "string");
        			this.dsDeleteSub.addColumn("TY_VENDORGUBUN", "string");
        			this.dsDeleteSub.addColumn("CD_VENDOR", "string");
        		break;
        		case 5 :
        			this.dsInsertSub = new Dataset();
        			this.dsInsertSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsInsertSub.addColumn("TY_GUBUN", "string");
        			this.dsInsertSub.addColumn("NO_CHASU", "string");
        			this.dsInsertSub.addColumn("YN_OPTION", "string");
        			this.dsInsertSub.addColumn("DT_START", "string");
        			this.dsInsertSub.addColumn("DT_END", "string");
        			this.dsInsertSub.addColumn("RT_DISCOUNT", "bigdecimal");
        			this.dsInsertSub.addColumn("ID_INSERT", "string");

        			this.dsUpdateSub = new Dataset();
        			this.dsUpdateSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsUpdateSub.addColumn("TY_GUBUN", "string");
        			this.dsUpdateSub.addColumn("NO_CHASU", "string");
        			this.dsUpdateSub.addColumn("YN_OPTION", "string");
        			this.dsUpdateSub.addColumn("DT_START", "string");
        			this.dsUpdateSub.addColumn("DT_END", "string");
        			this.dsUpdateSub.addColumn("RT_DISCOUNT", "bigdecimal");
        			this.dsUpdateSub.addColumn("ID_UPDATE", "string");

        			this.dsDeleteSub = new Dataset();
        			this.dsDeleteSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsDeleteSub.addColumn("TY_GUBUN", "string");
        			this.dsDeleteSub.addColumn("NO_CHASU", "string");
        			this.dsDeleteSub.addColumn("YN_OPTION", "string");
        			this.dsDeleteSub.addColumn("DT_START", "string");
        			this.dsDeleteSub.addColumn("DT_END", "string");
        		break;

        		case 6 :
        			this.dsInsertSub = new Dataset();
        			this.dsInsertSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsInsertSub.addColumn("TY_GUBUN", "string");
        			this.dsInsertSub.addColumn("NO_CHASU", "string");
        			this.dsInsertSub.addColumn("TY_NAPIP", "string");
        			this.dsInsertSub.addColumn("NO_NAPIP", "string");
        			this.dsInsertSub.addColumn("DT_START", "string");
        			this.dsInsertSub.addColumn("DT_END", "string");
        			this.dsInsertSub.addColumn("RT_DISCOUNT", "bigdecimal");
        			this.dsInsertSub.addColumn("RT_DELAY1", "bigdecimal");
        			this.dsInsertSub.addColumn("RT_DELAY3", "bigdecimal");
        			this.dsInsertSub.addColumn("RT_DELAY6", "bigdecimal");
        			this.dsInsertSub.addColumn("RT_DELAY99", "bigdecimal");
        			this.dsInsertSub.addColumn("ID_INSERT", "string");

        			this.dsUpdateSub = new Dataset();
        			this.dsUpdateSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsUpdateSub.addColumn("TY_GUBUN", "string");
        			this.dsUpdateSub.addColumn("NO_CHASU", "string");
        			this.dsUpdateSub.addColumn("TY_NAPIP", "string");
        			this.dsUpdateSub.addColumn("NO_NAPIP", "string");
        			this.dsUpdateSub.addColumn("DT_START", "string");
        			this.dsUpdateSub.addColumn("DT_END", "string");
        			this.dsUpdateSub.addColumn("RT_DISCOUNT", "bigdecimal");
        			this.dsUpdateSub.addColumn("RT_DELAY1", "bigdecimal");
        			this.dsUpdateSub.addColumn("RT_DELAY3", "bigdecimal");
        			this.dsUpdateSub.addColumn("RT_DELAY6", "bigdecimal");
        			this.dsUpdateSub.addColumn("RT_DELAY99", "bigdecimal");
        			this.dsUpdateSub.addColumn("ID_UPDATE", "string");

        			this.dsDeleteSub = new Dataset();
        			this.dsDeleteSub.addColumn("CD_ACNTUNIT", "string");
        			this.dsDeleteSub.addColumn("TY_GUBUN", "string");
        			this.dsDeleteSub.addColumn("NO_CHASU", "string");
        			this.dsDeleteSub.addColumn("TY_NAPIP", "string");
        			this.dsDeleteSub.addColumn("NO_NAPIP", "string");
        			this.dsDeleteSub.addColumn("DT_START", "string");
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
        			switch(flag) {
        				case "I":
        					var nrow = this.dsInsertSub.addRow();
        					this.dsInsertSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsInsertSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsInsertSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsInsertSub.setColumn(nrow, "YN_OPTION", "N");
        					this.dsInsertSub.setColumn(nrow, "CD_GUJA", this.dsList1.getColumn(i, "CD_GUJA"));
        					this.dsInsertSub.setColumn(nrow, "NO_GUJA", this.dsList1.getColumn(i, "NO_GUJA"));
        					this.dsInsertSub.setColumn(nrow, "TY_GUJA", this.dsList1.getColumn(i, "TY_GUJA"));
        					this.dsInsertSub.setColumn(nrow, "DS_OWNER", this.dsList1.getColumn(i, "DS_OWNER"));
        					this.dsInsertSub.setColumn(nrow, "CD_VENDOR", this.dsList1.getColumn(i, "CD_VENDOR"));
        					this.dsInsertSub.setColumn(nrow, "CD_BANK", this.dsList1.getColumn(i, "CD_BANK"));
        					this.dsInsertSub.setColumn(nrow, "DS_BANK", this.dsList1.getColumn(i, "DS_BANK"));
        					this.dsInsertSub.setColumn(nrow, "NO_TEL", this.dsList1.getColumn(i, "NO_TEL"));
        					this.dsInsertSub.setColumn(nrow, "YN_LIST", this.dsList1.getColumn(i, "YN_LIST"));
        					this.dsInsertSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        					this.dsInsertSub.setColumn(nrow, "CD_ACCOUNT_DUZON", this.dsList1.getColumn(i, "CD_ACCOUNT_DUZON"));
        					this.dsInsertSub.setColumn(nrow, "DS_REMARK", this.dsList1.getColumn(i, "DS_REMARK"));
        					break;
        				case "U":
        					var nrow = this.dsUpdateSub.addRow();
        					this.dsUpdateSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsUpdateSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsUpdateSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsUpdateSub.setColumn(nrow, "YN_OPTION", "N");
        					this.dsUpdateSub.setColumn(nrow, "CD_GUJA", this.dsList1.getColumn(i, "CD_GUJA"));
        					this.dsUpdateSub.setColumn(nrow, "NO_GUJA", this.dsList1.getColumn(i, "NO_GUJA"));
        					this.dsUpdateSub.setColumn(nrow, "TY_GUJA", this.dsList1.getColumn(i, "TY_GUJA"));
        					this.dsUpdateSub.setColumn(nrow, "DS_OWNER", this.dsList1.getColumn(i, "DS_OWNER"));
        					this.dsUpdateSub.setColumn(nrow, "CD_VENDOR", this.dsList1.getColumn(i, "CD_VENDOR"));
        					this.dsUpdateSub.setColumn(nrow, "CD_BANK", this.dsList1.getColumn(i, "CD_BANK"));
        					this.dsUpdateSub.setColumn(nrow, "DS_BANK", this.dsList1.getColumn(i, "DS_BANK"));
        					this.dsUpdateSub.setColumn(nrow, "NO_TEL", this.dsList1.getColumn(i, "NO_TEL"));
        					this.dsUpdateSub.setColumn(nrow, "YN_LIST", this.dsList1.getColumn(i, "YN_LIST"));
        					this.dsUpdateSub.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        					this.dsUpdateSub.setColumn(nrow, "CD_ACCOUNT_DUZON", this.dsList1.getColumn(i, "CD_ACCOUNT_DUZON"));
        					this.dsUpdateSub.setColumn(nrow, "DS_REMARK", this.dsList1.getColumn(i, "DS_REMARK"));
        					break;
        				case "D":
        					var nrow = this.dsDeleteSub.addRow();
        					this.dsDeleteSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsDeleteSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsDeleteSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsDeleteSub.setColumn(nrow, "YN_OPTION", "N");
        					this.dsDeleteSub.setColumn(nrow, "CD_GUJA", this.dsList1.getColumn(i, "CD_GUJA"));
        					break;
        			}
        		}
        	}
        	// 세대수
        	else if(index == 2)
        	{
        		if (!this.gfnGridValidate(this.dxGrid2)) return;
        		for(var i = 0; i < this.dsList2.rowcount; i++)
        		{
        			var flag = this.gfnGetFlag(this.dsList2, i);
        			switch(flag) {
        				case "I":
        					var nrow = this.dsInsertSub.addRow();
        					this.dsInsertSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsInsertSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsInsertSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsInsertSub.setColumn(nrow, "NO_DONG", this.dsList2.getColumn(i, "NO_DONG"));
        					this.dsInsertSub.setColumn(nrow, "NO_SAEDAE", this.dsList2.getColumn(i, "NO_SAEDAE"));
        					this.dsInsertSub.setColumn(nrow, "NO_MAXHO", this.dsList2.getColumn(i, "NO_MAXHO"));
        					this.dsInsertSub.setColumn(nrow, "NO_MAXFLOOR", this.dsList2.getColumn(i, "NO_MAXFLOOR"));
        					this.dsInsertSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        					break;
        				case "U":
        					var nrow = this.dsUpdateSub.addRow();
        					this.dsUpdateSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsUpdateSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsUpdateSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsUpdateSub.setColumn(nrow, "NO_DONG", this.dsList2.getColumn(i, "NO_DONG"));
        					this.dsUpdateSub.setColumn(nrow, "NO_SAEDAE", this.dsList2.getColumn(i, "NO_SAEDAE"));
        					this.dsUpdateSub.setColumn(nrow, "NO_MAXHO", this.dsList2.getColumn(i, "NO_MAXHO"));
        					this.dsUpdateSub.setColumn(nrow, "NO_MAXFLOOR", this.dsList2.getColumn(i, "NO_MAXFLOOR"));
        					this.dsUpdateSub.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        					break;
        				case "D":
        					var nrow = this.dsDeleteSub.addRow();
        					this.dsDeleteSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsDeleteSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsDeleteSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsDeleteSub.setColumn(nrow, "NO_DONG", this.dsList2.getColumn(i, "NO_DONG"));
        					break;
        			}
        		}
        	}
        	// 알선융자사
        	else if(index == 3)
        	{
        		if (!this.gfnGridValidate(this.dxGrid3)) return;
        		for(var i = 0; i < this.dsList3.rowcount; i++)
        		{
        			var flag = this.gfnGetFlag(this.dsList3, i);
        			switch(flag) {
        				case "I":
        					var nrow = this.dsInsertSub.addRow();
        					this.dsInsertSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsInsertSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsInsertSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsInsertSub.setColumn(nrow, "YN_OPTION", "N");
        					this.dsInsertSub.setColumn(nrow, "CD_VENDOR", this.dsList3.getColumn(i, "CD_VENDOR"));
        					this.dsInsertSub.setColumn(nrow, "DS_VENDOR", this.dsList3.getColumn(i, "DS_VENDOR"));
        					this.dsInsertSub.setColumn(nrow, "NO_TEL", this.dsList3.getColumn(i, "NO_TEL"));
        					this.dsInsertSub.setColumn(nrow, "ID_CHARGER", this.dsList3.getColumn(i, "ID_CHARGER"));
        					this.dsInsertSub.setColumn(nrow, "DS_REMARK", this.dsList3.getColumn(i, "DS_REMARK"));
        					this.dsInsertSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        					break;
        				case "U":
        					var nrow = this.dsUpdateSub.addRow();
        					this.dsUpdateSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsUpdateSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsUpdateSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsUpdateSub.setColumn(nrow, "YN_OPTION", "N");
        					this.dsUpdateSub.setColumn(nrow, "CD_VENDOR", this.dsList3.getColumn(i, "CD_VENDOR"));
        					this.dsUpdateSub.setColumn(nrow, "DS_VENDOR", this.dsList3.getColumn(i, "DS_VENDOR"));
        					this.dsUpdateSub.setColumn(nrow, "NO_TEL", this.dsList3.getColumn(i, "NO_TEL"));
        					this.dsUpdateSub.setColumn(nrow, "ID_CHARGER", this.dsList3.getColumn(i, "ID_CHARGER"));
        					this.dsUpdateSub.setColumn(nrow, "DS_REMARK", this.dsList3.getColumn(i, "DS_REMARK"));
        					this.dsUpdateSub.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        					break;
        				case "D":
        					var nrow = this.dsDeleteSub.addRow();
        					this.dsDeleteSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsDeleteSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsDeleteSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsDeleteSub.setColumn(nrow, "YN_OPTION", "N");
        					this.dsDeleteSub.setColumn(nrow, "CD_VENDOR", this.dsList3.getColumn(i, "CD_VENDOR"));
        					break;
        			}
        		}
        	}
        	// 지분관리
        	else if(index == 4)
        	{
        		if (!this.gfnGridValidate(this.dxGrid4)) return;
        		for(var i = 0; i < this.dsList4.rowcount; i++)
        		{
        			var flag = this.gfnGetFlag(this.dsList4, i);
        			switch(flag) {
        				case "I":
        					var nrow = this.dsInsertSub.addRow();
        					this.dsInsertSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsInsertSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsInsertSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsInsertSub.setColumn(nrow, "TY_VENDORGUBUN", this.dsList4.getColumn(i, "TY_VENDORGUBUN"));
        					this.dsInsertSub.setColumn(nrow, "CD_VENDOR", this.dsList4.getColumn(i, "CD_VENDOR"));
        					this.dsInsertSub.setColumn(nrow, "YN_DAEPYO", this.dsList4.getColumn(i, "YN_DAEPYO"));
        					this.dsInsertSub.setColumn(nrow, "RT_JIBUN", this.dsList4.getColumn(i, "RT_JIBUN"));
        					this.dsInsertSub.setColumn(nrow, "TY_ACCOUNT", this.dsList4.getColumn(i, "TY_ACCOUNT"));
        					this.dsInsertSub.setColumn(nrow, "STD_ACCOUNT", this.dsList4.getColumn(i, "STD_ACCOUNT"));
        					this.dsInsertSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        					this.dsInsertSub.setColumn(nrow, "CD_TREATMENT", this.dsList4.getColumn(i, "CD_TREATMENT"));
        					this.dsInsertSub.setColumn(nrow, "ID_DAMDANG", this.dsList4.getColumn(i, "ID_DAMDANG"));
        					break;
        				case "U":
        					var nrow = this.dsUpdateSub.addRow();
        					this.dsUpdateSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsUpdateSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsUpdateSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsUpdateSub.setColumn(nrow, "TY_VENDORGUBUN", this.dsList4.getColumn(i, "TY_VENDORGUBUN"));
        					this.dsUpdateSub.setColumn(nrow, "CD_VENDOR", this.dsList4.getColumn(i, "CD_VENDOR"));
        					this.dsUpdateSub.setColumn(nrow, "YN_DAEPYO", this.dsList4.getColumn(i, "YN_DAEPYO"));
        					this.dsUpdateSub.setColumn(nrow, "RT_JIBUN", this.dsList4.getColumn(i, "RT_JIBUN"));
        					this.dsUpdateSub.setColumn(nrow, "TY_ACCOUNT", this.dsList4.getColumn(i, "TY_ACCOUNT"));
        					this.dsUpdateSub.setColumn(nrow, "STD_ACCOUNT", this.dsList4.getColumn(i, "STD_ACCOUNT"));
        					this.dsUpdateSub.setColumn(nrow, "CD_TREATMENT", this.dsList4.getColumn(i, "CD_TREATMENT"));
        					this.dsUpdateSub.setColumn(nrow, "ID_DAMDANG", this.dsList4.getColumn(i, "ID_DAMDANG"));
        					this.dsUpdateSub.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        					break;
        				case "D":
        					var nrow = this.dsDeleteSub.addRow();
        					this.dsDeleteSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsDeleteSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsDeleteSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsDeleteSub.setColumn(nrow, "TY_VENDORGUBUN", this.dsList4.getColumn(i, "TY_VENDORGUBUN"));
        					this.dsDeleteSub.setColumn(nrow, "CD_VENDOR", this.dsList4.getColumn(i, "CD_VENDOR"));
        					break;
        			}
        		}
        	}
        	// 특별할인율
        	else if(index == 5)
        	{
        		if (!this.gfnGridValidate(this.dxGrid5)) return;
        		for(var i = 0; i < this.dsList5.rowcount; i++)
        		{
        			var flag = this.gfnGetFlag(this.dsList5, i);
        			switch(flag) {
        				case "I":
        					var nrow = this.dsInsertSub.addRow();
        					this.dsInsertSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsInsertSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsInsertSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsInsertSub.setColumn(nrow, "YN_OPTION", "N");
        					this.dsInsertSub.setColumn(nrow, "DT_START", this.gfnNvl(this.dsList5.getColumn(i, "DT_START"),"").replace("-", ""));
        					this.dsInsertSub.setColumn(nrow, "DT_END", this.gfnNvl(this.dsList5.getColumn(i, "DT_END"),"").replace("-", ""));
        					this.dsInsertSub.setColumn(nrow, "RT_DISCOUNT", this.dsList5.getColumn(i, "RT_DISCOUNT"));
        					this.dsInsertSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        					break;
        				case "U":
        					var nrow = this.dsUpdateSub.addRow();
        					this.dsUpdateSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsUpdateSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsUpdateSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsUpdateSub.setColumn(nrow, "YN_OPTION", "N");
        					this.dsUpdateSub.setColumn(nrow, "DT_START", this.gfnNvl(this.dsList5.getColumn(i, "DT_START"),"").replace("-",""));
        					this.dsUpdateSub.setColumn(nrow, "DT_END", this.gfnNvl(this.dsList5.getColumn(i, "DT_END"),"").replace("-",""));
        					this.dsUpdateSub.setColumn(nrow, "RT_DISCOUNT", this.dsList5.getColumn(i, "RT_DISCOUNT"));
        					this.dsUpdateSub.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        					break;
        				case "D":
        					var nrow = this.dsDeleteSub.addRow();
        					this.dsDeleteSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsDeleteSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsDeleteSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsDeleteSub.setColumn(nrow, "YN_OPTION", "N");
        					this.dsDeleteSub.setColumn(nrow, "DT_START", this.gfnNvl(this.dsList5.getColumn(i, "DT_START"),"").replace("-",""));
        					this.dsDeleteSub.setColumn(nrow, "DT_END", this.gfnNvl(this.dsList5.getColumn(i, "DT_END"),"").replace("-",""));
        					break;
        			}
        		}
        	}
        	// 변동금리
        	else if(index == 6)
        	{
        		if (!this.gfnGridValidate(this.dxGrid6)) return;
        		for(var i = 0; i < this.dsList6.rowcount; i++)
        		{
        			var flag = this.gfnGetFlag(this.dsList6, i);
        			switch(flag) {
        				case "I":
        					var nrow = this.dsInsertSub.addRow();
        					this.dsInsertSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsInsertSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsInsertSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsInsertSub.setColumn(nrow, "TY_NAPIP", this.dsList6.getColumn(i, "TY_NAPIP"));
        					this.dsInsertSub.setColumn(nrow, "NO_NAPIP", this.dsList6.getColumn(i, "NO_NAPIP"));
        					this.dsInsertSub.setColumn(nrow, "DT_START", this.gfnNvl(this.dsList6.getColumn(i, "DT_START"),"").replace("-",""));
        					this.dsInsertSub.setColumn(nrow, "DT_END", this.gfnNvl(this.dsList6.getColumn(i, "DT_END"),"").replace("-",""));
        					this.dsInsertSub.setColumn(nrow, "RT_DISCOUNT", this.dsList6.getColumn(i, "RT_DISCOUNT"));
        					this.dsInsertSub.setColumn(nrow, "RT_DELAY1", this.dsList6.getColumn(i, "RT_DELAY1"));
        					this.dsInsertSub.setColumn(nrow, "RT_DELAY3", this.dsList6.getColumn(i, "RT_DELAY3"));
        					this.dsInsertSub.setColumn(nrow, "RT_DELAY6", this.dsList6.getColumn(i, "RT_DELAY6"));
        					this.dsInsertSub.setColumn(nrow, "RT_DELAY99", this.dsList6.getColumn(i, "RT_DELAY99"));
        					this.dsInsertSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        					break;
        				case "U":
        					var nrow = this.dsUpdateSub.addRow();
        					this.dsUpdateSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsUpdateSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsUpdateSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsUpdateSub.setColumn(nrow, "TY_NAPIP", this.dsList6.getColumn(i, "TY_NAPIP"));
        					this.dsUpdateSub.setColumn(nrow, "NO_NAPIP", this.dsList6.getColumn(i, "NO_NAPIP"));
        					this.dsUpdateSub.setColumn(nrow, "DT_START", this.gfnNvl(this.dsList6.getColumn(i, "DT_START"),"").replace("-",""));
        					this.dsUpdateSub.setColumn(nrow, "DT_END", this.gfnNvl(this.dsList6.getColumn(i, "DT_END"),"").replace("-",""));
        					this.dsUpdateSub.setColumn(nrow, "RT_DISCOUNT", this.dsList6.getColumn(i, "RT_DISCOUNT"));
        					this.dsUpdateSub.setColumn(nrow, "RT_DELAY1", this.dsList6.getColumn(i, "RT_DELAY1"));
        					this.dsUpdateSub.setColumn(nrow, "RT_DELAY3", this.dsList6.getColumn(i, "RT_DELAY3"));
        					this.dsUpdateSub.setColumn(nrow, "RT_DELAY6", this.dsList6.getColumn(i, "RT_DELAY6"));
        					this.dsUpdateSub.setColumn(nrow, "RT_DELAY99", this.dsList6.getColumn(i, "RT_DELAY99"));
        					this.dsUpdateSub.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        					break;
        				case "D":
        					var nrow = this.dsDeleteSub.addRow();
        					this.dsDeleteSub.setColumn(nrow, "CD_ACNTUNIT", cd_acntunit);
        					this.dsDeleteSub.setColumn(nrow, "TY_GUBUN", ty_gubun);
        					this.dsDeleteSub.setColumn(nrow, "NO_CHASU", no_chasu);
        					this.dsDeleteSub.setColumn(nrow, "TY_NAPIP", this.dsList6.getColumn(i, "TY_NAPIP"));
        					this.dsDeleteSub.setColumn(nrow, "NO_NAPIP", this.dsList6.getColumn(i, "NO_NAPIP"));
        					this.dsDeleteSub.setColumn(nrow, "DT_START", this.gfnNvl(this.dsList6.getColumn(i, "DT_START"),"").replace("-",""));
        					break;
        			}
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

        this.fnReadOnlyChange = function(chk, select)
        {
        	this.dsList1.clearData(); this.dsList2.clearData(); this.dsList3.clearData();
        	this.dsList4.clearData(); this.dsList5.clearData(); this.dsList6.clearData();

        	// chk = true면 활성화, chk = false면 비활성화
        	// select가 null이 아니면 조회.
        	// select가 true면 조회, false면 등록.
        	if(this.gfnIsNull(select))
        	{
        		this.dsSearch.clearData();
        		this.dsSearch.addRow();
        		this.dsList.clearData();
        		this.dsList.addRow();

        		this.divSearch.form.ccfCD_ACNTUNIT.set_visible(!chk);
        		this.divSearch.form.ccfCD_SITE.set_visible(chk);
        		this.divSearch.form.staTY_GUBUN.set_visible(chk);
        		this.divSearch.form.ccboTY_GUBUN.set_visible(chk);
        		this.divSearch.form.staNO_CHASU.set_visible(chk);
        		this.divSearch.form.ctxtNO_CHASU.set_visible(chk);
        		this.divSearch.form.staDS_ACNTUNIT.set_visible(chk);
        		this.divSearch.form.ctxtDS_ACNTUNIT.set_visible(chk);
        	}
        	else
        	{
        		this.divSearch.form.ccfCD_SITE.set_visible(!select);
        		this.divSearch.form.staTY_GUBUN.set_visible(!select);
        		this.divSearch.form.ccboTY_GUBUN.set_visible(!select);
        		this.divSearch.form.staNO_CHASU.set_visible(!select);
        		this.divSearch.form.ctxtNO_CHASU.set_visible(!select);
        		this.divSearch.form.staDS_ACNTUNIT.set_visible(!select);
        		this.divSearch.form.ctxtDS_ACNTUNIT.set_visible(!select);
        		this.divSearch.form.ccfCD_ACNTUNIT.set_visible(select);
        	}

        	this.divSearch.form.resetScroll();

        	this.dsList.setColumn(0, "TY_TYPE", 1);
        	this.divData.form.divDataTop.form.ccboTY_TYPE.set_enable(chk);

        	this.divData.form.divDataTop.form.ccfCD_CORP.form.set_readonly(!chk);
        	this.divData.form.divDataTop.form.ctxtDS_ADDRESS.set_readonly(!chk);
        	this.divData.form.divDataTop.form.ctclDT_APPROVE.set_enable(chk);

        	this.divData.form.divDataTop.form.ctclDT_IPJU_START.set_enable(chk);
        	this.divData.form.divDataTop.form.ctclDT_IPJU_END.set_enable(chk);

        	this.divData.form.divDataTop.form.ctxtSZ_EARTH_TOTAL.set_readonly(!chk);
        	this.divData.form.divDataTop.form.ctxtID_BUNYANG1.set_readonly(!chk);
        	this.divData.form.divDataTop.form.ctxtID_BUNYANG2.set_readonly(!chk);

        	this.divData.form.divDataTop.form.crdoYN_OPTION.set_enable(chk);
        	this.divData.form.divDataTop.form.ctxtNO_TEL.set_readonly(!chk);
        	this.divData.form.divDataTop.form.ctclDT_START.set_enable(chk);
        	this.divData.form.divDataTop.form.ctclDT_END.set_enable(chk);

        	this.divData.form.divDataTop.form.crdoYN_END.set_enable(chk);
        	this.divData.form.divDataTop.form.ctxtNO_REFTEL.set_readonly(!chk);
        	this.divData.form.divDataTop.form.crdoYN_JUNGONG.set_enable(chk);
        	this.divData.form.divDataTop.form.crdoYN_BUNNAP.set_enable(chk);
        	this.divData.form.divDataTop.form.ctxtUT_DISCOUNT.set_readonly(!chk);
        	this.divData.form.divDataTop.form.crdoSTD_DISCOUNT.set_enable(chk);
        	this.divData.form.divDataTop.form.ctxtDD_HALIN.set_readonly(!chk);
        	this.divData.form.divDataTop.form.ctxtID_SUKUM.set_readonly(!chk);
        	this.divData.form.divDataTop.form.ctxtID_SUKUM2.set_readonly(!chk);
        	this.divData.form.divDataTop.form.ctclDT_IPJU_START2.set_enable(chk);
        	this.divData.form.divDataTop.form.ctclDT_IPJU_END2.set_enable(chk);
        	this.divData.form.divDataTop.form.crdoTY_DELAY.set_enable(chk);
        	this.divData.form.divDataTop.form.ctxtUT_DELAY.set_readonly(!chk);
        	this.divData.form.divDataTop.form.crdoSTD_DELAY.set_enable(chk);
        	this.divData.form.divDataTop.form.crdoCAL_DELAY.set_enable(chk);
        	this.divData.form.divDataTop.form.ctxtDD_DELAY.set_readonly(!chk);
        	this.divData.form.divDataTop.form.ccfDS_APPR.set_enable(chk);
        	this.divData.form.divDataTop.form.ctxtDS_APPR2.set_readonly(!chk);
        	this.divData.form.divDataTop.form.cchkTY_ETC.set_enable(chk);
        }

        // 세대수 탭의 Elevator 등록 버튼 클릭 이벤트.
        this.divData_divDataBottom_tabData_tab2_btnELEVATOR_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT")))
        	{
        		var msg = "사업지코드를 입력하십시오.";
        		if(this.TY_STATUS == "I")
        		{
        			msg = "조회 후 입력하십시오.";
        		}

        		this.gfnAlert(msg);
        		return false;
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRA_INSERTELEVATOR", "fnElevatorCallback", param);

        };

        this.fnElevatorCallback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.fnDetail();
        	}
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		this.gfnSetFormStatus(this, "U");	// 폼상태 업데이트
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divDataTop.addEventHandler("onkeydown",this.divData_divDataTop_onkeydown,this);
            this.divData.form.divDataBottom.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.divDataBottom.form.tabData.tab2.form.btnELEVATOR.addEventHandler("onclick",this.divData_divDataBottom_tabData_tab2_btnELEVATOR_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRA_INSERTBUNYANG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
