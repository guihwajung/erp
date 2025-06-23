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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_PSIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_EXCLUSIVE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_APPLYUNION\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_SUNSU\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUNSU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_PEXCLUSIVE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LIVING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_PLIVING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_SUPPLY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_PSUPPLY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_ETC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_PETC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_BASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_PBASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_EARTH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_PEARTH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_CONTRACT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_PCONTRACT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_SAEDAE\" type=\"INT\" size=\"256\"/><Column id=\"DS_COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_SERVICE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_PSERVICE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_TOTAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_PTOTAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_PARKING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_PPARKING\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRAPR_SIZEINFOMANAGE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRAPR_SIZEINFO_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRAPR_SIZEINFO_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DRAPR_SIZEINFO_DELETE</Col></Row><Row><Col id=\"TARGET\">update1</Col><Col id=\"SP\">DRAPR_SIZEINFODETAIL_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("2");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","380","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSZ_EXCLUSIVE","0","staTitle:5","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("전용면적(A)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSZ_LIVING","0","staSZ_EXCLUSIVE:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_text("주거공용면적(B)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSZ_SUPPLY","0","staSZ_LIVING:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("공급면적(A+B)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSZ_EARTH","0","staSZ_SUPPLY:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_text("대지면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSZ_TOTAL","0","staSZ_EARTH:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_text("총면적(A+B+C+D+E+F)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgSZ_EXCLUSIVE","staSZ_EXCLUSIVE:-1","staTitle:5","300","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgSZ_LIVING","staSZ_LIVING:-1","staBgSZ_EXCLUSIVE:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgSZ_SUPPLY","staSZ_SUPPLY:-1","staBgSZ_LIVING:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgSZ_EARTH","staSZ_EARTH:-1","staBgSZ_SUPPLY:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgSZ_TOTAL","staSZ_TOTAL:-1","staBgSZ_EARTH:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSZ_ETC","staBgSZ_EXCLUSIVE:-1","staTitle:5","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_text("기타공용면적(C)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSZ_BASE","staBgSZ_LIVING:-1","staSZ_EXCLUSIVE:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_text("초과지하면적(D)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSZ_CONTRACT","staBgSZ_SUPPLY:-1","staSZ_LIVING:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_text("계약면적(A+B+C+F)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSZ_SERVICE","staBgSZ_EARTH:-1","staSZ_SUPPLY:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_text("서비스면적(E)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSZ_PARKING","staBgSZ_TOTAL:-1","staSZ_EARTH:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_text("지하주차장(F)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgSZ_ETC","staSZ_ETC:-1","staTitle:5","300","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgSZ_BASE","staSZ_BASE:-1","staBgSZ_ETC:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgSZ_CONTRACT","staSZ_CONTRACT:-1","staBgSZ_BASE:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgSZ_SERVICE","staSZ_SERVICE:-1","staBgSZ_CONTRACT:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgSZ_PARKING","staSZ_PARKING:-1","staBgSZ_SERVICE:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staNO_SAEDAE","0","staSZ_TOTAL:20","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("21");
            obj.set_text("세대수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staNO_COLOR","0","staNO_SAEDAE:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("22");
            obj.set_text("Color 지정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgNO_SAEDAE","staNO_SAEDAE:-1","staSZ_TOTAL:20","749","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgNO_COLOR","staNO_COLOR:-1","staBgNO_SAEDAE:-1","749","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_EXCLUSIVE","staSZ_EXCLUSIVE:5","staTitle:10","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("25");
            obj.set_value("");
            obj.set_format("#,0.0000");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staMETER00","ctxtSZ_EXCLUSIVE:3","staTitle:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("26");
            obj.set_text("m²");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_PEXCLUSIVE","staMETER00:3","staTitle:10","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("27");
            obj.set_value("");
            obj.set_format("#,0.0000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSQUARE00","ctxtSZ_PEXCLUSIVE:3","staTitle:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            obj.set_text("평");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_ETC","staSZ_ETC:5","staTitle:10","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("29");
            obj.set_value("");
            obj.set_format("#,0.0000");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staMETER01","ctxtSZ_ETC:3","staTitle:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("30");
            obj.set_text("m²");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_PETC","staMETER01:3","staTitle:10","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("31");
            obj.set_value("");
            obj.set_format("#,0.0000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSQUARE01","ctxtSZ_PETC:3","staTitle:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("32");
            obj.set_text("평");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_LIVING","staSZ_LIVING:5","ctxtSZ_EXCLUSIVE:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("33");
            obj.set_value("");
            obj.set_format("#,0.0000");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staMETER02","ctxtSZ_LIVING:3","ctxtSZ_EXCLUSIVE:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("34");
            obj.set_text("m²");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_PLIVING","staMETER02:3","ctxtSZ_EXCLUSIVE:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("35");
            obj.set_value("");
            obj.set_format("#,0.0000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSQUARE02","ctxtSZ_PLIVING:3","ctxtSZ_EXCLUSIVE:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("36");
            obj.set_text("평");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_BASE","staSZ_BASE:5","ctxtSZ_ETC:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("37");
            obj.set_value("");
            obj.set_format("#,0.0000");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staMETER03","ctxtSZ_BASE:3","ctxtSZ_ETC:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("38");
            obj.set_text("m²");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_PBASE","staMETER03:3","ctxtSZ_ETC:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("39");
            obj.set_value("");
            obj.set_format("#,0.0000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSQUARE03","ctxtSZ_PBASE:3","ctxtSZ_ETC:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("40");
            obj.set_text("평");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SUPPLY","staSZ_SUPPLY:5","ctxtSZ_LIVING:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("41");
            obj.set_value("");
            obj.set_format("#,0.0000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staMETER04","ctxtSZ_SUPPLY:3","ctxtSZ_LIVING:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("42");
            obj.set_text("m²");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_PSUPPLY","staMETER04:3","ctxtSZ_LIVING:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_format("#,0.0000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSQUARE04","ctxtSZ_PLIVING:3","ctxtSZ_LIVING:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("44");
            obj.set_text("평");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_CONTRACT","staSZ_CONTRACT:5","ctxtSZ_BASE:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("45");
            obj.set_value("");
            obj.set_format("#,0.0000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staMETER05","ctxtSZ_CONTRACT:3","ctxtSZ_BASE:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("46");
            obj.set_text("m²");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_PCONTRACT","staMETER05:3","ctxtSZ_BASE:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("47");
            obj.set_value("");
            obj.set_format("#,0.0000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSQUARE05","ctxtSZ_PCONTRACT:3","ctxtSZ_BASE:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("48");
            obj.set_text("평");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_EARTH","staSZ_EARTH:5","ctxtSZ_SUPPLY:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("49");
            obj.set_value("");
            obj.set_format("#,0.0000");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staMETER06","ctxtSZ_EARTH:3","ctxtSZ_SUPPLY:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("50");
            obj.set_text("m²");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_PEARTH","staMETER06:3","ctxtSZ_SUPPLY:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("51");
            obj.set_value("");
            obj.set_format("#,0.0000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSQUARE06","ctxtSZ_PLIVING:3","ctxtSZ_SUPPLY:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("52");
            obj.set_text("평");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SERVICE","staSZ_SERVICE:5","ctxtSZ_CONTRACT:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("53");
            obj.set_value("");
            obj.set_format("#,0.0000");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staMETER07","ctxtSZ_SERVICE:3","ctxtSZ_CONTRACT:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("54");
            obj.set_text("m²");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_PSERVICE","staMETER07:3","ctxtSZ_CONTRACT:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("55");
            obj.set_value("");
            obj.set_format("#,0.0000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSQUARE07","ctxtSZ_PSERVICE:3","ctxtSZ_CONTRACT:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("56");
            obj.set_text("평");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_TOTAL","staSZ_TOTAL:5","ctxtSZ_EARTH:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("57");
            obj.set_value("");
            obj.set_format("#,0.0000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staMETER08","ctxtSZ_TOTAL:3","ctxtSZ_EARTH:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("58");
            obj.set_text("m²");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_PTOTAL","staMETER08:3","ctxtSZ_EARTH:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("59");
            obj.set_value("");
            obj.set_format("#,0.0000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSQUARE08","ctxtSZ_PLIVING:3","ctxtSZ_EARTH:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("60");
            obj.set_text("평");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_PARKING","staSZ_PARKING:5","ctxtSZ_SERVICE:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("61");
            obj.set_value("");
            obj.set_format("#,0.0000");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staMETER09","ctxtSZ_PARKING:3","ctxtSZ_SERVICE:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("62");
            obj.set_text("m²");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_PPARKING","staMETER09:3","ctxtSZ_SERVICE:9","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("63");
            obj.set_value("");
            obj.set_format("#,0.0000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staSQUARE09","ctxtSZ_PSERVICE:3","ctxtSZ_SERVICE:5","20","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("64");
            obj.set_text("평");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_SAEDAE","staNO_SAEDAE:5","ctxtSZ_TOTAL:29","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("65");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("ctxtNO_COLOR","staNO_COLOR:5","ctxtNO_SAEDAE:9","90","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("66");
            obj.set_url("cmm::cmmColorPicker.xfdl");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataRight.form.ctxtSZ_EXCLUSIVE","value","dsList","SZ_EXCLUSIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataRight.form.ctxtSZ_PEXCLUSIVE","value","dsList","SZ_PEXCLUSIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataRight.form.ctxtSZ_LIVING","value","dsList","SZ_LIVING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataRight.form.ctxtSZ_PLIVING","value","dsList","SZ_PLIVING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.ctxtSZ_SUPPLY","value","dsList","SZ_SUPPLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.ctxtSZ_PSUPPLY","value","dsList","SZ_PSUPPLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.ctxtSZ_EARTH","value","dsList","SZ_EARTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.ctxtSZ_PEARTH","value","dsList","SZ_PEARTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.ctxtSZ_TOTAL","value","dsList","SZ_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.ctxtSZ_PTOTAL","value","dsList","SZ_PTOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.ctxtSZ_ETC","value","dsList","SZ_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.ctxtSZ_PETC","value","dsList","SZ_PETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.ctxtSZ_BASE","value","dsList","SZ_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.ctxtSZ_PBASE","value","dsList","SZ_PBASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.ctxtSZ_CONTRACT","value","dsList","SZ_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.ctxtSZ_PCONTRACT","value","dsList","SZ_PCONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataRight.form.ctxtSZ_SERVICE","value","dsList","SZ_SERVICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataRight.form.ctxtSZ_PSERVICE","value","dsList","SZ_PSERVICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataRight.form.ctxtSZ_PARKING","value","dsList","SZ_PARKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataRight.form.ctxtSZ_PPARKING","value","dsList","SZ_PPARKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.ctxtNO_SAEDAE","value","dsList","NO_SAEDAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.ctxtNO_COLOR.form.TextBox","value","dsList","DS_COLOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmColorPicker.xfdl");
        };
        
        // User Script
        this.registerScript("DRA_INSERTSIZEINFOMANAGE.xfdl", function() {
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

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnExcelUpload = this.gfnFormButtonAdd("btnExcelUpload", "fnExcelUpload");
        	this.btnOption = this.gfnFormButtonAdd("btnOption", "fnOption");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.divSearch.form.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRA_INSERTSIZEINFO");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_SIZE", "bigdecimal");
        	this.dsInsert.addColumn("NO_PSIZE", "bigdecimal");
        	this.dsInsert.addColumn("SZ_EXCLUSIVE", "bigdecimal");
        	this.dsInsert.addColumn("TY_TYPE", "string");
        	this.dsInsert.addColumn("YN_TAX", "string");
        	this.dsInsert.addColumn("AM_APPLYUNION", "bigdecimal");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("YN_SUNSU", "string");
        	this.dsInsert.addColumn("AM_SUNSU", "bigdecimal");
        	this.dsInsert.addColumn("YN_RETURN", "string");
        	this.dsInsert.addColumn("DT_RETURN", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_SIZE", "bigdecimal");
        	this.dsUpdate.addColumn("SZ_EXCLUSIVE", "bigdecimal");
        	this.dsUpdate.addColumn("TY_TYPE", "string");
        	this.dsUpdate.addColumn("YN_TAX", "string");
        	this.dsUpdate.addColumn("AM_APPLYUNION", "bigdecimal");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("YN_SUNSU", "string");
        	this.dsUpdate.addColumn("AM_SUNSU", "bigdecimal");
        	this.dsUpdate.addColumn("YN_RETURN", "string");
        	this.dsUpdate.addColumn("DT_RETURN", "string");

        	this.dsUpdate1 = new Dataset();
        	this.dsUpdate1.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate1.addColumn("TY_GUBUN", "string");
        	this.dsUpdate1.addColumn("NO_CHASU", "string");
        	this.dsUpdate1.addColumn("NO_SIZE", "bigdecimal");
        	this.dsUpdate1.addColumn("TY_TYPE", "string");
        	this.dsUpdate1.addColumn("SZ_EXCLUSIVE", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_PEXCLUSIVE", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_LIVING", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_PLIVING", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_SUPPLY", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_PSUPPLY", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_ETC", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_PETC", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_BASE", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_PBASE", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_EARTH", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_PEARTH", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_CONTRACT", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_PCONTRACT", "bigdecimal");
        	this.dsUpdate1.addColumn("NO_SAEDAE", "int");
        	this.dsUpdate1.addColumn("DS_COLOR", "string");
        	this.dsUpdate1.addColumn("SZ_SERVICE", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_PSERVICE", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_TOTAL", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_PTOTAL", "bigdecimal");
        	this.dsUpdate1.addColumn("ID_UPDATE", "string");
        	this.dsUpdate1.addColumn("SZ_PARKING", "bigdecimal");
        	this.dsUpdate1.addColumn("SZ_PPARKING", "bigdecimal");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_SIZE", "bigdecimal");
        	this.dsDelete.addColumn("TY_TYPE", "string");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));

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
        	this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsUpdate1.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsInsert.setColumn(nrow, "NO_SIZE", this.dsList.getColumn(i, "NO_SIZE"));
        				this.dsInsert.setColumn(nrow, "NO_PSIZE", this.dsList.getColumn(i, "NO_PSIZE"));
        				this.dsInsert.setColumn(nrow, "SZ_EXCLUSIVE", this.dsList.getColumn(i, "SZ_EXCLUSIVE"));
        				this.dsInsert.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(i, "TY_TYPE"));
        				this.dsInsert.setColumn(nrow, "YN_TAX", this.dsList.getColumn(i, "YN_TAX"));
        				this.dsInsert.setColumn(nrow, "AM_APPLYUNION", this.dsList.getColumn(i, "AM_APPLYUNION"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "YN_SUNSU", this.dsList.getColumn(i, "YN_SUNSU"));
        				this.dsInsert.setColumn(nrow, "AM_SUNSU", this.dsList.getColumn(i, "AM_SUNSU"));
        				this.dsInsert.setColumn(nrow, "YN_RETURN", this.dsList.getColumn(i, "YN_RETURN"));
        				this.dsInsert.setColumn(nrow, "DT_RETURN", this.dsList.getColumn(i, "DT_RETURN"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsUpdate.setColumn(nrow, "NO_SIZE", this.dsList.getColumn(i, "NO_SIZE"));
        				this.dsUpdate.setColumn(nrow, "SZ_EXCLUSIVE", this.dsList.getColumn(i, "SZ_EXCLUSIVE"));
        				this.dsUpdate.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(i, "TY_TYPE"));
        				this.dsUpdate.setColumn(nrow, "YN_TAX", this.dsList.getColumn(i, "YN_TAX"));
        				this.dsUpdate.setColumn(nrow, "AM_APPLYUNION", this.dsList.getColumn(i, "AM_APPLYUNION"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "YN_SUNSU", this.dsList.getColumn(i, "YN_SUNSU"));
        				this.dsUpdate.setColumn(nrow, "AM_SUNSU", this.dsList.getColumn(i, "AM_SUNSU"));
        				this.dsUpdate.setColumn(nrow, "YN_RETURN", this.dsList.getColumn(i, "YN_RETURN"));
        				this.dsUpdate.setColumn(nrow, "DT_RETURN", this.dsList.getColumn(i, "DT_RETURN"));

        				nrow = this.dsUpdate1.addRow();
        				this.dsUpdate1.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsUpdate1.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsUpdate1.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsUpdate1.setColumn(nrow, "NO_SIZE", this.dsList.getColumn(i, "NO_SIZE"));
        				this.dsUpdate1.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(i, "TY_TYPE"));
        				this.dsUpdate1.setColumn(nrow, "SZ_EXCLUSIVE", this.dsList.getColumn(i, "SZ_EXCLUSIVE"));
        				this.dsUpdate1.setColumn(nrow, "SZ_PEXCLUSIVE", this.dsList.getColumn(i, "SZ_PEXCLUSIVE"));
        				this.dsUpdate1.setColumn(nrow, "SZ_LIVING", this.dsList.getColumn(i, "SZ_LIVING"));
        				this.dsUpdate1.setColumn(nrow, "SZ_PLIVING", this.dsList.getColumn(i, "SZ_PLIVING"));
        				this.dsUpdate1.setColumn(nrow, "SZ_SUPPLY", this.dsList.getColumn(i, "SZ_SUPPLY"));
        				this.dsUpdate1.setColumn(nrow, "SZ_PSUPPLY", this.dsList.getColumn(i, "SZ_PSUPPLY"));
        				this.dsUpdate1.setColumn(nrow, "SZ_ETC", this.dsList.getColumn(i, "SZ_ETC"));
        				this.dsUpdate1.setColumn(nrow, "SZ_PETC", this.dsList.getColumn(i, "SZ_PETC"));
        				this.dsUpdate1.setColumn(nrow, "SZ_BASE", this.dsList.getColumn(i, "SZ_BASE"));
        				this.dsUpdate1.setColumn(nrow, "SZ_PBASE", this.dsList.getColumn(i, "SZ_PBASE"));
        				this.dsUpdate1.setColumn(nrow, "SZ_EARTH", this.dsList.getColumn(i, "SZ_EARTH"));
        				this.dsUpdate1.setColumn(nrow, "SZ_PEARTH", this.dsList.getColumn(i, "SZ_PEARTH"));
        				this.dsUpdate1.setColumn(nrow, "SZ_CONTRACT", this.dsList.getColumn(i, "SZ_CONTRACT"));
        				this.dsUpdate1.setColumn(nrow, "SZ_PCONTRACT", this.dsList.getColumn(i, "SZ_PCONTRACT"));
        				this.dsUpdate1.setColumn(nrow, "NO_SAEDAE", this.dsList.getColumn(i, "NO_SAEDAE"));
        				this.dsUpdate1.setColumn(nrow, "DS_COLOR", this.dsList.getColumn(i, "DS_COLOR"));
        				this.dsUpdate1.setColumn(nrow, "SZ_SERVICE", this.dsList.getColumn(i, "SZ_SERVICE"));
        				this.dsUpdate1.setColumn(nrow, "SZ_PSERVICE", this.dsList.getColumn(i, "SZ_PSERVICE"));
        				this.dsUpdate1.setColumn(nrow, "SZ_TOTAL", this.dsList.getColumn(i, "SZ_TOTAL"));
        				this.dsUpdate1.setColumn(nrow, "SZ_PTOTAL", this.dsList.getColumn(i, "SZ_PTOTAL"));
        				this.dsUpdate1.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				this.dsUpdate1.setColumn(nrow, "SZ_PARKING", this.dsList.getColumn(i, "SZ_PARKING"));
        				this.dsUpdate1.setColumn(nrow, "SZ_PPARKING", this.dsList.getColumn(i, "SZ_PPARKING"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsDelete.setColumn(nrow, "NO_SIZE", this.dsList.getColumn(i, "NO_SIZE"));
        				this.dsDelete.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(i, "TY_TYPE"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsUpdate1.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate update1=dsUpdate1 delete=dsDelete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

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

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.divData.form.divDataRight.form.ctxtNO_COLOR.form.fnColorPickerLoad();
        	}
        	else if(svcID == "save") {
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
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}

        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row))
        	{
        		var nrow = this.dsList.rowposition;
        		if(nrow > -1)
        		{
        			var bool = this.gfnGetFlag(this.dsList, nrow) == "I" ? true : false;
        			this.fnSetReadOnly(bool);

        			if(bool == false)
        			{
        				var no_size = this.dsList.getColumn(nrow, "NO_SIZE");
        				var ty_type = this.dsList.getColumn(nrow, "TY_TYPE");
        				var yn_tax = this.dsList.getColumn(nrow, "YN_TAX") == "Y" ? "과세" : "비과세";

        				var title = this.dsSearch.getColumn(0, "DS_ACNTUNIT")
        						  + " " + no_size  + "m² ("
        						  + this.fnMeter(no_size) + "평) "
        						  + ty_type + "형 " + yn_tax;

        				this.divData.form.divDataRight.form.staTitle.set_text(title);
        			}
        		}

        		if(e.oldrow != -1)
        		{
        			this.divData.form.divDataRight.form.ctxtNO_COLOR.form.fnColorPickerLoad();
        		}
        		obj.oldrow = -1;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "SZ_EXCLUSIVE")
        		{
        			this.dsList.setColumn(this.dsList.rowposition, "SZ_PEXCLUSIVE", this.fnMeter(e.newvalue));
        		}
        		else if(e.columnid == "SZ_LIVING")
        		{
        			this.dsList.setColumn(this.dsList.rowposition, "SZ_PLIVING", this.fnMeter(e.newvalue));
        		}
        		else if(e.columnid == "SZ_EARTH")
        		{
        			this.dsList.setColumn(this.dsList.rowposition, "SZ_PEARTH", this.fnMeter(e.newvalue));
        		}
        		else if(e.columnid == "SZ_ETC")
        		{
        			this.dsList.setColumn(this.dsList.rowposition, "SZ_PETC", this.fnMeter(e.newvalue));
        		}
        		else if(e.columnid == "SZ_BASE")
        		{
        			this.dsList.setColumn(this.dsList.rowposition, "SZ_PBASE", this.fnMeter(e.newvalue));
        		}
        		else if(e.columnid == "SZ_SERVICE")
        		{
        			this.dsList.setColumn(this.dsList.rowposition, "SZ_PSERVICE", this.fnMeter(e.newvalue));
        		}
        		else if(e.columnid == "SZ_PARKING")
        		{
        			this.dsList.setColumn(this.dsList.rowposition, "SZ_PPARKING", this.fnMeter(e.newvalue));
        		}
        	}
        };


        this.fnMeter = function(pValue)
        {
        	var rt = nexacro.toNumber(pValue, 0) * 0.3025;
        	var value = nexacro.round(rt, 4);

        	return value;
        }

        this.fnSetReadOnly = function(val)
        {
        	this.divData.form.divDataRight.form.ctxtSZ_EXCLUSIVE.set_readonly(val);
        	this.divData.form.divDataRight.form.ctxtSZ_LIVING.set_readonly(val);
        	this.divData.form.divDataRight.form.ctxtSZ_ETC.set_readonly(val);
        	this.divData.form.divDataRight.form.ctxtSZ_BASE.set_readonly(val);
        	this.divData.form.divDataRight.form.ctxtSZ_EARTH.set_readonly(val);
        	this.divData.form.divDataRight.form.ctxtSZ_SERVICE.set_readonly(val);
        	this.divData.form.divDataRight.form.ctxtSZ_PARKING.set_readonly(val);
        	this.divData.form.divDataRight.form.ctxtNO_SAEDAE.set_readonly(val);
        }

        this.fnExcelUpload = function()
        {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT")))
        	{
        		this.gfnAlert("사업지코드를 먼저 선택하세요.");
        		return false;
        	}
        	this.gfnExcelImport("dsList","sheet1","A2","fnExcelImportCallback","import",this);
        }

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet)
        {
        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	this.dsList.set_enableevent(false);
        	for (var i=0; i<dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		// 양식이 일치하는 경우 copyRow
        		this.dsList.copyRow(nrow, dsOut, i);
        	}
        	this.dsList.set_enableevent(true);

        	this.gfnSetFormStatus(this, "I");
        }

        this.fnOption = function()
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_SIZE = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "NO_SIZE"),0);
        	param.TY_TYPE = this.dsList.getColumn(this.dsList.rowposition, "TY_TYPE");
        	param.YN_TAX = this.dsList.getColumn(this.dsList.rowposition, "YN_TAX");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRA_DLGGUNOPTION", "fnOptionCallback", param);
        }

        this.fnOptionCallback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRA_INSERTSIZEINFOMANAGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
