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
            this.set_titletext("도급기성-청구관리");
            this.set_scrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(964,635);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOFPR_CONST_DEMAND_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOFPR_CONST_DEMAND_MERGE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DOFPR_CONST_DEMAND_DELETE</Col></Row><Row><Col id=\"TARGET\">slipInsert</Col><Col id=\"SP\">DOZPR_CONST_DEMAND_AUTOSLIP_ISSUE</Col></Row><Row><Col id=\"TARGET\">slipCancel</Col><Col id=\"SP\">DOZPR_CONST_DEMAND_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"SP\">DOFPR_APP_DOF01_CHECK</Col><Col id=\"TARGET\">appChk</Col></Row><Row><Col id=\"TARGET\">appSelect</Col><Col id=\"SP\">DOFPR_APP_DOF01_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PUB", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DMD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBase", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NO_DMD\" type=\"INT\" size=\"256\"/><Column id=\"AM_SUP_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TXF_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TOT_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DMD_SUP_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DMD_TXF_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DMD_VAT_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DMD_TOT_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONST_SUP_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONST_TXF_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONST_VAT_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONST_TOT_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_UNCLMD_SUP_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_UNCLMD_TXF_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_UNCLMD_VAT_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_UNCLMD_TOT_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_UNDMD_SUP_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_UNDMD_TXF_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_UNDMD_VAT_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_UNDMD_TOT_SUM_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_DMD\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PUB\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"YN_TAX_NA\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DMD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_SCHD_COLT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONST_SUP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONST_TXF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONST_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REPAY_SUP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REPAY_TXF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REPAY_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_ADV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ADV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SLIP2\" type=\"STRING\" size=\"256\"/><Column id=\"ID_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ST_APPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NO_DMD\" type=\"INT\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RT_ADV\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseRst", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NO_DMD\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TAX", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBase2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_FIELD","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_FIELD","0.0","staCD_FIELD:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_FIELD","ctxtCD_FIELD:0.0","staCD_FIELD:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_CONT","ctxtDS_FIELD:0.0","staCD_FIELD:10.0","20","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_FIELD00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("현장코드");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_CONST","0.0","staCD_FIELD:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CONST","ctxtCD_CONST:0.0","staCD_FIELD:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","50",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ_STAT","5","27","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ","124","27","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("공급가(세금계산서)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT","5","56","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("계약금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS","55","114","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("기성금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ACC","5","85","51","59",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("청구");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_PUB_NOTICE","5","143","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("미청구");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","124","56","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT","5","172","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("잔여선수금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD00","55","85","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("선수금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","124","266","181","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT00","5","237","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("청구회차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","124","237","181","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ00","529","237","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("청구내역구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta20","124","295","126","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21","648","237","309","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS00","249","295","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("수금예정일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ACC00","489","324","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("적요");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","368","295","122","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23","608","324","349","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_LOCAL00","489","295","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("거래처");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta25","608","295","349","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD01","5","266","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("청구구분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ENF_DEPT01","5","295","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_text("청구일자");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT02","staDS_ACC00:4","329","339","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","0",null,"22","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("전회누계(당사분)");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ00","332","27","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ00_00","540","27","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_text("비과세(계산서)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ00_00_00","748","27","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00","332","56","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00","540","56","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00","748","56","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_01","124","85","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_01","332","85","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_01","540","85","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00","748","85","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_00","748","114","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_01_00","540","114","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_01_00","332","114","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_01_00","124","114","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_01","748","143","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_01_01","540","143","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_01_01","332","143","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_01_01","124","143","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_02","748","172","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_01_02","540","172","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_01_02","332","172","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_01_02","124","172","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00","128","61","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_00","336","61","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_01","544","61","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_01_00","752","61","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_01_00_00","752","90","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_01_01","544","90","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_00_00","336","90","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_02","128","90","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_01_00_00_00","752","119","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_01_01_00","544","119","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_00_00_00","336","119","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_02_00","128","119","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_01_00_00_00_00","752","148","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_01_01_00_00","544","148","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_00_00_00_00","336","148","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_02_00_00","128","148","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_01_00_00_00_00_00","752","176","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("75");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_01_01_00_00_00","544","176","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("76");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_00_00_00_00_00","336","176","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("77");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_02_00_00_00","128","176","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("78");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title01","5","210",null,"22","803",null,null,null,null,null,this.divData.form);
            obj.set_taborder("79");
            obj.set_text("금회(당사분)");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22_00","419","237","111","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS00_00","304","237","116","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("81");
            obj.set_text("당사지분율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_DMD","staTY_BIZ_MHOD01:3","271","172","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_DMD");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_PUB","652","242","138","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("82");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_PUB");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ","staDS_ENF_DEPT01:3","300","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ00","staDS_LAND_CLS00:3","300","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND10","423","242","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("83");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staPercent10","488","242","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("84");
            obj.set_text("%");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staDS_LOCAL00:3","300","340","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DOX_CFVENDOR_DH");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ_STAT00","5","382","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("85");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ01","124","382","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("86");
            obj.set_text("공급가(세금계산서)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT01","42","411","83","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("87");
            obj.set_text("기성/선수금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS01","42","469","83","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("88");
            obj.set_text("금회합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ACC01","5","411","38","88",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("89");
            obj.set_text("청구");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_PUB_NOTICE00","5","498","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("90");
            obj.set_text("미청구");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_02","124","411","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT00","5","527","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("92");
            obj.set_text("잔여선수금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD00_00","42","440","83","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("93");
            obj.set_text("선수정산");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ00_01","331","382","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("94");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ00_00_01","539","382","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("95");
            obj.set_text("비과세(계산서)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ00_00_00_00","746","382","211","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("96");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_02","331","411","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_02","539","411","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_01","746","411","211","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_01_03","124","440","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_01_03","331","440","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_01_03","539","440","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_03","746","440","211","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_00_00","746","469","211","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_01_00_00","539","469","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_01_00_00","331","469","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_01_00_00","124","469","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_01_00","746","498","211","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_01_01_00","539","498","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("109");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_01_01_00","331","498","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_01_01_00","124","498","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_02_00","746","527","211","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_01_02_00","539","527","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_01_02_00","331","527","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_01_02_00","124","527","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST_SUP","128","416","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST_VAT","335","416","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST_TXF","543","416","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST_TOT_SUM","750","416","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("116");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_REPAY_TOT_SUM","750","445","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("117");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_REPAY_TXF","543","445","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_REPAY_VAT","335","445","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_REPAY_SUP","128","445","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST_REPAY_TOT_TOT_SUM","750","474","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("118");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST_REPAY_TXF_TOT_SUM","543","474","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("119");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST_REPAY_VAT_TOT_SUM","335","474","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("120");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST_REPAY_SUP_TOT_SUM","128","474","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("121");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_UNCLMD_TOT_TOT_SUM","750","503","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("122");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_UNCLMD_TXF_TOT_SUM","543","503","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("123");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_UNCLMD_VAT_TOT_SUM","335","503","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("124");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_UNCLMD_SUP_TOT_SUM","128","503","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("125");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_UNDMD_TOT_SUM","750","531","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("126");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_UNDMD_TXF_SUM","543","531","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("127");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_UNDMD_VAT_SUM","335","531","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("128");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_UNDMD_SUP_SUM","128","531","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("129");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ACC00_00","489","353","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("130");
            obj.set_text("계산서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23_00","608","353","349","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT02_00","612","358","340","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("132");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DMD","staTY_PRDCT00:3","242","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("133");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS00_00_00","5","324","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("134");
            obj.set_text("영세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22_00_00","124","324","366","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_TAX_NA","134","327","74","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_TAX","194","212","172","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_TAX");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS00_00_01","648","266","89","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("136");
            obj.set_text("선수금율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22_00_01","736","266","221","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ADV","740","271","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("138");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ00_00","304","266","116","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("139");
            obj.set_text("대상금액(전체분)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21_00","419","266","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ADV","423","271","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("141");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staPercent10_00","804","270","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("142");
            obj.set_text("%");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00","541","208",null,"22","14",null,null,null,null,null,this.divData.form);
            obj.set_taborder("143");
            obj.set_text("대상금액은 부가세 제외된 금액입니다(당사분 + 타사분)");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00_00","20","558",null,"22","24",null,null,null,null,null,this.divData.form);
            obj.set_taborder("144");
            obj.set_text("※선수금 청구 공급가 = (대상금액[전체분] * (당사지분율 /100)) * (선수금율 / 100)");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00_01","703","2",null,"22","202",null,null,null,null,null,this.divData.form);
            obj.set_taborder("145");
            obj.set_text("결재 상태 :");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00_01_00","762","2",null,"22","13",null,null,null,null,null,this.divData.form);
            obj.set_taborder("146");
            obj.set_text("");
            obj.set_textAlign("right");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ACC00_00_00","5","353","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("147");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23_00_00","124","353","366","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("149");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT02_00_00","128","358","356","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("148");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_FIELD","value","dsBase","CD_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_FIELD","value","dsBase","DS_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtNO_CONT","value","dsBase","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtAM_LAND09_00","value","dsBase","AM_SUP_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctxtAM_LAND09_00_00","value","dsBase","AM_VAT_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctxtAM_LAND09_00_01","value","dsBase","AM_TXF_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctxtAM_LAND09_00_01_00","value","dsBase","AM_TOT_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctxtAM_LAND09_00_02","value","dsBase","AM_DMD_SUP_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ctxtAM_LAND09_00_00_00","value","dsBase","AM_DMD_VAT_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ctxtAM_LAND09_00_01_01","value","dsBase","AM_DMD_TXF_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctxtAM_LAND09_00_01_00_00","value","dsBase","AM_DMD_TOT_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctxtAM_LAND09_00_02_00","value","dsBase","AM_CONST_SUP_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ctxtAM_LAND09_00_00_00_00","value","dsBase","AM_CONST_VAT_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ctxtAM_LAND09_00_01_01_00","value","dsBase","AM_CONST_TXF_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.ctxtAM_LAND09_00_01_00_00_00","value","dsBase","AM_CONST_TOT_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ctxtAM_LAND09_00_02_00_00","value","dsBase","AM_UNCLMD_SUP_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.ctxtAM_LAND09_00_00_00_00_00","value","dsBase","AM_UNCLMD_VAT_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.ctxtAM_LAND09_00_01_01_00_00","value","dsBase","AM_UNCLMD_TXF_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.ctxtAM_LAND09_00_01_00_00_00_00","value","dsBase","AM_UNCLMD_TOT_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.ctxtAM_LAND09_00_02_00_00_00","value","dsBase","AM_UNDMD_SUP_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.ctxtAM_LAND09_00_00_00_00_00_00","value","dsBase","AM_UNDMD_VAT_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.ctxtAM_LAND09_00_01_01_00_00_00","value","dsBase","AM_UNDMD_TXF_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.ctxtAM_LAND09_00_01_00_00_00_00_00","value","dsBase","AM_UNDMD_TOT_SUM_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.ctxtNO_DMD","value","dsBase","NO_DMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.ccboTY_PUB","value","dsBase","TY_PUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.ccboTY_DMD","value","dsBase","TY_DMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.ctclDT_ACQ","value","dsBase","DT_DMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.ctclDT_ACQ00","value","dsBase","DT_SCHD_COLT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.ctxtAM_LAND10","value","dsBase","RT_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.ccfCD_VENDOR.form.CDTextBox","value","dsBase","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.ccfCD_VENDOR.form.DSTextBox","value","dsBase","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.ctxtNM_CHG_CONT02","value","dsBase","DS_RM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.ctxtAM_CONST_SUP","value","dsBase","AM_CONST_SUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.ctxtAM_CONST_VAT","value","dsBase","AM_CONST_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.ctxtAM_CONST_TXF","value","dsBase","AM_CONST_TXF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.ctxtAM_REPAY_SUP","value","dsBase","AM_REPAY_SUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.ctxtAM_REPAY_VAT","value","dsBase","AM_REPAY_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.ctxtAM_REPAY_TXF","value","dsBase","AM_REPAY_TXF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.chkYN_TAX_NA","value","dsBase","YN_TAX_NA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.ccboTY_TAX","value","dsBase","TY_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.ctxtRT_ADV","value","dsBase","RT_ADV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.ctxtAM_ADV","value","dsBase","AM_ADV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.ctxtNM_CHG_CONT02_00","value","dsBase","CD_SLIP2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.staTab1Title01_00_01_00","text","dsBase","NM_ST_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.ctxtNM_CHG_CONT02_00_00","value","dsBase","CD_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divSearch.form.ctxtCD_CONST","value","dsBase2","CD_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divSearch.form.ctxtDS_CONST","value","dsBase2","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.addIncludeScript("DOF_CONST_DEMAND.xfdl","lib::libCommon.xjs");
        this.registerScript("DOF_CONST_DEMAND.xfdl", function() {
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;

        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetExtendButton();

        	this.fnSetVariable();
        	this.fnSetParameter();
        	this.fnSetEvent();
        	this.fnSetCombo();

        	if(this.getOwnerFrame().TYPE == "Y"){
        		//생성
        		this.dsSearch.setColumn(0, "CD_FIELD", this.getOwnerFrame().CD_FIELD);
        		this.dsSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_CONT);
        		this.dsSearch.setColumn(0, "TYPE", "Y");
        		this.gfnSetFormStatus(this, "I");
        	} else {
        		//편집
        		this.dsSearch.setColumn(0, "CD_FIELD", this.getOwnerFrame().CD_FIELD);
        		this.dsSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_CONT);
        		this.dsSearch.setColumn(0, "NO_DMD", this.getOwnerFrame().NO_DMD);
        		this.dsSearch.setColumn(0, "TYPE", "N");
        		this.gfnSetFormStatus(this, "");
        	}

        	this.fnSelect();
        	this.fnSetButton();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        // 	this.FormBtns.Excel.set_enable(false);
        // 	this.FormBtns.Print.set_enable(false);

        	if(this.FormInfo.TY_AUTH == "R") {
        		this.FormBtns.Select.set_enable(true);
        		this.btnSlipSelect.set_enable( (!this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) || !this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP2"))? true:false) );
        		return;
        	}

        	var frmStatus = this.gfnGetFormStatus(this);

        	switch(frmStatus) {
        	case "I":
        		this.FormBtns.Select.set_enable(false);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(false);
        		break;
        	case "U":
        		this.FormBtns.Select.set_enable(true);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(true);

        		this.btnSlipSelect.set_enable( false );
        		this.btnSlipSave.set_enable( false );
        		this.btnSlipCancle.set_enable( false );
        		this.btnSlipInsert.set_enable( false );
        		this.btnSlipDelete.set_enable( false );

        		//수정불가
        		this.divData.form.ccboTY_DMD.set_enable(false);
        		//this.divData.form.ccboTY_TAX.set_enable(false);
        		//this.divData.form.chkYN_TAX_NA.set_enable(false);
        		break;
        	case "D":
        		break;
        	default: /*기본(조회완료)*/

        		this.btnSlipSelect.set_enable( (!this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) || !this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP2"))? true:false) );
        		this.btnSlipSave.set_enable( ((this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) && this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP2"))) && (this.dsBase.getColumn(0, "ST_APPR") == '01' || this.dsBase.getColumn(0, "ST_APPR") == '04' || this.dsBase.getColumn(0, "ST_APPR") == '06' || this.dsBase.getColumn(0, "ST_APPR") == '99')? true:false) );
        		this.btnSlipInsert.set_enable( ((this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) && this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP2"))) && (this.dsBase.getColumn(0, "ST_APPR") == '01' || this.dsBase.getColumn(0, "ST_APPR") == '04' || this.dsBase.getColumn(0, "ST_APPR") == '06' || this.dsBase.getColumn(0, "ST_APPR") == '99')? true:false) );
        		this.btnSlipCancle.set_enable( ((!this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) || !this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP2"))) && this.dsBase.getColumn(0, "ST_APPR") == '05'? true:false) );
        		//this.btnSlipDelete.set_enable( ((!this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) || !this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP2"))) && this.dsBase.getColumn(0, "ST_APPR") == '05'? true:false) );
        		this.btnSlipDelete.set_enable( (!this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) || !this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP2"))? true:false) );
        		this.FormBtns.Select.set_enable(true);
        		this.FormBtns.Save.set_enable(false);
        		this.FormBtns.Del.set_enable(true);
        		//수정불가
        		this.divData.form.ccboTY_DMD.set_enable(false);
        		//this.divData.form.ccboTY_TAX.set_enable(false);
        		//this.divData.form.chkYN_TAX_NA.set_enable(false);
        	}
        }


        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSlipInsert= this.gfnFormButtonAdd("btnSlipInsert", "fnSlipInsert"); //전표발행
        	this.btnSlipSelect= this.gfnFormButtonAdd("btnSlipSelect", "fnSlipSelect"); //전표조회
        	this.btnSlipDelete = this.gfnFormButtonAdd("btnSlipDelete", "fnSlipDelete"); //전표취소
        	this.btnSlipSave= this.gfnFormButtonAdd("btnSlipSave", "fnApp"); //결재상신
        	this.btnSlipCancle = this.gfnFormButtonAdd("btnSlipCancle", "fnAppCancle"); //결재취소
            this.btnHadoCreate = this.gfnFormButtonAdd("btnHadoCreate", "fnHadoCreate"); //하도급직불등록
        };

        this.fnSlipSelect = function(){
           //전표조회 화면 연결
          var cd_trade = this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) && !this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP2")) ? this.dsBase.getColumn(0, "CD_SLIP2") : this.dsBase.getColumn(0, "CD_SLIP");
           var param = {
        		CD_TRADE : cd_trade.replace(/-/g, '')  //this.dsBase.getColumn(0, "CD_SLIP").replace(/-/g, '')
           };
           this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        }

        this.fnApp = function(){
        	this.dsAppParam.clearData();
        	var nrow = this.dsAppParam.addRow();
        	this.dsAppParam.setColumn(nrow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));
        	this.dsAppParam.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsAppParam.setColumn(nrow, "NO_DMD", this.dsSearch.getColumn(0, "NO_DMD"));
        	this.dsAppParam.setColumn(nrow, "DOC_APP", "DOF01"); //DOF01 : 결재상신 / DOF10 : 결재취소

        	var msg = "현장코드 : " + this.dsSearch.getColumn(0, "CD_FIELD") + " [" + this.divSearch.form.ctxtDS_FIELD.text + "]"
        	        + "\n계약차수 : " + this.dsSearch.getColumn(0, "NO_CONT")
        			+ "\n청구횟수 : " + this.dsSearch.getColumn(0, "NO_DMD")
        			+ "\n\n결재상신 하시겠습니까?";
        	this.gfnConfirm(msg, "fnApp_callback", "");
        }

        this.fnAppCancle = function(){
        	this.dsAppParam.clearData();
        	var nrow = this.dsAppParam.addRow();
        	this.dsAppParam.setColumn(nrow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));
        	this.dsAppParam.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsAppParam.setColumn(nrow, "NO_DMD", this.dsSearch.getColumn(0, "NO_DMD"));
        	this.dsAppParam.setColumn(nrow, "DOC_APP", "DOF10"); //DOF01 : 결재상신 / DOF10 : 결재취소

        	var msg = "현장코드 : " + this.dsSearch.getColumn(0, "CD_FIELD") + " [" + this.divSearch.form.ctxtDS_FIELD.text + "]"
        	        + "\n계약차수 : " + this.dsSearch.getColumn(0, "NO_CONT") + " [" + this.divSearch.form.ctxtNO_CONT.text + "]"
        			+ "\n청구횟수 : " + this.dsSearch.getColumn(0, "NO_DMD") + " [" + this.divData.form.ctxtNO_DMD.text + "]"
        			+ "\n\n결재취소 하시겠습니까?";
        	this.gfnConfirm(msg, "fnApp_callback", "");

        }



        this.fnApp_callback = function(strId, val){
        	if(val == true)
        	{
        		if (this.dsAppParam.rowcount == 0) return;

        		var strSvcId    = "appChk";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "appChk=dsAppParam";
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

        this.fnAppSelect = function(){
        	var strSvcId    = "appSelect";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "appSelect=dsAppParam";
        	var outData     = "dsAppList=appSelect0";
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


        this.fnAppOpen = function()
        {
        	if(this.dsAppList.rowcount > 0)
        	{
        		var sApType = "";
        		var sTitle  = "";
        		sApType = this.dsAppParam.getColumn(0, "DOC_APP");
        		sTitle = "기성청구";

        		var sRef01  = this.dsSearch.getColumn(0, "CD_FIELD");
        		var sRef02  = this.dsSearch.getColumn(0, "NO_CONT");
        		var sRef03  = this.dsSearch.getColumn(0, "NO_DMD");
        		var sRef04  = "";
        		var oParam  = this.gfnDataSetToJson(this.dsAppList, this.dsAppList.rowposition)

        		console.info("================ oParam");
        		console.info(sApType);
        		console.info(sTitle);
        		console.info(oParam);

        		this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, "", oParam, "fnAprvDialogCallback");
        	}
        }

        this.fnAprvDialogCallback = function(){
        	this.FormBtns.Select.click();
        }






        this.fnSlipInsert = function(){
        	this.gfnConfirm("전표생성을 하시겠습니까?", function(strId, val){
        		if(val == true) {
        			//this.dsBase.set_enableevent(false);

        			this.dsSlipParam.clearData();
        			var nrow = this.dsSlipParam.addRow();

        			this.dsSlipParam.setColumn(nrow, "CD_FIELD", this.dsBase.getColumn(0, "CD_FIELD"));
        			this.dsSlipParam.setColumn(nrow, "NO_CONT", this.dsBase.getColumn(0, "NO_CONT"));
        			this.dsSlipParam.setColumn(nrow, "NO_DMD", this.dsBase.getColumn(0, "NO_DMD"));
        			this.dsSlipParam.setColumn(nrow, "ID_ADD", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
        			this.dsSlipParam.setColumn(nrow, "ID_AP", '');

        			//this.dsBase.set_enableevent(true);

        			var strSvcId    = "slipInsert";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "slipInsert=dsSlipParam";
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
        	});
        }


        this.fnSlipDelete = function(){
        	this.gfnConfirm("전표취소를 하시겠습니까?", function(strId, val){
        		if(val == true) {


        		    this.dsSlipParam.clearData();
        			var nrow = this.dsSlipParam.addRow();

        			this.dsSlipParam.setColumn(nrow, "CD_FIELD", this.dsBase.getColumn(0, "CD_FIELD"));
        			this.dsSlipParam.setColumn(nrow, "NO_CONT", this.dsBase.getColumn(0, "NO_CONT"));
        			this.dsSlipParam.setColumn(nrow, "NO_DMD", this.dsBase.getColumn(0, "NO_DMD"));
        			this.dsSlipParam.setColumn(nrow, "ID_ADD", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
        			this.dsSlipParam.setColumn(nrow, "ID_AP", '');

        			var strSvcId    = "slipCancel";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "slipCancel=dsSlipParam";
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
        	});
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ARCH_TY_PROJ = "SA00102";

        	this.serverTime = "";
        	this.gfnGetServerTime("serverTime");

        	this.serverTimeStr = this.gfnGetDigit(this.serverTime.substring(0, 10));

        	this.ccfCD_VENDOR = this.divData.form.ccfCD_VENDOR;
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	if(id == "ccfCD_VENDOR"){
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_FIELD"));
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "JNT");
        	}

        	return true;
         }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsAppParam = new Dataset();
        	this.dsAppParam.addColumn("CD_FIELD", "string");
        	this.dsAppParam.addColumn("NO_CONT", "int");
        	this.dsAppParam.addColumn("NO_DMD", "int");
        	this.dsAppParam.addColumn("DOC_APP", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_FIELD", "string");
        	this.dsSelect.addColumn("NO_CONT", "int");
        	this.dsSelect.addColumn("NO_DMD", "int");
        	this.dsSelect.addColumn("TYPE", "string");


        	this.dsSlipParam = new Dataset();
        	this.dsSlipParam.addColumn("CD_FIELD", "string");
        	this.dsSlipParam.addColumn("NO_CONT", "int");
        	this.dsSlipParam.addColumn("NO_DMD", "int");
        	this.dsSlipParam.addColumn("ID_ADD", "string");
        	this.dsSlipParam.addColumn("ID_AP", "string");
        };

        this.fnSetCombo = function(){
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(0, "CD_TYPE", "21");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(1, "CD_TYPE", "40");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(2, "CD_TYPE", "42");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_PUB=combo0 dsTY_DMD=combo1 dsTY_TAX=combo2";
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

        /************************************************************************
         * 트렌젝션 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function(obj,e){
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));
        	this.dsSelect.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsSelect.setColumn(0, "NO_DMD", this.dsSearch.getColumn(0, "NO_DMD"));
        	this.dsSelect.setColumn(0, "TYPE", this.dsSearch.getColumn(0, "TYPE"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsBase=select0 dsBase2=select1";
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

        this.fnSave = function(obj,e){
        	if(!this.fnSaveValidate()) return;

        	this.dsBase.setColumn(0, "TYPE", this.dsSearch.getColumn(0, "TYPE"));
        	this.dsBase.setColumn(0, "ID_ADD", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsBase";
        	var outData     = "dsBaseRst=save";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        };

        this.fnAdd = function(obj,e){
        	this.dsBase.set_enableevent(false);
        	this.dsBase.setColumn(0, "TY_PUB", "1");
        	this.dsBase.setColumn(0, "TY_DMD", "A");
        	this.dsBase.setColumn(0, "TY_TAX", "");
        	//this.dsBase.setColumn(0, "YN_TAX_NA", "N");
        	this.dsBase.setColumn(0, "DT_DMD", this.serverTimeStr);
        	this.dsBase.setColumn(0, "DT_SCHD_COLT", this.serverTimeStr);
        	this.dsBase.setColumn(0, "AM_CONST_SUP", 0);
        	this.dsBase.setColumn(0, "AM_CONST_TXF", 0);
        	this.dsBase.setColumn(0, "AM_CONST_VAT", 0);
        	this.dsBase.setColumn(0, "AM_REPAY_SUP", 0);
        	this.dsBase.setColumn(0, "AM_REPAY_TXF", 0);
        	this.dsBase.setColumn(0, "AM_REPAY_VAT", 0);
        	this.dsBase.set_enableevent(true);
        };

        this.fnDel = function(obj,e){
        	this.gfnConfirm("삭제 하시겠습니까?", function(strId, val){
        		if(val == true) {
        			var strSvcId    = "delete";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "delete=dsBase";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcType , 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc,false); // 통신방법 정의 [생략가능]
        		}
        	});
        };


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode == 0) {

        		if(svcID == "combo"){
        			this.divData.form.ccboTY_PUB.set_index(0);
        			this.divData.form.ccboTY_DMD.set_index(0);

        			this.dsTY_TAX.insertRow(0);
        			this.dsTY_TAX.setColumn(0, "CD_CODE", "");
        			this.dsTY_TAX.setColumn(0, "DS_CODE", "");
        			this.divData.form.ccboTY_TAX.set_index(0);

        		} else if(svcID == "select"){
        			if(this.dsSearch.getColumn(0, "TYPE") == "Y"){
        				this.fnAdd();
        				this.fnTyDmdChg();
        				this.fnCal();
        				this.gfnSetFormStatus(this, "I");

        				this.btnSlipSelect.set_enable(false);
        				this.btnSlipSave.set_enable(false);
        				this.btnSlipCancle.set_enable(false);
        			} else {
        				this.fnTyDmdChg();
        				this.fnCal();

        				this.gfnSetFormStatus(this, "");

        			}
        			this.dsSearch.setColumn(0, "RT_ADV",this.dsBase.getColumn(0,"RT_ADV"));
        			this.fnSetButton();
        		} else if(svcID == "save"){
        			this.dsSearch.setColumn(0, "CD_FIELD", this.dsBaseRst.getColumn(0, "OUT_CD_FIELD"));
        			this.dsSearch.setColumn(0, "NO_CONT", this.dsBaseRst.getColumn(0, "OUT_NO_CONT"));
        			this.dsSearch.setColumn(0, "NO_DMD", this.dsBaseRst.getColumn(0, "OUT_NO_DMD"));
        			this.dsSearch.setColumn(0, "TYPE", "N");

        			this.FormBtns.Select.click();
        		} else if(svcID == "delete"){
        			this.getParentContext().close();
        		} else if(svcID == "slipInsert"){
        			this.gfnAlert("정상처리 되었습니다.",null, null, function(){
        				this.fnSelect();
        			});
        		} else if(svcID == "slipCancel"){
        			this.gfnAlert("정상처리 되었습니다.",null, null, function(){
        				this.fnSelect();
        			});
        		} else if(svcID == "appChk") {
        			this.fnAppSelect();
        		} else if(svcID == "appSelect") {
        			this.fnAppOpen();
        		}
        	} else {
        		this.gfnAlert(errorMsg);
        	}


        };

        this.fnCal = function(){
        	//미청구 전
        	var AM_UNCLMD_SUP_SUM_B=0,AM_UNCLMD_VAT_SUM_B=0,AM_UNCLMD_TXF_SUM_B=0,AM_UNCLMD_TOT_SUM_B=0;
        	//잔여선수금 전
        	var AM_UNDMD_SUP_SUM_B=0,AM_UNDMD_VAT_SUM_B=0,AM_UNDMD_TXF_SUM_B=0,AM_UNDMD_TOT_SUM_B=0;
        	//기성
        	var AM_CONST_SUP=0,AM_CONST_VAT=0,AM_CONST_TXF=0,AM_CONST_TOT_SUM=0;
        	//선수금정산
        	var AM_REPAY_SUP=0,AM_REPAY_VAT=0,AM_REPAY_TXF=0,AM_REPAY_TOT_SUM=0;

        	//미청구 전
        	AM_UNCLMD_SUP_SUM_B=this.dsBase.getColumn(0, "AM_UNCLMD_SUP_SUM_B");
        	AM_UNCLMD_VAT_SUM_B=this.dsBase.getColumn(0, "AM_UNCLMD_VAT_SUM_B");
        	AM_UNCLMD_TXF_SUM_B=this.dsBase.getColumn(0, "AM_UNCLMD_TXF_SUM_B");
        	AM_UNCLMD_TOT_SUM_B=this.dsBase.getColumn(0, "AM_UNCLMD_TOT_SUM_B");

        	//잔여선수금 전
        	AM_UNDMD_SUP_SUM_B=this.dsBase.getColumn(0, "AM_UNDMD_SUP_SUM_B");
        	AM_UNDMD_VAT_SUM_B=this.dsBase.getColumn(0, "AM_UNDMD_VAT_SUM_B");
        	AM_UNDMD_TXF_SUM_B=this.dsBase.getColumn(0, "AM_UNDMD_TXF_SUM_B");
        	AM_UNDMD_TOT_SUM_B=this.dsBase.getColumn(0, "AM_UNDMD_TOT_SUM_B");

        	//기성
        	AM_CONST_SUP=this.dsBase.getColumn(0, "AM_CONST_SUP");
        	AM_CONST_VAT=this.dsBase.getColumn(0, "AM_CONST_VAT");
        	AM_CONST_TXF=this.dsBase.getColumn(0, "AM_CONST_TXF");
        	AM_CONST_TOT_SUM=AM_CONST_SUP + AM_CONST_VAT + AM_CONST_TXF;
        	this.divData.form.ctxtAM_CONST_TOT_SUM.set_value(AM_CONST_TOT_SUM);

        	//선수금정산
        	AM_REPAY_SUP=this.dsBase.getColumn(0, "AM_REPAY_SUP");
        	AM_REPAY_VAT=this.dsBase.getColumn(0, "AM_REPAY_VAT");
        	AM_REPAY_TXF=this.dsBase.getColumn(0, "AM_REPAY_TXF");
        	AM_REPAY_TOT_SUM=AM_REPAY_SUP + AM_REPAY_VAT + AM_REPAY_TXF;
        	this.divData.form.ctxtAM_REPAY_TOT_SUM.set_value(AM_REPAY_TOT_SUM);

        	//금회합계
        	this.divData.form.ctxtAM_CONST_REPAY_SUP_TOT_SUM.set_value(AM_CONST_SUP - AM_REPAY_SUP);
        	this.divData.form.ctxtAM_CONST_REPAY_VAT_TOT_SUM.set_value(AM_CONST_VAT - AM_REPAY_VAT);
        	this.divData.form.ctxtAM_CONST_REPAY_TXF_TOT_SUM.set_value(AM_CONST_TXF - AM_REPAY_TXF);
        	this.divData.form.ctxtAM_CONST_REPAY_TOT_TOT_SUM.set_value(AM_CONST_TOT_SUM - AM_REPAY_TOT_SUM);

        	//미청구 후
        	this.divData.form.ctxtAM_UNCLMD_SUP_TOT_SUM.set_value(AM_UNCLMD_SUP_SUM_B - (AM_CONST_SUP - AM_REPAY_SUP));
        	this.divData.form.ctxtAM_UNCLMD_VAT_TOT_SUM.set_value(AM_UNCLMD_VAT_SUM_B - (AM_CONST_VAT - AM_REPAY_VAT));
        	this.divData.form.ctxtAM_UNCLMD_TXF_TOT_SUM.set_value(AM_UNCLMD_TXF_SUM_B - (AM_CONST_TXF - AM_REPAY_TXF));
        	this.divData.form.ctxtAM_UNCLMD_TOT_TOT_SUM.set_value(AM_UNCLMD_TOT_SUM_B - (AM_CONST_TOT_SUM - AM_REPAY_TOT_SUM));

        	//잔여선수금 후
        	this.divData.form.ctxtAM_UNDMD_SUP_SUM.set_value(AM_UNDMD_SUP_SUM_B - AM_REPAY_SUP);
        	this.divData.form.ctxtAM_UNDMD_VAT_SUM.set_value(AM_UNDMD_VAT_SUM_B - AM_REPAY_VAT);
        	this.divData.form.ctxtAM_UNDMD_TXF_SUM.set_value(AM_UNDMD_TXF_SUM_B - AM_REPAY_TXF);
        	this.divData.form.ctxtAM_UNDMD_TOT_SUM.set_value(AM_UNDMD_TOT_SUM_B - AM_REPAY_TOT_SUM);

        }

        this.dsBase_onvaluechanged = function(obj,e)
        {
        	//미청구 전
        	var AM_UNCLMD_SUP_SUM_B=0,AM_UNCLMD_VAT_SUM_B=0,AM_UNCLMD_TXF_SUM_B=0,AM_UNCLMD_TOT_SUM_B=0;
        	//잔여선수금 전
        	var AM_UNDMD_SUP_SUM_B=0,AM_UNDMD_VAT_SUM_B=0,AM_UNDMD_TXF_SUM_B=0,AM_UNDMD_TOT_SUM_B=0;
        	//기성
        	var AM_CONST_SUP=0,AM_CONST_VAT=0,AM_CONST_TXF=0,AM_CONST_TOT_SUM=0;
        	//선수금정산
        	var AM_REPAY_SUP=0,AM_REPAY_VAT=0,AM_REPAY_TXF=0,AM_REPAY_TOT_SUM=0;

        	var TY_DMD;
        	var TY_TAX;
        	var YN_TAX_NA

        	if(e.oldvalue != e.newvalue) {
        		//미청구 전
        		AM_UNCLMD_SUP_SUM_B=obj.getColumn(0, "AM_UNCLMD_SUP_SUM_B");
        		AM_UNCLMD_VAT_SUM_B=obj.getColumn(0, "AM_UNCLMD_VAT_SUM_B");
        		AM_UNCLMD_TXF_SUM_B=obj.getColumn(0, "AM_UNCLMD_TXF_SUM_B");
        		AM_UNCLMD_TOT_SUM_B=obj.getColumn(0, "AM_UNCLMD_TOT_SUM_B");

        		//잔여선수금 전
        		AM_UNDMD_SUP_SUM_B=obj.getColumn(0, "AM_UNDMD_SUP_SUM_B");
        		AM_UNDMD_VAT_SUM_B=obj.getColumn(0, "AM_UNDMD_VAT_SUM_B");
        		AM_UNDMD_TXF_SUM_B=obj.getColumn(0, "AM_UNDMD_TXF_SUM_B");
        		AM_UNDMD_TOT_SUM_B=obj.getColumn(0, "AM_UNDMD_TOT_SUM_B");
        		RT_OUR = obj.getColumn(0, "RT_OUR");
        		AM_ADV = obj.getColumn(0, "AM_ADV");
        		RT_ADV = obj.getColumn(0, "RT_ADV");

        		TY_DMD = this.dsBase.getColumn(0, "TY_DMD");	//선수A/기성B
        		TY_TAX = this.dsBase.getColumn(0, "TY_TAX");	//과세A/면세B
        		YN_TAX_NA = this.dsBase.getColumn(0, "YN_TAX_NA");	//영세 y/n

        		obj.set_enableevent(false);

        		if(e.columnid=="TY_DMD" && e.oldvalue != "A" && e.newvalue=="A"){
        			this.dsBase.setColumn(0, "RT_ADV",this.dsSearch.getColumn(0,"RT_ADV"));
        		}
        		switch(e.columnid) {
        			case "RT_ADV":
        			case "AM_ADV":
        				AM_CONST_SUP =  (TY_TAX=="A" ? nexacro.round((AM_ADV * (RT_ADV / 100))  * (RT_OUR /100)) : 0);
        				obj.setColumn(0, "AM_CONST_SUP",AM_CONST_SUP);
        				AM_CONST_VAT = (TY_TAX == "B" || YN_TAX_NA=="Y" ? 0 : nexacro.round(AM_CONST_SUP * 0.1));
        				obj.setColumn(0, "AM_CONST_VAT",AM_CONST_VAT);
        				AM_CONST_TXF = (TY_TAX=="B" ? nexacro.round((AM_ADV * (RT_ADV / 100))  * (RT_OUR /100)) : 0);
        				obj.setColumn(0, "AM_CONST_TXF",AM_CONST_TXF);
        				AM_CONST_TOT_SUM=AM_CONST_SUP + AM_CONST_VAT + AM_CONST_TXF;
        				this.divData.form.ctxtAM_CONST_TOT_SUM.set_value(AM_CONST_TOT_SUM);

        				//선수금정산
        				AM_REPAY_SUP=this.dsBase.getColumn(0, "AM_REPAY_SUP");
        				AM_REPAY_VAT=this.dsBase.getColumn(0, "AM_REPAY_VAT");
        				AM_REPAY_TXF=this.dsBase.getColumn(0, "AM_REPAY_TXF");
        				AM_REPAY_TOT_SUM=AM_REPAY_SUP + AM_REPAY_VAT + AM_REPAY_TXF;

        				//금회합계
        				this.divData.form.ctxtAM_CONST_REPAY_SUP_TOT_SUM.set_value(AM_CONST_SUP - AM_REPAY_SUP);
        				this.divData.form.ctxtAM_CONST_REPAY_VAT_TOT_SUM.set_value(AM_CONST_VAT - AM_REPAY_VAT);
        				this.divData.form.ctxtAM_CONST_REPAY_TXF_TOT_SUM.set_value(AM_CONST_TXF - AM_REPAY_TXF);
        				this.divData.form.ctxtAM_CONST_REPAY_TOT_TOT_SUM.set_value(AM_CONST_TOT_SUM - AM_REPAY_TOT_SUM);

        				//미청구 후
        				this.divData.form.ctxtAM_UNCLMD_SUP_TOT_SUM.set_value(AM_UNCLMD_SUP_SUM_B - (AM_CONST_SUP - AM_REPAY_SUP));
        				this.divData.form.ctxtAM_UNCLMD_VAT_TOT_SUM.set_value(AM_UNCLMD_VAT_SUM_B - (AM_CONST_VAT - AM_REPAY_VAT));
        				this.divData.form.ctxtAM_UNCLMD_TXF_TOT_SUM.set_value(AM_UNCLMD_TXF_SUM_B - (AM_CONST_TXF - AM_REPAY_TXF));
        				this.divData.form.ctxtAM_UNCLMD_TOT_TOT_SUM.set_value(AM_UNCLMD_TOT_SUM_B - (AM_CONST_TOT_SUM - AM_REPAY_TOT_SUM));

        				//잔여선수금 후
        				this.divData.form.ctxtAM_UNDMD_SUP_SUM.set_value(AM_UNDMD_SUP_SUM_B - AM_REPAY_SUP);
        				this.divData.form.ctxtAM_UNDMD_VAT_SUM.set_value(AM_UNDMD_VAT_SUM_B - AM_REPAY_VAT);
        				this.divData.form.ctxtAM_UNDMD_TXF_SUM.set_value(AM_UNDMD_TXF_SUM_B - AM_REPAY_TXF);
        				this.divData.form.ctxtAM_UNDMD_TOT_SUM.set_value(AM_UNDMD_TOT_SUM_B - AM_REPAY_TOT_SUM);
        				break;
        			case "AM_CONST_SUP":
        				//기성
        				AM_CONST_SUP=obj.getColumn(0, "AM_CONST_SUP");
        				AM_CONST_VAT=obj.getColumn(0, "TY_TAX") == "B" || obj.getColumn(0, "YN_TAX_NA") == "Y" ? 0 : nexacro.round(AM_CONST_SUP * 0.1);
        				obj.setColumn(0, "AM_CONST_VAT",AM_CONST_VAT);
        				AM_CONST_TXF=obj.getColumn(0, "AM_CONST_TXF");
        				AM_CONST_TOT_SUM=AM_CONST_SUP + AM_CONST_VAT + AM_CONST_TXF;
        				this.divData.form.ctxtAM_CONST_TOT_SUM.set_value(AM_CONST_TOT_SUM);

        				//선수금정산
        				AM_REPAY_SUP=this.dsBase.getColumn(0, "AM_REPAY_SUP");
        				AM_REPAY_VAT=this.dsBase.getColumn(0, "AM_REPAY_VAT");
        				AM_REPAY_TXF=this.dsBase.getColumn(0, "AM_REPAY_TXF");
        				AM_REPAY_TOT_SUM=AM_REPAY_SUP + AM_REPAY_VAT + AM_REPAY_TXF;

        				//금회합계
        				this.divData.form.ctxtAM_CONST_REPAY_SUP_TOT_SUM.set_value(AM_CONST_SUP - AM_REPAY_SUP);
        				this.divData.form.ctxtAM_CONST_REPAY_VAT_TOT_SUM.set_value(AM_CONST_VAT - AM_REPAY_VAT);
        				this.divData.form.ctxtAM_CONST_REPAY_TXF_TOT_SUM.set_value(AM_CONST_TXF - AM_REPAY_TXF);
        				this.divData.form.ctxtAM_CONST_REPAY_TOT_TOT_SUM.set_value(AM_CONST_TOT_SUM - AM_REPAY_TOT_SUM);

        				//미청구 후
        				this.divData.form.ctxtAM_UNCLMD_SUP_TOT_SUM.set_value(AM_UNCLMD_SUP_SUM_B - (AM_CONST_SUP - AM_REPAY_SUP));
        				this.divData.form.ctxtAM_UNCLMD_VAT_TOT_SUM.set_value(AM_UNCLMD_VAT_SUM_B - (AM_CONST_VAT - AM_REPAY_VAT));
        				this.divData.form.ctxtAM_UNCLMD_TXF_TOT_SUM.set_value(AM_UNCLMD_TXF_SUM_B - (AM_CONST_TXF - AM_REPAY_TXF));
        				this.divData.form.ctxtAM_UNCLMD_TOT_TOT_SUM.set_value(AM_UNCLMD_TOT_SUM_B - (AM_CONST_TOT_SUM - AM_REPAY_TOT_SUM));

        				//잔여선수금 후
        				this.divData.form.ctxtAM_UNDMD_SUP_SUM.set_value(AM_UNDMD_SUP_SUM_B - AM_REPAY_SUP);
        				this.divData.form.ctxtAM_UNDMD_VAT_SUM.set_value(AM_UNDMD_VAT_SUM_B - AM_REPAY_VAT);
        				this.divData.form.ctxtAM_UNDMD_TXF_SUM.set_value(AM_UNDMD_TXF_SUM_B - AM_REPAY_TXF);
        				this.divData.form.ctxtAM_UNDMD_TOT_SUM.set_value(AM_UNDMD_TOT_SUM_B - AM_REPAY_TOT_SUM);
        				break;
        			case "AM_CONST_VAT":
        			case "AM_CONST_TXF":
        				//기성
        				AM_CONST_SUP=obj.getColumn(0, "AM_CONST_SUP");
        				AM_CONST_VAT=obj.getColumn(0, "AM_CONST_VAT");
        				AM_CONST_TXF=obj.getColumn(0, "AM_CONST_TXF");
        				AM_CONST_TOT_SUM=AM_CONST_SUP + AM_CONST_VAT + AM_CONST_TXF;
        				this.divData.form.ctxtAM_CONST_TOT_SUM.set_value(AM_CONST_TOT_SUM);

        				//선수금정산
        				AM_REPAY_SUP=this.dsBase.getColumn(0, "AM_REPAY_SUP");
        				AM_REPAY_VAT=this.dsBase.getColumn(0, "AM_REPAY_VAT");
        				AM_REPAY_TXF=this.dsBase.getColumn(0, "AM_REPAY_TXF");
        				AM_REPAY_TOT_SUM=AM_REPAY_SUP + AM_REPAY_VAT + AM_REPAY_TXF;

        				//금회합계
        				this.divData.form.ctxtAM_CONST_REPAY_SUP_TOT_SUM.set_value(AM_CONST_SUP - AM_REPAY_SUP);
        				this.divData.form.ctxtAM_CONST_REPAY_VAT_TOT_SUM.set_value(AM_CONST_VAT - AM_REPAY_VAT);
        				this.divData.form.ctxtAM_CONST_REPAY_TXF_TOT_SUM.set_value(AM_CONST_TXF - AM_REPAY_TXF);
        				this.divData.form.ctxtAM_CONST_REPAY_TOT_TOT_SUM.set_value(AM_CONST_TOT_SUM - AM_REPAY_TOT_SUM);

        				//미청구 후
        				this.divData.form.ctxtAM_UNCLMD_SUP_TOT_SUM.set_value(AM_UNCLMD_SUP_SUM_B - (AM_CONST_SUP - AM_REPAY_SUP));
        				this.divData.form.ctxtAM_UNCLMD_VAT_TOT_SUM.set_value(AM_UNCLMD_VAT_SUM_B - (AM_CONST_VAT - AM_REPAY_VAT));
        				this.divData.form.ctxtAM_UNCLMD_TXF_TOT_SUM.set_value(AM_UNCLMD_TXF_SUM_B - (AM_CONST_TXF - AM_REPAY_TXF));
        				this.divData.form.ctxtAM_UNCLMD_TOT_TOT_SUM.set_value(AM_UNCLMD_TOT_SUM_B - (AM_CONST_TOT_SUM - AM_REPAY_TOT_SUM));

        				//잔여선수금 후
        				this.divData.form.ctxtAM_UNDMD_SUP_SUM.set_value(AM_UNDMD_SUP_SUM_B - AM_REPAY_SUP);
        				this.divData.form.ctxtAM_UNDMD_VAT_SUM.set_value(AM_UNDMD_VAT_SUM_B - AM_REPAY_VAT);
        				this.divData.form.ctxtAM_UNDMD_TXF_SUM.set_value(AM_UNDMD_TXF_SUM_B - AM_REPAY_TXF);
        				this.divData.form.ctxtAM_UNDMD_TOT_SUM.set_value(AM_UNDMD_TOT_SUM_B - AM_REPAY_TOT_SUM);
        				break;
        			case "AM_REPAY_SUP":
        				//기성
        				AM_CONST_SUP=obj.getColumn(0, "AM_CONST_SUP");
        				AM_CONST_VAT=obj.getColumn(0, "AM_CONST_VAT");
        				AM_CONST_TXF=obj.getColumn(0, "AM_CONST_TXF");
        				AM_CONST_TOT_SUM=AM_CONST_SUP + AM_CONST_VAT + AM_CONST_TXF;

        				//선수금정산
        				AM_REPAY_SUP=this.dsBase.getColumn(0, "AM_REPAY_SUP");
        				AM_REPAY_VAT=obj.getColumn(0, "TY_TAX") == "B" || obj.getColumn(0, "YN_TAX_NA") == "Y" ? 0 : nexacro.round(AM_REPAY_SUP * 0.1);
        				obj.setColumn(0, "AM_REPAY_VAT",AM_REPAY_VAT);
        				AM_REPAY_TXF=this.dsBase.getColumn(0, "AM_REPAY_TXF");
        				AM_REPAY_TOT_SUM=AM_REPAY_SUP + AM_REPAY_VAT + AM_REPAY_TXF;
        				this.divData.form.ctxtAM_REPAY_TOT_SUM.set_value(AM_REPAY_TOT_SUM);

        				//금회합계
        				this.divData.form.ctxtAM_CONST_REPAY_SUP_TOT_SUM.set_value(AM_CONST_SUP - AM_REPAY_SUP);
        				this.divData.form.ctxtAM_CONST_REPAY_VAT_TOT_SUM.set_value(AM_CONST_VAT - AM_REPAY_VAT);
        				this.divData.form.ctxtAM_CONST_REPAY_TXF_TOT_SUM.set_value(AM_CONST_TXF - AM_REPAY_TXF);
        				this.divData.form.ctxtAM_CONST_REPAY_TOT_TOT_SUM.set_value(AM_CONST_TOT_SUM - AM_REPAY_TOT_SUM);

        				//미청구 후
        				this.divData.form.ctxtAM_UNCLMD_SUP_TOT_SUM.set_value(AM_UNCLMD_SUP_SUM_B - (AM_CONST_SUP - AM_REPAY_SUP));
        				this.divData.form.ctxtAM_UNCLMD_VAT_TOT_SUM.set_value(AM_UNCLMD_VAT_SUM_B - (AM_CONST_VAT - AM_REPAY_VAT));
        				this.divData.form.ctxtAM_UNCLMD_TXF_TOT_SUM.set_value(AM_UNCLMD_TXF_SUM_B - (AM_CONST_TXF - AM_REPAY_TXF));
        				this.divData.form.ctxtAM_UNCLMD_TOT_TOT_SUM.set_value(AM_UNCLMD_TOT_SUM_B - (AM_CONST_TOT_SUM - AM_REPAY_TOT_SUM));

        				//잔여선수금 후
        				this.divData.form.ctxtAM_UNDMD_SUP_SUM.set_value(AM_UNDMD_SUP_SUM_B - AM_REPAY_SUP);
        				this.divData.form.ctxtAM_UNDMD_VAT_SUM.set_value(AM_UNDMD_VAT_SUM_B - AM_REPAY_VAT);
        				this.divData.form.ctxtAM_UNDMD_TXF_SUM.set_value(AM_UNDMD_TXF_SUM_B - AM_REPAY_TXF);
        				this.divData.form.ctxtAM_UNDMD_TOT_SUM.set_value(AM_UNDMD_TOT_SUM_B - AM_REPAY_TOT_SUM);
        				break;
        			case "TY_DMD":
        			//case "TY_TAX":
        			case "YN_TAX_NA":
        				this.fnTyDmdChg();

        				AM_CONST_SUP =  (TY_TAX=="A" ? nexacro.round((AM_ADV * (RT_ADV / 100))  * (RT_OUR /100)) : 0);
        				obj.setColumn(0, "AM_CONST_SUP",AM_CONST_SUP);
        				AM_CONST_VAT = (TY_TAX == "B" || YN_TAX_NA=="Y" ? 0 : nexacro.round(AM_CONST_SUP * 0.1));
        				obj.setColumn(0, "AM_CONST_VAT",AM_CONST_VAT);
        				AM_CONST_TXF = (TY_TAX=="B" ? nexacro.round((AM_ADV * (RT_ADV / 100))  * (RT_OUR /100)) : 0);
        				obj.setColumn(0, "AM_CONST_TXF",AM_CONST_TXF);
        				AM_CONST_TOT_SUM=AM_CONST_SUP + AM_CONST_VAT + AM_CONST_TXF;
        				this.divData.form.ctxtAM_CONST_TOT_SUM.set_value(AM_CONST_TOT_SUM);

        				//선수금정산
        				AM_REPAY_SUP=this.dsBase.getColumn(0, "AM_REPAY_SUP");
        				AM_REPAY_VAT=this.dsBase.getColumn(0, "AM_REPAY_VAT");
        				AM_REPAY_TXF=this.dsBase.getColumn(0, "AM_REPAY_TXF");
        				AM_REPAY_TOT_SUM=AM_REPAY_SUP + AM_REPAY_VAT + AM_REPAY_TXF;

        				//금회합계
        				this.divData.form.ctxtAM_CONST_REPAY_SUP_TOT_SUM.set_value(AM_CONST_SUP - AM_REPAY_SUP);
        				this.divData.form.ctxtAM_CONST_REPAY_VAT_TOT_SUM.set_value(AM_CONST_VAT - AM_REPAY_VAT);
        				this.divData.form.ctxtAM_CONST_REPAY_TXF_TOT_SUM.set_value(AM_CONST_TXF - AM_REPAY_TXF);
        				this.divData.form.ctxtAM_CONST_REPAY_TOT_TOT_SUM.set_value(AM_CONST_TOT_SUM - AM_REPAY_TOT_SUM);

        				//미청구 후
        				this.divData.form.ctxtAM_UNCLMD_SUP_TOT_SUM.set_value(AM_UNCLMD_SUP_SUM_B - (AM_CONST_SUP - AM_REPAY_SUP));
        				this.divData.form.ctxtAM_UNCLMD_VAT_TOT_SUM.set_value(AM_UNCLMD_VAT_SUM_B - (AM_CONST_VAT - AM_REPAY_VAT));
        				this.divData.form.ctxtAM_UNCLMD_TXF_TOT_SUM.set_value(AM_UNCLMD_TXF_SUM_B - (AM_CONST_TXF - AM_REPAY_TXF));
        				this.divData.form.ctxtAM_UNCLMD_TOT_TOT_SUM.set_value(AM_UNCLMD_TOT_SUM_B - (AM_CONST_TOT_SUM - AM_REPAY_TOT_SUM));

        				//잔여선수금 후
        				this.divData.form.ctxtAM_UNDMD_SUP_SUM.set_value(AM_UNDMD_SUP_SUM_B - AM_REPAY_SUP);
        				this.divData.form.ctxtAM_UNDMD_VAT_SUM.set_value(AM_UNDMD_VAT_SUM_B - AM_REPAY_VAT);
        				this.divData.form.ctxtAM_UNDMD_TXF_SUM.set_value(AM_UNDMD_TXF_SUM_B - AM_REPAY_TXF);
        				this.divData.form.ctxtAM_UNDMD_TOT_SUM.set_value(AM_UNDMD_TOT_SUM_B - AM_REPAY_TOT_SUM);
        			case "AM_REPAY_VAT":
        			case "AM_REPAY_TXF":
        				//기성
        				AM_CONST_SUP=obj.getColumn(0, "AM_CONST_SUP");
        				AM_CONST_VAT=obj.getColumn(0, "AM_CONST_VAT");
        				AM_CONST_TXF=obj.getColumn(0, "AM_CONST_TXF");
        				AM_CONST_TOT_SUM=AM_CONST_SUP + AM_CONST_VAT + AM_CONST_TXF;
        				this.divData.form.ctxtAM_CONST_TOT_SUM.set_value(AM_CONST_TOT_SUM);

        				//선수금정산
        				AM_REPAY_SUP=this.dsBase.getColumn(0, "AM_REPAY_SUP");
        				AM_REPAY_VAT=this.dsBase.getColumn(0, "AM_REPAY_VAT");
        				AM_REPAY_TXF=this.dsBase.getColumn(0, "AM_REPAY_TXF");
        				AM_REPAY_TOT_SUM=AM_REPAY_SUP + AM_REPAY_VAT + AM_REPAY_TXF;
        				this.divData.form.ctxtAM_REPAY_TOT_SUM.set_value(AM_REPAY_TOT_SUM);

        				//금회합계
        				this.divData.form.ctxtAM_CONST_REPAY_SUP_TOT_SUM.set_value(AM_CONST_SUP - AM_REPAY_SUP);
        				this.divData.form.ctxtAM_CONST_REPAY_VAT_TOT_SUM.set_value(AM_CONST_VAT - AM_REPAY_VAT);
        				this.divData.form.ctxtAM_CONST_REPAY_TXF_TOT_SUM.set_value(AM_CONST_TXF - AM_REPAY_TXF);
        				this.divData.form.ctxtAM_CONST_REPAY_TOT_TOT_SUM.set_value(AM_CONST_TOT_SUM - AM_REPAY_TOT_SUM);

        				//미청구 후
        				this.divData.form.ctxtAM_UNCLMD_SUP_TOT_SUM.set_value(AM_UNCLMD_SUP_SUM_B - (AM_CONST_SUP - AM_REPAY_SUP));
        				this.divData.form.ctxtAM_UNCLMD_VAT_TOT_SUM.set_value(AM_UNCLMD_VAT_SUM_B - (AM_CONST_VAT - AM_REPAY_VAT));
        				this.divData.form.ctxtAM_UNCLMD_TXF_TOT_SUM.set_value(AM_UNCLMD_TXF_SUM_B - (AM_CONST_TXF - AM_REPAY_TXF));
        				this.divData.form.ctxtAM_UNCLMD_TOT_TOT_SUM.set_value(AM_UNCLMD_TOT_SUM_B - (AM_CONST_TOT_SUM - AM_REPAY_TOT_SUM));

        				//잔여선수금 후
        				this.divData.form.ctxtAM_UNDMD_SUP_SUM.set_value(AM_UNDMD_SUP_SUM_B - AM_REPAY_SUP);
        				this.divData.form.ctxtAM_UNDMD_VAT_SUM.set_value(AM_UNDMD_VAT_SUM_B - AM_REPAY_VAT);
        				this.divData.form.ctxtAM_UNDMD_TXF_SUM.set_value(AM_UNDMD_TXF_SUM_B - AM_REPAY_TXF);
        				this.divData.form.ctxtAM_UNDMD_TOT_SUM.set_value(AM_UNDMD_TOT_SUM_B - AM_REPAY_TOT_SUM);
        				break;
        		default:
        		}
        		obj.set_enableevent(true);

        		if(this.gfnGetFormStatus(this) == "I"){
        			this.gfnSetFormStatus(this, "I");
        		}else{
        			this.gfnSetFormStatus(this, "U");
        		}
        		this.fnSetButton();

        		// 데이터 변경시 전표발행, 전표조회, 전표취소 비활성화
        		this.btnSlipInsert.set_enable(false);
        		this.btnSlipSelect.set_enable(false);
        		this.btnSlipDelete.set_enable(false);
        	}
        };

        this.fnTyDmdChg = function(){
        	var TY_DMD = this.dsBase.getColumn(0, "TY_DMD");
        	var TY_TAX = this.dsBase.getColumn(0, "TY_TAX");
        	var YN_TAX_NA = this.dsBase.getColumn(0, "YN_TAX_NA");

        	if(TY_DMD == "A"){			//선수
        		this.divData.form.ctxtAM_ADV.set_readonly(false);
        		this.divData.form.ctxtRT_ADV.set_readonly(false);

        		//영세
        		if(YN_TAX_NA == "Y"){
        			this.divData.form.ctxtAM_CONST_SUP.set_enable(true);
        			this.divData.form.ctxtAM_CONST_VAT.set_enable(false);
        			this.divData.form.ctxtAM_CONST_TXF.set_enable(true);
        			this.dsBase.setColumn(0, "AM_CONST_VAT", 0);
        			//this.dsBase.setColumn(0, "AM_CONST_TXF", 0);

        			this.divData.form.ctxtAM_REPAY_SUP.set_enable(false);
        			this.divData.form.ctxtAM_REPAY_VAT.set_enable(false);
        			this.divData.form.ctxtAM_REPAY_TXF.set_enable(false);
        			this.dsBase.setColumn(0, "AM_REPAY_SUP", 0);
        			this.dsBase.setColumn(0, "AM_REPAY_VAT", 0);
        			this.dsBase.setColumn(0, "AM_REPAY_TXF", 0);
        		}else{
        			this.divData.form.ctxtAM_CONST_SUP.set_enable(true);
        			this.divData.form.ctxtAM_CONST_VAT.set_enable(true);
        			this.divData.form.ctxtAM_CONST_TXF.set_enable(true);
        			//this.dsBase.setColumn(0, "AM_CONST_TXF", 0);

        			this.divData.form.ctxtAM_REPAY_SUP.set_enable(false);
        			this.divData.form.ctxtAM_REPAY_VAT.set_enable(false);
        			this.divData.form.ctxtAM_REPAY_TXF.set_enable(false);
        			this.dsBase.setColumn(0, "AM_REPAY_SUP", 0);
        			this.dsBase.setColumn(0, "AM_REPAY_VAT", 0);
        			this.dsBase.setColumn(0, "AM_REPAY_TXF", 0);
        		}
        	}else if(TY_DMD == "B"){	//기성
        		this.dsBase.set_enableevent(false);
        		this.dsBase.setColumn(0, "AM_ADV",0);
        		this.dsBase.setColumn(0, "RT_ADV",0);
        		this.dsBase.set_enableevent(true);

        		this.divData.form.ctxtAM_ADV.set_readonly(true);
        		this.divData.form.ctxtRT_ADV.set_readonly(true);

        		//영세
        		if(YN_TAX_NA == "Y"){
        			this.divData.form.ctxtAM_CONST_SUP.set_enable(true);
        			this.divData.form.ctxtAM_CONST_VAT.set_enable(false);
        			this.divData.form.ctxtAM_CONST_TXF.set_enable(true);
        			this.dsBase.setColumn(0, "AM_CONST_VAT", 0);
        			//this.dsBase.setColumn(0, "AM_CONST_TXF", 0);

        			this.divData.form.ctxtAM_REPAY_SUP.set_enable(true);
        			this.divData.form.ctxtAM_REPAY_VAT.set_enable(false);
        			this.divData.form.ctxtAM_REPAY_TXF.set_enable(true);
        			this.dsBase.setColumn(0, "AM_REPAY_VAT", 0);
        			//this.dsBase.setColumn(0, "AM_REPAY_TXF", 0);
        		}else{
        			this.divData.form.ctxtAM_CONST_SUP.set_enable(true);
        			this.divData.form.ctxtAM_CONST_VAT.set_enable(true);
        			this.divData.form.ctxtAM_CONST_TXF.set_enable(true);
        			//this.dsBase.setColumn(0, "AM_CONST_TXF", 0);

        			this.divData.form.ctxtAM_REPAY_SUP.set_enable(true);
        			this.divData.form.ctxtAM_REPAY_VAT.set_enable(true);
        			this.divData.form.ctxtAM_REPAY_TXF.set_enable(true);
        			//this.dsBase.setColumn(0, "AM_REPAY_TXF", 0);
        		}
        // 	}else if(TY_DMD == "A" && TY_TAX == "B"){	//선수-면세
        // 		this.divData.form.chkYN_TAX_NA.set_visible(false);
        // 		//this.divData.form.chkYN_TAX_NA.set_value("N");
        // 		//this.divData.form.chkYN_TAX_NA.set_enable(false);
        //
        // 		this.divData.form.ctxtAM_CONST_SUP.set_enable(false);
        // 		this.divData.form.ctxtAM_CONST_VAT.set_enable(false);
        // 		this.divData.form.ctxtAM_CONST_TXF.set_enable(true);
        // 		this.dsBase.setColumn(0, "AM_CONST_SUP", 0);
        // 		this.dsBase.setColumn(0, "AM_CONST_VAT", 0);
        //
        // 		this.divData.form.ctxtAM_ADV.set_readonly(false);
        // 		this.divData.form.ctxtRT_ADV.set_readonly(false);
        //
        // 		this.divData.form.ctxtAM_REPAY_SUP.set_enable(false);
        // 		this.divData.form.ctxtAM_REPAY_VAT.set_enable(false);
        // 		this.divData.form.ctxtAM_REPAY_TXF.set_enable(false);
        // 		this.dsBase.setColumn(0, "AM_REPAY_SUP", 0);
        // 		this.dsBase.setColumn(0, "AM_REPAY_VAT", 0);
        // 		this.dsBase.setColumn(0, "AM_REPAY_TXF", 0);
        // 	}else if(TY_DMD == "B" && TY_TAX == "B"){	//기성-면세
        // 		this.divData.form.chkYN_TAX_NA.set_visible(false);
        // 		//this.divData.form.chkYN_TAX_NA.set_value("N");
        // 		//this.divData.form.chkYN_TAX_NA.set_enable(false);
        //
        // 		this.divData.form.ctxtAM_CONST_SUP.set_enable(false);
        // 		this.divData.form.ctxtAM_CONST_VAT.set_enable(false);
        // 		this.divData.form.ctxtAM_CONST_TXF.set_enable(true);
        // 		this.dsBase.setColumn(0, "AM_CONST_SUP", 0);
        // 		this.dsBase.setColumn(0, "AM_CONST_VAT", 0);
        //
        // 		this.dsBase.set_enableevent(false);
        // 		this.dsBase.setColumn(0, "AM_ADV",0);
        // 		this.dsBase.setColumn(0, "RT_ADV",0);
        // 		this.dsBase.set_enableevent(true);
        //
        // 		this.divData.form.ctxtAM_ADV.set_readonly(true);
        // 		this.divData.form.ctxtRT_ADV.set_readonly(true);
        //
        // 		this.divData.form.ctxtAM_REPAY_SUP.set_enable(false);
        // 		this.divData.form.ctxtAM_REPAY_VAT.set_enable(false);
        // 		this.divData.form.ctxtAM_REPAY_TXF.set_enable(true);
        // 		this.dsBase.setColumn(0, "AM_REPAY_SUP", 0);
        // 		this.dsBase.setColumn(0, "AM_REPAY_VAT", 0);
        // 		//this.dsBase.setColumn(0, "AM_REPAY_TXF", 0);
         	}
        }

        this.fnSaveValidate = function(){
        	if(this.gfnIsNull(this.dsBase.getColumn(0, "TY_DMD"))){
        		this.gfnAlert("청구구분을 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "DT_DMD"))){
        		this.gfnAlert("청구일자를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "CD_VENDOR"))){
        		this.gfnAlert("거래처를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "DS_RM"))){
        		this.gfnAlert("적요를 입력해주세요.");
        		return false;
        	}

        	return true;
        }

        this.fnHadoCreate = function(){
        	var param = {
        		CD_FIELD : this.dsBase.getColumn(0, "CD_FIELD")
        	  , DS_FIELD : this.dsBase.getColumn(0, "DS_FIELD")
        	  , NO_CONT  : this.dsBase.getColumn(0, "NO_CONT")
        	  , NO_DMD   : this.dsBase.getColumn(0, "NO_DMD")
        	  , NO_COLT  : 0
        	  , AM_UNCOLT_TOT  : this.divData.form.ctxtAM_CONST_REPAY_TOT_TOT_SUM.text
        	}

        	this.gfnFormOpen("DOF", "DOF_HADO_DIRECT", "fnDialogCallback", param, 1200, 800);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.ctclDT_ACQ.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.ctclDT_ACQ00.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.chkYN_TAX_NA.addEventHandler("onchanged",this.divSearch_cchkYN_HIDE2_onchanged,this);
            this.dsBase.addEventHandler("onvaluechanged",this.dsBase_onvaluechanged,this);
        };
        this.loadIncludeScript("DOF_CONST_DEMAND.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
