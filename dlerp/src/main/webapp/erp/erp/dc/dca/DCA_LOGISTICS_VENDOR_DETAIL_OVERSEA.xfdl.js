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
            this.set_titletext("물류업체 리스트 상세(해외)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_VENDOR_SAP\" type=\"STRING\" size=\"256\"/><Column id=\"CP_NM_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"CP_NM_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CP_EMAIL_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"CP_ID_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"CP_ID_PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"CP_NO_HP\" type=\"STRING\" size=\"256\"/><Column id=\"CP_OFFICE_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"CP_OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"CP_OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CI_DT_ESTABLISHED\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM_CEO\" type=\"STRING\" size=\"256\"/><Column id=\"CI_COMMERCIAL_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CI_OFFICE_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"CI_OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"CI_COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"CI_CITY\" type=\"STRING\" size=\"256\"/><Column id=\"CI_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"CI_PROVINCE\" type=\"STRING\" size=\"256\"/><Column id=\"CI_POSTAL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CI_CONTACT_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"CI_WEBSITE\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NUMBER_IMP_EXP\" type=\"STRING\" size=\"256\"/><Column id=\"CI_Association\" type=\"STRING\" size=\"256\"/><Column id=\"PCI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCI_OWNER_COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"PCI_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"PCI_CITY\" type=\"STRING\" size=\"256\"/><Column id=\"PCI_COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"PCI_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"PCI_PROVINCE\" type=\"STRING\" size=\"256\"/><Column id=\"PCI_POSTAL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PCI_MAIN_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"FI_TURN_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"FI_DNB_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"FI_OVERSEA_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"CAPA_REGION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPA_FACTORY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CAPA_FACTORY_LOACTION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPA_FACTORY_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPA_FACTORY_PRODUCT\" type=\"STRING\" size=\"256\"/><Column id=\"CAPA_WAREHOUSE_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"CAPA_SUPPLY\" type=\"STRING\" size=\"256\"/><Column id=\"CAPA_AVG_PRODUCTION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPA_CNT_EMPLOYEE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCAPR_ETC_VENDOR_OVERSEA</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCAPR_ETC_VENDOR_OVS_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCAPR_ETC_VENDOR_OVS_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCAPR_ETC_VENDOR_OVS_DELETE</Col></Row></Rows>");
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
            obj.set_text("General Information");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staNO_VENDOR","0","staTopTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("No.Vendor");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCI_NAME","0","staNO_VENDOR:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("Company Name");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCP_NM_POSITION","0","staCI_NAME:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("Position");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCP_EMAIL_ADDRESS","0","staCP_NM_POSITION:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("Email Address");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCP_ID_DAM","0","staCP_EMAIL_ADDRESS:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("User ID");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCP_ID_PASSWORD","0","staCP_ID_DAM:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("Password");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta00","staNO_VENDOR:-1","staTopTitle:5","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta01","staCI_NAME:-1","sta00:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta02","staCP_NM_POSITION:-1","sta01:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta03","staCP_EMAIL_ADDRESS:-1","sta02:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta04","staCI_NAME:-1","sta03:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta05","staCP_ID_PASSWORD:-1","sta04:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_VENDOR","staNO_VENDOR:10","staTopTitle:10","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_NAME","staCI_NAME:10","ctxtNO_VENDOR:10","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCP_NM_POSITION","staCP_NM_POSITION:10","ctxtCI_NAME:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCP_EMAIL_ADDRESS","staCP_NM_POSITION:10","ctxtCP_NM_POSITION:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCP_ID_DAM","staCP_ID_DAM:10","ctxtCP_EMAIL_ADDRESS:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCP_ID_PASSWORD","staCP_ID_PASSWORD:10","ctxtCP_ID_DAM:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staBUSINESS_AREA","sta00:-1","staTopTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("Business Area");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staBUSINESS_TYPE","sta00:-1","staBUSINESS_AREA:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("Business Type");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCP_NO_HP","sta00:-1","staBUSINESS_TYPE:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("Mobile Number");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCP_OFFICE_ADDRESS","sta00:-1","staCP_NO_HP:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("Office Address");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCP_OFFICE_TEL","sta00:-1","staCP_OFFICE_ADDRESS:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("Phone Number");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("staCP_OFFICE_FAX","sta00:-1","staCP_OFFICE_TEL:-1","120","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_text("Facsimile Number");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta06","staBUSINESS_AREA:-1","staTopTitle:5","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta07","staBUSINESS_TYPE:-1","sta06:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta08","staCP_NO_HP:-1","sta07:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta09","staCP_OFFICE_ADDRESS:-1","sta08:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta10","staCP_OFFICE_TEL:-1","sta09:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Static("sta11","staCP_OFFICE_FAX:-1","sta10:-1","220","30",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtBUSINESS_AREA","staBUSINESS_AREA:10","staTopTitle:10","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtBUSINESS_TYPE","staBUSINESS_TYPE:10","ctxtBUSINESS_AREA:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCP_NO_HP","staCP_NO_HP:10","ctxtBUSINESS_TYPE:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCP_OFFICE_ADDRESS","staCP_OFFICE_ADDRESS:10","ctxtCP_NO_HP:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCP_OFFICE_TEL","staCP_OFFICE_TEL:10","ctxtCP_OFFICE_ADDRESS:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divTopData.addChild(obj.name, obj);

            obj = new Edit("ctxtCP_OFFICE_FAX","staCP_OFFICE_FAX:10","ctxtCP_OFFICE_TEL:9","200","20",null,null,null,null,null,null,this.divData.form.divTopData.form);
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
            obj.set_text("Company Info");
            this.divData.form.divBottomData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staCP_NM_DAM","0","5","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("Name in Charge");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCI_DT_ESTABLISHED","0","staCP_NM_DAM:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("Established Date");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCI_NM_CEO","0","staCI_DT_ESTABLISHED:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("Name of CEO");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCI_COMMERCIAL_NUMBER","0","staCI_NM_CEO:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("Commercial Registration Number");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCI_CONTACT_PERSON","0","staCI_COMMERCIAL_NUMBER:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("Contact Person");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCI_WEBSITE","0","staCI_CONTACT_PERSON:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("Company Website");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCI_NUMBER_IMP_EXP","0","staCI_WEBSITE:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("Import & Export License Number");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCI_ASSOCIATION","0","staCI_NUMBER_IMP_EXP:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("Membership for committee, Association");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta12","staCP_NM_DAM:-1","5","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta13","staCI_DT_ESTABLISHED:-1","sta12:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta14","staCI_NM_CEO:-1","sta13:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta15","staCI_COMMERCIAL_NUMBER:-1","sta14:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta16","staCI_CONTACT_PERSON:-1","sta15:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta17","staCI_WEBSITE:-1","sta16:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta18","staCI_NUMBER_IMP_EXP:-1","sta17:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta19","staCI_ASSOCIATION:-1","sta18:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCP_NM_DAM","staCP_NM_DAM:10","10","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclCI_DT_ESTABLISHED","staCI_DT_ESTABLISHED:10","ctxtCP_NM_DAM:9","110","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_NM_CEO","staCI_NM_CEO:10","ctclCI_DT_ESTABLISHED:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_COMMERCIAL_NUMBER","staCI_COMMERCIAL_NUMBER:10","ctxtCI_NM_CEO:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_CONTACT_PERSON","staCI_CONTACT_PERSON:10","ctxtCI_COMMERCIAL_NUMBER:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_WEBSITE","staCI_WEBSITE:10","ctxtCI_CONTACT_PERSON:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_NUMBER_IMP_EXP","staCI_NUMBER_IMP_EXP:10","ctxtCI_WEBSITE:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_ASSOCIATION","staCI_ASSOCIATION:10","ctxtCI_NUMBER_IMP_EXP:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCI_OFFICE_ADDRESS","sta12:-1","5","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("Office Address ");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCI_OFFICE_TEL","sta12:-1","staCI_OFFICE_ADDRESS:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("Phone Number");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCI_COUNTRY","sta12:-1","staCI_OFFICE_TEL:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("Country");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCI_CITY","sta12:-1","staCI_COUNTRY:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("City");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCI_STATE","sta12:-1","staCI_CITY:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("State");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCI_PROVINCE","sta12:-1","staCI_STATE:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("Province");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCI_POSTAL_CODE","sta12:-1","staCI_PROVINCE:-1","120","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("Postal Code");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta20","staCI_OFFICE_ADDRESS:-1","5","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta21","staCI_OFFICE_TEL:-1","sta20:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta22","staCI_COUNTRY:-1","sta21:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta23","staCI_CITY:-1","sta22:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta24","staCI_STATE:-1","sta23:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta25","staCI_PROVINCE:-1","sta24:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta26","staCI_POSTAL_CODE:-1","sta25:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_OFFICE_ADDRESS","staCI_OFFICE_ADDRESS:10","10","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_OFFICE_TEL","staCI_OFFICE_TEL:10","ctxtCI_OFFICE_ADDRESS:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_COUNTRY","staCI_COUNTRY:10","ctxtCI_OFFICE_TEL:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_CITY","staCI_CITY:10","ctxtCI_COUNTRY:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_STATE","staCI_STATE:10","ctxtCI_CITY:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_PROVINCE","staCI_PROVINCE:10","ctxtCI_STATE:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCI_POSTAL_CODE","staCI_POSTAL_CODE:10","ctxtCI_PROVINCE:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.divBottomData.form.tabData);
            obj.set_text("Parent Company");
            this.divData.form.divBottomData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staPCI_NAME","0","5","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("Ultimate Parent Company Name");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPCI_OWNER_COUNTRY","0","staPCI_NAME:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj.set_text("Country of Company Ownership");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPCI_ADDRESS","0","staPCI_OWNER_COUNTRY:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("3");
            obj.set_text("Address");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPCI_CITY","0","staPCI_ADDRESS:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("4");
            obj.set_text("City");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPCI_COUNTRY","0","staPCI_CITY:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("5");
            obj.set_text("Country");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPCI_STATE","0","staPCI_COUNTRY:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("6");
            obj.set_text("State ");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPCI_PROVINCE","0","staPCI_STATE:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("7");
            obj.set_text("Province");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPCI_POSTAL_CODE","0","staPCI_PROVINCE:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("8");
            obj.set_text("Postal Code");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPCI_MAIN_PHONE","0","staPCI_POSTAL_CODE:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("9");
            obj.set_text("Telephone number");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta27","staPCI_NAME:-1","5","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta28","staPCI_OWNER_COUNTRY:-1","sta27:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta29","staPCI_ADDRESS:-1","sta28:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta30","staPCI_CITY:-1","sta29:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta31","staPCI_COUNTRY:-1","sta30:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta32","staPCI_STATE:-1","sta31:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta33","staPCI_PROVINCE:-1","sta32:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta34","staPCI_POSTAL_CODE:-1","sta33:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta35","staPCI_MAIN_PHONE:-1","sta34:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtPCI_NAME","staPCI_NAME:10","10","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("17");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtPCI_OWNER_COUNTRY","staPCI_OWNER_COUNTRY:10","ctxtPCI_NAME:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("14");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtPCI_ADDRESS","staPCI_ADDRESS:10","ctxtPCI_OWNER_COUNTRY:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("16");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtPCI_CITY","staPCI_CITY:10","ctxtPCI_ADDRESS:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("15");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtPCI_COUNTRY","staPCI_COUNTRY:10","ctxtPCI_CITY:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("13");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtPCI_STATE","staPCI_STATE:10","ctxtPCI_COUNTRY:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("12");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtPCI_PROVINCE","staPCI_PROVINCE:10","ctxtPCI_STATE:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("11");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtPCI_POSTAL_CODE","staPCI_POSTAL_CODE:10","ctxtPCI_PROVINCE:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("10");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtPCI_MAIN_PHONE","staPCI_MAIN_PHONE:10","ctxtPCI_POSTAL_CODE:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.divBottomData.form.tabData);
            obj.set_text("Factory Info");
            this.divData.form.divBottomData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staCAPA_REGION","0","5","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("Business Coverage Region");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCAPA_FACTORY_NAME","0","staCAPA_REGION:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("Factory Name");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCAPA_FACTORY_LOACTION","0","staCAPA_FACTORY_NAME:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("Factory Location");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCAPA_FACTORY_PHONE","0","staCAPA_FACTORY_LOACTION:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("Factory Phone");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCAPA_FACTORY_PRODUCT","0","staCAPA_FACTORY_PHONE:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("Factory Product");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCAPA_WAREHOUSE_INFO","0","staCAPA_FACTORY_PRODUCT:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("Warehouse information ");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCAPA_SUPPLY","0","staCAPA_WAREHOUSE_INFO:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("Full supply capacity");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCAPA_AVG_PRODUCTION","0","staCAPA_SUPPLY:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("Average production/supply volume");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCAPA_CNT_EMPLOYEE","0","staCAPA_AVG_PRODUCTION:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("Number of employees");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta36","staCAPA_REGION:-1","5","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta37","staCAPA_FACTORY_NAME:-1","sta36:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta38","staCAPA_FACTORY_LOACTION:-1","sta37:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta39","staCAPA_FACTORY_PHONE:-1","sta38:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta40","staCAPA_FACTORY_PRODUCT:-1","sta39:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta41","staCAPA_WAREHOUSE_INFO:-1","sta40:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta42","staCAPA_SUPPLY:-1","sta41:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta43","staCAPA_AVG_PRODUCTION:-1","sta42:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta44","staCAPA_CNT_EMPLOYEE:-1","sta43:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("ctxtCAPA_REGION","staCAPA_REGION:10","10","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("ctxtCAPA_FACTORY_NAME","staCAPA_FACTORY_NAME:10","ctxtCAPA_REGION:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("ctxtCAPA_FACTORY_LOACTION","staCAPA_FACTORY_LOACTION:10","ctxtCAPA_FACTORY_NAME:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("ctxtCAPA_FACTORY_PHONE","staCAPA_FACTORY_PHONE:10","ctxtCAPA_FACTORY_LOACTION:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("ctxtCAPA_FACTORY_PRODUCT","staCAPA_FACTORY_PRODUCT:10","ctxtCAPA_FACTORY_PHONE:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("ctxtCAPA_WAREHOUSE_INFO","staCAPA_WAREHOUSE_INFO:10","ctxtCAPA_FACTORY_PRODUCT:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("ctxtCAPA_SUPPLY","staCAPA_SUPPLY:10","ctxtCAPA_WAREHOUSE_INFO:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("ctxtCAPA_AVG_PRODUCTION","staCAPA_AVG_PRODUCTION:10","ctxtCAPA_SUPPLY:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("ctxtCAPA_CNT_EMPLOYEE","staCAPA_CNT_EMPLOYEE:10","ctxtCAPA_AVG_PRODUCTION:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.divBottomData.form.tabData);
            obj.set_text("Others");
            this.divData.form.divBottomData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staFI_DNB_NUMBER","0","5","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj.set_text("Dun & Bradstreed Number");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staFI_OVERSEA_BRANCH","0","staFI_DNB_NUMBER:-1","250","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj.set_text("Overseas Branch Offices");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divBottomData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta45","staFI_DNB_NUMBER:-1","5","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab4.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta46","staFI_OVERSEA_BRANCH:-1","sta45:-1","220","30",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab4.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divBottomData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtFI_DNB_NUMBER","staFI_DNB_NUMBER:10","10","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtFI_OVERSEA_BRANCH","staFI_OVERSEA_BRANCH:10","ctxtFI_DNB_NUMBER:9","200","20",null,null,null,null,null,null,this.divData.form.divBottomData.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divBottomData.form.tabData.tab4.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divTopData.form.ctxtNO_VENDOR","value","dsList","NO_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divTopData.form.ctxtCI_NAME","value","dsList","CI_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divTopData.form.ctxtCP_NM_POSITION","value","dsList","CP_NM_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divTopData.form.ctxtCP_EMAIL_ADDRESS","value","dsList","CP_EMAIL_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divTopData.form.ctxtCP_ID_DAM","value","dsList","CP_ID_DAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divTopData.form.ctxtCP_ID_PASSWORD","value","dsList","CP_ID_PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divTopData.form.ctxtBUSINESS_AREA","value","dsList","BUSINESS_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divTopData.form.ctxtBUSINESS_TYPE","value","dsList","BUSINESS_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divTopData.form.ctxtCP_NO_HP","value","dsList","CP_NO_HP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divTopData.form.ctxtCP_OFFICE_ADDRESS","value","dsList","CP_OFFICE_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divTopData.form.ctxtCP_OFFICE_TEL","value","dsList","CP_OFFICE_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divTopData.form.ctxtCP_OFFICE_FAX","value","dsList","CP_OFFICE_FAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divBottomData.form.tabData.tab1.form.ctxtCP_NM_DAM","value","dsList","CP_NM_DAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divBottomData.form.tabData.tab1.form.ctclCI_DT_ESTABLISHED","value","dsList","CI_DT_ESTABLISHED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divBottomData.form.tabData.tab1.form.ctxtCI_NM_CEO","value","dsList","CI_NM_CEO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divBottomData.form.tabData.tab1.form.ctxtCI_COMMERCIAL_NUMBER","value","dsList","CI_COMMERCIAL_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divBottomData.form.tabData.tab1.form.ctxtCI_CONTACT_PERSON","value","dsList","CI_CONTACT_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divBottomData.form.tabData.tab1.form.ctxtCI_WEBSITE","value","dsList","CI_WEBSITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divBottomData.form.tabData.tab1.form.ctxtCI_NUMBER_IMP_EXP","value","dsList","CI_NUMBER_IMP_EXP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divBottomData.form.tabData.tab1.form.ctxtCI_ASSOCIATION","value","dsList","CI_Association");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divBottomData.form.tabData.tab1.form.ctxtCI_OFFICE_ADDRESS","value","dsList","CI_OFFICE_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divBottomData.form.tabData.tab1.form.ctxtCI_OFFICE_TEL","value","dsList","CI_OFFICE_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divBottomData.form.tabData.tab1.form.ctxtCI_COUNTRY","value","dsList","CI_COUNTRY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divBottomData.form.tabData.tab1.form.ctxtCI_CITY","value","dsList","CI_CITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divBottomData.form.tabData.tab1.form.ctxtCI_STATE","value","dsList","CI_STATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divBottomData.form.tabData.tab1.form.ctxtCI_PROVINCE","value","dsList","CI_PROVINCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divBottomData.form.tabData.tab1.form.ctxtCI_POSTAL_CODE","value","dsList","CI_POSTAL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divBottomData.form.tabData.tab2.form.ctxtPCI_NAME","value","dsList","PCI_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divBottomData.form.tabData.tab2.form.ctxtPCI_OWNER_COUNTRY","value","dsList","PCI_OWNER_COUNTRY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divBottomData.form.tabData.tab2.form.ctxtPCI_ADDRESS","value","dsList","PCI_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divBottomData.form.tabData.tab2.form.ctxtPCI_CITY","value","dsList","PCI_CITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divBottomData.form.tabData.tab2.form.ctxtPCI_COUNTRY","value","dsList","PCI_COUNTRY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divBottomData.form.tabData.tab2.form.ctxtPCI_STATE","value","dsList","PCI_STATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divBottomData.form.tabData.tab2.form.ctxtPCI_PROVINCE","value","dsList","PCI_PROVINCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divBottomData.form.tabData.tab2.form.ctxtPCI_POSTAL_CODE","value","dsList","PCI_POSTAL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divBottomData.form.tabData.tab2.form.ctxtPCI_MAIN_PHONE","value","dsList","PCI_MAIN_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divBottomData.form.tabData.tab3.form.ctxtCAPA_REGION","value","dsList","CAPA_REGION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.divBottomData.form.tabData.tab3.form.ctxtCAPA_FACTORY_NAME","value","dsList","CAPA_FACTORY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divBottomData.form.tabData.tab3.form.ctxtCAPA_FACTORY_LOACTION","value","dsList","CAPA_FACTORY_LOACTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.divBottomData.form.tabData.tab3.form.ctxtCAPA_FACTORY_PHONE","value","dsList","CAPA_FACTORY_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.divBottomData.form.tabData.tab3.form.ctxtCAPA_FACTORY_PRODUCT","value","dsList","CAPA_FACTORY_PRODUCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.divBottomData.form.tabData.tab3.form.ctxtCAPA_WAREHOUSE_INFO","value","dsList","CAPA_WAREHOUSE_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.divBottomData.form.tabData.tab3.form.ctxtCAPA_SUPPLY","value","dsList","CAPA_SUPPLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.divBottomData.form.tabData.tab3.form.ctxtCAPA_AVG_PRODUCTION","value","dsList","CAPA_AVG_PRODUCTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.divBottomData.form.tabData.tab3.form.ctxtCAPA_CNT_EMPLOYEE","value","dsList","CAPA_CNT_EMPLOYEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.divBottomData.form.tabData.tab4.form.ctxtFI_DNB_NUMBER","value","dsList","FI_DNB_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.divBottomData.form.tabData.tab4.form.ctxtFI_OVERSEA_BRANCH","value","dsList","FI_OVERSEA_BRANCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divSearch.form.ccfNO_VENDOR_R.form.CDTextBox","value","dsSearch","NO_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCA_LOGISTICS_VENDOR_DETAIL_OVERSEA.xfdl", function() {
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
        		this.dsSearch.setColumn(0, "TY_GUBUN","C");
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
        	this.dsInsert.addColumn("CI_NAME", "string");
        	this.dsInsert.addColumn("CI_DT_ESTABLISHED", "string");
        	this.dsInsert.addColumn("CI_NM_CEO", "string");
        	this.dsInsert.addColumn("CI_COMMERCIAL_NUMBER", "string");
        	this.dsInsert.addColumn("CI_OFFICE_ADDRESS", "string");
        	this.dsInsert.addColumn("CI_OFFICE_TEL", "string");
        	this.dsInsert.addColumn("CI_COUNTRY", "string");
        	this.dsInsert.addColumn("CI_CITY", "string");
        	this.dsInsert.addColumn("CI_STATE", "string");
        	this.dsInsert.addColumn("CI_PROVINCE", "string");
        	this.dsInsert.addColumn("CI_POSTAL_CODE", "string");
        	this.dsInsert.addColumn("CI_CONTACT_PERSON", "string");
        	this.dsInsert.addColumn("CI_WEBSITE", "string");
        	this.dsInsert.addColumn("CI_NUMBER_IMP_EXP", "string");
        	this.dsInsert.addColumn("CI_Association", "string");
        	this.dsInsert.addColumn("PCI_NAME", "string");
        	this.dsInsert.addColumn("PCI_OWNER_COUNTRY", "string");
        	this.dsInsert.addColumn("PCI_ADDRESS", "string");
        	this.dsInsert.addColumn("PCI_CITY", "string");
        	this.dsInsert.addColumn("PCI_COUNTRY", "string");
        	this.dsInsert.addColumn("PCI_STATE", "string");
        	this.dsInsert.addColumn("PCI_PROVINCE", "string");
        	this.dsInsert.addColumn("PCI_POSTAL_CODE", "string");
        	this.dsInsert.addColumn("PCI_MAIN_PHONE", "string");
        	this.dsInsert.addColumn("FI_TURN_RATE", "string");
        	this.dsInsert.addColumn("FI_DNB_NUMBER", "string");
        	this.dsInsert.addColumn("FI_OVERSEA_BRANCH", "string");
        	this.dsInsert.addColumn("CAPA_REGION", "string");
        	this.dsInsert.addColumn("CAPA_FACTORY_NAME", "string");
        	this.dsInsert.addColumn("CAPA_FACTORY_LOACTION", "string");
        	this.dsInsert.addColumn("CAPA_FACTORY_PHONE", "string");
        	this.dsInsert.addColumn("CAPA_FACTORY_PRODUCT", "string");
        	this.dsInsert.addColumn("CAPA_WAREHOUSE_INFO", "string");
        	this.dsInsert.addColumn("CAPA_SUPPLY", "string");
        	this.dsInsert.addColumn("CAPA_AVG_PRODUCTION", "string");
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
        	this.dsUpdate.addColumn("CI_NAME", "string");
        	this.dsUpdate.addColumn("CI_DT_ESTABLISHED", "string");
        	this.dsUpdate.addColumn("CI_NM_CEO", "string");
        	this.dsUpdate.addColumn("CI_COMMERCIAL_NUMBER", "string");
        	this.dsUpdate.addColumn("CI_OFFICE_ADDRESS", "string");
        	this.dsUpdate.addColumn("CI_OFFICE_TEL", "string");
        	this.dsUpdate.addColumn("CI_COUNTRY", "string");
        	this.dsUpdate.addColumn("CI_CITY", "string");
        	this.dsUpdate.addColumn("CI_STATE", "string");
        	this.dsUpdate.addColumn("CI_PROVINCE", "string");
        	this.dsUpdate.addColumn("CI_POSTAL_CODE", "string");
        	this.dsUpdate.addColumn("CI_CONTACT_PERSON", "string");
        	this.dsUpdate.addColumn("CI_WEBSITE", "string");
        	this.dsUpdate.addColumn("CI_NUMBER_IMP_EXP", "string");
        	this.dsUpdate.addColumn("CI_Association", "string");
        	this.dsUpdate.addColumn("PCI_NAME", "string");
        	this.dsUpdate.addColumn("PCI_OWNER_COUNTRY", "string");
        	this.dsUpdate.addColumn("PCI_ADDRESS", "string");
        	this.dsUpdate.addColumn("PCI_CITY", "string");
        	this.dsUpdate.addColumn("PCI_COUNTRY", "string");
        	this.dsUpdate.addColumn("PCI_STATE", "string");
        	this.dsUpdate.addColumn("PCI_PROVINCE", "string");
        	this.dsUpdate.addColumn("PCI_POSTAL_CODE", "string");
        	this.dsUpdate.addColumn("PCI_MAIN_PHONE", "string");
        	this.dsUpdate.addColumn("FI_TURN_RATE", "string");
        	this.dsUpdate.addColumn("FI_DNB_NUMBER", "string");
        	this.dsUpdate.addColumn("FI_OVERSEA_BRANCH", "string");
        	this.dsUpdate.addColumn("CAPA_REGION", "string");
        	this.dsUpdate.addColumn("CAPA_FACTORY_NAME", "string");
        	this.dsUpdate.addColumn("CAPA_FACTORY_LOACTION", "string");
        	this.dsUpdate.addColumn("CAPA_FACTORY_PHONE", "string");
        	this.dsUpdate.addColumn("CAPA_FACTORY_PRODUCT", "string");
        	this.dsUpdate.addColumn("CAPA_WAREHOUSE_INFO", "string");
        	this.dsUpdate.addColumn("CAPA_SUPPLY", "string");
        	this.dsUpdate.addColumn("CAPA_AVG_PRODUCTION", "string");
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

        	this.divSearch.form.ccfNO_VENDOR_R.form.CDTextBox.set_value("");
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
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_VENDOR")))
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
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", "C");
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
        				this.dsInsert.setColumn(nrow, "CI_NAME", this.dsList.getColumn(0, "CI_NAME"));
        				this.dsInsert.setColumn(nrow, "CI_DT_ESTABLISHED", this.dsList.getColumn(0, "CI_DT_ESTABLISHED"));
        				this.dsInsert.setColumn(nrow, "CI_NM_CEO", this.dsList.getColumn(0, "CI_NM_CEO"));
        				this.dsInsert.setColumn(nrow, "CI_COMMERCIAL_NUMBER", this.dsList.getColumn(0, "CI_COMMERCIAL_NUMBER"));
        				this.dsInsert.setColumn(nrow, "CI_OFFICE_ADDRESS", this.dsList.getColumn(0, "CI_OFFICE_ADDRESS"));
        				this.dsInsert.setColumn(nrow, "CI_OFFICE_TEL", this.dsList.getColumn(0, "CI_OFFICE_TEL"));
        				this.dsInsert.setColumn(nrow, "CI_COUNTRY", this.dsList.getColumn(0, "CI_COUNTRY"));
        				this.dsInsert.setColumn(nrow, "CI_CITY", this.dsList.getColumn(0, "CI_CITY"));
        				this.dsInsert.setColumn(nrow, "CI_STATE", this.dsList.getColumn(0, "CI_STATE"));
        				this.dsInsert.setColumn(nrow, "CI_PROVINCE", this.dsList.getColumn(0, "CI_PROVINCE"));
        				this.dsInsert.setColumn(nrow, "CI_POSTAL_CODE", this.dsList.getColumn(0, "CI_POSTAL_CODE"));
        				this.dsInsert.setColumn(nrow, "CI_CONTACT_PERSON", this.dsList.getColumn(0, "CI_CONTACT_PERSON"));
        				this.dsInsert.setColumn(nrow, "CI_WEBSITE", this.dsList.getColumn(0, "CI_WEBSITE"));
        				this.dsInsert.setColumn(nrow, "CI_NUMBER_IMP_EXP", this.dsList.getColumn(0, "CI_NUMBER_IMP_EXP"));
        				this.dsInsert.setColumn(nrow, "CI_Association", this.dsList.getColumn(0, "CI_Association"));
        				this.dsInsert.setColumn(nrow, "PCI_NAME", this.dsList.getColumn(0, "PCI_NAME"));
        				this.dsInsert.setColumn(nrow, "PCI_OWNER_COUNTRY", this.dsList.getColumn(0, "PCI_OWNER_COUNTRY"));
        				this.dsInsert.setColumn(nrow, "PCI_ADDRESS", this.dsList.getColumn(0, "PCI_ADDRESS"));
        				this.dsInsert.setColumn(nrow, "PCI_CITY", this.dsList.getColumn(0, "PCI_CITY"));
        				this.dsInsert.setColumn(nrow, "PCI_COUNTRY", this.dsList.getColumn(0, "PCI_COUNTRY"));
        				this.dsInsert.setColumn(nrow, "PCI_STATE", this.dsList.getColumn(0, "PCI_STATE"));
        				this.dsInsert.setColumn(nrow, "PCI_PROVINCE", this.dsList.getColumn(0, "PCI_PROVINCE"));
        				this.dsInsert.setColumn(nrow, "PCI_POSTAL_CODE", this.dsList.getColumn(0, "PCI_POSTAL_CODE"));
        				this.dsInsert.setColumn(nrow, "PCI_MAIN_PHONE", this.dsList.getColumn(0, "PCI_MAIN_PHONE"));
        				this.dsInsert.setColumn(nrow, "FI_TURN_RATE", this.dsList.getColumn(0, "FI_TURN_RATE"));
        				this.dsInsert.setColumn(nrow, "FI_DNB_NUMBER", this.dsList.getColumn(0, "FI_DNB_NUMBER"));
        				this.dsInsert.setColumn(nrow, "FI_OVERSEA_BRANCH", this.dsList.getColumn(0, "FI_OVERSEA_BRANCH"));
        				this.dsInsert.setColumn(nrow, "CAPA_REGION", this.dsList.getColumn(0, "CAPA_REGION"));
        				this.dsInsert.setColumn(nrow, "CAPA_FACTORY_NAME", this.dsList.getColumn(0, "CAPA_FACTORY_NAME"));
        				this.dsInsert.setColumn(nrow, "CAPA_FACTORY_LOACTION", this.dsList.getColumn(0, "CAPA_FACTORY_LOACTION"));
        				this.dsInsert.setColumn(nrow, "CAPA_FACTORY_PHONE", this.dsList.getColumn(0, "CAPA_FACTORY_PHONE"));
        				this.dsInsert.setColumn(nrow, "CAPA_FACTORY_PRODUCT", this.dsList.getColumn(0, "CAPA_FACTORY_PRODUCT"));
        				this.dsInsert.setColumn(nrow, "CAPA_WAREHOUSE_INFO", this.dsList.getColumn(0, "CAPA_WAREHOUSE_INFO"));
        				this.dsInsert.setColumn(nrow, "CAPA_SUPPLY", this.dsList.getColumn(0, "CAPA_SUPPLY"));
        				this.dsInsert.setColumn(nrow, "CAPA_AVG_PRODUCTION", this.dsList.getColumn(0, "CAPA_AVG_PRODUCTION"));
        				this.dsInsert.setColumn(nrow, "CAPA_CNT_EMPLOYEE", this.dsList.getColumn(0, "CAPA_CNT_EMPLOYEE"));
        				this.dsInsert.setColumn(nrow, "NO_VENDOR_R", this.dsList.getColumn(0, "NO_VENDOR_R"));
        			break;

        		case "U":
        			var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", "C");
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
        				this.dsUpdate.setColumn(nrow, "CI_NAME", this.dsList.getColumn(0, "CI_NAME"));
        				this.dsUpdate.setColumn(nrow, "CI_DT_ESTABLISHED", this.dsList.getColumn(0, "CI_DT_ESTABLISHED"));
        				this.dsUpdate.setColumn(nrow, "CI_NM_CEO", this.dsList.getColumn(0, "CI_NM_CEO"));
        				this.dsUpdate.setColumn(nrow, "CI_COMMERCIAL_NUMBER", this.dsList.getColumn(0, "CI_COMMERCIAL_NUMBER"));
        				this.dsUpdate.setColumn(nrow, "CI_OFFICE_ADDRESS", this.dsList.getColumn(0, "CI_OFFICE_ADDRESS"));
        				this.dsUpdate.setColumn(nrow, "CI_OFFICE_TEL", this.dsList.getColumn(0, "CI_OFFICE_TEL"));
        				this.dsUpdate.setColumn(nrow, "CI_COUNTRY", this.dsList.getColumn(0, "CI_COUNTRY"));
        				this.dsUpdate.setColumn(nrow, "CI_CITY", this.dsList.getColumn(0, "CI_CITY"));
        				this.dsUpdate.setColumn(nrow, "CI_STATE", this.dsList.getColumn(0, "CI_STATE"));
        				this.dsUpdate.setColumn(nrow, "CI_PROVINCE", this.dsList.getColumn(0, "CI_PROVINCE"));
        				this.dsUpdate.setColumn(nrow, "CI_POSTAL_CODE", this.dsList.getColumn(0, "CI_POSTAL_CODE"));
        				this.dsUpdate.setColumn(nrow, "CI_CONTACT_PERSON", this.dsList.getColumn(0, "CI_CONTACT_PERSON"));
        				this.dsUpdate.setColumn(nrow, "CI_WEBSITE", this.dsList.getColumn(0, "CI_WEBSITE"));
        				this.dsUpdate.setColumn(nrow, "CI_NUMBER_IMP_EXP", this.dsList.getColumn(0, "CI_NUMBER_IMP_EXP"));
        				this.dsUpdate.setColumn(nrow, "CI_Association", this.dsList.getColumn(0, "CI_Association"));
        				this.dsUpdate.setColumn(nrow, "PCI_NAME", this.dsList.getColumn(0, "PCI_NAME"));
        				this.dsUpdate.setColumn(nrow, "PCI_OWNER_COUNTRY", this.dsList.getColumn(0, "PCI_OWNER_COUNTRY"));
        				this.dsUpdate.setColumn(nrow, "PCI_ADDRESS", this.dsList.getColumn(0, "PCI_ADDRESS"));
        				this.dsUpdate.setColumn(nrow, "PCI_CITY", this.dsList.getColumn(0, "PCI_CITY"));
        				this.dsUpdate.setColumn(nrow, "PCI_COUNTRY", this.dsList.getColumn(0, "PCI_COUNTRY"));
        				this.dsUpdate.setColumn(nrow, "PCI_STATE", this.dsList.getColumn(0, "PCI_STATE"));
        				this.dsUpdate.setColumn(nrow, "PCI_PROVINCE", this.dsList.getColumn(0, "PCI_PROVINCE"));
        				this.dsUpdate.setColumn(nrow, "PCI_POSTAL_CODE", this.dsList.getColumn(0, "PCI_POSTAL_CODE"));
        				this.dsUpdate.setColumn(nrow, "PCI_MAIN_PHONE", this.dsList.getColumn(0, "PCI_MAIN_PHONE"));
        				this.dsUpdate.setColumn(nrow, "FI_TURN_RATE", this.dsList.getColumn(0, "FI_TURN_RATE"));
        				this.dsUpdate.setColumn(nrow, "FI_DNB_NUMBER", this.dsList.getColumn(0, "FI_DNB_NUMBER"));
        				this.dsUpdate.setColumn(nrow, "FI_OVERSEA_BRANCH", this.dsList.getColumn(0, "FI_OVERSEA_BRANCH"));
        				this.dsUpdate.setColumn(nrow, "CAPA_REGION", this.dsList.getColumn(0, "CAPA_REGION"));
        				this.dsUpdate.setColumn(nrow, "CAPA_FACTORY_NAME", this.dsList.getColumn(0, "CAPA_FACTORY_NAME"));
        				this.dsUpdate.setColumn(nrow, "CAPA_FACTORY_LOACTION", this.dsList.getColumn(0, "CAPA_FACTORY_LOACTION"));
        				this.dsUpdate.setColumn(nrow, "CAPA_FACTORY_PHONE", this.dsList.getColumn(0, "CAPA_FACTORY_PHONE"));
        				this.dsUpdate.setColumn(nrow, "CAPA_FACTORY_PRODUCT", this.dsList.getColumn(0, "CAPA_FACTORY_PRODUCT"));
        				this.dsUpdate.setColumn(nrow, "CAPA_WAREHOUSE_INFO", this.dsList.getColumn(0, "CAPA_WAREHOUSE_INFO"));
        				this.dsUpdate.setColumn(nrow, "CAPA_SUPPLY", this.dsList.getColumn(0, "CAPA_SUPPLY"));
        				this.dsUpdate.setColumn(nrow, "CAPA_AVG_PRODUCTION", this.dsList.getColumn(0, "CAPA_AVG_PRODUCTION"));
        				this.dsUpdate.setColumn(nrow, "CAPA_CNT_EMPLOYEE", this.dsList.getColumn(0, "CAPA_CNT_EMPLOYEE"));
        			break;

        		case "D":
        			var nrow = this.dsDelete.addRow();
        			this.dsDelete.setColumn(nrow, "TY_GUBUN", "C");
        			this.dsDelete.setColumn(nrow, "NO_VENDOR", this.dsList.getColumn(0, "NO_VENDOR"));
        			break;
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

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
        	this.dsSearch.setColumn(0, "TY_GUBUN", "C");
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
        		dsUserParam.setColumn(nrow, "TY_COUNTRY", "C");
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfNO_VENDOR_R.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divBottomData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCA_LOGISTICS_VENDOR_DETAIL_OVERSEA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
