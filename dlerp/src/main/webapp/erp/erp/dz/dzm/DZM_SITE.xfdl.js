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
            this.set_titletext("프로젝트정보관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1410,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_KONGSA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"AT_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"AT_SITE2\" type=\"STRING\" size=\"256\"/><Column id=\"AR_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DESI\" type=\"STRING\" size=\"256\"/><Column id=\"AT_SITEORM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BONBU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BONBU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SAUPCENTER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAUPCENTER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SALE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SALE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_INCMSTRT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_INCMSTRT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SAUPKIND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAUPKIND\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_CONTRCT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DIV_CONTRCT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_KONGSA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TY_KONGSA\" type=\"STRING\" size=\"256\"/><Column id=\"TY_KONG_PRO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_KONG_PRO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_END\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DOGEUB_PROV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DOGEUB_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DOGEUB_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_JOINT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DOCOVOL_PROV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DOCOVOL_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DOCOVOL_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_JUGAN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_SOCOVOL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_TAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_ZERO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SOCOVOL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SITEEBGT\" type=\"INT\" size=\"256\"/><Column id=\"RT_ASRAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONT_PROV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONT_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONT_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SILHENG_ORI\" type=\"INT\" size=\"256\"/><Column id=\"AM_OCOCONT_PROV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_OCOCONT_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_OCOCONT_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SOCOVOL_ORI\" type=\"INT\" size=\"256\"/><Column id=\"DT_GEYAK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHAKGONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_OJUNGONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CJUNGONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PERD_MD\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CCNSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HAJA_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HAJA_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HAJA\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GUAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_GUAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECEIVE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PLOTTAGEM2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_PLOTTAGEPY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_FLOORM2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_FLOORPY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_BUILDRATIO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_SLLTSQMS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_TOTFLOORM2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_TOTFLOORPY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_FLOORRATIO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_SLLTLARSQMS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_HOUSEHOLDS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OCOTOTFLOORM2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_OCOTOTFLOORPY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_SCALE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STRUCT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_USEAREA\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST_STRUCT\" type=\"STRING\" size=\"256\"/><Column id=\"GR_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PMDEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CLIENT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BALJU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BALJU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUYO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DESIGN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GAMRI1\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GAMRI1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GAMRI2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GAMRI2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GAMRI3\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GAMRI3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAFE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SAFE\" type=\"STRING\" size=\"256\"/><Column id=\"RK_SAFE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_QUAL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_QUAL\" type=\"STRING\" size=\"256\"/><Column id=\"RK_QUAL\" type=\"STRING\" size=\"256\"/><Column id=\"RT_JIBUN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_RSOCOVOL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_DELAYIJA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"RT_CONT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_CURRENCY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXCHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"RT_EXCHANGE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_FOREIGN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DESIGNPRICE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_DESIGNPRICE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PREPRICE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_PREPRICE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_PROGRESS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHAKGONG\" type=\"STRING\" size=\"256\"/><Column id=\"RT_HAJA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_UPSCALE\" type=\"INT\" size=\"256\"/><Column id=\"DS_DOWNSCALE\" type=\"INT\" size=\"256\"/><Column id=\"DS_MAINSTREET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PARKING\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCEPTUSE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ROOF\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LANDSCAPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SB\" type=\"STRING\" size=\"256\"/><Column id=\"GU_SB\" type=\"STRING\" size=\"256\"/><Column id=\"DS_KB\" type=\"STRING\" size=\"256\"/><Column id=\"GU_KB\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WIIM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"RT_ILBAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GU_EPC\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ILBAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_SILJUKINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GSCOST\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MAP\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SJDOGEUB_PROV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SJDOGEUB_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SJDOCOVOL_PROV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SJDOCOVOL_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTSOCOVOL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_RP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GISUNG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BONSA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_GISUNG_JIK\" type=\"STRING\" size=\"256\"/><Column id=\"GR_COSTFIND\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SILHENGCHA\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OPENCHA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUMUN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_COMMU\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ELEC\" type=\"STRING\" size=\"256\"/><Column id=\"YN_FIRE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GASILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DAEPYO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DOLGWAN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HAJA\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BONSILCON\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DOKUBSTD\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEMAND\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MAINSITE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BIDPLAZAVIEW\" type=\"STRING\" size=\"256\"/><Column id=\"CD_STDUPRC\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PROFIT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNSTKND\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EBGT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EBGT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SLLTCONT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PRDV\" type=\"STRING\" size=\"256\"/><Column id=\"DT_MIBLSCH\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INVMRVW_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INVMRVW_EBGT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_INVMRVW\" type=\"STRING\" size=\"256\"/><Column id=\"AM_OCOVOLINVMRVW_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_OCOVOLINVMRVW_EBGT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OCOVOLINVMRVW\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ASEND\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RCEND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DWZPR_SITE_SELECT</Col></Row><Row><Col id=\"TARGET\">save1</Col><Col id=\"SP\">DWZPR_SITE_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SAVE_01</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DWZPR_SITEORDPLC_SELECT</Col></Row><Row><Col id=\"TARGET\">save2</Col><Col id=\"SP\">DWZPR_SITEORDPLC_SAVE</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DWZPR_SITEJOINTCOMP_SELECT</Col></Row><Row><Col id=\"TARGET\">save3</Col><Col id=\"SP\">DWZPR_SITEJOINTCOMP_SAVE</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DWZPR_SITEPSNNO_SELECT</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DWZPR_SITESALCURST_SELECT</Col></Row><Row><Col id=\"TARGET\">select6</Col><Col id=\"SP\">DWZPR_SITEHDSTOCK_SELECT</Col></Row><Row><Col id=\"TARGET\">save6</Col><Col id=\"SP\">DWZPR_SITEHDSTOCK_SAVE</Col></Row><Row><Col id=\"TARGET\">select7</Col><Col id=\"SP\">DWZPR_SITECONTRCT_SELECT</Col></Row><Row><Col id=\"TARGET\">select8</Col><Col id=\"SP\">DWZPR_SITESILHENG_SELECT</Col></Row><Row><Col id=\"TARGET\">select9</Col><Col id=\"SP\">DWZPR_SITEREQBILCLT_SELECT</Col></Row><Row><Col id=\"TARGET\">save9</Col><Col id=\"SP\">DWZPR_SITEREQBILCLT_SAVE</Col></Row><Row><Col id=\"TARGET\">select10</Col><Col id=\"SP\">DWZPR_SITEPRSC_SELECT</Col></Row><Row><Col id=\"TARGET\">save10</Col><Col id=\"SP\">DWZPR_SITEPRSC_SAVE</Col></Row><Row><Col id=\"TARGET\">execute10</Col><Col id=\"SP\">DWZPR_SITEPRSC_EXECUTE</Col></Row><Row><Col id=\"TARGET\">select11</Col><Col id=\"SP\">DWZPR_SITEJOINTREQCLT_SELECT</Col></Row><Row><Col id=\"TARGET\">select12</Col><Col id=\"SP\">DWZPR_SITEDETAILS_SELECT</Col></Row><Row><Col id=\"TARGET\">save12</Col><Col id=\"SP\">DWZPR_SITEDETAILS_SAVE</Col></Row><Row><Col id=\"TARGET\">select_chrpsn</Col><Col id=\"SP\">DWZPR_SITECHRPSN_SELECT</Col></Row><Row><Col id=\"TARGET\">save_chrpsn</Col><Col id=\"SP\">DWZPR_SITECHRPSN_SAVE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DWZPR_AR_IDMANAGE_PW_INIT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_WRK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_USE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">예</Col></Row><Row><Col id=\"DS_CODE\">아니오</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAR_SITE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsList8", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList7", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList9", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">DS_KONGSA</Col><Col id=\"DS_FIELD\">공사계약명</Col></Row><Row><Col id=\"CD_FIELD\">NO_ZIP</Col><Col id=\"DS_FIELD\">공사소재지</Col></Row><Row><Col id=\"CD_FIELD\">AR_SITE</Col><Col id=\"DS_FIELD\">지역구분</Col></Row><Row><Col id=\"CD_FIELD\">TY_DESI</Col><Col id=\"DS_FIELD\">부서현장</Col></Row><Row><Col id=\"CD_FIELD\">AT_SITEORM</Col><Col id=\"DS_FIELD\">현장사무실</Col></Row><Row><Col id=\"CD_FIELD\">CD_BONBU</Col><Col id=\"DS_FIELD\">사업본부</Col></Row><Row><Col id=\"CD_FIELD\">CD_SAUPCENTER</Col><Col id=\"DS_FIELD\">사업관리팀</Col></Row><Row><Col id=\"CD_FIELD\">TY_KONG_PRO</Col><Col id=\"DS_FIELD\">공사현황</Col></Row><Row><Col id=\"CD_FIELD\">YN_USE</Col><Col id=\"DS_FIELD\">관리여부</Col></Row><Row><Col id=\"CD_FIELD\">DS_REMARK</Col><Col id=\"DS_FIELD\">공사개요</Col></Row><Row><Col id=\"CD_FIELD\">DT_GEYAK</Col><Col id=\"DS_FIELD\">계약일자</Col></Row><Row><Col id=\"CD_FIELD\">YN_JOINT</Col><Col id=\"DS_FIELD\">공동도급</Col></Row><Row><Col id=\"CD_FIELD\">YN_JUGAN</Col><Col id=\"DS_FIELD\">주간사</Col></Row><Row><Col id=\"CD_FIELD\">RT_SOCOVOL</Col><Col id=\"DS_FIELD\">당사지분율</Col></Row><Row><Col id=\"CD_FIELD\">DT_FROM</Col><Col id=\"DS_FIELD\">공사기간(From)</Col></Row><Row><Col id=\"CD_FIELD\">DT_TO</Col><Col id=\"DS_FIELD\">공사기간(To)</Col></Row><Row><Col id=\"CD_FIELD\">DT_OJUNGONG</Col><Col id=\"DS_FIELD\">준공일자(당초)</Col></Row><Row><Col id=\"CD_FIELD\">DT_ASEND</Col><Col id=\"DS_FIELD\">하자보수종료(예정)일자</Col></Row><Row><Col id=\"CD_FIELD\">DT_RCEND</Col><Col id=\"DS_FIELD\">잔공사종료(예정)일자</Col></Row><Row><Col id=\"CD_FIELD\">TY_SAUPKIND</Col><Col id=\"DS_FIELD\">사업형태</Col></Row><Row><Col id=\"CD_FIELD\">TY_KONGSA</Col><Col id=\"DS_FIELD\">공사유형</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListTest", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList12", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListChrpsn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransferStockmr", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","10","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0","10","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCF_SITE","ccfCD_SITE:5","10","200","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFSITE_NEW");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","36",null,null,"0","-36",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("33");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("공사개요");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTab1Title","0","0",null,"35","5",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg2");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","staTab1Title:0","115","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabelTE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAT_SITE","0","staCD_SITE:-1","115","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("공사소재지");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAT_SITEORM","0","staAT_SITE:-1","115","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("현장사무실");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","0","134","115","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_SAUPKIND","0","167","115","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("사업형태");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00","staCD_SITE:-1","35","588","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","staAT_SITE:-1","68","588","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02","staAT_SITEORM:-1","101","588","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta03","staNO_TEL:-1","134","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_FAX","sta03:-1","134","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04","staNO_FAX:-1","134","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta05","staTY_SAUPKIND:-1","167","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDIV_CONTRCT","sta03:-1","167","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("수주구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06","staDIV_CONTRCT:-1","167","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staSpace0","0","200","115","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta07","staSpace0:-1","200","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staSpace1","sta07:-1","200","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta08","staSpace1:-1","200","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staSpace2","0","233","115","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta09","staSpace2:-1","233","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staSpace3","sta07:-1","233","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta10","staSpace3:-1","233","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staSpace4","0","266","115","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta11","staSpace4:-1","266","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staSpace5","sta07:-1","266","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta12","staSpace5:-1","266","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staSpace6","0","299","115","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("하자보수종료\r\n(예정)일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta13","staSpace6:-1","299","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staSpace7","sta07:-1","299","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("잔공사종료\r\n(예정)일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta14","staSpace7:-1","299","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_END","0","staSpace6:-1","115","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("청산일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta15","staDT_END:-1","332","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staYN_USE","sta15:-1","332","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("관리여부");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta16","staYN_USE:-1","332","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK","0","staDT_END:-1","115","150",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("공사개요");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta17","staDS_REMARK:-1","staDT_END:-1","588","150",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_KONGSA","701","35","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("공사계약명");
            obj.set_cssclass("sta_WF_tablelabelTE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta18","810","35",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAR_SITE","701","68","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("지역구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta19","810","68","280","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_DESI","1089","68","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("부서/현장");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta20","1198","68",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_BONBU","701","101","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("사업본부");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta21","810","101","280","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_SAUPCENTER","1089","101","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("사업관리팀");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta22","1198","101",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_SALE","701","134","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("매출구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta23","810","134","280","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_INCMSTRT","1089","134","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("수입구조");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta24","1198","134",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_KONGSA","701","167","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("공사유형");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta25","810","167","280","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_KONG_PRO","1089","167","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("공사현황");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta26","1198","167",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTab1Title2","722","201",null,"35","19",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_text("현장담당자");
            obj.set_cssclass("sta_TITLE_Bg2");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGrid1","722","236",null,"278","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("cfCD_SITE","staCD_SITE:4","40","400","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("readonly").set("true");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfAT_SITE","staAT_SITE:4","73","255","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtAT_SITE2","ccfAT_SITE:5","74","318","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtAT_SITEORM","staAT_SITEORM:4","ccfAT_SITE:9","578","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_TEL","staNO_TEL:4","139","230","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FAX","staNO_FAX:5","139","229","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfTY_SAUPKIND","staTY_SAUPKIND:4","172","230","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_03");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfDIV_CONTRCT","staDIV_CONTRCT:5","172","229","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("");
            obj.getSetter("CDTextWidth").set("40");
            obj.getSetter("readonly").set("true");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_END","staDT_END:4","337","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Radio("crdoYN_USE","staYN_USE:7","338","130","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_USE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","staDS_REMARK:4","370","578","140",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("45");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_KONGSA","815","40",null,"24","4",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboAR_SITE","815","73","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsAR_SITE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfTY_DESI","1203","73",null,"24","4",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_DA");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfCD_BONBU","815","106","270","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_01");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfCD_SAUPCENTER","1203","106",null,"24","4",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_14");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfCD_SALE","815","139","270","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_15");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfCD_INCMSTRT","1203","139",null,"24","4",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_17");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfTY_KONGSA","815","172","270","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_02");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfTY_KONG_PRO","1203","172",null,"24","4",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_07");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new CheckBox("chk_Yncm","cfCD_SITE:20","40","95","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("108");
            obj.set_text("CM대상현장");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfTY_BALJU","119","205","230","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_04");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("109");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ASEND","staSpace6:4","304","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("79");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_RSEND","staSpace7:4","305","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("80");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("계약정보");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTab2Title","0","0","58","35",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj.set_text("계약");
            obj.set_cssclass("sta_TITLE_Bg2");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_DOGEUB_PROV","1","34","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("계약고(공급가액)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_DOCOVOL_PROV","1","67","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj.set_text("당사분(공급가액)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTab2TitleSliheng","0","100","58","35",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("3");
            obj.set_text("실행");
            obj.set_cssclass("sta_TITLE_Bg2");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_SILHENG","1","134","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("4");
            obj.set_text("확정내역(공급가액)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_SOCOVOL","1","167","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("5");
            obj.set_text("당사분(공급가액)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta00","140","34","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta01","140","67","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta02","140","134","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta03","140","167","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_DOGEUB_VAT","339","34","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("10");
            obj.set_text("(부가세액)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_DOCOVOL_VAT","339","67","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("11");
            obj.set_text("(부가세액)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staRT_SILHENG","339","134","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("12");
            obj.set_text("청산율(%)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_SITEEBGT","339","167","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("13");
            obj.set_text("현장예산");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta04","478","34","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta05","478","67","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta06","478","134","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta07","478","167","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_DOGEUB_TOT","677","34","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("18");
            obj.set_text("(합계)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_DOCOVOL_TOT","677","67","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("19");
            obj.set_text("(합계)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staRT_SOCOVOL","677","134","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("20");
            obj.set_text("분양계획금액");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staRT_ASRAMT","677","167","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("21");
            obj.set_text("당사지분율(%)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta08","816","34","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta09","816","67","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta10","816","134","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta11","816","167","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staYN_JOINT","1015","34","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("26");
            obj.set_text("공동도급");
            obj.set_cssclass("sta_WF_tablelabelTE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staYN_JUGAN","1015","67","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("27");
            obj.set_text("주간사");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staRT_TAX","1015","134","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("28");
            obj.set_text("과세율(%)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta12","1154","34",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta13","1154","67",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta14","1154","134",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTab2Title0","0","200","82","35",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("32");
            obj.set_text("투자심의");
            obj.set_cssclass("sta_TITLE_Bg2");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_INVMRVW_CONT","1","234","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("33");
            obj.set_text("전체분(계약고)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta43","140","234","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta42","140","267","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTab2Title1","0","300","82","35",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("36");
            obj.set_text("최초계약");
            obj.set_cssclass("sta_TITLE_Bg2");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_CONT_PROV","1","334","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("37");
            obj.set_text("계약고(공급가액)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_OCOCONT_PROV","1","367","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("38");
            obj.set_text("당사분(공급가액)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta15","140","334","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta16","140","367","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_CONT_VAT","339","334","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("41");
            obj.set_text("(부가세액)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_OCOCONT_VAT","339","367","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("42");
            obj.set_text("(부가세액)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta17","478","334","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta18","478","367","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_CONT_TOT","677","334","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("45");
            obj.set_text("(합계)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_OCOCONT_TOT","677","367","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("46");
            obj.set_text("(합계)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta19","816","334","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta20","816","367","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_SILHENG_ORI","1015","334","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("49");
            obj.set_text("확정내역(공급가액)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_SOCOVOL_ORI","1015","367","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("50");
            obj.set_text("당사분(공급가액)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta21","1154","334",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta22","1154","367",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTab2Title2","0","400","92","35",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("53");
            obj.set_text("공사기간");
            obj.set_cssclass("sta_TITLE_Bg2");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_GEYAK","1","434","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("54");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_tablelabelTE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_FROM_TO","1","467","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("55");
            obj.set_text("공사기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_EBGT_FORM_TO","1","500","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("56");
            obj.set_text("실행공기");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_HAJA_FROM_TO","1","533","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("57");
            obj.set_text("하자기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDS_CONDITION","1","533","140","70",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("59");
            obj.set_text("계약조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta23","140","434","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta24","140","467","538","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staBgEBGT","140","500","538","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta25","140","533","538","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta26","140","533","538","70",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_CHAKGONG","339","434","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("66");
            obj.set_text("착공일자");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta27","478","434","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_OJUNGONG","677","434","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("68");
            obj.set_text("준공일자(당초)");
            obj.set_cssclass("sta_WF_tablelabelTE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_CCNSTEM","677","467","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("69");
            obj.set_text("준공검사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staSPACE00","677","500","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("70");
            obj.set_text("가사승인일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_GUAR","677","533","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("71");
            obj.set_text("하자보수금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDS_RECEIVE","677","533","140","70",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("72");
            obj.set_text("취하조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta28","816","434","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta29","816","467","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta029","816","500","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta30","816","533","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta31","816","533",null,"70","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_CJUNGONG","1015","434","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("78");
            obj.set_text("준공일자(변경)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staSPACE0","1015","467","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("79");
            obj.set_text("입주예정일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staSPACE1","1015","500","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("80");
            obj.set_text("하자충당금율(%)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staRT_GUAR","1015","533","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("81");
            obj.set_text("하자보수율(%)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta32","1154","434",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta33","1154","467",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staBgSpace1","1154","500",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta34","1154","533",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DOGEUB_PROV","146","39","189","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("86");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DOCOVOL_PROV","146","72","189","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("87");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SILHENG","146","139","189","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("88");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SOCOVOL","146","172","189","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("89");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DOGEUB_VAT","484","39","189","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("90");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DOCOVOL_VAT","484","72","189","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("91");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_SILHENG","484","139","90","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("92");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPercent0","580","139","20","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("93");
            obj.set_text("%");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SITEEBGT","484","172","189","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("94");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DOGEUB_TOT","822","39","189","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("95");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DOCOVOL_TOT","822","72","189","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("96");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SLLTCONT","822","139","189","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("97");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_CJUNGONG","1159","439","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("98");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_SOCOVOL","822","172","90","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("99");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_MIBLSCH","1159","472","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("100");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ASRAMT","1159","505","90","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("101");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPercent1","918","172","20","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("102");
            obj.set_text("%");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPercent2","1255","505","20","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("103");
            obj.set_text("%");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Radio("crdoYN_JOINT","1165","39","170","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("104");
            obj.set_innerdataset("dsYN_USE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Radio("crdoYN_JUGAN","1165","72","160","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("105");
            obj.set_innerdataset("dsYN_USE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_TAX","1160","139","90","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("106");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPercent3","1256","139","20","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("107");
            obj.set_text("%");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_ZERO","1278","139","70","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("108");
            obj.set_text("영세율");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONT_PROV","146","339","190","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("109");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_OCOCONT_PROV","146","372","190","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("110");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONT_VAT","484","339","190","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("111");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_OCOCONT_VAT","484","372","190","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("112");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONT_TOT","822","339","190","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("113");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_OCOCONT_TOT","822","372","190","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("114");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SILHENG_ORI","1160","339","190","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("115");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SOCOVOL_ORI","1160","372","190","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("116");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_GEYAK","145","439","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("117");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","145","472","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("118");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta_range0","255","472","20","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("119");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","275","472","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("120");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PERD_MD","381","467","183","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("121");
            obj.set_value("");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_EBGT_FROM","145","505","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("122");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta_range2","255","505","20","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("123");
            obj.set_text("~");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_EBGT_TO","275","505","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("124");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_HAJA_FROM","146","538","100","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("125");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta_range1","256","538","10","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("126");
            obj.set_text("~");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_HAJA_TO","276","538","100","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("127");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_HAJA","381","538","273","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("128");
            obj.set_value("");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new TextArea("txtDS_CONDITION","145","538","528","60",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("129");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_CHAKGONG","483","439","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("130");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_OJUNGONG","821","439","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("131");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCEPTUSE","821","472","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("132");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_CCNSTEM","821","505","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("133");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_GUAR","822","538","190","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("134");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_GUAR","1160","538","90","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("135");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPercent4","1256","538","30","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("136");
            obj.set_text("%");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RECEIVE","821","538",null,"60","4",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("137");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta35","1154","167",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staRT_TAX00","1015","167","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("139");
            obj.set_text("안분율(%)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_PRDV","1160","172","90","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("140");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPercent00","1256","172","20","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("141");
            obj.set_text("%");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta37","1154","234",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("142");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta36","1154","267",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("143");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_SILHENG_ORI00","1015","234","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("144");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_SOCOVOL_ORI00","1015","267","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("145");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta39","816","234","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta38","816","267","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_INVMRVW","822","239","190","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("148");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            obj.set_format("#,##9.00");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_OCOVOLINVMRVW","822","272","190","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("149");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,##9.00");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta41","478","234","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("150");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staRT_INVMRVW","677","234","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("151");
            obj.set_text("전체분(%)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staRT_OCOVOLINVMRVW","677","267","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("152");
            obj.set_text("당사분(%)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta40","478","267","200","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_INVMRVW_EBGT","484","239","190","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("154");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_OCOVOLINVMRVW_EBGT","484","272","190","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("155");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_INVMRVW_EBGT","339","234","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("156");
            obj.set_text("전체분(예산)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_OCOVOLINVMRVW_EBGT","339","267","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("157");
            obj.set_text("당사분(예산)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_INVMRVW_CONT","146","239","190","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("158");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_OCOVOLINVMRVW_CONT","146","272","190","24",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("159");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_OCOVOLINVMRVW_CONT","1","267","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("160");
            obj.set_text("당사분(계약고)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staSPACE000","1","500","140","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("underline");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta44","140","500","538","34",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("공사규모");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divtab3Grid","0","203",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("41");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Grid("objGrdtab3_Detail","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab3.form.divtab3Grid.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.tabData.tab3.form.divtab3Grid.addChild(obj.name, obj);

            obj = new Static("staTab3Title","0","0","82","35",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("일반사항");
            obj.set_cssclass("sta_TITLE_Bg2");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_PLOTTAGEM2","0","35","130","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("2");
            obj.set_text("대지면적(㎡)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_TOTFLOORPY","0","68","130","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("3");
            obj.set_text("연면적(평)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_HOUSEHOLDS","0","101","130","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("4");
            obj.set_text("세대수/실수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_STRUCT","0","134","130","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("5");
            obj.set_text("구조방식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta00","129","35","210","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta01","129","68","210","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta02","129","101","210","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta03","129","134","548","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_FLOORM2","338","35","130","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("10");
            obj.set_text("건축면적(㎡)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_TOTFLOORM2","338","68","130","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("11");
            obj.set_text("연면적(㎡)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_OCOTOTFLOORM2","338","101","130","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("12");
            obj.set_text("당사연면적(평)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta04","467","35","210","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta05","467","68","210","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta06","467","101","210","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_BUILDRATIO","676","35","130","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("16");
            obj.set_text("건폐율(%)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_FLOORRATIO","676","68","130","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("17");
            obj.set_text("용적율(%)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_SCALE","676","101","130","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("18");
            obj.set_text("공사규모");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_USEAREA","676","134","130","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("19");
            obj.set_text("용도");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta07","805","35","210","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta08","805","68","210","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta09","805","101",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta10","805","134",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_SLLTSQMS","1014","35","130","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("24");
            obj.set_text("분양면적(㎡)");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_SLLTLARSQMS","1014","68","130","34",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("25");
            obj.set_text("분양대지면적(㎡)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta11","1143","35",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta12","1143","68",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staTab3Title1","0","168",null,"35","5",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("28");
            obj.set_text("세부사항");
            obj.set_cssclass("sta_TITLE_Bg2");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_PLOTTAGEM2","134","40","100","24",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("29");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_TOTFLOORPY","134","73","100","24",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("30");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_HOUSEHOLDS","134","106","190","24",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("31");
            obj.set_value("");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_STRUCT","134","139","538","24",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("32");
            obj.set_value("");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_FLOORM2","472","40","100","24",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("33");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_readonly("false");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_TOTFLOORM2","472","73","100","24",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("34");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_readonly("false");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_OCOTOTFLOORPY","472","106","100","24",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("35");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_readonly("false");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_BUILDRATIO","810","40","101","24",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("36");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_readonly("false");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_FLOORRATIO","810","73","101","24",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("37");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_readonly("false");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_SCALE","810","106",null,"24","4",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("38");
            obj.set_value("");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_USEAREA","810","139",null,"24","4",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("39");
            obj.set_value("");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_SLLTSQMS","1148","40","100","24",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("40");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_SLLTLARSQMS","1148","73","100","24",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("41");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("발주처");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid4","0","20",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("공동도급");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","55.00%","100.00%","23",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://images/slt_WF_SplitterH.png\') no-repeat center center");
            obj.set_cursor("ns-resize");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","20",null,null,"0","divSplitter:6",null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGridTop5","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab5.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab5.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:-12",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("2");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"35","0",null,null,null,null,null,this.divData.form.tabData.tab5.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TITLE_Bg2");
            obj.set_text("취하내역");
            this.divData.form.tabData.tab5.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridBottom5","0","sta02:0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab5.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.tabData.tab5.form.divDataBottom.addChild(obj.name, obj);

            obj = new Tabpage("tab6",this.divData.form.tabData);
            obj.set_text("현장인원");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","20","23","95%",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://images/slt_WF_SplitterV.png\') no-repeat center center");
            obj.set_cursor("ew-resize");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","20",null,null,"divSplitter:6","0",null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Grid("objGridLeft6","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab6.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.tabData.tab6.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:6","20",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Grid("objGridRight6","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab6.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.tabData.tab6.form.divDataRight.addChild(obj.name, obj);

            obj = new Tabpage("tab7",this.divData.form.tabData);
            obj.set_text("하도대금지급보증서");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","20",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("1");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Grid("objGrid7","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab7.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.tabData.tab7.form.divDataLeft.addChild(obj.name, obj);

            obj = new Tabpage("tab8",this.divData.form.tabData);
            obj.set_text("도급/실행");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","5","23","95%",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://images/slt_WF_SplitterV.png\') no-repeat center center");
            obj.set_cursor("ew-resize");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","20",null,null,"divSplitter:6","0",null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Grid("objGridLeft8","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab8.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.tabData.tab8.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:6","20",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Grid("objGridRight8","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab8.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.tabData.tab8.form.divDataRight.addChild(obj.name, obj);

            obj = new Tabpage("tab9",this.divData.form.tabData);
            obj.set_text("청구/수금");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid9","0","20",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab9.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.tabData.tab9.addChild(obj.name, obj);

            obj = new Tabpage("tab10",this.divData.form.tabData);
            obj.set_enable("false");
            obj.set_accessibilityenable("true");
            obj.set_opacity("0");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid10","0","20",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab10.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.tabData.tab10.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.tabData.tab1.form.cfCD_SITE.form.CDTextBox","value","dsList","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tabData.tab1.form.cfCD_SITE.form.DSTextBox","value","dsList","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tabData.tab1.form.ctxtDS_KONGSA","value","dsList","DS_KONGSA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tabData.tab1.form.ccfAT_SITE.form.CDTextBox","value","dsList","NO_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tabData.tab1.form.ccfAT_SITE.form.DSTextBox","value","dsList","AT_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab1.form.ctxtAT_SITE2","value","dsList","AT_SITE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab1.form.ccboAR_SITE","value","dsList","AR_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab1.form.ccfTY_DESI.form.CDTextBox","value","dsList","TY_DESI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab1.form.ccfTY_DESI.form.DSTextBox","value","dsList","DS_DESI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab1.form.ctxtAT_SITEORM","value","dsList","AT_SITEORM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab1.form.ccfCD_BONBU.form.CDTextBox","value","dsList","CD_BONBU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab1.form.ccfCD_BONBU.form.DSTextBox","value","dsList","DS_BONBU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tabData.tab1.form.ccfCD_SAUPCENTER.form.CDTextBox","value","dsList","CD_SAUPCENTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tabData.tab1.form.ccfCD_SAUPCENTER.form.DSTextBox","value","dsList","DS_SAUPCENTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab1.form.ctxtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.tabData.tab1.form.ctxtNO_FAX","value","dsList","NO_FAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tabData.tab1.form.ccfCD_SALE.form.CDTextBox","value","dsList","CD_SALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tabData.tab1.form.ccfCD_SALE.form.DSTextBox","value","dsList","DS_SALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.tabData.tab1.form.ccfCD_INCMSTRT.form.CDTextBox","value","dsList","CD_INCMSTRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.tabData.tab1.form.ccfCD_INCMSTRT.form.DSTextBox","value","dsList","DS_INCMSTRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.tabData.tab1.form.ccfTY_SAUPKIND.form.CDTextBox","value","dsList","TY_SAUPKIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.tabData.tab1.form.ccfTY_SAUPKIND.form.DSTextBox","value","dsList","DS_SAUPKIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.tabData.tab1.form.ccfDIV_CONTRCT.form.CDTextBox","value","dsList","DIV_CONTRCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.tabData.tab1.form.ccfDIV_CONTRCT.form.DSTextBox","value","dsList","DS_DIV_CONTRCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tabData.tab1.form.ccfTY_KONGSA.form.CDTextBox","value","dsList","TY_KONGSA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tabData.tab1.form.ccfTY_KONGSA.form.DSTextBox","value","dsList","DS_TY_KONGSA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tabData.tab1.form.ccfTY_KONG_PRO.form.CDTextBox","value","dsList","TY_KONG_PRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.tabData.tab1.form.ccfTY_KONG_PRO.form.DSTextBox","value","dsList","DS_KONG_PRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.tabData.tab1.form.ctclDT_END","value","dsList","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.tabData.tab1.form.crdoYN_USE","value","dsList","YN_USE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab1.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","divData.form.tabData.tab1.form.chk_Yncm","value","dsList","YN_CM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","divData.form.tabData.tab1.form.ccfTY_BALJU.form.CDTextBox","value","dsList","TY_BALJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","divData.form.tabData.tab1.form.ccfTY_BALJU.form.DSTextBox","value","dsList","DS_BALJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab2.form.ctxtAM_DOGEUB_PROV","value","dsList","AM_DOGEUB_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab2.form.ctxtAM_DOCOVOL_PROV","value","dsList","AM_DOCOVOL_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab2.form.ctxtAM_SILHENG","value","dsList","AM_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.tabData.tab2.form.ctxtAM_SILHENG_ORI","value","dsList","AM_SILHENG_ORI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.tabData.tab2.form.ctxtAM_SOCOVOL","value","dsList","AM_SOCOVOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab2.form.ctxtAM_SOCOVOL_ORI","value","dsList","AM_SOCOVOL_ORI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.tabData.tab2.form.ctxtAM_DOGEUB_VAT","value","dsList","AM_DOGEUB_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.tabData.tab2.form.ctxtAM_DOCOVOL_VAT","value","dsList","AM_DOCOVOL_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.tabData.tab2.form.ctxtRT_SILHENG","value","dsList","RT_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.tabData.tab2.form.ctxtAM_SITEEBGT","value","dsList","AM_SITEEBGT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.tabData.tab2.form.ctxtAM_DOGEUB_TOT","value","dsList","AM_DOGEUB_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.tabData.tab2.form.ctxtAM_DOCOVOL_TOT","value","dsList","AM_DOCOVOL_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.tabData.tab2.form.ctxtAM_SLLTCONT","value","dsList","AM_SLLTCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.tabData.tab2.form.ctclDT_CJUNGONG","value","dsList","DT_CJUNGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.tabData.tab2.form.ctxtRT_SOCOVOL","value","dsList","RT_SOCOVOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.tabData.tab2.form.ctclDT_MIBLSCH","value","dsList","DT_MIBLSCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.tabData.tab2.form.ctxtRT_ASRAMT","value","dsList","RT_ASRAMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.tabData.tab2.form.crdoYN_JOINT","value","dsList","YN_JOINT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.tabData.tab2.form.crdoYN_JUGAN","value","dsList","YN_JUGAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.tabData.tab2.form.ctxtRT_TAX","value","dsList","RT_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.tabData.tab2.form.cchkYN_ZERO","value","dsList","YN_ZERO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.tabData.tab2.form.ctxtAM_CONT_PROV","value","dsList","AM_CONT_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.tabData.tab2.form.ctxtAM_OCOCONT_PROV","value","dsList","AM_OCOCONT_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.tabData.tab2.form.ctxtAM_CONT_VAT","value","dsList","AM_CONT_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab2.form.ctxtAM_OCOCONT_VAT","value","dsList","AM_OCOCONT_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.tabData.tab2.form.ctxtAM_CONT_TOT","value","dsList","AM_CONT_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.tabData.tab2.form.ctxtAM_OCOCONT_TOT","value","dsList","AM_OCOCONT_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.tabData.tab2.form.ctclDT_GEYAK","value","dsList","DT_GEYAK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.tabData.tab2.form.ctclDT_FROM","value","dsList","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.tabData.tab2.form.ctclDT_TO","value","dsList","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.tabData.tab2.form.ctxtDS_PERD_MD","value","dsList","DS_PERD_MD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.tabData.tab2.form.ctclDT_EBGT_FROM","value","dsList","DT_EBGT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divData.form.tabData.tab2.form.ctclDT_EBGT_TO","value","dsList","DT_EBGT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.tabData.tab2.form.ctclDT_HAJA_FROM","value","dsList","DT_HAJA_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divData.form.tabData.tab2.form.ctclDT_HAJA_TO","value","dsList","DT_HAJA_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.tabData.tab2.form.ctxtDS_HAJA","value","dsList","DS_HAJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.tabData.tab2.form.txtDS_CONDITION","value","dsList","DS_CONDITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divData.form.tabData.tab2.form.ctclDT_CHAKGONG","value","dsList","DT_CHAKGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divData.form.tabData.tab2.form.ctclDT_OJUNGONG","value","dsList","DT_OJUNGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divData.form.tabData.tab2.form.ctclDT_ACCEPTUSE","value","dsList","DT_ACCEPTUSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divData.form.tabData.tab2.form.ctclDT_CCNSTEM","value","dsList","DT_CCNSTEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divData.form.tabData.tab2.form.ctxtAM_GUAR","value","dsList","AM_GUAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divData.form.tabData.tab2.form.ctxtRT_GUAR","value","dsList","RT_GUAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divData.form.tabData.tab2.form.txtDS_RECEIVE","value","dsList","DS_RECEIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divData.form.tabData.tab2.form.ctxtRT_PRDV","value","dsList","RT_PRDV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divData.form.tabData.tab2.form.ctxtRT_INVMRVW","value","dsList","RT_INVMRVW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divData.form.tabData.tab2.form.ctxtRT_OCOVOLINVMRVW","value","dsList","RT_OCOVOLINVMRVW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divData.form.tabData.tab2.form.ctxtAM_INVMRVW_EBGT","value","dsList","AM_INVMRVW_EBGT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divData.form.tabData.tab2.form.ctxtAM_OCOVOLINVMRVW_EBGT","value","dsList","AM_OCOVOLINVMRVW_EBGT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divData.form.tabData.tab2.form.ctxtAM_INVMRVW_CONT","value","dsList","AM_INVMRVW_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divData.form.tabData.tab2.form.ctxtAM_OCOVOLINVMRVW_CONT","value","dsList","AM_OCOVOLINVMRVW_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","divData.form.tabData.tab3.form.ctxtDS_PLOTTAGEM2","value","dsList","DS_PLOTTAGEM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","divData.form.tabData.tab3.form.ctxtDS_TOTFLOORPY","value","dsList","DS_TOTFLOORPY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","divData.form.tabData.tab3.form.ctxtDS_HOUSEHOLDS","value","dsList","DS_HOUSEHOLDS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","divData.form.tabData.tab3.form.ctxtDS_STRUCT","value","dsList","DS_STRUCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","divData.form.tabData.tab3.form.ctxtDS_FLOORM2","value","dsList","DS_FLOORM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","divData.form.tabData.tab3.form.ctxtDS_TOTFLOORM2","value","dsList","DS_TOTFLOORM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","divData.form.tabData.tab3.form.ctxtDS_OCOTOTFLOORPY","value","dsList","DS_OCOTOTFLOORPY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","divData.form.tabData.tab3.form.ctxtDS_BUILDRATIO","value","dsList","DS_BUILDRATIO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","divData.form.tabData.tab3.form.ctxtDS_FLOORRATIO","value","dsList","DS_FLOORRATIO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","divData.form.tabData.tab3.form.ctxtDS_SCALE","value","dsList","DS_SCALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","divData.form.tabData.tab3.form.ctxtDS_USEAREA","value","dsList","DS_USEAREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","divData.form.tabData.tab3.form.ctxtDS_SLLTSQMS","value","dsList","DS_SLLTSQMS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","divData.form.tabData.tab3.form.ctxtDS_SLLTLARSQMS","value","dsList","DS_SLLTLARSQMS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divData.form.tabData.tab1.form.ctclDT_ASEND","value","dsList","DT_ASEND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","divData.form.tabData.tab1.form.ctclDT_RSEND","value","dsList","DT_RCEND");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZM_SITE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        // // 현장사진 파일관련
        // this.filepath = "DW/Attach/SITEPIC/";
        // this.fileuploads = {};
        // this.filecnt = 0;
        this.popupSaveYn = "N";	// 공동도급 취하 팝업 화면 저장 유무 변수(Y면 저장)
        this.addSearchYn = "N";	// 신규등록시 현장코드 변경이벤트 구분

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

        	// 파일설정
        	this.fileConfig = this.gfnGetFileConfig();
        	//this.fnSetFile();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);

        		this.FormBtns.Select.click();
        	}

        	this.btnINSERT.set_enable(false);
        	this.btnDELETE.set_enable(false);
        	this.divData.form.tabData.tab10.set_visible(false);

        	if( this.FormInfo.CD_ROLE == "R99" ){
        		this.divData.form.tabData.tab2.form.ctxtAM_DOGEUB_PROV.set_readonly(false);
        		this.divData.form.tabData.tab2.form.ctxtAM_DOGEUB_VAT.set_readonly(false);
        		this.divData.form.tabData.tab2.form.ctxtAM_DOCOVOL_PROV.set_readonly(false);
        		this.divData.form.tabData.tab2.form.ctxtAM_DOCOVOL_VAT.set_readonly(false);

        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnEPS = this.gfnFormButtonAdd("btnEPS", "fnEPS");
        	this.btnINSERT = this.gfnFormButtonAdd("btnINSERT", "fnAdd");
        	this.btnDELETE = this.gfnFormButtonAdd("btnDELETE", "fnDel");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	/* dxGrid1 => 테스트용 그리드. 디자인단에서 현재 삭제.*/
         	//this.dxGrid1 = this.divData.form.tabData.tab1.form.objGrid1;
        	/* 현장담당자 그리드로 재탄생 */
        	this.dxGrid1= this.divData.form.tabData.tab1.form.objGrid1;
         	this.dxGrid2 = this.divData.form.tabData.tab4.form.objGrid4;
         	//this.dxGrid3 = this.divData.form.tabData.tab5.form.objGrid5;
        	this.dxGrid3 = this.divData.form.tabData.tab5.form.divDataTop.form.objGridTop5;
        	this.dxGrid11 = this.divData.form.tabData.tab5.form.divDataBottom.form.objGridBottom5;
        	this.dxGrid4 = this.divData.form.tabData.tab6.form.divDataLeft.form.objGridLeft6;
        	this.dxGrid5 = this.divData.form.tabData.tab6.form.divDataRight.form.objGridRight6;
        	// 현장사진 주석으로 인한 처리.
        	this.dxGrid6 = this.divData.form.tabData.tab7.form.divDataLeft.form.objGrid7;
        	this.dxGrid7 = this.divData.form.tabData.tab8.form.divDataLeft.form.objGridLeft8;
        	this.dxGrid8 = this.divData.form.tabData.tab8.form.divDataRight.form.objGridRight8;
        	this.dxGrid9 = this.divData.form.tabData.tab9.form.objGrid9;
        	this.dxGrid10 = this.divData.form.tabData.tab10.form.objGrid10;
        	this.dxGrid12 = this.divData.form.tabData.tab3.form.divtab3Grid.form.objGrdtab3_Detail;

        	this.ccfCF_SITE = this.divSearch.form.ccfCF_SITE;

        	this.ccfNO_IMWON    = this.divData.form.tabData.tab1.form.ccfNO_IMWON;
        	this.ccfNO_SOJANG   = this.divData.form.tabData.tab1.form.ccfNO_SOJANG;
        	this.ccfNO_CHONGMU  = this.divData.form.tabData.tab1.form.ccfNO_CHONGMU;
        	this.ccfNO_CHFMNGR  = this.divData.form.tabData.tab1.form.ccfNO_CHFMNGR;
        	this.ccfNO_SITEAGNC = this.divData.form.tabData.tab1.form.ccfNO_SITEAGNC;
        	this.ccfNO_PM       = this.divData.form.tabData.tab1.form.ccfNO_PM;
        	this.ccfNO_KOANRL   = this.divData.form.tabData.tab1.form.ccfNO_KOANRL;
        	this.ccfNO_GONGMU   = this.divData.form.tabData.tab1.form.ccfNO_GONGMU;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	/* dxGrid1 => 테스트용 그리드. */
         	//this.gfnGridInit(this.dxGrid1, this.dsList, "DW", "DWZ_SITE");
        	//this.dxGrid1.set_selecttype("cell");
        	//this.dxGrid1.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	//this.dsListTest.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	// 공사개요(tabindex = 0) 탭
        	this.gfnGridInit(this.dxGrid1, this.dsListChrpsn, "DW", "DWZ_SITECHRPSN");
        	this.dxGrid1.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.dxGrid1.set_enableredraw(false);
        	this.gfnGridColumnColor(this.dxGrid1, "DS_CHRPSN", "BACK_ReadOnly Underline", "PK_CHRPSN == 'Y'");
        	this.dxGrid1.set_enableredraw(true);

        	// 발주처(tabindex = 3) 탭
         	this.gfnGridInit(this.dxGrid2, this.dsList2, "DW", "DWZ_SITEORDPLC");
        	this.dxGrid2.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 공동도급(tabindex = 4) 탭
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DW", "DWZ_SITEJOINTCOMP");
        	this.gfnGridInit(this.dxGrid11, this.dsList11, "DW", "DWZ_SITEJOINTCOMPCLT");
        	this.dxGrid3.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 현장인원(tabindex = 5) 탭
        	this.gfnGridInit(this.dxGrid4, this.dsList4, "DW", "DWZ_SITEPSNNO");
        	this.gfnGridInit(this.dxGrid5, this.dsList5, "DW", "DWZ_SITESALCURST");

        	// 하도대금지급보증서(tabindex = 6) 탭
        	this.gfnGridInit(this.dxGrid6, this.dsList6, "DW", "DWZ_SITEHDGU_FILE");

        	// 도급실행(tabindex = 6) 탭
        	this.gfnGridInit(this.dxGrid7, this.dsList7, "DW", "DWZ_SITECONTRCT");
        	this.gfnGridInit(this.dxGrid8, this.dsList8, "DW", "DWZ_SITESILHENG");

        	// 청구/수금(tabindex = 7) 탭
        	this.gfnGridInit(this.dxGrid9, this.dsList9, "DW", "DWZ_SITEREQBILCLT");

        	// 계획/공정(tabindex = 8) 탭
        	this.gfnGridInit(this.dxGrid10, this.dsList10, "DW", "DWZ_SITEPRSC");
        	//this.gfnGridInit(this.dxGrid10, this.dsList10, "DI", "DIF_SALE_WONGA_PLAN");

        	//공사규모(tabindex = 3) 탭
        	this.gfnGridInit(this.dxGrid12, this.dsList12, "DW", "DWZ_SITEDETAIL");

        	this.dxGrid3.ExpandUp = "fnGrid_ExpandUp";
        	this.dxGrid6.ExpandUp = "fnGrid_ExpandUp";

        	// 공동도급 상단 그리드 로우변경 이벤트
        	//this.dxGrid3.addEventHandler("onselectchanged", this.fnGrid3_RowCellChanged, this);

        	// 하도대금지급보증서 좌측 그리드 로우변경 이벤트
        	this.dxGrid6.addEventHandler("onselectchanged", this.fnGrid6_RowCellChanged, this);
        	this.dxGrid6.addEventHandler("oncelldblclick", this.dxGrid6_oncelldblclick, this);

        	// 공사규모 그리드 셋팅
        	this.dxGrid12.EnterCell = "fnGrid12_EnterCell";

        	// R:ReadOnly|A:KEYIN|B:CODEFIND|C:CALENDAR
        	var idxDS_INPUT01 = this.dxGrid12.getBindCellIndex("body", "DS_INPUT01");
        	this.dxGrid12.setCellProperty("body", idxDS_INPUT01, "displaytype", "expr:CD_INPUT01=='C'?'date':CD_INPUT01=='A'?'text':CD_INPUT01=='B'?'text':'normal'");
        	this.dxGrid12.setCellProperty("body", idxDS_INPUT01, "edittype", "expr:CD_INPUT01=='C'?'date':CD_INPUT01=='A'?'text':CD_INPUT01=='B'?'text':'none'");
        	this.dxGrid12.setCellProperty("body", idxDS_INPUT01, "expandshow", "expr:CD_INPUT01=='B'?'show':'hide'");

        	// CALENDAR 셋팅
        	this.dxGrid12.setCellProperty("body", idxDS_INPUT01, "calendarautoselect", "true");
        	this.dxGrid12.setCellProperty( "body", idxDS_INPUT01, "calendardateformat", "yyyy-MM-dd");
        	this.dxGrid12.setCellProperty( "body", idxDS_INPUT01, "calendareditformat", "yyyyMMdd");
        	this.dxGrid12.setCellProperty( "body", idxDS_INPUT01, "calendardisplaynulltype", "none");



        	// 공사개요, 계약정보, 공사규모 탭의 코드파인드 이벤트 설정.
        	this.ccfCF_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCF_SITE.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";

        // 	this.ccfNO_IMWON.BeforeUserDataSetParam    = "fnBeforeUserDataSetParam";
        // 	this.ccfNO_SOJANG.BeforeUserDataSetParam   = "fnBeforeUserDataSetParam";
        // 	this.ccfNO_CHONGMU.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";
        // 	this.ccfNO_CHFMNGR.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";
        // 	this.ccfNO_SITEAGNC.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        // 	this.ccfNO_PM.BeforeUserDataSetParam       = "fnBeforeUserDataSetParam";
        // 	this.ccfNO_KOANRL.BeforeUserDataSetParam   = "fnBeforeUserDataSetParam";
        // 	this.ccfNO_GONGMU.BeforeUserDataSetParam   = "fnBeforeUserDataSetParam";

        // 	this.ccfNO_IMWON.AfterCDTextChanged    = "fnCodeFinder_AfterCDTextChanged";
        // 	this.ccfNO_SOJANG.AfterCDTextChanged   = "fnCodeFinder_AfterCDTextChanged";
        // 	this.ccfNO_CHONGMU.AfterCDTextChanged  = "fnCodeFinder_AfterCDTextChanged";
        // 	this.ccfNO_CHFMNGR.AfterCDTextChanged  = "fnCodeFinder_AfterCDTextChanged";
        // 	this.ccfNO_SITEAGNC.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";
        // 	this.ccfNO_PM.AfterCDTextChanged       = "fnCodeFinder_AfterCDTextChanged";
        // 	this.ccfNO_KOANRL.AfterCDTextChanged   = "fnCodeFinder_AfterCDTextChanged";
        // 	this.ccfNO_GONGMU.AfterCDTextChanged   = "fnCodeFinder_AfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsSelect11 = new Dataset();
        	this.dsSelect11.addColumn("TY_WRK", "string");
        	this.dsSelect11.addColumn("CD_SITE", "string");
        	this.dsSelect11.addColumn("CD_CTM", "string");

        	this.dsSelect12 = new Dataset();
        	this.dsSelect12.addColumn("CD_SITE", "string");

        	this.dsSelectChrpsn = new Dataset();
        	this.dsSelectChrpsn.addColumn("TY_WRK", "string");
        	this.dsSelectChrpsn.addColumn("CD_SITE", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_VENDOR", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	// 탭 선택에 따라 조회하기

        	var strSvcId    = "";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	this.dsSelect12.clearData();
        	this.dsSelect12.addRow();
        	this.dsSelect12.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	this.dsSelectChrpsn.clearData();
        	this.dsSelectChrpsn.addRow();
        	this.dsSelectChrpsn.setColumn(0, "TY_WRK", "Q");
        	this.dsSelectChrpsn.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	//var index = this.divData.form.tabData.tabindex;
        	var index = this.fnGetTapIndex();
        	switch(index) {
        		// 공사개요, 계약정보, 공사규모 탭.
        		case 0:
        		case 1:
        		case 2:
        			this.gfnGridBeforeSelect(this.dxGrid12);
        			strSvcId    = "select1";
        			inData      = "select1=dsSelect select12=dsSelect12 select_chrpsn=dsSelectChrpsn";
        			outData     = "dsList=select10 dsList12=select120 dsListChrpsn=select_chrpsn0";
        			break;
        		// 발주처 탭.
        		case 3:
        			strSvcId    = "select2";
        			inData      = "select2=dsSelect";
        			outData     = "dsList2=select20";
        			break;
        		// 공동도급 탭.
        		case 4:
        			this.gfnGridBeforeSelect(this.dxGrid3);

        			strSvcId    = "select3";
        			inData      = "select3=dsSelect";
        			outData     = "dsList3=select30";
        			break;
        		// 현장인원 탭.
        		case 5:
        			strSvcId    = "select4";
        			inData      = "select4=dsSelect";
        			outData     = "dsList4=select40";
        			break;
        		// 하도대금지급보증서 탭.
        		case 6:
        			// 파일 설정
        			this.FileUpTransfer00.clearFileList();

        			strSvcId    = "select6";
        			inData      = "select6=dsSelect";
        			outData     = "dsList6=select60";
        			break;
        		// 도급/실행 탭.
        		case 7 :
        			strSvcId    = "select7";
        			inData      = "select7=dsSelect";
        			outData     = "dsList7=select70";
        			break;
        		// 청구/수금 탭.
        		case 8 :
        			strSvcId    = "select9";
        			inData      = "select9=dsSelect";
        			outData     = "dsList9=select90";
        			break;
        		// 계획/공정 탭.
        		case 9 :
        			strSvcId    = "select10";
        			inData      = "select10=dsSelect";
        			outData     = "dsList10=select100";
        			break;

        	}

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);  // 통신방법 정의 [생략가능]


        	// 현장인원, 도급/실행 탭은 우측 그리드 조회를 위해 별도 필요.
        	if(index == 5)
        	{
        		this.fnDetail(index);
        	}
        }

        this.fnDetail = function(index) {
        	// 현장사진 탭 주석으로 인한 임시처리.
        	if(index > 5 && index != 11 && index != 6) index++;
        	//if(index > 5 && index != 11 && index != 6) index++;
        	//if(index == 6) index = 8;

        	var strSvcId    = "select" + index;
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	if(index == 11){
        		this.dsList11.clearData();

        		this.dsSelect11.clearData();
        		this.dsSelect11.addRow();

        		this.dsSelect11.setColumn(0, "TY_WRK", "Q");
        		this.dsSelect11.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsSelect11.setColumn(0, "CD_CTM", this.dsList3.getColumn(this.dsList3.rowposition, "CD_CTM"));

        		var inData      = "select" + index + "=dsSelect11";
        	}
        	else
        	{
        		var inData      = "select" + index + "=dsSelect";
        	}
        	var outData     = "dsList" + index + "=select" + index + "0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);  // 통신방법 정의 [생략가능]
        }

        /*
         *	테스트 기능.
         */
        //
        // this.fnSelectDetailTest = function() {
        // 	var strSvcId    = "select1";
        // 	var strSvcType  = "grid";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "select1=dsSelect";
        // 	var outData     = "dsList=select10";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.dsSelect.clearData();
        // 	this.dsSelect.addRow();
        // 	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        // 	this.dsSelect.setColumn(0, "CD_SITE", this.dsListTest.getColumn(this.dsListTest.rowposition, "CD_SITE"));
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 					strSvcType , 	// transaction을 요청할 구분
        // 					inProc,			// Procedure 정보 Dataset 이름
        // 					inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 					outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 					strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        // 					callBackFnc);  // 통신방법 정의 [생략가능]
        // }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var index = this.fnGetTapIndex();
        	//switch(this.divData.form.tabData.tabindex) {
        	switch(index) {
        		// 공사개요, 계약정보, 공사규모 탭.
        		case 0:
        		case 1:
        		case 2:
        			this.dsList.clearData();
        			this.dsList.addRow();
        			this.dsList12.clearData();
        			this.ccfCF_SITE.form.BtnSearch.click();
        			break;
        		// 발주처 탭.
        		case 3:
        			var nrow = this.gfnGridAdd(this.dxGrid2, "bottom"); // top (default), bottom, current
        			break;
        		// 공동도급 탭.
        		case 4:
        			var nrow = this.gfnGridAdd(this.dxGrid3, "bottom"); // top (default), bottom, current
        			break;
        // 		// 하도대금지급보증서 탭.
         		case 6:
         			var nrow = this.gfnGridAdd(this.dxGrid6, "bottom"); // top (default), bottom, current
         			break;
        	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var index = this.fnGetTapIndex();
         	//switch(this.divData.form.tabData.tabindex) {
        	switch(index) {
        		case 2:
        			this.gfnGridDel(this.dxGrid12);
        			break;
         		case 3:
         			this.gfnGridDel(this.dxGrid2);
         			break;
        		case 4:
        			this.gfnGridDel(this.dxGrid3);
         			break;
         		case 6:
         			this.gfnGridDel(this.dxGrid6);
          			break;
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	var index = this.fnGetTapIndex();
        	//switch(this.divData.form.tabData.tabindex) {
        	switch(index) {
        		// 공사개요, 계약정보, 공사규모 탭.
        		case 0:
        		case 1:
        		case 2:
        			if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return false;
        			if (!this.fnGrid1_Validate()) return false;
        			{

        				strSvcId = "save1";
        				this.fnSetParameter1();
        				this.fnSave1();
        				if(this.dsSave12.rowcount > 0){
        					if(this.dsList.getRowType(0) == "2" || this.dsList.getRowType(0) == "4"){
        						inData = "save1=dsSave save12=dsSave12 save_chrpsn=dsListChrpsn";
        					}else{
        						inData = "save12=dsSave12 save_chrpsn=dsListChrpsn";
        					}

        				}else{
        					inData = "save1=dsSave save_chrpsn=dsSaveChrpsn";
        				}
        			}
        			break;
        		// 발주처 탭.
        		case 3:
        				strSvcId = "save2";
        				inData = "save2=dsSave";
        				this.fnSetParameter2();
        				if(!this.fnSave2()) return;
        			break;
        		// 공동도급 탭.
        		case 4:
        				strSvcId = "save3";
        				inData = "save3=dsSave";
        				this.fnSetParameter3();
        				if(!this.fnSave3()) return;
        			break;
        		// 하도대금지급보증서 탭.
        		case 6:
        				strSvcId = "save6";
        				inData = "save6=dsSave";
        				// 파일저장
        				if(this.FileUpTransfer00.filelist.length > 0) {
        					this._waitCursor(true);
        					var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        					this.FileUpTransfer00.setPostData("path", this.filepath);
        					this.FileUpTransfer00.upload(sUploadUrl);
        				}
        				else {
        					this.fnSaveAfterUpload();
        					return;
        				}
        				// 실제 저장로직은 fnSaveAfterUpload() 에서 실행.
        				return;


        // 				// 파일저장
        // 				this.keys = Object.keys(this.fileuploads);
        // 				this.filecnt = 0;
        // 				if (this.keys.length > 0) {
        // 					// 업로드할 파일이 있는 경우 파일저장부터
        // 					for(var i = 0; i < this.keys.length; i++) {
        // 						var fileup = this.fileuploads[this.keys[i]];
        // 						var sFilePath = fileup.value;
        // 						var dirExpt = sFilePath.lastIndexOf("\\")+1;
        // 						var sFileName = sFilePath.substr(dirExpt);
        //
        // 						var key = this.dsSearch.getColumn(0, "CD_SITE");
        // 						var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl + key;
        // 						fileup.upload(sUploadUrl);
        // 					}
        // 				}
        // 				else {
        // 					// 업로드할 파일이 없는 경우는 저장만
        // 					this.fnSaveAfterUpload();
        // 				}
        			break;
        		// 청구수금 탭.
        		case 7:
        				strSvcId = "save9";
        				inData = "save9=dsSave";
        				this.fnSetParameter9();
        				if(!this.fnSave9()) return;
        			break;
        		// 계획공정 탭.
        		case 8:
        				strSvcId = "save10";
        				inData = "save10=dsSave";
        				this.fnSetParameter10();
        				if(!this.fnSave10()) return;
        			break;

        	}


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

        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }
        /************************************************************************
         * 콤보 이벤트 설정
         ************************************************************************/
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_MAND", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DW");
        	this.dsCombo.setColumn(0, "CD_TYPE", "09");
        	this.dsCombo.setColumn(0, "YN_USE", "Y");
        	this.dsCombo.setColumn(0, "YN_MAND", "Y");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsAR_SITE=combo0";
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

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        	{
        		this.gfnAlert("현장코드를 입력해주십시오.");
        		return false;
        	}
        	return validate;
        };

        this.fnGrid1_Validate = function() {
        	var validate = true;

        	for(var i = 0; i < this.dsListChrpsn.rowcount; i++)
        	{
        		if(this.dsListChrpsn.getColumn(i, "PK_CHRPSN") == "Y")
        		{
        			if(this.gfnIsNull(this.dsListChrpsn.getColumn(i, "ID_CHRPSN")))
        			{
        				var msg = this.dsListChrpsn.getColumn(i, "DS_CHRPSN") + "의 사번을 입력해주십시오.";
        				this.gfnAlert(msg);
        				return false;
        			}
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
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	if (svcID == "select1") {
        		this.gfnSetFormStatus(this, "Q");
        		this.gfnGridAfterSelect(this.dxGrid12);
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.btnINSERT.set_enable(false);
        		this.btnDELETE.set_enable(false);
        	}
        	// 공동도 탭.
        	else if (svcID == "select3") {
        		//alert(this.dxGrid3.oldrow);
        		// 조회한 후에 oldrow 가 null 이거나 -1 이면 그리드에 row가 없는 상태에서 조회를 한 상태이다
        		if(this.dxGrid3.oldrow < 0 || this.gfnIsNull(this.dxGrid3.oldrow)){
        			this.dxGrid3.setCellPos(0, 0);
        		}else{
        			this.gfnGridAfterSelect(this.dxGrid3);
        		}
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.btnINSERT.set_enable(false);
        		this.btnDELETE.set_enable(false);
        	}
        	// 현장인원 탭.
        	else if (svcID == "select2" || svcID == "select4" || svcID == "select5") {
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.btnINSERT.set_enable(false);
        		this.btnDELETE.set_enable(false);
        	}
        	// 하도 지급보증 탭.
        	else if (svcID == "select6") {
        		this.btnINSERT.set_enable(true);
        		this.btnDELETE.set_enable(true);
        	}
        	// 도급실행 탭.
        	else if (svcID == "select7" || svcID == "select8") {
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.btnINSERT.set_enable(false);
        		this.btnDELETE.set_enable(false);
        	}
        	// 청구/수금 탭.
        	else if (svcID == "select9")
        	{
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.btnINSERT.set_enable(false);
        		this.btnDELETE.set_enable(false);
        	}
        	// 계획공정 탭.
        	else if (svcID == "select10")
        	{
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.btnINSERT.set_enable(false);
        		this.btnDELETE.set_enable(false);
        	}
        	// 공동도급 탭 하단그리드
        	else if (svcID == "select11")
        	{
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.btnINSERT.set_enable(false);
        		this.btnDELETE.set_enable(false);
        	}
        	else if (svcID == "save1") {
         		this.gfnSetFormStatus(this);
        		this.FormBtns.Select.click();
         	}
        	else if (svcID == "combo") {

        	}
        	else if (svcID == "save2")
        	{
        		this.gfnGridAfterSelect(this.dxGrid2);
        		this.FormBtns.Select.click();
        	}
        	else if (svcID == "save3")
        	{
        		this.gfnGridAfterSelect(this.dxGrid3);
        		this.FormBtns.Select.click();
        	}
        	else if (svcID == "save6")
        	{
        		this.gfnGridAfterSelect(this.dxGrid6);
        		this.FormBtns.Select.click();
        	}
        	else if (svcID == "save9")
        	{
        		this.gfnGridAfterSelect(this.dxGrid9);
        		this.FormBtns.Select.click();
        	}
        	else if (svcID == "save10")
        	{
        		this.gfnGridAfterSelect(this.dxGrid10);
        		this.fnExecute10();
        		this.FormBtns.Select.click();
        	}
        	else if (svcID == "imagefile")
        	{
        		this.divData.form.tabData.tab7.form.divDataRight.form.imgViewer.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        	}
        	else if(svcID == "exec")
        	{
        		if (errorCode == 0) {
        			this.fnEPS_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("전자조달계정초기화 정상 처리되었습니다.", "fnEPS_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id)
        	{
        		case "ccfCF_SITE" :
        				dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			break;
        // 		case "ccfNO_IMWON" :
        // 		case "ccfNO_SOJANG" :
        // 		case "ccfNO_CHONGMU" :
        // 		case "ccfNO_CHFMNGR" :
        // 		case "ccfNO_SITEAGNC" :
        // 		case "ccfNO_PM" :
        // 		case "ccfNO_KOANRL" :
        // 		case "ccfNO_GONGMU" :
        // 				if(this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE")))
        // 				{
        // 					this.gfnAlert("현장코드를 입력해주십시오.");
        // 					return false;
        // 				}
        //
        // 				dsUserParam.setColumn(nrow, "CD_EMPTYPE", "");
        // 				dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 			break;
        		case "ccfCD_DEPT_ORG" :
        				dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			break
        	}
        	return true;
        }

        this.fnCodeFinder_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if(arr.length > 0)
        	{
        		// 공사개요, 계약정보, 공사규모 탭 입력버튼 후 설정시 넘어가는 값들.
        		switch(id)
        		{
        			case "ccfCF_SITE" :
        				this.dsList.clearData();
        				this.dsList.addRow();
        				this.dsList12.clearData();
        				this.addSearchYn = "Y";

        				this.dsSearch.setColumn(0, "CD_SITE", arr[0]["CD_SITE"]);
        				this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(arr[0]["DS_SITE"]);
        				this.dsList.setColumn(0, "CD_SITE", arr[0]["CD_SITE"]);
        				this.dsList.setColumn(0, "DS_SITE", arr[0]["DS_SITE"]);
        				this.dsList.setColumn(0, "DS_KONGSA", arr[0]["DS_KONGSA"]);
        				this.dsList.setColumn(0, "NO_ZIP", arr[0]["NO_ZIP"]);
        				this.dsList.setColumn(0, "AT_SITE", arr[0]["AT_SITE"]);
        				this.dsList.setColumn(0, "AT_SITE2", arr[0]["AT_SITE2"]);
        				this.dsList.setColumn(0, "TY_DESI", arr[0]["TY_DESI"]);
        				this.dsList.setColumn(0, "DS_DESI", arr[0]["DS_DESI"]);
        				this.dsList.setColumn(0, "TY_KONG_PRO", arr[0]["TY_KONG_PRO"]);
        				this.dsList.setColumn(0, "DS_KONG_PRO", arr[0]["DS_KONG_PRO"]);
        				this.dsList.setColumn(0, "YN_USE", arr[0]["YN_USE"]);
        				this.dsList.setColumn(0, "NO_SOJANG", arr[0]["NO_SOJANG"]);
        				this.dsList.setColumn(0, "DS_SOJANG", arr[0]["DS_SOJANG"]);
        				this.dsList.setColumn(0, "RK_SOJANG", arr[0]["RK_SOJANG"]);
        				this.dsList.setColumn(0, "AM_DOGEUB_PROV", arr[0]["AM_DOGEUB_PROV"]);
        				this.dsList.setColumn(0, "AM_DOGEUB_VAT", arr[0]["AM_DOGEUB_VAT"]);
        				this.dsList.setColumn(0, "AM_DOGEUB_TOT", arr[0]["AM_DOGEUB_TOT"]);
        				this.dsList.setColumn(0, "AM_DOCOVOL_PROV", arr[0]["AM_DOCOVOL_PROV"]);
        				this.dsList.setColumn(0, "AM_DOCOVOL_VAT", arr[0]["AM_DOCOVOL_VAT"]);
        				this.dsList.setColumn(0, "AM_DOCOVOL_TOT", arr[0]["AM_DOCOVOL_TOT"]);
        				this.dsList.setColumn(0, "YN_JOINT", arr[0]["YN_JOINT"]);
        				this.dsList.setColumn(0, "YN_JUGAN", arr[0]["YN_JUGAN"]);
        				this.dsList.setColumn(0, "RT_TAX", arr[0]["RT_TAX"]);
        				this.dsList.setColumn(0, "YN_ZERO", arr[0]["YN_ZERO"]);
        				this.dsList.setColumn(0, "RT_SOCOVOL", arr[0]["RT_SOCOVOL"]);
        				this.dsList.setColumn(0, "AM_CONT_PROV", arr[0]["AM_CONT_PROV"]);
        				this.dsList.setColumn(0, "AM_CONT_VAT", arr[0]["AM_CONT_VAT"]);
        				this.dsList.setColumn(0, "AM_CONT_TOT", arr[0]["AM_CONT_TOT"]);
        				this.dsList.setColumn(0, "DT_GEYAK", arr[0]["DT_GEYAK"]);
        				this.dsList.setColumn(0, "DT_CHAKGONG", arr[0]["DT_CHAKGONG"]);
        				this.dsList.setColumn(0, "DT_OJUNGONG", arr[0]["DT_OJUNGONG"]);
        				this.dsList.setColumn(0, "DT_FROM", arr[0]["DT_FROM"]);
        				this.dsList.setColumn(0, "DT_TO", arr[0]["DT_TO"]);
        				this.dsList.setColumn(0, "DT_ASEND", arr[0]["DT_ASEND"]);
        				this.dsList.setColumn(0, "DT_RCEND", arr[0]["DT_RCEND"]);

        				this.gfnSetFormStatus(this, "I");
        			break;
        // 			// 아래는 현장담당자들의 직급을 넘겨받는 것. (현재 SP에서 비어있음)
        // 			case "ccfNO_IMWON" :
        // 				this.divData.form.tabData.tab1.form.ctxtRK_IMWON.set_value(arr[0]["DS_POS"]);
        // 				break;
        // 			case "ccfNO_SOJANG" :
        // 				this.divData.form.tabData.tab1.form.ctxtRK_SOJANG.set_value(arr[0]["DS_POS"]);
        // 				break;
        // 			case "ccfNO_CHONGMU" :
        // 				this.divData.form.tabData.tab1.form.ctxtRK_CHONGMU.set_value(arr[0]["DS_POS"]);
        // 				break;
        // 			case "ccfNO_CHFMNGR" :
        // 				this.divData.form.tabData.tab1.form.ctxtRK_CHFMNGR.set_value(arr[0]["DS_POS"]);
        // 				break;
        // 			case "ccfNO_SITEAGNC" :
        // 				this.divData.form.tabData.tab1.form.ctxtRK_SITEAGNC.set_value(arr[0]["DS_POS"]);
        // 				break;
        // 			case "ccfNO_PM" :
        // 				this.divData.form.tabData.tab1.form.ctxtRK_PM.set_value(arr[0]["DS_POS"]);
        // 				break;
        // 			case "ccfNO_KOANRL" :
        // 				this.divData.form.tabData.tab1.form.ctxtRK_KOANRL.set_value(arr[0]["DS_POS"]);
        // 				break;
        // 			case "ccfNO_GONGMU" :
        // 				this.divData.form.tabData.tab1.form.ctxtRK_GONGMU.set_value(arr[0]["DS_POS"]);
        // 				break;
        		}
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DOX_CFARDMD_FIRM") {
         		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
         	}else if (id == "DWX_CFVENDOR_DH") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))){
        			this.gfnAlert("현장코드를 입력해주십시오.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "JNT");
        	}else if(id == "DWX_CFCOST_TREE_01"){
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))){
        			this.gfnAlert("현장코드를 입력해주십시오.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_GBIMOK", "");
        		dsUserParam.setColumn(nrow, "CD_STDAGG", "JNT");
        	}else if(id == "DWX_CFBASEINFO_01"){
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))){
        			this.gfnAlert("현장코드를 입력해주십시오.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_EMPTYPE", this.dsListChrpsn.getColumn(this.dsListChrpsn.rowposition, "CD_CHRPSN"));
        	}

        	return true;
        }

        // 테스트 중입니다.
        //
        // this.fnGrid_RowCellChanged = function(obj:nexacro.Grid,e:nexacro.GridSelectEventInfo)
        // {
        //
        //     if(obj.name == "objGrid1")
        // 	{
        // 		// 왜인지는 모르겠지만 최초에 obj.oldrow가 null로 지정됨.
        // 		if(this.gfnIsNull(obj.oldrow)) obj.oldrow = -1;
        //
        // 		if ((obj.oldrow > -1 && obj.oldrow == e.row)
        // 			|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        // 			//this.FormBtns.SubSelect.click();
        // 			//this.fnSelectDetailTest();
        // 			obj.oldrow = -1;
        // 		}
        //
        // 	}
        // };

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        // 테스트 중입니다. 끝.

        this.fnGrid_ExpandUp = function(obj, e) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	// 공동도급 탭의 취하 버튼.
        	if(colnm == "BTN_CLT") {

        		if(this.gfnGetFlag(this.dsList3, e.row) == "I"
        		|| this.gfnGetFlag(this.dsList3, e.row) == "U"
        		|| this.gfnGetFlag(this.dsList3, e.row) == "D")
        		{
        			this.gfnAlert("저장 후 취하버튼 진행.");
        			return false;
        		}
        		else
        		{
        			var param = {};
        			param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        			param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        			param.CD_CTM = this.dsList3.getColumn(this.dsList3.rowposition, "CD_CTM");
        			param.DS_CONJOINTCOM = this.dsList3.getColumn(this.dsList3.rowposition, "DS_CONJOINTCOM");

        			this.gfnFormOpen("DWZ", "DWZ_SITEJOINTREQCLT", "fnBTN_CLT_callback", param);
        		}
        	}

        	// 하도대금지급보증서 탭의 첨부파일 버튼.
        	if(colnm == "DS_FILE") {
        		if(this.gfnGetFlag(this.dsList6, e.row) == "I"){
        			this.fdg00.row = e.row;
        			this.fdg00.open('FileOpen', FileDialog.LOAD);
        		}
        	}
        }

        /*
         *	공동도급 상단 그리드 로우변경
         */
        this.dsList3_onrowposchanged = function(obj,e)
        {
        	// 공동도급 디테일 조회
        	this.fnDetail(11);
        };

        /*
         *	공동도급 상단 그리드 로우변경(사용않함)
         */
         /*
        this.fnGrid3_RowCellChanged = function(obj:nexacro.Grid,e:nexacro.GridSelectEventInfo)
        {

        	if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		// 공동도급 디테일 조회
        		this.fnDetail(11);
        		obj.oldrow = -1;
        	}


        };
        */


        /*
         *	현장사진 그리드 로우변경
         */
        // this.fnGrid6_RowCellChanged = function(obj:nexacro.Grid,e:nexacro.GridSelectEventInfo)
        // {
        //     if (e.oldrow != e.row) {
        // 		this.fnImageView();
        // 	}
        // };

        // 공동도급(tabiindex=4)의 그리드 내 취하버튼을 누른 뒤 발생하는 창을 닫을 때 발생하는 callback.
        this.fnBTN_CLT_callback = function()
        {
        	// 취하 팝업화면에서 데이터가 저장처리가 일어났을경우만 재조회한다
        	if(this.popupSaveYn == "Y"){
        		this.FormBtns.Select.click();
        	}

        	// 초기화
        	this.popupSaveYn = "N";
        }

        // 공사규모 코드파인드, 입력02 제어
        this.fnGrid12_EnterCell = function(obj, row, cell) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	if (colnm == "DS_INPUT01") {
        		if(this.dsList12.getColumn(row, "CD_INPUT01") == "B") {
        			var info = {};
        			info.DS_FIELD = colnm;
        			info.CD_CODEFIND = this.dsList12.getColumn(row, "ID_CODEFIND01");
        			info.NM_CODEFIND = this.dsList12.getColumn(row, "SD_CODEFIND01");
        			info.DS_RESULTALIAS = this.dsList12.getColumn(row, "RT_CODEFIND01");

        			if(this.gfnIsNull(info.CD_CODEFIND) || this.gfnIsNull(info.NM_CODEFIND) || this.gfnIsNull(info.DS_RESULTALIAS)) {
        				var ci = this.gfnIndexInArray(obj.usCodefind, colnm);
        				while(ci != -1) {
        					delete obj.usCodefind[ci];
        					ci = this.gfnIndexInArray(obj.usCodefind, colnm);
        				}
        				delete obj.usCodefindInfo[colnm];
        			}
        			else {
        				if(!this.gfnIsExistInArray(obj.usCodefind, colnm)) {
        					obj.usCodefind.push(colnm);
        				}
        				obj.usCodefindInfo[colnm] = info;
        			}
        		} else {
        			var ci = this.gfnIndexInArray(obj.usCodefind, colnm);
        			while(ci != -1) {
        				delete obj.usCodefind[ci];
        				ci = this.gfnIndexInArray(obj.usCodefind, colnm);
        			}
        			delete obj.usCodefindInfo[colnm];
        		}
        	}
        	else if (colnm == "DS_INPUT02") {
        		if(this.dsList12.getColumn(row, "YN_INPUT02") == "Y") {
        			return true;
        		} else {
        			return false;
        		}
        	}
        }

        this.dxGrid6_oncelldblclick = function(obj,e)
        {
        	if(this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "DS_FILE") {
        		this.fnDownload();
        	}
        }

        this.fdg00_onclose = function(obj,e)
        {
        	this.addFileList(obj, e.virtualfiles);
        };

        this.addFileList = function(obj, filelist)
        {
        	this.FileList = filelist;
        	if(filelist.length > 0) {
        		var vFile;
        		for (var i = 0; i < filelist.length; i++)
        		{
        			vFile = filelist[i];
        			vFile.row = obj.row;
        			vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
        			vFile.addEventHandler("onerror", this.FileList_onerror , this);

        			vFile.open(null, 1);
        		}
        	}
        }

        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			var row = obj.row;
        			this.filepath = "/CONT/" + this.dsSearch.getColumn(0, "CD_SITE") + "/HDSTOCK";
        			this.dsList6.setColumn(row, "DS_FILEPATH", this.filepath + '/' + obj.filename);
        			this.dsList6.setColumn(row, "DS_FILE", obj.filename);
        			//this.dsList.setColumn(row, "FILE_SIZ", null);
        			this.FileUpTransfer00.addFile(obj.filename, obj);
        			break;
        	}
        }

        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	trace("FileUpTransfer00_onprogress: " + e.loaded+"/"+e.total);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	this._waitCursor(false);
        	trace("FileUpTransfer00_onsuccess: " + e.code + "/" + e.message);
        	if(e.code == 0) {
        		if(e.datasets.length > 0) {
         			for(var i = 0; i < e.datasets[0].rowcount; i++) {
         				var row = obj.filelist[i].row;
         				this.dsList6.setColumn(row, "FILE_SIZ", e.datasets[0].getColumn(i, "filesize"));
         				this.dsList6.setColumn(row, "FILE_HASH", e.datasets[0].getColumn(i, "filehash"));
         			}
        			this.fnSaveAfterUpload();
        		}
        	}
        };

        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	this._waitCursor(false);
        	if(e.errormsg.indexOf("maxsize") > -1) {
        		this.gfnAlert("첨부파일 허용용량("+ this.gfnCutFileSize(nexacro.toNumber(e.errormsg.split(':')[1])) + ")을 초과할 수 없습니다.");
        	} else {
        		this.gfnAlert(e.errormsg);
        	}
        };

        this.fnDownload = function() {
        	if(!this.gfnIsNull(this.gfnGetFlag(this.dsList6, this.dsList6.rowposition))) return;

        	var ds_filepath = this.dsList6.getColumn(this.dsList.rowposition, "DS_FILEPATH");
        	if(!this.gfnIsNull(ds_filepath)) {
        		var sFilename = this.dsList6.getColumn(this.dsList.rowposition, "DS_FILE");
        		var sFilepath = ds_filepath.substring(0, ds_filepath.lastIndexOf('/'));
        		var encodeFileName = encodeURIComponent(sFilename);

        		var surl = this.fileConfig.host+ this.fileConfig.downloadUrl;
        		this.FileDownTransferStockmr.set_url(surl);
        		this.FileDownTransferStockmr.setPostData("path", sFilepath);
        		this.FileDownTransferStockmr.setPostData("fileName", encodeFileName);
        		if( system.navigatorname =="nexacro"){
        			this.FileDownTransferStockmr.set_downloadfilename(sFilename);
        		}
        		this.FileDownTransferStockmr.download();
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화

        		if(this.addSearchYn != "Y"){
        			//this.dsList.clearData(); //this.dsList.addRow();
        			this.dsList2.clearData(); //this.dsList2.addRow();
        			this.dsList3.clearData(); //this.dsList3.addRow();
        			this.dsList4.clearData(); //this.dsList4.addRow();
        			this.dsList5.clearData(); //this.dsList5.addRow();
        			this.dsList6.clearData(); //this.dsList6.addRow();
        			this.dsList12.clearData();
        		}

        		this.addSearchYn = "N";

        	}
        };

        // Splitter가 있는 탭의 Splitter 위치 조정을 위한 이벤트.
        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		var index = this.fnGetTapIndex();
        		//switch(this.divData.form.tabData.tabindex)
        		switch(index)
        		{
        			case 4:
        				this.divData.form.tabData.tab5.form.divSplitter.set_top(e.clienty);
        				this.divData.form.tabData.tab5.form.resetScroll();
        				break;
        			case 5:
        				this.divData.form.tabData.tab6.form.divSplitter.set_left(e.clientx);
        				this.divData.form.tabData.tab6.form.resetScroll();
        				break;
        			case 6:
        				this.divData.form.tabData.tab7.form.divSplitter.set_left(e.clientx);
        				this.divData.form.tabData.tab7.form.resetScroll();
        				break;
        			case 7:
        				this.divData.form.tabData.tab8.form.divSplitter.set_left(e.clientx);
        				this.divData.form.tabData.tab8.form.resetScroll();
        				break;
        		}
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };


        // 탭 이동 전 이벤트.
        this.divData_tabData_canchange = function(obj,e)
        {
        	if(e.preindex != e.postindex) {
        		if(!(e.preindex < 3 && e.postindex < 3)) // 0,1,2에서 0,1,2로의 이동이 아니라면.
        		{
        			if(this.gfnGetFormStatus(this) != "" && this.gfnGetFormStatus(this) != "Q" && this.gfnGetFormStatus(this) != "X") {
        				this.TabChangeIndex = e.postindex;
        				this.gfnConfirm("변경된 데이터가 있습니다.\r\n저장 후 이동하시겠습니까?", "fnTabChangeCheck");
        				return false;
        			}
        		}
        	}
        };

        // 탭 이동 전 저장확인 Confirm의 callback.
        this.fnTabChangeCheck = function(strId, val)
        {
        	if(val == true) {
        		if (!this.fnSave())
        		{
        			return false;
        		}
        		else
        		{
        			// set_tabindex 호출시 canchange가 또 호출되기 때문에 상태값을 초기화한 후 통과되도록 처리.
        			this.gfnSetFormStatus(this);
        			this.divData.form.tabData.set_tabindex(this.TabChangeIndex);
        		}
        	}
        	else
        	{
        		this.gfnSetFormStatus(this);
        		this.divData.form.tabData.set_tabindex(this.TabChangeIndex);
        	}
        }

        // 탭 이동 후 이벤트.
        this.divData_tabData_onchanged = function(obj,e)
        {
        	if(!(e.preindex < 3 && e.postindex < 3)) // 0,1,2에서 0,1,2로의 이동이 아니라면.
        	{
        		if(!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.FormBtns.Select.click();
        		}
        	}
        };

        // 계약정보탭(index=1)의 자동산식을 위한 이벤트
        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if(e.columnid == "AM_DOGEUB_PROV")
        		{
        			var am_dogeub_vat = e.newvalue * 0.1;
        			this.dsList.setColumn(0, "AM_DOGEUB_VAT", am_dogeub_vat);
        			this.dsList.setColumn(0, "AM_DOGEUB_TOT", e.newvalue + am_dogeub_vat);
        		}
        		else if(e.columnid == "AM_DOGEUB_VAT")
        		{
        			var am_dogeub_prov = this.dsList.getColumn(0, "AM_DOGEUB_PROV");
        			this.dsList.setColumn(0, "AM_DOGEUB_TOT", am_dogeub_prov + e.newvalue);
        		}

        		if(e.columnid == "AM_DOCOVOL_PROV")
        		{
        			var am_docovol_vat = e.newvalue * 0.1;
        			this.dsList.setColumn(0, "AM_DOCOVOL_VAT", am_docovol_vat);
        			this.dsList.setColumn(0, "AM_DOCOVOL_TOT", e.newvalue + am_docovol_vat);
        		}
        		else if(e.columnid == "AM_DOCOVOL_VAT")
        		{
        			var am_docovol_prov = this.dsList.getColumn(0, "AM_DOCOVOL_PROV");
        			this.dsList.setColumn(0, "AM_DOCOVOL_TOT", am_docovol_prov + e.newvalue);
        		}

        		if(e.columnid == "AM_CONT_PROV")
        		{
        			var am_cont_vat = e.newvalue * 0.1;
        			this.dsList.setColumn(0, "AM_CONT_VAT", am_cont_vat);
        			this.dsList.setColumn(0, "AM_CONT_TOT", e.newvalue + am_cont_vat);
        		}
        		else if(e.columnid == "AM_CONT_VAT")
        		{
        			var am_cont_prov = this.dsList.getColumn(0, "AM_CONT_PROV");
        			this.dsList.setColumn(0, "AM_CONT_TOT", am_cont_prov + e.newvalue);
        		}

        		if(e.columnid == "AM_OCOCONT_PROV")
        		{
        			var am_ococont_vat = e.newvalue * 0.1;
        			this.dsList.setColumn(0, "AM_OCOCONT_VAT", am_ococont_vat);
        			this.dsList.setColumn(0, "AM_OCOCONT_TOT", e.newvalue + am_ococont_vat);
        		}
        		else if(e.columnid == "AM_OCOCONT_VAT")
        		{
        			var am_ococont_prov = this.dsList.getColumn(0, "AM_OCOCONT_PROV");
        			this.dsList.setColumn(0, "AM_OCOCONT_TOT", am_ococont_prov + e.newvalue);
        		}
        		else if(e.columnid == "DS_FLOORM2")
        		{
        			var ds_plottagem2 = this.dsList.getColumn(0, "DS_PLOTTAGEM2");
        			this.dsList.setColumn(0, "DS_BUILDRATIO", e.newvalue / ds_plottagem2 * 100);
        		}
        		else if(e.columnid == "DS_PLOTTAGEM2")
        		{
        			var ds_floorm2 = this.dsList.getColumn(0, "DS_FLOORM2");
        			var ds_totfloorm2 = this.dsList.getColumn(0, "DS_TOTFLOORM2");
        			this.dsList.setColumn(0, "DS_BUILDRATIO", ds_floorm2 / e.newvalue * 100);
        			this.dsList.setColumn(0, "DS_FLOORRATIO", ds_totfloorm2 / e.newvalue * 100);
        		}
        		else if(e.columnid == "DS_TOTFLOORM2")
        		{
        			var ds_plottagem2 = this.dsList.getColumn(0, "DS_PLOTTAGEM2");
        			this.dsList.setColumn(0, "DS_FLOORRATIO", e.newvalue / ds_plottagem2 * 100);
        		}
        		else if(e.columnid == "DS_TOTFLOORPY")
        		{
        			var ds_totfloorm2 = e.newvalue / 0.3025;
        			this.dsList.setColumn(0, "DS_TOTFLOORM2", ds_totfloorm2);

        			var ds_plottagem2 = this.dsList.getColumn(0, "DS_PLOTTAGEM2");
        			this.dsList.setColumn(0, "DS_FLOORRATIO", ds_totfloorm2 / ds_plottagem2 * 100);
        		}
        		else if(e.columnid == "AM_INVMRVW_CONT" || e.columnid == "AM_INVMRVW_EBGT")
        		{
        			var am_invmrvw_ebgt = this.dsList.getColumn(0, "AM_INVMRVW_EBGT");
        			var am_invmrvw_cont = this.dsList.getColumn(0, "AM_INVMRVW_CONT");
        			this.dsList.setColumn(0, "RT_INVMRVW", (am_invmrvw_ebgt / am_invmrvw_cont) * 100);
        		}
        		else if(e.columnid == "AM_OCOVOLINVMRVW_CONT" || e.columnid == "AM_OCOVOLINVMRVW_EBGT")
        		{
        			var am_ocovolinvmrvw_ebgt = this.dsList.getColumn(0, "AM_OCOVOLINVMRVW_EBGT");
        			var am_ocovolinvmrvw_cont = this.dsList.getColumn(0, "AM_OCOVOLINVMRVW_CONT");
        			this.dsList.setColumn(0, "RT_OCOVOLINVMRVW", (am_ocovolinvmrvw_ebgt / am_ocovolinvmrvw_cont) * 100);
        		}

        		// 입력 상태가 아니라면 Update 상태로 변경.
        		var status = this.gfnGetFormStatus(this);
        		if(status == "Q" && status != "I")
        		{
        			this.gfnSetFormStatus(this, "U");
        		}
        	}
        };

        // 공동도급탭(index=4)의 자동산식을 위한 이벤트
        this.dsList3_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if(e.columnid == "AM_SPLPRC")
        		{
        			var am_vat = e.newvalue * 0.1;
        			this.dsList3.setColumn(e.row, "AM_VAT", am_vat);
        			var am_splprc_txfr = this.dsList3.getColumn(e.row, "AM_SPLPRC_TXFR");
        			this.dsList3.setColumn(e.row, "AM_DOKUB", nexacro.toNumber(e.newvalue,0) + nexacro.toNumber(am_vat,0) + nexacro.toNumber(am_splprc_txfr,0));
        		}
        		else if(e.columnid == "AM_VAT")
        		{
        			var am_splprc = this.dsList3.getColumn(e.row, "AM_SPLPRC");
        			var am_splprc_txfr = this.dsList3.getColumn(e.row, "AM_SPLPRC_TXFR");
        			this.dsList3.setColumn(e.row, "AM_DOKUB", nexacro.toNumber(am_splprc,0) + nexacro.toNumber(e.newvalue,0) + nexacro.toNumber(am_splprc_txfr,0));
        		}
        		else if(e.columnid == "AM_SPLPRC_TXFR")
        		{
        			var am_splprc = this.dsList3.getColumn(e.row, "AM_SPLPRC");
        			var am_vat = this.dsList3.getColumn(e.row, "AM_VAT");
        			this.dsList3.setColumn(e.row, "AM_DOKUB", nexacro.toNumber(am_splprc,0) + nexacro.toNumber(am_vat,0) + nexacro.toNumber(e.newvalue,0));
        		}
        		else if(e.columnid == "RT_JIBUN")
        		{
        			var am_dogeub_tot = this.dsList.getColumn(0, "AM_DOGEUB_TOT"); // 계약정보 탭의 총도급 합계
        			var am_dogeub_vat = this.dsList.getColumn(0, "AM_DOGEUB_VAT"); // 계약정보 탭의 총도급 부가세
        			var am_dogeub_prov = this.dsList.getColumn(0, "AM_DOGEUB_PROV"); // 계약정보 탭의 총도급 공급가액

        			var am_dokub = nexacro.toNumber(am_dogeub_tot,0) * nexacro.toNumber(e.newvalue,0) * 0.01;
        			var am_vat =  nexacro.toNumber(am_dogeub_vat,0) * nexacro.toNumber(e.newvalue,0) * 0.01;
        			var am_splprc = nexacro.toNumber(am_vat,0) * 10;

        			this.dsList3.setColumn(e.row, "AM_DOKUB", nexacro.toNumber(am_dokub,0));
        			this.dsList3.setColumn(e.row, "AM_VAT", nexacro.toNumber(am_vat,0));
        			this.dsList3.setColumn(e.row, "AM_SPLPRC", nexacro.toNumber(am_splprc,0));
        			this.dsList3.setColumn(e.row, "AM_SPLPRC_TXFR", nexacro.toNumber(am_dokub,0) - (nexacro.toNumber(am_splprc,0) + nexacro.toNumber(am_vat,0)));
        		}
        	}
        };

        // 계획/공정 탭(index=9)의 자동산식을 위한 이벤트
        this.dsList10_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		//공정율(%) 당월(계획) 변경시.
        		if(e.columnid == "RT_PLNPROC_TMON")
        		{
        			var am_silheng = this.dsList10.getColumn(e.row, "AM_SILHENG");
        			for (var i = e.row; i < this.dsList10.rowcount; i++) {
        				// 첫 행이면 이전 행이 존재하지 않음.
        				if(i != 0)
        				{
        					var row_rt_plnproc_tmon = this.dsList10.getColumn(i, "RT_PLNPROC_TMON");
        					var prevRow_rt_plnproc_tsum = this.dsList10.getColumn(i - 1, "RT_PLNPROC_TSUM");
        					this.dsList10.setColumn(i, "RT_PLNPROC_TSUM", row_rt_plnproc_tmon + prevRow_rt_plnproc_tsum);
        				}
        				else
        				{
        					this.dsList10.setColumn(i, "RT_PLNPROC_TSUM", e.newvalue);
        				}

        				var row_rt_plnproc_tsum = this.dsList10.getColumn(i, "RT_PLNPROC_TSUM");
        				var am_plnsilheng = am_silheng * row_rt_plnproc_tsum / 100;
        				var am_prgs = this.dsList10.getColumn(i, "AM_PRGS");
        				var am_cstipt = this.dsList10.getColumn(i, "AM_CSTIPT_TSUM");
        				this.dsList10.setColumn(i, "AM_PLNSILHENG", am_plnsilheng);
        				this.dsList10.setColumn(i, "AM_PLNSILHENGVSPRGS", am_plnsilheng - am_prgs);
        				this.dsList10.setColumn(i, "AM_PLNSILHENGVSIPT", am_plnsilheng - am_cstipt);
        			}
        		}
        		// 공정율(%) 누계(계획) 변경시.
        		else if(e.columnid == "RT_PLNPROC_TSUM")
        		{
        			var am_silheng = this.dsList10.getColumn(e.row, "AM_SILHENG");
        			for (var i = e.row; i < this.dsList10.rowcount; i++) {
        				// 첫 행이면 이전 행이 존재하지 않음.
        				if(i != 0)
        				{
        					var row_rt_plnproc_tsum = this.dsList10.getColumn(i, "RT_PLNPROC_TSUM");
        					var prevRow_rt_plnproc_tsum = this.dsList10.getColumn(i - 1, "RT_PLNPROC_TSUM");

        					this.dsList10.setColumn(i, "RT_PLNPROC_TMON", row_rt_plnproc_tsum - prevRow_rt_plnproc_tsum);
        				}
        				else
        				{
        					this.dsList10.setColumn(i, "RT_PLNPROC_TMON", e.newvalue);
        				}

        				var row_rt_plnproc_tsum = this.dsList10.getColumn(i, "RT_PLNPROC_TSUM");
        				var am_plnsilheng = am_silheng * row_rt_plnproc_tsum / 100;
        				var am_prgs = this.dsList10.getColumn(i, "AM_PRGS");
        				var am_cstipt = this.dsList10.getColumn(i, "AM_CSTIPT_TSUM");
        				this.dsList10.setColumn(i, "AM_PLNSILHENG", am_plnsilheng);
        				this.dsList10.setColumn(i, "AM_PLNSILHENGVSPRGS", am_plnsilheng - am_prgs);
        				this.dsList10.setColumn(i, "AM_PLNSILHENGVSIPT", am_plnsilheng - am_cstipt);
        			}
         		}
        		//공정율(%) 당월(실적) 변경시.
        		else if(e.columnid == "RT_RSLTPROC_TMON")
        		{
        			var am_silheng = this.dsList10.getColumn(e.row, "AM_SILHENG");
        			for (var i = e.row; i < this.dsList10.rowcount; i++) {
        				// 첫 행이면 이전 행이 존재하지 않음.
        				if(i != 0)
        				{
        					var row_rt_rsltproc_tmon = this.dsList10.getColumn(i, "RT_RSLTPROC_TMON");
        					var prevRow_rt_rlstproc_tsum = this.dsList10.getColumn(i - 1, "RT_RLSTPROC_TSUM");
        					this.dsList10.setColumn(i, "RT_RLSTPROC_TSUM", row_rt_rsltproc_tmon + prevRow_rt_rlstproc_tsum);
        				}
        				else
        				{
        					this.dsList10.setColumn(i, "RT_RLSTPROC_TSUM", e.newvalue);
        				}


        				var row_rt_rlstproc_tsum = this.dsList10.getColumn(i, "RT_RLSTPROC_TSUM");
        				var am_rlstsilheng = am_silheng * row_rt_rlstproc_tsum / 100;
        				var am_prgs = this.dsList10.getColumn(i, "AM_PRGS");
        				var am_cstipt = this.dsList10.getColumn(i, "AM_CSTIPT_TSUM");
        				this.dsList10.setColumn(i, "AM_RLSTSILHENG", am_rlstsilheng);
        				this.dsList10.setColumn(i, "AM_RLSTSILHENGVSPRGS", am_rlstsilheng - am_prgs);
        				this.dsList10.setColumn(i, "AM_RLSTSILHENGVSIPT", am_rlstsilheng - am_cstipt);
        			}
        		}
        		// 공정율(%) 누계(실적) 변경시.
        		else if(e.columnid == "RT_RLSTPROC_TSUM")
        		{
        			var am_silheng = this.dsList10.getColumn(e.row, "AM_SILHENG");
        			for (var i = e.row; i < this.dsList10.rowcount; i++) {
        				// 첫 행이면 이전 행이 존재하지 않음.
        				if(i != 0)
        				{
        					var row_rt_rlstproc_tsum = this.dsList10.getColumn(i, "RT_RLSTPROC_TSUM");
        					var prevRow_rt_rlstproc_tsum = this.dsList10.getColumn(i - 1, "RT_RLSTPROC_TSUM");

        					this.dsList10.setColumn(i, "RT_RSLTPROC_TMON", row_rt_rlstproc_tsum - prevRow_rt_rlstproc_tsum);
        				}
        				else
        				{
        					this.dsList10.setColumn(i, "RT_RSLTPROC_TMON", e.newvalue);
        				}

        				var row_rt_rlstproc_tsum = this.dsList10.getColumn(i, "RT_RLSTPROC_TSUM");
        				var am_rlstsilheng = am_silheng * row_rt_rlstproc_tsum / 100;
        				var am_prgs = this.dsList10.getColumn(i, "AM_PRGS");
        				var am_cstipt = this.dsList10.getColumn(i, "AM_CSTIPT_TSUM");
        				this.dsList10.setColumn(i, "AM_RLSTSILHENG", am_rlstsilheng);
        				this.dsList10.setColumn(i, "AM_RLSTSILHENGVSPRGS", am_rlstsilheng - am_prgs);
        				this.dsList10.setColumn(i, "AM_RLSTSILHENGVSIPT", am_rlstsilheng - am_cstipt);
        			}
        		}
        	}
        };


        this.fnSetParameter1 = function()
        {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("DS_SITE", "string");
        	this.dsSave.addColumn("DS_KONGSA", "string");
        	this.dsSave.addColumn("NO_ZIP", "string");
        	this.dsSave.addColumn("AT_SITE", "string");
        	this.dsSave.addColumn("AT_SITE2", "string");
        	this.dsSave.addColumn("AR_SITE", "string");
        	this.dsSave.addColumn("TY_DESI", "string");
        	this.dsSave.addColumn("AT_SITEORM", "string");
        	this.dsSave.addColumn("CD_BONBU", "string");
        	this.dsSave.addColumn("CD_SAUPCENTER", "string");
        	this.dsSave.addColumn("NO_TEL", "string");
        	this.dsSave.addColumn("NO_FAX", "string");
        	this.dsSave.addColumn("CD_SALE", "string");
        	this.dsSave.addColumn("CD_INCMSTRT", "string");
        	this.dsSave.addColumn("TY_SAUPKIND", "string");
        	this.dsSave.addColumn("TY_KONGSA", "string");
        	this.dsSave.addColumn("TY_KONG_PRO", "string");
        	this.dsSave.addColumn("YN_END", "string");
        	this.dsSave.addColumn("DT_END", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("DS_IMWON", "string");
        	this.dsSave.addColumn("NO_IMWON", "string");
        	this.dsSave.addColumn("RK_IMWON", "string");
        	this.dsSave.addColumn("DS_SOJANG", "string");
        	this.dsSave.addColumn("NO_SOJANG", "string");
        	this.dsSave.addColumn("RK_SOJANG", "string");
        	this.dsSave.addColumn("DS_CHONGMU", "string");
        	this.dsSave.addColumn("NO_CHONGMU", "string");
        	this.dsSave.addColumn("RK_CHONGMU", "string");
        	this.dsSave.addColumn("DS_CHFMNGR", "string");
        	this.dsSave.addColumn("NO_CHFMNGR", "string");
        	this.dsSave.addColumn("RK_CHFMNGR", "string");
        	this.dsSave.addColumn("DS_SITEAGNC", "string");
        	this.dsSave.addColumn("NO_SITEAGNC", "string");
        	this.dsSave.addColumn("RK_SITEAGNC", "string");
        	this.dsSave.addColumn("DS_PM", "string");
        	this.dsSave.addColumn("NO_PM", "string");
        	this.dsSave.addColumn("RK_PM", "string");
        	this.dsSave.addColumn("DS_KOANRL", "string");
        	this.dsSave.addColumn("NO_KOANRL", "string");
        	this.dsSave.addColumn("RK_KOANRL", "string");
        	this.dsSave.addColumn("DS_GONGMU", "string");
        	this.dsSave.addColumn("NO_GONGMU", "string");
        	this.dsSave.addColumn("RK_GONGMU", "string");
        	this.dsSave.addColumn("AM_DOGEUB_PROV", "bigdecimal");
        	this.dsSave.addColumn("AM_DOGEUB_VAT", "bigdecimal");
        	this.dsSave.addColumn("YN_JOINT", "string");
        	this.dsSave.addColumn("AM_DOCOVOL_PROV", "bigdecimal");
        	this.dsSave.addColumn("AM_DOCOVOL_VAT", "bigdecimal");
        	this.dsSave.addColumn("YN_JUGAN", "string");
        	this.dsSave.addColumn("AM_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("RT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("RT_SOCOVOL", "bigdecimal");
        	this.dsSave.addColumn("RT_TAX", "bigdecimal");
        	this.dsSave.addColumn("YN_ZERO", "string");
        	this.dsSave.addColumn("AM_SOCOVOL", "bigdecimal");
        	this.dsSave.addColumn("RT_ASRAMT", "bigdecimal");
        	this.dsSave.addColumn("AM_CONT_PROV", "bigdecimal");
        	this.dsSave.addColumn("AM_CONT_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_OCOCONT_PROV", "bigdecimal");
        	this.dsSave.addColumn("AM_OCOCONT_VAT", "bigdecimal");
        	this.dsSave.addColumn("DT_GEYAK", "string");
        	this.dsSave.addColumn("DT_CHAKGONG", "string");
        	this.dsSave.addColumn("DT_OJUNGONG", "string");
        	this.dsSave.addColumn("DT_CJUNGONG", "string");
        	this.dsSave.addColumn("DT_FROM", "string");
        	this.dsSave.addColumn("DT_TO", "string");
        	this.dsSave.addColumn("DT_CCNSTEM", "string");
        	this.dsSave.addColumn("DT_HAJA_FROM", "string");
        	this.dsSave.addColumn("DT_HAJA_TO", "string");
        	this.dsSave.addColumn("DT_RCEND", "string");
        	this.dsSave.addColumn("DS_HAJA", "string");
        	this.dsSave.addColumn("AM_GUAR", "bigdecimal");
        	this.dsSave.addColumn("RT_GUAR", "bigdecimal");
        	this.dsSave.addColumn("DS_CONDITION", "string");
        	this.dsSave.addColumn("DS_RECEIVE", "string");
        	this.dsSave.addColumn("AM_INVMRVW_CONT", "bigdecimal");
        	this.dsSave.addColumn("AM_INVMRVW_EBGT", "bigdecimal");
        	this.dsSave.addColumn("AM_OCOVOLINVMRVW_CONT", "bigdecimal");
        	this.dsSave.addColumn("AM_OCOVOLINVMRVW_EBGT", "bigdecimal");
        	this.dsSave.addColumn("DS_PLOTTAGEM2", "bigdecimal");
        	this.dsSave.addColumn("DS_PLOTTAGEPY", "bigdecimal");
        	this.dsSave.addColumn("DS_FLOORM2", "bigdecimal");
        	this.dsSave.addColumn("DS_FLOORPY", "bigdecimal");
        	this.dsSave.addColumn("DS_BUILDRATIO", "bigdecimal");
        	this.dsSave.addColumn("DS_SLLTSQMS", "bigdecimal");
        	this.dsSave.addColumn("DS_TOTFLOORM2", "bigdecimal");
        	this.dsSave.addColumn("DS_TOTFLOORPY", "bigdecimal");
        	this.dsSave.addColumn("DS_FLOORRATIO", "bigdecimal");
        	this.dsSave.addColumn("DS_SLLTLARSQMS", "bigdecimal");
        	this.dsSave.addColumn("DS_HOUSEHOLDS", "string");
        	this.dsSave.addColumn("DS_OCOTOTFLOORM2", "bigdecimal");
        	this.dsSave.addColumn("DS_OCOTOTFLOORPY", "bigdecimal");
        	this.dsSave.addColumn("DS_SCALE", "string");
        	this.dsSave.addColumn("DS_STRUCT", "string");
        	this.dsSave.addColumn("DS_USEAREA", "string");
        	this.dsSave.addColumn("YN_USE", "string");
        	this.dsSave.addColumn("YN_CM", "string");
        	this.dsSave.addColumn("TY_BALJU", "string");
        	this.dsSave.addColumn("AM_SITEEBGT", "bigdecimal");
        	this.dsSave.addColumn("CD_COST_STRUCT", "string");
        	this.dsSave.addColumn("GR_AREA", "string");
        	this.dsSave.addColumn("CD_PMDEPT", "string");
        	this.dsSave.addColumn("CD_ACC", "string");
        	this.dsSave.addColumn("DS_CLIENT", "string");
        	this.dsSave.addColumn("DS_SUYO", "string");
        	this.dsSave.addColumn("DS_DESIGN", "string");
        	this.dsSave.addColumn("DS_GAMRI1", "string");
        	this.dsSave.addColumn("TY_GAMRI1", "string");
        	this.dsSave.addColumn("DS_GAMRI2", "string");
        	this.dsSave.addColumn("TY_GAMRI2", "string");
        	this.dsSave.addColumn("DS_GAMRI3", "string");
        	this.dsSave.addColumn("TY_GAMRI3", "string");
        	this.dsSave.addColumn("DS_SAFE", "string");
        	this.dsSave.addColumn("NO_SAFE", "string");
        	this.dsSave.addColumn("RK_SAFE", "string");
        	this.dsSave.addColumn("DS_QUAL", "string");
        	this.dsSave.addColumn("NO_QUAL", "string");
        	this.dsSave.addColumn("RK_QUAL", "string");
        	this.dsSave.addColumn("RT_JIBUN", "bigdecimal");
        	this.dsSave.addColumn("RT_RSOCOVOL", "bigdecimal");
        	this.dsSave.addColumn("RT_DELAYIJA", "bigdecimal");
        	this.dsSave.addColumn("NO_SILHENG", "string");
        	this.dsSave.addColumn("RT_CONT", "bigdecimal");
        	this.dsSave.addColumn("CD_CURRENCY", "string");
        	this.dsSave.addColumn("DT_EXCHANGE", "string");
        	this.dsSave.addColumn("RT_EXCHANGE", "bigdecimal");
        	this.dsSave.addColumn("AM_FOREIGN", "bigdecimal");
        	this.dsSave.addColumn("AM_DESIGNPRICE", "bigdecimal");
        	this.dsSave.addColumn("RT_DESIGNPRICE", "bigdecimal");
        	this.dsSave.addColumn("AM_PREPRICE", "bigdecimal");
        	this.dsSave.addColumn("RT_PREPRICE", "bigdecimal");
        	this.dsSave.addColumn("NO_CHAKGONG", "string");
        	this.dsSave.addColumn("TY_PROGRESS", "string");
        	this.dsSave.addColumn("RT_HAJA", "bigdecimal");
        	this.dsSave.addColumn("DS_UPSCALE", "int");
        	this.dsSave.addColumn("DS_DOWNSCALE", "int");
        	this.dsSave.addColumn("DS_MAINSTREET", "string");
        	this.dsSave.addColumn("DS_PARKING", "string");
        	this.dsSave.addColumn("DS_HEIGHT", "string");
        	this.dsSave.addColumn("DT_ACCEPTUSE", "string");
        	this.dsSave.addColumn("DS_ROOF", "string");
        	this.dsSave.addColumn("DS_LANDSCAPE", "string");
        	this.dsSave.addColumn("DS_SB", "string");
        	this.dsSave.addColumn("GU_SB", "string");
        	this.dsSave.addColumn("DS_KB", "string");
        	this.dsSave.addColumn("GU_KB", "string");
        	this.dsSave.addColumn("YN_HY", "string");
        	this.dsSave.addColumn("YN_GP", "string");
        	this.dsSave.addColumn("YN_CY", "string");
        	this.dsSave.addColumn("DS_WIIM", "string");
        	this.dsSave.addColumn("DS_ETC", "string");
        	this.dsSave.addColumn("RT_ILBAN", "bigdecimal");
        	this.dsSave.addColumn("GU_EPC", "string");
        	this.dsSave.addColumn("AM_ILBAN", "bigdecimal");
        	this.dsSave.addColumn("YN_SILJUKINPUT", "string");
        	this.dsSave.addColumn("YN_OPEN", "string");
        	this.dsSave.addColumn("YN_GSCOST", "string");
        	this.dsSave.addColumn("YN_MAP", "string");
        	this.dsSave.addColumn("AM_SJDOGEUB_PROV", "bigdecimal");
        	this.dsSave.addColumn("AM_SJDOGEUB_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_SJDOCOVOL_PROV", "bigdecimal");
        	this.dsSave.addColumn("AM_SJDOCOVOL_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_CONTSOCOVOL", "bigdecimal");
        	this.dsSave.addColumn("YN_RP", "string");
        	this.dsSave.addColumn("YN_GISUNG", "string");
        	this.dsSave.addColumn("AM_BONSA", "bigdecimal");
        	this.dsSave.addColumn("YN_GISUNG_JIK", "string");
        	this.dsSave.addColumn("GR_COSTFIND", "int");
        	this.dsSave.addColumn("YN_SILHENGCHA", "string");
        	this.dsSave.addColumn("YN_OPENCHA", "string");
        	this.dsSave.addColumn("CD_BUMUN", "string");
        	this.dsSave.addColumn("YN_COMMU", "string");
        	this.dsSave.addColumn("YN_ELEC", "string");
        	this.dsSave.addColumn("YN_FIRE", "string");
        	this.dsSave.addColumn("YN_PLAN", "string");
        	this.dsSave.addColumn("YN_GASILHENG", "string");
        	this.dsSave.addColumn("YN_DAEPYO", "string");
        	this.dsSave.addColumn("YN_DOLGWAN", "string");
        	this.dsSave.addColumn("YN_HAJA", "string");
        	this.dsSave.addColumn("DT_BONSILCON", "string");
        	this.dsSave.addColumn("DS_DOKUBSTD", "string");
        	this.dsSave.addColumn("RM_BIGO", "string");
        	this.dsSave.addColumn("DS_DEMAND", "string");
        	this.dsSave.addColumn("CD_MAINSITE", "string");
        	this.dsSave.addColumn("YN_BIDPLAZAVIEW", "string");
        	this.dsSave.addColumn("CD_STDUPRC", "string");
        	this.dsSave.addColumn("YN_PROFIT", "string");
        	this.dsSave.addColumn("CD_CNSTKND", "string");
        	this.dsSave.addColumn("DT_EBGT_FROM", "string");
        	this.dsSave.addColumn("DT_EBGT_TO", "string");
        	this.dsSave.addColumn("AM_SLLTCONT", "bigdecimal");
        	this.dsSave.addColumn("RT_PRDV", "bigdecimal");
        	this.dsSave.addColumn("DT_MIBLSCH", "string");

        	this.dsSave12 = new Dataset();
        	this.dsSave12.addColumn("TY_GUBUN", "string");
        	this.dsSave12.addColumn("CD_SITE", "string");
        	this.dsSave12.addColumn("CD_TYPE", "string");
        	this.dsSave12.addColumn("CD_CODE", "string");
        	this.dsSave12.addColumn("DS_INPUT01", "string");
        	this.dsSave12.addColumn("DS_INPUT02", "string");
        	this.dsSave12.addColumn("YN_SAP", "string");
        	this.dsSave12.addColumn("RM_ETC", "string");
        	this.dsSave12.addColumn("ID_UPDATE", "string");

        	this.dsSaveChrpsn = new Dataset();
        	this.dsSaveChrpsn.addColumn("TY_WRK", "string");
        	this.dsSaveChrpsn.addColumn("ID_USER", "string");
        	this.dsSaveChrpsn.addColumn("CD_SITE", "string");
        	this.dsSaveChrpsn.addColumn("CD_CHRPSN", "string");
        	this.dsSaveChrpsn.addColumn("ID_CHRPSN", "string");
        	this.dsSaveChrpsn.addColumn("NM_CHRPSN", "string");
        	this.dsSaveChrpsn.addColumn("RK_CHRPSN", "string");
        	this.dsSaveChrpsn.addColumn("DS_RMKS", "string");
        }

        this.fnSetParameter2 = function()
        {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("CD_VNDR", "string");
        	this.dsSave.addColumn("TY_VNDR", "string");
        	this.dsSave.addColumn("RT_PORTION", "bigdecimal");
        	this.dsSave.addColumn("CD_SUP_DIV", "string");
        	this.dsSave.addColumn("CD_SUP_CTP", "string");
        	this.dsSave.addColumn("DS_RMKS", "string");
        }

        this.fnSetParameter3 = function()
        {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("CD_CTM", "string");
        	this.dsSave.addColumn("DS_CONJOINTCOM", "string");
        	this.dsSave.addColumn("AM_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("AM_SPLPRC", "bigdecimal");
        	this.dsSave.addColumn("AM_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_SPLPRC_TXFR", "bigdecimal");
        	this.dsSave.addColumn("TY_DOKUB", "string");
        	this.dsSave.addColumn("RT_JIBUN", "bigdecimal");
        	this.dsSave.addColumn("RT_JIBUNAGREE", "bigdecimal");
        	this.dsSave.addColumn("NO_BANKBOOK", "string");
        	this.dsSave.addColumn("DS_EMAIL", "string");
        	this.dsSave.addColumn("YN_CONTRACT", "string");
        	this.dsSave.addColumn("YN_END", "string");
        	this.dsSave.addColumn("DT_END", "string");
        	this.dsSave.addColumn("RM_END", "string");
        	this.dsSave.addColumn("NO_TEL", "string");
        	this.dsSave.addColumn("NO_FAX", "string");
        	this.dsSave.addColumn("DS_DAMDANG", "string");
        	this.dsSave.addColumn("YN_JUGAN", "string");
        	this.dsSave.addColumn("RM_BIGO", "string");
        	this.dsSave.addColumn("RT_PROFIT", "bigdecimal");
        	this.dsSave.addColumn("YN_JOINT", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        }

        this.fnSetParameter6 = function()
        {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("SN_SEQ", "string");
        	this.dsSave.addColumn("NO_GUARANTEE", "string");
        	this.dsSave.addColumn("AM_GUARANTEE", "bigdecimal");
        	this.dsSave.addColumn("AM_FEE", "bigdecimal");
        	this.dsSave.addColumn("DT_PUBLICATION", "string");
        	this.dsSave.addColumn("OR_PUBLICATION", "string");
        	this.dsSave.addColumn("DT_START", "string");
        	this.dsSave.addColumn("DT_MANRYO", "string");
        	this.dsSave.addColumn("RM_BIGO", "string");
        	this.dsSave.addColumn("DS_FILEPATH", "string");
        	this.dsSave.addColumn("FILE_SIZ", "int");
        	this.dsSave.addColumn("FILE_HASH", "string");
        }

        this.fnSetParameter9 = function()
        {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("DT_DEMAND", "string");
        	this.dsSave.addColumn("DS_RACCTRSN", "string");
        }

        this.fnSetParameter10 = function()
        {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("RT_PLNPROC", "bigdecimal");
        	this.dsSave.addColumn("RT_RSLTPROC", "bigdecimal");
        	this.dsSave.addColumn("DS_RMKS", "string");
        }

        this.fnSave1 = function()
        {
        	this.dsSave.clearData();

        	var nrow = this.dsSave.addRow();
        	var nxflag = "";
        	if(this.dsList.getRowType(0) == "2"){
        		nxflag = "I";
        	}else if(this.dsList.getRowType(0) == "4"){
        		nxflag = "U";
        	}
        	this.dsSave.setColumn(nrow, "TY_WRK", nxflag);
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        	this.dsSave.setColumn(nrow, "DS_SITE", this.dsList.getColumn(0, "DS_SITE"));
        	this.dsSave.setColumn(nrow, "DS_KONGSA", this.dsList.getColumn(0, "DS_KONGSA"));
        	this.dsSave.setColumn(nrow, "NO_ZIP", this.dsList.getColumn(0, "NO_ZIP"));
        	this.dsSave.setColumn(nrow, "AT_SITE", this.dsList.getColumn(0, "AT_SITE"));
        	this.dsSave.setColumn(nrow, "AT_SITE2", this.dsList.getColumn(0, "AT_SITE2"));
        	this.dsSave.setColumn(nrow, "AR_SITE", this.dsList.getColumn(0, "AR_SITE"));
        	this.dsSave.setColumn(nrow, "TY_DESI", this.dsList.getColumn(0, "TY_DESI"));
        	this.dsSave.setColumn(nrow, "AT_SITEORM", this.dsList.getColumn(0, "AT_SITEORM"));
        	this.dsSave.setColumn(nrow, "CD_BONBU", this.dsList.getColumn(0, "CD_BONBU"));
        	this.dsSave.setColumn(nrow, "CD_SAUPCENTER", this.dsList.getColumn(0, "CD_SAUPCENTER"));
        	this.dsSave.setColumn(nrow, "NO_TEL", this.dsList.getColumn(0, "NO_TEL"));
        	this.dsSave.setColumn(nrow, "NO_FAX", this.dsList.getColumn(0, "NO_FAX"));
        	this.dsSave.setColumn(nrow, "CD_SALE", this.dsList.getColumn(0, "CD_SALE"));
        	this.dsSave.setColumn(nrow, "CD_INCMSTRT", this.dsList.getColumn(0, "CD_INCMSTRT"));
        	this.dsSave.setColumn(nrow, "TY_SAUPKIND", this.dsList.getColumn(0, "TY_SAUPKIND"));
        	this.dsSave.setColumn(nrow, "TY_KONGSA", this.dsList.getColumn(0, "TY_KONGSA"));
        	this.dsSave.setColumn(nrow, "TY_KONG_PRO", this.dsList.getColumn(0, "TY_KONG_PRO"));
        	this.dsSave.setColumn(nrow, "YN_END", this.dsList.getColumn(0, "YN_END"));
        	this.dsSave.setColumn(nrow, "DT_END", this.dsList.getColumn(0, "DT_END"));
        	this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        // 	this.dsSave.setColumn(nrow, "DS_IMWON", this.dsList.getColumn(0, "DS_IMWON"));
        // 	this.dsSave.setColumn(nrow, "NO_IMWON", this.dsList.getColumn(0, "NO_IMWON"));
        // 	this.dsSave.setColumn(nrow, "RK_IMWON", this.dsList.getColumn(0, "RK_IMWON"));
        // 	this.dsSave.setColumn(nrow, "DS_SOJANG", this.dsList.getColumn(0, "DS_SOJANG"));
        // 	this.dsSave.setColumn(nrow, "NO_SOJANG", this.dsList.getColumn(0, "NO_SOJANG"));
        // 	this.dsSave.setColumn(nrow, "RK_SOJANG", this.dsList.getColumn(0, "RK_SOJANG"));
        // 	this.dsSave.setColumn(nrow, "DS_CHONGMU", this.dsList.getColumn(0, "DS_CHONGMU"));
        // 	this.dsSave.setColumn(nrow, "NO_CHONGMU", this.dsList.getColumn(0, "NO_CHONGMU"));
        // 	this.dsSave.setColumn(nrow, "RK_CHONGMU", this.dsList.getColumn(0, "RK_CHONGMU"));
        // 	this.dsSave.setColumn(nrow, "DS_CHFMNGR", this.dsList.getColumn(0, "DS_CHFMNGR"));
        // 	this.dsSave.setColumn(nrow, "NO_CHFMNGR", this.dsList.getColumn(0, "NO_CHFMNGR"));
        // 	this.dsSave.setColumn(nrow, "RK_CHFMNGR", this.dsList.getColumn(0, "RK_CHFMNGR"));
        // 	this.dsSave.setColumn(nrow, "DS_SITEAGNC", this.dsList.getColumn(0, "DS_SITEAGNC"));
        // 	this.dsSave.setColumn(nrow, "NO_SITEAGNC", this.dsList.getColumn(0, "NO_SITEAGNC"));
        // 	this.dsSave.setColumn(nrow, "RK_SITEAGNC", this.dsList.getColumn(0, "RK_SITEAGNC"));
        // 	this.dsSave.setColumn(nrow, "DS_PM", this.dsList.getColumn(0, "DS_PM"));
        // 	this.dsSave.setColumn(nrow, "NO_PM", this.dsList.getColumn(0, "NO_PM"));
        // 	this.dsSave.setColumn(nrow, "RK_PM", this.dsList.getColumn(0, "RK_PM"));
        // 	this.dsSave.setColumn(nrow, "DS_KOANRL", this.dsList.getColumn(0, "DS_KOANRL"));
        // 	this.dsSave.setColumn(nrow, "NO_KOANRL", this.dsList.getColumn(0, "NO_KOANRL"));
        // 	this.dsSave.setColumn(nrow, "RK_KOANRL", this.dsList.getColumn(0, "RK_KOANRL"));
        // 	this.dsSave.setColumn(nrow, "DS_GONGMU", this.dsList.getColumn(0, "DS_GONGMU"));
        // 	this.dsSave.setColumn(nrow, "NO_GONGMU", this.dsList.getColumn(0, "NO_GONGMU"));
        // 	this.dsSave.setColumn(nrow, "RK_GONGMU", this.dsList.getColumn(0, "RK_GONGMU"));
        	this.dsSave.setColumn(nrow, "AM_DOGEUB_PROV", this.dsList.getColumn(0, "AM_DOGEUB_PROV"));
        	this.dsSave.setColumn(nrow, "AM_DOGEUB_VAT", this.dsList.getColumn(0, "AM_DOGEUB_VAT"));
        	this.dsSave.setColumn(nrow, "YN_JOINT", this.dsList.getColumn(0, "YN_JOINT"));
        	this.dsSave.setColumn(nrow, "AM_DOCOVOL_PROV", this.dsList.getColumn(0, "AM_DOCOVOL_PROV"));
        	this.dsSave.setColumn(nrow, "AM_DOCOVOL_VAT", this.dsList.getColumn(0, "AM_DOCOVOL_VAT"));
        	this.dsSave.setColumn(nrow, "YN_JUGAN", this.dsList.getColumn(0, "YN_JUGAN"));
        	this.dsSave.setColumn(nrow, "AM_SILHENG", this.dsList.getColumn(0, "AM_SILHENG"));
        	this.dsSave.setColumn(nrow, "RT_SILHENG", this.dsList.getColumn(0, "RT_SILHENG"));
        	this.dsSave.setColumn(nrow, "RT_SOCOVOL", this.dsList.getColumn(0, "RT_SOCOVOL"));
        	this.dsSave.setColumn(nrow, "RT_TAX", this.dsList.getColumn(0, "RT_TAX"));
        	this.dsSave.setColumn(nrow, "YN_ZERO", this.dsList.getColumn(0, "YN_ZERO"));
        	this.dsSave.setColumn(nrow, "AM_SOCOVOL", this.dsList.getColumn(0, "AM_SOCOVOL"));
        	this.dsSave.setColumn(nrow, "RT_ASRAMT", this.dsList.getColumn(0, "RT_ASRAMT"));
        	this.dsSave.setColumn(nrow, "AM_CONT_PROV", this.dsList.getColumn(0, "AM_CONT_PROV"));
        	this.dsSave.setColumn(nrow, "AM_CONT_VAT", this.dsList.getColumn(0, "AM_CONT_VAT"));
        	this.dsSave.setColumn(nrow, "AM_OCOCONT_PROV", this.dsList.getColumn(0, "AM_OCOCONT_PROV"));
        	this.dsSave.setColumn(nrow, "AM_OCOCONT_VAT", this.dsList.getColumn(0, "AM_OCOCONT_VAT"));
        	this.dsSave.setColumn(nrow, "DT_GEYAK", this.dsList.getColumn(0, "DT_GEYAK"));
        	this.dsSave.setColumn(nrow, "DT_CHAKGONG", this.dsList.getColumn(0, "DT_CHAKGONG"));
        	this.dsSave.setColumn(nrow, "DT_OJUNGONG", this.dsList.getColumn(0, "DT_OJUNGONG"));
        	this.dsSave.setColumn(nrow, "DT_CJUNGONG", this.dsList.getColumn(0, "DT_CJUNGONG"));
        	this.dsSave.setColumn(nrow, "DT_FROM", this.dsList.getColumn(0, "DT_FROM"));
        	this.dsSave.setColumn(nrow, "DT_TO", this.dsList.getColumn(0, "DT_TO"));
        	this.dsSave.setColumn(nrow, "DT_CCNSTEM", this.dsList.getColumn(0, "DT_CCNSTEM"));
        	this.dsSave.setColumn(nrow, "DT_HAJA_FROM", this.dsList.getColumn(0, "DT_HAJA_FROM"));
        	this.dsSave.setColumn(nrow, "DT_HAJA_TO", this.dsList.getColumn(0, "DT_ASEND"));
        	this.dsSave.setColumn(nrow, "DT_RCEND", this.dsList.getColumn(0, "DT_RCEND"));
        	this.dsSave.setColumn(nrow, "DS_HAJA", this.dsList.getColumn(0, "DS_HAJA"));
        	this.dsSave.setColumn(nrow, "AM_GUAR", this.dsList.getColumn(0, "AM_GUAR"));
        	this.dsSave.setColumn(nrow, "RT_GUAR", this.dsList.getColumn(0, "RT_GUAR"));
        	this.dsSave.setColumn(nrow, "DS_CONDITION", this.dsList.getColumn(0, "DS_CONDITION"));
        	this.dsSave.setColumn(nrow, "DS_RECEIVE", this.dsList.getColumn(0, "DS_RECEIVE"));
        	this.dsSave.setColumn(nrow, "AM_INVMRVW_CONT", this.dsList.getColumn(0, "AM_INVMRVW_CONT"));
        	this.dsSave.setColumn(nrow, "AM_INVMRVW_EBGT", this.dsList.getColumn(0, "AM_INVMRVW_EBGT"));
        	this.dsSave.setColumn(nrow, "AM_OCOVOLINVMRVW_CONT", this.dsList.getColumn(0, "AM_OCOVOLINVMRVW_CONT"));
        	this.dsSave.setColumn(nrow, "AM_OCOVOLINVMRVW_EBGT", this.dsList.getColumn(0, "AM_OCOVOLINVMRVW_EBGT"));
        	this.dsSave.setColumn(nrow, "DS_PLOTTAGEM2", this.dsList.getColumn(0, "DS_PLOTTAGEM2"));
        	this.dsSave.setColumn(nrow, "DS_PLOTTAGEPY", this.dsList.getColumn(0, "DS_PLOTTAGEPY"));
        	this.dsSave.setColumn(nrow, "DS_FLOORM2", this.dsList.getColumn(0, "DS_FLOORM2"));
        	this.dsSave.setColumn(nrow, "DS_FLOORPY", this.dsList.getColumn(0, "DS_FLOORPY"));
        	this.dsSave.setColumn(nrow, "DS_BUILDRATIO", this.dsList.getColumn(0, "DS_BUILDRATIO"));
        	this.dsSave.setColumn(nrow, "DS_SLLTSQMS", this.dsList.getColumn(0, "DS_SLLTSQMS"));
        	this.dsSave.setColumn(nrow, "DS_TOTFLOORM2", this.dsList.getColumn(0, "DS_TOTFLOORM2"));
        	this.dsSave.setColumn(nrow, "DS_TOTFLOORPY", this.dsList.getColumn(0, "DS_TOTFLOORPY"));
        	this.dsSave.setColumn(nrow, "DS_FLOORRATIO", this.dsList.getColumn(0, "DS_FLOORRATIO"));
        	this.dsSave.setColumn(nrow, "DS_SLLTLARSQMS", this.dsList.getColumn(0, "DS_SLLTLARSQMS"));
        	this.dsSave.setColumn(nrow, "DS_HOUSEHOLDS", this.dsList.getColumn(0, "DS_HOUSEHOLDS"));
        	this.dsSave.setColumn(nrow, "DS_OCOTOTFLOORM2", this.dsList.getColumn(0, "DS_OCOTOTFLOORM2"));
        	this.dsSave.setColumn(nrow, "DS_OCOTOTFLOORPY", this.dsList.getColumn(0, "DS_OCOTOTFLOORPY"));
        	this.dsSave.setColumn(nrow, "DS_SCALE", this.dsList.getColumn(0, "DS_SCALE"));
        	this.dsSave.setColumn(nrow, "DS_STRUCT", this.dsList.getColumn(0, "DS_STRUCT"));
        	this.dsSave.setColumn(nrow, "DS_USEAREA", this.dsList.getColumn(0, "DS_USEAREA"));
        	this.dsSave.setColumn(nrow, "YN_USE", this.dsList.getColumn(0, "YN_USE"));
        	this.dsSave.setColumn(nrow, "CD_COST_STRUCT", this.dsList.getColumn(0, "CD_COST_STRUCT"));
        	this.dsSave.setColumn(nrow, "GR_AREA", this.dsList.getColumn(0, "GR_AREA"));
        	this.dsSave.setColumn(nrow, "CD_PMDEPT", this.dsList.getColumn(0, "CD_PMDEPT"));
        	this.dsSave.setColumn(nrow, "CD_ACC", this.dsList.getColumn(0, "CD_ACC"));
        	this.dsSave.setColumn(nrow, "DS_CLIENT", this.dsList.getColumn(0, "DS_CLIENT"));
        	this.dsSave.setColumn(nrow, "TY_BALJU", this.dsList.getColumn(0, "TY_BALJU"));
        	this.dsSave.setColumn(nrow, "AM_SITEEBGT", this.dsList.getColumn(0, "AM_SITEEBGT"));
        	this.dsSave.setColumn(nrow, "DS_SUYO", this.dsList.getColumn(0, "DS_SUYO"));
        	this.dsSave.setColumn(nrow, "DS_DESIGN", this.dsList.getColumn(0, "DS_DESIGN"));
        	this.dsSave.setColumn(nrow, "DS_GAMRI1", this.dsList.getColumn(0, "DS_GAMRI1"));
        	this.dsSave.setColumn(nrow, "TY_GAMRI1", this.dsList.getColumn(0, "TY_GAMRI1"));
        	this.dsSave.setColumn(nrow, "DS_GAMRI2", this.dsList.getColumn(0, "DS_GAMRI2"));
        	this.dsSave.setColumn(nrow, "TY_GAMRI2", this.dsList.getColumn(0, "TY_GAMRI2"));
        	this.dsSave.setColumn(nrow, "DS_GAMRI3", this.dsList.getColumn(0, "DS_GAMRI3"));
        	this.dsSave.setColumn(nrow, "TY_GAMRI3", this.dsList.getColumn(0, "TY_GAMRI3"));
        	this.dsSave.setColumn(nrow, "DS_SAFE", this.dsList.getColumn(0, "DS_SAFE"));
        	this.dsSave.setColumn(nrow, "NO_SAFE", this.dsList.getColumn(0, "NO_SAFE"));
        	this.dsSave.setColumn(nrow, "RK_SAFE", this.dsList.getColumn(0, "RK_SAFE"));
        	this.dsSave.setColumn(nrow, "DS_QUAL", this.dsList.getColumn(0, "DS_QUAL"));
        	this.dsSave.setColumn(nrow, "NO_QUAL", this.dsList.getColumn(0, "NO_QUAL"));
        	this.dsSave.setColumn(nrow, "RK_QUAL", this.dsList.getColumn(0, "RK_QUAL"));
        	this.dsSave.setColumn(nrow, "RT_JIBUN", this.dsList.getColumn(0, "RT_JIBUN"));
        	this.dsSave.setColumn(nrow, "RT_RSOCOVOL", this.dsList.getColumn(0, "RT_RSOCOVOL"));
        	this.dsSave.setColumn(nrow, "RT_DELAYIJA", this.dsList.getColumn(0, "RT_DELAYIJA"));
        	this.dsSave.setColumn(nrow, "NO_SILHENG", this.dsList.getColumn(0, "NO_SILHENG"));
        	this.dsSave.setColumn(nrow, "RT_CONT", this.dsList.getColumn(0, "RT_CONT"));
        	this.dsSave.setColumn(nrow, "CD_CURRENCY", this.dsList.getColumn(0, "CD_CURRENCY"));
        	this.dsSave.setColumn(nrow, "DT_EXCHANGE", this.dsList.getColumn(0, "DT_EXCHANGE"));
        	this.dsSave.setColumn(nrow, "RT_EXCHANGE", this.dsList.getColumn(0, "RT_EXCHANGE"));
        	this.dsSave.setColumn(nrow, "AM_FOREIGN", this.dsList.getColumn(0, "AM_FOREIGN"));
        	this.dsSave.setColumn(nrow, "AM_DESIGNPRICE", this.dsList.getColumn(0, "AM_DESIGNPRICE"));
        	this.dsSave.setColumn(nrow, "RT_DESIGNPRICE", this.dsList.getColumn(0, "RT_DESIGNPRICE"));
        	this.dsSave.setColumn(nrow, "AM_PREPRICE", this.dsList.getColumn(0, "AM_PREPRICE"));
        	this.dsSave.setColumn(nrow, "RT_PREPRICE", this.dsList.getColumn(0, "RT_PREPRICE"));
        	this.dsSave.setColumn(nrow, "NO_CHAKGONG", this.dsList.getColumn(0, "NO_CHAKGONG"));
        	this.dsSave.setColumn(nrow, "TY_PROGRESS", this.dsList.getColumn(0, "TY_PROGRESS"));
        	this.dsSave.setColumn(nrow, "RT_HAJA", this.dsList.getColumn(0, "RT_HAJA"));
        	this.dsSave.setColumn(nrow, "DS_UPSCALE", this.dsList.getColumn(0, "DS_UPSCALE"));
        	this.dsSave.setColumn(nrow, "DS_DOWNSCALE", this.dsList.getColumn(0, "DS_DOWNSCALE"));
        	this.dsSave.setColumn(nrow, "DS_MAINSTREET", this.dsList.getColumn(0, "DS_MAINSTREET"));
        	this.dsSave.setColumn(nrow, "DS_PARKING", this.dsList.getColumn(0, "DS_PARKING"));
        	this.dsSave.setColumn(nrow, "DS_HEIGHT", this.dsList.getColumn(0, "DS_HEIGHT"));
        	this.dsSave.setColumn(nrow, "DT_ACCEPTUSE", this.dsList.getColumn(0, "DT_ACCEPTUSE"));
        	this.dsSave.setColumn(nrow, "DS_ROOF", this.dsList.getColumn(0, "DS_ROOF"));
        	this.dsSave.setColumn(nrow, "DS_LANDSCAPE", this.dsList.getColumn(0, "DS_LANDSCAPE"));
        	this.dsSave.setColumn(nrow, "DS_SB", this.dsList.getColumn(0, "DS_SB"));
        	this.dsSave.setColumn(nrow, "GU_SB", this.dsList.getColumn(0, "GU_SB"));
        	this.dsSave.setColumn(nrow, "DS_KB", this.dsList.getColumn(0, "DS_KB"));
        	this.dsSave.setColumn(nrow, "GU_KB", this.dsList.getColumn(0, "GU_KB"));
        	this.dsSave.setColumn(nrow, "YN_HY", this.dsList.getColumn(0, "YN_HY"));
        	this.dsSave.setColumn(nrow, "YN_GP", this.dsList.getColumn(0, "YN_GP"));
        	this.dsSave.setColumn(nrow, "YN_CY", this.dsList.getColumn(0, "YN_CY"));
        	this.dsSave.setColumn(nrow, "DS_WIIM", this.dsList.getColumn(0, "DS_WIIM"));
        	this.dsSave.setColumn(nrow, "DS_ETC", this.dsList.getColumn(0, "DS_ETC"));
        	this.dsSave.setColumn(nrow, "RT_ILBAN", this.dsList.getColumn(0, "RT_ILBAN"));
        	this.dsSave.setColumn(nrow, "GU_EPC", this.dsList.getColumn(0, "GU_EPC"));
        	this.dsSave.setColumn(nrow, "AM_ILBAN", this.dsList.getColumn(0, "AM_ILBAN"));
        	this.dsSave.setColumn(nrow, "YN_SILJUKINPUT", this.dsList.getColumn(0, "YN_SILJUKINPUT"));
        	this.dsSave.setColumn(nrow, "YN_OPEN", this.dsList.getColumn(0, "YN_OPEN"));
        	this.dsSave.setColumn(nrow, "YN_GSCOST", this.dsList.getColumn(0, "YN_GSCOST"));
        	this.dsSave.setColumn(nrow, "YN_MAP", this.dsList.getColumn(0, "YN_MAP"));
        	this.dsSave.setColumn(nrow, "AM_SJDOGEUB_PROV", this.dsList.getColumn(0, "AM_SJDOGEUB_PROV"));
        	this.dsSave.setColumn(nrow, "AM_SJDOGEUB_VAT", this.dsList.getColumn(0, "AM_SJDOGEUB_VAT"));
        	this.dsSave.setColumn(nrow, "AM_SJDOCOVOL_PROV", this.dsList.getColumn(0, "AM_SJDOCOVOL_PROV"));
        	this.dsSave.setColumn(nrow, "AM_SJDOCOVOL_VAT", this.dsList.getColumn(0, "AM_SJDOCOVOL_VAT"));
        	this.dsSave.setColumn(nrow, "AM_CONTSOCOVOL", this.dsList.getColumn(0, "AM_CONTSOCOVOL"));
        	this.dsSave.setColumn(nrow, "YN_RP", this.dsList.getColumn(0, "YN_RP"));
        	this.dsSave.setColumn(nrow, "YN_GISUNG", this.dsList.getColumn(0, "YN_GISUNG"));
        	this.dsSave.setColumn(nrow, "AM_BONSA", this.dsList.getColumn(0, "AM_BONSA"));
        	this.dsSave.setColumn(nrow, "YN_GISUNG_JIK", this.dsList.getColumn(0, "YN_GISUNG_JIK"));
        	this.dsSave.setColumn(nrow, "GR_COSTFIND", this.dsList.getColumn(0, "GR_COSTFIND"));
        	this.dsSave.setColumn(nrow, "YN_SILHENGCHA", this.dsList.getColumn(0, "YN_SILHENGCHA"));
        	this.dsSave.setColumn(nrow, "YN_OPENCHA", this.dsList.getColumn(0, "YN_OPENCHA"));
        	this.dsSave.setColumn(nrow, "CD_BUMUN", this.dsList.getColumn(0, "CD_BUMUN"));
        	this.dsSave.setColumn(nrow, "YN_COMMU", this.dsList.getColumn(0, "YN_COMMU"));
        	this.dsSave.setColumn(nrow, "YN_ELEC", this.dsList.getColumn(0, "YN_ELEC"));
        	this.dsSave.setColumn(nrow, "YN_FIRE", this.dsList.getColumn(0, "YN_FIRE"));
        	this.dsSave.setColumn(nrow, "YN_PLAN", this.dsList.getColumn(0, "YN_PLAN"));
        	this.dsSave.setColumn(nrow, "YN_GASILHENG", this.dsList.getColumn(0, "YN_GASILHENG"));
        	this.dsSave.setColumn(nrow, "YN_DAEPYO", this.dsList.getColumn(0, "YN_DAEPYO"));
        	this.dsSave.setColumn(nrow, "YN_DOLGWAN", this.dsList.getColumn(0, "YN_DOLGWAN"));
        	this.dsSave.setColumn(nrow, "YN_HAJA", this.dsList.getColumn(0, "YN_HAJA"));
        	this.dsSave.setColumn(nrow, "DT_BONSILCON", this.dsList.getColumn(0, "DT_BONSILCON"));
        	this.dsSave.setColumn(nrow, "DS_DOKUBSTD", this.dsList.getColumn(0, "DS_DOKUBSTD"));
        	this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(0, "RM_BIGO"));
        	this.dsSave.setColumn(nrow, "DS_DEMAND", this.dsList.getColumn(0, "DS_DEMAND"));
        	this.dsSave.setColumn(nrow, "CD_MAINSITE", this.dsList.getColumn(0, "CD_MAINSITE"));
        	this.dsSave.setColumn(nrow, "YN_BIDPLAZAVIEW", this.dsList.getColumn(0, "YN_BIDPLAZAVIEW"));
        	this.dsSave.setColumn(nrow, "CD_STDUPRC", this.dsList.getColumn(0, "CD_STDUPRC"));
        	this.dsSave.setColumn(nrow, "YN_PROFIT", this.dsList.getColumn(0, "YN_PROFIT"));
        	this.dsSave.setColumn(nrow, "CD_CNSTKND", this.dsList.getColumn(0, "CD_CNSTKND"));
        	this.dsSave.setColumn(nrow, "YN_CM", this.dsList.getColumn(0, "YN_CM"));
        	this.dsSave.setColumn(nrow, "DT_EBGT_FROM", this.dsList.getColumn(0, "DT_EBGT_FROM"));
        	this.dsSave.setColumn(nrow, "DT_EBGT_TO", this.dsList.getColumn(0, "DT_EBGT_TO"));
        	this.dsSave.setColumn(nrow, "AM_SLLTCONT", this.dsList.getColumn(0, "AM_SLLTCONT"));
        	this.dsSave.setColumn(nrow, "RT_PRDV", this.dsList.getColumn(0, "RT_PRDV"));
        	this.dsSave.setColumn(nrow, "DT_MIBLSCH", this.dsList.getColumn(0, "DT_MIBLSCH"));
        	this.dsSave12.clearData();

        	for(var i =0;i< this.dsList12.rowcount;i++){
        	var flag = this.gfnGetFlag(this.dsList12, i);
        		if(flag == "U" || flag == "D"){
        			var nrow12 = this.dsSave12.addRow();

        			this.dsSave12.setColumn(nrow12, "TY_GUBUN", flag);
        			this.dsSave12.setColumn(nrow12, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSave12.setColumn(nrow12, "CD_TYPE", this.dsList12.getColumn(i, "CD_GUBUN"));
        			this.dsSave12.setColumn(nrow12, "CD_CODE", this.dsList12.getColumn(i, "CD_CODE"));
        			this.dsSave12.setColumn(nrow12, "DS_INPUT01", this.dsList12.getColumn(i, "DS_INPUT01"));
        			this.dsSave12.setColumn(nrow12, "DS_INPUT02", this.dsList12.getColumn(i, "DS_INPUT02"));
        			this.dsSave12.setColumn(nrow12, "YN_SAP", this.dsList12.getColumn(i, "YN_SAP"));
        			this.dsSave12.setColumn(nrow12, "RM_ETC", this.dsList12.getColumn(i, "RM_ETC"));
        			this.dsSave12.setColumn(nrow12, "ID_UPDATE", this.AuthClient.ID_USER);

        		}
        	}

        	this.dsSaveChrpsn.clearData();
        	for(var i =0;i< this.dsListChrpsn.rowcount;i++){
        		var flag = this.gfnGetFlag(this.dsListChrpsn, i);
        		if(flag == "U"){
        			var nrow = this.dsSaveChrpsn.addRow();
        			this.dsSaveChrpsn.setColumn(nrow, "TY_WRK", "U");
        			this.dsSaveChrpsn.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsSaveChrpsn.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSaveChrpsn.setColumn(nrow, "CD_CHRPSN", this.dsListChrpsn.getColumn(i, "CD_CHRPSN"));
        			this.dsSaveChrpsn.setColumn(nrow, "ID_CHRPSN", this.dsListChrpsn.getColumn(i, "ID_CHRPSN"));
        			this.dsSaveChrpsn.setColumn(nrow, "NM_CHRPSN", this.dsListChrpsn.getColumn(i, "NM_CHRPSN"));
        			this.dsSaveChrpsn.setColumn(nrow, "RK_CHRPSN", this.dsListChrpsn.getColumn(i, "RK_CHRPSN"));
        			this.dsSaveChrpsn.setColumn(nrow, "DS_RMKS", this.dsListChrpsn.getColumn(i, "DS_RMKS"));
        		}
        	}
        }

        this.fnSave2 = function()
        {
        	if (!this.gfnGridValidate(this.dxGrid2)) return false;
        	this.dxGrid2.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "CD_VNDR", this.dsList2.getColumn(i, "CD_VNDR"));
        				this.dsSave.setColumn(nrow, "TY_VNDR", this.dsList2.getColumn(i, "TY_VNDR"));
        				this.dsSave.setColumn(nrow, "RT_PORTION", this.dsList2.getColumn(i, "RT_PORTION"));
        				this.dsSave.setColumn(nrow, "CD_SUP_DIV", this.dsList2.getColumn(i, "CD_SUP_DIV"));
        				this.dsSave.setColumn(nrow, "CD_SUP_CTP", this.dsList2.getColumn(i, "CD_SUP_CTP"));
        				this.dsSave.setColumn(nrow, "DS_RMKS", this.dsList2.getColumn(i, "DS_RMKS"));
        			break;
        		}
        	}

        	return true;
        }

        this.fnSave3 = function()
        {
        	if (!this.gfnGridValidate(this.dxGrid3)) return false;
        	this.dxGrid3.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList3.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList3, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "CD_CTM", this.dsList3.getColumn(i, "CD_CTM"));
        				this.dsSave.setColumn(nrow, "DS_CONJOINTCOM", this.dsList3.getColumn(i, "DS_CONJOINTCOM"));
        				this.dsSave.setColumn(nrow, "AM_DOKUB", this.dsList3.getColumn(i, "AM_DOKUB"));
        				this.dsSave.setColumn(nrow, "AM_SPLPRC", this.dsList3.getColumn(i, "AM_SPLPRC"));
        				this.dsSave.setColumn(nrow, "AM_VAT", this.dsList3.getColumn(i, "AM_VAT"));
        				this.dsSave.setColumn(nrow, "AM_SPLPRC_TXFR", this.dsList3.getColumn(i, "AM_SPLPRC_TXFR"));
        				this.dsSave.setColumn(nrow, "TY_DOKUB", this.dsList3.getColumn(i, "TY_DOKUB"));
        				this.dsSave.setColumn(nrow, "RT_JIBUN", this.dsList3.getColumn(i, "RT_JIBUN"));
        				this.dsSave.setColumn(nrow, "RT_JIBUNAGREE", this.dsList3.getColumn(i, "RT_JIBUNAGREE"));
        				this.dsSave.setColumn(nrow, "NO_BANKBOOK", this.dsList3.getColumn(i, "NO_BANKBOOK"));
        				this.dsSave.setColumn(nrow, "DS_EMAIL", this.dsList3.getColumn(i, "DS_EMAIL"));
        				this.dsSave.setColumn(nrow, "YN_CONTRACT", this.dsList3.getColumn(i, "YN_CONTRACT"));
        				this.dsSave.setColumn(nrow, "YN_END", this.dsList3.getColumn(i, "YN_END"));
        				this.dsSave.setColumn(nrow, "DT_END", this.dsList3.getColumn(i, "DT_END"));
        				this.dsSave.setColumn(nrow, "RM_END", this.dsList3.getColumn(i, "RM_END"));
        				this.dsSave.setColumn(nrow, "NO_TEL", this.dsList3.getColumn(i, "NO_TEL"));
        				this.dsSave.setColumn(nrow, "NO_FAX", this.dsList3.getColumn(i, "NO_FAX"));
        				this.dsSave.setColumn(nrow, "DS_DAMDANG", this.dsList3.getColumn(i, "DS_DAMDANG"));
        				this.dsSave.setColumn(nrow, "YN_JUGAN", this.dsList3.getColumn(i, "YN_JUGAN"));
        				this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList3.getColumn(i, "RM_BIGO"));
        				this.dsSave.setColumn(nrow, "RT_PROFIT", this.dsList3.getColumn(i, "RT_PROFIT"));
        				this.dsSave.setColumn(nrow, "YN_JOINT", this.dsList3.getColumn(i, "YN_JOINT"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsList3.getColumn(i, "CD_COST"));
        			break;
        		}
        	}

        	return true;
        }

        this.fnSave6 = function()
        {
        	this.dxGrid6.updateToDataset();

        	this.dsSave.clearData();
        	//this.dsDeleteFile.clearData(); // 서버에서 삭제할 파일

        	for (var i = 0; i < this.dsList6.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList6, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "SN_SEQ", this.dsList6.getColumn(i, "SN_SEQ"));
        				this.dsSave.setColumn(nrow, "NO_GUARANTEE", this.dsList6.getColumn(i, "NO_GUARANTEE"));
        				this.dsSave.setColumn(nrow, "AM_GUARANTEE", this.dsList6.getColumn(i, "AM_GUARANTEE"));
        				this.dsSave.setColumn(nrow, "AM_FEE", this.dsList6.getColumn(i, "AM_FEE"));
        				this.dsSave.setColumn(nrow, "DT_PUBLICATION", this.dsList6.getColumn(i, "DT_PUBLICATION"));
        				this.dsSave.setColumn(nrow, "OR_PUBLICATION", this.dsList6.getColumn(i, "OR_PUBLICATION"));
        				this.dsSave.setColumn(nrow, "DT_START", this.dsList6.getColumn(i, "DT_START"));
        				this.dsSave.setColumn(nrow, "DT_MANRYO", this.dsList6.getColumn(i, "DT_MANRYO"));
        				this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList6.getColumn(i, "RM_BIGO"));
        				this.dsSave.setColumn(nrow, "DS_FILEPATH", this.dsList6.getColumn(i, "DS_FILEPATH"));
        				this.dsSave.setColumn(nrow, "FILE_SIZ", this.dsList6.getColumn(i, "FILE_SIZ"));
        				this.dsSave.setColumn(nrow, "FILE_HASH", this.dsList6.getColumn(i, "FILE_HASH"));

        				// 삭제시 서버파일도 삭제
        // 				if(flag == "D") {
        // 					if (!this.gfnIsNull(this.dsList6.getColumn(i, "DS_FILE"))) {
        // 						nrow = this.dsDeleteFile.addRow();
        // 						var key = this.dsSearch.getColumn(0, "CD_SITE");
        // 						this.dsDeleteFile.setColumn(nrow, "filepath", this.dsList.getColumn(i, "DS_FILEPATH"));
        // 						this.dsDeleteFile.setColumn(nrow, "filename", this.dsList6.getColumn(i, "DS_FILE"));
        // 					}
        // 				}
        			break;
        		}
        	}

        	return true;
        }

        this.fnSave9 = function()
        {
        	if (!this.gfnGridValidate(this.dxGrid9)) return false;
        	this.dxGrid9.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList9.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList9, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "DT_DEMAND", this.dsList9.getColumn(i, "DT_DEMAND"));
        				this.dsSave.setColumn(nrow, "DS_RACCTRSN", this.dsList9.getColumn(i, "DS_RACCTRSN"));
        				break;
        		}
        	}
        	return true;
        }

        this.fnSave10 = function()
        {
        	if (!this.gfnGridValidate(this.dxGrid10)) return false;
        	this.dxGrid10.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList10.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList10, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsList10.getColumn(i, "YM_WORK"));
        				this.dsSave.setColumn(nrow, "RT_PLNPROC", this.dsList10.getColumn(i, "RT_PLNPROC_TMON"));
        				this.dsSave.setColumn(nrow, "RT_RSLTPROC", this.dsList10.getColumn(i, "RT_RSLTPROC_TMON"));
        				this.dsSave.setColumn(nrow, "DS_RMKS", "");
        				break;
        		}
        	}

        	return true;
        }

        this.fnExecute10 = function()
        {
        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_WRK", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("CD_SITE", "string");

        	var strSvcId    = "execute10";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute10=dsExecute";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	var nrow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nrow, "TY_WRK", "CRT");
        	this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }


        /************************************************************************
         * 그리드 로우별 파일업로드 관련
         ************************************************************************/
        this.fnSetFile = function() {

        	// 파일설정
        	this.fileConfig = this.gfnGetFileConfig();
        	this.fileConfig.allowTypes = ["jpg","jpeg","gif","png"]; // 넥사브라우저 전용, 웹은 적용불가
        	this.fileConfig.uploadUrl = this.fileConfig.uploadUrl + "?path=" + this.filepath;
        };

        this.fnSaveAfterUpload = function() {
        	if (!this.gfnGridValidate(this.dxGrid6)) return;

        	this.fnSetParameter6();
        	this.fnSave6();

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save6";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save6=dsSave";
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

        	// 서버 파일 삭제
        // 	if(this.dsDeleteFile.rowcount > 0) {
        //
        // 		var strSvcId    = "deletefile";
        // 		var strSvcType  = "file/deleteFile";
        // 		var inProc		= "";
        // 		var inData      = "input=dsDeleteFile";
        // 		var outData     = "";
        // 		var strArg      = "";
        // 		var callBackFnc = "fnCallback";
        //
        // 		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 							strSvcType , 	// transaction을 요청할 구분
        // 							inProc,			// Procedure 정보 Dataset 이름
        // 							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 							callBackFnc); // 통신방법 정의 [생략가능]
        // 	}
        };

        // this.fileup_onitemchanged = function(obj:nexacro.FileUpload,e:nexacro.FileUploadItemChangeEventInfo) {
        // 	var row = obj.row;
        // 	if(obj.filelist.length > 0) {
        // 		var filename = obj.filelist[0].filename;
        // 		var fileext = filename.toLocaleLowerCase().substring(filename.lastIndexOf('.')+1);
        // 		if(!this.gfnIsExistInArray(this.fileConfig.allowTypes, fileext)) {
        // 			this.gfnAlert("이미지 파일(" + this.fileConfig.allowTypes.join(',') + ")을 선택하세요.");
        // 			return;
        // 		}
        // 		this.dsList6.setColumn(row, "DS_FILE", obj.filelist[0].filename);
        // 	}
        // }
        //
        // this.fileup_onsuccess = function(obj:nexacro.FileUpload,e:nexacro.FileUploadEventInfo) {
        // 	this.filecnt += 1;
        // 	if(this.keys.length == this.filecnt) {
        // 		// 전체 업로드 완료시 저장 진행
        // 		this.fnSaveAfterUpload();
        // 	}
        // }
        //
        // this.fileup_onerror = function(obj:nexacro.FileUpload,e:nexacro.FileUploadErrorEventInfo) {
        // 	// 업로드 오류 파일은 제외하고 저장
        // 	this.filecnt += 1;
        // 	if(this.keys.length == this.filecnt) {
        // 		this.fnSaveAfterUpload();
        // 	}
        // }
        //
        //
        // this.fnImageView = function() {
        // 	if (!this.gfnGridIsRow(this.dxGrid6)) { return false; }
        // 	if (this.gfnGetFlag(this.dsList6, this.dsList6.rowposition) == "I") {
        // 		this.divData.form.tabData.tab7.form.divDataRight.form.imgViewer.set_image(null);
        // 	}
        // 	if (this.gfnIsNull(this.dsList6.getColumn(this.dsList6.rowposition, "DS_FILE"))) { return false; }
        //
        // 	this.dsImageFile.clearData();
        // 	this.dsImageFile.addRow();
        // 	var key = this.dsSearch.getColumn(0, "CD_SITE");
        // 	this.dsImageFile.setColumn(0, "filepath", this.filepath + key);
        // 	this.dsImageFile.setColumn(0, "filename", this.dsList6.getColumn(this.dsList6.rowposition, "DS_FILE"));
        //
        // 	// 서버 이미지파일 base64 로 받아오기
        // 	var strSvcId    = "imagefile";
        // 	var strSvcType  = "file/imageFile";
        // 	var inProc		= "";
        // 	var inData      = "input=dsImageFile";
        // 	var outData     = "dsImageFile=input";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        // };


        this.fnGetTapIndex = function()
        {
        	var index = -1;

        	var text = this.divData.form.tabData.tabpages[this.divData.form.tabData.tabindex].text;

        	switch(text)
        	{
        		case "공사개요" : index = 0;
        			break;
        		case "계약정보" : index = 1;
        			break;
        		case "공사규모" :	index = 2;
        			break;
        		case "발주처" :	index = 3;
        			break;
        		case "공동도급" :	index = 4;
        			break;
        		case "현장인원" :	index = 5;
        			break;
        		case "하도대금지급보증서" :	index = 6;
        			break;
        		case "도급/실행" :	index = 7;
        			break;
        		case "청구/수금" :	index = 8;
        			break;
        		case "계획/공정" :	index = 9;
        			break;
        	}

        	return index;
        }



         // 전자조달계정초기화 버튼 클릭
         this.fnEPS = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	// 계정생성 컬럼
        	if(this.dsList3.findRow("YN_CHECK", "Y") < 0){
        		this.gfnAlert("공동도급 항목에서 계정 추가할 회원사를 선택한 후 버튼을 눌러주세요.");
        		return false;
        	}

        	this.gfnConfirm("전자조달계정초기화 처리 하시겠습니까?", "dsList3_EPS_callback");
        }

        // 전자조달계정초기화 버튼 클릭 후 callback
        this.dsList3_EPS_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsExec.clearData();

        		for (var i = 0; i < this.dsList3.rowcount; i++) {
        			if(this.dsList3.getColumn(i, "YN_CHECK") == "Y"){
        				var nrow = this.dsExec.addRow();

        				this.dsExec.setColumn(nrow, "CD_VENDOR", this.dsList3.getColumn(i, "CD_CTM"));	// 거래처코드
        			}
        		}

        		if (this.dsExec.rowcount == 0) return;

        		var strSvcId    = "exec";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "exec=dsExec";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.addEventHandler("canchange",this.divData_tabData_canchange,this);
            this.divData.form.tabData.tab1.form.staDT_END.addEventHandler("onclick",this.divData_tabData_tab1_staDT_END_onclick,this);
            this.divData.form.tabData.tab5.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.tabData.tab6.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.tabData.tab8.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList3.addEventHandler("oncolumnchanged",this.dsList3_oncolumnchanged,this);
            this.dsList3.addEventHandler("onrowposchanged",this.dsList3_onrowposchanged,this);
            this.dsList10.addEventHandler("oncolumnchanged",this.dsList10_oncolumnchanged,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
        };
        this.loadIncludeScript("DZM_SITE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
