(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAV_YEAREND");
            this.set_titletext("정산결과조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_CURPAYSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CURBONUSSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CURINBONUSSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CURSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREBONUSSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREINBONUSSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRESUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LABORINCOME\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LABORINCSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_NETLABORINCOME\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CURNTAXSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MONTHLYPAY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SELF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_WIFE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CHILDPARENT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_OLD\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HANDICAP\" type=\"STRING\" size=\"256\"/><Column id=\"AM_WOMAN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BABY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SMALL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HUMANSUBSTSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ANNUITY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INSURE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HOSPITALSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_EDU\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HOUSE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GIVESUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ETCSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PENSION\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INVEST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CARDSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_WOORISAJU\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LONGSTOCK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SPECIALSUBSTSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ETCSUBSTSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_STDTAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CALCTAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TAXLAWREDUCTION\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TAXREDUCTION\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TAXREDUCTIONSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LABORINCTAXSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TAXSOCIETYSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HOUSEFUNDSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_POLITYSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TAXSUBSTSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FIXEDINCOMETAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FIXEDRESIDENTTAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FIXEDAGRTAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TAXSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INCTAXBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RESTAXBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_AGRTAXBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TAXBEFSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREINCTAXBEFSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRERESTAXBEFSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREAGRTAXBEFSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRETAXBEFSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEDCOLLECTINCTAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEDCOLLECTRESTAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEDCOLLECTAGRTAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEDCOLLECTTAXSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ADDCHILD\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ONEPARENTS\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HOUSE2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LONGHAPSTOCKSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SPECIALLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CHILDTAXSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PENTAXSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INSURETAXSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MEDITAXSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_EDUTAXSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GIVETAXSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_STDTAXSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MONTHTAXSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BABYTAXSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BORNTAXSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HANDITAXSUBST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEDCOLLECTINCTAX_OLD\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEDCOLLECTRESTAX_OLD\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEDCOLLECTAGRTAX_OLD\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEDCOLLECTTAXSUM_OLD\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEDCOLLECTINCTAX_ADDRETURN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEDCOLLECTRESTAX_ADDRETURN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEDCOLLECTAGRTAX_ADDRETURN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEDCOLLECTTAXSUM_ADDRETURN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListBaseSubst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListPreCompany", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_COMPANY1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPANY1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAXOFFICE1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE1PAYSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE1BONUSSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE1HEALTHBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE1HIREBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE1ANNUITYBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE1INCTAXBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE1RESTAXBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE1AGRTAXBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RETIRE1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE1INBONUSSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_OVERSEASNTAX1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_NIGHTWORKNTAX1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BIRTH1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FOREIGNERNTAX1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ETCNTAX1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE1NTAXSUM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COMPANY2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPANY2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAXOFFICE2\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN2\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE2PAYSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE2BONUSSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE2HEALTHBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE2HIREBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE2ANNUITYBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE2INCTAXBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE2RESTAXBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE2AGRTAXBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RETIRE2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE2INBONUSSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_OVERSEASNTAX2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_NIGHTWORKNTAX2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BIRTH2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FOREIGNERNTAX2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ETCNTAX2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE2NTAXSUM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COMPANY3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPANY3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAXOFFICE3\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN3\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE3\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE3PAYSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE3BONUSSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE3HEALTHBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE3HIREBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE3ANNUITYBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE3INCTAXBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE3RESTAXBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE3AGRTAXBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RETIRE3\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE3INBONUSSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_OVERSEASNTAX3\" type=\"STRING\" size=\"256\"/><Column id=\"AM_NIGHTWORKNTAX3\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BIRTH3\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FOREIGNERNTAX3\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ETCNTAX3\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE3NTAXSUM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COMPANY4\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPANY4\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAXOFFICE4\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN4\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE4\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE4PAYSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE4BONUSSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE4HEALTHBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE4HIREBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE4ANNUITYBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE4INCTAXBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE4RESTAXBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE4AGRTAXBEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RETIRE4\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE4INBONUSSUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_OVERSEASNTAX4\" type=\"STRING\" size=\"256\"/><Column id=\"AM_NIGHTWORKNTAX4\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BIRTH4\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FOREIGNERNTAX4\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ETCNTAX4\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE4NTAXSUM\" type=\"STRING\" size=\"256\"/><Column id=\"QN_PRECOMP\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PRE1TAXRDT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PRE2TAXRDT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PRE3TAXRDT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PRE4TAXRDT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE1TAXREDUCTIONINCOMESUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE2TAXREDUCTIONINCOMESUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE3TAXREDUCTIONINCOMESUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE4TAXREDUCTIONINCOMESUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAVPR_YEARENDRESULT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAVPR_YEARENDRESULT_UPDATE</Col></Row><Row><Col id=\"TARGET\">selectEtc</Col><Col id=\"SP\">DAVPR_ETCSUBST_SELECT</Col></Row><Row><Col id=\"TARGET\">selectBase</Col><Col id=\"SP\">DAVPR_BASESUBST_SELECT</Col></Row><Row><Col id=\"TARGET\">selectPreCompany</Col><Col id=\"SP\">DAVPR_PRECOMPANY_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"110.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYN_MID","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_MID","staYN_MID:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var divSearch_form_cboYN_MID_innerdataset = new nexacro.NormalDataset("divSearch_form_cboYN_MID_innerdataset", obj);
            divSearch_form_cboYN_MID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">연말정산</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">중도정산</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboYN_MID_innerdataset);
            obj.set_text("연말정산");
            obj.set_value("N");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staWORK_BASE","cboYN_MID:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("적용년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclWORK_BASE","staWORK_BASE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_enableevent("true");
            obj.set_async("false");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclWORK_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","0.0","staYN_MID:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("구분");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","staTY_GUBUN:0.0","cboYN_MID:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divSearch_form_rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoTY_GUBUN_innerdataset", obj);
            divSearch_form_rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">임직원</Col><Col id=\"codecolumn\">E</Col></Row><Row><Col id=\"codecolumn\">T</Col><Col id=\"datacolumn\">노무자</Col></Row><Row><Col id=\"codecolumn\">T</Col><Col id=\"datacolumn\">일용직</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoTY_GUBUN_innerdataset);
            obj.set_text("임직원");
            obj.set_value("E");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_RESIDENT","staID_SABUN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFYEAREND");
            obj.getSetter("CDTextWidth").set("125");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_SABUN","ccfID_RESIDENT:0.0","10.0","71","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNO_APPLY","edtID_SABUN:0.0","10.0","79","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("정산결과");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTITLE","19","10","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_text("소득사항");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY3","19","45","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY00","19","74","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_text("현근무지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00","138","74","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY01","19","103","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj.set_text("전근무지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","138","103","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY02","138","45","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_text("급여");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02","277","74","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta03","277","103","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY03","277","45","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            obj.set_text("상여");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04","416","74","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta05","416","103","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY04","416","45","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            obj.set_text("인정상여");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06","555","74","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta07","555","103","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY05","555","45","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            obj.set_text("합계");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY06","694","45","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_text("근로소득수입금액");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY07","694","74","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("17");
            obj.set_text("근로소득공제액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta08","813","74","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY08","694","103","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("19");
            obj.set_text("근로소득금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta09","813","103","398","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY09","813","45","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("21");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY10","952","45","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_text("비과세소득");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY11","952","74","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("23");
            obj.set_text("최종월급여액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta10","1071","74","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY13","1071","45","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("25");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTITLE00","19","140","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("26");
            obj.set_text("소득공제사항");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY12","19","174","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("27");
            obj.set_text("본인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta11","138","174","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY14","277","174","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("29");
            obj.set_text("한부모");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta12","396","174","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY15","535","174","160","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("31");
            obj.set_text("특별소득공제계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta13","694","174","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY16","833","174","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("33");
            obj.set_text("우리사주조합공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta14","1022","174","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY17","19","203","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("35");
            obj.set_text("배우자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta15","138","203","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY18","277","203","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("37");
            obj.set_text("인적공제계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta16","396","203","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY19","535","203","160","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("39");
            obj.set_text("개인연금저축");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta17","694","203","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY20","833","203","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("41");
            obj.set_text("목돈안드는전세이자상환액공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta18","1022","203","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY21","19","232","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("43");
            obj.set_text("부양가족");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta19","138","232","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY22","277","232","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("45");
            obj.set_text("국민연금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta20","396","232","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY23","535","232","160","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("47");
            obj.set_text("소기업소상공인 공제부금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta21","694","232","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY24","833","232","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("49");
            obj.set_text("장기집합투자공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta22","1022","232","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY25","19","261","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("51");
            obj.set_text("경로우대");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta23","138","261","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY26","277","261","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("53");
            obj.set_text("보험료(건강,고용)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta24","396","261","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY27","535","261","160","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("55");
            obj.set_text("주택마련저축공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta25","694","261","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY28","833","261","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("57");
            obj.set_text("그밖의소득공제계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta26","1022","261","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY29","19","290","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("59");
            obj.set_text("장애자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta27","138","290","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY30","277","290","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("61");
            obj.set_text("주택자금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta28","396","290","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY31","535","290","160","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("63");
            obj.set_text("투자조합출자공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta29","694","290","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY32","833","290","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("65");
            obj.set_text("소득공제종합한도초과액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta30","1022","290","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY33","19","319","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("67");
            obj.set_text("부녀자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta31","138","319","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY34","277","319","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("69");
            obj.set_text("기부금(이월분)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta32","396","319","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY35","535","319","160","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("71");
            obj.set_text("신용카드공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta33","694","319","468","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTITLE01","19","360","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_text("세액정산");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY36","19","394","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("74");
            obj.set_text("과세표준액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta34","138","394","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY37","277","394","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("76");
            obj.set_text("일반보험세액공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta35","396","394","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY38","542","394","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY39","542","423","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("79");
            obj.set_text("결정세액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta36","661","423","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY40","542","452","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("81");
            obj.set_text("현근무지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta37","661","452","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY41","661","394","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_text("소득세");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta38","800","423","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta39","800","452","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY42","800","394","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            obj.set_text("주민세");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta40","939","423","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta41","939","452","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY43","939","394","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            obj.set_text("농특세");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta42","1078","423","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta43","1078","452","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY44","1078","394","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            obj.set_text("합계");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY45","19","423","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("93");
            obj.set_text("산출세액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta44","138","423","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY46","277","423","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("95");
            obj.set_text("장애인보험세액공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta45","396","423","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY47","19","452","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("97");
            obj.set_text("세액감면-소득세법");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta46","138","452","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY48","277","452","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("99");
            obj.set_text("의료비세액공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta47","396","452","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY49","19","481","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("101");
            obj.set_text("조세특례제한법");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta48","138","481","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY50","277","481","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("103");
            obj.set_text("교육비세액공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta49","396","481","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY51","19","510","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("105");
            obj.set_text("세액감면계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta50","138","510","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY52","277","510","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("107");
            obj.set_text("기부금세액공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta51","396","510","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY53","19","539","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("109");
            obj.set_text("근로소득세액공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta52","138","539","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY54","277","539","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("111");
            obj.set_text("표준세액공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta53","396","539","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY55","19","568","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("113");
            obj.set_text("자녀세액공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta54","138","568","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY56","277","568","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("115");
            obj.set_text("주택차입금이자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta55","396","568","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY57","19","597","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("117");
            obj.set_text("6세이하세액공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta56","138","597","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY58","277","597","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("119");
            obj.set_text("월세세액공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta57","396","597","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY59","19","626","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("121");
            obj.set_text("출산입양세액공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta58","138","626","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY60","277","626","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("123");
            obj.set_text("세액공제계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta59","396","626","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY61","19","655","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("125");
            obj.set_text("연금계좌세액공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta60","138","655","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY62","542","481","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("127");
            obj.set_text("전근무지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta61","661","481","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY63","542","510","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("129");
            obj.set_text("차감징수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta62","661","510","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("130");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta63","800","481","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta64","800","510","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("132");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta65","939","481","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta66","939","510","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("134");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta67","1078","481","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta68","1078","510","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_CURPAYSUM","143","79","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("137");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PREPAYSUM","143","109","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("138");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_CURBONUSSUM","282","79","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("139");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PREBONUSSUM","282","109","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("140");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_CURINBONUSSUM","421","79","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("141");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PREINBONUSSUM","421","109","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("142");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_CURSUM","560","79","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("143");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRESUM","560","109","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("144");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_LABORINCOME","818","50","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("145");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_LABORINCSUBST","818","79","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("146");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_NETLABORINCOME","818","108","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("147");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_CURNTAXSUM","1076","50","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("148");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_MONTHLYPAY","1076","79","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("149");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_SELF","143","179","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("150");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_WIFE","143","208","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("151");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_CHILDPARENT","143","237","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("152");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_OLD","143","266","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("153");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_HANDICAP","143","295","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("154");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_WOMAN","143","324","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("155");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ONEPARENTS","401","179","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("156");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_HUMANSUBSTSUM","401","208","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("157");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ANNUITY","401","237","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("158");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_INSURE","401","266","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("159");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_HOUSE","401","295","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("160");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_GIVESUBST","401","324","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("161");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_CARDSUBST","699","324","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("162");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_INVEST","699","295","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("163");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_HOUSE2","699","266","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("164");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST","699","237","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("165");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PENSION","699","208","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("166");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_SPECIALSUBSTSUM","699","179","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("167");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_WOORISAJU","1028","179","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("168");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_LONGSTOCK","1028","208","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("169");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_LONGHAPSTOCKSUBST","1028","237","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("170");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBSTSUM","1028","266","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("171");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_SPECIALlIMIT","1028","295","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("172");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_STDTAX","143","399","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("173");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_CALCTAX","143","428","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("174");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TAXLAWREDUCTION","143","457","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("175");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TAXREDUCTION","143","486","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("176");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TAXREDUCTIONSUM","143","515","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("177");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_LABORINCTAXSUBST","143","544","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("178");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_CHILDTAXSUBST","143","573","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("179");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_BABYTAXSUBST","143","602","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("180");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_BORNTAXSUBST","143","631","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("181");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PENTAXSUBST","143","660","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("182");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_INSURETAXSUBST","401","399","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("183");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_HANDITAXSUBST","401","428","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("184");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_MEDITAXSUBST","401","457","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("185");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_EDUTAXSUBST","401","486","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("186");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_GIVETAXSUBST","401","515","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("187");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_STDTAXSUBST","401","544","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("188");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_HOUSEFUNDSUBST","401","573","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("189");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_MONTHTAXSUBST","401","602","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("190");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TAXSUBSTSUM","401","631","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("191");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_FIXEDINCOMETAX","666","428","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("192");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_INCTAXBEF","666","457","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("193");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PREINCTAXBEFSUM","666","486","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("194");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_DEDCOLLECTINCTAX","666","515","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("195");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_FIXEDRESIDENTTAX","805","428","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("196");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_RESTAXBEF","805","457","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("197");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRERESTAXBEFSUM","805","486","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("198");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_DEDCOLLECTRESTAX","805","515","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("199");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_FIXEDAGRTAX","944","428","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("200");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_AGRTAXBEF","944","457","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("201");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PREAGRTAXBEFSUM","944","486","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("202");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_DEDCOLLECTAGRTAX","944","515","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("203");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TAXSUM","1083","428","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("204");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TAXBEFSUM","1083","457","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("205");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRETAXBEFSUM","1083","486","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("206");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_DEDCOLLECTTAXSUM","1083","515","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("207");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("기본공제내역");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","40",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","10","10","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("세대주여부");
            obj.set_rtl("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Radio("rdoYN_HOUSEHOLDER","staTY_GUBUN:10","10","120","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var divData_form_tabData_tab2_form_rdoYN_HOUSEHOLDER_innerdataset = new nexacro.NormalDataset("divData_form_tabData_tab2_form_rdoYN_HOUSEHOLDER_innerdataset", obj);
            divData_form_tabData_tab2_form_rdoYN_HOUSEHOLDER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">세대주</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">세대원</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_tabData_tab2_form_rdoYN_HOUSEHOLDER_innerdataset);
            obj.set_text("세대주");
            obj.set_index("0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN00","rdoYN_HOUSEHOLDER:20","10","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("3");
            obj.set_text("인적공제항목 변동여부");
            obj.set_rtl("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Radio("rdoYN_CHANGE","staTY_GUBUN00:10","10","180","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var divData_form_tabData_tab2_form_rdoYN_CHANGE_innerdataset = new nexacro.NormalDataset("divData_form_tabData_tab2_form_rdoYN_CHANGE_innerdataset", obj);
            divData_form_tabData_tab2_form_rdoYN_CHANGE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전년과동일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">변동</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_tabData_tab2_form_rdoYN_CHANGE_innerdataset);
            obj.set_text("전년과동일");
            obj.set_index("0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("전근무지내역");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTITLE","19","10","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj.set_text("전근무지1");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY3","19","45","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta02","138","45","408","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtCD_COMPANY1","142","50","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY00","19","74","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("4");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta00","138","74","408","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtDS_COMPANY1","142","79","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY01","19","103","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("7");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta03","138","103","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY01","287","103","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("9");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta04","396","103","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY02","19","132","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("11");
            obj.set_text("급여합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta01","138","132","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY00","287","132","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("13");
            obj.set_text("기납건강보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta05","396","132","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtAM_PRE1PAYSUM","142","137","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY03","19","161","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("16");
            obj.set_text("상여합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta06","138","161","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY02","287","161","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("18");
            obj.set_text("기납고용보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta07","396","161","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtAM_PRE1BONUSSUM","142","166","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY04","19","190","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("21");
            obj.set_text("인정상여");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta08","138","190","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY03","287","190","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("23");
            obj.set_text("기납연금보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta09","396","190","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtAM_PRE1INBONUSSUM","142","195","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta10","19","219","269","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY04","287","219","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("27");
            obj.set_text("기납소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta11","396","219","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY06","19","248","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("29");
            obj.set_text("국외근로");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta12","138","248","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY05","287","248","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("31");
            obj.set_text("기납주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta13","396","248","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY07","19","277","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("33");
            obj.set_text("야간근로수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta14","138","277","408","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY08","19","306","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("35");
            obj.set_text("출산.보육수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta16","138","306","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY07","287","306","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("37");
            obj.set_text("그밖의비과세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta17","396","306","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY09","19","335","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("39");
            obj.set_text("외국인근로자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta18","138","335","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY08","287","335","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("41");
            obj.set_text("비과세합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta19","396","335","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY10","19","364","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("43");
            obj.set_text("세액감면비율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta20","138","364","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY09","287","364","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("45");
            obj.set_text("감면소득합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta21","396","364","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staTITLE00","599","10","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("47");
            obj.set_text("전근무지2");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staTITLE01","19","410","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("48");
            obj.set_text("전근무지3");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staTITLE02","599","410","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("49");
            obj.set_text("전근무지4");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1HEALTHBEF","400","137","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("50");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1HIREBEF","400","166","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1ANNUITYBEF","400","195","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("52");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1INCTAXBEF","400","224","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("53");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1RESTAXBEF","400","253","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCNTAX1","400","311","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("55");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1NTAXSUM","400","340","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("56");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1TAXREDUCTIONINCOMESUM","400","369","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("57");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_OVERSEASNTAX1","143","253","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_NIGHTWORKNTAX1","143","282","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("59");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_BIRTH1","143","311","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("60");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_FOREIGNERNTAX1","143","340","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("61");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtRT_PRE1TAXRDT","143","369","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("62");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY05","599","45","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("63");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta15","718","45","408","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtCD_COMPANY2","722","50","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("65");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY11","599","74","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("66");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta22","718","74","408","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtDS_COMPANY2","722","79","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("68");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY12","599","103","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("69");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta23","718","103","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY06","867","103","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("71");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta24","976","103","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY13","599","132","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("73");
            obj.set_text("급여합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta25","718","132","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY10","867","132","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("75");
            obj.set_text("기납건강보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta26","976","132","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtAM_PRE1PAYSUM2","722","137","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("77");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY14","599","161","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("78");
            obj.set_text("상여합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta27","718","161","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY11","867","161","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("80");
            obj.set_text("기납고용보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta28","976","161","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtAM_PRE1BONUSSUM2","722","166","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("82");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY15","599","190","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("83");
            obj.set_text("인정상여");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta29","718","190","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY12","867","190","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("85");
            obj.set_text("기납연금보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta30","976","190","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtAM_PRE1INBONUSSUM2","722","195","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("87");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta31","599","219","269","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY13","867","219","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("89");
            obj.set_text("기납소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta32","976","219","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY16","599","248","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("91");
            obj.set_text("국외근로");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta33","718","248","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY14","867","248","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("93");
            obj.set_text("기납주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta34","976","248","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY17","599","277","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("95");
            obj.set_text("야간근로수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta35","718","277","408","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY18","599","306","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("97");
            obj.set_text("출산.보육수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta36","718","306","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY15","867","306","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("99");
            obj.set_text("그밖의비과세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta37","976","306","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY19","599","335","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("101");
            obj.set_text("외국인근로자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta38","718","335","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY16","867","335","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("103");
            obj.set_text("비과세합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta39","976","335","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY20","599","364","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("105");
            obj.set_text("세액감면비율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta40","718","364","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY17","867","364","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("107");
            obj.set_text("감면소득합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta41","976","364","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1HEALTHBEF2","980","137","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("109");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1HIREBEF2","980","166","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("110");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1ANNUITYBEF2","980","195","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("111");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1INCTAXBEF2","980","224","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("112");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1RESTAXBEF2","980","253","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("113");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCNTAX2","980","311","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("114");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1NTAXSUM2","980","340","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("115");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1TAXREDUCTIONINCOMESUM2","980","369","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("116");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_OVERSEASNTAX2","723","253","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("117");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_NIGHTWORKNTAX2","723","282","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("118");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_BIRTH2","723","311","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("119");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_FOREIGNERNTAX2","723","340","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("120");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtRT_PRE1TAXRDT2","723","369","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("121");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY21","19","445","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("122");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta42","138","445","408","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtCD_COMPANY3","142","450","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("124");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY22","19","474","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("125");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta43","138","474","408","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtDS_COMPANY3","142","479","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("127");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY23","19","503","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("128");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta44","138","503","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY18","287","503","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("130");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta45","396","503","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY24","19","532","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("132");
            obj.set_text("급여합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta46","138","532","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY19","287","532","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("134");
            obj.set_text("기납건강보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta47","396","532","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtAM_PRE1PAYSUM3","142","537","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("136");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY25","19","561","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("137");
            obj.set_text("상여합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta48","138","561","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY20","287","561","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("139");
            obj.set_text("기납고용보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta49","396","561","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtAM_PRE1BONUSSUM3","142","566","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("141");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY26","19","590","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("142");
            obj.set_text("인정상여");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta50","138","590","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("143");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY21","287","590","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("144");
            obj.set_text("기납연금보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta51","396","590","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("145");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtAM_PRE1INBONUSSUM3","142","595","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("146");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta52","19","619","269","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY22","287","619","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("148");
            obj.set_text("기납소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta53","396","619","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("149");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY27","19","648","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("150");
            obj.set_text("국외근로");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta54","138","648","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("151");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY23","287","648","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("152");
            obj.set_text("기납주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta55","396","648","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY28","19","677","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("154");
            obj.set_text("야간근로수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta56","138","677","408","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("155");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY29","19","706","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("156");
            obj.set_text("출산.보육수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta57","138","706","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("157");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY24","287","706","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("158");
            obj.set_text("그밖의비과세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta58","396","706","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("159");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY30","19","735","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("160");
            obj.set_text("외국인근로자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta59","138","735","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("161");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY25","287","735","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("162");
            obj.set_text("비과세합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta60","396","735","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("163");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY31","19","764","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("164");
            obj.set_text("세액감면비율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta61","138","764","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("165");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY26","287","764","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("166");
            obj.set_text("감면소득합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta62","396","764","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("167");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1HEALTHBEF3","400","537","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("168");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1HIREBEF3","400","566","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("169");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1ANNUITYBEF3","400","595","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("170");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1INCTAXBEF3","400","624","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("171");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1RESTAXBEF3","400","653","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("172");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCNTAX3","400","711","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("173");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1NTAXSUM3","400","740","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("174");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1TAXREDUCTIONINCOMESUM3","400","769","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("175");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_OVERSEASNTAX3","143","653","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("176");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_NIGHTWORKNTAX3","143","682","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("177");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_BIRTH3","143","711","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("178");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_FOREIGNERNTAX3","143","740","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("179");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtRT_PRE1TAXRDT3","143","769","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("180");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY32","599","445","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("181");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta63","718","445","408","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("182");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtCD_COMPANY4","722","450","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("183");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY33","599","474","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("184");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta64","718","474","408","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("185");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtDS_COMPANY4","722","479","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("186");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY34","599","503","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("187");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta65","718","503","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("188");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY27","867","503","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("189");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta66","976","503","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("190");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY35","599","532","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("191");
            obj.set_text("급여합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta67","718","532","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("192");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY28","867","532","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("193");
            obj.set_text("기납건강보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta68","976","532","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("194");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtAM_PRE1PAYSUM4","722","537","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("195");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY36","599","561","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("196");
            obj.set_text("상여합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta69","718","561","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("197");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY29","867","561","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("198");
            obj.set_text("기납고용보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta70","976","561","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("199");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtAM_PRE1BONUSSUM4","722","566","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("200");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY37","599","590","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("201");
            obj.set_text("인정상여");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta71","718","590","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("202");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY30","867","590","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("203");
            obj.set_text("기납연금보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta72","976","590","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("204");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtAM_PRE1INBONUSSUM4","722","595","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("205");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta73","599","619","269","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("206");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY31","867","619","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("207");
            obj.set_text("기납소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta74","976","619","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("208");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY38","599","648","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("209");
            obj.set_text("국외근로");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta75","718","648","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("210");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY32","867","648","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("211");
            obj.set_text("기납주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta76","976","648","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("212");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY39","599","677","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("213");
            obj.set_text("야간근로수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta77","718","677","408","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("214");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY40","599","706","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("215");
            obj.set_text("출산.보육수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta78","718","706","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("216");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY33","867","706","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("217");
            obj.set_text("그밖의비과세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta79","976","706","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("218");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY41","599","735","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("219");
            obj.set_text("외국인근로자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta80","718","735","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("220");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY34","867","735","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("221");
            obj.set_text("비과세합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta81","976","735","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("222");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY42","599","764","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("223");
            obj.set_text("세액감면비율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta82","718","764","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("224");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY35","867","764","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("225");
            obj.set_text("감면소득합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta83","976","764","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("226");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1HEALTHBEF4","980","537","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("227");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1HIREBEF4","980","566","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("228");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1ANNUITYBEF4","980","595","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("229");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1INCTAXBEF4","980","624","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("230");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1RESTAXBEF4","980","653","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("231");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCNTAX4","980","711","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("232");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1NTAXSUM4","980","740","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("233");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PRE1TAXREDUCTIONINCOMESUM4","980","769","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("234");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_OVERSEASNTAX4","723","653","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("235");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_NIGHTWORKNTAX4","723","682","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("236");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_BIRTH4","723","711","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("237");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_FOREIGNERNTAX4","723","740","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("238");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtRT_PRE1TAXRDT4","723","769","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("239");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Calendar("calDT_JOIN1","142","108","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("240");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Calendar("calDT_RETIRE1","400","108","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("241");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Calendar("calDT_JOIN2","722","108","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("242");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Calendar("calDT_RETIRE2","980","108","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("243");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Calendar("calDT_JOIN3","142","508","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("244");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Calendar("calDT_RETIRE3","400","508","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("245");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Calendar("calDT_JOIN4","722","508","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("246");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Calendar("calDT_RETIRE4","980","508","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("247");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.tabData.tab1.form.edtAM_CURPAYSUM","value","dsList","AM_CURPAYSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.tabData.tab1.form.edtAM_CURBONUSSUM","value","dsList","AM_CURBONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tabData.tab1.form.edtAM_CURINBONUSSUM","value","dsList","AM_CURINBONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tabData.tab1.form.edtAM_CURSUM","value","dsList","AM_CURSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tabData.tab1.form.edtAM_PREPAYSUM","value","dsList","AM_PREPAYSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tabData.tab1.form.edtAM_PREBONUSSUM","value","dsList","AM_PREBONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab1.form.edtAM_PREINBONUSSUM","value","dsList","AM_PREINBONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab1.form.edtAM_PRESUM","value","dsList","AM_PRESUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab1.form.edtAM_LABORINCOME","value","dsList","AM_LABORINCOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab1.form.edtAM_LABORINCSUBST","value","dsList","AM_LABORINCSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab1.form.edtAM_NETLABORINCOME","value","dsList","AM_NETLABORINCOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab1.form.edtAM_CURNTAXSUM","value","dsList","AM_CURNTAXSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab1.form.edtAM_MONTHLYPAY","value","dsList","AM_MONTHLYPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tabData.tab1.form.edtAM_SELF","value","dsList","AM_SELF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tabData.tab1.form.edtAM_WIFE","value","dsList","AM_WIFE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab1.form.edtAM_CHILDPARENT","value","dsList","AM_CHILDPARENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.tabData.tab1.form.edtAM_OLD","value","dsList","AM_OLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tabData.tab1.form.edtAM_HANDICAP","value","dsList","AM_HANDICAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tabData.tab1.form.edtAM_WOMAN","value","dsList","AM_WOMAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.tabData.tab1.form.edtAM_HUMANSUBSTSUM","value","dsList","AM_HUMANSUBSTSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.tabData.tab1.form.edtAM_ANNUITY","value","dsList","AM_ANNUITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.tabData.tab1.form.edtAM_INSURE","value","dsList","AM_INSURE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.tabData.tab1.form.edtAM_HOUSE","value","dsList","AM_HOUSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.tabData.tab1.form.edtAM_GIVESUBST","value","dsList","AM_GIVESUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.tabData.tab1.form.edtAM_SPECIALSUBSTSUM","value","dsList","AM_SPECIALSUBSTSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tabData.tab1.form.edtAM_PENSION","value","dsList","AM_PENSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tabData.tab1.form.edtAM_ETCSUBST","value","dsList","AM_ETCSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tabData.tab1.form.edtAM_HOUSE2","value","dsList","AM_HOUSE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.tabData.tab1.form.edtAM_INVEST","value","dsList","AM_INVEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.tabData.tab1.form.edtAM_CARDSUBST","value","dsList","AM_CARDSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.tabData.tab1.form.edtAM_WOORISAJU","value","dsList","AM_WOORISAJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab1.form.edtAM_LONGSTOCK","value","dsList","AM_LONGSTOCK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab1.form.edtAM_LONGHAPSTOCKSUBST","value","dsList","AM_LONGHAPSTOCKSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab1.form.edtAM_ETCSUBSTSUM","value","dsList","AM_ETCSUBSTSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab1.form.edtAM_SPECIALlIMIT","value","dsList","AM_SPECIALLIMIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.tabData.tab1.form.edtAM_STDTAX","value","dsList","AM_STDTAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.tabData.tab1.form.edtAM_CALCTAX","value","dsList","AM_CALCTAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab1.form.edtAM_TAXLAWREDUCTION","value","dsList","AM_TAXLAWREDUCTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.tabData.tab1.form.edtAM_TAXREDUCTION","value","dsList","AM_TAXREDUCTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.tabData.tab1.form.edtAM_TAXREDUCTIONSUM","value","dsList","AM_TAXREDUCTIONSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.tabData.tab1.form.edtAM_LABORINCTAXSUBST","value","dsList","AM_LABORINCTAXSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.tabData.tab1.form.edtAM_CHILDTAXSUBST","value","dsList","AM_CHILDTAXSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.tabData.tab1.form.edtAM_BABYTAXSUBST","value","dsList","AM_BABYTAXSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.tabData.tab1.form.edtAM_BORNTAXSUBST","value","dsList","AM_BORNTAXSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.tabData.tab1.form.edtAM_PENTAXSUBST","value","dsList","AM_PENTAXSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.tabData.tab1.form.edtAM_INSURETAXSUBST","value","dsList","AM_INSURETAXSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.tabData.tab1.form.edtAM_HANDITAXSUBST","value","dsList","AM_HANDITAXSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.tabData.tab1.form.edtAM_MEDITAXSUBST","value","dsList","AM_MEDITAXSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.tabData.tab1.form.edtAM_EDUTAXSUBST","value","dsList","AM_EDUTAXSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.tabData.tab1.form.edtAM_GIVETAXSUBST","value","dsList","AM_GIVETAXSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.tabData.tab1.form.edtAM_STDTAXSUBST","value","dsList","AM_STDTAXSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.tabData.tab1.form.edtAM_HOUSEFUNDSUBST","value","dsList","AM_HOUSEFUNDSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.tabData.tab1.form.edtAM_MONTHTAXSUBST","value","dsList","AM_MONTHTAXSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.tabData.tab1.form.edtAM_TAXSUBSTSUM","value","dsList","AM_TAXSUBSTSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.tabData.tab1.form.edtAM_FIXEDINCOMETAX","value","dsList","AM_FIXEDINCOMETAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.tabData.tab1.form.edtAM_FIXEDRESIDENTTAX","value","dsList","AM_FIXEDRESIDENTTAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab1.form.edtAM_FIXEDAGRTAX","value","dsList","AM_FIXEDAGRTAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.tabData.tab1.form.edtAM_TAXSUM","value","dsList","AM_TAXSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.tabData.tab1.form.edtAM_INCTAXBEF","value","dsList","AM_INCTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.tabData.tab1.form.edtAM_RESTAXBEF","value","dsList","AM_RESTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.tabData.tab1.form.edtAM_AGRTAXBEF","value","dsList","AM_AGRTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.tabData.tab1.form.edtAM_TAXBEFSUM","value","dsList","AM_TAXBEFSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.tabData.tab1.form.edtAM_PREINCTAXBEFSUM","value","dsList","AM_PREINCTAXBEFSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.tabData.tab1.form.edtAM_PRERESTAXBEFSUM","value","dsList","AM_PRERESTAXBEFSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divData.form.tabData.tab1.form.edtAM_PREAGRTAXBEFSUM","value","dsList","AM_PREAGRTAXBEFSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.tabData.tab1.form.edtAM_PRETAXBEFSUM","value","dsList","AM_PRETAXBEFSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divData.form.tabData.tab1.form.edtAM_DEDCOLLECTINCTAX","value","dsList","AM_DEDCOLLECTINCTAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.tabData.tab1.form.edtAM_DEDCOLLECTRESTAX","value","dsList","AM_DEDCOLLECTRESTAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.tabData.tab1.form.edtAM_DEDCOLLECTAGRTAX","value","dsList","AM_DEDCOLLECTAGRTAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divData.form.tabData.tab1.form.edtAM_DEDCOLLECTTAXSUM","value","dsList","AM_DEDCOLLECTTAXSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divData.form.tabData.tab3.form.edtCD_COMPANY1","value","dsListPreCompany","CD_COMPANY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divData.form.tabData.tab3.form.edtDS_COMPANY1","value","dsListPreCompany","DS_COMPANY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divData.form.tabData.tab3.form.calDT_JOIN1","value","dsListPreCompany","DT_JOIN1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divData.form.tabData.tab3.form.calDT_RETIRE1","value","dsListPreCompany","DT_RETIRE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divData.form.tabData.tab3.form.edtAM_PRE1PAYSUM","value","dsListPreCompany","AM_PRE1PAYSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divData.form.tabData.tab3.form.edtAM_PRE1BONUSSUM","value","dsListPreCompany","AM_PRE1BONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divData.form.tabData.tab3.form.edtAM_PRE1INBONUSSUM","value","dsListPreCompany","AM_PRE1INBONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divData.form.tabData.tab3.form.edtAM_PRE1HEALTHBEF","value","dsListPreCompany","AM_PRE1HEALTHBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divData.form.tabData.tab3.form.edtAM_PRE1HIREBEF","value","dsListPreCompany","AM_PRE1HIREBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divData.form.tabData.tab3.form.edtAM_PRE1ANNUITYBEF","value","dsListPreCompany","AM_PRE1ANNUITYBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divData.form.tabData.tab3.form.edtAM_PRE1INCTAXBEF","value","dsListPreCompany","AM_PRE1INCTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divData.form.tabData.tab3.form.edtAM_PRE1RESTAXBEF","value","dsListPreCompany","AM_PRE1RESTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divData.form.tabData.tab3.form.edtAM_OVERSEASNTAX1","value","dsListPreCompany","AM_OVERSEASNTAX1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","divData.form.tabData.tab3.form.edtAM_NIGHTWORKNTAX1","value","dsListPreCompany","AM_NIGHTWORKNTAX1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","divData.form.tabData.tab3.form.edtAM_BIRTH1","value","dsListPreCompany","AM_BIRTH1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","divData.form.tabData.tab3.form.edtAM_FOREIGNERNTAX1","value","dsListPreCompany","AM_FOREIGNERNTAX1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","divData.form.tabData.tab3.form.edtAM_ETCNTAX1","value","dsListPreCompany","AM_ETCNTAX1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","divData.form.tabData.tab3.form.edtAM_PRE1NTAXSUM","value","dsListPreCompany","AM_PRE1NTAXSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","divData.form.tabData.tab3.form.edtRT_PRE1TAXRDT","value","dsListPreCompany","RT_PRE1TAXRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","divData.form.tabData.tab3.form.edtAM_PRE1TAXREDUCTIONINCOMESUM","value","dsListPreCompany","AM_PRE1TAXREDUCTIONINCOMESUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","divData.form.tabData.tab3.form.edtCD_COMPANY2","value","dsListPreCompany","CD_COMPANY2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","divData.form.tabData.tab3.form.edtDS_COMPANY2","value","dsListPreCompany","DS_COMPANY2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","divData.form.tabData.tab3.form.calDT_JOIN2","value","dsListPreCompany","DT_JOIN2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","divData.form.tabData.tab3.form.calDT_RETIRE2","value","dsListPreCompany","DT_RETIRE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","divData.form.tabData.tab3.form.edtAM_PRE1PAYSUM2","value","dsListPreCompany","AM_PRE2PAYSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","divData.form.tabData.tab3.form.edtAM_PRE1BONUSSUM2","value","dsListPreCompany","AM_PRE2BONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divData.form.tabData.tab3.form.edtAM_PRE1INBONUSSUM2","value","dsListPreCompany","AM_PRE2INBONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","divData.form.tabData.tab3.form.edtAM_PRE1HEALTHBEF2","value","dsListPreCompany","AM_PRE2HEALTHBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","divData.form.tabData.tab3.form.edtAM_PRE1HIREBEF2","value","dsListPreCompany","AM_PRE2HIREBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","divData.form.tabData.tab3.form.edtAM_PRE1ANNUITYBEF2","value","dsListPreCompany","AM_PRE2ANNUITYBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","divData.form.tabData.tab3.form.edtAM_PRE1INCTAXBEF2","value","dsListPreCompany","AM_PRE2INCTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","divData.form.tabData.tab3.form.edtAM_PRE1RESTAXBEF2","value","dsListPreCompany","AM_PRE2RESTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","divData.form.tabData.tab3.form.edtAM_OVERSEASNTAX2","value","dsListPreCompany","AM_OVERSEASNTAX2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","divData.form.tabData.tab3.form.edtAM_NIGHTWORKNTAX2","value","dsListPreCompany","AM_NIGHTWORKNTAX2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","divData.form.tabData.tab3.form.edtAM_BIRTH2","value","dsListPreCompany","AM_BIRTH2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","divData.form.tabData.tab3.form.edtAM_FOREIGNERNTAX2","value","dsListPreCompany","AM_FOREIGNERNTAX2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","divData.form.tabData.tab3.form.edtRT_PRE1TAXRDT2","value","dsListPreCompany","RT_PRE2TAXRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","divData.form.tabData.tab3.form.edtAM_ETCNTAX2","value","dsListPreCompany","AM_ETCNTAX2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","divData.form.tabData.tab3.form.edtAM_PRE1NTAXSUM2","value","dsListPreCompany","AM_PRE2NTAXSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","divData.form.tabData.tab3.form.edtAM_PRE1TAXREDUCTIONINCOMESUM2","value","dsListPreCompany","AM_PRE2TAXREDUCTIONINCOMESUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","divData.form.tabData.tab3.form.edtCD_COMPANY3","value","dsListPreCompany","CD_COMPANY3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","divData.form.tabData.tab3.form.edtDS_COMPANY3","value","dsListPreCompany","DS_COMPANY3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","divData.form.tabData.tab3.form.calDT_JOIN3","value","dsListPreCompany","DT_JOIN3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","divData.form.tabData.tab3.form.calDT_RETIRE3","value","dsListPreCompany","DT_RETIRE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","divData.form.tabData.tab3.form.edtAM_PRE1PAYSUM3","value","dsListPreCompany","AM_PRE3PAYSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","divData.form.tabData.tab3.form.edtAM_PRE1BONUSSUM3","value","dsListPreCompany","AM_PRE3BONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","divData.form.tabData.tab3.form.edtAM_PRE1INBONUSSUM3","value","dsListPreCompany","AM_PRE3INBONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","divData.form.tabData.tab3.form.edtAM_OVERSEASNTAX3","value","dsListPreCompany","AM_OVERSEASNTAX3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item118","divData.form.tabData.tab3.form.edtAM_NIGHTWORKNTAX3","value","dsListPreCompany","AM_NIGHTWORKNTAX3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item119","divData.form.tabData.tab3.form.edtAM_BIRTH3","value","dsListPreCompany","AM_BIRTH3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item120","divData.form.tabData.tab3.form.edtAM_FOREIGNERNTAX3","value","dsListPreCompany","AM_FOREIGNERNTAX3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item121","divData.form.tabData.tab3.form.edtRT_PRE1TAXRDT3","value","dsListPreCompany","RT_PRE3TAXRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","divData.form.tabData.tab3.form.edtAM_PRE1HEALTHBEF3","value","dsListPreCompany","AM_PRE3HEALTHBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","divData.form.tabData.tab3.form.edtAM_PRE1HIREBEF3","value","dsListPreCompany","AM_PRE3HIREBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item124","divData.form.tabData.tab3.form.edtAM_PRE1ANNUITYBEF3","value","dsListPreCompany","AM_PRE3ANNUITYBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item125","divData.form.tabData.tab3.form.edtAM_PRE1INCTAXBEF3","value","dsListPreCompany","AM_PRE3INCTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item126","divData.form.tabData.tab3.form.edtAM_PRE1RESTAXBEF3","value","dsListPreCompany","AM_PRE3RESTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item127","divData.form.tabData.tab3.form.edtAM_ETCNTAX3","value","dsListPreCompany","AM_ETCNTAX3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item128","divData.form.tabData.tab3.form.edtAM_PRE1NTAXSUM3","value","dsListPreCompany","AM_PRE3NTAXSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item129","divData.form.tabData.tab3.form.edtAM_PRE1TAXREDUCTIONINCOMESUM3","value","dsListPreCompany","AM_PRE3TAXREDUCTIONINCOMESUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item130","divData.form.tabData.tab3.form.edtCD_COMPANY4","value","dsListPreCompany","CD_COMPANY4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item131","divData.form.tabData.tab3.form.edtDS_COMPANY4","value","dsListPreCompany","DS_COMPANY4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item132","divData.form.tabData.tab3.form.calDT_JOIN4","value","dsListPreCompany","DT_JOIN4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item133","divData.form.tabData.tab3.form.calDT_RETIRE4","value","dsListPreCompany","DT_RETIRE4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item134","divData.form.tabData.tab3.form.edtAM_PRE1PAYSUM4","value","dsListPreCompany","AM_PRE4PAYSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item135","divData.form.tabData.tab3.form.edtAM_PRE1BONUSSUM4","value","dsListPreCompany","AM_PRE4BONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item136","divData.form.tabData.tab3.form.edtAM_PRE1INBONUSSUM4","value","dsListPreCompany","AM_PRE4INBONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item137","divData.form.tabData.tab3.form.edtAM_OVERSEASNTAX4","value","dsListPreCompany","AM_OVERSEASNTAX4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item138","divData.form.tabData.tab3.form.edtAM_NIGHTWORKNTAX4","value","dsListPreCompany","AM_NIGHTWORKNTAX4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item139","divData.form.tabData.tab3.form.edtAM_BIRTH4","value","dsListPreCompany","AM_BIRTH4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item140","divData.form.tabData.tab3.form.edtAM_FOREIGNERNTAX4","value","dsListPreCompany","AM_FOREIGNERNTAX4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item141","divData.form.tabData.tab3.form.edtRT_PRE1TAXRDT4","value","dsListPreCompany","RT_PRE4TAXRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item142","divData.form.tabData.tab3.form.edtAM_PRE1HEALTHBEF4","value","dsListPreCompany","AM_PRE4HEALTHBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item143","divData.form.tabData.tab3.form.edtAM_PRE1HIREBEF4","value","dsListPreCompany","AM_PRE4HIREBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item144","divData.form.tabData.tab3.form.edtAM_PRE1ANNUITYBEF4","value","dsListPreCompany","AM_PRE4ANNUITYBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item145","divData.form.tabData.tab3.form.edtAM_PRE1INCTAXBEF4","value","dsListPreCompany","AM_PRE4INCTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item146","divData.form.tabData.tab3.form.edtAM_PRE1RESTAXBEF4","value","dsListPreCompany","AM_PRE4RESTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item147","divData.form.tabData.tab3.form.edtAM_ETCNTAX4","value","dsListPreCompany","AM_ETCNTAX4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item148","divData.form.tabData.tab3.form.edtAM_PRE1NTAXSUM4","value","dsListPreCompany","AM_PRE4NTAXSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item149","divData.form.tabData.tab3.form.edtAM_PRE1TAXREDUCTIONINCOMESUM4","value","dsListPreCompany","AM_PRE4TAXREDUCTIONINCOMESUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item150","divData.form.tabData.tab1.form.edtAM_ONEPARENTS","value","dsList","AM_ONEPARENTS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAV_YEAREND.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.loadFlag = "";

        //상황별 코드파인더 동작을 위한 스위치
        this.CD_CORP = "";
        this.YY_BASE = "";
        this.YN_MID = "";
        this.ID_SABUN = "";

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();


        	//작업구분
        	this.cboYN_MID.set_index(0);
        	if(!this.gfnIsNull(this.getOwnerFrame().YN_MID)) this.cboYN_MID.set_value(this.getOwnerFrame().YN_MID);

        	//구분 - 일용직 삭제
        	this.rdoTY_GUBUN.getInnerDataset().deleteRow(1);

        	//적용년도(현재)
        	var today = "";
        	if(this.cboYN_MID.value == "Y"){
        		today = this.gfnGetDate().substr(0,6); //작업년월(현재월)
        	}else{
        		today = this.gfnGetDate().substring(0,4) - 1; //전년도
        	}

        	this.ctclWORK_BASE.set_url(this.cboYN_MID.value == "Y"?"cmm::cmmCalMM.xfdl":"cmm::cmmCalYY.xfdl");
        	this.ctclWORK_BASE.form.TextBox.set_value(today);
        	if(!this.gfnIsNull(this.getOwnerFrame().WORK_BASE)) this.ctclWORK_BASE.form.TextBox.set_value(this.getOwnerFrame().WORK_BASE);
        	this.divSearch.form.staWORK_BASE.set_text(this.cboYN_MID.value=="Y"?"적용년월":"적용년도");

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP) && !this.gfnIsNull(this.getOwnerFrame().ID_SABUN)) {

        	    this.CD_CORP = this.getOwnerFrame().CD_CORP;
        		this.YY_BASE = this.cboYN_MID.value == "Y" ? this.getOwnerFrame().WORK_BASE : this.getOwnerFrame().WORK_BASE.substr(0,4);
                this.YN_MID = this.getOwnerFrame().YN_MID;
                this.ID_SABUN = this.getOwnerFrame().ID_SABUN;
        		//trace("this.YY_BASE>>111>>", this.YY_BASE);

        		this.ctclWORK_BASE.form.TextBox.set_value(this.YY_BASE);

        		this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        		this.ccfCD_CORP.form.fnCodeFindLoad();


        		this.ccfID_RESIDENT.form.CDTextBox.set_value(this.getOwnerFrame().ID_SABUN);
        		this.ccfID_RESIDENT.form.fnCodeFindLoad();

        		this.edtNO_APPLY.set_value(this.getOwnerFrame().NO_APPLY);

        		if(this.ccfCD_CORP.form.CDTextBox.value != ""){
        			this.FormBtns.Select.click();
        		}

        	}else{

        	    this.CD_CORP = this.AuthClient.CD_CORP;
        		this.YY_BASE = today;
                this.YN_MID = "N";
                this.ID_SABUN = ""; //this.AuthClient.ID_SABUN;

        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.fnCodeFindLoad();
        		this.ccfID_RESIDENT.form.CDTextBox.set_value(this.AuthClient.ID_SABUN);
        		this.ccfID_RESIDENT.form.fnCodeFindLoad();

        		this.edtNO_APPLY.set_value("1");

        		if(this.ccfCD_CORP.form.CDTextBox.value != "") this.FormBtns.Select.click();
        	}


        	//탭 초기화
        	this.divData.form.tabData.set_enableevent(false);
        	this.divData.form.tabData.set_tabindex(0);
        	this.divData.set_bottom(0);
        	this.divData.form.tabData.set_enableevent(true);

        	this.loadFlag = "Y";


        	if(this.FormInfo.GR_SEARCH == "1"){
        		this.ccfCD_CORP.set_enable(true);
        	}else{
        		this.ccfCD_CORP.set_enable(false);
        	}

        	if(this.FormInfo.GR_SEARCH == "9"){
        		this.ccfID_RESIDENT.set_enable(false);
        	}else{
        		this.ccfID_RESIDENT.set_enable(true);
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
         	//this.FormBtns.Add.set_enable(false);
         	//this.FormBtns.Del.set_enable(false);
         	//this.FormBtns.Reset.set_enable(true);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//작업구분
        	this.cboYN_MID = this.divSearch.form.cboYN_MID;

        	//적용년도
        	this.ctclWORK_BASE = this.divSearch.form.ctclWORK_BASE;

        	//법인코드
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;

        	//주민번호
        	this.ccfID_RESIDENT = this.divSearch.form.ccfID_RESIDENT;

        	//임직원구분
        	this.rdoTY_GUBUN = this.divSearch.form.rdoTY_GUBUN;

        	//사번
        	this.edtID_SABUN = this.divSearch.form.edtID_SABUN;

        	this.edtNO_APPLY = this.divSearch.form.edtNO_APPLY;

        	//그리드 - 기본공제내역
        	this.dxGrid = this.divData.form.tabData.tab2.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsListBaseSubst, "DA", "DAV_BASESUBST");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_RESIDENT", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("MM_BASE", "string");
        	this.dsSelect.addColumn("NO_APPLY", "int");
        	this.dsSelect.addColumn("YN_MID", "string");

        	//수정
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("ID_RESIDENT", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("YY_BASE", "string");
        	this.dsUpdate.addColumn("MM_BASE", "string");
        	this.dsUpdate.addColumn("NO_APPLY", "int");
        	this.dsUpdate.addColumn("YN_MID", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("AM_TAXLAWREDUCTION", "int");
        	this.dsUpdate.addColumn("AM_TAXREDUCTION", "int");
        	this.dsUpdate.addColumn("AM_CURPAY", "int");
        	this.dsUpdate.addColumn("AM_CURBONUS", "int");
        	this.dsUpdate.addColumn("AM_CURINBONUSSUM", "int");
        	this.dsUpdate.addColumn("AM_CURINCTAX", "int");
        	this.dsUpdate.addColumn("AM_CURREGTAX", "int");
        	this.dsUpdate.addColumn("AM_CURAGRTAX", "int");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	var nrow = this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "ID_SABUN", this.edtID_SABUN.value);
        	this.dsSelect.setColumn(0, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value:this.ctclWORK_BASE.form.TextBox.value.substring(0,4));
        	this.dsSelect.setColumn(0, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsSelect.setColumn(0, "NO_APPLY", this.edtNO_APPLY.value);
        	this.dsSelect.setColumn(0, "YN_MID", this.cboYN_MID.value);

        	var outData     = "";
        	var inData      = "";

        	var tabIdx = this.divData.form.tabData.tabindex;
        	switch(tabIdx){
        		case 0:
        			inData = "select=dsSelect";
        			outData = "dsList=select0";
        			break;

        		case 1:
        			inData = "selectBase=dsSelect";
        			outData = "dsListBaseSubst=selectBase0";
        			break;

        		case 2:
        			inData = "selectPreCompany=dsSelect";
        			outData = "dsListPreCompany=selectPreCompany0";
        			break;
        	}

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//this.gfnGridAdd(this.dxGrid);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        //	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	this.dsUpdate.clearData();

        	if(this.gfnGetFormStatus(this) == "U"){
        		var nrow = this.dsUpdate.addRow();

        		this.dsUpdate.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value);
        		this.dsUpdate.setColumn(nrow, "ID_SABUN", this.edtID_SABUN.value);
        		this.dsUpdate.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value:this.ctclWORK_BASE.form.TextBox.value.substring(0,4));
        		this.dsUpdate.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        		this.dsUpdate.setColumn(nrow, "NO_APPLY", this.edtNO_APPLY.value);
        		this.dsUpdate.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        		this.dsUpdate.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsUpdate.setColumn(nrow, "AM_TAXLAWREDUCTION", this.dsList.getColumn(0, "AM_TAXLAWREDUCTION"));	// 세액감면-소득세법(입력 필요시 활성화하기)
        		this.dsUpdate.setColumn(nrow, "AM_TAXREDUCTION", this.dsList.getColumn(0, "AM_TAXREDUCTION"));			// 조세특례제한법(입력 필요시 활성화하기)
        		this.dsUpdate.setColumn(nrow, "AM_CURPAY", this.dsList.getColumn(0, "AM_CURPAYSUM"));					// 현근무지_급여(입력 필요시 활성화하기)
        		this.dsUpdate.setColumn(nrow, "AM_CURBONUS", this.dsList.getColumn(0, "AM_CURBONUSSUM"));				// 현근무지_상여(입력 필요시 활성화하기)
        		this.dsUpdate.setColumn(nrow, "AM_CURINBONUSSUM", this.dsList.getColumn(0, "AM_CURINBONUSSUM"));		// 현근무지_인정상여(활성화 되어있음)
        		this.dsUpdate.setColumn(nrow, "AM_CURINCTAX", this.dsList.getColumn(0, "AM_INCTAXBEF"));				// 현근무지_소득세(입력 필요시 활성화하기)
        		this.dsUpdate.setColumn(nrow, "AM_CURREGTAX", this.dsList.getColumn(0, "AM_RESTAXBEF"));				// 현근무지_주민세(입력 필요시 활성화하기)
        		this.dsUpdate.setColumn(nrow, "AM_CURAGRTAX", this.dsList.getColumn(0, "AM_AGRTAXBEF"));				// 현근무지_농특세(입력 필요시 활성화하기)
        		this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsUpdate";
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
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };
        /*
         *	리셋 버튼
         */
        this.fnReset = function() {
        	this.ctclWORK_BASE.form.TextBox.set_value("");
        	this.ccfCD_CORP.form.CDTextBox.set_value("");
        	this.ccfCD_CORP.form.DSTextBox.set_value("");
        	this.ccfID_RESIDENT.form.CDTextBox.set_value("");
        	this.ccfID_RESIDENT.form.DSTextBox.set_value("");
        	this.edtID_SABUN.set_value("");
        	this.rdoTY_GUBUN.set_value("E");
        };
        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	var validate = true;

        	//적용년도
        	if (this.gfnIsNull(this.ctclWORK_BASE.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclWORK_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert(this.divSearch.form.staWORK_BASE.text+ "을/를 입력하세요.");
        		return false;
        	}

        	//법인
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        	}

        	//사번
        	if (this.gfnIsNull(this.ccfID_RESIDENT.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfID_RESIDENT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("주민번호를 조회하세요", "fnVaidateCallback");
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
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSetButton();

        		if(this.dsList.rowcount > 0 ){
        			// 마감여부
        			if(this.getOwnerFrame().YearEndClose == "N"){
        				this.divData.form.tabData.tab1.form.edtAM_CURINBONUSSUM.set_readonly(false);
        			}else{
        				this.divData.form.tabData.tab1.form.edtAM_CURINBONUSSUM.set_readonly(true);
        			}
        		}


        		//Tab2 세대주, 변동사항 설정
        		if(this.dsListBaseSubst.rowcount > 0 ){
        			this.divData.form.tabData.tab2.form.rdoYN_HOUSEHOLDER.set_value(this.dsListBaseSubst.getColumn(0, "YN_HOUSEHOLDER"));
        			this.divData.form.tabData.tab2.form.rdoYN_CHANGE.set_value(this.dsListBaseSubst.getColumn(0, "YN_CHANGE"));
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;

        		case "ccfID_RESIDENT": // 주민번호
        			if (this.gfnIsNull(this.cboYN_MID.value)) {
        				this.gfnAlert("작업구분을 먼저 입력하세요.");
        				return false;
        			}
        			if (this.gfnIsNull(this.ctclWORK_BASE.form.TextBox.value)) {
        				this.gfnAlert("적용년도를 먼저 입력하세요.");
        				return false;
        			}
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.gfnAlert("법인을 먼저 입력하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "YY_BASE", this.ctclWORK_BASE.form.TextBox.value);
        			dsUserParam.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.gfnNvl(this.ID_SABUN, "")); //타화면에서 넘어온값이 있으면 그걸로 조회되도록. 아니면 입력한 VALUE 값으로 조회

        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        			//trace("fnBeforeUserDataSetParam>>dsUserParam", dsUserParam.saveXML());
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        		    if(this.loadFlag != ""){
        			this.ccfID_RESIDENT.form.CDTextBox.set_value("");
        			this.ccfID_RESIDENT.form.DSTextBox.set_value("");
        			this.edtID_SABUN.set_value("");
        			}
        			break;
        		case "ccfID_RESIDENT"://주민등록번호
        			if(arr.length > 0) {
        				this.edtID_SABUN.set_value(arr[0]["ID_SABUN"]);
        			}else{
        				this.edtID_SABUN.set_value("");
        			}
        			break;
        		default:
        	}

        	this.fnSearchInit();
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.dsList.clearData();
        		this.dsListPreCompany.clearData();
        	}
        };
        //탭변경
        this.divData_tabData_onchanged = function(obj,e)
        {
        	var tabIdx = this.divData.form.tabData.tabindex;

        	if(tabIdx == 0){
        		if(this.gfnGetFormStatus(this) != "U") {
        			this.FormBtns.Save.set_enable(false);
        		}else{
        			this.FormBtns.Save.set_enable(true);
        		}
        	}else{
        		this.FormBtns.Save.set_enable(false);
        	}

        	this.fnSelect();
        };
        this.amValue_onchanged = function(obj,e)
        {
        	var amSum = nexacro.toNumber(this.dsList.getColumn(0,"AM_CURPAYSUM"),0) + nexacro.toNumber(this.dsList.getColumn(0,"AM_CURBONUSSUM"),0) + nexacro.toNumber(this.dsList.getColumn(0,"AM_CURINBONUSSUM"),0);

        	this.dsList.set_enableevent(false);
        	//this.dsList.setColumn(0, this.ucFlag, "U");
        	this.dsList.setColumn(0, "AM_CURSUM", amSum);
        	this.dsList.set_enableevent(true);

        	this.gfnSetFormStatus(this,"U");
        	this.fnSetButton();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.rdoTY_GUBUN.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab1.form.edtAM_CURPAYSUM.addEventHandler("onchanged",this.amValue_onchanged,this);
            this.divData.form.tabData.tab1.form.edtAM_CURBONUSSUM.addEventHandler("onchanged",this.amValue_onchanged,this);
            this.divData.form.tabData.tab1.form.edtAM_CURINBONUSSUM.addEventHandler("onchanged",this.amValue_onchanged,this);
            this.divData.form.tabData.tab1.form.edtAM_INCTAXBEF.addEventHandler("onchanged",this.amValue_onchanged,this);
            this.divData.form.tabData.tab1.form.edtAM_RESTAXBEF.addEventHandler("onchanged",this.amValue_onchanged,this);
            this.divData.form.tabData.tab1.form.edtAM_AGRTAXBEF.addEventHandler("onchanged",this.amValue_onchanged,this);
            this.dsListBaseSubst.addEventHandler("onvaluechanged",this.fnSetButton,this);
            this.dsListPreCompany.addEventHandler("onvaluechanged",this.fnSetButton,this);
        };
        this.loadIncludeScript("DAV_YEAREND.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
