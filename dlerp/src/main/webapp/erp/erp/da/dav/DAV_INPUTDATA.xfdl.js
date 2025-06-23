(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAV_INPUTDATA");
            this.set_titletext("개인별 공제자료등록");
            this.set_visible("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1120);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SUBST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBST\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HANDICAP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CHILDREN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_INSURANCE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MEDICAL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CREDIT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_FOREIGNER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FAMILY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FAMILY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RESIDENT_FAMILY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RESIDENT_FAMILY_OLD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_HANDICAP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HANDICAP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HOUSEHOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BORN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnClose", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAREND_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CLOSE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAVPR_BASESUBST_SELECT</Col></Row><Row><Col id=\"TARGET\">closeCheck</Col><Col id=\"SP\">DAVPR_CLOSE_CHECK2</Col></Row><Row><Col id=\"TARGET\">selectEtc</Col><Col id=\"SP\">DAVPR_ETCSUBST_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DAVPR_BASESUBST_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAVPR_BASESUBST_UPDATE</Col></Row><Row><Col id=\"TARGET\">updateEtc</Col><Col id=\"SP\">DAVPR_ETCSUBST_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DAVPR_BASESUBST_DELETE</Col></Row><Row><Col id=\"TARGET\">deleteEtc</Col><Col id=\"SP\">DAVPR_ETCSUBST_DELETE</Col></Row><Row><Col id=\"TARGET\">calTax</Col><Col id=\"SP\">DAVPR_CALCTAX_TEMP</Col></Row><Row><Col id=\"TARGET\">houseRpt</Col><Col id=\"SP\">DAVPR_YEARENDSUBSTHOUSERPT_SELECT</Col></Row><Row><Col id=\"TARGET\">houseMonth</Col><Col id=\"SP\">DAVPR_HOUSEMONTH_SELECT</Col></Row><Row><Col id=\"TARGET\">houseMoney</Col><Col id=\"SP\">DAVPR_HOUSEMONEY_SELECT</Col></Row><Row><Col id=\"TARGET\">houseRent</Col><Col id=\"SP\">DAVPR_HOUSERENT_SELECT</Col></Row><Row><Col id=\"TARGET\">selectReceipt</Col><Col id=\"SP\">DAVPR_YEARENDRECEIPT2016_SELECT</Col></Row><Row><Col id=\"TARGET\">selectReceipt_sub</Col><Col id=\"SP\">DAVPR_YEARENDSUBSTSUB1_SELECT</Col></Row><Row><Col id=\"TARGET\">yearEndReport</Col><Col id=\"SP\">DAVPR_YEARENDSUBST_SELECT_2021</Col></Row><Row><Col id=\"TARGET\">yearEndReportSub1</Col><Col id=\"SP\">DAVPR_YEARENDSUBSTSUB1_2021_SELECT</Col></Row><Row><Col id=\"TARGET\">yearEndReportSub2</Col><Col id=\"SP\">DAVPR_YEARENDSUBSTSUB2_2021_SELECT</Col></Row><Row><Col id=\"TARGET\">pensionReport</Col><Col id=\"SP\">DAVPR_YEARENDSUBSTPENSIONRPT_SELECT</Col></Row><Row><Col id=\"TARGET\">houseRpt</Col><Col id=\"SP\">DAVPR_YEARENDSUBSTHOUSERPT_SELECT</Col></Row><Row><Col id=\"TARGET\">houseMonth</Col><Col id=\"SP\">DAVPR_HOUSEMONTH_SELECT</Col></Row><Row><Col id=\"TARGET\">houseMoney</Col><Col id=\"SP\">DAVPR_HOUSEMONEY_SELECT</Col></Row><Row><Col id=\"TARGET\">houseRent</Col><Col id=\"SP\">DAVPR_HOUSERENT_SELECT</Col></Row><Row><Col id=\"TARGET\">Medical</Col><Col id=\"SP\">DAVPR_MEDICALSUBST_PRINT</Col></Row><Row><Col id=\"TARGET\">Give</Col><Col id=\"SP\">DAVPR_GIVESUBST_PRINT</Col></Row><Row><Col id=\"TARGET\">Give_sub</Col><Col id=\"SP\">DAVPR_GIVESUBST_RPT_SELECT</Col></Row><Row><Col id=\"TARGET\">Give_sub2</Col><Col id=\"SP\">DAVPR_GIVESUBST_RPT2_SELECT</Col></Row><Row><Col id=\"TARGET\">regComplete</Col><Col id=\"SP\">DAVPR_CLOSEINPUT_UPDATE</Col></Row><Row><Col id=\"TARGET\">Card1</Col><Col id=\"SP\">DAVPR_CARDSUBSTRPT1_SELECT</Col></Row><Row><Col id=\"TARGET\">dsAuthForm</Col><Col id=\"SP\">DZZPR_DOTNET_AUTHORITYFORM_SELECT_NEW</Col></Row><Row><Col id=\"TARGET\">info</Col><Col id=\"SP\">DZUPR_FILEMANAGER_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListEtc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfoParam", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYearEndTagCol", this);
            obj._setContents("<ColumnInfo><Column id=\"FORM\" type=\"STRING\" size=\"256\"/><Column id=\"RANGETAG\" type=\"STRING\" size=\"256\"/><Column id=\"ELEMENT\" type=\"STRING\" size=\"256\"/><Column id=\"ELEMATTRIBUTE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/><Column id=\"COL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FORM\">A102Y</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">A102Y</Col><Col id=\"DATA\">name</Col><Col id=\"COL\">DS_HNAME</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">A102Y</Col><Col id=\"DATA\">resid</Col><Col id=\"COL\">ID_RESIDENT_FAMILY</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">A102Y</Col><Col id=\"DATA\">insu1_resid</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col><Col id=\"COL\">ID_RESIDENT_INSU</Col></Row><Row><Col id=\"FORM\">A102Y</Col><Col id=\"DATA\">insu1_nm</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col><Col id=\"COL\">DS_HNAME_INSU</Col></Row><Row><Col id=\"FORM\">A102Y</Col><Col id=\"DATA\">insu2_resid_1</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col><Col id=\"COL\">ID_RESIDENT_INSU1</Col></Row><Row><Col id=\"FORM\">A102Y</Col><Col id=\"DATA\">insu2_nm_1</Col><Col id=\"COL\">DS_HNAME_INSU1</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">A102Y</Col><Col id=\"DATA\">insu2_resid_2</Col><Col id=\"COL\">ID_RESIDENT_INSU2</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">A102Y</Col><Col id=\"DATA\">insu2_nm_2</Col><Col id=\"COL\">DS_HNAME_INSU2</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">A102Y</Col><Col id=\"DATA\">insu2_resid_3</Col><Col id=\"COL\">ID_RESIDENT_INSU3</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">A102Y</Col><Col id=\"DATA\">insu2_nm_3</Col><Col id=\"COL\">DS_HNAME_INSU3</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">A102Y</Col><Col id=\"DATA\">sum</Col><Col id=\"COL\">AM_SUBST1</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">B101Y</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">B101Y</Col><Col id=\"DATA\">name</Col><Col id=\"COL\">DS_HNAME</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">B101Y</Col><Col id=\"DATA\">resid</Col><Col id=\"COL\">ID_RESIDENT_FAMILY</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">B101Y</Col><Col id=\"DATA\">busnid</Col><Col id=\"COL\">CD_MEDICAL</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">B101Y</Col><Col id=\"DATA\">trade_nm</Col><Col id=\"COL\">DS_MEDICAL</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">B101Y</Col><Col id=\"DATA\">sum</Col><Col id=\"COL\">AM_CARD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">C102Y</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">C102Y</Col><Col id=\"DATA\">name</Col><Col id=\"COL\">DS_HNAME</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">C102Y</Col><Col id=\"DATA\">resid</Col><Col id=\"COL\">ID_RESIDENT_FAMILY</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">C102Y</Col><Col id=\"DATA\">edu_tp</Col><Col id=\"COL\">CD_SUBST</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">C102Y</Col><Col id=\"DATA\">edu_cl</Col><Col id=\"COL\">EDU_CL</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">C102Y</Col><Col id=\"DATA\">sum</Col><Col id=\"COL\">AM_SUBST</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">C202Y</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">C202Y</Col><Col id=\"DATA\">name</Col><Col id=\"COL\">DS_HNAME</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">C202Y</Col><Col id=\"DATA\">resid</Col><Col id=\"COL\">ID_RESIDENT_FAMILY</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">C202Y</Col><Col id=\"DATA\">sum</Col><Col id=\"COL\">AM_SUBST</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">C301Y</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">C301Y</Col><Col id=\"DATA\">name</Col><Col id=\"COL\">DS_HNAME</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">C301Y</Col><Col id=\"DATA\">resid</Col><Col id=\"COL\">ID_RESIDENT_FAMILY</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">C301Y</Col><Col id=\"DATA\">sum</Col><Col id=\"COL\">AM_SUBST</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">C401Y</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">C401Y</Col><Col id=\"DATA\">name</Col><Col id=\"COL\">DS_HNAME</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">C401Y</Col><Col id=\"DATA\">resid</Col><Col id=\"COL\">ID_RESIDENT_FAMILY</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">C401Y</Col><Col id=\"DATA\">sum</Col><Col id=\"COL\">AM_SUBST</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">D101Y</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col><Col id=\"COL\">DAT_CD</Col></Row><Row><Col id=\"FORM\">D101Y</Col><Col id=\"DATA\">acc_no</Col><Col id=\"COL\">CD_ACCOUNT</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">D101Y</Col><Col id=\"DATA\">com_cd</Col><Col id=\"COL\">CD_BANK</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">D101Y</Col><Col id=\"DATA\">sum</Col><Col id=\"COL\">AM_SUBST</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">E102Y</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">E102Y</Col><Col id=\"DATA\">resid</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col><Col id=\"COL\">ID_RESIDENT_FAMILY</Col></Row><Row><Col id=\"FORM\">E102Y</Col><Col id=\"DATA\">acc_no</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col><Col id=\"COL\">CD_ACCOUNT</Col></Row><Row><Col id=\"FORM\">E102Y</Col><Col id=\"DATA\">com_cd</Col><Col id=\"COL\">CD_BANK</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">E102Y</Col><Col id=\"DATA\">ddct_bs_ass_amt</Col><Col id=\"COL\">AM_SUBST</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">F102Y</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">F102Y</Col><Col id=\"DATA\">resid</Col><Col id=\"COL\">ID_RESIDENT_FAMILY</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">F102Y</Col><Col id=\"DATA\">acc_no</Col><Col id=\"COL\">CD_ACCOUNT</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">F102Y</Col><Col id=\"DATA\">com_cd</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col><Col id=\"COL\">CD_BANK</Col></Row><Row><Col id=\"FORM\">F102Y</Col><Col id=\"DATA\">ddct_bs_ass_amt</Col><Col id=\"COL\">AM_SUBST</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\">name</Col><Col id=\"COL\">DS_HNAME</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\">resid</Col><Col id=\"COL\">ID_RESIDENT_FAMILY</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST1</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\"/><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/><Col id=\"COL\">AM_SUBST2</Col></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST3</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\">pre_tot_amt</Col><Col id=\"COL\">AM_SUBST4</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\">pre_market_tot_amt</Col><Col id=\"COL\">AM_SUBST5</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\">pre_tmoney_tot_amt</Col><Col id=\"COL\">AM_SUBST6</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST7_1</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST7_2</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\"/><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/><Col id=\"COL\">AM_SUBST7_3</Col></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST8_1</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST8_2</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST8_3</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\">ftyr_tot_amt</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/><Col id=\"COL\">AM_FTYR_TOT</Col></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\">ftyr_market_tot_amt</Col><Col id=\"COL\">AM_FTYR_MARKET_TOT</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\">ftyr_tmoney_tot_amt</Col><Col id=\"COL\">AM_FTYR_TMONEY_TOT</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\">sum_first_year_tot_amt</Col><Col id=\"COL\">AM_FIRST_YEAR_TOT_AMT</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\">sum_second_year_tot_amt</Col><Col id=\"COL\">AM_SECOND_YEAR_TOT_AMT</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\"/><Col id=\"COL\">MM_INQR_STRT_MM</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\"/><Col id=\"COL\">MM_INQR_END_MM</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST9</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\">pre_book_tot_amt</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/><Col id=\"COL\">AM_SUBST10</Col></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\"/><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/><Col id=\"COL\">AM_SUBST7_4</Col></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST8_4</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G107Y</Col><Col id=\"DATA\">ftyr_book_tot_amt</Col><Col id=\"COL\">AM_FTYR_BOOK_TOT</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\">name</Col><Col id=\"COL\">DS_HNAME</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\">resid</Col><Col id=\"COL\">ID_RESIDENT_FAMILY</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST1</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\"/><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/><Col id=\"COL\">AM_SUBST2</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\"/><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/><Col id=\"COL\">AM_SUBST3</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\">pre_tot_amt</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/><Col id=\"COL\">AM_SUBST4</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\">pre_market_tot_amt</Col><Col id=\"COL\">AM_SUBST5</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\">pre_tmoney_tot_amt</Col><Col id=\"COL\">AM_SUBST6</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST7_1</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST7_2</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST7_3</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST8_1</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST8_2</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST8_3</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\">ftyr_tot_amt</Col><Col id=\"COL\">AM_FTYR_TOT</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\">ftyr_market_tot_amt</Col><Col id=\"COL\">AM_FTYR_MARKET_TOT</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\">ftyr_tmoney_tot_amt</Col><Col id=\"COL\">AM_FTYR_TMONEY_TOT</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\">sum_first_year_tot_amt</Col><Col id=\"COL\">AM_FIRST_YEAR_TOT_AMT</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\">sum_second_year_tot_amt</Col><Col id=\"COL\">AM_SECOND_YEAR_TOT_AMT</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\"/><Col id=\"COL\">MM_INQR_STRT_MM</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\"/><Col id=\"COL\">MM_INQR_END_MM</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST9</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\">pre_book_tot_amt</Col><Col id=\"COL\">AM_SUBST10</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST7_4</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST8_4</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G207M</Col><Col id=\"DATA\">ftyr_book_tot_amt</Col><Col id=\"COL\">AM_FTYR_BOOK_TOT</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\">name</Col><Col id=\"COL\">DS_HNAME</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\">resid</Col><Col id=\"COL\">ID_RESIDENT_FAMILY</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST1</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST2</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST3</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\">pre_tot_amt</Col><Col id=\"COL\">AM_SUBST4</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\">pre_market_tot_amt</Col><Col id=\"COL\">AM_SUBST5</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\">pre_tmoney_tot_amt</Col><Col id=\"COL\">AM_SUBST6</Col><Col id=\"RANGETAG\">cal</Col><Col id=\"ELEMENT\"/></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST7_1</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST7_2</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST7_3</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST8_1</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST8_2</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST8_3</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\">ftyr_tot_amt</Col><Col id=\"COL\">AM_FTYR_TOT</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\">ftyr_market_tot_amt</Col><Col id=\"COL\">AM_FTYR_MARKET_TOT</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\">ftyr_tmoney_tot_amt</Col><Col id=\"COL\">AM_FTYR_TMONEY_TOT</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\">sum_first_year_tot_amt</Col><Col id=\"COL\">AM_FIRST_YEAR_TOT_AMT</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\">sum_second_year_tot_amt</Col><Col id=\"COL\">AM_SECOND_YEAR_TOT_AMT</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\"/><Col id=\"COL\">MM_INQR_STRT_MM</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\"/><Col id=\"COL\">MM_INQR_END_MM</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST9</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\">pre_book_tot_amt</Col><Col id=\"COL\">AM_SUBST10</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST7_4</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\"/><Col id=\"COL\">AM_SUBST8_4</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">G307Y</Col><Col id=\"DATA\">ftyr_book_tot_amt</Col><Col id=\"COL\">AM_FTYR_BOOK_TOT</Col><Col id=\"RANGETAG\">cal</Col></Row><Row><Col id=\"FORM\">J101Y</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">J101Y</Col><Col id=\"DATA\">sum</Col><Col id=\"COL\">AM_SUBST</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">J203Y</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">J203Y</Col><Col id=\"DATA\">start_dt</Col><Col id=\"COL\">DT_LOAN</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">J203Y</Col><Col id=\"DATA\">repay_years</Col><Col id=\"COL\">YY_PERIOD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">J203Y</Col><Col id=\"DATA\">fixed_rate_debt</Col><Col id=\"COL\">AM_SUBST_FIX</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">J203Y</Col><Col id=\"DATA\">not_defer_debt</Col><Col id=\"COL\">AM_SUBST_BI</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">J203Y</Col><Col id=\"DATA\">ddct</Col><Col id=\"COL\">AM_SUBST</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">elemAttr</Col><Col id=\"ELEMATTRIBUTE\">sum</Col></Row><Row><Col id=\"FORM\">J301Y</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">J301Y</Col><Col id=\"DATA\">name</Col><Col id=\"COL\">DS_HNAME</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">J301Y</Col><Col id=\"DATA\">acc_no</Col><Col id=\"COL\">CD_ACCOUNT</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">J301Y</Col><Col id=\"DATA\">saving_gubn</Col><Col id=\"COL\">CD_SUBST</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">J301Y</Col><Col id=\"DATA\">com_cd</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col><Col id=\"COL\">CD_BANK</Col></Row><Row><Col id=\"FORM\">J301Y</Col><Col id=\"DATA\">sum</Col><Col id=\"COL\">AM_SUBST</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">K101M</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">K101M</Col><Col id=\"DATA\">sum</Col><Col id=\"COL\">AM_SUBST</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">L102Y</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">L102Y</Col><Col id=\"DATA\">resid</Col><Col id=\"COL\">ID_RESIDENT_FAMILY</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">L102Y</Col><Col id=\"DATA\">busnid</Col><Col id=\"COL\">CD_GIVE</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">L102Y</Col><Col id=\"DATA\">trade_nm</Col><Col id=\"COL\">DS_GIVE</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">L102Y</Col><Col id=\"DATA\">donation_cd</Col><Col id=\"COL\">TY_GIVE_PDF</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">L102Y</Col><Col id=\"DATA\">sum</Col><Col id=\"COL\">AM_GIVE</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">N101Y</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">N101Y</Col><Col id=\"DATA\">secu_no</Col><Col id=\"COL\">CD_ACCOUNT</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">N101Y</Col><Col id=\"DATA\">com_cd</Col><Col id=\"COL\">CD_BANK</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">N101Y</Col><Col id=\"DATA\">sum</Col><Col id=\"COL\">AM_SUBST</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row><Row><Col id=\"FORM\">P102M</Col><Col id=\"DATA\">dat_cd</Col><Col id=\"COL\">DAT_CD</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">P102M</Col><Col id=\"DATA\">name</Col><Col id=\"COL\">DS_HNAME</Col><Col id=\"RANGETAG\">man</Col><Col id=\"ELEMENT\">attribute</Col></Row><Row><Col id=\"FORM\">P102M</Col><Col id=\"DATA\">sum</Col><Col id=\"COL\">AM_SUBST</Col><Col id=\"RANGETAG\">data</Col><Col id=\"ELEMENT\">element</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYearEndFormList", this);
            obj._setContents("<ColumnInfo><Column id=\"FORM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FORM\">A102Y</Col></Row><Row><Col id=\"FORM\">B101Y</Col></Row><Row><Col id=\"FORM\">C102Y</Col></Row><Row><Col id=\"FORM\">C202Y</Col></Row><Row><Col id=\"FORM\">C301Y</Col></Row><Row><Col id=\"FORM\">C401Y</Col></Row><Row><Col id=\"FORM\">D101Y</Col></Row><Row><Col id=\"FORM\">E102Y</Col></Row><Row><Col id=\"FORM\">F102Y</Col></Row><Row><Col id=\"FORM\">G107Y</Col></Row><Row><Col id=\"FORM\">G307Y</Col></Row><Row><Col id=\"FORM\">G407Y</Col></Row><Row><Col id=\"FORM\">J101Y</Col></Row><Row><Col id=\"FORM\">J203Y</Col></Row><Row><Col id=\"FORM\">J301Y</Col></Row><Row><Col id=\"FORM\">J401Y</Col></Row><Row><Col id=\"FORM\">L102Y</Col></Row><Row><Col id=\"FORM\">M101Y</Col></Row><Row><Col id=\"FORM\">N101Y</Col></Row><Row><Col id=\"FORM\">O101M</Col></Row><Row><Col id=\"FORM\">P102M</Col></Row><Row><Col id=\"FORM\">Q101Y</Col></Row><Row><Col id=\"FORM\">Q201Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRpt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListEtcMapping", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SUBST\" type=\"STRING\" size=\"256\"/><Column id=\"COMP1\" type=\"STRING\" size=\"256\"/><Column id=\"COMP2\" type=\"STRING\" size=\"256\"/><Column id=\"COMP3\" type=\"STRING\" size=\"256\"/><Column id=\"COMP4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SUBST\">B07</Col><Col id=\"COMP1\">chkCD_WOMAN</Col></Row><Row><Col id=\"CD_SUBST\">B13</Col><Col id=\"COMP1\">chkONEPARENTS</Col></Row><Row><Col id=\"CD_SUBST\">C40</Col><Col id=\"COMP1\">edtAM_ETCSUBST01</Col></Row><Row><Col id=\"CD_SUBST\">C41</Col><Col id=\"COMP1\">edtAM_ETCSUBST02</Col></Row><Row><Col id=\"CD_SUBST\">C49</Col><Col id=\"COMP1\">edtAM_ETCSUBST02_1</Col></Row><Row><Col id=\"CD_SUBST\">C42</Col><Col id=\"COMP1\">edtAM_ETCSUBST03</Col></Row><Row><Col id=\"CD_SUBST\">C43</Col><Col id=\"COMP1\">edtAM_ETCSUBST04</Col></Row><Row><Col id=\"CD_SUBST\">C47</Col><Col id=\"COMP1\">edtAM_ETCSUBST19</Col></Row><Row><Col id=\"CD_SUBST\">C55</Col><Col id=\"COMP1\">edtAM_ETCSUBST55</Col></Row><Row><Col id=\"CD_SUBST\">C56</Col><Col id=\"COMP1\">edtAM_ETCSUBST56</Col></Row><Row><Col id=\"CD_SUBST\">C65</Col><Col id=\"COMP1\">edtAM_ETCSUBST65</Col></Row><Row><Col id=\"CD_SUBST\">C66</Col><Col id=\"COMP1\">edtAM_ETCSUBST66</Col></Row><Row><Col id=\"CD_SUBST\">C67</Col><Col id=\"COMP1\">edtAM_ETCSUBST67</Col></Row><Row><Col id=\"CD_SUBST\">C68</Col><Col id=\"COMP1\">edtAM_ETCSUBST68</Col></Row><Row><Col id=\"CD_SUBST\">C48</Col><Col id=\"COMP1\">edtAM_ETCSUBST48</Col></Row><Row><Col id=\"CD_SUBST\">C401</Col><Col id=\"COMP1\">edtAM_ETCSUBST401</Col><Col id=\"COMP2\">ccfCFBANK_401</Col><Col id=\"COMP3\">ccfCFBANK_401</Col><Col id=\"COMP4\">edt_ACCOUNT401</Col></Row><Row><Col id=\"CD_SUBST\">C402</Col><Col id=\"COMP1\">edtAM_ETCSUBST402</Col><Col id=\"COMP2\">ccfCFBANK_402</Col><Col id=\"COMP3\">ccfCFBANK_402</Col><Col id=\"COMP4\">edt_ACCOUNT402</Col></Row><Row><Col id=\"CD_SUBST\">C403</Col><Col id=\"COMP1\">edtAM_ETCSUBST403</Col><Col id=\"COMP2\">ccfCFBANK_403</Col><Col id=\"COMP3\">ccfCFBANK_403</Col><Col id=\"COMP4\">edt_ACCOUNT403</Col></Row><Row><Col id=\"CD_SUBST\">C404</Col><Col id=\"COMP1\">edtAM_ETCSUBST404</Col><Col id=\"COMP2\">ccfCFBANK_404</Col><Col id=\"COMP3\">ccfCFBANK_404</Col><Col id=\"COMP4\">edt_ACCOUNT404</Col></Row><Row><Col id=\"CD_SUBST\">C60</Col><Col id=\"COMP1\">edtAM_ETCSUBST05</Col><Col id=\"COMP2\">ccfCFBANK_60</Col><Col id=\"COMP3\">ccfCFBANK_60</Col><Col id=\"COMP4\">edt_ACCOUNT60</Col></Row><Row><Col id=\"CD_SUBST\">C61</Col><Col id=\"COMP1\">edtAM_ETCSUBST06</Col><Col id=\"COMP2\">ccfCFBANK_61</Col><Col id=\"COMP3\">ccfCFBANK_61</Col><Col id=\"COMP4\">edt_ACCOUNT61</Col></Row><Row><Col id=\"CD_SUBST\">C62</Col><Col id=\"COMP1\">edtAM_ETCSUBST07</Col><Col id=\"COMP2\">ccfCFBANK_62</Col><Col id=\"COMP3\">ccfCFBANK_62</Col><Col id=\"COMP4\">edt_ACCOUNT62</Col></Row><Row><Col id=\"CD_SUBST\">C63</Col><Col id=\"COMP1\">edtAM_ETCSUBST08</Col></Row><Row><Col id=\"CD_SUBST\">C77</Col><Col id=\"COMP1\">edtAM_ETCSUBST77</Col></Row><Row><Col id=\"CD_SUBST\">C99</Col><Col id=\"COMP1\">edtAM_ETCSUBST199</Col></Row><Row><Col id=\"CD_SUBST\">C71</Col><Col id=\"COMP1\">edtAM_ETCSUBST09</Col></Row><Row><Col id=\"CD_SUBST\">C72</Col><Col id=\"COMP1\">edtAM_ETCSUBST09_00</Col></Row><Row><Col id=\"CD_SUBST\">C90</Col><Col id=\"COMP1\">cboETCSUBST01</Col></Row><Row><Col id=\"CD_SUBST\">C91</Col><Col id=\"COMP1\">cboETCSUBST02</Col></Row><Row><Col id=\"CD_SUBST\">C92</Col><Col id=\"COMP1\">cboETCSUBST03</Col></Row><Row><Col id=\"CD_SUBST\">D10</Col><Col id=\"COMP1\">edtAM_ETCSUBST10</Col></Row><Row><Col id=\"CD_SUBST\">D11</Col><Col id=\"COMP1\">edtAM_ETCSUBST11</Col></Row><Row><Col id=\"CD_SUBST\">D98</Col><Col id=\"COMP1\">calAM_ETCSUBST98</Col></Row><Row><Col id=\"CD_SUBST\">D99</Col><Col id=\"COMP1\">calAM_ETCSUBST99</Col></Row><Row><Col id=\"CD_SUBST\">D20</Col><Col id=\"COMP1\">edtAM_ETCSUBST12</Col></Row><Row><Col id=\"CD_SUBST\">C44</Col><Col id=\"COMP1\">edtAM_ETCSUBST16</Col><Col id=\"COMP2\">ccfCFBANK_44</Col><Col id=\"COMP3\">ccfCFBANK_44</Col><Col id=\"COMP4\">edt_ACCOUNT44</Col></Row><Row><Col id=\"CD_SUBST\">C45</Col><Col id=\"COMP1\">edtAM_ETCSUBST17</Col><Col id=\"COMP2\">ccfCFBANK_45</Col><Col id=\"COMP3\">ccfCFBANK_45</Col><Col id=\"COMP4\">edt_ACCOUNT45</Col></Row><Row><Col id=\"CD_SUBST\">C46</Col><Col id=\"COMP1\">edtAM_ETCSUBST18</Col><Col id=\"COMP2\">ccfCFBANK_46</Col><Col id=\"COMP3\">ccfCFBANK_46</Col><Col id=\"COMP4\">edt_ACCOUNT46</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileUpDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"110.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_MID","staCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_MID","staYN_MID:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
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
            obj.set_taborder("3");
            obj.set_text("적용년도");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_RESIDENT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_EMPTYPE","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("구분");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_RESIDENT","staID_RESIDENT:0.0","10.0","240","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFYEAREND");
            obj.getSetter("CDTextWidth").set("130");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","staYN_MID:0.0","cboYN_MID:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divSearch_form_rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoTY_GUBUN_innerdataset", obj);
            divSearch_form_rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">임직원</Col><Col id=\"codecolumn\">E</Col></Row><Row><Col id=\"datacolumn\">일용직</Col><Col id=\"codecolumn\">T</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoTY_GUBUN_innerdataset);
            obj.set_text("임직원");
            obj.set_value("E");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnGetRetire",null,"staCD_CORP:10.0","129","24.0","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("등록완료 및 세액계산");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_SABUN","ccfID_RESIDENT:0.0","10.0","79","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclWORK_BASE","staWORK_BASE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_enableevent("true");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("기본공제");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("div00","2","2",null,null,"2","2",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGrid","5","41",null,null,"5","7",null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.getSetter("BeforeUserDataSetParam").set("fnGrid_BeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnGrid_AfterCDTextChanged");
            obj._setContents("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staYN_HOUSEHOLD","10","11","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("세대주여부");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Radio("rdoYN_HOUSEHOLD","staYN_HOUSEHOLD:10","11","120","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divData_form_tabData_tab1_form_div00_form_rdoYN_HOUSEHOLD_innerdataset = new nexacro.NormalDataset("divData_form_tabData_tab1_form_div00_form_rdoYN_HOUSEHOLD_innerdataset", obj);
            divData_form_tabData_tab1_form_div00_form_rdoYN_HOUSEHOLD_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">세대주</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">세대원</Col><Col id=\"codecolumn\">2</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_tabData_tab1_form_div00_form_rdoYN_HOUSEHOLD_innerdataset);
            obj.set_text("세대주");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staYN_DEDUCTION_CHG","220","11","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("인적공제항목 변동여부");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DEDUCTION_CHG","staYN_DEDUCTION_CHG:10","11","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divData_form_tabData_tab1_form_div00_form_rdoYN_DEDUCTION_CHG_innerdataset = new nexacro.NormalDataset("divData_form_tabData_tab1_form_div00_form_rdoYN_DEDUCTION_CHG_innerdataset", obj);
            divData_form_tabData_tab1_form_div00_form_rdoYN_DEDUCTION_CHG_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전년과 동일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">변동</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_tabData_tab1_form_div00_form_rdoYN_DEDUCTION_CHG_innerdataset);
            obj.set_text("전년과동일");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("추가/특별/세액공제");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("div00","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("125");
            obj.set_text("div00");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTITLE","19","6","550","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("인적공제");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_WOMAN","19","41","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("부녀자공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta02","98","41","25","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_ONEPARENTS","122","41","100","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("한부모가족공제");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta07","221","41","24","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staTITLE00","19","79","550","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("5");
            obj.set_text("주택자금공제");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSPRINC","19","114","400","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("6");
            obj.set_text("주택임차차입금원리금상환액(기관)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00","418","114","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_WOMAN","staCD_WOMAN:5","47","27","18",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkONEPARENTS","staCD_ONEPARENTS:5","47","27","18",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSPRINC2","19","143","285","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("10");
            obj.set_text("주택임차차입금원리금상환액(거주자)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta01","303","143","266","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSEREFUND","19","172","400","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("장기주택저당자입금이자상환액 10~15년(03.12.31일 이전 차입분)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta03","418","172","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSEREFUND2","19","201","400","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("14");
            obj.set_text("장기주택저당자입금이자상환액 15~29년(12. 1. 1일 이전 차입분)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta04","418","201","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSEREFUND3","19","230","400","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("16");
            obj.set_text("장기주택저당자입금이자상환액 30년이상(12. 1. 1일 이전 차입분)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta05","418","230","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSEREFUND12","19","259","400","40",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("18");
            obj.set_text("장기주택저당자입금이자상환액 15년이상(12. 1. 1일 이후 신규차입분/\r\n차입금 상환기간 연장분) 고정금리(or)비거치식상환대출");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta06","418","259","151","40",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSEREFUND12_1","19","298","400","40",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("20");
            obj.set_text("장기주택저당자입금이자상환액 15년이상(12. 1. 1일 이후 신규차입분/\r\n차입금 상환기간 연장분) 기타대출");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta08","418","298","151","40",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSEREFUND2015_1","19","337","400","40",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("22");
            obj.set_text("장기주택저당자입금이자상환액 15년이상(15. 1. 1일 이후 신규차입분/\r\n차입금 상환기간 연장분) 고정금리(and)비거치식상환대출");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta09","418","337","151","40",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSEREFUND2015_2","19","376","400","40",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("24");
            obj.set_text("장기주택저당자입금이자상환액 15년이상(15. 1. 1일 이후 신규차입분/\r\n차입금 상환기간 연장분) 고정금리(or)비거치식상환대출");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta10","418","376","151","40",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSEREFUND2015_3","19","415","400","40",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("26");
            obj.set_text("장기주택저당자입금이자상환액 15년이상(15. 1. 1일 이후 신규차입분/\r\n차입금 상환기간 연장분) 기타대출");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta11","418","415","151","40",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSEREFUND2015_4","19","454","400","40",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("28");
            obj.set_text("장기주택저당자입금이자상환액 10년이상 ~ 15년미만(15. 1. 1일 이후\r\n신규차입분/차입금 상환기간 연장분)  고정금리(or)비거치식상환대출");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta12","418","454","151","40",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_LEASE","19","493","285","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("30");
            obj.set_text("월세액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta13","303","493","266","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staYEAREND_PRINT","19","522","400","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("32");
            obj.set_text("월세액.거주자간 주택임차차입금 원리금상환액 소득공제 명세서->>");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta14","418","522","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Button("btnHOUSE_LR","staAM_HOUSPRINC2:5","148","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("34");
            obj.set_text("거주자간계약사항");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSESUM1_1","19","551","400","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("35");
            obj.set_text("청약저축");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta15","418","551","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSESUM1_2","19","580","400","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("37");
            obj.set_text("주택청약종합저축");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta16","418","580","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSESUM1_4","19","609","400","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("39");
            obj.set_text("근로자주택마련저축");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta17","418","609","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfCFBANK_401","584","556","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("41");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfCFBANK_402","584","585","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("42");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfCFBANK_404","584","614","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("43");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staTITLE01","599","6","350","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("44");
            obj.set_text("저축공제");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_PENSIONSUBST1","599","41","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("45");
            obj.set_text("개인연금저축(2000.12.31이전)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta18","798","41","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_PENSIONSUBST2","599","70","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("47");
            obj.set_text("연금저축(2001.1.1이후)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta19","798","70","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_PENSIONSUBST3","599","99","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("49");
            obj.set_text("퇴직연금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta20","798","99","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_WOORISAJU","599","128","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("51");
            obj.set_text("우리사주조합출연금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta21","798","128","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_INVEST2","599","157","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("53");
            obj.set_text("벤처투자보합출자등_조합");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta22","798","157","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_SMALLBUSINESSOUT","599","215","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("55");
            obj.set_text("소기업.소상공인 공제부금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta23","798","215","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfCFBANK_60","954","46","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("57");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfCFBANK_61","954","75","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("58");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfCFBANK_62","954","104","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("59");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Button("btnMONTH_CONT_REMARK","309","498","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("60");
            obj.set_text("월세계약사항");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Button("btnYEAREND_PRINT","425","527","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("61");
            obj.set_text("명세서 출력");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staTITLE02","19","659","550","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("62");
            obj.set_text("세액 감면 및 공제");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSPRINC00","19","694","400","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("63");
            obj.set_text("감면세액(소득세법)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta24","418","694","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSPRINC01","19","723","400","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("65");
            obj.set_text("중소기업 취업 청년 감면세액(조세특례제한법 제30조)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta25","418","723","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta26","418","752","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSPRINC02","19","752","400","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("68");
            obj.set_text("중소기업 취업 청년 감면세액(취업일)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta27","418","781","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSPRINC03","19","781","400","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("70");
            obj.set_text("중소기업 취업 청년 감면세액(감면기간 종료일)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta28","418","810","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_HOUSPRINC04","19","810","400","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("73");
            obj.set_text("주택차입금이자(95.11.1~97.12.31 기간중에 미분양주택관련)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtAM_ETCSUBST12","424","815","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("71");
            obj.set_readonly("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Calendar("calAM_ETCSUBST98","424","757","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("74");
            obj.set_readonly("false");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Calendar("calAM_ETCSUBST99","424","786","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("75");
            obj.set_readonly("false");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST02","424","119","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("76");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            obj.set_enable("true");
            obj.set_enableevent("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST02_1","424","148","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("77");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST03","424","177","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("78");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST04","424","206","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("79");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST19","424","235","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("80");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST55","424","269","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("81");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST56","424","308","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("82");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST65","424","347","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("83");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST66","424","386","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("84");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST67","424","425","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("85");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST68","424","464","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("86");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST48","424","498","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("87");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST401","424","556","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("88");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST402","424","585","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("89");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST404","424","614","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("90");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST403","425","644","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("91");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST10","424","699","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("92");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST11","424","728","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("93");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST05","804","46","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("94");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST06","804","75","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("95");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST07","804","104","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("96");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST08","804","133","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("97");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST09","804","162","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("98");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST77","804","220","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("99");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Combo("cboETCSUBST01","575","699","85","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("100");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var divData_form_tabData_tab2_form_div00_form_cboETCSUBST01_innerdataset = new nexacro.NormalDataset("divData_form_tabData_tab2_form_div00_form_cboETCSUBST01_innerdataset", obj);
            divData_form_tabData_tab2_form_div00_form_cboETCSUBST01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_tabData_tab2_form_div00_form_cboETCSUBST01_innerdataset);
            obj.set_text("cbo00");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Combo("cboETCSUBST02","575","728","85","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("101");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var divData_form_tabData_tab2_form_div00_form_cboETCSUBST02_innerdataset = new nexacro.NormalDataset("divData_form_tabData_tab2_form_div00_form_cboETCSUBST02_innerdataset", obj);
            divData_form_tabData_tab2_form_div00_form_cboETCSUBST02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_tabData_tab2_form_div00_form_cboETCSUBST02_innerdataset);
            obj.set_text("cbo00");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Combo("cboETCSUBST03","575","757","85","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("102");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var divData_form_tabData_tab2_form_div00_form_cboETCSUBST03_innerdataset = new nexacro.NormalDataset("divData_form_tabData_tab2_form_div00_form_cboETCSUBST03_innerdataset", obj);
            divData_form_tabData_tab2_form_div00_form_cboETCSUBST03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_tabData_tab2_form_div00_form_cboETCSUBST03_innerdataset);
            obj.set_text("cbo00");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfCFBANK_44","954","296","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("103");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfCFBANK_45","954","325","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("104");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfCFBANK_46","954","354","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("105");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt_ACCOUNT401","844","556","126","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("106");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt_ACCOUNT402","844","586","126","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("107");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt_ACCOUNT403","844","645","126","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("108");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfCFBANK_403","584","644","250","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("109");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt_ACCOUNT404","844","615","126","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("110");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt_ACCOUNT60","1211","46","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("111");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt_ACCOUNT61","1211","75","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("112");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt_ACCOUNT62","1211","105","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("113");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt_ACCOUNT44","1211","225","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("114");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST16","804","298","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("115");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST17","804","326","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("116");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST18","804","355","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("117");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt_ACCOUNT45","1211","255","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("118");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt_ACCOUNT46","1211","285","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("119");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST199","804","385","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("120");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST01","975","556","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("121");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_INVEST2_00","599","186","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("122");
            obj.set_text("벤처투자보합출자등_벤처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta22_00","798","186","151","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_ETCSUBST09_00","804","191","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("123");
            obj.set_readonly("false");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAV_INPUTDATA.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        // flag 값
        this.EtcFlag = "";
        this.YearEndClose = "";	// 마감여부
        this.loadFlag = "";

        //상황별 코드파인더 동작을 위한 스위치
        this.CD_CORP = "";
        this.YY_BASE = "";
        this.YN_MID = "";
        this.ID_SABUN = "";

        this.fv_DS_CORP = "";

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

        	this.fv_DS_CORP = this.AuthClient.DS_CORP;

        	trace("this.fv_DS_CORP", this.fv_DS_CORP);

        	if(this.fnIsForbidStatus()){
        		this.gfnAlert("연말정산 점검 중 입니다. 공지 내용 참고하시기 바랍니다.");
        	}
        };

        //true 이면 막힘
        this.fnIsForbidStatus = function(){
        	var bRtn = false;

        // 	if(this.fv_DS_CORP == "대우조선해양건설"){
        // 		if(this.FormInfo.GR_SEARCH == "9"){
        // 			bRtn = true;
        // 		}
        // 	}
        	return bRtn;
        }

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        if(this.fnIsForbidStatus()){
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	return;
        }



        	// this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Print.set_enable(true);
        	this.FormBtns.Excel.set_enable(false);
        	if(this.divData.form.tabData.tabindex == 0){
        		//this.FormBtns.Add.set_enable(true);
        		//this.FormBtns.Excel.set_enable(true);
        	}else{
        		//this.FormBtns.Add.set_enable(false);
        	}
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnEtcUpload = this.gfnFormButtonAdd("EtcUpload", "fnExtBtnEvent", "기타증빙 첨부");
        	this.btnPdfUpload = this.gfnFormButtonAdd("PdfUpload", "fnExtBtnEvent", "연말정산PDF 업로드");		//tbbPdfUplad
        	this.btnPreCompany = this.gfnFormButtonAdd("PreCompany", "fnExtBtnEvent", "전근무지정보");
        	this.btnCardSubst = this.gfnFormButtonAdd("CardSubst", "fnExtBtnEvent", "신용카드");					//tbbCard
        	this.btnInsuSubst = this.gfnFormButtonAdd("InsuSubst", "fnExtBtnEvent", "보험료");						//tbbInsu
        	this.btnEduSubst = this.gfnFormButtonAdd("EduSubst", "fnExtBtnEvent", "교육비");						//tbbEdu
        	this.btnMedicalSubst = this.gfnFormButtonAdd("MedicalSubst", "fnExtBtnEvent", "의료비");				//tbbMedi
        	this.btnGiveSubst = this.gfnFormButtonAdd("GiveSubst", "fnExtBtnEvent", "기부금");						//tbbGive
        	this.btnHouseSubst = this.gfnFormButtonAdd("HouseSubst", "fnExtBtnEvent", "주택마련저축");			//tbbHouse
        	this.btnPensionSubst = this.gfnFormButtonAdd("PensionSubst", "fnExtBtnEvent", "연금저축");				//tbbPen
        	this.btnStockSubst = this.gfnFormButtonAdd("StockSubst", "fnExtBtnEvent", "장기집합투자증권저축");	//tbbStock
        	this.btnYesOne = this.gfnFormButtonAdd("YesOne", "fnExtBtnEvent", "연말정산간소화서비스");			//tbbYesone
        	//this.btnYearEndSubstPesionRpt = this.gfnFormButtonAdd("YearEndSubstPesionRpt", "fnExtBtnEvent", "연금저축소득공제명세서");
        	//this.btnYearEndReceiptRpt = this.gfnFormButtonAdd("YearEndReceiptRpt", "fnExtBtnEvent", "원천징수영수증");
        };



        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//작업구분
        	this.cboYN_MID = this.divSearch.form.cboYN_MID;
        	//적용년도
        	this.staWORK_BASE = this.divSearch.form.staWORK_BASE;
        	this.ctclWORK_BASE = this.divSearch.form.ctclWORK_BASE;
        	//법인코드
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	//주민번호
        	this.ccfID_RESIDENT = this.divSearch.form.ccfID_RESIDENT;
        	this.edtID_SABUN = this.divSearch.form.edtID_SABUN;
        	//구분
        	this.rdoTY_GUBUN = this.divSearch.form.rdoTY_GUBUN;

        	this.btnGetRetire = this.divSearch.form.btnGetRetire; //등록완료버튼

        	//그리드
        	this.dxGrid = this.divData.form.tabData.tab1.form.div00.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드


        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAV_BASESUBST");

        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
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


        	//입력
        	/*
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("ID_RESIDENT", "string");
        	this.dsInsert.addColumn("ID_SABUN", "string");
        	this.dsInsert.addColumn("YY_BASE", "string");
        	this.dsInsert.addColumn("MM_BASE", "string");
        	this.dsInsert.addColumn("NO_APPLY", "bigdecimal");
        	this.dsInsert.addColumn("YN_MID", "string");
        	this.dsInsert.addColumn("CD_SUBST", "string");
        	this.dsInsert.addColumn("YN_BASE", "string");
        	this.dsInsert.addColumn("YN_HANDICAP", "string");
        	this.dsInsert.addColumn("YN_CHILDREN", "string");
        	this.dsInsert.addColumn("YN_INSURANCE", "string");
        	this.dsInsert.addColumn("YN_MEDICAL", "string");
        	this.dsInsert.addColumn("YN_EDUCATION", "string");
        	this.dsInsert.addColumn("YN_FOREIGNER", "string");
        	this.dsInsert.addColumn("YN_CREDIT", "string");
        	this.dsInsert.addColumn("YN_BIRTH", "string");
        	this.dsInsert.addColumn("CD_FAMILY", "string");
        	this.dsInsert.addColumn("DS_HNAME", "string");
        	this.dsInsert.addColumn("ID_RESIDENT_FAMILY", "string");
        	this.dsInsert.addColumn("DS_ADDRESS", "string");
        	this.dsInsert.addColumn("ID_UPDATE", "string");
        	this.dsInsert.addColumn("YN_HOUSEHOLDER", "string");
        	this.dsInsert.addColumn("YN_CHANGE", "string");
        	this.dsInsert.addColumn("CD_HANDICAP", "string");
        	this.dsInsert.addColumn("TY_BORN", "string");
        	*/

        	//수정
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("ID_RESIDENT", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("YY_BASE", "string");
        	this.dsUpdate.addColumn("MM_BASE", "string");
        	this.dsUpdate.addColumn("NO_APPLY", "int");
        	this.dsUpdate.addColumn("YN_MID", "string");
        	this.dsUpdate.addColumn("CD_SUBST", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "int");
        	this.dsUpdate.addColumn("YN_BASE", "string");
        	this.dsUpdate.addColumn("YN_HANDICAP", "string");
        	this.dsUpdate.addColumn("YN_CHILDREN", "string");
        	this.dsUpdate.addColumn("YN_INSURANCE", "string");
        	this.dsUpdate.addColumn("YN_MEDICAL", "string");
        	this.dsUpdate.addColumn("YN_EDUCATION", "string");
        	this.dsUpdate.addColumn("YN_FOREIGNER", "string");
        	this.dsUpdate.addColumn("YN_CREDIT", "string");
        	this.dsUpdate.addColumn("YN_BIRTH", "string");
        	this.dsUpdate.addColumn("CD_FAMILY", "string");
        	this.dsUpdate.addColumn("DS_HNAME", "string");
        	this.dsUpdate.addColumn("ID_RESIDENT_FAMILY", "string");
        	this.dsUpdate.addColumn("ID_RESIDENT_FAMILY_OLD", "string");
        	this.dsUpdate.addColumn("DS_ADDRESS", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("YN_HOUSEHOLDER", "string");
        	this.dsUpdate.addColumn("YN_CHANGE", "string");
        	this.dsUpdate.addColumn("CD_HANDICAP", "string");
        	this.dsUpdate.addColumn("TY_BORN", "string");

        	// ETC 수정
        	this.dsUpdateEtc = new Dataset();
        	this.dsUpdateEtc.addColumn("ID_RESIDENT", "string");
        	this.dsUpdateEtc.addColumn("ID_SABUN", "string");
        	this.dsUpdateEtc.addColumn("YY_BASE", "string");
        	this.dsUpdateEtc.addColumn("MM_BASE", "string");
        	this.dsUpdateEtc.addColumn("NO_APPLY", "int");
        	this.dsUpdateEtc.addColumn("YN_MID", "string");
        	this.dsUpdateEtc.addColumn("CD_SUBST", "string");
        	this.dsUpdateEtc.addColumn("NO_SEQ", "int");
        	this.dsUpdateEtc.addColumn("CD_FAMILY", "string");
        	this.dsUpdateEtc.addColumn("DS_HNAME", "string");
        	this.dsUpdateEtc.addColumn("AM_SUBST", "int");
        	this.dsUpdateEtc.addColumn("ID_UPDATE", "string");
        	this.dsUpdateEtc.addColumn("CD_CORP", "string");
        	this.dsUpdateEtc.addColumn("CD_BANK", "string");
        	this.dsUpdateEtc.addColumn("CD_ACCOUNT", "string");

        	//삭제
        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("ID_RESIDENT", "string");
        	this.dsDelete.addColumn("YY_BASE", "string");
        	this.dsDelete.addColumn("MM_BASE", "string");
        	this.dsDelete.addColumn("NO_APPLY", "int");
        	this.dsDelete.addColumn("YN_MID", "string");
        	this.dsDelete.addColumn("CD_SUBST", "string");
        	this.dsDelete.addColumn("NO_SEQ", "int");


        	//ETC 삭제
        	/*
        	this.dsDeleteEtc = new Dataset();
        	this.dsDeleteEtc.addColumn("CD_CORP", "string");
        	this.dsDeleteEtc.addColumn("ID_RESIDENT", "string");
        	this.dsDeleteEtc.addColumn("YY_BASE", "string");
        	this.dsDeleteEtc.addColumn("MM_BASE", "string");
        	this.dsDeleteEtc.addColumn("NO_APPLY", "bigdecimal");
        	this.dsDeleteEtc.addColumn("YN_MID", "string");
        	this.dsDeleteEtc.addColumn("ID_UPDATE", "string");
        	*/

        	//등록완료1 closeInput
        	this.dsRegComplete = new Dataset();
        	this.dsRegComplete.addColumn("ID_RESIDENT", "string");
        	this.dsRegComplete.addColumn("ID_SABUN", "string");
        	this.dsRegComplete.addColumn("YY_BASE", "string");
        	this.dsRegComplete.addColumn("MM_BASE", "string");
        	this.dsRegComplete.addColumn("NO_APPLY", "int");
        	this.dsRegComplete.addColumn("YN_MID", "string");
        	this.dsRegComplete.addColumn("AM_RESULT", "int");
        	this.dsRegComplete.addColumn("ID_UPDATE", "string");
        	this.dsRegComplete.addColumn("CD_CORP", "string");
        	//등록완료2 closeInput
        	this.dsReg = new Dataset();
        	this.dsReg.addColumn("ID_RESIDENT", "string");
        	this.dsReg.addColumn("ID_SABUN", "string");
        	this.dsReg.addColumn("YY_BASE", "string");
        	this.dsReg.addColumn("MM_BASE", "string");
        	this.dsReg.addColumn("NO_APPLY", "bigdecimal");
        	this.dsReg.addColumn("YN_MID", "string");
        	this.dsReg.addColumn("ID_UPDATE", "string");
        	this.dsReg.addColumn("CD_CORP", "string");

        	//명세서출력
        	this.dsReport1 = new Dataset();
        	this.dsReport1.addColumn("YY_BASE", "string");
        	this.dsReport1.addColumn("NO_APPLY", "string");
        	this.dsReport1.addColumn("ID_RESIDENT", "string");
        	this.dsReport1.addColumn("TY_ORDERBY", "string");
        	this.dsReport1.addColumn("YN_MID", "string");
        	this.dsReport1.addColumn("CD_CORP", "string");
        	this.dsReport1.addColumn("MM_BASE", "string");
        	this.dsReport1.addColumn("DT_PRINT", "string");
        	this.dsReport1.addColumn("ID_SABUN", "string");

        	this.dsReport2 = new Dataset();
        	this.dsReport2.addColumn("CD_CORP", "string");
        	this.dsReport2.addColumn("ID_RESIDENT", "string");
        	this.dsReport2.addColumn("ID_SABUN", "string");
        	this.dsReport2.addColumn("YY_BASE", "string");
        	this.dsReport2.addColumn("MM_BASE", "string");
        	this.dsReport2.addColumn("NO_APPLY", "int");
        	this.dsReport2.addColumn("YN_MID", "string");

        	//소득·세액 공제신고서 main
        	this.dsYearEndReport = new Dataset();
        	this.dsYearEndReport.addColumn("YY_BASE", "string");
        	this.dsYearEndReport.addColumn("NO_APPLY", "int");
        	this.dsYearEndReport.addColumn("ID_RESIDENT", "string");
        	this.dsYearEndReport.addColumn("TY_ORDERBY", "int");
        	this.dsYearEndReport.addColumn("YN_MID", "string");
        	this.dsYearEndReport.addColumn("CD_CORP", "string");
        	//소득·세액 공제신고서 sub
        	this.dsYearEndReportSub = new Dataset();
        	this.dsYearEndReportSub.addColumn("YY_BASE", "string");
        	this.dsYearEndReportSub.addColumn("MM_BASE", "string");
        	this.dsYearEndReportSub.addColumn("NO_APPLY", "int");
        	this.dsYearEndReportSub.addColumn("ID_RESIDENT", "string");
        	this.dsYearEndReportSub.addColumn("YN_MID", "string");
        	this.dsYearEndReportSub.addColumn("CD_CORP", "string");
        	//연금ㆍ저축 등 소득ㆍ세액 공제명세서
        	this.dsPensionReport = new Dataset();
        	this.dsPensionReport.addColumn("YY_BASE", "string");
        	this.dsPensionReport.addColumn("NO_APPLY", "int");
        	this.dsPensionReport.addColumn("ID_RESIDENT", "string");
        	this.dsPensionReport.addColumn("TY_ORDERBY", "int");
        	this.dsPensionReport.addColumn("YN_MID", "string");
        	this.dsPensionReport.addColumn("CD_CORP", "string");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	var tabIdx = this.divData.form.tabData.tabindex;

        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";

        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "ID_SABUN", this.edtID_SABUN.value);
        	this.dsSelect.setColumn(0, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsSelect.setColumn(0, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsSelect.setColumn(0, "NO_APPLY", "1");
        	this.dsSelect.setColumn(0, "YN_MID", this.cboYN_MID.value);

        	if(tabIdx == 0){
        		this.gfnGridBeforeSelect(this.dxGrid);
        		inData      = "select=dsSelect closeCheck=dsSelect";
        		outData     = "dsList=select0 dsYnClose=closeCheck0";
        	}else{
        		inData      = "selectEtc=dsSelect closeCheck=dsSelect";
        		outData     = "dsListEtc=selectEtc0 dsYnClose=closeCheck0";
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
        	this.gfnGridAdd(this.dxGrid);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var tabIdx = this.divData.form.tabData.tabindex;

        	trace(tabIdx);
        	if( tabIdx == 0 ){
        		this.gfnGridDel(this.dxGrid);
        	} else {
        		this.EtcFlag = "D";
        		this.gfnSetFormStatus(this, "D");
        	}
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        if(this.fnIsForbidStatus()){
        	this.gfnAlert("연말정산 점검 중 입니다. 공지 내용 참고하시기 바랍니다.");
        	return;
        }

        	var tabIdx = this.divData.form.tabData.tabindex;
        	var inData="";

        	if( tabIdx == 0){
        		//  그리드 필수항목 체크
        		if (!this.gfnGridValidate(this.dxGrid)) return;
        		if (!this.gfValidate()) return;

        		this.dxGrid.updateToDataset();

        		//this.dsInsert.clearData();
        		this.dsUpdate.clearData();
        		this.dsDelete.clearData();

        		//출생입양여부
        		this.dsList.filter("YN_BIRTH == 'Y' && (TY_BORN == ' ' || TY_BORN == null)");
        		if(this.dsList.rowcount != 0){
        			this.gfnAlert("출생입양 여부가 Y 인경우 출생입양자녀구분 값을 입력하셔야 됩니다.");
        			this.dsList.filter("");
        			return false;
        		}
        		//장애인 여부
        		this.dsList.filter("YN_HANDICAP == 'Y' && (CD_HANDICAP == null || CD_HANDICAP == ' ')");
        		if(this.dsList.rowcount != 0){
        			this.gfnAlert("장애 여부가 Y 인경우 장애구분 값을 입력하셔야 됩니다.");
        			this.dsList.filter("");
        			return false;
        		}
        		this.dsList.filter("");

        		for (var i = 0; i < this.dsList.rowcount; i++) {

        			var flag = this.gfnGetFlag(this.dsList, i);


        			switch(flag) {
        				case "I":

        				case "U":
        					var nrow = this.dsUpdate.addRow();

        					this.dsUpdate.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        					this.dsUpdate.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value);
        					this.dsUpdate.setColumn(nrow, "ID_SABUN", this.edtID_SABUN.value);
        					this.dsUpdate.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        					this.dsUpdate.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        					this.dsUpdate.setColumn(nrow, "NO_APPLY", "1");
        					this.dsUpdate.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        					this.dsUpdate.setColumn(nrow, "CD_SUBST", this.dsList.getColumn(i, "CD_SUBST"));
        					this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        					this.dsUpdate.setColumn(nrow, "YN_BASE", this.dsList.getColumn(i, "YN_BASE"));
        					this.dsUpdate.setColumn(nrow, "YN_HANDICAP", this.dsList.getColumn(i, "YN_HANDICAP"));
        					this.dsUpdate.setColumn(nrow, "YN_CHILDREN", this.dsList.getColumn(i, "YN_CHILDREN"));
        					this.dsUpdate.setColumn(nrow, "YN_INSURANCE", this.dsList.getColumn(i, "YN_INSURANCE"));
        					this.dsUpdate.setColumn(nrow, "YN_MEDICAL", this.dsList.getColumn(i, "YN_MEDICAL"));
        					this.dsUpdate.setColumn(nrow, "YN_EDUCATION", this.dsList.getColumn(i, "YN_EDUCATION"));
        					this.dsUpdate.setColumn(nrow, "YN_FOREIGNER", this.dsList.getColumn(i, "YN_FOREIGNER"));
        					this.dsUpdate.setColumn(nrow, "YN_CREDIT", this.dsList.getColumn(i, "YN_CREDIT"));
        					this.dsUpdate.setColumn(nrow, "YN_BIRTH", this.dsList.getColumn(i, "YN_BIRTH"));
        					this.dsUpdate.setColumn(nrow, "CD_FAMILY", this.dsList.getColumn(i, "CD_FAMILY"));
        					this.dsUpdate.setColumn(nrow, "DS_HNAME", this.dsList.getColumn(i, "DS_HNAME"));
        					this.dsUpdate.setColumn(nrow, "ID_RESIDENT_FAMILY", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "ID_RESIDENT_FAMILY"),""), "-", ""));
        					this.dsUpdate.setColumn(nrow, "ID_RESIDENT_FAMILY_OLD", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "ID_RESIDENT_FAMILY_OLD"),""), "-", ""));
        					this.dsUpdate.setColumn(nrow, "DS_ADDRESS", this.dsList.getColumn(i, "DS_ADDRESS"));
        					this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        					this.dsUpdate.setColumn(nrow, "YN_HOUSEHOLDER", this.dsList.getColumn(i, "YN_HOUSEHOLDER"));
        					this.dsUpdate.setColumn(nrow, "YN_CHANGE", this.dsList.getColumn(i, "YN_CHANGE"));
        					this.dsUpdate.setColumn(nrow, "CD_HANDICAP", this.dsList.getColumn(i, "CD_HANDICAP"));

        					var tyBorn = "";
        					if(this.dsList.getColumn(i, "TY_BORN") == "첫째"){
        						tyBorn = "1";
        					}else if(this.dsList.getColumn(i, "TY_BORN") == "둘째"){
        						tyBorn = "2";
        					}else if(this.dsList.getColumn(i, "TY_BORN") == "셋째이상"){
        						tyBorn = "3";
        					}else{
        						tyBorn = "";
        					}

        					this.dsUpdate.setColumn(nrow, "TY_BORN", tyBorn);
        					break;
        				case "D":
        					var nrow = this.dsDelete.addRow();

        					this.dsDelete.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        					this.dsDelete.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value);
        					this.dsDelete.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        					this.dsDelete.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        					this.dsDelete.setColumn(nrow, "NO_APPLY", "1");
        					this.dsDelete.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        					this.dsDelete.setColumn(nrow, "CD_SUBST", this.dsList.getColumn(i, "CD_SUBST"));
        					this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        					break;
        			}
        		}

        		//inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        		//if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;
        		inData      = "update=dsUpdate delete=dsDelete";
        		if (this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	}//tab index != 0
        	else{
        		if (!this.gfValidate2()) return;

        		this.dsUpdateEtc.clearData();
        		//this.dsDelete.clearData();

        		if(this.dsListEtc.getColumn(i, "CD_SUBST") == "B07"){
        			if(this.divData.form.tabData.tab2.form.div00.form.chkCD_WOMAN.value == true){
        				this.dsListEtc.setColumn(i, "CD_FAMILY", "00");
        			}else{
        				this.dsListEtc.setColumn(i, "CD_FAMILY", "");
        				this.dsListEtc.setColumn(i, "DS_FAMILY", "");
        			}
        		}else if(this.dsListEtc.getColumn(i, "CD_SUBST") == "B13"){
        			if(this.divData.form.tabData.tab2.form.div00.form.chkONEPARENTS.value == true){
        				this.dsListEtc.setColumn(i, "CD_FAMILY", "00");
        			}else{
        				this.dsListEtc.setColumn(i, "CD_FAMILY", "");
        				this.dsListEtc.setColumn(i, "DS_FAMILY", "");
        			}
        		}

        		for( var i = 0 ; i < this.dsListEtc.rowcount; i++){
        			//var flag = this.gfnGetFlag(this.dsListEtc, i);
        			//switch(flag) {
        			switch(this.EtcFlag) {
        				case "I":
        				case "U":
        					var nrow = this.dsUpdateEtc.addRow();
        					this.dsUpdateEtc.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value);
        					this.dsUpdateEtc.setColumn(nrow, "ID_SABUN", this.edtID_SABUN.value);
        					this.dsUpdateEtc.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        					this.dsUpdateEtc.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        					this.dsUpdateEtc.setColumn(nrow, "NO_APPLY", "1");
        					this.dsUpdateEtc.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        					this.dsUpdateEtc.setColumn(nrow, "CD_SUBST", this.dsListEtc.getColumn(i, "CD_SUBST"));
        					this.dsUpdateEtc.setColumn(nrow, "NO_SEQ", this.dsListEtc.getColumn(i, "NO_SEQ"));
        					this.dsUpdateEtc.setColumn(nrow, "CD_FAMILY", this.dsListEtc.getColumn(i, "CD_FAMILY"));
        					this.dsUpdateEtc.setColumn(nrow, "DS_HNAME", this.dsListEtc.getColumn(i, "DS_HNAME"));
        					this.dsUpdateEtc.setColumn(nrow, "AM_SUBST", this.dsListEtc.getColumn(i, "AM_SUBST"));
        					this.dsUpdateEtc.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        					this.dsUpdateEtc.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        					this.dsUpdateEtc.setColumn(nrow, "CD_BANK", this.dsListEtc.getColumn(i, "CD_BANK"));
        					this.dsUpdateEtc.setColumn(nrow, "CD_ACCOUNT", this.dsListEtc.getColumn(i, "CD_ACCOUNT"));

        					break;
        				case "D":
        					/*
        					var nrow = this.dsDeleteEtc.addRow();
        					this.dsDeleteEtc.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        					this.dsDeleteEtc.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        					this.dsDeleteEtc.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        					this.dsDeleteEtc.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        					this.dsDeleteEtc.setColumn(nrow, "NO_APPLY", "1");
        					this.dsDeleteEtc.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        					this.dsDeleteEtc.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        					break;
        					*/
        			}
        		}

        		//inData      = "updateEtc=dsUpdateEtc deleteEtc=dsDeleteEtc";
        		//if (this.dsUpdateEtc.rowcount == 0 && this.dsDeleteEtc.rowcount == 0) return;
        		inData      = "updateEtc=dsUpdateEtc";
        		if (this.dsUpdateEtc.rowcount == 0) return;
        	}

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";

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
        	this.fnPrintProc("S");
        	return false;
        };

        this.fnPrintProc = function(callType) {

        	this.dsListRpt.clearData();

        	this.dsYearEndReport.clearData();//소득·세액 공제신고서 main
        	this.dsYearEndReportSub.clearData();//소득·세액 공제신고서 sub
        	this.dsPensionReport.clearData();//연금ㆍ저축 등 소득ㆍ세액 공제명세서

        	this.dsYearEndReport.addRow();
        	this.dsYearEndReportSub.addRow();
        	this.dsPensionReport.addRow();

        	this.dsYearEndReport.setColumn(0, "YY_BASE", this.cboYN_MID.value == "Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsYearEndReport.setColumn(0, "NO_APPLY", "1");
        	this.dsYearEndReport.setColumn(0, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        	this.dsYearEndReport.setColumn(0, "TY_ORDERBY", "2");		// 1 부서, 2 주민번호, 3 법인
        	this.dsYearEndReport.setColumn(0, "YN_MID", this.cboYN_MID.value);
        	this.dsYearEndReport.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        	this.dsYearEndReportSub.setColumn(0, "YY_BASE", this.cboYN_MID.value == "Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsYearEndReportSub.setColumn(0, "MM_BASE", this.cboYN_MID.value == "Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsYearEndReportSub.setColumn(0, "NO_APPLY",  "1");
        	this.dsYearEndReportSub.setColumn(0, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        	this.dsYearEndReportSub.setColumn(0, "YN_MID", this.cboYN_MID.value);
        	this.dsYearEndReportSub.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        	this.dsPensionReport.setColumn(0, "YY_BASE", this.cboYN_MID.value == "Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsPensionReport.setColumn(0, "NO_APPLY",  "1");
        	this.dsPensionReport.setColumn(0, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        	this.dsPensionReport.setColumn(0, "TY_ORDERBY", "2");		// 1 부서, 2 주민번호, 3 법인
        	this.dsPensionReport.setColumn(0, "YN_MID", this.cboYN_MID.value);
        	this.dsPensionReport.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        	if(callType == "S"){
        		var strSvcId    = "print";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "yearEndReport=dsYearEndReport yearEndReportSub1=dsYearEndReportSub yearEndReportSub2=dsYearEndReportSub"; //소득·세액 공제신고서
        		    inData     += " pensionReport=dsPensionReport"; //연금ㆍ저축 등 소득ㆍ세액 공제명세서
        		var outData     = "dsListRpt=yearEndReport0";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}else{
        		var inProc		= "_dsProc";
        		var inParam 	= "";
        		var inData      = "yearEndReport=dsYearEndReport yearEndReportSub1=dsYearEndReportSub yearEndReportSub2=dsYearEndReportSub"; //소득·세액 공제신고서
        		    inData     += " pensionReport=dsPensionReport"; //연금ㆍ저축 등 소득ㆍ세액 공제명세서
        		var reportpath  = "/da/dav/DAV_YEAREND.ozr";

        		gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	}

        }

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

        	//적용년월
        	if (this.gfnIsNull(this.ctclWORK_BASE.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclWORK_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert(this.staWORK_BASE.text+ "을/를 입력하세요.");
        		return false;
        	}

        	//법인
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	//주민등록번호
        	if (this.gfnIsNull(this.ccfID_RESIDENT.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfID_RESIDENT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("주민등록번호를 입력하세요.", "fnVaidateCallback");
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

        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	if (svcID == "select") {
        		this.fnSetButton();

        		if(this.divData.form.tabData.tabindex == 0){

        			this.gfnGridAfterSelect(this.dxGrid);

        			//세대주여부
        			//this.dsList.filter("CD_FAMILY=='00'");
        			this.divData.form.tabData.tab1.form.div00.form.rdoYN_HOUSEHOLD.set_value(this.dsList.getColumn(0,"YN_HOUSEHOLDER")=="1"?"1":"2");	// 값이 숫자로 되어있음
        			//변동여부
        			this.divData.form.tabData.tab1.form.div00.form.rdoYN_DEDUCTION_CHG.set_value(this.dsList.getColumn(0,"YN_CHANGE")=="1"?"1":"2");	// 값이 숫자로 되어있음
        			//this.dsList.filter("");
        		}else{
        			//추가/특별공제

        			//이하 데이타 바인팅처리

        			var compArr = this.divData.form.tabData.tab2.form.div00.form.components;

        			for(var i = 0 ; i < this.dsListEtc.rowcount; i++){
        				var cdSubst = this.dsListEtc.getColumn(i, "CD_SUBST");
        				this.dsListEtcMapping.filter("CD_SUBST == '"+cdSubst+"'");

        				if(this.dsListEtcMapping.rowcount > 0){

        					if(cdSubst== "B07"){
        						if(this.dsListEtc.getColumn(i, "CD_FAMILY") == "00"){
        							this.divData.form.tabData.tab2.form.div00.form.chkCD_WOMAN.set_value(true);
        						}else{
        							this.divData.form.tabData.tab2.form.div00.form.chkCD_WOMAN.set_value(false);
        						}
        					}else if(cdSubst == "B13"){
        						if(this.dsListEtc.getColumn(i, "CD_FAMILY") == "00"){
        							this.divData.form.tabData.tab2.form.div00.form.chkONEPARENTS.set_value(true);
        						}else{
        							this.divData.form.tabData.tab2.form.div00.form.chkONEPARENTS.set_value(false);
        						}
        					}else{
        						var compAm = this.divData.form.tabData.tab2.form.div00.form.components.getItem(this.dsListEtcMapping.getColumn(0, "COMP1"));

        						compAm.set_value(this.dsListEtc.getColumn(i, "AM_SUBST"));

        						if(!this.gfnIsNull(this.dsListEtcMapping.getColumn(0, "COMP2"))){
        							//코드파인드
        							var compCCF = this.divData.form.tabData.tab2.form.div00.form.components.getItem(this.dsListEtcMapping.getColumn(0, "COMP2"));
        							compCCF.form.CDTextBox.set_value(this.dsListEtc.getColumn(i, "CD_BANK"));
        							compCCF.form.DSTextBox.set_value(this.dsListEtc.getColumn(i, "DS_BANK"));

        							//계좌번호
        							var compEdt = this.divData.form.tabData.tab2.form.div00.form.components.getItem(this.dsListEtcMapping.getColumn(0, "COMP4"));
        							compEdt.set_value(this.dsListEtc.getColumn(i, "CD_ACCOUNT"));
        						}
        					}
        				}
        				this.dsListEtcMapping.filter("");

        			} //for end
        		}

        		this.EtcFlag = "";	// 초기화


        		this.fnSetFormEnable(this.divData.form.tabData.tabindex);
        		this.fnSetBtnEnable();

        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert("저장되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if( svcID == "regNCalTax"){
        		if (errorCode == 0) {
        			var sMsg = "등록완료 및 세액계산이 완료 되었습니다.";
        			trace(this.dsOutput.saveXML());
        			if(this.dsOutput.rowcount > 0){
        				if(this.gfnNvl(this.dsOutput.getColumn(0, "YN_MESSAGE"), "N") == "Y"){
        					sMsg = "표준세액공제 대상자이므로 재 작업시 PDF업로드 및 입력사항을 반드시 확인하시기 바랍니다.";
        				}
        			}
        			this.gfnAlert(sMsg);
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "info"){	//PDF 파일
        		//File Dialog
        		this.fileUpDialog.open('nexacro17', FileDialog.LOAD);
        	} else if(svcID == "selectPension"){
        		//연금저축명세서
        		//trace(this.dsListRpt.saveXML());
        	}
        	else if (svcID == "selectReceipt") {
        		// 원천징수영수증
        		//trace(this.dsList.saveXML());
        	}
        	else if (svcID == "houseRpt") {
        		//명세서출력
        		if (errorCode == 0) {
        			this.fnHouseRpt("P");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "print") {
        		if (errorCode == 0) {
        			if(this.dsListRpt.rowcount > 0 ){
        				this.fnPrintProc("P");
        			}else{
        				this.gfnAlert("데이터가 없습니다.");
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "regComplete"){
        		if (errorCode == 0) {
        			this.fnRegNCalTax();
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

        		case "ccfCFBANK_60":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "FI");
        			break;
        		case "ccfCFBANK_61":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "FI");
        			break;
        		case "ccfCFBANK_62":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "FI");
        			break;
        		case "ccfCFBANK_44":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "FI");
        			break;
        		case "ccfCFBANK_45":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "FI");
        			break;
        		case "ccfCFBANK_46":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "FI");
        			break;
        		case "ccfCFBANK_401":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "FI");
        			break;
        		case "ccfCFBANK_402":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "FI");
        			break;
        		case "ccfCFBANK_403":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "FI");
        			break;
        		case "ccfCFBANK_404":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "FI");
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
        //alert("12");
        	this.fnSearchInit();

        };

        //그리드 코드파인드
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	switch(id) {
        		case "ccfFamily":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "FA");
        			break;
        		/*
        		case "ccfFamilyID":
        			dsUserParam.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        			dsUserParam.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        			dsUserParam.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        			break;
        		*/
        		case "ccfCD_HANDICAP":
        			dsUserParam.setColumn(nrow, "CD_PREFIX","HA");
        			break;
        		default:
        	}

        	return true;
        };
        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        };
        /************************************************************************
        * 그리드 이벤트
        ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
        // 	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);
        // 	if(this.dsList.getColumn(row, colnm) == "TEST") {
        // 		return false;
        // 	}

        	var bRtn = this.fnIsChangePossible();

        	if(bRtn == false){
        		return false;
        	}
        }

        /************************************************************************
        * 확장버튼 이벤트
        ************************************************************************/
        this.fnExtBtnEvent = function(btn){

        	if(this.ctclWORK_BASE.form.TextBox.value.substring(0,4) >= "2010"){
        		if (this.gfnIsNull(this.divData.form.tabData.tab1.form.div00.form.rdoYN_HOUSEHOLD.value) || this.gfnIsNull(this.divData.form.tabData.tab1.form.div00.form.rdoYN_DEDUCTION_CHG.value))
        		{
        			this.gfnAlert("세대주여부,인적공제변동여부를 먼저 입력저장하십시요.");
        			return;
        		}
        	}


        	var param = {};
        	var btnUrl;

        	param={
        			WORK_BASE: this.ctclWORK_BASE.form.TextBox.value,
        			CD_CORP: this.ccfCD_CORP.form.CDTextBox.value,
        			DS_CORP: this.ccfCD_CORP.form.DSTextBox.value,
        			ID_RESIDENT: nexacro.replaceAll(this.gfnNvl(this.ccfID_RESIDENT.form.CDTextBox.value,""), "-", ""),
        			DS_HNAME:this.ccfID_RESIDENT.form.DSTextBox.value,
        			ID_SABUN:this.edtID_SABUN.value,
        			YN_MID: this.cboYN_MID.value,
        			NO_APPLY: "1"
        			};

        	switch(btn.id){
        		case "btnExt_EtcUpload":	//기타증빙 첨부
        			if(this.gfnIsNull(this.divSearch.form.ccfID_RESIDENT.form.CDTextBox.value)){
        				this.gfnAlert("주민번호를 확인하시기바랍니다.");
        				return;
        			}
        			this.fnEtcUpload();
        			return;
        			break;

        		case "btnExt_PdfUpload":	//PDF 업로드
        			if(this.gfnIsNull(this.divSearch.form.ccfID_RESIDENT.form.CDTextBox.value)){
        				this.gfnAlert("주민번호를 확인하시기바랍니다.");
        				return;
        			}
        			this.fnPdfUpload();
        			return;
        			break;

        		case "btnExt_PreCompany": //전근무지정보
        			if(this.gfnIsNull(this.divSearch.form.ccfID_RESIDENT.form.CDTextBox.value)){
        				this.gfnAlert("주민번호를 확인하시기바랍니다.");
        				return;
        			}
        			var Gubun_T = "N"; //노무자
        			var Gubun_E = "N"; //임직원
        			var Gubun_All = "N"; //전체

        			param.Gubun_T = Gubun_T;
        			param.Gubun_E = Gubun_E;
        			param.Gubun_All = Gubun_All;
        			btnUrl = "DAV_PRECOMPANY";
        			break;

        		case "btnExt_CardSubst": //신용카드공제
        			if(this.gfnIsNull(this.divSearch.form.ccfID_RESIDENT.form.CDTextBox.value)){
        				this.gfnAlert("주민번호를 확인하시기바랍니다.");
        				return;
        			}
        			if(this.ctclWORK_BASE.form.TextBox.value.substring(0,4) == "2020"){
        				btnUrl = "DAV_CARDSUBST2020";
        			}else{
        				btnUrl = "DAV_CARDSUBST";
        			}

        			break;
        		case "btnExt_InsuSubst": //보험료공제
        			if(this.gfnIsNull(this.divSearch.form.ccfID_RESIDENT.form.CDTextBox.value)){
        				this.gfnAlert("주민번호를 확인하시기바랍니다.");
        				return;
        			}
        			btnUrl = "DAV_INSUSUBST";
        			break;
        		case "btnExt_EduSubst": //교육비공제
        			if(this.gfnIsNull(this.divSearch.form.ccfID_RESIDENT.form.CDTextBox.value)){
        				this.gfnAlert("주민번호를 확인하시기바랍니다.");
        				return;
        			}
        			btnUrl = "DAV_EDUSUBST";
        			break;
        		case "btnExt_MedicalSubst": //의료비공제
        			if(this.gfnIsNull(this.divSearch.form.ccfID_RESIDENT.form.CDTextBox.value)){
        				this.gfnAlert("주민번호를 확인하시기바랍니다.");
        				return;
        			}
        			btnUrl = "DAV_MEDICALSUBST";
        			break;
        		case "btnExt_GiveSubst": //기부금공제
        			if(this.gfnIsNull(this.divSearch.form.ccfID_RESIDENT.form.CDTextBox.value)){
        				this.gfnAlert("주민번호를 확인하시기바랍니다.");
        				return;
        			}
        			btnUrl = "DAV_GIVESUBST";
        			break;
        		case "btnExt_HouseSubst": //주택마련저축공제
        			if(this.gfnIsNull(this.divSearch.form.ccfID_RESIDENT.form.CDTextBox.value)){
        				this.gfnAlert("주민번호를 확인하시기바랍니다.");
        				return;
        			}
        			if(this.divData.form.tabData.tab1.form.div00.form.rdoYN_HOUSEHOLD.value != "1"){ //1	세대주
        				this.gfnAlert("주택마련저축공제는 세대주만 가능합니다.");
        				return;
        			}

        			btnUrl = "DAV_HOUSESUBST";
        			break;
        		case "btnExt_PensionSubst": //연금저축공제
        			if(this.gfnIsNull(this.divSearch.form.ccfID_RESIDENT.form.CDTextBox.value)){
        				this.gfnAlert("주민번호를 확인하시기바랍니다.");
        				return;
        			}
        			btnUrl = "DAV_PENSIONSUBST";
        			break;
        		case "btnExt_StockSubst": //장기집합투자증권저축공제
        			if(this.gfnIsNull(this.divSearch.form.ccfID_RESIDENT.form.CDTextBox.value)){
        				this.gfnAlert("주민번호를 확인하시기바랍니다.");
        				return;
        			}
        			btnUrl = "DAV_STOCKSUBST";
        			break;
        		case "btnExt_YesOne": //연말정산 간소화
        			//btnUrl = "DAV_YESONE";
        			window.open("http://www.hometax.go.kr");
        			return;
        			break;
        		/*
        		case "btnExt_YearEndSubstPesionRpt": //연금저축소득공제명세서
        			if(this.gfnIsNull(this.divSearch.form.ccfID_RESIDENT.form.CDTextBox.value)){
        				this.gfnAlert("주민번호를 확인하시기바랍니다.");
        				return;
        			}
        			this.fnYearEndSubstPesionRpt();
        			return;
        			break;
        		case "btnExt_YearEndReceiptRpt"://원천징수영수증
        			if(this.gfnIsNull(this.divSearch.form.ccfID_RESIDENT.form.CDTextBox.value)){
        				this.gfnAlert("주민번호를 확인하시기바랍니다.");
        				return;
        			}
        			this.fnYearEndReceiptRpt();
        			return;
        			break;
        		*/
        		default:
        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "fnFromCallback", param, this.width, this.height);



        };

        this.fnFromCallback = function(svcID, value) {
        	trace("콜백"+value);
        	if(value != false) {
        		this.FormBtns.Select.click();
        	}
        }
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
        		this.EtcFlag = "";	// 초기화
        	}
        };

        //거주자간 계약사항
        this.divData_tabData_tab2_btnHOUSE_LR_onclick = function(obj,e)
        {
        	//금전소비대차계약, 임대차계약
        	var param={
        			WORK_BASE: this.ctclWORK_BASE.form.TextBox.value,
        			CD_CORP: this.ccfCD_CORP.form.CDTextBox.value,
        			DS_CORP: this.ccfCD_CORP.form.DSTextBox.value,
        			ID_RESIDENT: this.ccfID_RESIDENT.form.CDTextBox.value,
        			DS_HNAME:this.ccfID_RESIDENT.form.DSTextBox.value,
        			ID_SABUN:this.edtID_SABUN.value,
        			YN_MID: this.cboYN_MID.value
        	};

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAV_HOUSESUBMIT_DLG", "fnPopupCallback", param);
        };

        //월세계약사항
        this.divData_tabData_tab2_btnMONTH_CONT_REMARK_onclick = function(obj,e)
        {
        	//월세계약
        	var param={
        			WORK_BASE: this.ctclWORK_BASE.form.TextBox.value,
        			CD_CORP: this.ccfCD_CORP.form.CDTextBox.value,
        			DS_CORP: this.ccfCD_CORP.form.DSTextBox.value,
        			ID_RESIDENT: this.ccfID_RESIDENT.form.CDTextBox.value,
        			DS_HNAME:this.ccfID_RESIDENT.form.DSTextBox.value,
        			ID_SABUN:this.edtID_SABUN.value,
        			YN_MID: this.cboYN_MID.value
        		};
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAV_HOUSEMONTH", "fnFromCallback", param, this.width, this.height);

        };

        //명세서출력
        this.divData_tabData_tab2_btnYEAREND_PRINT_onclick = function(obj,e)
        {
        	this.fnHouseRpt("S");
        };

        this.fnHouseRpt = function(callType){
        	this.dsReport1.clearData();
        	this.dsReport2.clearData();

        	this.dsReport1.addRow();
        	this.dsReport1.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport1.setColumn(0, "YY_BASE", this.cboYN_MID.value == "Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsReport1.setColumn(0, "MM_BASE", this.cboYN_MID.value == "Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsReport1.setColumn(0, "NO_APPLY", "1");
        	this.dsReport1.setColumn(0, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        	this.dsReport1.setColumn(0, "ID_SABUN", this.edtID_SABUN.value);
        	this.dsReport1.setColumn(0, "YN_MID", this.cboYN_MID.value);
        	this.dsReport1.setColumn(0, "DT_PRINT", this.gfnGetDate());
        	this.dsReport1.setColumn(0, "TY_ORDERBY", "2");		// 1 부서, 2 주민번호, 3 법인

        	this.dsReport2.addRow();
        	this.dsReport2.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport2.setColumn(0, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        	this.dsReport2.setColumn(0, "ID_SABUN", this.edtID_SABUN.value);
        	this.dsReport2.setColumn(0, "YY_BASE", this.cboYN_MID.value == "Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsReport2.setColumn(0, "MM_BASE", this.cboYN_MID.value == "Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsReport2.setColumn(0, "NO_APPLY", "1");
        	this.dsReport2.setColumn(0, "YN_MID", this.cboYN_MID.value);


        	this.dsHouseRpt1 = new Dataset();
        	this.dsHouseRpt2 = new Dataset();
        	this.dsHouseRpt3 = new Dataset();
        	this.dsHouseRpt4 = new Dataset();

        	if(callType == "S"){
        		var strSvcId    = "houseRpt";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "houseRpt=dsReport1 houseMonth=dsReport2 houseMoney=dsReport2 houseRent=dsReport2";
        		var outData     = "dsHouseRpt1=houseRpt0 dsHouseRpt2=houseMonth0 dsHouseRpt3=houseMoney0 dsHouseRpt4=houseRent0";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}else{
        		var inProc		= "_dsProc";
        		//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        		var inParam 	= "";						// 필요없는 경우 생략
        		var inData      = "houseRpt=dsReport1 houseMonth=dsReport2 houseMoney=dsReport2 houseRent=dsReport2";
        		var reportpath  = "/da/dav/DAV_YEARENDSUBSTHOUSE.ozr";

        		gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	}
        }

        //등록완료및 세액계산
        this.divSearch_btnGetRetire_onclick = function(obj,e)
        {
        	if(!this.fnSelectValidate()) return;

        	this.gfnConfirm("등록을 완료하고 세금계산을 하시겠습니까?","fnGetRetireCallback","RegNCalTax"); //fnPopupCallback
        };

        this.fnGetRetireCallback = function(strID, val){

        	if(strID == "RegNCalTax"){
        		if(val)
        		{
        			if(!this.fnSelectValidate()) return false;

        			this.dsRegComplete.clearData();
        			var nrow = this.dsRegComplete.addRow();

        			this.dsRegComplete.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        			this.dsRegComplete.setColumn(nrow, "ID_SABUN", this.edtID_SABUN.value);
        			this.dsRegComplete.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        			this.dsRegComplete.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        			this.dsRegComplete.setColumn(nrow, "NO_APPLY", "1");
        			this.dsRegComplete.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        			this.dsRegComplete.setColumn(nrow, "AM_RESULT", 0);
        			this.dsRegComplete.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        			this.dsRegComplete.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        			var strSvcId    = "regComplete";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "regComplete=dsRegComplete";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcType , 	// trabsaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc); 	// 통신방법 정의 [생략가능]


        		}
        	}
        };

        this.fnRegNCalTax = function(){
        	if(!this.fnSelectValidate()) return false;

        	this.dsReg.clearData();
        	var nrow = this.dsReg.addRow();
        	this.dsReg.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        	this.dsReg.setColumn(nrow, "ID_SABUN", this.edtID_SABUN.value);
        	this.dsReg.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsReg.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsReg.setColumn(nrow, "NO_APPLY","1");
        	this.dsReg.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        	this.dsReg.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        	this.dsReg.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        	var strSvcId    = "regNCalTax";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "calTax=dsReg";
        	var outData     = "dsOutput=calTax";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnPopupCallback = function(strID, val){

        //fnGetRetireCallback << 여기로 옮김
        // 	if(strID == "RegNCalTax"){
        // 		if(val)
        // 		{
        // 			this.dsReg.clearData();
        // 			var nrow = this.dsReg.addRow();
        // 			this.dsReg.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        // 			this.dsReg.setColumn(nrow, "ID_SABUN", this.edtID_SABUN.value);
        // 			this.dsReg.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        // 			this.dsReg.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        // 			this.dsReg.setColumn(nrow, "NO_APPLY","1");
        // 			this.dsReg.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        // 			this.dsReg.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        // 			this.dsReg.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        //
        // 			var strSvcId    = "regNCalTax";
        // 			var strSvcType  = "save";
        // 			var inProc		= "_dsProc";
        // 			var inData      = "calTax=dsReg";
        // 			var outData     = "";
        // 			var strArg      = "";
        // 			var callBackFnc = "fnCallback";
        //
        // 			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 								strSvcType , 	// transaction을 요청할 구분
        // 								inProc,			// Procedure 정보 Dataset 이름
        // 								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 								strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 								callBackFnc); 	// 통신방법 정의 [생략가능]
        // 		}
        // 	}

        	//거주자간 주택임차차입금
        	if(strID.indexOf("DAV_HOUSESUBMIT_DLG") > 0) {
        		if(val != false){
        			var json = JSON.parse(val);
        			var param={
        						WORK_BASE: this.ctclWORK_BASE.form.TextBox.value,
        						CD_CORP: this.ccfCD_CORP.form.CDTextBox.value,
        						DS_CORP: this.ccfCD_CORP.form.DSTextBox.value,
        						ID_RESIDENT: this.ccfID_RESIDENT.form.CDTextBox.value,
        						DS_HNAME:this.ccfID_RESIDENT.form.DSTextBox.value,
        						ID_SABUN:this.edtID_SABUN.value,
        						YN_MID: this.cboYN_MID.value
        					};
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, json.OPEN_URL, "fnFromCallback", param, this.width, this.height);
        		}
        	}
        };

        //탭변경
        this.divData_tabData_onchanged = function(obj,e)
        {
        	this.fnSelect();

        	if(this.divData.form.tabData.tabindex == 1){
        		this.divSearch.form.btnGetRetire.set_enable(false);
        	}else{
        		this.divSearch.form.btnGetRetire.set_enable(true);
        	}
        };

        //연급저축 소득공제 명세서
        this.fnYearEndSubstPesionRpt = function(){

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("YY_BASE", "string");
        	this.dsReport.addColumn("YY_BASE_TO", "string");
        	this.dsReport.addColumn("NO_APPLY", "string");
        	this.dsReport.addColumn("ID_RESIDENT", "string");
        	this.dsReport.addColumn("YN_MID", "string");
        	this.dsReport.addColumn("CD_CORP", "string");
        	this.dsReport.addColumn("DT_PRINT", "string");
        	this.dsReport.addColumn("MM_BASE", "string");
        	this.dsReport.addColumn("TY_ORDERBY", "string");

        	var nrow = this.dsReport.addRow();

        	this.dsReport.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsReport.setColumn(nrow, "YY_BASE_TO", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsReport.setColumn(nrow, "NO_APPLY", "1");
        	this.dsReport.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        	this.dsReport.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        	this.dsReport.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport.setColumn(nrow, "DT_PRINT", this.gfnGetDate());
        	this.dsReport.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsReport.setColumn(nrow, "TY_ORDERBY", "2");	//1:부서,2:주민등록번호,3:법인

        // 	var strSvcId    = "report";
        // 	var strSvcType  = "select";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "selectPension=dsReport";
        // 	var outData     = "dsListRpt=selectPension0";
        // 	var strArg 		= "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// trabsaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "selectPension=dsReport";
        	var reportpath  = "/da/dav/DAV_YEARENDSUBSTPENSION.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };

        //원천징수영수증
        this.fnYearEndReceiptRpt = function(){

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("YY_BASE", "string"); 		//적용년월(시작일)
        	this.dsReport.addColumn("YY_BASE_TO", "string");	//적용년월(종료일)
        	this.dsReport.addColumn("NO_APPLY", "string");
        	this.dsReport.addColumn("ID_RESIDENT", "string");	//주민등록번호
        	this.dsReport.addColumn("TY_ORDERBY", "string");	//정렬순서
        	this.dsReport.addColumn("TY_SIGN", "string");
        	this.dsReport.addColumn("YN_MID", "string");
        	this.dsReport.addColumn("CD_CORP", "string");
        	this.dsReport.addColumn("ID_LOGIN", "string");
        	this.dsReport.addColumn("GR_SEARCH", "string");
        	this.dsReport.addColumn("YN_INGAM", "string");

        	var nrow = this.dsReport.addRow();

        	this.dsReport.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsReport.setColumn(nrow, "YY_BASE_TO", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	//this.dsReport.setColumn(nrow, "CD_CORP", this.FormInfo.GR_SEARCH == "1" ? (this.gfnIsNull(this.ccfID_RESIDENT.form.CDTextBox.value)==true?this.ccfCD_CORP.form.CDTextBox.value : "%") : "%");
        	this.dsReport.setColumn(nrow, "NO_APPLY", 1);
        	this.dsReport.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        	//this.dsReport.setColumn(nrow, "TY_ORDERBY", "%");
        	this.dsReport.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        	//this.dsReport.setColumn(nrow, "TY_SIGN", "%");
        	this.dsReport.setColumn(nrow, "ID_LOGIN", this.AuthClient.ID_USER);
        	this.dsReport.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsReport.setColumn(nrow, "YN_INGAM", "N");

        	trace(this.dsReport.saveXML());
        	var strSvcId    = "selectReceipt";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectReceipt=dsReport";//20200317 주석 reportFSub=dsSelectRptF reportFPension=dsSelectRptF";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);

        	var inProc		= "_dsProc";
        	var inParam 	= "";	//"params=dsReportParam";
        	var inData      = "selectReceipt=dsReport";//20200317 주석 reportFSub=dsSelectRptF reportFPension=dsSelectRptF";
        	var reportpath  = "/da/dav/DAV_YEARENDRECEIPT.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };

        //기타증빙 첨부
        this.fnEtcUpload = function(){
        	var sYY_BASE = this.ctclWORK_BASE.form.TextBox.value.substring(0,4);
        	var sID_SABUN = this.edtID_SABUN.value;
        	var bIS_READONLY = false; //쓰기,삭제 가능 모드로

        	var bRtn = this.fnIsChangePossible();
        	if(!bRtn){
        		bIS_READONLY = true; //수정불가능하면 readonly 모드로 오픈
        	}

        	trace("sYY_BASE", sYY_BASE);
        	trace("sID_SABUN", sID_SABUN);
        	trace("bIS_READONLY", bIS_READONLY);

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DA21";
        	fileManager.CD_DIR = [sYY_BASE, sID_SABUN];
        	fileManager.IS_READONLY = bIS_READONLY;
        	this.gfnFileManager(fileManager, "fnFileCallback");
        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        // 	// 변경시 조회를 다시 하거나
        // 	if(val.IsChange == true) {
        // 		this.FormBtns.Select.click();
        // 	}
        // 	// 파일개수를 다시 셋팅
        // 	this.dsList13.set_enableevent(false);
        // 	this.dsList13.setColumn(this.dsList13.rowposition, "FILE_CNT", val.Cnt);
        // 	if(val.Cnt == 0) {
        // 		this.dsList13.setColumn(this.dsList13.rowposition, "DS_FILE_NAME", "첨부");
        // 		this.dsList13.setColumn(this.dsList13.rowposition, "DS_FILE_PATH", "");
        // 	} else {
        // 		this.dsList13.setColumn(this.dsList13.rowposition, "DS_FILE_NAME", "첨부(" + val.Cnt + ")");
        // 	}
        // 	this.dsList13.set_enableevent(true);
        };

        //PDF 업로드
        this.fnPdfUpload = function(){
        	var param = {
        					CD_CORP:this.ccfCD_CORP.form.CDTextBox.value,
        					ID_RESIDENT:this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""),
        					ID_SABUN:this.edtID_SABUN.value,
        					YN_MID:this.cboYN_MID.value,
        					YY_BASE:this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value,
        					MM_BASE:this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12"
        	};
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAV_INPUTDATA_PDF_DLG", "fnPdfCallback", param);
        };

        this.fnPdfCallback =  function(strId, val) {
        	this.FormBtns.Select.click();
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        	/*
        	if(e.columnid == "YN_BIRTH"){
        		if(e.newvalue == "N"){
        			this.dsList.setColumn(e.row, "TY_BORN","");
        		}
        	}else if(e.columnid == "YN_HANDICAP"){
        		if(e.newvalue == "N"){
        			this.dsList.setColumn(e.row, "CD_HANDICAP","");
        		}
        	}
        	*/
        };

        this.dsListEtc_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        	//"U"모드로 변경
        	this.EtcFlag = "U";
        };

        //세대주 변경
        this.divData_tabData_tab1_rdoYN_HOUSEHOLD_onitemchanged = function(obj,e)
        {
        	this.gfnSetFormStatus(this, "U");
        	//this.dsList.filter("CD_FAMILY=='00'");
        	this.dsList.setColumn(0, "YN_HOUSEHOLDER", e.postvalue);
        	//this.dsList.filter("");
        };

        //변동사항 변경
        this.divData_tabData_tab1_rdoYN_DEDUCTION_CHG_onitemchanged = function(obj,e)
        {
        	this.gfnSetFormStatus(this, "U");
        	//this.dsList.filter("CD_FAMILY=='00'");
        	this.dsList.setColumn(0, "YN_CHANGE", e.postvalue);
        	//this.dsList.filter("");
        };
        this.divData_tabData_canchange = function(obj,e)
        {
        	if(this.gfnIsNull(this.ccfID_RESIDENT.form.CDTextBox.value)){
        		this.fnValidateCallback = function(){
        			this.ccfID_RESIDENT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("주민등록 번호를 입력하세요.","fnValidateCallback");
        		return false;
        	}
        	return true;
        };

        this.fnUpdateEtc = function(obj,e)
        {
        	var etcMapRow = this.dsListEtcMapping.findRow("COMP1", obj.id);
        	//var nrow = this.dsListEtc.findRow("CD_SUBST1",this.dsListEtcMapping.getColumn(etcMapRow, "CD_SUBST"));
        	var nrow = this.dsListEtc.findRow("CD_SUBST",this.dsListEtcMapping.getColumn(etcMapRow, "CD_SUBST"));

        	// 부녀자, 한부모 둘중에 1개만 체크가능
        	if(this.divData.form.tabData.tab2.form.div00.form.chkCD_WOMAN.value == true
        		&& this.divData.form.tabData.tab2.form.div00.form.chkONEPARENTS.value == true){
        		this.gfnAlert("부녀자공제, 한부모가족공제 중에 1개만 선택 가능합니다.");
        		this.divData.form.tabData.tab2.form.div00.form.chkCD_WOMAN.set_value(false);
        		this.divData.form.tabData.tab2.form.div00.form.chkONEPARENTS.set_value(false);
        	}

        	// 부녀자제공 체크값 변경시
        	if(obj.name == "chkCD_WOMAN"){
        		if(this.divData.form.tabData.tab2.form.div00.form.chkCD_WOMAN.value == true){
        			var idResident = nexacro.replaceAll(this.gfnNvl(this.ccfID_RESIDENT.form.CDTextBox.value,""), "-", "");
        			if(!this.gfnIsNull(idResident) && (idResident.substr(6,1) == "1" || idResident.substr(6,1) == "3" || idResident.substr(6,1) == "5" || idResident.substr(6,1) == "7")){
        				this.divData.form.tabData.tab2.form.div00.form.chkCD_WOMAN.set_value(false);
        				this.gfnAlert("남자는 선택할 수 없습니다.");
        				return;
        			}

        			// 부녀자공제 선택시 경고메세지 추가
        			this.gfnAlert("부녀자공제 선택시 해당 과세기간의 근로소득금액이 3천만원 이하인 대상자만 공제됨을 유의바랍니다.");
        		}
        	}
        	//alert(nexacro.replaceAll(this.gfnNvl(this.ccfID_RESIDENT.form.CDTextBox.value,""), "-", "").substr(6,1));


        	//if(!this.gfnIsNull(nrow)){
        	if(nrow >= 0){
        		this.dsListEtc.setColumn(nrow, "AM_SUBST", obj.value);
        		this.dsListEtc.setColumn(nrow, this.ucFlag, "U");
        		this.gfnSetFormStatus(this, "U");
        		this.EtcFlag = "U";
        	}

        	this.fnSetButton();
        };

        //그리드 필수 체크
        this.gfValidate = function ()
        {
        	var colID_RESIDENT_FAMILY = this.dxGrid.getBindCellIndex("body", "ID_RESIDENT_FAMILY");
        	var headText   = this.dxGrid.getCellProperty("head" , colID_RESIDENT_FAMILY, "text");

        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, this.ucFlag) == "I" || this.dsList.getColumn(i, this.ucFlag) == "U"){

        			var residentfamily = nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(i, "ID_RESIDENT_FAMILY"),"")), "-", "");
        			trace("residentfamily"+residentfamily);
        			trace("gfnIsSSN"+this.gfnIsSSN(residentfamily))
        // 			if(!this.gfnIsSSN(residentfamily)){
        // 				this.gfnAlert((i + 1) +"열: ["+headText+"]가 유효하지 않습니다.");
        // 				this.dsList.set_rowposition(i);
        // 				this.dxGrid.setCellPos(colID_RESIDENT_FAMILY);
        // 				return false;
        // 			}
        		}
        	}
        	return true;
        };

        // 싱글폼 저장전 체크
        this.gfValidate2 = function ()
        {
        	var strMsg = "";

        	if(this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST11.value > 0){
        		if(this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST98.value == 0 || this.gfnIsNull(this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST98.value)){
        			strMsg = "※중소기업 취업청년 세액감면시 취업일은 필수입력입니다.\n";
        		}

        		if(this.divData.form.tabData.tab2.form.div00.form.calAM_ETCSUBST98.value.length >= 4){
        			if(this.divData.form.tabData.tab2.form.div00.form.calAM_ETCSUBST98.value.substr(0,4) != this.ctclWORK_BASE.form.TextBox.value.substr(0,4)){
        				strMsg = strMsg + "※중소기업 취업청년 세액감면 취업일은 \n해당 과세기간 내에 기재해야함\n해당 과세기간 이전이면 1월1일을 입력\n";
        			}
        		}

        		if(this.divData.form.tabData.tab2.form.div00.form.calAM_ETCSUBST99.value.length >= 4){
        			if(this.divData.form.tabData.tab2.form.div00.form.calAM_ETCSUBST99.value.substr(0,4) != this.ctclWORK_BASE.form.TextBox.value.substr(0,4)){
        				strMsg = strMsg + "※중소기업 취업청년 세액감면 종료일은 \n해당 과세기간 내에 기재해야함\n해당 과세기간 이후이면 12월31일을 입력\n";
        			}
        		}

        		if(this.gfnIsNull(this.divData.form.tabData.tab2.form.div00.form.calAM_ETCSUBST99.value.length)){
        			strMsg = strMsg + "※중소기업 취업청년 세액감면시 감면기간 종료일은 필수입력입니다.\n";
        		}

        		if(this.divData.form.tabData.tab2.form.div00.form.calAM_ETCSUBST98.value.length > this.divData.form.tabData.tab2.form.div00.form.calAM_ETCSUBST99.value){
        			strMsg = strMsg + "※중소기업 취업청년 세액감면 취업일, 종료일 입력이 잘못되었습니다.\n";
        		}
        	}

        	if(this.divData.form.tabData.tab2.form.div00.form.chkCD_WOMAN.value == true && this.divData.form.tabData.tab2.form.div00.form.chkONEPARENTS.value == true){
        		strMsg = strMsg + "부녀자공제 와 한부모가족공제를 동시에 만족하는 경우\n한부모가족공제만 체크해주시기 바랍니다.";
        	}

        	if(!this.gfnIsNull(strMsg)){
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        };

        // 폼상태에 따른 셋팅
        this.fnSetBtnEnable = function() {

        if(this.fnIsForbidStatus()){
        	this.btnCardSubst.set_enable(false);
        	this.btnInsuSubst.set_enable(false);
        	this.btnGiveSubst.set_enable(false);
        	this.btnMedicalSubst.set_enable(false);
        	this.btnEduSubst.set_enable(false);
        	this.btnYesOne.set_enable(false);
        	this.btnHouseSubst.set_enable(false);
        	this.btnPensionSubst.set_enable(false);
        	this.btnStockSubst.set_enable(false);
        	this.btnPdfUpload.set_enable(false);
        	this.btnGetRetire.set_enable(false);
        	this.btnPreCompany.set_enable(false);
        	return;
        }

        	var tabIdx = this.divData.form.tabData.tabindex;
        	if(tabIdx == 0){
        		if(this.gfnIsNull(this.gfnGetFormStatus(this))){	// 초기화상태
        			this.btnCardSubst.set_enable(false);
        			this.btnInsuSubst.set_enable(false);
        			this.btnGiveSubst.set_enable(false);
        			this.btnMedicalSubst.set_enable(false);
        			this.btnEduSubst.set_enable(false);
        			this.btnYesOne.set_enable(false);
        			this.btnHouseSubst.set_enable(false);
        			this.btnPensionSubst.set_enable(false);
        			this.btnStockSubst.set_enable(false);
        			this.btnPreCompany.set_enable(false);
        			//this.btnPdfUpload.set_enable(false);//연말정산PDF 업로드
        		}else if(this.gfnGetFormStatus(this) == "U") {
        			this.btnCardSubst.set_enable(false);
        			this.btnInsuSubst.set_enable(false);
        			this.btnGiveSubst.set_enable(false);
        			this.btnMedicalSubst.set_enable(false);
        			this.btnEduSubst.set_enable(false);
        			this.btnYesOne.set_enable(false);
        			this.btnHouseSubst.set_enable(false);
        			this.btnPensionSubst.set_enable(false);
        			this.btnStockSubst.set_enable(false);
        			this.btnPreCompany.set_enable(false);
        			//this.btnPdfUpload.set_enable(false);
        		}else if(this.dsList.rowcount < 1) {
        			this.btnCardSubst.set_enable(false);
        			this.btnInsuSubst.set_enable(false);
        			this.btnGiveSubst.set_enable(false);
        			this.btnMedicalSubst.set_enable(false);
        			this.btnEduSubst.set_enable(false);
        			this.btnYesOne.set_enable(false);
        			this.btnHouseSubst.set_enable(false);
        			this.btnPensionSubst.set_enable(false);
        			this.btnStockSubst.set_enable(false);
        			this.btnPreCompany.set_enable(false);
        			//this.btnPdfUpload.set_enable(false);
        		}else{
        			this.btnCardSubst.set_enable(true);
        			this.btnInsuSubst.set_enable(true);
        			this.btnGiveSubst.set_enable(true);
        			this.btnMedicalSubst.set_enable(true);
        			this.btnEduSubst.set_enable(true);
        			this.btnYesOne.set_enable(true);
        			this.btnHouseSubst.set_enable(true);
        			this.btnPensionSubst.set_enable(true);
        			this.btnStockSubst.set_enable(true);
        			this.btnPreCompany.set_enable(true);
        			//this.btnPdfUpload.set_enable(true);
        		}

        		//this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(true);
        	}else if(tabIdx == 1){
        		if(this.gfnIsNull(this.gfnGetFormStatus(this))){	// 초기화상태
        			this.btnCardSubst.set_enable(false);
        			this.btnInsuSubst.set_enable(false);
        			this.btnGiveSubst.set_enable(false);
        			this.btnMedicalSubst.set_enable(false);
        			this.btnEduSubst.set_enable(false);
        			this.btnYesOne.set_enable(false);
        			this.btnHouseSubst.set_enable(false);
        			this.btnPensionSubst.set_enable(false);
        			this.btnStockSubst.set_enable(false);
        			this.btnPreCompany.set_enable(false);
        			//this.btnPdfUpload.set_enable(false);
        		}else if(this.gfnGetFormStatus(this) == "U") {
        			this.btnCardSubst.set_enable(false);
        			this.btnInsuSubst.set_enable(false);
        			this.btnGiveSubst.set_enable(false);
        			this.btnMedicalSubst.set_enable(false);
        			this.btnEduSubst.set_enable(false);
        			this.btnYesOne.set_enable(false);
        			this.btnHouseSubst.set_enable(false);
        			this.btnPensionSubst.set_enable(false);
        			this.btnStockSubst.set_enable(false);
        			this.btnPreCompany.set_enable(false);
        			//this.btnPdfUpload.set_enable(false);
        		}else if(this.dsList.rowcount < 1) {
        			this.btnCardSubst.set_enable(false);
        			this.btnInsuSubst.set_enable(false);
        			this.btnGiveSubst.set_enable(false);
        			this.btnMedicalSubst.set_enable(false);
        			this.btnEduSubst.set_enable(false);
        			this.btnYesOne.set_enable(false);
        			this.btnHouseSubst.set_enable(false);
        			this.btnPensionSubst.set_enable(false);
        			this.btnStockSubst.set_enable(false);
        			this.btnPreCompany.set_enable(false);
        			//this.btnPdfUpload.set_enable(false);
        		}else{
        			this.btnCardSubst.set_enable(true);
        			this.btnInsuSubst.set_enable(true);
        			this.btnGiveSubst.set_enable(true);
        			this.btnMedicalSubst.set_enable(true);
        			this.btnEduSubst.set_enable(true);
        			this.btnYesOne.set_enable(true);
        			this.btnHouseSubst.set_enable(true);
        			this.btnPensionSubst.set_enable(true);
        			this.btnStockSubst.set_enable(true);
        			this.btnPreCompany.set_enable(true);
        			//this.btnPdfUpload.set_enable(true);
        		}

        		//this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        	}

        	if(this.YearEndClose == "false"){
        		this.FormBtns.Del.set_enable(false);
        		this.FormBtns.Save.set_enable(false);
        		this.FormBtns.Excel.set_enable(false);
        		this.FormBtns.Print.set_enable(false);
        	}
        	/*
        	else{
        		this.FormBtns.Del.set_enable(true);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Excel.set_enable(true);
        		this.FormBtns.Print.set_enable(true);
        	}
        	*/


        	//pdf업로드버튼 및 등록완료버튼 외
        	var bRtn = this.fnIsChangePossible();
        	this.btnPdfUpload.set_enable(bRtn);
        	this.btnGetRetire.set_enable(bRtn);

        }

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

        this.fnSetFormEnable = function(nTabIdx){
        	var bRtn = this.fnIsChangePossible();

        	if(nTabIdx === 0){
        		this.divData.form.tabData.tab1.form.div00.form.rdoYN_HOUSEHOLD.set_enable(bRtn);
        		this.divData.form.tabData.tab1.form.div00.form.rdoYN_DEDUCTION_CHG.set_enable(bRtn);
        	}else{

        		var targetDiv = this.divData.form.tabData.tab2.form.div00;
        		var compArr = targetDiv.form.components;


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

        		//this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Save.set_enable(bRtn);
        		this.FormBtns.Del.set_enable(bRtn);


        		//내부 버튼은 데이타 없을때만 enable false
        		if(this.dsListEtc.rowcount == 0){
        			this.divData.form.tabData.tab2.form.div00.form.btnHOUSE_LR.set_enable(false);//거주자간계약사항
        			this.divData.form.tabData.tab2.form.div00.form.btnMONTH_CONT_REMARK.set_enable(false);//월세계약사항
        			this.divData.form.tabData.tab2.form.div00.form.btnYEAREND_PRINT.set_enable(false);//명세서출력
        		}else{
        			this.divData.form.tabData.tab2.form.div00.form.btnHOUSE_LR.set_enable(true);//거주자간계약사항
        			this.divData.form.tabData.tab2.form.div00.form.btnMONTH_CONT_REMARK.set_enable(true);//월세계약사항
        			this.divData.form.tabData.tab2.form.div00.form.btnYEAREND_PRINT.set_enable(true);//명세서출력
        		}

        		//항상 수정못하는
        		this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST401.set_enable(false);
        		this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST402.set_enable(false);
        		this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST403.set_enable(false);
        		this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST404.set_enable(false);
        		this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST05.set_enable(false);
        		this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST06.set_enable(false);
        		this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST07.set_enable(false);
        		this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST16.set_enable(false);
        		this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST17.set_enable(false);
        		this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST18.set_enable(false);
        		this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST48.set_enable(false);
        		this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST02_1.set_enable(false);
        	}

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboYN_MID.addEventHandler("onitemchanged",this.divSearch_cboYN_MID_onitemchanged,this);
            this.divSearch.form.rdoTY_GUBUN.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.btnGetRetire.addEventHandler("onclick",this.divSearch_btnGetRetire_onclick,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.addEventHandler("canchange",this.divData_tabData_canchange,this);
            this.divData.form.tabData.tab1.form.div00.form.rdoYN_HOUSEHOLD.addEventHandler("onitemchanged",this.divData_tabData_tab1_rdoYN_HOUSEHOLD_onitemchanged,this);
            this.divData.form.tabData.tab1.form.div00.form.rdoYN_DEDUCTION_CHG.addEventHandler("onitemchanged",this.divData_tabData_tab1_rdoYN_DEDUCTION_CHG_onitemchanged,this);
            this.divData.form.tabData.tab2.form.div00.form.chkCD_WOMAN.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.chkONEPARENTS.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.staYEAREND_PRINT.addEventHandler("onclick",this.divData_tabData_tab2_staAM_HOUSEREFUND09_onclick,this);
            this.divData.form.tabData.tab2.form.div00.form.btnHOUSE_LR.addEventHandler("onclick",this.divData_tabData_tab2_btnHOUSE_LR_onclick,this);
            this.divData.form.tabData.tab2.form.div00.form.staAM_HOUSESUM1_1.addEventHandler("onclick",this.divData_tabData_tab2_staAM_HOUSEREFUND09_onclick,this);
            this.divData.form.tabData.tab2.form.div00.form.staAM_HOUSESUM1_2.addEventHandler("onclick",this.divData_tabData_tab2_staAM_HOUSEREFUND09_onclick,this);
            this.divData.form.tabData.tab2.form.div00.form.staAM_HOUSESUM1_4.addEventHandler("onclick",this.divData_tabData_tab2_staAM_HOUSEREFUND09_onclick,this);
            this.divData.form.tabData.tab2.form.div00.form.btnMONTH_CONT_REMARK.addEventHandler("onclick",this.divData_tabData_tab2_btnMONTH_CONT_REMARK_onclick,this);
            this.divData.form.tabData.tab2.form.div00.form.btnYEAREND_PRINT.addEventHandler("onclick",this.divData_tabData_tab2_btnYEAREND_PRINT_onclick,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST12.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.calAM_ETCSUBST98.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.calAM_ETCSUBST99.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST02.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST02_1.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST03.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST04.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST19.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST55.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST56.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST65.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST66.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST67.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST68.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST48.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST401.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST402.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST404.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST10.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST11.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST05.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST06.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST07.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST08.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST09.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST77.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.divData.form.tabData.tab2.form.div00.form.edtAM_ETCSUBST09_00.addEventHandler("onchanged",this.fnUpdateEtc,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsListEtc.addEventHandler("onvaluechanged",this.dsListEtc_onvaluechanged,this);
            this.fileUpDialog.addEventHandler("onclose",this.fileUpDialog_onclose,this);
            this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
        };
        this.loadIncludeScript("DAV_INPUTDATA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
