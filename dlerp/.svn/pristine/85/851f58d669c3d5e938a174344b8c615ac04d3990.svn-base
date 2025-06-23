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
                this._setFormPosition(1150,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INPUT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PRESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PRESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PRESIDENT_HP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PRESIDENT_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PRESIDENT_POST\" type=\"STRING\" size=\"256\"/><Column id=\"AT_PRESIDENT_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_PRESIDENT_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PRESIDENT_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT1_HP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT1_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT1_POST\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COMPRESIDENT1_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COMPRESIDENT1_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT1_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT2_HP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT2_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT2_POST\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COMPRESIDENT2_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COMPRESIDENT2_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT2_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DIVIDE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FOUNDATION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"TY_LARGECOM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOMEPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM_HANDPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POSTHQ\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRHQ1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRHQ2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POSTHQ_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRHQ1_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRHQ2_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POSTWORK\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRWORK1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRWORK2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POSTREGIST\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRREGIST1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRREGIST2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FAX_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DC\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_JUDGESCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_CUSTOMER1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CUSTOMER2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CUSTOMER3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TECHEXPERT\" type=\"INT\" size=\"256\"/><Column id=\"NO_ENGINEER1\" type=\"INT\" size=\"256\"/><Column id=\"NO_TOTAL\" type=\"INT\" size=\"256\"/><Column id=\"NO_MANAGE\" type=\"INT\" size=\"256\"/><Column id=\"NO_NONLICENSE\" type=\"INT\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"GR_CREDIT\" type=\"STRING\" size=\"256\"/><Column id=\"GR_CASH\" type=\"STRING\" size=\"256\"/><Column id=\"GR_RMIS\" type=\"STRING\" size=\"256\"/><Column id=\"TY_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"TY_REGIST_DM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TALAK\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_BANK_ALAS\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_BANK_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_BANK_HOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CREDIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_AGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GROUPWARE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">select00</Col><Col id=\"SP\">DCAPR_REGIST_CHG_SELECT</Col></Row><Row><Col id=\"TARGET\">insert00</Col><Col id=\"SP\">DCAPR_REGIST_INSERT</Col></Row><Row><Col id=\"TARGET\">update00</Col><Col id=\"SP\">DCAPR_REGIST_UPDATE</Col></Row><Row><Col id=\"TARGET\">regdel00</Col><Col id=\"SP\">DCAPR_REGISTALL_DELETE</Col></Row><Row><Col id=\"TARGET\">select10</Col><Col id=\"SP\">DCAPR_COMHISTORY_CHG_SELECT</Col></Row><Row><Col id=\"TARGET\">save10</Col><Col id=\"SP\">DCAPR_COMHISTORY_SAVE</Col></Row><Row><Col id=\"TARGET\">select15</Col><Col id=\"SP\">DCAPR_STAFF_CHG_SELECT</Col></Row><Row><Col id=\"TARGET\">save15</Col><Col id=\"SP\">DCAPR_STAFF_SAVE</Col></Row><Row><Col id=\"TARGET\">select20</Col><Col id=\"SP\">DCAPR_REGISTLICCOST_CHG_SELECT</Col></Row><Row><Col id=\"TARGET\">save20</Col><Col id=\"SP\">DCAPR_REGISTLICCOST_SAVE</Col></Row><Row><Col id=\"TARGET\">select25</Col><Col id=\"SP\">DCAPR_REGISTLICCOST_DM_CHG_SELECT</Col></Row><Row><Col id=\"TARGET\">save25</Col><Col id=\"SP\">DCAPR_REGISTLICCOST_DM_SAVE</Col></Row><Row><Col id=\"TARGET\">select30</Col><Col id=\"SP\">DCAPR_REGISTLICENSE_CHG_SELECT</Col></Row><Row><Col id=\"TARGET\">save30</Col><Col id=\"SP\">DCAPR_REGISTLICENSE_SAVE</Col></Row><Row><Col id=\"TARGET\">select40</Col><Col id=\"SP\">DCAPR_MANAGESTATUS_CHG_SELECT</Col></Row><Row><Col id=\"TARGET\">save40</Col><Col id=\"SP\">DCAPR_MANAGESTATUS_SAVE</Col></Row><Row><Col id=\"TARGET\">select50</Col><Col id=\"SP\">DCAPR_EQUIP_CHG_SELECT</Col></Row><Row><Col id=\"TARGET\">save50</Col><Col id=\"SP\">DCAPR_EQUIP_SAVE</Col></Row><Row><Col id=\"TARGET\">select60</Col><Col id=\"SP\">DCAPR_CONSRESULT_CHG_SELECT</Col></Row><Row><Col id=\"TARGET\">save60</Col><Col id=\"SP\">DCAPR_CONSRESULT_SAVE</Col></Row><Row><Col id=\"TARGET\">select70</Col><Col id=\"SP\">DCAPR_JUSTICE_CHG_SELECT</Col></Row><Row><Col id=\"TARGET\">save70</Col><Col id=\"SP\">DCAPR_JUSTICE_SAVE</Col></Row><Row><Col id=\"TARGET\">select80</Col><Col id=\"SP\">DCAPR_ISO_CHG_SELECT</Col></Row><Row><Col id=\"TARGET\">save80</Col><Col id=\"SP\">DCAPR_ISO_SAVE</Col></Row><Row><Col id=\"TARGET\">select90</Col><Col id=\"SP\">DCAPR_BIDJOIN_SELECT</Col></Row><Row><Col id=\"TARGET\">select95</Col><Col id=\"SP\">DCAPR_CONTRACT_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PARAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_VENDOR\"/><Col id=\"DT_CHANGE\"/></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">NO_SJC</Col><Col id=\"DS_FIELD\">사업자등록번호</Col></Row><Row><Col id=\"CD_FIELD\">DS_VENDOR</Col><Col id=\"DS_FIELD\">회사명</Col></Row><Row><Col id=\"CD_FIELD\">DS_PRESIDENT</Col><Col id=\"DS_FIELD\">대표자</Col></Row><Row><Col id=\"CD_FIELD\">CD_DIVIDE</Col><Col id=\"DS_FIELD\">사업자구분</Col></Row><Row><Col id=\"CD_FIELD\">DT_FOUNDATION</Col><Col id=\"DS_FIELD\">설립일자</Col></Row><Row><Col id=\"CD_FIELD\">CD_KIND</Col><Col id=\"DS_FIELD\">전문건설구분</Col></Row><Row><Col id=\"CD_FIELD\">DS_STATUS</Col><Col id=\"DS_FIELD\">업태</Col></Row><Row><Col id=\"CD_FIELD\">DS_ITEM</Col><Col id=\"DS_FIELD\">종목</Col></Row><Row><Col id=\"CD_FIELD\">NO_POSTHQ</Col><Col id=\"DS_FIELD\">본사주소지</Col></Row><Row><Col id=\"CD_FIELD\">GR_CREDIT</Col><Col id=\"DS_FIELD\">신용등급</Col></Row><Row><Col id=\"CD_FIELD\">GR_CASH</Col><Col id=\"DS_FIELD\">현금흐름등급</Col></Row><Row><Col id=\"CD_FIELD\">TY_REGIST</Col><Col id=\"DS_FIELD\">등록구분</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"tab_index\" type=\"STRING\" size=\"256\"/><Column id=\"dsDataNum\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"tab_index\">0</Col><Col id=\"dsDataNum\">00</Col></Row><Row><Col id=\"tab_index\">1</Col><Col id=\"dsDataNum\">10</Col></Row><Row><Col id=\"tab_index\">2</Col><Col id=\"dsDataNum\">15</Col></Row><Row><Col id=\"tab_index\">3</Col><Col id=\"dsDataNum\">20</Col></Row><Row><Col id=\"tab_index\">4</Col><Col id=\"dsDataNum\">25</Col></Row><Row><Col id=\"tab_index\">5</Col><Col id=\"dsDataNum\">30</Col></Row><Row><Col id=\"tab_index\">6</Col><Col id=\"dsDataNum\">40</Col></Row><Row><Col id=\"tab_index\">7</Col><Col id=\"dsDataNum\">50</Col></Row><Row><Col id=\"tab_index\">8</Col><Col id=\"dsDataNum\">60</Col></Row><Row><Col id=\"tab_index\">9</Col><Col id=\"dsDataNum\">70</Col></Row><Row><Col id=\"tab_index\">10</Col><Col id=\"dsDataNum\">80</Col></Row><Row><Col id=\"tab_index\">11</Col><Col id=\"dsDataNum\">90</Col></Row><Row><Col id=\"tab_index\">12</Col><Col id=\"dsDataNum\">95</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList15", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList25", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
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

            obj = new Static("staCD_ITEM00","ccfCD_ITEM:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("변경일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtREG_DT","staCD_ITEM00:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Div("div_STD","0","10",null,"380","0",null,null,null,null,null,this.divData.form.tabData.tab00.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.form.tabData.tab00.addChild(obj.name, obj);

            obj = new Static("sta14","119","114","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("15");
            obj.set_text("기본사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta03","0","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("16");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta13","119","27","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta01","368","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("18");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta02","487","27","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta04","736","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("20");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta05","855","27","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta06","0","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("22");
            obj.set_text("대표자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta07","119","56","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta08","368","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("24");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta09","487","56","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta10","736","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("26");
            obj.set_text("회사Homepage");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta11","855","56","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta37","0","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("28");
            obj.set_text("사업자구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta39","368","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("29");
            obj.set_text("설립일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta41","736","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("30");
            obj.set_text("전문건설구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta42","855","85","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta43","0","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("32");
            obj.set_text("기업구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta45","368","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("33");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta48","855","114","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta49","0","143","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("37");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta50","119","85","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta51","368","143","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("39");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta52","487","143","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta53","736","143","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("41");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta54","855","143","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_SJC","125","32","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR","493","32","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Div("div_dummy",null,null,"30","358","13","0",null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("43");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_REGIST","861","32","239","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_PRESIDENT","125","61","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_PRESIDENT_HP","493","61","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_HOMEPAGE","861","61","239","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Combo("cboCD_DIVIDE","125","90","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCD_DIVIDE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FOUNDATION","493","90","105","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Combo("cboCD_KIND","861","90","239","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsCD_KIND");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Combo("cboTY_LARGECOM","125","119","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsTY_LARGECOM");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_ITEM","861","119","239","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_FAX","493","148","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL","861","148","239","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta12","119","143","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_TEL","125","148","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta46","487","114","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_STATUS","493","119","238","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta47","736","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_STD.form);
            obj.set_taborder("35");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_STD.addChild(obj.name, obj);

            obj = new Div("div_ETC","0","div_STD:-195",null,"360","0",null,null,null,null,null,this.divData.form.tabData.tab00.form);
            obj.set_taborder("1");
            this.divData.form.tabData.tab00.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("21");
            obj.set_text("기타정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta00:5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("22");
            obj.set_text("본사주소지");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta13","sta03:-1","sta00:5","986","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta01","0","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("24");
            obj.set_text("지점주소지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","sta13:-1","986","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("26");
            obj.set_text("공장주소지1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta02:-1","986","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta04:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("28");
            obj.set_text("공장주소지2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta05:-1","986","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta61","0","sta06:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("30");
            obj.set_text("지점TEL");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta62","sta61:-1","sta07:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta63","sta62:-1","sta07:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("32");
            obj.set_text("지점FAX");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta64","sta63:-1","sta07:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta65","sta64:-1","sta07:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("34");
            obj.set_text("등록업체구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta66","sta65:-1","sta07:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta15","0","sta61:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("36");
            obj.set_text("주요거래처1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta16","sta15:-1","sta62:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","sta63:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("38");
            obj.set_text("주요거래처2");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta18","sta17:-1","sta64:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta19","sta18:-1","sta65:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("40");
            obj.set_text("주요거래처3");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta20","sta19:-1","sta66:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta21","0","sta15:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("42");
            obj.set_text("기술직종업원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta22","sta21:-1","sta16:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta23","sta22:-1","sta17:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("44");
            obj.set_text("기능직종업원");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta24","sta23:-1","sta18:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta25","sta24:-1","sta19:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("46");
            obj.set_text("기타종업원");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta26","sta25:-1","sta20:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta27","0","sta21:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("48");
            obj.set_text("사무직종업원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta28","sta27:-1","sta22:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta29","sta28:-1","sta23:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("50");
            obj.set_text("종업원수계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta30","sta29:-1","sta24:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta31","sta30:-1","sta25:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("등록년월");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta32","sta31:-1","sta26:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta33","0","sta27:-1","120","100",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("54");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta34","sta33:-1","sta28:-1","986","100",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("ccfADDRHQ1","sta03:5","sta00:10","604","20",null,null,null,"604",null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("div_dummy","sta13:0","sta00:0","30",null,null,"0",null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("56");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtAT_ADDRHQ2","ccfADDRHQ1:5","sta00:10",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("ccfADDRHQ1_BRANCH","sta01:5","ccfADDRHQ1:9","604","20",null,null,null,"604",null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtAT_ADDRHQ2_BRANCH","ccfADDRHQ1_BRANCH:5","edtAT_ADDRHQ2:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("ccfADDRWORK1","sta04:5","ccfADDRHQ1_BRANCH:9","604","20",null,null,null,"604",null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtAT_ADDRWORK2","ccfADDRWORK1:5","edtAT_ADDRHQ2_BRANCH:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("ccfADDRREGIST1","sta06:5","ccfADDRWORK1:9","604","20",null,null,null,"604",null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtAT_ADDRREGIST2","ccfADDRREGIST1:5","edtAT_ADDRWORK2:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtNO_TEL_BRANCH","sta61:5","ccfADDRREGIST1:9",null,"20","sta63:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtNO_FAX_BRANCH","sta63:5","ccfADDRREGIST1:9",null,"20","sta65:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DC","sta65:5","edtAT_ADDRREGIST2:9","50","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("10");
            obj.set_text("외주");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DM","chkYN_DC:5","edtAT_ADDRREGIST2:9","50","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("11");
            obj.set_text("자재");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtDS_CUSTOMER1","sta15:5","edtNO_TEL_BRANCH:9",null,"20","sta17:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtDS_CUSTOMER2","sta17:5","edtNO_FAX_BRANCH:9",null,"20","sta19:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtDS_CUSTOMER3","sta19:5","chkYN_DC:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta45","344","edtDS_CUSTOMER1:9",null,"20","sta23:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("57");
            obj.set_text("명");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_TECHEXPERT","sta21:5","edtDS_CUSTOMER1:9",null,"20","sta45:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("15");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta46","sta23:224","edtDS_CUSTOMER2:9",null,"20","sta25:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("58");
            obj.set_text("명");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_ENGINEER1","sta23:5","edtDS_CUSTOMER2:9",null,"20","sta46:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("16");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta47","sta25:224","edtDS_CUSTOMER3:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("59");
            obj.set_text("명");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_ENGINEER2","sta25:5","edtDS_CUSTOMER3:9",null,"20","sta47:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("17");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta48","sta27:224","mskNO_TECHEXPERT:9",null,"20","sta29:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("60");
            obj.set_text("명");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_MANAGE","sta27:5","mskNO_TECHEXPERT:9",null,"20","sta48:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("18");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta49","sta29:224","mskNO_ENGINEER1:9",null,"20","sta31:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("61");
            obj.set_text("명");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_NONLICENSE","sta29:5","mskNO_ENGINEER1:9",null,"20","sta49:5",null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("19");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new TextArea("txtRM_BIGO","sta33:5","mskNO_MANAGE:9","974","90",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.divData.form.tabData.tab00.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("ctclDT_AGREE","sta31:5","mskNO_ENGINEER2:9","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab00.form.div_ETC.form);
            obj.getSetter("readonly").set("true");
            obj.set_taborder("62");
            obj.set_url("cmm::cmmCalMM.xfdl");
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ITEM.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtREG_DT","value","dsSearch","DT_CHANGE");
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

            obj = new BindItem("item57","divData.form.tabData.tab00.form.div_ETC.form.ctclDT_AGREE.form.TextBox","value","dsList","DT_AGREE");
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
        this.registerScript("DCA_REGISTDETAIL_CHG.xfdl", function() {
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
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Save.set_enable(false);.
        	this.FormBtns.Select.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
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
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect0 = new Dataset();
        	this.dsSelect0.addColumn("CD_VENDOR", "string");
        	this.dsSelect0.addColumn("DT_CHANGE", "string");

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("CD_VENDOR", "string");
        	this.dsSelect1.addColumn("DT_INPUT", "string");
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
        	this.dsSelect0.setColumn(0, "DT_CHANGE", this.dsSearch.getColumn(0, "DT_CHANGE"));

        	this.dsSelect1.clearData();
        	this.dsSelect1.addRow();
        	this.dsSelect1.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect1.setColumn(0, "DT_INPUT", this.dsSearch.getColumn(0, "DT_CHANGE"));

        	var dsDataNum = this.dsTabInfo.getColumn(tidx, "dsDataNum");

        	var strSvcId    = "select"+dsDataNum;
        	var inProc		= "_dsProc";
        	var inData      = "select"+dsDataNum+"=dsSelect"+(dsDataNum=="90"||dsDataNum=="95"?"1":"0");

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
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
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
        			this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        			this.divSearch.form.ccfCD_ITEM.form.DSTextBox.set_value(this.getOwnerFrame().DS_VENDOR);
        			this.divSearch.form.ccfCD_ITEM.form.fnFitToContents();
        			this.divSearch.form.ccfCD_ITEM.form.set_readonly(true);

        			this.dsSearch.setColumn(0, "DT_CHANGE", this.getOwnerFrame().DT_CHANGE);
        			this.dsSearch.setColumn(0, "DS_PARAM", this.getOwnerFrame().SDS_PARAM);
        			this.FormBtns.Select.click();
        		}else{
        			this.fnAdd();
        		}
        	}
        	else if (svcID == "select00")
        	{
        	}
        	else if(svcID.substring(0,6) == "select"){
        		this.returngridid = eval("this.dxGridTab"+svcID.substr(6,2));
        		this.gfnGridAfterSelect(this.returngridid);
        	}

        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
        };
        this.loadIncludeScript("DCA_REGISTDETAIL_CHG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
