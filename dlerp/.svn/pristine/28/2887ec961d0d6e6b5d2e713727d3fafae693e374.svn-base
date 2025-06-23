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
                this._setFormPosition(1410,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_KONGSA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"AT_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"AT_SITE2\" type=\"STRING\" size=\"256\"/><Column id=\"AR_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DESI\" type=\"STRING\" size=\"256\"/><Column id=\"AT_SITEORM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BONBU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BONBU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SAUPCENTER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAUPCENTER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SALE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SALE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_INCMSTRT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_INCMSTRT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SAUPKIND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAUPKIND\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_CONTRCT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DIV_CONTRCT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_KONGSA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TY_KONGSA\" type=\"STRING\" size=\"256\"/><Column id=\"TY_KONG_PRO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_KONG_PRO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_END\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_IMWON\" type=\"STRING\" size=\"256\"/><Column id=\"NO_IMWON\" type=\"STRING\" size=\"256\"/><Column id=\"RK_IMWON\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SOJANG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SOJANG\" type=\"STRING\" size=\"256\"/><Column id=\"RK_SOJANG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CHONGMU\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHONGMU\" type=\"STRING\" size=\"256\"/><Column id=\"RK_CHONGMU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CHFMNGR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHFMNGR\" type=\"STRING\" size=\"256\"/><Column id=\"RK_CHFMNGR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITEAGNC\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SITEAGNC\" type=\"STRING\" size=\"256\"/><Column id=\"RK_SITEAGNC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PM\" type=\"STRING\" size=\"256\"/><Column id=\"RK_PM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_KOANRL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_KOANRL\" type=\"STRING\" size=\"256\"/><Column id=\"RK_KOANRL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GONGMU\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GONGMU\" type=\"STRING\" size=\"256\"/><Column id=\"RK_GONGMU\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DOGEUB_PROV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DOGEUB_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DOGEUB_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_JOINT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DOCOVOL_PROV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DOCOVOL_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DOCOVOL_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_JUGAN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_SOCOVOL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_TAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_ZERO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SOCOVOL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SITEEBGT\" type=\"INT\" size=\"256\"/><Column id=\"RT_ASRAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONT_PROV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONT_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONT_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SILHENG_ORI\" type=\"INT\" size=\"256\"/><Column id=\"AM_OCOCONT_PROV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_OCOCONT_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_OCOCONT_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SOCOVOL_ORI\" type=\"INT\" size=\"256\"/><Column id=\"DT_GEYAK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHAKGONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_OJUNGONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CJUNGONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PERD_MD\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CCNSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HAJA_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HAJA_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HAJA\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GUAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_GUAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECEIVE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PLOTTAGEM2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_PLOTTAGEPY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_FLOORM2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_FLOORPY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_BUILDRATIO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_SLLTSQMS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_TOTFLOORM2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_TOTFLOORPY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_FLOORRATIO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_SLLTLARSQMS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_HOUSEHOLDS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OCOTOTFLOORM2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_OCOTOTFLOORPY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_SCALE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STRUCT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_USEAREA\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST_STRUCT\" type=\"STRING\" size=\"256\"/><Column id=\"GR_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PMDEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CLIENT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BALJU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BALJU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUYO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DESIGN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GAMRI1\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GAMRI1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GAMRI2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GAMRI2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GAMRI3\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GAMRI3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAFE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SAFE\" type=\"STRING\" size=\"256\"/><Column id=\"RK_SAFE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_QUAL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_QUAL\" type=\"STRING\" size=\"256\"/><Column id=\"RK_QUAL\" type=\"STRING\" size=\"256\"/><Column id=\"RT_JIBUN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_RSOCOVOL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_DELAYIJA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"RT_CONT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_CURRENCY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXCHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"RT_EXCHANGE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_FOREIGN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DESIGNPRICE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_DESIGNPRICE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PREPRICE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_PREPRICE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_PROGRESS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHAKGONG\" type=\"STRING\" size=\"256\"/><Column id=\"RT_HAJA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_UPSCALE\" type=\"INT\" size=\"256\"/><Column id=\"DS_DOWNSCALE\" type=\"INT\" size=\"256\"/><Column id=\"DS_MAINSTREET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PARKING\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCEPTUSE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ROOF\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LANDSCAPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SB\" type=\"STRING\" size=\"256\"/><Column id=\"GU_SB\" type=\"STRING\" size=\"256\"/><Column id=\"DS_KB\" type=\"STRING\" size=\"256\"/><Column id=\"GU_KB\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WIIM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"RT_ILBAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GU_EPC\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ILBAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_SILJUKINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GSCOST\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MAP\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SJDOGEUB_PROV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SJDOGEUB_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SJDOCOVOL_PROV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SJDOCOVOL_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTSOCOVOL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_RP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GISUNG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BONSA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_GISUNG_JIK\" type=\"STRING\" size=\"256\"/><Column id=\"GR_COSTFIND\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SILHENGCHA\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OPENCHA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUMUN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_COMMU\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ELEC\" type=\"STRING\" size=\"256\"/><Column id=\"YN_FIRE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GASILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DAEPYO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DOLGWAN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HAJA\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BONSILCON\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DOKUBSTD\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEMAND\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MAINSITE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BIDPLAZAVIEW\" type=\"STRING\" size=\"256\"/><Column id=\"CD_STDUPRC\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PROFIT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CNSTKND\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EBGT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EBGT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SLLTCONT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PRDV\" type=\"STRING\" size=\"256\"/><Column id=\"DT_MIBLSCH\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INVMRVW_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INVMRVW_EBGT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_INVMRVW\" type=\"STRING\" size=\"256\"/><Column id=\"AM_OCOVOLINVMRVW_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_OCOVOLINVMRVW_EBGT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OCOVOLINVMRVW\" type=\"STRING\" size=\"256\"/><Column id=\"RT_ADV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_MAINSITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPSCALEPY\" type=\"STRING\" size=\"256\"/><Column id=\"RT_UPSCALE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DOWNSCALEPY\" type=\"STRING\" size=\"256\"/><Column id=\"RT_DOWNSCALE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PARKINGPER\" type=\"STRING\" size=\"256\"/><Column id=\"RT_LANDSCAPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DWZPR_SITE_SELECT</Col></Row><Row><Col id=\"TARGET\">save1</Col><Col id=\"SP\">DWZPR_SITE_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SAVE_01</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DWZPR_SITEORDPLC_SELECT</Col></Row><Row><Col id=\"TARGET\">save2</Col><Col id=\"SP\">DWZPR_SITEORDPLC_SAVE</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DWZPR_SITEJOINTCOMP_SELECT</Col></Row><Row><Col id=\"TARGET\">save3</Col><Col id=\"SP\">DWZPR_SITEJOINTCOMP_SAVE</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DWZPR_SITEPSNNO_SELECT</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DWZPR_SITEPSNNO_SELECT</Col></Row><Row><Col id=\"TARGET\">select6</Col><Col id=\"SP\">DWZPR_SITEPIC_SELECT</Col></Row><Row><Col id=\"TARGET\">save6</Col><Col id=\"SP\">DWZPR_SITEPIC_SAVE</Col></Row><Row><Col id=\"TARGET\">select7</Col><Col id=\"SP\">DODPR_CONTRCT_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select8</Col><Col id=\"SP\">DWZPR_SITESILHENG_SELECT</Col></Row><Row><Col id=\"TARGET\">select9</Col><Col id=\"SP\">DODPR_CONTRCT_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">save9</Col><Col id=\"SP\">DWZPR_SITEREQBILCLT_SAVE</Col></Row><Row><Col id=\"TARGET\">select10</Col><Col id=\"SP\">DWZPR_SITEPRSC_SELECT</Col></Row><Row><Col id=\"TARGET\">save10</Col><Col id=\"SP\">DWZPR_SITEPRSC_SAVE</Col></Row><Row><Col id=\"TARGET\">execute10</Col><Col id=\"SP\">DWZPR_SITEPRSC_EXECUTE</Col></Row><Row><Col id=\"TARGET\">select11</Col><Col id=\"SP\">DWZPR_SITEJOINTREQCLT_SELECT</Col></Row><Row><Col id=\"TARGET\">select12</Col><Col id=\"SP\">DWZPR_SITEDETAILS_SELECT</Col></Row><Row><Col id=\"TARGET\">save12</Col><Col id=\"SP\">DWZPR_SITEDETAILS_SAVE</Col></Row><Row><Col id=\"TARGET\">select_chrpsn</Col><Col id=\"SP\">DWZPR_SITECHRPSN_SELECT</Col></Row><Row><Col id=\"TARGET\">save_chrpsn</Col><Col id=\"SP\">DWZPR_SITECHRPSN_SAVE</Col></Row><Row><Col id=\"TARGET\">select13</Col><Col id=\"SP\">DZZPR_FILEMANAGER_SELECT</Col></Row><Row><Col id=\"TARGET\">save13</Col><Col id=\"SP\">DZZPR_FILEMANAGER_SAVE</Col></Row><Row><Col id=\"TARGET\">select14</Col><Col id=\"SP\">DWZPR_SITE_INDIRECT_SELECT</Col></Row><Row><Col id=\"TARGET\">save14</Col><Col id=\"SP\">DWZPR_SITE_INDIRECT_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_WRK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">DS_KONGSA</Col><Col id=\"DS_FIELD\">공사계약명</Col></Row><Row><Col id=\"CD_FIELD\">NO_ZIP</Col><Col id=\"DS_FIELD\">공사소재지</Col></Row><Row><Col id=\"CD_FIELD\">AR_SITE</Col><Col id=\"DS_FIELD\">지역구분</Col></Row><Row><Col id=\"CD_FIELD\">TY_DESI</Col><Col id=\"DS_FIELD\">부서현장</Col></Row><Row><Col id=\"CD_FIELD\">CD_MAINSITE</Col><Col id=\"DS_FIELD\">대표현장코드</Col></Row><Row><Col id=\"CD_FIELD\">CD_BONBU</Col><Col id=\"DS_FIELD\">사업본부</Col></Row><Row><Col id=\"CD_FIELD\">TY_KONG_PRO</Col><Col id=\"DS_FIELD\">공사현황</Col></Row><Row><Col id=\"CD_FIELD\">YN_USE</Col><Col id=\"DS_FIELD\">관리여부</Col></Row><Row><Col id=\"CD_FIELD\">DS_REMARK</Col><Col id=\"DS_FIELD\">공사개요</Col></Row><Row><Col id=\"CD_FIELD\">DT_GEYAK</Col><Col id=\"DS_FIELD\">계약일자</Col></Row><Row><Col id=\"CD_FIELD\">YN_JOINT</Col><Col id=\"DS_FIELD\">공동도급</Col></Row><Row><Col id=\"CD_FIELD\">YN_JUGAN</Col><Col id=\"DS_FIELD\">주간사</Col></Row><Row><Col id=\"CD_FIELD\">RT_SOCOVOL</Col><Col id=\"DS_FIELD\">당사지분율</Col></Row><Row><Col id=\"CD_FIELD\">DT_FROM</Col><Col id=\"DS_FIELD\">공사기간(From)</Col></Row><Row><Col id=\"CD_FIELD\">DT_TO</Col><Col id=\"DS_FIELD\">공사기간(To)</Col></Row><Row><Col id=\"CD_FIELD\">DT_OJUNGONG</Col><Col id=\"DS_FIELD\">준공일자(당초)</Col></Row><Row><Col id=\"CD_FIELD\">DT_EBGT_FROM</Col><Col id=\"DS_FIELD\">실행공기(From)</Col></Row><Row><Col id=\"CD_FIELD\">DT_EBGT_TO</Col><Col id=\"DS_FIELD\">실행공기(To)</Col></Row></Rows>");
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


            obj = new Dataset("dsList13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList14", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList15", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("div_srchBeforeUser","ccfCD_SITE:0.0","10.0","399","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQUEST_TO","0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form.div_srchBeforeUser.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_visible("false");
            this.divSearch.form.div_srchBeforeUser.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_REQUEST_TO:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form.div_srchBeforeUser.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.form.div_srchBeforeUser.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST",null,"10.0","118.0","24.0","241",null,null,null,null,null,this.divSearch.form.div_srchBeforeUser.form);
            obj.set_taborder("2");
            obj.set_text("이전근무일자");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.form.div_srchBeforeUser.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQUEST_FR","staDT_REQUEST:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form.div_srchBeforeUser.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_visible("false");
            this.divSearch.form.div_srchBeforeUser.addChild(obj.name, obj);

            obj = new Div("ccfCF_SITE","div_srchBeforeUser:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFSITE_NEW");
            obj.getSetter("DS_HEIGHTCDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("공사개요");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","0",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_IMWON","sta00:-1","staSpace2:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("담당임원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta27","staNO_IMWON:-1","staSpace2:-1","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_SOJANG","sta00:-1","staNO_IMWON:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("소장");
            obj.set_textDecoration("underline");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta28","staNO_SOJANG:-1","staNO_IMWON:-1","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_CHONGMU","sta00:-1","staNO_SOJANG:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("관리책임");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta29","staNO_CHONGMU:-1","staNO_SOJANG:-1","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_CHFMNGR","sta00:-1","staNO_CHONGMU:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("관리주임");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta30","staNO_CHFMNGR:-1","staNO_CHONGMU:-1","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_SITEAGNC","sta00:-1","staNO_CHFMNGR:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("현장대리");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta31","staNO_SITEAGNC:-1","staNO_CHFMNGR:-1","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_PM","sta00:-1","staNO_SITEAGNC:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("공구장");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta32","staNO_PM:-1","staNO_SITEAGNC:-1","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_KOANRL","sta00:-1","staNO_PM:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("공사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta33","staNO_KOANRL:-1","staNO_PM:-1","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_GONGMU","sta00:-1","staNO_KOANRL:-1","120","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("공무");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta34","staNO_GONGMU:-1","staNO_KOANRL:-1","520","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfNO_IMWON","staNO_IMWON:5","staSpace2:5","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DWX_CFBASEINFO_01");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtRK_IMWON","ccfNO_IMWON:5","staSpace2:5","150","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfNO_SOJANG","staNO_SOJANG:5","ccfNO_IMWON:9","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DWX_CFBASEINFO_01");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtRK_SOJANG","ccfNO_SOJANG:5","ccfNO_IMWON:9","150","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfNO_CHONGMU","staNO_CHONGMU:5","ccfNO_SOJANG:9","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DWX_CFBASEINFO_01");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtRK_CHONGMU","ccfNO_CHONGMU:5","ccfNO_SOJANG:9","150","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfNO_CHFMNGR","staNO_CHFMNGR:5","ccfNO_CHONGMU:9","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DWX_CFBASEINFO_01");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtRK_CHFMNGR","ccfNO_CHFMNGR:5","ccfNO_CHONGMU:9","150","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfNO_SITEAGNC","staNO_SITEAGNC:5","ccfNO_CHFMNGR:9","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DWX_CFBASEINFO_01");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtRK_SITEAGNC","ccfNO_SITEAGNC:5","ccfNO_CHFMNGR:9","150","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfNO_PM","staNO_PM:5","ccfNO_SITEAGNC:9","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DWX_CFBASEINFO_01");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtRK_PM","ccfNO_PM:5","ccfNO_SITEAGNC:9","150","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfNO_KOANRL","staNO_KOANRL:5","ccfNO_PM:9","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DWX_CFBASEINFO_01");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtRK_KOANRL","ccfNO_KOANRL:5","ccfNO_PM:9","150","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfNO_GONGMU","staNO_GONGMU:5","ccfNO_KOANRL:10","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DWX_CFBASEINFO_01");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtRK_GONGMU","ccfNO_GONGMU:5","ccfNO_KOANRL:10","150","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","5","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAT_SITE","5","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_text("현장사무실");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAT_SITEORM","5","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_text("공사소재지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","5","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_SAUPKIND","643","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("5");
            obj.set_text("사업부문");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00","124","27","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","124","56","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02","124","85","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta03","124","114","201","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04","243","143","401","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta05","762","114","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDIV_CONTRCT","961","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("12");
            obj.set_text("계약수행방식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06","1080","114","202","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staSpace0","643","143","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("14");
            obj.set_text("사업유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta07","762","143","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK","5","143","120","350",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("16");
            obj.set_text("공사개요");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_KONGSA","643","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("17");
            obj.set_text("공사계약명");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta18","762","27","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAR_SITE","643","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("19");
            obj.set_text("지역구분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta19","762","56","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_DESI","961","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("21");
            obj.set_text("부서/현장");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta20","1080","56","202","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_BONBU","643","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("23");
            obj.set_text("사업본부");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta21","762","85","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta22","1080","85","202","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_KONGSA","961","143","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("26");
            obj.set_text("상품분류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta25","1080","143","202","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_KONG_PRO","961","83","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("28");
            obj.set_text("공사현황");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTab1Title2","651","173","745","22",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("29");
            obj.set_text("현장담당자 [변경> CM팀 권한]");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_color("red");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGrid1","649","staTab1Title2:0","633","297",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("30");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("cfCD_SITE","130","32","510","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("readonly").set("true");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("31");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfAT_SITE","130","61","255","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("32");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtAT_SITE2","390","61","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("33");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtAT_SITEORM","130","90","510","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("34");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_TEL","130","119","191","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("35");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_MAINSTREET","248","148","391","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("36");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfTY_SAUPKIND","768","119","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_03");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("37");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_KONGSA","768","32","510","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("38");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboAR_SITE","768","62","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("39");
            obj.set_innerdataset("dsAR_SITE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfTY_DESI","1086","62","192","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_DA");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("40");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfCD_BONBU","768","91","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_01");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("41");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfTY_KONGSA","1087","149","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_02");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("42");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfTY_KONG_PRO","1086","89","192","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_07");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("43");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfTY_BALJU","768","148","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_04");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("44");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboTY_CONT","1087","119","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("45");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_CONT");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_SITE00","708","688","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("46");
            obj.set_text("대표현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("underline none");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_00","827","688","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("cfCD_SITE00","833","693","509","21",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("48");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_FAX","324","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("49");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta03_00","443","114","201","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FAX","449","119","191","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("51");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_MAINSTREET","124","143","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("52");
            obj.set_text("주용도");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_HEIGHT","124","172","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("53");
            obj.set_text("공사규모");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_HOUSEHOLDS","124","201","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("54");
            obj.set_text("세대구성");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_STRUCT","124","230","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("55");
            obj.set_text("공사구조");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_PLOTTAGE","124","259","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("56");
            obj.set_text("대지면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_FLOOR","124","288","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("57");
            obj.set_text("건축면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_TOTFLOOR","124","317","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("58");
            obj.set_text("연면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_UPSCALE","124","346","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("59");
            obj.set_text("지상면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_DOWNSCALE","124","375","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("60");
            obj.set_text("지하면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_BUILDRATIO","124","404","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("61");
            obj.set_text("건폐율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_PARKING","124","433","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("62");
            obj.set_text("주차대수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LANDSCAPE","124","462","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("63");
            obj.set_text("조경면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04_1","243","172","401","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04_2","243","201","401","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04_3","243","230","401","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04_4","243","259","401","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04_5","243","288","401","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_HEIGHT","248","178","391","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("69");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_HOUSEHOLDS","248","206","391","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("70");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_STRUCT","248","235","391","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("71");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_PLOTTAGEM2","248","264","160","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("72");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_01","403","264","25","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_PLOTTAGEPY","448","264","160","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("74");
            obj.set_value("");
            obj.set_enable("false");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_2","613","264","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("75");
            obj.set_text("py");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_1","418","264","25","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("76");
            obj.set_text("㎡");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04_6","243","317","401","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_FLOORM2","248","293","160","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("78");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_3","418","293","25","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("79");
            obj.set_text("㎡");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_FLOORPY","448","293","160","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("80");
            obj.set_value("");
            obj.set_enable("false");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_4","613","293","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("81");
            obj.set_text("py");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_TOTFLOORM2","248","322","160","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("82");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_5","418","322","25","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("83");
            obj.set_text("㎡");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_TOTFLOORPY","448","322","160","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("84");
            obj.set_value("");
            obj.set_enable("false");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04_7","243","346","401","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04_8","243","375","401","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04_9","243","404","401","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04_10","243","433","401","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04_11","243","462","401","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_UPSCALE","248","351","120","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("90");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_7","ctxtDS_UPSCALE:5","351","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("91");
            obj.set_text("㎡");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_6","613","322","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("92");
            obj.set_text("py");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_UPSCALEPY","398","351","120","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("93");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_8","523","351","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("94");
            obj.set_text("py");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_UPSCALE","548","351","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("95");
            obj.set_value("");
            obj.set_enable("false");
            obj.set_textAlign("right");
            obj.set_format("#,#0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_9","613","351","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("96");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_DOWNSCALE","248","380","120","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("97");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_10","ctxtDS_DOWNSCALE:5","380","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("98");
            obj.set_text("㎡");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_DOWNSCALEPY","398","380","120","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("99");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_11","523","380","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("100");
            obj.set_text("py");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_DOWNSCALE","548","380","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("101");
            obj.set_value("");
            obj.set_enable("false");
            obj.set_textAlign("right");
            obj.set_format("#,#0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_12","613","380","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("102");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_BUILDRATIO","248","409","120","19",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("103");
            obj.set_value("");
            obj.set_enable("false");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_13","ctxtDS_BUILDRATIO:5","409","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("104");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_14","433","409","75","19",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("105");
            obj.set_text("용적률");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_FLOORRATIO","519","409","89","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("106");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_15","613","409","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("107");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_PARKING","248","438","120","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("108");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_16","ctxtDS_PARKING:5","438","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("109");
            obj.set_text("대");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_PARKINGPER","398","438","45","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("110");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_17","ctxtDS_PARKINGPER:5","438","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("111");
            obj.set_text("대(세대당)");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_18","418","467","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("114");
            obj.set_text("㎡");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_LANDSCAPE","sta00_18:16","467","154","21",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("112");
            obj.set_value("");
            obj.set_enable("false");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_LANDSCAPE","248","467","160","21",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("113");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_19","ctxtRT_LANDSCAPE:5","467","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("115");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staRM_BIGO","5","staDS_REMARK:-2","120","144",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("116");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new TextArea("ctxtRM_BIGO","staRM_BIGO:-1","sta04_11:-1","1158","144",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("117");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("계약정보");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staAM_CONT_PROV","5","32","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj.set_text("전체분(공급가액)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_OCOCONT_PROV","5","61","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("당사분(공급가액)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTab2Title","5","96","1393","22",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj.set_text("변경계약금액");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_DOGEUB_PROV","5","123","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("3");
            obj.set_text("전체분(공급가액)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_DOCOVOL_PROV","5","152","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("4");
            obj.set_text("당사분(공급가액)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTab2TitleSliheng","5","187","1393","22",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("5");
            obj.set_text("실행");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_SILHENG","5","214","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("6");
            obj.set_text("실행금액(공급가액) ");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staRT_TAX00","641","243","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("7");
            obj.set_text("안분율(%)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staRT_SOCOVOL","641","214","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("8");
            obj.set_text("과세율(%)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta35","760","243","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta00","124","123","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta01","124","152","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta02","124","214","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_DOGEUB_VAT","323","123","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("13");
            obj.set_text("(부가세액)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_DOCOVOL_VAT","323","152","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("14");
            obj.set_text("(부가세액)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staRT_SILHENG","323","214","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("15");
            obj.set_text("실행율(%)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta04","442","123","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta05","442","152","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta06","442","214","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta07","124","243","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_DOGEUB_TOT","641","123","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("20");
            obj.set_text("(합계)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_DOCOVOL_TOT","641","152","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("21");
            obj.set_text("(합계)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staRT_ASRAMT","323","243","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("22");
            obj.set_text("당사지분율");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta08","760","123","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta09","760","152","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta10","760","214","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta11","442","243","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staYN_JOINT","959","123","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("27");
            obj.set_text("공동도급");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staYN_JUGAN","959","152","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("28");
            obj.set_text("주간사");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staRT_TAX","959","214","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("29");
            obj.set_text("선급금율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta12","1078","123","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta13","1078","152","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta14","1078","214","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTab2Title1","5","5",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("33");
            obj.set_text("계약금액");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta15","124","32","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta16","124","61","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_CONT_VAT","323","32","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("36");
            obj.set_text("(부가세액)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_OCOCONT_VAT","323","61","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("37");
            obj.set_text("(부가세액)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta17","442","32","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta18","442","61","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_CONT_TOT","641","32","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("40");
            obj.set_text("(합계)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_OCOCONT_TOT","641","61","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("41");
            obj.set_text("(합계)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta19","760","32","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta20","760","61","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_SILHENG_ORI","959","32","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("44");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_SOCOVOL_ORI","959","61","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("45");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta21","1078","32","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta22","1078","61","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTab2Title2","5","278","1393","22",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("48");
            obj.set_text("공사기간");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_GEYAK","5","305","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("49");
            obj.set_text("계약일자");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_FROM_TO","5","334","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("50");
            obj.set_text("공사기간");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_HAJA_FROM_TO","5","362","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("51");
            obj.set_text("하자기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDS_CONDITION","5","362","120","60",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("52");
            obj.set_text("계약조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta23","124","305","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta24","124","334","518","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta26","124","362","518","60",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_CHAKGONG","323","305","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("56");
            obj.set_text("착공일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta27","442","305","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_OJUNGONG","641","305","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("58");
            obj.set_text("준공일자(당초)");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_CCNSTEM","641","334","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("59");
            obj.set_text("준공검사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staSPACE00","959","243","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("60");
            obj.set_text("하자충당금율(%)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDS_RECEIVE","641","362","120","60",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("61");
            obj.set_text("수금조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta28","760","305","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta29","760","334","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta029","1078","243","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta31","760","362","518","60",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDT_CJUNGONG","959","305","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("66");
            obj.set_text("준공일자(변경)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staSPACE0","959","334","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("67");
            obj.set_text("입주예정일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staRT_GUAR",null,null,"120","30","324","185",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("68");
            obj.set_text("하자보수율(%)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta32","1078","305","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta33","1078","334","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta34",null,null,"200","30","125","185",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DOGEUB_PROV","130","128","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("72");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DOCOVOL_PROV","130","158","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("73");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SILHENG","130","219","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("74");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DOGEUB_VAT","448","128","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("75");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DOCOVOL_VAT","448","158","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("76");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_SILHENG","448","219","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("77");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPercent0","543","214","30","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("78");
            obj.set_text("%");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SITEEBGT","130","248","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("79");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DOGEUB_TOT","766","128","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("80");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DOCOVOL_TOT","766","158","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("81");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_MIBLSCH","1084","340","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("82");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_TAX","766","219","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("83");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_SOCOVOL","448","248","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("84");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_CJUNGONG","1084","309","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("85");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ASRAMT","1084","249","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("86");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPercent1","541","244","30","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("87");
            obj.set_text("%");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPercent2","1179","244","30","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("88");
            obj.set_text("%");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Radio("crdoYN_JOINT","1089","128","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("89");
            obj.set_innerdataset("dsYN_USE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Radio("crdoYN_JUGAN","1089","158","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("90");
            obj.set_innerdataset("dsYN_USE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONT_PROV","130","37","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("91");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_OCOCONT_PROV","130","67","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("92");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONT_VAT","448","37","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("93");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_OCOCONT_VAT","448","67","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("94");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONT_TOT","766","37","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("95");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            obj.set_format("#,0");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_OCOCONT_TOT","766","67","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("96");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SOCOVOL_ORI","1084","37","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("97");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_GEYAK","130","310","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("98");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","130","340","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("99");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta_range0","240","340","10","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("100");
            obj.set_text("~");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","260","340","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PERD_MD","365","340","183","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("102");
            obj.set_value("");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta_range1",null,null,"10","20","1153","249",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("103");
            obj.set_text("~");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new TextArea("txtDS_CONDITION","130","368","508","50",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("104");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_CHAKGONG","448","310","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("105");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_OJUNGONG","766","310","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("106");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCEPTUSE","766","339","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("107");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPercent4",null,null,"30","30","196","245",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("108");
            obj.set_text("%");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RECEIVE","766","367","508","50",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("109");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_PRDV","766","249","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("110");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPercent00","859","244","30","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("111");
            obj.set_text("%");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPercent3","859","214","30","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("112");
            obj.set_text("%");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ADV","1084","219","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("113");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_readonly("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staPercent01","1179","214","30","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("114");
            obj.set_text("%");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staAM_SILHENG00","5","243","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_text("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("발주처");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid4","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("공동도급");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","99%","100.00%","5",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            obj.set_visible("false");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Div("divDataTop","5","5",null,null,"5","divSplitter:5",null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGridTop5","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab5.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab5.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","5","divSplitter:5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("2");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab5.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_text("취하내역");
            obj.set_visible("false");
            this.divData.form.tabData.tab5.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridBottom5","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab5.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.form.tabData.tab5.form.divDataBottom.addChild(obj.name, obj);

            obj = new Tabpage("tab6",this.divData.form.tabData);
            obj.set_text("현장인원");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","5","100%",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Div("divDataLeft","5","5",null,null,"divSplitter:5","5",null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Grid("objGridLeft6","0","37",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab6.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab6.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","0",null,"22","-3",null,null,null,null,null,this.divData.form.tabData.tab6.form.divDataLeft.form);
            obj.set_taborder("1");
            obj.set_text("현재 근무자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab6.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Grid("objGridRight6","0","37",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab6.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab6.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","6",null,"22","-7",null,null,null,null,null,this.divData.form.tabData.tab6.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("이전 근무자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab6.form.divDataRight.addChild(obj.name, obj);

            obj = new Tabpage("tab7",this.divData.form.tabData);
            obj.set_text("현장사진");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","5","100%",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Div("divDataLeft","5","5",null,null,"divSplitter:5","5",null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Grid("objGrid7","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab7.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab7.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new ImageViewer("imgViewer","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab7.form.divDataRight.form);
            obj.set_taborder("108");
            obj.set_stretch("fixaspectratio");
            this.divData.form.tabData.tab7.form.divDataRight.addChild(obj.name, obj);

            obj = new Tabpage("tab8",this.divData.form.tabData);
            obj.set_text("도급/실행");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","5","100%",null,null,null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Div("divDataLeft","5","5",null,null,"divSplitter:5","5",null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Grid("objGridLeft8","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab8.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab8.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);

            obj = new Grid("objGridRight8","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab8.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab8.form.divDataRight.addChild(obj.name, obj);

            obj = new Tabpage("tab9",this.divData.form.tabData);
            obj.set_text("청구/수금");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid9","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab9.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab9.addChild(obj.name, obj);

            obj = new Tabpage("tab11",this.divData.form.tabData);
            obj.set_text("현장사진");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter","37.6%","-1","5","100.00%",null,null,null,null,null,null,this.divData.form.tabData.tab11.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.form.tabData.tab11.addChild(obj.name, obj);

            obj = new Div("divDataLeft","13","1",null,null,"divSplitter:5","9",null,null,null,null,this.divData.form.tabData.tab11.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.form.tabData.tab11.addChild(obj.name, obj);

            obj = new Static("staTab1Title","0","5",null,"22","12",null,null,null,null,null,this.divData.form.tabData.tab11.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("현장사진목록");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab11.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("fictureList","1","32",null,null,"4","5",null,null,null,null,this.divData.form.tabData.tab11.form.divDataLeft.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab11.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab11.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divData.form.tabData.tab11.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","6",null,"22","3",null,null,null,null,null,this.divData.form.tabData.tab11.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("현장사진");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab11.form.divDataRight.addChild(obj.name, obj);

            obj = new ImageViewer("siteImage","4","29",null,null,"3","5",null,null,null,null,this.divData.form.tabData.tab11.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_stretch("fit");
            this.divData.form.tabData.tab11.form.divDataRight.addChild(obj.name, obj);

            obj = new Tabpage("tab12",this.divData.form.tabData);
            obj.set_text("현장간접비");
            obj.set_enable("true");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid14","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab12.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab12.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.tabData.tab2.form.ctxtYN_ZERO","value","dsList","YN_ZERO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divSearch.form.div_srchBeforeUser.form.ctclDT_REQUEST_TO","value","dsSearch","DT_REQUEST_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divSearch.form.div_srchBeforeUser.form.ctclDT_REQUEST_FR","value","dsSearch","DT_REQUEST_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.tabData.tab1.form.cfCD_SITE.form.CDTextBox","value","dsList","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tabData.tab1.form.cfCD_SITE.form.DSTextBox","value","dsList","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tabData.tab1.form.ccfAT_SITE.form.CDTextBox","value","dsList","NO_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tabData.tab1.form.ccfAT_SITE.form.DSTextBox","value","dsList","AT_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tabData.tab1.form.ctxtAT_SITE2","value","dsList","AT_SITE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab1.form.ctxtAT_SITEORM","value","dsList","AT_SITEORM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab1.form.ctxtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab1.form.ctxtDS_MAINSTREET","value","dsList","DS_MAINSTREET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab1.form.ccfTY_SAUPKIND.form.CDTextBox","value","dsList","TY_SAUPKIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab1.form.ccfTY_SAUPKIND.form.DSTextBox","value","dsList","DS_SAUPKIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab1.form.ccboTY_CONT","value","dsList","DIV_CONTRCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tabData.tab1.form.ctxtDS_KONGSA","value","dsList","DS_KONGSA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab1.form.ccboAR_SITE","value","dsList","AR_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.tabData.tab1.form.ccfTY_DESI.form.CDTextBox","value","dsList","TY_DESI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tabData.tab1.form.ccfTY_DESI.form.DSTextBox","value","dsList","DS_DESI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tabData.tab1.form.ccfCD_BONBU.form.CDTextBox","value","dsList","CD_BONBU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.tabData.tab1.form.ccfCD_BONBU.form.DSTextBox","value","dsList","DS_BONBU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tabData.tab1.form.ccfTY_KONGSA.form.CDTextBox","value","dsList","TY_KONGSA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tabData.tab1.form.ccfTY_KONGSA.form.DSTextBox","value","dsList","DS_TY_KONGSA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.tabData.tab1.form.ccfTY_KONG_PRO.form.CDTextBox","value","dsList","TY_KONG_PRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.tabData.tab1.form.ccfTY_KONG_PRO.form.DSTextBox","value","dsList","DS_KONG_PRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab1.form.ccfTY_BALJU.form.CDTextBox","value","dsList","TY_BALJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab1.form.ccfTY_BALJU.form.DSTextBox","value","dsList","DS_BALJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.tabData.tab2.form.ctxtAM_DOGEUB_PROV","value","dsList","AM_DOGEUB_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.tabData.tab2.form.ctxtAM_DOCOVOL_PROV","value","dsList","AM_DOCOVOL_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab2.form.ctxtAM_SILHENG","value","dsList","AM_SILHENG");
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

            obj = new BindItem("item44","divData.form.tabData.tab2.form.ctclDT_MIBLSCH","value","dsList","DT_MIBLSCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.tabData.tab2.form.ctxtRT_TAX","value","dsList","RT_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.tabData.tab2.form.ctxtRT_SOCOVOL","value","dsList","RT_SOCOVOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.tabData.tab2.form.ctclDT_CJUNGONG","value","dsList","DT_CJUNGONG");
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

            obj = new BindItem("item51","divData.form.tabData.tab2.form.ctxtAM_CONT_PROV","value","dsList","AM_CONT_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.tabData.tab2.form.ctxtAM_OCOCONT_PROV","value","dsList","AM_OCOCONT_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.tabData.tab2.form.ctxtAM_CONT_VAT","value","dsList","AM_CONT_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.tabData.tab2.form.ctxtAM_OCOCONT_VAT","value","dsList","AM_OCOCONT_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.tabData.tab2.form.ctxtAM_CONT_TOT","value","dsList","AM_CONT_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab2.form.ctxtAM_OCOCONT_TOT","value","dsList","AM_OCOCONT_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.tabData.tab2.form.ctclDT_GEYAK","value","dsList","DT_GEYAK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.tabData.tab2.form.ctclDT_FROM","value","dsList","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.tabData.tab2.form.ctclDT_TO","value","dsList","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.tabData.tab2.form.ctxtDS_PERD_MD","value","dsList","DS_PERD_MD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divData.form.tabData.tab2.form.txtDS_CONDITION","value","dsList","DS_CONDITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.tabData.tab2.form.ctclDT_CHAKGONG","value","dsList","DT_CHAKGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divData.form.tabData.tab2.form.ctclDT_OJUNGONG","value","dsList","DT_OJUNGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divData.form.tabData.tab2.form.ctclDT_ACCEPTUSE","value","dsList","DT_ACCEPTUSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divData.form.tabData.tab2.form.txtDS_RECEIVE","value","dsList","DS_RECEIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divData.form.tabData.tab2.form.ctxtRT_PRDV","value","dsList","RT_PRDV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.tabData.tab2.form.ctxtRT_ADV","value","dsList","RT_ADV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab1.form.cfCD_SITE00.form.CDTextBox","value","dsList","CD_MAINSITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.tabData.tab1.form.cfCD_SITE00.form.DSTextBox","value","dsList","DS_MAINSITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tabData.tab1.form.ctxtNO_FAX","value","dsList","NO_FAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.tabData.tab1.form.ctxtDS_HEIGHT","value","dsList","DS_HEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.tabData.tab1.form.ctxtDS_HOUSEHOLDS","value","dsList","DS_HOUSEHOLDS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.tabData.tab1.form.ctxtDS_STRUCT","value","dsList","DS_STRUCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.tabData.tab1.form.ctxtDS_PLOTTAGEM2","value","dsList","DS_PLOTTAGEM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tabData.tab1.form.ctxtDS_PLOTTAGEPY","value","dsList","DS_PLOTTAGEPY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.tabData.tab1.form.ctxtDS_FLOORM2","value","dsList","DS_FLOORM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.tabData.tab1.form.ctxtDS_FLOORPY","value","dsList","DS_FLOORPY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.tabData.tab1.form.ctxtDS_TOTFLOORM2","value","dsList","DS_TOTFLOORM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divData.form.tabData.tab1.form.ctxtDS_TOTFLOORPY","value","dsList","DS_TOTFLOORPY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.tabData.tab1.form.ctxtDS_UPSCALE","value","dsList","DS_UPSCALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divData.form.tabData.tab1.form.ctxtDS_UPSCALEPY","value","dsList","DS_UPSCALEPY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divData.form.tabData.tab1.form.ctxtRT_UPSCALE","value","dsList","RT_UPSCALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divData.form.tabData.tab1.form.ctxtDS_DOWNSCALE","value","dsList","DS_DOWNSCALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divData.form.tabData.tab1.form.ctxtDS_DOWNSCALEPY","value","dsList","DS_DOWNSCALEPY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divData.form.tabData.tab1.form.ctxtRT_DOWNSCALE","value","dsList","RT_DOWNSCALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divData.form.tabData.tab1.form.ctxtDS_BUILDRATIO","value","dsList","DS_BUILDRATIO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divData.form.tabData.tab1.form.ctxtDS_FLOORRATIO","value","dsList","DS_FLOORRATIO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divData.form.tabData.tab1.form.ctxtDS_PARKING","value","dsList","DS_PARKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divData.form.tabData.tab1.form.ctxtDS_PARKINGPER","value","dsList","DS_PARKINGPER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divData.form.tabData.tab1.form.ctxtRT_LANDSCAPE","value","dsList","RT_LANDSCAPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","divData.form.tabData.tab1.form.ctxtDS_LANDSCAPE","value","dsList","DS_LANDSCAPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","divData.form.tabData.tab1.form.ctxtRM_BIGO","value","dsList","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWZ_SITE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        // 현장사진 파일관련
        this.filepath = "DW/Attach/SITEPIC/";
        this.fileuploads = {};
        this.filecnt = 0;
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

        	this.fnSetFile();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);

        		this.FormBtns.Select.click();
        	}

        	this.FormBtns.Add.set_enable(false);
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
        	this.btn1 = this.gfnFormButtonAdd("btnAddImage", "fnFile");
        };

        /************************************************************************
         * 현장사진 등록
         ************************************************************************/
        this.fnFile = function() {
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DWZ1";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"CD_SITE")];
        	//fileManager.IS_READONLY = true;

        // 	if(this.dsList.getColumn(this.dsList.rowposition, "BTN_ATTACHFILE_AUTH") == "R") {
        // 			fileManager.IS_READONLY = true;
        // 	} else {
         			fileManager.IS_READONLY = false;
        // 	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        }

        this.fnFileCallback = function(strID, val) {
            // val.IsChange : 변경여부, val.Cnt : 파일개수

            // 변경시 조회를 다시 하거나
            // 	if(val.IsChange == true) {
             		this.FormBtns.Select.click();
        			//this.divData.form.tabData.tab11.form.divDataRight.form.siteImage.set_image(this.dsImageFile.getColumn(0, "filereturn"));
            // 	}

            // 파일개수를 다시 셋팅
        //     if (val.Cnt == 0) {
        //         this.btn5.set_text("첨부파일");
        //     } else {
        //         this.btn5.set_text("첨부파일(" + val.Cnt + ")");
        //     }
        //     this.btn5.parent.fnSetBtn();
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
        	//this.dxGrid6 = this.divData.form.tabData.tab7.form.divDataLeft.form.objGrid7;
        	this.dxGrid7 = this.divData.form.tabData.tab8.form.divDataLeft.form.objGridLeft8;
        	this.dxGrid8 = this.divData.form.tabData.tab8.form.divDataRight.form.objGridRight8;
        	this.dxGrid9 = this.divData.form.tabData.tab9.form.objGrid9;
        	//this.dxGrid10 = this.divData.form.tabData.tab10.form.objGrid10;
        	/*this.dxGrid12 = this.divData.form.tabData.tab3.form.divtab3Grid.form.objGrdtab3_Detail;*/
        	this.dxGrid13 = this.divData.form.tabData.tab11.form.divDataLeft.form.fictureList;
        	//this.dxGrid14 = this.divData.form.tabData.tab12.form.objGrid14;

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

        	// 현장사진(tabindex = 6) 탭
        	//this.gfnGridInit(this.dxGrid6, this.dsList6, "DW", "DWZ_SITEPIC");

        	// 도급실행(tabindex = 6) 탭
        	this.gfnGridInit(this.dxGrid7, this.dsList7, "DW", "DWZ_SITECONTRCT","NM_CHG_CONT","NO_LVL");
        	this.gfnGridInit(this.dxGrid8, this.dsList8, "DW", "DWZ_SITESILHENG");

        	// 청구/수금(tabindex = 7) 탭
        	this.gfnGridInit(this.dxGrid9, this.dsList9, "DW", "DWZ_SITEREQBILCLT","NM_CHG_CONT","NO_LVL");

        	// 계획/공정(tabindex = 8) 탭
        	//this.gfnGridInit(this.dxGrid10, this.dsList10, "DW", "DWZ_SITEPRSC");

        	//공사규모(tabindex = 3) 탭
        	//this.gfnGridInit(this.dxGrid12, this.dsList12, "DW", "DWZ_SITEDETAIL");

        	//현장사진(tabindex = 10) 탭
        	this.gfnGridInit(this.dxGrid13, this.dsList13, "DW", "DWZ_SITE_IMAGE_LIST");

        	//현장간접비(tabindex = 12) 탭
        	//this.gfnGridInit(this.dxGrid14, this.dsList14, "DW", "DWZ_SITE_INDIRECT");



        	this.dxGrid3.ExpandUp = "fnGrid_ExpandUp";
        	//this.dxGrid6.ExpandUp = "fnGrid_ExpandUp";

        	// 공사개요, 계약정보, 공사규모 탭의 코드파인드 이벤트 설정.
        	this.ccfCF_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCF_SITE.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsSelect0 = new Dataset();
        	this.dsSelect0.addColumn("TY_PROJ", "string");
        	this.dsSelect0.addColumn("CD_FIELD", "string");

        	this.dsSelect0.addColumn("CD_BONBU", "string");
        	this.dsSelect0.addColumn("TY_CONT", "string");
        	this.dsSelect0.addColumn("CD_LOC", "string");
        	this.dsSelect0.addColumn("YN_MAIN", "string");

        	this.dsSelect11 = new Dataset();
        	this.dsSelect11.addColumn("TY_WRK", "string");
        	this.dsSelect11.addColumn("CD_SITE", "string");
        	this.dsSelect11.addColumn("CD_CTM", "string");

        	this.dsSelect12 = new Dataset();
        	this.dsSelect12.addColumn("CD_SITE", "string");

        	this.dsSelectChrpsn = new Dataset();
        	this.dsSelectChrpsn.addColumn("TY_WRK", "string");
        	this.dsSelectChrpsn.addColumn("CD_SITE", "string");
        	this.dsSelectChrpsn.addColumn("GR_SEARCH", "string");

        	this.dsSelect13 = new Dataset();
        	this.dsSelect13.addColumn("CD_GUBUN", "string");
        	this.dsSelect13.addColumn("CD_REF1", "string");
        	this.dsSelect13.addColumn("CD_REF2", "string");
        	this.dsSelect13.addColumn("CD_REF3", "string");
        	this.dsSelect13.addColumn("CD_REF4", "string");
        	this.dsSelect13.addColumn("CD_REF5", "string");
        	this.dsSelect13.addColumn("YN_DESC", "string");
        	//this.dsSelect13.addColumn("DS_ETC", "string");

        	this.dsSelect5 = new Dataset();
        	this.dsSelect5.addColumn("TY_WRK", "string");
        	this.dsSelect5.addColumn("CD_SITE", "string");

        // 	this.dsSelect14 = new Dataset();
        // 	this.dsSelect14.addColumn("CD_SITE", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

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

        	this.dsSelect0.clearData();
        	this.dsSelect0.addRow();
        // 	this.dsSelect0.setColumn(0, "DT_REQUEST_FR", this.dsSearch.getColumn(0, "DT_REQUEST_FR"));
        // 	this.dsSelect0.setColumn(0, "DT_REQUEST_TO", this.dsSearch.getColumn(0, "DT_REQUEST_TO"));
        	this.dsSelect0.setColumn(0, "TY_PROJ", "");
        	this.dsSelect0.setColumn(0, "CD_FIELD", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect0.setColumn(0, "CD_BONBU", "");
        	this.dsSelect0.setColumn(0, "TY_CONT", "");
        	this.dsSelect0.setColumn(0, "CD_LOC", "");
        	this.dsSelect0.setColumn(0, "YN_MAIN", "");

        	this.dsSelect12.clearData();
        	this.dsSelect12.addRow();
        	this.dsSelect12.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	this.dsSelectChrpsn.clearData();
        	this.dsSelectChrpsn.addRow();
        	this.dsSelectChrpsn.setColumn(0, "TY_WRK", "Q");
        	this.dsSelectChrpsn.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectChrpsn.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);

        	this.dsSelect13.clearData();
        	this.dsSelect13.addRow();
        	this.dsSelect13.setColumn(0, "CD_GUBUN", "DWZ1");
        	/*this.dsSelect13.setColumn(0, "CD_REF1", "DWZ_SITE");*/
        	/*this.dsSelect13.setColumn(0, "CD_REF2", this.dsSearch.getColumn(0, "CD_SITE"));*/
        	this.dsSelect13.setColumn(0, "CD_REF1", this.dsSearch.getColumn(0, "CD_SITE"));

        // 	this.dsSelect14.clearData();
        // 	this.dsSelect14.addRow();
        // 	this.dsSelect14.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	this.dsSelect5.clearData();
        	this.dsSelect5.addRow();
        	this.dsSelect5.setColumn(0, "TY_WRK", "L");
        	this.dsSelect5.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	//var index = this.divData.form.tabData.tabindex;
        	var index = this.fnGetTabIndex();
        	trace("index :"+index);
        	trace("dsSelect13 :"+this.dsSelect13.getColumn(0,"GUBUN"));
        	switch(index) {
        		// 공사개요, 계약정보, 공사규모 탭.
        		case 0:
        		case 1:
         		case 2:
        // 			this.gfnGridBeforeSelect(this.dxGrid12);
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
        			inData      = "select4=dsSelect5";
        			outData     = "dsList4=select40";
        			break;
        		case 10:
        			strSvcId    = "select13";
        			inData      = "select13=dsSelect13";
        			outData     = "dsList13=select130";
        			break;
        		// 도급/실행 탭.
        		case 6 :
        			strSvcId    = "select7";
        			inData      = "select7=dsSelect0";
        			outData     = "dsList7=select70";
        			break;
        		// 청구/수금 탭.
        		case 7 :
        			strSvcId    = "select9";
        			inData      = "select9=dsSelect0";
        			outData     = "dsList9=select90";
        			break;
        		// 계획/공정 탭.
        		case 8 :
        			strSvcId    = "select10";
        			inData      = "select10=dsSelect";
        			outData     = "dsList10=select100";
        			break;

        			// 현장간접비 탭.
        // 		case 12 :
        // 			strSvcId    = "select14";
        // 			inData      = "select14=dsSelect14";
        // 			outData     = "dsList14=select140";
        // 			break;
        	}

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);  // 통신방법 정의 [생략가능]

        	// 현장인원, 도급/실행 탭은 우측 그리드 조회를 위해 별도 필요.
        	if(index == 5 || index == 6)
        	{
        		this.fnDetail(index);
        	}
        }

        this.fnDetail = function(index) {
        	// 현장사진 탭 주석으로 인한 임시처리.
        	//if(index > 5 && index != 11 && index != 6) index++;
        	//if(index > 5 && index != 11 && index != 6) index++;
        	if(index == 6) index = 8;

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
        	else if (index == 5)
        	{
        		this.dsSelect5.clearData();
        		this.dsSelect5.addRow();
        		this.dsSelect5.setColumn(0, "TY_WRK", "R");
        		this.dsSelect5.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		//this.dsSelect5.setColumn(0, "DT_REQUEST_FR", this.dsSearch.getColumn(0, "DT_REQUEST_FR"));
        		//this.dsSelect5.setColumn(0, "DT_REQUEST_TO", this.dsSearch.getColumn(0, "DT_REQUEST_TO"));

        		var inData      = "select" + index + "=dsSelect5";
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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var index = this.fnGetTabIndex();
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
        		// 현장갖넙 탭.
        		case 12:
        			var nrow = this.gfnGridAdd(this.dxGrid14, "bottom"); // top (default), bottom, current
        			break;
        	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var index = this.fnGetTabIndex();
         	//switch(this.divData.form.tabData.tabindex) {
        	switch(index) {
        		case 2:
        			/*this.gfnGridDel(this.dxGrid12);*/
        			break;
         		case 3:
         			this.gfnGridDel(this.dxGrid2);
         			break;
        		case 4:
        			this.gfnGridDel(this.dxGrid3);
         			break;
        		case 12:
        			this.gfnGridDel(this.dxGrid14);
         			break;
        // 		case 6:
        // 			this.gfnGridDel(this.dxGrid6);
        //  			break;
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

        	var index = this.fnGetTabIndex();
        	//switch(this.divData.form.tabData.tabindex) {
        	switch(index) {
        		// 공사개요, 계약정보, 공사규모 탭.
        		case 0:
        		case 1:
        		case 2:
        			//if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return false;
        			//if (!this.fnGrid1_Validate()) return false;
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
        		//현장사진 탭.
        		case 10:
        				strSvcId = "save13";
        				inData = "save13=dsSave";
        				this.fnSetParameter13();
        				if(!this.fnSave13()) return;
        			break;

        		//현장간접비 탭.
        		case 12:
        				strSvcId = "save14";
        				inData = "save14=dsSave";
        				this.fnSetParameter14();
        				if(!this.fnSave14()) return;
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

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(1, "CD_TYPE", "10");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsAR_SITE=combo0 dsTY_CONT=combo1";
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
        /*
        	var validate = true;
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        	{
        		this.gfnAlert("현장코드를 입력해주십시오.");
        		return false;
        	}
        	return validate;
        */
        }

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
        		/*this.gfnGridAfterSelect(this.dxGrid12);*/
        		this.FormBtns.Add.set_enable(false);
        	}
        	// 공동도급 탭.
        	else if (svcID == "select3") {
        		//alert(this.dxGrid3.oldrow);
        		// 조회한 후에 oldrow 가 null 이거나 -1 이면 그리드에 row가 없는 상태에서 조회를 한 상태이다
        		if(this.dxGrid3.oldrow < 0 || this.gfnIsNull(this.dxGrid3.oldrow)){
        			this.dxGrid3.setCellPos(0, 0);
        		}else{
        			this.gfnGridAfterSelect(this.dxGrid3);
        		}
        		this.dxGrid3.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	}
        	// 현장인원 탭.
        	else if (svcID == "select4" || svcID == "select5") {
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        	}
        	// 도급실행 탭.
        	else if (svcID == "select7" || svcID == "select8") {
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		// 트리 접는 로직.
        		trace("tree 11");
        		this.dxGrid7.set_treeinitstatus("collapse,all");
        		this._gfnGridTreeOpen(this.dxGrid7, 1);
        		/*this.dxGrid7.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);*/
        		this.dxGrid8.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        		trace("tree 22");
        	}
        	// 청구/수금 탭.
        	else if (svcID == "select9")
        	{
        		trace("tree 33");
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);

        		// 트리 접는 로직.

        		this.dxGrid9.set_treeinitstatus("collapse,all");
        		this._gfnGridTreeOpen(this.dxGrid9, 1);
        		this.dxGrid9.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        		trace("tree 44");
        	}
        	// 계획공정 탭.
        	else if (svcID == "select10")
        	{
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        	}
        	// 공동도급 탭 하단그리드
        	else if (svcID == "select11")
        	{

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
        	else if (svcID == "imagefile")
        	{
        		trace("imageFile callback!!");
        		trace(" filereturn :"+this.dsImageFile.getColumn(0, "filereturn"));

        		if(!this.gfnIsNull(this.dsImageFile.getColumn(0, "filereturn"))){
        			this.divData.form.tabData.tab11.form.divDataRight.form.siteImage.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        		}
        		//this.divData.form.tabData.tab11.form.divDataRight.form.siteImage.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        	}
        	else if (svcID == "select13")
        	{
        		if(this.dsList13.getRowCount() <= 0){
        			this.divData.form.tabData.tab11.form.divDataRight.form.siteImage.set_image(null);
        		}
        		else{
        			this.dsList13_onload();
        		}
        	}
        	else if (svcID == "save13")
        	{
        		this.FormBtns.Select.click();
        	}
        // 	else if (svcID == "select14")
        // 	{
        // 	trace("select14:"+this.dsList14);
        // 	this.FormBtns.Select.click();
        // 	}
        	 else if (svcID == "save14")
        	{
        	   this.gfnGridAfterSelect(this.dxGrid14);
        		this.FormBtns.Select.click();
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
        				//this.dsList.setColumn(0, "YN_USE", arr[0]["YN_USE"]);
        				this.dsList.setColumn(0, "YN_USE", "Y");
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

        				this.gfnSetFormStatus(this, "I");
        			break;
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

        	// 현장사진 탭의 첨부파일 버튼.
        	if(colnm == "DS_FILE") {
        		if(this.gfnGetFlag(this.dsList6, e.row) == "I"){
        			var fileid = "fileup_"+e.row;
        			if(this.lookup(fileid)) {
        				this[fileid].destroy();
        				this.removeChild(fileid);
        				delete this.fileuploads[fileid];
        			}
        			var fileup = new FileUpload();
        			fileup.init(fileid, 0,0,0,0);
        			this.addChild(fileid, fileup);
        			fileup.show();
        			fileup.row = e.row;
        			fileup.addEventHandler("onitemchanged", this.fileup_onitemchanged, this);
        			fileup.addEventHandler("onsuccess", this.fileup_onsuccess, this);
        			fileup.addEventHandler("onerror", this.fileup_onerror, this);

        			this.fileuploads[fileid] = fileup;
        			fileup.filefindbuttons.upfile0.click();
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
         *	현장사진 그리드 로우변경
         */
        this.fnGrid6_RowCellChanged = function(obj,e)
        {
            if (e.oldrow != e.row) {
        		this.fnImageView();
        	}
        };

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

        this.fnGrid_RowCellChanged = function(obj,e)
        {
         	var tIdx = this.fnGetTabIndex();
        	var colnm = "";
        	var rows = obj.getSelectedDatasetRows();
        	var sum = 0;
        	var bRet = "";
        	var colValue = "";

        	/* Tab Index
        	case "공사개요" : index = 0;
        	case "계약정보" : index = 1;
        	case "공사규모" :	index = 2;
        	case "발주처" :	index = 3;
        	case "공동도급" :	index = 4;
        	case "현장인원" :	index = 5;
        	case "도급/실행" :	index = 6;
        	case "청구/수금" :	index = 7;
        	case "계획/공정" :	index = 8;
        	case "현장사진" :	index = 10;
        	case "현장간접비" : index = 12;
        	*/
        	switch(tIdx){
        		case 4 :
        			colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid3, e.cell);
        			colValue = this.dxGrid3.getBindCellIndex("body", "DS_CONJOINTCOM");
        		break;
        		case 6 :
        			colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid8, e.cell);
        			colValue = this.dxGrid8.getBindCellIndex("body", "DS_SILHENG");
        		break;
        	}

        	for(var i = 0; i < rows.length; i++) {
        		//var am = this.dsList.getColumn(rows[i], e.selectstartcol);
        		switch(tIdx){
        			case 4 :
        				var am = this.gfnIsNull(this.dsList3.getColumn(rows[i], colnm)) ? 0 : this.dsList3.getColumn(rows[i], colnm);
        			break;
        			case 6 :
        				var am = this.gfnIsNull(this.dsList8.getColumn(rows[i], colnm)) ? 0 : this.dsList8.getColumn(rows[i], colnm);
        			break;
        			default:
        				var am = 0;
        			break;
        		}
        // 		var am = tIdx == 4 ? this.dsList3.getColumn(rows[i], colnm) :
        // 					tIdx == 6 ? this.dsList8.getColumn(rows[i], colnm) : 0;
        //
        		//bRet = nexacro.isNumeric(am);
        		bRet = isNaN(am); // 문자:true, 숫자:false
        		//alert(am+":::"+bRet);
        		if(bRet){
        			break;
        		}

        		if(!this.gfnIsNull(am)) {
        			sum += am;
        		}
        	}

        	if(!bRet){	// 숫자면 합계표시, 문자면 null
        		switch(tIdx){
        			case 4:
        				this.dxGrid3.setCellProperty("summ", colValue, "text", "선택합계=" + this.gfnAppendComma(sum))
        			break;
        			case 6:
        				this.dxGrid8.setCellProperty("summ", colValue, "text", "선택합계=" + this.gfnAppendComma(sum))
        			break;
        		}
        	}else{
        		tIdx == 4 ? this.dxGrid3.setCellProperty("summ", colValue, "text", "") :
        		tIdx == 6 ? this.dxGrid8.setCellProperty("summ", colValue, "text", "") : "";
        	}
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        // 	if(e.columnid != "DT_REQUEST_FR" && e.columnid != "DT_REQUEST_TO"){
        // 		if(e.oldvalue != e.newvalue) {
        // 			this.gfnSetFormStatus(this);	// 폼상태 초기화
        //
        // 			if(this.addSearchYn != "Y"){
        // 				//this.dsList.clearData(); //this.dsList.addRow();
        // 				this.dsList2.clearData(); //this.dsList2.addRow();
        // 				this.dsList3.clearData(); //this.dsList3.addRow();
        // 				this.dsList4.clearData(); //this.dsList4.addRow();
        // 				this.dsList5.clearData(); //this.dsList5.addRow();
        // 				this.dsList6.clearData(); //this.dsList6.addRow();
        // 				this.dsList12.clearData();
        // 				//this.dsList13.clearData();
        // 			}
        //
        // 			this.addSearchYn = "N";
        //
        // 		}
        // 	}
        };

        // Splitter가 있는 탭의 Splitter 위치 조정을 위한 이벤트.
        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		var index = this.fnGetTabIndex();

        		console.log("index:" + index)
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
        				this.divData.form.tabData.tab8.form.divSplitter.set_left(e.clientx);
        				this.divData.form.tabData.tab8.form.resetScroll();
        				break;
        			case 10:
        				this.divData.form.tabData.tab11.form.divSplitter.set_left(e.clientx);
        				this.divData.form.tabData.tab11.form.resetScroll();
        				break;
        		}
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	trace("111111111");
        	console.log(obj)
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
        	this.FormBtns.Select.click();
        	//현장인원 이동 시
        	if(e.postindex == 4){
        		this.divSearch.form.div_srchBeforeUser.set_visible(true);
        	}else{
        		this.divSearch.form.div_srchBeforeUser.set_visible(false);
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

        	this.dsSave.addColumn("DS_UPSCALEPY", "bigdecimal");
        	this.dsSave.addColumn("RT_UPSCALE", "bigdecimal");

        	this.dsSave.addColumn("DS_DOWNSCALE", "int");
        	this.dsSave.addColumn("DS_DOWNSCALEPY", "bigdecimal");
        	this.dsSave.addColumn("RT_DOWNSCALE", "bigdecimal");

        	this.dsSave.addColumn("DS_MAINSTREET", "string");
        	this.dsSave.addColumn("DS_PARKING", "string");
        	this.dsSave.addColumn("DS_PARKINGPER", "bigdecimal");

        	this.dsSave.addColumn("DS_HEIGHT", "string");
        	this.dsSave.addColumn("DT_ACCEPTUSE", "string");
        	this.dsSave.addColumn("DS_ROOF", "string");
        	this.dsSave.addColumn("DS_LANDSCAPE", "string");
        	this.dsSave.addColumn("RT_LANDSCAPE", "bigdecimal");

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
        	this.dsSave.addColumn("NO_ID", "bigdecimal");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("TY_FILE", "string");
        	this.dsSave.addColumn("DT_WORK", "string");
        	this.dsSave.addColumn("DS_FILE", "string");
        	this.dsSave.addColumn("RM_PIC", "string");
        	this.dsSave.addColumn("PIC_SITE", "blob");
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

        this.fnSetParameter13 = function()
        {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("NO_SEQ", "string");
        	this.dsSave.addColumn("CD_GUBUN", "string");
        	this.dsSave.addColumn("DS_PATH", "string");
        	this.dsSave.addColumn("NM_FILE", "string");
        	this.dsSave.addColumn("SZ_FILE", "bigdecimal");
        	this.dsSave.addColumn("DS_ETC", "string");
        	this.dsSave.addColumn("CD_REF1", "string");
        	this.dsSave.addColumn("CD_REF2", "string");
        	this.dsSave.addColumn("CD_REF3", "string");
        }

        this.fnSetParameter14 = function()
        {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("CD_CBS", "string");
        	this.dsSave.addColumn("CD_CAL", "string");
        	this.dsSave.addColumn("RT_CAL_1", "bigdecimal");
        	this.dsSave.addColumn("RT_CAL_2", "bigdecimal");
        	this.dsSave.addColumn("DS_BIGO", "string");
        	this.dsSave.addColumn("CD_TYPE", "string");
        }

        this.fnSetParameter15 = function()
        {
        /*
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("CD_CBS", "string");
        	this.dsSave.addColumn("CD_CAL", "string");
        	this.dsSave.addColumn("RT_CAL_1", "bigdecimal");
        	this.dsSave.addColumn("RT_CAL_2", "bigdecimal");
        	*/

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
        	this.dsSave.setColumn(nrow, "DT_HAJA_TO", this.dsList.getColumn(0, "DT_HAJA_TO"));
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
        	//this.dsSave.setColumn(nrow, "YN_USE", this.dsList.getColumn(0, "YN_USE"));
        	this.dsSave.setColumn(nrow, "YN_USE", "Y");
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
        	this.dsSave.setColumn(nrow, "DS_UPSCALEPY", this.dsList.getColumn(0, "DS_UPSCALEPY"));
        	this.dsSave.setColumn(nrow, "RT_UPSCALE", this.dsList.getColumn(0, "RT_UPSCALE"));

        	this.dsSave.setColumn(nrow, "DS_DOWNSCALE", this.dsList.getColumn(0, "DS_DOWNSCALE"));
        	this.dsSave.setColumn(nrow, "DS_DOWNSCALEPY", this.dsList.getColumn(0, "DS_DOWNSCALEPY"));
        	this.dsSave.setColumn(nrow, "RT_DOWNSCALE", this.dsList.getColumn(0, "RT_DOWNSCALE"));

        	this.dsSave.setColumn(nrow, "DS_MAINSTREET", this.dsList.getColumn(0, "DS_MAINSTREET"));
        	this.dsSave.setColumn(nrow, "DS_PARKING", this.dsList.getColumn(0, "DS_PARKING"));
        	this.dsSave.setColumn(nrow, "DS_PARKINGPER", this.dsList.getColumn(0, "DS_PARKINGPER"));

        	this.dsSave.setColumn(nrow, "DS_HEIGHT", this.dsList.getColumn(0, "DS_HEIGHT"));
        	this.dsSave.setColumn(nrow, "DT_ACCEPTUSE", this.dsList.getColumn(0, "DT_ACCEPTUSE"));
        	this.dsSave.setColumn(nrow, "DS_ROOF", this.dsList.getColumn(0, "DS_ROOF"));
        	this.dsSave.setColumn(nrow, "DS_LANDSCAPE", this.dsList.getColumn(0, "DS_LANDSCAPE"));
        	this.dsSave.setColumn(nrow, "RT_LANDSCAPE", this.dsList.getColumn(0, "RT_LANDSCAPE"));

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
        	//if (!this.gfnGridValidate(this.dxGrid2)) return false;
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
        	//if (!this.gfnGridValidate(this.dxGrid3)) return false;
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
        	this.dsDeleteFile.clearData(); // 서버에서 삭제할 파일

        	for (var i = 0; i < this.dsList6.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList6, i);

        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "NO_ID", this.dsList6.getColumn(i, "NO_ID"));
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "TY_FILE", this.dsList6.getColumn(i, "TY_FILE"));
        				this.dsSave.setColumn(nrow, "DT_WORK", this.dsList6.getColumn(i, "DT_WORK"));
        				this.dsSave.setColumn(nrow, "DS_FILE", this.dsList6.getColumn(i, "DS_FILE"));
        				this.dsSave.setColumn(nrow, "RM_PIC", this.dsList6.getColumn(i, "RM_PIC"));
        				this.dsSave.setColumn(nrow, "PIC_SITE", this.dsList6.getColumn(i, "PIC_SITE"));

        				// 삭제시 서버파일도 삭제
        				if(flag == "D") {
        					if (!this.gfnIsNull(this.dsList6.getColumn(i, "DS_FILE"))) {
        						nrow = this.dsDeleteFile.addRow();
        						var key = this.dsSearch.getColumn(0, "CD_SITE");

        						this.dsDeleteFile.setColumn(nrow, "filepath", this.filepath + key); //this.dsList.getColumn(i, "DS_PATH"));
        						this.dsDeleteFile.setColumn(nrow, "filename", this.dsList6.getColumn(i, "DS_FILE"));
        					}
        				}
        				break;
        		}
        	}
        	return true;
        }

        this.fnSave9 = function()
        {
        	//if (!this.gfnGridValidate(this.dxGrid9)) return false;
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

        this.fnSave13 = function()
        {
        	//this.dxGrid13.updateToDataset();
        	this.dsSave.clearData();

        	for(var i =0;i< this.dsList13.rowcount;i++){
        		var flag = this.gfnGetFlag(this.dsList13, i);

        		if(flag == "U"){
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        			this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList13.getColumn(i, "NO_SEQ"));
        			this.dsSave.setColumn(nrow, "CD_GUBUN", "DWZ1");
        			this.dsSave.setColumn(nrow, "DS_PATH", this.dsList13.getColumn(i, "DS_PATH"));
        			this.dsSave.setColumn(nrow, "NM_FILE", this.dsList13.getColumn(i, "NM_FILE"));
        			this.dsSave.setColumn(nrow, "SZ_FILE", this.dsList13.getColumn(i, "SZ_FILE"));
        			this.dsSave.setColumn(nrow, "DS_ETC", this.dsList13.getColumn(i, "DS_ETC"));
        			this.dsSave.setColumn(nrow, "CD_REF1", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSave.setColumn(nrow, "CD_REF2", "");
        			this.dsSave.setColumn(nrow, "CD_REF3", "");
        		}
        	}
        	return true;
        }

        this.fnSave14 = function()
        {
        	//if (!this.gfnGridValidate(this.dxGrid2)) return false;
        	//this.dxGrid14.updateToDataset();
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList14.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList14, i);

        		switch(flag) {
        		    case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "CD_CBS", this.dsList14.getColumn(i, "CD_CBS"));
        				this.dsSave.setColumn(nrow, "CD_CAL", this.dsList14.getColumn(i, "CD_CAL"));
        				this.dsSave.setColumn(nrow, "RT_CAL_1", this.dsList14.getColumn(i, "RT_CAL_1"));
        				this.dsSave.setColumn(nrow, "RT_CAL_2", this.dsList14.getColumn(i, "RT_CAL_2"));
        				this.dsSave.setColumn(nrow, "DS_BIGO", this.dsList14.getColumn(i, "DS_BIGO"));
        				this.dsSave.setColumn(nrow, "CD_TYPE", this.dsList14.getColumn(i, "CD_TYPE"));
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
        	//if (!this.gfnGridValidate(this.dxGrid6)) return;

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

        this.fileup_onitemchanged = function(obj,e) {
        	var row = obj.row;

        	if(obj.filelist.length > 0) {
        		var filename = obj.filelist[0].filename;
        		var fileext = filename.toLocaleLowerCase().substring(filename.lastIndexOf('.')+1);

        		if(!this.gfnIsExistInArray(this.fileConfig.allowTypes, fileext)) {
        			this.gfnAlert("이미지 파일(" + this.fileConfig.allowTypes.join(',') + ")을 선택하세요.");
        			return;
        		}

        		this.dsList6.setColumn(row, "DS_FILE", obj.filelist[0].filename);
        	}
        }

        this.fileup_onsuccess = function(obj,e) {
        	this.filecnt += 1;

        	if(this.keys.length == this.filecnt) {
        		// 전체 업로드 완료시 저장 진행
        		this.fnSaveAfterUpload();
        	}
        }

        this.fileup_onerror = function(obj,e) {
        	// 업로드 오류 파일은 제외하고 저장
        	this.filecnt += 1;

        	if(this.keys.length == this.filecnt) {
        		this.fnSaveAfterUpload();
        	}
        }


        this.fnImageView = function() {
        	if (!this.gfnGridIsRow(this.dxGrid13)) { return false; }

        	if (this.gfnGetFlag(this.dsList13, this.dsList13.rowposition) == "I") {
        		this.divData.form.tabData.tab11.form.divDataRight.form.siteImage.set_image(null);
        	}

        	if (this.gfnIsNull(this.dsList13.getColumn(this.dsList13.rowposition, "NM_FILE"))) { return false; }

        	this.dsImageFile.clearData();
        	this.dsImageFile.addRow();

        	var key = this.dsSearch.getColumn(0, "CD_SITE");

        	this.dsImageFile.setColumn(0, "filepath", this.filepath + key);
        	this.dsImageFile.setColumn(0, "filename", this.dsList13.getColumn(this.dsList13.rowposition, "NM_FILE"));

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

        this.fnGetTabIndex = function()
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
        		case "도급/실행" :	index = 6;
        			break;
        		case "청구/수금" :	index = 7;
        			break;
        		case "계획/공정" :	index = 8;
        			break;
        		case "현장사진" :	index = 10;
        			break;
        		case "현장간접비" : index = 12;
        			break;
        	}
        	return index;
        }

        this.dsList13_onload = function(obj,e)
        {
        	if(this.dsList13.getRowCount() > 0)
        	{
        		this.dsList13.set_rowposition(0);
        		this.fnImageView();
        	}
        	else{
        		this.divData.form.tabData.tab11.form.divDataRight.form.siteImage.set_image(null);
        	}
        };

        this.dsList13_onrowposchanged = function(obj,e)
        {
        	if(this.dsList13.getRowCount() > 0)
        	{
        		// 작은 이미지에서 큰 이미지로 변경될 때 작은 이미지가 잠시동안 크게 보여졌다 사라지는 현상으로 인해 삽입
        		this.divData.form.tabData.tab11.form.divDataRight.form.siteImage.set_image(null);
        		this.fnImageView();
        	}
        	else{
        		this.divData.form.tabData.tab11.form.divDataRight.form.siteImage.set_image(null);
        	}
        };


        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		this.gfnSetFormStatus(this, "U");	// 폼상태 업데이트

        		if(e.columnid == "DS_UPSCALE"){
        			var ds_totfloorpy = this.dsList.getColumn(0,"DS_TOTFLOORPY");
        			var ds_upscalepy = nexacro.toNumber(e.newvalue,0) * 0.3025;
        			var rt_upscale = nexacro.toNumber(ds_upscalepy,0) / nexacro.toNumber(ds_totfloorpy,0) * 100;

        			this.dsList.setColumn(0, "DS_UPSCALEPY", nexacro.round(ds_upscalepy,0));
        			this.dsList.setColumn(0, "RT_UPSCALE", nexacro.round(rt_upscale,0));
        		}

                if(e.columnid == "DS_DOWNSCALE"){
        	        var ds_totfloorpy = this.dsList.getColumn(0,"DS_TOTFLOORPY");
        	        var ds_downscalepy = nexacro.toNumber(e.newvalue,0) * 0.3025;
        			var rt_downscale = nexacro.toNumber(ds_downscalepy,0) / nexacro.toNumber(ds_totfloorpy,0) * 100;

        			this.dsList.setColumn(0, "DS_DOWNSCALEPY", nexacro.round(ds_downscalepy,0));
        			this.dsList.setColumn(0, "RT_DOWNSCALE", nexacro.round(rt_downscale,0));
        		}

        		if(e.columnid == "DS_PLOTTAGEM2"){
        		   var ds_plottagepy = nexacro.toNumber(e.newvalue,0) * 0.3025;

        		   this.dsList.setColumn(0, "DS_PLOTTAGEPY", nexacro.round(ds_plottagepy,0));
        		}

        		if(e.columnid == "DS_FLOORM2"){
        			var ds_plottagem2 = this.dsList.getColumn(0,"DS_PLOTTAGEM2");
        			var ds_floorpy = nexacro.toNumber(e.newvalue,0) * 0.3025;
        			var ds_buildratio =  nexacro.toNumber(e.newvalue,0) / nexacro.toNumber(ds_plottagem2,0) * 100;

        			this.dsList.setColumn(0, "DS_BUILDRATIO", nexacro.round(ds_buildratio,2));
        			this.dsList.setColumn(0, "DS_FLOORPY", nexacro.round(ds_floorpy,0));
        		}

        		if(e.columnid == "DS_TOTFLOORM2"){
        			var ds_totfloorpy = nexacro.toNumber(e.newvalue,0) * 0.3025;
        			this.dsList.setColumn(0, "DS_TOTFLOORPY", nexacro.round(ds_totfloorpy,0));
        		}

        		if(e.columnid == "DS_LANDSCAPE"){
        			var ds_plottagem2 =  this.dsList.getColumn(0,"DS_PLOTTAGEM2");
        			var rt_landscape = nexacro.toNumber(e.newvalue,0) / nexacro.toNumber(ds_plottagem2,0) * 100;

        			this.dsList.setColumn(0, "RT_LANDSCAPE", nexacro.round(rt_landscape,0));
        		}

        		if(e.columnid == "DS_UPSCALEPY"){
        		   var ds_totfloorpy = this.dsList.getColumn(0,"DS_TOTFLOORPY");
        		   var ds_upscale = nexacro.toNumber(e.newvalue,0) /  0.3025;
        		   var rt_upscale = nexacro.toNumber(e.newvalue,0) / nexacro.toNumber(ds_totfloorpy,0) * 100;

        		   this.dsList.setColumn(0, "DS_UPSCALE", nexacro.round(ds_upscale,0));
        		   this.dsList.setColumn(0, "RT_UPSCALE", nexacro.round(rt_upscale,0));
        		}

        		if(e.columnid == "DS_DOWNSCALEPY"){
        		   var ds_totfloorpy = this.dsList.getColumn(0,"DS_TOTFLOORPY");
        		   var ds_downscale = nexacro.toNumber(e.newvalue,0) /  0.3025;
        		   var rt_downscale = nexacro.toNumber(e.newvalue,0) / nexacro.toNumber(ds_totfloorpy,0) * 100;

        		   this.dsList.setColumn(0, "DS_DOWNSCALE", nexacro.round(ds_downscale,0));
        		   this.dsList.setColumn(0, "RT_DOWNSCALE", nexacro.round(rt_downscale,0));
        		}
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
            this.divData.form.tabData.tab1.form.staNO_TEL.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TEL_onclick,this);
            this.divData.form.tabData.tab1.form.sta02.addEventHandler("onclick",this.divData_tabData_tab1_sta02_onclick,this);
            this.divData.form.tabData.tab1.form.sta03.addEventHandler("onclick",this.divData_tabData_tab1_sta03_onclick,this);
            this.divData.form.tabData.tab1.form.sta04.addEventHandler("onclick",this.divData_tabData_tab1_sta04_onclick,this);
            this.divData.form.tabData.tab1.form.staSpace0.addEventHandler("onclick",this.divData_tabData_tab1_staSpace0_onclick,this);
            this.divData.form.tabData.tab1.form.staDS_REMARK.addEventHandler("onclick",this.Static_onclick,this);
            this.divData.form.tabData.tab1.form.ctxtAT_SITEORM.addEventHandler("onchanged",this.divData_tabData_tab1_ctxtAT_SITEORM_onchanged,this);
            this.divData.form.tabData.tab1.form.ctxtNO_TEL.addEventHandler("onchanged",this.divData_tabData_tab1_ctxtNO_TEL_onchanged,this);
            this.divData.form.tabData.tab1.form.ctxtDS_MAINSTREET.addEventHandler("onchanged",this.divData_tabData_tab1_ctxtNO_FAX_onchanged,this);
            this.divData.form.tabData.tab1.form.sta00_00.addEventHandler("onclick",this.divData_tabData_tab1_sta00_00_onclick,this);
            this.divData.form.tabData.tab1.form.staNO_FAX.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TEL_onclick,this);
            this.divData.form.tabData.tab1.form.sta03_00.addEventHandler("onclick",this.divData_tabData_tab1_sta03_onclick,this);
            this.divData.form.tabData.tab1.form.ctxtNO_FAX.addEventHandler("onchanged",this.divData_tabData_tab1_ctxtNO_TEL_onchanged,this);
            this.divData.form.tabData.tab1.form.staDS_MAINSTREET.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TEL_onclick,this);
            this.divData.form.tabData.tab1.form.staDS_HEIGHT.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TEL_onclick,this);
            this.divData.form.tabData.tab1.form.staDS_HOUSEHOLDS.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TEL_onclick,this);
            this.divData.form.tabData.tab1.form.staDS_STRUCT.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TEL_onclick,this);
            this.divData.form.tabData.tab1.form.staDS_PLOTTAGE.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TEL_onclick,this);
            this.divData.form.tabData.tab1.form.staDS_FLOOR.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TEL_onclick,this);
            this.divData.form.tabData.tab1.form.staDS_TOTFLOOR.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TEL_onclick,this);
            this.divData.form.tabData.tab1.form.staDS_UPSCALE.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TEL_onclick,this);
            this.divData.form.tabData.tab1.form.staDS_DOWNSCALE.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TEL_onclick,this);
            this.divData.form.tabData.tab1.form.staDS_BUILDRATIO.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TEL_onclick,this);
            this.divData.form.tabData.tab1.form.staDS_PARKING.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TEL_onclick,this);
            this.divData.form.tabData.tab1.form.staDS_LANDSCAPE.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TEL_onclick,this);
            this.divData.form.tabData.tab1.form.sta04_1.addEventHandler("onclick",this.divData_tabData_tab1_sta04_onclick,this);
            this.divData.form.tabData.tab1.form.sta04_2.addEventHandler("onclick",this.divData_tabData_tab1_sta04_onclick,this);
            this.divData.form.tabData.tab1.form.sta04_3.addEventHandler("onclick",this.divData_tabData_tab1_sta04_onclick,this);
            this.divData.form.tabData.tab1.form.sta04_4.addEventHandler("onclick",this.divData_tabData_tab1_sta04_onclick,this);
            this.divData.form.tabData.tab1.form.sta04_5.addEventHandler("onclick",this.divData_tabData_tab1_sta04_onclick,this);
            this.divData.form.tabData.tab1.form.ctxtDS_HEIGHT.addEventHandler("onchanged",this.divData_tabData_tab1_ctxtNO_FAX_onchanged,this);
            this.divData.form.tabData.tab1.form.ctxtDS_HOUSEHOLDS.addEventHandler("onchanged",this.divData_tabData_tab1_ctxtNO_FAX_onchanged,this);
            this.divData.form.tabData.tab1.form.ctxtDS_STRUCT.addEventHandler("onchanged",this.divData_tabData_tab1_ctxtNO_FAX_onchanged,this);
            this.divData.form.tabData.tab1.form.sta00_2.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.sta00_1.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.sta04_6.addEventHandler("onclick",this.divData_tabData_tab1_sta04_onclick,this);
            this.divData.form.tabData.tab1.form.ctxtDS_FLOORM2.addEventHandler("onchanged",this.divData_tabData_tab1_ctxtDS_FLOORM2_onchanged,this);
            this.divData.form.tabData.tab1.form.sta00_3.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.ctxtDS_FLOORPY.addEventHandler("onchanged",this.divData_tabData_tab1_ctxtDS_FLOORPY_onchanged,this);
            this.divData.form.tabData.tab1.form.sta00_4.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.sta00_5.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.ctxtDS_TOTFLOORPY.addEventHandler("onchanged",this.divData_tabData_tab1_ctxtDS_TOTFLOORPY_onchanged,this);
            this.divData.form.tabData.tab1.form.sta04_7.addEventHandler("onclick",this.divData_tabData_tab1_sta04_onclick,this);
            this.divData.form.tabData.tab1.form.sta04_8.addEventHandler("onclick",this.divData_tabData_tab1_sta04_onclick,this);
            this.divData.form.tabData.tab1.form.sta04_10.addEventHandler("onclick",this.divData_tabData_tab1_sta04_onclick,this);
            this.divData.form.tabData.tab1.form.sta04_11.addEventHandler("onclick",this.divData_tabData_tab1_sta04_onclick,this);
            this.divData.form.tabData.tab1.form.sta00_7.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.sta00_6.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.sta00_8.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.sta00_9.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.sta00_10.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.sta00_11.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.sta00_12.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.ctxtDS_BUILDRATIO.addEventHandler("onchanged",this.dsList_onvaluechanged,this);
            this.divData.form.tabData.tab1.form.sta00_13.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.sta00_14.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.sta00_15.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.sta00_16.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.sta00_17.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.sta00_18.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.ctxtRT_LANDSCAPE.addEventHandler("onchanged",this.divData_tabData_tab1_ctxtRT_LANDSCAPE_onchanged,this);
            this.divData.form.tabData.tab1.form.sta00_19.addEventHandler("onclick",this.divData_tabData_tab1_sta00_01_00_onclick,this);
            this.divData.form.tabData.tab1.form.staRM_BIGO.addEventHandler("onclick",this.Static_onclick,this);
            this.divData.form.tabData.tab2.form.sta35.addEventHandler("onclick",this.divData_tabData_tab2_sta35_onclick,this);
            this.divData.form.tabData.tab2.form.ctxtRT_SILHENG.addEventHandler("onchanged",this.divData_tabData_tab2_ctxtRT_SILHENG_onchanged,this);
            this.divData.form.tabData.tab2.form.crdoYN_JUGAN.addEventHandler("onitemchanged",this.divData_tabData_tab2_crdoYN_JUGAN_onitemchanged,this);
            this.divData.form.tabData.tab2.form.staAM_SILHENG00.addEventHandler("onclick",this.divData_tabData_tab2_staAM_SILHENG00_onclick,this);
            this.divData.form.tabData.tab5.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.tabData.tab6.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.tabData.tab7.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.tabData.tab8.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.tabData.tab11.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList3.addEventHandler("oncolumnchanged",this.dsList3_oncolumnchanged,this);
            this.dsList3.addEventHandler("onrowposchanged",this.dsList3_onrowposchanged,this);
            this.dsList10.addEventHandler("oncolumnchanged",this.dsList10_oncolumnchanged,this);
            this.dsList13.addEventHandler("onload",this.dsList13_onload,this);
            this.dsList13.addEventHandler("onrowposchanged",this.dsList13_onrowposchanged,this);
        };
        this.loadIncludeScript("DWZ_SITE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
