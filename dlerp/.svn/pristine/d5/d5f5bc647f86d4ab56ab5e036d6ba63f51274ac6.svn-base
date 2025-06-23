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
                this._setFormPosition(1150,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INPUT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PRESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PRESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PRESIDENT_HP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PRESIDENT_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PRESIDENT_POST\" type=\"STRING\" size=\"256\"/><Column id=\"AT_PRESIDENT_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_PRESIDENT_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PRESIDENT_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT1_HP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT1_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT1_POST\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COMPRESIDENT1_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COMPRESIDENT1_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT1_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT2_HP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT2_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT2_POST\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COMPRESIDENT2_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COMPRESIDENT2_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT2_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DIVIDE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FOUNDATION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"TY_LARGECOM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOMEPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM_HANDPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POSTHQ\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRHQ1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRHQ2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POSTHQ_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRHQ1_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRHQ2_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POSTWORK\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRWORK1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRWORK2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POSTREGIST\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRREGIST1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRREGIST2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FAX_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DC\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_JUDGESCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_CUSTOMER1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CUSTOMER2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CUSTOMER3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TECHEXPERT\" type=\"INT\" size=\"256\"/><Column id=\"NO_ENGINEER1\" type=\"INT\" size=\"256\"/><Column id=\"NO_TOTAL\" type=\"INT\" size=\"256\"/><Column id=\"NO_MANAGE\" type=\"INT\" size=\"256\"/><Column id=\"NO_NONLICENSE\" type=\"INT\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"GR_CREDIT\" type=\"STRING\" size=\"256\"/><Column id=\"GR_CASH\" type=\"STRING\" size=\"256\"/><Column id=\"GR_RMIS\" type=\"STRING\" size=\"256\"/><Column id=\"TY_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"TY_REGIST_DM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TALAK\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_BANK_ALAS\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_BANK_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_BANK_HOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CREDIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_AGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GROUPWARE\" type=\"STRING\" size=\"256\"/><Column id=\"GR_NICE_CREDIT\" type=\"STRING\" size=\"256\"/><Column id=\"GR_NICE_CASH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">select00</Col><Col id=\"SP\">DCAPR_REGIST_SELECT</Col></Row><Row><Col id=\"TARGET\">insert00</Col><Col id=\"SP\">DCAPR_REGIST_INSERT</Col></Row><Row><Col id=\"TARGET\">update00</Col><Col id=\"SP\">DCAPR_REGIST_UPDATE</Col></Row><Row><Col id=\"TARGET\">regdel00</Col><Col id=\"SP\">DCAPR_REGISTALL_DELETE</Col></Row><Row><Col id=\"TARGET\">select10</Col><Col id=\"SP\">DCAPR_COMHISTORY_SELECT</Col></Row><Row><Col id=\"TARGET\">save10</Col><Col id=\"SP\">DCAPR_COMHISTORY_SAVE</Col></Row><Row><Col id=\"TARGET\">select15</Col><Col id=\"SP\">DCAPR_STAFF_SELECT</Col></Row><Row><Col id=\"TARGET\">save15</Col><Col id=\"SP\">DCAPR_STAFF_SAVE</Col></Row><Row><Col id=\"TARGET\">select20</Col><Col id=\"SP\">DCAPR_REGISTLICCOST_SELECT</Col></Row><Row><Col id=\"TARGET\">save20</Col><Col id=\"SP\">DCAPR_REGISTLICCOST_SAVE</Col></Row><Row><Col id=\"TARGET\">select25</Col><Col id=\"SP\">DMVPR_REGISTLICCOST_DM_SELECT</Col></Row><Row><Col id=\"TARGET\">save25</Col><Col id=\"SP\">DCAPR_REGISTLICCOST_DM_SAVE</Col></Row><Row><Col id=\"TARGET\">select30</Col><Col id=\"SP\">DCAPR_REGISTLICENSE_SELECT</Col></Row><Row><Col id=\"TARGET\">save30</Col><Col id=\"SP\">DCAPR_REGISTLICENSE_SAVE</Col></Row><Row><Col id=\"TARGET\">select40</Col><Col id=\"SP\">DCAPR_MANAGESTATUS_SELECT</Col></Row><Row><Col id=\"TARGET\">save40</Col><Col id=\"SP\">DCAPR_MANAGESTATUS_SAVE</Col></Row><Row><Col id=\"TARGET\">select50</Col><Col id=\"SP\">DCAPR_EQUIP_SELECT</Col></Row><Row><Col id=\"TARGET\">save50</Col><Col id=\"SP\">DCAPR_EQUIP_SAVE</Col></Row><Row><Col id=\"TARGET\">select60</Col><Col id=\"SP\">DCAPR_CONSRESULT_SELECT</Col></Row><Row><Col id=\"TARGET\">save60</Col><Col id=\"SP\">DCAPR_CONSRESULT_SAVE</Col></Row><Row><Col id=\"TARGET\">select70</Col><Col id=\"SP\">DCAPR_JUSTICE_SELECT</Col></Row><Row><Col id=\"TARGET\">save70</Col><Col id=\"SP\">DCAPR_JUSTICE_SAVE</Col></Row><Row><Col id=\"TARGET\">select80</Col><Col id=\"SP\">DCAPR_ISO_SELECT</Col></Row><Row><Col id=\"TARGET\">save80</Col><Col id=\"SP\">DCAPR_ISO_SAVE</Col></Row><Row><Col id=\"TARGET\">select90</Col><Col id=\"SP\">DCAPR_BIDJOIN_SELECT</Col></Row><Row><Col id=\"TARGET\">select95</Col><Col id=\"SP\">DCAPR_CONTRACT_SELECT</Col></Row><Row><Col id=\"TARGET\">pwdInit</Col><Col id=\"SP\">DCAPR_PWD_INIT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INPUT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_DIVIDE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_KIND", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_LARGECOM", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGR_CREDIT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGR_CASH", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGR_RMIS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\"/><Col id=\"CD_CODE\">빈값</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_REGIST", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired0", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">NO_SJC</Col><Col id=\"DS_FIELD\">사업자등록번호</Col></Row><Row><Col id=\"CD_FIELD\">DS_VENDOR</Col><Col id=\"DS_FIELD\">회사명</Col></Row><Row><Col id=\"CD_FIELD\">DS_PRESIDENT</Col><Col id=\"DS_FIELD\">대표자</Col></Row><Row><Col id=\"CD_FIELD\">CD_DIVIDE</Col><Col id=\"DS_FIELD\">사업자구분</Col></Row><Row><Col id=\"CD_FIELD\">DT_FOUNDATION</Col><Col id=\"DS_FIELD\">설립일자</Col></Row><Row><Col id=\"CD_FIELD\">CD_KIND</Col><Col id=\"DS_FIELD\">전문건설구분</Col></Row><Row><Col id=\"CD_FIELD\">DS_STATUS</Col><Col id=\"DS_FIELD\">업태</Col></Row><Row><Col id=\"CD_FIELD\">DS_ITEM</Col><Col id=\"DS_FIELD\">종목</Col></Row><Row><Col id=\"CD_FIELD\">NO_POSTHQ</Col><Col id=\"DS_FIELD\">본사주소지</Col></Row><Row><Col id=\"CD_FIELD\">TY_REGIST</Col><Col id=\"DS_FIELD\">외주등록구분</Col></Row><Row><Col id=\"CD_FIELD\">TY_REGIST_DM</Col><Col id=\"DS_FIELD\">자재등록구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput0", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList20", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList30", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList40", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList50", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList60", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList70", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList80", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList90", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList95", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"1000000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTabInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"tab_index\" type=\"STRING\" size=\"256\"/><Column id=\"dsDataNum\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"tab_index\">0</Col><Col id=\"dsDataNum\">00</Col></Row><Row><Col id=\"tab_index\">1</Col><Col id=\"dsDataNum\">10</Col></Row><Row><Col id=\"tab_index\">2</Col><Col id=\"dsDataNum\">15</Col></Row><Row><Col id=\"tab_index\">3</Col><Col id=\"dsDataNum\">20</Col></Row><Row><Col id=\"dsDataNum\">25</Col><Col id=\"tab_index\">4</Col></Row><Row><Col id=\"tab_index\">5</Col><Col id=\"dsDataNum\">30</Col></Row><Row><Col id=\"tab_index\">6</Col><Col id=\"dsDataNum\">40</Col></Row><Row><Col id=\"tab_index\">7</Col><Col id=\"dsDataNum\">50</Col></Row><Row><Col id=\"tab_index\">8</Col><Col id=\"dsDataNum\">60</Col></Row><Row><Col id=\"tab_index\">9</Col><Col id=\"dsDataNum\">70</Col></Row><Row><Col id=\"tab_index\">10</Col><Col id=\"dsDataNum\">80</Col></Row><Row><Col id=\"tab_index\">11</Col><Col id=\"dsDataNum\">90</Col></Row><Row><Col id=\"tab_index\">12</Col><Col id=\"dsDataNum\">95</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList15", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList25", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ITEM","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ITEM","staCD_ITEM:0.0","10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFVENDOR_06");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staREG_DT","ccfCD_ITEM:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("등록년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtREG_DT","staREG_DT:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_preload("true");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab00",this.divData.form.tabData);
            obj.set_text("일반");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("div_STD","0","10",null,"200","0",null,null,null,null,null,this.divData.form.tabData.tab00.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.form.tabData.tab00.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("0");
            obj.set_text("기본사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta00","0","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("1");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg00","sta00:-1","staTitle:5","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta01","staBg00:-1","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("3");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg01","sta01:-1","staTitle:5","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta02","staBg01:-1","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("5");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg02","sta02:-1","staTitle:5","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta00:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("7");
            obj.set_text("대표자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg03","sta03:-1","staBg00:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta04","staBg03:-1","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("9");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg04","sta04:-1","staBg01:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta05","staBg04:-1","sta02:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("11");
            obj.set_text("회사홈페이지");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg05","sta05:-1","staBg02:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("13");
            obj.set_text("사업자구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg06","sta06:-1","staBg03:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta07","staBg06:-1","sta04:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("15");
            obj.set_text("설립일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg07","sta07:-1","staBg04:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta08","staBg07:-1","sta05:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("17");
            obj.set_text("전문건설구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg08","sta08:-1","staBg05:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta09","0","sta06:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("19");
            obj.set_text("기업구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg09","sta09:-1","staBg06:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta10","staBg09:-1","sta07:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("21");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg10","sta10:-1","staBg07:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta11","staBg10:-1","sta08:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("23");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg11","sta11:-1","staBg08:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta09:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("25");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg12","sta12:-1","staBg09:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta13","staBg12:-1","sta10:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("27");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg13","sta13:-1","staBg10:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta14","staBg13:-1","sta11:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("29");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("staBg14","sta14:-1","staBg11:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_SJC","sta00:5","staTitle:10","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("31");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR","sta01:5","staTitle:10","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("32");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_REGIST","sta02:5","staTitle:10","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("33");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_PRESIDENT","sta03:5","edtNO_SJC:9","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("34");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_PRESIDENT_HP","sta04:5","edtNO_SJC:9","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("35");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_HOMEPAGE","sta05:5","61","239","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("36");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Combo("cboCD_DIVIDE","sta06:5","edtDS_HOMEPAGE:9","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("37");
            obj.set_innerdataset("dsCD_DIVIDE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FOUNDATION","sta07:5","edtDS_PRESIDENT:9","105","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("38");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Combo("cboCD_KIND","sta08:5","edtNO_PRESIDENT_HP:9","239","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("39");
            obj.set_innerdataset("dsCD_KIND");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Combo("cboTY_LARGECOM","sta09:5","cboCD_DIVIDE:9","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("40");
            obj.set_innerdataset("dsTY_LARGECOM");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_STATUS","sta10:5","ctclDT_FOUNDATION:9","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("41");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_ITEM","sta11:5","cboCD_KIND:9","239","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("42");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_TEL","sta12:5","cboTY_LARGECOM:9","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("43");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_FAX","sta13:5","edtDS_STATUS:9","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("44");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL","sta14:5","edtDS_ITEM:9","239","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("45");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Div("div_ETC","0","div_STD:5",null,"480","0",null,null,null,null,null,this.divData.form.tabData.tab00.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.form.tabData.tab00.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("0");
            obj.set_text("기타정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta00","0","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("1");
            obj.set_text("본사주소지");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg00","sta00:-1","staTitle:5","986","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta01","0","sta00:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("3");
            obj.set_text("지점주소지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg01","sta01:-1","staBg00:-1","986","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("5");
            obj.set_text("공장주소지1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg02","sta02:-1","staBg01:-1","986","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta02:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("7");
            obj.set_text("공장주소지2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg03","sta03:-1","staBg02:-1","986","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("9");
            obj.set_text("지점TEL");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg04","sta04:-1","staBg03:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta05","staBg04:-1","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("11");
            obj.set_text("지점FAX");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg05","sta05:-1","staBg03:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta06","staBg05:-1","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("13");
            obj.set_text("등록업체구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg06","sta06:-1","staBg03:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta07","0","sta04:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("15");
            obj.set_text("주요거래처1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg07","sta07:-1","staBg04:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta08","staBg07:-1","sta05:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("17");
            obj.set_text("주요거래처2");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg08","sta08:-1","staBg05:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta09","staBg08:-1","sta06:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("19");
            obj.set_text("주요거래처3");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg09","sta09:-1","staBg06:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta10","0","sta07:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("21");
            obj.set_text("기술직종업원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg10","sta10:-1","staBg07:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta11","staBg10:-1","sta08:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("23");
            obj.set_text("기능직종업원");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg11","sta11:-1","staBg08:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta12","staBg11:-1","sta09:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("25");
            obj.set_text("기타종업원");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg12","sta12:-1","staBg09:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta13","0","sta10:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("27");
            obj.set_text("사무직종업원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg13","sta13:-1","staBg10:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta14","staBg13:-1","sta11:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("29");
            obj.set_text("종업원수계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg14","sta14:-1","staBg11:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta15","staBg14:-1","sta12:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("31");
            obj.set_text("등록년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg15","sta15:-1","staBg12:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta16","0","sta15:-1","120","100",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("33");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg16","sta16:-1","staBg15:-1","986","100",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta17","0","sta16:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("35");
            obj.set_text("외주등록구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg17","sta17:-1","staBg16:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta18","staBg17:-1","sta16:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("37");
            obj.set_text("자재등록구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg18","sta18:-1","staBg16:-1","618","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta19","0","sta17:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("39");
            obj.set_text("이크레더블");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg19","sta19:-1","staBg17:-1","986","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text(" 신용등급:                                   현금흐름등급:                                      RMIS:");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta20","0","sta19:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("41");
            obj.set_text("나이스평가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staBg20","sta20:-1","staBg19:-1","986","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text(" 신용등급:                                   현금흐름등급: ");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("ccfADDRHQ1","sta00:5","staTitle:10","604","20",null,null,null,"604",null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("43");
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtAT_ADDRHQ2","ccfADDRHQ1:5","staTitle:10","365","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("44");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("ccfADDRHQ1_BRANCH","sta01:5","ccfADDRHQ1:9","604","20",null,null,null,"604",null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("45");
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtAT_ADDRHQ2_BRANCH","ccfADDRHQ1_BRANCH:5","edtAT_ADDRHQ2:9","365","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("46");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("ccfADDRWORK1","sta04:5","ccfADDRHQ1_BRANCH:9","604","20",null,null,null,"604",null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("47");
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtAT_ADDRWORK2","ccfADDRWORK1:5","edtAT_ADDRHQ2_BRANCH:9","365","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("48");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("ccfADDRREGIST1","sta03:5","ccfADDRWORK1:9","604","20",null,null,null,"604",null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("49");
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtAT_ADDRREGIST2","ccfADDRREGIST1:5","edtAT_ADDRWORK2:9","366","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("50");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtNO_TEL_BRANCH","sta04:5","ccfADDRREGIST1:9","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("51");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtNO_FAX_BRANCH","sta05:5","ccfADDRREGIST1:9","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("52");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DC","sta06:5","edtAT_ADDRREGIST2:9","50","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("53");
            obj.set_text("외주");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("false");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DM","chkYN_DC:5","edtAT_ADDRREGIST2:9","50","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("54");
            obj.set_text("자재");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("false");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtDS_CUSTOMER1","sta07:5","edtNO_TEL_BRANCH:9","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("55");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtDS_CUSTOMER2","sta08:5","edtNO_FAX_BRANCH:9","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("56");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtDS_CUSTOMER3","sta09:5","chkYN_DC:9","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("57");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_TECHEXPERT","sta10:5","edtDS_CUSTOMER1:9","220","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("58");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staText00","mskNO_TECHEXPERT:5","edtDS_CUSTOMER1:9","13","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("59");
            obj.set_text("명");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_ENGINEER1","sta11:5","edtDS_CUSTOMER2:9","220","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("60");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staText01","mskNO_ENGINEER1:3","edtDS_CUSTOMER2:9","15","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("61");
            obj.set_text("명");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_ENGINEER2","sta12:5","edtDS_CUSTOMER3:9","220","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("62");
            obj.set_format("#,##0");
            obj.set_readonly("false");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staText02","mskNO_ENGINEER2:5","edtDS_CUSTOMER3:9","13","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("63");
            obj.set_text("명");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_MANAGE","sta13:5","mskNO_TECHEXPERT:9","220","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("64");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staText03","mskNO_MANAGE:5","mskNO_TECHEXPERT:9","13","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("65");
            obj.set_text("명");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_NONLICENSE","sta14:5","mskNO_ENGINEER1:9","220","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("66");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("staText04","mskNO_NONLICENSE:5","mskNO_ENGINEER1:9","13","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("67");
            obj.set_text("명");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("ctclDT_AGREE","sta15:5","mskNO_ENGINEER2:9","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.getSetter("readonly").set("true");
            obj.set_taborder("68");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new TextArea("txtRM_BIGO","sta16:5","staText03:9","974","89",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("69");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Combo("cboTY_REGIST","sta17:5","363","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("70");
            obj.set_innerdataset("dsTY_REGIST");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Combo("cboTY_REGIST_DM","sta18:5","txtRM_BIGO:10","228","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("71");
            obj.set_innerdataset("dsTY_REGIST");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtGR_CREDIT","186","cboTY_REGIST:9","118","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("72");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtGR_CASH","403","cboTY_REGIST_DM:9","128","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("73");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtGR_RMIS","591","cboTY_REGIST_DM:9","138","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("74");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtGR_NICE_CREDIT","186","edtGR_CREDIT:9","118","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("75");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtGR_NICE_CASH","403","edtGR_CASH:9","128","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("76");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Tabpage("tab10",this.divData.form.tabData);
            obj.set_text("회사연혁");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid10","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab10.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab10.addChild(obj.name, obj);

            obj = new Tabpage("tab15",this.divData.form.tabData);
            obj.set_text("직원관리");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid15","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab15.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab15.addChild(obj.name, obj);

            obj = new Tabpage("tab20",this.divData.form.tabData);
            obj.set_text("등록공종");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid20","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab20.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab20.addChild(obj.name, obj);

            obj = new Tabpage("tab25",this.divData.form.tabData);
            obj.set_text("자재공종");
            obj.set_enable("true");
            obj.set_accessibilityenable("true");
            obj.set_tabbuttonwidth("1");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid25","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab25.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab25.addChild(obj.name, obj);

            obj = new Tabpage("tab30",this.divData.form.tabData);
            obj.set_text("면허정보");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid30","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab30.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab30.addChild(obj.name, obj);

            obj = new Tabpage("tab40",this.divData.form.tabData);
            obj.set_text("경영상태");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid40","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab40.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab40.addChild(obj.name, obj);

            obj = new Tabpage("tab50",this.divData.form.tabData);
            obj.set_text("장비현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid50","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab50.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab50.addChild(obj.name, obj);

            obj = new Tabpage("tab60",this.divData.form.tabData);
            obj.set_text("공사실적");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid60","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab60.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab60.addChild(obj.name, obj);

            obj = new Tabpage("tab70",this.divData.form.tabData);
            obj.set_text("상벌현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid70","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab70.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab70.addChild(obj.name, obj);

            obj = new Tabpage("tab80",this.divData.form.tabData);
            obj.set_text("특허/인증");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid80","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab80.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab80.addChild(obj.name, obj);

            obj = new Tabpage("tab90",this.divData.form.tabData);
            obj.set_text("입찰실적");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid90","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab90.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab90.addChild(obj.name, obj);

            obj = new Tabpage("tab95",this.divData.form.tabData);
            obj.set_text("계약실적");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid95","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab95.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab95.addChild(obj.name, obj);

            obj = new Static("sta00","837","0","303","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text(" 개발공지 : 자재공종 탭(5번째)은 사이즈 줄여서 숨김");
            obj.set_visible("false");
            obj.set_background("coral");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ITEM.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtREG_DT","value","dsSearch","DT_INPUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tabData.tab00.form.div_STD.form.edtNO_SJC","value","dsList","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tabData.tab00.form.div_STD.form.edtDS_VENDOR","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tabData.tab00.form.div_STD.form.edtNO_REGIST","value","dsList","NO_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tabData.tab00.form.div_STD.form.edtDS_PRESIDENT","value","dsList","DS_PRESIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab00.form.div_STD.form.edtNO_PRESIDENT_HP","value","dsList","NO_PRESIDENT_HP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab00.form.div_STD.form.edtDS_HOMEPAGE","value","dsList","DS_HOMEPAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tabData.tab00.form.div_STD.form.cboCD_DIVIDE","value","dsList","CD_DIVIDE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tabData.tab00.form.div_STD.form.ctclDT_FOUNDATION","value","dsList","DT_FOUNDATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.tabData.tab00.form.div_STD.form.cboCD_KIND","value","dsList","CD_KIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.tabData.tab00.form.div_STD.form.cboTY_LARGECOM","value","dsList","TY_LARGECOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.tabData.tab00.form.div_STD.form.edtDS_STATUS","value","dsList","DS_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab00.form.div_STD.form.edtDS_ITEM","value","dsList","DS_ITEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab00.form.div_STD.form.edtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab00.form.div_STD.form.edtNO_FAX","value","dsList","NO_FAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab00.form.div_STD.form.edtDS_EMAIL","value","dsList","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.tabData.tab00.form.div_ETC.form.ccfADDRHQ1.form.CDTextBox","value","dsList","NO_POSTHQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.tabData.tab00.form.div_ETC.form.ccfADDRHQ1.form.DSTextBox","value","dsList","AT_ADDRHQ1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.tabData.tab00.form.div_ETC.form.edtAT_ADDRHQ2","value","dsList","AT_ADDRHQ2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.tabData.tab00.form.div_ETC.form.ccfADDRHQ1_BRANCH.form.CDTextBox","value","dsList","NO_POSTHQ_BRANCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.tabData.tab00.form.div_ETC.form.ccfADDRHQ1_BRANCH.form.DSTextBox","value","dsList","AT_ADDRHQ1_BRANCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.tabData.tab00.form.div_ETC.form.edtAT_ADDRHQ2_BRANCH","value","dsList","AT_ADDRHQ2_BRANCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.tabData.tab00.form.div_ETC.form.ccfADDRWORK1.form.CDTextBox","value","dsList","NO_POSTWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.tabData.tab00.form.div_ETC.form.ccfADDRWORK1.form.DSTextBox","value","dsList","AT_ADDRWORK1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.tabData.tab00.form.div_ETC.form.edtAT_ADDRWORK2","value","dsList","AT_ADDRWORK2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.tabData.tab00.form.div_ETC.form.ccfADDRREGIST1.form.CDTextBox","value","dsList","NO_POSTREGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.tabData.tab00.form.div_ETC.form.ccfADDRREGIST1.form.DSTextBox","value","dsList","AT_ADDRREGIST1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.tabData.tab00.form.div_ETC.form.edtAT_ADDRREGIST2","value","dsList","AT_ADDRREGIST2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.tabData.tab00.form.div_ETC.form.edtNO_TEL_BRANCH","value","dsList","NO_TEL_BRANCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.tabData.tab00.form.div_ETC.form.edtNO_FAX_BRANCH","value","dsList","NO_FAX_BRANCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.tabData.tab00.form.div_ETC.form.chkYN_DC","value","dsList","YN_DC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab00.form.div_ETC.form.chkYN_DM","value","dsList","YN_DM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.tabData.tab00.form.div_ETC.form.edtDS_CUSTOMER1","value","dsList","DS_CUSTOMER1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.tabData.tab00.form.div_ETC.form.edtDS_CUSTOMER2","value","dsList","DS_CUSTOMER2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.tabData.tab00.form.div_ETC.form.edtDS_CUSTOMER3","value","dsList","DS_CUSTOMER3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.tabData.tab00.form.div_ETC.form.mskNO_TECHEXPERT","value","dsList","NO_TECHEXPERT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divData.form.tabData.tab00.form.div_ETC.form.mskNO_ENGINEER1","value","dsList","NO_ENGINEER1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.tabData.tab00.form.div_ETC.form.mskNO_ENGINEER2","value","dsList","NO_NONLICENSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divData.form.tabData.tab00.form.div_ETC.form.mskNO_MANAGE","value","dsList","NO_MANAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.tabData.tab00.form.div_ETC.form.mskNO_NONLICENSE","value","dsList","NO_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.tabData.tab00.form.div_ETC.form.txtRM_BIGO","value","dsList","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divData.form.tabData.tab00.form.div_ETC.form.cboTY_REGIST","value","dsList","TY_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.tabData.tab00.form.div_ETC.form.ctclDT_AGREE.form.TextBox","value","dsList","DT_AGREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab00.form.div_ETC.form.cboTY_REGIST_DM","value","dsList","TY_REGIST_DM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab00.form.div_ETC.form.edtGR_CREDIT","value","dsList","GR_CREDIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab00.form.div_ETC.form.edtGR_CASH","value","dsList","GR_CASH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab00.form.div_ETC.form.edtGR_RMIS","value","dsList","GR_RMIS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab00.form.div_ETC.form.edtGR_NICE_CREDIT","value","dsList","GR_NICE_CREDIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tabData.tab00.form.div_ETC.form.edtGR_NICE_CASH","value","dsList","GR_NICE_CASH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DCA_REGISTDETAIL_R.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.focusgridid = "";
        this.filepath = "/DC/REGIST/";
        this.fileuploads0 = {};
        this.fileuploads1 = {};
        this.fileuploads2 = {};

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
        	this.fnSetCombo();




        	if(!this.gfnIsNull(this.getOwnerFrame().CD_VENDOR) && !this.gfnIsNull(this.getOwnerFrame().DS_VENDOR) && !this.gfnIsNull(this.getOwnerFrame().DT_INPUT)) {

        		this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        		this.dsSearch.setColumn(0, "DS_VENDOR", this.getOwnerFrame().DS_VENDOR);
        	    this.dsSearch.setColumn(0, "DT_INPUT", this.getOwnerFrame().DT_INPUT);

        		this.FormBtns.Select.click();
        		}


        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Save.set_enable(false);.
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.firstLoad = true;
        	this.btnRegDel = this.gfnFormButtonAdd("RegDel", "fnRegDel");
        	this.btnFileInfo = this.gfnFormButtonAdd("btnFileInfo", "fnFileInfo");
        	this.btnFileInfo = this.gfnFormButtonAdd("btnChgPop", "fnBtnChgPop");
        	this.btnEcredible = this.gfnFormButtonAdd("btnEcredible", "fnEcredible");
        	this.btnNiceDnb = this.gfnFormButtonAdd("btnNiceDnb", "fnNiceDnb");
        	this.btnPwdInit = this.gfnFormButtonAdd("btnPwdInit", "fnPwdInit");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGridTab10 = this.divData.form.tabData.tab10.form.objGrid10;
        	this.dxGridTab15 = this.divData.form.tabData.tab15.form.objGrid15;
        	this.dxGridTab20 = this.divData.form.tabData.tab20.form.objGrid20;
        	this.dxGridTab25 = this.divData.form.tabData.tab25.form.objGrid25;
        	this.dxGridTab30 = this.divData.form.tabData.tab30.form.objGrid30;
        	this.dxGridTab40 = this.divData.form.tabData.tab40.form.objGrid40;
        	this.dxGridTab50 = this.divData.form.tabData.tab50.form.objGrid50;
        	this.dxGridTab60 = this.divData.form.tabData.tab60.form.objGrid60;
        	this.dxGridTab70 = this.divData.form.tabData.tab70.form.objGrid70;
        	this.dxGridTab80 = this.divData.form.tabData.tab80.form.objGrid80;
        	this.dxGridTab90 = this.divData.form.tabData.tab90.form.objGrid90;
        	this.dxGridTab95 = this.divData.form.tabData.tab95.form.objGrid95;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGridTab10, this.dsList10, "DC", "DCA_COMHISTORY");
        	this.gfnGridInit(this.dxGridTab15, this.dsList15, "DC", "DCA_STAFF");
        	this.gfnGridInit(this.dxGridTab20, this.dsList20, "DC", "DCA_REGISTLICCOST");
        	this.gfnGridInit(this.dxGridTab25, this.dsList25, "DC", "DCA_REGISTLICCOST_DM");
        	this.gfnGridInit(this.dxGridTab30, this.dsList30, "DC", "DCA_REGISTLICENSE");
        	this.gfnGridInit(this.dxGridTab40, this.dsList40, "DC", "DCA_MANAGESTATUS");
        	this.gfnGridInit(this.dxGridTab50, this.dsList50, "DC", "DCA_EQUIP");
        	this.gfnGridInit(this.dxGridTab60, this.dsList60, "DC", "DCA_CONSRESULT");
        	this.gfnGridInit(this.dxGridTab70, this.dsList70, "DC", "DCA_JUSTICE");
        	this.gfnGridInit(this.dxGridTab80, this.dsList80, "DC", "DCA_ISO");
        	this.gfnGridInit(this.dxGridTab90, this.dsList90, "DC", "DCA_BIDJOIN");
        	this.gfnGridInit(this.dxGridTab95, this.dsList95, "DC", "DCA_CONTRACT");

        	this.dxGridTab20.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGridTab20.AfterCDTextChanged = "fnGrid20_AfterCDTextChanged";

        	// 입찰실적 그리드 더블 클릭 이벤트
        	this.dxGridTab90.addEventHandler("oncelldblclick", this.fnGrid90_oncelldblclick, this);
        	// 계약실적 그리드 더블 클릭 이벤트
        	this.dxGridTab95.addEventHandler("oncelldblclick", this.fnGrid95_oncelldblclick, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect0 = new Dataset();
        	this.dsSelect0.addColumn("DT_INPUT", "string");
        	//this.dsSelect0.addColumn("CD_MODULE", "string");
        	this.dsSelect0.addColumn("CD_VENDOR", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	var tidx = this.divData.form.tabData.tabindex;

        	this.dsSelect0.clearData();
        	this.dsSelect0.addRow();
        	this.dsSelect0.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect0.setColumn(0, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        	//this.dsSelect0.setColumn(0, "CD_MODULE", this.dsSearch.getColumn(0, "DS_PARAM"));

        	var dsDataNum = this.dsTabInfo.getColumn(tidx, "dsDataNum");

        	var strSvcId    = "select"+dsDataNum;
        	var inProc		= "_dsProc";
        	var inData      = "select"+dsDataNum+"=dsSelect0";

        	var strSvcType  = "";
        	var outData = "";

        	if(tidx == 0)
        	{
        		strSvcType  = "select";
        		outData = "dsList=select"+dsDataNum+"0";
        	}else
        	{
        		strSvcType  = "grid";
        		outData = "dsList"+dsDataNum+"=select"+dsDataNum+"0";
        	}

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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var tidx = this.divData.form.tabData.tabindex;

        	this.divData.form.tabData.tab00.form.div_STD.form.edtNO_SJC.set_enable(true);

        	switch(tidx) {
        		case 0:
        			this.dsSearch.clearData();
        			this.dsSearch.addRow();
        			this.divSearch.form.ccfCD_ITEM.form.fnCodeFindClear();
        			this.dsList.clearData();
        			var nrow = this.dsList.addRow();
        			this.dsList.setColumn(nrow, "nx_flag", "I");
        		break;
        		case 1:
        		case 2:
        		case 3:
        		case 4:
        		case 5:
        		case 6:
        		case 7:
        		case 8:
        		case 9:
        		case 10:
        		case 11:
        		case 12:
        			if(this.gfnIsNull(this.dsList.getColumn(0, "CD_VENDOR")))
        			{
        				this.gfnAlert("일반정보 저장후 추가 가능합니다.");
        				return;
        			}
        			this.addgridname = eval("this.dxGridTab" + this.dsTabInfo.getColumn(tidx, "dsDataNum"));
        			this.gfnGridAdd(this.addgridname);
        		break;
        	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var tidx = this.divData.form.tabData.tabindex;

        	switch(tidx) {
        		case 1 :
        		case 2 :
        		case 3 :
        		case 4 :
        		case 5 :
        		case 6 :
        		case 7 :
        		case 8 :
        		case 9 :
        		case 10:
        		case 11:
        		case 12:
        			this.deletegridname = eval("this.dxGridTab" + this.dsTabInfo.getColumn(tidx, "dsDataNum"));
        			this.gfnGridDel(this.deletegridname);
        		break;
        	}
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	var tidx = this.divData.form.tabData.tabindex;

        	switch(tidx) {
        		case 0:
        		case 1:
        		case 2:
        		case 3:
        		case 4:
        		case 5:
        		case 6:
        		case 7:
        		case 8:
        		case 9:
        		case 10:
        		case 11:
        		case 12:
        			this.savefnname = eval("this.fnSaveAction" + this.dsTabInfo.getColumn(tidx, "dsDataNum"));
        			this.savefnname();
        		break;
        	}
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	var tidx = this.divData.form.tabData.tabindex;

        	switch(tidx) {
        		case 0:
        			//this.gfnExcelExport(this.dxGrid);
        			break;
        		case 1:
        		case 2:
        		case 3:
        		case 4:
        		case 5:
        		case 6:
        		case 7:
        		case 8:
        		case 9:
        		case 10:
        		case 11:
        		case 12:
        			this.excelGridname = eval("this.dxGridTab" + this.dsTabInfo.getColumn(tidx, "dsDataNum"));
        			this.gfnExcelExport(this.excelGridname)
        		break;
        	}
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "combo")
        	{
        		if(!this.gfnIsNull(this.getOwnerFrame().CD_VENDOR)){
        			this.divData.form.tabData.tab00.form.div_STD.form.edtNO_SJC.set_enable(false);
        			this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        			this.divSearch.form.ccfCD_ITEM.form.DSTextBox.set_value(this.getOwnerFrame().DS_VENDOR);
        			this.divSearch.form.ccfCD_ITEM.form.fnFitToContents();
        			this.divSearch.form.ccfCD_ITEM.form.set_readonly(true);

        			this.dsSearch.setColumn(0, "DT_INPUT", this.getOwnerFrame().DT_INPUT.substring(0, 4));
        			this.dsSearch.setColumn(0, "DS_PARAM", this.getOwnerFrame().SDS_PARAM);
        			this.FormBtns.Select.click();
        		}else{
        			this.fnAdd();
        		}
        	}
        	else if (svcID == "select00")
        	{
        		this.dsList.setColumn(0, "nx_flag", "U");
        		this.divData.form.tabData.tab00.form.div_STD.form.edtNO_SJC.set_enable(false);
        		this.FormBtns.Save.set_enable(true);
        	}
        	else if(svcID == "insert00")
        	{
        		if (errorCode == 0)
        		{
        			var today = this.gfnGetDate();
        			this.divData.form.tabData.tab00.form.div_STD.form.edtNO_SJC.set_enable(false);
        			this.dsSearch.setColumn(0, "CD_VENDOR", this.dsOutput0.getColumn(0, "CD_VENDOR_NEW"));
        			this.dsSearch.setColumn(0, "DS_VENDOR", this.dsOutput0.getColumn(0, "DS_VENDOR"));
        			this.dsSearch.setColumn(0, "DT_INPUT", this.dsOutput0.getColumn(0, "DT_INPUT"));
        			this.divSearch.form.ccfCD_ITEM.form.fnCodeFindLoad();
        			this.FormBtns.Select.click();
        		} else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "update00")
        	{
        		if (errorCode == 0)
        		{
        			this.FormBtns.Select.click();
        		} else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "regdel"){
        		if (errorCode == 0) {
        			this.fnclosewindow=function(){
        				this.getParentContext().close(true);
        			};
        			this.gfnAlert("삭제하였습니다.", "fnclosewindow");

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "savec"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID.substring(0,6) == "select"){
        		this.fnTabCtr();
        		this.returngridid = eval("this.dxGridTab"+svcID.substr(6,2));
        		this.gfnGridAfterSelect(this.returngridid);
        	}
        	else if(svcID == "pwdInit"){
        		if (errorCode == 0) {
        			this.gfnAlert("비밀번호를 사업자번호로 초기화 하였습니다.")
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DCX_CFLICCOST_GRID_02") {
        		if(this.gfnIsNull(this.dsList20.getColumn(nrow, "CD_COSTCLASS"))){
        			this.gfnAlert("대공종명을 입력해주십시오.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_COSTCLASS", this.dsList20.getColumn(nrow, "CD_COSTCLASS"));
        	}
        	return true;
        }

        this.dsList20_onvaluechanged = function(obj,e)
        {
        	if(e.columnid == "CD_COSTCLASS") {
        		obj.setColumn(e.row, "CD_LICCOST", "");
        		obj.setColumn(e.row, "DS_LICCOST", "");
        	}
        };

        this.fnGrid20_AfterCDTextChanged = function(id, codeFindData){
        // 	if(id == "DCX_CFLICCOST_GRID"){
        // 		var arr = codeFindData;
        // 		if(arr.length > 0){
        // 			var cdyn = arr[0]["YN_SELECT"];
        // 			if(cdyn == "N"){
        // 				this.fncodefindreturn = function(){
        // 					this.dsList20.setColumn(this.dsList20.rowposition, "CD_LICCOST", "");
        // 				};
        // 				this.gfnAlert("선택가능한공종이 아닙니다.\n확인 후 진행해주십시요.", "fncodefindreturn");
        // 			}
        // 		}
        // 	}
        };

        // 입찰실적 그리드 더블 클릭 이벤트
        this.fnGrid90_oncelldblclick = function(obj,e)
        {
        	var param = {};

        	param.CD_SITE = this.dsList90.getColumn(this.dsList90.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList90.getColumn(this.dsList90.rowposition, "DS_DEPT");
        	param.NO_BID = this.dsList90.getColumn(this.dsList90.rowposition, "NO_BID");
        	param.DS_SUBCON = this.dsList90.getColumn(this.dsList90.rowposition, "DS_SUBCON");
        	param.DS_PARAM = this.FormInfo.DS_PARAM;

        	this.gfnFormOpen("DCB", "DCB_FIRSTSELECT", "fnOnBid_callback", param);
        };

        // 계약실적 그리드 더블 클릭 이벤트
        this.fnGrid95_oncelldblclick = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGridTab95)) { return false; }

        	var nRow = this.dsList95.rowposition;
        	var param = {};
        	param.CD_SITE = this.dsList95.getColumn(nRow, "CD_SITE");
        	param.DS_SITE = this.dsList95.getColumn(nRow, "DS_DEPT");
        	param.NO_CONT = this.dsList95.getColumn(nRow, "NO_CONT");
        	param.DS_SUBCON = this.dsList95.getColumn(nRow, "DS_SUBCON");
        	param.SN_SEQ = this.dsList95.getColumn(nRow, "SN_SEQ");
        	param.TY_CONT = this.dsList95.getColumn(nRow, "TY_CONT");

        	this.gfnFormOpen("DCC", "DCC_CONTRACT", "fnContract_callback", param, 950, 750);
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.divData_tabData_onchanged = function(obj,e)
        {
        	// 탭 변경시 조회처리시
         	if(e.preindex != e.postindex && e.postindex != 0) {
        		this.FormBtns.Select.click();
         	}
        };

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "19");
          	// 같은 SP 다중건 조회는 row 추가해서
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(1, "CD_TYPE", "22");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(2, "CD_TYPE", "23");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(3, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(3, "CD_TYPE", "11");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(4, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(4, "CD_TYPE", "12");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(5, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(5, "CD_TYPE", "17");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(6, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(6, "CD_TYPE", "24");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_DIVIDE=combo0 dsCD_KIND=combo1 dsTY_LARGECOM=combo2 dsGR_CREDIT=combo3 dsGR_CASH=combo4 dsTY_REGIST=combo5 dsGR_RMIS=combo6";
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

        this.fnPwdInit = function(obj, e){
        	if(this.dsList.rowcount == 0)
        	{
        		this.gfnAlert("조회 후 진행해주십시오.");
        		return;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_VENDOR")))
        	{
        		this.gfnAlert("등록 후 진행해주십시오.");
        		return;
        	}

        	this.gfnConfirm("비밀번호를 초기화 하시겠습니까?","fnPwdInit_callback");
        };

        this.fnPwdInit_callback = function(strId, val)
        {
        	if(val){
        		this.dsPwdInit = new Dataset();
        		this.dsPwdInit.addColumn("CD_VENDOR", "string");

        		this.dsPwdInit.clearData();
        		var nrow = this.dsPwdInit.addRow();
        		this.dsPwdInit.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));

        		var strSvcId    = "pwdInit";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "pwdInit=dsPwdInit";
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
        };

        this.fnRegDel = function(obj, e){
        	if(this.dsList.rowcount == 0)
        	{
        		this.gfnAlert("조회 후 진행해주십시오.");
        		return;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_VENDOR")))
        	{
        		this.gfnAlert("등록 후 진행해주십시오.");
        		return;
        	}

        	this.gfnConfirm("등록원삭제하시겠습니까?","fnRegDel_callback");
        };

        this.fnRegDel_callback = function(strId, val)
        {
        	if(val){
        		this.dsRegDel = new Dataset();
        		this.dsRegDel.addColumn("CD_VENDOR", "string");

        		this.dsRegDel.clearData();
        		var nrow = this.dsRegDel.addRow();
        		this.dsRegDel.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

        		var strSvcId    = "regdel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "regdel00=dsRegDel";
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
        };

        this.fnTabCtr=function(){
        	var tidx = this.divData.form.tabData.tabindex;
        	if(tidx == 11 || tidx == 12){
        		this.FormBtns.Del.set_enable(false);
        		this.FormBtns.Save.set_enable(false);
        		this.FormBtns.Add.set_enable(false);
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		switch(e.columnid){
        			case "NO_TECHEXPERT" :
        			case "NO_ENGINEER1" :
        			case "NO_NONLICENSE" :
        			case "NO_MANAGE" :
        				var notech = this.gfnIsNull(this.dsList.getColumn(0, "NO_TECHEXPERT"))?0:Number(this.dsList.getColumn(0, "NO_TECHEXPERT"));
        				var noeng1 = this.gfnIsNull(this.dsList.getColumn(0, "NO_ENGINEER1"))?0:Number(this.dsList.getColumn(0, "NO_ENGINEER1"));
        				var nolic = this.gfnIsNull(this.dsList.getColumn(0, "NO_NONLICENSE"))?0:Number(this.dsList.getColumn(0, "NO_NONLICENSE"));
        				var noman = this.gfnIsNull(this.dsList.getColumn(0, "NO_MANAGE"))?0:Number(this.dsList.getColumn(0, "NO_MANAGE"));
        				this.dsList.setColumn(0, "NO_TOTAL", notech + noeng1 + nolic + noman);
        			break;
        		}
        	}
        };

        this.fnFileInfo = function(obj, e){
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR")))return;

        	var fileManager = {};
        		fileManager.CD_GUBUN = "DC10";
        		fileManager.CD_DIR = [this.dsSearch.getColumn(0, "CD_VENDOR")];
        		fileManager.IS_READONLY = false;
        		this.gfnFileManager(fileManager, "fnFileCallback");
        };

        this.fnBtnChgPop = function(obj, e){
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR")))return;

        	var param = {};
        	param.CD_VENDOR = this.dsList.getColumn(0, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(0, "DS_VENDOR");
        	param.DT_INPUT = this.dsList.getColumn(0, "DT_INPUT");
        	param.SDS_PARAM = this.getOwnerFrame().SDS_PARAM;

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen("DCA", "DCA_REGISTLIST_HISTORY", "", param, "752", "600");
        };

        this.fnEcredible = function(obj, e){
        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_SJC")))return;

        	var strLink = "";

        	var strU = "2d2d424547494e204349504845522d2d313131310000000b303030303030303085b69d734a703983b93e3e054dd91bd211e69cd32aa1363956fa322dc91395043a0fc1243c70e5c6e7f54192984a1e8830302d2d454e44204349504845522d2d";
        	var strP = "2d2d424547494e204349504845522d2d3131313100000005303030303030303048cc1f6b4900f1ad8cedeed8c7b2bac0ebbcca4c3dde22bdb1d985b6e7732196356944f3ad492cb103d887eedc5b15ac30302d2d454e44204349504845522d2d";
        	var strNoSjc = this.dsList.getColumn(0, "NO_SJC");
        	var strNoSjcK = this.dsList.getColumn(0, "NO_REGIST");

        	var strC = "7";
        	var strM = "3";

        	strLink = 'http://www.esrm.co.kr/esrm/SrmplusLogin?u='+ strU +'&p='+ strP +'&i='+ strNoSjc +'&k='+ strNoSjcK +'&c='+ strC +'&m='+ strM +'&g=2'

        	window.open(strLink, 'watchwin', 'height=768, width=1024, status=no, scrollbars=auto, resizable=yes');
        };

        /* 스크립트 샘플
        <script type="text/javascript" src="./aes.js"></script>
        <script type="text/javascript" src="./pbkdf2.js"></script>
        <script type="text/javascript" src="./AesUtil.js"></script>
        <script type="text/javascript">

        	eval(function(p, a, c, k, e, r) { e = function(c) { return c.toString(a) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [ function(e) { return r[e] } ]; e = function() { return '\\w+' }; c = 1 } ; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p } ( '0 2="5";0 1=3 4(c,6);7 8(a){b 1.9(2,a)}', 13, 13, 'var|aesUtil|authKey|new|AesUtil|5a566836576e46475a334631516c68|100|function|niceEncrypt|encrypt||return|128' .split('|'), 0, {}))
        	function encrypt() {
        		var clp_cd = document.getElementById("clp_cd").value; // 업체코드
        		var bz_ins_no = document.getElementById("bz_ins_no").value; // 사업자번호
        		var e_bz_ins_no = niceEncrypt(bz_ins_no); // 암호화 사업자번호
        		location.href = "http://xlink.nicednb.com/weblink/toServer.do?clp_cd="+ clp_cd +"&bz_ins_no=" + e_bz_ins_no;
        	}

        </script>
        </head>
        <body>
        <div style="padding-left: 20">
        	* test.html 자바스크립트에 인증키를 입력해주세요. <br>
        	업체코드
        <input type="text" id="clp_cd" name="clp_cd" value="업체코드를 입력해주세요." size="50" title="업체코드"/> <br>
        	사업자번호
        <input type="text" id="bz_ins_no" name="bz_ins_no" value="사업자번호 입력해주세요." size="50" title="사업자번호"/> <br>
        <input type="button" value="링크" onclick="encrypt()"/>
        </div>
        */

        this.fnNiceDnb = function(obj, e)
        {
        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_SJC")))return;

        	var strNoSjc = nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "NO_SJC"),""), "-", "");

        	var strLink = "";

        	var nkVal = this.gfnGetDate().substr(0,8) * 677;

        	strLink = "https://www.b-wise.co.kr/se/SE0100M000GE.nice?bizno=" + strNoSjc + "&eid=KSBJ&nk=" + nkVal;
        	//https://www.b-wise.co.kr/se/SE0100M000GE.nice?bizno=1108171475&eid=KSBJ&nk=13682515947

        	window.open(strLink, 'NiceDnb', 'height=868, width=1024, status=no, scrollbars=auto, resizable=yes');

        	/*
        	eval(function(p, a, c, k, e, r) { e = function(c) { return c.toString(a) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [ function(e) { return r[e] } ]; e = function() { return '\\w+' }; c = 1 } ; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p } ( '0 2="5";0 1=3 4(c,6);7 8(a){b 1.9(2,a)}', 13, 13, 'var|aesUtil|authKey|new|AesUtil|5a566836576e46475a334631516c68|100|function|niceEncrypt|encrypt||return|128' .split('|'), 0, {}))

        	var encrypted_bz_ins_no = niceEncrypt(strNoSjc); // 암호화 사업자번호
        	strLink = "http://xlink.nicednb.com/weblink/toServer.do?clp_cd=298&bz_ins_no=" + encrypted_bz_ins_no;
        	window.open(strLink, 'NiceDnb', 'height=868, width=1024, status=no, scrollbars=auto, resizable=yes');
        	*/




        };

        // 일반
        this.fnSaveAction00 = function(){
        	if(!this.gfnDataValidate(this.dsList, this.dsRequired0))return;

        	if(
        		(this.gfnIsNull(this.dsList.getColumn(0, "YN_DC")) || this.dsList.getColumn(0, "YN_DC") == "N")
        	 && (this.gfnIsNull(this.dsList.getColumn(0, "YN_DM")) || this.dsList.getColumn(0, "YN_DM") == "N")
        	  )
        	{
        		this.gfnAlert("등록업체구분을 외주/자재 중 최소한 하나는 선택하셔야 합니다.");

        		return;
        	}

        	this.dsInsert0 = new Dataset();
        	this.dsInsert0.addColumn("CD_MODULE", "string");
        	this.dsInsert0.addColumn("CD_VENDOR", "string");
        	this.dsInsert0.addColumn("NO_SJC", "string");
        	this.dsInsert0.addColumn("DS_VENDOR", "string");
        	this.dsInsert0.addColumn("NO_REGIST", "string");
        	this.dsInsert0.addColumn("DS_PRESIDENT", "string");
        	this.dsInsert0.addColumn("NO_PRESIDENT", "string");
        	this.dsInsert0.addColumn("NO_PRESIDENT_HP", "string");
        	this.dsInsert0.addColumn("NO_PRESIDENT_POST", "string");
        	this.dsInsert0.addColumn("AT_PRESIDENT_ADDR1", "string");
        	this.dsInsert0.addColumn("AT_PRESIDENT_ADDR2", "string");
        	this.dsInsert0.addColumn("DS_PRESIDENT_EMAIL", "string");
        	this.dsInsert0.addColumn("DS_COMPRESIDENT1", "string");
        	this.dsInsert0.addColumn("NO_COMPRESIDENT1", "string");
        	this.dsInsert0.addColumn("NO_COMPRESIDENT1_HP", "string");
        	this.dsInsert0.addColumn("NO_COMPRESIDENT1_POST", "string");
        	this.dsInsert0.addColumn("AT_COMPRESIDENT1_ADDR1", "string");
        	this.dsInsert0.addColumn("AT_COMPRESIDENT1_ADDR2", "string");
        	this.dsInsert0.addColumn("DS_COMPRESIDENT1_EMAIL", "string");
        	this.dsInsert0.addColumn("DS_COMPRESIDENT2", "string");
        	this.dsInsert0.addColumn("NO_COMPRESIDENT2", "string");
        	this.dsInsert0.addColumn("NO_COMPRESIDENT2_HP", "string");
        	this.dsInsert0.addColumn("NO_COMPRESIDENT2_POST", "string");
        	this.dsInsert0.addColumn("AT_COMPRESIDENT2_ADDR1", "string");
        	this.dsInsert0.addColumn("AT_COMPRESIDENT2_ADDR2", "string");
        	this.dsInsert0.addColumn("DS_COMPRESIDENT2_EMAIL", "string");
        	this.dsInsert0.addColumn("CD_DIVIDE", "string");
        	this.dsInsert0.addColumn("DT_FOUNDATION", "string");
        	this.dsInsert0.addColumn("CD_KIND", "string");
        	this.dsInsert0.addColumn("TY_LARGECOM", "string");
        	this.dsInsert0.addColumn("DS_STATUS", "string");
        	this.dsInsert0.addColumn("DS_ITEM", "string");
        	this.dsInsert0.addColumn("NO_TEL", "string");
        	this.dsInsert0.addColumn("NO_FAX", "string");
        	this.dsInsert0.addColumn("DS_EMAIL", "string");
        	this.dsInsert0.addColumn("DS_HOMEPAGE", "string");
        	this.dsInsert0.addColumn("DS_DAM_NAME", "string");
        	this.dsInsert0.addColumn("DS_DAM_HANDPHONE", "string");
        	this.dsInsert0.addColumn("DS_DAM_DEPT", "string");
        	this.dsInsert0.addColumn("DS_DAM_TEL", "string");
        	this.dsInsert0.addColumn("DS_DAM_EMAIL", "string");
        	this.dsInsert0.addColumn("NO_POSTHQ", "string");
        	this.dsInsert0.addColumn("AT_ADDRHQ1", "string");
        	this.dsInsert0.addColumn("AT_ADDRHQ2", "string");
        	this.dsInsert0.addColumn("NO_POSTHQ_BRANCH", "string");
        	this.dsInsert0.addColumn("AT_ADDRHQ1_BRANCH", "string");
        	this.dsInsert0.addColumn("AT_ADDRHQ2_BRANCH", "string");
        	this.dsInsert0.addColumn("NO_POSTWORK", "string");
        	this.dsInsert0.addColumn("AT_ADDRWORK1", "string");
        	this.dsInsert0.addColumn("AT_ADDRWORK2", "string");
        	this.dsInsert0.addColumn("NO_POSTREGIST", "string");
        	this.dsInsert0.addColumn("AT_ADDRREGIST1", "string");
        	this.dsInsert0.addColumn("AT_ADDRREGIST2", "string");
        	this.dsInsert0.addColumn("NO_TEL_BRANCH", "string");
        	this.dsInsert0.addColumn("NO_FAX_BRANCH", "string");
        	this.dsInsert0.addColumn("YN_DC", "string");
        	this.dsInsert0.addColumn("YN_DM", "string");
        	this.dsInsert0.addColumn("DS_CUSTOMER1", "string");
        	this.dsInsert0.addColumn("DS_CUSTOMER2", "string");
        	this.dsInsert0.addColumn("DS_CUSTOMER3", "string");
        	this.dsInsert0.addColumn("NO_TECHEXPERT", "bigdecimal");
        	this.dsInsert0.addColumn("NO_ENGINEER1", "bigdecimal");
        	this.dsInsert0.addColumn("NO_TOTAL", "bigdecimal");
        	this.dsInsert0.addColumn("NO_MANAGE", "bigdecimal");
        	this.dsInsert0.addColumn("NO_NONLICENSE", "bigdecimal");
        	this.dsInsert0.addColumn("RM_BIGO", "string");
        	this.dsInsert0.addColumn("GR_CREDIT", "string");
        	this.dsInsert0.addColumn("GR_CASH", "string");
        	this.dsInsert0.addColumn("GR_RMIS", "string");
        	this.dsInsert0.addColumn("TY_REGIST", "string");
        	this.dsInsert0.addColumn("TY_REGIST_DM", "string");
        	this.dsInsert0.addColumn("DS_TALAK", "string");
        	this.dsInsert0.addColumn("DT_INPUT", "string");
        	this.dsInsert0.addColumn("ID_USER", "string");
        	this.dsInsert0.addColumn("NO_GROUPWARE", "string");

        	this.dsUpdate0 = new Dataset();
        	this.dsUpdate0.addColumn("CD_VENDOR", "string");
        	this.dsUpdate0.addColumn("NO_SJC", "string");
        	this.dsUpdate0.addColumn("DS_VENDOR", "string");
        	this.dsUpdate0.addColumn("NO_REGIST", "string");
        	this.dsUpdate0.addColumn("DS_PRESIDENT", "string");
        	this.dsUpdate0.addColumn("NO_PRESIDENT", "string");
        	this.dsUpdate0.addColumn("NO_PRESIDENT_HP", "string");
        	this.dsUpdate0.addColumn("NO_PRESIDENT_POST", "string");
        	this.dsUpdate0.addColumn("AT_PRESIDENT_ADDR1", "string");
        	this.dsUpdate0.addColumn("AT_PRESIDENT_ADDR2", "string");
        	this.dsUpdate0.addColumn("DS_PRESIDENT_EMAIL", "string");
        	this.dsUpdate0.addColumn("DS_COMPRESIDENT1", "string");
        	this.dsUpdate0.addColumn("NO_COMPRESIDENT1", "string");
        	this.dsUpdate0.addColumn("NO_COMPRESIDENT1_HP", "string");
        	this.dsUpdate0.addColumn("NO_COMPRESIDENT1_POST", "string");
        	this.dsUpdate0.addColumn("AT_COMPRESIDENT1_ADDR1", "string");
        	this.dsUpdate0.addColumn("AT_COMPRESIDENT1_ADDR2", "string");
        	this.dsUpdate0.addColumn("DS_COMPRESIDENT1_EMAIL", "string");
        	this.dsUpdate0.addColumn("DS_COMPRESIDENT2", "string");
        	this.dsUpdate0.addColumn("NO_COMPRESIDENT2", "string");
        	this.dsUpdate0.addColumn("NO_COMPRESIDENT2_HP", "string");
        	this.dsUpdate0.addColumn("NO_COMPRESIDENT2_POST", "string");
        	this.dsUpdate0.addColumn("AT_COMPRESIDENT2_ADDR1", "string");
        	this.dsUpdate0.addColumn("AT_COMPRESIDENT2_ADDR2", "string");
        	this.dsUpdate0.addColumn("DS_COMPRESIDENT2_EMAIL", "string");
        	this.dsUpdate0.addColumn("CD_DIVIDE", "string");
        	this.dsUpdate0.addColumn("DT_FOUNDATION", "string");
        	this.dsUpdate0.addColumn("CD_KIND", "string");
        	this.dsUpdate0.addColumn("TY_LARGECOM", "string");
        	this.dsUpdate0.addColumn("DS_STATUS", "string");
        	this.dsUpdate0.addColumn("DS_ITEM", "string");
        	this.dsUpdate0.addColumn("NO_TEL", "string");
        	this.dsUpdate0.addColumn("NO_FAX", "string");
        	this.dsUpdate0.addColumn("DS_EMAIL", "string");
        	this.dsUpdate0.addColumn("DS_HOMEPAGE", "string");
        	this.dsUpdate0.addColumn("DS_DAM_NAME", "string");
        	this.dsUpdate0.addColumn("DS_DAM_HANDPHONE", "string");
        	this.dsUpdate0.addColumn("DS_DAM_DEPT", "string");
        	this.dsUpdate0.addColumn("DS_DAM_TEL", "string");
        	this.dsUpdate0.addColumn("DS_DAM_EMAIL", "string");
        	this.dsUpdate0.addColumn("NO_POSTHQ", "string");
        	this.dsUpdate0.addColumn("AT_ADDRHQ1", "string");
        	this.dsUpdate0.addColumn("AT_ADDRHQ2", "string");
        	this.dsUpdate0.addColumn("NO_POSTHQ_BRANCH", "string");
        	this.dsUpdate0.addColumn("AT_ADDRHQ1_BRANCH", "string");
        	this.dsUpdate0.addColumn("AT_ADDRHQ2_BRANCH", "string");
        	this.dsUpdate0.addColumn("NO_POSTWORK", "string");
        	this.dsUpdate0.addColumn("AT_ADDRWORK1", "string");
        	this.dsUpdate0.addColumn("AT_ADDRWORK2", "string");
        	this.dsUpdate0.addColumn("NO_POSTREGIST", "string");
        	this.dsUpdate0.addColumn("AT_ADDRREGIST1", "string");
        	this.dsUpdate0.addColumn("AT_ADDRREGIST2", "string");
        	this.dsUpdate0.addColumn("NO_TEL_BRANCH", "string");
        	this.dsUpdate0.addColumn("NO_FAX_BRANCH", "string");
        	this.dsUpdate0.addColumn("YN_DC", "string");
        	this.dsUpdate0.addColumn("YN_DM", "string");
        	this.dsUpdate0.addColumn("DS_CUSTOMER1", "string");
        	this.dsUpdate0.addColumn("DS_CUSTOMER2", "string");
        	this.dsUpdate0.addColumn("DS_CUSTOMER3", "string");
        	this.dsUpdate0.addColumn("NO_TECHEXPERT", "bigdecimal");
        	this.dsUpdate0.addColumn("NO_ENGINEER1", "bigdecimal");
        	this.dsUpdate0.addColumn("NO_TOTAL", "bigdecimal");
        	this.dsUpdate0.addColumn("NO_MANAGE", "bigdecimal");
        	this.dsUpdate0.addColumn("NO_NONLICENSE", "bigdecimal");
        	this.dsUpdate0.addColumn("RM_BIGO", "string");
        	this.dsUpdate0.addColumn("GR_CREDIT", "string");
        	this.dsUpdate0.addColumn("GR_CASH", "string");
        	this.dsUpdate0.addColumn("GR_RMIS", "string");
        	this.dsUpdate0.addColumn("TY_REGIST", "string");
        	this.dsUpdate0.addColumn("TY_REGIST_DM", "string");
        	this.dsUpdate0.addColumn("DS_TALAK", "string");
        	this.dsUpdate0.addColumn("DT_INPUT", "string");
        	this.dsUpdate0.addColumn("ID_USER", "string");
        	this.dsUpdate0.addColumn("CD_MODULE", "string");
        	this.dsUpdate0.addColumn("NO_GROUPWARE", "string");

        	var strSvcId    = "";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	// if(this.gfnGetFlag(this.dsList, 0) == "I")
        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_VENDOR")))
        	{
        		var today = this.gfnGetDate();

        		strSvcId = "insert00";
        		inData = "insert00=dsInsert0";
        		outData = "dsOutput0=insert00";

        		this.dsInsert0.clearData();
        		var nrow = this.dsInsert0.addRow();

        		this.dsInsert0.setColumn(nrow, "CD_MODULE", this.dsSearch.getColumn(0, "DS_PARAM"));
        		this.dsInsert0.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        		this.dsInsert0.setColumn(nrow, "NO_SJC", this.dsList.getColumn(0, "NO_SJC"));
        		this.dsInsert0.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(0, "DS_VENDOR"));
        		this.dsInsert0.setColumn(nrow, "NO_REGIST", this.dsList.getColumn(0, "NO_REGIST"));
        		this.dsInsert0.setColumn(nrow, "DS_PRESIDENT", this.dsList.getColumn(0, "DS_PRESIDENT"));
        		this.dsInsert0.setColumn(nrow, "NO_PRESIDENT", this.dsList.getColumn(0, "NO_PRESIDENT"));
        		this.dsInsert0.setColumn(nrow, "NO_PRESIDENT_HP", this.dsList.getColumn(0, "NO_PRESIDENT_HP"));
        		this.dsInsert0.setColumn(nrow, "NO_PRESIDENT_POST", this.dsList.getColumn(0, "NO_PRESIDENT_POST"));
        		this.dsInsert0.setColumn(nrow, "AT_PRESIDENT_ADDR1", this.dsList.getColumn(0, "AT_PRESIDENT_ADDR1"));
        		this.dsInsert0.setColumn(nrow, "AT_PRESIDENT_ADDR2", this.dsList.getColumn(0, "AT_PRESIDENT_ADDR2"));
        		this.dsInsert0.setColumn(nrow, "DS_PRESIDENT_EMAIL", this.dsList.getColumn(0, "DS_PRESIDENT_EMAIL"));
        		this.dsInsert0.setColumn(nrow, "DS_COMPRESIDENT1", this.dsList.getColumn(0, "DS_COMPRESIDENT1"));
        		this.dsInsert0.setColumn(nrow, "NO_COMPRESIDENT1", this.dsList.getColumn(0, "NO_COMPRESIDENT1"));
        		this.dsInsert0.setColumn(nrow, "NO_COMPRESIDENT1_HP", this.dsList.getColumn(0, "NO_COMPRESIDENT1_HP"));
        		this.dsInsert0.setColumn(nrow, "NO_COMPRESIDENT1_POST", this.dsList.getColumn(0, "NO_COMPRESIDENT1_POST"));
        		this.dsInsert0.setColumn(nrow, "AT_COMPRESIDENT1_ADDR1", this.dsList.getColumn(0, "AT_COMPRESIDENT1_ADDR1"));
        		this.dsInsert0.setColumn(nrow, "AT_COMPRESIDENT1_ADDR2", this.dsList.getColumn(0, "AT_COMPRESIDENT1_ADDR2"));
        		this.dsInsert0.setColumn(nrow, "DS_COMPRESIDENT1_EMAIL", this.dsList.getColumn(0, "DS_COMPRESIDENT1_EMAIL"));
        		this.dsInsert0.setColumn(nrow, "DS_COMPRESIDENT2", this.dsList.getColumn(0, "DS_COMPRESIDENT2"));
        		this.dsInsert0.setColumn(nrow, "NO_COMPRESIDENT2", this.dsList.getColumn(0, "NO_COMPRESIDENT2"));
        		this.dsInsert0.setColumn(nrow, "NO_COMPRESIDENT2_HP", this.dsList.getColumn(0, "NO_COMPRESIDENT2_HP"));
        		this.dsInsert0.setColumn(nrow, "NO_COMPRESIDENT2_POST", this.dsList.getColumn(0, "NO_COMPRESIDENT2_POST"));
        		this.dsInsert0.setColumn(nrow, "AT_COMPRESIDENT2_ADDR1", this.dsList.getColumn(0, "AT_COMPRESIDENT2_ADDR1"));
        		this.dsInsert0.setColumn(nrow, "AT_COMPRESIDENT2_ADDR2", this.dsList.getColumn(0, "AT_COMPRESIDENT2_ADDR2"));
        		this.dsInsert0.setColumn(nrow, "DS_COMPRESIDENT2_EMAIL", this.dsList.getColumn(0, "DS_COMPRESIDENT2_EMAIL"));
        		this.dsInsert0.setColumn(nrow, "CD_DIVIDE", this.dsList.getColumn(0, "CD_DIVIDE"));
        		this.dsInsert0.setColumn(nrow, "DT_FOUNDATION", this.dsList.getColumn(0, "DT_FOUNDATION"));
        		this.dsInsert0.setColumn(nrow, "CD_KIND", this.dsList.getColumn(0, "CD_KIND"));
        		this.dsInsert0.setColumn(nrow, "TY_LARGECOM", this.dsList.getColumn(0, "TY_LARGECOM"));
        		this.dsInsert0.setColumn(nrow, "DS_STATUS", this.dsList.getColumn(0, "DS_STATUS"));
        		this.dsInsert0.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(0, "DS_ITEM"));
        		this.dsInsert0.setColumn(nrow, "NO_TEL", this.dsList.getColumn(0, "NO_TEL"));
        		this.dsInsert0.setColumn(nrow, "NO_FAX", this.dsList.getColumn(0, "NO_FAX"));
        		this.dsInsert0.setColumn(nrow, "DS_EMAIL", this.dsList.getColumn(0, "DS_EMAIL"));
        		this.dsInsert0.setColumn(nrow, "DS_HOMEPAGE", this.dsList.getColumn(0, "DS_HOMEPAGE"));
        		this.dsInsert0.setColumn(nrow, "DS_DAM_NAME", this.dsList.getColumn(0, "DS_DAM_NAME"));
        		this.dsInsert0.setColumn(nrow, "DS_DAM_HANDPHONE", this.dsList.getColumn(0, "DS_DAM_HANDPHONE"));
        		this.dsInsert0.setColumn(nrow, "DS_DAM_DEPT", this.dsList.getColumn(0, "DS_DAM_DEPT"));
        		this.dsInsert0.setColumn(nrow, "DS_DAM_TEL", this.dsList.getColumn(0, "DS_DAM_TEL"));
        		this.dsInsert0.setColumn(nrow, "DS_DAM_EMAIL", this.dsList.getColumn(0, "DS_DAM_EMAIL"));
        		this.dsInsert0.setColumn(nrow, "NO_POSTHQ", this.dsList.getColumn(0, "NO_POSTHQ"));
        		this.dsInsert0.setColumn(nrow, "AT_ADDRHQ1", this.dsList.getColumn(0, "AT_ADDRHQ1"));
        		this.dsInsert0.setColumn(nrow, "AT_ADDRHQ2", this.dsList.getColumn(0, "AT_ADDRHQ2"));
        		this.dsInsert0.setColumn(nrow, "NO_POSTHQ_BRANCH", this.dsList.getColumn(0, "NO_POSTHQ_BRANCH"));
        		this.dsInsert0.setColumn(nrow, "AT_ADDRHQ1_BRANCH", this.dsList.getColumn(0, "AT_ADDRHQ1_BRANCH"));
        		this.dsInsert0.setColumn(nrow, "AT_ADDRHQ2_BRANCH", this.dsList.getColumn(0, "AT_ADDRHQ2_BRANCH"));
        		this.dsInsert0.setColumn(nrow, "NO_POSTWORK", this.dsList.getColumn(0, "NO_POSTWORK"));
        		this.dsInsert0.setColumn(nrow, "AT_ADDRWORK1", this.dsList.getColumn(0, "AT_ADDRWORK1"));
        		this.dsInsert0.setColumn(nrow, "AT_ADDRWORK2", this.dsList.getColumn(0, "AT_ADDRWORK2"));
        		this.dsInsert0.setColumn(nrow, "NO_POSTREGIST", this.dsList.getColumn(0, "NO_POSTREGIST"));
        		this.dsInsert0.setColumn(nrow, "AT_ADDRREGIST1", this.dsList.getColumn(0, "AT_ADDRREGIST1"));
        		this.dsInsert0.setColumn(nrow, "AT_ADDRREGIST2", this.dsList.getColumn(0, "AT_ADDRREGIST2"));
        		this.dsInsert0.setColumn(nrow, "NO_TEL_BRANCH", this.dsList.getColumn(0, "NO_TEL_BRANCH"));
        		this.dsInsert0.setColumn(nrow, "NO_FAX_BRANCH", this.dsList.getColumn(0, "NO_FAX_BRANCH"));
        		this.dsInsert0.setColumn(nrow, "YN_DC", this.dsList.getColumn(0, "YN_DC"));
        		this.dsInsert0.setColumn(nrow, "YN_DM", this.dsList.getColumn(0, "YN_DM"));
        		this.dsInsert0.setColumn(nrow, "DS_CUSTOMER1", this.dsList.getColumn(0, "DS_CUSTOMER1"));
        		this.dsInsert0.setColumn(nrow, "DS_CUSTOMER2", this.dsList.getColumn(0, "DS_CUSTOMER2"));
        		this.dsInsert0.setColumn(nrow, "DS_CUSTOMER3", this.dsList.getColumn(0, "DS_CUSTOMER3"));
        		this.dsInsert0.setColumn(nrow, "NO_TECHEXPERT", this.dsList.getColumn(0, "NO_TECHEXPERT"));
        		this.dsInsert0.setColumn(nrow, "NO_ENGINEER1", this.dsList.getColumn(0, "NO_ENGINEER1"));
        		this.dsInsert0.setColumn(nrow, "NO_TOTAL", this.dsList.getColumn(0, "NO_TOTAL"));
        		this.dsInsert0.setColumn(nrow, "NO_MANAGE", this.dsList.getColumn(0, "NO_MANAGE"));
        		this.dsInsert0.setColumn(nrow, "NO_NONLICENSE", this.dsList.getColumn(0, "NO_NONLICENSE"));
        		this.dsInsert0.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(0, "RM_BIGO"));
        		this.dsInsert0.setColumn(nrow, "GR_CREDIT", this.dsList.getColumn(0, "GR_CREDIT"));
        		this.dsInsert0.setColumn(nrow, "GR_CASH", this.dsList.getColumn(0, "GR_CASH"));
        		this.dsInsert0.setColumn(nrow, "GR_RMIS", this.dsList.getColumn(0, "GR_RMIS"));
        		this.dsInsert0.setColumn(nrow, "TY_REGIST", this.dsList.getColumn(0, "TY_REGIST"));
        		this.dsInsert0.setColumn(nrow, "TY_REGIST_DM", this.dsList.getColumn(0, "TY_REGIST_DM"));
        		this.dsInsert0.setColumn(nrow, "DS_TALAK", this.dsList.getColumn(0, "DS_TALAK"));
        		this.dsInsert0.setColumn(nrow, "DT_INPUT",  today.substring(0,4));
        		this.dsInsert0.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsInsert0.setColumn(nrow, "NO_GROUPWARE", this.dsList.getColumn(0, "NO_GROUPWARE"));

        	}else{

        		strSvcId = "update00";
        		inData = "update00=dsUpdate0";
        		outData = "";

        		this.dsUpdate0.clearData();
        		var nrow = this.dsUpdate0.addRow();

        		this.dsUpdate0.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        		this.dsUpdate0.setColumn(nrow, "NO_SJC", this.dsList.getColumn(0, "NO_SJC"));
        		this.dsUpdate0.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(0, "DS_VENDOR"));
        		this.dsUpdate0.setColumn(nrow, "NO_REGIST", this.dsList.getColumn(0, "NO_REGIST"));
        		this.dsUpdate0.setColumn(nrow, "DS_PRESIDENT", this.dsList.getColumn(0, "DS_PRESIDENT"));
        		this.dsUpdate0.setColumn(nrow, "NO_PRESIDENT", this.dsList.getColumn(0, "NO_PRESIDENT"));
        		this.dsUpdate0.setColumn(nrow, "NO_PRESIDENT_HP", this.dsList.getColumn(0, "NO_PRESIDENT_HP"));
        		this.dsUpdate0.setColumn(nrow, "NO_PRESIDENT_POST", this.dsList.getColumn(0, "NO_PRESIDENT_POST"));
        		this.dsUpdate0.setColumn(nrow, "AT_PRESIDENT_ADDR1", this.dsList.getColumn(0, "AT_PRESIDENT_ADDR1"));
        		this.dsUpdate0.setColumn(nrow, "AT_PRESIDENT_ADDR2", this.dsList.getColumn(0, "AT_PRESIDENT_ADDR2"));
        		this.dsUpdate0.setColumn(nrow, "DS_PRESIDENT_EMAIL", this.dsList.getColumn(0, "DS_PRESIDENT_EMAIL"));
        		this.dsUpdate0.setColumn(nrow, "DS_COMPRESIDENT1", this.dsList.getColumn(0, "DS_COMPRESIDENT1"));
        		this.dsUpdate0.setColumn(nrow, "NO_COMPRESIDENT1", this.dsList.getColumn(0, "NO_COMPRESIDENT1"));
        		this.dsUpdate0.setColumn(nrow, "NO_COMPRESIDENT1_HP", this.dsList.getColumn(0, "NO_COMPRESIDENT1_HP"));
        		this.dsUpdate0.setColumn(nrow, "NO_COMPRESIDENT1_POST", this.dsList.getColumn(0, "NO_COMPRESIDENT1_POST"));
        		this.dsUpdate0.setColumn(nrow, "AT_COMPRESIDENT1_ADDR1", this.dsList.getColumn(0, "AT_COMPRESIDENT1_ADDR1"));
        		this.dsUpdate0.setColumn(nrow, "AT_COMPRESIDENT1_ADDR2", this.dsList.getColumn(0, "AT_COMPRESIDENT1_ADDR2"));
        		this.dsUpdate0.setColumn(nrow, "DS_COMPRESIDENT1_EMAIL", this.dsList.getColumn(0, "DS_COMPRESIDENT1_EMAIL"));
        		this.dsUpdate0.setColumn(nrow, "DS_COMPRESIDENT2", this.dsList.getColumn(0, "DS_COMPRESIDENT2"));
        		this.dsUpdate0.setColumn(nrow, "NO_COMPRESIDENT2", this.dsList.getColumn(0, "NO_COMPRESIDENT2"));
        		this.dsUpdate0.setColumn(nrow, "NO_COMPRESIDENT2_HP", this.dsList.getColumn(0, "NO_COMPRESIDENT2_HP"));
        		this.dsUpdate0.setColumn(nrow, "NO_COMPRESIDENT2_POST", this.dsList.getColumn(0, "NO_COMPRESIDENT2_POST"));
        		this.dsUpdate0.setColumn(nrow, "AT_COMPRESIDENT2_ADDR1", this.dsList.getColumn(0, "AT_COMPRESIDENT2_ADDR1"));
        		this.dsUpdate0.setColumn(nrow, "AT_COMPRESIDENT2_ADDR2", this.dsList.getColumn(0, "AT_COMPRESIDENT2_ADDR2"));
        		this.dsUpdate0.setColumn(nrow, "DS_COMPRESIDENT2_EMAIL", this.dsList.getColumn(0, "DS_COMPRESIDENT2_EMAIL"));
        		this.dsUpdate0.setColumn(nrow, "CD_DIVIDE", this.dsList.getColumn(0, "CD_DIVIDE"));
        		this.dsUpdate0.setColumn(nrow, "DT_FOUNDATION", this.dsList.getColumn(0, "DT_FOUNDATION"));
        		this.dsUpdate0.setColumn(nrow, "CD_KIND", this.dsList.getColumn(0, "CD_KIND"));
        		this.dsUpdate0.setColumn(nrow, "TY_LARGECOM", this.dsList.getColumn(0, "TY_LARGECOM"));
        		this.dsUpdate0.setColumn(nrow, "DS_STATUS", this.dsList.getColumn(0, "DS_STATUS"));
        		this.dsUpdate0.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(0, "DS_ITEM"));
        		this.dsUpdate0.setColumn(nrow, "NO_TEL", this.dsList.getColumn(0, "NO_TEL"));
        		this.dsUpdate0.setColumn(nrow, "NO_FAX", this.dsList.getColumn(0, "NO_FAX"));
        		this.dsUpdate0.setColumn(nrow, "DS_EMAIL", this.dsList.getColumn(0, "DS_EMAIL"));
        		this.dsUpdate0.setColumn(nrow, "DS_HOMEPAGE", this.dsList.getColumn(0, "DS_HOMEPAGE"));
        		this.dsUpdate0.setColumn(nrow, "DS_DAM_NAME", this.dsList.getColumn(0, "DS_DAM_NAME"));
        		this.dsUpdate0.setColumn(nrow, "DS_DAM_HANDPHONE", this.dsList.getColumn(0, "DS_DAM_HANDPHONE"));
        		this.dsUpdate0.setColumn(nrow, "DS_DAM_DEPT", this.dsList.getColumn(0, "DS_DAM_DEPT"));
        		this.dsUpdate0.setColumn(nrow, "DS_DAM_TEL", this.dsList.getColumn(0, "DS_DAM_TEL"));
        		this.dsUpdate0.setColumn(nrow, "DS_DAM_EMAIL", this.dsList.getColumn(0, "DS_DAM_EMAIL"));
        		this.dsUpdate0.setColumn(nrow, "NO_POSTHQ", this.dsList.getColumn(0, "NO_POSTHQ"));
        		this.dsUpdate0.setColumn(nrow, "AT_ADDRHQ1", this.dsList.getColumn(0, "AT_ADDRHQ1"));
        		this.dsUpdate0.setColumn(nrow, "AT_ADDRHQ2", this.dsList.getColumn(0, "AT_ADDRHQ2"));
        		this.dsUpdate0.setColumn(nrow, "NO_POSTHQ_BRANCH", this.dsList.getColumn(0, "NO_POSTHQ_BRANCH"));
        		this.dsUpdate0.setColumn(nrow, "AT_ADDRHQ1_BRANCH", this.dsList.getColumn(0, "AT_ADDRHQ1_BRANCH"));
        		this.dsUpdate0.setColumn(nrow, "AT_ADDRHQ2_BRANCH", this.dsList.getColumn(0, "AT_ADDRHQ2_BRANCH"));
        		this.dsUpdate0.setColumn(nrow, "NO_POSTWORK", this.dsList.getColumn(0, "NO_POSTWORK"));
        		this.dsUpdate0.setColumn(nrow, "AT_ADDRWORK1", this.dsList.getColumn(0, "AT_ADDRWORK1"));
        		this.dsUpdate0.setColumn(nrow, "AT_ADDRWORK2", this.dsList.getColumn(0, "AT_ADDRWORK2"));
        		this.dsUpdate0.setColumn(nrow, "NO_POSTREGIST", this.dsList.getColumn(0, "NO_POSTREGIST"));
        		this.dsUpdate0.setColumn(nrow, "AT_ADDRREGIST1", this.dsList.getColumn(0, "AT_ADDRREGIST1"));
        		this.dsUpdate0.setColumn(nrow, "AT_ADDRREGIST2", this.dsList.getColumn(0, "AT_ADDRREGIST2"));
        		this.dsUpdate0.setColumn(nrow, "NO_TEL_BRANCH", this.dsList.getColumn(0, "NO_TEL_BRANCH"));
        		this.dsUpdate0.setColumn(nrow, "NO_FAX_BRANCH", this.dsList.getColumn(0, "NO_FAX_BRANCH"));
        		this.dsUpdate0.setColumn(nrow, "YN_DC", this.dsList.getColumn(0, "YN_DC"));
        		this.dsUpdate0.setColumn(nrow, "YN_DM", this.dsList.getColumn(0, "YN_DM"));
        		this.dsUpdate0.setColumn(nrow, "DS_CUSTOMER1", this.dsList.getColumn(0, "DS_CUSTOMER1"));
        		this.dsUpdate0.setColumn(nrow, "DS_CUSTOMER2", this.dsList.getColumn(0, "DS_CUSTOMER2"));
        		this.dsUpdate0.setColumn(nrow, "DS_CUSTOMER3", this.dsList.getColumn(0, "DS_CUSTOMER3"));
        		this.dsUpdate0.setColumn(nrow, "NO_TECHEXPERT", this.dsList.getColumn(0, "NO_TECHEXPERT"));
        		this.dsUpdate0.setColumn(nrow, "NO_ENGINEER1", this.dsList.getColumn(0, "NO_ENGINEER1"));
        		this.dsUpdate0.setColumn(nrow, "NO_TOTAL", this.dsList.getColumn(0, "NO_TOTAL"));
        		this.dsUpdate0.setColumn(nrow, "NO_MANAGE", this.dsList.getColumn(0, "NO_MANAGE"));
        		this.dsUpdate0.setColumn(nrow, "NO_NONLICENSE", this.dsList.getColumn(0, "NO_NONLICENSE"));
        		this.dsUpdate0.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(0, "RM_BIGO"));
        		this.dsUpdate0.setColumn(nrow, "GR_CREDIT", this.dsList.getColumn(0, "GR_CREDIT"));
        		this.dsUpdate0.setColumn(nrow, "GR_CASH", this.dsList.getColumn(0, "GR_CASH"));
        		this.dsUpdate0.setColumn(nrow, "GR_RMIS", this.dsList.getColumn(0, "GR_RMIS"));
        		this.dsUpdate0.setColumn(nrow, "TY_REGIST", this.dsList.getColumn(0, "TY_REGIST"));
        		this.dsUpdate0.setColumn(nrow, "TY_REGIST_DM", this.dsList.getColumn(0, "TY_REGIST_DM"));
        		this.dsUpdate0.setColumn(nrow, "DS_TALAK", this.dsList.getColumn(0, "DS_TALAK"));
        		this.dsUpdate0.setColumn(nrow, "DT_INPUT", this.dsList.getColumn(0, "DT_INPUT"));
        		this.dsUpdate0.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsUpdate0.setColumn(nrow, "CD_MODULE", this.dsSearch.getColumn(0, "DS_PARAM"));
        		this.dsUpdate0.setColumn(nrow, "NO_GROUPWARE", this.dsList.getColumn(0, "NO_GROUPWARE"));

        	}

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        };

        // 회사연혁
        this.fnSaveAction10 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab10)) return;

        	this.dsSave10 = new Dataset();
        	this.dsSave10.addColumn("ID_USER", "string");
        	this.dsSave10.addColumn("CD_VENDOR", "string");
        	this.dsSave10.addColumn("DT_INPUT", "string");
        	this.dsSave10.addColumn("TY_WRK", "string");
        	this.dsSave10.addColumn("DT_HISTORY", "string");
        	this.dsSave10.addColumn("NO_HISTORY", "string");
        	this.dsSave10.addColumn("DS_CONTENT", "string");
        	this.dsSave10.addColumn("RM_BIGO", "string");

        	this.dxGridTab10.updateToDataset();

        	this.dsSave10.clearData();

        	for (var i = 0; i < this.dsList10.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList10, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave10.addRow();
        				this.dsSave10.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave10.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave10.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave10.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave10.setColumn(nrow, "DT_HISTORY", this.dsList10.getColumn(i, "DT_HISTORY"));
        				this.dsSave10.setColumn(nrow, "NO_HISTORY", this.dsList10.getColumn(i, "NO_HISTORY"));
        				this.dsSave10.setColumn(nrow, "DS_CONTENT", this.dsList10.getColumn(i, "DS_CONTENT"));
        				this.dsSave10.setColumn(nrow, "RM_BIGO", this.dsList10.getColumn(i, "RM_BIGO"));

        				break;
        		}
        	}

        	if (this.dsSave10.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save10=dsSave10";
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

        // 직원관리
        this.fnSaveAction15 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab15)) return;

        	this.dsSave15 = new Dataset();
        	this.dsSave15.addColumn("TY_WRK", "string");
        	this.dsSave15.addColumn("ID_USER", "string");
        	this.dsSave15.addColumn("CD_VENDOR", "string");
        	this.dsSave15.addColumn("DT_INPUT", "string");
        	this.dsSave15.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave15.addColumn("DS_NAME", "string");
        	this.dsSave15.addColumn("DS_NAMEHJ", "string");
        	this.dsSave15.addColumn("DT_BIRTHDAY", "string");
        	this.dsSave15.addColumn("DS_LEVEL", "string");
        	this.dsSave15.addColumn("DS_CHARGE", "string");
        	this.dsSave15.addColumn("AT_PRMTADDR", "string");
        	this.dsSave15.addColumn("AT_ADDRESS", "string");
        	this.dsSave15.addColumn("NO_TEL", "string");
        	this.dsSave15.addColumn("DS_EMIALID", "string");
        	this.dsSave15.addColumn("DS_FINALSCHOOL", "string");
        	this.dsSave15.addColumn("DS_MAJORFIELD", "string");
        	this.dsSave15.addColumn("NO_HANDPHONE", "string");
        	this.dsSave15.addColumn("DS_DEPT", "string");
        	this.dsSave15.addColumn("RM_BIGO", "string");

        	this.dxGridTab15.updateToDataset();

        	this.dsSave15.clearData();

        	for (var i = 0; i < this.dsList15.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList15, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave15.addRow();
        				this.dsSave15.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave15.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave15.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave15.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave15.setColumn(nrow, "NO_SEQ", this.dsList15.getColumn(i, "NO_SEQ"));
        				this.dsSave15.setColumn(nrow, "DS_NAME", this.dsList15.getColumn(i, "DS_NAME"));
        				this.dsSave15.setColumn(nrow, "DS_NAMEHJ", this.dsList15.getColumn(i, "DS_NAMEHJ"));
        				this.dsSave15.setColumn(nrow, "DT_BIRTHDAY", this.dsList15.getColumn(i, "DT_BIRTHDAY"));
        				this.dsSave15.setColumn(nrow, "DS_LEVEL", this.dsList15.getColumn(i, "DS_LEVEL"));
        				this.dsSave15.setColumn(nrow, "DS_CHARGE", this.dsList15.getColumn(i, "DS_CHARGE"));
        				this.dsSave15.setColumn(nrow, "AT_PRMTADDR", this.dsList15.getColumn(i, "AT_PRMTADDR"));
        				this.dsSave15.setColumn(nrow, "AT_ADDRESS", this.dsList15.getColumn(i, "AT_ADDRESS"));
        				this.dsSave15.setColumn(nrow, "NO_TEL", this.dsList15.getColumn(i, "NO_TEL"));
        				this.dsSave15.setColumn(nrow, "DS_EMIALID", this.dsList15.getColumn(i, "DS_EMIALID"));
        				this.dsSave15.setColumn(nrow, "DS_FINALSCHOOL", this.dsList15.getColumn(i, "DS_FINALSCHOOL"));
        				this.dsSave15.setColumn(nrow, "DS_MAJORFIELD", this.dsList15.getColumn(i, "DS_MAJORFIELD"));
        				this.dsSave15.setColumn(nrow, "NO_HANDPHONE", this.dsList15.getColumn(i, "NO_HANDPHONE"));
        				this.dsSave15.setColumn(nrow, "DS_DEPT", this.dsList15.getColumn(i, "DS_DEPT"));
        				this.dsSave15.setColumn(nrow, "RM_BIGO", this.dsList15.getColumn(i, "RM_BIGO"));

        				break;
        		}
        	}

        	if (this.dsSave15.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save15=dsSave15";
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

        // 등록공종
        this.fnSaveAction20 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab20)) return;

        	this.dsSave20 = new Dataset();
        	this.dsSave20.addColumn("TY_WRK", "string");
        	this.dsSave20.addColumn("ID_USER", "string");
        	this.dsSave20.addColumn("CD_VENDOR", "string");
        	this.dsSave20.addColumn("DT_INPUT", "string");
        	this.dsSave20.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave20.addColumn("CD_COSTCLASS", "string");
        	this.dsSave20.addColumn("CD_LICCOST", "string");
        	this.dsSave20.addColumn("TY_REGIST", "string");
        	this.dsSave20.addColumn("RM_BIGO", "string");

        	this.dxGridTab20.updateToDataset();

        	this.dsSave20.clearData();

        	for (var i = 0; i < this.dsList20.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList20, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave20.addRow();
        				this.dsSave20.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave20.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave20.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave20.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave20.setColumn(nrow, "NO_SEQ", this.dsList20.getColumn(i, "NO_SEQ"));
        				this.dsSave20.setColumn(nrow, "CD_COSTCLASS", this.dsList20.getColumn(i, "CD_COSTCLASS"));
        				this.dsSave20.setColumn(nrow, "CD_LICCOST", this.dsList20.getColumn(i, "CD_LICCOST"));
        				this.dsSave20.setColumn(nrow, "TY_REGIST", this.dsList20.getColumn(i, "TY_REGIST"));
        				this.dsSave20.setColumn(nrow, "RM_BIGO", this.dsList20.getColumn(i, "RM_BIGO"));

        				break;
        		}
        	}

        	if (this.dsSave20.rowcount == 0) return;

        	this.dsList20.filter("TY_REGIST == '01'");

        	if(this.dsList20.rowcount > 1)
        	{
        		this.gfnAlert("대표공종은 1개만 선택 가능합니다.");
        		this.dsList20.filter("");
        		return;
        	}else
        	{
        		this.dsList20.filter("");
        	}

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save20=dsSave20";
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

        // 장비공종
        this.fnSaveAction25 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab25)) return;

        	this.dsSave25 = new Dataset();
        	this.dsSave25.addColumn("TY_WRK", "string");
        	this.dsSave25.addColumn("ID_USER", "string");
        	this.dsSave25.addColumn("CD_VENDOR", "string");
        	this.dsSave25.addColumn("DT_INPUT", "string");
        	this.dsSave25.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave25.addColumn("CD_COSTCLASS", "string");
        	this.dsSave25.addColumn("CD_LICCOST", "string");
        	this.dsSave25.addColumn("TY_REGIST", "string");
        	this.dsSave25.addColumn("RM_BIGO", "string");

        	this.dxGridTab25.updateToDataset();

        	this.dsSave25.clearData();

        	for (var i = 0; i < this.dsList25.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList25, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave25.addRow();
        				this.dsSave25.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave25.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave25.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave25.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave25.setColumn(nrow, "NO_SEQ", this.dsList25.getColumn(i, "NO_SEQ"));
        				this.dsSave25.setColumn(nrow, "CD_COSTCLASS", this.dsList25.getColumn(i, "CD_COSTCLASS"));
        				this.dsSave25.setColumn(nrow, "CD_LICCOST", this.dsList25.getColumn(i, "CD_LICCOST"));
        				this.dsSave25.setColumn(nrow, "TY_REGIST", this.dsList25.getColumn(i, "TY_REGIST"));
        				this.dsSave25.setColumn(nrow, "RM_BIGO", this.dsList25.getColumn(i, "RM_BIGO"));

        				break;
        		}
        	}

        	if (this.dsSave25.rowcount == 0) return;

        	this.dsList25.filter("TY_REGIST == '01'");

        	if(this.dsList25.rowcount > 1)
        	{
        		this.gfnAlert("대표공종은 1개만 선택 가능합니다.");
        		this.dsList25.filter("");
        		return;
        	}else
        	{
        		this.dsList25.filter("");
        	}

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save25=dsSave25";
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

        // 면허정보
        this.fnSaveAction30 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab30)) return;

        	this.dsSave30 = new Dataset();
        	this.dsSave30.addColumn("TY_WRK", "string");
        	this.dsSave30.addColumn("ID_USER", "string");
        	this.dsSave30.addColumn("CD_VENDOR", "string");
        	this.dsSave30.addColumn("DT_INPUT", "string");
        	this.dsSave30.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave30.addColumn("CD_LICENSE", "string");
        	this.dsSave30.addColumn("NO_LICENSE", "string");
        	this.dsSave30.addColumn("TY_REGIST", "string");
        	this.dsSave30.addColumn("YR_RESULT", "string");
        	this.dsSave30.addColumn("AM_CONTLIMIT", "bigdecimal");
        	this.dsSave30.addColumn("RK_REGION", "bigdecimal");
        	this.dsSave30.addColumn("RK_REGIONTOTAL", "bigdecimal");
        	this.dsSave30.addColumn("RK_NATION", "bigdecimal");
        	this.dsSave30.addColumn("RK_NATIONTOTAL", "bigdecimal");
        	this.dsSave30.addColumn("RM_BIGO", "string");

        	this.dxGridTab30.updateToDataset();

        	this.dsSave30.clearData();

        	for (var i = 0; i < this.dsList30.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList30, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave30.addRow();

        				this.dsSave30.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave30.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave30.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave30.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave30.setColumn(nrow, "NO_SEQ", this.dsList30.getColumn(i, "NO_SEQ"));
        				this.dsSave30.setColumn(nrow, "CD_LICENSE", this.dsList30.getColumn(i, "CD_LICENSE"));
        				this.dsSave30.setColumn(nrow, "NO_LICENSE", this.dsList30.getColumn(i, "NO_LICENSE"));
        				this.dsSave30.setColumn(nrow, "TY_REGIST", this.dsList30.getColumn(i, "TY_REGIST"));
        				this.dsSave30.setColumn(nrow, "YR_RESULT", this.dsList30.getColumn(i, "YR_RESULT"));
        				this.dsSave30.setColumn(nrow, "AM_CONTLIMIT", this.dsList30.getColumn(i, "AM_CONTLIMIT"));
        				this.dsSave30.setColumn(nrow, "RK_REGION", this.dsList30.getColumn(i, "RK_REGION"));
        				this.dsSave30.setColumn(nrow, "RK_REGIONTOTAL", this.dsList30.getColumn(i, "RK_REGIONTOTAL"));
        				this.dsSave30.setColumn(nrow, "RK_NATION", this.dsList30.getColumn(i, "RK_NATION"));
        				this.dsSave30.setColumn(nrow, "RK_NATIONTOTAL", this.dsList30.getColumn(i, "RK_NATIONTOTAL"));
        				this.dsSave30.setColumn(nrow, "RM_BIGO", this.dsList30.getColumn(i, "RM_BIGO"));

        				break;
        		}
        	}

        	if (this.dsSave30.rowcount == 0) return;

        	this.dsList30.filter("TY_REGIST == '01'");

        	if(this.dsList30.rowcount > 1)
        	{
        		this.gfnAlert("대표면허는 1개만 선택 가능합니다.");
        		this.dsList30.filter("");
        		return;
        	}else
        	{
        		this.dsList30.filter("");
        	}

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save30=dsSave30";
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

        // 경영상태
        this.fnSaveAction40 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab40)) return;

        	this.dsSave40 = new Dataset();
        	this.dsSave40.addColumn("TY_WRK", "string");
        	this.dsSave40.addColumn("ID_USER", "string");
        	this.dsSave40.addColumn("CD_VENDOR", "string");
        	this.dsSave40.addColumn("DT_INPUT", "string");
        	this.dsSave40.addColumn("YR_RESULT", "bigdecimal");
        	this.dsSave40.addColumn("AM_TT_ASSETS", "bigdecimal");
        	this.dsSave40.addColumn("AM_FLOW_ASSETS", "bigdecimal");
        	this.dsSave40.addColumn("AM_TT_DEBT", "bigdecimal");
        	this.dsSave40.addColumn("AM_FLOW_DEBT", "bigdecimal");
        	this.dsSave40.addColumn("AM_LOAN", "bigdecimal");
        	this.dsSave40.addColumn("AM_CAPITAL", "bigdecimal");
        	this.dsSave40.addColumn("AM_TT_CAPITAL", "bigdecimal");
        	this.dsSave40.addColumn("AM_OPERATINGPROFIT", "bigdecimal");
        	this.dsSave40.addColumn("AM_NETPROFIT", "bigdecimal");
        	this.dsSave40.addColumn("AM_SALE", "bigdecimal");
        	this.dsSave40.addColumn("AM_BEFORE_SALE", "bigdecimal");
        	this.dsSave40.addColumn("AM_TT_SALE", "bigdecimal");
        	this.dsSave40.addColumn("AM_TT_STOCK", "bigdecimal");

        	this.dxGridTab40.updateToDataset();

        	this.dsSave40.clearData();

        	for (var i = 0; i < this.dsList40.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList40, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave40.addRow();

        				this.dsSave40.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave40.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave40.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave40.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave40.setColumn(nrow, "YR_RESULT", this.dsList40.getColumn(i, "YR_RESULT"));
        				this.dsSave40.setColumn(nrow, "AM_TT_ASSETS", this.dsList40.getColumn(i, "AM_TT_ASSETS"));
        				this.dsSave40.setColumn(nrow, "AM_FLOW_ASSETS", this.dsList40.getColumn(i, "AM_FLOW_ASSETS"));
        				this.dsSave40.setColumn(nrow, "AM_TT_DEBT", this.dsList40.getColumn(i, "AM_TT_DEBT"));
        				this.dsSave40.setColumn(nrow, "AM_FLOW_DEBT", this.dsList40.getColumn(i, "AM_FLOW_DEBT"));
        				this.dsSave40.setColumn(nrow, "AM_LOAN", this.dsList40.getColumn(i, "AM_LOAN"));
        				this.dsSave40.setColumn(nrow, "AM_CAPITAL", this.dsList40.getColumn(i, "AM_CAPITAL"));
        				this.dsSave40.setColumn(nrow, "AM_TT_CAPITAL", this.dsList40.getColumn(i, "AM_TT_CAPITAL"));
        				this.dsSave40.setColumn(nrow, "AM_OPERATINGPROFIT", this.dsList40.getColumn(i, "AM_OPERATINGPROFIT"));
        				this.dsSave40.setColumn(nrow, "AM_NETPROFIT", this.dsList40.getColumn(i, "AM_NETPROFIT"));
        				this.dsSave40.setColumn(nrow, "AM_SALE", this.dsList40.getColumn(i, "AM_SALE"));
        				this.dsSave40.setColumn(nrow, "AM_BEFORE_SALE", this.dsList40.getColumn(i, "AM_BEFORE_SALE"));
        				this.dsSave40.setColumn(nrow, "AM_TT_SALE", this.dsList40.getColumn(i, "AM_TT_SALE"));
        				this.dsSave40.setColumn(nrow, "AM_TT_STOCK", this.dsList40.getColumn(i, "AM_TT_STOCK"));

        				break;
        		}
        	}

        	if (this.dsSave40.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save40=dsSave40";
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

        // 장비현황
        this.fnSaveAction50 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab50)) return;

        	this.dsSave50 = new Dataset();
        	this.dsSave50.addColumn("ID_USER", "string");
        	this.dsSave50.addColumn("CD_VENDOR", "string");
        	this.dsSave50.addColumn("DT_INPUT", "string");
        	this.dsSave50.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave50.addColumn("DS_EQUIP", "string");
        	this.dsSave50.addColumn("UT_EQUIP", "string");
        	this.dsSave50.addColumn("SZ_EQUIP", "string");
        	this.dsSave50.addColumn("QN_EQUIP", "string");
        	this.dsSave50.addColumn("RM_BIGO", "string");
        	this.dsSave50.addColumn("TY_WRK", "string");

        	this.dxGridTab50.updateToDataset();

        	this.dsSave50.clearData();

        	for (var i = 0; i < this.dsList50.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList50, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave50.addRow();

        				this.dsSave50.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave50.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave50.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave50.setColumn(nrow, "NO_SEQ", this.dsList50.getColumn(i, "NO_SEQ"));
        				this.dsSave50.setColumn(nrow, "DS_EQUIP", this.dsList50.getColumn(i, "DS_EQUIP"));
        				this.dsSave50.setColumn(nrow, "UT_EQUIP", this.dsList50.getColumn(i, "UT_EQUIP"));
        				this.dsSave50.setColumn(nrow, "SZ_EQUIP", this.dsList50.getColumn(i, "SZ_EQUIP"));
        				this.dsSave50.setColumn(nrow, "QN_EQUIP", this.dsList50.getColumn(i, "QN_EQUIP"));
        				this.dsSave50.setColumn(nrow, "RM_BIGO", this.dsList50.getColumn(i, "RM_BIGO"));
        				this.dsSave50.setColumn(nrow, "TY_WRK", flag);

        				break;
        		}
        	}

        	if (this.dsSave50.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save50=dsSave50";
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

        // 공사실적
        this.fnSaveAction60 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab60)) return;

        	this.dsSave60 = new Dataset();
        	this.dsSave60.addColumn("TY_WRK", "string");
        	this.dsSave60.addColumn("ID_USER", "string");
        	this.dsSave60.addColumn("CD_VENDOR", "string");
        	this.dsSave60.addColumn("DT_INPUT", "string");
        	this.dsSave60.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave60.addColumn("CD_LICENSE", "string");
        	this.dsSave60.addColumn("AT_WORKADDR", "string");
        	this.dsSave60.addColumn("DS_CONST", "string");
        	this.dsSave60.addColumn("DS_VENDOR", "string");
        	this.dsSave60.addColumn("CD_ORDER", "string");
        	this.dsSave60.addColumn("DS_ORDER", "string");
        	this.dsSave60.addColumn("DT_CONT", "string");
        	this.dsSave60.addColumn("FR_WORK", "string");
        	this.dsSave60.addColumn("TO_WORK", "string");
        	this.dsSave60.addColumn("AM_BTT_UNCOMPLETED", "bigdecimal");
        	this.dsSave60.addColumn("AM_COMPLETED", "bigdecimal");
        	this.dsSave60.addColumn("AM_CONTRACTPRO", "bigdecimal");
        	this.dsSave60.addColumn("AM_CONTRACTVAT", "bigdecimal");
        	this.dsSave60.addColumn("AM_UNCOMPLETED", "bigdecimal");
        	this.dsSave60.addColumn("RM_OUTLINE", "string");
        	this.dsSave60.addColumn("YN_TOP30", "string");

        	this.dxGridTab60.updateToDataset();

        	this.dsSave60.clearData();

        	for (var i = 0; i < this.dsList60.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList60, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave60.addRow();

        				this.dsSave60.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave60.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave60.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave60.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave60.setColumn(nrow, "NO_SEQ", this.dsList60.getColumn(i, "NO_SEQ"));
        				this.dsSave60.setColumn(nrow, "CD_LICENSE", this.dsList60.getColumn(i, "CD_LICENSE"));
        				this.dsSave60.setColumn(nrow, "AT_WORKADDR", this.dsList60.getColumn(i, "AT_WORKADDR"));
        				this.dsSave60.setColumn(nrow, "DS_CONST", this.dsList60.getColumn(i, "DS_CONST"));
        				this.dsSave60.setColumn(nrow, "DS_VENDOR", this.dsList60.getColumn(i, "DS_VENDOR"));
        				this.dsSave60.setColumn(nrow, "CD_ORDER", this.dsList60.getColumn(i, "CD_ORDER"));
        				this.dsSave60.setColumn(nrow, "DS_ORDER", this.dsList60.getColumn(i, "DS_ORDER"));
        				this.dsSave60.setColumn(nrow, "DT_CONT", this.dsList60.getColumn(i, "DT_CONT"));
        				this.dsSave60.setColumn(nrow, "FR_WORK", this.dsList60.getColumn(i, "FR_WORK"));
        				this.dsSave60.setColumn(nrow, "TO_WORK", this.dsList60.getColumn(i, "TO_WORK"));
        				this.dsSave60.setColumn(nrow, "AM_BTT_UNCOMPLETED", this.dsList60.getColumn(i, "AM_BTT_UNCOMPLETED"));
        				this.dsSave60.setColumn(nrow, "AM_COMPLETED", this.dsList60.getColumn(i, "AM_COMPLETED"));
        				this.dsSave60.setColumn(nrow, "AM_CONTRACTPRO", this.dsList60.getColumn(i, "AM_CONTRACTPRO"));
        				this.dsSave60.setColumn(nrow, "AM_CONTRACTVAT", this.dsList60.getColumn(i, "AM_CONTRACTVAT"));
        				this.dsSave60.setColumn(nrow, "AM_UNCOMPLETED", this.dsList60.getColumn(i, "AM_UNCOMPLETED"));
        				this.dsSave60.setColumn(nrow, "RM_OUTLINE", this.dsList60.getColumn(i, "RM_OUTLINE"));
        				this.dsSave60.setColumn(nrow, "YN_TOP30", this.dsList60.getColumn(i, "YN_TOP30"));

        				break;
        		}
        	}

        	if (this.dsSave60.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save60=dsSave60";
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

        // 상벌현황
        this.fnSaveAction70 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab70)) return;

        	this.dsSave70 = new Dataset();
        	this.dsSave70.addColumn("TY_WRK", "string");
        	this.dsSave70.addColumn("ID_USER", "string");
        	this.dsSave70.addColumn("CD_VENDOR", "string");
        	this.dsSave70.addColumn("DT_INPUT", "string");
        	this.dsSave70.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave70.addColumn("DT_JUSTICE", "string");
        	this.dsSave70.addColumn("TY_JUSTICE", "string");
        	this.dsSave70.addColumn("TY_JUSTICEKIND", "string");
        	this.dsSave70.addColumn("OR_JUSTICE", "string");
        	this.dsSave70.addColumn("FR_JUSTICE", "string");
        	this.dsSave70.addColumn("TO_JUSTICE", "string");
        	this.dsSave70.addColumn("RM_JUSTICEREASON", "string");

        	this.dxGridTab70.updateToDataset();

        	this.dsSave70.clearData();

        	for (var i = 0; i < this.dsList70.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList70, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave70.addRow();

        				this.dsSave70.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave70.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave70.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave70.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave70.setColumn(nrow, "NO_SEQ", this.dsList70.getColumn(i, "NO_SEQ"));
        				this.dsSave70.setColumn(nrow, "DT_JUSTICE", this.dsList70.getColumn(i, "DT_JUSTICE"));
        				this.dsSave70.setColumn(nrow, "TY_JUSTICE", this.dsList70.getColumn(i, "TY_JUSTICE"));
        				this.dsSave70.setColumn(nrow, "TY_JUSTICEKIND", this.dsList70.getColumn(i, "TY_JUSTICEKIND"));
        				this.dsSave70.setColumn(nrow, "OR_JUSTICE", this.dsList70.getColumn(i, "OR_JUSTICE"));
        				this.dsSave70.setColumn(nrow, "FR_JUSTICE", this.dsList70.getColumn(i, "FR_JUSTICE"));
        				this.dsSave70.setColumn(nrow, "TO_JUSTICE", this.dsList70.getColumn(i, "TO_JUSTICE"));
        				this.dsSave70.setColumn(nrow, "RM_JUSTICEREASON", this.dsList70.getColumn(i, "RM_JUSTICEREASON"));

        				break;
        		}
        	}

        	if (this.dsSave70.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save70=dsSave70";
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

        // 특허인증
        this.fnSaveAction80 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab80)) return;

        	this.dsSave80 = new Dataset();
        	this.dsSave80.addColumn("TY_WRK", "string");
        	this.dsSave80.addColumn("ID_USER", "string");
        	this.dsSave80.addColumn("CD_VENDOR", "string");
        	this.dsSave80.addColumn("DT_INPUT", "string");
        	this.dsSave80.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave80.addColumn("TY_GUBUN", "string");
        	this.dsSave80.addColumn("NO_CONTENT", "string");
        	this.dsSave80.addColumn("DT_ISO", "string");
        	this.dsSave80.addColumn("DS_CONTENT", "string");
        	this.dsSave80.addColumn("RM_BIGO", "string");

        	this.dxGridTab80.updateToDataset();

        	this.dsSave80.clearData();

        	for (var i = 0; i < this.dsList80.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList80, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave80.addRow();

        				this.dsSave80.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave80.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave80.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave80.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave80.setColumn(nrow, "NO_SEQ", this.dsList80.getColumn(i, "NO_SEQ"));
        				this.dsSave80.setColumn(nrow, "TY_GUBUN", this.dsList80.getColumn(i, "TY_GUBUN"));
        				this.dsSave80.setColumn(nrow, "NO_CONTENT", this.dsList80.getColumn(i, "NO_CONTENT"));
        				this.dsSave80.setColumn(nrow, "DT_ISO", this.dsList80.getColumn(i, "DT_ISO"));
        				this.dsSave80.setColumn(nrow, "DS_CONTENT", this.dsList80.getColumn(i, "DS_CONTENT"));
        				this.dsSave80.setColumn(nrow, "RM_BIGO", this.dsList80.getColumn(i, "RM_BIGO"));

        				break;
        		}
        	}

        	if (this.dsSave80.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save80=dsSave80";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList20.addEventHandler("onvaluechanged",this.dsList20_onvaluechanged,this);
        };
        this.loadIncludeScript("DCA_REGISTDETAIL_R.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
