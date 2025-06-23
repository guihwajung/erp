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
            this.set_titletext("실수령액 시뮬레이터");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_BASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ANNUITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_HEALTH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_HEALTH_OLD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_HIRE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INCTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_RESTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SALARY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ANNUAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ANNUAL_BEF\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_SALARY_SIMULATOR_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SALARY\" type=\"BIGDECMAL\" size=\"256\"/><Column id=\"NO_SUBST\" type=\"BIGDECMAL\" size=\"256\"/><Column id=\"NO_SUBST20\" type=\"BIGDECMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">세전</Col></Row><Row><Col id=\"CD_CODE\">B</Col><Col id=\"DS_CODE\">세후</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">연봉</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0","340",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle_01","0","0","100","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN_bg","0","staTitle_01:10","322","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","staTY_GUBUN_bg:-314","staTY_GUBUN_bg:-25","265","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("10");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_GUBUN");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staAM_SALARY","0","staTY_GUBUN_bg:-1","140","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("2");
            obj.set_text("연봉");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staAM_SALARY_bg","staAM_SALARY:-1","staAM_SALARY:-30","183","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SALARY","staAM_SALARY:5","staAM_SALARY:-25","150","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_format("#,##0.##");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staAM_SALARY_unit","txtAM_SALARY:5","txtAM_SALARY:-20","30","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("14");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staTitle_02_bg","0","staAM_SALARY:-1","322","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staTitle_02","5","staTitle_02_bg:-25","135","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("17");
            obj.set_text("인적공제");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staNO_SUBST","0","staTitle_02_bg:-1","140","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("5");
            obj.set_text("인적공제 (본인포함)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staNO_SUBST_bg","staNO_SUBST:-1","staTitle_02_bg:-1","183","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new MaskEdit("txtNO_SUBST","staNO_SUBST:5","staTitle_02_bg:4","150","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_format("#,##0.##");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staNO_SUBST_unit","txtNO_SUBST:5","staTitle_02_bg:4","30","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("15");
            obj.set_text("명");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staNO_SUBST20","0","staNO_SUBST:-1","140","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("7");
            obj.set_text("20세 미만 자녀");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staNO_SUBST20_bg","staNO_SUBST20:-1","staNO_SUBST_bg:-1","183","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new MaskEdit("txtNO_SUBST20","staNO_SUBST20:5","staNO_SUBST_bg:4","150","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_format("#,##0.##");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staNO_SUBST20_unit","txtNO_SUBST20:5","staNO_SUBST_bg:4","30","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("16");
            obj.set_text("명");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Button("btnCalc","220","staNO_SUBST20_bg:10","100","30",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("9");
            obj.set_text("계산하기");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divDataLeft:10","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle_03","0","0","100","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("급여내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTitle_04_bg","0","staTitle_03:10","312","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTitle_04","5","35","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("22");
            obj.set_text("소득항목");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_BASE","0","staTitle_04_bg:-1","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_text("기본급");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_BASE_bg","staAM_BASE:-1","staAM_BASE:-30","183","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BASE","staAM_BASE:5","staAM_BASE:-25","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("25");
            obj.set_value("");
            obj.set_format("#,##0.##");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_BASE_unit","txtAM_BASE:5","staAM_BASE:-25","30","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("26");
            obj.set_text("원");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTitle_05_bg","0","staAM_BASE:-1","312","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTitle_05","5","staTitle_05_bg:-25","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("23");
            obj.set_text("공제항목");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_ANNUITY","0","staTitle_05_bg:-1","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_text("국민연금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_ANNUITY_bg","staAM_ANNUITY:-1","staAM_ANNUITY:-30","183","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ANNUITY","staAM_ANNUITY:5","staAM_ANNUITY:-25","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            obj.set_value("");
            obj.set_format("#,##0.##");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_ANNUITY_unit","txtAM_ANNUITY:5","staAM_ANNUITY:-25","30","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("27");
            obj.set_text("원");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_HEALTH","0","staAM_ANNUITY:-1","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_text("건강보험");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_HEALTH_bg","staAM_HEALTH:-1","staAM_HEALTH:-30","183","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_HEALTH","staAM_HEALTH:5","staAM_HEALTH:-25","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("30");
            obj.set_value("");
            obj.set_format("#,##0.##");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_HEALTH_unit","txtAM_HEALTH:5","staAM_HEALTH:-25","30","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("29");
            obj.set_text("원");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_HEALTH_OLD","0","staAM_HEALTH:-1","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_text("노인장기요양보험");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_HEALTH_OLD_bg","staAM_HEALTH_OLD:-1","staAM_HEALTH_OLD:-30","183","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_HEALTH_OLD","staAM_HEALTH_OLD:5","staAM_HEALTH_OLD:-25","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("40");
            obj.set_value("");
            obj.set_format("#,##0.##");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_HEALTH_OLD_unit","txtAM_HEALTH_OLD:5","staAM_HEALTH_OLD:-25","30","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("31");
            obj.set_text("원");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_HIRE","0","staAM_HEALTH_OLD:-1","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_text("고용보험");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_HIRE_bg","staAM_HIRE:-1","staAM_HIRE:-30","183","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_HIRE","staAM_HIRE:5","staAM_HIRE:-25","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("32");
            obj.set_value("");
            obj.set_format("#,##0.##");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_HIRE_unit","txtAM_HIRE:5","staAM_HIRE:-25","30","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("41");
            obj.set_text("원");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_INCTAX","0","staAM_HIRE:-1","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_text("소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_INCTAX_bg","staAM_INCTAX:-1","staAM_INCTAX:-30","183","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_INCTAX","staAM_INCTAX:5","staAM_INCTAX:-25","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("34");
            obj.set_value("");
            obj.set_format("#,##0.##");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_INCTAX_unit","txtAM_INCTAX:5","staAM_INCTAX:-25","30","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("33");
            obj.set_text("원");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_RESTAX","0","staAM_INCTAX:-1","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_text("지방소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_RESTAX_bg","staAM_RESTAX:-1","staAM_RESTAX:-30","183","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_RESTAX","staAM_RESTAX:5","staAM_RESTAX:-25","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("36");
            obj.set_value("");
            obj.set_format("#,##0.##");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_RESTAX_unit","txtAM_RESTAX:5","staAM_RESTAX:-25","30","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("35");
            obj.set_text("원");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTitle_06_bg","0","291","312","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTitle_06","5","staAM_RESTAX:4","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("24");
            obj.set_text("계산");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_SALARY","0","staTitle_06_bg:-1","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_text("월 수령 예상액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_SALARY_bg","staAM_SALARY:-1","staAM_SALARY:-30","183","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SALARY","staAM_SALARY:5","staAM_SALARY:-25","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("42");
            obj.set_value("");
            obj.set_format("#,##0.##");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("txtAM_SALARY_unit","txtAM_SALARY:5","staAM_SALARY:-25","30","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("37");
            obj.set_text("원");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_ANNUAL","0","staAM_SALARY:-1","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_text("세전 연봉");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_ANNUAL_bg","staAM_ANNUAL:-1","staAM_ANNUAL:-30","183","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ANNUAL","staAM_ANNUAL:5","staAM_ANNUAL:-25","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("38");
            obj.set_value("");
            obj.set_format("#,##0.##");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_ANNUAL_unit","txtAM_ANNUAL:5","staAM_ANNUAL:-25","30","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("39");
            obj.set_text("원");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_ANNUAL_BEF","0","staAM_ANNUAL:-1","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("43");
            obj.set_text("세후 연봉");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_ANNUAL_BEF_bg","staAM_ANNUAL_BEF:-1","staAM_ANNUAL_BEF:-30","183","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ANNUAL_BEF","staAM_ANNUAL_BEF:5","staAM_ANNUAL_BEF:-25","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("44");
            obj.set_value("");
            obj.set_format("#,##0.##");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("txtAM_ANNUAL_BEF_unit","txtAM_ANNUAL_BEF:5","staAM_ANNUAL_BEF:-25","30","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("45");
            obj.set_text("원");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divDataLeft.form.rdoTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataLeft.form.txtAM_SALARY","value","dsSearch","AM_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataLeft.form.txtNO_SUBST","value","dsSearch","NO_SUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataLeft.form.txtNO_SUBST20","value","dsSearch","NO_SUBST20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataRight.form.txtAM_BASE","value","dsList","AM_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.txtAM_ANNUITY","value","dsList","AM_ANNUITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.txtAM_HEALTH","value","dsList","AM_HEALTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.txtAM_HIRE","value","dsList","AM_HIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.txtAM_INCTAX","value","dsList","AM_INCTAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.txtAM_RESTAX","value","dsList","AM_RESTAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.txtAM_ANNUAL","value","dsList","AM_ANNUAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.txtAM_HEALTH_OLD","value","dsList","AM_HEALTH_OLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.txtAM_SALARY","value","dsList","AM_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.txtAM_ANNUAL_BEF","value","dsList","AM_ANNUAL_BEF");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAU_SALARY_SIMULATOR.xfdl", function() {
        this.objApp = this.gfnGetApplication();

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

        	this.dsSearch.setColumn(0, "TY_GUBUN", "A");
        	this.dsSearch.setColumn(0, "NO_SUBST", 1);


        	this.divTopBtn.form.btnSel.set_enable(false);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
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
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        // 	if (svcID == "select") {
        // 		this.gfnGridAfterSelect(this.dxGrid);
        // 	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

         /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.divData_divDataLeft_btnCalc_onclick = function(obj,e)
        {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("AM_SALARY", "bigdecimal");
        	this.dsSelect.addColumn("NO_SUBST", "bigdecimal");
        	this.dsSelect.addColumn("NO_SUBST20", "bigdecimal");

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "AM_SALARY", this.dsSearch.getColumn(0, "AM_SALARY"));
        	this.dsSelect.setColumn(0, "NO_SUBST", this.dsSearch.getColumn(0, "NO_SUBST"));
        	this.dsSelect.setColumn(0, "NO_SUBST20", this.dsSearch.getColumn(0, "NO_SUBST20"));

        	var strSvcId    = "selectleft";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.dsList.clearData();
        	}
        };

        this.divData_divDataLeft_rdoTY_GUBUN_canitemchange = function(obj,e)
        {
        	// 연봉 초기화
        	this.dsSearch.setColumn(0, "AM_SALARY", "");
        	this.dsSearch.setColumn(0, "NO_SUBST", 1);
        	this.dsSearch.setColumn(0, "NO_SUBST20", 0);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divDataLeft.form.rdoTY_GUBUN.addEventHandler("canitemchange",this.divData_divDataLeft_rdoTY_GUBUN_canitemchange,this);
            this.divData.form.divDataLeft.form.btnCalc.addEventHandler("onclick",this.divData_divDataLeft_btnCalc_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_SALARY_SIMULATOR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
