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
            this.set_titletext("개인정보변경 승인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,970);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddrList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFmyList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLicList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCrrList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectAddr</Col><Col id=\"SP\">DAAPR_ADDRESS_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectFmy</Col><Col id=\"SP\">DAAPR_FAM_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSch</Col><Col id=\"SP\">DAAPR_SCHOOL_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectLic</Col><Col id=\"SP\">DAAPR_LIC_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectCrr</Col><Col id=\"SP\">DAAPR_CAREER_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectBase</Col><Col id=\"SP\">DAAPR_BASEINFO_TEMPINFO_SELECT</Col></Row><Row><Col id=\"SP\">DAAPR_BASEINFO_ETC_INFO_SELECT</Col><Col id=\"TARGET\">selectEtc</Col></Row><Row><Col id=\"TARGET\">selectOlang</Col><Col id=\"SP\">DAAPR_OLANG_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAAPR_BASEINFO_INFO_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_STATUS", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">변경요청</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"VALUE\">승인</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"VALUE\">반려</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_STATUS\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_SOLAR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">양</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SUPPORTED", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_HANDICAP", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_MARRIAGE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GENDER", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">M</Col><Col id=\"DS_CODE\">남성</Col></Row><Row><Col id=\"CD_CODE\">W</Col><Col id=\"DS_CODE\">여성</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_FOREIGNER", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SMOKING", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">흡연</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">비흡연</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SOLAR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HANDPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OFFICEPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EXTENSION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOMEPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RELIGION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RELIGION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOBBY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SPECIAL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SUPPORTED\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SUPPORTED\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SUPPORTED\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUPPORTED_FAM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUPPORTED\" type=\"STRING\" size=\"256\"/><Column id=\"YN_FOREIGNER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FOREIGNER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FOREIGNER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HANDICAP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DISABILITY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DISABILITY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DISABILITY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DISABILITY_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DISABILITY_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MARRIAGE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_MARRIAGE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BIRTHPLACE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FAMILYPLACE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FAMILY_HEAD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FAMILY_HEAD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FAMILY_HEADNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_HOUSEHOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOUSEHOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOUSEHOLDER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BUSINESS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SERVICESTS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SERVICESTS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MILITARY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MILITARY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DISCHARGE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DISCHARGE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MILITARYRANK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MILITARYRANK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHARGE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DISCHARGE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SERVICENO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CNAME_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ENAME_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RESIDENT_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIRTH_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SOLAR_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HANDPHONE_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OFFICEPHONE_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EXTENSION_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOMEPHONE_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RELIGION_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RELIGION_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOBBY_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SPECIAL_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SUPPORTED_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SUPPORTED_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SUPPORTED_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUPPORTED_FAM_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUPPORTED_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_FOREIGNER_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FOREIGNER_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FOREIGNER_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HANDICAP_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DISABILITY_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DISABILITY_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DISABILITY_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DISABILITY_GRADE_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DISABILITY_GRADE_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MARRIAGE_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_MARRIAGE_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BIRTHPLACE_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FAMILYPLACE_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GENDER_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FAMILY_HEAD_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FAMILY_HEAD_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FAMILY_HEADNAME_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_HOUSEHOLDER_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOUSEHOLDER_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOUSEHOLDER_NAME_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BUSINESS_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL_ETC_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FAX_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RESOURCE_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RESOURCE_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SERVICESTS_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SERVICESTS_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BRANCH_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BRANCH_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MILITARY_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MILITARY_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DISCHARGE_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DISCHARGE_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MILITARYRANK_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MILITARYRANK_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHARGE_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DISCHARGE_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SERVICENO_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REASON_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CNAME_COLOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEtcList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"QT_HEIGHT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QT_WEIGHT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_LEFTEYE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_RIGHTEYE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_BLOOD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BLOOD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ALCOHOL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SMOKING\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEALTH_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECOM_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECOM_RELATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECOM_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECOM_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MOVABLES\" type=\"STRING\" size=\"256\"/><Column id=\"DS_IMMOVABLES\" type=\"STRING\" size=\"256\"/><Column id=\"QT_HEIGHT_ASK\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QT_WEIGHT_ASK\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_LEFTEYE_ASK\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_RIGHTEYE_ASK\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_BLOOD_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BLOOD_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ALCOHOL_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SMOKING_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEALTH_REMARK_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECOM_HNAME_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECOM_RELATION_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECOM_JOB_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECOM_ADDRESS_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MOVABLES_ASK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_IMMOVABLES_ASK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOlangList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("ccfCorpCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","ccfCorpCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CHAIYONG","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_STATUS","staTY_CHAIYONG:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_STATUS");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("인사기본정보");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter1","18.50%","0","5",null,null,"0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_cursor("ew-resize");
            obj.set_cssclass("div_Splitter");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("divBase","divSplitter1:3","4",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CNAME_OLD00","5","5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("226");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("sta12_02","staDS_CNAME_OLD00:-1","staDS_CNAME_OLD00:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("227");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN_OLD","staDS_CNAME_OLD00:5","staDS_CNAME_OLD00:-25","178","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("85");
            obj.set_taborder("231");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_accessibilityrole("form");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_ENAME_OLD00","sta12_02:-1","sta12_02:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("228");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("sta02_02","staDS_ENAME_OLD00:-1","staDS_ENAME_OLD00:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("229");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_STATUS","staDS_ENAME_OLD00:5","staDS_ENAME_OLD00:-25","179","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("230");
            obj.set_maxlength("16");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staBase_old","4","50","9.19%","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("112");
            obj.set_text("현재정보");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_CNAME","5","staBase_old:5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("0");
            obj.set_text("한자성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_CNAME_bg","staDS_CNAME:-1","staDS_CNAME:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_CNAME_OLD","staDS_CNAME:5","staDS_CNAME:-25","178","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("2");
            obj.set_maxlength("16");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_ENAME","5","staDS_CNAME:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("3");
            obj.set_text("영어성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_ENAME_bg","staDS_ENAME:-1","staDS_ENAME:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_ENAME_OLD","staDS_ENAME:5","staDS_ENAME:-25","179","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("5");
            obj.set_maxlength("16");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_HANDPHONE","5","staDS_ENAME:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("18");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_HANDPHONE_bg","staDS_HANDPHONE:-1","staDS_HANDPHONE:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_HANDPHONE_OLD","staDS_HANDPHONE:5","staDS_HANDPHONE:-25","178","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("20");
            obj.set_maxlength("50");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_RELIGION","5","staDS_HANDPHONE:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("27");
            obj.set_text("종교");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_RELIGION_bg","staCD_RELIGION:-1","staCD_RELIGION:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_RELIGION_OLD","staCD_RELIGION:5","staCD_RELIGION:-25","178","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("29");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_accessibilityrole("form");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_SUPPORTED","5","staCD_RELIGION:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("36");
            obj.set_text("보훈여부/번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_SUPPORTED_bg","staYN_SUPPORTED:-1","staYN_SUPPORTED:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SUPPORTED_OLD","staYN_SUPPORTED:5","staYN_SUPPORTED:-25","85","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("41");
            obj.set_innerdataset("dsTY_SUPPORTED");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtNO_SUPPORTED_OLD","rdoYN_SUPPORTED_OLD:-5","staYN_SUPPORTED:-25","98","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("42");
            obj.set_maxlength("20");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_HANDICAP","5","staYN_SUPPORTED:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("43");
            obj.set_text("장애여부/번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_HANDICAP_bg","staYN_HANDICAP:-1","staYN_HANDICAP:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Radio("rdoYN_HANDICAP_OLD","staYN_HANDICAP:5","staYN_HANDICAP:-25","85","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("45");
            obj.set_innerdataset("dsTY_HANDICAP");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DISABILITY_OLD","rdoYN_HANDICAP_OLD:-5","staYN_HANDICAP:-25","98","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("46");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_BIRTHPLACE","5","staYN_HANDICAP:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("61");
            obj.set_text("출생지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_BIRTHPLACE_bg","staDS_BIRTHPLACE:-1","staDS_BIRTHPLACE:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_BIRTHPLACE_OLD","staDS_BIRTHPLACE:5","staDS_BIRTHPLACE:-25","178","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("62");
            obj.set_maxlength("15");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_FAMILY_HEAD","5","staDS_BIRTHPLACE:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("69");
            obj.set_text("호주/관계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_FAMILY_HEAD_bg","staCD_FAMILY_HEAD:-1","staCD_FAMILY_HEAD:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_FAMILY_HEAD_OLD","staCD_FAMILY_HEAD:5","staCD_FAMILY_HEAD:-25","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("0");
            obj.set_taborder("72");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_FAMILY_HEADNAME_OLD","cfCD_FAMILY_HEAD_OLD:2","staCD_FAMILY_HEAD:-25","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("73");
            obj.set_enable("true");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staID_RESIDENT","staDS_CNAME_bg:-1","staDS_CNAME_bg:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("9");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staID_RESIDENT_bg","staID_RESIDENT:-1","staID_RESIDENT:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtID_RESIDENT_OLD","staID_RESIDENT:5","staID_RESIDENT:-25","178","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("11");
            obj.set_maxlength("14");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDT_BIRTH","staDS_ENAME_bg:-1","staDS_ENAME_bg:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("생일(양/음)");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDT_BIRTH_bg","staDT_BIRTH:-1","staDT_BIRTH:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Calendar("tclDT_BIRTH_OLD","staDT_BIRTH:5","staDT_BIRTH:-25","95","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SOLAR_OLD","tclDT_BIRTH_OLD:2","staDT_BIRTH:-25","82","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("17");
            obj.set_innerdataset("dsYN_SOLAR");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("Y");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_OFFICEPHONE","staDS_HANDPHONE_bg:-1","staDS_HANDPHONE_bg:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("21");
            obj.set_text("회사전화/내선");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_OFFICEPHONE_bg","staDS_OFFICEPHONE:-1","staDS_OFFICEPHONE:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_OFFICEPHONE_OLD","staDS_OFFICEPHONE:5","staDS_OFFICEPHONE:-25","119","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("23");
            obj.set_inputtype("normal");
            obj.set_maxlength("50");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_OFFICEPHONE00_OLD","txtDS_OFFICEPHONE_OLD:2","staDS_OFFICEPHONE:-25","58","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("105");
            obj.set_inputtype("digit");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_HOBBY","staCD_RELIGION_bg:-1","staCD_RELIGION_bg:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("30");
            obj.set_text("취미");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_HOBBY_bg","staDS_HOBBY:-1","staDS_HOBBY:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_HOBBY_OLD","staDS_HOBBY:5","staDS_HOBBY:-25","179","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("32");
            obj.set_maxlength("30");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_SUPPORTED","staYN_SUPPORTED_bg:-1","staYN_SUPPORTED_bg:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("101");
            obj.set_text("보훈관계/사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_SUPPORTED_bg","staCD_SUPPORTED:-1","staCD_SUPPORTED:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("ccfCD_SUPPORTED_OLD","staCD_SUPPORTED:5","staCD_SUPPORTED:-25","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("0");
            obj.set_taborder("102");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_SUPPORTED_OLD","ccfCD_SUPPORTED_OLD:2","staCD_SUPPORTED:-25","77","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("103");
            obj.set_maxlength("50");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_DISABILITY","staYN_HANDICAP_bg:-1","staYN_HANDICAP_bg:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("47");
            obj.set_text("장애종류/등급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_DISABILITY_bg","staDS_DISABILITY:-1","staDS_DISABILITY:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("ccfDS_DISABILITY_OLD","staDS_DISABILITY:5","staDS_DISABILITY:-25","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("0");
            obj.set_taborder("44");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("ccfDS_DISABILITY_GRADE_OLD","ccfDS_DISABILITY_OLD:0","staDS_DISABILITY:-25","79","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("0");
            obj.set_taborder("50");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_FAMILYPLACE","staDS_BIRTHPLACE_bg:-1","staDS_BIRTHPLACE_bg:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("63");
            obj.set_text("본적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_FAMILYPLACE_bg","staDS_FAMILYPLACE:-1","staDS_FAMILYPLACE:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_FAMILYPLACE_OLD","staDS_FAMILYPLACE:5","staDS_FAMILYPLACE:-25","179","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("65");
            obj.set_maxlength("50");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_HOUSEHOLDER","staCD_FAMILY_HEAD_bg:-1","staCD_FAMILY_HEAD_bg:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("74");
            obj.set_text("세대주/관계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_HOUSEHOLDER_bg","staCD_HOUSEHOLDER:-1","staCD_HOUSEHOLDER:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_HOUSEHOLDER_OLD","staCD_HOUSEHOLDER:5","staCD_HOUSEHOLDER:-25","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("0");
            obj.set_taborder("76");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_HOUSEHOLDER_NAME_OLD","cfCD_HOUSEHOLDER_OLD:2","staCD_HOUSEHOLDER:-25","77","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("77");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL","staID_RESIDENT_bg:-1","staID_RESIDENT_bg:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("6");
            obj.set_text("E-Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_enable("true");
            obj.set_enableevent("true");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL_bg","staDS_EMAIL:-1","staDS_EMAIL:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_enableevent("true");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMAIL_OLD","staDS_EMAIL:5","staDS_EMAIL:-25","230","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL_ETC","staDT_BIRTH_bg:-1","staDT_BIRTH_bg:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("15");
            obj.set_text("외부E-Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL_ETC_bg","staDS_EMAIL_ETC:-1","staDS_EMAIL_ETC:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMAIL_ETC_OLD","staDS_EMAIL_ETC:5","staDS_EMAIL_ETC:-25","230","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("109");
            obj.set_enable("true");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_HOMEPHONE","staDS_OFFICEPHONE_bg:-1","staDS_OFFICEPHONE_bg:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("24");
            obj.set_text("자택전화/FAX");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_HOMEPHONE_bg","staDS_HOMEPHONE:-1","staDS_HOMEPHONE:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_HOMEPHONE_OLD","staDS_HOMEPHONE:5","staDS_HOMEPHONE:-25","124","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("26");
            obj.set_inputtype("normal");
            obj.set_maxlength("50");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_FAX_OLD","txtDS_HOMEPHONE_OLD:1","staDS_HOMEPHONE:-25","105","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("110");
            obj.set_inputtype("normal");
            obj.set_maxlength("50");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_SPECIAL","staDS_HOBBY_bg:-1","staDS_HOBBY_bg:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("33");
            obj.set_text("특기");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_SPECIAL_bg","staDS_SPECIAL:-1","staDS_SPECIAL:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_SPECIAL_OLD","staDS_SPECIAL:5","staDS_SPECIAL:-25","230","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("35");
            obj.set_maxlength("30");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_FOREIGNER","staCD_SUPPORTED_bg:-1","staCD_SUPPORTED_bg:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("55");
            obj.set_text("외국인여부/국적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_FOREIGNER_bg","staYN_FOREIGNER:-1","staYN_FOREIGNER:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Radio("rdoYN_FOREIGNER_OLD","staYN_FOREIGNER:5","staYN_FOREIGNER:-25","70","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("56");
            obj.set_innerdataset("dsTY_HANDICAP");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("N");
            obj.set_value("N");
            obj.set_index("1");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("ccfDS_FOREIGNER_OLD","rdoYN_FOREIGNER_OLD:16","staYN_FOREIGNER:-25","131","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("0");
            obj.set_taborder("57");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_MARRIAGE","staDS_DISABILITY_bg:-1","staDS_DISABILITY_bg:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("51");
            obj.set_text("결혼여부/기념일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_MARRIAGE_bg","staYN_MARRIAGE:-1","staYN_MARRIAGE:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Radio("rdoYN_MARRIAGE_OLD","staYN_MARRIAGE:5","staYN_MARRIAGE:-25","70","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("53");
            obj.set_innerdataset("dsTY_MARRIAGE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Calendar("tclDT_MARRIAGE_OLD","rdoYN_MARRIAGE_OLD:17","staYN_MARRIAGE:-25","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("54");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_GENDER","staDS_FAMILYPLACE_bg:-1","staDS_FAMILYPLACE_bg:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("66");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_GENDER_bg","staYN_GENDER:-1","staYN_GENDER:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Radio("rdoYN_GENDER_OLD","staYN_GENDER:5","staYN_GENDER:-25","113","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("68");
            obj.set_innerdataset("dsTY_GENDER");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_BUSINESS","staCD_HOUSEHOLDER_bg:-1","staCD_HOUSEHOLDER_bg:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("106");
            obj.set_text("담당업무");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_BUSINESS_bg","staDS_BUSINESS:-1","staDS_BUSINESS:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_BUSINESS_OLD","staDS_BUSINESS:5","staDS_BUSINESS:-25","230","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("107");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staTitle","5","staCD_FAMILY_HEAD:10","61","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("81");
            obj.set_text("병역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_RESOURCE","5","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("82");
            obj.set_text("군필종류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_RESOURCE_bg","staCD_RESOURCE:-1","staCD_RESOURCE:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_RESOURCE_OLD","staCD_RESOURCE:5","staCD_RESOURCE:-25","178","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("90");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_MILITARY","5","staCD_RESOURCE:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("87");
            obj.set_text("군별");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_MILITARY_bg","staCD_MILITARY:-1","staCD_MILITARY:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_MILITARY_OLD","staCD_MILITARY:5","staCD_MILITARY:-25","178","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("99");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDT_CHARGE","5","staCD_MILITARY:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("100");
            obj.set_text("입대일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDT_CHARGE_bg","staDT_CHARGE:-1","staDT_CHARGE:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CHARGE_OLD","staDT_CHARGE:5","staDT_CHARGE:-25","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("108");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_autoskip("true");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_REASON","5","staDT_CHARGE:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("106");
            obj.set_text("면제사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_REASON_bg","staDS_REASON:-1","staDS_REASON:-30","888","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_REASON_OLD","staDS_REASON:5","staDS_REASON:-25","876","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("111");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            obj.set_accessibilityenable("false");
            obj.set_maxlength("100");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_SERVICESTS","staCD_RESOURCE_bg:-1","staCD_RESOURCE_bg:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("83");
            obj.set_text("역종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_SERVICESTS_bg","staCD_SERVICESTS:-1","staCD_SERVICESTS:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_SERVICESTS_OLD","staCD_SERVICESTS:5","staCD_SERVICESTS:-25","179","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("91");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_DISCHARGE","staCD_MILITARY_bg:-1","staCD_MILITARY_bg:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("92");
            obj.set_text("제대구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_DISCHARGE_bg","staCD_DISCHARGE:-1","staCD_DISCHARGE:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_DISCHARGE_OLD","staCD_DISCHARGE:5","staCD_DISCHARGE:-25","179","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("94");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDT_DISCHARGE","staDT_CHARGE_bg:-1","staDT_CHARGE_bg:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("102");
            obj.set_text("제대일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDT_DISCHARGE_bg","staDT_DISCHARGE:-1","staDT_DISCHARGE:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Calendar("tclDT_DISCHARGE_OLD","staDT_DISCHARGE:5","staDT_DISCHARGE:-25","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("109");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_autoskip("true");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_BRANCH","staCD_SERVICESTS_bg:-1","staCD_SERVICESTS_bg:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("84");
            obj.set_text("병과");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_BRANCH_bg","staCD_BRANCH:-1","staCD_BRANCH:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_BRANCH_OLD","staCD_BRANCH:5","staCD_BRANCH:-25","230","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("86");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_MILITARYRANK","staCD_DISCHARGE_bg:-1","staCD_DISCHARGE_bg:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("95");
            obj.set_text("계급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_MILITARYRANK_bg","staCD_MILITARYRANK:-1","staCD_MILITARYRANK:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_MILITARYRANK_OLD","staCD_MILITARYRANK:5","staCD_MILITARYRANK:-25","230","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("98");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_SERVICENO","staDT_DISCHARGE_bg:-1","staDT_DISCHARGE_bg:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("104");
            obj.set_text("군번");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_SERVICENO_bg","staDS_SERVICENO:-1","staDS_SERVICENO:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_SERVICENO_OLD","staDS_SERVICENO:5","staDS_SERVICENO:-25","230","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("110");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            obj.set_maxlength("50");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staBase_ask","5","staDS_REASON:10","9.19%","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("113");
            obj.set_text("변경정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_color("red");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_CNAME_ASK","5","staBase_ask:5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("0");
            obj.set_text("한자성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_CNAME_bg_ASK","staDS_CNAME_ASK:-1","staDS_CNAME_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_CNAME_ASK","staDS_CNAME_ASK:5","staDS_CNAME_ASK:-25","178","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("2");
            obj.set_maxlength("16");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_ENAME_ASK","5","staDS_CNAME_ASK:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("3");
            obj.set_text("영어성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_ENAME_bg_ASK","staDS_ENAME_ASK:-1","staDS_ENAME_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_ENAME_ASK","staDS_ENAME_ASK:5","staDS_ENAME_ASK:-25","179","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("5");
            obj.set_maxlength("16");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_HANDPHONE_ASK","5","staDS_ENAME_bg_ASK:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("18");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_HANDPHONE_bg_ASK","staDS_HANDPHONE_ASK:-1","staDS_HANDPHONE_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_HANDPHONE_ASK","staDS_HANDPHONE_ASK:5","staDS_HANDPHONE_ASK:-25","178","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("20");
            obj.set_maxlength("50");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_RELIGION_ASK","5","staDS_HANDPHONE_ASK:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("27");
            obj.set_text("종교");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_RELIGION_bg_ASK","staCD_RELIGION_ASK:-1","staCD_RELIGION_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_RELIGION_ASK","staCD_RELIGION_ASK:5","staCD_RELIGION_ASK:-25","178","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("29");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_accessibilityrole("form");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_SUPPORTED_ASK","5","staCD_RELIGION_ASK:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("36");
            obj.set_text("보훈여부/번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_SUPPORTED_bg_ASK","staYN_SUPPORTED_ASK:-1","staYN_SUPPORTED_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SUPPORTED_ASK","staYN_SUPPORTED_ASK:5","staYN_SUPPORTED_ASK:-25","85","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("41");
            obj.set_innerdataset("dsTY_SUPPORTED");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtNO_SUPPORTED_ASK","rdoYN_SUPPORTED_ASK:-5","staYN_SUPPORTED_ASK:-25","98","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("42");
            obj.set_maxlength("20");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_HANDICAP_ASK","5","staYN_SUPPORTED_ASK:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("43");
            obj.set_text("장애여부/번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_HANDICAP_bg_ASK","staYN_HANDICAP_ASK:-1","staYN_HANDICAP_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Radio("rdoYN_HANDICAP_ASK","staYN_HANDICAP_ASK:5","staYN_HANDICAP_ASK:-25","85","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("45");
            obj.set_innerdataset("dsTY_HANDICAP");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DISABILITY_ASK","rdoYN_HANDICAP_ASK:-5","staYN_HANDICAP_ASK:-25","98","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("46");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_BIRTHPLACE_ASK","5","staYN_HANDICAP_ASK:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("61");
            obj.set_text("출생지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_BIRTHPLACE_bg_ASK","staDS_BIRTHPLACE_ASK:-1","staDS_BIRTHPLACE_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_BIRTHPLACE_ASK","staDS_BIRTHPLACE_ASK:5","staDS_BIRTHPLACE_ASK:-25","178","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("62");
            obj.set_maxlength("15");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_FAMILY_HEAD_ASK","5","staDS_BIRTHPLACE_ASK:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("69");
            obj.set_text("호주/관계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_FAMILY_HEAD_bg_ASK","staCD_FAMILY_HEAD_ASK:-1","staCD_FAMILY_HEAD_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_FAMILY_HEAD_ASK","staCD_FAMILY_HEAD_ASK:5","staCD_FAMILY_HEAD_ASK:-25","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("0");
            obj.set_taborder("72");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_FAMILY_HEADNAME_ASK","cfCD_FAMILY_HEAD_ASK:2","staCD_FAMILY_HEAD_ASK:-25","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("73");
            obj.set_enable("true");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staID_RESIDENT_ASK","staDS_CNAME_bg_ASK:-1","staDS_CNAME_bg_ASK:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("9");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staID_RESIDENT_bg_ASK","staID_RESIDENT_ASK:-1","staID_RESIDENT_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtID_RESIDENT_ASK","staID_RESIDENT_ASK:5","staID_RESIDENT_ASK:-25","178","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("11");
            obj.set_maxlength("14");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDT_BIRTH_ASK","staDS_ENAME_bg_ASK:-1","staDS_ENAME_bg_ASK:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("12");
            obj.set_text("생년월일/양.음");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDT_BIRTH_bg_ASK","staDT_BIRTH_ASK:-1","staDT_BIRTH_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Calendar("tclDT_BIRTH_ASK","staDT_BIRTH_ASK:5","staDT_BIRTH_ASK:-25","95","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SOLAR_ASK","tclDT_BIRTH_ASK:2","staDT_BIRTH_ASK:-25","82","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("17");
            obj.set_innerdataset("dsYN_SOLAR");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("Y");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_OFFICEPHONE_ASK","staDS_HANDPHONE_bg_ASK:-1","staDS_HANDPHONE_bg_ASK:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("21");
            obj.set_text("회사전화/내선");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_OFFICEPHONE_bg_ASK","staDS_OFFICEPHONE_ASK:-1","staDS_OFFICEPHONE_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_OFFICEPHONE_ASK","staDS_OFFICEPHONE_ASK:5","staDS_OFFICEPHONE_ASK:-25","119","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("23");
            obj.set_inputtype("normal");
            obj.set_maxlength("50");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_OFFICEPHONE00_ASK","txtDS_OFFICEPHONE_ASK:2","staDS_OFFICEPHONE_ASK:-25","58","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("105");
            obj.set_inputtype("digit");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_HOBBY_ASK","staCD_RELIGION_bg_ASK:-1","staCD_RELIGION_bg_ASK:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("30");
            obj.set_text("취미");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_HOBBY_bg_ASK","staDS_HOBBY_ASK:-1","staDS_HOBBY_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_HOBBY_ASK","staDS_HOBBY_ASK:5","staDS_HOBBY_ASK:-25","179","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("32");
            obj.set_maxlength("30");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_SUPPORTED_ASK","staYN_SUPPORTED_bg_ASK:-1","staYN_SUPPORTED_bg_ASK:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("101");
            obj.set_text("보훈관계/사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_SUPPORTED_bg_ASK","staCD_SUPPORTED_ASK:-1","staCD_SUPPORTED_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("ccfCD_SUPPORTED_ASK","staCD_SUPPORTED_ASK:5","staCD_SUPPORTED_ASK:-25","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("0");
            obj.set_taborder("102");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_SUPPORTED_ASK","ccfCD_SUPPORTED_ASK:2","staCD_SUPPORTED_ASK:-25","77","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("103");
            obj.set_maxlength("50");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_DISABILITY_ASK","staYN_HANDICAP_bg_ASK:-1","staYN_HANDICAP_bg_ASK:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("47");
            obj.set_text("장애종류/등급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_DISABILITY_bg_ASK","staDS_DISABILITY_ASK:-1","staDS_DISABILITY_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("ccfDS_DISABILITY_ASK","staDS_DISABILITY_ASK:5","staDS_DISABILITY_ASK:-25","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("0");
            obj.set_taborder("44");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("ccfDS_DISABILITY_GRADE_ASK","ccfDS_DISABILITY_ASK:0","staDS_DISABILITY_ASK:-25","79","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("0");
            obj.set_taborder("50");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_FAMILYPLACE_ASK","staDS_BIRTHPLACE_bg_ASK:-1","staDS_BIRTHPLACE_bg_ASK:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("63");
            obj.set_text("본적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_FAMILYPLACE_bg_ASK","staDS_FAMILYPLACE_ASK:-1","staDS_FAMILYPLACE_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_FAMILYPLACE_ASK","staDS_FAMILYPLACE_ASK:5","staDS_FAMILYPLACE_ASK:-25","179","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("65");
            obj.set_maxlength("50");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_HOUSEHOLDER_ASK","staCD_FAMILY_HEAD_bg_ASK:-1","staCD_FAMILY_HEAD_bg_ASK:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("74");
            obj.set_text("세대주/관계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_HOUSEHOLDER_bg_ASK","staCD_HOUSEHOLDER_ASK:-1","staCD_HOUSEHOLDER_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_HOUSEHOLDER_ASK","staCD_HOUSEHOLDER_ASK:5","staCD_HOUSEHOLDER_ASK:-25","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("0");
            obj.set_taborder("76");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_HOUSEHOLDER_NAME_ASK","cfCD_HOUSEHOLDER_ASK:2","staCD_HOUSEHOLDER_ASK:-25","77","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("77");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL_ASK","staID_RESIDENT_bg_ASK:-1","staID_RESIDENT_bg_ASK:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("6");
            obj.set_text("E-Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_enable("true");
            obj.set_enableevent("true");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL_bg_ASK","staDS_EMAIL_ASK:-1","staDS_EMAIL_ASK:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_enableevent("true");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMAIL_ASK","staDS_EMAIL_ASK:5","staDS_EMAIL_ASK:-25","230","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL_ETC_ASK","staDT_BIRTH_bg_ASK:-1","staDT_BIRTH_bg_ASK:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("15");
            obj.set_text("외부E-Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL_ETC_bg_ASK","staDS_EMAIL_ETC_ASK:-1","staDS_EMAIL_ETC_ASK:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMAIL_ETC_ASK","staDS_EMAIL_ETC_ASK:5","staDS_EMAIL_ETC_ASK:-25","230","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("109");
            obj.set_enable("true");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_HOMEPHONE_ASK","staDS_OFFICEPHONE_bg_ASK:-1","staDS_OFFICEPHONE_bg_ASK:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("24");
            obj.set_text("자택전화/FAX");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_HOMEPHONE_bg_ASK","staDS_HOMEPHONE_ASK:-1","staDS_HOMEPHONE_ASK:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_HOMEPHONE_ASK","staDS_HOMEPHONE_ASK:5","staDS_HOMEPHONE_ASK:-25","124","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("26");
            obj.set_inputtype("normal");
            obj.set_maxlength("50");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_FAX_ASK","txtDS_HOMEPHONE_ASK:1","staDS_HOMEPHONE_ASK:-25","105","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("110");
            obj.set_inputtype("normal");
            obj.set_maxlength("50");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_SPECIAL_ASK","staDS_HOBBY_bg_ASK:-1","staDS_HOBBY_bg_ASK:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("33");
            obj.set_text("특기");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_SPECIAL_bg_ASK","staDS_SPECIAL_ASK:-1","staDS_SPECIAL_ASK:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_SPECIAL_ASK","staDS_SPECIAL_ASK:5","staDS_SPECIAL_ASK:-25","230","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("35");
            obj.set_maxlength("30");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_FOREIGNER_ASK","staCD_SUPPORTED_bg_ASK:-1","staCD_SUPPORTED_bg_ASK:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("55");
            obj.set_text("외국인여부/국적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_FOREIGNER_bg_ASK","staYN_FOREIGNER_ASK:-1","staYN_FOREIGNER_ASK:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Radio("rdoYN_FOREIGNER_ASK","staYN_FOREIGNER_ASK:5","staYN_FOREIGNER_ASK:-25","70","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("56");
            obj.set_innerdataset("dsTY_HANDICAP");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("N");
            obj.set_value("N");
            obj.set_index("1");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("ccfDS_FOREIGNER_ASK","rdoYN_FOREIGNER_ASK:16","staYN_FOREIGNER_ASK:-25","131","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("0");
            obj.set_taborder("57");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_MARRIAGE_ASK","staDS_DISABILITY_bg_ASK:-1","staDS_DISABILITY_bg_ASK:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("51");
            obj.set_text("결혼여부/기념일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_MARRIAGE_bg_ASK","staYN_MARRIAGE_ASK:-1","staYN_MARRIAGE_ASK:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Radio("rdoYN_MARRIAGE_ASK","staYN_MARRIAGE_ASK:5","staYN_MARRIAGE_ASK:-25","70","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("53");
            obj.set_innerdataset("dsTY_MARRIAGE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Calendar("tclDT_MARRIAGE_ASK","rdoYN_MARRIAGE_ASK:17","staYN_MARRIAGE_ASK:-25","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("54");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_GENDER_ASK","staDS_FAMILYPLACE_bg_ASK:-1","staDS_FAMILYPLACE_bg_ASK:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("66");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staYN_GENDER_bg_ASK","staYN_GENDER_ASK:-1","staYN_GENDER_ASK:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Radio("rdoYN_GENDER_ASK","staYN_GENDER_ASK:5","staYN_GENDER_ASK:-25","113","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("68");
            obj.set_innerdataset("dsTY_GENDER");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_BUSINESS_ASK","staCD_HOUSEHOLDER_bg_ASK:-1","staCD_HOUSEHOLDER_bg_ASK:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("106");
            obj.set_text("담당업무");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_BUSINESS_bg_ASK","staDS_BUSINESS_ASK:-1","staDS_BUSINESS_ASK:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_BUSINESS_ASK","staDS_BUSINESS_ASK:5","staDS_BUSINESS_ASK:-25","230","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("107");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staTitle_ASK","5","staCD_FAMILY_HEAD_ASK:10","61","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("81");
            obj.set_text("병역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_color("red");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_RESOURCE_ASK","5","staTitle_ASK:5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("82");
            obj.set_text("군필종류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_RESOURCE_bg_ASK","staCD_RESOURCE_ASK:-1","staCD_RESOURCE_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_RESOURCE_ASK","staCD_RESOURCE_ASK:5","staCD_RESOURCE_ASK:-25","178","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("90");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_MILITARY_ASK","5","staCD_RESOURCE_ASK:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("87");
            obj.set_text("군별");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_MILITARY_bg_ASK","staCD_MILITARY_ASK:-1","staCD_MILITARY_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_MILITARY_ASK","staCD_MILITARY_ASK:5","staCD_MILITARY_ASK:-25","178","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("99");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDT_CHARGE_ASK","5","staCD_MILITARY_ASK:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("100");
            obj.set_text("입대일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDT_CHARGE_bg_ASK","staDT_CHARGE_ASK:-1","staDT_CHARGE_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CHARGE_ASK","staDT_CHARGE_ASK:5","staDT_CHARGE_ASK:-25","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("108");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_autoskip("true");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_REASON_ASK","5","staDT_CHARGE_ASK:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("106");
            obj.set_text("면제사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_REASON_bg_ASK","staDS_REASON_ASK:-1","staDS_REASON_ASK:-30","888","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_REASON_ASK","staDS_REASON_ASK:5","staDS_REASON_ASK:-25","876","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("111");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            obj.set_accessibilityenable("false");
            obj.set_maxlength("100");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_SERVICESTS_ASK","staCD_RESOURCE_bg_ASK:-1","staCD_RESOURCE_bg_ASK:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("83");
            obj.set_text("역종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_SERVICESTS_bg_ASK","staCD_SERVICESTS_ASK:-1","staCD_SERVICESTS_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_SERVICESTS_ASK","staCD_SERVICESTS_ASK:5","staCD_SERVICESTS_ASK:-25","179","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("91");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_DISCHARGE_ASK","staCD_MILITARY_bg_ASK:-1","staCD_MILITARY_bg_ASK:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("92");
            obj.set_text("제대구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_DISCHARGE_bg_ASK","staCD_DISCHARGE_ASK:-1","staCD_DISCHARGE_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_DISCHARGE_ASK","staCD_DISCHARGE_ASK:5","staCD_DISCHARGE_ASK:-25","179","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("94");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDT_DISCHARGE_ASK","staDT_CHARGE_bg_ASK:-1","staDT_CHARGE_bg_ASK:-30","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("102");
            obj.set_text("제대일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDT_DISCHARGE_bg_ASK","staDT_DISCHARGE_ASK:-1","staDT_DISCHARGE_ASK:-30","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Calendar("tclDT_DISCHARGE_ASK","staDT_DISCHARGE_ASK:5","staDT_DISCHARGE_ASK:-25","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("109");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_autoskip("true");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_BRANCH_ASK","staCD_SERVICESTS_bg_ASK:-1","staCD_SERVICESTS_bg_ASK:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("84");
            obj.set_text("병과");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_BRANCH_bg_ASK","staCD_BRANCH_ASK:-1","staCD_BRANCH_ASK:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_BRANCH_ASK","staCD_BRANCH_ASK:5","staCD_BRANCH_ASK:-25","230","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("86");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_MILITARYRANK_ASK","staCD_DISCHARGE_bg_ASK:-1","staCD_DISCHARGE_bg_ASK:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("95");
            obj.set_text("계급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staCD_MILITARYRANK_bg_ASK","staCD_MILITARYRANK_ASK:-1","staCD_MILITARYRANK_ASK:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("cfCD_MILITARYRANK_ASK","staCD_MILITARYRANK_ASK:5","staCD_MILITARYRANK_ASK:-25","230","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("98");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_SERVICENO_ASK","staDT_DISCHARGE_bg_ASK:-1","staDT_DISCHARGE_bg_ASK:-30","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("104");
            obj.set_text("군번");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Static("staDS_SERVICENO_bg_ASK","staDS_SERVICENO_ASK:-1","staDS_SERVICENO_ASK:-30","242","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Edit("txtDS_SERVICENO_ASK","staDS_SERVICENO_ASK:5","staDS_SERVICENO_ASK:-25","230","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divBase.form);
            obj.set_taborder("110");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            obj.set_maxlength("50");
            this.divData.form.tabData.tab1.form.divBase.addChild(obj.name, obj);

            obj = new Div("divLeft1","0","4",null,null,"divSplitter1:5","10",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGridBase","5","4",null,null,"3","4",null,null,null,null,this.divData.form.tabData.tab1.form.divLeft1.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab1.form.divLeft1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("주소");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staGridAddr","4","0","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("3");
            obj.set_text("변경정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGridAddr","0","staGridAddr:5",null,"95%","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("가족");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staGridFmy","4","0","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("78");
            obj.set_text("변경정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Grid("objGridFmy","0","staGridFmy:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("학력");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staGridSch","4","0","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("78");
            obj.set_text("변경정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Grid("objGridSch","0","staGridSch:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("자격");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staGridLic","4","0","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("78");
            obj.set_text("변경정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGridLic","0","staGridLic:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Tabpage("tab6",this.divData.form.tabData);
            obj.set_text("그룹외경력");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staGridCrr","4","0","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("78");
            obj.set_text("변경정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Grid("objGridCrr","0","staGridCrr:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Tabpage("tab7",this.divData.form.tabData);
            obj.set_text("기타");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter7","18.50%","0","5",null,null,"0",null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("1");
            obj.set_cursor("ew-resize");
            obj.set_cssclass("div_Splitter");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Div("divLeft7","0","4",null,null,"divSplitter7:5","10",null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Grid("objGridEtc","5","4",null,null,"4","4",null,null,null,null,this.divData.form.tabData.tab7.form.divLeft7.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab7.form.divLeft7.addChild(obj.name, obj);

            obj = new Div("divEtc","divSplitter7:7","4",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("2");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staDS_CNAME_OLD00","0","5","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("sta12_02","staDS_CNAME_OLD00:-1","staDS_CNAME_OLD00:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN_OLD7","staDS_CNAME_OLD00:5","staDS_CNAME_OLD00:-25","173","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("85");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_accessibilityrole("form");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_ENAME_OLD00","sta12_02:-1","sta12_02:-30","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("4");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("sta02_02","staDS_ENAME_OLD00:-1","staDS_ENAME_OLD00:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_STATUS7","staDS_ENAME_OLD00:5","staDS_ENAME_OLD00:-25","173","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("6");
            obj.set_maxlength("16");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staEtc_old","4","50","9.10%","25",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("0");
            obj.set_text("현재정보");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staEtc_old_1","4","staEtc_old:2","24.01%","25",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("8");
            obj.set_text("▣ 신체정보");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staQT_HEIGHT","0","staEtc_old_1:5","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("25");
            obj.set_text("신장");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staQT_HEIGHT_bg","staQT_HEIGHT:-1","staQT_HEIGHT:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtQT_HEIGHT_OLD","staQT_HEIGHT:5","staQT_HEIGHT:-25","173","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("1");
            obj.set_inputmode("normal");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            obj.set_readonly("false");
            obj.set_maxlength("6");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staRT_EYE","0","staQT_HEIGHT:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("27");
            obj.set_text("시력");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staRT_LEFTEYE_bg","staRT_EYE:-1","staRT_EYE:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staRT_EYE_L","staRT_EYE:10","staRT_EYE:-25","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("26");
            obj.set_text("좌:");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtRT_LEFTEYE_OLD","staRT_EYE_L:5","staRT_EYE:-25","54","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("3");
            obj.set_inputmode("normal");
            obj.set_maxlength("3");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staRT_EYE_R","txtRT_LEFTEYE_OLD:10","staRT_EYE:-25","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("68");
            obj.set_text("우:");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtRT_RIGHTEYE_OLD","staRT_EYE_R:5","staRT_EYE:-25","54","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("4");
            obj.set_inputmode("normal");
            obj.set_maxlength("3");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_ALCOHOL","0","staRT_EYE:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("31");
            obj.set_text("주량");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_ALCOHOL_bg","staDS_ALCOHOL:-1","staDS_ALCOHOL:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_ALCOHOL_OLD","staDS_ALCOHOL:5","staDS_ALCOHOL:-25","173","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("5");
            obj.set_inputmode("normal");
            obj.set_maxlength("10");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_HEALTH_REMARK","0","staDS_ALCOHOL:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("35");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_HEALTH_REMARK_bg","staDS_HEALTH_REMARK:-1","staDS_HEALTH_REMARK:-30","448","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_HEALTH_REMARK_OLD","staDS_HEALTH_REMARK:5","staDS_HEALTH_REMARK:-25","437","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("7");
            obj.set_inputmode("normal");
            obj.set_maxlength("20");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staQT_WEIGHT","staQT_HEIGHT_bg:-1","staQT_HEIGHT_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("23");
            obj.set_text("체중");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staQT_WEIGHT_bg","staQT_WEIGHT:-1","staQT_WEIGHT:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtQT_WEIGHT_OLD","staQT_WEIGHT:5","staQT_WEIGHT:-25","174","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("2");
            obj.set_inputmode("normal");
            obj.set_maxlength("6");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staTY_BLOOD","staRT_LEFTEYE_bg:-1","staRT_LEFTEYE_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("29");
            obj.set_text("혈액형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staTY_BLOOD_bg","staTY_BLOOD:-1","staTY_BLOOD:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Div("ccfTY_BLOOD_OLD","staTY_BLOOD:5","staTY_BLOOD:-25","174","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("69");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staYN_SMOKING","staDS_ALCOHOL_bg:-1","staDS_ALCOHOL_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("33");
            obj.set_text("흡연여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staYN_SMOKING_bg","staYN_SMOKING:-1","staYN_SMOKING:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SMOKING_OLD","staYN_SMOKING:5","staYN_SMOKING:-25","120","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsTY_SMOKING");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staEtc_old_2","4","staDS_HEALTH_REMARK:10","24.01%","25",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("23");
            obj.set_text("▣ 추천인정보");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_RECOM_HNAME","0","staEtc_old_2:5","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("55");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_RECOM_HNAME_bg","staDS_RECOM_HNAME:-1","staDS_RECOM_HNAME:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_RECOM_HNAME_OLD","staDS_RECOM_HNAME:5","staDS_RECOM_HNAME:-25","173","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("16");
            obj.set_inputmode("normal");
            obj.set_maxlength("10");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_RECOM_JOB","0","staDS_RECOM_HNAME:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("56");
            obj.set_text("직업");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_RECOM_JOB_bg","staDS_RECOM_JOB:-1","staDS_RECOM_JOB:-30","448","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_RECOM_JOB_OLD","staDS_RECOM_JOB:5","staDS_RECOM_JOB:-25","437","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("18");
            obj.set_inputmode("normal");
            obj.set_maxlength("10");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_RECOM_ADDRESS","0","staDS_RECOM_JOB:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("58");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_RECOM_ADDRESS_bg","staDS_RECOM_ADDRESS:-1","staDS_RECOM_ADDRESS:-30","448","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_RECOM_ADDRESS_OLD","staDS_RECOM_ADDRESS:5","staDS_RECOM_ADDRESS:-25","437","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("19");
            obj.set_inputmode("normal");
            obj.set_maxlength("60");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_RECOM_RELATION","staDS_RECOM_HNAME_bg:-1","staDS_RECOM_HNAME_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("53");
            obj.set_text("관계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_RECOM_RELATION_bg","staDS_RECOM_RELATION:-1","staDS_RECOM_RELATION:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_RECOM_RELATION_OLD","staDS_RECOM_RELATION:5","staDS_RECOM_RELATION:-25","174","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("17");
            obj.set_inputmode("normal");
            obj.set_maxlength("5");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("sta100003","0","staDS_RECOM_ADDRESS:10","25%","25",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("60");
            obj.set_text("재산정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            obj.set_visible("false");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_MOVABLES","4","sta100003:5","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("61");
            obj.set_text("동산");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_visible("false");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_MOVABLES_bg","staDS_MOVABLES:-1","staDS_MOVABLES:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_MOVABLES_OLD","staDS_MOVABLES:5","staDS_MOVABLES:-25","173","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("20");
            obj.set_inputmode("normal");
            obj.set_maxlength("20");
            obj.set_visible("false");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_IMMOVABLES","staDS_MOVABLES_bg:-1","staDS_MOVABLES_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("63");
            obj.set_text("부동산");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_visible("false");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_IMMOVABLES_bg","staDS_IMMOVABLES:-1","staDS_IMMOVABLES:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_IMMOVABLES_OLD","staDS_IMMOVABLES:5","staDS_IMMOVABLES:-25","174","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("21");
            obj.set_inputmode("normal");
            obj.set_maxlength("20");
            obj.set_visible("false");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staEtc_ask","5","staDS_RECOM_ADDRESS:10","9.10%","25",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("1");
            obj.set_text("변경정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_color("red");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staEtc_ask_1","4","staEtc_ask:2","24.01%","25",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("53");
            obj.set_text("▣ 신체정보");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staQT_HEIGHT_ASK","0","staEtc_ask_1:5","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("25");
            obj.set_text("신장");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staQT_HEIGHT_bg_ASK","staQT_HEIGHT_ASK:-1","staQT_HEIGHT_ASK:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtQT_HEIGHT_ASK","staQT_HEIGHT_ASK:5","staQT_HEIGHT_ASK:-25","173","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("1");
            obj.set_inputmode("normal");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            obj.set_readonly("false");
            obj.set_maxlength("6");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staRT_EYE_ASK","0","staQT_HEIGHT_ASK:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("27");
            obj.set_text("시력");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staRT_LEFTEYE_bg_ASK","staRT_EYE_ASK:-1","staRT_EYE_ASK:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staRT_EYE_L_ASK","staRT_EYE_ASK:10","staRT_EYE_ASK:-25","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("26");
            obj.set_text("좌:");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtRT_LEFTEYE_ASK","staRT_EYE_L_ASK:5","staRT_EYE_ASK:-25","54","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("3");
            obj.set_inputmode("normal");
            obj.set_maxlength("3");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staRT_EYE_R_ASK","txtRT_LEFTEYE_ASK:10","staRT_EYE_ASK:-25","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("68");
            obj.set_text("우:");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtRT_RIGHTEYE_ASK","staRT_EYE_R_ASK:5","staRT_EYE_ASK:-25","54","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("4");
            obj.set_inputmode("normal");
            obj.set_maxlength("3");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_ALCOHOL_ASK","0","staRT_EYE_ASK:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("31");
            obj.set_text("주량");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_ALCOHOL_bg_ASK","staDS_ALCOHOL_ASK:-1","staDS_ALCOHOL_ASK:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_ALCOHOL_ASK","staDS_ALCOHOL_ASK:5","staDS_ALCOHOL_ASK:-25","173","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("5");
            obj.set_inputmode("normal");
            obj.set_maxlength("10");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_HEALTH_REMARK_ASK","0","staDS_ALCOHOL_ASK:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("35");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_HEALTH_REMARK_bg_ASK","staDS_HEALTH_REMARK_ASK:-1","staDS_HEALTH_REMARK_ASK:-30","448","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_HEALTH_REMARK_ASK","staDS_HEALTH_REMARK_ASK:5","staDS_HEALTH_REMARK_ASK:-25","437","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("7");
            obj.set_inputmode("normal");
            obj.set_maxlength("20");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staQT_WEIGHT_ASK","staQT_HEIGHT_bg_ASK:-1","staQT_HEIGHT_bg_ASK:-30","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("23");
            obj.set_text("체중");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staQT_WEIGHT_bg_ASK","staQT_WEIGHT_ASK:-1","staQT_WEIGHT_ASK:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtQT_WEIGHT_ASK","staQT_WEIGHT_ASK:5","staQT_WEIGHT_ASK:-25","174","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("2");
            obj.set_inputmode("normal");
            obj.set_maxlength("6");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staTY_BLOOD_ASK","staRT_LEFTEYE_bg_ASK:-1","staRT_LEFTEYE_bg_ASK:-30","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("29");
            obj.set_text("혈액형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staTY_BLOOD_bg_ASK","staTY_BLOOD_ASK:-1","staTY_BLOOD_ASK:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Div("ccfTY_BLOOD_ASK","staTY_BLOOD_ASK:5","staTY_BLOOD_ASK:-25","174","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("69");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staYN_SMOKING_ASK","staDS_ALCOHOL_bg_ASK:-1","staDS_ALCOHOL_bg_ASK:-30","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("33");
            obj.set_text("흡연여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staYN_SMOKING_bg_ASK","staYN_SMOKING_ASK:-1","staYN_SMOKING_ASK:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SMOKING_ASK","staYN_SMOKING_ASK:5","staYN_SMOKING_ASK:-25","120","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsTY_SMOKING");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staEtc_ask_2","4","staDS_HEALTH_REMARK_ASK:5","24.01%","25",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("23");
            obj.set_text("▣ 추천인정보");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_RECOM_HNAME_ASK","0","staEtc_ask_2:10","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("55");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_RECOM_HNAME_bg_ASK","staDS_RECOM_HNAME_ASK:-1","staDS_RECOM_HNAME_ASK:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_RECOM_HNAME_ASK","staDS_RECOM_HNAME_ASK:5","staDS_RECOM_HNAME_ASK:-25","173","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("16");
            obj.set_inputmode("normal");
            obj.set_maxlength("10");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_RECOM_JOB_ASK","0","staDS_RECOM_HNAME_ASK:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("56");
            obj.set_text("직업");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_RECOM_JOB_bg_ASK","staDS_RECOM_JOB_ASK:-1","staDS_RECOM_JOB_ASK:-30","448","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_RECOM_JOB_ASK","staDS_RECOM_JOB_ASK:5","staDS_RECOM_JOB_ASK:-25","437","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("18");
            obj.set_inputmode("normal");
            obj.set_maxlength("10");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_RECOM_ADDRESS_ASK","0","staDS_RECOM_JOB_ASK:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("58");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_RECOM_ADDRESS_bg_ASK","staDS_RECOM_ADDRESS_ASK:-1","staDS_RECOM_ADDRESS_ASK:-30","448","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_RECOM_ADDRESS_ASK","staDS_RECOM_ADDRESS_ASK:5","staDS_RECOM_ADDRESS_ASK:-25","437","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("19");
            obj.set_inputmode("normal");
            obj.set_maxlength("60");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_RECOM_RELATION_ASK","staDS_RECOM_HNAME_bg_ASK:-1","staDS_RECOM_HNAME_bg_ASK:-30","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("53");
            obj.set_text("관계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_RECOM_RELATION_bg_ASK","staDS_RECOM_RELATION_ASK:-1","staDS_RECOM_RELATION_ASK:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_RECOM_RELATION_ASK","staDS_RECOM_RELATION_ASK:5","staDS_RECOM_RELATION_ASK:-25","174","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("17");
            obj.set_inputmode("normal");
            obj.set_maxlength("5");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staEtc_ask_3","4","staDS_RECOM_ADDRESS_ASK:10","24.01%","25",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("77");
            obj.set_text("▣ 재산정보");
            obj.set_textDecoration("none");
            obj.set_visible("false");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_MOVABLES_ASK","4","staEtc_ask_3:5","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("61");
            obj.set_text("동산");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_visible("false");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_MOVABLES_bg_ASK","staDS_MOVABLES_ASK:-1","staDS_MOVABLES_ASK:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_MOVABLES_ASK","staDS_MOVABLES_ASK:5","staDS_MOVABLES_ASK:-25","173","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("20");
            obj.set_inputmode("normal");
            obj.set_maxlength("20");
            obj.set_visible("false");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_IMMOVABLES_ASK","staDS_MOVABLES_bg_ASK:-1","staDS_MOVABLES_bg_ASK:-30","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("63");
            obj.set_text("부동산");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_visible("false");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Static("staDS_IMMOVABLES_bg_ASK","staDS_IMMOVABLES_ASK:-1","staDS_IMMOVABLES_ASK:-30","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Edit("txtDS_IMMOVABLES_ASK","staDS_IMMOVABLES_ASK:5","staDS_IMMOVABLES_ASK:-25","174","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form.divEtc.form);
            obj.set_taborder("21");
            obj.set_inputmode("normal");
            obj.set_maxlength("20");
            obj.set_visible("false");
            this.divData.form.tabData.tab7.form.divEtc.addChild(obj.name, obj);

            obj = new Tabpage("tab8",this.divData.form.tabData);
            obj.set_text("외국어");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staGridCrr","4","0","50.00%","25",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("0");
            obj.set_text("변경정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Grid("objGridOlang","0","30",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Static("sta00","530","33","200","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("FORM 높이 : 720 <> 970");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboTY_STATUS","value","dsSearch","TY_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.tabData.tab1.form.divBase.form.txtDS_CNAME_OLD","value","dsBaseList","DS_CNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tabData.tab1.form.divBase.form.txtDS_ENAME_OLD","value","dsBaseList","DS_ENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tabData.tab1.form.divBase.form.txtDS_EMAIL_OLD","value","dsBaseList","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab1.form.divBase.form.txtDS_EMAIL_ETC_OLD","value","dsBaseList","DS_EMAIL_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab1.form.divBase.form.tclDT_BIRTH_OLD","value","dsBaseList","DT_BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab1.form.divBase.form.ccfDS_DISABILITY_OLD.form.CDTextBox","value","dsBaseList","CD_DISABILITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab1.form.divBase.form.ccfDS_DISABILITY_OLD.form.DSTextBox","value","dsBaseList","DS_DISABILITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab1.form.divBase.form.ccfDS_DISABILITY_GRADE_OLD.form.CDTextBox","value","dsBaseList","CD_DISABILITY_GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tabData.tab1.form.divBase.form.ccfDS_DISABILITY_GRADE_OLD.form.DSTextBox","value","dsBaseList","DS_DISABILITY_GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tabData.tab1.form.divBase.form.txtID_RESIDENT_OLD","value","dsBaseList","ID_RESIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab1.form.divBase.form.txtDS_HANDPHONE_OLD","value","dsBaseList","DS_HANDPHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.tabData.tab1.form.divBase.form.rdoYN_SUPPORTED_OLD","value","dsBaseList","YN_SUPPORTED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tabData.tab1.form.divBase.form.txtNO_SUPPORTED_OLD","value","dsBaseList","NO_SUPPORTED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tabData.tab1.form.divBase.form.rdoYN_MARRIAGE_OLD","value","dsBaseList","YN_MARRIAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.tabData.tab1.form.divBase.form.txtDS_BIRTHPLACE_OLD","value","dsBaseList","DS_BIRTHPLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.tabData.tab1.form.divBase.form.cfCD_FAMILY_HEAD_OLD.form.CDTextBox","value","dsBaseList","CD_FAMILY_HEAD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.tabData.tab1.form.divBase.form.cfCD_FAMILY_HEAD_OLD.form.DSTextBox","value","dsBaseList","DS_FAMILY_HEAD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.tabData.tab1.form.divBase.form.txtDS_FAMILY_HEADNAME_OLD","value","dsBaseList","DS_FAMILY_HEADNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.tabData.tab1.form.divBase.form.cfCD_HOUSEHOLDER_OLD.form.CDTextBox","value","dsBaseList","CD_HOUSEHOLDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tabData.tab1.form.divBase.form.cfCD_HOUSEHOLDER_OLD.form.DSTextBox","value","dsBaseList","DS_HOUSEHOLDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tabData.tab1.form.divBase.form.txtDS_HOUSEHOLDER_NAME_OLD","value","dsBaseList","DS_HOUSEHOLDER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tabData.tab1.form.divBase.form.txtDS_FAMILYPLACE_OLD","value","dsBaseList","DS_FAMILYPLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.tabData.tab1.form.divBase.form.rdoYN_HANDICAP_OLD","value","dsBaseList","YN_HANDICAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.tabData.tab1.form.divBase.form.ctxtNO_DISABILITY_OLD","value","dsBaseList","NO_DISABILITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.tabData.tab1.form.divBase.form.txtDS_OFFICEPHONE_OLD","value","dsBaseList","DS_OFFICEPHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab1.form.divBase.form.txtDS_EXTENSION_OLD","value","dsBaseList","DS_EXTENSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab1.form.divBase.form.txtDS_HOBBY_OLD","value","dsBaseList","DS_HOBBY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab1.form.divBase.form.txtDS_HOMEPHONE_OLD","value","dsBaseList","DS_HOMEPHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab1.form.divBase.form.txtDS_SPECIAL_OLD","value","dsBaseList","DS_SPECIAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.tabData.tab1.form.divBase.form.rdoYN_GENDER_OLD","value","dsBaseList","YN_GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.tabData.tab1.form.divBase.form.cfCD_RELIGION_OLD.form.CDTextBox","value","dsBaseList","CD_RELIGION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab1.form.divBase.form.cfCD_RELIGION_OLD.form.DSTextBox","value","dsBaseList","DS_RELIGION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.tabData.tab1.form.divBase.form.tclDT_MARRIAGE_OLD","value","dsBaseList","DT_MARRIAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.tabData.tab1.form.divBase.form.rdoYN_FOREIGNER_OLD","value","dsBaseList","YN_FOREIGNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.tabData.tab1.form.divBase.form.ccfDS_FOREIGNER_OLD.form.CDTextBox","value","dsBaseList","CD_FOREIGNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.tabData.tab1.form.divBase.form.ccfDS_FOREIGNER_OLD.form.DSTextBox","value","dsBaseList","DS_FOREIGNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.tabData.tab1.form.divBase.form.rdoYN_SOLAR_OLD","value","dsBaseList","YN_SOLAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.tabData.tab1.form.divBase.form.ccfCD_SUPPORTED_OLD.form.CDTextBox","value","dsBaseList","CD_SUPPORTED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.tabData.tab1.form.divBase.form.ccfCD_SUPPORTED_OLD.form.DSTextBox","value","dsBaseList","DS_SUPPORTED_FAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.tabData.tab1.form.divBase.form.txtDS_SUPPORTED_OLD","value","dsBaseList","DS_SUPPORTED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.tabData.tab1.form.divBase.form.txtDS_EXTENSION_OLD","value","dsBaseList","DS_EXTENSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.tabData.tab1.form.divBase.form.txtDS_BUSINESS_OLD","value","dsBaseList","DS_BUSINESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.tabData.tab1.form.divBase.form.cfCD_BRANCH_OLD.form.CDTextBox","value","dsBaseList","CD_BRANCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.tabData.tab1.form.divBase.form.cfCD_BRANCH_OLD.form.DSTextBox","value","dsBaseList","DS_BRANCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.tabData.tab1.form.divBase.form.cfCD_RESOURCE_OLD.form.CDTextBox","value","dsBaseList","CD_RESOURCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.tabData.tab1.form.divBase.form.cfCD_RESOURCE_OLD.form.DSTextBox","value","dsBaseList","DS_RESOURCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.tabData.tab1.form.divBase.form.cfCD_SERVICESTS_OLD.form.CDTextBox","value","dsBaseList","CD_SERVICESTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.tabData.tab1.form.divBase.form.cfCD_SERVICESTS_OLD.form.DSTextBox","value","dsBaseList","DS_SERVICESTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.tabData.tab1.form.divBase.form.cfCD_DISCHARGE_OLD.form.CDTextBox","value","dsBaseList","CD_DISCHARGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.tabData.tab1.form.divBase.form.cfCD_DISCHARGE_OLD.form.DSTextBox","value","dsBaseList","DS_DISCHARGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab1.form.divBase.form.cfCD_MILITARYRANK_OLD.form.CDTextBox","value","dsBaseList","CD_MILITARYRANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.tabData.tab1.form.divBase.form.cfCD_MILITARYRANK_OLD.form.DSTextBox","value","dsBaseList","DS_MILITARYRANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.tabData.tab1.form.divBase.form.cfCD_MILITARY_OLD.form.CDTextBox","value","dsBaseList","CD_MILITARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.tabData.tab1.form.divBase.form.cfCD_MILITARY_OLD.form.DSTextBox","value","dsBaseList","DS_MILITARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.tabData.tab1.form.divBase.form.tclDT_CHARGE_OLD","value","dsBaseList","DT_CHARGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.tabData.tab1.form.divBase.form.tclDT_DISCHARGE_OLD","value","dsBaseList","DT_DISCHARGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divData.form.tabData.tab1.form.divBase.form.txtDS_SERVICENO_OLD","value","dsBaseList","DS_SERVICENO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.tabData.tab1.form.divBase.form.txtDS_REASON_OLD","value","dsBaseList","DS_REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divData.form.tabData.tab1.form.divBase.form.txtDS_EMAIL_ETC_OLD","value","dsBaseList","DS_EMAIL_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.tabData.tab1.form.divBase.form.txtDS_FAX_OLD","value","dsBaseList","DS_FAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.tabData.tab1.form.divBase.form.txtDS_CNAME_ASK","value","dsBaseList","DS_CNAME_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.tabData.tab1.form.divBase.form.txtDS_ENAME_ASK","value","dsBaseList","DS_ENAME_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divData.form.tabData.tab1.form.divBase.form.txtDS_EMAIL_ASK","value","dsBaseList","DS_EMAIL_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divData.form.tabData.tab1.form.divBase.form.txtDS_EMAIL_ETC_ASK","value","dsBaseList","DS_EMAIL_ETC_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divData.form.tabData.tab1.form.divBase.form.tclDT_BIRTH_ASK","value","dsBaseList","DT_BIRTH_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divData.form.tabData.tab1.form.divBase.form.ccfDS_DISABILITY_ASK.form.CDTextBox","value","dsBaseList","CD_DISABILITY_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divData.form.tabData.tab1.form.divBase.form.ccfDS_DISABILITY_ASK.form.DSTextBox","value","dsBaseList","DS_DISABILITY_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divData.form.tabData.tab1.form.divBase.form.ccfDS_DISABILITY_GRADE_ASK.form.CDTextBox","value","dsBaseList","CD_DISABILITY_GRADE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divData.form.tabData.tab1.form.divBase.form.ccfDS_DISABILITY_GRADE_ASK.form.DSTextBox","value","dsBaseList","DS_DISABILITY_GRADE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divData.form.tabData.tab1.form.divBase.form.txtID_RESIDENT_ASK","value","dsBaseList","ID_RESIDENT_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divData.form.tabData.tab1.form.divBase.form.txtDS_HANDPHONE_ASK","value","dsBaseList","DS_HANDPHONE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divData.form.tabData.tab1.form.divBase.form.rdoYN_SUPPORTED_ASK","value","dsBaseList","YN_SUPPORTED_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divData.form.tabData.tab1.form.divBase.form.txtNO_SUPPORTED_ASK","value","dsBaseList","NO_SUPPORTED_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divData.form.tabData.tab1.form.divBase.form.rdoYN_MARRIAGE_ASK","value","dsBaseList","YN_MARRIAGE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","divData.form.tabData.tab1.form.divBase.form.txtDS_BIRTHPLACE_ASK","value","dsBaseList","DS_BIRTHPLACE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","divData.form.tabData.tab1.form.divBase.form.cfCD_FAMILY_HEAD_ASK.form.CDTextBox","value","dsBaseList","CD_FAMILY_HEAD_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","divData.form.tabData.tab1.form.divBase.form.cfCD_FAMILY_HEAD_ASK.form.DSTextBox","value","dsBaseList","DS_FAMILY_HEAD_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","divData.form.tabData.tab1.form.divBase.form.txtDS_FAMILY_HEADNAME_ASK","value","dsBaseList","DS_FAMILY_HEADNAME_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","divData.form.tabData.tab1.form.divBase.form.cfCD_HOUSEHOLDER_ASK.form.CDTextBox","value","dsBaseList","CD_HOUSEHOLDER_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","divData.form.tabData.tab1.form.divBase.form.cfCD_HOUSEHOLDER_ASK.form.DSTextBox","value","dsBaseList","DS_HOUSEHOLDER_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","divData.form.tabData.tab1.form.divBase.form.txtDS_HOUSEHOLDER_NAME_ASK","value","dsBaseList","DS_HOUSEHOLDER_NAME_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","divData.form.tabData.tab1.form.divBase.form.txtDS_FAMILYPLACE_ASK","value","dsBaseList","DS_FAMILYPLACE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","divData.form.tabData.tab1.form.divBase.form.rdoYN_HANDICAP_ASK","value","dsBaseList","YN_HANDICAP_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","divData.form.tabData.tab1.form.divBase.form.ctxtNO_DISABILITY_ASK","value","dsBaseList","NO_DISABILITY_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","divData.form.tabData.tab1.form.divBase.form.txtDS_OFFICEPHONE_ASK","value","dsBaseList","DS_OFFICEPHONE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","divData.form.tabData.tab1.form.divBase.form.txtDS_HOBBY_ASK","value","dsBaseList","DS_HOBBY_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divData.form.tabData.tab1.form.divBase.form.txtDS_HOMEPHONE_ASK","value","dsBaseList","DS_HOMEPHONE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","divData.form.tabData.tab1.form.divBase.form.txtDS_SPECIAL_ASK","value","dsBaseList","DS_SPECIAL_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","divData.form.tabData.tab1.form.divBase.form.rdoYN_GENDER_ASK","value","dsBaseList","YN_GENDER_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","divData.form.tabData.tab1.form.divBase.form.cfCD_RELIGION_ASK.form.CDTextBox","value","dsBaseList","CD_RELIGION_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","divData.form.tabData.tab1.form.divBase.form.cfCD_RELIGION_ASK.form.DSTextBox","value","dsBaseList","DS_RELIGION_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","divData.form.tabData.tab1.form.divBase.form.tclDT_MARRIAGE_ASK","value","dsBaseList","DT_MARRIAGE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","divData.form.tabData.tab1.form.divBase.form.rdoYN_FOREIGNER_ASK","value","dsBaseList","YN_FOREIGNER_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","divData.form.tabData.tab1.form.divBase.form.ccfDS_FOREIGNER_ASK.form.CDTextBox","value","dsBaseList","CD_FOREIGNER_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","divData.form.tabData.tab1.form.divBase.form.ccfDS_FOREIGNER_ASK.form.DSTextBox","value","dsBaseList","DS_FOREIGNER_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","divData.form.tabData.tab1.form.divBase.form.rdoYN_SOLAR_ASK","value","dsBaseList","YN_SOLAR_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","divData.form.tabData.tab1.form.divBase.form.ccfCD_SUPPORTED_ASK.form.CDTextBox","value","dsBaseList","CD_SUPPORTED_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","divData.form.tabData.tab1.form.divBase.form.ccfCD_SUPPORTED_ASK.form.DSTextBox","value","dsBaseList","DS_SUPPORTED_FAM_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","divData.form.tabData.tab1.form.divBase.form.txtDS_SUPPORTED_ASK","value","dsBaseList","DS_SUPPORTED_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","divData.form.tabData.tab1.form.divBase.form.txtDS_EXTENSION_ASK","value","dsBaseList","DS_EXTENSION_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","divData.form.tabData.tab1.form.divBase.form.txtDS_BUSINESS_ASK","value","dsBaseList","DS_BUSINESS_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","divData.form.tabData.tab1.form.divBase.form.cfCD_BRANCH_ASK.form.CDTextBox","value","dsBaseList","CD_BRANCH_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","divData.form.tabData.tab1.form.divBase.form.cfCD_BRANCH_ASK.form.DSTextBox","value","dsBaseList","DS_BRANCH_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","divData.form.tabData.tab1.form.divBase.form.cfCD_RESOURCE_ASK.form.CDTextBox","value","dsBaseList","CD_RESOURCE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","divData.form.tabData.tab1.form.divBase.form.cfCD_RESOURCE_ASK.form.DSTextBox","value","dsBaseList","DS_RESOURCE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","divData.form.tabData.tab1.form.divBase.form.cfCD_SERVICESTS_ASK.form.CDTextBox","value","dsBaseList","CD_SERVICESTS_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","divData.form.tabData.tab1.form.divBase.form.cfCD_SERVICESTS_ASK.form.DSTextBox","value","dsBaseList","DS_SERVICESTS_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","divData.form.tabData.tab1.form.divBase.form.cfCD_DISCHARGE_ASK.form.CDTextBox","value","dsBaseList","CD_DISCHARGE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item118","divData.form.tabData.tab1.form.divBase.form.cfCD_DISCHARGE_ASK.form.DSTextBox","value","dsBaseList","DS_DISCHARGE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item119","divData.form.tabData.tab1.form.divBase.form.cfCD_MILITARYRANK_ASK.form.CDTextBox","value","dsBaseList","CD_MILITARYRANK_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item120","divData.form.tabData.tab1.form.divBase.form.cfCD_MILITARYRANK_ASK.form.DSTextBox","value","dsBaseList","DS_MILITARYRANK_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","divData.form.tabData.tab1.form.divBase.form.cfCD_MILITARY_ASK.form.CDTextBox","value","dsBaseList","CD_MILITARY_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item124","divData.form.tabData.tab1.form.divBase.form.cfCD_MILITARY_ASK.form.DSTextBox","value","dsBaseList","DS_MILITARY_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item125","divData.form.tabData.tab1.form.divBase.form.tclDT_CHARGE_ASK","value","dsBaseList","DT_CHARGE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item126","divData.form.tabData.tab1.form.divBase.form.tclDT_DISCHARGE_ASK","value","dsBaseList","DT_DISCHARGE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item127","divData.form.tabData.tab1.form.divBase.form.txtDS_SERVICENO_ASK","value","dsBaseList","DS_SERVICENO_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item128","divData.form.tabData.tab1.form.divBase.form.txtDS_REASON_ASK","value","dsBaseList","DS_REASON_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item129","divData.form.tabData.tab1.form.divBase.form.txtDS_EMAIL_ETC_ASK","value","dsBaseList","DS_EMAIL_ETC_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item130","divData.form.tabData.tab1.form.divBase.form.txtDS_FAX_ASK","value","dsBaseList","DS_FAX_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab1.form.divBase.form.txtDS_STATUS","value","dsBaseList","DS_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab1.form.divBase.form.cfID_SABUN_OLD.form.CDTextBox","value","dsBaseList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.tabData.tab1.form.divBase.form.cfID_SABUN_OLD.form.DSTextBox","value","dsBaseList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item241","divData.form.tabData.tab7.form.divEtc.form.txtDS_STATUS7","value","dsEtcList","DS_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item242","divData.form.tabData.tab7.form.divEtc.form.cfID_SABUN_OLD7.form.CDTextBox","value","dsEtcList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item243","divData.form.tabData.tab7.form.divEtc.form.cfID_SABUN_OLD7.form.DSTextBox","value","dsEtcList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.tabData.tab7.form.divEtc.form.txtDS_RECOM_HNAME_OLD","value","dsEtcList","DS_RECOM_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divData.form.tabData.tab7.form.divEtc.form.txtDS_RECOM_RELATION_OLD","value","dsEtcList","DS_RECOM_RELATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divData.form.tabData.tab7.form.divEtc.form.txtDS_RECOM_JOB_OLD","value","dsEtcList","DS_RECOM_JOB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","divData.form.tabData.tab7.form.divEtc.form.txtDS_RECOM_ADDRESS_OLD","value","dsEtcList","DS_RECOM_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item121","divData.form.tabData.tab7.form.divEtc.form.txtDS_HEALTH_REMARK_OLD","value","dsEtcList","DS_HEALTH_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","divData.form.tabData.tab7.form.divEtc.form.txtQT_HEIGHT_OLD","value","dsEtcList","QT_HEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item131","divData.form.tabData.tab7.form.divEtc.form.txtQT_WEIGHT_OLD","value","dsEtcList","QT_WEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item132","divData.form.tabData.tab7.form.divEtc.form.txtRT_LEFTEYE_OLD","value","dsEtcList","RT_LEFTEYE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item133","divData.form.tabData.tab7.form.divEtc.form.txtDS_ALCOHOL_OLD","value","dsEtcList","DS_ALCOHOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item134","divData.form.tabData.tab7.form.divEtc.form.txtDS_MOVABLES_OLD","value","dsEtcList","DS_MOVABLES");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item135","divData.form.tabData.tab7.form.divEtc.form.txtDS_IMMOVABLES_OLD","value","dsEtcList","DS_IMMOVABLES");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item136","divData.form.tabData.tab7.form.divEtc.form.txtRT_RIGHTEYE_OLD","value","dsEtcList","RT_RIGHTEYE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item137","divData.form.tabData.tab7.form.divEtc.form.rdoYN_SMOKING_OLD","value","dsEtcList","YN_SMOKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item138","divData.form.tabData.tab7.form.divEtc.form.ccfTY_BLOOD_OLD.form.CDTextBox","value","dsEtcList","CD_BLOOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item139","divData.form.tabData.tab7.form.divEtc.form.ccfTY_BLOOD_OLD.form.DSTextBox","value","dsEtcList","DS_BLOOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item140","divData.form.tabData.tab7.form.divEtc.form.txtDS_RECOM_HNAME_ASK","value","dsEtcList","DS_RECOM_HNAME_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item141","divData.form.tabData.tab7.form.divEtc.form.txtDS_RECOM_RELATION_ASK","value","dsEtcList","DS_RECOM_RELATION_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item142","divData.form.tabData.tab7.form.divEtc.form.txtDS_RECOM_JOB_ASK","value","dsEtcList","DS_RECOM_JOB_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item143","divData.form.tabData.tab7.form.divEtc.form.txtDS_RECOM_ADDRESS_ASK","value","dsEtcList","DS_RECOM_ADDRESS_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item144","divData.form.tabData.tab7.form.divEtc.form.txtDS_HEALTH_REMARK_ASK","value","dsEtcList","DS_HEALTH_REMARK_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item145","divData.form.tabData.tab7.form.divEtc.form.txtQT_HEIGHT_ASK","value","dsEtcList","QT_HEIGHT_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item146","divData.form.tabData.tab7.form.divEtc.form.txtQT_WEIGHT_ASK","value","dsEtcList","QT_WEIGHT_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item147","divData.form.tabData.tab7.form.divEtc.form.txtRT_LEFTEYE_ASK","value","dsEtcList","RT_LEFTEYE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item148","divData.form.tabData.tab7.form.divEtc.form.txtDS_ALCOHOL_ASK","value","dsEtcList","DS_ALCOHOL_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item149","divData.form.tabData.tab7.form.divEtc.form.txtDS_MOVABLES_ASK","value","dsEtcList","DS_MOVABLES_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item150","divData.form.tabData.tab7.form.divEtc.form.txtDS_IMMOVABLES_ASK","value","dsEtcList","DS_IMMOVABLES_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item151","divData.form.tabData.tab7.form.divEtc.form.txtRT_RIGHTEYE_ASK","value","dsEtcList","RT_RIGHTEYE_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item152","divData.form.tabData.tab7.form.divEtc.form.rdoYN_SMOKING_ASK","value","dsEtcList","YN_SMOKING_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item153","divData.form.tabData.tab7.form.divEtc.form.ccfTY_BLOOD_ASK.form.CDTextBox","value","dsEtcList","CD_BLOOD_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item154","divData.form.tabData.tab7.form.divEtc.form.ccfTY_BLOOD_ASK.form.DSTextBox","value","dsEtcList","DS_BLOOD_ASK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item155","divData.form.tabData.tab1.form.divBase.form.txtDS_CNAME_ASK","background-color","dsBaseList","DS_CNAME_COLOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_PERSONAL_INFO2.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.postTabIndex = 0;
        this.arrTabNm = ["Base", "Addr", "Fmy", "Sch", "Lic", "Crr", "Etc", "Olang"]	// 인사기본정보,주소,가족,학력,자격,경력,기타,외국어
        this.arrAppType = ["B", "A", "F", "S", "L", "C", "E", "G"] //B:인사정보  A :주소 F: 가족  S:학력  L:자격 C:경력  E:기타정보 G:언어
        //this.fv_BG_COLOR = "#fcf1c2"; //연노란색
        this.fv_BG_COLOR = "#e3f0f6"; //파란색
        //this.fv_BG_COLOR = "#03a9f3"; //진파란색

        this.fv_FONT_COLOR = "#ff0000"; //빨간색

        this.form_onload = function(obj,e) {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.divData.form.tabData.set_tabindex(0);

        	// 그리드 세팅
        	this.fnSetGridCellProperty(0);	// 로딩시 주소먼저

        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.cboTY_STATUS.set_value("01");

        	this.fnSetSingleForm(0);
        	this.fnSetSingleForm(6);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnApproval = this.gfnFormButtonAdd("Approval", "fnApproval"); //승인
        	this.btnReject = this.gfnFormButtonAdd("Reject", "fnReject");//반려
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;			// 법인코드
            this.cboTY_STATUS = this.divSearch.form.cboTY_STATUS;

        	// 그리드변수 세팅
        	this.dxGridBase = this.divData.form.tabData.tab1.form.divLeft1.form.objGridBase; 		// 인사기본정보
        	this.dxGridAddr = this.divData.form.tabData.tab2.form.objGridAddr;  	// 주소
        	this.dxGridFmy = this.divData.form.tabData.tab3.form.objGridFmy;		// 가족
        	this.dxGridSch = this.divData.form.tabData.tab4.form.objGridSch; 		// 학력
        	this.dxGridLic = this.divData.form.tabData.tab5.form.objGridLic; 		// 자격
        	this.dxGridCrr = this.divData.form.tabData.tab6.form.objGridCrr; 		// 경력
        	this.dxGridEtc = this.divData.form.tabData.tab7.form.divLeft7.form.objGridEtc; 		// 기타
        	this.dxGridOlang = this.divData.form.tabData.tab8.form.objGridOlang; 	// 외국어
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        }

        // 그리드 세팅
        this.fnSetGridCellProperty = function (nTabIdx){
        	var objTarget = this.fnGetTabInfo(nTabIdx);
        	var objDS = objTarget.objDsList;
        	var objGrd = objTarget.objGrid;

        	// 0: 인사기본정보, 1: 주소, 2: 가족, 3: 학력, 4: 자격, 5: 경력, 6:기타, 7:외국어
        	switch(nTabIdx){
        	case 0:	// 인사기본정보
        		this.gfnGridInit(objGrd, objDS, "DA", "DAA_BASE_INFO");
        		break;
        	case 1:	// 1 주소 그리드 세팅
        		this.gfnGridInit(objGrd, objDS, "DA", "DAA_ADDRESS_INFO");	// 만들어야함
        		objGrd.ExpandUp = "fnGrid_ExpandUp";
        		break;
        	case 2:	// 가족
        		this.gfnGridInit(objGrd, objDS, "DA", "DAA_FAMILY_INFO");
        		objGrd.ExpandUp = "fnGrid_ExpandUp";
        		break;
        	case 3:	// 학력
        		this.gfnGridInit(objGrd, objDS, "DA", "DAA_SCHOOLCAREER_INFO");
        		objGrd.ExpandUp = "fnGrid_ExpandUp";
        		break;
        	case 4:	// 자격
        		this.gfnGridInit(objGrd, objDS, "DA", "DAA_LICENSE_INFO");
        		objGrd.ExpandUp = "fnGrid_ExpandUp";
        		break;
        	case 5:	// 경력
        		this.gfnGridInit(objGrd, objDS, "DA", "DAA_CAREER_INFO");
        		objGrd.ExpandUp = "fnGrid_ExpandUp";
        		break;
        	case 6:	// 기타
        		this.gfnGridInit(objGrd, objDS, "DA", "DAA_BASE_ETC_INFO");
        		break;
        	case 7:	// 외국어
        		this.gfnGridInit(objGrd, objDS, "DA", "DAA_OLANG_INFO");
        		objGrd.ExpandUp = "fnGrid_ExpandUp";
        		break;
        	}
        }


        this.fnGetTabInfo = function (nTabIdx){
        	var objGrid = null;
        	var objDsList = null;
        	var objDivDetail = null;

        	// 0: 인사기본정보, 1: 주소, 2: 가족, 3: 학력, 4: 자격, 5: 경력, 6:기타, 7:외국어
        	switch(nTabIdx){
        		case 0:	// 인사기본정보
        			objGrid = this.dxGridBase;
        			objDsList = this.dsBaseList;
        			objDivDetail = this.divData.form.tabData.tab1.form.divBase;
        			break;
        		case 1:	// 주소
        			objGrid = this.dxGridAddr;
        			objDsList = this.dsAddrList;
        			break;
        		case 2:	// 가족
        			objGrid = this.dxGridFmy;
        			objDsList = this.dsFmyList;
        			break;
        		case 3:	// 학력
        			objGrid = this.dxGridSch;
        			objDsList = this.dsSchList;
        			break;
        		case 4:	// 자격
        			objGrid = this.dxGridLic;
        			objDsList = this.dsLicList;
        			break;
        		case 5:	// 경력
        			objGrid = this.dxGridCrr;
        			objDsList = this.dsCrrList;
        			break;
        		case 6:	// 기타
        			objGrid = this.dxGridEtc;
        			objDsList = this.dsEtcList;
        			objDivDetail = this.divData.form.tabData.tab7.form.divEtc;
        			break;
        		case 7:	// 외국어
        			objGrid = this.dxGridOlang;
        			objDsList = this.dsOlangList;
        			break;
        	}
        	var objTarget = {};
        	objTarget.objGrid = objGrid;
        	objTarget.objDsList = objDsList;
        	objTarget.objDivDetail = objDivDetail;
        	return objTarget;
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");		// 법인코드
        	this.dsSelect.addColumn("TY_STATUS", "string");		// 상태

        	// 승인 / 반려
        	this.dsUpdate = new Dataset();
            this.dsUpdate.addColumn("TY_GUBUN","string");		// 요청구분 A :주소 F: 가족  S:학력  L:자격 C:경력
        	this.dsUpdate.addColumn("TY_STATUS","string");		// 결재상태 >> 02 :승인 03:반려
            this.dsUpdate.addColumn("CD_CORP","string");		// 법인코드
        	this.dsUpdate.addColumn("ID_PERSON","bigdecimal");	// 체크된 해당ROW ID_PERSON
        	this.dsUpdate.addColumn("NO_SEQ","bigdecimal");   	// 체크된 해당ROW NO_SEQ
        	this.dsUpdate.addColumn("ID_USER","string"); 		// 로그인ID

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	var nTabIdx = this.divData.form.tabData.tabindex;	// 0: 인사기본정보, 1: 주소, 2: 가족, 3: 학력, 4: 자격, 5: 경력, 6:기타, 7:외국어
        	var sTabNm = this.arrTabNm[nTabIdx];

        	if (!this.fnSelectValid()) return false;

        	var objTarget = this.fnGetTabInfo(nTabIdx);
        	this.gfnGridBeforeSelect(objTarget.objGrid);

        	var objDs = objTarget.objGrid.getBindDataset();

        	objDs.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP" , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "TY_STATUS", this.dsSearch.getColumn(0, "TY_STATUS"));

        	var strSvcId    = "select_"+(nTabIdx+1);
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select" + sTabNm + "=dsSelect";
        	var outData     = objDs.name + "=select" + sTabNm + "0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        // 승인/반려 처리
        this.fnUpdateApproval = function(sTyStatus) {
        	var nTabIdx = this.divData.form.tabData.tabindex; // 0: 인사기본정보, 1: 주소, 2: 가족, 3: 학력, 4: 자격, 5: 경력, 6:기타, 7:외국어
        	var objTarget = this.fnGetTabInfo(nTabIdx);
        	var appType = this.arrAppType[nTabIdx];
        	var nRow = objTarget.objGrid.currentrow;

        	//if (!this.gfnGridValidate(objTarget.objGrid)) return;
        	objTarget.objGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < objTarget.objDsList.rowcount; i++) {
        		var flag = objTarget.objDsList.getColumn(i,"CHK");
        		if(flag == 1){
        			var nrow = this.dsUpdate.addRow();

        			var ID_PERSON = objTarget.objDsList.getColumn(i, "ID_PERSON");
        			var CD_CORP = objTarget.objDsList.getColumn(i, "CD_CORP");
        			var ID_SABUN = objTarget.objDsList.getColumn(i, "ID_SABUN");
        			var NO_SEQ = objTarget.objDsList.getColumn(i, "NO_SEQ");

        			// 요청구분 A :주소 F: 가족  S:학력  L:자격 C:경력
        			this.dsUpdate.setColumn(nrow,"TY_GUBUN", appType);
        			this.dsUpdate.setColumn(nrow,"TY_STATUS", sTyStatus);	// 결재상태 >> 02 :승인 03:반려
        			this.dsUpdate.setColumn(nrow,"CD_CORP", CD_CORP);
        			this.dsUpdate.setColumn(nrow,"ID_PERSON", ID_PERSON);
        			this.dsUpdate.setColumn(nrow,"NO_SEQ", NO_SEQ);
        			this.dsUpdate.setColumn(nrow,"ID_USER", this.AuthClient.ID_USER);
        		}
        	}

          	if (this.dsUpdate.rowcount == 0 ) return;

        	var strSvcId    = "save_"+sTyStatus;
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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
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
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	var nTabIdx = this.divData.form.tabData.tabindex;	// 0: 인사기본정보, 1: 주소, 2: 가족, 3: 학력, 4: 자격, 5: 경력, 6:기타, 7:외국어
        	var objTarget = this.fnGetTabInfo(nTabIdx);
        	var tabObj = this.divData.form.tabData.tabpages[nTabIdx];
        	var sFileName = this.gfnGetArgument("NM_FORM")+"_"+tabObj.text+"_"+this.gfnGetDate();

        	this.gfnExcelExport(objTarget.objGrid,  null, sFileName);
        }

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
         this.fnSelectValid = function() {
            var CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");

        	if (this.gfnIsNull(CD_CORP)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
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
        	var nTabIdx = this.divData.form.tabData.tabindex;	// 0: 인사기본정보, 1: 주소, 2: 가족, 3: 학력, 4: 자격, 5: 경력, 6:기타, 7:외국어
        	var objTarget = this.fnGetTabInfo(nTabIdx);

        	if(svcID.startsWith("select_")){
        		this.gfnGridAfterSelect(objTarget.objGrid);

        		var arrSvcID = svcID.split("_");
        		if(arrSvcID[1] == "1" || arrSvcID[1] == "7"){
        			if(objTarget.objDsList.rowposition == 0){
        				if ( objTarget.objDsList.rowcount > 1) {
        					objTarget.objDsList.set_rowposition(1);
        				}
        			}
        			if(arrSvcID[1] == "1"){
        				this.fnSetSingleFormColor(0); //인사기본정보
        			}else if( arrSvcID[1] == "7"){
        				this.fnSetSingleFormColor(6); //기타
        			}
        		}
        	}
        	else if(svcID.startsWith("save_")){
        		var arrSvcID = svcID.split("_");
        		var msg = "";
        		if(arrSvcID[1] == "02"){
        			msg = "승인되었습니다.";
        		}else{
        			msg = "반려되었습니다.";
        		}

        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        			this.gfnAlert(msg);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "ccfCD_CORP") {// 법인코드
        		;
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id,codeFindData) {
           	if(id == "ccfCD_CORP") {
        		;
        	}
        }

         // 그리드 코드파인드
        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        };

        this.fnGrid_AfterAllCheck = function(obj, cell, check){
            var columnFam = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        // 첨부파일
        this.fnGrid_ExpandUp = function(obj, e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	var objDs = obj.getBindDataset();
        	var nTabIdx = this.divData.form.tabData.tabindex;
        	var aTabDir = ["","ADDRESS", "FAMILY", "SCHOOL", "LICENSE", "CAREER","","LANGUAGE"];	// 기본정보, 주소,가족,학력,자격,경력, 기타, 외국어
        	var sCdDir = "";

        	if(colnm == "NM_FILE") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        		if(this.gfnGetFlag(objDs, e.row) == "I"){
        			this.gfnAlert("저장 후 파일첨부 진행.");
        			return false;
        		}
        		/*
        			주소 >>	ADDRESS	/임직원ID_PERSON / 해당ROW의 NO_SEQ
        			가족 >>	FAMILY	/임직원ID_PERSON / 해당ROW의 NO_SEQ
        			학력 >>	SCHOOL	/임직원ID_PERSON / 해당ROW의 NO_SEQ
        			자격 >>	LICENSE	/임직원ID_PERSON / 해당ROW의 NO_SEQ
        			경력 >>	CAREER	/임직원ID_PERSON / 해당ROW의 NO_SEQ
        		*/

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DA40";
        		//fileManager.CD_DIR = [this.dsList.getColumn(e.row, "CD_OWNER")];
        		fileManager.CD_DIR = [aTabDir[nTabIdx], objDs.getColumn(e.row, "ID_PERSON"), objDs.getColumn(e.row, "NO_SEQ")];
        		fileManager.IS_READONLY = true;

        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        }

        this.fnFileCallback = function(strID, val) {

        	var nTabIdx = this.divData.form.tabData.tabindex;	// 0: 인사기본정보, 1: 주소, 2: 가족, 3: 학력, 4: 자격, 5: 경력, 6:기타, 7:외국어
        	var objTarget = this.fnGetTabInfo(nTabIdx);
        	var objDs = objTarget.objGrid.getBindDataset();


        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 파일개수를 다시 셋팅
        	objDs.set_enableevent(false);
        	if(val.Cnt == 0) {
        		//objDs.setColumn(objDs2.rowposition, "NM_FILE", "첨부");
        	}
        	objDs.setColumn(objDs.rowposition, "NM_FILE", "첨부(" + val.Cnt + ")");
        	objDs.set_enableevent(true);
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);// 폼상태 초기화

        		this.fnDataClear();
        	}
        };

        this.fnDataClear = function(){
        	var nTabIdx = this.divData.form.tabData.tabindex;
        	var objTarget = this.fnGetTabInfo(nTabIdx);

        	this.gfnGridClear(objTarget.objGrid);
        }

        this.divData_tabData_canchange = function(obj,e){
        };

        this.divData_tabData_onchanged = function(obj,e){
        	// 그리드 셋팅
        	this.fnSetGridCellProperty(e.postindex);
        	this.FormBtns.Select.click();
        };

        // 승인
        this.fnApproval = function(obj,e) {

        	var nTabIdx = this.divData.form.tabData.tabindex;
        	var objTarget = this.fnGetTabInfo(nTabIdx);

        	var chkCnt =  objTarget.objDsList.getCaseCount("CHK == 1");
        	if(chkCnt == 0) {
        		this.gfnAlert("승인처리 대상 행을 선택하세요.");
        		return;
        	}
        	this.gfnConfirm("선택한 내역을 승인 하시겠습니까?", "fnConfirmCallback", "Approval");
        }

        // 반려
        this.fnReject = function(obj,e) {

        	var nTabIdx = this.divData.form.tabData.tabindex;
        	var objTarget = this.fnGetTabInfo(nTabIdx);

        	var chkCnt =  objTarget.objDsList.getCaseCount("CHK == 1");
        	if(chkCnt == 0) {
        		this.gfnAlert("반려처리 대상 행을 선택하세요.");
        		return;
        	}

        	this.gfnConfirm("선택한 내역을 반려 하시겠습니까?", "fnConfirmCallback", "Reject");
        }

        this.fnConfirmCallback = function(strId, val) {
        	trace("strId", strId);
        	trace("val", val);

        	if(val) {
        		if(strId == "Approval") {
        			this.fnUpdateApproval("02");	// 승인
        		} else if( strId == "Reject"){
        			this.fnUpdateApproval("03");	// 반려
        		}
        	}
        };

        this.fnSetSingleForm = function(nTabIdx){
        	var objTarget = this.fnGetTabInfo(nTabIdx);	// 0: 인사기본정보, 1: 주소, 2: 가족, 3: 학력, 4: 자격, 5: 경력, 6:기타, 7:외국어
        	var targetDiv = null;

        	if(nTabIdx == 0){ //인사기본정보
        		 targetDiv = objTarget.objDivDetail; //this.divData.form.tabData.tab6.form.divBase;
        	}
        	else if(nTabIdx == 6){ //기타
        		targetDiv = objTarget.objDivDetail;
        	}
        	else{
        		return;
        	}

        	var compArr = targetDiv.form.components;

        	for(var j=0;j<compArr.length; j++){
        		var comp = compArr[j];

        		if(comp instanceof nexacro.Div){
        			if(!this.gfnIsNull(comp.url) && comp.url == "cmm::cmmCodeFind.xfdl"){
        				comp.form.set_readonly(true);
        			}else{
        				comp.set_enable(false);
        			}
        		}else if(comp instanceof nexacro.Grid){
        			;
        		}else if(comp instanceof nexacro.Edit ||
        				 comp instanceof nexacro.MaskEdit ||
        				 comp instanceof nexacro.Calendar ||
        				 comp instanceof nexacro.TextArea  ||
        				 comp instanceof nexacro.Radio
        		){
        			comp.set_readonly(true);
        		}else if(comp instanceof nexacro.Combo ||
        				 comp instanceof nexacro.CheckBox
        		){
        			comp.set_enable(false);
        		}
        	}
        }

        this.divData_tabData_tab1_divSplitter1_ondrag = function(obj,e){
        	e.set_userdata("splitter1");
        	return true;
        };

        this.divData_tabData_tab7_divSplitter7_ondrag = function(obj,e){
        	e.set_userdata("splitter7");
        	return true;
        };

        this.divData_tabData_tab1_ondragmove = function(obj,e){
        	if(e.userdata == "splitter1") {
        		this.divData.form.tabData.tab1.form.divSplitter1.set_left(e.clientx);
        		this.divData.form.tabData.tab1.form.resetScroll();
        	}
        };

        this.divData_tabData_tab7_ondragmove = function(obj,e){
        	if(e.userdata == "splitter7") {
        		this.divData.form.tabData.tab7.form.divSplitter7.set_left(e.clientx);
        		this.divData.form.tabData.tab7.form.resetScroll();
        	}
        };

        this.fnSetSingleFormColor = function(nTabIdx){
        	var objTarget = this.fnGetTabInfo(nTabIdx);	// 0: 인사기본정보, 1: 주소, 2: 가족, 3: 학력, 4: 자격, 5: 경력, 6:기타, 7:외국어
        	var targetDiv = null;

        	if(nTabIdx == 0){ //인사기본정보
        		 targetDiv = objTarget.objDivDetail; //this.divData.form.tabData.tab6.form.divBase;
        	}
        	else if(nTabIdx == 6){ //기타
        		targetDiv = objTarget.objDivDetail;
        	}
        	else{
        		return;
        	}

        	try {
        		var compArr = targetDiv.form.components;

        		for(var j=0;j<compArr.length; j++){
        			var comp = compArr[j];

        			if(comp instanceof nexacro.Static
        				|| comp instanceof nexacro.Grid){
        				continue;
        			}
        			var compNmAsk = comp.name;
        			if(compNmAsk.length <= 4) continue;
        			if(this.gfnRight(compNmAsk, 4) != "_ASK") continue;

        			var compNmOld = this.gfnLeft(compNmAsk, compNmAsk.length - 4);
        			compNmOld = compNmOld + "_OLD";

        			if(comp instanceof nexacro.Div){
        				if(!this.gfnIsNull(comp.url)){
        					if(comp.url == "cmm::cmmCodeFind.xfdl"){
        						var oldVal = "";
        						var askVal = "";
        						try{
        							askVal = compArr[compNmAsk].form.CDTextBox.value;
        						}catch(err){continue;}

        						try{
        							oldVal = compArr[compNmOld].form.CDTextBox.value;
        						}catch(err){continue;}

        						if(oldVal == askVal){
        							compArr[compNmAsk].form.CDTextBox.set_background("");
        							compArr[compNmAsk].form.DSTextBox.set_background("");

        							compArr[compNmAsk].form.CDTextBox.set_color("");
        							compArr[compNmAsk].form.DSTextBox.set_color("");
        						}else{
        							compArr[compNmAsk].form.CDTextBox.set_background(this.fv_BG_COLOR);
        							compArr[compNmAsk].form.DSTextBox.set_background(this.fv_BG_COLOR);

        							compArr[compNmAsk].form.CDTextBox.set_color(this.fv_FONT_COLOR);
        							compArr[compNmAsk].form.DSTextBox.set_color(this.fv_FONT_COLOR);
        						}
        					}
        				}

        			}else if(comp instanceof nexacro.Edit ||
        					 comp instanceof nexacro.MaskEdit ||
        					 comp instanceof nexacro.Calendar ||
        					 comp instanceof nexacro.TextArea ||
        					 comp instanceof nexacro.Combo ||
        					 comp instanceof nexacro.CheckBox ||
        					 comp instanceof nexacro.Radio){


        				var oldVal = "";
        				var askVal = "";
        				try{
        					askVal = compArr[compNmAsk].value;
        				}catch(err){continue;}

        				try{
        					oldVal = compArr[compNmOld].value;
        				}catch(err){continue;}

        				if(oldVal == askVal){
        					compArr[compNmAsk].set_background("");
        					compArr[compNmAsk].set_color("");
        				}else{
        					compArr[compNmAsk].set_background(this.fv_BG_COLOR);
        					compArr[compNmAsk].set_color(this.fv_FONT_COLOR);
        				}
        			}
        		}

        	}catch(e){
        		trace("e.name>>", e.name);
        		trace("e.message>>", e.message);
        		trace("e.stack>>", e.stack);
        	}

        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.addEventHandler("canchange",this.divData_tabData_canchange,this);
            this.divData.form.tabData.tab1.addEventHandler("ondragmove",this.divData_tabData_tab1_ondragmove,this);
            this.divData.form.tabData.tab1.form.divSplitter1.addEventHandler("ondrag",this.divData_tabData_tab1_divSplitter1_ondrag,this);
            this.divData.form.tabData.tab1.form.divBase.form.rdoYN_SUPPORTED_OLD.addEventHandler("onitemchanged",this.divData_tabData_tab1_rdoYN_SUPPORTED_onitemchanged,this);
            this.divData.form.tabData.tab1.form.divBase.form.rdoYN_HANDICAP_OLD.addEventHandler("onitemchanged",this.divData_tabData_tab1_rdoYN_HANDICAP_onitemchanged,this);
            this.divData.form.tabData.tab1.form.divBase.form.txtID_RESIDENT_OLD.addEventHandler("onchanged",this.divData_tabData_tab1_txtID_RESIDENT_onchanged,this);
            this.divData.form.tabData.tab1.form.divBase.form.rdoYN_FOREIGNER_OLD.addEventHandler("onitemchanged",this.divData_tabData_tab1_rdoYN_FOREIGNER_onitemchanged,this);
            this.divData.form.tabData.tab1.form.divBase.form.rdoYN_MARRIAGE_OLD.addEventHandler("onitemchanged",this.divData_tabData_tab1_rdoYN_MARRIAGE_onitemchanged,this);
            this.divData.form.tabData.tab1.form.divBase.form.rdoYN_SUPPORTED_ASK.addEventHandler("onitemchanged",this.divData_tabData_tab1_rdoYN_SUPPORTED_onitemchanged,this);
            this.divData.form.tabData.tab1.form.divBase.form.rdoYN_HANDICAP_ASK.addEventHandler("onitemchanged",this.divData_tabData_tab1_rdoYN_HANDICAP_onitemchanged,this);
            this.divData.form.tabData.tab1.form.divBase.form.txtID_RESIDENT_ASK.addEventHandler("onchanged",this.divData_tabData_tab1_txtID_RESIDENT_onchanged,this);
            this.divData.form.tabData.tab1.form.divBase.form.rdoYN_FOREIGNER_ASK.addEventHandler("onitemchanged",this.divData_tabData_tab1_rdoYN_FOREIGNER_onitemchanged,this);
            this.divData.form.tabData.tab1.form.divBase.form.rdoYN_MARRIAGE_ASK.addEventHandler("onitemchanged",this.divData_tabData_tab1_rdoYN_MARRIAGE_onitemchanged,this);
            this.divData.form.tabData.tab7.addEventHandler("ondragmove",this.divData_tabData_tab7_ondragmove,this);
            this.divData.form.tabData.tab7.form.divSplitter7.addEventHandler("ondrag",this.divData_tabData_tab7_divSplitter7_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_PERSONAL_INFO2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
