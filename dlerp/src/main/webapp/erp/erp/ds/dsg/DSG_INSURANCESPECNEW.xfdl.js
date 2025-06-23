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
            this.set_titletext("현장보험 MASTER관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"nx_flag\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SANJE_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SANJE_FRSINGO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SANJE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SANJE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SANJE_ENTRY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_SANJE_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SANJE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_KOOKMIN_SINGO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_KOOKMIN_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_KOOKMIN_TO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_KOOKMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_KOOKMIN_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_KOOKMIN_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_KOOKMIN_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"DT_MEDICARE_SINGO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_MEDICARE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_MEDICARE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MEDICARE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MEDICARE_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MEDICARE_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MEDICARE_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GOYONG_FRSINGO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GOYONG_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GOYONG_TO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GOYONG_ENTRY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_GOYONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GOYONG_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GOYONG_TOSINGO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAEJIKGONGJE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TAEJIKGONGJE_DOGUBLEVY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_TAEJIKGONGJE_SINGO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TAEJIKGONGJE_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TAEJIKGONGJE_DANGA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_TAEJIKGONGJE_INVEST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_SAUP_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TAEJIKGONGJE_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TAEJIKGONGJE_BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSGPR_INSURANCESPEC_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DSGPR_INSURANCESPEC_INSERT</Col></Row><Row><Col id=\"SP\">DSGPR_INSURANCESPEC_UPDATE</Col><Col id=\"TARGET\">update</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장/부서 코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_DEPT:0.0","10.0","279","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFDEPTCORP");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData2","0","0","415","260",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("0");
            obj.set_text("고용보험");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staDT_GOYONG_FRSINGO","10","staTitle:5","135","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("2");
            obj.set_text("개시신고일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_enable("true");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staDT_GOYONG_FR","10","staDT_GOYONG_FRSINGO:-1","135","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("1");
            obj.set_text("개시일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_enable("true");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staDT_GOYONG_TO","10","staDT_GOYONG_FR:-1","135","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("3");
            obj.set_text("종료일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staAM_GOYONG_ENTRY","10","staDT_GOYONG_TO:-1","135","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("4");
            obj.set_text("신고금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staNO_GOYONG","10","staAM_GOYONG_ENTRY:-1","135","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("5");
            obj.set_text("사업장관리번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staDT_GOYONG_TOSINGO","10","172","135","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("6");
            obj.set_text("종료신고일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staBgDT_GOYONG_FRSINGO","staDT_GOYONG_FRSINGO:-1","staTitle:5","270","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staBgDT_GOYONG_FR","staDT_GOYONG_FR:-1","staBgDT_GOYONG_FRSINGO:-1","270","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staBgDT_GOYONG_TO","staDT_GOYONG_TO:-1","staBgDT_GOYONG_FR:-1","270","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staBgAM_GOYONG_ENTRY","staAM_GOYONG_ENTRY:-1","staBgDT_GOYONG_TO:-1","270","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staBgNO_GOYONG","staNO_GOYONG:-1","staBgAM_GOYONG_ENTRY:-1","270","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staBgDT_GOYONG_TOSINGO","staDT_GOYONG_TOSINGO:-1","172","270","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_GOYONG_FRSINGO","staDT_GOYONG_FRSINGO:5","staTitle:10","105","20",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_GOYONG_FR","staDT_GOYONG_FR:5","ctclDT_GOYONG_FRSINGO:9","105","20",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_GOYONG_TO","staDT_GOYONG_TO:5","ctclDT_GOYONG_FR:9","105","20",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_GOYONG_ENTRY","staAM_GOYONG_ENTRY:5","ctclDT_GOYONG_TO:9","200","20",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("16");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_GOYONG","staNO_GOYONG:5","ctxtAM_GOYONG_ENTRY:9","200","20",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("17");
            obj.set_value("");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_GOYONG_TOSINGO","staDT_GOYONG_TOSINGO:5","177","105","20",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staDT_GOYONG_TOSINGO00","10","201","135","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staBgDT_GOYONG_TOSINGO00","staDT_GOYONG_TOSINGO00:-1","201","270","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Div("divData3","divData2:10","0","415","260",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("0");
            obj.set_text("퇴직공제부금");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staDT_SAUP_PLAN","10","staTitle:5","135","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("6");
            obj.set_text("공제계약일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staTY_TAEJIKGONGJE_CLOSE","10","staDT_SAUP_PLAN:-1","135","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("3");
            obj.set_text("계약체결여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staDS_TAEJIKGONGJE_BIGO","10","staTY_TAEJIKGONGJE_CLOSE:-1","135","60",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("4");
            obj.set_text("공제미체결사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_TAEJIKGONGJE_DANGA","10","staDS_TAEJIKGONGJE_BIGO:-1","135","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("5");
            obj.set_text("공제부금단가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_TAEJIKGONGJE_DOGUBLEVY","10","staAM_TAEJIKGONGJE_DANGA:-1","135","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("2");
            obj.set_text("총원가반영공제부금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_enable("true");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_TAEJIKGONGJE","10","staAM_TAEJIKGONGJE_DOGUBLEVY:-1","135","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("1");
            obj.set_text("가입번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_enable("true");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgDT_SAUP_PLAN","staDT_SAUP_PLAN:-1","staTitle:5","270","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgDT_TAEJIKGONGJE_SINGO","staTY_TAEJIKGONGJE_CLOSE:-1","staBgDT_SAUP_PLAN:-1","270","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgDT_TAEJIKGONGJE_OPEN","staDS_TAEJIKGONGJE_BIGO:-1","staBgDT_TAEJIKGONGJE_SINGO:-1","270","60",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgAM_TAEJIKGONGJE_DANGA","staAM_TAEJIKGONGJE_DANGA:-1","staBgDT_TAEJIKGONGJE_OPEN:-1","270","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgAM_TAEJIKGONGJE_DOGUBLEVY","staAM_TAEJIKGONGJE_DOGUBLEVY:-1","staBgAM_TAEJIKGONGJE_DANGA:-1","270","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgNO_TAEJIKGONGJE","staNO_TAEJIKGONGJE:-1","staBgAM_TAEJIKGONGJE_DOGUBLEVY:-1","270","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SAUP_PLAN","staDT_SAUP_PLAN:5","staTitle:10","105","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TAEJIKGONGJE_DANGA","staAM_TAEJIKGONGJE_DANGA:5","149","200","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("16");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TAEJIKGONGJE_DOGUBLEVY","staAM_TAEJIKGONGJE_DOGUBLEVY:5","ctxtAM_TAEJIKGONGJE_DANGA:9","200","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_TAEJIKGONGJE","staNO_TAEJIKGONGJE:5","ctxtAM_TAEJIKGONGJE_DOGUBLEVY:9","200","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("13");
            obj.set_value("");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Radio("crdoTY_TAEJIKGONGJE_CLOSE","155","59","140","25",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("17");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_divData3_form_crdoTY_TAEJIKGONGJE_CLOSE_innerdataset = new nexacro.NormalDataset("divData_form_divData3_form_crdoTY_TAEJIKGONGJE_CLOSE_innerdataset", obj);
            divData_form_divData3_form_crdoTY_TAEJIKGONGJE_CLOSE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">체결</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미체결</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divData3_form_crdoTY_TAEJIKGONGJE_CLOSE_innerdataset);
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new TextArea("txtaDS_TAEJIKGONGJE_BIGO","150","90","259","50",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("18");
            obj.set_maxlength("100");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Div("divData4","0","245","415","200",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divData4.form);
            obj.set_taborder("0");
            obj.set_text("국민연금");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divData4.addChild(obj.name, obj);

            obj = new Static("staDT_KOOKMIN_SINGO","10","staTitle:5","135","30",null,null,null,null,null,null,this.divData.form.divData4.form);
            obj.set_taborder("1");
            obj.set_text("신고일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_enable("true");
            this.divData.form.divData4.addChild(obj.name, obj);

            obj = new Static("staDT_KOOKMIN_FR","10","staDT_KOOKMIN_SINGO:-1","135","30",null,null,null,null,null,null,this.divData.form.divData4.form);
            obj.set_taborder("2");
            obj.set_text("적용일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_enable("true");
            this.divData.form.divData4.addChild(obj.name, obj);

            obj = new Static("staDT_KOOKMIN_TO","10","staDT_KOOKMIN_FR:-1","135","30",null,null,null,null,null,null,this.divData.form.divData4.form);
            obj.set_taborder("3");
            obj.set_text("탈퇴일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData4.addChild(obj.name, obj);

            obj = new Static("staNO_KOOKMIN","10","staDT_KOOKMIN_TO:-1","135","30",null,null,null,null,null,null,this.divData.form.divData4.form);
            obj.set_taborder("4");
            obj.set_text("사업장관리번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData4.addChild(obj.name, obj);

            obj = new Static("staBgDT_KOOKMIN_SINGO","staDT_KOOKMIN_SINGO:-1","staTitle:5","270","30",null,null,null,null,null,null,this.divData.form.divData4.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData4.addChild(obj.name, obj);

            obj = new Static("staBgDT_KOOKMIN_FR","staDT_KOOKMIN_FR:-1","staBgDT_KOOKMIN_SINGO:-1","270","30",null,null,null,null,null,null,this.divData.form.divData4.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData4.addChild(obj.name, obj);

            obj = new Static("staBgDT_KOOKMIN_TO","staDT_KOOKMIN_TO:-1","staBgDT_KOOKMIN_FR:-1","270","30",null,null,null,null,null,null,this.divData.form.divData4.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData4.addChild(obj.name, obj);

            obj = new Static("staBgNO_KOOKMIN","staNO_KOOKMIN:-1","staBgDT_KOOKMIN_TO:-1","270","30",null,null,null,null,null,null,this.divData.form.divData4.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_KOOKMIN_SINGO","staDT_KOOKMIN_SINGO:5","staTitle:10","105","20",null,null,null,null,null,null,this.divData.form.divData4.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_KOOKMIN_FR","staDT_KOOKMIN_FR:5","ctclDT_KOOKMIN_SINGO:9","105","20",null,null,null,null,null,null,this.divData.form.divData4.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_KOOKMIN_TO","staDT_KOOKMIN_TO:5","ctclDT_KOOKMIN_FR:9","105","20",null,null,null,null,null,null,this.divData.form.divData4.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData4.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_KOOKMIN","staNO_KOOKMIN:5","ctclDT_KOOKMIN_TO:9","260","20",null,null,null,null,null,null,this.divData.form.divData4.form);
            obj.set_taborder("12");
            obj.set_value("");
            this.divData.form.divData4.addChild(obj.name, obj);

            obj = new Static("staNO_KOOKMIN00","10","staNO_KOOKMIN:-1","135","30",null,null,null,null,null,null,this.divData.form.divData4.form);
            obj.set_taborder("13");
            obj.set_text("기본거래처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData4.addChild(obj.name, obj);

            obj = new Static("staBgNO_KOOKMIN00","staNO_KOOKMIN00:-1","staBgNO_KOOKMIN:-1","270","30",null,null,null,null,null,null,this.divData.form.divData4.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData4.addChild(obj.name, obj);

            obj = new Div("ccfVENDOR1","staNO_KOOKMIN00:5","staBgNO_KOOKMIN:4","260","20",null,null,null,null,null,null,this.divData.form.divData4.form);
            obj.getSetter("CodeFindName").set("DOX_CFVENDOR_DH");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData4.addChild(obj.name, obj);

            obj = new Div("divData5","divData4:10","245","415","200",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divData5.form);
            obj.set_taborder("0");
            obj.set_text("건강보험");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divData5.addChild(obj.name, obj);

            obj = new Static("staDT_MEDICARE_SINGO","10","staTitle:5","135","30",null,null,null,null,null,null,this.divData.form.divData5.form);
            obj.set_taborder("1");
            obj.set_text("신고일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_enable("true");
            this.divData.form.divData5.addChild(obj.name, obj);

            obj = new Static("staDT_MEDICARE_FR","10","staDT_MEDICARE_SINGO:-1","135","30",null,null,null,null,null,null,this.divData.form.divData5.form);
            obj.set_taborder("2");
            obj.set_text("적용일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_enable("true");
            this.divData.form.divData5.addChild(obj.name, obj);

            obj = new Static("staDT_MEDICARE_TO","10","staDT_MEDICARE_FR:-1","135","30",null,null,null,null,null,null,this.divData.form.divData5.form);
            obj.set_taborder("3");
            obj.set_text("탈퇴일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData5.addChild(obj.name, obj);

            obj = new Static("staNO_MEDICARE","10","staDT_MEDICARE_TO:-1","135","30",null,null,null,null,null,null,this.divData.form.divData5.form);
            obj.set_taborder("4");
            obj.set_text("사업장관리번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData5.addChild(obj.name, obj);

            obj = new Static("staBgDT_MEDICARE_SINGO","staDT_MEDICARE_SINGO:-1","staTitle:5","270","30",null,null,null,null,null,null,this.divData.form.divData5.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData5.addChild(obj.name, obj);

            obj = new Static("staBgDT_MEDICARE_FR","staDT_MEDICARE_FR:-1","staBgDT_MEDICARE_SINGO:-1","270","30",null,null,null,null,null,null,this.divData.form.divData5.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData5.addChild(obj.name, obj);

            obj = new Static("staBgDT_MEDICARE_TO","staDT_MEDICARE_TO:-1","staBgDT_MEDICARE_FR:-1","270","30",null,null,null,null,null,null,this.divData.form.divData5.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData5.addChild(obj.name, obj);

            obj = new Static("staBgNO_MEDICARE","staNO_MEDICARE:-1","staBgDT_MEDICARE_TO:-1","270","30",null,null,null,null,null,null,this.divData.form.divData5.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData5.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_MEDICARE_SINGO","staDT_MEDICARE_SINGO:5","staTitle:10","105","20",null,null,null,null,null,null,this.divData.form.divData5.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData5.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_MEDICARE_FR","staDT_MEDICARE_FR:5","ctclDT_MEDICARE_SINGO:9","105","20",null,null,null,null,null,null,this.divData.form.divData5.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData5.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_MEDICARE_TO","staDT_MEDICARE_TO:5","ctclDT_MEDICARE_FR:9","105","20",null,null,null,null,null,null,this.divData.form.divData5.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData5.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_MEDICARE","staNO_MEDICARE:5","ctclDT_MEDICARE_TO:9","260","20",null,null,null,null,null,null,this.divData.form.divData5.form);
            obj.set_taborder("12");
            obj.set_value("");
            this.divData.form.divData5.addChild(obj.name, obj);

            obj = new Static("staNO_KOOKMIN00","10","143","135","30",null,null,null,null,null,null,this.divData.form.divData5.form);
            obj.set_taborder("13");
            obj.set_text("기본거래처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData5.addChild(obj.name, obj);

            obj = new Static("staBgNO_KOOKMIN00","144","143","270","30",null,null,null,null,null,null,this.divData.form.divData5.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData5.addChild(obj.name, obj);

            obj = new Div("ccfVENDOR2","150","148","260","20",null,null,null,null,null,null,this.divData.form.divData5.form);
            obj.getSetter("CodeFindName").set("DOX_CFVENDOR_DH");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData5.addChild(obj.name, obj);

            obj = new Div("divData6","0","430","850","200",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta27_00","144","34","526","149",null,null,null,null,null,null,this.divData.form.divData6.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData6.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form.divData6.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divData6.addChild(obj.name, obj);

            obj = new Div("divFile","140","30","532","155",null,null,null,null,null,null,this.divData.form.divData6.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.form.divData6.addChild(obj.name, obj);

            obj = new Static("staID_FILE_ATTCH","10","34","135","149",null,null,null,null,null,null,this.divData.form.divData6.form);
            obj.set_taborder("3");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData6.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divData4.form.ctclDT_KOOKMIN_SINGO","value","dsList","DT_KOOKMIN_SINGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divData4.form.ctclDT_KOOKMIN_FR","value","dsList","DT_KOOKMIN_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divData4.form.ctclDT_KOOKMIN_TO","value","dsList","DT_KOOKMIN_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divData4.form.ctxtNO_KOOKMIN","value","dsList","NO_KOOKMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData5.form.ctclDT_MEDICARE_SINGO","value","dsList","DT_MEDICARE_SINGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divData5.form.ctclDT_MEDICARE_FR","value","dsList","DT_MEDICARE_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divData5.form.ctclDT_MEDICARE_TO","value","dsList","DT_MEDICARE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divData5.form.ctxtNO_MEDICARE","value","dsList","NO_MEDICARE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divData2.form.ctclDT_GOYONG_FRSINGO","value","dsList","DT_GOYONG_FRSINGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divData2.form.ctclDT_GOYONG_FR","value","dsList","DT_GOYONG_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divData2.form.ctclDT_GOYONG_TO","value","dsList","DT_GOYONG_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divData2.form.ctxtAM_GOYONG_ENTRY","value","dsList","AM_GOYONG_ENTRY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divData2.form.ctxtNO_GOYONG","value","dsList","NO_GOYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divData2.form.ctclDT_GOYONG_TOSINGO","value","dsList","DT_GOYONG_TOSINGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divData3.form.ctxtNO_TAEJIKGONGJE","value","dsList","NO_TAEJIKGONGJE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divData3.form.ctxtAM_TAEJIKGONGJE_DOGUBLEVY","value","dsList","AM_TAEJIKGONGJE_DOGUBLEVY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divData3.form.ctxtAM_TAEJIKGONGJE_DANGA","value","dsList","AM_TAEJIKGONGJE_DANGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divData3.form.ctclDT_SAUP_PLAN","value","dsList","DT_SAUP_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divData4.form.ccfVENDOR1.form.CDTextBox","value","dsList","NO_KOOKMIN_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divData5.form.ccfVENDOR2.form.CDTextBox","value","dsList","NO_MEDICARE_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divData3.form.crdoTY_TAEJIKGONGJE_CLOSE","value","dsList","TY_TAEJIKGONGJE_CLOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divData3.form.txtaDS_TAEJIKGONGJE_BIGO","value","dsList","DS_TAEJIKGONGJE_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divData4.form.ccfVENDOR1.form.DSTextBox","value","dsList","DS_KOOKMIN_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData5.form.ccfVENDOR2.form.DSTextBox","value","dsList","DS_MEDICARE_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmFileManager.xfdl");
        };
        
        // User Script
        this.registerScript("DSG_INSURANCESPECNEW.xfdl", function() {
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

        	// 파일관리자 - 조회전에는 disable
        	//this.divData.form.divData6.form.divFile.form.set_enable(false);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("New", "fnEmployNew");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfVENDOR1 = this.divData.form.divData4.form.ccfVENDOR1;
        	this.ccfVENDOR2 = this.divData.form.divData5.form.ccfVENDOR2;
        	this.divFileMng = this.divData.form.divData6.form.divFile;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfVENDOR1.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfVENDOR2.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("DT_SANJE_FRSINGO", "string");
        	this.dsInsert.addColumn("DT_SANJE_FR", "string");
        	this.dsInsert.addColumn("DT_SANJE_TO", "string");
        	this.dsInsert.addColumn("AM_SANJE_ENTRY", "bigdecimal");
        	this.dsInsert.addColumn("NO_SANJE_SAUP", "string");
        	this.dsInsert.addColumn("NO_SANJE", "string");
        	this.dsInsert.addColumn("DT_KOOKMIN_SINGO", "string");
        	this.dsInsert.addColumn("DT_KOOKMIN_FR", "string");
        	this.dsInsert.addColumn("DT_KOOKMIN_TO", "string");
        	this.dsInsert.addColumn("NO_KOOKMIN", "string");
        	this.dsInsert.addColumn("NO_KOOKMIN_VENDOR", "string");
        	this.dsInsert.addColumn("DS_KOOKMIN_VENDOR", "string");
        	this.dsInsert.addColumn("NO_KOOKMIN_NEW", "string");
        	this.dsInsert.addColumn("DT_MEDICARE_SINGO", "string");
        	this.dsInsert.addColumn("DT_MEDICARE_FR", "string");
        	this.dsInsert.addColumn("DT_MEDICARE_TO", "string");
        	this.dsInsert.addColumn("NO_MEDICARE", "string");
        	this.dsInsert.addColumn("NO_MEDICARE_VENDOR", "string");
        	this.dsInsert.addColumn("DS_MEDICARE_VENDOR", "string");
        	this.dsInsert.addColumn("NO_MEDICARE_NEW", "string");
        	this.dsInsert.addColumn("DT_GOYONG_FRSINGO", "string");
        	this.dsInsert.addColumn("DT_GOYONG_FR", "string");
        	this.dsInsert.addColumn("DT_GOYONG_TO", "string");
        	this.dsInsert.addColumn("AM_GOYONG_ENTRY", "bigdecimal");
        	this.dsInsert.addColumn("NO_GOYONG", "string");
        	this.dsInsert.addColumn("NO_GOYONG_OPEN", "string");
        	this.dsInsert.addColumn("DT_GOYONG_TOSINGO", "string");
        	this.dsInsert.addColumn("NO_TAEJIKGONGJE", "string");
        	this.dsInsert.addColumn("AM_TAEJIKGONGJE_DOGUBLEVY", "bigdecimal");
        	this.dsInsert.addColumn("DT_TAEJIKGONGJE_SINGO", "string");
        	this.dsInsert.addColumn("DT_TAEJIKGONGJE_OPEN", "string");
        	this.dsInsert.addColumn("AM_TAEJIKGONGJE_DANGA", "bigdecimal");
        	this.dsInsert.addColumn("RT_TAEJIKGONGJE_INVEST", "bigdecimal");
        	this.dsInsert.addColumn("DT_SAUP_PLAN", "string");
        	this.dsInsert.addColumn("TY_TAEJIKGONGJE_CLOSE", "string");
        	this.dsInsert.addColumn("DS_TAEJIKGONGJE_BIGO", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("ID_INSERT", "string");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("DT_SANJE_FRSINGO", "string");
        	this.dsUpdate.addColumn("DT_SANJE_FR", "string");
        	this.dsUpdate.addColumn("DT_SANJE_TO", "string");
        	this.dsUpdate.addColumn("AM_SANJE_ENTRY", "bigdecimal");
        	this.dsUpdate.addColumn("NO_SANJE_SAUP", "string");
        	this.dsUpdate.addColumn("NO_SANJE", "string");
        	this.dsUpdate.addColumn("DT_KOOKMIN_SINGO", "string");
        	this.dsUpdate.addColumn("DT_KOOKMIN_FR", "string");
        	this.dsUpdate.addColumn("DT_KOOKMIN_TO", "string");
        	this.dsUpdate.addColumn("NO_KOOKMIN", "string");
        	this.dsUpdate.addColumn("NO_KOOKMIN_VENDOR", "string");
        	this.dsUpdate.addColumn("DS_KOOKMIN_VENDOR", "string");
        	this.dsUpdate.addColumn("NO_KOOKMIN_NEW", "string");
        	this.dsUpdate.addColumn("DT_MEDICARE_SINGO", "string");
        	this.dsUpdate.addColumn("DT_MEDICARE_FR", "string");
        	this.dsUpdate.addColumn("DT_MEDICARE_TO", "string");
        	this.dsUpdate.addColumn("NO_MEDICARE", "string");
        	this.dsUpdate.addColumn("NO_MEDICARE_VENDOR", "string");
        	this.dsUpdate.addColumn("DS_MEDICARE_VENDOR", "string");
        	this.dsUpdate.addColumn("NO_MEDICARE_NEW", "string");
        	this.dsUpdate.addColumn("DT_GOYONG_FRSINGO", "string");
        	this.dsUpdate.addColumn("DT_GOYONG_FR", "string");
        	this.dsUpdate.addColumn("DT_GOYONG_TO", "string");
        	this.dsUpdate.addColumn("AM_GOYONG_ENTRY", "bigdecimal");
        	this.dsUpdate.addColumn("NO_GOYONG", "string");
        	this.dsUpdate.addColumn("NO_GOYONG_OPEN", "string");
        	this.dsUpdate.addColumn("DT_GOYONG_TOSINGO", "string");
        	this.dsUpdate.addColumn("NO_TAEJIKGONGJE", "string");
        	this.dsUpdate.addColumn("AM_TAEJIKGONGJE_DOGUBLEVY", "bigdecimal");
        	this.dsUpdate.addColumn("DT_TAEJIKGONGJE_SINGO", "string");
        	this.dsUpdate.addColumn("DT_TAEJIKGONGJE_OPEN", "string");
        	this.dsUpdate.addColumn("AM_TAEJIKGONGJE_DANGA", "bigdecimal");
        	this.dsUpdate.addColumn("RT_TAEJIKGONGJE_INVEST", "bigdecimal");
        	this.dsUpdate.addColumn("DT_SAUP_PLAN", "string");
        	this.dsUpdate.addColumn("TY_TAEJIKGONGJE_CLOSE", "string");
        	this.dsUpdate.addColumn("DS_TAEJIKGONGJE_BIGO", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	var strSvcId    = "select";
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
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        //this.gfnConfirm("삭제하시겠습니까?", "fnDel_callback");
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	//var flg = this.gfnGetFlag(this.dsList, 0);
        	var flg = this.gfnGetFormStatus(this);
        	var inData      = "";

        	if(flg == "I"){
        			inData = "insert=dsInsert";
        			this.dsInsert.clearData();
        			var nrow = this.dsInsert.addRow();
        			this.dsInsert.setColumn(nrow, "ID_INSERT", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
        			this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsInsert.setColumn(nrow, "DT_SANJE_FRSINGO", this.dsList.getColumn(0, "DT_SANJE_FRSINGO"));
        			this.dsInsert.setColumn(nrow, "DT_SANJE_FR", this.dsList.getColumn(0, "DT_SANJE_FR"));
        			this.dsInsert.setColumn(nrow, "DT_SANJE_TO", this.dsList.getColumn(0, "DT_SANJE_TO"));
        			this.dsInsert.setColumn(nrow, "AM_SANJE_ENTRY", this.dsList.getColumn(0, "AM_SANJE_ENTRY"));
        			this.dsInsert.setColumn(nrow, "NO_SANJE_SAUP", this.dsList.getColumn(0, "NO_SANJE_SAUP"));
        			this.dsInsert.setColumn(nrow, "NO_SANJE", this.dsList.getColumn(0, "NO_SANJE"));
        			this.dsInsert.setColumn(nrow, "DT_KOOKMIN_SINGO", this.dsList.getColumn(0, "DT_KOOKMIN_SINGO"));
        			this.dsInsert.setColumn(nrow, "DT_KOOKMIN_FR", this.dsList.getColumn(0, "DT_KOOKMIN_FR"));
        			this.dsInsert.setColumn(nrow, "DT_KOOKMIN_TO", this.dsList.getColumn(0, "DT_KOOKMIN_TO"));
        			this.dsInsert.setColumn(nrow, "NO_KOOKMIN", this.dsList.getColumn(0, "NO_KOOKMIN"));
        			this.dsInsert.setColumn(nrow, "NO_KOOKMIN_VENDOR", this.dsList.getColumn(0, "NO_KOOKMIN_VENDOR"));
        			this.dsInsert.setColumn(nrow, "DS_KOOKMIN_VENDOR", this.dsList.getColumn(0, "DS_KOOKMIN_VENDOR"));
        			this.dsInsert.setColumn(nrow, "NO_KOOKMIN_NEW", this.dsList.getColumn(0, "NO_KOOKMIN_NEW"));
        			this.dsInsert.setColumn(nrow, "DT_MEDICARE_SINGO", this.dsList.getColumn(0, "DT_MEDICARE_SINGO"));
        			this.dsInsert.setColumn(nrow, "DT_MEDICARE_FR", this.dsList.getColumn(0, "DT_MEDICARE_FR"));
        			this.dsInsert.setColumn(nrow, "DT_MEDICARE_TO", this.dsList.getColumn(0, "DT_MEDICARE_TO"));
        			this.dsInsert.setColumn(nrow, "NO_MEDICARE", this.dsList.getColumn(0, "NO_MEDICARE"));
        			this.dsInsert.setColumn(nrow, "NO_MEDICARE_VENDOR", this.dsList.getColumn(0, "NO_MEDICARE_VENDOR"));
        			this.dsInsert.setColumn(nrow, "DS_MEDICARE_VENDOR", this.dsList.getColumn(0, "DS_MEDICARE_VENDOR"));
        			this.dsInsert.setColumn(nrow, "NO_MEDICARE_NEW", this.dsList.getColumn(0, "NO_MEDICARE_NEW"));
        			this.dsInsert.setColumn(nrow, "DT_GOYONG_FRSINGO", this.dsList.getColumn(0, "DT_GOYONG_FRSINGO"));
        			this.dsInsert.setColumn(nrow, "DT_GOYONG_FR", this.dsList.getColumn(0, "DT_GOYONG_FR"));
        			this.dsInsert.setColumn(nrow, "DT_GOYONG_TO", this.dsList.getColumn(0, "DT_GOYONG_TO"));
        			this.dsInsert.setColumn(nrow, "AM_GOYONG_ENTRY", this.dsList.getColumn(0, "AM_GOYONG_ENTRY"));
        			this.dsInsert.setColumn(nrow, "NO_GOYONG", this.dsList.getColumn(0, "NO_GOYONG"));
        			this.dsInsert.setColumn(nrow, "NO_GOYONG_OPEN", this.dsList.getColumn(0, "NO_GOYONG_OPEN"));
        			this.dsInsert.setColumn(nrow, "DT_GOYONG_TOSINGO", this.dsList.getColumn(0, "DT_GOYONG_TOSINGO"));
        			this.dsInsert.setColumn(nrow, "NO_TAEJIKGONGJE", this.dsList.getColumn(0, "NO_TAEJIKGONGJE"));
        			this.dsInsert.setColumn(nrow, "AM_TAEJIKGONGJE_DOGUBLEVY", this.dsList.getColumn(0, "AM_TAEJIKGONGJE_DOGUBLEVY"));
        			this.dsInsert.setColumn(nrow, "DT_TAEJIKGONGJE_SINGO", this.dsList.getColumn(0, "DT_TAEJIKGONGJE_SINGO"));
        			this.dsInsert.setColumn(nrow, "DT_TAEJIKGONGJE_OPEN", this.dsList.getColumn(0, "DT_TAEJIKGONGJE_OPEN"));
        			this.dsInsert.setColumn(nrow, "AM_TAEJIKGONGJE_DANGA", this.dsList.getColumn(0, "AM_TAEJIKGONGJE_DANGA"));
        			this.dsInsert.setColumn(nrow, "RT_TAEJIKGONGJE_INVEST", this.dsList.getColumn(0, "RT_TAEJIKGONGJE_INVEST"));
        			this.dsInsert.setColumn(nrow, "DT_SAUP_PLAN", this.dsList.getColumn(0, "DT_SAUP_PLAN"));
        			this.dsInsert.setColumn(nrow, "TY_TAEJIKGONGJE_CLOSE", this.dsList.getColumn(0, "TY_TAEJIKGONGJE_CLOSE"));
        			this.dsInsert.setColumn(nrow, "DS_TAEJIKGONGJE_BIGO", this.dsList.getColumn(0, "DS_TAEJIKGONGJE_BIGO"));

        	}else if(flg == "U"){
        			inData = "update=dsUpdate";
        			var nrow = this.dsUpdate.addRow();
        			this.dsUpdate.setColumn(nrow, "ID_INSERT", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
        			this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsUpdate.setColumn(nrow, "DT_SANJE_FRSINGO", this.dsList.getColumn(0, "DT_SANJE_FRSINGO"));
        			this.dsUpdate.setColumn(nrow, "DT_SANJE_FR", this.dsList.getColumn(0, "DT_SANJE_FR"));
        			this.dsUpdate.setColumn(nrow, "DT_SANJE_TO", this.dsList.getColumn(0, "DT_SANJE_TO"));
        			this.dsUpdate.setColumn(nrow, "AM_SANJE_ENTRY", this.dsList.getColumn(0, "AM_SANJE_ENTRY"));
        			this.dsUpdate.setColumn(nrow, "NO_SANJE_SAUP", this.dsList.getColumn(0, "NO_SANJE_SAUP"));
        			this.dsUpdate.setColumn(nrow, "NO_SANJE", this.dsList.getColumn(0, "NO_SANJE"));
        			this.dsUpdate.setColumn(nrow, "DT_KOOKMIN_SINGO", this.dsList.getColumn(0, "DT_KOOKMIN_SINGO"));
        			this.dsUpdate.setColumn(nrow, "DT_KOOKMIN_FR", this.dsList.getColumn(0, "DT_KOOKMIN_FR"));
        			this.dsUpdate.setColumn(nrow, "DT_KOOKMIN_TO", this.dsList.getColumn(0, "DT_KOOKMIN_TO"));
        			this.dsUpdate.setColumn(nrow, "NO_KOOKMIN", this.dsList.getColumn(0, "NO_KOOKMIN"));
        			this.dsUpdate.setColumn(nrow, "NO_KOOKMIN_VENDOR", this.dsList.getColumn(0, "NO_KOOKMIN_VENDOR"));
        			this.dsUpdate.setColumn(nrow, "DS_KOOKMIN_VENDOR", this.dsList.getColumn(0, "DS_KOOKMIN_VENDOR"));
        			this.dsUpdate.setColumn(nrow, "NO_KOOKMIN_NEW", this.dsList.getColumn(0, "NO_KOOKMIN_NEW"));
        			this.dsUpdate.setColumn(nrow, "DT_MEDICARE_SINGO", this.dsList.getColumn(0, "DT_MEDICARE_SINGO"));
        			this.dsUpdate.setColumn(nrow, "DT_MEDICARE_FR", this.dsList.getColumn(0, "DT_MEDICARE_FR"));
        			this.dsUpdate.setColumn(nrow, "DT_MEDICARE_TO", this.dsList.getColumn(0, "DT_MEDICARE_TO"));
        			this.dsUpdate.setColumn(nrow, "NO_MEDICARE", this.dsList.getColumn(0, "NO_MEDICARE"));
        			this.dsUpdate.setColumn(nrow, "NO_MEDICARE_VENDOR", this.dsList.getColumn(0, "NO_MEDICARE_VENDOR"));
        			this.dsUpdate.setColumn(nrow, "DS_MEDICARE_VENDOR", this.dsList.getColumn(0, "DS_MEDICARE_VENDOR"));
        			this.dsUpdate.setColumn(nrow, "NO_MEDICARE_NEW", this.dsList.getColumn(0, "NO_MEDICARE_NEW"));
        			this.dsUpdate.setColumn(nrow, "DT_GOYONG_FRSINGO", this.dsList.getColumn(0, "DT_GOYONG_FRSINGO"));
        			this.dsUpdate.setColumn(nrow, "DT_GOYONG_FR", this.dsList.getColumn(0, "DT_GOYONG_FR"));
        			this.dsUpdate.setColumn(nrow, "DT_GOYONG_TO", this.dsList.getColumn(0, "DT_GOYONG_TO"));
        			this.dsUpdate.setColumn(nrow, "AM_GOYONG_ENTRY", this.dsList.getColumn(0, "AM_GOYONG_ENTRY"));
        			this.dsUpdate.setColumn(nrow, "NO_GOYONG", this.dsList.getColumn(0, "NO_GOYONG"));
        			this.dsUpdate.setColumn(nrow, "NO_GOYONG_OPEN", this.dsList.getColumn(0, "NO_GOYONG_OPEN"));
        			this.dsUpdate.setColumn(nrow, "DT_GOYONG_TOSINGO", this.dsList.getColumn(0, "DT_GOYONG_TOSINGO"));
        			this.dsUpdate.setColumn(nrow, "NO_TAEJIKGONGJE", this.dsList.getColumn(0, "NO_TAEJIKGONGJE"));
        			this.dsUpdate.setColumn(nrow, "AM_TAEJIKGONGJE_DOGUBLEVY", this.dsList.getColumn(0, "AM_TAEJIKGONGJE_DOGUBLEVY"));
        			this.dsUpdate.setColumn(nrow, "DT_TAEJIKGONGJE_SINGO", this.dsList.getColumn(0, "DT_TAEJIKGONGJE_SINGO"));
        			this.dsUpdate.setColumn(nrow, "DT_TAEJIKGONGJE_OPEN", this.dsList.getColumn(0, "DT_TAEJIKGONGJE_OPEN"));
        			this.dsUpdate.setColumn(nrow, "AM_TAEJIKGONGJE_DANGA", this.dsList.getColumn(0, "AM_TAEJIKGONGJE_DANGA"));
        			this.dsUpdate.setColumn(nrow, "RT_TAEJIKGONGJE_INVEST", this.dsList.getColumn(0, "RT_TAEJIKGONGJE_INVEST"));
        			this.dsUpdate.setColumn(nrow, "DT_SAUP_PLAN", this.dsList.getColumn(0, "DT_SAUP_PLAN"));
        			this.dsUpdate.setColumn(nrow, "TY_TAEJIKGONGJE_CLOSE", this.dsList.getColumn(0, "TY_TAEJIKGONGJE_CLOSE"));
        			this.dsUpdate.setColumn(nrow, "DS_TAEJIKGONGJE_BIGO", this.dsList.getColumn(0, "DS_TAEJIKGONGJE_BIGO"));
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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}

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
        	//trace(this.dsList.saveXML());
        	if (svcID == "select") {

        		if(this.dsList.rowcount > 0){

        		}else{
        			this.dsList.addRow();
        			this.gfnSetFormStatus(this, "I");
        		}

        		// 현장코드가 키가 될수 있기에 이화면의 경우는 입력유무 상관없이 첨부파일을 그대로 사용가능하나
        		// 아닌경우는 입력이 우선되고 키가 있는 상태에서 첨부파일을 올릴수 있도록 처리해야한다.
        		//this.divData.form.divData6.form.divFile.form.set_enable(true);

        		// 첨부파일
        		var cd_site = this.dsSearch.getColumn(0, "CD_SITE");
        		var fileManager = {};
        		fileManager.CD_GUBUN = "DS02";
        		fileManager.CD_DIR = [ cd_site ];
        		if(this.FormInfo.TY_AUTH == "R") {
        			fileManager.IS_READONLY = true;
        		} else {
        			fileManager.IS_READONLY = false;
        		}

        		// div FileManager 셋팅
        		this.divFileMng.form.setFileManager(fileManager);

        	}else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	if(id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
        	} else if (id == "ccfVENDOR1") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_SITE", "");
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "");
        	} else if (id == "ccfVENDOR2") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_SITE", "");
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "");
        	}
        	return true;
         }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.dsList.clearData();

        		// 파일관리자
        		//this.divData.form.divData6.form.divFile.form.set_enable(false);
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {

        		if(this.gfnGetFormStatus(this) != "I"){
        		//if(this.dsList.getColumn(0, "nx_flag") != "I"){
        			//this.dsList.setColumn(0, "nx_flag", "U");
        			this.gfnSetFormStatus(this, "U");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divData2.form.staDT_GOYONG_FRSINGO.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData2.form.staDT_GOYONG_FR.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData3.form.staAM_TAEJIKGONGJE_DOGUBLEVY.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData3.form.staNO_TAEJIKGONGJE.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData4.form.staDT_KOOKMIN_SINGO.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData4.form.staDT_KOOKMIN_FR.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData5.form.staDT_MEDICARE_SINGO.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData5.form.staDT_MEDICARE_FR.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSG_INSURANCESPECNEW.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
