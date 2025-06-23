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
                this._setFormPosition(1280,2000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList0", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INPUT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PRESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PRESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PRESIDENT_HP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PRESIDENT_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PRESIDENT_POST\" type=\"STRING\" size=\"256\"/><Column id=\"AT_PRESIDENT_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_PRESIDENT_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PRESIDENT_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT1_HP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT1_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT1_POST\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COMPRESIDENT1_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COMPRESIDENT1_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT1_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT2_HP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT2_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_COMPRESIDENT2_POST\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COMPRESIDENT2_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COMPRESIDENT2_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPRESIDENT2_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DIVIDE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FOUNDATION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"TY_LARGECOM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOMEPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM_HANDPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POSTHQ\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRHQ1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRHQ2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POSTHQ_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRHQ1_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRHQ2_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POSTWORK\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRWORK1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRWORK2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POSTREGIST\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRREGIST1\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRREGIST2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FAX_BRANCH\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DC\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_JUDGESCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_CUSTOMER1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CUSTOMER2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CUSTOMER3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TECHEXPERT\" type=\"INT\" size=\"256\"/><Column id=\"NO_ENGINEER1\" type=\"INT\" size=\"256\"/><Column id=\"NO_TOTAL\" type=\"INT\" size=\"256\"/><Column id=\"NO_MANAGE\" type=\"INT\" size=\"256\"/><Column id=\"NO_NONLICENSE\" type=\"INT\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"GR_CREDIT\" type=\"STRING\" size=\"256\"/><Column id=\"GR_CASH\" type=\"STRING\" size=\"256\"/><Column id=\"GR_RMIS\" type=\"STRING\" size=\"256\"/><Column id=\"TY_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TALAK\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_BANK_ALAS\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_BANK_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_BANK_HOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CREDIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_AGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GROUPWARE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select0</Col><Col id=\"SP\">DCAPR_REGIST_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">insert0</Col><Col id=\"SP\">DCAPR_REGIST_INSERT</Col></Row><Row><Col id=\"TARGET\">update0</Col><Col id=\"SP\">DCAPR_REGIST_UPDATE</Col></Row><Row><Col id=\"TARGET\">regdel0</Col><Col id=\"SP\">DCAPR_REGISTALL_DELETE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DCAPR_COMHISTORY_SELECT</Col></Row><Row><Col id=\"TARGET\">save1</Col><Col id=\"SP\">DCAPR_COMHISTORY_SAVE</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DCAPR_REGISTLICENSE_SELECT</Col></Row><Row><Col id=\"TARGET\">save5</Col><Col id=\"SP\">DCAPR_REGISTLICENSE_SAVE</Col></Row><Row><Col id=\"TARGET\">select9</Col><Col id=\"SP\">DCAPR_EQUIP_SELECT</Col></Row><Row><Col id=\"TARGET\">save9</Col><Col id=\"SP\">DCAPR_EQUIP_SAVE</Col></Row><Row><Col id=\"TARGET\">select12</Col><Col id=\"SP\">DCAPR_JUSTICE_SELECT</Col></Row><Row><Col id=\"TARGET\">save12</Col><Col id=\"SP\">DCAPR_JUSTICE_SAVE</Col></Row><Row><Col id=\"TARGET\">select15</Col><Col id=\"SP\">DCAPR_ISO_SELECT</Col></Row><Row><Col id=\"TARGET\">save15</Col><Col id=\"SP\">DCAPR_ISO_SAVE</Col></Row><Row><Col id=\"TARGET\">select16</Col><Col id=\"SP\">DCAPR_BIDJOIN_SELECT</Col></Row><Row><Col id=\"TARGET\">select6</Col><Col id=\"SP\">DCAPR_MANAGESTATUS_SELECT</Col></Row><Row><Col id=\"TARGET\">save6</Col><Col id=\"SP\">DCAPR_MANAGESTATUS_SAVE</Col></Row><Row><Col id=\"TARGET\">select7</Col><Col id=\"SP\">DCAPR_BS_SELECT</Col></Row><Row><Col id=\"TARGET\">save7</Col><Col id=\"SP\">DCAPR_BS_SAVE</Col></Row><Row><Col id=\"TARGET\">select8</Col><Col id=\"SP\">DCAPR_PL_SELECT</Col></Row><Row><Col id=\"TARGET\">save8</Col><Col id=\"SP\">DCAPR_PL_SAVE</Col></Row><Row><Col id=\"TARGET\">select11</Col><Col id=\"SP\">DCAPR_DELIVERY_SELECT</Col></Row><Row><Col id=\"TARGET\">save11</Col><Col id=\"SP\">DCAPR_DELIVERY_SAVE</Col></Row><Row><Col id=\"TARGET\">select13</Col><Col id=\"SP\">DCAPR_JUSTICEOUR_SELECT</Col></Row><Row><Col id=\"TARGET\">select14</Col><Col id=\"SP\">DCAPR_REGIST_PUNISH_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DCAPR_PRESIDENT_SELECT</Col></Row><Row><Col id=\"TARGET\">fileup2</Col><Col id=\"SP\">DCAPR_PRESIDENT_IMG_UPDATE</Col></Row><Row><Col id=\"TARGET\">save2</Col><Col id=\"SP\">DCAPR_PRESIDENT_SAVE</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DCAPR_REGISTLICCOST_SELECT</Col></Row><Row><Col id=\"TARGET\">save3</Col><Col id=\"SP\">DCAPR_REGISTLICCOST_SAVE</Col></Row><Row><Col id=\"TARGET\">select10</Col><Col id=\"SP\">DCAPR_CONSRESULT_SELECT</Col></Row><Row><Col id=\"TARGET\">save10</Col><Col id=\"SP\">DCAPR_CONSRESULT_SAVE</Col></Row><Row><Col id=\"TARGET\">select17</Col><Col id=\"SP\">DCAPR_CONTRACT_SELECT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DCAPR_REGISTITEM_SELECT</Col></Row><Row><Col id=\"TARGET\">save18</Col><Col id=\"SP\">DCAPR_REGISTITEM_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INPUT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PARAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_VENDOR\"/><Col id=\"DT_INPUT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
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
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">NO_SJC</Col><Col id=\"DS_FIELD\">사업자등록번호</Col></Row><Row><Col id=\"CD_FIELD\">DS_VENDOR</Col><Col id=\"DS_FIELD\">회사명</Col></Row><Row><Col id=\"CD_FIELD\">DS_PRESIDENT</Col><Col id=\"DS_FIELD\">대표자</Col></Row><Row><Col id=\"CD_FIELD\">CD_DIVIDE</Col><Col id=\"DS_FIELD\">사업자구분</Col></Row><Row><Col id=\"CD_FIELD\">DT_FOUNDATION</Col><Col id=\"DS_FIELD\">설립일자</Col></Row><Row><Col id=\"CD_FIELD\">DS_STATUS</Col><Col id=\"DS_FIELD\">업태</Col></Row><Row><Col id=\"CD_FIELD\">DS_ITEM</Col><Col id=\"DS_FIELD\">종목</Col></Row><Row><Col id=\"CD_FIELD\">NO_POSTHQ</Col><Col id=\"DS_FIELD\">본사주소지</Col></Row><Row><Col id=\"CD_FIELD\">GR_CREDIT</Col><Col id=\"DS_FIELD\">신용등급</Col></Row><Row><Col id=\"CD_FIELD\">GR_CASH</Col><Col id=\"DS_FIELD\">현금흐름등급</Col></Row><Row><Col id=\"CD_FIELD\">TY_REGIST</Col><Col id=\"DS_FIELD\">등록구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput0", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList5", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList9", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList12", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList15", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList16", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList17", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList6", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList7", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList8", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList14", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub21", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub22", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub23", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"1000000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList18", this);
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
            obj.set_text("등록년도");
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
            obj.set_preload("false");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("일반");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("div_STD","0","10",null,"380","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("32");
            obj.set_text("기본사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta00:5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("33");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta13","sta03:-1","sta00:5","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta01","sta13:-1","sta00:5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("35");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","sta00:5","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta04","sta02:-1","sta00:5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("37");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta00:5","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("39");
            obj.set_text("대표자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta13:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("41");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta02:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","sta04:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("43");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","sta05:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta06:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("45");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta14","sta12:-1","sta07:-1","618","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta10:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("47");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta16","sta15:-1","sta11:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta17","0","sta12:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("49");
            obj.set_text("공동대표자1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta18","sta17:-1","sta14:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta19","sta18:-1","sta14:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("51");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta20","sta19:-1","sta14:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta21","sta20:-1","sta15:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("53");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta22","sta21:-1","sta16:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta24","736","sta21:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("56");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta23","sta24:-1","sta22:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta25","119","sta19:-1","618","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta26","0","sta17:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("58");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta27","0","sta26:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("59");
            obj.set_text("공동대표자2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta28","sta27:-1","sta25:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta29","sta28:-1","sta25:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("61");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta30","sta29:-1","sta25:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta31","sta30:-1","sta24:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("63");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta32","sta31:-1","sta23:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta34","736","sta31:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("66");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta33","sta34:-1","sta32:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta35","119","sta29:-1","618","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta36","0","sta27:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("68");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta37","0","sta36:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("69");
            obj.set_text("사업자구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta38","sta37:-1","sta35:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta39","sta38:-1","sta35:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("71");
            obj.set_text("설립일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta40","sta39:-1","sta35:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta41","sta40:-1","sta34:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("73");
            obj.set_text("전문건설구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta42","sta41:-1","sta33:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta43","0","sta37:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("75");
            obj.set_text("기업구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta44","sta43:-1","sta38:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta45","sta44:-1","sta39:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("77");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta46","sta45:-1","sta40:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta47","sta46:-1","sta41:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("79");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta48","sta47:-1","sta42:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta49","0","sta43:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("81");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta50","sta49:-1","sta44:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta51","sta50:-1","sta45:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("83");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta52","sta51:-1","sta46:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta53","sta52:-1","sta47:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("85");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta54","sta53:-1","sta48:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta55","0","sta49:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("87");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta56","sta55:-1","sta50:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta57","sta56:-1","sta51:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("89");
            obj.set_text("담당자휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta58","sta57:-1","sta52:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta59","sta58:-1","sta53:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("91");
            obj.set_text("회사Homepage");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta60","sta59:-1","sta54:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta61","0","sta55:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("93");
            obj.set_text("담당자부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta62","sta61:-1","sta56:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta63","sta62:-1","sta57:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("95");
            obj.set_text("담당자전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta64","sta63:-1","sta58:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta65","sta64:-1","sta59:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("97");
            obj.set_text("담당자 e-Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Static("sta66","sta65:-1","sta60:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_SJC","sta03:5","sta00:10",null,"20","sta01:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR","sta01:5","sta00:10",null,"20","sta04:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("1");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Div("div_dummy","sta05:0","sta00:0","30",null,null,"0",null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("99");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_REGIST","sta04:5","sta00:10",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("2");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_PRESIDENT","sta06:5","edtNO_SJC:9",null,"20","sta08:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("3");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_PRESIDENT_HP","sta10:5","edtNO_REGIST:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("4");
            obj.set_inputtype("digit");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Div("ccfPRESIDENT_ADDR1","sta12:5","edtDS_PRESIDENT:9","363","20",null,null,null,"363",null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Calendar("ctclNO_PRESIDENT","sta08:5","edtDS_VENDOR:9","105","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("100");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtAT_PRESIDENT_ADDR2","ccfPRESIDENT_ADDR1:5","ctclNO_PRESIDENT:9",null,"20","sta15:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("6");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_PRESIDENT_EMAIL","sta15:5","edtNO_PRESIDENT_HP:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("7");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_COMPRESIDENT1","sta17:5","ccfPRESIDENT_ADDR1:9",null,"20","sta19:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("8");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_COMPRESIDENT1_HP","sta21:5","edtDS_PRESIDENT_EMAIL:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("9");
            obj.set_inputtype("digit");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Div("ccfCOMPRESIDENT1_ADDR1","sta26:5","edtDS_COMPRESIDENT1:9","363","20",null,null,null,"363",null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Calendar("ctclNO_COMPRESIDENT1","sta19:5","edtAT_PRESIDENT_ADDR2:9","105","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtAT_COMPRESIDENT1_ADDR2","ccfCOMPRESIDENT1_ADDR1:5","ctclNO_COMPRESIDENT1:9",null,"20","sta24:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("11");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_COMPRESIDENT1_EMAIL","sta24:5","edtNO_COMPRESIDENT1_HP:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("12");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_COMPRESIDENT2","sta27:5","ccfCOMPRESIDENT1_ADDR1:9",null,"20","sta29:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("13");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_COMPRESIDENT2_HP","sta31:5","edtDS_COMPRESIDENT1_EMAIL:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("14");
            obj.set_inputtype("digit");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Div("ccfCOMPRESIDENT2_ADDR1","sta36:5","edtDS_COMPRESIDENT2:9","363","20",null,null,null,"363",null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Calendar("ctclNO_COMPRESIDENT2","sta29:5","edtAT_COMPRESIDENT1_ADDR2:9","105","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("102");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtAT_COMPRESIDENT2_ADDR2","ccfCOMPRESIDENT2_ADDR1:5","ctclNO_COMPRESIDENT2:9",null,"20","sta34:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("16");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_COMPRESIDENT2_EMAIL","sta34:5","edtNO_COMPRESIDENT2_HP:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("17");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Combo("cboCD_DIVIDE","sta37:5","ccfCOMPRESIDENT2_ADDR1:9",null,"20","sta39:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("18");
            obj.set_innerdataset("dsCD_DIVIDE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FOUNDATION","sta39:5","edtAT_COMPRESIDENT2_ADDR2:9","105","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Combo("cboCD_KIND","sta41:5","edtDS_COMPRESIDENT2_EMAIL:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsCD_KIND");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Combo("cboTY_LARGECOM","sta43:5","cboCD_DIVIDE:9",null,"20","sta45:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsTY_LARGECOM");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_STATUS","sta45:5","ctclDT_FOUNDATION:9",null,"20","sta47:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("22");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_ITEM","sta47:5","cboCD_KIND:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("23");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_DAM_NAME","sta55:5","322",null,"20","sta57:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("27");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_DAM_DEPT","sta61:5","edtDS_DAM_NAME:9",null,"20","sta63:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("29");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_DAM_HANDPHONE","sta57:5","322",null,"20","sta59:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("28");
            obj.set_inputtype("digit");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_DAM_TEL","sta63:5","edtDS_DAM_HANDPHONE:9",null,"20","sta65:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("30");
            obj.set_inputtype("digit");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL","sta53:5","edtDS_ITEM:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("26");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_HOME","sta59:5","edtDS_EMAIL:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("103");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtDS_DAM_EMAIL","sta65:5","edtDS_HOME:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("31");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_TEL","sta49:5","cboTY_LARGECOM:9",null,"20","sta51:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("24");
            obj.set_inputtype("digit");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Edit("edtNO_FAX","sta51:5","edtDS_STATUS:9",null,"20","sta53:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_STD.form);
            obj.set_taborder("25");
            obj.set_inputtype("digit");
            this.divData.form.tabData.tab1.form.div_STD.addChild(obj.name, obj);

            obj = new Div("div_ETC","0","div_STD:10",null,"420","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("26");
            obj.set_text("기타정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta00:5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("27");
            obj.set_text("본사주소지");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta13","sta03:-1","sta00:5","986","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta01","0","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("29");
            obj.set_text("지점주소지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","sta13:-1","986","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("31");
            obj.set_text("공장주소지1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta02:-1","986","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta04:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("33");
            obj.set_text("공장주소지2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta05:-1","986","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta61","0","sta06:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("35");
            obj.set_text("지점TEL");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta62","sta61:-1","sta07:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta63","sta62:-1","sta07:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("37");
            obj.set_text("지점FAX");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta64","sta63:-1","sta07:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta65","sta64:-1","sta07:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("39");
            obj.set_text("등록업체구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta66","sta65:-1","sta07:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta15","0","sta61:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("41");
            obj.set_text("주요거래처1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta16","sta15:-1","sta62:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","sta63:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("43");
            obj.set_text("주요거래처2");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta18","sta17:-1","sta64:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta19","sta18:-1","sta65:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("45");
            obj.set_text("주요거래처3");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta20","sta19:-1","sta66:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta21","0","sta15:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("47");
            obj.set_text("기술직종업원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta22","sta21:-1","sta16:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta23","sta22:-1","sta17:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("49");
            obj.set_text("기능직종업원");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta24","sta23:-1","sta18:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta25","sta24:-1","sta19:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("51");
            obj.set_text("기타종업원");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta26","sta25:-1","sta20:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta27","0","sta21:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("53");
            obj.set_text("사무직종업원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta28","sta27:-1","sta22:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta29","sta28:-1","sta23:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("55");
            obj.set_text("종업원수계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta30","sta29:-1","sta24:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta31","sta30:-1","sta25:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("등록년월");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta32","sta31:-1","sta26:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta33","0","sta27:-1","120","100",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("59");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta34","sta33:-1","sta28:-1","618","100",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta35","0","sta33:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("61");
            obj.set_text("신용등급");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta36","sta35:-1","sta34:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta37","sta36:-1","sta34:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("63");
            obj.set_text("현금흐름등급");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta38","sta37:-1","sta34:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta39","sta38:-1","sta34:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("R-MIS");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta40","sta39:-1","sta34:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta41","0","sta35:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("67");
            obj.set_text("등록구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta42","sta41:-1","sta36:-1","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta43","sta42:-1","sta37:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("69");
            obj.set_text("등록취소사유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta44","sta43:-1","sta38:-1","618","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("ccfADDRHQ1","sta03:5","sta00:10","604","20",null,null,null,"604",null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("div_dummy","sta13:0","sta00:0","30",null,null,"0",null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("71");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtAT_ADDRHQ2","ccfADDRHQ1:5","sta00:10",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("1");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("ccfADDRHQ1_BRANCH","sta01:5","ccfADDRHQ1:9","604","20",null,null,null,"604",null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtAT_ADDRHQ2_BRANCH","ccfADDRHQ1_BRANCH:5","edtAT_ADDRHQ2:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("3");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("ccfADDRWORK1","sta04:5","ccfADDRHQ1_BRANCH:9","604","20",null,null,null,"604",null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtAT_ADDRWORK2","ccfADDRWORK1:5","edtAT_ADDRHQ2_BRANCH:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("5");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("ccfADDRREGIST1","sta06:5","ccfADDRWORK1:9","604","20",null,null,null,"604",null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtAT_ADDRREGIST2","ccfADDRREGIST1:5","edtAT_ADDRWORK2:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("7");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtNO_TEL_BRANCH","sta61:5","ccfADDRREGIST1:9",null,"20","sta63:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("8");
            obj.set_inputtype("digit");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtNO_FAX_BRANCH","sta63:5","ccfADDRREGIST1:9",null,"20","sta65:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("9");
            obj.set_inputtype("digit");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DC","sta65:5","edtAT_ADDRREGIST2:9","50","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("10");
            obj.set_text("외주");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DM","chkYN_DC:5","edtAT_ADDRREGIST2:9","50","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("11");
            obj.set_text("자재");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtDS_CUSTOMER1","sta15:5","edtNO_TEL_BRANCH:9",null,"20","sta17:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("12");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtDS_CUSTOMER2","sta17:5","edtNO_FAX_BRANCH:9",null,"20","sta19:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("13");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtDS_CUSTOMER3","sta19:5","chkYN_DC:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("14");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta45","344","edtDS_CUSTOMER1:9",null,"20","sta23:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("72");
            obj.set_text("명");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_TECHEXPERT","sta21:5","edtDS_CUSTOMER1:9",null,"20","sta45:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("15");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta46","sta23:224","edtDS_CUSTOMER2:9",null,"20","sta25:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("73");
            obj.set_text("명");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_ENGINEER1","sta23:5","edtDS_CUSTOMER2:9",null,"20","sta46:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("16");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta47","sta25:224","edtDS_CUSTOMER3:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("74");
            obj.set_text("명");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_ENGINEER2","sta25:5","edtDS_CUSTOMER3:9",null,"20","sta47:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("17");
            obj.set_format("#,##0");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta48","sta27:224","mskNO_TECHEXPERT:9",null,"20","sta29:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("75");
            obj.set_text("명");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_MANAGE","sta27:5","mskNO_TECHEXPERT:9",null,"20","sta48:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("18");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta49","sta29:224","mskNO_ENGINEER1:9",null,"20","sta31:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("76");
            obj.set_text("명");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_NONLICENSE","sta29:5","mskNO_ENGINEER1:9",null,"20","sta49:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("19");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta08","sta34:-1","259","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("78");
            obj.set_text("전자결재번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new TextArea("txtRM_BIGO","sta33:5","mskNO_MANAGE:9",null,null,"sta08:5","sta36:4",null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("20");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Combo("cboGR_CREDIT","sta35:5","txtRM_BIGO:9",null,"20","sta37:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsGR_CREDIT");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Combo("cboGR_CASH","sta37:5","txtRM_BIGO:9",null,"20","sta39:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsGR_CASH");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Combo("cboTY_REGIST","sta41:5","cboGR_CREDIT:9",null,"20","sta43:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("24");
            obj.set_innerdataset("dsTY_REGIST");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Combo("cboGR_RMIS","sta39:5","txtRM_BIGO:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsGR_RMIS");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtDS_TALAK","sta43:5","cboGR_CASH:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("25");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("ctclDT_AGREE","sta31:5","mskNO_ENGINEER2:9","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.getSetter("readonly").set("true");
            obj.set_taborder("77");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","259","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Edit("edtNO_GROUPWARE","sta08:5","ctclDT_AGREE:9",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("80");
            obj.set_inputtype("normal");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DZ","chkYN_DM:10","148","50","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_ETC.form);
            obj.set_taborder("81");
            obj.set_text("기타");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div_ETC.addChild(obj.name, obj);

            obj = new Div("div_BANK","0","div_ETC:10",null,"60","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_BANK.form);
            obj.set_taborder("0");
            obj.set_text("은행정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.div_BANK.addChild(obj.name, obj);

            obj = new Static("sta27","0","sta00:5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_BANK.form);
            obj.set_taborder("1");
            obj.set_text("주거래은행");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div_BANK.addChild(obj.name, obj);

            obj = new Static("sta28","sta27:-1","sta00:5","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_BANK.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_BANK.addChild(obj.name, obj);

            obj = new Static("sta29","sta28:-1","sta00:5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_BANK.form);
            obj.set_taborder("3");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div_BANK.addChild(obj.name, obj);

            obj = new Static("sta30","sta29:-1","sta00:5","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_BANK.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_BANK.addChild(obj.name, obj);

            obj = new Static("sta31","sta30:-1","sta00:5","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_BANK.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("계좌소유주");
            this.divData.form.tabData.tab1.form.div_BANK.addChild(obj.name, obj);

            obj = new Static("sta32","sta31:-1","sta00:5","250","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div_BANK.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div_BANK.addChild(obj.name, obj);

            obj = new Edit("edtPAY_BANK_ALAS","sta27:5","sta00:10",null,"20","sta29:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_BANK.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div_BANK.addChild(obj.name, obj);

            obj = new Edit("edtPAY_BANK_ACCOUNT","sta29:5","sta00:10",null,"20","sta31:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_BANK.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div_BANK.addChild(obj.name, obj);

            obj = new Div("div_dummy","sta32:0","sta00:0","30",null,null,"0",null,null,null,null,this.divData.form.tabData.tab1.form.div_BANK.form);
            obj.set_taborder("10");
            this.divData.form.tabData.tab1.form.div_BANK.addChild(obj.name, obj);

            obj = new Edit("edtPAY_BANK_HOLDER","sta31:5","sta00:10",null,"20","div_dummy:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div_BANK.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div_BANK.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("회사연혁");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("대표자");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("div_PR1","0","0",null,"400","0",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta12","10","10","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR1.form);
            obj.set_taborder("0");
            obj.set_text("대표자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR1.addChild(obj.name, obj);

            obj = new Static("sta00","sta12:-1","10","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR1.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR1.addChild(obj.name, obj);

            obj = new Static("sta01","10","sta12:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR1.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR1.addChild(obj.name, obj);

            obj = new Static("staDS_PRESIDENT","sta01:-1","sta00:-1","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR1.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR1.addChild(obj.name, obj);

            obj = new Static("sta03","10","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR1.form);
            obj.set_taborder("4");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR1.addChild(obj.name, obj);

            obj = new Static("staNO_PRESIDENT","sta03:-1","staDS_PRESIDENT:-1","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR1.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR1.addChild(obj.name, obj);

            obj = new Static("sta05","10","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR1.form);
            obj.set_taborder("6");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR1.addChild(obj.name, obj);

            obj = new Static("staAT_PRESIDENT_ADDR","sta05:-1","staNO_PRESIDENT:-1","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR1.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR1.addChild(obj.name, obj);

            obj = new Static("sta07","10","sta05:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR1.form);
            obj.set_taborder("8");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR1.addChild(obj.name, obj);

            obj = new Static("staNO_PRESIDENT_HP","sta07:-1","staAT_PRESIDENT_ADDR:-1","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR1.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR1.addChild(obj.name, obj);

            obj = new Static("sta09","10","sta07:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR1.form);
            obj.set_taborder("10");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR1.addChild(obj.name, obj);

            obj = new Static("staDS_PRESIDENT_EMAIL","sta09:-1","staNO_PRESIDENT_HP:-1","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR1.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR1.addChild(obj.name, obj);

            obj = new Button("btnUploadP","sta00:125","15","66","25",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR1.form);
            obj.set_taborder("12");
            obj.set_text("사진등록");
            this.divData.form.tabData.tab3.form.div_PR1.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer","staAT_PRESIDENT_ADDR:100","btnUploadP:10","118","136",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR1.form);
            obj.set_taborder("13");
            obj.set_stretch("fixaspectratio");
            this.divData.form.tabData.tab3.form.div_PR1.addChild(obj.name, obj);

            obj = new Grid("objSubGrid21","10","sta09:20","837","180",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR1.form);
            obj.set_taborder("14");
            obj._setContents("");
            this.divData.form.tabData.tab3.form.div_PR1.addChild(obj.name, obj);

            obj = new Div("div_PR2","0","div_PR1:10",null,"400","0",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("1");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta12","10","10","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR2.form);
            obj.set_taborder("0");
            obj.set_text("공동대표자1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR2.addChild(obj.name, obj);

            obj = new Static("sta00","sta12:-1","10","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR2.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR2.addChild(obj.name, obj);

            obj = new Static("sta01","10","sta12:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR2.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR2.addChild(obj.name, obj);

            obj = new Static("staDS_COMPRESIDENT1","sta01:-1","sta00:-1","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR2.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR2.addChild(obj.name, obj);

            obj = new Static("sta03","10","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR2.form);
            obj.set_taborder("4");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR2.addChild(obj.name, obj);

            obj = new Static("staNO_COMPRESIDENT1","sta03:-1","staDS_COMPRESIDENT1:-1","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR2.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR2.addChild(obj.name, obj);

            obj = new Static("sta05","10","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR2.form);
            obj.set_taborder("6");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR2.addChild(obj.name, obj);

            obj = new Static("staAT_PRESIDENT_ADDR","sta05:-1","staNO_COMPRESIDENT1:-1","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR2.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR2.addChild(obj.name, obj);

            obj = new Static("sta07","10","sta05:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR2.form);
            obj.set_taborder("8");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR2.addChild(obj.name, obj);

            obj = new Static("staNO_COMPRESIDENT1_HP","sta07:-1","staAT_PRESIDENT_ADDR:-1","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR2.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR2.addChild(obj.name, obj);

            obj = new Static("sta09","10","sta07:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR2.form);
            obj.set_taborder("10");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR2.addChild(obj.name, obj);

            obj = new Static("staDS_COMPRESIDENT1_EMAIL","sta09:-1","staNO_COMPRESIDENT1_HP:-1","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR2.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR2.addChild(obj.name, obj);

            obj = new Button("btnUploadP","sta00:125","15","66","25",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR2.form);
            obj.set_taborder("12");
            obj.set_text("사진등록");
            this.divData.form.tabData.tab3.form.div_PR2.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer","staAT_PRESIDENT_ADDR:100","btnUploadP:10","118","136",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR2.form);
            obj.set_taborder("13");
            obj.set_stretch("fixaspectratio");
            this.divData.form.tabData.tab3.form.div_PR2.addChild(obj.name, obj);

            obj = new Grid("objSubGrid22","10","sta09:20","837","180",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR2.form);
            obj.set_taborder("14");
            obj._setContents("");
            this.divData.form.tabData.tab3.form.div_PR2.addChild(obj.name, obj);

            obj = new Div("div_PR3","0","div_PR2:10",null,"400","0",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("2");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta12","10","10","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR3.form);
            obj.set_taborder("0");
            obj.set_text("공동대표자2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR3.addChild(obj.name, obj);

            obj = new Static("sta00","sta12:-1","10","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR3.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR3.addChild(obj.name, obj);

            obj = new Static("sta01","10","sta12:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR3.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR3.addChild(obj.name, obj);

            obj = new Static("staDS_COMPRESIDENT1","sta01:-1","sta00:-1","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR3.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR3.addChild(obj.name, obj);

            obj = new Static("sta03","10","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR3.form);
            obj.set_taborder("4");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR3.addChild(obj.name, obj);

            obj = new Static("staNO_COMPRESIDENT1","sta03:-1","staDS_COMPRESIDENT1:-1","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR3.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR3.addChild(obj.name, obj);

            obj = new Static("sta05","10","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR3.form);
            obj.set_taborder("6");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR3.addChild(obj.name, obj);

            obj = new Static("staAT_PRESIDENT_ADDR","sta05:-1","staNO_COMPRESIDENT1:-1","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR3.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR3.addChild(obj.name, obj);

            obj = new Static("sta07","10","sta05:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR3.form);
            obj.set_taborder("8");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR3.addChild(obj.name, obj);

            obj = new Static("staNO_COMPRESIDENT1_HP","sta07:-1","staAT_PRESIDENT_ADDR:-1","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR3.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR3.addChild(obj.name, obj);

            obj = new Static("sta09","10","sta07:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR3.form);
            obj.set_taborder("10");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.form.div_PR3.addChild(obj.name, obj);

            obj = new Static("staDS_COMPRESIDENT1_EMAIL","sta09:-1","staNO_COMPRESIDENT1_HP:-1","500","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR3.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.form.div_PR3.addChild(obj.name, obj);

            obj = new Button("btnUploadP","sta00:125","15","66","25",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR3.form);
            obj.set_taborder("12");
            obj.set_text("사진등록");
            this.divData.form.tabData.tab3.form.div_PR3.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer","staAT_PRESIDENT_ADDR:100","btnUploadP:10","118","136",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR3.form);
            obj.set_taborder("13");
            obj.set_stretch("fixaspectratio");
            this.divData.form.tabData.tab3.form.div_PR3.addChild(obj.name, obj);

            obj = new Grid("objSubGrid23","10","sta09:20","837","180",null,null,null,null,null,null,this.divData.form.tabData.tab3.form.div_PR3.form);
            obj.set_taborder("14");
            obj._setContents("");
            this.divData.form.tabData.tab3.form.div_PR3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("등록공종");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("등록품목");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid18","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Tabpage("tab6",this.divData.form.tabData);
            obj.set_text("면허정보");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid5","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Tabpage("tab7",this.divData.form.tabData);
            obj.set_text("경영상태");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid6","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Tabpage("tab8",this.divData.form.tabData);
            obj.set_text("대차대조표");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid7","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Tabpage("tab9",this.divData.form.tabData);
            obj.set_text("손익계산서");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid8","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab9.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab9.addChild(obj.name, obj);

            obj = new Tabpage("tab10",this.divData.form.tabData);
            obj.set_text("장비현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid9","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab10.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab10.addChild(obj.name, obj);

            obj = new Tabpage("tab11",this.divData.form.tabData);
            obj.set_text("공사실적");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid10","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab11.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab11.addChild(obj.name, obj);

            obj = new Tabpage("tab12",this.divData.form.tabData);
            obj.set_text("납품실적");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid11","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab12.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab12.addChild(obj.name, obj);

            obj = new Tabpage("tab13",this.divData.form.tabData);
            obj.set_text("수상현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid12","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab13.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab13.addChild(obj.name, obj);

            obj = new Tabpage("tab14",this.divData.form.tabData);
            obj.set_text("상벌현황(당사)");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid13","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab14.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab14.addChild(obj.name, obj);

            obj = new Tabpage("tab15",this.divData.form.tabData);
            obj.set_text("제재현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid14","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab15.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab15.addChild(obj.name, obj);

            obj = new Tabpage("tab16",this.divData.form.tabData);
            obj.set_text("특허/인증");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid15","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab16.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab16.addChild(obj.name, obj);

            obj = new Tabpage("tab17",this.divData.form.tabData);
            obj.set_text("입찰실적");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid16","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab17.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab17.addChild(obj.name, obj);

            obj = new Tabpage("tab18",this.divData.form.tabData);
            obj.set_text("계약실적");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid17","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab18.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab18.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ITEM.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtREG_DT","value","dsSearch","DT_INPUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tabData.tab1.form.div_STD.form.edtNO_SJC","value","dsList0","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tabData.tab1.form.div_STD.form.edtDS_VENDOR","value","dsList0","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tabData.tab1.form.div_STD.form.edtNO_REGIST","value","dsList0","NO_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tabData.tab1.form.div_STD.form.edtDS_PRESIDENT","value","dsList0","DS_PRESIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab1.form.div_STD.form.ccfPRESIDENT_ADDR1.form.CDTextBox","value","dsList0","NO_PRESIDENT_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab1.form.div_STD.form.ccfPRESIDENT_ADDR1.form.DSTextBox","value","dsList0","AT_PRESIDENT_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab1.form.div_STD.form.edtAT_PRESIDENT_ADDR2","value","dsList0","AT_PRESIDENT_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab1.form.div_STD.form.edtDS_PRESIDENT_EMAIL","value","dsList0","DS_PRESIDENT_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab1.form.div_STD.form.edtDS_COMPRESIDENT1","value","dsList0","DS_COMPRESIDENT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab1.form.div_STD.form.ccfCOMPRESIDENT1_ADDR1.form.CDTextBox","value","dsList0","NO_COMPRESIDENT1_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.tabData.tab1.form.div_STD.form.ccfCOMPRESIDENT1_ADDR1.form.DSTextBox","value","dsList0","AT_COMPRESIDENT1_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tabData.tab1.form.div_STD.form.edtAT_COMPRESIDENT1_ADDR2","value","dsList0","AT_COMPRESIDENT1_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tabData.tab1.form.div_STD.form.edtDS_COMPRESIDENT1_EMAIL","value","dsList0","DS_COMPRESIDENT1_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.tabData.tab1.form.div_STD.form.edtDS_COMPRESIDENT2","value","dsList0","DS_COMPRESIDENT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.tabData.tab1.form.div_STD.form.ccfCOMPRESIDENT2_ADDR1.form.CDTextBox","value","dsList0","NO_COMPRESIDENT2_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.tabData.tab1.form.div_STD.form.ccfCOMPRESIDENT2_ADDR1.form.DSTextBox","value","dsList0","AT_COMPRESIDENT2_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.tabData.tab1.form.div_STD.form.edtAT_COMPRESIDENT2_ADDR2","value","dsList0","AT_COMPRESIDENT2_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tabData.tab1.form.div_STD.form.edtDS_COMPRESIDENT2_EMAIL","value","dsList0","DS_COMPRESIDENT2_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tabData.tab1.form.div_STD.form.cboCD_DIVIDE","value","dsList0","CD_DIVIDE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tabData.tab1.form.div_STD.form.ctclDT_FOUNDATION","value","dsList0","DT_FOUNDATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.tabData.tab1.form.div_STD.form.cboCD_KIND","value","dsList0","CD_KIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.tabData.tab1.form.div_STD.form.cboTY_LARGECOM","value","dsList0","TY_LARGECOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.tabData.tab1.form.div_STD.form.edtDS_STATUS","value","dsList0","DS_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab1.form.div_STD.form.edtDS_ITEM","value","dsList0","DS_ITEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab1.form.div_STD.form.edtNO_TEL","value","dsList0","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab1.form.div_STD.form.edtNO_FAX","value","dsList0","NO_FAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab1.form.div_STD.form.edtDS_EMAIL","value","dsList0","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.tabData.tab1.form.div_STD.form.edtDS_DAM_NAME","value","dsList0","DS_DAM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.tabData.tab1.form.div_STD.form.edtDS_DAM_HANDPHONE","value","dsList0","DS_DAM_HANDPHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.tabData.tab1.form.div_STD.form.edtDS_DAM_DEPT","value","dsList0","DS_DAM_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.tabData.tab1.form.div_STD.form.edtDS_DAM_TEL","value","dsList0","DS_DAM_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.tabData.tab1.form.div_STD.form.edtDS_DAM_EMAIL","value","dsList0","DS_DAM_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.tabData.tab1.form.div_ETC.form.ccfADDRHQ1.form.CDTextBox","value","dsList0","NO_POSTHQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.tabData.tab1.form.div_ETC.form.ccfADDRHQ1.form.DSTextBox","value","dsList0","AT_ADDRHQ1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.tabData.tab1.form.div_ETC.form.edtAT_ADDRHQ2","value","dsList0","AT_ADDRHQ2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.tabData.tab1.form.div_ETC.form.ccfADDRHQ1_BRANCH.form.CDTextBox","value","dsList0","NO_POSTHQ_BRANCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.tabData.tab1.form.div_ETC.form.ccfADDRHQ1_BRANCH.form.DSTextBox","value","dsList0","AT_ADDRHQ1_BRANCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.tabData.tab1.form.div_ETC.form.edtAT_ADDRHQ2_BRANCH","value","dsList0","AT_ADDRHQ2_BRANCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.tabData.tab1.form.div_ETC.form.ccfADDRWORK1.form.CDTextBox","value","dsList0","NO_POSTWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.tabData.tab1.form.div_ETC.form.ccfADDRWORK1.form.DSTextBox","value","dsList0","AT_ADDRWORK1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.tabData.tab1.form.div_ETC.form.edtAT_ADDRWORK2","value","dsList0","AT_ADDRWORK2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.tabData.tab1.form.div_ETC.form.ccfADDRREGIST1.form.CDTextBox","value","dsList0","NO_POSTREGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.tabData.tab1.form.div_ETC.form.ccfADDRREGIST1.form.DSTextBox","value","dsList0","AT_ADDRREGIST1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.tabData.tab1.form.div_ETC.form.edtAT_ADDRREGIST2","value","dsList0","AT_ADDRREGIST2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.tabData.tab1.form.div_ETC.form.edtNO_TEL_BRANCH","value","dsList0","NO_TEL_BRANCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.tabData.tab1.form.div_ETC.form.edtNO_FAX_BRANCH","value","dsList0","NO_FAX_BRANCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.tabData.tab1.form.div_ETC.form.chkYN_DC","value","dsList0","YN_DC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab1.form.div_ETC.form.chkYN_DM","value","dsList0","YN_DM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.tabData.tab1.form.div_ETC.form.edtDS_CUSTOMER1","value","dsList0","DS_CUSTOMER1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.tabData.tab1.form.div_ETC.form.edtDS_CUSTOMER2","value","dsList0","DS_CUSTOMER2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.tabData.tab1.form.div_ETC.form.edtDS_CUSTOMER3","value","dsList0","DS_CUSTOMER3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.tabData.tab1.form.div_ETC.form.mskNO_TECHEXPERT","value","dsList0","NO_TECHEXPERT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divData.form.tabData.tab1.form.div_ETC.form.mskNO_ENGINEER1","value","dsList0","NO_ENGINEER1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.tabData.tab1.form.div_ETC.form.mskNO_ENGINEER2","value","dsList0","NO_NONLICENSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divData.form.tabData.tab1.form.div_ETC.form.mskNO_MANAGE","value","dsList0","NO_MANAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.tabData.tab1.form.div_ETC.form.mskNO_NONLICENSE","value","dsList0","NO_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.tabData.tab1.form.div_ETC.form.txtRM_BIGO","value","dsList0","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divData.form.tabData.tab1.form.div_ETC.form.cboGR_CREDIT","value","dsList0","GR_CREDIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divData.form.tabData.tab1.form.div_ETC.form.cboGR_CASH","value","dsList0","GR_CASH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divData.form.tabData.tab1.form.div_ETC.form.cboGR_RMIS","value","dsList0","GR_RMIS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divData.form.tabData.tab1.form.div_ETC.form.cboTY_REGIST","value","dsList0","TY_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divData.form.tabData.tab1.form.div_ETC.form.edtDS_TALAK","value","dsList0","DS_TALAK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divData.form.tabData.tab1.form.div_BANK.form.edtPAY_BANK_ALAS","value","dsList0","PAY_BANK_ALAS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divData.form.tabData.tab1.form.div_BANK.form.edtPAY_BANK_ACCOUNT","value","dsList0","PAY_BANK_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divData.form.tabData.tab1.form.div_BANK.form.edtPAY_BANK_HOLDER","value","dsList0","PAY_BANK_HOLDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divData.form.tabData.tab3.form.div_PR1.form.staDS_PRESIDENT","text","dsList2","DS_PRESIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divData.form.tabData.tab3.form.div_PR1.form.staNO_PRESIDENT","text","dsList2","NO_PRESIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divData.form.tabData.tab3.form.div_PR1.form.staAT_PRESIDENT_ADDR","text","dsList2","AT_PRESIDENT_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divData.form.tabData.tab3.form.div_PR1.form.staNO_PRESIDENT_HP","text","dsList2","NO_PRESIDENT_HP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divData.form.tabData.tab3.form.div_PR1.form.staDS_PRESIDENT_EMAIL","text","dsList2","DS_PRESIDENT_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divData.form.tabData.tab3.form.div_PR2.form.staDS_COMPRESIDENT1","text","dsList2","DS_COMPRESIDENT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","divData.form.tabData.tab3.form.div_PR2.form.staNO_COMPRESIDENT1","text","dsList2","NO_COMPRESIDENT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","divData.form.tabData.tab3.form.div_PR2.form.staAT_PRESIDENT_ADDR","text","dsList2","AT_COMPRESIDENT1_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","divData.form.tabData.tab3.form.div_PR2.form.staNO_COMPRESIDENT1_HP","text","dsList2","NO_COMPRESIDENT1_HP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","divData.form.tabData.tab3.form.div_PR2.form.staDS_COMPRESIDENT1_EMAIL","text","dsList2","DS_COMPRESIDENT1_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","divData.form.tabData.tab3.form.div_PR3.form.staDS_COMPRESIDENT1","text","dsList2","DS_COMPRESIDENT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","divData.form.tabData.tab3.form.div_PR3.form.staNO_COMPRESIDENT1","text","dsList2","NO_COMPRESIDENT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","divData.form.tabData.tab3.form.div_PR3.form.staAT_PRESIDENT_ADDR","text","dsList2","AT_COMPRESIDENT2_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","divData.form.tabData.tab3.form.div_PR3.form.staNO_COMPRESIDENT1_HP","text","dsList2","NO_COMPRESIDENT2_HP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","divData.form.tabData.tab3.form.div_PR3.form.staDS_COMPRESIDENT1_EMAIL","text","dsList2","DS_COMPRESIDENT2_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.tabData.tab1.form.div_ETC.form.ctclDT_AGREE.form.TextBox","value","dsList0","DT_AGREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.tabData.tab1.form.div_ETC.form.edtNO_GROUPWARE","value","dsList0","NO_GROUPWARE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.tabData.tab1.form.div_ETC.form.chkYN_DZ","value","dsList0","YN_DZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab1.form.div_STD.form.ctclNO_PRESIDENT","value","dsList0","NO_PRESIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab1.form.div_STD.form.ctclNO_COMPRESIDENT1","value","dsList0","NO_COMPRESIDENT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tabData.tab1.form.div_STD.form.ctclNO_COMPRESIDENT2","value","dsList0","NO_COMPRESIDENT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tabData.tab1.form.div_STD.form.edtNO_PRESIDENT_HP","value","dsList0","NO_PRESIDENT_HP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.tabData.tab1.form.div_STD.form.edtNO_COMPRESIDENT2_HP","value","dsList0","NO_COMPRESIDENT2_HP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.tabData.tab1.form.div_STD.form.edtNO_COMPRESIDENT1_HP","value","dsList0","NO_COMPRESIDENT1_HP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab1.form.div_STD.form.edtDS_HOME","value","dsList0","DS_HOMEPAGE");
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
        this.registerScript("DCA_REGISTDETAIL_OLD.xfdl", function() {
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

        	this.fileConfig = this.gfnGetFileConfig();
        	this.fileConfig.allowTypes = ["jpg","jpeg","gif","png"]; // 넥사브라우저 전용, 웹은 적용불가
        	this.fileConfig.uploadUrl = this.fileConfig.uploadUrl.replace("path=", "path=" + this.filepath);
        	this.fileConfig.downloadUrl = this.fileConfig.downloadUrl.replace("path=", "path=" + this.filepath);

        	var fileid1 = "fileup_0";
        	this.fileup0 = new FileUpload();
        	this.fileup0.init(fileid1, 0,0,0,0);
        		if(this.lookup(fileid1)) {
        			delete this.fileuploads0[fileid1];
        			this.removeChild(fileid1);
        		}
        	this.addChild(fileid1, this.fileup0);
        	this.fileup0.show();
        	this.fileup0.row = 0;
        	this.fileup0.addEventHandler("onitemchanged", this.fileup1_onitemchanged, this);
        	this.fileup0.addEventHandler("onsuccess", this.fileup1_onsuccess, this);
        	this.fileup0.addEventHandler("onerror", this.fileup1_onerror, this);

        	this.fileuploads0[fileid1] = this.fileup0;

        	var fileid2 = "fileup_1";
        	this.fileup1 = new FileUpload();
        	this.fileup1.init(fileid2, 0,0,0,0);
        		if(this.lookup(fileid2)) {
        			delete this.fileuploads1[fileid2];
        			this.removeChild(fileid2);
        		}
        	this.addChild(fileid2, this.fileup1);
        	this.fileup1.show();
        	this.fileup1.row = 0;
        	this.fileup1.addEventHandler("onitemchanged", this.fileup2_onitemchanged, this);
        	this.fileup1.addEventHandler("onsuccess", this.fileup2_onsuccess, this);
        	this.fileup1.addEventHandler("onerror", this.fileup2_onerror, this);

        	this.fileuploads1[fileid2] = this.fileup1;

        	var fileid3 = "fileup_2";
        	this.fileup2 = new FileUpload();
        		this.fileup2.init(fileid3, 0,0,0,0);
        		if(this.lookup(fileid3)) {
        			delete this.fileuploads2[fileid3];
        			this.removeChild(fileid3);
        		}
        	this.addChild(fileid3, this.fileup2);
        	this.fileup2.show();
        	this.fileup2.row = 0;
        	this.fileup2.addEventHandler("onitemchanged", this.fileup3_onitemchanged, this);
        	this.fileup2.addEventHandler("onsuccess", this.fileup3_onsuccess, this);
        	this.fileup2.addEventHandler("onerror", this.fileup3_onerror, this);

        	this.fileuploads2[fileid3] = this.fileup2;


        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Save.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnRegDel = this.gfnFormButtonAdd("RegDel", "fnRegDel");
        	this.btnFileInfo = this.gfnFormButtonAdd("btnFileInfo", "fnFileInfo");
        	this.btnFileInfo_Corp = this.gfnFormButtonAdd("btnFileInfo_Corp", "fnFileInfo_Corp");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.dxGridTab4 = this.divData.form.tabData.tab5.form.objGrid4; 직원정보탭삭제
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화

        	/*
        	//this.gfnGridInit(this.dxGridTab4, this.dsList4, "DC", "DCA_STAFF");
        	*/

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect0 = new Dataset();
        	this.dsSelect0.addColumn("DT_INPUT", "string");
        	this.dsSelect0.addColumn("CD_MODULE", "string");
        	this.dsSelect0.addColumn("CD_VENDOR", "string");

        	this.dsFileUp2 = new Dataset();
        	this.dsFileUp2.addColumn("DT_INPUT", "string");
        	this.dsFileUp2.addColumn("TY_GUBUN", "string");
        	this.dsFileUp2.addColumn("IMG_NM", "string");
        	this.dsFileUp2.addColumn("CD_VENDOR", "string");
        	/*this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("CD_VENDOR", "string");
        	this.dsSelect1.addColumn("DT_INPUT", "string");*/

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;
        	var tidx = this.divData.form.tabData.tabindex;

        	if(tidx == 2){
        		this.fnSelectTab2();
        	}else{
        	/*this.dsobj = eval("this.dsSelect"+tidx);
        	this.dsobj.clearData();
        	this.dsobj.addRow();
        	this.dsobj.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsobj.setColumn(0, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        	this.dsobj.setColumn(0, "CD_MODULE", this.FormInfo.DS_PARAM);*/

        	this.dsSelect0.clearData();
        	this.dsSelect0.addRow();
        	this.dsSelect0.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect0.setColumn(0, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        	this.dsSelect0.setColumn(0, "CD_MODULE", this.dsSearch.getColumn(0, "DS_PARAM"));

        	var strSvcId    = "select"+tidx;
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select"+tidx+"=dsSelect0";
        	var outData     = "dsList"+tidx+"=select"+tidx+"0";
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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:

        			this.dsSearch.clearData();
        			this.dsSearch.addRow();
        			this.divSearch.form.ccfCD_ITEM.form.fnCodeFindClear();
        			this.dsList0.clearData();
        			var nrow = this.dsList0.addRow();
        			this.dsList0.setColumn(0, "nx_flag", "I");

        		break;
        		case 2:
        			if(!this.gfnIsNull(this.focusgridid)){
        				this.gfnGridAdd(this.focusgridid);
        			}
        		break;
        		case 1:
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
        		case 15:
        			this.addgridname = eval("this.dxGridTab"+this.divData.form.tabData.tabindex);
        			this.gfnGridAdd(this.addgridname);
        		break;
        	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        	switch(this.divData.form.tabData.tabindex) {
        		case 2:
        			if(!this.gfnIsNull(this.focusgridid)){
        				this.gfnGridDel(this.focusgridid);
        			}
        		break;
        		case 1 :
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
        		case 15:
        			this.deletegridname = eval("this.dxGridTab"+this.divData.form.tabData.tabindex);
        			this.gfnGridDel(this.deletegridname);
        		break;
        	}
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	switch(this.divData.form.tabData.tabindex) {
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
        		case 15:
        			this.savefnname = eval("this.fnSaveAction"+this.divData.form.tabData.tabindex);
        			this.savefnname();
        		break;
        	}
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			//this.gfnExcelExport(this.dxGrid);
        			break;
        		case 1:
        			//this.gfnExcelExport(this.dxGrid2);
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
        	if (svcID == "combo") {
        		if(!this.gfnIsNull(this.getOwnerFrame().CD_VENDOR)){
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
        	else if (svcID == "select0") {
        		this.dsList0.setColumn(0, "nx_flag", "U");
        		this.FormBtns.Save.set_enable(true);
        	}
        	else if(svcID == "insert0"){
        		if (errorCode == 0) {
        			var today = this.gfnGetDate();
        			this.dsSearch.setColumn(0, "CD_VENDOR", this.dsOutput0.getColumn(0, "NEWVENDOR"));
        			this.divSearch.form.ccfCD_ITEM.form.fnCodeFindLoad();
        			this.dsSearch.setColumn(0, "DT_INPUT", today.substring(0,4));
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	}
        	else if(svcID == "update0"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
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
        	else if(svcID == "select1" || svcID == "select3" || svcID == "select4" || svcID == "select5" || svcID == "select6" || svcID == "select7" || svcID == "select8"
        	|| svcID == "select9" || svcID == "select10" || svcID == "select11" || svcID == "select12" || svcID == "select13"  || svcID == "select14" || svcID == "select15"
        	|| svcID == "select16" || svcID == "select17"){
        		this.fnTabCtr();
        		this.returngridid = eval("this.dxGridTab"+svcID.substring(6,svcID.length));
        		this.gfnGridAfterSelect(this.returngridid);
        	}
        	else if(svcID == "select2"){
        		if(this.gfnIsNull(this.dsList2.getColumn(0, "DS_PRESIDENT"))){
        			this.divData.form.tabData.tab3.form.div_PR1.form.btnUploadP.set_enable(false);
        		}else{
        			this.divData.form.tabData.tab3.form.div_PR1.form.btnUploadP.set_enable(true);
        		}
        		if(this.gfnIsNull(this.dsList2.getColumn(0, "DS_COMPRESIDENT1"))){
        			this.divData.form.tabData.tab3.form.div_PR2.form.btnUploadP.set_enable(false);
        		}else{
        			this.divData.form.tabData.tab3.form.div_PR2.form.btnUploadP.set_enable(true);
        		}
        		if(this.gfnIsNull(this.dsList2.getColumn(0, "DS_COMPRESIDENT2"))){
        			this.divData.form.tabData.tab3.form.div_PR3.form.btnUploadP.set_enable(false);
        		}else{
        			this.divData.form.tabData.tab3.form.div_PR3.form.btnUploadP.set_enable(true);
        		}
        		if(this.dsListSub2.rowcount > 0){
        			this.dsListSub21.clearData();
        			this.dsListSub22.clearData();
        			this.dsListSub23.clearData();
        			for(var i=0;i<this.dsListSub2.rowcount;i++){
        				if(this.dsListSub2.getColumn(i, "TY_GUBUN") == "1"){
        					var nrow = this.dsListSub21.addRow();
        					this.dsListSub21.copyRow(nrow, this.dsListSub2, i);
        					this.dsListSub21.setColumn(nrow, "nx_flag", "");
        				}else if(this.dsListSub2.getColumn(i, "TY_GUBUN") == "2"){
        					var nrow = this.dsListSub22.addRow();
        					this.dsListSub22.copyRow(nrow, this.dsListSub2, i);
        					this.dsListSub22.setColumn(nrow, "nx_flag", "");
        				}else if(this.dsListSub2.getColumn(i, "TY_GUBUN") == "3"){
        					var nrow = this.dsListSub23.addRow();
        					this.dsListSub23.copyRow(nrow, this.dsListSub2, i);
        					this.dsListSub23.setColumn(nrow, "nx_flag", "");
        				}
        			}
        		}

        		this.fnImageView();
        	}
        	else if(svcID == "update2"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "imagefile"){
        		var key = this.dsSearch.getColumn(nrow, "CD_VENDOR");
        		var fullpath = this.filepath + key;
        		if(this.dsImageFile.rowcount > 0){
        			for(var i=0;i<this.dsImageFile.rowcount;i++){
        				if(this.dsImageFile.getColumn(i, "filename") == this.dsList2.getColumn(0, "DS_PRESIDENT_IMG") && this.dsImageFile.getColumn(i, "filepath") == fullpath+"/1"){
        					this.divData.form.tabData.tab3.form.div_PR1.form.ImageViewer.set_image(this.dsImageFile.getColumn(i, "filereturn"));
        				}else if(this.dsImageFile.getColumn(i, "filename") == this.dsList2.getColumn(0, "DS_COMPRESIDENT1_IMG")  && this.dsImageFile.getColumn(i, "filepath") == fullpath+"/2"){
        					this.divData.form.tabData.tab3.form.div_PR2.form.ImageViewer.set_image(this.dsImageFile.getColumn(i, "filereturn"));
        				}else if(this.dsImageFile.getColumn(i, "filename") == this.dsList2.getColumn(0, "DS_COMPRESIDENT2_IMG")  && this.dsImageFile.getColumn(i, "filepath") == fullpath+"/3"){
        					this.divData.form.tabData.tab3.form.div_PR3.form.ImageViewer.set_image(this.dsImageFile.getColumn(i, "filereturn"));
        				}
        			}
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid3_AfterCDTextChanged = function(id, codeFindData){
        	if(id == "DCX_CFLICCOST_GRID"){
        		var arr = codeFindData;
        		if(arr.length > 0){
        			var cdyn = arr[0]["YN_SELECT"];
        			if(cdyn == "N"){
        				this.fncodefindreturn = function(){
        					this.dsList3.setColumn(this.dsList3.rowposition, "CD_LICCOST", "");
        				};
        				this.gfnAlert("선택가능한공종이 아닙니다.\n확인 후 진행해주십시요.", "fncodefindreturn");
        			}
        		}
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {

        };

        this.divData_tabData_onchanged = function(obj,e)
        {
        	// 탭 변경시 조회처리시
         	if(e.preindex != e.postindex) {
        		this.fntabcheck(e.postindex);
        		//this.FormBtns.Select.click();
         	}
        };

        this.fntabcheck = function(idx){
        	var listidx = [];
        	for(var i=4;i<18;i++){
        		listidx.push(i);
        	}
        	if(idx == 1){
        		if(this.gfnIsNull(eval("this.dxGridTab"+idx))){
        			this.dxGridTab1 = this.divData.form.tabData.tab2.form.objGrid1;
        			this.gfnGridInit(this.dxGridTab1, this.dsList1, "DC", "DCA_COMHISTORY");
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}else if(idx == 2){
        		if(this.gfnIsNull(this.dxGridTab2Sub1)){
        			this.dxGridTab2Sub1 = this.divData.form.tabData.tab3.form.div_PR1.form.objSubGrid21;
        			this.dxGridTab2Sub2 = this.divData.form.tabData.tab3.form.div_PR2.form.objSubGrid22;
        			this.dxGridTab2Sub3 = this.divData.form.tabData.tab3.form.div_PR3.form.objSubGrid23;
        			this.gfnGridInit(this.dxGridTab2Sub1, this.dsListSub21, "DC", "DCA_PRESIDENT");
        			this.gfnGridInit(this.dxGridTab2Sub2, this.dsListSub22, "DC", "DCA_PRESIDENT");
        			this.gfnGridInit(this.dxGridTab2Sub3, this.dsListSub23, "DC", "DCA_PRESIDENT");
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}

        	}else if(idx == 3){
        		if(this.gfnIsNull(eval("this.dxGridTab"+idx))){
        			this.dxGridTab3 = this.divData.form.tabData.tab4.form.objGrid3;
        			this.gfnGridInit(this.dxGridTab3, this.dsList3, "DC", "DCA_REGISTLICCOST");
        			this.dxGridTab3.BeforeUserDataSetParam = "fnGrid3_BeforeUserDataSetParam";
        			this.dxGridTab3.AfterCDTextChanged = "fnGrid3_AfterCDTextChanged";
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}else if(idx == 5){
        		if(this.gfnIsNull(eval("this.dxGridTab"+idx))){
        			this.dxGridTab5 = this.divData.form.tabData.tab6.form.objGrid5;
        			this.gfnGridInit(this.dxGridTab5, this.dsList5, "DC", "DCA_REGISTLICENSE");
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}else if(idx == 6){
        		if(this.gfnIsNull(eval("this.dxGridTab"+idx))){
        			this.dxGridTab6 = this.divData.form.tabData.tab7.form.objGrid6;
        			this.gfnGridInit(this.dxGridTab6, this.dsList6, "DC", "DCA_MANAGESTATUS");
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}else if(idx == 7){
        		if(this.gfnIsNull(eval("this.dxGridTab"+idx))){
        			this.dxGridTab7 = this.divData.form.tabData.tab8.form.objGrid7;
        			this.gfnGridInit(this.dxGridTab7, this.dsList7, "DC", "DCA_BS");
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}else if(idx == 8){
        		if(this.gfnIsNull(eval("this.dxGridTab"+idx))){
        			this.dxGridTab8 = this.divData.form.tabData.tab9.form.objGrid8;
        			this.gfnGridInit(this.dxGridTab8, this.dsList8, "DC", "DCA_PL");
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}else if(idx == 9){
        		if(this.gfnIsNull(eval("this.dxGridTab"+idx))){
        			this.dxGridTab9 = this.divData.form.tabData.tab10.form.objGrid9;
        			this.gfnGridInit(this.dxGridTab9, this.dsList9, "DC", "DCA_EQUIP");
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}else if(idx == 10){
        		if(this.gfnIsNull(eval("this.dxGridTab"+idx))){
        			this.dxGridTab10 = this.divData.form.tabData.tab11.form.objGrid10;
        			this.gfnGridInit(this.dxGridTab10, this.dsList10, "DC", "DCA_CONSRESULT");
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}else if(idx == 11){
        		if(this.gfnIsNull(eval("this.dxGridTab"+idx))){
        			this.dxGridTab11 = this.divData.form.tabData.tab12.form.objGrid11;
        			this.gfnGridInit(this.dxGridTab11, this.dsList11, "DC", "DCA_DELIVERY");
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}else if(idx == 12){
        		if(this.gfnIsNull(eval("this.dxGridTab"+idx))){
        			this.dxGridTab12 = this.divData.form.tabData.tab13.form.objGrid12;
        			this.gfnGridInit(this.dxGridTab12, this.dsList12, "DC", "DCA_JUSTICE");
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}else if(idx == 13){
        		if(this.gfnIsNull(eval("this.dxGridTab"+idx))){
        			this.dxGridTab13 = this.divData.form.tabData.tab14.form.objGrid13;
        			this.gfnGridInit(this.dxGridTab13, this.dsList13, "DC", "DCA_JUSTICEOUR");
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}else if(idx == 14){
        		if(this.gfnIsNull(eval("this.dxGridTab"+idx))){
        			this.dxGridTab14 = this.divData.form.tabData.tab15.form.objGrid14;
        			this.gfnGridInit(this.dxGridTab14, this.dsList14, "DC", "DCA_REGIST_PUNISH");
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}else if(idx == 15){
        		if(this.gfnIsNull(eval("this.dxGridTab"+idx))){
        			this.dxGridTab15 = this.divData.form.tabData.tab16.form.objGrid15;
        			this.gfnGridInit(this.dxGridTab15, this.dsList15, "DC", "DCA_ISO");
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}else if(idx == 16){
        		if(this.gfnIsNull(eval("this.dxGridTab"+idx))){
        			this.dxGridTab16 = this.divData.form.tabData.tab17.form.objGrid16;
        			this.gfnGridInit(this.dxGridTab16, this.dsList16, "DC", "DCA_BIDJOIN");
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}else if(idx == 17){
        		if(this.gfnIsNull(eval("this.dxGridTab"+idx))){
        			this.dxGridTab17 = this.divData.form.tabData.tab18.form.objGrid17;
        			this.gfnGridInit(this.dxGridTab17, this.dsList17, "DC", "DCA_CONTRACT");
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}else if(idx == 4){
        		if(this.gfnIsNull(eval("this.dxGridTab"+idx))){
        			this.dxGridTab4 = this.divData.form.tabData.tab5.form.objGrid18;
        			this.gfnGridInit(this.dxGridTab4, this.dsList4, "DC", "DCA_REGISTITEM");
        			this.FormBtns.Select.click();
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}
        };
         this.fnGrid3_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DCX_CFLICCOST_GRID") {
         		dsUserParam.setColumn(nrow, "TY_MODULE", "");
         	}
        	return true;
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

        this.fnSaveAction0 = function(){
        	if(!this.gfnDataValidate(this.dsList0, this.dsRequired0))return;

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
        	this.dsInsert0.addColumn("DS_TALAK", "string");
        	this.dsInsert0.addColumn("DT_INPUT", "string");
        	this.dsInsert0.addColumn("ID_USER", "string");
        	this.dsInsert0.addColumn("NO_GROUPWARE", "string");
        	this.dsInsert0.addColumn("YN_DZ", "string");

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
        	this.dsUpdate0.addColumn("DS_TALAK", "string");
        	this.dsUpdate0.addColumn("DT_INPUT", "string");
        	this.dsUpdate0.addColumn("ID_USER", "string");
        	this.dsUpdate0.addColumn("CD_MODULE", "string");
        	this.dsUpdate0.addColumn("NO_GROUPWARE", "string");
        	this.dsUpdate0.addColumn("YN_DZ", "string");

        	var strSvcId    = "";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	if(this.gfnGetFlag(this.dsList0, 0) == "I"){
        		var today = this.gfnGetDate();

        		strSvcId = "insert0";
        		inData = "insert0=dsInsert0";
        		outData = "dsOutput0=insert00";

        		this.dsInsert0.clearData();
        		var nrow = this.dsInsert0.addRow();

        		this.dsInsert0.setColumn(nrow, "CD_MODULE", this.dsSearch.getColumn(0, "DS_PARAM"));
        		this.dsInsert0.setColumn(nrow, "CD_VENDOR", this.dsList0.getColumn(0, "CD_VENDOR"));
        		this.dsInsert0.setColumn(nrow, "NO_SJC", this.dsList0.getColumn(0, "NO_SJC"));
        		this.dsInsert0.setColumn(nrow, "DS_VENDOR", this.dsList0.getColumn(0, "DS_VENDOR"));
        		this.dsInsert0.setColumn(nrow, "NO_REGIST", this.dsList0.getColumn(0, "NO_REGIST"));
        		this.dsInsert0.setColumn(nrow, "DS_PRESIDENT", this.dsList0.getColumn(0, "DS_PRESIDENT"));
        		this.dsInsert0.setColumn(nrow, "NO_PRESIDENT", this.dsList0.getColumn(0, "NO_PRESIDENT"));
        		this.dsInsert0.setColumn(nrow, "NO_PRESIDENT_HP", this.dsList0.getColumn(0, "NO_PRESIDENT_HP"));
        		this.dsInsert0.setColumn(nrow, "NO_PRESIDENT_POST", this.dsList0.getColumn(0, "NO_PRESIDENT_POST"));
        		this.dsInsert0.setColumn(nrow, "AT_PRESIDENT_ADDR1", this.dsList0.getColumn(0, "AT_PRESIDENT_ADDR1"));
        		this.dsInsert0.setColumn(nrow, "AT_PRESIDENT_ADDR2", this.dsList0.getColumn(0, "AT_PRESIDENT_ADDR2"));
        		this.dsInsert0.setColumn(nrow, "DS_PRESIDENT_EMAIL", this.dsList0.getColumn(0, "DS_PRESIDENT_EMAIL"));
        		this.dsInsert0.setColumn(nrow, "DS_COMPRESIDENT1", this.dsList0.getColumn(0, "DS_COMPRESIDENT1"));
        		this.dsInsert0.setColumn(nrow, "NO_COMPRESIDENT1", this.dsList0.getColumn(0, "NO_COMPRESIDENT1"));
        		this.dsInsert0.setColumn(nrow, "NO_COMPRESIDENT1_HP", this.dsList0.getColumn(0, "NO_COMPRESIDENT1_HP"));
        		this.dsInsert0.setColumn(nrow, "NO_COMPRESIDENT1_POST", this.dsList0.getColumn(0, "NO_COMPRESIDENT1_POST"));
        		this.dsInsert0.setColumn(nrow, "AT_COMPRESIDENT1_ADDR1", this.dsList0.getColumn(0, "AT_COMPRESIDENT1_ADDR1"));
        		this.dsInsert0.setColumn(nrow, "AT_COMPRESIDENT1_ADDR2", this.dsList0.getColumn(0, "AT_COMPRESIDENT1_ADDR2"));
        		this.dsInsert0.setColumn(nrow, "DS_COMPRESIDENT1_EMAIL", this.dsList0.getColumn(0, "DS_COMPRESIDENT1_EMAIL"));
        		this.dsInsert0.setColumn(nrow, "DS_COMPRESIDENT2", this.dsList0.getColumn(0, "DS_COMPRESIDENT2"));
        		this.dsInsert0.setColumn(nrow, "NO_COMPRESIDENT2", this.dsList0.getColumn(0, "NO_COMPRESIDENT2"));
        		this.dsInsert0.setColumn(nrow, "NO_COMPRESIDENT2_HP", this.dsList0.getColumn(0, "NO_COMPRESIDENT2_HP"));
        		this.dsInsert0.setColumn(nrow, "NO_COMPRESIDENT2_POST", this.dsList0.getColumn(0, "NO_COMPRESIDENT2_POST"));
        		this.dsInsert0.setColumn(nrow, "AT_COMPRESIDENT2_ADDR1", this.dsList0.getColumn(0, "AT_COMPRESIDENT2_ADDR1"));
        		this.dsInsert0.setColumn(nrow, "AT_COMPRESIDENT2_ADDR2", this.dsList0.getColumn(0, "AT_COMPRESIDENT2_ADDR2"));
        		this.dsInsert0.setColumn(nrow, "DS_COMPRESIDENT2_EMAIL", this.dsList0.getColumn(0, "DS_COMPRESIDENT2_EMAIL"));
        		this.dsInsert0.setColumn(nrow, "CD_DIVIDE", this.dsList0.getColumn(0, "CD_DIVIDE"));
        		this.dsInsert0.setColumn(nrow, "DT_FOUNDATION", this.dsList0.getColumn(0, "DT_FOUNDATION"));
        		this.dsInsert0.setColumn(nrow, "CD_KIND", this.dsList0.getColumn(0, "CD_KIND"));
        		this.dsInsert0.setColumn(nrow, "TY_LARGECOM", this.dsList0.getColumn(0, "TY_LARGECOM"));
        		this.dsInsert0.setColumn(nrow, "DS_STATUS", this.dsList0.getColumn(0, "DS_STATUS"));
        		this.dsInsert0.setColumn(nrow, "DS_ITEM", this.dsList0.getColumn(0, "DS_ITEM"));
        		this.dsInsert0.setColumn(nrow, "NO_TEL", this.dsList0.getColumn(0, "NO_TEL"));
        		this.dsInsert0.setColumn(nrow, "NO_FAX", this.dsList0.getColumn(0, "NO_FAX"));
        		this.dsInsert0.setColumn(nrow, "DS_EMAIL", this.dsList0.getColumn(0, "DS_EMAIL"));
        		this.dsInsert0.setColumn(nrow, "DS_HOMEPAGE", this.dsList0.getColumn(0, "DS_HOMEPAGE"));
        		this.dsInsert0.setColumn(nrow, "DS_DAM_NAME", this.dsList0.getColumn(0, "DS_DAM_NAME"));
        		this.dsInsert0.setColumn(nrow, "DS_DAM_HANDPHONE", this.dsList0.getColumn(0, "DS_DAM_HANDPHONE"));
        		this.dsInsert0.setColumn(nrow, "DS_DAM_DEPT", this.dsList0.getColumn(0, "DS_DAM_DEPT"));
        		this.dsInsert0.setColumn(nrow, "DS_DAM_TEL", this.dsList0.getColumn(0, "DS_DAM_TEL"));
        		this.dsInsert0.setColumn(nrow, "DS_DAM_EMAIL", this.dsList0.getColumn(0, "DS_DAM_EMAIL"));
        		this.dsInsert0.setColumn(nrow, "NO_POSTHQ", this.dsList0.getColumn(0, "NO_POSTHQ"));
        		this.dsInsert0.setColumn(nrow, "AT_ADDRHQ1", this.dsList0.getColumn(0, "AT_ADDRHQ1"));
        		this.dsInsert0.setColumn(nrow, "AT_ADDRHQ2", this.dsList0.getColumn(0, "AT_ADDRHQ2"));
        		this.dsInsert0.setColumn(nrow, "NO_POSTHQ_BRANCH", this.dsList0.getColumn(0, "NO_POSTHQ_BRANCH"));
        		this.dsInsert0.setColumn(nrow, "AT_ADDRHQ1_BRANCH", this.dsList0.getColumn(0, "AT_ADDRHQ1_BRANCH"));
        		this.dsInsert0.setColumn(nrow, "AT_ADDRHQ2_BRANCH", this.dsList0.getColumn(0, "AT_ADDRHQ2_BRANCH"));
        		this.dsInsert0.setColumn(nrow, "NO_POSTWORK", this.dsList0.getColumn(0, "NO_POSTWORK"));
        		this.dsInsert0.setColumn(nrow, "AT_ADDRWORK1", this.dsList0.getColumn(0, "AT_ADDRWORK1"));
        		this.dsInsert0.setColumn(nrow, "AT_ADDRWORK2", this.dsList0.getColumn(0, "AT_ADDRWORK2"));
        		this.dsInsert0.setColumn(nrow, "NO_POSTREGIST", this.dsList0.getColumn(0, "NO_POSTREGIST"));
        		this.dsInsert0.setColumn(nrow, "AT_ADDRREGIST1", this.dsList0.getColumn(0, "AT_ADDRREGIST1"));
        		this.dsInsert0.setColumn(nrow, "AT_ADDRREGIST2", this.dsList0.getColumn(0, "AT_ADDRREGIST2"));
        		this.dsInsert0.setColumn(nrow, "NO_TEL_BRANCH", this.dsList0.getColumn(0, "NO_TEL_BRANCH"));
        		this.dsInsert0.setColumn(nrow, "NO_FAX_BRANCH", this.dsList0.getColumn(0, "NO_FAX_BRANCH"));
        		this.dsInsert0.setColumn(nrow, "YN_DC", this.dsList0.getColumn(0, "YN_DC"));
        		this.dsInsert0.setColumn(nrow, "YN_DM", this.dsList0.getColumn(0, "YN_DM"));
        		this.dsInsert0.setColumn(nrow, "DS_CUSTOMER1", this.dsList0.getColumn(0, "DS_CUSTOMER1"));
        		this.dsInsert0.setColumn(nrow, "DS_CUSTOMER2", this.dsList0.getColumn(0, "DS_CUSTOMER2"));
        		this.dsInsert0.setColumn(nrow, "DS_CUSTOMER3", this.dsList0.getColumn(0, "DS_CUSTOMER3"));
        		this.dsInsert0.setColumn(nrow, "NO_TECHEXPERT", this.dsList0.getColumn(0, "NO_TECHEXPERT"));
        		this.dsInsert0.setColumn(nrow, "NO_ENGINEER1", this.dsList0.getColumn(0, "NO_ENGINEER1"));
        		this.dsInsert0.setColumn(nrow, "NO_TOTAL", this.dsList0.getColumn(0, "NO_TOTAL"));
        		this.dsInsert0.setColumn(nrow, "NO_MANAGE", this.dsList0.getColumn(0, "NO_MANAGE"));
        		this.dsInsert0.setColumn(nrow, "NO_NONLICENSE", this.dsList0.getColumn(0, "NO_NONLICENSE"));
        		this.dsInsert0.setColumn(nrow, "RM_BIGO", this.dsList0.getColumn(0, "RM_BIGO"));
        		this.dsInsert0.setColumn(nrow, "GR_CREDIT", this.dsList0.getColumn(0, "GR_CREDIT"));
        		this.dsInsert0.setColumn(nrow, "GR_CASH", this.dsList0.getColumn(0, "GR_CASH"));
        		this.dsInsert0.setColumn(nrow, "GR_RMIS", this.dsList0.getColumn(0, "GR_RMIS"));
        		this.dsInsert0.setColumn(nrow, "TY_REGIST", this.dsList0.getColumn(0, "TY_REGIST"));
        		this.dsInsert0.setColumn(nrow, "DS_TALAK", this.dsList0.getColumn(0, "DS_TALAK"));
        		this.dsInsert0.setColumn(nrow, "DT_INPUT",  today.substring(0,4));
        		this.dsInsert0.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsInsert0.setColumn(nrow, "NO_GROUPWARE", this.dsList0.getColumn(0, "NO_GROUPWARE"));
        		this.dsInsert0.setColumn(nrow, "YN_DZ", this.dsList0.getColumn(0, "YN_DZ"));

        	}else{

        		strSvcId = "update0";
        		inData = "update0=dsUpdate0";
        		outData = "";

        		this.dsUpdate0.clearData();
        		var nrow = this.dsUpdate0.addRow();

        		this.dsUpdate0.setColumn(nrow, "CD_VENDOR", this.dsList0.getColumn(0, "CD_VENDOR"));
        		this.dsUpdate0.setColumn(nrow, "NO_SJC", this.dsList0.getColumn(0, "NO_SJC"));
        		this.dsUpdate0.setColumn(nrow, "DS_VENDOR", this.dsList0.getColumn(0, "DS_VENDOR"));
        		this.dsUpdate0.setColumn(nrow, "NO_REGIST", this.dsList0.getColumn(0, "NO_REGIST"));
        		this.dsUpdate0.setColumn(nrow, "DS_PRESIDENT", this.dsList0.getColumn(0, "DS_PRESIDENT"));
        		this.dsUpdate0.setColumn(nrow, "NO_PRESIDENT", this.dsList0.getColumn(0, "NO_PRESIDENT"));
        		this.dsUpdate0.setColumn(nrow, "NO_PRESIDENT_HP", this.dsList0.getColumn(0, "NO_PRESIDENT_HP"));
        		this.dsUpdate0.setColumn(nrow, "NO_PRESIDENT_POST", this.dsList0.getColumn(0, "NO_PRESIDENT_POST"));
        		this.dsUpdate0.setColumn(nrow, "AT_PRESIDENT_ADDR1", this.dsList0.getColumn(0, "AT_PRESIDENT_ADDR1"));
        		this.dsUpdate0.setColumn(nrow, "AT_PRESIDENT_ADDR2", this.dsList0.getColumn(0, "AT_PRESIDENT_ADDR2"));
        		this.dsUpdate0.setColumn(nrow, "DS_PRESIDENT_EMAIL", this.dsList0.getColumn(0, "DS_PRESIDENT_EMAIL"));
        		this.dsUpdate0.setColumn(nrow, "DS_COMPRESIDENT1", this.dsList0.getColumn(0, "DS_COMPRESIDENT1"));
        		this.dsUpdate0.setColumn(nrow, "NO_COMPRESIDENT1", this.dsList0.getColumn(0, "NO_COMPRESIDENT1"));
        		this.dsUpdate0.setColumn(nrow, "NO_COMPRESIDENT1_HP", this.dsList0.getColumn(0, "NO_COMPRESIDENT1_HP"));
        		this.dsUpdate0.setColumn(nrow, "NO_COMPRESIDENT1_POST", this.dsList0.getColumn(0, "NO_COMPRESIDENT1_POST"));
        		this.dsUpdate0.setColumn(nrow, "AT_COMPRESIDENT1_ADDR1", this.dsList0.getColumn(0, "AT_COMPRESIDENT1_ADDR1"));
        		this.dsUpdate0.setColumn(nrow, "AT_COMPRESIDENT1_ADDR2", this.dsList0.getColumn(0, "AT_COMPRESIDENT1_ADDR2"));
        		this.dsUpdate0.setColumn(nrow, "DS_COMPRESIDENT1_EMAIL", this.dsList0.getColumn(0, "DS_COMPRESIDENT1_EMAIL"));
        		this.dsUpdate0.setColumn(nrow, "DS_COMPRESIDENT2", this.dsList0.getColumn(0, "DS_COMPRESIDENT2"));
        		this.dsUpdate0.setColumn(nrow, "NO_COMPRESIDENT2", this.dsList0.getColumn(0, "NO_COMPRESIDENT2"));
        		this.dsUpdate0.setColumn(nrow, "NO_COMPRESIDENT2_HP", this.dsList0.getColumn(0, "NO_COMPRESIDENT2_HP"));
        		this.dsUpdate0.setColumn(nrow, "NO_COMPRESIDENT2_POST", this.dsList0.getColumn(0, "NO_COMPRESIDENT2_POST"));
        		this.dsUpdate0.setColumn(nrow, "AT_COMPRESIDENT2_ADDR1", this.dsList0.getColumn(0, "AT_COMPRESIDENT2_ADDR1"));
        		this.dsUpdate0.setColumn(nrow, "AT_COMPRESIDENT2_ADDR2", this.dsList0.getColumn(0, "AT_COMPRESIDENT2_ADDR2"));
        		this.dsUpdate0.setColumn(nrow, "DS_COMPRESIDENT2_EMAIL", this.dsList0.getColumn(0, "DS_COMPRESIDENT2_EMAIL"));
        		this.dsUpdate0.setColumn(nrow, "CD_DIVIDE", this.dsList0.getColumn(0, "CD_DIVIDE"));
        		this.dsUpdate0.setColumn(nrow, "DT_FOUNDATION", this.dsList0.getColumn(0, "DT_FOUNDATION"));
        		this.dsUpdate0.setColumn(nrow, "CD_KIND", this.dsList0.getColumn(0, "CD_KIND"));
        		this.dsUpdate0.setColumn(nrow, "TY_LARGECOM", this.dsList0.getColumn(0, "TY_LARGECOM"));
        		this.dsUpdate0.setColumn(nrow, "DS_STATUS", this.dsList0.getColumn(0, "DS_STATUS"));
        		this.dsUpdate0.setColumn(nrow, "DS_ITEM", this.dsList0.getColumn(0, "DS_ITEM"));
        		this.dsUpdate0.setColumn(nrow, "NO_TEL", this.dsList0.getColumn(0, "NO_TEL"));
        		this.dsUpdate0.setColumn(nrow, "NO_FAX", this.dsList0.getColumn(0, "NO_FAX"));
        		this.dsUpdate0.setColumn(nrow, "DS_EMAIL", this.dsList0.getColumn(0, "DS_EMAIL"));
        		this.dsUpdate0.setColumn(nrow, "DS_HOMEPAGE", this.dsList0.getColumn(0, "DS_HOMEPAGE"));
        		this.dsUpdate0.setColumn(nrow, "DS_DAM_NAME", this.dsList0.getColumn(0, "DS_DAM_NAME"));
        		this.dsUpdate0.setColumn(nrow, "DS_DAM_HANDPHONE", this.dsList0.getColumn(0, "DS_DAM_HANDPHONE"));
        		this.dsUpdate0.setColumn(nrow, "DS_DAM_DEPT", this.dsList0.getColumn(0, "DS_DAM_DEPT"));
        		this.dsUpdate0.setColumn(nrow, "DS_DAM_TEL", this.dsList0.getColumn(0, "DS_DAM_TEL"));
        		this.dsUpdate0.setColumn(nrow, "DS_DAM_EMAIL", this.dsList0.getColumn(0, "DS_DAM_EMAIL"));
        		this.dsUpdate0.setColumn(nrow, "NO_POSTHQ", this.dsList0.getColumn(0, "NO_POSTHQ"));
        		this.dsUpdate0.setColumn(nrow, "AT_ADDRHQ1", this.dsList0.getColumn(0, "AT_ADDRHQ1"));
        		this.dsUpdate0.setColumn(nrow, "AT_ADDRHQ2", this.dsList0.getColumn(0, "AT_ADDRHQ2"));
        		this.dsUpdate0.setColumn(nrow, "NO_POSTHQ_BRANCH", this.dsList0.getColumn(0, "NO_POSTHQ_BRANCH"));
        		this.dsUpdate0.setColumn(nrow, "AT_ADDRHQ1_BRANCH", this.dsList0.getColumn(0, "AT_ADDRHQ1_BRANCH"));
        		this.dsUpdate0.setColumn(nrow, "AT_ADDRHQ2_BRANCH", this.dsList0.getColumn(0, "AT_ADDRHQ2_BRANCH"));
        		this.dsUpdate0.setColumn(nrow, "NO_POSTWORK", this.dsList0.getColumn(0, "NO_POSTWORK"));
        		this.dsUpdate0.setColumn(nrow, "AT_ADDRWORK1", this.dsList0.getColumn(0, "AT_ADDRWORK1"));
        		this.dsUpdate0.setColumn(nrow, "AT_ADDRWORK2", this.dsList0.getColumn(0, "AT_ADDRWORK2"));
        		this.dsUpdate0.setColumn(nrow, "NO_POSTREGIST", this.dsList0.getColumn(0, "NO_POSTREGIST"));
        		this.dsUpdate0.setColumn(nrow, "AT_ADDRREGIST1", this.dsList0.getColumn(0, "AT_ADDRREGIST1"));
        		this.dsUpdate0.setColumn(nrow, "AT_ADDRREGIST2", this.dsList0.getColumn(0, "AT_ADDRREGIST2"));
        		this.dsUpdate0.setColumn(nrow, "NO_TEL_BRANCH", this.dsList0.getColumn(0, "NO_TEL_BRANCH"));
        		this.dsUpdate0.setColumn(nrow, "NO_FAX_BRANCH", this.dsList0.getColumn(0, "NO_FAX_BRANCH"));
        		this.dsUpdate0.setColumn(nrow, "YN_DC", this.dsList0.getColumn(0, "YN_DC"));
        		this.dsUpdate0.setColumn(nrow, "YN_DM", this.dsList0.getColumn(0, "YN_DM"));
        		this.dsUpdate0.setColumn(nrow, "DS_CUSTOMER1", this.dsList0.getColumn(0, "DS_CUSTOMER1"));
        		this.dsUpdate0.setColumn(nrow, "DS_CUSTOMER2", this.dsList0.getColumn(0, "DS_CUSTOMER2"));
        		this.dsUpdate0.setColumn(nrow, "DS_CUSTOMER3", this.dsList0.getColumn(0, "DS_CUSTOMER3"));
        		this.dsUpdate0.setColumn(nrow, "NO_TECHEXPERT", this.dsList0.getColumn(0, "NO_TECHEXPERT"));
        		this.dsUpdate0.setColumn(nrow, "NO_ENGINEER1", this.dsList0.getColumn(0, "NO_ENGINEER1"));
        		this.dsUpdate0.setColumn(nrow, "NO_TOTAL", this.dsList0.getColumn(0, "NO_TOTAL"));
        		this.dsUpdate0.setColumn(nrow, "NO_MANAGE", this.dsList0.getColumn(0, "NO_MANAGE"));
        		this.dsUpdate0.setColumn(nrow, "NO_NONLICENSE", this.dsList0.getColumn(0, "NO_NONLICENSE"));
        		this.dsUpdate0.setColumn(nrow, "RM_BIGO", this.dsList0.getColumn(0, "RM_BIGO"));
        		this.dsUpdate0.setColumn(nrow, "GR_CREDIT", this.dsList0.getColumn(0, "GR_CREDIT"));
        		this.dsUpdate0.setColumn(nrow, "GR_CASH", this.dsList0.getColumn(0, "GR_CASH"));
        		this.dsUpdate0.setColumn(nrow, "GR_RMIS", this.dsList0.getColumn(0, "GR_RMIS"));
        		this.dsUpdate0.setColumn(nrow, "TY_REGIST", this.dsList0.getColumn(0, "TY_REGIST"));
        		this.dsUpdate0.setColumn(nrow, "DS_TALAK", this.dsList0.getColumn(0, "DS_TALAK"));
        		this.dsUpdate0.setColumn(nrow, "DT_INPUT", this.dsList0.getColumn(0, "DT_INPUT"));
        		this.dsUpdate0.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsUpdate0.setColumn(nrow, "CD_MODULE", this.dsSearch.getColumn(0, "DS_PARAM"));
        		this.dsUpdate0.setColumn(nrow, "NO_GROUPWARE", this.dsList0.getColumn(0, "NO_GROUPWARE"));
        		this.dsUpdate0.setColumn(nrow, "YN_DZ", this.dsList0.getColumn(0, "YN_DZ"));
        	}

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        };

        this.fnRegDel = function(obj, e){
        	this.gfnConfirm("등록원삭제하시겠습니까?","fnRegDel_callback");
        };

        this.fnRegDel_callback = function(strId, val)
        {
        	if(val){

        		this.dsRegDel = new Dataset();
        		this.dsRegDel.addColumn("CD_VENDOR", "string");

        		this.dsRegDel.clearData();
        		var nrow = this.dsRegDel.addRow();
        		this.dsRegDel.setColumn(nrow, "CD_VENDOR", this.dsList0.getColumn(0, "CD_VENDOR"));

        		var strSvcId    = "regdel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "regdel0=dsRegDel";
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

        this.fnSaveAction1 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab1)) return;

        	this.dsSave1 = new Dataset();
        	this.dsSave1.addColumn("ID_USER", "string");
        	this.dsSave1.addColumn("CD_VENDOR", "string");
        	this.dsSave1.addColumn("DT_INPUT", "string");
        	this.dsSave1.addColumn("TY_WRK", "string");
        	this.dsSave1.addColumn("DT_HISTORY", "string");
        	this.dsSave1.addColumn("NO_HISTORY", "string");
        	this.dsSave1.addColumn("DS_CONTENT", "string");
        	this.dsSave1.addColumn("RM_BIGO", "string");

        	this.dxGridTab1.updateToDataset();

        	this.dsSave1.clearData();

        	for (var i = 0; i < this.dsList1.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList1, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave1.addRow();
        				this.dsSave1.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave1.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave1.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave1.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave1.setColumn(nrow, "DT_HISTORY", this.dsList1.getColumn(i, "DT_HISTORY"));
        				this.dsSave1.setColumn(nrow, "NO_HISTORY", this.dsList1.getColumn(i, "NO_HISTORY"));
        				this.dsSave1.setColumn(nrow, "DS_CONTENT", this.dsList1.getColumn(i, "DS_CONTENT"));
        				this.dsSave1.setColumn(nrow, "RM_BIGO", this.dsList1.getColumn(i, "RM_BIGO"));

        				break;
        		}
        	}

        	if (this.dsSave1.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save1=dsSave1";
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

        this.fnSaveAction5 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab5)) return;

        	this.dsSave5 = new Dataset();
        	this.dsSave5.addColumn("TY_WRK", "string");
        	this.dsSave5.addColumn("ID_USER", "string");
        	this.dsSave5.addColumn("CD_VENDOR", "string");
        	this.dsSave5.addColumn("DT_INPUT", "string");
        	this.dsSave5.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave5.addColumn("CD_LICENSE", "string");
        	this.dsSave5.addColumn("NO_LICENSE", "string");
        	this.dsSave5.addColumn("TY_REGIST", "string");
        	this.dsSave5.addColumn("YR_RESULT", "string");
        	this.dsSave5.addColumn("AM_CONTLIMIT", "bigdecimal");
        	this.dsSave5.addColumn("RK_REGION", "bigdecimal");
        	this.dsSave5.addColumn("RK_REGIONTOTAL", "bigdecimal");
        	this.dsSave5.addColumn("RK_NATION", "bigdecimal");
        	this.dsSave5.addColumn("RK_NATIONTOTAL", "bigdecimal");
        	this.dsSave5.addColumn("RM_BIGO", "string");
        	this.dsSave5.addColumn("YN_CHECK", "string");

        	this.dxGridTab5.updateToDataset();

        	this.dsSave5.clearData();

        	for (var i = 0; i < this.dsList5.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList5, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave5.addRow();

        				this.dsSave5.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave5.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave5.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave5.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave5.setColumn(nrow, "NO_SEQ", this.dsList5.getColumn(i, "NO_SEQ"));
        				this.dsSave5.setColumn(nrow, "CD_LICENSE", this.dsList5.getColumn(i, "CD_LICENSE"));
        				this.dsSave5.setColumn(nrow, "NO_LICENSE", this.dsList5.getColumn(i, "NO_LICENSE"));
        				this.dsSave5.setColumn(nrow, "TY_REGIST", this.dsList5.getColumn(i, "TY_REGIST"));
        				this.dsSave5.setColumn(nrow, "YR_RESULT", this.dsList5.getColumn(i, "YR_RESULT"));
        				this.dsSave5.setColumn(nrow, "AM_CONTLIMIT", this.dsList5.getColumn(i, "AM_CONTLIMIT"));
        				this.dsSave5.setColumn(nrow, "RK_REGION", this.dsList5.getColumn(i, "RK_REGION"));
        				this.dsSave5.setColumn(nrow, "RK_REGIONTOTAL", this.dsList5.getColumn(i, "RK_REGIONTOTAL"));
        				this.dsSave5.setColumn(nrow, "RK_NATION", this.dsList5.getColumn(i, "RK_NATION"));
        				this.dsSave5.setColumn(nrow, "RK_NATIONTOTAL", this.dsList5.getColumn(i, "RK_NATIONTOTAL"));
        				this.dsSave5.setColumn(nrow, "RM_BIGO", this.dsList5.getColumn(i, "RM_BIGO"));
        				this.dsSave5.setColumn(nrow, "YN_CHECK", this.dsList5.getColumn(i, "YN_CHECK"));
        				break;
        		}
        	}

        	if (this.dsSave5.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save5=dsSave5";
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

        this.fnSaveAction9 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab9)) return;

        	this.dsSave9 = new Dataset();
        	this.dsSave9.addColumn("ID_USER", "string");
        	this.dsSave9.addColumn("CD_VENDOR", "string");
        	this.dsSave9.addColumn("DT_INPUT", "string");
        	this.dsSave9.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave9.addColumn("DS_EQUIP", "string");
        	this.dsSave9.addColumn("UT_EQUIP", "string");
        	this.dsSave9.addColumn("SZ_EQUIP", "string");
        	this.dsSave9.addColumn("QN_EQUIP", "string");
        	this.dsSave9.addColumn("RM_BIGO", "string");
        	this.dsSave9.addColumn("TY_WRK", "string");

        	this.dxGridTab9.updateToDataset();

        	this.dsSave9.clearData();

        	for (var i = 0; i < this.dsList9.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList9, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave9.addRow();

        				this.dsSave9.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave9.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave9.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave9.setColumn(nrow, "NO_SEQ", this.dsList9.getColumn(i, "NO_SEQ"));
        				this.dsSave9.setColumn(nrow, "DS_EQUIP", this.dsList9.getColumn(i, "DS_EQUIP"));
        				this.dsSave9.setColumn(nrow, "UT_EQUIP", this.dsList9.getColumn(i, "UT_EQUIP"));
        				this.dsSave9.setColumn(nrow, "SZ_EQUIP", this.dsList9.getColumn(i, "SZ_EQUIP"));
        				this.dsSave9.setColumn(nrow, "QN_EQUIP", this.dsList9.getColumn(i, "QN_EQUIP"));
        				this.dsSave9.setColumn(nrow, "RM_BIGO", this.dsList9.getColumn(i, "RM_BIGO"));
        				this.dsSave9.setColumn(nrow, "TY_WRK", flag);

        				break;
        		}
        	}

        	if (this.dsSave9.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save9=dsSave9";
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

        this.fnSaveAction12 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab12)) return;

        	this.dsSave12 = new Dataset();
        	this.dsSave12.addColumn("TY_WRK", "string");
        	this.dsSave12.addColumn("ID_USER", "string");
        	this.dsSave12.addColumn("CD_VENDOR", "string");
        	this.dsSave12.addColumn("DT_INPUT", "string");
        	this.dsSave12.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave12.addColumn("DT_JUSTICE", "string");
        	this.dsSave12.addColumn("TY_JUSTICE", "string");
        	this.dsSave12.addColumn("TY_JUSTICEKIND", "string");
        	this.dsSave12.addColumn("OR_JUSTICE", "string");
        	this.dsSave12.addColumn("FR_JUSTICE", "string");
        	this.dsSave12.addColumn("TO_JUSTICE", "string");
        	this.dsSave12.addColumn("RM_JUSTICEREASON", "string");

        	this.dxGridTab12.updateToDataset();

        	this.dsSave12.clearData();

        	for (var i = 0; i < this.dsList12.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList12, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave12.addRow();

        				this.dsSave12.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave12.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave12.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave12.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave12.setColumn(nrow, "NO_SEQ", this.dsList12.getColumn(i, "NO_SEQ"));
        				this.dsSave12.setColumn(nrow, "DT_JUSTICE", this.dsList12.getColumn(i, "DT_JUSTICE"));
        				this.dsSave12.setColumn(nrow, "TY_JUSTICE", this.dsList12.getColumn(i, "TY_JUSTICE"));
        				this.dsSave12.setColumn(nrow, "TY_JUSTICEKIND", this.dsList12.getColumn(i, "TY_JUSTICEKIND"));
        				this.dsSave12.setColumn(nrow, "OR_JUSTICE", this.dsList12.getColumn(i, "OR_JUSTICE"));
        				this.dsSave12.setColumn(nrow, "FR_JUSTICE", this.dsList12.getColumn(i, "FR_JUSTICE"));
        				this.dsSave12.setColumn(nrow, "TO_JUSTICE", this.dsList12.getColumn(i, "TO_JUSTICE"));
        				this.dsSave12.setColumn(nrow, "RM_JUSTICEREASON", this.dsList12.getColumn(i, "RM_JUSTICEREASON"));

        				break;
        		}
        	}

        	if (this.dsSave12.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save12=dsSave12";
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

        this.fnSaveAction15 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab15)) return;

        	this.dsSave15 = new Dataset();
        	/*this.dsSave15.addColumn("TY_WRK", "string");
        	this.dsSave15.addColumn("ID_USER", "string");
        	this.dsSave15.addColumn("CD_VENDOR", "string");
        	this.dsSave15.addColumn("DT_INPUT", "string");
        	this.dsSave15.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave15.addColumn("TY_GUBUN", "string");
        	this.dsSave15.addColumn("NO_CONTENT", "string");
        	this.dsSave15.addColumn("DT_ISO", "string");
        	this.dsSave15.addColumn("DS_CONTENT", "string");
        	this.dsSave15.addColumn("RM_BIGO", "string");*/

        	this.dsSave15.addColumn("TY_WRK", "string");
        	this.dsSave15.addColumn("ID_USER", "string");
        	this.dsSave15.addColumn("CD_VENDOR", "string");
        	this.dsSave15.addColumn("DT_INPUT", "string");
        	this.dsSave15.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave15.addColumn("TY_GUBUN", "string");
        	this.dsSave15.addColumn("NO_CONTENT", "string");
        	this.dsSave15.addColumn("FR_ISO", "string");
        	this.dsSave15.addColumn("TO_ISO", "string");
        	this.dsSave15.addColumn("DS_CONTENT", "string");
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

        				/*this.dsSave15.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave15.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave15.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave15.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave15.setColumn(nrow, "NO_SEQ", this.dsList15.getColumn(i, "NO_SEQ"));
        				this.dsSave15.setColumn(nrow, "TY_GUBUN", this.dsList15.getColumn(i, "TY_GUBUN"));
        				this.dsSave15.setColumn(nrow, "NO_CONTENT", this.dsList15.getColumn(i, "NO_CONTENT"));
        				this.dsSave15.setColumn(nrow, "DT_ISO", this.dsList15.getColumn(i, "DT_ISO"));
        				this.dsSave15.setColumn(nrow, "DS_CONTENT", this.dsList15.getColumn(i, "DS_CONTENT"));
        				this.dsSave15.setColumn(nrow, "RM_BIGO", this.dsList15.getColumn(i, "RM_BIGO"));*/

        				this.dsSave15.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave15.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave15.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave15.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave15.setColumn(nrow, "NO_SEQ", this.dsList15.getColumn(i, "NO_SEQ"));
        				this.dsSave15.setColumn(nrow, "TY_GUBUN", this.dsList15.getColumn(i, "TY_GUBUN"));
        				this.dsSave15.setColumn(nrow, "NO_CONTENT", this.dsList15.getColumn(i, "NO_CONTENT"));
        				this.dsSave15.setColumn(nrow, "FR_ISO", this.dsList15.getColumn(i, "FR_ISO"));
        				this.dsSave15.setColumn(nrow, "TO_ISO", this.dsList15.getColumn(i, "TO_ISO"));
        				this.dsSave15.setColumn(nrow, "DS_CONTENT", this.dsList15.getColumn(i, "DS_CONTENT"));
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

        this.fnSaveAction6 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab6)) return;

        	this.dsSave6 = new Dataset();
        	this.dsSave6.addColumn("TY_WRK", "string");
        	this.dsSave6.addColumn("ID_USER", "string");
        	this.dsSave6.addColumn("CD_VENDOR", "string");
        	this.dsSave6.addColumn("DT_INPUT", "string");
        	this.dsSave6.addColumn("YR_RESULT", "bigdecimal");
        	this.dsSave6.addColumn("AM_TT_ASSETS", "bigdecimal");
        	this.dsSave6.addColumn("AM_FLOW_ASSETS", "bigdecimal");
        	this.dsSave6.addColumn("AM_TT_DEBT", "bigdecimal");
        	this.dsSave6.addColumn("AM_FLOW_DEBT", "bigdecimal");
        	this.dsSave6.addColumn("AM_LOAN", "bigdecimal");
        	this.dsSave6.addColumn("AM_CAPITAL", "bigdecimal");
        	this.dsSave6.addColumn("AM_TT_CAPITAL", "bigdecimal");
        	this.dsSave6.addColumn("AM_OPERATINGPROFIT", "bigdecimal");
        	this.dsSave6.addColumn("AM_NETPROFIT", "bigdecimal");
        	this.dsSave6.addColumn("AM_SALE", "bigdecimal");
        	this.dsSave6.addColumn("AM_BEFORE_SALE", "bigdecimal");
        	this.dsSave6.addColumn("AM_TT_SALE", "bigdecimal");
        	this.dsSave6.addColumn("AM_TT_STOCK", "bigdecimal");
        	this.dsSave6.addColumn("AM_SCORE", "bigdecimal");
        	this.dsSave6.addColumn("RK_RATING", "bigdecimal");
        	this.dsSave6.addColumn("RT_SALERISE", "bigdecimal");
        	this.dsSave6.addColumn("RT_OPERATINGPROFIT", "bigdecimal");
        	this.dsSave6.addColumn("RT_NETPROFIT", "bigdecimal");
        	this.dsSave6.addColumn("RT_CIRCULATING", "bigdecimal");
        	this.dsSave6.addColumn("RT_DEBT", "bigdecimal");
        	this.dsSave6.addColumn("RT_LOANDEPENDENCE", "bigdecimal");
        	this.dsSave6.addColumn("RT_CIRCULATING_LIC", "bigdecimal");
        	this.dsSave6.addColumn("RT_DEBT_LIC", "bigdecimal");
        	this.dsSave6.addColumn("RT_SALERISE_LIC", "bigdecimal");

        	this.dxGridTab6.updateToDataset();

        	this.dsSave6.clearData();

        	for (var i = 0; i < this.dsList6.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList6, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave6.addRow();

        				this.dsSave6.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave6.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave6.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave6.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave6.setColumn(nrow, "YR_RESULT", this.dsList6.getColumn(i, "YR_RESULT"));
        				this.dsSave6.setColumn(nrow, "AM_TT_ASSETS", this.dsList6.getColumn(i, "AM_TT_ASSETS"));
        				this.dsSave6.setColumn(nrow, "AM_FLOW_ASSETS", this.dsList6.getColumn(i, "AM_FLOW_ASSETS"));
        				this.dsSave6.setColumn(nrow, "AM_TT_DEBT", this.dsList6.getColumn(i, "AM_TT_DEBT"));
        				this.dsSave6.setColumn(nrow, "AM_FLOW_DEBT", this.dsList6.getColumn(i, "AM_FLOW_DEBT"));
        				this.dsSave6.setColumn(nrow, "AM_LOAN", this.dsList6.getColumn(i, "AM_LOAN"));
        				this.dsSave6.setColumn(nrow, "AM_CAPITAL", this.dsList6.getColumn(i, "AM_CAPITAL"));
        				this.dsSave6.setColumn(nrow, "AM_TT_CAPITAL", this.dsList6.getColumn(i, "AM_TT_CAPITAL"));
        				this.dsSave6.setColumn(nrow, "AM_OPERATINGPROFIT", this.dsList6.getColumn(i, "AM_OPERATINGPROFIT"));
        				this.dsSave6.setColumn(nrow, "AM_NETPROFIT", this.dsList6.getColumn(i, "AM_NETPROFIT"));
        				this.dsSave6.setColumn(nrow, "AM_SALE", this.dsList6.getColumn(i, "AM_SALE"));
        				this.dsSave6.setColumn(nrow, "AM_BEFORE_SALE", this.dsList6.getColumn(i, "AM_BEFORE_SALE"));
        				this.dsSave6.setColumn(nrow, "AM_TT_SALE", this.dsList6.getColumn(i, "AM_TT_SALE"));
        				this.dsSave6.setColumn(nrow, "AM_TT_STOCK", this.dsList6.getColumn(i, "AM_TT_STOCK"));
        				this.dsSave6.setColumn(nrow, "AM_SCORE", this.dsList6.getColumn(i, "AM_SCORE"));
        				this.dsSave6.setColumn(nrow, "RK_RATING", this.dsList6.getColumn(i, "RK_RATING"));
        				this.dsSave6.setColumn(nrow, "RT_SALERISE", this.dsList6.getColumn(i, "RT_SALERISE"));
        				this.dsSave6.setColumn(nrow, "RT_OPERATINGPROFIT", this.dsList6.getColumn(i, "RT_OPERATINGPROFIT"));
        				this.dsSave6.setColumn(nrow, "RT_NETPROFIT", this.dsList6.getColumn(i, "RT_NETPROFIT"));
        				this.dsSave6.setColumn(nrow, "RT_CIRCULATING", this.dsList6.getColumn(i, "RT_CIRCULATING"));
        				this.dsSave6.setColumn(nrow, "RT_DEBT", this.dsList6.getColumn(i, "RT_DEBT"));
        				this.dsSave6.setColumn(nrow, "RT_LOANDEPENDENCE", this.dsList6.getColumn(i, "RT_LOANDEPENDENCE"));
        				this.dsSave6.setColumn(nrow, "RT_CIRCULATING_LIC", this.dsList6.getColumn(i, "RT_CIRCULATING_LIC"));
        				this.dsSave6.setColumn(nrow, "RT_DEBT_LIC", this.dsList6.getColumn(i, "RT_DEBT_LIC"));
        				this.dsSave6.setColumn(nrow, "RT_SALERISE_LIC", this.dsList6.getColumn(i, "RT_SALERISE_LIC"));

        				break;
        		}
        	}

        	if (this.dsSave6.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save6=dsSave6";
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

        this.fnSaveAction7 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab7)) return;

        	this.dsSave7 = new Dataset();
        	this.dsSave7.addColumn("TY_WRK", "string");
        	this.dsSave7.addColumn("ID_USER", "string");
        	this.dsSave7.addColumn("CD_VENDOR", "string");
        	this.dsSave7.addColumn("DT_INPUT", "string");
        	this.dsSave7.addColumn("YR_RESULT", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0002", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0017", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0001", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0031", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0040", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0050", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0038", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0030", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0059", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0060", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0079", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0091", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0092", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0093", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0098", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0105", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0113", "bigdecimal");
        	this.dsSave7.addColumn("AM_BS0114", "bigdecimal");

        	this.dxGridTab7.updateToDataset();

        	this.dsSave7.clearData();

        	for (var i = 0; i < this.dsList7.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList7, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave7.addRow();

        				this.dsSave7.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave7.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave7.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave7.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave7.setColumn(nrow, "YR_RESULT", this.dsList7.getColumn(i, "YR_RESULT"));
        				this.dsSave7.setColumn(nrow, "AM_BS0002", this.dsList7.getColumn(i, "AM_BS0002"));
        				this.dsSave7.setColumn(nrow, "AM_BS0017", this.dsList7.getColumn(i, "AM_BS0017"));
        				this.dsSave7.setColumn(nrow, "AM_BS0001", this.dsList7.getColumn(i, "AM_BS0001"));
        				this.dsSave7.setColumn(nrow, "AM_BS0031", this.dsList7.getColumn(i, "AM_BS0031"));
        				this.dsSave7.setColumn(nrow, "AM_BS0040", this.dsList7.getColumn(i, "AM_BS0040"));
        				this.dsSave7.setColumn(nrow, "AM_BS0050", this.dsList7.getColumn(i, "AM_BS0050"));
        				this.dsSave7.setColumn(nrow, "AM_BS0038", this.dsList7.getColumn(i, "AM_BS0038"));
        				this.dsSave7.setColumn(nrow, "AM_BS0030", this.dsList7.getColumn(i, "AM_BS0030"));
        				this.dsSave7.setColumn(nrow, "AM_BS0059", this.dsList7.getColumn(i, "AM_BS0059"));
        				this.dsSave7.setColumn(nrow, "AM_BS0060", this.dsList7.getColumn(i, "AM_BS0060"));
        				this.dsSave7.setColumn(nrow, "AM_BS0079", this.dsList7.getColumn(i, "AM_BS0079"));
        				this.dsSave7.setColumn(nrow, "AM_BS0091", this.dsList7.getColumn(i, "AM_BS0091"));
        				this.dsSave7.setColumn(nrow, "AM_BS0092", this.dsList7.getColumn(i, "AM_BS0092"));
        				this.dsSave7.setColumn(nrow, "AM_BS0093", this.dsList7.getColumn(i, "AM_BS0093"));
        				this.dsSave7.setColumn(nrow, "AM_BS0098", this.dsList7.getColumn(i, "AM_BS0098"));
        				this.dsSave7.setColumn(nrow, "AM_BS0105", this.dsList7.getColumn(i, "AM_BS0105"));
        				this.dsSave7.setColumn(nrow, "AM_BS0113", this.dsList7.getColumn(i, "AM_BS0113"));
        				this.dsSave7.setColumn(nrow, "AM_BS0114", this.dsList7.getColumn(i, "AM_BS0114"));

        				break;
        		}
        	}

        	if (this.dsSave7.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save7=dsSave7";
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

        this.fnSaveAction8 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab8)) return;

        	this.dsSave8 = new Dataset();
        	this.dsSave8.addColumn("TY_WRK", "string");
        	this.dsSave8.addColumn("ID_USER", "string");
        	this.dsSave8.addColumn("CD_VENDOR", "string");
        	this.dsSave8.addColumn("DT_INPUT", "string");
        	this.dsSave8.addColumn("YR_RESULT", "bigdecimal");
        	this.dsSave8.addColumn("AM_PL0001", "bigdecimal");
        	this.dsSave8.addColumn("AM_PL0010", "bigdecimal");
        	this.dsSave8.addColumn("AM_PL0027", "bigdecimal");
        	this.dsSave8.addColumn("AM_PL0028", "bigdecimal");
        	this.dsSave8.addColumn("AM_PL0069", "bigdecimal");
        	this.dsSave8.addColumn("AM_PL0071", "bigdecimal");
        	this.dsSave8.addColumn("AM_PL0002", "bigdecimal");
        	this.dsSave8.addColumn("AM_PL0011", "bigdecimal");
        	this.dsSave8.addColumn("AM_PL0043", "bigdecimal");
        	this.dsSave8.addColumn("AM_PL0066", "bigdecimal");
        	this.dsSave8.addColumn("AM_PL0058", "bigdecimal");

        	this.dxGridTab8.updateToDataset();

        	this.dsSave8.clearData();

        	for (var i = 0; i < this.dsList8.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList8, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave8.addRow();

        				this.dsSave8.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave8.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave8.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave8.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave8.setColumn(nrow, "YR_RESULT", this.dsList8.getColumn(i, "YR_RESULT"));
        				this.dsSave8.setColumn(nrow, "AM_PL0001", this.dsList8.getColumn(i, "AM_PL0001"));
        				this.dsSave8.setColumn(nrow, "AM_PL0010", this.dsList8.getColumn(i, "AM_PL0010"));
        				this.dsSave8.setColumn(nrow, "AM_PL0027", this.dsList8.getColumn(i, "AM_PL0027"));
        				this.dsSave8.setColumn(nrow, "AM_PL0028", this.dsList8.getColumn(i, "AM_PL0028"));
        				this.dsSave8.setColumn(nrow, "AM_PL0069", this.dsList8.getColumn(i, "AM_PL0069"));
        				this.dsSave8.setColumn(nrow, "AM_PL0071", this.dsList8.getColumn(i, "AM_PL0071"));
        				this.dsSave8.setColumn(nrow, "AM_PL0002", this.dsList8.getColumn(i, "AM_PL0002"));
        				this.dsSave8.setColumn(nrow, "AM_PL0011", this.dsList8.getColumn(i, "AM_PL0011"));
        				this.dsSave8.setColumn(nrow, "AM_PL0043", this.dsList8.getColumn(i, "AM_PL0043"));
        				this.dsSave8.setColumn(nrow, "AM_PL0066", this.dsList8.getColumn(i, "AM_PL0066"));
        				this.dsSave8.setColumn(nrow, "AM_PL0058", this.dsList8.getColumn(i, "AM_PL0058"));

        				break;
        		}
        	}

        	if (this.dsSave8.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save8=dsSave8";
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

        this.fnSaveAction3 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab3)) return;

        	this.dsSave3 = new Dataset();
        	this.dsSave3.addColumn("TY_WRK", "string");
        	this.dsSave3.addColumn("ID_USER", "string");
        	this.dsSave3.addColumn("CD_VENDOR", "string");
        	this.dsSave3.addColumn("DT_INPUT", "string");
        	this.dsSave3.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave3.addColumn("CD_COSTCLASS", "string");
        	this.dsSave3.addColumn("CD_LICCOST", "string");
        	this.dsSave3.addColumn("TY_REGIST", "string");
        	this.dsSave3.addColumn("RM_BIGO", "string");
        	this.dsSave3.addColumn("TY_GUBUN", "string");
        	this.dxGridTab3.updateToDataset();

        	this.dsSave3.clearData();

        	for (var i = 0; i < this.dsList3.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList3, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave3.addRow();
        				this.dsSave3.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave3.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave3.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave3.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave3.setColumn(nrow, "NO_SEQ", this.dsList3.getColumn(i, "NO_SEQ"));
        				this.dsSave3.setColumn(nrow, "CD_COSTCLASS", this.dsList3.getColumn(i, "CD_COSTCLASS"));
        				this.dsSave3.setColumn(nrow, "CD_LICCOST", this.dsList3.getColumn(i, "CD_LICCOST"));
        				this.dsSave3.setColumn(nrow, "TY_REGIST", this.dsList3.getColumn(i, "TY_REGIST"));
        				this.dsSave3.setColumn(nrow, "RM_BIGO", this.dsList3.getColumn(i, "RM_BIGO"));
        				this.dsSave3.setColumn(nrow, "TY_GUBUN", this.dsList3.getColumn(i, "TY_GUBUN"));
        				break;
        		}
        	}

        	if (this.dsSave3.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save3=dsSave3";
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
        this.fnSaveAction4 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab4)) return;

        	this.dsSave4 = new Dataset();
        	this.dsSave4.addColumn("TY_WRK", "string");
        	this.dsSave4.addColumn("ID_USER", "string");
        	this.dsSave4.addColumn("CD_VENDOR", "string");
        	this.dsSave4.addColumn("DT_INPUT", "string");
        	this.dsSave4.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave4.addColumn("DS_NAME", "string");
        	this.dsSave4.addColumn("DT_BIRTHDAY", "string");
        	this.dsSave4.addColumn("DS_LEVEL", "string");
        	this.dsSave4.addColumn("DS_CHARGE", "string");
        	this.dsSave4.addColumn("AT_ADDRESS", "string");
        	this.dsSave4.addColumn("NO_TEL", "string");
        	this.dsSave4.addColumn("DS_EMIALID", "string");
        	this.dsSave4.addColumn("DS_FINALSCHOOL", "string");
        	this.dsSave4.addColumn("DS_MAJORFIELD", "string");

        	this.dxGridTab4.updateToDataset();

        	this.dsSave4.clearData();

        	for (var i = 0; i < this.dsList4.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList4, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave4.addRow();
        				this.dsSave4.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave4.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave4.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave4.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave4.setColumn(nrow, "NO_SEQ", this.dsList4.getColumn(i, "NO_SEQ"));
        				this.dsSave4.setColumn(nrow, "DS_NAME", this.dsList4.getColumn(i, "DS_NAME"));
        				this.dsSave4.setColumn(nrow, "DT_BIRTHDAY", this.dsList4.getColumn(i, "DT_BIRTHDAY"));
        				this.dsSave4.setColumn(nrow, "DS_LEVEL", this.dsList4.getColumn(i, "DS_LEVEL"));
        				this.dsSave4.setColumn(nrow, "DS_CHARGE", this.dsList4.getColumn(i, "DS_CHARGE"));
        				this.dsSave4.setColumn(nrow, "AT_ADDRESS", this.dsList4.getColumn(i, "AT_ADDRESS"));
        				this.dsSave4.setColumn(nrow, "NO_TEL", this.dsList4.getColumn(i, "NO_TEL"));
        				this.dsSave4.setColumn(nrow, "DS_EMIALID", this.dsList4.getColumn(i, "DS_EMIALID"));
        				this.dsSave4.setColumn(nrow, "DS_FINALSCHOOL", this.dsList4.getColumn(i, "DS_FINALSCHOOL"));
        				this.dsSave4.setColumn(nrow, "DS_MAJORFIELD", this.dsList4.getColumn(i, "DS_MAJORFIELD"));

        				break;
        		}
        	}

        	if (this.dsSave4.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save4=dsSave4";
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

        };*/

        this.fnSaveAction10 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab10)) return;

        	this.dsSave10 = new Dataset();
        	this.dsSave10.addColumn("TY_WRK", "string");
        	this.dsSave10.addColumn("ID_USER", "string");
        	this.dsSave10.addColumn("CD_VENDOR", "string");
        	this.dsSave10.addColumn("DT_INPUT", "string");
        	this.dsSave10.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave10.addColumn("CD_LICENSE", "string");
        	this.dsSave10.addColumn("AT_WORKADDR", "string");
        	this.dsSave10.addColumn("DS_CONST", "string");
        	this.dsSave10.addColumn("DS_VENDOR", "string");
        	this.dsSave10.addColumn("CD_ORDER", "string");
        	this.dsSave10.addColumn("DS_ORDER", "string");
        	this.dsSave10.addColumn("DT_CONT", "string");
        	this.dsSave10.addColumn("FR_WORK", "string");
        	this.dsSave10.addColumn("TO_WORK", "string");
        	this.dsSave10.addColumn("AM_BTT_UNCOMPLETED", "bigdecimal");
        	this.dsSave10.addColumn("AM_COMPLETED", "bigdecimal");
        	this.dsSave10.addColumn("AM_CONTRACTPRO", "bigdecimal");
        	this.dsSave10.addColumn("AM_UNCOMPLETED", "bigdecimal");
        	this.dsSave10.addColumn("RM_OUTLINE", "string");
        	this.dsSave10.addColumn("YN_TOP30", "string");
        	this.dsSave10.addColumn("YR_RESULT", "string");

        	this.dxGridTab10.updateToDataset();

        	this.dsSave10.clearData();

        	for (var i = 0; i < this.dsList10.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList10, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave10.addRow();

        				this.dsSave10.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave10.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave10.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave10.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave10.setColumn(nrow, "NO_SEQ", this.dsList10.getColumn(i, "NO_SEQ"));
        				this.dsSave10.setColumn(nrow, "CD_LICENSE", this.dsList10.getColumn(i, "CD_LICENSE"));
        				this.dsSave10.setColumn(nrow, "AT_WORKADDR", this.dsList10.getColumn(i, "AT_WORKADDR"));
        				this.dsSave10.setColumn(nrow, "DS_CONST", this.dsList10.getColumn(i, "DS_CONST"));
        				this.dsSave10.setColumn(nrow, "DS_VENDOR", this.dsList10.getColumn(i, "DS_VENDOR"));
        				this.dsSave10.setColumn(nrow, "CD_ORDER", this.dsList10.getColumn(i, "CD_ORDER"));
        				this.dsSave10.setColumn(nrow, "DS_ORDER", this.dsList10.getColumn(i, "DS_ORDER"));
        				this.dsSave10.setColumn(nrow, "DT_CONT", this.dsList10.getColumn(i, "DT_CONT"));
        				this.dsSave10.setColumn(nrow, "FR_WORK", this.dsList10.getColumn(i, "FR_WORK"));
        				this.dsSave10.setColumn(nrow, "TO_WORK", this.dsList10.getColumn(i, "TO_WORK"));
        				this.dsSave10.setColumn(nrow, "AM_BTT_UNCOMPLETED", this.dsList10.getColumn(i, "AM_BTT_UNCOMPLETED"));
        				this.dsSave10.setColumn(nrow, "AM_COMPLETED", this.dsList10.getColumn(i, "AM_COMPLETED"));
        				this.dsSave10.setColumn(nrow, "AM_CONTRACTPRO", this.dsList10.getColumn(i, "AM_CONTRACTPRO"));
        				this.dsSave10.setColumn(nrow, "AM_UNCOMPLETED", this.dsList10.getColumn(i, "AM_UNCOMPLETED"));
        				this.dsSave10.setColumn(nrow, "RM_OUTLINE", this.dsList10.getColumn(i, "RM_OUTLINE"));
        				this.dsSave10.setColumn(nrow, "YN_TOP30", this.dsList10.getColumn(i, "YN_TOP30"));
        				this.dsSave10.setColumn(nrow, "YR_RESULT", this.dsList10.getColumn(i, "YR_RESULT"));
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

        this.fnSaveAction11 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab11)) return;

        	this.dsSave11 = new Dataset();
        	this.dsSave11.addColumn("TY_WRK", "string");
        	this.dsSave11.addColumn("ID_USER", "string");
        	this.dsSave11.addColumn("CD_VENDOR", "string");
        	this.dsSave11.addColumn("DT_INPUT", "string");
        	this.dsSave11.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave11.addColumn("DS_ITEM", "string");
        	this.dsSave11.addColumn("DS_DELIVERY", "string");
        	this.dsSave11.addColumn("NO_DELEVERY", "string");
        	this.dsSave11.addColumn("AM_CONT", "bigdecimal");
        	this.dsSave11.addColumn("QN_ITEM", "bigdecimal");
        	this.dsSave11.addColumn("SZ_SIZE", "string");
        	this.dsSave11.addColumn("FR_DELIVERY", "string");
        	this.dsSave11.addColumn("TO_DELIVERY", "string");

        	this.dxGridTab11.updateToDataset();

        	this.dsSave11.clearData();

        	for (var i = 0; i < this.dsList11.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList11, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave11.addRow();

        				this.dsSave11.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave11.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave11.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave11.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave11.setColumn(nrow, "NO_SEQ", this.dsList11.getColumn(i, "NO_SEQ"));
        				this.dsSave11.setColumn(nrow, "DS_ITEM", this.dsList11.getColumn(i, "DS_ITEM"));
        				this.dsSave11.setColumn(nrow, "DS_DELIVERY", this.dsList11.getColumn(i, "DS_DELIVERY"));
        				this.dsSave11.setColumn(nrow, "NO_DELEVERY", this.dsList11.getColumn(i, "NO_DELEVERY"));
        				this.dsSave11.setColumn(nrow, "AM_CONT", this.dsList11.getColumn(i, "AM_CONT"));
        				this.dsSave11.setColumn(nrow, "QN_ITEM", this.dsList11.getColumn(i, "QN_ITEM"));
        				this.dsSave11.setColumn(nrow, "SZ_SIZE", this.dsList11.getColumn(i, "SZ_SIZE"));
        				this.dsSave11.setColumn(nrow, "FR_DELIVERY", this.dsList11.getColumn(i, "FR_DELIVERY"));
        				this.dsSave11.setColumn(nrow, "TO_DELIVERY", this.dsList11.getColumn(i, "TO_DELIVERY"));

        				break;
        		}
        	}

        	if (this.dsSave11.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save11=dsSave11";
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

        this.fnTabCtr=function(){
        	var tidx = this.divData.form.tabData.tabindex;
        	if(tidx == 13 || tidx == 14 || tidx == 16 || tidx == 17){
        		this.FormBtns.Del.set_enable(false);
        		this.FormBtns.Save.set_enable(false);
        		this.FormBtns.Add.set_enable(false);
        	}
        };

        this.fnSelectTab2 = function(){
        	this.dsSelect0.clearData();
        	this.dsSelect0.addRow();
        	this.dsSelect0.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect0.setColumn(0, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        	this.dsSelect0.setColumn(0, "CD_MODULE", this.dsSearch.getColumn(0, "DS_PARAM"));

        	var strSvcId    = "select2";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select2=dsSelect0";
        	var outData     = "dsList2=select20 dsListSub2=select21";
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


        this.divData_tabData_tab3_div_PR1_btnUploadP_onclick = function(obj,e)
        {
        		var fileup0 = this.fileup0;
        		fileup0.filefindbuttons.upfile0.click();
        };

        this.fileup1_onitemchanged = function(obj,e) {
        	var row = obj.row;

        	if(obj.filelist.length > 0) {

        		var filename = obj.filelist[0].filename;
        		var fileext = filename.toLocaleLowerCase().substring(filename.lastIndexOf('.')+1);

        		if(!this.gfnIsExistInArray(this.fileConfig.allowTypes, fileext)) {
        			this.gfnAlert("이미지 파일(" + this.fileConfig.allowTypes.join(',') + ")을 선택하세요.");
        			return;
        		}

        		this.keys = Object.keys(this.fileuploads0);
        		for(var i = 0; i < this.keys.length; i++) {
        			var fileup = this.fileuploads0[this.keys[i]];
        			var sFilePath = fileup.value;
        			var dirExpt = sFilePath.lastIndexOf("\\")+1;
        			var sFileName = sFilePath.substr(dirExpt);

        			var key = this.dsSearch.getColumn(0, "CD_VENDOR");
        			var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl + key+"/1";

        			fileup.upload(sUploadUrl);
        		}
        	}
        }

        this.fileup1_onsuccess = function(obj,e) {
        	if(!this.gfnIsNull(this.dsList2.getColumn(0, "DS_PRESIDENT_IMG"))){
        		this.dsDeleteFile.clearData();
        		var nrow = this.dsDeleteFile.addRow();
        		var key = this.dsSearch.getColumn(nrow, "CD_VENDOR")+"/1";
        		this.dsDeleteFile.setColumn(nrow, "filepath", this.filepath + key);
        		this.dsDeleteFile.setColumn(nrow, "filename", this.dsList2.getColumn(0, "DS_PRESIDENT_IMG"));
        	}
        	this.fnFileUploadGo("1",  obj.filelist[0].filename);
        };

        this.fileup1_onerror = function(obj,e) {

        };

        this.divData_tabData_tab3_div_PR1_objSubGrid21_onlbuttondown = function(obj,e)
        {
        	this.focusgridid = obj;
        };

        this.fnImageView = function() {

        	this.dsImageFile.clearData();
        	if(!this.gfnIsNull(this.dsList2.getColumn(0, "DS_PRESIDENT_IMG"))){
        		var nrow = this.dsImageFile.addRow();
        		var key = this.dsSearch.getColumn(0, "CD_VENDOR")+"/1";
        		this.dsImageFile.setColumn(nrow, "filepath", this.filepath + key);
        		this.dsImageFile.setColumn(nrow, "filename", this.dsList2.getColumn(0, "DS_PRESIDENT_IMG"));
        	}

        	if(!this.gfnIsNull(this.dsList2.getColumn(0, "DS_COMPRESIDENT1_IMG"))){
        		var nrow = this.dsImageFile.addRow();
        		var key = this.dsSearch.getColumn(0, "CD_VENDOR")+"/2";
        		this.dsImageFile.setColumn(nrow, "filepath", this.filepath + key);
        		this.dsImageFile.setColumn(nrow, "filename", this.dsList2.getColumn(0, "DS_COMPRESIDENT1_IMG"));
        	}

        	if(!this.gfnIsNull(this.dsList2.getColumn(0, "DS_COMPRESIDENT2_IMG"))){
        		var nrow = this.dsImageFile.addRow();
        		var key = this.dsSearch.getColumn(0, "CD_VENDOR")+"/3";
        		this.dsImageFile.setColumn(nrow, "filepath", this.filepath + key);
        		this.dsImageFile.setColumn(nrow, "filename", this.dsList2.getColumn(0, "DS_COMPRESIDENT2_IMG"));
        	}

        	// 서버 이미지파일 base64 로 받아오기
        	var strSvcId    = "imagefile";
        	var strSvcType  = "file/imageFile";
        	var inProc		= "";
        	var inData      = "input=dsImageFile";
        	var outData     = "dsImageFile=input";
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

        this.divData_tabData_tab3_div_PR1_btnUploadP2_onclick = function(obj,e)
        {
        	var fileup1 = this.fileup1;
        	fileup1.filefindbuttons.upfile0.click();
        };



        this.divData_tabData_tab3_div_PR1_btnUploadP3_onclick = function(obj,e)
        {
        	var fileup2 = this.fileup2;
        	fileup2.filefindbuttons.upfile0.click();
        };

        this.fileup2_onitemchanged = function(obj,e) {
        	var row = obj.row;
        	if(obj.filelist.length > 0) {
        		var filename = obj.filelist[0].filename;
        		var fileext = filename.toLocaleLowerCase().substring(filename.lastIndexOf('.')+1);

        		if(!this.gfnIsExistInArray(this.fileConfig.allowTypes, fileext)) {
        			this.gfnAlert("이미지 파일(" + this.fileConfig.allowTypes.join(',') + ")을 선택하세요.");
        			return;
        		}

        		this.keys = Object.keys(this.fileuploads1);
        		for(var i = 0; i < this.keys.length; i++) {
        			var fileup = this.fileuploads1[this.keys[i]];
        			var sFilePath = fileup.value;
        			var dirExpt = sFilePath.lastIndexOf("\\")+1;
        			var sFileName = sFilePath.substr(dirExpt);

        			var key = this.dsSearch.getColumn(0, "CD_VENDOR");
        			var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl + key+"/2";
        			fileup.upload(sUploadUrl);
        		}
        	}
        }

        this.fileup2_onsuccess = function(obj,e) {
        	if(!this.gfnIsNull(this.dsList2.getColumn(0, "DS_COMPRESIDENT1_IMG"))){
        		this.dsDeleteFile.clearData();
        		var nrow = this.dsDeleteFile.addRow();
        		var key = this.dsSearch.getColumn(nrow, "CD_VENDOR")+"/2";
        		this.dsDeleteFile.setColumn(nrow, "filepath", this.filepath + key);
        		this.dsDeleteFile.setColumn(nrow, "filename", this.dsList2.getColumn(0, "DS_COMPRESIDENT1_IMG"));
        	}

        	this.fnFileUploadGo("2",  obj.filelist[0].filename);
        };

        this.fileup2_onerror = function(obj,e) {

        };

        this.fileup3_onitemchanged = function(obj,e) {
        	var row = obj.row;
        	if(obj.filelist.length > 0) {
        		var filename = obj.filelist[0].filename;
        		var fileext = filename.toLocaleLowerCase().substring(filename.lastIndexOf('.')+1);

        		if(!this.gfnIsExistInArray(this.fileConfig.allowTypes, fileext)) {
        			this.gfnAlert("이미지 파일(" + this.fileConfig.allowTypes.join(',') + ")을 선택하세요.");
        			return;
        		}

        		this.keys = Object.keys(this.fileuploads2);
        		for(var i = 0; i < this.keys.length; i++) {
        			var fileup = this.fileuploads2[this.keys[i]];
        			var sFilePath = fileup.value;
        			var dirExpt = sFilePath.lastIndexOf("\\")+1;
        			var sFileName = sFilePath.substr(dirExpt);

        			var key = this.dsSearch.getColumn(0, "CD_VENDOR");
        			var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl + key+"/3";
        			fileup.upload(sUploadUrl);
        		}
        	}
        }

        this.fileup3_onsuccess = function(obj,e) {
        	if(!this.gfnIsNull(this.dsList2.getColumn(0, "DS_COMPRESIDENT2_IMG"))){
        		this.dsDeleteFile.clearData();
        		var nrow = this.dsDeleteFile.addRow();
        		var key = this.dsSearch.getColumn(nrow, "CD_VENDOR")+"/3";
        		this.dsDeleteFile.setColumn(nrow, "filepath", this.filepath + key);
        		this.dsDeleteFile.setColumn(nrow, "filename", this.dsList2.getColumn(0, "DS_COMPRESIDENT2_IMG"));
        	}

        	this.fnFileUploadGo("3",  obj.filelist[0].filename);
        };

        this.fileup3_onerror = function(obj,e) {

        };

        this.fnFileUploadGo = function(str, filenm){
        	this.dsFileUp2.clearData();
        	this.dsFileUp2.addRow();
        	this.dsFileUp2.setColumn(0, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        	this.dsFileUp2.setColumn(0, "TY_GUBUN", str);
        	this.dsFileUp2.setColumn(0, "IMG_NM", filenm);
        	this.dsFileUp2.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	trace(this.dsFileUp2.saveXML());
        	trace(this.dsDeleteFile.saveXML());
        	var strSvcId    = "update2";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "fileup2=dsFileUp2";
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

        	if(this.dsDeleteFile.rowcount > 0) {

        		var strSvcId    = "deletefile";
        		var strSvcType  = "file/deleteFile";
        		var inProc		= "";
        		var inData      = "input=dsDeleteFile";
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



        this.fnSaveAction2 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab2Sub1)) return;
        	if (!this.gfnGridValidate(this.dxGridTab2Sub2)) return;
        	if (!this.gfnGridValidate(this.dxGridTab2Sub3)) return;

        	this.dsSave2 = new Dataset();
        	this.dsSave2.addColumn("TY_WRK", "string");
        	this.dsSave2.addColumn("ID_USER", "string");
        	this.dsSave2.addColumn("CD_VENDOR", "string");
        	this.dsSave2.addColumn("DT_INPUT", "string");
        	this.dsSave2.addColumn("TY_GUBUN", "string");
        	this.dsSave2.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave2.addColumn("DT_CAREER", "string");
        	this.dsSave2.addColumn("CD_CAREER", "string");
        	this.dsSave2.addColumn("DS_CAREER", "string");
        	this.dsSave2.addColumn("RM_BIGO", "string");

        	this.dxGridTab2Sub1.updateToDataset();
        	this.dxGridTab2Sub2.updateToDataset();
        	this.dxGridTab2Sub3.updateToDataset();

        	this.dsSave2.clearData();

        	for(var i = 0; i < this.dsListSub21.rowcount;i++){
        		var flag = this.gfnGetFlag(this.dsListSub21, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave2.addRow();

        				this.dsSave2.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave2.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave2.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave2.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave2.setColumn(nrow, "TY_GUBUN", "1");
        				this.dsSave2.setColumn(nrow, "NO_SEQ", this.dsListSub21.getColumn(i, "NO_SEQ"));
        				this.dsSave2.setColumn(nrow, "DT_CAREER", this.dsListSub21.getColumn(i, "DT_CAREER"));
        				this.dsSave2.setColumn(nrow, "CD_CAREER", this.dsListSub21.getColumn(i, "CD_CAREER"));
        				this.dsSave2.setColumn(nrow, "DS_CAREER", this.dsListSub21.getColumn(i, "DS_CAREER"));
        				this.dsSave2.setColumn(nrow, "RM_BIGO", this.dsListSub21.getColumn(i, "RM_BIGO"));
        			break;
        		}
        	}

        	for(var i = 0; i < this.dsListSub22.rowcount;i++){
        		var flag = this.gfnGetFlag(this.dsListSub22, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave2.addRow();

        				this.dsSave2.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave2.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave2.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave2.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave2.setColumn(nrow, "TY_GUBUN", "2");
        				this.dsSave2.setColumn(nrow, "NO_SEQ", this.dsListSub22.getColumn(i, "NO_SEQ"));
        				this.dsSave2.setColumn(nrow, "DT_CAREER", this.dsListSub22.getColumn(i, "DT_CAREER"));
        				this.dsSave2.setColumn(nrow, "CD_CAREER", this.dsListSub22.getColumn(i, "CD_CAREER"));
        				this.dsSave2.setColumn(nrow, "DS_CAREER", this.dsListSub22.getColumn(i, "DS_CAREER"));
        				this.dsSave2.setColumn(nrow, "RM_BIGO", this.dsListSub22.getColumn(i, "RM_BIGO"));
        			break;
        		}
        	}

        	for(var i = 0; i < this.dsListSub23.rowcount;i++){
        		var flag = this.gfnGetFlag(this.dsListSub23, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave2.addRow();

        				this.dsSave2.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave2.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave2.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave2.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave2.setColumn(nrow, "TY_GUBUN", "3");
        				this.dsSave2.setColumn(nrow, "NO_SEQ", this.dsListSub23.getColumn(i, "NO_SEQ"));
        				this.dsSave2.setColumn(nrow, "DT_CAREER", this.dsListSub23.getColumn(i, "DT_CAREER"));
        				this.dsSave2.setColumn(nrow, "CD_CAREER", this.dsListSub23.getColumn(i, "CD_CAREER"));
        				this.dsSave2.setColumn(nrow, "DS_CAREER", this.dsListSub23.getColumn(i, "DS_CAREER"));
        				this.dsSave2.setColumn(nrow, "RM_BIGO", this.dsListSub23.getColumn(i, "RM_BIGO"));
        			break;
        		}
        	}

        	if (this.dsSave2.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save2=dsSave2";
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

        this.dsList0_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		switch(e.columnid){
        			case "NO_TECHEXPERT" :
        			case "NO_ENGINEER1" :
        			case "NO_NONLICENSE" :
        			case "NO_MANAGE" :
        				var notech = this.gfnIsNull(this.dsList0.getColumn(0, "NO_TECHEXPERT"))?0:Number(this.dsList0.getColumn(0, "NO_TECHEXPERT"));
        				var noeng1 = this.gfnIsNull(this.dsList0.getColumn(0, "NO_ENGINEER1"))?0:Number(this.dsList0.getColumn(0, "NO_ENGINEER1"));
        				var nolic = this.gfnIsNull(this.dsList0.getColumn(0, "NO_NONLICENSE"))?0:Number(this.dsList0.getColumn(0, "NO_NONLICENSE"));
        				var noman = this.gfnIsNull(this.dsList0.getColumn(0, "NO_MANAGE"))?0:Number(this.dsList0.getColumn(0, "NO_MANAGE"));

        				this.dsList0.setColumn(0, "NO_TOTAL", notech + noeng1 + nolic + noman);
        			break;
        		}
        	}
        };

        this.fnSaveAction4 = function(){
        	if (!this.gfnGridValidate(this.dxGridTab4)) return;

        	this.dsSave18 = new Dataset();
        	this.dsSave18.addColumn("TY_WRK", "string");
        	this.dsSave18.addColumn("ID_USER", "string");
        	this.dsSave18.addColumn("CD_VENDOR", "string");
        	this.dsSave18.addColumn("DT_INPUT", "string");
        	this.dsSave18.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave18.addColumn("CD_ITEM", "string");
        	this.dsSave18.addColumn("RM_BIGO", "string");
        	this.dsSave18.addColumn("TY_REGIST", "string");
        	this.dsSave18.addColumn("TY_GUBUN", "string");

        	this.dxGridTab4.updateToDataset();

        	this.dsSave18.clearData();

        	for (var i = 0; i < this.dsList4.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList4, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave18.addRow();

        				this.dsSave18.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave18.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave18.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave18.setColumn(nrow, "DT_INPUT", this.dsSearch.getColumn(0, "DT_INPUT"));
        				this.dsSave18.setColumn(nrow, "NO_SEQ", this.dsList4.getColumn(i, "NO_SEQ"));
        				this.dsSave18.setColumn(nrow, "CD_ITEM", this.dsList4.getColumn(i, "CD_ITEM"));
        				this.dsSave18.setColumn(nrow, "RM_BIGO", this.dsList4.getColumn(i, "RM_BIGO"));
        				this.dsSave18.setColumn(nrow, "TY_REGIST", this.dsList4.getColumn(i, "TY_REGIST"));
        				this.dsSave18.setColumn(nrow, "TY_GUBUN", this.dsList4.getColumn(i, "TY_GUBUN"));
        				break;
        		}
        	}

        	if (this.dsSave18.rowcount == 0) return;

        	var strSvcId    = "savec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save18=dsSave18";
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

        this.fnFileInfo = function(obj, e){
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR")))return;

        	var fileManager = {};
        		fileManager.CD_GUBUN = "DC10";
        		fileManager.CD_DIR = [this.dsSearch.getColumn(0, "CD_VENDOR")];
        		fileManager.IS_READONLY = false;
        		this.gfnFileManager(fileManager, "fnFileCallback");
        };

        this.fnFileInfo_Corp = function(obj, e){
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR")))return;

        	var fileManager = {};
        		fileManager.CD_GUBUN = "DC11";
        		fileManager.CD_DIR = [this.dsSearch.getColumn(0, "CD_VENDOR")];
        		fileManager.IS_READONLY = false;
        		this.gfnFileManager(fileManager, "fnFileCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab3.form.div_PR1.form.btnUploadP.addEventHandler("onclick",this.divData_tabData_tab3_div_PR1_btnUploadP_onclick,this);
            this.divData.form.tabData.tab3.form.div_PR1.form.objSubGrid21.addEventHandler("onlbuttondown",this.divData_tabData_tab3_div_PR1_objSubGrid21_onlbuttondown,this);
            this.divData.form.tabData.tab3.form.div_PR2.form.btnUploadP.addEventHandler("onclick",this.divData_tabData_tab3_div_PR1_btnUploadP2_onclick,this);
            this.divData.form.tabData.tab3.form.div_PR2.form.objSubGrid22.addEventHandler("onlbuttondown",this.divData_tabData_tab3_div_PR1_objSubGrid21_onlbuttondown,this);
            this.divData.form.tabData.tab3.form.div_PR3.form.btnUploadP.addEventHandler("onclick",this.divData_tabData_tab3_div_PR1_btnUploadP3_onclick,this);
            this.divData.form.tabData.tab3.form.div_PR3.form.objSubGrid23.addEventHandler("onlbuttondown",this.divData_tabData_tab3_div_PR1_objSubGrid21_onlbuttondown,this);
            this.dsList0.addEventHandler("onvaluechanged",this.dsList0_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCA_REGISTDETAIL_OLD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
