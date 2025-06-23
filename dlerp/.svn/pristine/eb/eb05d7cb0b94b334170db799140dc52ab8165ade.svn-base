(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_QUERYSALARY");
            this.set_titletext("조건별 급여정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_QUERYSALARY_SELECT_LIST</Col></Row><Row><Col id=\"TARGET\">selectIncomeSubstList</Col><Col id=\"SP\">DAUPR_QUERYSALARY_LIST</Col></Row><Row><Col id=\"TARGET\">dsAuthForm</Col><Col id=\"SP\">DZZPR_DOTNET_AUTHORITYFORM_SELECT_NEW</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIncomeSubstList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_ORDERBY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ALLOWS\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"FR_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"TO_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ORG1\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ANNUITY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HIRE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HEALTH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMPTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_ORDERBY\">ID_SABUN</Col><Col id=\"TY_SALARY\">S</Col><Col id=\"SN_SALARY\">1</Col><Col id=\"YN_HEALTH\">%</Col><Col id=\"YN_HIRE\">%</Col><Col id=\"YN_ANNUITY\">%</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_EMPTYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsParamAuthForm", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsParamBtnInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthForm", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtnInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","10","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSort","0","45","105","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("정열순서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSort_bg","staSort:-1","staSort:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboSort","staSort:5","staSort:-25","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_cboSort_innerdataset = new nexacro.NormalDataset("divData_form_cboSort_innerdataset", obj);
            divData_form_cboSort_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ID_SABUN</Col><Col id=\"datacolumn\">사번순</Col></Row><Row><Col id=\"codecolumn\">DS_HNAME</Col><Col id=\"datacolumn\">성명순</Col></Row><Row><Col id=\"codecolumn\">CD_DEPT</Col><Col id=\"datacolumn\">부서순</Col></Row><Row><Col id=\"datacolumn\">직종순</Col><Col id=\"codecolumn\">DS_EMPTYPE</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboSort_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_SALARY","0","staSort:-1","105","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("급여년월");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_SALARY_bg","staYM_SALARY:-1","staYM_SALARY:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclFR_YM_SALARY","staYM_SALARY:5","staYM_SALARY:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.getSetter("onchanged").set("fnSearchInit");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO","ctclFR_YM_SALARY:0","79","30","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclTO_YM_SALARY","staDT_ORD_TO:0","79","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.getSetter("onchanged").set("fnSearchInit");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0","staYM_SALARY:-1","105","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_bg","staCD_DEPT:-1","staCD_DEPT:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:5","staCD_DEPT:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_JOBTYPE","0","staCD_DEPT:-1","105","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_JOBTYPE_bg","staCD_JOBTYPE:-1","staCD_JOBTYPE:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_JOBTYPE","staCD_JOBTYPE:5","staCD_JOBTYPE:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION","0","staCD_JOBTYPE:-1","105","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION_bg","staCD_POSITION:-1","staCD_POSITION:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_POSITION","staCD_POSITION:5","staCD_POSITION:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("52");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_ANNUITY","0","staCD_POSITION:-1","105","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("국민연금적용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_ANNUITY_bg","staYN_ANNUITY:-1","staYN_ANNUITY:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboYN_ANNUITY","staYN_ANNUITY:5","staYN_ANNUITY:-25","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_cboYN_ANNUITY_innerdataset = new nexacro.NormalDataset("divData_form_cboYN_ANNUITY_innerdataset", obj);
            divData_form_cboYN_ANNUITY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">%</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboYN_ANNUITY_innerdataset);
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_MEDIC","0","staYN_ANNUITY:-1","105","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("건강보험적용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_MEDIC_bg","staYN_MEDIC:-1","staYN_MEDIC:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboYN_MEDIC","staYN_MEDIC:5","staYN_MEDIC:-25","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_cboYN_MEDIC_innerdataset = new nexacro.NormalDataset("divData_form_cboYN_MEDIC_innerdataset", obj);
            divData_form_cboYN_MEDIC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">%</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboYN_MEDIC_innerdataset);
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_HIRE","0","staYN_MEDIC:-1","105","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("고용보험적용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_HIRE_bg","staYN_HIRE:-1","staYN_HIRE:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboYN_HIRE","staYN_HIRE:5","staYN_HIRE:-25","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_cboYN_HIRE_innerdataset = new nexacro.NormalDataset("divData_form_cboYN_HIRE_innerdataset", obj);
            divData_form_cboYN_HIRE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">%</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboYN_HIRE_innerdataset);
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","staSort_bg:-1","staSort_bg:-30","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("지급구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY_bg","staTY_SALARY:-1","staTY_SALARY:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","staTY_SALARY:5","staTY_SALARY:-25","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_cboTY_SALARY_innerdataset = new nexacro.NormalDataset("divData_form_cboTY_SALARY_innerdataset", obj);
            divData_form_cboTY_SALARY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">%</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">S</Col><Col id=\"datacolumn\">급여</Col></Row><Row><Col id=\"codecolumn\">X</Col><Col id=\"datacolumn\">성과급</Col></Row><Row><Col id=\"codecolumn\">R</Col><Col id=\"datacolumn\">퇴직급여</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboTY_SALARY_innerdataset);
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","cboTY_SALARY:5","staTY_SALARY:-25","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_readonly("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_cboSN_SALARY_innerdataset = new nexacro.NormalDataset("divData_form_cboSN_SALARY_innerdataset", obj);
            divData_form_cboSN_SALARY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboSN_SALARY_innerdataset);
            obj.set_text("1");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","staYM_SALARY_bg:-1","74","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("법인");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_bg","staCD_CORP:-1","staCD_CORP:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","staCD_CORP:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","staCD_DEPT_bg:-1","103","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg","staID_SABUN:-1","staID_SABUN:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:5","staID_SABUN:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFOCORP");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_PAYSTEP","staCD_JOBTYPE_bg:-1","132","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("근속연차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_PAYSTEP_bg","staCD_PAYSTEP:-1","staCD_PAYSTEP:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_PAYSTEP","staCD_PAYSTEP:5","staCD_PAYSTEP:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFPAYSTEPSUB");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EMPTYPE","staCD_POSITION_bg:-1","161","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_text("직원구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EMPTYPE_bg","staDS_EMPTYPE:-1","staDS_EMPTYPE:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboDS_EMPTYPE","staDS_EMPTYPE:5","staDS_EMPTYPE:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsDS_EMPTYPE");
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYY_SALARY","staYN_ANNUITY_bg:-1","190","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_text("조회년도");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYY_SALARY_bg","staYY_SALARY:-1","staYY_SALARY:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboYY_SALARY","staYY_SALARY:5","staYY_SALARY:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var divData_form_cboYY_SALARY_innerdataset = new nexacro.NormalDataset("divData_form_cboYY_SALARY_innerdataset", obj);
            divData_form_cboYY_SALARY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">%</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboYY_SALARY_innerdataset);
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SALARY","staYN_MEDIC_bg:-1","219","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_text("연소득");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SALARY_bg","staAM_SALARY:-1","staAM_SALARY:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtAM_FR_SALARY","staAM_SALARY:5","staAM_SALARY:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("tiltAM_SALARY","edtAM_FR_SALARY:0","staAM_SALARY:-25","30","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_text("~");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_AC");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtAM_TO_SALARY","tiltAM_SALARY:0","staAM_SALARY:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00","730","10","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("소득내역 / 공제내역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","300",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridIncomeSubstList","staTY_SALARY_bg:15","44",null,"236","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.cboSort","value","dsSearch","DS_ORDERBY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cboTY_SALARY","value","dsSearch","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctclFR_YM_SALARY.form.TextBox","value","dsSearch","FR_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctclTO_YM_SALARY.form.TextBox","value","dsSearch","TO_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cboYN_ANNUITY","value","dsSearch","YN_ANNUITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cboYN_MEDIC","value","dsSearch","YN_HEALTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.cboYN_HIRE","value","dsSearch","YN_HIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_ORG1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ccfCD_JOBTYPE.form.CDTextBox","value","dsSearch","CD_JOBTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ccfCD_PAYSTEP.form.CDTextBox","value","dsSearch","CD_PAYSTEP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfCD_POSITION.form.CDTextBox","value","dsSearch","CD_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.cboSN_SALARY","value","dsSearch","SN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.cboDS_EMPTYPE","value","dsSearch","DS_EMPTYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_QUERYSALARY.xfdl", function() {
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
        	this.fnSetCombo();

        	//급여년월 셋팅
        	var thisMonth = this.gfnGetDate().substr(0,6);
        	this.ctclFR_YM_SALARY.form.TextBox.set_value(thisMonth);
        	this.ctclTO_YM_SALARY.form.TextBox.set_value(thisMonth);

        	//법인 셋팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	//소득내역/공제내역
        	this.fnSelectIncomesubstList();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        	// this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSalaryBaseInfo = this.gfnFormButtonAdd("SalaryBaseInfo", "fnSalaryBaseInfo", "급여기초정보");

        	this.btnSalaryBaseInfo.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//정렬순서
        	this.cboSort = this.divData.form.cboSort;
        	//지급구분
        	this.cboTY_SALARY = this.divData.form.cboTY_SALARY;
        	this.cboSN_SALARY = this.divData.form.cboSN_SALARY;
        	this.cboDS_EMPTYPE = this.divData.form.cboDS_EMPTYPE;
        	//급여년월
        	this.ctclFR_YM_SALARY = this.divData.form.ctclFR_YM_SALARY;
        	this.ctclTO_YM_SALARY = this.divData.form.ctclTO_YM_SALARY
        	//법인
        	this.ccfCD_CORP = this.divData.form.ccfCD_CORP
        	//부서
        	this.ccfCD_DEPT = this.divData.form.ccfCD_DEPT
        	//사번
        	this.ccfID_SABUN = this.divData.form.ccfID_SABUN
        	//직종
        	this.ccfCD_JOBTYPE = this.divData.form.ccfCD_JOBTYPE
        	//직종
        	this.ccfCD_POSITION = this.divData.form.ccfCD_POSITION
        	//급호
        	this.ccfCD_PAYSTEP = this.divData.form.ccfCD_PAYSTEP
        	//국민연금적용
        	this.cboYN_ANNUITY = this.divData.form.cboYN_ANNUITY
        	//건강보험적용
        	this.cboYN_MEDIC = this.divData.form.cboYN_MEDIC
        	//고용보험적용
        	this.cboYN_HIRE = this.divData.form.cboYN_HIRE

        	//소득/공제내역
        	this.dxGridIncomeSubstList = this.divData.form.objGridIncomeSubstList;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//소득내역/공제내역
        	this.gfnGridInit(this.dxGridIncomeSubstList, this.dsIncomeSubstList, "DA", "DAU_QUERYSALARY1");

        	//그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_QUERYSALARY");
        	this.ccfCD_CORP.AfterCDTextChanged = "codefind_AfterCDTextChanged"

        	this.ccfCD_JOBTYPE.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_POSITION.CodeFindName = "DAX_CFCOMMONCODE";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DS_ORDERBY", "string");
        	this.dsSelect.addColumn("TY_SALARY", "string");
        	this.dsSelect.addColumn("FR_SALARY", "string");
        	this.dsSelect.addColumn("TO_SALARY", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_ORG1", "string");
        	this.dsSelect.addColumn("CD_ORG2", "string");
        	this.dsSelect.addColumn("CD_ORG3", "string");
        	this.dsSelect.addColumn("CD_JOBTYPE", "string");

        	this.dsSelect.addColumn("FR_SABUN", "string");
        	this.dsSelect.addColumn("TO_SABUN", "string");
        	this.dsSelect.addColumn("FR_PAYSTEP", "string");
        	this.dsSelect.addColumn("TO_PAYSTEP", "string");
        	this.dsSelect.addColumn("DS_HNAME", "string");

        	this.dsSelect.addColumn("YN_ANNUITY", "string");
        	this.dsSelect.addColumn("YN_HIRE", "string");
        	this.dsSelect.addColumn("YN_HEALTH", "string");
        	this.dsSelect.addColumn("YY_BASE", "string");

        	this.dsSelect.addColumn("FR_YY_INCOMESUM", "string");
        	this.dsSelect.addColumn("TO_YY_INCOMESUM", "string");
        	this.dsSelect.addColumn("COLCNT", "int");
        	this.dsSelect.addColumn("COLGUBUN", "string");
        	this.dsSelect.addColumn("COLCD", "string");
        	this.dsSelect.addColumn("DS_EMPTYPE", "string");

        	//this.dsSelect.addColumn("CD_ALLOWS", "string");
        	this.dsSelect.addColumn("SN_SALARY", "string");
        	//this.dsSelect.addColumn("ID_SABUN", "string");
        	//this.dsSelect.addColumn("CD_PAYSTEP", "string");
        	//this.dsSelect.addColumn("CD_POSITION", "string");

        	/*
        	@ORDER_BY      VARCHAR(20) = '',
            @TY_SALARY     VARCHAR(1) = '',
            @FR_SALARY     VARCHAR(6) = '',
            @TO_SALARY     VARCHAR(6) = '',
            @CD_CORP       VARCHAR(6) = '',
            @CD_ORG1       VARCHAR(6) = '',
            @CD_ORG2       VARCHAR(6) = '',
            @CD_ORG3       VARCHAR(6) = '',
            @CD_JOBTYPE    VARCHAR(2) = '',

            @FR_SABUN      VARCHAR(20) = '',
            @TO_SABUN      VARCHAR(20) = '',
            @FR_PAYSTEP    VARCHAR(5) = '',
            @TO_PAYSTEP    VARCHAR(5) = '',
            @DS_HNAME      VARCHAR(8) = '',

            @YN_ANNUITY    VARCHAR(1) = '',
            @YN_HIRE       VARCHAR(1) = '',
            @YN_HEALTH     VARCHAR(1) = '',
            @YY_BASE       VARCHAR(4) = '',
            @FR_YY_INCOMESUM INT = 0,
            @TO_YY_INCOMESUM INT = 0,
            @ColCnt  INT = 0,
            @ColGubun      VARCHAR(max) = '', --|수당|공제.........
            @ColCd         VARCHAR(max) = '' ,--|01|02.............
            @YN_SENDIFIMS CHAR(1)
        */
        	/*
        	this.dsSelect.addColumn("SORT", "string");
        	this.dsSelect.addColumn("TY_SALARY", "string");
        	this.dsSelect.addColumn("FR_YM_SALARY", "string");
        	this.dsSelect.addColumn("TO_YM_SALARY", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("FR_ID_SABUN", "string");
        	this.dsSelect.addColumn("TO_ID_SABUN", "string");
        	this.dsSelect.addColumn("CD_JOBTYPE", "string");
        	this.dsSelect.addColumn("FR_CD_PAYSTEP", "string");
        	this.dsSelect.addColumn("TO_CD_PAYSTEP", "string");
        	this.dsSelect.addColumn("DS_HNAME", "string");
        	this.dsSelect.addColumn("YN_ANNUITY", "string");
        	this.dsSelect.addColumn("YN_MEDIC", "string");
        	this.dsSelect.addColumn("YN_HIRE", "string");
        	*/
        };


        /************************************************************************
         * 콤보 설정
         ************************************************************************/
        this.fnSetCombo = function() {
           this.dsCombo = new Dataset();
           this.dsCombo.addColumn("TY_SEL"     , "string");
           this.dsCombo.addColumn("CD_PREFIX"  , "string");
           this.dsCombo.addColumn("CD_UPPREFIX", "string");

           this.dsCombo.addRow();
           this.dsCombo.setColumn(0, "TY_SEL"     , "A");	//A
           this.dsCombo.setColumn(0, "CD_PREFIX"  , "EA");
           this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

        //    this.dsCombo.addRow();
        //    this.dsCombo.setColumn(1, "TY_SEL"     , "P");
        //    this.dsCombo.setColumn(1, "CD_PREFIX"  , "AD");
        //    this.dsCombo.setColumn(1, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsDS_EMPTYPE=combo0";
        	//var outData     = "dsDS_EMPTYPE=combo0 dsCD_ADOPTYPE_GROUP=combo1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }
        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if(!this.fnValidate()) return;

        	var nRow = this.dsIncomeSubstList.findRow( "CD_ALLOW", "A01" );	// 기본급
        	this.dsIncomeSubstList.setColumn( nRow, "YN_GUBUN", 1 );

        	this.fnSetGridColunm();

        	var sCdAllows = "";
        	var sGubuns = "";
        	var sDelimiter = "|";
        	var nIncomeCnt = this.dsIncomeSubstList.getCaseCount( "YN_GUBUN == 1");
        	for (var i = 0; i < this.dsIncomeSubstList.rowcount; i++) {
        		if(this.dsIncomeSubstList.getColumn(i, "YN_GUBUN") == 1){
        			sCdAllows = sCdAllows + sDelimiter +  this.dsIncomeSubstList.getColumn(i, "CD_ALLOW");
        			sGubuns = sGubuns + sDelimiter +  this.dsIncomeSubstList.getColumn(i, "GUBUN1");
        		}
        	}
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "DS_ORDERBY", this.dsSearch.getColumn(0, "DS_ORDERBY"));
        	this.dsSelect.setColumn(0, "TY_SALARY", this.dsSearch.getColumn(0, "TY_SALARY"));
        	this.dsSelect.setColumn(0, "FR_SALARY", this.dsSearch.getColumn(0, "FR_SALARY"));
        	this.dsSelect.setColumn(0, "TO_SALARY", this.dsSearch.getColumn(0, "TO_SALARY"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_ORG1", this.dsSearch.getColumn(0, "CD_ORG1"));
        	//this.dsSelect.addColumn("CD_ORG2", "string");
        	//this.dsSelect.addColumn("CD_ORG3", "string");
        	this.dsSelect.setColumn(0, "CD_JOBTYPE", this.dsSearch.getColumn(0, "CD_JOBTYPE"));
        	this.dsSelect.setColumn(0, "FR_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	//this.dsSelect.addColumn("TO_SABUN", "string");
        	this.dsSelect.setColumn(0, "FR_PAYSTEP", this.dsSearch.getColumn(0, "CD_PAYSTEP"));
        	//this.dsSelect.addColumn("TO_PAYSTEP", "string");
        	this.dsSelect.setColumn(0, "DS_HNAME", this.dsSearch.getColumn(0, "DS_HNAME"));
        	this.dsSelect.setColumn(0, "YN_ANNUITY", this.dsSearch.getColumn(0, "YN_ANNUITY"));
        	this.dsSelect.setColumn(0, "YN_HIRE", this.dsSearch.getColumn(0, "YN_HIRE"));
        	this.dsSelect.setColumn(0, "YN_HEALTH", this.dsSearch.getColumn(0, "YN_HEALTH"));
        	//this.dsSelect.addColumn("YY_BASE", "string");

        	//this.dsSelect.addColumn("FR_YY_INCOMESUM", "string");
        	//this.dsSelect.addColumn("TO_YY_INCOMESUM", "string");
        	this.dsSelect.setColumn(0, "COLCNT", nIncomeCnt);
        	this.dsSelect.setColumn(0, "COLGUBUN", sGubuns);	// 소득 / 수당  --|수당|공제.........
        	this.dsSelect.setColumn(0, "COLCD", sCdAllows);		// ,--|01|02.............
        	this.dsSelect.setColumn(0, "DS_EMPTYPE", this.dsSearch.getColumn(0, "DS_EMPTYPE"));
        	this.dsSelect.setColumn(0, "SN_SALARY", this.dsSearch.getColumn(0, "SN_SALARY"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]


        	/*
        	this.setWaitCursor(true);

        	this.gfnSetTimer(this, function() {
        		this.fnSetGridColunm();

        		var cdAllows = [];
        		for (var i = 0; i < this.dsIncomeSubstList.rowcount; i++) {
        			if(this.dsIncomeSubstList.getColumn(i, "YN_GUBUN") == 1){
        				cdAllows.push(this.dsIncomeSubstList.getColumn(i, "CD_ALLOW"));
        			}
        		}

        		this.dsSelect.clearData();
        		this.dsSelect.addRow();

        		//this.dsSelect.setColumn(0, "SORT", this.cboSort.value);
        		//this.dsSelect.setColumn(0, "TY_SALARY", this.cboTY_SALARY.value);
        		//this.dsSelect.setColumn(0, "FR_YM_SALARY", this.ctclFR_YM_SALARY.form.TextBox.value);
        		//this.dsSelect.setColumn(0, "TO_YM_SALARY", this.ctclTO_YM_SALARY.form.TextBox.value);
        		//this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		//this.dsSelect.setColumn(0, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);
        		//this.dsSelect.setColumn(0, "FR_ID_SABUN", this.ccfFR_ID_SABUN.form.CDTextBox.value);
        		//this.dsSelect.setColumn(0, "TO_ID_SABUN", this.ccfTO_ID_SABUN.form.CDTextBox.value);
        		//this.dsSelect.setColumn(0, "CD_JOBTYPE", this.ccfCD_JOBTYPE.form.CDTextBox.value);
        		//this.dsSelect.setColumn(0, "FR_CD_PAYSTEP", this.ccfFR_CD_PAYSTEP.form.CDTextBox.value);
        		//this.dsSelect.setColumn(0, "TO_CD_PAYSTEP", this.ccfTO_CD_PAYSTEP.form.CDTextBox.value);
        		//this.dsSelect.setColumn(0, "DS_HNAME", this.edtDS_HNAME.value);
        		//this.dsSelect.setColumn(0, "YN_ANNUITY", this.cboYN_ANNUITY.value);
        		//this.dsSelect.setColumn(0, "YN_MEDIC", this.cboYN_MEDIC.value);
        		//this.dsSelect.setColumn(0, "YN_HIRE", this.cboYN_HIRE.value);


        		this.dsSelect.setColumn(0, "ORDER_BY", this.dsSearch.getColumn(0, "ORDER_BY"));
        		this.dsSelect.setColumn(0, "CD_ALLOWS", cdAllows.join(','));
        		this.dsSelect.setColumn(0, "TY_SALARY", this.dsSearch.getColumn(0, "TY_SALARY"));
        		this.dsSelect.setColumn(0, "SN_SALARY", this.dsSearch.getColumn(0, "SN_SALARY"));
        		this.dsSelect.setColumn(0, "FR_SALARY", this.dsSearch.getColumn(0, "FR_SALARY"));
        		this.dsSelect.setColumn(0, "TO_SALARY", this.dsSearch.getColumn(0, "TO_SALARY"));
        		this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsSelect.setColumn(0, "CD_ORG1", this.dsSearch.getColumn(0, "CD_ORG1"));
        		this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        		this.dsSelect.setColumn(0, "CD_JOBTYPE", this.dsSearch.getColumn(0, "CD_JOBTYPE"));
        		this.dsSelect.setColumn(0, "CD_PAYSTEP", this.dsSearch.getColumn(0, "CD_PAYSTEP"));
        		this.dsSelect.setColumn(0, "CD_POSITION", this.dsSearch.getColumn(0, "CD_POSITION"));
        		this.dsSelect.setColumn(0, "YN_ANNUITY", this.dsSearch.getColumn(0, "YN_ANNUITY"));
        		this.dsSelect.setColumn(0, "YN_HIRE", this.dsSearch.getColumn(0, "YN_HIRE"));
        		this.dsSelect.setColumn(0, "YN_HEALTH", this.dsSearch.getColumn(0, "YN_HEALTH"));

        		var strSvcId    = "select";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "select=dsSelect";
        		var outData     = "dsList=select0";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// trabsaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}, 1);
        	*/
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclFR_YM_SALARY.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.this.ctclFR_YM_SALARY.form.TextBox.setFocus();
        		}
        		this.gfnAlert("급여년월 시작월을 입력하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclTO_YM_SALARY.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.this.ctclTO_YM_SALARY.form.TextBox.setFocus();
        		}
        		this.gfnAlert("급여년월 종료월을 입력하세요.");
        		return false;
        	}

        	if (this.ctclFR_YM_SALARY.form.TextBox.value > this.ctclTO_YM_SALARY.form.TextBox.value) {
        		this.fnVaidateCallback = function() {
        			this.this.ctclFR_YM_SALARY.form.TextBox.setFocus();
        		}
        		this.gfnAlert("시작월이 종료월보다 클 수 없습니다.");
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
        this.fnCallback = function(svcID, errorCode, errorMsg, args) {
        	if (svcID == "select") {

        		this.gfnGridAfterSelect(this.dxGrid);

        		if(this.dsList.getRowCount() > 0){
        			this.btnSalaryBaseInfo.set_enable(true);
        		}else{
        			this.btnSalaryBaseInfo.set_enable(false);
        		}
        	} else if(svcID == "selectIncomeSubstList") {
        		//this.FormBtns.Select.click();
        	} else if (svcID == "authform") {
        		if (this.dsAuthForm.rowcount > 0) {

        			// 폼 정보
        			this.objForm.CD_MODULE = this.dsAuthForm.getColumn(0, "CD_MODULE");
        			this.objForm.ID_FORM = this.dsAuthForm.getColumn(0, "ID_FORM");
        			this.objForm.NM_FORM = this.dsAuthForm.getColumn(0, "NM_FORM");
        			this.objForm.ID_GROUP = this.dsAuthForm.getColumn(0, "ID_GROUP");
        			this.objForm.GR_SEARCH = this.dsAuthForm.getColumn(0, "GR_SEARCH");
        			this.objForm.TY_AUTH = this.dsAuthForm.getColumn(0, "TY_AUTH");
        			this.objForm.DS_FORM = this.dsAuthForm.getColumn(0, "DS_FORM");
        			this.objForm.CD_ROLE = this.dsAuthForm.getColumn(0, "CD_ROLE");
        			this.objForm.TY_MENU = this.dsAuthForm.getColumn(0, "TY_MENU");
        			this.objForm.DS_PARAM = this.dsAuthForm.getColumn(0, "DS_PARAM");

        			// 버튼 정보
        			this.objForm.BtnInfo = [];
        			for(var i = 0; i < this.dsBtnInfo.rowcount; i++) {
        				var json = {};
        				json.ID_BUTTON = this.dsBtnInfo.getColumn(i, "ID_BUTTON");
        				json.DS_BUTTON = this.dsBtnInfo.getColumn(i, "DS_BUTTON");
        				json.TY_BUTTON = this.dsBtnInfo.getColumn(i, "TY_BUTTON");
        				json.RM_BUTTON = this.dsBtnInfo.getColumn(i, "RM_BUTTON");
        				json.YN_VISIBLE = this.dsBtnInfo.getColumn(i, "YN_VISIBLE");
        				json.YN_ENABLED = this.dsBtnInfo.getColumn(i, "YN_ENABLED");
        				json.YN_QUERYX = this.dsBtnInfo.getColumn(i, "YN_QUERYX");
        				json.YN_UPDATEBLOCK = this.dsBtnInfo.getColumn(i, "YN_UPDATEBLOCK");
        				json.SN_ORDER = this.dsBtnInfo.getColumn(i, "SN_ORDER");
        				this.objForm.BtnInfo.push(json);
        			}

        			var json = this.gfnArgsToJson(args);
        			if (json.type == "popup" || json.type == "dialog") {
        				if(this.objForm.TY_MENU == "Dialog") {
        					json.type = "dialog";
        				}
        				this.objForm.CD_MODULE = json.cd_module;
        				this.objForm.ID_FORM = json.id_form;
        				this.objForm.POP_WIDTH = this.gfnIsNull(json.width) ? 0: nexacro.toNumber(json.width);
        				this.objForm.POP_HEIGHT = this.gfnIsNull(json.height) ? 0: nexacro.toNumber(json.height);
        				this.objForm.POP_CALLBACK = this.gfnIsNull(json.callback) ? "": json.callback;
        				this.objForm.POP_ARGS = json;

        				this.gfnCallPopup(this.objForm, json.type);
        			}
        			else if (json.type == "ext") {
        				// 외부 다이렉트 화면 접근
        				var func = this.objApp.gvMainFrame.form.lookupFunc(json.callback);
        				if (func != null) {
        					func.call(this.objForm);
        				}
        			}
        			else {
        				this.gfnCallNew(this.objForm);
        			}
        		}
        	} else if (svcID == "combo") {
        		this.cboDS_EMPTYPE.set_index(0);
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;

        		case "ccfCD_DEPT"://부서코드
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        					}
        					this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        					return false;
        			}
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        			break;

        		case "ccfID_SABUN": //사번
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        					}
        					this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        					return false;
        			}
         			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
         			dsUserParam.setColumn(nrow, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);
         			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			break;

        		case "ccfCD_JOBTYPE": //직종
         			dsUserParam.setColumn(nrow, "CD_PREFIX", "EB");
        			break;
        		case "ccfCD_POSITION": //직위
         			dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");
        			break;
        		default:
         	}

         	return true;
        };

        this.codefind_AfterCDTextChanged = function (id, codeFindData){
        	if (id == "ccfCD_CORP") {
        		this.ccfCD_DEPT.form.CDTextBox.set_value("");
        		this.ccfCD_DEPT.form.DSTextBox.set_value("");
        		this.ccfID_SABUN.form.CDTextBox.set_value("");
        		this.ccfID_SABUN.form.DSTextBox.set_value("");
        	}
        	this.fnSearchInit();
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        //  this.divData_objGrid_oncelldblclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        // {
        // 	param ={
        // 				 YM_SALARY:this.ctclYM_BASE.form.TextBox.value,
        // 				 TY_SALARY:this.cboTY_SALARY.value,
        // 				 SN_SALARY:this.cboSN_SALARY.value,
        // 				 CD_CORP:this.ccfCD_CORP.form.CDTextBox.value,
        // 				 DS_CORP:this.ccfCD_CORP.form.DSTextBox.value,
        // 				 ID_SABUN:this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"),
        // 				 DS_HNAME:this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME"),
        // 			};
        //
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_BASEINFO", "급여일반정보", param);
        // };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e.pretext != e.posttext) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        //소득내역/결제내역
        this.fnSelectIncomesubstList = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelectIncomeSubst = new Dataset();
        	this.dsSelectIncomeSubst.clearData();
        	this.dsSelectIncomeSubst.addRow();

        	var strSvcId    = "selectIncomeSubstList";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectIncomeSubstList=dsSelectIncomeSubst";
        	var outData     = "dsIncomeSubstList=selectIncomeSubstList0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc ); // 통신방법 정의 [생략가능]
        };

        //급여기초정보
        this.fnSalaryBaseInfo = function(){
        	var param ={
        				 YM_SALARY:this.divData.form.ctclFR_YM_SALARY.value,
        				 TY_SALARY:this.divData.form.cboTY_SALARY.value,
        				 SN_SALARY:this.divData.form.cboSN_SALARY.value,
        				 CD_CORP:this.ccfCD_CORP.form.CDTextBox.value,
        				 DS_CORP:this.ccfCD_CORP.form.DSTextBox.value,
        				 ID_SABUN:this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"),
        				 DS_HNAME:this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME"),
        				};

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_SALARYBASE", "급여기초정보", param);
        };

         this.fnMenuOpen = function(cd_module, id_form, nm_form, objArg) {
        	var authArg = "";

        	var id_win = cd_module + "#" + id_form;
        	var winid = this.objApp.gdsOpenMenu.lookup("ID_WIN", id_win, "ID_WIN");

        	if (!this.gfnIsNull(winid))
        	{
        		if (this.objApp.gvFormLimit == 1 && this.objApp.gvMdiFrame.form.isActiveFrame(winid) == true)
        		{
        			return false;
        		}
        		else if (this.objApp.gvFormLimit > 1 && this.objApp.gvFormLimit <= this.objApp.gvMdiFrame.form.isActiveFrameCount(winid)) {
        			this.objApp.gvMdiFrame.form.isActiveFrame(winid);
        			alert(this.objApp.gvFormLimit + "개 초과하여 같은 화면을 열수 없습니다");
        			return false;
        		}
        	}

        	//열린메뉴 체크( application.gvMax = 8)
        	if( this.objApp.gvMax <= this.objApp.gdsOpenMenu.getRowCount() ){

        		this.gfnAlert(this.objApp.gvMax +"개 초과하여 화면을 열수 없습니다");
        		return false;
        	}

        	this.objForm = {
        		CD_MODULE: cd_module,
        		ID_FORM: id_form,
        		NM_FORM: nm_form,
        		DS_FORM: "",
        		ID_GROUP: "",
        		GR_SEARCH: "",
        		TY_AUTH: "",
        		CD_ROLE: "",
        		Args : objArg
        	};

        	// 인증정보
        	this.fnAuthForm(this, cd_module, id_form, authArg);
        };

        this.fnAuthForm = function(objForm, cd_module, id_form, strArg)
        {
        	if(strArg == null) strArg = "";
        	this.objForm.CUR_FORM = objForm;

        	var dsUser = this.objApp.gdsUserInfo;
        	this._dsParamAuthForm.clearData();
        	this._dsParamAuthForm.addRow();
        	this._dsParamAuthForm.setColumn(0, "ID_USER", dsUser.getColumn(0, "ID_USER"));
        	this._dsParamAuthForm.setColumn(0, "CD_DEPT", dsUser.getColumn(0, "CD_DEPT"));
        	this._dsParamAuthForm.setColumn(0, "CD_CORP", dsUser.getColumn(0, "CD_CORP"));
        	this._dsParamAuthForm.setColumn(0, "ID_FORM", id_form);
        	this._dsParamAuthForm.setColumn(0, "CD_MODULE", cd_module);

        	this._dsParamBtnInfo.clearData();
        	this._dsParamBtnInfo.addRow();
        	this._dsParamBtnInfo.setColumn(0, "CD_CORP", dsUser.getColumn(0, "CD_CORP"));
        	this._dsParamBtnInfo.setColumn(0, "CD_DEPT", dsUser.getColumn(0, "CD_DEPT"));
        	this._dsParamBtnInfo.setColumn(0, "ID_SABUN", dsUser.getColumn(0, "ID_USER"));
        	this._dsParamBtnInfo.setColumn(0, "CD_MODULE", cd_module);
        	this._dsParamBtnInfo.setColumn(0, "ID_FORM", id_form);

        	var strSvcId    = "authform";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "dsAuthForm=_dsParamAuthForm dsBtnInfo=_dsParamBtnInfo";
        	var outData     = "dsAuthForm=dsAuthForm0 dsBtnInfo=dsBtnInfo0"; //"dsList=dsLogin1 dsList2=dsLogin2";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnSetGridColunm = function (){

        	var objDataSet = this.dsIncomeSubstList;

        	var ncol1 = 0;
        	var ncol2 = 0;
        	var ncol3 = 1;
        	var cols = 0; // merge 되면서 cell index가 조정된다.
        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_QUERYSALARY");




        	for (var i = 0; i < this.dsIncomeSubstList.rowcount; i++) {
        		if(this.dsIncomeSubstList.getColumn(i, "YN_GUBUN") == 1){
        			var GUBUN1 = this.dsIncomeSubstList.getColumn(i, "GUBUN1");
        			var objColinfo = new ColumnInfo();
        			objColinfo.set_type( "INT" );
        			objColinfo.set_size( 256 );

        			this.dsList.addColumn(objDataSet.getColumn(i,"CD_ALLOW"),objColinfo);

        			var gubunCd = ""
        			if(GUBUN1 == "소득"){
        				gubunCd = "S"
        			}else if(GUBUN1 == "공제"){
        				gubunCd = "G"
        			}

        			ncol1 = this.dxGrid.appendContentsCol();
        			this.dxGrid.setFormatColProperty(ncol1, "size", 90);
        			this.dxGrid.setCellProperty("head", ncol1, "text", objDataSet.getColumn(i,"DS_ALLOW"));
        			this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        			this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + gubunCd + objDataSet.getColumn(i,"CD_ALLOW"));
        			// 총합계 추가
        			this.dxGrid.setCellProperty("summ", ncol1, "displaytype", "number");
        			this.dxGrid.setCellProperty("summ", ncol1 , "text", "expr:dataset.getSum('" + gubunCd + objDataSet.getColumn(i,"CD_ALLOW") + "')");

        			var rtn = this.dxGrid.mergeContentsCell("head", 0, ncol1, 0, ncol1+1, ncol1 - cols, false);
        			if(rtn > -1) {
        				this.dxGrid.setCellProperty("head", rtn, "text", objDataSet.getColumn(i,"DS_ALLOW"));
        				cols = cols + 1;
        			}
        		}
        	}

        	this.dxGrid.set_enableredraw(true);
        	this.dsList.set_enableevent(true);
        	//this.setWaitCursor(false);

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.cboTY_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.cboSN_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.cboDS_EMPTYPE.addEventHandler("onitemchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DAU_QUERYSALARY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
