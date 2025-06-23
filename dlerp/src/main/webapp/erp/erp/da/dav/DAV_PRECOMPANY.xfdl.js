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
            this.set_titletext("전근무지 정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAVPR_PRECOMPANY_SELECT</Col></Row><Row><Col id=\"TARGET\">closeCheck</Col><Col id=\"SP\">DAVPR_CLOSE_CHECK2</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DAVPR_PRECOMPANY_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAVPR_PRECOMPANY_UPDATE</Col></Row><Row><Col id=\"SP\">DAVPR_PRECOMPANY_DELETE</Col><Col id=\"TARGET\">delete</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnClose", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAREND_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CLOSE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNecessary", this);
            obj._setContents("<ColumnInfo><Column id=\"TAB\" type=\"STRING\" size=\"256\"/><Column id=\"COMP\" type=\"STRING\" size=\"256\"/><Column id=\"LABEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TAB\">0</Col><Col id=\"COMP\">txtCD_PRECOMPANY1</Col><Col id=\"LABEL\">사업자등록번호</Col></Row><Row><Col id=\"TAB\">0</Col><Col id=\"COMP\">txtDS_PRECOMPANY1</Col><Col id=\"LABEL\">회사명</Col></Row><Row><Col id=\"TAB\">0</Col><Col id=\"COMP\">ctclDT_JOIN1</Col><Col id=\"LABEL\">입사일자</Col></Row><Row><Col id=\"TAB\">0</Col><Col id=\"COMP\">ctclDT_RETIRE1</Col><Col id=\"LABEL\">퇴사일자</Col></Row><Row><Col id=\"TAB\">1</Col><Col id=\"COMP\">txtCD_PRECOMPANY2</Col><Col id=\"LABEL\">사업자등록번호</Col></Row><Row><Col id=\"TAB\">1</Col><Col id=\"COMP\">txtDS_PRECOMPANY2</Col><Col id=\"LABEL\">회사명</Col></Row><Row><Col id=\"TAB\">1</Col><Col id=\"COMP\">ctclDT_JOIN2</Col><Col id=\"LABEL\">입사일자</Col></Row><Row><Col id=\"TAB\">1</Col><Col id=\"COMP\">ctclDT_RETIRE2</Col><Col id=\"LABEL\">퇴사일자</Col></Row><Row><Col id=\"TAB\">2</Col><Col id=\"COMP\">txtCD_PRECOMPANY3</Col><Col id=\"LABEL\">사업자등록번호</Col></Row><Row><Col id=\"TAB\">2</Col><Col id=\"COMP\">txtDS_PRECOMPANY3</Col><Col id=\"LABEL\">회사명</Col></Row><Row><Col id=\"TAB\">2</Col><Col id=\"COMP\">ctclDT_JOIN3</Col><Col id=\"LABEL\">입사일자</Col></Row><Row><Col id=\"TAB\">2</Col><Col id=\"COMP\">ctclDT_RETIRE3</Col><Col id=\"LABEL\">퇴사일자</Col></Row><Row><Col id=\"TAB\">3</Col><Col id=\"COMP\">txtCD_PRECOMPANY4</Col><Col id=\"LABEL\">사업자등록번호</Col></Row><Row><Col id=\"TAB\">3</Col><Col id=\"COMP\">txtDS_PRECOMPANY4</Col><Col id=\"LABEL\">회사명</Col></Row><Row><Col id=\"TAB\">3</Col><Col id=\"COMP\">ctclDT_JOIN4</Col><Col id=\"LABEL\">입사일자</Col></Row><Row><Col id=\"TAB\">3</Col><Col id=\"COMP\">ctclDT_RETIRE4</Col><Col id=\"LABEL\">퇴사일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_COMPANY1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPANY1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAXOFFICE1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE1PAYSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE1BONUSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE1HEALTHBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1HIREBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1ANNUITYBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1INCTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1RESTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1AGRTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_RETIRE1\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1inBONUSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_OVERSEASNTAX1\" type=\"INT\" size=\"256\"/><Column id=\"AM_NIGHTWORKNTAX1\" type=\"INT\" size=\"256\"/><Column id=\"AM_BIRTH1\" type=\"INT\" size=\"256\"/><Column id=\"AM_FOREIGNERNTAX1\" type=\"INT\" size=\"256\"/><Column id=\"AM_ETCNTAX1\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1NTAXSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_COMPANY2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPANY2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAXOFFICE2\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN2\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE2PAYSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE2BONUSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE2HEALTHBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE2HIREBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE2ANNUITYBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE2INCTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE2RESTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE2AGRTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_RETIRE2\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE2inBONUSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_OVERSEASNTAX2\" type=\"INT\" size=\"256\"/><Column id=\"AM_NIGHTWORKNTAX2\" type=\"INT\" size=\"256\"/><Column id=\"AM_BIRTH2\" type=\"INT\" size=\"256\"/><Column id=\"AM_FOREIGNERNTAX2\" type=\"INT\" size=\"256\"/><Column id=\"AM_ETCNTAX2\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE2NTAXSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_COMPANY3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPANY3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAXOFFICE3\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN3\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE3\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE3PAYSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE3BONUSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE3HEALTHBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE3HIREBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE3ANNUITYBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE3INCTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE3RESTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE3AGRTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_RETIRE3\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE3inBONUSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_OVERSEASNTAX3\" type=\"INT\" size=\"256\"/><Column id=\"AM_NIGHTWORKNTAX3\" type=\"INT\" size=\"256\"/><Column id=\"AM_BIRTH3\" type=\"INT\" size=\"256\"/><Column id=\"AM_FOREIGNERNTAX3\" type=\"INT\" size=\"256\"/><Column id=\"AM_ETCNTAX3\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE3NTAXSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_COMPANY4\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPANY4\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAXOFFICE4\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN4\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE4\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE4PAYSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE4BONUSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE4HEALTHBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE4HIREBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE4ANNUITYBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE4INCTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE4RESTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE4AGRTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_RETIRE4\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE4inBONUSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_OVERSEASNTAX4\" type=\"INT\" size=\"256\"/><Column id=\"AM_NIGHTWORKNTAX4\" type=\"INT\" size=\"256\"/><Column id=\"AM_BIRTH4\" type=\"INT\" size=\"256\"/><Column id=\"AM_FOREIGNERNTAX4\" type=\"INT\" size=\"256\"/><Column id=\"AM_ETCNTAX4\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE4NTAXSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QN_PRECOMP\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PRE1TAXRDT\" type=\"INT\" size=\"256\"/><Column id=\"RT_PRE2TAXRDT\" type=\"INT\" size=\"256\"/><Column id=\"RT_PRE3TAXRDT\" type=\"INT\" size=\"256\"/><Column id=\"RT_PRE4TAXRDT\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1TAXREDUCTIONINCOMESUM\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE2TAXREDUCTIONINCOMESUM\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE3TAXREDUCTIONINCOMESUM\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE4TAXREDUCTIONINCOMESUM\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1OURSTOCKSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE2OURSTOCKSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE3OURSTOCKSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE4OURSTOCKSUM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_MID","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_MID","staYN_MID:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_readonly("true");
            var divSearch_form_cboYN_MID_innerdataset = new nexacro.NormalDataset("divSearch_form_cboYN_MID_innerdataset", obj);
            divSearch_form_cboYN_MID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">연말정산</Col><Col id=\"codecolumn\">N</Col></Row><Row><Col id=\"datacolumn\">중도정산</Col><Col id=\"codecolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboYN_MID_innerdataset);
            obj.set_text("연말정산");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staWORK_BASE","cboYN_MID:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("적용년월");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclWORK_BASE","staWORK_BASE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_enableevent("true");
            obj.set_async("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_RESIDENT","ctclWORK_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("구분");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","staTY_GUBUN:0.0","cboYN_MID:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            var divSearch_form_rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoTY_GUBUN_innerdataset", obj);
            divSearch_form_rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">임직원</Col></Row><Row><Col id=\"codecolumn\">T</Col><Col id=\"datacolumn\">노무자</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoTY_GUBUN_innerdataset);
            obj.set_text("임직원");
            obj.set_value("E");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_RESIDENT","staID_RESIDENT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFYEAREND");
            obj.getSetter("CDTextWidth").set("130");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_SABUN","ccfID_RESIDENT:0.0","10.0","79","24.0",null,null,null,null,null,null,this.divSearch.form);
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
            obj.set_text("전근무지1 ");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTITLE","19","10","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("22");
            obj.set_text("기본공제");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY1","19","45","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("23");
            obj.set_text("사업자등록번호");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02","138","45","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_JOIN1","19","74","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("25");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04","138","74","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_TAXOFFICE1","19","103","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("27");
            obj.set_text("세무서코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06","138","103","398","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY1","287","45","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("29");
            obj.set_text("회사명");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta07","386","45","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRE1","287","74","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("31");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta09","386","74","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtCD_PRECOMPANY1","142","50","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtCD_TAXOFFICE1","142","108","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtDS_PRECOMPANY1","390","50","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_JOIN1","142","79","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_RETIRE1","391","79","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTITLE2","19","140","824","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("33");
            obj.set_text("소득정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_PRE1PAYSUM","19","175","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("34");
            obj.set_text("급여합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00","138","175","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_PRE1BONUSSUM","19","204","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("36");
            obj.set_text("상여합계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","138","204","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_CURINBONUSSUM1","19","233","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("38");
            obj.set_text("인정상여");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta03","138","233","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_PRE1HEALTHBEF","287","175","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("40");
            obj.set_text("기납건강보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta05","406","175","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_PRE1HIREBEF","287","204","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("42");
            obj.set_text("기납고용보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta08","406","204","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_ANNUITYBEF1","287","233","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("44");
            obj.set_text("기납연금보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta10","406","233","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_PRE1INCTAXBEF","555","175","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("46");
            obj.set_text("결정소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta11","694","175","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_PRE1PROVINCTAXBEF","555","204","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("48");
            obj.set_text("결정지방소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta12","694","204","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_PRE1AGRTAXBEF","555","233","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("50");
            obj.set_text("결정농특세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta13","694","233","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTITLE00","19","270","944","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("52");
            obj.set_text("비과세소득 및 감면소득");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_FORLABOR1","19","305","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("53");
            obj.set_text("국외근로");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta14","198","305","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_FOREIGNER1","19","334","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("55");
            obj.set_text("외국인근로자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta15","198","334","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staRT_PRE1TAXRDT","19","363","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("57");
            obj.set_text("중소기업취업자 세액감면비율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta16","198","363","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_NWPAY1","347","305","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("59");
            obj.set_text("야간근로수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta17","526","305","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_ETCNTAX1","347","334","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("61");
            obj.set_text("그밖의비과세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta18","526","334","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_PRE1TAXRDT","347","363","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("63");
            obj.set_text("중소기업취업자 감면소득금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta19","526","363","438","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_BORNTAXSUBST1","675","305","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("65");
            obj.set_text("출산.보육수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta20","814","305","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_ETCNTAXTOT1","675","334","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("67");
            obj.set_text("비과세합계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta21","814","334","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("cboRT_PRE1TAXRDT","203","368","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_tabData_tab1_form_cboRT_PRE1TAXRDT_innerdataset = new nexacro.NormalDataset("divData_form_tabData_tab1_form_cboRT_PRE1TAXRDT_innerdataset", obj);
            divData_form_tabData_tab1_form_cboRT_PRE1TAXRDT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">90</Col><Col id=\"datacolumn\">90</Col></Row><Row><Col id=\"codecolumn\">70</Col><Col id=\"datacolumn\">70</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_tabData_tab1_form_cboRT_PRE1TAXRDT_innerdataset);
            obj.set_text("0");
            obj.set_value("0");
            obj.set_index("0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE1PAYSUM","143","180","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("5");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE1BONUSSUM","143","209","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CURINBONUSSUM1","143","238","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("7");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE1HEALTHBEF","411","180","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("8");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE1HIREBEF","411","209","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("9");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ANNUITYBEF1","411","238","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("10");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE1INCTAXBEF","699","180","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("11");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE1PROVINCTAXBEF","699","209","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("12");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE1AGRTAXBEF","699","238","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("13");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_FORLABOR1","203","310","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("14");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_FOREIGNERTAX1","203","339","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("15");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_NWPAY1","531","310","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("16");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETCNTAX1","531","339","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("17");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BORNTAXSUBST1","819","310","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("18");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETCNTAXTOT1","819","339","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("19");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE1TAXRDT","531","368","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("21");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("전근무지2 ");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTITLE","19","10","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj.set_text("기본공제");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY2","19","45","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("사업자등록번호");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta02","138","45","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_JOIN2","19","74","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("3");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta04","138","74","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staCD_TAXOFFICE2","19","103","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("5");
            obj.set_text("세무서코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta06","138","103","398","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY2","287","45","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("7");
            obj.set_text("회사명");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta07","386","45","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRE2","287","74","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("9");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta09","386","74","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("txtCD_PRECOMPANY2","142","50","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("11");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("txtCD_TAXOFFICE2","142","108","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("txtDS_PRECOMPANY2","390","50","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("13");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_JOIN2","142","79","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_RETIRE2","391","79","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTITLE2","19","140","824","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("16");
            obj.set_text("소득정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_PRE2PAYSUM","19","175","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("17");
            obj.set_text("급여합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta00","138","175","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_PRE2BONUSSUM","19","204","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("19");
            obj.set_text("상여합계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta01","138","204","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_CURINBONUSSUM2","19","233","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("21");
            obj.set_text("인정상여");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta03","138","233","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_PRE2HEALTHBEF","287","175","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("23");
            obj.set_text("기납건강보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta05","406","175","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_PRE2HIREBEF","287","204","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("25");
            obj.set_text("기납고용보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta08","406","204","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_ANNUITYBEF2","287","233","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("27");
            obj.set_text("기납연금보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta10","406","233","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_PRE2INCTAXBEF","555","175","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("29");
            obj.set_text("결정소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta11","694","175","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_PRE2PROVINCTAXBEF","555","204","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("31");
            obj.set_text("결정지방소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta12","694","204","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_PRE2AGRTAXBEF","555","233","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("33");
            obj.set_text("결정농특세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta13","694","233","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTITLE00","19","270","944","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("35");
            obj.set_text("비과세소득 및 감면소득");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_FORLABOR2","19","305","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("36");
            obj.set_text("국외근로");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta14","198","305","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_FOREIGNER2","19","334","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("38");
            obj.set_text("외국인근로자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta15","198","334","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staRT_PRE2TAXRDT","19","363","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("40");
            obj.set_text("중소기업취업자 세액감면비율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta16","198","363","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_NWPAY2","347","305","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("42");
            obj.set_text("야간근로수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta17","526","305","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_ETCNTAX2","347","334","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("44");
            obj.set_text("그밖의비과세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta18","526","334","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_PRE2TAXRDT","347","363","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("46");
            obj.set_text("중소기업취업자 감면소득금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta19","526","363","438","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_BORNTAXSUBST2","675","305","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("48");
            obj.set_text("출산.보육수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta20","814","305","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_ETCNTAXTOT2","675","334","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("50");
            obj.set_text("비과세합계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta21","814","334","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Combo("cboRT_PRE2TAXRDT","203","368","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("52");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_tabData_tab2_form_cboRT_PRE2TAXRDT_innerdataset = new nexacro.NormalDataset("divData_form_tabData_tab2_form_cboRT_PRE2TAXRDT_innerdataset", obj);
            divData_form_tabData_tab2_form_cboRT_PRE2TAXRDT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">90</Col><Col id=\"datacolumn\">90</Col></Row><Row><Col id=\"codecolumn\">70</Col><Col id=\"datacolumn\">70</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_tabData_tab2_form_cboRT_PRE2TAXRDT_innerdataset);
            obj.set_text("0");
            obj.set_value("0");
            obj.set_index("0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE2PAYSUM","143","180","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("53");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE2BONUSSUM","143","209","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("54");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CURINBONUSSUM2","143","238","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("55");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE2HEALTHBEF","411","180","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("56");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE2HIREBEF","411","209","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("57");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ANNUITYBEF2","411","238","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("58");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE2INCTAXBEF","699","180","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("59");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE2PROVINCTAXBEF","699","209","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("60");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE2AGRTAXBEF","699","238","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("61");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_FORLABOR2","203","310","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("62");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_FOREIGNERTAX2","203","339","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("63");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_NWPAY2","531","310","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("64");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETCNTAX2","531","339","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("65");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BORNTAXSUBST2","819","310","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("66");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETCNTAXTOT2","819","339","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("67");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE2TAXRDT","531","368","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("68");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("전근무지3 ");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTITLE","19","10","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("22");
            obj.set_text("기본공제");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY3","19","45","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("23");
            obj.set_text("사업자등록번호");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta02","138","45","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDT_JOIN3","19","74","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("25");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta04","138","74","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staCD_TAXOFFICE3","19","103","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("27");
            obj.set_text("세무서코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta06","138","103","398","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY3","287","45","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("29");
            obj.set_text("회사명");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta07","386","45","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRE3","287","74","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("31");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta09","386","74","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("txtCD_PRECOMPANY3","142","50","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("txtCD_TAXOFFICE3","142","108","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("txtDS_PRECOMPANY3","390","50","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("1");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_JOIN3","142","79","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_RETIRE3","391","79","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staTITLE2","19","140","824","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("33");
            obj.set_text("소득정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_PRE3PAYSUM","19","175","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("34");
            obj.set_text("급여합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta00","138","175","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_PRE3BONUSSUM","19","204","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("36");
            obj.set_text("상여합계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta01","138","204","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_CURINBONUSSUM3","19","233","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("38");
            obj.set_text("인정상여");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta03","138","233","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_PRE3HEALTHBEF","287","175","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("40");
            obj.set_text("기납건강보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta05","406","175","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_PRE3HIREBEF","287","204","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("42");
            obj.set_text("기납고용보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta08","406","204","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_ANNUITYBEF3","287","233","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("44");
            obj.set_text("기납연금보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta10","406","233","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_PRE3INCTAXBEF","555","175","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("46");
            obj.set_text("결정소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta11","694","175","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_PRE3PROVINCTAXBEF","555","204","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("48");
            obj.set_text("결정지방소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta12","694","204","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_PRE3AGRTAXBEF","555","233","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("50");
            obj.set_text("결정농특세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta13","694","233","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staTITLE00","19","270","944","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("52");
            obj.set_text("비과세소득 및 감면소득");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_FORLABOR3","19","305","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("53");
            obj.set_text("국외근로");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta14","198","305","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_FOREIGNER3","19","334","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("55");
            obj.set_text("외국인근로자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta15","198","334","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staRT_PRE3TAXRDT","19","363","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("57");
            obj.set_text("중소기업취업자 세액감면비율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta16","198","363","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_NWPAY3","347","305","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("59");
            obj.set_text("야간근로수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta17","526","305","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_ETCNTAX3","347","334","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("61");
            obj.set_text("그밖의비과세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta18","526","334","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_PRE3TAXRDT","347","363","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("63");
            obj.set_text("중소기업취업자 감면소득금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta19","526","363","438","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_BORNTAXSUBST3","675","305","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("65");
            obj.set_text("출산.보육수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta20","814","305","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_ETCNTAXTOT3","675","334","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("67");
            obj.set_text("비과세합계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta21","814","334","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Combo("cboRT_PRE3TAXRDT","203","368","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_tabData_tab3_form_cboRT_PRE3TAXRDT_innerdataset = new nexacro.NormalDataset("divData_form_tabData_tab3_form_cboRT_PRE3TAXRDT_innerdataset", obj);
            divData_form_tabData_tab3_form_cboRT_PRE3TAXRDT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">90</Col><Col id=\"datacolumn\">90</Col></Row><Row><Col id=\"codecolumn\">70</Col><Col id=\"datacolumn\">70</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_tabData_tab3_form_cboRT_PRE3TAXRDT_innerdataset);
            obj.set_text("0");
            obj.set_value("0");
            obj.set_index("0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE3PAYSUM","143","180","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("5");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE3BONUSSUM","143","209","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("6");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CURINBONUSSUM3","143","238","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("7");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE3HEALTHBEF","411","180","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("8");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE3HIREBEF","411","209","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("9");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ANNUITYBEF3","411","238","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("10");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE3INCTAXBEF","699","180","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("11");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE3PROVINCTAXBEF","699","209","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("12");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE3AGRTAXBEF","699","238","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("13");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_FORLABOR3","203","310","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("14");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_FOREIGNERTAX3","203","339","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("15");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_NWPAY3","531","310","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("16");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETCNTAX3","531","339","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("17");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BORNTAXSUBST3","819","310","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("18");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETCNTAXTOT3","819","339","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("19");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE3TAXRDT","531","368","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("21");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("전근무지4 ");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTITLE","19","10","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            obj.set_text("기본공제");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staCD_PRECOMPANY4","19","45","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj.set_text("사업자등록번호");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta02","138","45","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDT_JOIN4","19","74","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("3");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta04","138","74","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staCD_TAXOFFICE4","19","103","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("5");
            obj.set_text("세무서코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06","138","103","398","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDS_PRECOMPANY4","287","45","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("7");
            obj.set_text("회사명");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta07","386","45","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRE4","287","74","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("9");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta09","386","74","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("txtCD_PRECOMPANY4","142","50","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("11");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("txtCD_TAXOFFICE4","142","108","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("txtDS_PRECOMPANY4","390","50","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("13");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_JOIN4","142","79","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_RETIRE4","391","79","141","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTITLE2","19","140","824","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("16");
            obj.set_text("소득정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_PRE4PAYSUM","19","175","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("17");
            obj.set_text("급여합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta00","138","175","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_PRE4BONUSSUM","19","204","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("19");
            obj.set_text("상여합계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta01","138","204","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_CURINBONUSSUM4","19","233","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("21");
            obj.set_text("인정상여");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta03","138","233","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_PRE4HEALTHBEF","287","175","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("23");
            obj.set_text("기납건강보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta05","406","175","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_PRE4HIREBEF","287","204","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("25");
            obj.set_text("기납고용보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta08","406","204","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_ANNUITYBEF4","287","233","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("27");
            obj.set_text("기납연금보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta10","406","233","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_PRE4INCTAXBEF","555","175","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("29");
            obj.set_text("결정소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta11","694","175","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_PRE4PROVINCTAXBEF","555","204","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("31");
            obj.set_text("결정지방소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta12","694","204","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_PRE4AGRTAXBEF","555","233","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("33");
            obj.set_text("결정농특세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta13","694","233","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTITLE00","19","270","944","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("35");
            obj.set_text("비과세소득 및 감면소득");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_FORLABOR4","19","305","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("36");
            obj.set_text("국외근로");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta14","198","305","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_FOREIGNER4","19","334","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("38");
            obj.set_text("외국인근로자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta15","198","334","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staRT_PRE4TAXRDT","19","363","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("40");
            obj.set_text("중소기업취업자 세액감면비율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta16","198","363","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_NWPAY4","347","305","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("42");
            obj.set_text("야간근로수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta17","526","305","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_ETCNTAX4","347","334","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("44");
            obj.set_text("그밖의비과세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta18","526","334","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_PRE4TAXRDT","347","363","180","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("46");
            obj.set_text("중소기업취업자 감면소득금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta19","526","363","438","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_BORNTAXSUBST4","675","305","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("48");
            obj.set_text("출산.보육수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta20","814","305","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_ETCNTAXTOT4","675","334","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("50");
            obj.set_text("비과세합계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta21","814","334","150","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Combo("cboRT_PRE4TAXRDT","203","368","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("52");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_tabData_tab4_form_cboRT_PRE4TAXRDT_innerdataset = new nexacro.NormalDataset("divData_form_tabData_tab4_form_cboRT_PRE4TAXRDT_innerdataset", obj);
            divData_form_tabData_tab4_form_cboRT_PRE4TAXRDT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">90</Col><Col id=\"datacolumn\">90</Col></Row><Row><Col id=\"codecolumn\">70</Col><Col id=\"datacolumn\">70</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_tabData_tab4_form_cboRT_PRE4TAXRDT_innerdataset);
            obj.set_text("0");
            obj.set_value("0");
            obj.set_index("0");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE4PAYSUM","143","180","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("53");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE4BONUSSUM","143","209","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("54");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CURINBONUSSUM4","143","238","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("55");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE4HEALTHBEF","411","180","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("56");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE4HIREBEF","411","209","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("57");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ANNUITYBEF4","411","238","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("58");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE4INCTAXBEF","699","180","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("59");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE4PROVINCTAXBEF","699","209","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("60");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE4AGRTAXBEF","699","238","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("61");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_FORLABOR4","203","310","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("62");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_FOREIGNERTAX4","203","339","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("63");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_NWPAY4","531","310","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("64");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETCNTAX4","531","339","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("65");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BORNTAXSUBST4","819","310","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("66");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETCNTAXTOT4","819","339","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("67");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PRE4TAXRDT","531","368","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("68");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.tabData.tab1.form.txtCD_PRECOMPANY1","value","dsList","CD_COMPANY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.tabData.tab1.form.txtDS_PRECOMPANY1","value","dsList","DS_COMPANY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tabData.tab1.form.txtCD_TAXOFFICE1","value","dsList","CD_TAXOFFICE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tabData.tab1.form.ctclDT_JOIN1","value","dsList","DT_JOIN1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tabData.tab1.form.ctclDT_RETIRE1","value","dsList","DT_RETIRE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tabData.tab1.form.txtAM_PRE1PAYSUM","value","dsList","AM_PRE1PAYSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab1.form.txtAM_PRE1BONUSSUM","value","dsList","AM_PRE1BONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab1.form.txtAM_CURINBONUSSUM1","value","dsList","AM_PRE1inBONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab1.form.txtAM_PRE1HEALTHBEF","value","dsList","AM_PRE1HEALTHBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab1.form.txtAM_PRE1HIREBEF","value","dsList","AM_PRE1HIREBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab1.form.txtAM_ANNUITYBEF1","value","dsList","AM_PRE1ANNUITYBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab1.form.txtAM_PRE1INCTAXBEF","value","dsList","AM_PRE1INCTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab1.form.txtAM_PRE1PROVINCTAXBEF","value","dsList","AM_PRE1RESTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tabData.tab1.form.txtAM_PRE1AGRTAXBEF","value","dsList","AM_PRE1AGRTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tabData.tab1.form.txtAM_FORLABOR1","value","dsList","AM_OVERSEASNTAX1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab1.form.txtAM_FOREIGNERTAX1","value","dsList","AM_FOREIGNERNTAX1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.tabData.tab1.form.txtAM_NWPAY1","value","dsList","AM_NIGHTWORKNTAX1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tabData.tab1.form.txtAM_ETCNTAX1","value","dsList","AM_ETCNTAX1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tabData.tab1.form.txtAM_BORNTAXSUBST1","value","dsList","AM_BIRTH1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.tabData.tab1.form.txtAM_ETCNTAXTOT1","value","dsList","AM_PRE1NTAXSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.tabData.tab1.form.cboRT_PRE1TAXRDT","value","dsList","RT_PRE1TAXRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.tabData.tab1.form.txtAM_PRE1TAXRDT","value","dsList","AM_PRE1TAXREDUCTIONINCOMESUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.tabData.tab2.form.txtCD_PRECOMPANY2","value","dsList","CD_COMPANY2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.tabData.tab2.form.txtDS_PRECOMPANY2","value","dsList","DS_COMPANY2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.tabData.tab2.form.ctclDT_JOIN2","value","dsList","DT_JOIN2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tabData.tab2.form.ctclDT_RETIRE2","value","dsList","DT_RETIRE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tabData.tab2.form.txtCD_TAXOFFICE2","value","dsList","CD_TAXOFFICE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tabData.tab2.form.txtAM_PRE2PAYSUM","value","dsList","AM_PRE2PAYSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.tabData.tab2.form.txtAM_PRE2BONUSSUM","value","dsList","AM_PRE2BONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.tabData.tab2.form.txtAM_CURINBONUSSUM2","value","dsList","AM_PRE2inBONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.tabData.tab2.form.txtAM_PRE2HEALTHBEF","value","dsList","AM_PRE2HEALTHBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab2.form.txtAM_PRE2HIREBEF","value","dsList","AM_PRE2HIREBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab2.form.txtAM_ANNUITYBEF2","value","dsList","AM_PRE2ANNUITYBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab2.form.txtAM_PRE2INCTAXBEF","value","dsList","AM_PRE2INCTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab2.form.txtAM_PRE2PROVINCTAXBEF","value","dsList","AM_PRE2RESTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.tabData.tab2.form.txtAM_PRE2AGRTAXBEF","value","dsList","AM_PRE2AGRTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.tabData.tab2.form.txtAM_FORLABOR2","value","dsList","AM_OVERSEASNTAX2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab2.form.txtAM_FOREIGNERTAX2","value","dsList","AM_FOREIGNERNTAX2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.tabData.tab2.form.txtAM_NWPAY2","value","dsList","AM_NIGHTWORKNTAX2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.tabData.tab2.form.txtAM_ETCNTAX2","value","dsList","AM_ETCNTAX2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.tabData.tab2.form.txtAM_BORNTAXSUBST2","value","dsList","AM_BIRTH2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.tabData.tab2.form.txtAM_ETCNTAXTOT2","value","dsList","AM_PRE2NTAXSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.tabData.tab2.form.cboRT_PRE2TAXRDT","value","dsList","RT_PRE2TAXRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.tabData.tab2.form.txtAM_PRE2TAXRDT","value","dsList","AM_PRE2TAXREDUCTIONINCOMESUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.tabData.tab3.form.txtCD_PRECOMPANY3","value","dsList","CD_COMPANY3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.tabData.tab3.form.txtDS_PRECOMPANY3","value","dsList","DS_COMPANY3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.tabData.tab3.form.ctclDT_JOIN3","value","dsList","DT_JOIN3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.tabData.tab3.form.ctclDT_RETIRE3","value","dsList","DT_RETIRE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.tabData.tab3.form.txtCD_TAXOFFICE3","value","dsList","CD_TAXOFFICE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.tabData.tab3.form.txtAM_PRE3PAYSUM","value","dsList","AM_PRE3PAYSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.tabData.tab3.form.txtAM_PRE3BONUSSUM","value","dsList","AM_PRE3BONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.tabData.tab3.form.txtAM_CURINBONUSSUM3","value","dsList","AM_PRE3inBONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.tabData.tab3.form.txtAM_PRE3HEALTHBEF","value","dsList","AM_PRE3HEALTHBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.tabData.tab3.form.txtAM_PRE3HIREBEF","value","dsList","AM_PRE3HIREBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.tabData.tab3.form.txtAM_ANNUITYBEF3","value","dsList","AM_PRE3ANNUITYBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.tabData.tab3.form.txtAM_PRE3INCTAXBEF","value","dsList","AM_PRE3INCTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab3.form.txtAM_PRE3PROVINCTAXBEF","value","dsList","AM_PRE3RESTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.tabData.tab3.form.txtAM_PRE3AGRTAXBEF","value","dsList","AM_PRE3AGRTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.tabData.tab3.form.txtAM_FORLABOR3","value","dsList","AM_OVERSEASNTAX3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.tabData.tab3.form.txtAM_FOREIGNERTAX3","value","dsList","AM_FOREIGNERNTAX3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.tabData.tab3.form.txtAM_NWPAY3","value","dsList","AM_NIGHTWORKNTAX3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.tabData.tab3.form.txtAM_ETCNTAX3","value","dsList","AM_ETCNTAX3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.tabData.tab3.form.txtAM_BORNTAXSUBST3","value","dsList","AM_BIRTH3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.tabData.tab3.form.txtAM_ETCNTAXTOT3","value","dsList","AM_PRE3NTAXSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divData.form.tabData.tab3.form.cboRT_PRE3TAXRDT","value","dsList","RT_PRE3TAXRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.tabData.tab3.form.txtAM_PRE3TAXRDT","value","dsList","AM_PRE3TAXREDUCTIONINCOMESUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divData.form.tabData.tab4.form.txtCD_PRECOMPANY4","value","dsList","CD_COMPANY4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.tabData.tab4.form.txtDS_PRECOMPANY4","value","dsList","DS_COMPANY4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.tabData.tab4.form.ctclDT_JOIN4","value","dsList","DT_JOIN4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divData.form.tabData.tab4.form.ctclDT_RETIRE4","value","dsList","DT_RETIRE4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divData.form.tabData.tab4.form.txtCD_TAXOFFICE4","value","dsList","CD_TAXOFFICE4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divData.form.tabData.tab4.form.txtAM_PRE4PAYSUM","value","dsList","AM_PRE4PAYSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divData.form.tabData.tab4.form.txtAM_PRE4BONUSSUM","value","dsList","AM_PRE4BONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divData.form.tabData.tab4.form.txtAM_CURINBONUSSUM4","value","dsList","AM_PRE4inBONUSSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divData.form.tabData.tab4.form.txtAM_PRE4HEALTHBEF","value","dsList","AM_PRE4HEALTHBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divData.form.tabData.tab4.form.txtAM_PRE4HIREBEF","value","dsList","AM_PRE4HIREBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divData.form.tabData.tab4.form.txtAM_ANNUITYBEF4","value","dsList","AM_PRE4ANNUITYBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divData.form.tabData.tab4.form.txtAM_PRE4INCTAXBEF","value","dsList","AM_PRE4INCTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divData.form.tabData.tab4.form.txtAM_PRE4PROVINCTAXBEF","value","dsList","AM_PRE4RESTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divData.form.tabData.tab4.form.txtAM_PRE4AGRTAXBEF","value","dsList","AM_PRE4AGRTAXBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divData.form.tabData.tab4.form.txtAM_FORLABOR4","value","dsList","AM_OVERSEASNTAX4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divData.form.tabData.tab4.form.txtAM_FOREIGNERTAX4","value","dsList","AM_FOREIGNERNTAX4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divData.form.tabData.tab4.form.txtAM_NWPAY4","value","dsList","AM_NIGHTWORKNTAX4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","divData.form.tabData.tab4.form.txtAM_ETCNTAX4","value","dsList","AM_ETCNTAX4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","divData.form.tabData.tab4.form.txtAM_BORNTAXSUBST4","value","dsList","AM_BIRTH4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","divData.form.tabData.tab4.form.txtAM_ETCNTAXTOT4","value","dsList","AM_PRE4NTAXSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","divData.form.tabData.tab4.form.cboRT_PRE4TAXRDT","value","dsList","RT_PRE4TAXRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","divData.form.tabData.tab4.form.txtAM_PRE4TAXRDT","value","dsList","AM_PRE4TAXREDUCTIONINCOMESUM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAV_PRECOMPANY.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.YearEndClose = "";
        this.delNotValidYn = "N";	// 필수값 체크할지 구분자(Y:체크않암, N:체크함)

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
        	var today = this.gfnGetDate().substring(0,4) - 1; //전년도

        	this.ctclWORK_BASE.set_url(this.cboYN_MID.value == "Y"?"cmm::cmmCalMM.xfdl":"cmm::cmmCalYY.xfdl");
        	this.ctclWORK_BASE.form.TextBox.set_value(today);
        	if(!this.gfnIsNull(this.getOwnerFrame().WORK_BASE)) this.ctclWORK_BASE.form.TextBox.set_value(this.getOwnerFrame().WORK_BASE);
        	this.divSearch.form.staWORK_BASE.set_text(this.cboYN_MID.value=="Y"?"적용년월":"적용년도");

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP) && !this.gfnIsNull(this.getOwnerFrame().ID_SABUN)) {

        	    this.CD_CORP = this.getOwnerFrame().CD_CORP;
        		this.YY_BASE = this.getOwnerFrame().WORK_BASE;
                this.YN_MID = this.getOwnerFrame().YN_MID;
                this.ID_SABUN = this.getOwnerFrame().ID_SABUN;

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
        //
        // trace("fnSetButton>>>");
        //
        // 	this.FormBtns.Excel.set_enable(false);
        //
        // 	var bRtn = this.fnIsChangePossible();
        //
        // 	if(bRtn == false){
        // 		this.FormBtns.Add.set_enable(false);
        // 		this.FormBtns.Del.set_enable(false);
        // 		this.FormBtns.Save.set_enable(false);
        //
        // trace("ADD 비활성화")	;
        // 	}else{
        //
        // 		if(this.dsList.rowcount > 0){
        // 			this.FormBtns.Add.set_enable(false);
        // 			this.FormBtns.Save.set_enable(false);
        // 			this.FormBtns.Del.set_enable(true);
        //
        //
        // 			this.divData.form.tabData.tab1.set_enable(true);
        // 			this.divData.form.tabData.tab2.set_enable(true);
        // 			this.divData.form.tabData.tab3.set_enable(true);
        // 			this.divData.form.tabData.tab4.set_enable(true);
        // 		}else{
        //
        // 			this.FormBtns.Add.set_enable(true);
        // 			this.FormBtns.Del.set_enable(false);
        //
        // trace("ADD 활성화1111")	;
        //
        // 			this.divData.form.tabData.tab1.set_enable(true);
        // 			this.divData.form.tabData.tab2.set_enable(false);
        // 			this.divData.form.tabData.tab3.set_enable(false);
        // 			this.divData.form.tabData.tab4.set_enable(false);
        // 		}
        //
        // 	}
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.cboYN_MID = this.divSearch.form.cboYN_MID; 			//작업구분
        	this.ctclWORK_BASE = this.divSearch.form.ctclWORK_BASE; 	//적용년도
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP; 			//법인코드
        	this.ccfID_RESIDENT = this.divSearch.form.ccfID_RESIDENT;   //주민번호
        	this.edtID_SABUN = this.divSearch.form.edtID_SABUN; 		//사번
        	this.rdoTY_GUBUN = this.divSearch.form.rdoTY_GUBUN; 		//임직원 구분
        	this.edtNO_APPLY = this.divSearch.form.edtNO_APPLY;


        	this.grSearch = this.FormInfo.GR_SEARCH;					// 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					// 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_RESIDENT", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("MM_BASE", "string");
        	this.dsSelect.addColumn("NO_APPLY", "int");
        	this.dsSelect.addColumn("YN_MID", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("ID_RESIDENT", "string");
        	this.dsInsert.addColumn("ID_SABUN", "string");
        	this.dsInsert.addColumn("YY_BASE", "string");
        	this.dsInsert.addColumn("MM_BASE", "string");
        	this.dsInsert.addColumn("NO_APPLY", "int");
        	this.dsInsert.addColumn("YN_MID", "string");
        	this.dsInsert.addColumn("CD_PRECOMPANY1", "string");
        	this.dsInsert.addColumn("DS_PRECOMPANY1", "string");
        	this.dsInsert.addColumn("CD_TAXOFFICE1", "string");
        	this.dsInsert.addColumn("DT_JOIN1", "string");
        	this.dsInsert.addColumn("DT_RETIRE1", "string");
        	this.dsInsert.addColumn("AM_PRE1PAYSUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_PRE1BONUSSUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_PRE1HEALTHBEF", "int");
        	this.dsInsert.addColumn("AM_PRE1HIREBEF", "int");
        	this.dsInsert.addColumn("AM_PRE1ANNUITYBEF", "int");
        	this.dsInsert.addColumn("AM_PRE1INCTAXBEF", "int");
        	this.dsInsert.addColumn("AM_PRE1RESTAXBEF", "int");
        	this.dsInsert.addColumn("AM_PRE1AGRTAXBEF", "int");
        	this.dsInsert.addColumn("AM_RETIRE1", "int");
        	this.dsInsert.addColumn("CD_PRECOMPANY2", "string");
        	this.dsInsert.addColumn("DS_PRECOMPANY2", "string");
        	this.dsInsert.addColumn("CD_TAXOFFICE2", "string");
        	this.dsInsert.addColumn("DT_JOIN2", "string");
        	this.dsInsert.addColumn("DT_RETIRE2", "string");
        	this.dsInsert.addColumn("AM_PRE2PAYSUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_PRE2BONUSSUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_PRE2HEALTHBEF", "int");
        	this.dsInsert.addColumn("AM_PRE2HIREBEF", "int");
        	this.dsInsert.addColumn("AM_PRE2ANNUITYBEF", "int");
        	this.dsInsert.addColumn("AM_PRE2INCTAXBEF", "int");
        	this.dsInsert.addColumn("AM_PRE2RESTAXBEF", "int");
        	this.dsInsert.addColumn("AM_PRE2AGRTAXBEF", "int");
        	this.dsInsert.addColumn("AM_RETIRE2", "int");
        	this.dsInsert.addColumn("CD_PRECOMPANY3", "string");
        	this.dsInsert.addColumn("DS_PRECOMPANY3", "string");
        	this.dsInsert.addColumn("CD_TAXOFFICE3", "string");
        	this.dsInsert.addColumn("DT_JOIN3", "string");
        	this.dsInsert.addColumn("DT_RETIRE3", "string");
        	this.dsInsert.addColumn("AM_PRE3PAYSUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_PRE3BONUSSUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_PRE3HEALTHBEF", "int");
        	this.dsInsert.addColumn("AM_PRE3HIREBEF", "int");
        	this.dsInsert.addColumn("AM_PRE3ANNUITYBEF", "int");
        	this.dsInsert.addColumn("AM_PRE3INCTAXBEF", "int");
        	this.dsInsert.addColumn("AM_PRE3RESTAXBEF", "int");
        	this.dsInsert.addColumn("AM_PRE3AGRTAXBEF", "int");
        	this.dsInsert.addColumn("AM_RETIRE3", "int");
        	this.dsInsert.addColumn("CD_PRECOMPANY4", "string");
        	this.dsInsert.addColumn("DS_PRECOMPANY4", "string");
        	this.dsInsert.addColumn("CD_TAXOFFICE4", "string");
        	this.dsInsert.addColumn("DT_JOIN4", "string");
        	this.dsInsert.addColumn("DT_RETIRE4", "string");
        	this.dsInsert.addColumn("AM_PRE4PAYSUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_PRE4BONUSSUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_PRE4HEALTHBEF", "int");
        	this.dsInsert.addColumn("AM_PRE4HIREBEF", "int");
        	this.dsInsert.addColumn("AM_PRE4ANNUITYBEF", "int");
        	this.dsInsert.addColumn("AM_PRE4INCTAXBEF", "int");
        	this.dsInsert.addColumn("AM_PRE4RESTAXBEF", "int");
        	this.dsInsert.addColumn("AM_PRE4AGRTAXBEF", "int");
        	this.dsInsert.addColumn("AM_RETIRE4", "int");
        	this.dsInsert.addColumn("QN_PRECOMP", "int");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("AM_PRE1inBONUSSUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_OVERSEASNTAX1", "int");
        	this.dsInsert.addColumn("AM_NIGHTWORKNTAX1", "int");
        	this.dsInsert.addColumn("AM_BIRTH1", "int");
        	this.dsInsert.addColumn("AM_FOREIGNERNTAX1", "int");
        	this.dsInsert.addColumn("AM_ETCNTAX1", "int");
        	this.dsInsert.addColumn("AM_PRE1NTAXSUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_PRE2inBONUSSUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_OVERSEASNTAX2", "int");
        	this.dsInsert.addColumn("AM_NIGHTWORKNTAX2", "int");
        	this.dsInsert.addColumn("AM_BIRTH2", "int");
        	this.dsInsert.addColumn("AM_FOREIGNERNTAX2", "int");
        	this.dsInsert.addColumn("AM_ETCNTAX2", "int");
        	this.dsInsert.addColumn("AM_PRE2NTAXSUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_PRE3inBONUSSUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_OVERSEASNTAX3", "int");
        	this.dsInsert.addColumn("AM_NIGHTWORKNTAX3", "int");
        	this.dsInsert.addColumn("AM_BIRTH3", "int");
        	this.dsInsert.addColumn("AM_FOREIGNERNTAX3", "int");
        	this.dsInsert.addColumn("AM_ETCNTAX3", "int");
        	this.dsInsert.addColumn("AM_PRE3NTAXSUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_PRE4inBONUSSUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_OVERSEASNTAX4", "int");
        	this.dsInsert.addColumn("AM_NIGHTWORKNTAX4", "int");
        	this.dsInsert.addColumn("AM_BIRTH4", "int");
        	this.dsInsert.addColumn("AM_FOREIGNERNTAX4", "int");
        	this.dsInsert.addColumn("AM_ETCNTAX4", "int");
        	this.dsInsert.addColumn("AM_PRE4NTAXSUM", "bigdecimal");
        	this.dsInsert.addColumn("RT_PRE1TAXRDT", "int");
        	this.dsInsert.addColumn("RT_PRE2TAXRDT", "int");
        	this.dsInsert.addColumn("RT_PRE3TAXRDT", "int");
        	this.dsInsert.addColumn("RT_PRE4TAXRDT", "int");
        	this.dsInsert.addColumn("AM_PRE1TAXREDUCTIONINCOMESUM", "int");
        	this.dsInsert.addColumn("AM_PRE2TAXREDUCTIONINCOMESUM", "int");
        	this.dsInsert.addColumn("AM_PRE3TAXREDUCTIONINCOMESUM", "int");
        	this.dsInsert.addColumn("AM_PRE4TAXREDUCTIONINCOMESUM", "int");
        	this.dsInsert.addColumn("AM_PRE1OURSTOCKSUM", "int");
        	this.dsInsert.addColumn("AM_PRE2OURSTOCKSUM", "int");
        	this.dsInsert.addColumn("AM_PRE3OURSTOCKSUM", "int");
        	this.dsInsert.addColumn("AM_PRE4OURSTOCKSUM", "int");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("ID_RESIDENT", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("YY_BASE", "string");
        	this.dsUpdate.addColumn("MM_BASE", "string");
        	this.dsUpdate.addColumn("NO_APPLY", "int");
        	this.dsUpdate.addColumn("YN_MID", "string");
        	this.dsUpdate.addColumn("CD_PRECOMPANY1", "string");
        	this.dsUpdate.addColumn("DS_PRECOMPANY1", "string");
        	this.dsUpdate.addColumn("CD_TAXOFFICE1", "string");
        	this.dsUpdate.addColumn("DT_JOIN1", "string");
        	this.dsUpdate.addColumn("DT_RETIRE1", "string");
        	this.dsUpdate.addColumn("AM_PRE1PAYSUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PRE1BONUSSUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PRE1HEALTHBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE1HIREBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE1ANNUITYBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE1INCTAXBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE1RESTAXBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE1AGRTAXBEF", "int");
        	this.dsUpdate.addColumn("AM_RETIRE1", "int");
        	this.dsUpdate.addColumn("CD_PRECOMPANY2", "string");
        	this.dsUpdate.addColumn("DS_PRECOMPANY2", "string");
        	this.dsUpdate.addColumn("CD_TAXOFFICE2", "string");
        	this.dsUpdate.addColumn("DT_JOIN2", "string");
        	this.dsUpdate.addColumn("DT_RETIRE2", "string");
        	this.dsUpdate.addColumn("AM_PRE2PAYSUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PRE2BONUSSUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PRE2HEALTHBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE2HIREBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE2ANNUITYBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE2INCTAXBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE2RESTAXBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE2AGRTAXBEF", "int");
        	this.dsUpdate.addColumn("AM_RETIRE2", "int");
        	this.dsUpdate.addColumn("CD_PRECOMPANY3", "string");
        	this.dsUpdate.addColumn("DS_PRECOMPANY3", "string");
        	this.dsUpdate.addColumn("CD_TAXOFFICE3", "string");
        	this.dsUpdate.addColumn("DT_JOIN3", "string");
        	this.dsUpdate.addColumn("DT_RETIRE3", "string");
        	this.dsUpdate.addColumn("AM_PRE3PAYSUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PRE3BONUSSUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PRE3HEALTHBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE3HIREBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE3ANNUITYBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE3INCTAXBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE3RESTAXBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE3AGRTAXBEF", "int");
        	this.dsUpdate.addColumn("AM_RETIRE3", "int");
        	this.dsUpdate.addColumn("CD_PRECOMPANY4", "string");
        	this.dsUpdate.addColumn("DS_PRECOMPANY4", "string");
        	this.dsUpdate.addColumn("CD_TAXOFFICE4", "string");
        	this.dsUpdate.addColumn("DT_JOIN4", "string");
        	this.dsUpdate.addColumn("DT_RETIRE4", "string");
        	this.dsUpdate.addColumn("AM_PRE4PAYSUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PRE4BONUSSUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PRE4HEALTHBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE4HIREBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE4ANNUITYBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE4INCTAXBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE4RESTAXBEF", "int");
        	this.dsUpdate.addColumn("AM_PRE4AGRTAXBEF", "int");
        	this.dsUpdate.addColumn("AM_RETIRE4", "int");
        	this.dsUpdate.addColumn("QN_PRECOMP", "int");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("AM_PRE1inBONUSSUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_OVERSEASNTAX1", "int");
        	this.dsUpdate.addColumn("AM_NIGHTWORKNTAX1", "int");
        	this.dsUpdate.addColumn("AM_BIRTH1", "int");
        	this.dsUpdate.addColumn("AM_FOREIGNERNTAX1", "int");
        	this.dsUpdate.addColumn("AM_ETCNTAX1", "int");
        	this.dsUpdate.addColumn("AM_PRE1NTAXSUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PRE2inBONUSSUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_OVERSEASNTAX2", "int");
        	this.dsUpdate.addColumn("AM_NIGHTWORKNTAX2", "int");
        	this.dsUpdate.addColumn("AM_BIRTH2", "int");
        	this.dsUpdate.addColumn("AM_FOREIGNERNTAX2", "int");
        	this.dsUpdate.addColumn("AM_ETCNTAX2", "int");
        	this.dsUpdate.addColumn("AM_PRE2NTAXSUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PRE3inBONUSSUM", "int");
        	this.dsUpdate.addColumn("AM_OVERSEASNTAX3", "int");
        	this.dsUpdate.addColumn("AM_NIGHTWORKNTAX3", "int");
        	this.dsUpdate.addColumn("AM_BIRTH3", "int");
        	this.dsUpdate.addColumn("AM_FOREIGNERNTAX3", "int");
        	this.dsUpdate.addColumn("AM_ETCNTAX3", "int");
        	this.dsUpdate.addColumn("AM_PRE3NTAXSUM", "int");
        	this.dsUpdate.addColumn("AM_PRE4inBONUSSUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_OVERSEASNTAX4", "int");
        	this.dsUpdate.addColumn("AM_NIGHTWORKNTAX4", "int");
        	this.dsUpdate.addColumn("AM_BIRTH4", "int");
        	this.dsUpdate.addColumn("AM_FOREIGNERNTAX4", "int");
        	this.dsUpdate.addColumn("AM_ETCNTAX4", "int");
        	this.dsUpdate.addColumn("AM_PRE4NTAXSUM", "bigdecimal");
        	this.dsUpdate.addColumn("RT_PRE1TAXRDT", "int");
        	this.dsUpdate.addColumn("RT_PRE2TAXRDT", "int");
        	this.dsUpdate.addColumn("RT_PRE3TAXRDT", "int");
        	this.dsUpdate.addColumn("RT_PRE4TAXRDT", "int");
        	this.dsUpdate.addColumn("AM_PRE1TAXREDUCTIONINCOMESUM", "int");
        	this.dsUpdate.addColumn("AM_PRE2TAXREDUCTIONINCOMESUM", "int");
        	this.dsUpdate.addColumn("AM_PRE3TAXREDUCTIONINCOMESUM", "int");
        	this.dsUpdate.addColumn("AM_PRE4TAXREDUCTIONINCOMESUM", "int");
        	this.dsUpdate.addColumn("AM_PRE1OURSTOCKSUM", "int");
        	this.dsUpdate.addColumn("AM_PRE2OURSTOCKSUM", "int");
        	this.dsUpdate.addColumn("AM_PRE3OURSTOCKSUM", "int");
        	this.dsUpdate.addColumn("AM_PRE4OURSTOCKSUM", "int");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("ID_RESIDENT", "string");
        	this.dsDelete.addColumn("ID_SABUN", "string");
        	this.dsDelete.addColumn("YY_BASE", "string");
        	this.dsDelete.addColumn("MM_BASE", "string");
        	this.dsDelete.addColumn("NO_APPLY", "int");
        	this.dsDelete.addColumn("YN_MID", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        trace("fnSelect>>>");

        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "ID_SABUN", this.edtID_SABUN.value);
        	this.dsSelect.setColumn(0, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value:this.ctclWORK_BASE.form.TextBox.value.substring(0,4));
        	this.dsSelect.setColumn(0, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsSelect.setColumn(0, "NO_APPLY", 1);
        	this.dsSelect.setColumn(0, "YN_MID", this.cboYN_MID.value);

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect closeCheck=dsSelect";
        	var outData     = "dsList=select0 dsYnClose=closeCheck0";
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
        	if(this.dsList.rowcount <= 0 ){
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");
        		this.gfnSetFormStatus(this, "I");
        		this.FormBtns.Add.set_enable(false);
        	}else{
        		this.gfnAlert("더이상 추가 할수 없습니다.");
        		this.FormBtns.Add.set_enable(false);
        	}
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var tabIdx = this.divData.form.tabData.tabindex;

        	if(tabIdx == 0){
        		this.delNotValidYn = "N";	// 필수값 체크
        		this.gfnConfirm("전근무지 1~4의 자료가 모두 삭제됩니다.\n처리 하시겠습니까?", "fnDelTab1Callback");
        	}else if(tabIdx == 1){
        		this.delNotValidYn = "Y";	// 필수값 체크 하지 않는다
        		this.gfnConfirm("전근무지2의 자료를 삭제하시겠습니까?", "fnDelTab2Callback","2");
        	}else if(tabIdx == 2){
        		this.delNotValidYn = "Y";	// 필수값 체크 하지 않는다
        		this.gfnConfirm("전근무지3의 자료를 삭제하시겠습니까?", "fnDelTab2Callback","3");
        	}else if(tabIdx == 3){
        		this.delNotValidYn = "Y";	// 필수값 체크 하지 않는다
        		this.gfnConfirm("전근무지4의 자료를 삭제하시겠습니까?", "fnDelTab2Callback","4");
        	}


        };

        // 첫번째 탭 선택되어있을경우는 데이터를 삭제한다
        this.fnDelTab1Callback = function(strId, val)  {
        	if(val == false) return;

        	this.gfnSetFormStatus(this, "D");

        	this.fnSave();
        };

        // 두번째 이상 탭이 선택되어있을경우는 해당탭 데이터를 공백으로 입력하고 업데이트한다
        this.fnDelTab2Callback = function(strId, val)  {
        	if(val == false) return;

        	this.gfnSetFormStatus(this, "U");

        	this.dsList.setColumn(0, "CD_COMPANY"+strId, "");
        	this.dsList.setColumn(0, "DS_COMPANY"+strId, "");
        	this.dsList.setColumn(0, "DT_JOIN"+strId, "");
        	this.dsList.setColumn(0, "DT_RETIRE"+strId, "");
        	this.dsList.setColumn(0, "CD_TAXOFFICE"+strId, "");
        	this.dsList.setColumn(0, "AM_PRE"+strId+"PAYSUM", "");
        	this.dsList.setColumn(0, "AM_PRE"+strId+"HEALTHBEF", "");
        	this.dsList.setColumn(0, "AM_PRE"+strId+"INCTAXBEF", "");
        	this.dsList.setColumn(0, "AM_PRE"+strId+"BONUSSUM", "");
        	this.dsList.setColumn(0, "AM_PRE"+strId+"HIREBEF", "");
        	this.dsList.setColumn(0, "AM_PRE"+strId+"RESTAXBEF", "");
        	this.dsList.setColumn(0, "AM_PRE"+strId+"INBONUSSUM", "");
        	this.dsList.setColumn(0, "AM_PRE"+strId+"ANNUITYBEF", "");
        	this.dsList.setColumn(0, "AM_PRE"+strId+"AGRTAXBEF", "");
        	this.dsList.setColumn(0, "AM_OVERSEASNTAX"+strId, "");
        	this.dsList.setColumn(0, "AM_NIGHTWORKNTAX"+strId, "");
        	this.dsList.setColumn(0, "AM_BIRTH"+strId, "");
        	this.dsList.setColumn(0, "AM_FOREIGNERNTAX"+strId, "");
        	this.dsList.setColumn(0, "AM_ETCNTAX"+strId, "");
        	this.dsList.setColumn(0, "AM_PRE"+strId+"NTAXSUM", "");
        	this.dsList.setColumn(0, "RT_PRE"+strId+"TAXRDT", "");
        	this.dsList.setColumn(0, "AM_PRE"+strId+"TAXREDUCTIONINCOMESUM", "");

        	this.fnSave();
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	if(this.delNotValidYn == "N"){
        		if(!this.fnSaveValidate()) return;
        		if (!this.gfValidate()) return;
        		if (!this.gfDateValidate()) return;
        	}

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var tabIdx = this.divData.form.tabData.tabindex;
        		var status = this.gfnGetFormStatus(this);
        		trace("status : "+status);

        		if(status == "D"){
        			var nrow = this.dsDelete.addRow();
        			this.dsDelete.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value);
        			this.dsDelete.setColumn(nrow, "ID_SABUN", this.edtID_SABUN.value);
        			this.dsDelete.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value:this.ctclWORK_BASE.form.TextBox.value.substring(0,4));
        			this.dsDelete.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        			this.dsDelete.setColumn(nrow, "NO_APPLY", 1);
        			this.dsDelete.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        			this.dsDelete.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        		} else if (status == "I") {
        				var nrow = this.dsInsert.addRow();

        				this.dsInsert.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value);
        				this.dsInsert.setColumn(nrow, "ID_SABUN", this.edtID_SABUN.value);
        				this.dsInsert.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value:this.ctclWORK_BASE.form.TextBox.value.substring(0,4));
        				this.dsInsert.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        				this.dsInsert.setColumn(nrow, "NO_APPLY", 1);
        				this.dsInsert.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        				this.dsInsert.setColumn(nrow, "CD_PRECOMPANY1", nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(i, "CD_COMPANY1"),"")), "-", ""));
        				this.dsInsert.setColumn(nrow, "DS_PRECOMPANY1", this.dsList.getColumn(i, "DS_COMPANY1"));
        				this.dsInsert.setColumn(nrow, "CD_TAXOFFICE1", this.dsList.getColumn(i, "CD_TAXOFFICE1"));
        				this.dsInsert.setColumn(nrow, "DT_JOIN1", this.dsList.getColumn(i, "DT_JOIN1"));
        				this.dsInsert.setColumn(nrow, "DT_RETIRE1", this.dsList.getColumn(i, "DT_RETIRE1"));
        				this.dsInsert.setColumn(nrow, "AM_PRE1PAYSUM", this.dsList.getColumn(i, "AM_PRE1PAYSUM"));
        				this.dsInsert.setColumn(nrow, "AM_PRE1BONUSSUM", this.dsList.getColumn(i, "AM_PRE1BONUSSUM"));
        				this.dsInsert.setColumn(nrow, "AM_PRE1HEALTHBEF", this.dsList.getColumn(i, "AM_PRE1HEALTHBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE1HIREBEF", this.dsList.getColumn(i, "AM_PRE1HIREBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE1ANNUITYBEF", this.dsList.getColumn(i, "AM_PRE1ANNUITYBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE1INCTAXBEF", this.dsList.getColumn(i, "AM_PRE1INCTAXBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE1RESTAXBEF", this.dsList.getColumn(i, "AM_PRE1RESTAXBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE1AGRTAXBEF", this.dsList.getColumn(i, "AM_PRE1AGRTAXBEF"));
        				this.dsInsert.setColumn(nrow, "AM_RETIRE1", this.dsList.getColumn(i, "AM_RETIRE1"));
        				this.dsInsert.setColumn(nrow, "CD_PRECOMPANY2", nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(i, "CD_COMPANY2"),"")), "-", ""));
        				this.dsInsert.setColumn(nrow, "DS_PRECOMPANY2", this.dsList.getColumn(i, "DS_COMPANY2"));
        				this.dsInsert.setColumn(nrow, "CD_TAXOFFICE2", this.dsList.getColumn(i, "CD_TAXOFFICE2"));
        				this.dsInsert.setColumn(nrow, "DT_JOIN2", this.dsList.getColumn(i, "DT_JOIN2"));
        				this.dsInsert.setColumn(nrow, "DT_RETIRE2", this.dsList.getColumn(i, "DT_RETIRE2"));
        				this.dsInsert.setColumn(nrow, "AM_PRE2PAYSUM", this.dsList.getColumn(i, "AM_PRE2PAYSUM"));
        				this.dsInsert.setColumn(nrow, "AM_PRE2BONUSSUM", this.dsList.getColumn(i, "AM_PRE2BONUSSUM"));
        				this.dsInsert.setColumn(nrow, "AM_PRE2HEALTHBEF", this.dsList.getColumn(i, "AM_PRE2HEALTHBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE2HIREBEF", this.dsList.getColumn(i, "AM_PRE2HIREBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE2ANNUITYBEF", this.dsList.getColumn(i, "AM_PRE2ANNUITYBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE2INCTAXBEF", this.dsList.getColumn(i, "AM_PRE2INCTAXBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE2RESTAXBEF", this.dsList.getColumn(i, "AM_PRE2RESTAXBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE2AGRTAXBEF", this.dsList.getColumn(i, "AM_PRE2AGRTAXBEF"));
        				this.dsInsert.setColumn(nrow, "AM_RETIRE2", this.dsList.getColumn(i, "AM_RETIRE2"));
        				this.dsInsert.setColumn(nrow, "CD_PRECOMPANY3", nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(i, "CD_COMPANY3"),"")), "-", ""));
        				this.dsInsert.setColumn(nrow, "DS_PRECOMPANY3", this.dsList.getColumn(i, "DS_COMPANY3"));
        				this.dsInsert.setColumn(nrow, "CD_TAXOFFICE3", this.dsList.getColumn(i, "CD_TAXOFFICE3"));
        				this.dsInsert.setColumn(nrow, "DT_JOIN3", this.dsList.getColumn(i, "DT_JOIN3"));
        				this.dsInsert.setColumn(nrow, "DT_RETIRE3", this.dsList.getColumn(i, "DT_RETIRE3"));
        				this.dsInsert.setColumn(nrow, "AM_PRE3PAYSUM", this.dsList.getColumn(i, "AM_PRE3PAYSUM"));
        				this.dsInsert.setColumn(nrow, "AM_PRE3BONUSSUM", this.dsList.getColumn(i, "AM_PRE3BONUSSUM"));
        				this.dsInsert.setColumn(nrow, "AM_PRE3HEALTHBEF", this.dsList.getColumn(i, "AM_PRE3HEALTHBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE3HIREBEF", this.dsList.getColumn(i, "AM_PRE3HIREBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE3ANNUITYBEF", this.dsList.getColumn(i, "AM_PRE3ANNUITYBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE3INCTAXBEF", this.dsList.getColumn(i, "AM_PRE3INCTAXBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE3RESTAXBEF", this.dsList.getColumn(i, "AM_PRE3RESTAXBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE3AGRTAXBEF", this.dsList.getColumn(i, "AM_PRE3AGRTAXBEF"));
        				this.dsInsert.setColumn(nrow, "AM_RETIRE3", this.dsList.getColumn(i, "AM_RETIRE3"));
        				this.dsInsert.setColumn(nrow, "CD_PRECOMPANY4", nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(i, "CD_COMPANY4"),"")), "-", ""));
        				this.dsInsert.setColumn(nrow, "DS_PRECOMPANY4", this.dsList.getColumn(i, "DS_COMPANY4"));
        				this.dsInsert.setColumn(nrow, "CD_TAXOFFICE4", this.dsList.getColumn(i, "CD_TAXOFFICE4"));
        				this.dsInsert.setColumn(nrow, "DT_JOIN4", this.dsList.getColumn(i, "DT_JOIN4"));
        				this.dsInsert.setColumn(nrow, "DT_RETIRE4", this.dsList.getColumn(i, "DT_RETIRE4"));
        				this.dsInsert.setColumn(nrow, "AM_PRE4PAYSUM", this.dsList.getColumn(i, "AM_PRE4PAYSUM"));
        				this.dsInsert.setColumn(nrow, "AM_PRE4BONUSSUM", this.dsList.getColumn(i, "AM_PRE4BONUSSUM"));
        				this.dsInsert.setColumn(nrow, "AM_PRE4HEALTHBEF", this.dsList.getColumn(i, "AM_PRE4HEALTHBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE4HIREBEF", this.dsList.getColumn(i, "AM_PRE4HIREBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE4ANNUITYBEF", this.dsList.getColumn(i, "AM_PRE4ANNUITYBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE4INCTAXBEF", this.dsList.getColumn(i, "AM_PRE4INCTAXBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE4RESTAXBEF", this.dsList.getColumn(i, "AM_PRE4RESTAXBEF"));
        				this.dsInsert.setColumn(nrow, "AM_PRE4AGRTAXBEF", this.dsList.getColumn(i, "AM_PRE4AGRTAXBEF"));
        				this.dsInsert.setColumn(nrow, "AM_RETIRE4", this.dsList.getColumn(i, "AM_RETIRE4"));

        				var qnPrecomp = 0;
        				if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_COMPANY4"))){
        					qnPrecomp = 4;
        				}else if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_COMPANY3"))){
        					qnPrecomp = 3;
        				}else if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_COMPANY2"))){
        					qnPrecomp = 2;
        				}else if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_COMPANY1"))){
        					qnPrecomp = 1;
        				}

        				this.dsInsert.setColumn(nrow, "QN_PRECOMP", qnPrecomp);
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        				this.dsInsert.setColumn(nrow, "AM_PRE1inBONUSSUM", this.dsList.getColumn(i, "AM_PRE1inBONUSSUM")); ///프로시저에서 일케되어 있어서.
        				this.dsInsert.setColumn(nrow, "AM_OVERSEASNTAX1", this.dsList.getColumn(i, "AM_OVERSEASNTAX1"));
        				this.dsInsert.setColumn(nrow, "AM_NIGHTWORKNTAX1", this.dsList.getColumn(i, "AM_NIGHTWORKNTAX1"));
        				this.dsInsert.setColumn(nrow, "AM_BIRTH1", this.dsList.getColumn(i, "AM_BIRTH1"));
        				this.dsInsert.setColumn(nrow, "AM_FOREIGNERNTAX1", this.dsList.getColumn(i, "AM_FOREIGNERNTAX1"));
        				this.dsInsert.setColumn(nrow, "AM_ETCNTAX1", this.dsList.getColumn(i, "AM_ETCNTAX1"));
        				this.dsInsert.setColumn(nrow, "AM_PRE1NTAXSUM", this.dsList.getColumn(i, "AM_PRE1NTAXSUM"));
        				this.dsInsert.setColumn(nrow, "AM_PRE2inBONUSSUM", this.dsList.getColumn(i, "AM_PRE2inBONUSSUM"));
        				this.dsInsert.setColumn(nrow, "AM_OVERSEASNTAX2", this.dsList.getColumn(i, "AM_OVERSEASNTAX2"));
        				this.dsInsert.setColumn(nrow, "AM_NIGHTWORKNTAX2", this.dsList.getColumn(i, "AM_NIGHTWORKNTAX2"));
        				this.dsInsert.setColumn(nrow, "AM_BIRTH2", this.dsList.getColumn(i, "AM_BIRTH2"));
        				this.dsInsert.setColumn(nrow, "AM_FOREIGNERNTAX2", this.dsList.getColumn(i, "AM_FOREIGNERNTAX2"));
        				this.dsInsert.setColumn(nrow, "AM_ETCNTAX2", this.dsList.getColumn(i, "AM_ETCNTAX2"));
        				this.dsInsert.setColumn(nrow, "AM_PRE2NTAXSUM", this.dsList.getColumn(i, "AM_PRE2NTAXSUM"));
        				this.dsInsert.setColumn(nrow, "AM_PRE3inBONUSSUM", this.dsList.getColumn(i, "AM_PRE3inBONUSSUM"));
        				this.dsInsert.setColumn(nrow, "AM_OVERSEASNTAX3", this.dsList.getColumn(i, "AM_OVERSEASNTAX3"));
        				this.dsInsert.setColumn(nrow, "AM_NIGHTWORKNTAX3", this.dsList.getColumn(i, "AM_NIGHTWORKNTAX3"));
        				this.dsInsert.setColumn(nrow, "AM_BIRTH3", this.dsList.getColumn(i, "AM_BIRTH3"));
        				this.dsInsert.setColumn(nrow, "AM_FOREIGNERNTAX3", this.dsList.getColumn(i, "AM_FOREIGNERNTAX3"));
        				this.dsInsert.setColumn(nrow, "AM_ETCNTAX3", this.dsList.getColumn(i, "AM_ETCNTAX3"));
        				this.dsInsert.setColumn(nrow, "AM_PRE3NTAXSUM", this.dsList.getColumn(i, "AM_PRE3NTAXSUM"));
        				this.dsInsert.setColumn(nrow, "AM_PRE4inBONUSSUM", this.dsList.getColumn(i, "AM_PRE4inBONUSSUM"));
        				this.dsInsert.setColumn(nrow, "AM_OVERSEASNTAX4", this.dsList.getColumn(i, "AM_OVERSEASNTAX4"));
        				this.dsInsert.setColumn(nrow, "AM_NIGHTWORKNTAX4", this.dsList.getColumn(i, "AM_NIGHTWORKNTAX4"));
        				this.dsInsert.setColumn(nrow, "AM_BIRTH4", this.dsList.getColumn(i, "AM_BIRTH4"));
        				this.dsInsert.setColumn(nrow, "AM_FOREIGNERNTAX4", this.dsList.getColumn(i, "AM_FOREIGNERNTAX4"));
        				this.dsInsert.setColumn(nrow, "AM_ETCNTAX4", this.dsList.getColumn(i, "AM_ETCNTAX4"));
        				this.dsInsert.setColumn(nrow, "AM_PRE4NTAXSUM", this.dsList.getColumn(i, "AM_PRE4NTAXSUM"));
        				this.dsInsert.setColumn(nrow, "RT_PRE1TAXRDT", this.dsList.getColumn(i, "RT_PRE1TAXRDT"));
        				this.dsInsert.setColumn(nrow, "RT_PRE2TAXRDT", this.dsList.getColumn(i, "RT_PRE2TAXRDT"));
        				this.dsInsert.setColumn(nrow, "RT_PRE3TAXRDT", this.dsList.getColumn(i, "RT_PRE3TAXRDT"));
        				this.dsInsert.setColumn(nrow, "RT_PRE4TAXRDT", this.dsList.getColumn(i, "RT_PRE4TAXRDT"));
        				this.dsInsert.setColumn(nrow, "AM_PRE1TAXREDUCTIONINCOMESUM", this.dsList.getColumn(i, "AM_PRE1TAXREDUCTIONINCOMESUM"));
        				this.dsInsert.setColumn(nrow, "AM_PRE2TAXREDUCTIONINCOMESUM", this.dsList.getColumn(i, "AM_PRE2TAXREDUCTIONINCOMESUM"));
        				this.dsInsert.setColumn(nrow, "AM_PRE3TAXREDUCTIONINCOMESUM", this.dsList.getColumn(i, "AM_PRE3TAXREDUCTIONINCOMESUM"));
        				this.dsInsert.setColumn(nrow, "AM_PRE4TAXREDUCTIONINCOMESUM", this.dsList.getColumn(i, "AM_PRE4TAXREDUCTIONINCOMESUM"));
        		} else { //update
        				var nrow = this.dsUpdate.addRow();

        				this.dsUpdate.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value);
        				this.dsUpdate.setColumn(nrow, "ID_SABUN", this.edtID_SABUN.value);
        				this.dsUpdate.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value:this.ctclWORK_BASE.form.TextBox.value.substring(0,4));
        				this.dsUpdate.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        				this.dsUpdate.setColumn(nrow, "NO_APPLY", 1);
        				this.dsUpdate.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        				this.dsUpdate.setColumn(nrow, "CD_PRECOMPANY1", nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(i, "CD_COMPANY1"),"")), "-", ""));
        				this.dsUpdate.setColumn(nrow, "DS_PRECOMPANY1", this.dsList.getColumn(i, "DS_COMPANY1"));
        				this.dsUpdate.setColumn(nrow, "CD_TAXOFFICE1", this.dsList.getColumn(i, "CD_TAXOFFICE1"));
        				this.dsUpdate.setColumn(nrow, "DT_JOIN1", this.dsList.getColumn(i, "DT_JOIN1"));
        				this.dsUpdate.setColumn(nrow, "DT_RETIRE1", this.dsList.getColumn(i, "DT_RETIRE1"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE1PAYSUM", this.dsList.getColumn(i, "AM_PRE1PAYSUM"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE1BONUSSUM", this.dsList.getColumn(i, "AM_PRE1BONUSSUM"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE1HEALTHBEF", this.dsList.getColumn(i, "AM_PRE1HEALTHBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE1HIREBEF", this.dsList.getColumn(i, "AM_PRE1HIREBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE1ANNUITYBEF", this.dsList.getColumn(i, "AM_PRE1ANNUITYBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE1INCTAXBEF", this.dsList.getColumn(i, "AM_PRE1INCTAXBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE1RESTAXBEF", this.dsList.getColumn(i, "AM_PRE1RESTAXBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE1AGRTAXBEF", this.dsList.getColumn(i, "AM_PRE1AGRTAXBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_RETIRE1", this.dsList.getColumn(i, "AM_RETIRE1"));
        				this.dsUpdate.setColumn(nrow, "CD_PRECOMPANY2", nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(i, "CD_COMPANY2"),"")), "-", ""));
        				this.dsUpdate.setColumn(nrow, "DS_PRECOMPANY2", this.dsList.getColumn(i, "DS_COMPANY2"));
        				this.dsUpdate.setColumn(nrow, "CD_TAXOFFICE2", this.dsList.getColumn(i, "CD_TAXOFFICE2"));
        				this.dsUpdate.setColumn(nrow, "DT_JOIN2", this.dsList.getColumn(i, "DT_JOIN2"));
        				this.dsUpdate.setColumn(nrow, "DT_RETIRE2", this.dsList.getColumn(i, "DT_RETIRE2"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE2PAYSUM", this.dsList.getColumn(i, "AM_PRE2PAYSUM"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE2BONUSSUM", this.dsList.getColumn(i, "AM_PRE2BONUSSUM"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE2HEALTHBEF", this.dsList.getColumn(i, "AM_PRE2HEALTHBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE2HIREBEF", this.dsList.getColumn(i, "AM_PRE2HIREBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE2ANNUITYBEF", this.dsList.getColumn(i, "AM_PRE2ANNUITYBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE2INCTAXBEF", this.dsList.getColumn(i, "AM_PRE2INCTAXBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE2RESTAXBEF", this.dsList.getColumn(i, "AM_PRE2RESTAXBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE2AGRTAXBEF", this.dsList.getColumn(i, "AM_PRE2AGRTAXBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_RETIRE2", this.dsList.getColumn(i, "AM_RETIRE2"));
        				this.dsUpdate.setColumn(nrow, "CD_PRECOMPANY3", nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(i, "CD_COMPANY3"),"")), "-", ""));
        				this.dsUpdate.setColumn(nrow, "DS_PRECOMPANY3", this.dsList.getColumn(i, "DS_COMPANY3"));
        				this.dsUpdate.setColumn(nrow, "CD_TAXOFFICE3", this.dsList.getColumn(i, "CD_TAXOFFICE3"));
        				this.dsUpdate.setColumn(nrow, "DT_JOIN3", this.dsList.getColumn(i, "DT_JOIN3"));
        				this.dsUpdate.setColumn(nrow, "DT_RETIRE3", this.dsList.getColumn(i, "DT_RETIRE3"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE3PAYSUM", this.dsList.getColumn(i, "AM_PRE3PAYSUM"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE3BONUSSUM", this.dsList.getColumn(i, "AM_PRE3BONUSSUM"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE3HEALTHBEF", this.dsList.getColumn(i, "AM_PRE3HEALTHBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE3HIREBEF", this.dsList.getColumn(i, "AM_PRE3HIREBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE3ANNUITYBEF", this.dsList.getColumn(i, "AM_PRE3ANNUITYBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE3INCTAXBEF", this.dsList.getColumn(i, "AM_PRE3INCTAXBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE3RESTAXBEF", this.dsList.getColumn(i, "AM_PRE3RESTAXBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE3AGRTAXBEF", this.dsList.getColumn(i, "AM_PRE3AGRTAXBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_RETIRE3", this.dsList.getColumn(i, "AM_RETIRE3"));
        				this.dsUpdate.setColumn(nrow, "CD_PRECOMPANY4", nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(i, "CD_COMPANY4"),"")), "-", ""));
        				this.dsUpdate.setColumn(nrow, "DS_PRECOMPANY4", this.dsList.getColumn(i, "DS_COMPANY4"));
        				this.dsUpdate.setColumn(nrow, "CD_TAXOFFICE4", this.dsList.getColumn(i, "CD_TAXOFFICE4"));
        				this.dsUpdate.setColumn(nrow, "DT_JOIN4", this.dsList.getColumn(i, "DT_JOIN4"));
        				this.dsUpdate.setColumn(nrow, "DT_RETIRE4", this.dsList.getColumn(i, "DT_RETIRE4"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE4PAYSUM", this.dsList.getColumn(i, "AM_PRE4PAYSUM"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE4BONUSSUM", this.dsList.getColumn(i, "AM_PRE4BONUSSUM"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE4HEALTHBEF", this.dsList.getColumn(i, "AM_PRE4HEALTHBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE4HIREBEF", this.dsList.getColumn(i, "AM_PRE4HIREBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE4ANNUITYBEF", this.dsList.getColumn(i, "AM_PRE4ANNUITYBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE4INCTAXBEF", this.dsList.getColumn(i, "AM_PRE4INCTAXBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE4RESTAXBEF", this.dsList.getColumn(i, "AM_PRE4RESTAXBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE4AGRTAXBEF", this.dsList.getColumn(i, "AM_PRE4AGRTAXBEF"));
        				this.dsUpdate.setColumn(nrow, "AM_RETIRE4", this.dsList.getColumn(i, "AM_RETIRE4"));

        				var qnPrecomp = 0;
        				if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_COMPANY4"))){
        					qnPrecomp = 4;
        				}else if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_COMPANY3"))){
        					qnPrecomp = 3;
        				}else if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_COMPANY2"))){
        					qnPrecomp = 2;
        				}else if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_COMPANY1"))){
        					qnPrecomp = 1;
        				}

        				this.dsUpdate.setColumn(nrow, "QN_PRECOMP", qnPrecomp);
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        				this.dsUpdate.setColumn(nrow, "AM_PRE1inBONUSSUM", this.dsList.getColumn(i, "AM_PRE1inBONUSSUM"));
        				this.dsUpdate.setColumn(nrow, "AM_OVERSEASNTAX1", this.dsList.getColumn(i, "AM_OVERSEASNTAX1"));
        				this.dsUpdate.setColumn(nrow, "AM_NIGHTWORKNTAX1", this.dsList.getColumn(i, "AM_NIGHTWORKNTAX1"));
        				this.dsUpdate.setColumn(nrow, "AM_BIRTH1", this.dsList.getColumn(i, "AM_BIRTH1"));
        				this.dsUpdate.setColumn(nrow, "AM_FOREIGNERNTAX1", this.dsList.getColumn(i, "AM_FOREIGNERNTAX1"));
        				this.dsUpdate.setColumn(nrow, "AM_ETCNTAX1", this.dsList.getColumn(i, "AM_ETCNTAX1"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE1NTAXSUM", this.dsList.getColumn(i, "AM_PRE1NTAXSUM"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE2inBONUSSUM", this.dsList.getColumn(i, "AM_PRE2inBONUSSUM"));
        				this.dsUpdate.setColumn(nrow, "AM_OVERSEASNTAX2", this.dsList.getColumn(i, "AM_OVERSEASNTAX2"));
        				this.dsUpdate.setColumn(nrow, "AM_NIGHTWORKNTAX2", this.dsList.getColumn(i, "AM_NIGHTWORKNTAX2"));
        				this.dsUpdate.setColumn(nrow, "AM_BIRTH2", this.dsList.getColumn(i, "AM_BIRTH2"));
        				this.dsUpdate.setColumn(nrow, "AM_FOREIGNERNTAX2", this.dsList.getColumn(i, "AM_FOREIGNERNTAX2"));
        				this.dsUpdate.setColumn(nrow, "AM_ETCNTAX2", this.dsList.getColumn(i, "AM_ETCNTAX2"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE2NTAXSUM", this.dsList.getColumn(i, "AM_PRE2NTAXSUM"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE3inBONUSSUM", this.dsList.getColumn(i, "AM_PRE3inBONUSSUM"));
        				this.dsUpdate.setColumn(nrow, "AM_OVERSEASNTAX3", this.dsList.getColumn(i, "AM_OVERSEASNTAX3"));
        				this.dsUpdate.setColumn(nrow, "AM_NIGHTWORKNTAX3", this.dsList.getColumn(i, "AM_NIGHTWORKNTAX3"));
        				this.dsUpdate.setColumn(nrow, "AM_BIRTH3", this.dsList.getColumn(i, "AM_BIRTH3"));
        				this.dsUpdate.setColumn(nrow, "AM_FOREIGNERNTAX3", this.dsList.getColumn(i, "AM_FOREIGNERNTAX3"));
        				this.dsUpdate.setColumn(nrow, "AM_ETCNTAX3", this.dsList.getColumn(i, "AM_ETCNTAX3"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE3NTAXSUM", this.dsList.getColumn(i, "AM_PRE3NTAXSUM"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE4inBONUSSUM", this.dsList.getColumn(i, "AM_PRE4inBONUSSUM"));
        				this.dsUpdate.setColumn(nrow, "AM_OVERSEASNTAX4", this.dsList.getColumn(i, "AM_OVERSEASNTAX4"));
        				this.dsUpdate.setColumn(nrow, "AM_NIGHTWORKNTAX4", this.dsList.getColumn(i, "AM_NIGHTWORKNTAX4"));
        				this.dsUpdate.setColumn(nrow, "AM_BIRTH4", this.dsList.getColumn(i, "AM_BIRTH4"));
        				this.dsUpdate.setColumn(nrow, "AM_FOREIGNERNTAX4", this.dsList.getColumn(i, "AM_FOREIGNERNTAX4"));
        				this.dsUpdate.setColumn(nrow, "AM_ETCNTAX4", this.dsList.getColumn(i, "AM_ETCNTAX4"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE4NTAXSUM", this.dsList.getColumn(i, "AM_PRE4NTAXSUM"));
        				this.dsUpdate.setColumn(nrow, "RT_PRE1TAXRDT", this.dsList.getColumn(i, "RT_PRE1TAXRDT"));
        				this.dsUpdate.setColumn(nrow, "RT_PRE2TAXRDT", this.dsList.getColumn(i, "RT_PRE2TAXRDT"));
        				this.dsUpdate.setColumn(nrow, "RT_PRE3TAXRDT", this.dsList.getColumn(i, "RT_PRE3TAXRDT"));
        				this.dsUpdate.setColumn(nrow, "RT_PRE4TAXRDT", this.dsList.getColumn(i, "RT_PRE4TAXRDT"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE1TAXREDUCTIONINCOMESUM", this.dsList.getColumn(i, "AM_PRE1TAXREDUCTIONINCOMESUM"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE2TAXREDUCTIONINCOMESUM", this.dsList.getColumn(i, "AM_PRE2TAXREDUCTIONINCOMESUM"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE3TAXREDUCTIONINCOMESUM", this.dsList.getColumn(i, "AM_PRE3TAXREDUCTIONINCOMESUM"));
        				this.dsUpdate.setColumn(nrow, "AM_PRE4TAXREDUCTIONINCOMESUM", this.dsList.getColumn(i, "AM_PRE4TAXREDUCTIONINCOMESUM"));
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

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
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
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
        		this.gfnAlert(this.divSearch.form.staWORK_BASE.text + "을/를 입력하세요.");
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

        	//주민등록번호
        	if (this.gfnIsNull(this.ccfID_RESIDENT.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfID_RESIDENT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("주민번호를 입력하세요.", "fnVaidateCallback");
        	}

         	return validate;
        };

        //필수입력
        this.fnSaveValidate = function (){
        	var tabIdx = this.divData.form.tabData.tabindex;
        	var tabArr = this.divData.form.tabData.tabpages;
        	var compArr = tabArr[tabIdx].form.components;
        	trace(compArr.length);
        	//trace(this.dsNecessary.saveXML());
        	//alert(this.dsNecessary1.rowcount);
        	//trace(this.dsValidChk.rowcount);

        	var tabDtNum = "";
        	if(tabIdx == 0){
        		tabDtNum = "1";
        	}else if(tabIdx == 1){
        		tabDtNum = "2";
        	}else if(tabIdx == 2){
        		tabDtNum = "3";
        	}else if(tabIdx == 3){
        		tabDtNum = "4";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_COMPANY"+tabDtNum))){
        		this.gfnAlert("사업자등록번호를 입력하세요.");
        		return false;
        	}else if(this.gfnIsNull(this.dsList.getColumn(0, "DS_COMPANY"+tabDtNum))){
        		this.gfnAlert("회사명을 입력하세요.");
        		return false;
        	}else if(this.gfnIsNull(this.dsList.getColumn(0, "DT_JOIN"+tabDtNum))){
        		this.gfnAlert("입사일자를 입력하세요.");
        		return false;
        	}else if(this.gfnIsNull(this.dsList.getColumn(0, "DT_RETIRE"+tabDtNum))){
        		this.gfnAlert("퇴사일자를 입력하세요.");
        		return false;
        	}


        	/*
        		for(var j = 0 ; j < compArr.length; j++){
        			for( var k= 0 ;k < this.dsValidChk.rowcount; k++){
        				// 필수값 체크
        				if(compArr[j].id == this.dsValidChk.getColumn(k , "COMP")){
        					if(this.gfnIsNull(this.gfnTrim(compArr[j].value))){
        						this.fnVaidateCallback = function() {
        							var tabIdx = this.dsValidChk.getColumn(k, "TAB");
        							this.divData.form.tabData.set_tabindex(tabIdx);
        							compArr[j].setFocus();
        						}
        					this.gfnAlert(this.dsValidChk.getColumn(k, "LABEL") + "을/를 입력하세요.", "fnVaidateCallback");
        					return false;
        					}
        				}
        			}
        		}
        	*/
        	return true;
        };

        // 사업자등록번호 유효성 체크 및 전근무지 입력 확인
         this.gfValidate = function ()
        {
        	var CD_PRECOMPANY1 = nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.divData.form.tabData.tab1.form.txtCD_PRECOMPANY1.value,"")), "-", "");
        	var CD_PRECOMPANY2 = nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.divData.form.tabData.tab2.form.txtCD_PRECOMPANY2.value,"")), "-", "");
        	var CD_PRECOMPANY3 = nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.divData.form.tabData.tab3.form.txtCD_PRECOMPANY3.value,"")), "-", "");
        	var CD_PRECOMPANY4 = nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.divData.form.tabData.tab4.form.txtCD_PRECOMPANY4.value,"")), "-", "");

        	trace(CD_PRECOMPANY1);
        	trace("CD_PRECOMPANY2"+CD_PRECOMPANY2+"CD_PRECOMPANY2");
        	trace(this.divData.form.tabData.tab1.form.txtCD_PRECOMPANY1.value);

        	/*전근무지 입력 확인*/
        	var tabIdx = this.divData.form.tabData.tabindex; //현재 탭
        	trace("tabIdx"+tabIdx);
        	trace("CD_PRECOMPANY3"+this.gfnIsNull(CD_PRECOMPANY3));

        	if(tabIdx == 3 && this.gfnIsNull(CD_PRECOMPANY3)){
        		this.fnVaidateCallback = function() {
        			this.divData.form.tabData.tab4.form.txtCD_PRECOMPANY4.setFocus();
        		}
        		this.gfnAlert("[전근무지3]부터 입력해 주세요.", "fnVaidateCallback");
        		//this.FormBtns.Select.click();
        		return false;
        	}
        	if(tabIdx == 2 && this.gfnIsNull(CD_PRECOMPANY2)){
        		this.fnVaidateCallback = function() {
        			this.divData.form.tabData.tab3.form.txtCD_PRECOMPANY3.setFocus();
        		}
        		this.gfnAlert("[전근무지2]부터 입력해 주세요.", "fnVaidateCallback");
        		//this.FormBtns.Select.click();
        		return false;
        	}




        	/*사업자등록번호 유효성 체크*/
        	if(!this.gfnIsNull(this.divData.form.tabData.tab1.form.txtCD_PRECOMPANY1.value) && CD_PRECOMPANY1 != "" &&  !this.gfnIsBzIdNo(CD_PRECOMPANY1)){
        		this.fnVaidateCallback = function() {
        			this.divData.form.tabData.tab1.form.txtCD_PRECOMPANY1.setFocus();
        		}
        		this.gfnAlert("[전근무지1]의 사업자등록번호가 유효하지 않습니다.", "fnVaidateCallback");
        		return false;
        	}
        	if(!this.gfnIsNull(this.divData.form.tabData.tab2.form.txtCD_PRECOMPANY2.value) && CD_PRECOMPANY2 != "" && !this.gfnIsBzIdNo(CD_PRECOMPANY2)){
        		this.fnVaidateCallback = function() {
        			this.divData.form.tabData.tab2.form.txtCD_PRECOMPANY2.setFocus();
        		}
        		this.gfnAlert("[전근무지2]의 사업자등록번호가 유효하지 않습니다.", "fnVaidateCallback");
        		return false;
        	}
        	if(!this.gfnIsNull(this.divData.form.tabData.tab3.form.txtCD_PRECOMPANY3.value) && CD_PRECOMPANY3 != "" && !this.gfnIsBzIdNo(CD_PRECOMPANY3)){
        		this.fnVaidateCallback = function() {
        			this.divData.form.tabData.tab3.form.txtCD_PRECOMPANY3.setFocus();
        		}
        		this.gfnAlert("[전근무지3]의 사업자등록번호가 유효하지 않습니다.", "fnVaidateCallback");
        		return false;
        	}
        	if(!this.gfnIsNull(this.divData.form.tabData.tab4.form.txtCD_PRECOMPANY4.value) && CD_PRECOMPANY4 != "" &&  !this.gfnIsBzIdNo(CD_PRECOMPANY4)){
        		this.fnVaidateCallback = function() {
        			this.divData.form.tabData.tab4.form.txtCD_PRECOMPANY4.setFocus();
        		}
        		this.gfnAlert("[전근무지4]의 사업자등록번호가 유효하지 않습니다.", "fnVaidateCallback");
        		return false;
        	}
        	return true;
        };

        // 입퇴사일 기간 체크
        this.gfDateValidate = function () {
        	var DT_JOIN1 = this.divData.form.tabData.tab1.form.ctclDT_JOIN1.value;
        	var DT_RETIRE1 = this.divData.form.tabData.tab1.form.ctclDT_RETIRE1.value;
        	var DT_JOIN2 = this.divData.form.tabData.tab2.form.ctclDT_JOIN2.value;
        	var DT_RETIRE2 = this.divData.form.tabData.tab2.form.ctclDT_RETIRE2.value;
        	var DT_JOIN3 = this.divData.form.tabData.tab3.form.ctclDT_JOIN3.value;
        	var DT_RETIRE3 = this.divData.form.tabData.tab3.form.ctclDT_RETIRE3.value;
        	var DT_JOIN4 = this.divData.form.tabData.tab4.form.ctclDT_JOIN4.value;
        	var DT_RETIRE4 = this.divData.form.tabData.tab4.form.ctclDT_RETIRE4.value;

        	if (!this.gfnIsNull(DT_JOIN1) && !this.gfnIsNull(DT_RETIRE1)) {
        		if (DT_JOIN1 > DT_RETIRE1) {
        			this.fnAlertCallback = function() {
        				this.divData.form.tabData.tab1.form.ctclDT_JOIN1.setFocus();
        			}
        			this.gfnAlert("[전근무지1]의 입/퇴사일 기간이 올바르지 않습니다.", "fnAlertCallback");
        			return false;
        		}
        	}
        	if (!this.gfnIsNull(DT_JOIN2) && !this.gfnIsNull(DT_RETIRE2)) {
        		if (DT_JOIN2 > DT_RETIRE2) {
        			this.fnAlertCallback = function() {
        				this.divData.form.tabData.tab2.form.ctclDT_JOIN2.setFocus();
        			}
        			this.gfnAlert("[전근무지2]의 입/퇴사일 기간이 올바르지 않습니다.", "fnAlertCallback");
        			return false;
        		}
        	}
        	if (!this.gfnIsNull(DT_JOIN3) && !this.gfnIsNull(DT_RETIRE3)) {
        		if (DT_JOIN3 > DT_RETIRE3) {
        			this.fnAlertCallback = function() {
        				this.divData.form.tabData.tab3.form.ctclDT_JOIN3.setFocus();
        			}
        			this.gfnAlert("[전근무지3]의 입/퇴사일 기간이 올바르지 않습니다.", "fnAlertCallback");
        			return false;
        		}
        	}
        	if (!this.gfnIsNull(DT_JOIN4) && !this.gfnIsNull(DT_RETIRE4)) {
        		if (DT_JOIN4 > DT_RETIRE4) {
        			this.fnAlertCallback = function() {
        				this.divData.form.tabData.tab4.form.ctclDT_JOIN4.setFocus();
        			}
        			this.gfnAlert("[전근무지4]의 입/퇴사일 기간이 올바르지 않습니다.", "fnAlertCallback");
        			return false;
        		}
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
        	if (svcID == "select") {

        		trace("this.dsList.rowcount", this.dsList.rowcount);

        		if(this.dsList.rowcount > 0){
        			this.divData.form.tabData.tab1.set_enable(true);
        			this.divData.form.tabData.tab2.set_enable(true);
        			this.divData.form.tabData.tab3.set_enable(true);
        			this.divData.form.tabData.tab4.set_enable(true);
        		}else{

        			this.divData.form.tabData.tab1.set_enable(true);
        			this.divData.form.tabData.tab2.set_enable(false);
        			this.divData.form.tabData.tab3.set_enable(false);
        			this.divData.form.tabData.tab4.set_enable(false);
        		}
        		this.gfnSetFormStatus(this, "Q"); //fnSetButton 위에 두기
         		this.fnSetButton();
         		this.fnSetSingleForm();

        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.delNotValidYn = "N";	// 초기화
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

        		case "ccfID_RESIDENT":
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
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.ccfID_RESIDENT.form.CDTextBox.set_value("");
        			this.ccfID_RESIDENT.form.DSTextBox.set_value("");
        			this.edtID_SABUN.set_value("");
        			break;

        		case "ccfID_RESIDENT"://주민등록번호
        			//this.ccfID_RESIDENT.form.CDTextBox.set_value(arr[0]["ID_RESIDENT"]);
        			//this.ccfID_RESIDENT.form.DSTextBox.set_value(arr[0]["DS_HNAME"]);

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
         * 탭 이벤트
         ************************************************************************/
        this.divData_tabData_onchanged = function(obj,e)
        {
        	var tabIdx = this.divData.form.tabData.tabindex;

        	var objDS = this.fnGetBindDataset(e.preindex);

        	if(this.gfnDsIsUpdated(objDS)){
        		this.gfnAlert("저장되지 않은 정보가 있습니다.\n해당 탭 저장 후 이동이 가능합니다.");
        		this.divData.form.tabData.set_enableevent(false);
        		this.divData.form.tabData.set_tabindex(e.preindex);
        		this.divData.form.tabData.set_enableevent(true);
        		return;
        	}

        };

        this.fnGetBindDataset = function(tabIdx){
        	var objDS;

        	switch(tabIdx){
        		case 0:
        		case 1:
        		case 2:
        		case 3:
        			objDS = this.dsList;
        		break;
        	}

        	return objDS;
        };

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
        trace("fnSearchInit>>>");

        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.dsList.clearData();
        	}
        };
        this.dsList_onvaluechanged = function(obj,e)
        {
        // 	this.fnSetButton();
        };

        this.AMEdit_onchanged = function(obj,e)
        {
        	if(this.gfnGetFormStatus(this) != "I") {
        		this.gfnSetFormStatus(this, "U");
        	}

        	var amPre1ntaxsum = nexacro.toNumber(this.dsList.getColumn(0, "AM_OVERSEASNTAX1"),0) + nexacro.toNumber(this.dsList.getColumn(0, "AM_NIGHTWORKNTAX1"),0) +
        						nexacro.toNumber(this.dsList.getColumn(0, "AM_BIRTH1"),0) + nexacro.toNumber(this.dsList.getColumn(0, "AM_FOREIGNERNTAX1"),0) +
        						nexacro.toNumber(this.dsList.getColumn(0, "AM_ETCNTAX1"),0);
        	this.dsList.setColumn(0, "AM_PRE1NTAXSUM", amPre1ntaxsum);

        	var amPre2ntaxsum = nexacro.toNumber(this.dsList.getColumn(0, "AM_OVERSEASNTAX2"),0) + nexacro.toNumber(this.dsList.getColumn(0, "AM_NIGHTWORKNTAX2"),0) +
        						nexacro.toNumber(this.dsList.getColumn(0, "AM_BIRTH2"),0) + nexacro.toNumber(this.dsList.getColumn(0, "AM_FOREIGNERNTAX2"),0) +
        						nexacro.toNumber(this.dsList.getColumn(0, "AM_ETCNTAX2"),0);
        	this.dsList.setColumn(0, "AM_PRE2NTAXSUM", amPre2ntaxsum);

        	var amPre3ntaxsum = nexacro.toNumber(this.dsList.getColumn(0, "AM_OVERSEASNTAX3"),0) + nexacro.toNumber(this.dsList.getColumn(0, "AM_NIGHTWORKNTAX3"),0) +
        						nexacro.toNumber(this.dsList.getColumn(0, "AM_BIRTH3"),0) + nexacro.toNumber(this.dsList.getColumn(0, "AM_FOREIGNERNTAX3"),0) +
        						nexacro.toNumber(this.dsList.getColumn(0, "AM_ETCNTAX3"),0);
        	this.dsList.setColumn(0, "AM_PRE3NTAXSUM", amPre3ntaxsum);

        	var amPre4ntaxsum = nexacro.toNumber(this.dsList.getColumn(0, "AM_OVERSEASNTAX4"),0) + nexacro.toNumber(this.dsList.getColumn(0, "AM_NIGHTWORKNTAX4"),0) +
        						nexacro.toNumber(this.dsList.getColumn(0, "AM_BIRTH4"),0) + nexacro.toNumber(this.dsList.getColumn(0, "AM_FOREIGNERNTAX4"),0) +
        						nexacro.toNumber(this.dsList.getColumn(0, "AM_ETCNTAX4"),0);
        	this.dsList.setColumn(0, "AM_PRE4NTAXSUM", amPre4ntaxsum);

        };


        this.fnIsChangePossible = function(){
        	var bPossible = false;

        	var YEAREND_CLOSE = this.dsYnClose.getColumn(0, "YEAREND_CLOSE");
        	var YN_CLOSE = this.dsYnClose.getColumn(0, "YN_CLOSE");


        	if(YEAREND_CLOSE == "Y" && YN_CLOSE == "Y"){
        		bPossible = false;
        	}
        	else if(YEAREND_CLOSE == "Y" && YN_CLOSE == "N"){
        		bPossible = false;
        	}
        	else if(YEAREND_CLOSE == "N" && YN_CLOSE == "Y"){
        		bPossible = false;
        	}
        	else if(YEAREND_CLOSE == "N" && YN_CLOSE == "N"){
        		bPossible = true;
        	}

        	if(bPossible){
        		trace("fnIsChangePossible>>수정가능");
        	}else{
        		trace("fnIsChangePossible>>수정불가");
        	}

        	return bPossible;
        }

        this.fnSetSingleForm = function(){

        	var bRtn = this.fnIsChangePossible();

        	//싱글폼 읽기전용처리
        	var tabArr = this.divData.form.tabData.tabpages;

        	for(var i = 0 ; i < this.divData.form.tabData.getTabpageCount(); i++){
        		var compArr = tabArr[i].form.components;

        		for(var j=0;j<compArr.length; j++){
        			var comp = compArr[j];

        			if(comp instanceof nexacro.Div){
        				if(!this.gfnIsNull(comp.url) && comp.url == "cmm::cmmCodeFind.xfdl"){
        					comp.form.set_readonly(!bRtn);
        				}else{
        					comp.set_enable(bRtn);
        				}
        			}else if(comp instanceof nexacro.Grid){
        				;
        			}else if(comp instanceof nexacro.Edit ||
        					 comp instanceof nexacro.MaskEdit ||
        					 comp instanceof nexacro.Calendar ||
        					 comp instanceof nexacro.TextArea  ||
        					 comp instanceof nexacro.Radio
        			){
        				comp.set_readonly(!bRtn);
        			}else if(comp instanceof nexacro.Combo ||
        					 comp instanceof nexacro.CheckBox
        			){
        				comp.set_enable(bRtn);
        			}
        		}

        	}

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab1.form.txtCD_PRECOMPANY1.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtCD_TAXOFFICE1.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtDS_PRECOMPANY1.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.ctclDT_JOIN1.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.ctclDT_RETIRE1.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.cboRT_PRE1TAXRDT.addEventHandler("onitemchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtAM_PRE1PAYSUM.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtAM_PRE1BONUSSUM.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtAM_CURINBONUSSUM1.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtAM_PRE1HEALTHBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtAM_PRE1HIREBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtAM_ANNUITYBEF1.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtAM_PRE1INCTAXBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtAM_PRE1PROVINCTAXBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtAM_PRE1AGRTAXBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtAM_FORLABOR1.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtAM_FOREIGNERTAX1.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtAM_NWPAY1.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtAM_ETCNTAX1.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtAM_BORNTAXSUBST1.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtAM_ETCNTAXTOT1.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab1.form.txtAM_PRE1TAXRDT.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtCD_PRECOMPANY2.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtCD_TAXOFFICE2.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtDS_PRECOMPANY2.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.ctclDT_JOIN2.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.ctclDT_RETIRE2.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.cboRT_PRE2TAXRDT.addEventHandler("onitemchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtAM_PRE2PAYSUM.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtAM_PRE2BONUSSUM.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtAM_CURINBONUSSUM2.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtAM_PRE2HEALTHBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtAM_PRE2HIREBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtAM_ANNUITYBEF2.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtAM_PRE2INCTAXBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtAM_PRE2PROVINCTAXBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtAM_PRE2AGRTAXBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtAM_FORLABOR2.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtAM_FOREIGNERTAX2.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtAM_NWPAY2.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtAM_ETCNTAX2.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtAM_BORNTAXSUBST2.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtAM_ETCNTAXTOT2.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab2.form.txtAM_PRE2TAXRDT.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtCD_PRECOMPANY3.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtCD_TAXOFFICE3.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtDS_PRECOMPANY3.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.ctclDT_JOIN3.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.ctclDT_RETIRE3.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.cboRT_PRE3TAXRDT.addEventHandler("onitemchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtAM_PRE3PAYSUM.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtAM_PRE3BONUSSUM.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtAM_CURINBONUSSUM3.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtAM_PRE3HEALTHBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtAM_PRE3HIREBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtAM_ANNUITYBEF3.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtAM_PRE3INCTAXBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtAM_PRE3PROVINCTAXBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtAM_PRE3AGRTAXBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtAM_FORLABOR3.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtAM_FOREIGNERTAX3.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtAM_NWPAY3.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtAM_ETCNTAX3.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtAM_BORNTAXSUBST3.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtAM_ETCNTAXTOT3.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab3.form.txtAM_PRE3TAXRDT.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtCD_PRECOMPANY4.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtCD_TAXOFFICE4.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtDS_PRECOMPANY4.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.ctclDT_JOIN4.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.ctclDT_RETIRE4.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.staAM_BORNTAXSUBST4.addEventHandler("onclick",this.divData_tabData_tab4_staAM_BORNTAXSUBST4_onclick,this);
            this.divData.form.tabData.tab4.form.cboRT_PRE4TAXRDT.addEventHandler("onitemchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtAM_PRE4PAYSUM.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtAM_PRE4BONUSSUM.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtAM_CURINBONUSSUM4.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtAM_PRE4HEALTHBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtAM_PRE4HIREBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtAM_ANNUITYBEF4.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtAM_PRE4INCTAXBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtAM_PRE4PROVINCTAXBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtAM_PRE4AGRTAXBEF.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtAM_FORLABOR4.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtAM_FOREIGNERTAX4.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtAM_NWPAY4.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtAM_ETCNTAX4.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtAM_BORNTAXSUBST4.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtAM_ETCNTAXTOT4.addEventHandler("onchanged",this.AMEdit_onchanged,this);
            this.divData.form.tabData.tab4.form.txtAM_PRE4TAXRDT.addEventHandler("onchanged",this.AMEdit_onchanged,this);
        };
        this.loadIncludeScript("DAV_PRECOMPANY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
