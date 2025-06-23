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
            this.set_titletext("물류업체 리스트 상세(국내)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_VENDOR_SAP\" type=\"STRING\" size=\"256\"/><Column id=\"CP_NM_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"CP_NM_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CP_EMAIL_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"CP_ID_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"CP_ID_PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"CP_NO_HP\" type=\"STRING\" size=\"256\"/><Column id=\"CP_OFFICE_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"CP_OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"CP_OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CI_BUSINESS_DIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CI_DT_ESTABLISHED\" type=\"STRING\" size=\"256\"/><Column id=\"CI_COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM_CEO\" type=\"STRING\" size=\"256\"/><Column id=\"CI_CEO_EMAIL_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"CI_CEO_NO_HP\" type=\"STRING\" size=\"256\"/><Column id=\"CI_CEO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"CI_CEO_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CI_WEBSUTE\" type=\"STRING\" size=\"256\"/><Column id=\"BAI_COMMERCIAL_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"BAI_NM_BUSINESS_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"BAI_REGIST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BAI_NM_CITY\" type=\"STRING\" size=\"256\"/><Column id=\"BAI_ADDRESSS\" type=\"STRING\" size=\"256\"/><Column id=\"BAI_MAIN_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"BAI_MAIN_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"BAI_CONTACT_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"BAI_CONTACT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"BAI_NM_BUSINESS\" type=\"STRING\" size=\"256\"/><Column id=\"BAI_NM_SECTORS\" type=\"STRING\" size=\"256\"/><Column id=\"PCI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCI_COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"PCI_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"PCI_MAIN_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPA_REGION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPA_CNT_EMPLOYEE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCAPR_ETC_VENDOR_DETAIL</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCAPR_ETC_VENDOR_DTL_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCAPR_ETC_VENDOR_DTL_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCAPR_ETC_VENDOR_DTL_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBUSINESS_AREA", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">B</Col><Col id=\"VALUE\">국내</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">해외</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCI_BUSINESS_DIVISION", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">법인</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"VALUE\">개인</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staNO_VENDOR_R","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_VENDOR_R","staNO_VENDOR_R:0.0","10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("120");
            obj.getSetter("CodeFindName").set("DCX_ETC_VENDOR");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divTopData","0","10",null,"250","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTopTitle","0","0","678","22",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staNO_VENDOR","0","staTopTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("회사코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staBUSINESS_AREA","0","staNO_VENDOR:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("Business Area");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staBUSINESS_TYPE","0","staBUSINESS_AREA:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("등록유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCI_BUSINESS_DIVISION","0","staBUSINESS_TYPE:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("사업자구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCI_NUMBER","0","staCI_BUSINESS_DIVISION:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("법인번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCI_NAME","0","staCI_NUMBER:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCI_DT_ESTABLISHED","0","staCI_NAME:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("회사설립일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta00","staNO_VENDOR:-1","staTopTitle:5","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta01","staBUSINESS_AREA:-1","sta00:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta02","staBUSINESS_TYPE:-1","sta01:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta03","staCI_BUSINESS_DIVISION:-1","sta02:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta04","staCI_NUMBER:-1","sta03:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta05","staCI_NAME:-1","sta04:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta06","staCI_DT_ESTABLISHED:-1","sta05:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_VENDOR","staNO_VENDOR:10","staTopTitle:10","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Combo("ccboBUSINESS_AREA","staBUSINESS_AREA:10","ctxtNO_VENDOR:10","110","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsBUSINESS_AREA");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtBUSINESS_TYPE","staBUSINESS_TYPE:10","ccboBUSINESS_AREA:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Combo("ccboCI_BUSINESS_DIVISION","staCI_BUSINESS_DIVISION:10","ctxtBUSINESS_TYPE:9","110","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCI_BUSINESS_DIVISION");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_NUMBER","staCI_NUMBER:10","ccboCI_BUSINESS_DIVISION:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_NAME","staCI_NAME:10","ctxtCI_NUMBER:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Calendar("ctclCI_DT_ESTABLISHED","staCI_DT_ESTABLISHED:10","ctxtCI_NAME:9","110","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCI_NM_CEO","sta00:-1","staTopTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCI_CEO_EMAIL_ADDRESS","sta00:-1","staCI_NM_CEO:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("대표자 이메일 주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCI_CEO_NO_HP","sta00:-1","staCI_CEO_EMAIL_ADDRESS:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("대표자 휴대폰 번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCI_CEO_TEL","sta00:-1","staCI_CEO_NO_HP:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("대표자 전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCI_CEO_FAX","sta00:-1","staCI_CEO_TEL:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("대표자 Fax번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCI_WEBSUTE","sta00:-1","staCI_CEO_FAX:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("회사 홈페이지 URL");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCI_COUNTRY","sta00:-1","staCI_WEBSUTE:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("국가명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta07","staCI_NM_CEO:-1","staTopTitle:5","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta08","staCI_CEO_EMAIL_ADDRESS:-1","sta07:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta09","staCI_CEO_NO_HP:-1","sta08:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta10","staCI_CEO_TEL:-1","sta09:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta11","staCI_CEO_FAX:-1","sta10:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta12","staCI_WEBSUTE:-1","sta11:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta13","staCI_COUNTRY:-1","sta12:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_NM_CEO","staCI_NM_CEO:10","staTopTitle:10","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_CEO_EMAIL_ADDRESS","staCI_CEO_EMAIL_ADDRESS:10","ctxtCI_NM_CEO:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_CEO_NO_HP","staCI_CEO_NO_HP:10","ctxtCI_CEO_EMAIL_ADDRESS:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_CEO_TEL","staCI_CEO_TEL:10","ctxtCI_CEO_NO_HP:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_CEO_FAX","staCI_CEO_FAX:10","ctxtCI_CEO_TEL:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_WEBSUTE","staCI_WEBSUTE:10","ctxtCI_CEO_FAX:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_COUNTRY","staCI_COUNTRY:10","ctxtCI_WEBSUTE:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Div("divBottomData","0","divTopData:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divBottomData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.form.divBottomData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.divBottomData.form.tabData);
            obj.set_text("일반정보");
            this.divData.form.divBottomData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staBAI_COMMERCIAL_NUMBER","0","5","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBAI_NM_BUSINESS_AREA","0","staBAI_COMMERCIAL_NUMBER:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBAI_REGIST_DATE","0","staBAI_NM_BUSINESS_AREA:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("사업자등록일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBAI_NM_CITY","0","staBAI_REGIST_DATE:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("지역명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBAI_ADDRESSS","0","staBAI_NM_CITY:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("사업장 주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCAPA_CNT_EMPLOYEE","0","staBAI_ADDRESSS:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("종업원수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta14","staBAI_COMMERCIAL_NUMBER:-1","5","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta15","staBAI_NM_BUSINESS_AREA:-1","sta14:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta16","staBAI_REGIST_DATE:-1","sta15:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta17","staBAI_NM_CITY:-1","sta16:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta18","staBAI_ADDRESSS:-1","sta17:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta19","staCAPA_CNT_EMPLOYEE:-1","sta18:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtBAI_COMMERCIAL_NUMBER","staBAI_COMMERCIAL_NUMBER:10","10","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtBAI_NM_BUSINESS_AREA","staBAI_NM_BUSINESS_AREA:10","ctxtBAI_COMMERCIAL_NUMBER:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclBAI_REGIST_DATE","staBAI_REGIST_DATE:10","ctxtBAI_NM_BUSINESS_AREA:9","110","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtBAI_NM_CITY","staBAI_NM_CITY:10","ctclBAI_REGIST_DATE:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtBAI_ADDRESSS","staBAI_ADDRESSS:10","ctxtBAI_NM_CITY:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCAPA_CNT_EMPLOYEE","staCAPA_CNT_EMPLOYEE:10","ctxtBAI_ADDRESSS:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBAI_MAIN_PHONE","sta14:-1","5","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBAI_MAIN_FAX","sta14:-1","staBAI_MAIN_PHONE:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("대표Fax번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBAI_CONTACT_PHONE","sta14:-1","staBAI_MAIN_FAX:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("연락전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBAI_CONTACT_FAX","sta14:-1","staBAI_CONTACT_PHONE:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("연락Fax번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBAI_NM_BUSINESS","sta14:-1","staBAI_CONTACT_FAX:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBAI_NM_SECTORS","sta14:-1","staBAI_NM_BUSINESS:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta20","staBAI_MAIN_PHONE:-1","5","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta21","staBAI_MAIN_FAX:-1","sta20:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta22","staBAI_CONTACT_PHONE:-1","sta21:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta23","staBAI_CONTACT_FAX:-1","sta22:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta24","staBAI_NM_BUSINESS:-1","sta23:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta25","staBAI_NM_SECTORS:-1","sta24:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtBAI_MAIN_PHONE","staBAI_MAIN_PHONE:10","10","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtBAI_MAIN_FAX","staBAI_MAIN_FAX:10","ctxtBAI_MAIN_PHONE:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtBAI_CONTACT_PHONE","staBAI_CONTACT_PHONE:10","ctxtBAI_MAIN_FAX:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtBAI_CONTACT_FAX","staBAI_CONTACT_FAX:10","ctxtBAI_CONTACT_PHONE:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtBAI_NM_BUSINESS","staBAI_NM_BUSINESS:10","ctxtBAI_CONTACT_FAX:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtBAI_NM_SECTORS","staBAI_NM_SECTORS:10","ctxtBAI_NM_BUSINESS:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staFile","sta20:-1","5","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta28","staFile:-1","5","150","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnTab1File","staFile:10","10","130","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("38");
            obj.set_text("첨부파일");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.divBottomData.form.tabData);
            obj.set_text("기타");
            this.divData.form.divBottomData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staPCI_NAME","0","5","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPCI_COUNTRY","0","staPCI_NAME:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("국가명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPCI_ADDRESS","0","staPCI_COUNTRY:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPCI_MAIN_PHONE","0","staPCI_ADDRESS:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta24","staPCI_NAME:-1","5","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta25","staPCI_COUNTRY:-1","sta24:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta26","staPCI_ADDRESS:-1","sta25:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta27","staPCI_MAIN_PHONE:-1","sta26:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtPCI_NAME","staPCI_NAME:10","10","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtPCI_COUNTRY","staPCI_COUNTRY:10","ctxtPCI_NAME:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtPCI_ADDRESS","staPCI_ADDRESS:10","ctxtPCI_COUNTRY:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtPCI_MAIN_PHONE","staPCI_MAIN_PHONE:10","ctxtPCI_ADDRESS:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staFile","sta24:-1","5","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta29","staFile:-1","5","150","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnTab2File","staFile:10","10","130","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("38");
            obj.set_text("첨부파일");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divTopData.form.ctxtNO_VENDOR","value","dsList","NO_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divTopData.form.ccboBUSINESS_AREA","value","dsList","BUSINESS_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divTopData.form.ctxtBUSINESS_TYPE","value","dsList","BUSINESS_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divTopData.form.ccboCI_BUSINESS_DIVISION","value","dsList","CI_BUSINESS_DIVISION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divTopData.form.ctxtCI_NUMBER","value","dsList","CI_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divTopData.form.ctxtCI_NAME","value","dsList","CI_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divTopData.form.ctclCI_DT_ESTABLISHED","value","dsList","CI_DT_ESTABLISHED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divTopData.form.ctxtCI_NM_CEO","value","dsList","CI_NM_CEO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divTopData.form.ctxtCI_CEO_EMAIL_ADDRESS","value","dsList","CI_CEO_EMAIL_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divTopData.form.ctxtCI_CEO_NO_HP","value","dsList","CI_CEO_NO_HP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divTopData.form.ctxtCI_CEO_TEL","value","dsList","CI_CEO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divTopData.form.ctxtCI_CEO_FAX","value","dsList","CI_CEO_FAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divTopData.form.ctxtCI_WEBSUTE","value","dsList","CI_WEBSUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divTopData.form.ctxtCI_COUNTRY","value","dsList","CI_COUNTRY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divBottomData.form.tabData.tab1.form.ctxtBAI_COMMERCIAL_NUMBER","value","dsList","BAI_COMMERCIAL_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divBottomData.form.tabData.tab1.form.ctxtBAI_NM_BUSINESS_AREA","value","dsList","BAI_NM_BUSINESS_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divBottomData.form.tabData.tab1.form.ctclBAI_REGIST_DATE","value","dsList","BAI_REGIST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divBottomData.form.tabData.tab1.form.ctxtBAI_NM_CITY","value","dsList","BAI_NM_CITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divBottomData.form.tabData.tab1.form.ctxtBAI_ADDRESSS","value","dsList","BAI_ADDRESSS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divBottomData.form.tabData.tab1.form.ctxtCAPA_CNT_EMPLOYEE","value","dsList","CAPA_CNT_EMPLOYEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divBottomData.form.tabData.tab1.form.ctxtBAI_MAIN_PHONE","value","dsList","BAI_MAIN_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divBottomData.form.tabData.tab1.form.ctxtBAI_MAIN_FAX","value","dsList","BAI_MAIN_FAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divBottomData.form.tabData.tab1.form.ctxtBAI_CONTACT_PHONE","value","dsList","BAI_CONTACT_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divBottomData.form.tabData.tab1.form.ctxtBAI_CONTACT_FAX","value","dsList","BAI_CONTACT_FAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divBottomData.form.tabData.tab1.form.ctxtBAI_NM_BUSINESS","value","dsList","BAI_NM_BUSINESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divBottomData.form.tabData.tab1.form.ctxtBAI_NM_SECTORS","value","dsList","BAI_NM_SECTORS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divBottomData.form.tabData.tab2.form.ctxtPCI_NAME","value","dsList","PCI_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divBottomData.form.tabData.tab2.form.ctxtPCI_COUNTRY","value","dsList","PCI_COUNTRY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divBottomData.form.tabData.tab2.form.ctxtPCI_ADDRESS","value","dsList","PCI_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divBottomData.form.tabData.tab2.form.ctxtPCI_MAIN_PHONE","value","dsList","PCI_MAIN_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divSearch.form.ccfNO_VENDOR_R.form.CDTextBox","value","dsSearch","NO_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCA_LOGISTICS_VENDOR_DETAIL.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().TY_GUBUN) && !this.gfnIsNull(this.getOwnerFrame().NO_VENDOR))
        	{
        		this.dsSearch.setColumn(0, "TY_GUBUN", this.getOwnerFrame().TY_GUBUN);
        		this.dsSearch.setColumn(0, "NO_VENDOR", this.getOwnerFrame().NO_VENDOR);
        		this.divSearch.form.ccfNO_VENDOR_R.form.DSTextBox.set_value(this.getOwnerFrame().CI_NAME);

        		this.FormBtns.Select.click();
        	}
        	else
        	{
        		this.dsSearch.setColumn(0, "TY_GUBUN", "B");
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfNO_VENDOR_R = this.divSearch.form.ccfNO_VENDOR_R;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_VENDOR_R.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_VENDOR", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_VENDOR_SAP", "string");
        	this.dsInsert.addColumn("CP_NM_DAM", "string");
        	this.dsInsert.addColumn("CP_NM_POSITION", "string");
        	this.dsInsert.addColumn("CP_EMAIL_ADDRESS", "string");
        	this.dsInsert.addColumn("CP_ID_DAM", "string");
        	this.dsInsert.addColumn("CP_ID_PASSWORD", "string");
        	this.dsInsert.addColumn("CP_NO_HP", "string");
        	this.dsInsert.addColumn("CP_OFFICE_ADDRESS", "string");
        	this.dsInsert.addColumn("CP_OFFICE_TEL", "string");
        	this.dsInsert.addColumn("CP_OFFICE_FAX", "string");
        	this.dsInsert.addColumn("BUSINESS_AREA", "string");
        	this.dsInsert.addColumn("BUSINESS_TYPE", "string");
        	this.dsInsert.addColumn("CI_BUSINESS_DIVISION", "string");
        	this.dsInsert.addColumn("CI_NUMBER", "string");
        	this.dsInsert.addColumn("CI_NAME", "string");
        	this.dsInsert.addColumn("CI_DT_ESTABLISHED", "string");
        	this.dsInsert.addColumn("CI_COUNTRY", "string");
        	this.dsInsert.addColumn("CI_NM_CEO", "string");
        	this.dsInsert.addColumn("CI_CEO_EMAIL_ADDRESS", "string");
        	this.dsInsert.addColumn("CI_CEO_NO_HP", "string");
        	this.dsInsert.addColumn("CI_CEO_TEL", "string");
        	this.dsInsert.addColumn("CI_CEO_FAX", "string");
        	this.dsInsert.addColumn("CI_WEBSUTE", "string");
        	this.dsInsert.addColumn("BAI_COMMERCIAL_NUMBER", "string");
        	this.dsInsert.addColumn("BAI_NM_BUSINESS_AREA", "string");
        	this.dsInsert.addColumn("BAI_REGIST_DATE", "string");
        	this.dsInsert.addColumn("BAI_NM_CITY", "string");
        	this.dsInsert.addColumn("BAI_ADDRESSS", "string");
        	this.dsInsert.addColumn("BAI_MAIN_PHONE", "string");
        	this.dsInsert.addColumn("BAI_MAIN_FAX", "string");
        	this.dsInsert.addColumn("BAI_CONTACT_PHONE", "string");
        	this.dsInsert.addColumn("BAI_CONTACT_FAX", "string");
        	this.dsInsert.addColumn("BAI_NM_BUSINESS", "string");
        	this.dsInsert.addColumn("BAI_NM_SECTORS", "string");
        	this.dsInsert.addColumn("PCI_NAME", "string");
        	this.dsInsert.addColumn("PCI_COUNTRY", "string");
        	this.dsInsert.addColumn("PCI_ADDRESS", "string");
        	this.dsInsert.addColumn("PCI_MAIN_PHONE", "string");
        	this.dsInsert.addColumn("CAPA_REGION", "string");
        	this.dsInsert.addColumn("CAPA_CNT_EMPLOYEE", "string");
        	this.dsInsert.addColumn("NO_VENDOR_R", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_VENDOR", "string");
        	this.dsUpdate.addColumn("NO_VENDOR_SAP", "string");
        	this.dsUpdate.addColumn("CP_NM_DAM", "string");
        	this.dsUpdate.addColumn("CP_NM_POSITION", "string");
        	this.dsUpdate.addColumn("CP_EMAIL_ADDRESS", "string");
        	this.dsUpdate.addColumn("CP_ID_DAM", "string");
        	this.dsUpdate.addColumn("CP_ID_PASSWORD", "string");
        	this.dsUpdate.addColumn("CP_NO_HP", "string");
        	this.dsUpdate.addColumn("CP_OFFICE_ADDRESS", "string");
        	this.dsUpdate.addColumn("CP_OFFICE_TEL", "string");
        	this.dsUpdate.addColumn("CP_OFFICE_FAX", "string");
        	this.dsUpdate.addColumn("BUSINESS_AREA", "string");
        	this.dsUpdate.addColumn("BUSINESS_TYPE", "string");
        	this.dsUpdate.addColumn("CI_BUSINESS_DIVISION", "string");
        	this.dsUpdate.addColumn("CI_NUMBER", "string");
        	this.dsUpdate.addColumn("CI_NAME", "string");
        	this.dsUpdate.addColumn("CI_DT_ESTABLISHED", "string");
        	this.dsUpdate.addColumn("CI_COUNTRY", "string");
        	this.dsUpdate.addColumn("CI_NM_CEO", "string");
        	this.dsUpdate.addColumn("CI_CEO_EMAIL_ADDRESS", "string");
        	this.dsUpdate.addColumn("CI_CEO_NO_HP", "string");
        	this.dsUpdate.addColumn("CI_CEO_TEL", "string");
        	this.dsUpdate.addColumn("CI_CEO_FAX", "string");
        	this.dsUpdate.addColumn("CI_WEBSUTE", "string");
        	this.dsUpdate.addColumn("BAI_COMMERCIAL_NUMBER", "string");
        	this.dsUpdate.addColumn("BAI_NM_BUSINESS_AREA", "string");
        	this.dsUpdate.addColumn("BAI_REGIST_DATE", "string");
        	this.dsUpdate.addColumn("BAI_NM_CITY", "string");
        	this.dsUpdate.addColumn("BAI_ADDRESSS", "string");
        	this.dsUpdate.addColumn("BAI_MAIN_PHONE", "string");
        	this.dsUpdate.addColumn("BAI_MAIN_FAX", "string");
        	this.dsUpdate.addColumn("BAI_CONTACT_PHONE", "string");
        	this.dsUpdate.addColumn("BAI_CONTACT_FAX", "string");
        	this.dsUpdate.addColumn("BAI_NM_BUSINESS", "string");
        	this.dsUpdate.addColumn("BAI_NM_SECTORS", "string");
        	this.dsUpdate.addColumn("PCI_NAME", "string");
        	this.dsUpdate.addColumn("PCI_COUNTRY", "string");
        	this.dsUpdate.addColumn("PCI_ADDRESS", "string");
        	this.dsUpdate.addColumn("PCI_MAIN_PHONE", "string");
        	this.dsUpdate.addColumn("CAPA_REGION", "string");
        	this.dsUpdate.addColumn("CAPA_CNT_EMPLOYEE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_VENDOR", "string");

        	this.dsInsertOutput = new Dataset();
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "NO_VENDOR", this.dsSearch.getColumn(0, "NO_VENDOR"));

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.dsList.clearData();
        	this.dsSearch.clearData();

        	this.dsList.addRow();
        	this.dsSearch.addRow();

        	this.divSearch.form.ccfNO_VENDOR_R.form.DSTextBox.set_value("");

        	this.gfnSetFormStatus(this, "I");
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnConfirm("삭제하시겠습니까?","fnDel_callback");
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function(flag) {

        	if(flag != "D")
        	{
        		if(this.gfnIsNull(this.dsList.getColumn(0, "NO_VENDOR")))
        		{
        			flag = "I";
        		}else
        		{
        			flag = "U";
        		}
        	}

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	switch(flag) {
        		case "I":
        			var nrow = this.dsInsert.addRow();
        			this.dsInsert.setColumn(nrow, "TY_GUBUN", "B");
        			this.dsInsert.setColumn(nrow, "NO_VENDOR_SAP", this.dsList.getColumn(0, "NO_VENDOR_SAP"));
        			this.dsInsert.setColumn(nrow, "CP_NM_DAM", this.dsList.getColumn(0, "CP_NM_DAM"));
        			this.dsInsert.setColumn(nrow, "CP_NM_POSITION", this.dsList.getColumn(0, "CP_NM_POSITION"));
        			this.dsInsert.setColumn(nrow, "CP_EMAIL_ADDRESS", this.dsList.getColumn(0, "CP_EMAIL_ADDRESS"));
        			this.dsInsert.setColumn(nrow, "CP_ID_DAM", this.dsList.getColumn(0, "CP_ID_DAM"));
        			this.dsInsert.setColumn(nrow, "CP_ID_PASSWORD", this.dsList.getColumn(0, "CP_ID_PASSWORD"));
        			this.dsInsert.setColumn(nrow, "CP_NO_HP", this.dsList.getColumn(0, "CP_NO_HP"));
        			this.dsInsert.setColumn(nrow, "CP_OFFICE_ADDRESS", this.dsList.getColumn(0, "CP_OFFICE_ADDRESS"));
        			this.dsInsert.setColumn(nrow, "CP_OFFICE_TEL", this.dsList.getColumn(0, "CP_OFFICE_TEL"));
        			this.dsInsert.setColumn(nrow, "CP_OFFICE_FAX", this.dsList.getColumn(0, "CP_OFFICE_FAX"));
        			this.dsInsert.setColumn(nrow, "BUSINESS_AREA", this.dsList.getColumn(0, "BUSINESS_AREA"));
        			this.dsInsert.setColumn(nrow, "BUSINESS_TYPE", this.dsList.getColumn(0, "BUSINESS_TYPE"));
        			this.dsInsert.setColumn(nrow, "CI_BUSINESS_DIVISION", this.dsList.getColumn(0, "CI_BUSINESS_DIVISION"));
        			this.dsInsert.setColumn(nrow, "CI_NUMBER", this.dsList.getColumn(0, "CI_NUMBER"));
        			this.dsInsert.setColumn(nrow, "CI_NAME", this.dsList.getColumn(0, "CI_NAME"));
        			this.dsInsert.setColumn(nrow, "CI_DT_ESTABLISHED", this.dsList.getColumn(0, "CI_DT_ESTABLISHED"));
        			this.dsInsert.setColumn(nrow, "CI_COUNTRY", this.dsList.getColumn(0, "CI_COUNTRY"));
        			this.dsInsert.setColumn(nrow, "CI_NM_CEO", this.dsList.getColumn(0, "CI_NM_CEO"));
        			this.dsInsert.setColumn(nrow, "CI_CEO_EMAIL_ADDRESS", this.dsList.getColumn(0, "CI_CEO_EMAIL_ADDRESS"));
        			this.dsInsert.setColumn(nrow, "CI_CEO_NO_HP", this.dsList.getColumn(0, "CI_CEO_NO_HP"));
        			this.dsInsert.setColumn(nrow, "CI_CEO_TEL", this.dsList.getColumn(0, "CI_CEO_TEL"));
        			this.dsInsert.setColumn(nrow, "CI_CEO_FAX", this.dsList.getColumn(0, "CI_CEO_FAX"));
        			this.dsInsert.setColumn(nrow, "CI_WEBSUTE", this.dsList.getColumn(0, "CI_WEBSUTE"));
        			this.dsInsert.setColumn(nrow, "BAI_COMMERCIAL_NUMBER", this.dsList.getColumn(0, "BAI_COMMERCIAL_NUMBER"));
        			this.dsInsert.setColumn(nrow, "BAI_NM_BUSINESS_AREA", this.dsList.getColumn(0, "BAI_NM_BUSINESS_AREA"));
        			this.dsInsert.setColumn(nrow, "BAI_REGIST_DATE", this.dsList.getColumn(0, "BAI_REGIST_DATE"));
        			this.dsInsert.setColumn(nrow, "BAI_NM_CITY", this.dsList.getColumn(0, "BAI_NM_CITY"));
        			this.dsInsert.setColumn(nrow, "BAI_ADDRESSS", this.dsList.getColumn(0, "BAI_ADDRESSS"));
        			this.dsInsert.setColumn(nrow, "BAI_MAIN_PHONE", this.dsList.getColumn(0, "BAI_MAIN_PHONE"));
        			this.dsInsert.setColumn(nrow, "BAI_MAIN_FAX", this.dsList.getColumn(0, "BAI_MAIN_FAX"));
        			this.dsInsert.setColumn(nrow, "BAI_CONTACT_PHONE", this.dsList.getColumn(0, "BAI_CONTACT_PHONE"));
        			this.dsInsert.setColumn(nrow, "BAI_CONTACT_FAX", this.dsList.getColumn(0, "BAI_CONTACT_FAX"));
        			this.dsInsert.setColumn(nrow, "BAI_NM_BUSINESS", this.dsList.getColumn(0, "BAI_NM_BUSINESS"));
        			this.dsInsert.setColumn(nrow, "BAI_NM_SECTORS", this.dsList.getColumn(0, "BAI_NM_SECTORS"));
        			this.dsInsert.setColumn(nrow, "PCI_NAME", this.dsList.getColumn(0, "PCI_NAME"));
        			this.dsInsert.setColumn(nrow, "PCI_COUNTRY", this.dsList.getColumn(0, "PCI_COUNTRY"));
        			this.dsInsert.setColumn(nrow, "PCI_ADDRESS", this.dsList.getColumn(0, "PCI_ADDRESS"));
        			this.dsInsert.setColumn(nrow, "PCI_MAIN_PHONE", this.dsList.getColumn(0, "PCI_MAIN_PHONE"));
        			this.dsInsert.setColumn(nrow, "CAPA_REGION", this.dsList.getColumn(0, "CAPA_REGION"));
        			this.dsInsert.setColumn(nrow, "CAPA_CNT_EMPLOYEE", this.dsList.getColumn(0, "CAPA_CNT_EMPLOYEE"));
        			this.dsInsert.setColumn(nrow, "NO_VENDOR_R", "");
        			break;

        		case "U":
        			var nrow = this.dsUpdate.addRow();
        			this.dsUpdate.setColumn(nrow, "TY_GUBUN", "B");
        			this.dsUpdate.setColumn(nrow, "NO_VENDOR", this.dsList.getColumn(0, "NO_VENDOR"));
        			this.dsUpdate.setColumn(nrow, "NO_VENDOR_SAP", this.dsList.getColumn(0, "NO_VENDOR_SAP"));
        			this.dsUpdate.setColumn(nrow, "CP_NM_DAM", this.dsList.getColumn(0, "CP_NM_DAM"));
        			this.dsUpdate.setColumn(nrow, "CP_NM_POSITION", this.dsList.getColumn(0, "CP_NM_POSITION"));
        			this.dsUpdate.setColumn(nrow, "CP_EMAIL_ADDRESS", this.dsList.getColumn(0, "CP_EMAIL_ADDRESS"));
        			this.dsUpdate.setColumn(nrow, "CP_ID_DAM", this.dsList.getColumn(0, "CP_ID_DAM"));
        			this.dsUpdate.setColumn(nrow, "CP_ID_PASSWORD", this.dsList.getColumn(0, "CP_ID_PASSWORD"));
        			this.dsUpdate.setColumn(nrow, "CP_NO_HP", this.dsList.getColumn(0, "CP_NO_HP"));
        			this.dsUpdate.setColumn(nrow, "CP_OFFICE_ADDRESS", this.dsList.getColumn(0, "CP_OFFICE_ADDRESS"));
        			this.dsUpdate.setColumn(nrow, "CP_OFFICE_TEL", this.dsList.getColumn(0, "CP_OFFICE_TEL"));
        			this.dsUpdate.setColumn(nrow, "CP_OFFICE_FAX", this.dsList.getColumn(0, "CP_OFFICE_FAX"));
        			this.dsUpdate.setColumn(nrow, "BUSINESS_AREA", this.dsList.getColumn(0, "BUSINESS_AREA"));
        			this.dsUpdate.setColumn(nrow, "BUSINESS_TYPE", this.dsList.getColumn(0, "BUSINESS_TYPE"));
        			this.dsUpdate.setColumn(nrow, "CI_BUSINESS_DIVISION", this.dsList.getColumn(0, "CI_BUSINESS_DIVISION"));
        			this.dsUpdate.setColumn(nrow, "CI_NUMBER", this.dsList.getColumn(0, "CI_NUMBER"));
        			this.dsUpdate.setColumn(nrow, "CI_NAME", this.dsList.getColumn(0, "CI_NAME"));
        			this.dsUpdate.setColumn(nrow, "CI_DT_ESTABLISHED", this.dsList.getColumn(0, "CI_DT_ESTABLISHED"));
        			this.dsUpdate.setColumn(nrow, "CI_COUNTRY", this.dsList.getColumn(0, "CI_COUNTRY"));
        			this.dsUpdate.setColumn(nrow, "CI_NM_CEO", this.dsList.getColumn(0, "CI_NM_CEO"));
        			this.dsUpdate.setColumn(nrow, "CI_CEO_EMAIL_ADDRESS", this.dsList.getColumn(0, "CI_CEO_EMAIL_ADDRESS"));
        			this.dsUpdate.setColumn(nrow, "CI_CEO_NO_HP", this.dsList.getColumn(0, "CI_CEO_NO_HP"));
        			this.dsUpdate.setColumn(nrow, "CI_CEO_TEL", this.dsList.getColumn(0, "CI_CEO_TEL"));
        			this.dsUpdate.setColumn(nrow, "CI_CEO_FAX", this.dsList.getColumn(0, "CI_CEO_FAX"));
        			this.dsUpdate.setColumn(nrow, "CI_WEBSUTE", this.dsList.getColumn(0, "CI_WEBSUTE"));
        			this.dsUpdate.setColumn(nrow, "BAI_COMMERCIAL_NUMBER", this.dsList.getColumn(0, "BAI_COMMERCIAL_NUMBER"));
        			this.dsUpdate.setColumn(nrow, "BAI_NM_BUSINESS_AREA", this.dsList.getColumn(0, "BAI_NM_BUSINESS_AREA"));
        			this.dsUpdate.setColumn(nrow, "BAI_REGIST_DATE", this.dsList.getColumn(0, "BAI_REGIST_DATE"));
        			this.dsUpdate.setColumn(nrow, "BAI_NM_CITY", this.dsList.getColumn(0, "BAI_NM_CITY"));
        			this.dsUpdate.setColumn(nrow, "BAI_ADDRESSS", this.dsList.getColumn(0, "BAI_ADDRESSS"));
        			this.dsUpdate.setColumn(nrow, "BAI_MAIN_PHONE", this.dsList.getColumn(0, "BAI_MAIN_PHONE"));
        			this.dsUpdate.setColumn(nrow, "BAI_MAIN_FAX", this.dsList.getColumn(0, "BAI_MAIN_FAX"));
        			this.dsUpdate.setColumn(nrow, "BAI_CONTACT_PHONE", this.dsList.getColumn(0, "BAI_CONTACT_PHONE"));
        			this.dsUpdate.setColumn(nrow, "BAI_CONTACT_FAX", this.dsList.getColumn(0, "BAI_CONTACT_FAX"));
        			this.dsUpdate.setColumn(nrow, "BAI_NM_BUSINESS", this.dsList.getColumn(0, "BAI_NM_BUSINESS"));
        			this.dsUpdate.setColumn(nrow, "BAI_NM_SECTORS", this.dsList.getColumn(0, "BAI_NM_SECTORS"));
        			this.dsUpdate.setColumn(nrow, "PCI_NAME", this.dsList.getColumn(0, "PCI_NAME"));
        			this.dsUpdate.setColumn(nrow, "PCI_COUNTRY", this.dsList.getColumn(0, "PCI_COUNTRY"));
        			this.dsUpdate.setColumn(nrow, "PCI_ADDRESS", this.dsList.getColumn(0, "PCI_ADDRESS"));
        			this.dsUpdate.setColumn(nrow, "PCI_MAIN_PHONE", this.dsList.getColumn(0, "PCI_MAIN_PHONE"));
        			this.dsUpdate.setColumn(nrow, "CAPA_REGION", this.dsList.getColumn(0, "CAPA_REGION"));
        			this.dsUpdate.setColumn(nrow, "CAPA_CNT_EMPLOYEE", this.dsList.getColumn(0, "CAPA_CNT_EMPLOYEE"));
        			break;

        		case "D":
        			var nrow = this.dsDelete.addRow();
        			this.dsDelete.setColumn(nrow, "TY_GUBUN", "B");
        			this.dsDelete.setColumn(nrow, "NO_VENDOR", this.dsList.getColumn(0, "NO_VENDOR"));
        			break;
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	this.dsInsertOutput.clearData();
        	this.dsInsertOutput.addRow();

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        	var outData     = "dsInsertOutput=insert";
        	var strArg      = flag;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        // 	switch(this.divData.form.tabData.tabindex) {
        // 		case 0:
        // 			this.gfnExcelExport(this.dxGrid);
        // 			break;
        // 		case 1:
        // 			this.gfnExcelExport(this.dxGrid2);
        // 			break;
        // 	}
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
        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (errorCode == 0) {
        		if (svcID == "select") {
        			this.divSearch.form.ccfNO_VENDOR_R.form.DSTextBox.set_value(this.dsList.getColumn(0, "CI_NAME"));
        		}
        		else if (svcID == "save") {
        			switch(strArg)
        			{
        				case "I" :
        					this.gfnAlert("입력이 완료되었습니다.", "", "", "fnInsert_callback");
        					break;
        				case "U" :
        					this.FormBtns.Select.click();
        					break;
        				case "D" :
        					this.gfnAlert("삭제가 완료되었습니다.", "" , "" , "fnClose_callback");
        					break;
        			}
        		}
        	}
        	else
        	{
        		this.gfnAlert(errorMsg);
        	}
        }

        this.fnInsert_callback = function(strId, val)
        {
        	this.dsSearch.setColumn(0, "NO_VENDOR", this.dsInsertOutput.getColumn(0, "NO_VENDOR_R"));
        	this.dsSearch.setColumn(0, "TY_GUBUN", "B");
        	this.FormBtns.Select.click();
        }

        this.fnDel_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.fnSave("D");
        	}
        }

        // 삭제 메시지 후 창을 닫기 위한 콜백함수.
        this.fnClose_callback = function(strID)
        {
        	this.getParentContext().close();
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfNO_VENDOR_R") {
        		dsUserParam.setColumn(nrow, "TY_COUNTRY", "B");
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

        this.divData_tabData_onchanged = function(obj,e)
        {
        	// 탭 변경시 조회처리시
        // 	if(e.preindex != e.postindex) {
        // 		this.FormBtns.Select.click();
        // 	}
        };

        this.dsList_cancolumnchange = function(obj,e)
        {
        	this.gfnSetFormStatus(this, "U");
        };

        this.fnTab1File_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_VENDOR"))){
        		this.gfnAlert("저장 후 파일첨부를 진행해주세요.");
        		return false;
        	}

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC60";
        	fileManager.CD_DIR = [ this.dsList.getColumn(0, "NO_VENDOR") ];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}
        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        this.fnTab2File_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_VENDOR"))){
        		this.gfnAlert("저장 후 파일첨부를 진행해주세요.");
        		return false;
        	}

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC70";
        	fileManager.CD_DIR = [ this.dsList.getColumn(0, "NO_VENDOR") ];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}
        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfNO_VENDOR_R.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divBottomData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.divBottomData.form.tabData.tab1.form.btnTab1File.addEventHandler("onclick",this.fnTab1File_onclick,this);
            this.divData.form.divBottomData.form.tabData.tab2.form.btnTab2File.addEventHandler("onclick",this.fnTab2File_onclick,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCA_LOGISTICS_VENDOR_DETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
