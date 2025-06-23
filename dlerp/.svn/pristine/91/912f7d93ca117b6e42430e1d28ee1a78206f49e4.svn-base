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
            this.set_titletext("센터일보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,1310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
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


            obj = new Dataset("dsList7", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBWPR_DAYCTM_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DBWPR_DAYKPI_SELECT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DBWPR_DAYMETERIAL_SELECT</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DBWPR_DAYWORK_SELECT</Col></Row><Row><Col id=\"TARGET\">select6</Col><Col id=\"SP\">DBWPR_DAYEXT_SELECT</Col></Row><Row><Col id=\"TARGET\">select7</Col><Col id=\"SP\">DBWPR_DAYASSUR_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBWPR_DAYCTM_SAVE</Col></Row><Row><Col id=\"TARGET\">update2</Col><Col id=\"SP\">DBWPR_DAYKPI_SAVE</Col></Row><Row><Col id=\"TARGET\">update4</Col><Col id=\"SP\">DBWPR_DAYMETERIAL_SAVE</Col></Row><Row><Col id=\"TARGET\">update5</Col><Col id=\"SP\">DBWPR_DAYWORK_SAVE</Col></Row><Row><Col id=\"TARGET\">update6</Col><Col id=\"SP\">DBWPR_DAYEXT_SAVE</Col></Row><Row><Col id=\"TARGET\">update7</Col><Col id=\"SP\">DBWPR_DAYASSUR_SAVE</Col></Row><Row><Col id=\"TARGET\">copy</Col><Col id=\"SP\">DBWPR_DAYWORK_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("작업일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORK","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta16","0","15","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("기준월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","15","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","sta17:-1","15","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("날씨");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","sta18:-1","15","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta20","sta19:-1","15","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("금일C/S투입인원");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21","sta20:-1","15",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_MONTH","sta16:5","20","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_WEATHER","sta18:5","20","290","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_MANAGER","sta20:5","20","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta43","txtCT_MANAGER:6","20","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("명");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","55","500","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("주요현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle01","staTitle00:10","55","350","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("비고");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle02","staTitle01:10","55","400","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("특기사항(업무연락 및 보고사항)");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_CONTENTS","0","staTitle00:5","500","150",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REM","txtDS_CONTENTS:10","staTitle01:5","350","150",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_SPECIALNOTES","txtDS_REM:10","staTitle02:5","400","150",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","txtDS_CONTENTS:10","700","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("주요협력업체 투입현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTitle03:5","700","397",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle04","staTitle03:10","txtDS_REM:10",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("주요자재 구매현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid4","objGrid:10","staTitle04:5",null,"250","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle05","objGrid:10","objGrid4:20",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("미처리 건수 / 처리 현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid5","objGrid:10","staTitle05:5",null,"100","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle06","0","objGrid:10",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("KPI 미처리 목표");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","staTitle06:5","171","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","staTitle06:5","101","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","sta02:-1","staTitle06:5","101","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta00:-1","staTitle06:5","101","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","staTitle06:5","101","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","staTitle06:5","101","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","staTitle06:5","101","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","staTitle06:5","101","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta01:-1","171","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("해당월일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta02:-1","101","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","sta00:-1","101","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","sta03:-1","101","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","sta11:-1","sta04:-1","101","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","sta05:-1","101","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","sta13:-1","sta06:-1","101","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta07:-1","101","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_PERIOD_01","sta01:5","sta02:-25","91","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_PERIOD_02","sta02:5","sta00:-25","91","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_PERIOD_03","sta00:5","sta03:-25","91","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_PERIOD_04","sta03:5","sta04:-25","91","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_PERIOD_05","sta04:5","sta05:-25","91","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_PERIOD_06","sta05:5","sta06:-25","91","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_PERIOD_07","sta06:5","sta07:-25","91","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DT_PERIOD_01","sta08:5","sta02:4","91","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DT_PERIOD_02","sta09:5","sta00:4","91","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DT_PERIOD_03","sta10:5","sta03:4","91","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DT_PERIOD_04","sta11:5","sta04:4","91","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DT_PERIOD_05","sta12:5","sta05:4","91","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DT_PERIOD_06","sta13:5","sta06:4","91","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DT_PERIOD_07","sta14:5","sta07:4","91","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","sta08:0",null,"125","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle07","0","objGrid2:10",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_text("주요 외주작업 진행현황(특공,외주공사)");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid6","0","staTitle07:5",null,"130","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle08","0","objGrid6:10",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_text("보증사 통보업체 작업진행 사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid7","0","staTitle08:5",null,"180","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_WORK","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tclYM_MONTH.form.TextBox","value","dsList5","YM_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtDS_WEATHER","value","dsList5","DS_WEATHER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtCT_MANAGER","value","dsList5","CT_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtDS_CONTENTS","value","dsList5","DS_CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtDS_REM","value","dsList5","DS_REM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtDS_SPECIALNOTES","value","dsList5","DS_SPECIALNOTES");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtDS_PERIOD_01","value","dsList5","DS_PERIOD_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtDS_PERIOD_02","value","dsList5","DS_PERIOD_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtDS_PERIOD_03","value","dsList5","DS_PERIOD_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.txtDS_PERIOD_04","value","dsList5","DS_PERIOD_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.txtDS_PERIOD_05","value","dsList5","DS_PERIOD_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.txtDS_PERIOD_06","value","dsList5","DS_PERIOD_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.txtDS_PERIOD_07","value","dsList5","DS_PERIOD_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.txtDS_DT_PERIOD_01","value","dsList5","DS_DT_PERIOD_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.txtDS_DT_PERIOD_02","value","dsList5","DS_DT_PERIOD_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.txtDS_DT_PERIOD_03","value","dsList5","DS_DT_PERIOD_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.txtDS_DT_PERIOD_04","value","dsList5","DS_DT_PERIOD_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.txtDS_DT_PERIOD_05","value","dsList5","DS_DT_PERIOD_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.txtDS_DT_PERIOD_06","value","dsList5","DS_DT_PERIOD_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.txtDS_DT_PERIOD_07","value","dsList5","DS_DT_PERIOD_07");
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
        this.registerScript("DBW_DAYWORK_NEW.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "DT_WORK", this.gfnGetDate());

        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_DEPT);
        		this.dsSearch.setColumn(0, "DS_SITE", this.AuthClient.DS_DEPT);
        		this.ccfCD_SITE.set_enable(false);
        	}

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_WORK"))) {
        		this.FormBtns.Select.click();
        	}
        };

        this.fnSetButton = function() {
        }

        this.fnSetExtendButton = function() {
        	this.btnCopy = this.gfnFormButtonAdd("Copy", "fnCopy");
        	this.btnIlboPrint = this.gfnFormButtonAdd("IlboPrint", "fnIlboPrint");
        };

        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclDT_WORK = this.divSearch.form.ctclDT_WORK;

        	this.tclYM_MONTH = this.divData.form.tclYM_MONTH;
        	this.txtDS_WEATHER = this.divData.form.txtDS_WEATHER;
        	this.txtCT_MANAGER = this.divData.form.txtCT_MANAGER;
        	this.txtDS_CONTENTS = this.divData.form.txtDS_CONTENTS;
        	this.txtDS_REM = this.divData.form.txtDS_REM;
        	this.txtDS_SPECIALNOTES = this.divData.form.txtDS_SPECIALNOTES;
        	this.txtDS_PERIOD_01 = this.divData.form.txtDS_PERIOD_01;
        	this.txtDS_PERIOD_02 = this.divData.form.txtDS_PERIOD_02;
        	this.txtDS_PERIOD_03 = this.divData.form.txtDS_PERIOD_03;
        	this.txtDS_PERIOD_04 = this.divData.form.txtDS_PERIOD_04;
        	this.txtDS_PERIOD_05 = this.divData.form.txtDS_PERIOD_05;
        	this.txtDS_PERIOD_06 = this.divData.form.txtDS_PERIOD_06;
        	this.txtDS_PERIOD_07 = this.divData.form.txtDS_PERIOD_07;
        	this.txtDS_DT_PERIOD_01 = this.divData.form.txtDS_DT_PERIOD_01;
        	this.txtDS_DT_PERIOD_02 = this.divData.form.txtDS_DT_PERIOD_02;
        	this.txtDS_DT_PERIOD_03 = this.divData.form.txtDS_DT_PERIOD_03;
        	this.txtDS_DT_PERIOD_04 = this.divData.form.txtDS_DT_PERIOD_04;
        	this.txtDS_DT_PERIOD_05 = this.divData.form.txtDS_DT_PERIOD_05;
        	this.txtDS_DT_PERIOD_06 = this.divData.form.txtDS_DT_PERIOD_06;
        	this.txtDS_DT_PERIOD_07 = this.divData.form.txtDS_DT_PERIOD_07;


        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid2 = this.divData.form.objGrid2;
        	this.dxGrid4 = this.divData.form.objGrid4;
        	this.dxGrid5 = this.divData.form.objGrid5;
        	this.dxGrid6 = this.divData.form.objGrid6;
        	this.dxGrid7 = this.divData.form.objGrid7;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBW_DAYWORK");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DB", "DBW_DAYWORK2");
        	this.gfnGridInit(this.dxGrid4, this.dsList4, "DB", "DBW_DAYWORK4");
        	this.gfnGridInit(this.dxGrid5, this.dsList5, "DB", "DBW_DAYWORK5");
        	this.gfnGridInit(this.dxGrid6, this.dsList6, "DB", "DBW_DAYWORK6");
        	this.gfnGridInit(this.dxGrid7, this.dsList7, "DB", "DBW_DAYWORK7");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("DT_WORK", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("TY_WRK", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("DT_WORK", "string");
        	this.dsUpdate.addColumn("NO_NUM", "int");
        	this.dsUpdate.addColumn("CD_CTM", "string");
        	this.dsUpdate.addColumn("CT_TUIP", "int");
        	this.dsUpdate.addColumn("DS_REM2", "string");

        	this.dsUpdate2 = new Dataset();
        	this.dsUpdate2.addColumn("TY_WRK", "string");
        	this.dsUpdate2.addColumn("ID_USER", "string");
        	this.dsUpdate2.addColumn("CD_SITE", "string");
        	this.dsUpdate2.addColumn("DT_WORK", "string");
        	this.dsUpdate2.addColumn("NO_NUM", "int");
        	this.dsUpdate2.addColumn("DS_DIV", "string");
        	this.dsUpdate2.addColumn("CT_DIV2", "bigdecimal");
        	this.dsUpdate2.addColumn("CT_DIV4", "bigdecimal");
        	this.dsUpdate2.addColumn("CT_DIV6", "bigdecimal");
        	this.dsUpdate2.addColumn("CT_DIV8", "bigdecimal");
        	this.dsUpdate2.addColumn("CT_DIV10", "bigdecimal");
        	this.dsUpdate2.addColumn("CT_DIV12", "bigdecimal");
        	this.dsUpdate2.addColumn("CT_DIV15", "bigdecimal");

        	this.dsUpdate4 = new Dataset();
        	this.dsUpdate4.addColumn("TY_WRK", "string");
        	this.dsUpdate4.addColumn("ID_USER", "string");
        	this.dsUpdate4.addColumn("CD_SITE", "string");
        	this.dsUpdate4.addColumn("DT_WORK", "string");
        	this.dsUpdate4.addColumn("NO_NUM", "int");
        	this.dsUpdate4.addColumn("DT_BUY", "string");
        	this.dsUpdate4.addColumn("DS_MATERIAL", "string");
        	this.dsUpdate4.addColumn("DS_UNIT", "string");
        	this.dsUpdate4.addColumn("NO_BUY", "bigdecimal");

        	this.dsUpdate5 = new Dataset();
        	this.dsUpdate5.addColumn("ID_USER", "string");
        	this.dsUpdate5.addColumn("CD_SITE", "string");
        	this.dsUpdate5.addColumn("DT_WORK", "string");
        	this.dsUpdate5.addColumn("YM_MONTH", "string");
        	this.dsUpdate5.addColumn("DS_WEATHER", "string");
        	this.dsUpdate5.addColumn("CT_MANAGER", "int");
        	this.dsUpdate5.addColumn("DS_CONTENTS", "string");
        	this.dsUpdate5.addColumn("DS_SPECIALNOTES", "string");
        	this.dsUpdate5.addColumn("DS_REM", "string");
        	this.dsUpdate5.addColumn("CT_TOTAL_PRE", "bigdecimal");
        	this.dsUpdate5.addColumn("CT_TODAY_JEOBSU", "bigdecimal");
        	this.dsUpdate5.addColumn("CT_TODAY_END", "bigdecimal");
        	this.dsUpdate5.addColumn("CT_NOR", "bigdecimal");
        	this.dsUpdate5.addColumn("CT_JANGI", "bigdecimal");
        	this.dsUpdate5.addColumn("CT_JANGI_OLD", "bigdecimal");
        	this.dsUpdate5.addColumn("DS_PERIOD_01", "string");
        	this.dsUpdate5.addColumn("DS_PERIOD_02", "string");
        	this.dsUpdate5.addColumn("DS_PERIOD_03", "string");
        	this.dsUpdate5.addColumn("DS_PERIOD_04", "string");
        	this.dsUpdate5.addColumn("DS_PERIOD_05", "string");
        	this.dsUpdate5.addColumn("DS_PERIOD_06", "string");
        	this.dsUpdate5.addColumn("DS_PERIOD_07", "string");
        	this.dsUpdate5.addColumn("DS_DT_PERIOD_01", "string");
        	this.dsUpdate5.addColumn("DS_DT_PERIOD_02", "string");
        	this.dsUpdate5.addColumn("DS_DT_PERIOD_03", "string");
        	this.dsUpdate5.addColumn("DS_DT_PERIOD_04", "string");
        	this.dsUpdate5.addColumn("DS_DT_PERIOD_05", "string");
        	this.dsUpdate5.addColumn("DS_DT_PERIOD_06", "string");
        	this.dsUpdate5.addColumn("DS_DT_PERIOD_07", "string");

        	this.dsUpdate6 = new Dataset();
        	this.dsUpdate6.addColumn("TY_WRK", "string");
        	this.dsUpdate6.addColumn("ID_USER", "string");
        	this.dsUpdate6.addColumn("CD_SITE", "string");
        	this.dsUpdate6.addColumn("DT_WORK", "string");
        	this.dsUpdate6.addColumn("NO_NUM", "int");
        	this.dsUpdate6.addColumn("DS_GONGSA", "string");
        	this.dsUpdate6.addColumn("DS_CTM", "string");
        	this.dsUpdate6.addColumn("DS_REM2", "string");

        	this.dsUpdate7 = new Dataset();
        	this.dsUpdate7.addColumn("TY_WRK", "string");
        	this.dsUpdate7.addColumn("ID_USER", "string");
        	this.dsUpdate7.addColumn("CD_SITE", "string");
        	this.dsUpdate7.addColumn("DT_WORK", "string");
        	this.dsUpdate7.addColumn("NO_NUM", "int");
        	this.dsUpdate7.addColumn("DS_CTM", "string");
        	this.dsUpdate7.addColumn("DT_END_ASSUR", "string");
        	this.dsUpdate7.addColumn("DS_ASSUR", "string");
        	this.dsUpdate7.addColumn("DS_REM", "string");

        	this.dsCopy = new Dataset();
        	this.dsCopy.addColumn("ID_USER", "string");
        	this.dsCopy.addColumn("CD_SITE", "string");
        	this.dsCopy.addColumn("DT_WORK", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select2=dsSelect select4=dsSelect select5=dsSelect select6=dsSelect select7=dsSelect";
        	var outData     = "dsList=select0 dsList2=select20 dsList4=select40 dsList5=select50 dsList6=select60 dsList7=select70";
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

        this.fnAdd = function() {
        }

        this.fnDel = function() {
        }

        this.fnSave = function() {if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dxGrid2.updateToDataset();
        	this.dxGrid4.updateToDataset();
        	this.dxGrid5.updateToDataset();
        	this.dxGrid6.updateToDataset();
        	this.dxGrid7.updateToDataset();

        	this.dsUpdate.clearData();
        	this.dsUpdate2.clearData();
        	this.dsUpdate4.clearData();
        	this.dsUpdate5.clearData();
        	this.dsUpdate6.clearData();
        	this.dsUpdate7.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "TY_WRK", flag);
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK"));
        				this.dsUpdate.setColumn(nrow, "NO_NUM", this.dsList.getColumn(i, "NO_NUM"));
        				this.dsUpdate.setColumn(nrow, "CD_CTM", this.dsList.getColumn(i, "CD_CTM"));
        				this.dsUpdate.setColumn(nrow, "CT_TUIP", this.dsList.getColumn(i, "CT_TUIP"));
        				this.dsUpdate.setColumn(nrow, "DS_REM2", "");
        				break;
        		}
        	}

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate2.addRow();
        				this.dsUpdate2.setColumn(nrow, "TY_WRK", flag);
        				this.dsUpdate2.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate2.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsUpdate2.setColumn(nrow, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK"));
        				this.dsUpdate2.setColumn(nrow, "NO_NUM", this.dsList2.getColumn(i, "NO_NUM"));
        				this.dsUpdate2.setColumn(nrow, "DS_DIV", this.dsList2.getColumn(i, "DS_DIV"));
        				this.dsUpdate2.setColumn(nrow, "CT_DIV2", this.dsList2.getColumn(i, "CT_DIV2"));
        				this.dsUpdate2.setColumn(nrow, "CT_DIV4", this.dsList2.getColumn(i, "CT_DIV4"));
        				this.dsUpdate2.setColumn(nrow, "CT_DIV6", this.dsList2.getColumn(i, "CT_DIV6"));
        				this.dsUpdate2.setColumn(nrow, "CT_DIV8", this.dsList2.getColumn(i, "CT_DIV8"));
        				this.dsUpdate2.setColumn(nrow, "CT_DIV10", this.dsList2.getColumn(i, "CT_DIV10"));
        				this.dsUpdate2.setColumn(nrow, "CT_DIV12", this.dsList2.getColumn(i, "CT_DIV12"));
        				this.dsUpdate2.setColumn(nrow, "CT_DIV15", this.dsList2.getColumn(i, "CT_DIV15"));
        				break;
        		}
        	}

        	for (var i = 0; i < this.dsList4.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList4, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate4.addRow();
        				this.dsUpdate4.setColumn(nrow, "TY_WRK", flag);
        				this.dsUpdate4.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate4.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsUpdate4.setColumn(nrow, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK"));
        				this.dsUpdate4.setColumn(nrow, "NO_NUM", this.dsList4.getColumn(i, "NO_NUM"));
        				this.dsUpdate4.setColumn(nrow, "DT_BUY", this.dsList4.getColumn(i, "DT_BUY"));
        				this.dsUpdate4.setColumn(nrow, "DS_MATERIAL", this.dsList4.getColumn(i, "DS_MATERIAL"));
        				this.dsUpdate4.setColumn(nrow, "DS_UNIT", this.dsList4.getColumn(i, "DS_UNIT"));
        				this.dsUpdate4.setColumn(nrow, "NO_BUY", this.dsList4.getColumn(i, "NO_BUY"));
        				break;
        		}
        	}

        	for (var i = 0; i < this.dsList5.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList5, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate5.addRow();
        				this.dsUpdate5.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate5.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsUpdate5.setColumn(nrow, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK"));
        				this.dsUpdate5.setColumn(nrow, "YM_MONTH", this.dsList5.getColumn(i, "YM_MONTH"));
        				this.dsUpdate5.setColumn(nrow, "DS_WEATHER", this.dsList5.getColumn(i, "DS_WEATHER"));
        				this.dsUpdate5.setColumn(nrow, "CT_MANAGER", this.dsList5.getColumn(i, "CT_MANAGER"));
        				this.dsUpdate5.setColumn(nrow, "DS_CONTENTS", this.dsList5.getColumn(i, "DS_CONTENTS"));
        				this.dsUpdate5.setColumn(nrow, "DS_SPECIALNOTES", this.dsList5.getColumn(i, "DS_SPECIALNOTES"));
        				this.dsUpdate5.setColumn(nrow, "DS_REM", this.dsList5.getColumn(i, "DS_REM"));
        				this.dsUpdate5.setColumn(nrow, "CT_TOTAL_PRE", this.dsList5.getColumn(i, "CT_TOTAL_PRE"));
        				this.dsUpdate5.setColumn(nrow, "CT_TODAY_JEOBSU", this.dsList5.getColumn(i, "CT_TODAY_JEOBSU"));
        				this.dsUpdate5.setColumn(nrow, "CT_TODAY_END", this.dsList5.getColumn(i, "CT_TODAY_END"));
        				this.dsUpdate5.setColumn(nrow, "CT_NOR", this.dsList5.getColumn(i, "CT_NOR"));
        				this.dsUpdate5.setColumn(nrow, "CT_JANGI", this.dsList5.getColumn(i, "CT_JANGI"));
        				this.dsUpdate5.setColumn(nrow, "CT_JANGI_OLD", this.dsList5.getColumn(i, "CT_JANGI_OLD"));
        				this.dsUpdate5.setColumn(nrow, "DS_PERIOD_01", this.dsList5.getColumn(i, "DS_PERIOD_01"));
        				this.dsUpdate5.setColumn(nrow, "DS_PERIOD_02", this.dsList5.getColumn(i, "DS_PERIOD_02"));
        				this.dsUpdate5.setColumn(nrow, "DS_PERIOD_03", this.dsList5.getColumn(i, "DS_PERIOD_03"));
        				this.dsUpdate5.setColumn(nrow, "DS_PERIOD_04", this.dsList5.getColumn(i, "DS_PERIOD_04"));
        				this.dsUpdate5.setColumn(nrow, "DS_PERIOD_05", this.dsList5.getColumn(i, "DS_PERIOD_05"));
        				this.dsUpdate5.setColumn(nrow, "DS_PERIOD_06", this.dsList5.getColumn(i, "DS_PERIOD_06"));
        				this.dsUpdate5.setColumn(nrow, "DS_PERIOD_07", this.dsList5.getColumn(i, "DS_PERIOD_07"));
        				this.dsUpdate5.setColumn(nrow, "DS_DT_PERIOD_01", this.dsList5.getColumn(i, "DS_DT_PERIOD_01"));
        				this.dsUpdate5.setColumn(nrow, "DS_DT_PERIOD_02", this.dsList5.getColumn(i, "DS_DT_PERIOD_02"));
        				this.dsUpdate5.setColumn(nrow, "DS_DT_PERIOD_03", this.dsList5.getColumn(i, "DS_DT_PERIOD_03"));
        				this.dsUpdate5.setColumn(nrow, "DS_DT_PERIOD_04", this.dsList5.getColumn(i, "DS_DT_PERIOD_04"));
        				this.dsUpdate5.setColumn(nrow, "DS_DT_PERIOD_05", this.dsList5.getColumn(i, "DS_DT_PERIOD_05"));
        				this.dsUpdate5.setColumn(nrow, "DS_DT_PERIOD_06", this.dsList5.getColumn(i, "DS_DT_PERIOD_06"));
        				this.dsUpdate5.setColumn(nrow, "DS_DT_PERIOD_07", this.dsList5.getColumn(i, "DS_DT_PERIOD_07"));
        				break;
        		}
        	}

        	for (var i = 0; i < this.dsList6.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList6, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate6.addRow();
        				this.dsUpdate6.setColumn(nrow, "TY_WRK", flag);
        				this.dsUpdate6.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate6.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsUpdate6.setColumn(nrow, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK"));
        				this.dsUpdate6.setColumn(nrow, "NO_NUM", this.dsList6.getColumn(i, "NO_NUM"));
        				this.dsUpdate6.setColumn(nrow, "DS_GONGSA", this.dsList6.getColumn(i, "DS_GONGSA"));
        				this.dsUpdate6.setColumn(nrow, "DS_CTM", this.dsList6.getColumn(i, "DS_CTM"));
        				this.dsUpdate6.setColumn(nrow, "DS_REM2", this.dsList6.getColumn(i, "DS_REM2"));
        				break;
        		}
        	}

        	for (var i = 0; i < this.dsList7.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList7, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate7.addRow();
        				this.dsUpdate7.setColumn(nrow, "TY_WRK", flag);
        				this.dsUpdate7.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate7.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsUpdate7.setColumn(nrow, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK"));
        				this.dsUpdate7.setColumn(nrow, "NO_NUM", this.dsList7.getColumn(i, "NO_NUM"));
        				this.dsUpdate7.setColumn(nrow, "DS_CTM", this.dsList7.getColumn(i, "DS_CTM"));
        				this.dsUpdate7.setColumn(nrow, "DT_END_ASSUR", this.dsList7.getColumn(i, "DT_END_ASSUR"));
        				this.dsUpdate7.setColumn(nrow, "DS_ASSUR", this.dsList7.getColumn(i, "DS_ASSUR"));
        				this.dsUpdate7.setColumn(nrow, "DS_REM", this.dsList7.getColumn(i, "DS_REM"));
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0 && this.dsUpdate2.rowcount == 0 && this.dsUpdate4.rowcount == 0
        		&& this.dsUpdate5.rowcount == 0 && this.dsUpdate6.rowcount == 0 && this.dsUpdate7.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate update2=dsUpdate2 update4=dsUpdate4 update5=dsUpdate5 update6=dsUpdate6 update7=dsUpdate7";
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

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {
        	//DBS_MONTH_PRINT
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 필수입니다.", "fnVaidateCallback");
        		validate = false;
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_WORK"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_WORK.setFocus();
        		}
        		this.gfnAlert("작업일자는 필수입니다.", "fnVaidateCallback");
        		validate = false;
        	}
        	return validate;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "copy") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", this.AuthClient.CD_DEPT);
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	switch(id) {
        		case "ccfCD_SITE":
        			if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_WORK"))) {
        				this.FormBtns.Select.click();
        			}
        			break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	if (id == "DBX_DAYCTM") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK"));
        	}
        	return true;
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);

        		if (e.columnid == "DT_WORK") {
        			if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_WORK"))) {
        				this.FormBtns.Select.click();
        			}
        		}
        	}
        };

        this.fnCopy = function() {
        	this.dsCopy.clearData();
        	var nrow = this.dsCopy.addRow();
        	this.dsCopy.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsCopy.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCopy.setColumn(nrow, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK"));

        	if (this.dsCopy.rowcount == 0) return;

        	var strSvcId    = "copy";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "copy=dsCopy";
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

        this.fnIlboPrint = function() {
        	this.gfnAlert("DBW_DAYWORK_NEW_RPTDLG");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DBW_DAYWORK_NEW.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
